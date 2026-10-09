/* Port Pro Academy — single-page app, không phụ thuộc thư viện ngoài.
   Nội dung nằm trong js/data/*.js (window.PA_DATA). Tiến độ lưu trong localStorage. */
(function () {
  'use strict';

  var D = window.PA_DATA || { modules: [], glossary: [] };
  var MODULES = D.modules.slice().sort(function (a, b) { return a.order - b.order; });
  var GLOSSARY = D.glossary || [];
  var app = document.getElementById('app');

  // ---------- Storage (an toàn khi trình duyệt chặn localStorage) ----------
  var store = {
    get: function (k, def) {
      try { var v = localStorage.getItem('pa.' + k); return v ? JSON.parse(v) : def; } catch (e) { return def; }
    },
    set: function (k, v) { try { localStorage.setItem('pa.' + k, JSON.stringify(v)); } catch (e) { /* bỏ qua */ } }
  };
  var P = store.get('progress', null) || {};
  ['done', 'quiz', 'checks', 'notes', 'cards', 'days'].forEach(function (k) { if (!P[k]) P[k] = k === 'days' ? [] : {}; });
  function save() { store.set('progress', P); }
  function today() { var d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function markActive() { var t = today(); if (P.days.indexOf(t) < 0) { P.days.push(t); if (P.days.length > 400) P.days.shift(); } save(); }
  function streak() {
    var set = {}; P.days.forEach(function (d) { set[d] = 1; });
    var n = 0, d = new Date();
    if (!set[today()]) d.setDate(d.getDate() - 1); // chưa học hôm nay vẫn giữ chuỗi của hôm qua
    for (;;) {
      var k = d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
      if (!set[k]) break; n++; d.setDate(d.getDate() - 1);
    }
    return n;
  }

  // ---------- Helpers ----------
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function findModule(id) { for (var i = 0; i < MODULES.length; i++) if (MODULES[i].id === id) return MODULES[i]; return null; }
  function lessonKey(m, l) { return m.id + '/' + l.id; }
  function modulePct(m) {
    var done = m.lessons.filter(function (l) { return P.done[lessonKey(m, l)]; }).length;
    return m.lessons.length ? Math.round(done * 100 / m.lessons.length) : 0;
  }
  function allLessons() {
    var out = []; MODULES.forEach(function (m) { m.lessons.forEach(function (l) { out.push({ m: m, l: l }); }); }); return out;
  }
  function stripHtml(h) { var d = document.createElement('div'); d.innerHTML = h; return (d.textContent || '').replace(/\s+/g, ' ').trim(); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function fmt(n, d) { if (!isFinite(n)) return '—'; return Number(n).toLocaleString('vi-VN', { maximumFractionDigits: d == null ? 2 : d }); }
  function speak(text) {
    if (!('speechSynthesis' in window)) { alert('Trình duyệt không hỗ trợ đọc phát âm.'); return; }
    var u = new SpeechSynthesisUtterance(text); u.lang = 'en-US'; u.rate = 0.9;
    window.speechSynthesis.cancel(); window.speechSynthesis.speak(u);
  }
  function setTitle(t) { document.title = t ? t + ' · Port Pro Academy' : 'Port Pro Academy'; }

  // ---------- Sidebar ----------
  function renderSidebar(route) {
    var h = '<div class="group-label">Tổng quan</div>' +
      navLink('#/', '🏠', 'Trang chủ', route === 'home') +
      navLink('#/progress', '📈', 'Tiến độ của tôi', route === 'progress') +
      '<div class="group-label">Chuyên đề</div>';
    MODULES.forEach(function (m) {
      h += navLink('#/m/' + m.id, m.icon, esc(m.short || m.title), route === 'm:' + m.id, modulePct(m) + '%');
    });
    h += '<div class="group-label">Luyện tập</div>' +
      navLink('#/flashcards', '🗂️', 'Flashcard tiếng Anh', route === 'flashcards') +
      navLink('#/glossary', '📖', 'Từ điển chuyên ngành', route === 'glossary') +
      navLink('#/tools', '🧮', 'Công cụ tính toán', route === 'tools') +
      navLink('#/forms', '📝', 'Mẫu biểu hiện trường', route === 'forms');
    $('#sidebar').innerHTML = h;
    $all('#bottomNav a').forEach(function (a) {
      var n = a.getAttribute('data-nav');
      a.classList.toggle('active', n === route || (n === 'modules' && /^m:|^modules$/.test(route)));
    });
  }
  function navLink(href, ico, label, active, extra) {
    return '<a class="nav-link' + (active ? ' active' : '') + '" href="' + href + '"><span class="ico">' + ico + '</span><span>' + label + '</span>' +
      (extra ? '<span class="pct">' + extra + '</span>' : '') + '</a>';
  }

  // ---------- Views ----------
  function viewHome() {
    setTitle('');
    var lessons = allLessons();
    var doneCount = lessons.filter(function (x) { return P.done[lessonKey(x.m, x.l)]; }).length;
    var next = lessons.filter(function (x) { return !P.done[lessonKey(x.m, x.l)]; })[0];
    var last = P.last && findModule(P.last.m);
    var lastLesson = last && last.lessons.filter(function (l) { return l.id === P.last.l; })[0];
    var known = Object.keys(P.cards).filter(function (k) { return P.cards[k] >= 3; }).length;
    var daily = lessons.length ? lessons[hashDay() % lessons.length] : null;

    var h = '<section class="hero"><h1>Port Pro Academy</h1>' +
      '<p>Học để làm được ngay: pháp luật hải quan, hàng hải và đường thủy nội địa, logistics kho bãi, nâng hạ hàng siêu trường siêu trọng, tiếng Anh khai thác cảng và kỹ năng quản lý.</p>' +
      '<div class="btn-row">' +
      (lastLesson ? '<a class="btn" href="#/l/' + last.id + '/' + lastLesson.id + '">▶ Học tiếp: ' + esc(lastLesson.title) + '</a>' :
        next ? '<a class="btn" href="#/l/' + next.m.id + '/' + next.l.id + '">▶ Bắt đầu học</a>' : '') +
      '</div></section>';

    h += '<div class="stats">' +
      stat(doneCount + '/' + lessons.length, 'Bài đã hoàn thành') +
      stat(streak() + ' 🔥', 'Ngày học liên tiếp') +
      stat(known + '/' + GLOSSARY.length, 'Từ vựng đã thuộc') +
      stat(Object.keys(P.quiz).length, 'Bài kiểm tra đã làm') + '</div>';

    if (daily) {
      h += '<div class="card" style="margin-top:14px"><div class="meta">📌 Bài gợi ý hôm nay</div>' +
        '<h3 style="margin:.3em 0"><a href="#/l/' + daily.m.id + '/' + daily.l.id + '">' + esc(daily.l.title) + '</a></h3>' +
        '<div class="meta">' + daily.m.icon + ' ' + esc(daily.m.title) + ' · ' + (daily.l.minutes || 10) + ' phút</div></div>';
    }

    if (D.path && D.path.items) {
      var pathItems = D.path.items.map(function (it) {
        var m = findModule(it[0]); var l = m && m.lessons.filter(function (x) { return x.id === it[1]; })[0];
        return l ? { m: m, l: l } : null;
      }).filter(Boolean);
      var pathDone = pathItems.filter(function (x) { return P.done[lessonKey(x.m, x.l)]; }).length;
      h += '<h2>🧭 ' + esc(D.path.title) + '</h2><div class="card"><p class="meta" style="margin-top:0">' + esc(D.path.desc) + ' · ' + pathDone + '/' + pathItems.length + ' bài</p>' +
        '<div class="progress" style="margin-bottom:10px"><span style="width:' + Math.round(pathDone * 100 / (pathItems.length || 1)) + '%"></span></div>' +
        '<ol class="lesson-list">' + pathItems.map(function (x, i) {
          var done = P.done[lessonKey(x.m, x.l)];
          return '<li class="' + (done ? 'done' : '') + '"><a href="#/l/' + x.m.id + '/' + x.l.id + '"><span class="num">' + (done ? '✓' : i + 1) + '</span>' +
            '<span class="t">' + esc(x.l.title) + '<br><span class="meta">' + x.m.icon + ' ' + esc(x.m.short || x.m.title) + ' · ' + (x.l.minutes || 10) + ' phút</span></span>›</a></li>';
        }).join('') + '</ol></div>';
    }
    h += '<h2>Tất cả chuyên đề</h2>' + moduleGrid();
    h += '<h2>Luyện tập nhanh</h2><div class="grid">' +
      quick('#/flashcards', '🗂️', 'Flashcard tiếng Anh', GLOSSARY.length + ' thuật ngữ khai thác cảng, có phát âm') +
      quick('#/tools', '🧮', 'Công cụ hiện trường', 'Lực cáp sling, áp lực chân chống, chằng buộc, năng lực bãi, demurrage…') +
      quick('#/forms', '📝', 'Mẫu biểu hiện trường', 'Biên bản tôn cuộn, đọc mớn nước, checklist nâng cẩu tàu, bất thường seal, bàn giao ca — điền trên điện thoại, in PDF') +
      quick('#/glossary', '📖', 'Từ điển Anh – Việt', 'Tra cứu nhanh theo nhóm nghiệp vụ') + '</div>';
    h += disclaimer();
    app.innerHTML = h;
    renderSidebar('home');
  }
  function hashDay() { var t = today(); var h = 0; for (var i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) >>> 0; return h; }
  function stat(v, l) { return '<div class="stat"><div class="v">' + v + '</div><div class="l">' + l + '</div></div>'; }
  function quick(href, ico, t, d) {
    return '<a class="card module-card" href="' + href + '"><div class="head"><div class="emoji">' + ico + '</div><h3>' + t + '</h3></div><p>' + d + '</p></a>';
  }
  function moduleGrid() {
    return '<div class="grid">' + MODULES.map(function (m) {
      var pct = modulePct(m);
      return '<a class="card module-card" href="#/m/' + m.id + '"><div class="head"><div class="emoji">' + m.icon + '</div><h3>' + esc(m.title) + '</h3></div>' +
        '<p>' + esc(m.desc) + '</p><div class="meta">' + m.lessons.length + ' bài · ' + pct + '% hoàn thành</div>' +
        '<div class="progress"><span style="width:' + pct + '%"></span></div></a>';
    }).join('') + '</div>';
  }
  function disclaimer() {
    return '<p class="disclaimer">⚖️ Nội dung pháp luật được tổng hợp nhằm mục đích học tập, cập nhật theo hiểu biết đến năm 2026. Văn bản pháp luật thường xuyên được sửa đổi, thay thế; ' +
      'trước khi áp dụng cho hồ sơ, hợp đồng hoặc xử lý vi phạm cụ thể, hãy đối chiếu văn bản hiện hành trên ' +
      '<a href="https://vbpl.vn" target="_blank" rel="noopener">vbpl.vn</a>, <a href="https://congbao.chinhphu.vn" target="_blank" rel="noopener">Công báo</a> ' +
      'hoặc hỏi bộ phận pháp chế. Thông số kỹ thuật nâng hạ chỉ mang tính tham khảo — luôn tuân theo bảng tải của nhà sản xuất và phương án nâng được phê duyệt.</p>';
  }

  function viewModules() {
    setTitle('Bài học');
    app.innerHTML = '<h1>Tất cả chuyên đề</h1><p class="meta">' + MODULES.length + ' chuyên đề · ' + allLessons().length + ' bài học</p>' + moduleGrid() + disclaimer();
    renderSidebar('modules');
  }

  function viewModule(mid) {
    var m = findModule(mid); if (!m) return notFound();
    setTitle(m.title);
    var h = '<div class="breadcrumb"><a href="#/">Trang chủ</a> › Chuyên đề</div>' +
      '<h1>' + m.icon + ' ' + esc(m.title) + '</h1><p>' + esc(m.desc) + '</p>' +
      '<div class="progress" style="margin:10px 0 16px"><span style="width:' + modulePct(m) + '%"></span></div>';
    if (m.intro) h += '<div class="card content">' + m.intro + '</div>';
    h += '<ol class="lesson-list">' + m.lessons.map(function (l, i) {
      var done = P.done[lessonKey(m, l)]; var q = P.quiz[lessonKey(m, l)];
      return '<li class="' + (done ? 'done' : '') + '"><a href="#/l/' + m.id + '/' + l.id + '"><span class="num">' + (done ? '✓' : i + 1) + '</span>' +
        '<span class="t">' + esc(l.title) + '<br><span class="meta">' + (l.minutes || 10) + ' phút' + (q ? ' · Quiz ' + q.best + '/' + q.total : '') + '</span></span>›</a></li>';
    }).join('') + '</ol>';
    var nQ = m.lessons.reduce(function (s, l) { return s + (l.quiz ? l.quiz.length : 0); }, 0);
    if (nQ) {
      var mq = P.quiz['module:' + m.id];
      h += '<div class="card"><h3 style="margin-top:0">🎯 Bài kiểm tra tổng hợp chuyên đề</h3><p class="meta">' + Math.min(nQ, 15) + ' câu ngẫu nhiên từ ' + nQ + ' câu hỏi' +
        (mq ? ' · Điểm cao nhất: ' + mq.best + '/' + mq.total : '') + '</p><a class="btn primary" href="#/quiz/' + m.id + '">Làm bài kiểm tra</a></div>';
    }
    h += disclaimer();
    app.innerHTML = h;
    renderSidebar('m:' + m.id);
  }

  function viewLesson(mid, lid) {
    var m = findModule(mid); if (!m) return notFound();
    var idx = -1; m.lessons.forEach(function (l, i) { if (l.id === lid) idx = i; });
    if (idx < 0) return notFound();
    var l = m.lessons[idx], key = lessonKey(m, l);
    P.last = { m: m.id, l: l.id }; save();
    setTitle(l.title);
    var prev = m.lessons[idx - 1], next = m.lessons[idx + 1];
    var nextModule = !next && MODULES[MODULES.indexOf(m) + 1];

    var h = '<div class="breadcrumb"><a href="#/">Trang chủ</a> › <a href="#/m/' + m.id + '">' + esc(m.title) + '</a> › Bài ' + (idx + 1) + '</div>' +
      '<h1>' + esc(l.title) + '</h1><div class="meta">⏱ ' + (l.minutes || 10) + ' phút' + (l.source ? ' · Căn cứ: ' + l.source : '') +
      (P.done[key] ? ' · <span class="pill ok">Đã hoàn thành</span>' : '') + '</div>' +
      '<article class="content">' + l.body + '</article>';

    if (l.keyPoints && l.keyPoints.length) {
      h += '<div class="keypoints content"><h3>🧠 Ghi nhớ</h3><ul>' + l.keyPoints.map(function (k) { return '<li>' + k + '</li>'; }).join('') + '</ul></div>';
    }
    if (l.apply && l.apply.length) {
      var checks = P.checks[key] || {};
      h += '<h2>✅ Áp dụng ngay vào công việc</h2><ul class="checklist" id="applyList">' + l.apply.map(function (a, i) {
        var id = 'ap-' + i;
        return '<li><input type="checkbox" id="' + id + '" data-i="' + i + '"' + (checks[i] ? ' checked' : '') + '><label for="' + id + '">' + a + '</label></li>';
      }).join('') + '</ul>';
    }
    if (l.quiz && l.quiz.length) h += '<h2>📝 Kiểm tra nhanh</h2><div id="quiz"></div>';
    h += '<h2>🗒️ Ghi chú của tôi</h2><textarea class="note" id="note" placeholder="Ghi lại tình huống thực tế ở cảng/kho của bạn, số hiệu văn bản cần tra cứu, việc cần làm…">' +
      esc(P.notes[key] || '') + '</textarea><div class="meta" id="noteState">Tự động lưu trên thiết bị này.</div>';
    h += '<div class="btn-row no-print"><button class="btn ' + (P.done[key] ? '' : 'ok') + '" id="doneBtn">' +
      (P.done[key] ? '↺ Đánh dấu chưa học' : '✓ Đánh dấu đã học xong') + '</button>' +
      '<button class="btn" onclick="window.print()">🖨️ In / Lưu PDF</button></div>';
    h += '<div class="lesson-nav">' +
      (prev ? '<a class="btn" href="#/l/' + m.id + '/' + prev.id + '">‹ ' + esc(prev.title) + '</a>' : '<span></span>') +
      (next ? '<a class="btn primary" href="#/l/' + m.id + '/' + next.id + '">' + esc(next.title) + ' ›</a>' :
        nextModule ? '<a class="btn primary" href="#/m/' + nextModule.id + '">Chuyên đề tiếp: ' + esc(nextModule.title) + ' ›</a>' : '') +
      '</div>' + disclaimer();
    app.innerHTML = h;
    renderSidebar('m:' + m.id);

    $all('.content .en', app).forEach(function (el) {
      var text = el.textContent;
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'say-inline'; b.textContent = '🔊'; b.setAttribute('aria-label', 'Nghe phát âm');
      b.addEventListener('click', function () { speak(text); });
      el.appendChild(b);
    });
    var list = $('#applyList');
    if (list) list.addEventListener('change', function (e) {
      var i = e.target.getAttribute('data-i'); if (i == null) return;
      P.checks[key] = P.checks[key] || {}; P.checks[key][i] = e.target.checked; save();
    });
    var note = $('#note'), timer;
    note.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { P.notes[key] = note.value; save(); $('#noteState').textContent = 'Đã lưu lúc ' + new Date().toLocaleTimeString('vi-VN'); }, 400);
    });
    $('#doneBtn').addEventListener('click', function () {
      if (P.done[key]) delete P.done[key]; else { P.done[key] = today(); markActive(); }
      save(); viewLesson(mid, lid);
    });
    if (l.quiz && l.quiz.length) renderQuiz($('#quiz'), l.quiz, key);
  }

  function renderQuiz(el, questions, key, onDone) {
    var answered = 0, correct = 0;
    el.innerHTML = questions.map(function (q, qi) {
      return '<div class="quiz-q card" data-qi="' + qi + '"><div class="q">' + (qi + 1) + '. ' + q.q + '</div>' +
        q.options.map(function (o, oi) { return '<button class="opt" data-oi="' + oi + '">' + o + '</button>'; }).join('') +
        '<div class="explain" hidden></div></div>';
    }).join('') + '<div class="score-box card" hidden></div>';
    el.addEventListener('click', function (e) {
      var btn = e.target.closest('.opt'); if (!btn || btn.disabled) return;
      var box = btn.closest('.quiz-q'), q = questions[+box.getAttribute('data-qi')], oi = +btn.getAttribute('data-oi');
      $all('.opt', box).forEach(function (b, i) { b.disabled = true; if (i === q.answer) b.classList.add('correct'); });
      if (oi === q.answer) correct++; else btn.classList.add('wrong');
      var ex = $('.explain', box); ex.hidden = false;
      ex.innerHTML = (oi === q.answer ? '✅ Chính xác. ' : '❌ Chưa đúng. ') + (q.explain || '');
      answered++;
      if (answered === questions.length) {
        var prev = P.quiz[key]; var best = prev ? Math.max(prev.best, correct) : correct;
        P.quiz[key] = { best: best, total: questions.length, last: correct, date: today() }; markActive(); save();
        var sb = $('.score-box', el); sb.hidden = false;
        var pct = Math.round(correct * 100 / questions.length);
        sb.innerHTML = '<div class="big">' + correct + '/' + questions.length + '</div><div>' +
          (pct >= 80 ? '🎉 Xuất sắc! Bạn đã nắm chắc nội dung.' : pct >= 50 ? '👍 Khá tốt — xem lại phần giải thích các câu sai.' : '📖 Nên đọc lại bài và làm lại.') +
          '</div><div class="btn-row" style="justify-content:center"><button class="btn" id="retry">↺ Làm lại</button></div>';
        $('#retry', el).addEventListener('click', function () { var c = el.cloneNode(false); el.parentNode.replaceChild(c, el); renderQuiz(c, onDone ? shuffle(questions) : questions, key, onDone); });
        if (onDone) onDone(correct);
      }
    });
  }

  function viewModuleQuiz(mid) {
    var m = findModule(mid); if (!m) return notFound();
    setTitle('Kiểm tra: ' + m.title);
    var pool = []; m.lessons.forEach(function (l) { (l.quiz || []).forEach(function (q) { pool.push(q); }); });
    var qs = shuffle(pool).slice(0, 15);
    app.innerHTML = '<div class="breadcrumb"><a href="#/">Trang chủ</a> › <a href="#/m/' + m.id + '">' + esc(m.title) + '</a> › Kiểm tra</div>' +
      '<h1>🎯 Kiểm tra: ' + esc(m.title) + '</h1><p class="meta">' + qs.length + ' câu hỏi ngẫu nhiên. Mỗi lần làm lại sẽ đổi thứ tự.</p><div id="quiz"></div>';
    renderQuiz($('#quiz'), qs, 'module:' + m.id, function () {});
    renderSidebar('m:' + m.id);
  }

  // ---------- Flashcards (Leitner 5 hộp) ----------
  var fcState = { cat: 'all', queue: [], i: 0 };
  function cats() { var s = {}; GLOSSARY.forEach(function (g) { s[g.cat] = 1; }); return Object.keys(s); }
  function buildQueue() {
    var list = GLOSSARY.filter(function (g) { return fcState.cat === 'all' || g.cat === fcState.cat; });
    list = shuffle(list).sort(function (a, b) { return (P.cards[a.t] || 1) - (P.cards[b.t] || 1); });
    fcState.queue = list.slice(0, 20); fcState.i = 0;
  }
  function viewFlashcards() {
    setTitle('Flashcard tiếng Anh');
    if (!fcState.queue.length) buildQueue();
    var c = fcState.queue[fcState.i];
    var h = '<h1>🗂️ Flashcard tiếng Anh khai thác cảng</h1>' +
      '<p class="meta">Chạm vào thẻ để lật. Thẻ "Chưa nhớ" sẽ quay lại sớm hơn (phương pháp Leitner 5 hộp). Mỗi lượt 20 thẻ, ưu tiên thẻ yếu.</p>' +
      '<div class="chips" id="fcCats">' + ['all'].concat(cats()).map(function (k) {
        return '<button class="chip' + (fcState.cat === k ? ' active' : '') + '" data-cat="' + esc(k) + '">' + (k === 'all' ? 'Tất cả' : esc(k)) + '</button>';
      }).join('') + '</div>';
    if (!c) {
      h += '<div class="card score-box"><div class="big">🎉</div><p>Hoàn thành lượt học! </p><button class="btn primary" id="fcAgain">Lượt mới</button></div>';
    } else {
      var box = P.cards[c.t] || 1;
      h += '<div class="meta" style="text-align:center;margin-bottom:8px">Thẻ ' + (fcState.i + 1) + '/' + fcState.queue.length + '</div>' +
        '<div class="fc-wrap"><div class="fc" id="fc" tabindex="0" role="button" aria-label="Lật thẻ">' +
        '<div class="face front"><span class="pill cat">' + esc(c.cat) + '</span><span class="pill box">Hộp ' + box + '/5</span>' +
        '<div class="term">' + esc(c.t) + '</div><div class="meta" style="margin-top:8px">Chạm để xem nghĩa</div></div>' +
        '<div class="face back"><div class="vi">' + esc(c.vi) + '</div>' + (c.ex ? '<div class="ex">“' + esc(c.ex) + '”</div>' : '') + '</div>' +
        '</div></div>' +
        '<div class="btn-row" style="justify-content:center"><button class="btn" id="fcSay">🔊 Nghe</button>' +
        '<button class="btn" id="fcNo" style="border-color:var(--danger)">✗ Chưa nhớ</button>' +
        '<button class="btn ok" id="fcYes">✓ Đã nhớ</button></div>';
    }
    app.innerHTML = h;
    renderSidebar('flashcards');
    $('#fcCats').addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return; fcState.cat = b.getAttribute('data-cat'); buildQueue(); viewFlashcards();
    });
    if (!c) { $('#fcAgain').addEventListener('click', function () { buildQueue(); viewFlashcards(); }); return; }
    var fc = $('#fc');
    function flip() { fc.classList.toggle('flipped'); }
    fc.addEventListener('click', flip);
    fc.addEventListener('keydown', function (e) { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } });
    $('#fcSay').addEventListener('click', function () { speak(c.t + (c.ex && fc.classList.contains('flipped') ? '. ' + c.ex : '')); });
    function answer(ok) {
      P.cards[c.t] = ok ? Math.min(5, (P.cards[c.t] || 1) + 1) : 1;
      if (!ok) fcState.queue.push(c); // hỏi lại cuối lượt
      markActive(); fcState.i++; viewFlashcards();
    }
    $('#fcYes').addEventListener('click', function () { answer(true); });
    $('#fcNo').addEventListener('click', function () { answer(false); });
  }

  // ---------- Glossary ----------
  function viewGlossary() {
    setTitle('Từ điển chuyên ngành');
    var h = '<h1>📖 Từ điển Anh – Việt khai thác cảng</h1>' +
      '<div class="field"><input id="glq" type="search" placeholder="Lọc thuật ngữ (Anh hoặc Việt)…"></div>' +
      '<div class="chips" id="glCats">' + ['all'].concat(cats()).map(function (k, i) {
        return '<button class="chip' + (i === 0 ? ' active' : '') + '" data-cat="' + esc(k) + '">' + (k === 'all' ? 'Tất cả' : esc(k)) + '</button>';
      }).join('') + '</div><div class="card" id="glList"></div>';
    app.innerHTML = h;
    renderSidebar('glossary');
    var cat = 'all';
    function draw() {
      var q = $('#glq').value.trim().toLowerCase();
      var items = GLOSSARY.filter(function (g) {
        return (cat === 'all' || g.cat === cat) && (!q || (g.t + ' ' + g.vi + ' ' + (g.ex || '')).toLowerCase().indexOf(q) >= 0);
      }).sort(function (a, b) { return a.t.localeCompare(b.t); });
      $('#glList').innerHTML = items.length ? items.map(function (g) {
        return '<div class="gl-item"><div><div class="t">' + esc(g.t) + ' <span class="pill">' + esc(g.cat) + '</span></div><div>' + esc(g.vi) + '</div>' +
          (g.ex ? '<div class="d"><em>' + esc(g.ex) + '</em></div>' : '') + '</div><button class="icon-btn say" data-say="' + esc(g.t) + '" aria-label="Nghe phát âm">🔊</button></div>';
      }).join('') : '<p class="meta">Không có kết quả.</p>';
    }
    $('#glq').addEventListener('input', draw);
    $('#glCats').addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return; cat = b.getAttribute('data-cat');
      $all('#glCats .chip').forEach(function (x) { x.classList.toggle('active', x === b); }); draw();
    });
    $('#glList').addEventListener('click', function (e) { var b = e.target.closest('[data-say]'); if (b) speak(b.getAttribute('data-say')); });
    draw();
  }

  // ---------- Tools ----------
  var TOOLS = [
    {
      id: 'sling', icon: '🪝', title: 'Lực căng cáp sling theo góc',
      html: '<p class="meta">Tính lực trên mỗi nhánh cáp khi góc nhánh so với phương ngang thay đổi. Với cáp 3–4 nhánh, thực tế an toàn giả định chỉ 2 nhánh chịu lực (tải không chia đều).</p>' +
        '<div class="form-grid">' + fld('W', 'Khối lượng hàng (tấn)', 20) + fld('n', 'Số nhánh chịu lực', 2) + fld('a', 'Góc nhánh so với phương ngang (°)', 60) + fld('wll', 'WLL mỗi nhánh (tấn) — tùy chọn', '') + '</div><div class="result" id="r"></div>',
      calc: function (v) {
        var a = v.a * Math.PI / 180, f = 1 / Math.sin(a), t = v.W / v.n * f;
        var warn = v.a < 30 ? '<div class="callout danger">⛔ Góc &lt; 30°: cấm sử dụng — lực tăng ≥ 2 lần và nguy cơ trượt móc.</div>' :
          v.a < 45 ? '<div class="callout warn">⚠️ Góc 30–45°: chỉ dùng khi bắt buộc và đã tính toán; nên dùng thanh dàn (spreader beam) hoặc cáp dài hơn.</div>' :
            '<div class="callout tip">✓ Góc ≥ 45° (khuyến nghị ≥ 60°).</div>';
        var util = v.wll ? '<div>Mức sử dụng WLL: <b>' + fmt(t / v.wll * 100, 0) + '%</b> ' + (t > v.wll ? '⛔ VƯỢT WLL — đổi cáp/cấu hình' : '✓') + '</div>' : '';
        return '<div>Hệ số góc: <b>' + fmt(f, 3) + '</b></div><div class="v">Lực mỗi nhánh ≈ ' + fmt(t, 2) + ' tấn</div>' + util +
          '<div class="meta">Lực ngang ép vào hàng (mỗi nhánh): ' + fmt(v.W / v.n / Math.tan(a), 2) + ' tấn</div>' + warn;
      }
    },
    {
      id: 'gbp', icon: '🦶', title: 'Áp lực chân chống cẩu lên nền',
      html: '<p class="meta">Ước tính nhanh theo quy tắc kinh nghiệm: chân chống chịu tải lớn nhất có thể nhận tới ~75% (trọng lượng cẩu + hàng + phụ kiện). Phương án nâng chính thức phải dùng số liệu phản lực của nhà sản xuất cẩu.</p>' +
        '<div class="form-grid">' + fld('crane', 'Trọng lượng cẩu kể cả đối trọng (tấn)', 60) + fld('load', 'Hàng + móc + phụ kiện (tấn)', 25) + fld('pct', '% tải lên 1 chân chống', 75) +
        fld('L', 'Tấm kê – dài (m)', 1.5) + fld('B', 'Tấm kê – rộng (m)', 1.5) + fld('allow', 'Sức chịu tải nền cho phép (kPa)', 200) + '</div><div class="result" id="r"></div>' +
        '<div class="table-wrap"><table><tr><th>Loại nền (tham khảo)</th><th>Sức chịu tải điển hình</th></tr>' +
        '<tr><td>Đất sét mềm, đất đắp chưa đầm</td><td>&lt; 75 kPa — không đặt cẩu nếu chưa xử lý</td></tr>' +
        '<tr><td>Sét cứng / cát chặt vừa</td><td>100 – 200 kPa</td></tr><tr><td>Sỏi đầm chặt, cấp phối đá dăm</td><td>200 – 400 kPa</td></tr>' +
        '<tr><td>Bê tông bãi cảng (tùy kết cấu)</td><td>Theo hồ sơ thiết kế bãi/cầu tàu</td></tr></table></div>',
      calc: function (v) {
        var F = (v.crane + v.load) * v.pct / 100; var p = F * 9.81 / (v.L * v.B); var minA = F * 9.81 / v.allow;
        return '<div>Tải lên chân chống: <b>' + fmt(F, 1) + ' tấn</b> (≈ ' + fmt(F * 9.81, 0) + ' kN)</div><div class="v">Áp lực lên nền ≈ ' + fmt(p, 0) + ' kPa</div>' +
          '<div>Diện tích tấm kê tối thiểu: <b>' + fmt(minA, 2) + ' m²</b> (≈ ' + fmt(Math.sqrt(minA), 2) + ' × ' + fmt(Math.sqrt(minA), 2) + ' m)</div>' +
          (p > v.allow ? '<div class="callout danger">⛔ Vượt sức chịu tải nền — tăng kích thước tấm kê, dùng tấm thép/gỗ ghép, hoặc gia cố nền.</div>' : '<div class="callout tip">✓ Trong giới hạn cho phép (' + fmt(p / v.allow * 100, 0) + '%).</div>');
      }
    },
    {
      id: 'lashing', icon: '⛓️', title: 'Chằng buộc hàng (quy tắc kinh nghiệm CSS Code)',
      html: '<p class="meta">Theo Phụ lục 13 Bộ luật CSS (IMO): tổng MSL của các dây chằng ở <b>mỗi bên</b> (mạn trái và mạn phải) của kiện hàng nên ≥ trọng lượng kiện hàng. Dùng để kiểm tra nhanh; hàng đặc biệt cần tính toán đầy đủ theo Cargo Securing Manual.</p>' +
        '<div class="form-grid">' + fld('W', 'Trọng lượng kiện hàng (tấn)', 80) + fld('msl', 'MSL mỗi dây chằng (tấn)', 10) + fld('per', 'Số dây chằng mỗi bên', 4) + '</div><div class="result" id="r"></div>',
      calc: function (v) {
        var total = v.msl * v.per, need = Math.ceil(v.W / v.msl);
        return '<div class="v">Tổng MSL mỗi bên: ' + fmt(total, 1) + ' t / cần ≥ ' + fmt(v.W, 1) + ' t</div><div>Số dây tối thiểu mỗi bên: <b>' + need + '</b></div>' +
          (total >= v.W ? '<div class="callout tip">✓ Đạt quy tắc kinh nghiệm.</div>' : '<div class="callout danger">⛔ Chưa đủ — bổ sung ' + (need - v.per) + ' dây mỗi bên hoặc dùng dây MSL cao hơn.</div>') +
          '<div class="meta">Lưu ý: góc dây chằng lý tưởng 30–60° so với mặt sàn; dùng chèn hãm (chocks) chống trượt dọc; MSL dây cáp thép ~ 80% lực phá đứt (theo CSS Code).</div>';
      }
    },
    {
      id: 'yard', icon: '📦', title: 'Năng lực thông qua bãi container',
      html: '<p class="meta">Công thức tiêu chuẩn: Năng lực (TEU/năm) = Số ô đất (TGS) × chiều cao xếp TB × hệ số khai thác × 365 / thời gian lưu bãi TB.</p>' +
        '<div class="form-grid">' + fld('tgs', 'Số ô đất – TGS (TEU)', 3000) + fld('h', 'Chiều cao xếp trung bình (tầng)', 3.5) + fld('u', 'Hệ số khai thác cho phép (%)', 70) + fld('dw', 'Thời gian lưu bãi TB (ngày)', 5) + '</div><div class="result" id="r"></div>',
      calc: function (v) {
        var cap = v.tgs * v.h * v.u / 100 * 365 / v.dw, static_ = v.tgs * v.h * v.u / 100;
        return '<div>Sức chứa tĩnh hiệu dụng: <b>' + fmt(static_, 0) + ' TEU</b></div><div class="v">Năng lực thông qua ≈ ' + fmt(cap, 0) + ' TEU/năm</div>' +
          '<div class="meta">Giảm dwell time 1 ngày → năng lực thành ' + fmt(v.tgs * v.h * v.u / 100 * 365 / Math.max(v.dw - 1, 0.5), 0) + ' TEU/năm. Đây là đòn bẩy rẻ nhất: thu phí lưu bãi lũy tiến, nhắc chủ hàng, đẩy nhanh thủ tục.</div>';
      }
    },
    {
      id: 'bor', icon: '⚓', title: 'Hệ số chiếm dụng cầu bến (BOR)',
      html: '<div class="form-grid">' + fld('hrs', 'Tổng giờ tàu chiếm cầu trong kỳ (giờ)', 1200) + fld('b', 'Số cầu bến', 2) + fld('d', 'Số ngày trong kỳ', 30) + '</div><div class="result" id="r"></div>',
      calc: function (v) {
        var bor = v.hrs / (v.b * v.d * 24) * 100;
        return '<div class="v">BOR = ' + fmt(bor, 1) + '%</div>' + (bor > 75 ? '<div class="callout warn">⚠️ BOR cao: nguy cơ tàu chờ cầu tăng nhanh (hàng đợi phi tuyến). Xem xét tăng năng suất cẩu, lịch cập cầu (berth window), mở rộng.</div>' :
          bor < 40 ? '<div class="callout info">ℹ️ BOR thấp: còn dư năng lực — cơ hội marketing, thu hút tuyến mới.</div>' : '<div class="callout tip">✓ Mức hợp lý.</div>');
      }
    },
    {
      id: 'dem', icon: '⏳', title: 'Laytime – Demurrage – Despatch',
      html: '<p class="meta">Tính nhanh thời gian làm hàng cho phép theo hợp đồng thuê tàu chuyến và tiền phạt/thưởng.</p><div class="form-grid">' +
        fld('qty', 'Khối lượng hàng (tấn)', 20000) + fld('rate', 'Mức xếp/dỡ (tấn/ngày)', 5000) + fld('used', 'Thời gian thực tế tính laytime (giờ)', 110) +
        fld('dr', 'Mức demurrage (USD/ngày)', 12000) + fld('dsp', 'Mức despatch (USD/ngày, thường = ½ DEM)', 6000) + '</div><div class="result" id="r"></div>',
      calc: function (v) {
        var allowed = v.qty / v.rate * 24, diff = v.used - allowed;
        return '<div>Laytime cho phép: <b>' + fmt(allowed, 1) + ' giờ</b> (' + fmt(allowed / 24, 2) + ' ngày)</div>' +
          (diff > 0 ? '<div class="v" style="color:var(--danger)">Demurrage: ' + fmt(diff, 1) + ' giờ → ' + fmt(diff / 24 * v.dr, 0) + ' USD</div>' :
            '<div class="v" style="color:var(--ok)">Despatch: ' + fmt(-diff, 1) + ' giờ → ' + fmt(-diff / 24 * v.dsp, 0) + ' USD</div>') +
          '<div class="meta">Nhớ trừ thời gian loại trừ theo C/P (mưa – WWD, Chủ nhật/ngày lễ – SHEX, hỏng thiết bị tàu…) dựa trên Statement of Facts đã ký.</div>';
      }
    },
    {
      id: 'eoq', icon: '📐', title: 'EOQ & điểm đặt hàng lại (vật tư kho)',
      html: '<div class="form-grid">' + fld('D', 'Nhu cầu năm (đơn vị)', 12000) + fld('S', 'Chi phí mỗi lần đặt hàng (đ)', 500000) + fld('H', 'Chi phí lưu kho/đơn vị/năm (đ)', 20000) +
        fld('lt', 'Thời gian giao hàng (ngày)', 7) + fld('ss', 'Tồn kho an toàn (đơn vị)', 100) + '</div><div class="result" id="r"></div>',
      calc: function (v) {
        var eoq = Math.sqrt(2 * v.D * v.S / v.H), rop = v.D / 365 * v.lt + v.ss;
        return '<div class="v">EOQ ≈ ' + fmt(eoq, 0) + ' đơn vị/lần</div><div>Số lần đặt/năm: <b>' + fmt(v.D / eoq, 1) + '</b></div>' +
          '<div>Điểm đặt hàng lại (ROP): <b>' + fmt(rop, 0) + '</b> đơn vị</div><div>Tổng chi phí đặt + lưu: <b>' + fmt(v.D / eoq * v.S + eoq / 2 * v.H, 0) + ' đ/năm</b></div>';
      }
    },
    {
      id: 'risk', icon: '🚦', title: 'Ma trận rủi ro 5×5',
      html: '<div class="form-grid"><div class="field"><label for="f-l">Khả năng xảy ra</label><select id="f-l"><option value="1">1 – Hiếm khi</option><option value="2">2 – Ít khả năng</option><option value="3" selected>3 – Có thể</option><option value="4">4 – Nhiều khả năng</option><option value="5">5 – Gần như chắc chắn</option></select></div>' +
        '<div class="field"><label for="f-s">Mức độ hậu quả</label><select id="f-s"><option value="1">1 – Không đáng kể</option><option value="2">2 – Nhẹ (sơ cứu)</option><option value="3">3 – Trung bình (nghỉ việc, hư hỏng)</option><option value="4" selected>4 – Nghiêm trọng (thương tật, thiệt hại lớn)</option><option value="5">5 – Thảm họa (tử vong, sập cẩu)</option></select></div></div><div class="result" id="r"></div>',
      calc: function (v) {
        var r = v.l * v.s, lvl = r >= 15 ? ['⛔ RẤT CAO', 'danger', 'Dừng công việc. Chỉ thực hiện khi có biện pháp giảm rủi ro và được lãnh đạo phê duyệt.'] :
          r >= 8 ? ['⚠️ CAO', 'warn', 'Cần biện pháp kiểm soát bổ sung, giám sát trực tiếp, phê duyệt của trưởng bộ phận.'] :
            r >= 4 ? ['🟡 TRUNG BÌNH', 'info', 'Kiểm soát theo quy trình, phổ biến trong toolbox talk.'] : ['🟢 THẤP', 'tip', 'Chấp nhận được, duy trì kiểm soát hiện có.'];
        return '<div class="v">Điểm rủi ro = ' + r + ' → ' + lvl[0] + '</div><div class="callout ' + lvl[1] + '">' + lvl[2] + '</div>' +
          '<div class="meta">Thứ tự biện pháp kiểm soát: Loại bỏ → Thay thế → Kỹ thuật → Hành chính (quy trình, đào tạo) → PPE.</div>';
      }
    },
    {
      id: 'grab', icon: '🪣', title: 'Năng suất gầu ngoạm (hàng rời)',
      html: '<p class="meta">Năng suất = Dung tích gầu × Tỷ trọng × Hệ số đầy × 3600/Chu kỳ × Hệ số sử dụng thời gian. Kiểm tra (gầu + hàng) so với tải định mức chế độ gầu ngoạm của cẩu.</p>' +
        '<div class="form-grid">' + fld('v', 'Dung tích gầu (m³)', 5) + fld('rho', 'Tỷ trọng đống hàng (t/m³)', 1.6) + fld('fill', 'Hệ số đầy gầu (%)', 85) +
        fld('cyc', 'Chu kỳ gầu (giây)', 60) + fld('eff', 'Hệ số sử dụng thời gian (%)', 75) + fld('gw', 'Trọng lượng gầu (tấn)', 6) +
        fld('cap', 'Tải định mức chế độ gầu của cẩu (tấn)', 15) + fld('qty', 'Khối lượng sà lan cần dỡ (tấn)', 1500) + '</div><div class="result" id="r"></div>' +
        '<div class="table-wrap"><table><tr><th>Hàng</th><th>Tỷ trọng tham khảo (t/m³)</th></tr><tr><td>Cát khô / ẩm</td><td>1,4–1,6 / 1,7–2,0</td></tr><tr><td>Đá dăm</td><td>1,5–1,7</td></tr>' +
        '<tr><td>Than đá</td><td>0,8–0,9</td></tr><tr><td>Clinker</td><td>1,3–1,5</td></tr><tr><td>Quặng sắt</td><td>2,0–2,6</td></tr><tr><td>Urea, ngũ cốc</td><td>0,7–0,8</td></tr></table></div>',
      calc: function (v) {
        var perCycle = v.v * v.rho * v.fill / 100, tph = perCycle * 3600 / v.cyc * v.eff / 100, lift = v.gw + perCycle;
        var hrs = tph > 0 ? v.qty / tph : NaN;
        return '<div>Hàng mỗi gầu: <b>' + fmt(perCycle, 2) + ' t</b> · Tải nâng mỗi lần (gầu + hàng): <b>' + fmt(lift, 2) + ' t</b></div>' +
          '<div class="v">Năng suất ≈ ' + fmt(tph, 0) + ' tấn/giờ · ' + fmt(tph * 8, 0) + ' tấn/ca 8 giờ</div>' +
          '<div>Thời gian dỡ hết sà lan ≈ <b>' + fmt(hrs, 1) + ' giờ</b> (chưa tính dọn đáy)</div>' +
          (v.cap ? (lift > v.cap ? '<div class="callout danger">⛔ Gầu + hàng (' + fmt(lift, 1) + ' t) vượt tải định mức chế độ gầu (' + fmt(v.cap, 1) + ' t) — dùng gầu nhỏ hơn hoặc giảm độ đầy.</div>' :
            '<div class="callout tip">✓ Mức sử dụng tải chế độ gầu: ' + fmt(lift / v.cap * 100, 0) + '%.</div>') : '') +
          '<div class="meta">Giảm chu kỳ 10 giây → năng suất ' + fmt(perCycle * 3600 / Math.max(v.cyc - 10, 1) * v.eff / 100, 0) + ' t/h.</div>';
      }
    },
    {
      id: 'draft', icon: '📏', title: 'Khối lượng hàng theo mớn nước sà lan',
      html: '<p class="meta">Công thức gần đúng cho sà lan dạng hộp khi không có bảng thủy tĩnh: Khối lượng ≈ L × B × Cw × (T<sub>sau</sub> − T<sub>trước</sub>) × ρ − thay đổi dằn/ nhiên liệu. Mỗi mớn nhập là trung bình hai mạn; mớn hiệu chỉnh = (Mũi + 6 × Giữa + Lái)/8.</p>' +
        '<div class="form-grid">' + fld('L', 'Chiều dài đường nước L (m)', 60) + fld('B', 'Chiều rộng đường nước B (m)', 12) + fld('cw', 'Hệ số đường nước Cw', 0.92) + fld('rho', 'Tỷ trọng nước (t/m³)', 1.000) + '</div>' +
        '<h3>Trước khi làm hàng (m)</h3><div class="form-grid">' + fld('f1', 'Mũi', 0.60) + fld('m1', 'Giữa', 0.60) + fld('a1', 'Lái', 0.60) + '</div>' +
        '<h3>Sau khi làm hàng (m)</h3><div class="form-grid">' + fld('f2', 'Mũi', 2.45) + fld('m2', 'Giữa', 2.50) + fld('a2', 'Lái', 2.55) + '</div>' +
        '<div class="form-grid">' + fld('ded', 'Thay đổi dằn/ nhiên liệu/ khác (tấn, + nếu tăng)', 0) + '</div><div class="result" id="r"></div>',
      calc: function (v) {
        var t1 = (v.f1 + 6 * v.m1 + v.a1) / 8, t2 = (v.f2 + 6 * v.m2 + v.a2) / 8, tpc = v.L * v.B * v.cw * v.rho / 100;
        var cargo = v.L * v.B * v.cw * (t2 - t1) * v.rho - v.ded;
        return '<div>Mớn hiệu chỉnh: trước <b>' + fmt(t1, 3) + ' m</b> → sau <b>' + fmt(t2, 3) + ' m</b> (chênh ' + fmt((t2 - t1) * 100, 1) + ' cm)</div>' +
          '<div>TPC ≈ <b>' + fmt(tpc, 2) + ' tấn/cm</b> — sai 1 cm mớn ≈ ' + fmt(tpc, 1) + ' tấn</div>' +
          '<div class="v">Khối lượng hàng ≈ ' + fmt(cargo, 1) + ' tấn</div>' +
          '<div>Chúi (lái − mũi) sau làm hàng: ' + fmt((v.a2 - v.f2) * 100, 0) + ' cm</div>' +
          '<div class="meta">Có bảng thủy tĩnh/ bảng dung tích của sà lan thì dùng bảng — chính xác hơn. Nước lợ: đo tỷ trọng bằng tỷ trọng kế tại thời điểm đọc mớn.</div>';
      }
    },
    {
      id: 'pile', icon: '⛰️', title: 'Đống hàng rời: thể tích, khối lượng, áp lực nền',
      html: '<p class="meta">Đống dài có hai đầu hình nửa nón (nếu chiều dài ≤ bề rộng thì tính như đống nón). Chiều cao h = (B/2) × tan(góc nghỉ), giới hạn bởi chiều cao tối đa cho phép.</p>' +
        '<div class="form-grid">' + fld('B', 'Bề rộng chân đống (m)', 20) + fld('L', 'Chiều dài chân đống (m)', 60) + fld('a', 'Góc nghỉ tự nhiên (°)', 33) +
        fld('hmax', 'Chiều cao tối đa cho phép (m, 0 = không giới hạn)', 8) + fld('rho', 'Tỷ trọng đống (t/m³)', 1.6) + fld('allow', 'Sức chịu tải nền bãi (kPa)', 150) + '</div><div class="result" id="r"></div>',
      calc: function (v) {
        var r = v.B / 2, hNat = r * Math.tan(v.a * Math.PI / 180), h = v.hmax > 0 ? Math.min(hNat, v.hmax) : hNat, vol;
        var L = Math.max(v.L, v.B);
        if (h < hNat) {
          // Đống bị cắt đỉnh: mặt cắt hình thang, đỉnh phẳng rộng b
          var top = v.B - 2 * h / Math.tan(v.a * Math.PI / 180);
          var area = (v.B + top) / 2 * h;
          vol = area * (L - v.B) + (Math.PI * h / 3) * (r * r + r * (top / 2) + (top / 2) * (top / 2));
        } else {
          vol = r * h * (L - v.B) + Math.PI * r * r * h / 3;
        }
        var mass = vol * v.rho, p = h * v.rho * 9.81;
        return '<div>Chiều cao đống: <b>' + fmt(h, 2) + ' m</b>' + (h < hNat ? ' (đã cắt đỉnh, tự nhiên ' + fmt(hNat, 2) + ' m)' : '') + '</div>' +
          '<div class="v">Thể tích ≈ ' + fmt(vol, 0) + ' m³ · Khối lượng ≈ ' + fmt(mass, 0) + ' tấn</div>' +
          '<div>Mật độ chứa: <b>' + fmt(mass / (L * v.B), 1) + ' t/m²</b> diện tích chân đống</div>' +
          '<div>Áp lực lên nền tại tâm ≈ <b>' + fmt(p, 0) + ' kPa</b></div>' +
          (v.allow ? (p > v.allow ? '<div class="callout danger">⛔ Vượt sức chịu tải nền — giảm chiều cao đống hoặc gia cố nền.</div>' : '<div class="callout tip">✓ Trong sức chịu tải nền (' + fmt(p / v.allow * 100, 0) + '%).</div>') : '') +
          '<div class="meta">Giữ khoảng cách an toàn tới mép kè, tường kho theo hồ sơ thiết kế; không để người đứng sát chân đống khi xúc.</div>';
      }
    },
    { id: 'dm', icon: '⚖️', title: 'Ma trận ra quyết định có trọng số', custom: true }
  ];
  function fld(id, label, val) {
    return '<div class="field"><label for="f-' + id + '">' + label + '</label><input id="f-' + id + '" type="number" inputmode="decimal" step="any" value="' + val + '"></div>';
  }
  function viewTools(tid) {
    setTitle('Công cụ');
    var t = TOOLS.filter(function (x) { return x.id === tid; })[0] || TOOLS[0];
    var h = '<h1>🧮 Công cụ tính toán hiện trường</h1><div class="tool-tabs">' + TOOLS.map(function (x) {
      return '<a class="chip' + (x === t ? ' active' : '') + '" href="#/tools/' + x.id + '">' + x.icon + ' ' + esc(x.title) + '</a>';
    }).join('') + '</div><div class="card"><h2 style="margin-top:0">' + t.icon + ' ' + esc(t.title) + '</h2><div id="tool"></div></div>' + disclaimer();
    app.innerHTML = h;
    renderSidebar('tools');
    var el = $('#tool');
    if (t.custom) return decisionMatrix(el);
    el.innerHTML = t.html;
    function run() {
      var v = {};
      $all('input, select', el).forEach(function (i) { v[i.id.slice(2)] = i.value === '' ? 0 : parseFloat(i.value); });
      $('#r', el).innerHTML = t.calc(v);
    }
    el.addEventListener('input', run); el.addEventListener('change', run); run();
  }
  function decisionMatrix(el) {
    var dm = store.get('dm', null) || {
      criteria: [{ n: 'Chi phí', w: 30 }, { n: 'An toàn', w: 30 }, { n: 'Thời gian triển khai', w: 20 }, { n: 'Tác động khách hàng', w: 20 }],
      options: [{ n: 'Phương án A', s: [3, 4, 4, 3] }, { n: 'Phương án B', s: [4, 3, 3, 4] }]
    };
    function draw() {
      var tw = dm.criteria.reduce(function (s, c) { return s + (+c.w || 0); }, 0) || 1;
      var scores = dm.options.map(function (o) { return o.s.reduce(function (s, x, i) { return s + (+x || 0) * (+dm.criteria[i].w || 0); }, 0) / tw; });
      var best = Math.max.apply(null, scores);
      el.innerHTML = '<p class="meta">Chấm điểm 1–5 cho từng phương án theo từng tiêu chí; trọng số tính theo %. Dữ liệu được lưu trên máy này.</p>' +
        '<div class="table-wrap"><table class="dm-table"><tr><th>Tiêu chí</th><th>Trọng số</th>' +
        dm.options.map(function (o, oi) { return '<th><input class="name" data-k="on" data-oi="' + oi + '" value="' + esc(o.n) + '"></th>'; }).join('') + '</tr>' +
        dm.criteria.map(function (c, ci) {
          return '<tr><td><input class="name" data-k="cn" data-ci="' + ci + '" value="' + esc(c.n) + '"></td><td><input type="number" data-k="cw" data-ci="' + ci + '" value="' + c.w + '"></td>' +
            dm.options.map(function (o, oi) { return '<td><input type="number" min="1" max="5" data-k="s" data-ci="' + ci + '" data-oi="' + oi + '" value="' + (o.s[ci] || '') + '"></td>'; }).join('') + '</tr>';
        }).join('') +
        '<tr><th>Điểm tổng</th><th>' + tw + '%</th>' + scores.map(function (s) { return '<th>' + fmt(s, 2) + (s === best ? ' 🏆' : '') + '</th>'; }).join('') + '</tr></table></div>' +
        '<div class="btn-row"><button class="btn small" data-act="addC">+ Tiêu chí</button><button class="btn small" data-act="addO">+ Phương án</button>' +
        '<button class="btn small" data-act="delC">− Tiêu chí cuối</button><button class="btn small" data-act="delO">− Phương án cuối</button></div>' +
        (tw !== 100 ? '<div class="callout warn">Tổng trọng số đang là ' + tw + '% (nên = 100%).</div>' : '') +
        '<div class="callout info">Mẹo: nếu hai phương án chênh nhau &lt; 0,3 điểm, đừng để bảng quyết định thay bạn — hãy hỏi "phương án nào dễ đảo ngược hơn?" và "rủi ro tệ nhất của mỗi phương án là gì?".</div>';
    }
    el.addEventListener('change', function (e) {
      var i = e.target, k = i.getAttribute('data-k'); if (!k) return;
      var ci = +i.getAttribute('data-ci'), oi = +i.getAttribute('data-oi');
      if (k === 'cn') dm.criteria[ci].n = i.value; if (k === 'cw') dm.criteria[ci].w = +i.value;
      if (k === 'on') dm.options[oi].n = i.value; if (k === 's') dm.options[oi].s[ci] = Math.max(1, Math.min(5, +i.value));
      store.set('dm', dm); draw();
    });
    el.addEventListener('click', function (e) {
      var a = e.target.getAttribute('data-act'); if (!a) return;
      if (a === 'addC') dm.criteria.push({ n: 'Tiêu chí mới', w: 0 });
      if (a === 'addO') dm.options.push({ n: 'Phương án ' + String.fromCharCode(65 + dm.options.length), s: dm.criteria.map(function () { return 3; }) });
      if (a === 'delC' && dm.criteria.length > 1) { dm.criteria.pop(); dm.options.forEach(function (o) { o.s.length = dm.criteria.length; }); }
      if (a === 'delO' && dm.options.length > 1) dm.options.pop();
      store.set('dm', dm); draw();
    });
    draw();
  }

  // ---------- Mẫu biểu hiện trường ----------
  var FORMS = D.forms || [];
  var REC = store.get('forms', null) || {};
  function saveRec() { store.set('forms', REC); }
  function findForm(id) { return FORMS.filter(function (f) { return f.id === id; })[0] || null; }
  function num(x) { if (x == null || x === '') return NaN; return parseFloat(String(x).replace(/\s/g, '').replace(',', '.')); }
  function newId() { var d = new Date(); return d.getFullYear().toString().slice(2) + pad(d.getMonth() + 1) + pad(d.getDate()) + '-' + Math.random().toString(36).slice(2, 6).toUpperCase(); }
  function nowStr() { var d = new Date(); return d.toLocaleDateString('vi-VN') + ' ' + d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }); }
  function allChecks(form) { var out = []; form.sections.forEach(function (s) { (s.checklist || []).forEach(function (c) { out.push(c); }); }); return out; }
  function tables(form) { return form.sections.filter(function (s) { return s.table; }).map(function (s) { return s.table; }); }
  function helpers(form) {
    return {
      num: num, fmt: fmt,
      load: function (v) { return (num(v.wt) || 0) + (num(v.rig) || 0); },
      checks: function (v) {
        var r = { total: 0, done: 0, ng: 0, critNg: 0, critOpen: 0 };
        allChecks(form).forEach(function (c) {
          var s = v['chk_' + c.id]; r.total++;
          if (s) r.done++; if (s === 'ng') { r.ng++; if (c.critical) r.critNg++; }
          if (c.critical && !s) r.critOpen++;
        });
        return r;
      }
    };
  }
  function defaults(form) {
    var v = {};
    form.sections.forEach(function (s) {
      (s.fields || []).forEach(function (f) { if (f.def != null) v[f.id] = f.def; });
      if (s.table) { v[s.table.id] = []; for (var i = 0; i < (s.table.rows || 3); i++) v[s.table.id].push({}); }
    });
    return v;
  }
  function fieldInput(f, val, attrs) {
    val = val == null ? '' : val;
    if (f.type === 'textarea') return '<textarea class="note" ' + attrs + '>' + esc(val) + '</textarea>';
    if (f.type === 'select') return '<select ' + attrs + '><option value="">—</option>' + f.options.map(function (o) {
      return '<option' + (o === val ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') + '</select>';
    var t = f.type === 'number' ? 'text" inputmode="decimal' : f.type === 'datetime' ? 'datetime-local' : (f.type || 'text');
    return '<input type="' + t + '" ' + attrs + ' value="' + esc(val) + '">';
  }

  function viewForms() {
    setTitle('Mẫu biểu');
    var org = store.get('org', '');
    var recent = [];
    Object.keys(REC).forEach(function (fid) { (REC[fid] || []).forEach(function (r) { recent.push({ f: findForm(fid), r: r }); }); });
    recent = recent.filter(function (x) { return x.f; }).sort(function (a, b) { return (b.r.updated || '').localeCompare(a.r.updated || ''); });
    var h = '<h1>📝 Mẫu biểu hiện trường</h1><p class="meta">Điền trên điện thoại hoặc máy tính, tự lưu trên thiết bị này, tự tính toán và cảnh báo. Bấm <b>In / PDF</b> để ra bản A4 có ô ký. Ảnh chụp lưu trong điện thoại, ghi số ảnh vào biểu.</p>' +
      '<div class="card"><div class="field"><label for="org">Tên đơn vị in trên đầu biểu mẫu</label><input id="org" type="text" placeholder="VD: CÔNG TY CP CẢNG … — XÍ NGHIỆP XẾP DỠ …" value="' + esc(org) + '"></div></div>' +
      '<div class="grid">' + FORMS.map(function (f) {
        var n = (REC[f.id] || []).length;
        return '<div class="card module-card"><div class="head"><div class="emoji">' + f.icon + '</div><h3>' + esc(f.title) + '</h3></div><p>' + esc(f.desc) + '</p>' +
          '<div class="meta">' + f.code + ' · ' + n + ' biểu đã lưu</div><div class="btn-row" style="margin-top:4px"><a class="btn primary small" href="#/forms/' + f.id + '/new">+ Lập biểu mới</a>' +
          '<button class="btn small" data-blank="' + f.id + '">🖨️ In mẫu trống</button></div></div>';
      }).join('') + '</div>';
    h += '<h2>Biểu đã lưu</h2>' + (recent.length ? '<div class="card">' + recent.slice(0, 50).map(function (x) {
      return '<div class="gl-item"><div><a href="#/forms/' + x.f.id + '/' + x.r.id + '"><b>' + x.f.icon + ' ' + esc(x.f.title) + '</b></a>' +
        '<div class="d">' + esc(x.r.id) + (x.r.values.vessel ? ' · ' + esc(x.r.values.vessel) : '') + ' · cập nhật ' + esc(x.r.updatedText || '') + '</div></div></div>';
    }).join('') + '</div>' : '<p class="meta">Chưa có biểu nào.</p>') + '<div id="printArea" class="print-only"></div>';
    app.innerHTML = '<div id="formsRoot">' + h + '</div>';
    renderSidebar('forms');
    $('#org').addEventListener('input', function (e) { store.set('org', e.target.value); });
    $('#formsRoot').addEventListener('click', function (e) {
      var b = e.target.closest('[data-blank]'); if (!b) return;
      var f = findForm(b.getAttribute('data-blank'));
      $('#printArea').innerHTML = printHtml(f, blankValues(f), '');
      printForm();
    });
  }
  function printForm() { document.body.classList.add('print-form'); window.print(); }
  window.addEventListener('afterprint', function () { document.body.classList.remove('print-form'); });
  function blankValues(f) {
    var v = {}; tables(f).forEach(function (t) { v[t.id] = []; for (var i = 0; i < Math.max(8, t.rows || 3); i++) v[t.id].push({}); });
    return v;
  }

  function viewForm(fid, rid) {
    var form = findForm(fid); if (!form) return notFound();
    var list = REC[fid] = REC[fid] || [];
    var rec = list.filter(function (r) { return r.id === rid; })[0];
    var isNew = !rec;
    if (!rec) rec = { id: newId(), created: new Date().toISOString(), values: defaults(form) };
    var v = rec.values, H = helpers(form), timer;
    setTitle(form.title);

    function persist() {
      rec.updated = new Date().toISOString(); rec.updatedText = nowStr();
      if (isNew) { list.unshift(rec); isNew = false; history.replaceState(null, '', '#/forms/' + fid + '/' + rec.id); }
      saveRec();
      var st = $('#fState'); if (st) st.textContent = 'Đã lưu lúc ' + rec.updatedText;
    }
    function updateSummary() { var s = $('#fsum'); if (s && form.summary) s.innerHTML = form.summary(v, H); }

    function render() {
      var h = '<div class="breadcrumb no-print"><a href="#/">Trang chủ</a> › <a href="#/forms">Mẫu biểu</a> › ' + esc(form.code) + '</div>' +
        '<h1>' + form.icon + ' ' + esc(form.title) + '</h1><div class="meta">' + esc(form.en) + ' · Số: <b>' + esc(rec.id) + '</b> · <span id="fState">' +
        (rec.updatedText ? 'Đã lưu lúc ' + esc(rec.updatedText) : 'Chưa lưu — tự lưu khi bạn bắt đầu nhập') + '</span></div>' +
        (form.lesson ? '<p class="meta">Xem bài học liên quan: <a href="#/l/' + form.lesson[0] + '/' + form.lesson[1] + '">mở bài</a></p>' : '') +
        '<div class="screen-only">';
      form.sections.forEach(function (s) {
        h += '<div class="card form-sec"><h2>' + esc(s.title) + '</h2>';
        if (s.fields) h += '<div class="form-grid">' + s.fields.map(function (f) {
          return '<div class="field' + (f.type === 'textarea' ? ' wide' : '') + '"><label>' + esc(f.label) + '</label>' + fieldInput(f, v[f.id], 'data-f="' + f.id + '"') + '</div>';
        }).join('') + '</div>';
        if (s.table) {
          var t = s.table, rows = v[t.id] = v[t.id] || [];
          h += rows.map(function (row, i) {
            return '<div class="row-card"><div class="row-head"><b>Dòng ' + (i + 1) + '</b><button class="btn small" data-delrow="' + t.id + '" data-r="' + i + '" aria-label="Xóa dòng">✕</button></div><div class="form-grid">' +
              t.columns.map(function (c) { return '<div class="field"><label>' + esc(c.label) + '</label>' + fieldInput(c, row[c.id], 'data-t="' + t.id + '" data-r="' + i + '" data-c="' + c.id + '"') + '</div>'; }).join('') + '</div></div>';
          }).join('') + '<div class="btn-row"><button class="btn small" data-addrow="' + t.id + '">+ Thêm dòng</button><button class="btn small" data-csv="' + t.id + '">⬇️ Xuất CSV (Excel)</button></div>';
        }
        if (s.checklist) {
          var g = '';
          h += s.checklist.map(function (c) {
            var head = c.g && c.g !== g ? '<h3>' + esc(c.g) + '</h3>' : ''; g = c.g;
            var st = v['chk_' + c.id] || '';
            return head + '<div class="chk-item' + (st === 'ng' ? ' ng' : st === 'ok' ? ' ok' : '') + '"><div class="chk-text">' + (c.critical ? '⚠️ ' : '') + esc(c.text) + '</div>' +
              '<div class="chk-ctl"><div class="seg" role="group">' + [['ok', 'Đạt'], ['ng', 'Không đạt'], ['na', 'N/A']].map(function (o) {
                return '<button type="button" class="seg-btn' + (st === o[0] ? ' on ' + o[0] : '') + '" data-k="' + c.id + '" data-s="' + o[0] + '">' + o[1] + '</button>';
              }).join('') + '</div><input type="text" placeholder="Ghi chú" data-kn="' + c.id + '" value="' + esc(v['chkn_' + c.id] || '') + '"></div></div>';
          }).join('');
        }
        h += '</div>';
      });
      h += '<div class="card"><h2>Ký xác nhận</h2><div class="form-grid">' + form.signatures.map(function (sg, i) {
        return '<div class="field"><label>' + esc(sg) + ' — họ tên</label><input type="text" data-f="sig_' + i + '" value="' + esc(v['sig_' + i] || '') + '"></div>';
      }).join('') + '</div><p class="meta">Chữ ký tay trên bản in.</p></div>';
      h += '</div>';
      if (form.summary) h += '<div class="card result-card"><h2>📊 Tổng hợp & cảnh báo</h2><div id="fsum"></div></div>';
      h += '<div class="btn-row no-print"><button class="btn primary" id="fPrint">🖨️ In / Lưu PDF</button><button class="btn" id="fCopy">⧉ Nhân bản</button>' +
        '<a class="btn" href="#/forms">← Danh sách</a><button class="btn" id="fDel" style="color:var(--danger)">🗑️ Xóa biểu</button></div>' +
        '<div id="printArea" class="print-only"></div>';
      root.innerHTML = h;
      updateSummary();
    }
    app.innerHTML = '<div id="formRoot"></div>';
    var root = $('#formRoot');
    render();
    renderSidebar('forms');

    function onInput(e) {
      var el = e.target, k;
      if ((k = el.getAttribute('data-f'))) v[k] = el.value;
      else if ((k = el.getAttribute('data-t'))) { v[k][+el.getAttribute('data-r')][el.getAttribute('data-c')] = el.value; }
      else if ((k = el.getAttribute('data-kn'))) v['chkn_' + k] = el.value;
      else return;
      updateSummary(); clearTimeout(timer); timer = setTimeout(persist, 300);
    }
    root.addEventListener('input', onInput);
    root.addEventListener('change', onInput);
    root.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var k;
      if ((k = b.getAttribute('data-k'))) {
        var cur = v['chk_' + k]; v['chk_' + k] = cur === b.getAttribute('data-s') ? '' : b.getAttribute('data-s');
        persist(); var y = window.scrollY; render(); window.scrollTo(0, y);
      } else if ((k = b.getAttribute('data-addrow'))) {
        v[k].push({}); persist(); var y2 = window.scrollY; render(); window.scrollTo(0, y2);
      } else if ((k = b.getAttribute('data-delrow'))) {
        if (!confirm('Xóa dòng ' + (+b.getAttribute('data-r') + 1) + '?')) return;
        v[k].splice(+b.getAttribute('data-r'), 1); persist(); var y3 = window.scrollY; render(); window.scrollTo(0, y3);
      } else if ((k = b.getAttribute('data-csv'))) {
        exportCsv(form, rec, k);
      } else if (b.id === 'fPrint') {
        $('#printArea').innerHTML = printHtml(form, v, rec.id); printForm();
      } else if (b.id === 'fCopy') {
        var copy = { id: newId(), created: new Date().toISOString(), values: JSON.parse(JSON.stringify(v)) };
        form.signatures.forEach(function (s, i) { delete copy.values['sig_' + i]; });
        copy.updated = copy.created; copy.updatedText = nowStr(); list.unshift(copy); saveRec();
        location.hash = '#/forms/' + fid + '/' + copy.id;
      } else if (b.id === 'fDel') {
        if (!confirm('Xóa biểu ' + rec.id + '? Không thể hoàn tác.')) return;
        var i = list.indexOf(rec); if (i >= 0) list.splice(i, 1); saveRec(); location.hash = '#/forms';
      }
    });
  }

  function exportCsv(form, rec, tid) {
    var t = tables(form).filter(function (x) { return x.id === tid; })[0];
    var q = function (s) { s = s == null ? '' : String(s); return '"' + s.replace(/"/g, '""') + '"'; };
    var lines = [['STT'].concat(t.columns.map(function (c) { return c.label; })).map(q).join(',')];
    (rec.values[tid] || []).forEach(function (r, i) {
      if (!t.columns.some(function (c) { return r[c.id]; })) return;
      lines.push([i + 1].concat(t.columns.map(function (c) { return r[c.id]; })).map(q).join(','));
    });
    var blob = new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = form.code + '-' + rec.id + '.csv'; a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
  }

  function printHtml(form, v, rid) {
    var org = store.get('org', ''), blank = !rid;
    function val(x) { return x == null || x === '' ? '<span class="pf-blank"></span>' : esc(String(x).replace('T', ' ')); }
    var h = '<div class="pf"><table class="pf-head"><tr><td class="pf-org">' + esc(org || 'TÊN ĐƠN VỊ') + '</td><td class="pf-title"><b>' + esc(form.title.toUpperCase()) + '</b><br><i>' + esc(form.en) + '</i></td>' +
      '<td class="pf-no">' + esc(form.code) + '<br>Số: ' + (rid ? esc(rid) : '..........') + '</td></tr></table>';
    form.sections.forEach(function (s) {
      h += '<h3>' + esc(s.title) + '</h3>';
      if (s.fields) h += '<table class="pf-fields">' + s.fields.map(function (f) {
        if (f.type === 'textarea') return '<tr><td colspan="2"><b>' + esc(f.label) + '</b><div class="pf-area">' + esc(v[f.id] || '').replace(/\n/g, '<br>') + '</div></td></tr>';
        return '<tr><th>' + esc(f.label) + '</th><td>' + val(v[f.id]) + '</td></tr>';
      }).join('') + '</table>';
      if (s.table) {
        var rows = (v[s.table.id] || []).filter(function (r) { return blank || s.table.columns.some(function (c) { return r[c.id]; }); });
        h += '<table class="pf-grid"><tr><th>#</th>' + s.table.columns.map(function (c) { return '<th>' + esc(c.label) + '</th>'; }).join('') + '</tr>' +
          rows.map(function (r, i) { return '<tr><td>' + (i + 1) + '</td>' + s.table.columns.map(function (c) { return '<td>' + (r[c.id] ? esc(r[c.id]) : '') + '</td>'; }).join('') + '</tr>'; }).join('') + '</table>';
      }
      if (s.checklist) {
        h += '<table class="pf-grid"><tr><th>#</th><th>Nội dung kiểm tra</th><th>Đạt</th><th>Không<br>đạt</th><th>N/A</th><th class="pf-n">Ghi chú</th></tr>' +
          s.checklist.map(function (c, i) {
            var st = v['chk_' + c.id];
            return '<tr><td>' + (i + 1) + '</td><td>' + (c.critical ? '⚠️ ' : '') + esc(c.text) + '</td>' + ['ok', 'ng', 'na'].map(function (o) { return '<td class="pf-c">' + (st === o ? '☒' : '☐') + '</td>'; }).join('') +
              '<td class="pf-n">' + esc(v['chkn_' + c.id] || '') + '</td></tr>';
          }).join('') + '</table><p class="pf-note">⚠️ = điều kiện bắt buộc. Một mục bắt buộc “Không đạt” thì không được thực hiện.</p>';
      }
    });
    if (form.summary && !blank) h += '<h3>Tổng hợp</h3><div class="pf-sum">' + form.summary(v, helpers(form)) + '</div>';
    h += '<p class="pf-note">Lập lúc: ' + (blank ? '....../....../.......... ........:........' : esc(nowStr())) + '</p><table class="pf-sign"><tr>' + form.signatures.map(function (s, i) {
      return '<td><b>' + esc(s) + '</b><br><i>(Ký, ghi rõ họ tên)</i><div class="pf-space"></div>' + esc(v['sig_' + i] || '') + '</td>';
    }).join('') + '</tr></table></div>';
    return h;
  }

  // ---------- Progress ----------
  function viewProgress() {
    setTitle('Tiến độ');
    var lessons = allLessons(), done = lessons.filter(function (x) { return P.done[lessonKey(x.m, x.l)]; }).length;
    var h = '<h1>📈 Tiến độ học tập</h1><div class="stats">' + stat(Math.round(done * 100 / (lessons.length || 1)) + '%', 'Tổng tiến độ') +
      stat(streak() + ' 🔥', 'Chuỗi ngày học') + stat(P.days.length, 'Tổng số ngày đã học') +
      stat(Object.keys(P.notes).filter(function (k) { return P.notes[k]; }).length, 'Bài có ghi chú') + '</div>';
    h += '<div class="card" style="margin-top:14px"><div class="table-wrap"><table><tr><th>Chuyên đề</th><th>Hoàn thành</th><th>Kiểm tra tổng hợp</th></tr>' +
      MODULES.map(function (m) {
        var q = P.quiz['module:' + m.id];
        return '<tr><td><a href="#/m/' + m.id + '">' + m.icon + ' ' + esc(m.title) + '</a></td><td>' + modulePct(m) + '%</td><td>' + (q ? q.best + '/' + q.total : '—') + '</td></tr>';
      }).join('') + '</table></div></div>';
    var noted = Object.keys(P.notes).filter(function (k) { return P.notes[k]; });
    if (noted.length) {
      h += '<h2>🗒️ Ghi chú của tôi</h2>' + noted.map(function (k) {
        var p = k.split('/'), m = findModule(p[0]), l = m && m.lessons.filter(function (x) { return x.id === p[1]; })[0];
        if (!l) return '';
        return '<div class="card"><a href="#/l/' + m.id + '/' + l.id + '"><b>' + esc(l.title) + '</b></a><p style="white-space:pre-wrap;margin:.4em 0 0">' + esc(P.notes[k]) + '</p></div>';
      }).join('');
    }
    h += '<h2>💾 Sao lưu & chuyển thiết bị</h2><div class="card"><p class="meta">Tiến độ và các biểu mẫu đã lập lưu trên trình duyệt của thiết bị này. Để chuyển sang điện thoại/máy tính khác: Tải bản sao lưu → mở trang trên thiết bị mới → Khôi phục.</p>' +
      '<div class="btn-row"><button class="btn" id="exp">⬇️ Tải bản sao lưu</button><label class="btn">⬆️ Khôi phục<input type="file" id="imp" accept="application/json" hidden></label>' +
      '<button class="btn" id="rst" style="color:var(--danger)">🗑️ Xóa toàn bộ tiến độ</button></div></div>';
    app.innerHTML = h;
    renderSidebar('progress');
    $('#exp').addEventListener('click', function () {
      var blob = new Blob([JSON.stringify({ app: 'port-academy', v: 2, progress: P, dm: store.get('dm', null), forms: REC, org: store.get('org', '') }, null, 2)], { type: 'application/json' });
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'port-academy-backup-' + today() + '.json'; a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    });
    $('#imp').addEventListener('change', function (e) {
      var f = e.target.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try {
          var d = JSON.parse(r.result); if (d.app !== 'port-academy' || !d.progress) throw new Error('sai định dạng');
          P = d.progress; ['done', 'quiz', 'checks', 'notes', 'cards', 'days'].forEach(function (k) { if (!P[k]) P[k] = k === 'days' ? [] : {}; });
          save(); if (d.dm) store.set('dm', d.dm); if (d.forms) { REC = d.forms; saveRec(); } if (d.org) store.set('org', d.org); alert('Đã khôi phục tiến độ.'); viewProgress();
        } catch (err) { alert('File không hợp lệ: ' + err.message); }
      };
      r.readAsText(f);
    });
    $('#rst').addEventListener('click', function () {
      if (!confirm('Xóa toàn bộ tiến độ, ghi chú và kết quả flashcard? Không thể hoàn tác.')) return;
      P = { done: {}, quiz: {}, checks: {}, notes: {}, cards: {}, days: [] }; save(); viewProgress();
    });
  }

  // ---------- Search ----------
  var INDEX = null;
  function buildIndex() {
    INDEX = allLessons().map(function (x) {
      return { m: x.m, l: x.l, text: stripHtml(x.l.title + ' ' + x.l.body + ' ' + (x.l.keyPoints || []).join(' ') + ' ' + (x.l.apply || []).join(' ')) };
    });
  }
  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd'); }
  function viewSearch(q) {
    setTitle('Tìm: ' + q);
    if (!INDEX) buildIndex();
    var nq = norm(q.trim()), terms = nq.split(/\s+/).filter(Boolean);
    var hits = INDEX.map(function (x) {
      var nt = norm(x.text), score = 0;
      terms.forEach(function (t) { var i = nt.indexOf(t); while (i >= 0) { score++; i = nt.indexOf(t, i + 1); } });
      if (norm(x.l.title).indexOf(nq) >= 0) score += 20;
      return { x: x, score: terms.every(function (t) { return nt.indexOf(t) >= 0; }) ? score : 0, nt: nt };
    }).filter(function (h) { return h.score > 0; }).sort(function (a, b) { return b.score - a.score; });
    var gl = GLOSSARY.filter(function (g) { return norm(g.t + ' ' + g.vi).indexOf(nq) >= 0; });
    var h = '<h1>🔎 Kết quả cho “' + esc(q) + '”</h1><p class="meta">' + hits.length + ' bài học · ' + gl.length + ' thuật ngữ</p>';
    h += hits.slice(0, 30).map(function (hh) {
      var i = hh.nt.indexOf(terms[0]), start = Math.max(0, i - 80);
      var snip = hh.x.text.substr(start, 220);
      return '<a class="search-hit" href="#/l/' + hh.x.m.id + '/' + hh.x.l.id + '"><b>' + esc(hh.x.l.title) + '</b> <span class="meta">— ' + hh.x.m.icon + ' ' + esc(hh.x.m.short || hh.x.m.title) + '</span>' +
        '<div class="s">' + (start > 0 ? '…' : '') + highlight(snip, terms) + '…</div></a>';
    }).join('');
    if (gl.length) h += '<h2>Thuật ngữ</h2><div class="card">' + gl.slice(0, 30).map(function (g) {
      return '<div class="gl-item"><div><div class="t">' + esc(g.t) + '</div><div>' + esc(g.vi) + '</div></div></div>';
    }).join('') + '</div>';
    if (!hits.length && !gl.length) h += '<p>Không tìm thấy. Thử từ khóa khác, ví dụ: <a href="#/search/kho ngoại quan">kho ngoại quan</a>, <a href="#/search/tandem">tandem</a>, <a href="#/search/phản hồi">phản hồi</a>.</p>';
    app.innerHTML = h;
    renderSidebar('search');
  }
  function highlight(s, terms) {
    // So khớp không dấu nhưng tô sáng trên chuỗi gốc: chuẩn hóa từng ký tự để giữ nguyên vị trí.
    var chars = Array.from(s), n = chars.map(function (c) { return norm(c); }).join('');
    var marks = new Array(chars.length).fill(false);
    if (n.length === chars.length) {
      terms.forEach(function (t) { var i = n.indexOf(t); while (i >= 0) { for (var k = i; k < i + t.length; k++) marks[k] = true; i = n.indexOf(t, i + 1); } });
    }
    var out = '', open = false;
    chars.forEach(function (c, i) {
      if (marks[i] && !open) { out += '<mark>'; open = true; } if (!marks[i] && open) { out += '</mark>'; open = false; }
      out += esc(c);
    });
    return out + (open ? '</mark>' : '');
  }

  function notFound() {
    app.innerHTML = '<h1>Không tìm thấy trang</h1><p><a href="#/">Về trang chủ</a></p>';
    renderSidebar('');
  }

  // ---------- Router ----------
  function route() {
    var hash = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    var p = hash.split('/');
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (!hash) viewHome();
    else if (p[0] === 'modules') viewModules();
    else if (p[0] === 'm') viewModule(p[1]);
    else if (p[0] === 'l') viewLesson(p[1], p[2]);
    else if (p[0] === 'quiz') viewModuleQuiz(p[1]);
    else if (p[0] === 'flashcards') { fcState.queue = []; viewFlashcards(); }
    else if (p[0] === 'glossary') viewGlossary();
    else if (p[0] === 'tools') viewTools(p[1]);
    else if (p[0] === 'forms') { if (p[1]) viewForm(p[1], p[2]); else viewForms(); }
    else if (p[0] === 'progress') viewProgress();
    else if (p[0] === 'search') viewSearch(p.slice(1).join('/'));
    else notFound();
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  $('#searchForm').addEventListener('submit', function (e) {
    e.preventDefault(); var q = $('#q').value.trim(); if (q) { location.hash = '#/search/' + encodeURIComponent(q); $('#q').blur(); }
  });
  $('#themeBtn').addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme') ||
      (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var nt = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nt);
    try { localStorage.setItem('pa.theme', nt); } catch (e) { /* bỏ qua */ }
  });
  window.addEventListener('hashchange', route);
  route();

  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();
