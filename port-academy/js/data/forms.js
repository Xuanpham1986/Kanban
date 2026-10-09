window.PA_DATA = window.PA_DATA || { modules: [], glossary: [] };
/* Mẫu biểu hiện trường. Mỗi mẫu gồm các section:
   - fields: ô nhập đơn (type: text | number | date | time | datetime | select | textarea)
   - table: bảng nhiều dòng (columns giống fields)
   - checklist: danh sách kiểm tra Đạt / Không đạt / N/A (critical = điều kiện bắt buộc)
   summary(v, h): trả HTML tóm tắt/tính toán; h = { num, fmt }.
   signatures: các bên ký trên bản in. */
window.PA_DATA.forms = [
  {
    id: 'coil', code: 'BM-TC-01', icon: '🧻', title: 'Biên bản tình trạng tôn cuộn khi dỡ hàng', en: 'Steel Coil Condition Report',
    desc: 'Ghi nhận tình trạng từng cuộn theo số cuộn, phân biệt hư hỏng có sẵn trong hầm tàu và phát sinh khi nâng/ trên bãi.',
    lesson: ['cang-quoc-te', 'ton-cuon'],
    sections: [
      {
        title: 'Thông tin chung', fields: [
          { id: 'vessel', label: 'Tàu / Chuyến (Vessel / Voy.)', type: 'text' },
          { id: 'bl', label: 'Vận đơn (B/L No.)', type: 'text' },
          { id: 'hold', label: 'Hầm (Hold No.)', type: 'text' },
          { id: 'berth', label: 'Cầu bến', type: 'text' },
          { id: 'start', label: 'Bắt đầu', type: 'datetime' },
          { id: 'end', label: 'Kết thúc', type: 'datetime' },
          { id: 'consignee', label: 'Chủ hàng / Người nhận', type: 'text' },
          { id: 'surveyor', label: 'Giám định viên (nếu có)', type: 'text' },
          { id: 'weather', label: 'Thời tiết', type: 'select', options: ['Khô ráo', 'Mưa nhỏ – đã dừng', 'Mưa – đã đậy hầm', 'Khác'] }
        ]
      },
      {
        title: 'Chi tiết từng cuộn', table: {
          id: 'coils', rows: 5, columns: [
            { id: 'no', label: 'Số cuộn (Coil No.)', type: 'text' },
            { id: 'wt', label: 'Khối lượng (t)', type: 'number' },
            { id: 'pos', label: 'Vị trí (hầm/tầng)', type: 'text' },
            { id: 'cond', label: 'Tình trạng', type: 'select', options: ['Tốt', 'Móp mép', 'Móp vòng ngoài', 'Lệch lớp', 'Gỉ – ướt', 'Đai đứt/lỏng', 'Bao bì rách', 'Khác'] },
            { id: 'when', label: 'Phát hiện khi', type: 'select', options: ['Trong hầm (có sẵn)', 'Khi nâng', 'Trên bãi/ kho', 'Khi giao ô tô'] },
            { id: 'agno3', label: 'Thử AgNO₃', type: 'select', options: ['Không thử', 'Âm tính (nước ngọt)', 'Dương tính (muối)'] },
            { id: 'desc', label: 'Mô tả, kích thước hư hỏng', type: 'text' },
            { id: 'photo', label: 'Số ảnh', type: 'text' }
          ]
        }
      },
      { title: 'Ghi chú / Kết luận', fields: [{ id: 'remarks', label: 'Ghi chú (Remarks)', type: 'textarea' }] }
    ],
    summary: function (v, h) {
      var rows = (v.coils || []).filter(function (r) { return r.no || r.wt; });
      var wt = rows.reduce(function (s, r) { return s + (h.num(r.wt) || 0); }, 0);
      var bad = rows.filter(function (r) { return r.cond && r.cond !== 'Tốt'; });
      var inHold = bad.filter(function (r) { return r.when === 'Trong hầm (có sẵn)'; }).length;
      var salt = rows.filter(function (r) { return r.agno3 === 'Dương tính (muối)'; }).length;
      return '<div>Tổng: <b>' + rows.length + ' cuộn</b> · <b>' + h.fmt(wt, 2) + ' t</b></div>' +
        '<div>Cuộn có khuyết tật: <b>' + bad.length + '</b> (có sẵn trong hầm: <b>' + inHold + '</b>, phát sinh sau: <b>' + (bad.length - inHold) + '</b>)</div>' +
        (salt ? '<div>Dương tính muối (nước biển): <b>' + salt + '</b> cuộn</div>' : '') +
        (inHold ? '<div class="callout warn">Hư hỏng có sẵn trong hầm phải có chữ ký đại phó (Chief Officer) trước khi cuộn rời móc cẩu.</div>' : '');
    },
    signatures: ['Đại diện tàu (Chief Officer)', 'Đại diện cảng (Kiểm đếm/ Giám sát)', 'Chủ hàng/ Giám định viên']
  },
  {
    id: 'draft', code: 'BM-MN-02', icon: '📏', title: 'Biên bản đọc mớn nước 6 điểm', en: 'Draft Reading Record',
    desc: 'Đọc mớn mũi – giữa – lái hai mạn trước/sau làm hàng, tự tính mớn hiệu chỉnh (mean of means) và khối lượng hàng gần đúng.',
    lesson: ['cang-quoc-te', 'mon-nuoc-on-dinh'],
    sections: [
      {
        title: 'Phương tiện & hàng hóa', fields: [
          { id: 'vessel', label: 'Tàu / Sà lan', type: 'text' },
          { id: 'reg', label: 'Số IMO / Số đăng ký', type: 'text' },
          { id: 'cargo', label: 'Hàng hóa', type: 'text' },
          { id: 'op', label: 'Tác nghiệp', type: 'select', options: ['Xếp hàng (Loading)', 'Dỡ hàng (Discharging)'] },
          { id: 'berth', label: 'Cầu bến / Vị trí', type: 'text' },
          { id: 'reader', label: 'Người đọc mớn', type: 'text' }
        ]
      },
      {
        title: 'Thông số tính toán', fields: [
          { id: 'L', label: 'Chiều dài đường nước L (m)', type: 'number' },
          { id: 'B', label: 'Chiều rộng đường nước B (m)', type: 'number' },
          { id: 'cw', label: 'Hệ số đường nước Cw (sà lan hộp ~0,90–0,95)', type: 'number', def: '0,92' },
          { id: 'tpc', label: 'Hoặc TPC từ bảng thủy tĩnh (t/cm) — ưu tiên nếu có', type: 'number' }
        ]
      },
      {
        title: 'Trước khi làm hàng', fields: [
          { id: 't1', label: 'Thời điểm đọc', type: 'datetime' },
          { id: 'f1p', label: 'Mũi – mạn trái (m)', type: 'number' }, { id: 'f1s', label: 'Mũi – mạn phải (m)', type: 'number' },
          { id: 'm1p', label: 'Giữa – mạn trái (m)', type: 'number' }, { id: 'm1s', label: 'Giữa – mạn phải (m)', type: 'number' },
          { id: 'a1p', label: 'Lái – mạn trái (m)', type: 'number' }, { id: 'a1s', label: 'Lái – mạn phải (m)', type: 'number' },
          { id: 'rho1', label: 'Tỷ trọng nước (t/m³)', type: 'number', def: '1,000' },
          { id: 'bal1', label: 'Nước dằn (t)', type: 'number' }, { id: 'oth1', label: 'Nhiên liệu + nước ngọt + khác (t)', type: 'number' }
        ]
      },
      {
        title: 'Sau khi làm hàng', fields: [
          { id: 't2', label: 'Thời điểm đọc', type: 'datetime' },
          { id: 'f2p', label: 'Mũi – mạn trái (m)', type: 'number' }, { id: 'f2s', label: 'Mũi – mạn phải (m)', type: 'number' },
          { id: 'm2p', label: 'Giữa – mạn trái (m)', type: 'number' }, { id: 'm2s', label: 'Giữa – mạn phải (m)', type: 'number' },
          { id: 'a2p', label: 'Lái – mạn trái (m)', type: 'number' }, { id: 'a2s', label: 'Lái – mạn phải (m)', type: 'number' },
          { id: 'rho2', label: 'Tỷ trọng nước (t/m³)', type: 'number', def: '1,000' },
          { id: 'bal2', label: 'Nước dằn (t)', type: 'number' }, { id: 'oth2', label: 'Nhiên liệu + nước ngọt + khác (t)', type: 'number' }
        ]
      },
      { title: 'Ghi chú', fields: [{ id: 'remarks', label: 'Ghi chú (sóng, nghiêng, điều kiện đọc…)', type: 'textarea' }] }
    ],
    summary: function (v, h) {
      var n = h.num;
      function mom(k) {
        var f = (n(v['f' + k + 'p']) + n(v['f' + k + 's'])) / 2, m = (n(v['m' + k + 'p']) + n(v['m' + k + 's'])) / 2, a = (n(v['a' + k + 'p']) + n(v['a' + k + 's'])) / 2;
        return { f: f, m: m, a: a, mm: (f + 6 * m + a) / 8, trim: a - f, list: (n(v['m' + k + 'p']) - n(v['m' + k + 's'])) };
      }
      var b = mom(1), a = mom(2);
      if (!isFinite(b.mm) || !isFinite(a.mm)) return '<div class="meta">Nhập đủ 6 điểm mớn nước trước và sau để tính.</div>';
      var rho = n(v.rho2) || n(v.rho1) || 1, dT = a.mm - b.mm, tpc = n(v.tpc), method, disp;
      if (tpc > 0) { disp = dT * 100 * tpc * rho / 1.025; method = 'TPC ' + h.fmt(tpc, 2) + ' t/cm (bảng thủy tĩnh, hiệu chỉnh tỷ trọng về ' + h.fmt(rho, 3) + ')'; }
      else if (n(v.L) > 0 && n(v.B) > 0) { var cw = n(v.cw) || 0.92; disp = n(v.L) * n(v.B) * cw * dT * rho; method = 'L × B × Cw × ΔT × ρ (sà lan hộp, gần đúng)'; }
      var adj = ((n(v.bal2) || 0) - (n(v.bal1) || 0)) + ((n(v.oth2) || 0) - (n(v.oth1) || 0));
      var out = '<div class="table-wrap"><table><tr><th></th><th>Mũi TB</th><th>Giữa TB</th><th>Lái TB</th><th>Mean of means</th><th>Chúi (lái−mũi)</th></tr>' +
        '<tr><td>Trước</td><td>' + h.fmt(b.f, 3) + '</td><td>' + h.fmt(b.m, 3) + '</td><td>' + h.fmt(b.a, 3) + '</td><td><b>' + h.fmt(b.mm, 3) + '</b></td><td>' + h.fmt(b.trim * 100, 0) + ' cm</td></tr>' +
        '<tr><td>Sau</td><td>' + h.fmt(a.f, 3) + '</td><td>' + h.fmt(a.m, 3) + '</td><td>' + h.fmt(a.a, 3) + '</td><td><b>' + h.fmt(a.mm, 3) + '</b></td><td>' + h.fmt(a.trim * 100, 0) + ' cm</td></tr></table></div>' +
        '<div>Chênh mớn hiệu chỉnh: <b>' + h.fmt(dT * 100, 1) + ' cm</b></div>';
      if (disp == null) return out + '<div class="meta">Nhập L, B (hoặc TPC) để tính khối lượng.</div>';
      var cargo = Math.abs(disp) - (dT >= 0 ? adj : -adj);
      return out + '<div>Thay đổi lượng chiếm nước: <b>' + h.fmt(disp, 1) + ' t</b> — ' + method + '</div>' +
        '<div>Trừ thay đổi dằn/ nhiên liệu/ khác: <b>' + h.fmt(adj, 1) + ' t</b></div>' +
        '<div class="v">Khối lượng hàng ' + (dT >= 0 ? 'đã xếp' : 'đã dỡ') + ' ≈ ' + h.fmt(cargo, 1) + ' t</div>' +
        (Math.abs(a.list) >= 0.05 ? '<div class="callout warn">Chênh mớn giữa hai mạn sau làm hàng ' + h.fmt(Math.abs(a.list) * 100, 0) + ' cm — phương tiện đang nghiêng, kiểm tra phân bố hàng.</div>' : '') +
        '<div class="meta">Kết quả gần đúng để kiểm tra chéo; giao nhận chính thức theo giám định với bảng thủy tĩnh và các hiệu chỉnh.</div>';
    },
    signatures: ['Thuyền trưởng/ Đại diện phương tiện', 'Đại diện cảng', 'Giám định viên/ Chủ hàng']
  },
  {
    id: 'heavylift', code: 'BM-NH-03', icon: '🏗️', title: 'Checklist trước khi nâng hàng nặng bằng cẩu tàu', en: 'Heavy-lift Pre-lift Checklist (Ship\'s Cranes)',
    desc: 'Kiểm tra hồ sơ, tàu, bờ/ sà lan, phụ kiện, liên lạc – thời tiết và nâng thử. Mục ⚠️ là điều kiện bắt buộc: một mục “Không đạt” = KHÔNG ĐƯỢC NÂNG.',
    lesson: ['cang-quoc-te', 'sieu-trong-sa-lan'],
    sections: [
      {
        title: 'Thông tin lần nâng', fields: [
          { id: 'vessel', label: 'Tàu / Chuyến', type: 'text' },
          { id: 'item', label: 'Kiện hàng (mô tả, mã kiện)', type: 'text' },
          { id: 'wt', label: 'Khối lượng đã xác minh (t)', type: 'number' },
          { id: 'rig', label: 'Khối lượng phụ kiện + dầm + móc (t)', type: 'number' },
          { id: 'dim', label: 'Kích thước D × R × C (m)', type: 'text' },
          { id: 'cog', label: 'Vị trí trọng tâm (CoG)', type: 'text' },
          { id: 'mode', label: 'Phương thức', type: 'select', options: ['Một cẩu tàu', 'Nâng kép 2 cẩu tàu (tandem)', 'Cẩu tàu + cẩu bờ'] },
          { id: 'swl', label: 'SWL cấu hình sử dụng (t) — đơn hoặc kép', type: 'number' },
          { id: 'radius', label: 'Bán kính lớn nhất (m)', type: 'number' },
          { id: 'dest', label: 'Vị trí đặt hàng', type: 'select', options: ['Cầu tàu (tấm kê)', 'SPMT/ rơ moóc thủy lực', 'Sà lan', 'Từ bờ lên tàu'] },
          { id: 'windlim', label: 'Gió giới hạn theo phương án (m/s)', type: 'number' },
          { id: 'wind', label: 'Gió đo thực tế (m/s)', type: 'number' },
          { id: 'time', label: 'Thời điểm kiểm tra', type: 'datetime' }
        ]
      },
      {
        title: 'Danh mục kiểm tra', checklist: [
          { g: 'A. Hồ sơ', id: 'a1', text: 'Phương án nâng (lift plan) đã được tàu/ supercargo phê duyệt và cảng đã nhận bản sao', critical: true },
          { g: 'A. Hồ sơ', id: 'a2', text: 'Chứng chỉ cẩu tàu và phụ kiện nâng còn hiệu lực (Cargo Gear Register)', critical: true },
          { g: 'A. Hồ sơ', id: 'a3', text: 'Khối lượng và trọng tâm kiện hàng đã được xác minh (bản vẽ, packing list)', critical: true },
          { g: 'A. Hồ sơ', id: 'a4', text: 'Tải trọng cho phép của mặt cầu/ sà lan/ SPMT tại vị trí đặt đã kiểm tra', critical: true },
          { g: 'A. Hồ sơ', id: 'a5', text: 'Đã họp toolbox talk, phân vai, tất cả người tham gia đã hiểu phương án' },
          { g: 'B. Tàu', id: 'b1', text: 'Dằn chống nghiêng/ phao ổn định sẵn sàng theo phương án của tàu', critical: true },
          { g: 'B. Tàu', id: 'b2', text: 'Dây buộc tàu căng phù hợp, có người trực dây trong suốt quá trình nâng', critical: true },
          { g: 'B. Tàu', id: 'b3', text: 'Đệm va đầy đủ, không có vật cản trong tầm quay cần (cửa hầm, cột, ăng-ten)' },
          { g: 'B. Tàu', id: 'b4', text: 'Thông báo cho các phương tiện/ cầu bến lân cận về khu vực nâng' },
          { g: 'C. Bờ / sà lan', id: 'c1', text: 'Vùng cấm (exclusion zone) đã rào chắn và có người canh gác', critical: true },
          { g: 'C. Bờ / sà lan', id: 'c2', text: 'SPMT/ rơ moóc/ tấm kê sẵn sàng đúng vị trí, đúng tải' },
          { g: 'C. Bờ / sà lan', id: 'c3', text: 'Nếu đặt xuống sà lan: dằn, dây buộc, ổn định sà lan đã kiểm tra', critical: true },
          { g: 'C. Bờ / sà lan', id: 'c4', text: 'Không có đường dây điện, chướng ngại vật trong tầm hoạt động' },
          { g: 'D. Phụ kiện', id: 'd1', text: 'Sling, ma ní, dầm nâng đúng sơ đồ phương án, có tag WLL, đã kiểm tra bằng mắt', critical: true },
          { g: 'D. Phụ kiện', id: 'd2', text: 'Có đệm bảo vệ cạnh sắc tại các điểm tiếp xúc' },
          { g: 'D. Phụ kiện', id: 'd3', text: 'Đủ dây lèo (tag line), người giữ dây lèo đứng ngoài vùng dưới tải' },
          { g: 'E. Liên lạc & thời tiết', id: 'e1', text: 'Chỉ định MỘT người chỉ huy và MỘT người ra tín hiệu; lái cẩu nhận diện được', critical: true },
          { g: 'E. Liên lạc & thời tiết', id: 'e2', text: 'Kênh bộ đàm thống nhất, đã thử liên lạc tàu – bờ – lái cẩu' },
          { g: 'E. Liên lạc & thời tiết', id: 'e3', text: 'Gió thực tế dưới giới hạn; dự báo ổn định trong suốt thời gian nâng', critical: true },
          { g: 'E. Liên lạc & thời tiết', id: 'e4', text: 'Ánh sáng, tầm nhìn đủ (ban đêm có đèn chiếu khu vực)' },
          { g: 'E. Liên lạc & thời tiết', id: 'e5', text: 'Tiêu chí DỪNG đã phổ biến; mọi người biết có quyền hô DỪNG', critical: true },
          { g: 'F. Nâng thử', id: 'f1', text: 'Nâng cách mặt sàn 100–300 mm, giữ, kiểm tra phanh, cân bằng, nghiêng tàu, phụ kiện', critical: true }
        ]
      },
      { title: 'Ghi chú', fields: [{ id: 'remarks', label: 'Ghi chú, biện pháp bổ sung', type: 'textarea' }] }
    ],
    summary: function (v, h) {
      var total = h.load(v), out = '';
      if (h.num(v.swl) > 0 && total > 0) {
        var u = total / h.num(v.swl) * 100;
        out += '<div>Tổng tải: <b>' + h.fmt(total, 1) + ' t</b> / SWL ' + h.fmt(h.num(v.swl), 1) + ' t → <b>' + h.fmt(u, 0) + '%</b>' +
          (u > 100 ? ' ⛔ VƯỢT SWL' : u > 90 ? ' ⚠️ rất cao' : u > 75 ? ' — nâng quan trọng (critical lift)' : '') + '</div>';
      }
      if (h.num(v.windlim) > 0 && v.wind !== '' && v.wind != null && h.num(v.wind) >= h.num(v.windlim)) out += '<div class="callout danger">⛔ Gió thực tế ' + h.fmt(h.num(v.wind), 1) + ' m/s ≥ giới hạn ' + h.fmt(h.num(v.windlim), 1) + ' m/s.</div>';
      var c = h.checks(v);
      out += '<div>Đã kiểm tra: <b>' + c.done + '/' + c.total + '</b> · Không đạt: <b>' + c.ng + '</b> (bắt buộc: <b>' + c.critNg + '</b>)</div>';
      if (c.critNg || (h.num(v.swl) > 0 && total > h.num(v.swl)) || (h.num(v.windlim) > 0 && h.num(v.wind) >= h.num(v.windlim))) out += '<div class="callout danger"><b>⛔ KHÔNG ĐƯỢC NÂNG</b> — khắc phục các mục không đạt và kiểm tra lại.</div>';
      else if (c.critOpen) out += '<div class="callout warn">Còn ' + c.critOpen + ' mục bắt buộc chưa kiểm tra.</div>';
      else out += '<div class="callout tip"><b>✓ Đủ điều kiện nâng</b> — các bên ký xác nhận trước khi bắt đầu.</div>';
      return out;
    },
    signatures: ['Thuyền trưởng/ Đại phó', 'Supercargo/ Giám sát nâng', 'Giám sát cảng']
  },
  {
    id: 'seal', code: 'BM-CT-04', icon: '🔒', title: 'Biên bản bất thường container / seal', en: 'Container & Seal Exception Report',
    desc: 'Ghi nhận seal sai/ đứt/ không có, vỏ container hư hỏng tại cổng, cầu tàu, bãi; theo dõi việc thông báo hải quan, hãng tàu.',
    lesson: ['hai-quan', 'giam-sat'],
    sections: [
      {
        title: 'Thông tin chung', fields: [
          { id: 'place', label: 'Nơi phát hiện', type: 'select', options: ['Cổng vào', 'Cổng ra', 'Cầu tàu – khi dỡ', 'Cầu tàu – khi xếp', 'Bãi', 'Sà lan'] },
          { id: 'vessel', label: 'Tàu/ Chuyến hoặc Biển số xe/ Sà lan', type: 'text' },
          { id: 'time', label: 'Thời điểm phát hiện', type: 'datetime' },
          { id: 'line', label: 'Hãng tàu', type: 'text' }
        ]
      },
      {
        title: 'Container bất thường', table: {
          id: 'ctns', rows: 2, columns: [
            { id: 'no', label: 'Số container', type: 'text' },
            { id: 'type', label: 'Cỡ/ loại', type: 'select', options: ['20DC', '40DC', '40HC', '20RF', '40RF', '20FR', '40FR', '20OT', '40OT', 'Khác'] },
            { id: 'fe', label: 'Hàng/ Rỗng', type: 'select', options: ['Hàng (F)', 'Rỗng (E)'] },
            { id: 'sdoc', label: 'Seal trên chứng từ', type: 'text' },
            { id: 'sact', label: 'Seal thực tế', type: 'text' },
            { id: 'scond', label: 'Tình trạng seal', type: 'select', options: ['Nguyên vẹn – khớp', 'Sai số', 'Đứt/ bị cắt', 'Không có seal', 'Dấu hiệu can thiệp'] },
            { id: 'box', label: 'Tình trạng vỏ', type: 'select', options: ['Tốt', 'Móp', 'Thủng', 'Rách', 'Ướt/ rò rỉ', 'Cửa hỏng', 'Khác'] },
            { id: 'desc', label: 'Mô tả, vị trí hư hỏng', type: 'text' },
            { id: 'photo', label: 'Số ảnh', type: 'text' }
          ]
        }
      },
      {
        title: 'Xử lý', fields: [
          { id: 'isolate', label: 'Đã cách ly container', type: 'select', options: ['Chưa', 'Đã cách ly – khu tạm giữ', 'Không cần'] },
          { id: 'customs', label: 'Báo hải quan giám sát lúc', type: 'datetime' },
          { id: 'carrier', label: 'Báo hãng tàu/ đại lý lúc', type: 'datetime' },
          { id: 'newseal', label: 'Seal mới (nếu niêm phong lại)', type: 'text' },
          { id: 'remarks', label: 'Ghi chú', type: 'textarea' }
        ]
      }
    ],
    summary: function (v, h) {
      var rows = (v.ctns || []).filter(function (r) { return r.no; });
      var sealIssue = rows.filter(function (r) { return r.scond && r.scond !== 'Nguyên vẹn – khớp'; }).length;
      var mismatch = rows.filter(function (r) { return r.sdoc && r.sact && r.sdoc.trim().toUpperCase() !== r.sact.trim().toUpperCase(); }).length;
      var out = '<div>Container ghi nhận: <b>' + rows.length + '</b> · Bất thường seal: <b>' + sealIssue + '</b>' + (mismatch ? ' · Số seal không khớp: <b>' + mismatch + '</b>' : '') + '</div>';
      if (sealIssue || mismatch) out += (v.customs ? '<div class="callout tip">Đã báo hải quan giám sát.</div>' : '<div class="callout danger">⛔ Có bất thường seal — phải báo hải quan giám sát và cách ly container, không cho ra cổng.</div>');
      return out;
    },
    signatures: ['Tài xế/ Đại diện tàu/ sà lan', 'Đại diện cảng', 'Hải quan giám sát (nếu có)']
  },
  {
    id: 'handover', code: 'BM-BG-05', icon: '🔁', title: 'Biên bản bàn giao ca', en: 'Shift Handover Report',
    desc: 'Bàn giao 6 nhóm thông tin: an toàn – tàu – bãi/kho – thiết bị – nhân lực – việc dở dang.',
    lesson: ['nhan-su', 'ca-kip-dong-luc'],
    sections: [
      {
        title: 'Thông tin ca', fields: [
          { id: 'date', label: 'Ngày', type: 'date' },
          { id: 'shift', label: 'Ca', type: 'select', options: ['Ca 1 (sáng)', 'Ca 2 (chiều)', 'Ca 3 (đêm)'] },
          { id: 'from', label: 'Người giao ca', type: 'text' },
          { id: 'to', label: 'Người nhận ca', type: 'text' }
        ]
      },
      { title: '1. An toàn', fields: [{ id: 'safety', label: 'Sự cố, cận nguy, thiết bị đang khóa LOTO, công việc nguy hiểm đang diễn ra, cảnh báo thời tiết', type: 'textarea' }] },
      {
        title: '2. Tàu / sà lan đang làm hàng', table: {
          id: 'ships', rows: 2, columns: [
            { id: 'name', label: 'Tàu/ sà lan', type: 'text' },
            { id: 'berth', label: 'Cầu', type: 'text' },
            { id: 'cargo', label: 'Loại hàng', type: 'select', options: ['Container', 'Hàng rời', 'Tôn cuộn/ thép', 'Siêu trọng', 'Khác'] },
            { id: 'done', label: 'Đã làm', type: 'text' },
            { id: 'left', label: 'Còn lại', type: 'text' },
            { id: 'etc', label: 'Dự kiến xong', type: 'text' },
            { id: 'issue', label: 'Vấn đề cần lưu ý', type: 'text' }
          ]
        }
      },
      { title: '3. Bãi & kho', fields: [{ id: 'yard', label: 'Khu đầy, cần đảo chuyển, container/ hàng tạm giữ, kiểm hóa, hàng nguy hiểm, đống hàng rời cần theo dõi', type: 'textarea' }] },
      {
        title: '4. Thiết bị hỏng / đang sửa', table: {
          id: 'equip', rows: 2, columns: [
            { id: 'eq', label: 'Thiết bị', type: 'text' },
            { id: 'st', label: 'Tình trạng', type: 'select', options: ['Hỏng – chờ sửa', 'Đang sửa', 'Hạn chế khai thác', 'Đã sửa xong'] },
            { id: 'eta', label: 'Dự kiến xong', type: 'text' },
            { id: 'note', label: 'Ghi chú', type: 'text' }
          ]
        }
      },
      { title: '5. Nhân lực', fields: [{ id: 'people', label: 'Thiếu người, người mới, người đã làm thêm nhiều giờ', type: 'textarea' }] },
      { title: '6. Việc dở dang & cam kết khách hàng', fields: [{ id: 'pending', label: 'Việc dở dang, hạn chót đã hứa với khách hàng/ hãng tàu', type: 'textarea' }] }
    ],
    summary: function (v) {
      var miss = ['safety', 'yard', 'people', 'pending'].filter(function (k) { return !v[k]; }).length;
      return miss ? '<div class="callout warn">Còn ' + miss + ' mục chưa ghi. Nếu không có gì, ghi “Không có” để người nhận biết đã được kiểm tra.</div>' : '<div class="callout tip">✓ Đủ thông tin — hai bên trao đổi trực tiếp 5–10 phút rồi ký.</div>';
    },
    signatures: ['Người giao ca', 'Người nhận ca']
  }
];
