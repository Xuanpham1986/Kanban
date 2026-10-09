window.PA_DATA = window.PA_DATA || { modules: [], glossary: [] };
window.PA_DATA.modules.push({
  id: 'cang-quoc-te', order: 0, icon: '🚢', short: 'Thực chiến cảng quốc tế',
  title: 'Thực chiến cảng quốc tế đa hàng',
  desc: 'Tàu biển – bãi – sà lan – ô tô: hàng xá/hàng rời (IMSBC), tôn cuộn, hàng siêu trường siêu trọng bằng cẩu bờ/cẩu tàu/Ro-Ro, container chuyển tải sà lan, giám định mớn nước, an toàn hầm hàng.',
  intro: '<p>Chuyên đề được viết riêng cho <b>cảng biển quốc tế</b> khai thác đồng thời <b>hàng xá/hàng rời, tôn cuộn, hàng siêu trường siêu trọng và container</b>. Đặc thù: tiếp nhận <b>tàu biển nước ngoài</b> (làm việc với thuyền trưởng, đại phó bằng tiếng Anh; ISPS; hải quan, biên phòng cửa khẩu), hàng thường <b>chuyển tải tàu ↔ sà lan</b> hoặc tàu ↔ bãi ↔ ô tô, thiết bị chủ lực là <b>cẩu chân đế/ cẩu bờ di động, cẩu bánh xích, cẩu tàu, gầu ngoạm, phễu, xúc lật, reach stacker, xe nâng</b>; mực nước triều ảnh hưởng mớn nước và độ cao tàu so với cầu bến.</p>' +
    '<p>Dùng kèm các công cụ: <a href="#/tools/grab">Năng suất gầu ngoạm</a>, <a href="#/tools/draft">Khối lượng hàng theo mớn nước sà lan</a>, <a href="#/tools/pile">Đống hàng rời</a>, <a href="#/tools/lashing">Chằng buộc</a>.</p>',
  lessons: [
    {
      id: 'mo-hinh', title: 'Mô hình khai thác cảng quốc tế đa hàng: tàu – bãi – sà lan – ô tô', minutes: 12,
      source: 'BLHH 2015; NĐ 58/2017 & NĐ 37/2017 (đã sửa đổi); Luật Hải quan 2014; ISPS Code',
      body: `
<h2>1. Dòng hàng điển hình</h2>
<div class="table-wrap"><table>
<tr><th>Loại hàng</th><th>Chiều phổ biến</th><th>Thiết bị chủ lực</th><th>Điểm nghẽn thường gặp</th></tr>
<tr><td>Hàng xá/hàng rời (than, clinker, quặng, phân bón, ngũ cốc, đá, cát)</td><td>Tàu biển ↔ sà lan (chuyển tải tại cầu hoặc phao), tàu ↔ bãi/kho ↔ ô tô</td><td>Cẩu chân đế/ cẩu di động + gầu ngoạm, phễu, băng tải, xúc lật, máy xúc dọn hầm</td><td>Chu kỳ gầu, thiếu sà lan/xe nhận, dọn hầm tàu, mưa, chờ giám định</td></tr>
<tr><td>Tôn cuộn, thép</td><td>Tàu bách hóa → bãi/kho → ô tô hoặc → sà lan</td><td>Cẩu + C-hook/kẹp cuộn/dây vải, xe nâng có ram cuộn</td><td>Kiểm tra tình trạng khi dỡ, phân lô theo vận đơn</td></tr>
<tr><td>Siêu trường siêu trọng</td><td>Tàu heavy-lift ↔ bờ/ sà lan (cẩu tàu, cẩu bờ, Ro-Ro bằng SPMT)</td><td>Cẩu tàu nâng kép, cẩu bánh xích lớn, SPMT, cầu dẫn</td><td>Tải trọng mặt cầu, phê duyệt phương án, thời tiết, ổn định tàu/sà lan</td></tr>
<tr><td>Container</td><td>Tàu ↔ bãi ↔ ô tô; tàu ↔ sà lan feeder đi cảng TNĐ/ICD</td><td>Cẩu bờ/ cẩu di động có spreader, reach stacker, RTG, xe nâng vỏ</td><td>Cẩu đa năng phải đổi gầu ↔ spreader, giờ cắt máng, đồng bộ sà lan</td></tr>
</table></div>

<h2>2. Đặc thù của cảng quốc tế đa hàng</h2>
<ul>
<li><b>Tàu nước ngoài</b>: thủ tục qua Cơ chế một cửa quốc gia; Cảng vụ hàng hải, hải quan, biên phòng, kiểm dịch; giao tiếp với thuyền trưởng/ đại phó bằng tiếng Anh — xem chuyên đề Tiếng Anh.</li>
<li><b>An ninh ISPS</b>: kiểm soát ra vào cầu tàu, khu hạn chế, danh sách người lên tàu.</li>
<li><b>Thiết bị đa năng</b> (cẩu chân đế, cẩu di động) dùng chung cho rời – thép – container → kế hoạch phân bổ cẩu và thời gian đổi công cụ mang hàng (gầu ↔ spreader ↔ C-hook) là đòn bẩy năng suất.</li>
<li><b>Chuyển tải tàu ↔ sà lan</b>: một lần làm hàng có hai phương tiện cùng nhạy với nghiêng, mớn nước; cần đồng bộ sà lan để cẩu không chờ.</li>
<li><b>Tranh chấp tổn thất</b> thường quốc tế: chủ hàng nước ngoài, P&I của tàu, giám định viên độc lập — chứng cứ của cảng (biên bản hư hỏng có chữ ký tàu, tally, ảnh) quyết định ai chịu trách nhiệm.</li>
<li><b>Mực nước triều</b>: ảnh hưởng mớn nước cho phép ra vào luồng (tàu hàng rời mớn sâu phải chờ triều), độ cao mạn tàu so với cầu → tầm với, chiều cao nâng của cẩu.</li>
</ul>

<h2>3. Hồ sơ pháp lý của cảng cần luôn còn hiệu lực</h2>
<ul>
<li>Công bố cầu cảng (cỡ tàu, mớn nước, tải trọng tiếp nhận), điều kiện kinh doanh khai thác cảng biển.</li>
<li>Kế hoạch an ninh bến cảng (PFSP), PFSO, diễn tập; phương án ứng phó tràn dầu; PCCC & CNCH.</li>
<li>Kiểm định thiết bị nâng, chứng chỉ người vận hành, huấn luyện ATVSLĐ nhóm 3 cho móc cáp, xi nhan.</li>
<li>Hồ sơ địa điểm giám sát hải quan, kết nối VASSCM, camera; hồ sơ môi trường (bụi hàng rời, nước mưa chảy tràn).</li>
</ul>
`,
      keyPoints: [
        'Cảng quốc tế đa hàng = 4 dòng hàng với thiết bị, điểm nghẽn, rủi ro khác nhau — quản lý KPI riêng từng dòng.',
        'Cẩu đa năng: thời gian đổi công cụ mang hàng và phân bổ cẩu là đòn bẩy năng suất.',
        'Chuyển tải tàu ↔ sà lan: hai phương tiện nhạy nghiêng, mớn nước; đồng bộ sà lan để cẩu không chờ.',
        'Chứng cứ của cảng quyết định kết quả tranh chấp tổn thất quốc tế.'
      ],
      apply: [
        'Lập bảng KPI tách riêng 4 dòng hàng: tấn/giờ/máng (rời, thép), move/giờ (container), thời gian tàu tại cầu, thời gian chờ sà lan, tỷ lệ hao hụt.',
        'Đo thời gian đổi gầu ↔ spreader ↔ C-hook của từng cẩu trong 1 tuần; đặt mục tiêu giảm 30%.',
        'Kiểm tra hiệu lực các hồ sơ: công bố cầu cảng, PFSP, ứng phó tràn dầu, kiểm định thiết bị nâng.'
      ],
      quiz: [
        { q: 'Ở cảng đa hàng dùng cẩu chân đế cho cả hàng rời và container, đòn bẩy năng suất nào hay bị bỏ qua?', options: ['Màu sơn cẩu', 'Thời gian đổi công cụ mang hàng (gầu ↔ spreader) và phân bổ cẩu', 'Số camera', 'Giờ ăn trưa'], answer: 1 },
        { q: 'Kế hoạch an ninh bến cảng theo ISPS gọi tắt là?', options: ['PFSP', 'SOF', 'NOR', 'EIR'], answer: 0 },
        { q: 'Thiết bị phù hợp nhất để dỡ than từ hầm tàu lên sà lan?', options: ['Reach stacker', 'Cẩu + gầu ngoạm', 'C-hook', 'Spreader container'], answer: 1 }
      ]
    },
    {
      id: 'hang-roi', title: 'Hàng xá/hàng rời: gầu ngoạm, IMSBC, đống hàng, giao nhận & hao hụt', minutes: 16,
      body: `
<h2>1. Năng suất gầu ngoạm — công thức</h2>
<div class="formula">Năng suất (tấn/giờ) = Dung tích gầu (m³) × Tỷ trọng đống (t/m³) × Hệ số đầy gầu × (3600 / Chu kỳ gầu (giây)) × Hệ số sử dụng thời gian
Tải mỗi lần nâng = Trọng lượng gầu + Hàng trong gầu  ≤  Tải định mức chế độ gầu ngoạm của cẩu</div>
<p><b>Ví dụ:</b> Gầu 5 m³, cát ẩm 1,6 t/m³, đầy 85%, chu kỳ 60 s, hệ số thời gian 75% → 5 × 1,6 × 0,85 × 60 × 0,75 ≈ <b>306 t/giờ</b>. Mỗi lần nâng: gầu 6 t + hàng 6,8 t = 12,8 t. Dùng công cụ <a href="#/tools/grab">Năng suất gầu ngoạm</a> để thử.</p>
<div class="callout warn"><strong class="title">⚠️ Chế độ gầu ngoạm là chế độ làm việc nặng</strong>Nhiều cẩu có <b>tải định mức riêng cho chế độ gầu (duty cycle)</b> thấp hơn tải nâng móc. Dùng gầu lớn hơn cho “nhanh” với hàng nặng (quặng, đá) dễ gây quá tải, hỏng cáp, gãy cần. Chọn dung tích gầu theo tỷ trọng hàng.</div>

<h2>2. Đòn bẩy năng suất thực tế</h2>
<ul>
<li><b>Chu kỳ gầu</b>: giảm góc quay (đặt phễu/ ô tô gần), giảm chiều cao nâng, lái cẩu giỏi — mỗi 10 s chu kỳ ≈ 15% năng suất.</li>
<li><b>Xe nhận hàng</b>: cẩu chờ xe là lãng phí lớn nhất → phễu đệm (hopper) để tách nhịp cẩu và xe; điều xe theo hàng đợi.</li>
<li><b>Dọn đáy sà lan</b> (khi còn ~10–15% hàng): năng suất gầu giảm mạnh → đưa máy xúc nhỏ/ xúc lật xuống sà lan (là một lần nâng có phương án), hoặc chuyển sang sà lan tiếp theo song song.</li>
<li><b>Mưa</b>: cát, than ướt nặng hơn, dính gầu; phân bón, xi măng, ngũ cốc phải dừng và đậy hầm.</li>
</ul>

<h2>3. Tỷ trọng và góc nghỉ tự nhiên (tham khảo)</h2>
<div class="table-wrap"><table>
<tr><th>Hàng</th><th>Tỷ trọng đống (t/m³)</th><th>Góc nghỉ (°)</th><th>Lưu ý</th></tr>
<tr><td>Cát khô / cát ẩm</td><td>1,4–1,6 / 1,7–2,0</td><td>30–35</td><td>Cát ướt nặng hơn, chảy xệ</td></tr>
<tr><td>Đá dăm, sỏi</td><td>1,5–1,7</td><td>35–40</td><td>Mài mòn gầu, thành sà lan</td></tr>
<tr><td>Than đá</td><td>0,8–0,9</td><td>35–38</td><td>Nguy cơ <b>tự cháy</b> khi lưu lâu, đống cao</td></tr>
<tr><td>Clinker</td><td>1,3–1,5</td><td>30–35</td><td>Bụi, mài mòn; clinker nóng không xếp gần vật liệu cháy</td></tr>
<tr><td>Quặng sắt</td><td>2,0–2,6</td><td>~35</td><td>Rất nặng — kiểm tra tải nền bãi, tải gầu</td></tr>
<tr><td>Phân bón hạt (urea)</td><td>0,7–0,8</td><td>~28–30</td><td>Hút ẩm, đóng tảng; phải che, kho kín</td></tr>
<tr><td>Ngũ cốc (ngô, lúa mì)</td><td>0,7–0,8</td><td>~25–28</td><td>Côn trùng, hun trùng (khí độc), nấm mốc</td></tr>
</table></div>
<p class="meta">Số liệu dao động theo độ ẩm, cỡ hạt, nguồn gốc. Nên tự đo tỷ trọng thực tế (cân một gầu/ một thùng xe chuẩn) cho các mặt hàng chính của cảng.</p>

<h2>4. IMSBC Code — hàng rời rắn chở bằng tàu biển</h2>
<p>Bộ luật quốc tế về hàng rời rắn (<b>IMSBC Code</b>, bắt buộc theo SOLAS) chia hàng rời thành nhóm:</p>
<div class="table-wrap"><table>
<tr><th>Nhóm</th><th>Nguy cơ</th><th>Ví dụ</th><th>Việc cảng cần làm</th></tr>
<tr><td><b>A</b></td><td>Có thể <b>hóa lỏng</b> nếu độ ẩm vượt giới hạn vận chuyển (TML) → tàu mất ổn định, lật</td><td>Quặng tinh, nickel ore, một số loại cát/ bùn quặng</td><td>Hàng xuất: người gửi phải cung cấp chứng nhận <b>độ ẩm và TML</b>; không xếp hàng bị mưa ướt sũng; thuyền trưởng có quyền từ chối</td></tr>
<tr><td><b>B</b></td><td>Nguy hiểm hóa học</td><td>Than (tự cháy, sinh khí), ammonium nitrate, lưu huỳnh</td><td>Theo dõi nhiệt độ, khí; tách nguồn nhiệt; đúng cách ly</td></tr>
<tr><td><b>C</b></td><td>Không thuộc A, B</td><td>Clinker, đá, phần lớn ngũ cốc (ngũ cốc có quy định riêng)</td><td>Bụi, tải trọng, san phẳng hầm</td></tr>
</table></div>
<p>Hàng xuất xếp lên tàu: tuân thủ <b>kế hoạch xếp/ dỡ do tàu lập</b> (thứ tự hầm, khối lượng mỗi lượt) để kiểm soát ứng suất thân tàu; báo cáo khối lượng đã xếp mỗi hầm định kỳ; <b>san phẳng (trimming)</b> theo yêu cầu.</p>

<h2>5. Đống hàng trên bãi</h2>
<div class="formula">Chiều cao đống (nón) h = r × tan(góc nghỉ)    Thể tích nón V = π r² h / 3
Áp lực lên nền tại đỉnh đống ≈ h × tỷ trọng × 9,81 (kPa)</div>
<p>Đống cát cao 8 m, 1,6 t/m³ → áp lực tại tâm ≈ <b>126 kPa</b> — phải so với sức chịu tải nền bãi (bãi mới san lấp có thể lún, đẩy trồi). Dùng công cụ <a href="#/tools/pile">Đống hàng rời</a>.</p>
<ul>
<li>Giữ khoảng cách đống hàng tới mép kè/ bờ sông (tải trọng đống gây <b>trượt mái kè</b>), tường kho (áp lực ngang).</li>
<li>Không để người, xe đứng sát chân đống khi xúc (sạt lở, đặc biệt đống bị “khoét chân” tạo vách đứng).</li>
<li>Than: đống thấp, đầm chặt, đo nhiệt định kỳ, xuất trước nhập trước, không để quá lâu.</li>
</ul>

<h2>6. Giao nhận & hao hụt</h2>
<ul>
<li>Hàng nhập từ tàu biển thường xác định theo <b>giám định mớn nước tàu (draft survey)</b> tại cảng; phần giao tiếp cho chủ hàng qua cân ô tô/ mớn nước sà lan → chênh lệch phải được giải thích. Thống nhất trong hợp đồng: <b>phương pháp xác định khối lượng</b> (giám định mớn nước, cân ô tô đã kiểm định, cân băng tải), <b>tỷ lệ hao hụt cho phép</b>, ai chịu chi phí giám định.</li>
<li>Cân ô tô phải được <b>kiểm định</b> còn hạn; lưu phiếu cân điện tử, ảnh biển số.</li>
<li>Giảm hao hụt: tấm hứng (spill plate) giữa tàu và cầu/ sà lan, phễu có chắn bụi, phủ bạt xe, phun sương, vệ sinh cầu bến cuối ca (hàng rơi xuống sông còn là vi phạm môi trường).</li>
</ul>

<h2>7. An toàn đặc thù</h2>
<div class="callout danger"><strong class="title">⛔ Không gian hạn chế trong hầm tàu/ sà lan</strong>Hầm tàu, hầm sà lan kín chở than, ngũ cốc, gỗ dăm, sắt thép gỉ có thể <b>thiếu oxy hoặc có khí độc</b> (CO từ than, khí hun trùng phosphine với ngũ cốc). Đã có nhiều vụ tử vong vì xuống hầm cứu người. Bắt buộc: thông gió, <b>đo khí</b> trước khi vào, người giám sát bên ngoài, giấy phép làm việc, không cứu người khi chưa có thiết bị thở.</div>
<ul>
<li>Không ai đứng trong hầm khi gầu đang hoạt động; máy xúc dọn hầm phải có tín hiệu riêng với lái cẩu; việc nâng máy xúc xuống/ lên hầm là một lần nâng có phương án.</li>
<li>Lối lên xuống hầm của tàu (thang, cửa hầm) phải được tàu xác nhận an toàn; không dùng thang hỏng.</li>
<li>Không để gầu va vào thành, đáy sà lan (thủng, hỏng kết cấu) — đặc biệt khi dọn đáy.</li>
</ul>
`,
      keyPoints: [
        'Năng suất gầu = V × ρ × hệ số đầy × 3600/chu kỳ × hệ số thời gian.',
        'Gầu + hàng ≤ tải định mức chế độ gầu của cẩu; chọn dung tích gầu theo tỷ trọng.',
        'Áp lực đống ≈ h × ρ × 9,81 kPa; tránh xếp đống sát mép kè.',
        'IMSBC: nhóm A có nguy cơ hóa lỏng (kiểm độ ẩm/TML), nhóm B nguy hiểm hóa học.',
        'Hầm tàu/sà lan là không gian hạn chế: đo khí trước khi vào.'
      ],
      apply: [
        'Bấm giờ 20 chu kỳ gầu của từng cẩu, tính năng suất lý thuyết bằng công cụ và so với thực tế.',
        'Cân thực tế tỷ trọng 3 mặt hàng chính, cập nhật bảng tham chiếu nội bộ.',
        'Kiểm tra quy trình vào hầm tàu/ sà lan: có máy đo khí, giấy phép làm việc, người giám sát chưa?',
        'So sánh khối lượng theo draft survey tàu với tổng cân ô tô/ mớn nước sà lan của 3 tàu gần nhất.',
        'Đo khoảng cách các đống hàng tới mép kè, so với khuyến cáo trong hồ sơ thiết kế bãi.'
      ],
      quiz: [
        { q: 'Gầu 4 m³, than 0,85 t/m³, đầy 90%, chu kỳ 50 s, hệ số thời gian 80%. Năng suất ≈ ?', options: ['~120 t/h', '~176 t/h', '~245 t/h', '~306 t/h'], answer: 1, explain: '4 × 0,85 × 0,9 × 72 × 0,8 ≈ 176 t/h.' },
        { q: 'Hàng rời nào có nguy cơ tự cháy khi lưu đống lâu?', options: ['Cát', 'Đá dăm', 'Than đá', 'Quặng sắt'], answer: 2 },
        { q: 'Theo IMSBC Code, hàng nhóm A có nguy cơ gì?', options: ['Nổ', 'Hóa lỏng khi độ ẩm vượt TML, làm tàu mất ổn định', 'Phóng xạ', 'Không có nguy cơ'], answer: 1 },
        { q: 'Trước khi người xuống hầm tàu chở ngũ cốc đã hun trùng, bắt buộc phải?', options: ['Đeo khẩu trang vải', 'Thông gió, đo khí, có giấy phép và người giám sát', 'Xuống nhanh rồi lên', 'Không cần gì'], answer: 1 },
        { q: 'Đống cát cao 10 m, tỷ trọng 1,6 t/m³ gây áp lực tại tâm khoảng?', options: ['16 kPa', '~157 kPa', '~500 kPa', '1.600 kPa'], answer: 1, explain: '10 × 1,6 × 9,81 ≈ 157 kPa.' }
      ]
    },
    {
      id: 'ton-cuon', title: 'Tôn cuộn (thép cuộn): nâng, xếp bãi, xếp sà lan & kiểm tra tình trạng', minutes: 15,
      body: `
<h2>1. Đặc tính</h2>
<ul>
<li>Thường đến bằng <b>tàu bách hóa</b>, xếp trong hầm nhiều tầng, chèn gỗ; dỡ ra bãi rồi giao ô tô hoặc chuyển sà lan.</li>
<li>Thép cuộn cán nóng (HRC) thường 10–30 t/cuộn; cán nguội (CRC), tôn mạ kẽm/ mạ màu nhẹ hơn nhưng <b>rất nhạy với ẩm, trầy xước</b>.</li>
<li>Khối lượng tập trung trên diện tích tiếp xúc nhỏ → tải trọng tập trung lớn lên sàn sà lan, nền bãi, sàn kho.</li>
<li>Hình trụ → <b>lăn</b> nếu chèn không đủ; đai thép khi cắt có thể <b>bật</b> gây thương tích.</li>
</ul>

<h2>2. Thiết bị nâng</h2>
<div class="table-wrap"><table>
<tr><th>Thiết bị</th><th>Dùng khi</th><th>Lưu ý</th></tr>
<tr><td><b>C-hook</b></td><td>Cuộn mắt ngang (eye horizontal), nâng bằng cẩu</td><td>Đúng WLL và bề rộng cuộn; lót bảo vệ mắt cuộn với tôn mạ; cân bằng khi không tải</td></tr>
<tr><td><b>Kẹp cuộn (coil tong)</b></td><td>Xếp/ dỡ năng suất cao, cuộn mắt ngang hoặc đứng</td><td>Kiểm tra hành trình kẹp, khóa an toàn</td></tr>
<tr><td><b>Dây vải bản rộng</b> luồn qua mắt cuộn</td><td>Khi không có C-hook</td><td>Dùng 2 dây, góc phù hợp; đệm bảo vệ mép; <b>không dùng cáp thép trần</b> (hỏng mép, trượt)</td></tr>
<tr><td><b>Xe nâng có ram (coil ram)</b></td><td>Di chuyển trong kho/ bãi</td><td>Tải định mức tại tâm tải tương ứng chiều dài cuộn</td></tr>
</table></div>

<h2>3. Xếp bãi/ kho</h2>
<ul>
<li>Mắt cuộn song song mặt đất, đặt trên <b>đệm gỗ/ cao su/ giá đỡ (saddle)</b>, không đặt trực tiếp lên nền bê tông thô hay đất.</li>
<li><b>Chèn hai bên</b> (chock) cho mọi cuộn ở hàng ngoài cùng; hàng xếp sát nhau.</li>
<li>Cuộn nặng thường xếp <b>1 tầng</b>; cuộn nhẹ có thể xếp 2 tầng kiểu kim tự tháp (cuộn trên nằm giữa hai cuộn dưới) — theo quy định nội bộ, tải nền và khuyến cáo chủ hàng.</li>
<li>CRC, tôn mạ: kho kín hoặc phủ bạt chống mưa, kê cao tránh nước đọng; không để cạnh hàng rời gây bụi (clinker, than).</li>
<li>Bố trí theo <b>lô/ chủ hàng/ vận đơn</b>, có biển nhận diện; lối đi đủ cho xe nâng/ cẩu.</li>
</ul>

<h2>4. Xếp trên sà lan (khi chuyển tải)</h2>
<ul>
<li>Đặt trên lớp kê gỗ (dunnage) theo phương dọc sà lan, mắt cuộn theo phương mũi – lái (giảm lăn khi sà lan nghiêng ngang).</li>
<li>Xếp từ giữa ra hai bên, cân đối mạn trái – phải và mũi – lái; tải trọng tập trung không vượt sức chịu của sàn/ đáy sà lan.</li>
<li>Chèn gỗ và chằng buộc theo hàng; cuộn khóa (locking coil) ở tầng trên nếu xếp 2 tầng. Kiểm tra theo quy tắc CSS: tổng MSL mỗi bên ≥ trọng lượng hàng cần giữ.</li>
</ul>

<h2>5. Kiểm tra tình trạng khi nhận (tránh nhận thay lỗi của người khác)</h2>
<div class="table-wrap"><table>
<tr><th>Khuyết tật</th><th>Cách ghi nhận</th></tr>
<tr><td>Móp mép (edge damage), móp vòng ngoài</td><td>Ảnh có thước đo, vị trí, độ sâu</td></tr>
<tr><td>Lệch lớp (telescoping), đai bị đứt/lỏng</td><td>Ảnh, ghi số cuộn, cách ly</td></tr>
<tr><td>Gỉ, ướt</td><td>Phân biệt nước mưa (nước ngọt) và nước biển: thử nhanh bằng dung dịch <b>bạc nitrat</b> — có kết tủa trắng là có muối clorua (nước biển). Quan trọng để xác định tổn thất phát sinh ở chặng tàu biển hay sau đó</td></tr>
<tr><td>Thiếu/ nhầm số cuộn</td><td>Đối chiếu packing list theo <b>số cuộn (coil number)</b>, không chỉ đếm số lượng</td></tr>
</table></div>
<p>Hàng xuất: tình trạng xấu ghi trên <b>Mate's Receipt</b> sẽ chuyển thành ghi chú trên vận đơn (B/L không sạch) — chủ hàng sẽ yêu cầu cảng giải thích nếu hư hỏng phát sinh tại cảng.</p>
<div class="callout tip"><strong class="title">💡 Nguyên tắc</strong>Hàng nhập: ghi chú tình trạng <b>trong hầm tàu và trước khi cuộn rời móc cẩu</b>, có chữ ký đại phó (Chief Officer) — tổn thất có sẵn trên tàu (pre-existing damage) phải được ghi nhận, nếu không cảng sẽ bị quy trách nhiệm. Không ký “nguyên vẹn” khi chưa kiểm tra hết.</div>

<h2>6. An toàn</h2>
<ul>
<li>Không đứng phía trước hướng lăn của cuộn; khi cắt đai, đứng lệch sang bên, dùng dụng cụ cắt cán dài.</li>
<li>Không đứng giữa cuộn đang hạ và cuộn đã đặt (kẹp người).</li>
<li>Găng chống cắt — mép tôn rất sắc.</li>
</ul>
`,
      keyPoints: [
        'Nâng bằng C-hook, kẹp cuộn hoặc dây vải bản rộng — không dùng cáp thép trần.',
        'Mắt cuộn song song mặt đất, đặt trên đệm, chèn hai bên; cuộn nặng thường 1 tầng.',
        'Trên sà lan: mắt cuộn theo phương mũi–lái, xếp cân đối, chèn và chằng buộc.',
        'Ghi nhận khuyết tật theo số cuộn trong hầm tàu, trước khi rời móc cẩu, có chữ ký đại phó; thử bạc nitrat phân biệt nước ngọt/ nước biển.'
      ],
      apply: [
        'Đi kiểm tra bãi tôn cuộn: cuộn ngoài cùng đã chèn đủ? Có cuộn đặt trực tiếp lên nền không?',
        'Soạn mẫu biên bản tình trạng tôn cuộn có cột số cuộn, loại khuyết tật, ảnh, chữ ký.',
        'Kiểm tra WLL và lịch kiểm định C-hook/ kẹp cuộn đang dùng.'
      ],
      quiz: [
        { q: 'Thiết bị KHÔNG nên dùng để nâng tôn cuộn?', options: ['C-hook', 'Kẹp cuộn', 'Dây vải bản rộng', 'Cáp thép trần luồn qua mắt cuộn'], answer: 3 },
        { q: 'Khi xếp tôn cuộn trên sà lan, mắt cuộn nên hướng theo?', options: ['Phương ngang mạn trái – phải', 'Phương mũi – lái', 'Thẳng đứng', 'Tùy ý'], answer: 1, explain: 'Sà lan lắc ngang mạnh hơn; cuộn nằm theo mũi–lái khó lăn ngang hơn.' },
        { q: 'Thử nhanh bằng bạc nitrat dùng để?', options: ['Đo độ dày tôn', 'Phân biệt gỉ do nước biển (muối clorua) hay nước ngọt', 'Kiểm tra trọng lượng', 'Đánh dấu cuộn'], answer: 1 },
        { q: 'Khi cắt đai cuộn thép, nên?', options: ['Đứng trước mặt cuộn', 'Đứng lệch sang bên, dùng dụng cụ cán dài', 'Cắt bằng tay không', 'Nhờ người giữ đai'], answer: 1 }
      ]
    },
    {
      id: 'sieu-trong-sa-lan', title: 'Hàng siêu trường siêu trọng: cẩu tàu, cẩu bờ, Ro-Ro qua sà lan, dằn và mực nước', minutes: 16,
      body: `
<h2>1. Hai phương thức</h2>
<div class="table-wrap"><table>
<tr><th></th><th>Lo-Lo (nâng bằng cẩu)</th><th>Ro-Ro (lăn bằng SPMT/ rơ moóc thủy lực)</th></tr>
<tr><td>Phù hợp</td><td>Kiện đến ~vài trăm tấn trong khả năng cẩu bờ</td><td>Kiện rất nặng/ rất dài (máy biến áp, module, dầm cầu, bồn)</td></tr>
<tr><td>Rủi ro chính</td><td>Nền/ mặt bến dưới chân cẩu, bán kính tới giữa sà lan, sà lan nghiêng khi nhận tải</td><td>Chênh cao bến – sà lan, dằn không kịp, cầu dẫn quá dốc, trượt</td></tr>
<tr><td>Yếu tố quyết định</td><td>Bảng tải tại bán kính xa nhất, áp lực nền</td><td>Năng lực bơm dằn, tốc độ thay đổi mực nước, tải trục SPMT</td></tr>
</table></div>

<h2>2. Dỡ bằng cẩu tàu heavy-lift (tàu chuyên dụng)</h2>
<ul>
<li>Tàu heavy-lift thường có 2 cẩu tàu <b>nâng kép</b> (tandem) 2 × 250–900 t. Phương án nâng do <b>tàu/ chủ tàu</b> lập; thuyền trưởng chịu trách nhiệm cẩu tàu và ổn định tàu.</li>
<li>Khi hàng quay ra ngoài mạn, tàu <b>nghiêng</b> mạnh → tàu dùng két dằn chống nghiêng hoặc phao ổn định (stability pontoon); cảng phải đảm bảo <b>dây buộc tàu</b> phù hợp, đệm va đủ, không có phương tiện/ người dưới tầm quay.</li>
<li>Việc của cảng: cung cấp <b>tải trọng mặt cầu</b>, vị trí đặt hàng, vùng cấm; chuẩn bị SPMT/ rơ moóc hoặc tấm kê đúng tải; thống nhất với đại phó và giám sát nâng (supercargo) thời điểm, tín hiệu, tiêu chí dừng (gió).</li>
</ul>

<h2>3. Lo-Lo bằng cẩu bờ: điểm cần kiểm tra</h2>
<ul>
<li><b>Bán kính</b> phải tính tới vị trí đặt hàng trên sà lan (thường xa hơn dự kiến vì sà lan đậu cách mép bến bởi đệm va) và <b>khi mực nước thay đổi</b>.</li>
<li><b>Tải trọng mặt bến/ cầu tàu</b> cho phép (kN/m² và tải tập trung) dưới chân chống/ xích cẩu; khoảng cách cẩu tới mép kè.</li>
<li>Sà lan <b>nghiêng và chìm thêm</b> khi đặt hàng → tải trên móc giảm đột ngột hoặc hàng chạm sà lan lệch; đặt hàng chậm, chia bước, cân dằn trước nếu đặt lệch tâm.</li>
<li>Dây buộc sà lan căng chùng phù hợp, có người trực dây.</li>
</ul>

<h2>4. Ro-Ro qua sà lan: dằn và mực nước</h2>
<p>Khi SPMT chở hàng đi từ bờ xuống sà lan, trọng lượng dồn dần về <b>đầu sà lan gần bến</b> → sà lan chúi về phía bến, mép sà lan hạ thấp. Phải <b>bơm dằn bù</b> liên tục để giữ mặt boong sà lan ngang mặt bến (hoặc đúng góc cầu dẫn cho phép).</p>
<div class="formula">Chênh cao cho phép tại cầu dẫn phụ thuộc: góc dốc tối đa của SPMT/ rơ moóc, khoảng sáng gầm, độ cứng cầu dẫn
Năng lực bơm dằn (m³/giờ) phải lớn hơn tốc độ chuyển tải trọng + tốc độ thay đổi mực nước (triều)</div>
<ul>
<li>Lập <b>bảng tính dằn theo từng bước</b> di chuyển (ví dụ mỗi 1–2 m), có điểm dừng kiểm tra.</li>
<li>Chọn <b>khung giờ nước đứng</b> (ít thay đổi mực nước); theo dõi dự báo triều/ thủy văn.</li>
<li>Kiểm tra cầu dẫn: tải trọng, chiều dài, cố định chống trượt; mặt bến chịu được tải trục SPMT.</li>
<li>Tiêu chí dừng: chênh cao vượt ngưỡng, nghiêng sà lan vượt ngưỡng, dòng chảy/ gió, hỏng bơm dằn.</li>
</ul>
<div class="callout danger"><strong class="title">⛔ Đừng làm Ro-Ro hàng nặng khi không có kỹ sư dằn và phương án được duyệt</strong>Sai lệch dằn có thể làm sà lan nghiêng, hàng trượt xuống sông hoặc lật SPMT. Đây là công việc của nhà thầu vận tải hàng siêu trọng chuyên nghiệp; cảng phối hợp, cung cấp số liệu bến và giám sát an toàn khu vực.</div>

<h2>5. Phối hợp trước khi làm hàng (checklist cho cảng)</h2>
<ol>
<li>Nhận phương án vận chuyển, nâng/ lăn của nhà thầu; kiểm tra số liệu mặt bến, cao độ, mực nước mà nhà thầu sử dụng có khớp thực tế.</li>
<li>Xác nhận tuyến di chuyển trong cảng: tải trọng, bán kính quay, chướng ngại, đường dây điện.</li>
<li>Thông báo Cảng vụ (vùng nước), phương tiện khác; bố trí cảnh giới đường thủy nếu cần.</li>
<li>Họp toolbox, phân vai, một người chỉ huy; thống nhất kênh bộ đàm.</li>
<li>Hải quan: đăng ký kiểm tra tại chân công trình/ tại cảng sớm, tránh phải hạ – nâng lại.</li>
</ol>
`,
      keyPoints: [
        'Cẩu tàu heavy-lift: phương án và ổn định tàu do tàu chịu trách nhiệm; cảng lo mặt cầu, dây buộc, vùng cấm, phương tiện nhận hàng.',
        'Lo-Lo: tính bán kính tới vị trí đặt thực tế trên sà lan và theo mực nước; kiểm tra tải mặt bến.',
        'Ro-Ro: dằn bù liên tục theo bước, chọn giờ nước đứng, có tiêu chí dừng.',
        'Năng lực bơm dằn phải vượt tốc độ chuyển tải + thay đổi mực nước.',
        'Cảng cung cấp số liệu bến chính xác và giám sát an toàn; phương án do nhà thầu chuyên nghiệp lập.'
      ],
      apply: [
        'Tập hợp “hồ sơ bến” cho nhà thầu hàng siêu trọng: tải trọng mặt bến, cao độ, mực nước theo mùa, vị trí đệm va, bích neo.',
        'Thêm tiêu chí dừng về mực nước và nghiêng sà lan vào mẫu phương án nâng/ lăn nội bộ.'
      ],
      quiz: [
        { q: 'Khi SPMT lăn hàng từ bờ xuống sà lan, sà lan có xu hướng?', options: ['Nổi cao phía bến', 'Chúi về phía bến, mép boong hạ thấp', 'Không thay đổi', 'Nghiêng ra giữa sông'], answer: 1 },
        { q: 'Khung giờ nào thích hợp cho Ro-Ro hàng nặng ở cảng chịu ảnh hưởng triều?', options: ['Lúc triều lên nhanh nhất', 'Khung giờ nước đứng, mực nước ít thay đổi', 'Ban đêm bất kỳ', 'Khi có gió mạnh'], answer: 1 },
        { q: 'Khi tàu heavy-lift dùng cẩu tàu nâng kép, ai chịu trách nhiệm ổn định tàu và cẩu tàu?', options: ['Cảng', 'Thuyền trưởng/ phía tàu', 'Hải quan', 'Chủ hàng'], answer: 1, explain: 'Cảng chịu trách nhiệm phần bờ: mặt cầu, dây buộc, vùng cấm, phương tiện nhận hàng.' },
        { q: 'Khi nâng hàng Lo-Lo xuống sà lan, bán kính làm việc cần tính tới?', options: ['Mép bến', 'Vị trí đặt thực tế trên sà lan (kể cả khoảng cách đệm va)', 'Tâm cẩu', 'Chiều dài cần'], answer: 1 }
      ]
    },
    {
      id: 'container-sa-lan', title: 'Container chuyển tải tàu ↔ sà lan feeder: ổn định, tĩnh không cầu & chằng buộc', minutes: 12,
      body: `
<h2>1. Sắp xếp trọng lượng</h2>
<ul>
<li><b>Nặng dưới – nhẹ trên</b>, cân đối trái – phải, mũi – lái; không vượt <b>số tầng và khối lượng</b> cho phép theo hồ sơ phương tiện (sổ đăng kiểm, thông báo ổn định).</li>
<li>Tổng khối lượng hàng không vượt mức làm chìm quá vạch dấu mớn nước — container nặng (hàng thép, đá ốp lát) làm sà lan đầy tải trước khi đầy chỗ.</li>
<li>Gió tác động mạnh lên chồng container cao, nhất là container rỗng tầng trên: hạn chế tầng khi thời tiết xấu.</li>
</ul>

<h2>2. Tĩnh không cầu và tầm nhìn</h2>
<div class="callout danger"><strong class="title">⛔ Va chạm cầu</strong>Chiều cao từ mặt nước tới đỉnh chồng container (air draft) phải nhỏ hơn <b>tĩnh không thông thuyền</b> của mọi cầu, đường dây trên tuyến — tại <b>mực nước cao nhất</b> dự kiến trong hành trình (lũ, triều cường). Sà lan nhẹ tải (ít hàng) nổi cao hơn → air draft lớn hơn.</div>
<div class="formula">Air draft ≈ (Chiều cao mạn sà lan − Mớn nước) + Số tầng × Chiều cao container (8'6" = 2,59 m; 9'6" HC = 2,90 m) + kê/ chân container</div>
<ul>
<li>Chồng container không được che khuất <b>tầm nhìn buồng lái</b> quá mức cho phép.</li>
<li>Cảng nên có bảng tra số tầng tối đa theo từng tuyến (cầu thấp nhất) và mực nước.</li>
</ul>

<h2>3. Chằng buộc và cố định</h2>
<ul>
<li>Twistlock/ khóa góc ở mọi tầng; bridge fitting nối các chồng; thanh chằng (lashing bar) và tăng đơ cho tầng trên khi đi tuyến có sóng/ ven biển (VR-SB).</li>
<li>Kiểm tra khóa đã <b>khóa</b> (đúng chiều) trước khi sà lan rời bến.</li>
<li>Container OOG/ flat rack: chằng buộc riêng theo khối lượng, tính theo quy tắc CSS.</li>
</ul>

<h2>4. Container chuyển cảng (hải quan)</h2>
<p>Container dỡ từ tàu mẹ xếp sà lan đi cảng thủy nội địa/ ICD theo chế độ chuyển cảng: cảng đi xác nhận đúng số container, số seal xếp lên sà lan và gửi thông tin trên hệ thống; tương tự, khi nhận container từ sà lan về: đối chiếu <b>số container, số seal</b> với tờ khai vận chuyển/ danh sách hải quan, ghi nhận thời gian đến, báo cáo ngay bất thường (seal sai, container hư hỏng, đến quá hạn). Lưu ảnh seal làm chứng cứ.</p>
`,
      keyPoints: [
        'Nặng dưới – nhẹ trên; không vượt số tầng/ khối lượng theo hồ sơ phương tiện và vạch mớn nước.',
        'Air draft tại mực nước cao nhất phải nhỏ hơn tĩnh không thấp nhất trên tuyến; sà lan nhẹ tải nổi cao hơn.',
        'Kiểm tra twistlock đã khóa trước khi rời bến; tầng trên có lashing khi tuyến có sóng.',
        'Container chuyển cảng: đối chiếu số container, seal, thời gian; báo cáo bất thường.'
      ],
      apply: [
        'Lập bảng số tầng container tối đa theo từng tuyến sà lan thường chạy (cầu thấp nhất, mực nước cao nhất).',
        'Thêm bước “kiểm tra twistlock & chằng buộc” có ký xác nhận vào checklist rời bến của sà lan container.'
      ],
      quiz: [
        { q: 'Air draft của sà lan container lớn nhất khi nào?', options: ['Sà lan đầy tải, nước ròng', 'Sà lan nhẹ tải, mực nước cao', 'Ban ngày', 'Khi không có container'], answer: 1 },
        { q: 'Chiều cao container High Cube (9\'6") khoảng?', options: ['2,44 m', '2,59 m', '2,90 m', '3,20 m'], answer: 2 },
        { q: 'Nguyên tắc xếp container trên sà lan?', options: ['Nhẹ dưới – nặng trên', 'Nặng dưới – nhẹ trên, cân đối', 'Xếp theo thứ tự đến', 'Xếp một bên cho dễ'], answer: 1 }
      ]
    },
    {
      id: 'mon-nuoc-on-dinh', title: 'Mớn nước tàu & sà lan: giám định khối lượng, ổn định, tránh võng – vồng', minutes: 15,
      body: `
<h2>1. Đọc mớn nước 6 điểm</h2>
<p>Đọc thước mớn nước ở <b>mũi, giữa, lái × hai mạn</b> trước và sau khi làm hàng; nước đứng yên, mắt ngang mặt nước, đọc trung bình khi có sóng.</p>
<div class="formula">Mớn trung bình mũi Tf = (mũi trái + mũi phải)/2 ; tương tự Tm (giữa), Ta (lái)
Mớn trung bình hiệu chỉnh (mean of means) = (Tf + 6 × Tm + Ta) / 8</div>
<p>Công thức trên đã tính tới độ võng/ vồng của thân sà lan (giữa thân chìm sâu hơn hoặc nông hơn mũi lái).</p>

<h2>2. Giám định mớn nước tàu biển (draft survey)</h2>
<p>Với tàu biển, giám định viên đọc mớn 6 điểm, đo <b>tỷ trọng nước tại cầu</b> (dock water density), kiểm tra két dằn, nhiên liệu, nước ngọt, rồi tra <b>bảng thủy tĩnh của tàu</b> với các hiệu chỉnh độ chúi (trim corrections), võng – vồng. Sai số thường ±0,3–0,5%. Cảng nên: cử người chứng kiến, cung cấp thông tin mực nước/ tỷ trọng, ghi nhận thời điểm đọc mớn đầu – cuối vào SOF.</p>

<h2>3. Tính khối lượng hàng theo mớn nước sà lan</h2>
<p><b>Cách chuẩn:</b> dùng <b>bảng thủy tĩnh/ bảng dung tích</b> của sà lan (tra lượng chiếm nước theo mớn). <b>Cách gần đúng</b> cho sà lan dạng hộp khi không có bảng:</p>
<div class="formula">Khối lượng hàng ≈ L × B × Cw × (Tsau − Ttrước) × ρ nước − (thay đổi nước dằn, nhiên liệu, nước ngọt…)
TPC (tấn/cm) ≈ L × B × Cw × ρ / 100
L, B: chiều dài, rộng đường nước (m); Cw: hệ số diện tích đường nước (sà lan hộp ~0,90–0,95); ρ nước ngọt ≈ 1,000 t/m³, nước lợ 1,005–1,020, nước biển ≈ 1,025</div>
<p><b>Ví dụ:</b> Sà lan 60 × 12 m, Cw 0,92, nước ngọt; mớn hiệu chỉnh 0,60 m → 2,50 m: 60 × 12 × 0,92 × 1,90 × 1,000 ≈ <b>1.259 t</b>. Dùng công cụ <a href="#/tools/draft">Khối lượng theo mớn nước</a>.</p>
<div class="callout warn"><strong class="title">⚠️ Sai số</strong>Sai 1 cm mớn nước trên sà lan này ≈ 6,6 t hàng. Hãy thống nhất người đọc, thời điểm, tỷ trọng nước (đo bằng tỷ trọng kế), và kiểm tra hầm dằn trước – sau. Ở vùng nước lợ, tỷ trọng thay đổi theo triều.</div>

<h2>4. Xếp hàng rời không làm hỏng tàu/ sà lan</h2>
<ul>
<li>Tàu biển: tuân thủ <b>trình tự xếp/ dỡ theo hầm</b> do đại phó lập (kiểm soát ứng suất cắt, mô-men uốn); không tự ý đổi hầm, dỡ dồn một hầm quá nhanh.</li>
<li>Sà lan: xếp <b>đều theo lớp</b> trên toàn chiều dài; không đổ dồn một đống lớn ở giữa (gây <b>võng – sagging</b>) hay chỉ ở hai đầu (gây <b>vồng – hogging</b>).</li>
<li>Theo dõi chênh mớn mũi – lái và trái – phải trong lúc xếp; điều chỉnh vị trí gầu đổ.</li>
<li>Hàng ướt (cát nhiều nước): nước tự do trong hầm làm giảm ổn định (hiệu ứng mặt thoáng) — đảm bảo thoát nước, không xếp vượt tải.</li>
</ul>

<h2>5. Dấu hiệu nguy hiểm — dừng làm hàng ngay</h2>
<ul>
<li>Sà lan nghiêng không trở lại sau khi dừng xếp, hoặc nghiêng tăng dần.</li>
<li>Mớn nước chạm/ vượt vạch dấu chuyên chở; nước tràn qua mạn khi có sóng tàu chạy qua.</li>
<li>Tiếng kêu kết cấu, biến dạng thành hầm, nước rò vào khoang trống.</li>
</ul>
`,
      keyPoints: [
        'Tàu biển: draft survey dùng bảng thủy tĩnh + tỷ trọng nước tại cầu; cảng chứng kiến và ghi SOF.',
        'Mean of means = (Tf + 6Tm + Ta)/8 — dùng mớn trung bình hai mạn tại mỗi vị trí.',
        'Khối lượng ≈ L × B × Cw × ΔT × ρ − thay đổi dằn/ nhiên liệu; ưu tiên bảng thủy tĩnh nếu có.',
        'TPC ≈ L × B × Cw × ρ /100 — biết sai 1 cm mớn tương ứng bao nhiêu tấn.',
        'Tàu: theo trình tự xếp/dỡ của đại phó; sà lan: xếp đều theo lớp, tránh võng/vồng; dừng khi nghiêng tăng hoặc chạm vạch mớn nước.'
      ],
      apply: [
        'Tính TPC cho 3 sà lan thường xuyên ra vào cảng và dán ở phòng giao nhận.',
        'Chuẩn hóa mẫu biên bản đọc mớn nước 6 điểm, có ô tỷ trọng nước và hầm dằn trước – sau.',
        'So sánh khối lượng theo mớn nước và theo cân ô tô của 5 sà lan gần nhất.'
      ],
      quiz: [
        { q: 'Mớn mũi 1,20 m, giữa 1,30 m, lái 1,40 m. Mean of means = ?', options: ['1,25 m', '1,30 m', '1,35 m', '1,40 m'], answer: 1, explain: '(1,20 + 6×1,30 + 1,40)/8 = 1,30 m.' },
        { q: 'Sà lan 50 × 10 m, Cw 0,9, nước ngọt. TPC ≈ ?', options: ['0,45 t/cm', '4,5 t/cm', '45 t/cm', '450 t/cm'], answer: 1, explain: '50 × 10 × 0,9 × 1 / 100 = 4,5 t/cm.' },
        { q: 'Đổ dồn hàng rời thành một đống lớn ở giữa sà lan có thể gây?', options: ['Vồng (hogging)', 'Võng (sagging)', 'Tăng ổn định', 'Không ảnh hưởng'], answer: 1 }
      ]
    }
  ]
});

