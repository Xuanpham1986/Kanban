/*!
 * Sổ Chi Tiêu — ứng dụng quản lý thu chi cá nhân chạy hoàn toàn trên trình duyệt.
 * Không phụ thuộc thư viện ngoài; dữ liệu lưu trong localStorage của thiết bị.
 */
(() => {
  'use strict';

  // ===================== Hằng số =====================
  const STORAGE_KEY = 'sochitieu:v1';
  const SCHEMA_VERSION = 1;
  const MAX_AMOUNT = 1e13; // 10.000 tỷ — chặn số liệu vô lý / tràn hiển thị
  const FALLBACK_CAT = { expense: 'other-exp', income: 'other-inc' };
  const QUICK_AMOUNTS = [20000, 50000, 100000, 200000, 500000, 1000000];

  const DEFAULT_CATEGORIES = [
    { id: 'food', name: 'Ăn uống', icon: '🍜', color: '#ef4444', type: 'expense' },
    { id: 'transport', name: 'Di chuyển', icon: '🛵', color: '#f59e0b', type: 'expense' },
    { id: 'shopping', name: 'Mua sắm', icon: '🛍️', color: '#ec4899', type: 'expense' },
    { id: 'bills', name: 'Hóa đơn', icon: '💡', color: '#6366f1', type: 'expense' },
    { id: 'housing', name: 'Nhà ở', icon: '🏠', color: '#0ea5e9', type: 'expense' },
    { id: 'health', name: 'Sức khỏe', icon: '💊', color: '#10b981', type: 'expense' },
    { id: 'education', name: 'Giáo dục', icon: '📚', color: '#8b5cf6', type: 'expense' },
    { id: 'entertainment', name: 'Giải trí', icon: '🎬', color: '#f97316', type: 'expense' },
    { id: 'other-exp', name: 'Chi khác', icon: '📦', color: '#64748b', type: 'expense' },
    { id: 'salary', name: 'Lương', icon: '💼', color: '#16a34a', type: 'income' },
    { id: 'bonus', name: 'Thưởng', icon: '🎁', color: '#22c55e', type: 'income' },
    { id: 'invest', name: 'Đầu tư', icon: '📈', color: '#14b8a6', type: 'income' },
    { id: 'other-inc', name: 'Thu khác', icon: '💰', color: '#84cc16', type: 'income' },
  ];

  // ===================== Tiện ích =====================
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const ESC_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ESC_MAP[c]);

  const uid = () =>
    (window.crypto && typeof crypto.randomUUID === 'function')
      ? crypto.randomUUID()
      : Date.now().toString(36) + Math.random().toString(36).slice(2, 10);

  const pad = (n) => String(n).padStart(2, '0');
  const toISODate = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const todayISO = () => toISODate(new Date());
  const monthKeyOf = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
  const currentMonth = () => monthKeyOf(new Date());
  const shiftMonth = (key, delta) => {
    const [y, m] = key.split('-').map(Number);
    return monthKeyOf(new Date(y, m - 1 + delta, 1));
  };
  const daysInMonth = (key) => {
    const [y, m] = key.split('-').map(Number);
    return new Date(y, m, 0).getDate();
  };
  const monthLabel = (key) => {
    const [y, m] = key.split('-');
    return `Tháng ${Number(m)}/${y}`;
  };
  const isValidISODate = (s) => {
    if (typeof s !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
    const [y, m, d] = s.split('-').map(Number);
    const dt = new Date(y, m - 1, d);
    return dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d;
  };
  const dateLabel = (iso) => {
    const [y, m, d] = iso.split('-').map(Number);
    const dt = new Date(y, m - 1, d);
    const today = todayISO();
    const yesterday = toISODate(new Date(Date.now() - 864e5));
    const prefix = iso === today ? 'Hôm nay, ' : iso === yesterday ? 'Hôm qua, ' : '';
    const wd = dt.toLocaleDateString('vi-VN', { weekday: 'long' });
    return `${prefix || capitalize(wd) + ', '}${pad(d)}/${pad(m)}/${y}`;
  };
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const nf = new Intl.NumberFormat('vi-VN');
  const fmtMoney = (n) => `${nf.format(Math.round(n))} ₫`;
  const fmtNum = (n) => nf.format(Math.round(n));
  const fmtCompact = (n) => {
    const a = Math.abs(n);
    const r = (x) => String(Math.round(x * 10) / 10).replace('.', ',');
    if (a >= 1e9) return `${r(n / 1e9)} tỷ`;
    if (a >= 1e6) return `${r(n / 1e6)}tr`;
    if (a >= 1e3) return `${r(n / 1e3)}k`;
    return String(Math.round(n));
  };
  const parseAmount = (s) => {
    const digits = String(s ?? '').replace(/\D/g, '');
    return digits ? Number(digits) : 0;
  };
  const isValidAmount = (v) => typeof v === 'number' && Number.isFinite(v) && v >= 0 && v <= MAX_AMOUNT;
  const isHexColor = (c) => typeof c === 'string' && /^#[0-9a-f]{6}$/i.test(c);

  const debounce = (fn, ms) => {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
  };

  // ===================== Lưu trữ & kiểm tra dữ liệu =====================
  function defaultState() {
    return {
      version: SCHEMA_VERSION,
      categories: DEFAULT_CATEGORIES.map((c) => ({ ...c, budget: 0 })),
      transactions: [],
      settings: { theme: 'auto', monthlyBudget: 0 },
    };
  }

  /** Chuẩn hóa mọi dữ liệu đầu vào (localStorage hoặc file import) — không tin dữ liệu ngoài. */
  function sanitizeState(raw) {
    if (!raw || typeof raw !== 'object') throw new Error('Định dạng dữ liệu không hợp lệ');
    if (!Array.isArray(raw.transactions) || !Array.isArray(raw.categories)) {
      throw new Error('Thiếu danh sách giao dịch hoặc danh mục');
    }

    const categories = [];
    const catIds = new Map(); // id -> type
    for (const c of raw.categories) {
      if (!c || typeof c.id !== 'string' || !c.id || catIds.has(c.id)) continue;
      const type = c.type === 'income' ? 'income' : 'expense';
      categories.push({
        id: c.id.slice(0, 64),
        name: String(c.name || 'Không tên').trim().slice(0, 40) || 'Không tên',
        icon: String(c.icon || '📦').slice(0, 8),
        color: isHexColor(c.color) ? c.color : '#64748b',
        type,
        budget: type === 'expense' && isValidAmount(c.budget) ? Math.round(c.budget) : 0,
      });
      catIds.set(c.id, type);
    }
    // Luôn đảm bảo có danh mục dự phòng để gán lại giao dịch mồ côi
    for (const id of Object.values(FALLBACK_CAT)) {
      if (!catIds.has(id)) {
        const d = DEFAULT_CATEGORIES.find((x) => x.id === id);
        categories.push({ ...d, budget: 0 });
        catIds.set(id, d.type);
      }
    }

    const transactions = [];
    const txIds = new Set();
    for (const t of raw.transactions) {
      if (!t || !isValidAmount(t.amount) || t.amount <= 0 || !isValidISODate(t.date)) continue;
      const type = t.type === 'income' ? 'income' : 'expense';
      const categoryId = typeof t.categoryId === 'string' && catIds.get(t.categoryId) === type
        ? t.categoryId
        : FALLBACK_CAT[type];
      let id = typeof t.id === 'string' && t.id ? t.id.slice(0, 64) : uid();
      if (txIds.has(id)) id = uid();
      txIds.add(id);
      transactions.push({
        id,
        type,
        amount: Math.round(t.amount),
        categoryId,
        date: t.date,
        note: String(t.note || '').slice(0, 200),
        createdAt: Number.isFinite(Number(t.createdAt)) ? Number(t.createdAt) : Date.now(),
      });
    }

    const s = raw.settings && typeof raw.settings === 'object' ? raw.settings : {};
    return {
      version: SCHEMA_VERSION,
      categories,
      transactions,
      settings: {
        theme: ['auto', 'light', 'dark'].includes(s.theme) ? s.theme : 'auto',
        monthlyBudget: isValidAmount(s.monthlyBudget) ? Math.round(s.monthlyBudget) : 0,
      },
    };
  }

  const Store = {
    load() {
      let raw = null;
      try { raw = localStorage.getItem(STORAGE_KEY); } catch (e) { console.warn('localStorage không khả dụng', e); }
      if (!raw) return defaultState();
      try {
        return sanitizeState(JSON.parse(raw));
      } catch (e) {
        // Giữ lại bản hỏng để có thể cứu dữ liệu thủ công, thay vì ghi đè mất luôn.
        console.error('Dữ liệu lưu trữ bị hỏng, khởi tạo lại', e);
        try { localStorage.setItem(`${STORAGE_KEY}:corrupt:${Date.now()}`, raw); } catch (_) { /* ignore */ }
        return defaultState();
      }
    },
    save(state) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        return true;
      } catch (e) {
        console.error(e);
        toast('⚠️ Không lưu được dữ liệu (bộ nhớ đầy hoặc bị chặn)');
        return false;
      }
    },
  };

  // ===================== Trạng thái ứng dụng =====================
  let state = Store.load();
  const ui = {
    view: 'dashboard',
    month: currentMonth(),
    filter: { q: '', type: 'all', cat: 'all' },
    editingTxId: null,
    editingCatId: null,
    lastType: 'expense',
    installPrompt: null,
  };

  function commit(message) {
    const ok = Store.save(state);
    render();
    if (ok && message) toast(message);
  }

  // ===================== Truy vấn dữ liệu =====================
  const catMap = () => new Map(state.categories.map((c) => [c.id, c]));
  const UNKNOWN_CAT = { name: 'Không rõ', icon: '❔', color: '#94a3b8' };
  const txOfMonth = (key) => state.transactions.filter((t) => t.date.startsWith(key));
  const sortTx = (list) =>
    list.slice().sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.createdAt - a.createdAt));
  const totals = (list) => list.reduce(
    (acc, t) => { acc[t.type] += t.amount; return acc; },
    { income: 0, expense: 0 },
  );
  const expenseByCategory = (list) => {
    const m = new Map();
    for (const t of list) if (t.type === 'expense') m.set(t.categoryId, (m.get(t.categoryId) || 0) + t.amount);
    return m;
  };

  // ===================== Render chung =====================
  function render() {
    applyTheme();
    $('#monthLabel').textContent = monthLabel(ui.month);
    $$('.tab').forEach((b) => {
      const active = b.dataset.view === ui.view;
      b.classList.toggle('active', active);
      b.setAttribute('aria-current', active ? 'page' : 'false');
    });
    $$('.view').forEach((v) => v.classList.toggle('active', v.id === `view-${ui.view}`));
    $('.fab').hidden = ui.view === 'settings';

    switch (ui.view) {
      case 'dashboard': renderDashboard(); break;
      case 'transactions': renderTransactions(); break;
      case 'stats': renderStats(); break;
      case 'settings': renderSettings(); break;
    }
  }

  function applyTheme() {
    const t = state.settings.theme;
    if (t === 'auto') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = t;
  }

  function txRow(t, cm) {
    const c = cm.get(t.categoryId) || UNKNOWN_CAT;
    const sign = t.type === 'income' ? '+' : '−';
    const sub = t.note ? esc(t.note) : `${t.date.slice(8, 10)}/${t.date.slice(5, 7)}`;
    return `
      <li class="tx" data-action="edit-tx" data-id="${esc(t.id)}" tabindex="0" role="button"
          aria-label="${esc(c.name)} ${sign}${fmtMoney(t.amount)}">
        <span class="tx-icon" style="background:${esc(c.color)}22;color:${esc(c.color)}">${esc(c.icon)}</span>
        <span class="tx-main">
          <span class="tx-cat">${esc(c.name)}</span>
          <span class="tx-note">${sub}</span>
        </span>
        <span class="tx-amt ${t.type}">${sign}${fmtMoney(t.amount)}</span>
      </li>`;
  }

  const emptyState = (emoji, text, action = '') =>
    `<div class="empty"><span class="emoji">${emoji}</span>${text}${action}</div>`;

  // ===================== Tổng quan =====================
  function renderDashboard() {
    const list = txOfMonth(ui.month);
    const { income, expense } = totals(list);
    const balance = income - expense;
    const cm = catMap();
    const now = currentMonth();
    const days = daysInMonth(ui.month);
    const elapsed = ui.month === now ? new Date().getDate() : ui.month < now ? days : 0;
    const remainingDays = days - elapsed + (ui.month === now ? 1 : 0); // tính cả hôm nay

    // --- Ngân sách
    const budget = state.settings.monthlyBudget;
    let budgetHtml;
    if (budget > 0) {
      const pct = (expense / budget) * 100;
      const cls = pct >= 100 ? 'over' : pct >= 80 ? 'warn' : '';
      const left = budget - expense;
      let hint = '';
      if (ui.month === now && left > 0 && remainingDays > 0) {
        hint = `Có thể chi khoảng <b>${fmtMoney(left / remainingDays)}</b>/ngày trong ${remainingDays} ngày còn lại.`;
      } else if (left < 0) {
        hint = `<span class="expense-text">Đã vượt ngân sách ${fmtMoney(-left)}.</span>`;
      }
      budgetHtml = `
        <div class="card">
          <div class="card-head"><h2>Ngân sách tháng</h2><span class="badge ${cls}">${Math.round(pct)}%</span></div>
          <div class="progress ${cls}"><i style="width:${Math.min(pct, 100)}%"></i></div>
          <div class="budget-meta"><span>Đã chi ${fmtMoney(expense)}</span><span>Hạn mức ${fmtMoney(budget)}</span></div>
          ${hint ? `<p class="small" style="margin:10px 0 0">${hint}</p>` : ''}
        </div>`;
    } else {
      budgetHtml = `
        <div class="card">
          <div class="card-head"><h2>Ngân sách tháng</h2>
            <button class="link-btn" data-action="goto" data-view="settings">Thiết lập</button></div>
          <p class="muted small" style="margin:0">Đặt hạn mức chi tiêu để được cảnh báo khi sắp vượt.</p>
        </div>`;
    }

    // --- Chi theo danh mục
    const byCat = [...expenseByCategory(list).entries()].sort((a, b) => b[1] - a[1]);
    let catHtml;
    if (byCat.length) {
      catHtml = `<ul class="breakdown">${byCat.map(([id, amt]) => {
        const c = cm.get(id) || UNKNOWN_CAT;
        const share = expense ? (amt / expense) * 100 : 0;
        let badge = `<span class="badge">${Math.round(share)}%</span>`;
        let bar = '';
        if (c.budget > 0) {
          const p = (amt / c.budget) * 100;
          const cls = p >= 100 ? 'over' : p >= 80 ? 'warn' : '';
          badge = `<span class="badge ${cls}">${Math.round(p)}% hạn mức</span>`;
          bar = `<div class="progress thin ${cls}"><i style="width:${Math.min(p, 100)}%;${cls ? '' : `background:${esc(c.color)}`}"></i></div>
                 <div class="sub">${fmtMoney(amt)} / ${fmtMoney(c.budget)}</div>`;
        } else {
          bar = `<div class="progress thin"><i style="width:${share}%;background:${esc(c.color)}"></i></div>`;
        }
        return `<li>
          <div class="row"><span>${esc(c.icon)}</span><span class="name">${esc(c.name)}</span>${badge}<span class="amt">${fmtMoney(amt)}</span></div>
          ${bar}
        </li>`;
      }).join('')}</ul>`;
    } else {
      catHtml = emptyState('🧾', 'Chưa có khoản chi nào trong tháng này.');
    }

    // --- Giao dịch gần đây
    const recent = sortTx(list).slice(0, 6);
    const recentHtml = recent.length
      ? `<ul class="tx-list">${recent.map((t) => txRow(t, cm)).join('')}</ul>`
      : emptyState('✍️', 'Chưa có giao dịch.<br>', '<button class="btn primary small" style="margin-top:12px" data-action="add-tx">+ Thêm giao dịch đầu tiên</button>');

    $('#view-dashboard').innerHTML = `
      <div class="card hero">
        <div class="label">Số dư ${monthLabel(ui.month).toLowerCase()}</div>
        <div class="balance">${balance < 0 ? '−' : ''}${fmtMoney(Math.abs(balance))}</div>
        <div class="summary">
          <div class="stat"><div class="label">Thu</div><div class="value" title="${fmtMoney(income)}">${fmtMoney(income)}</div></div>
          <div class="stat"><div class="label">Chi</div><div class="value" title="${fmtMoney(expense)}">${fmtMoney(expense)}</div></div>
          <div class="stat"><div class="label">TB/ngày</div><div class="value">${fmtMoney(elapsed ? expense / elapsed : 0)}</div></div>
        </div>
      </div>
      ${budgetHtml}
      <div class="grid-2">
        <div class="card"><h2>Chi theo danh mục</h2>${catHtml}</div>
        <div class="card">
          <div class="card-head"><h2>Gần đây</h2>
            ${recent.length ? '<button class="link-btn" data-action="goto" data-view="transactions">Xem tất cả</button>' : ''}</div>
          ${recentHtml}
        </div>
      </div>`;
  }

  // ===================== Giao dịch =====================
  function renderCategoryFilter() {
    const sel = $('#fCat');
    const type = ui.filter.type;
    const cats = state.categories.filter((c) => type === 'all' || c.type === type);
    if (ui.filter.cat !== 'all' && !cats.some((c) => c.id === ui.filter.cat)) ui.filter.cat = 'all';
    sel.innerHTML = `<option value="all">Mọi danh mục</option>${
      cats.map((c) => `<option value="${esc(c.id)}">${esc(c.icon)} ${esc(c.name)}</option>`).join('')}`;
    sel.value = ui.filter.cat;
  }

  function renderTransactions() {
    renderCategoryFilter();
    $('#fType').value = ui.filter.type;
    if ($('#fSearch').value !== ui.filter.q) $('#fSearch').value = ui.filter.q;

    const cm = catMap();
    const q = ui.filter.q.trim().toLowerCase();
    const list = sortTx(txOfMonth(ui.month)).filter((t) => {
      if (ui.filter.type !== 'all' && t.type !== ui.filter.type) return false;
      if (ui.filter.cat !== 'all' && t.categoryId !== ui.filter.cat) return false;
      if (q) {
        const c = cm.get(t.categoryId);
        const hay = `${t.note} ${c ? c.name : ''} ${t.amount}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    const { income, expense } = totals(list);
    $('#txSummary').innerHTML = list.length
      ? `<span>${list.length} giao dịch</span>
         <span>Thu <b class="income-text">${fmtMoney(income)}</b></span>
         <span>Chi <b class="expense-text">${fmtMoney(expense)}</b></span>`
      : '';

    if (!list.length) {
      const filtered = q || ui.filter.type !== 'all' || ui.filter.cat !== 'all';
      $('#txList').innerHTML = `<div class="card">${filtered
        ? emptyState('🔍', 'Không tìm thấy giao dịch phù hợp.')
        : emptyState('📭', `Không có giao dịch trong ${monthLabel(ui.month).toLowerCase()}.`)}</div>`;
      return;
    }

    const groups = new Map();
    for (const t of list) {
      if (!groups.has(t.date)) groups.set(t.date, []);
      groups.get(t.date).push(t);
    }
    $('#txList').innerHTML = [...groups.entries()].map(([date, items]) => {
      const tt = totals(items);
      const net = tt.income - tt.expense;
      return `<div class="card day-group">
        <div class="day-head"><b>${esc(dateLabel(date))}</b>
          <span class="${net >= 0 ? 'income-text' : ''}">${net >= 0 ? '+' : '−'}${fmtMoney(Math.abs(net))}</span></div>
        <ul class="tx-list">${items.map((t) => txRow(t, cm)).join('')}</ul>
      </div>`;
    }).join('');
  }

  // ===================== Thống kê =====================
  function renderStats() {
    const list = txOfMonth(ui.month);
    const { income, expense } = totals(list);
    const cm = catMap();

    // Donut
    const items = [...expenseByCategory(list).entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([id, value]) => {
        const c = cm.get(id) || UNKNOWN_CAT;
        return { label: `${c.icon} ${c.name}`, value, color: c.color };
      });
    Charts.donut($('#donutChart'), items, expense);
    $('#donutLegend').innerHTML = items.map((it) => `
      <li><i class="dot" style="background:${esc(it.color)}"></i>
        <span class="name">${esc(it.label)}</span>
        <span class="val">${fmtMoney(it.value)}</span>
        <span class="pct">${((it.value / expense) * 100).toFixed(1).replace('.', ',')}%</span></li>`).join('');

    // 6 tháng
    const months = [];
    for (let i = 5; i >= 0; i--) {
      const key = shiftMonth(ui.month, -i);
      months.push({ key, label: `T${Number(key.slice(5))}`, ...totals(txOfMonth(key)) });
    }
    Charts.bars($('#barChart'), months);

    // Theo ngày
    const days = daysInMonth(ui.month);
    const daily = new Array(days).fill(0);
    for (const t of list) if (t.type === 'expense') daily[Number(t.date.slice(8, 10)) - 1] += t.amount;
    Charts.daily($('#dailyChart'), daily, ui.month === currentMonth() ? new Date().getDate() : 0);

    // Chỉ số
    const expenses = list.filter((t) => t.type === 'expense');
    const biggest = expenses.reduce((m, t) => (t.amount > (m ? m.amount : 0) ? t : m), null);
    const savingRate = income > 0 ? ((income - expense) / income) * 100 : null;
    // Tháng hiện tại chưa hết: so với cùng kỳ (cùng số ngày) của tháng trước cho công bằng.
    const isCurrent = ui.month === currentMonth();
    const cutoff = isCurrent ? new Date().getDate() : 31;
    const prev = totals(txOfMonth(shiftMonth(ui.month, -1)).filter((t) => Number(t.date.slice(8, 10)) <= cutoff));
    const change = prev.expense > 0 ? ((expense - prev.expense) / prev.expense) * 100 : null;
    const maxDay = Math.max(...daily);
    const maxDayIdx = daily.indexOf(maxDay);

    const metric = (label, value, cls = '') =>
      `<div class="card"><div class="label">${label}</div><div class="value ${cls}">${value}</div></div>`;
    $('#statsMetrics').innerHTML = [
      metric('Tỷ lệ tiết kiệm', savingRate === null ? '—' : `${savingRate.toFixed(1).replace('.', ',')}%`,
        savingRate === null ? '' : savingRate >= 0 ? 'income-text' : 'expense-text'),
      metric(isCurrent ? 'So với cùng kỳ tháng trước' : 'So với tháng trước', change === null ? '—' : `${change > 0 ? '▲' : '▼'} ${Math.abs(change).toFixed(1).replace('.', ',')}%`,
        change === null ? '' : change > 0 ? 'expense-text' : 'income-text'),
      metric('Khoản chi lớn nhất', biggest
        ? `${fmtMoney(biggest.amount)}<div class="label">${esc((cm.get(biggest.categoryId) || UNKNOWN_CAT).name)}${biggest.note ? ' · ' + esc(biggest.note) : ''}</div>`
        : '—'),
      metric('Ngày chi nhiều nhất', maxDay > 0
        ? `${fmtMoney(maxDay)}<div class="label">Ngày ${pad(maxDayIdx + 1)}/${ui.month.slice(5)}</div>`
        : '—'),
    ].join('');
  }

  // ===================== Biểu đồ (Canvas, không thư viện) =====================
  const Charts = {
    setup(canvas) {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth || canvas.parentElement.clientWidth;
      const h = Number(canvas.dataset.height) || 220;
      canvas.style.height = `${h}px`;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      const ctx = canvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const cs = getComputedStyle(document.documentElement);
      const v = (name) => cs.getPropertyValue(name).trim();
      const font = getComputedStyle(document.body).fontFamily;
      return {
        ctx, w, h, font,
        colors: { text: v('--text'), muted: v('--muted'), border: v('--border'), surface: v('--surface'),
          income: v('--income'), expense: v('--expense'), primary: v('--primary') },
      };
    },

    donut(canvas, items, total) {
      const { ctx, w, h, colors, font } = this.setup(canvas);
      const cx = w / 2, cy = h / 2;
      const r = Math.min(w, h) / 2 - 6;
      const inner = r * 0.64;
      if (!total) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.arc(cx, cy, inner, Math.PI * 2, 0, true);
        ctx.fillStyle = colors.border;
        ctx.fill();
        ctx.fillStyle = colors.muted;
        ctx.font = `14px ${font}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Chưa có dữ liệu', cx, cy);
        return;
      }
      let a = -Math.PI / 2;
      for (const it of items) {
        const ang = (it.value / total) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(cx, cy, r, a, a + ang);
        ctx.arc(cx, cy, inner, a + ang, a, true);
        ctx.closePath();
        ctx.fillStyle = it.color;
        ctx.fill();
        if (items.length > 1) { ctx.strokeStyle = colors.surface; ctx.lineWidth = 2; ctx.stroke(); }
        a += ang;
      }
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = colors.muted;
      ctx.font = `13px ${font}`;
      ctx.fillText('Tổng chi', cx, cy - 12);
      ctx.fillStyle = colors.text;
      ctx.font = `700 ${r > 90 ? 20 : 16}px ${font}`;
      ctx.fillText(fmtCompact(total), cx, cy + 10);
    },

    /** Trục Y "đẹp": làm tròn giá trị lớn nhất lên 1/2/2.5/5 × 10^n */
    niceMax(v) {
      if (v <= 0) return 1;
      const exp = Math.pow(10, Math.floor(Math.log10(v)));
      const f = v / exp;
      const nice = f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10;
      return nice * exp;
    },

    axes(ctx, { left, top, right, bottom, max, colors, font, w, empty }) {
      ctx.font = `11px ${font}`;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      for (let i = 0; i <= 4; i++) {
        const val = (max / 4) * i;
        const y = bottom - ((bottom - top) * i) / 4;
        ctx.strokeStyle = colors.border;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(left, Math.round(y) + 0.5);
        ctx.lineTo(w - right, Math.round(y) + 0.5);
        ctx.stroke();
        if (empty) continue; // không có dữ liệu: chỉ vẽ lưới, tránh nhãn vô nghĩa
        ctx.fillStyle = colors.muted;
        ctx.fillText(fmtCompact(val), left - 6, y);
      }
      if (empty) {
        ctx.fillStyle = colors.muted;
        ctx.textAlign = 'center';
        ctx.font = `13px ${font}`;
        ctx.fillText('Chưa có dữ liệu', (left + w - right) / 2, (top + bottom) / 2);
      }
    },

    bars(canvas, months) {
      const { ctx, w, h, colors, font } = this.setup(canvas);
      const left = 44, right = 8, top = 10, bottom = h - 24;
      const peak = Math.max(...months.flatMap((m) => [m.income, m.expense]));
      const max = this.niceMax(peak);
      this.axes(ctx, { left, top, right, bottom, max, colors, font, w, empty: peak <= 0 });
      const slot = (w - left - right) / months.length;
      const bw = Math.min(18, slot * 0.3);
      months.forEach((m, i) => {
        const x = left + slot * i + slot / 2;
        [[m.income, colors.income, -bw - 1], [m.expense, colors.expense, 1]].forEach(([val, color, off]) => {
          const bh = ((bottom - top) * val) / max;
          if (bh <= 0) return;
          ctx.fillStyle = color;
          roundRect(ctx, x + off, bottom - bh, bw, bh, Math.min(4, bh / 2));
          ctx.fill();
        });
        ctx.fillStyle = colors.muted;
        ctx.font = `12px ${font}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(m.label, x, bottom + 6);
      });
    },

    daily(canvas, values, todayIdx) {
      const { ctx, w, h, colors, font } = this.setup(canvas);
      const left = 44, right = 8, top = 10, bottom = h - 22;
      const peak = Math.max(...values);
      const max = this.niceMax(peak);
      this.axes(ctx, { left, top, right, bottom, max, colors, font, w, empty: peak <= 0 });
      const slot = (w - left - right) / values.length;
      const bw = Math.max(2, slot * 0.6);
      values.forEach((val, i) => {
        const x = left + slot * i + (slot - bw) / 2;
        const bh = ((bottom - top) * val) / max;
        if (bh > 0) {
          ctx.fillStyle = i + 1 === todayIdx ? colors.expense : colors.primary;
          ctx.globalAlpha = i + 1 === todayIdx ? 1 : 0.8;
          roundRect(ctx, x, bottom - bh, bw, bh, Math.min(3, bw / 2, bh / 2));
          ctx.fill();
          ctx.globalAlpha = 1;
        }
        const day = i + 1;
        if (day === 1 || day % 5 === 0) {
          ctx.fillStyle = colors.muted;
          ctx.font = `11px ${font}`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText(String(day), x + bw / 2, bottom + 6);
        }
      });
    },
  };

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h);
    ctx.lineTo(x, y + h);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  // ===================== Cài đặt =====================
  function renderSettings() {
    $('#sTheme').value = state.settings.theme;
    const sb = $('#sBudget');
    if (document.activeElement !== sb) sb.value = state.settings.monthlyBudget ? fmtNum(state.settings.monthlyBudget) : '';

    const counts = new Map();
    for (const t of state.transactions) counts.set(t.categoryId, (counts.get(t.categoryId) || 0) + 1);
    const row = (c) => `
      <li>
        <span class="tx-icon" style="background:${esc(c.color)}22;color:${esc(c.color)}">${esc(c.icon)}</span>
        <span class="name">${esc(c.name)}
          <small>${counts.get(c.id) || 0} giao dịch${c.budget ? ` · hạn mức ${fmtMoney(c.budget)}/tháng` : ''}</small></span>
        <button class="btn small ghost" data-action="edit-cat" data-id="${esc(c.id)}">Sửa</button>
      </li>`;
    $('#catListExpense').innerHTML = state.categories.filter((c) => c.type === 'expense').map(row).join('');
    $('#catListIncome').innerHTML = state.categories.filter((c) => c.type === 'income').map(row).join('');

    const bytes = new Blob([JSON.stringify(state)]).size;
    $('#storageInfo').textContent =
      `${state.transactions.length} giao dịch · ${state.categories.length} danh mục · ${(bytes / 1024).toFixed(1)} KB`;
    $('#installBtn').hidden = !ui.installPrompt;
  }

  // ===================== Hộp thoại giao dịch =====================
  const txDialog = $('#txDialog');
  const txForm = $('#txForm');

  function fillCategorySelect(type, selected) {
    const sel = txForm.category;
    const cats = state.categories.filter((c) => c.type === type);
    sel.innerHTML = cats.map((c) => `<option value="${esc(c.id)}">${esc(c.icon)} ${esc(c.name)}</option>`).join('');
    sel.value = cats.some((c) => c.id === selected) ? selected : (cats[0] ? cats[0].id : '');
  }

  function openTxDialog(tx) {
    ui.editingTxId = tx ? tx.id : null;
    const type = tx ? tx.type : ui.lastType;
    $('#txDialogTitle').textContent = tx ? 'Sửa giao dịch' : 'Thêm giao dịch';
    txForm.querySelector(`input[name="type"][value="${type}"]`).checked = true;
    txForm.amount.value = tx ? fmtNum(tx.amount) : '';
    fillCategorySelect(type, tx ? tx.categoryId : null);
    txForm.date.value = tx ? tx.date : (ui.month === currentMonth() ? todayISO() : `${ui.month}-01`);
    txForm.note.value = tx ? tx.note : '';
    $('#txError').textContent = '';
    $('#txDelete').hidden = !tx;
    $('#quickAmounts').innerHTML = QUICK_AMOUNTS
      .map((v) => `<button type="button" data-action="quick-amount" data-value="${v}">${fmtCompact(v)}</button>`).join('');
    txDialog.showModal();
    if (!tx) setTimeout(() => txForm.amount.focus(), 30);
  }

  txForm.addEventListener('change', (e) => {
    if (e.target.name === 'type') fillCategorySelect(e.target.value, txForm.category.value);
  });

  txForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = txForm.querySelector('input[name="type"]:checked').value === 'income' ? 'income' : 'expense';
    const amount = parseAmount(txForm.amount.value);
    const categoryId = txForm.category.value;
    const date = txForm.date.value;
    const note = txForm.note.value.trim().slice(0, 200);
    const err = $('#txError');

    if (!amount) { err.textContent = 'Vui lòng nhập số tiền lớn hơn 0.'; txForm.amount.focus(); return; }
    if (amount > MAX_AMOUNT) { err.textContent = 'Số tiền quá lớn.'; txForm.amount.focus(); return; }
    const cat = state.categories.find((c) => c.id === categoryId);
    if (!cat || cat.type !== type) { err.textContent = 'Vui lòng chọn danh mục.'; return; }
    if (!isValidISODate(date)) { err.textContent = 'Ngày không hợp lệ.'; txForm.date.focus(); return; }

    if (ui.editingTxId) {
      const t = state.transactions.find((x) => x.id === ui.editingTxId);
      if (t) Object.assign(t, { type, amount, categoryId, date, note });
    } else {
      state.transactions.push({ id: uid(), type, amount, categoryId, date, note, createdAt: Date.now() });
    }
    ui.lastType = type;
    const msg = ui.editingTxId ? 'Đã cập nhật giao dịch' : `Đã thêm ${type === 'income' ? 'khoản thu' : 'khoản chi'} ${fmtMoney(amount)}`;
    // Nhảy tới tháng của giao dịch để người dùng thấy ngay kết quả
    ui.month = date.slice(0, 7);
    txDialog.close();
    commit(msg);
  });

  // Định dạng số tiền ngay khi gõ: 1500000 -> 1.500.000
  function bindMoneyInput(input) {
    input.addEventListener('input', () => {
      const n = parseAmount(input.value);
      input.value = n ? fmtNum(Math.min(n, MAX_AMOUNT)) : '';
    });
  }
  bindMoneyInput(txForm.amount);

  // ===================== Hộp thoại danh mục =====================
  const catDialog = $('#catDialog');
  const catForm = $('#catForm');

  function openCatDialog(cat, type) {
    ui.editingCatId = cat ? cat.id : null;
    catForm.dataset.type = cat ? cat.type : type;
    const isExpense = catForm.dataset.type === 'expense';
    $('#catDialogTitle').textContent = cat
      ? 'Sửa danh mục'
      : `Thêm danh mục ${isExpense ? 'chi' : 'thu'}`;
    catForm.name.value = cat ? cat.name : '';
    catForm.icon.value = cat ? cat.icon : (isExpense ? '🏷️' : '💵');
    catForm.color.value = cat ? cat.color : '#0f766e';
    catForm.budget.value = cat && cat.budget ? fmtNum(cat.budget) : '';
    $('#catBudgetRow').hidden = !isExpense;
    $('#catError').textContent = '';
    $('#catDelete').hidden = !cat || Object.values(FALLBACK_CAT).includes(cat.id);
    catDialog.showModal();
    setTimeout(() => catForm.name.focus(), 30);
  }

  bindMoneyInput(catForm.budget);

  catForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = catForm.name.value.trim().slice(0, 40);
    const icon = (catForm.icon.value.trim() || '🏷️').slice(0, 8);
    const color = isHexColor(catForm.color.value) ? catForm.color.value : '#64748b';
    const type = catForm.dataset.type === 'income' ? 'income' : 'expense';
    const budget = type === 'expense' ? Math.min(parseAmount(catForm.budget.value), MAX_AMOUNT) : 0;
    if (!name) { $('#catError').textContent = 'Vui lòng nhập tên danh mục.'; catForm.name.focus(); return; }
    const dup = state.categories.some((c) =>
      c.type === type && c.id !== ui.editingCatId && c.name.toLowerCase() === name.toLowerCase());
    if (dup) { $('#catError').textContent = 'Tên danh mục đã tồn tại.'; return; }

    if (ui.editingCatId) {
      const c = state.categories.find((x) => x.id === ui.editingCatId);
      if (c) Object.assign(c, { name, icon, color, budget });
    } else {
      state.categories.push({ id: uid(), name, icon, color, type, budget });
    }
    catDialog.close();
    commit(ui.editingCatId ? 'Đã cập nhật danh mục' : 'Đã thêm danh mục');
  });

  async function deleteCategory(id) {
    const c = state.categories.find((x) => x.id === id);
    if (!c || Object.values(FALLBACK_CAT).includes(id)) return;
    const fallback = state.categories.find((x) => x.id === FALLBACK_CAT[c.type]);
    const n = state.transactions.filter((t) => t.categoryId === id).length;
    const msg = n
      ? `Xóa danh mục "${c.name}"?\n${n} giao dịch sẽ được chuyển sang "${fallback.name}".`
      : `Xóa danh mục "${c.name}"?`;
    if (!(await ask(msg, { ok: 'Xóa danh mục' }))) return;
    state.transactions.forEach((t) => { if (t.categoryId === id) t.categoryId = fallback.id; });
    state.categories = state.categories.filter((x) => x.id !== id);
    if (ui.filter.cat === id) ui.filter.cat = 'all';
    catDialog.close();
    commit('Đã xóa danh mục');
  }

  // ===================== Nhập / xuất dữ liệu =====================
  function download(filename, content, mime) {
    const blob = content instanceof Blob ? content : new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportJSON() {
    const payload = { app: 'sochitieu', exportedAt: new Date().toISOString(), ...state };
    download(`so-chi-tieu-${todayISO()}.json`, JSON.stringify(payload, null, 2), 'application/json');
    toast('Đã tải file sao lưu');
  }

  /** CSV có BOM để Excel đọc đúng tiếng Việt; chặn CSV/formula injection. */
  function exportCSV() {
    const cm = catMap();
    const cell = (v) => {
      let s = String(v ?? '');
      if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
      return /[",\n\r;]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const rows = [['Ngày', 'Loại', 'Danh mục', 'Số tiền', 'Ghi chú']];
    for (const t of sortTx(state.transactions)) {
      rows.push([t.date, t.type === 'income' ? 'Thu' : 'Chi', (cm.get(t.categoryId) || UNKNOWN_CAT).name,
        t.type === 'income' ? t.amount : -t.amount, t.note]);
    }
    const csv = '﻿' + rows.map((r) => r.map((v, i) => (i === 3 ? String(v) : cell(v))).join(',')).join('\r\n');
    download(`so-chi-tieu-${todayISO()}.csv`, csv, 'text/csv;charset=utf-8');
    toast('Đã xuất file CSV');
  }

  async function importJSON(file) {
    if (!file) return;
    if (file.size > 20 * 1024 * 1024) { toast('File quá lớn (tối đa 20MB)'); return; }
    try {
      const data = sanitizeState(JSON.parse(await file.text()));
      if (!(await ask(`Khôi phục ${data.transactions.length} giao dịch và ${data.categories.length} danh mục?\nDữ liệu hiện tại sẽ bị thay thế.`, { ok: 'Khôi phục' }))) return;
      state = data;
      commit('Đã khôi phục dữ liệu');
    } catch (e) {
      console.error(e);
      toast(`❌ Không đọc được file: ${e.message}`);
    }
  }

  async function generateSampleData() {
    if (state.transactions.length && !(await ask('Thêm dữ liệu mẫu vào dữ liệu hiện có?', { ok: 'Thêm', danger: false }))) return;
    const rand = (a, b) => Math.round((a + Math.random() * (b - a)) / 1000) * 1000;
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const has = (id) => state.categories.some((c) => c.id === id);
    const cat = (id, type) => (has(id) ? id : FALLBACK_CAT[type]);
    const templates = [
      ['food', 25000, 120000, ['Bún bò', 'Cơm trưa', 'Cà phê', 'Phở', 'Trà sữa', 'Ăn tối gia đình']],
      ['transport', 15000, 80000, ['Grab', 'Đổ xăng', 'Gửi xe', 'Be bike']],
      ['shopping', 100000, 900000, ['Quần áo', 'Shopee', 'Đồ gia dụng', 'Siêu thị']],
      ['entertainment', 80000, 400000, ['Xem phim', 'Karaoke', 'Netflix', 'Cafe cuối tuần']],
      ['health', 50000, 500000, ['Thuốc', 'Khám răng', 'Gym']],
    ];
    const now = new Date();
    const added = [];
    for (let m = 2; m >= 0; m--) {
      const first = new Date(now.getFullYear(), now.getMonth() - m, 1);
      const key = monthKeyOf(first);
      const lastDay = m === 0 ? now.getDate() : daysInMonth(key);
      const d = (day) => `${key}-${pad(Math.min(day, lastDay))}`;
      added.push({ type: 'income', categoryId: cat('salary', 'income'), amount: 18000000, date: d(5), note: 'Lương tháng' });
      added.push({ type: 'expense', categoryId: cat('housing', 'expense'), amount: 5500000, date: d(1), note: 'Tiền nhà' });
      if (lastDay >= 10) added.push({ type: 'expense', categoryId: cat('bills', 'expense'), amount: rand(600000, 1200000), date: d(10), note: 'Điện, nước, internet' });
      if (m === 1) added.push({ type: 'income', categoryId: cat('bonus', 'income'), amount: 3000000, date: d(20), note: 'Thưởng dự án' });
      for (let day = 1; day <= lastDay; day++) {
        const n = Math.random() < 0.3 ? 1 : 2;
        for (let i = 0; i < n; i++) {
          const [id, a, b, notes] = Math.random() < 0.55 ? templates[0] : pick(templates);
          added.push({ type: 'expense', categoryId: cat(id, 'expense'), amount: rand(a, b), date: d(day), note: pick(notes) });
        }
      }
    }
    const ts = Date.now();
    added.forEach((t, i) => state.transactions.push({ id: uid(), createdAt: ts + i, ...t }));
    if (!state.settings.monthlyBudget) state.settings.monthlyBudget = 12000000;
    commit(`Đã tạo ${added.length} giao dịch mẫu`);
  }

  async function resetData() {
    if (!(await ask('Xóa TOÀN BỘ giao dịch, danh mục và cài đặt?\nThao tác này không thể hoàn tác. Nên sao lưu trước khi xóa.', { ok: 'Xóa toàn bộ' }))) return;
    state = defaultState();
    ui.filter = { q: '', type: 'all', cat: 'all' };
    commit('Đã xóa toàn bộ dữ liệu');
  }

  // ===================== Hộp xác nhận =====================
  // Dùng <dialog> riêng thay cho window.confirm(): đẹp hơn, nhất quán giữa các trình duyệt
  // và vẫn hoạt động trong môi trường nhúng (iframe sandbox chặn confirm()).
  const confirmDialog = $('#confirmDialog');
  function ask(message, { ok = 'Đồng ý', danger = true } = {}) {
    $('#confirmMsg').textContent = message;
    const okBtn = $('#confirmOk');
    okBtn.textContent = ok;
    okBtn.classList.toggle('danger-fill', danger);
    confirmDialog.returnValue = '';
    confirmDialog.showModal();
    okBtn.focus();
    return new Promise((resolve) => {
      confirmDialog.addEventListener('close', () => resolve(confirmDialog.returnValue === 'ok'), { once: true });
    });
  }

  // ===================== Toast =====================
  let toastTimer;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  // ===================== Sự kiện =====================
  const actions = {
    'prev-month': () => { ui.month = shiftMonth(ui.month, -1); render(); },
    'next-month': () => { ui.month = shiftMonth(ui.month, 1); render(); },
    'this-month': () => { ui.month = currentMonth(); render(); },
    goto: (el) => { ui.view = el.dataset.view; render(); window.scrollTo(0, 0); },
    'add-tx': () => openTxDialog(null),
    'edit-tx': (el) => {
      const t = state.transactions.find((x) => x.id === el.dataset.id);
      if (t) openTxDialog(t);
    },
    'delete-tx': async () => {
      if (!ui.editingTxId || !(await ask('Xóa giao dịch này?', { ok: 'Xóa' }))) return;
      state.transactions = state.transactions.filter((t) => t.id !== ui.editingTxId);
      txDialog.close();
      commit('Đã xóa giao dịch');
    },
    'quick-amount': (el) => {
      txForm.amount.value = fmtNum(Number(el.dataset.value));
      txForm.amount.focus();
    },
    'close-dialog': (el) => el.closest('dialog').close(),
    'add-cat': (el) => openCatDialog(null, el.dataset.type),
    'edit-cat': (el) => {
      const c = state.categories.find((x) => x.id === el.dataset.id);
      if (c) openCatDialog(c);
    },
    'delete-cat': () => deleteCategory(ui.editingCatId),
    'export-json': exportJSON,
    'export-csv': exportCSV,
    'import-json': () => $('#importFile').click(),
    'sample-data': generateSampleData,
    'reset-data': resetData,
    install: async () => {
      if (!ui.installPrompt) return;
      ui.installPrompt.prompt();
      await ui.installPrompt.userChoice.catch(() => null);
      ui.installPrompt = null;
      render();
    },
  };

  document.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab[data-view]');
    if (tab) { actions.goto(tab); return; }
    const el = e.target.closest('[data-action]');
    if (el && actions[el.dataset.action]) actions[el.dataset.action](el, e);
  });

  // Bàn phím: Enter/Space trên dòng giao dịch, phím N để thêm nhanh, ←/→ đổi tháng
  document.addEventListener('keydown', (e) => {
    const typing = /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName) || e.target.isContentEditable;
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.tx[data-action]')) {
      e.preventDefault();
      actions['edit-tx'](e.target);
      return;
    }
    if (typing || document.querySelector('dialog[open]') || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === 'n' || e.key === 'N') { e.preventDefault(); openTxDialog(null); }
    else if (e.key === 'ArrowLeft') actions['prev-month']();
    else if (e.key === 'ArrowRight') actions['next-month']();
  });

  // Bấm ra ngoài hộp thoại để đóng
  [txDialog, catDialog, confirmDialog].forEach((d) => d.addEventListener('click', (e) => { if (e.target === d) d.close(); }));

  $('#fSearch').addEventListener('input', debounce((e) => { ui.filter.q = e.target.value; renderTransactions(); }, 150));
  $('#fType').addEventListener('change', (e) => { ui.filter.type = e.target.value; renderTransactions(); });
  $('#fCat').addEventListener('change', (e) => { ui.filter.cat = e.target.value; renderTransactions(); });

  $('#sTheme').addEventListener('change', (e) => { state.settings.theme = e.target.value; commit(); });
  const sBudget = $('#sBudget');
  bindMoneyInput(sBudget);
  sBudget.addEventListener('change', () => {
    state.settings.monthlyBudget = Math.min(parseAmount(sBudget.value), MAX_AMOUNT);
    commit('Đã lưu ngân sách');
  });

  $('#importFile').addEventListener('change', (e) => {
    importJSON(e.target.files[0]);
    e.target.value = '';
  });

  // Đồng bộ khi mở app ở nhiều tab
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) { state = Store.load(); render(); }
  });

  // Vẽ lại biểu đồ khi đổi kích thước / đổi theme hệ thống
  window.addEventListener('resize', debounce(() => { if (ui.view === 'stats') renderStats(); }, 150));
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', () => {
    if (ui.view === 'stats') renderStats();
  });

  // Khi quay lại app sau nửa đêm/tháng mới, cập nhật "hôm nay"
  document.addEventListener('visibilitychange', () => { if (!document.hidden) render(); });

  // ===================== PWA =====================
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    ui.installPrompt = e;
    if (ui.view === 'settings') renderSettings();
  });
  window.addEventListener('appinstalled', () => { ui.installPrompt = null; toast('Đã cài đặt ứng dụng'); });

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch((err) => console.warn('SW đăng ký thất bại', err));
    });
  }
  // Xin trình duyệt giữ dữ liệu lâu dài (tránh bị tự xóa khi thiếu dung lượng)
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});

  render();

  // Lối tắt từ biểu tượng app (manifest shortcuts): ./?action=add
  if (new URLSearchParams(location.search).get('action') === 'add') {
    history.replaceState(null, '', location.pathname);
    openTxDialog(null);
  }
})();