// Lộ trình gợi ý hiển thị trên trang chủ
window.PA_DATA.path = {
  title: 'Lộ trình gợi ý cho cảng quốc tế đa hàng',
  desc: 'Thứ tự ưu tiên theo rủi ro và giá trị với công việc hiện tại: hàng xá/hàng rời, tôn cuộn, hàng siêu trường siêu trọng, container — tàu biển và chuyển tải sà lan.',
  items: [
    ['cang-quoc-te', 'mo-hinh'], ['hai-quan', 'giam-sat'], ['cang-quoc-te', 'hang-roi'], ['cang-quoc-te', 'mon-nuoc-on-dinh'],
    ['hang-hai-dtnd', 'van-don-trach-nhiem'], ['cang-quoc-te', 'ton-cuon'], ['nang-ha', 'goc-cap-trong-tam'], ['nang-ha', 'bang-tai-nen'],
    ['cang-quoc-te', 'sieu-trong-sa-lan'], ['nang-ha', 'nang-kep-phuong-an'], ['nang-ha', 'chang-buoc'], ['cang-quoc-te', 'container-sa-lan'],
    ['hang-hai-dtnd', 'hang-nguy-hiem-isps'], ['hang-hai-dtnd', 'nor-laytime'], ['tieng-anh', 'pre-ops'], ['logistics-kho', 'kpi'],
    ['quyet-dinh', 'ap-luc-hien-truong']
  ]
};
