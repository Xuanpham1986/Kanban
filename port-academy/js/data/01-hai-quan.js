window.PA_DATA = window.PA_DATA || { modules: [], glossary: [] };
window.PA_DATA.modules.push({
  id: 'hai-quan', order: 1, icon: '🛃', short: 'Pháp luật hải quan',
  title: 'Pháp luật hải quan cho cảng & kho bãi',
  desc: 'Luật Hải quan, thủ tục – giám sát hàng hóa tại cảng, kho ngoại quan, CFS, VASSCM, hàng tồn đọng và xử phạt.',
  intro: '<p>Chuyên đề này nhìn pháp luật hải quan <b>từ góc độ doanh nghiệp khai thác cảng, kho, bãi</b> — tức là bên chịu trách nhiệm lưu giữ, giao nhận hàng đang chịu sự giám sát hải quan — chứ không chỉ từ góc độ người khai hải quan.</p>' +
    '<p>Câu hỏi xuyên suốt: <i>“Hàng này đã được hải quan cho phép đưa ra/đưa vào chưa, và mình có chứng cứ điện tử/giấy tờ chứng minh điều đó không?”</i></p>',
  lessons: [
    {
      id: 'tong-quan', title: 'Hệ thống văn bản & bộ máy hải quan', minutes: 12,
      source: 'Luật Hải quan 54/2014/QH13 (đã sửa đổi)',
      body: `
<h2>1. Vì sao người làm cảng phải hiểu luật hải quan?</h2>
<p>Cảng biển, cảng thủy nội địa, kho, bãi là <b>địa bàn hoạt động hải quan</b>. Hàng nhập khẩu dỡ xuống cầu tàu nhưng chưa thông quan, hàng xuất khẩu đã hạ bãi chờ xếp tàu, hàng quá cảnh, hàng trong kho ngoại quan… đều là <b>hàng đang chịu sự giám sát hải quan</b>. Doanh nghiệp cảng là bên giữ hàng, nên nếu giao sai, giao thiếu, để mất seal hay chậm khai báo, doanh nghiệp cảng có thể bị xử phạt và chịu trách nhiệm bồi thường.</p>

<h2>2. Khung văn bản cần biết</h2>
<div class="table-wrap"><table>
<tr><th>Cấp</th><th>Văn bản chính</th><th>Nội dung liên quan đến cảng/kho</th></tr>
<tr><td>Luật</td><td><b>Luật Hải quan số 54/2014/QH13</b> (hiệu lực 01/01/2015), được sửa đổi, bổ sung một số điều (gần nhất trong đợt sửa đổi năm 2025)</td><td>Địa bàn hoạt động hải quan, thủ tục, kiểm tra – giám sát, kho ngoại quan, kho bảo thuế, CFS, trách nhiệm DN kinh doanh cảng, kho, bãi</td></tr>
<tr><td>Luật</td><td>Luật Thuế xuất khẩu, thuế nhập khẩu số 107/2016/QH13</td><td>Đối tượng chịu thuế, miễn/giảm/hoàn thuế</td></tr>
<tr><td>Nghị định</td><td>Nghị định 08/2015/NĐ-CP, sửa đổi bởi Nghị định 59/2018/NĐ-CP và các văn bản sau</td><td>Chi tiết thủ tục, kiểm tra, giám sát, kiểm soát hải quan</td></tr>
<tr><td>Nghị định</td><td>Nghị định 68/2016/NĐ-CP, sửa đổi bởi Nghị định 67/2020/NĐ-CP</td><td>Điều kiện kinh doanh kho ngoại quan, kho CFS, địa điểm làm thủ tục, tập kết, kiểm tra, giám sát hải quan</td></tr>
<tr><td>Nghị định</td><td>Nghị định 128/2020/NĐ-CP, sửa đổi bởi Nghị định 102/2021/NĐ-CP</td><td>Xử phạt vi phạm hành chính trong lĩnh vực hải quan</td></tr>
<tr><td>Thông tư</td><td>Thông tư 38/2015/TT-BTC, sửa đổi bởi Thông tư 39/2018/TT-BTC và các thông tư sửa đổi tiếp theo</td><td>Hồ sơ, mẫu biểu, quy trình thủ tục; quản lý hàng hóa tại cảng qua hệ thống <b>VASSCM</b></td></tr>
</table></div>

<div class="callout warn"><strong class="title">⚠️ Lưu ý về hiệu lực</strong>Hệ thống văn bản hải quan thay đổi rất thường xuyên (thông tư sửa đổi gần như hằng năm). Thói quen tốt: mỗi khi trích dẫn một điều khoản trong email hay biên bản, hãy mở văn bản <b>hợp nhất</b> mới nhất trên vbpl.vn và ghi rõ “theo văn bản hợp nhất số…”.</div>

<h2>3. Bộ máy hải quan (sau sắp xếp năm 2025)</h2>
<p>Từ năm 2025, trong đợt sắp xếp tinh gọn bộ máy, Tổng cục Hải quan được tổ chức lại thành <b>Cục Hải quan</b> trực thuộc Bộ Tài chính; các Cục Hải quan tỉnh/thành phố được sắp xếp thành các <b>Chi cục Hải quan khu vực</b>, bên dưới là các <b>Hải quan cửa khẩu/đội</b> trực tiếp làm thủ tục và giám sát tại cảng. Khi làm việc thực tế, bạn cần biết rõ:</p>
<ul>
<li>Đơn vị hải quan nào <b>quản lý trực tiếp địa bàn cảng/kho</b> của mình (đầu mối giám sát, nhận báo cáo).</li>
<li>Đầu mối kỹ thuật cho kết nối hệ thống <b>VASSCM</b> và hệ thống soi chiếu/camera.</li>
<li>Đầu mối xử lý hàng tồn đọng, hàng không có người nhận.</li>
</ul>

<h2>4. Các khái niệm nền tảng</h2>
<ul>
<li><b>Thủ tục hải quan</b>: các công việc người khai hải quan và công chức hải quan phải thực hiện với hàng hóa, phương tiện vận tải.</li>
<li><b>Kiểm tra hải quan</b>: kiểm tra hồ sơ, chứng từ và kiểm tra thực tế hàng hóa.</li>
<li><b>Giám sát hải quan</b>: biện pháp nghiệp vụ để bảo đảm <b>nguyên trạng</b> hàng hóa đang thuộc đối tượng quản lý hải quan (niêm phong, camera, hệ thống điện tử, giám sát trực tiếp…).</li>
<li><b>Thông quan</b>: hoàn thành thủ tục để hàng được nhập khẩu, xuất khẩu hoặc đặt dưới chế độ quản lý khác.</li>
<li><b>Giải phóng hàng</b>: hàng được đưa ra khỏi khu vực giám sát khi chưa hoàn thành nghĩa vụ thuế nhưng đã đáp ứng điều kiện (ví dụ có bảo lãnh).</li>
<li><b>Đưa hàng về bảo quản</b>: hàng chưa thông quan nhưng được đưa về kho của DN để chờ kết quả kiểm tra chuyên ngành.</li>
</ul>
<div class="callout tip"><strong class="title">💡 Góc thực tế</strong>Với doanh nghiệp cảng, ba trạng thái “thông quan”, “giải phóng hàng”, “đưa hàng về bảo quản” <b>đều cho phép hàng qua khu vực giám sát</b> — nhưng là ba trạng thái pháp lý khác nhau. Đừng chỉ hỏi “thông quan chưa?”, hãy hỏi “hàng đã đủ điều kiện qua khu vực giám sát chưa?”.</div>
`,
      keyPoints: [
        'Cảng, kho, bãi là địa bàn hoạt động hải quan; hàng chưa đủ điều kiện qua khu vực giám sát thì DN cảng là người chịu trách nhiệm giữ nguyên trạng.',
        'Luật Hải quan 54/2014/QH13 + NĐ 08/2015 (sửa đổi 59/2018) + TT 38/2015 (sửa đổi 39/2018 và tiếp theo) là “bộ khung” thủ tục.',
        'NĐ 68/2016 (sửa đổi 67/2020) quy định điều kiện kinh doanh kho ngoại quan, CFS, địa điểm kiểm tra.',
        'Luôn tra văn bản hợp nhất mới nhất trước khi trích dẫn.'
      ],
      apply: [
        'Lập danh sách đầu mối hải quan quản lý trực tiếp cảng/kho của bạn (tên đơn vị, người phụ trách, số điện thoại trực).',
        'Tải về văn bản hợp nhất Luật Hải quan và Thông tư 38/2015 mới nhất, lưu vào thư mục dùng chung của bộ phận.',
        'Kiểm tra quy trình nội bộ: ai trong ca được quyền xác nhận hàng “đủ điều kiện qua khu vực giám sát”?'
      ],
      quiz: [
        { q: 'Biện pháp nào dùng để bảo đảm nguyên trạng hàng hóa đang chịu sự quản lý hải quan?', options: ['Kiểm tra sau thông quan', 'Giám sát hải quan', 'Tham vấn giá', 'Phân loại hàng hóa'], answer: 1, explain: 'Giám sát hải quan (niêm phong, camera, hệ thống điện tử, giám sát trực tiếp) nhằm giữ nguyên trạng hàng hóa.' },
        { q: 'Nghị định nào quy định xử phạt vi phạm hành chính trong lĩnh vực hải quan?', options: ['NĐ 08/2015/NĐ-CP', 'NĐ 68/2016/NĐ-CP', 'NĐ 128/2020/NĐ-CP', 'NĐ 163/2017/NĐ-CP'], answer: 2, explain: 'NĐ 128/2020/NĐ-CP (sửa đổi bởi NĐ 102/2021/NĐ-CP) quy định xử phạt VPHC lĩnh vực hải quan.' },
        { q: 'Hàng “giải phóng hàng” khác “thông quan” ở điểm nào?', options: ['Hàng giải phóng không được ra khỏi cảng', 'Hàng giải phóng được đưa ra nhưng chưa hoàn thành nghĩa vụ thuế', 'Hai khái niệm giống nhau', 'Giải phóng hàng chỉ áp dụng hàng xuất khẩu'], answer: 1, explain: 'Giải phóng hàng: hàng được đưa ra khi chưa hoàn thành nghĩa vụ thuế nhưng đáp ứng điều kiện (ví dụ bảo lãnh).' }
      ]
    },
    {
      id: 'thu-tuc', title: 'Thủ tục hải quan hàng xuất nhập khẩu: hồ sơ, thời hạn, phân luồng', minutes: 15,
      source: 'Luật Hải quan 2014 (Điều 23, 25 về thời hạn); TT 38/2015',
      body: `
<h2>1. Quy trình tổng quát</h2>
<ol>
<li><b>Khai hải quan</b> điện tử trên hệ thống VNACCS/VCIS (tờ khai, kèm hồ sơ điện tử).</li>
<li>Hệ thống quản lý rủi ro <b>phân luồng</b> tờ khai.</li>
<li><b>Kiểm tra</b> hồ sơ và/hoặc thực tế hàng hóa (nếu có).</li>
<li><b>Nộp thuế</b>, phí, lệ phí (hoặc bảo lãnh).</li>
<li><b>Thông quan / giải phóng hàng / đưa hàng về bảo quản</b>.</li>
<li>Hàng được <b>đưa qua khu vực giám sát</b> — tại cảng, đây là bước đối chiếu trên VASSCM và giao hàng.</li>
</ol>

<h2>2. Ba luồng tờ khai</h2>
<div class="table-wrap"><table>
<tr><th>Luồng</th><th>Ý nghĩa</th><th>Tác động tới khai thác cảng</th></tr>
<tr><td>🟢 Xanh</td><td>Miễn kiểm tra hồ sơ và miễn kiểm tra thực tế</td><td>Hàng đi nhanh — chuẩn bị giao ngay khi có đủ điều kiện trên hệ thống</td></tr>
<tr><td>🟡 Vàng</td><td>Kiểm tra hồ sơ, miễn kiểm tra thực tế</td><td>Có thể kéo dài thời gian lưu bãi vài giờ đến vài ngày</td></tr>
<tr><td>🔴 Đỏ</td><td>Kiểm tra hồ sơ và kiểm tra thực tế hàng hóa (thủ công hoặc qua máy soi)</td><td>Phải bố trí đảo chuyển container tới khu kiểm hóa/máy soi, phương tiện, nhân lực; tính phí dịch vụ phát sinh</td></tr>
</table></div>
<p>Ngoài ra, sau thông quan hàng hóa vẫn có thể bị <b>kiểm tra sau thông quan</b> (trong thời hạn luật định), nên hồ sơ giao nhận của cảng phải được lưu trữ đầy đủ.</p>

<h2>3. Thời hạn quan trọng</h2>
<div class="table-wrap"><table>
<tr><th>Nội dung</th><th>Thời hạn</th></tr>
<tr><td>Nộp hồ sơ hải quan hàng <b>nhập khẩu</b></td><td>Trước ngày hàng đến cửa khẩu hoặc trong vòng <b>30 ngày</b> kể từ ngày hàng đến cửa khẩu</td></tr>
<tr><td>Nộp hồ sơ hải quan hàng <b>xuất khẩu</b></td><td>Sau khi đã tập kết hàng tại địa điểm người khai thông báo và chậm nhất <b>4 giờ trước khi phương tiện xuất cảnh</b> (hàng chuyển phát nhanh: 2 giờ)</td></tr>
<tr><td>Tờ khai có giá trị làm thủ tục</td><td><b>15 ngày</b> kể từ ngày đăng ký</td></tr>
<tr><td>Công chức hải quan kiểm tra hồ sơ</td><td>Chậm nhất <b>2 giờ làm việc</b> từ khi tiếp nhận đầy đủ hồ sơ</td></tr>
<tr><td>Kiểm tra thực tế hàng hóa</td><td>Chậm nhất <b>8 giờ làm việc</b> từ khi người khai xuất trình đủ hàng; có thể gia hạn nhưng không quá <b>2 ngày</b> với trường hợp phức tạp/ số lượng lớn</td></tr>
</table></div>
<div class="callout info"><strong class="title">Ý nghĩa với cảng</strong>Mốc “4 giờ trước khi tàu xuất cảnh” là lý do cảng đặt <b>closing time</b> (giờ cắt máng) cho hàng xuất. Nếu hàng hạ bãi trễ, hãng tàu/cảng có quyền từ chối xếp (short-ship). Hãy ghi rõ closing time trong booking confirmation và thông báo cho chủ hàng.</div>

<h2>4. Hồ sơ cơ bản</h2>
<ul>
<li>Tờ khai hải quan (điện tử).</li>
<li>Hóa đơn thương mại (Commercial Invoice); vận đơn (B/L) hoặc chứng từ vận tải tương đương với hàng nhập.</li>
<li>Giấy phép, kết quả kiểm tra chuyên ngành (nếu hàng thuộc diện quản lý chuyên ngành: kiểm dịch, kiểm tra chất lượng, an toàn thực phẩm…).</li>
<li>Chứng từ chứng nhận xuất xứ (C/O) nếu hưởng ưu đãi thuế theo FTA.</li>
<li>Các chứng từ khác theo từng loại hình (hợp đồng gia công, danh mục máy móc thiết bị…).</li>
</ul>

<h2>5. Kiểm tra chuyên ngành — “nút thắt” thời gian lưu bãi</h2>
<p>Nhiều lô hàng nằm bãi lâu không phải vì thủ tục hải quan mà vì chờ <b>kiểm tra chuyên ngành</b> (kiểm dịch thực vật, động vật, an toàn thực phẩm, chất lượng…). Doanh nghiệp cảng nên:</p>
<ul>
<li>Theo dõi riêng nhóm hàng phải kiểm tra chuyên ngành để dự báo dwell time và bố trí khu vực bãi phù hợp (hàng lạnh cần ổ cắm reefer).</li>
<li>Phối hợp lấy mẫu tại cảng: bố trí lối đi an toàn, thời gian mở container, lập biên bản tình trạng seal trước/sau.</li>
</ul>
`,
      keyPoints: [
        'Xanh: miễn kiểm tra; Vàng: kiểm tra hồ sơ; Đỏ: kiểm tra hồ sơ + thực tế.',
        'Hàng xuất: nộp hồ sơ chậm nhất 4 giờ trước khi tàu xuất cảnh → cơ sở pháp lý cho closing time.',
        'Hàng nhập: nộp hồ sơ trước khi hàng đến hoặc trong 30 ngày kể từ ngày hàng đến; tờ khai có giá trị 15 ngày.',
        'Kiểm tra hồ sơ ≤ 2 giờ làm việc; kiểm tra thực tế ≤ 8 giờ làm việc (gia hạn tối đa 2 ngày).'
      ],
      apply: [
        'Thống kê 1 tháng gần nhất: tỷ lệ container luồng đỏ, thời gian trung bình từ lúc có lệnh kiểm hóa tới lúc container sẵn sàng tại khu kiểm hóa.',
        'Rà soát closing time trên lịch tàu so với mốc 4 giờ — có đủ thời gian cho hàng đến muộn làm thủ tục không?',
        'Đánh dấu trên hệ thống quản lý bãi các container chờ kiểm tra chuyên ngành để tách khỏi số liệu dwell time “bình thường”.'
      ],
      quiz: [
        { q: 'Tờ khai luồng vàng nghĩa là gì?', options: ['Miễn kiểm tra toàn bộ', 'Kiểm tra hồ sơ, miễn kiểm tra thực tế', 'Kiểm tra hồ sơ và thực tế', 'Chỉ kiểm tra qua máy soi'], answer: 1 },
        { q: 'Thời hạn chậm nhất nộp hồ sơ hải quan hàng xuất khẩu (thông thường) là?', options: ['24 giờ trước khi tàu đến', '4 giờ trước khi phương tiện xuất cảnh', '2 giờ sau khi xếp hàng lên tàu', '30 ngày kể từ ngày đóng hàng'], answer: 1, explain: 'Theo Luật Hải quan: chậm nhất 4 giờ trước khi phương tiện vận tải xuất cảnh.' },
        { q: 'Hàng nhập khẩu phải nộp hồ sơ hải quan trong thời hạn nào?', options: ['Trong 15 ngày kể từ ngày hàng đến', 'Trước ngày hàng đến hoặc trong 30 ngày kể từ ngày hàng đến cửa khẩu', 'Trong 90 ngày', 'Không giới hạn'], answer: 1 },
        { q: 'Thời hạn kiểm tra thực tế hàng hóa của công chức hải quan là?', options: ['2 giờ làm việc', '8 giờ làm việc, có thể gia hạn tối đa 2 ngày', '5 ngày làm việc', '24 giờ'], answer: 1 }
      ]
    },
    {
      id: 'giam-sat', title: 'Giám sát hải quan tại cảng: VASSCM, seal và trách nhiệm DN cảng', minutes: 15,
      source: 'Luật Hải quan 2014 (Điều 41); TT 38/2015 (sửa đổi bởi TT 39/2018)',
      body: `
<h2>1. Trách nhiệm của doanh nghiệp kinh doanh cảng, kho, bãi</h2>
<p>Luật Hải quan (Điều 41) đặt ra các nghĩa vụ cốt lõi cho doanh nghiệp kinh doanh cảng, kho, bãi — tóm tắt dưới dạng thực hành:</p>
<ol>
<li><b>Kết nối hệ thống thông tin</b> với cơ quan hải quan để quản lý hàng hóa đưa vào, lưu giữ, đưa ra khỏi cảng, kho, bãi.</li>
<li>Chỉ cho phép <b>đưa hàng ra khỏi khu vực giám sát</b> khi hàng đã đủ điều kiện (có xác nhận của cơ quan hải quan trên hệ thống/chứng từ).</li>
<li><b>Bảo quản, lưu giữ nguyên trạng</b> hàng hóa đang chịu sự giám sát hải quan; thực hiện yêu cầu của hải quan về kiểm tra, giám sát.</li>
<li><b>Cung cấp thông tin, báo cáo</b> về hàng hóa (hàng đến, hàng tồn, hàng quá thời hạn…) theo yêu cầu.</li>
<li>Bố trí <b>địa điểm, trang thiết bị</b> phục vụ kiểm tra, giám sát (khu kiểm hóa, camera, máy soi theo quy định).</li>
</ol>

<h2>2. VASSCM — Hệ thống quản lý, giám sát hải quan tự động</h2>
<p>VASSCM (Vietnam Automated System for Seaport Customs Management) kết nối hệ thống của doanh nghiệp cảng (TOS) với hệ thống hải quan. Luồng thông tin chính:</p>
<div class="table-wrap"><table>
<tr><th>Bước</th><th>Ai gửi</th><th>Thông tin</th></tr>
<tr><td>1. Trước khi tàu đến</td><td>Hãng tàu/đại lý</td><td>Bản lược khai hàng hóa (e-manifest) gửi qua Cổng thông tin một cửa quốc gia</td></tr>
<tr><td>2. Hàng dỡ/hạ vào cảng</td><td>DN cảng</td><td>Xác nhận hàng vào cảng: số container, seal, trọng lượng, vị trí, tình trạng bất thường</td></tr>
<tr><td>3. Hàng đủ điều kiện</td><td>Hải quan</td><td>Danh sách container/hàng đủ điều kiện qua khu vực giám sát (thông quan, giải phóng hàng, đưa về bảo quản, chuyển cảng…)</td></tr>
<tr><td>4. Hàng ra khỏi cảng / xếp lên tàu</td><td>DN cảng</td><td>Xác nhận hàng đã ra cổng hoặc đã xếp lên tàu xuất cảnh</td></tr>
</table></div>
<div class="callout danger"><strong class="title">⛔ Tình huống rủi ro cao</strong>Cổng cảng cho xe ra khi hệ thống chưa trả trạng thái “đủ điều kiện qua khu vực giám sát” — ví dụ do nhân viên cổng nhập tay, hệ thống lỗi, hoặc “tin” chứng từ giấy do tài xế xuất trình. Đây là nguyên nhân phổ biến dẫn đến <b>hàng bị đưa ra trái phép</b> và DN cảng bị xử phạt/khởi tố liên quan.</div>

<h2>3. Niêm phong (seal) — bằng chứng nguyên trạng</h2>
<ul>
<li><b>Seal hãng tàu</b> (carrier seal), <b>seal hải quan</b>, và với hàng chuyển cảng có thể có <b>seal định vị điện tử</b>.</li>
<li>Khi nhận container: đối chiếu <b>số seal thực tế với số seal trên manifest/EIR</b>; chụp ảnh seal; kiểm tra seal có dấu hiệu bị can thiệp (cắt, dán lại, bu lông bị thay).</li>
<li>Seal sai/không có seal: <b>lập biên bản bất thường</b> có chữ ký tài xế/đại diện hãng tàu, thông báo ngay cho hải quan giám sát và hãng tàu, cách ly container.</li>
<li>Sau kiểm hóa: container được niêm phong lại bằng seal hải quan; cảng cập nhật số seal mới trên hệ thống.</li>
</ul>

<h2>4. Camera, máy soi và khu kiểm hóa</h2>
<p>DN cảng phải bố trí hệ thống camera giám sát theo yêu cầu, chia sẻ hình ảnh cho hải quan, lưu trữ dữ liệu trong thời hạn quy định. Hãy đảm bảo:</p>
<ul>
<li>Camera bao quát cổng, khu kiểm hóa, khu hàng nguy hiểm, khu hàng tạm giữ.</li>
<li>Có quy trình xử lý khi camera hỏng (thông báo, biện pháp thay thế) — đây là điều kiện duy trì công nhận địa điểm.</li>
</ul>
`,
      keyPoints: [
        'Điều 41 Luật Hải quan: DN cảng/kho/bãi phải kết nối thông tin, chỉ cho hàng ra khi đủ điều kiện, giữ nguyên trạng, báo cáo.',
        'VASSCM: cảng xác nhận hàng vào → hải quan trả danh sách đủ điều kiện → cảng xác nhận hàng ra/xếp tàu.',
        'Seal là bằng chứng nguyên trạng: đối chiếu, chụp ảnh, lập biên bản ngay khi bất thường.',
        'Không bao giờ cho hàng ra cổng chỉ dựa trên chứng từ giấy khi hệ thống chưa xác nhận.'
      ],
      apply: [
        'Kiểm tra quy trình cổng: hệ thống có khóa cứng (hard-block) không cho in phiếu ra cổng khi chưa có trạng thái đủ điều kiện từ VASSCM?',
        'Rà soát mẫu biên bản bất thường về seal: đủ ô ảnh, giờ, vị trí, chữ ký các bên chưa?',
        'Lấy danh sách camera, kiểm tra camera nào đang hỏng và thời gian lưu trữ thực tế của đầu ghi.',
        'Tổ chức 15 phút đào tạo cho nhân viên cổng về tình huống "hệ thống lỗi — làm gì?".'
      ],
      quiz: [
        { q: 'Theo Luật Hải quan, DN kinh doanh cảng chỉ được cho hàng ra khỏi khu vực giám sát khi nào?', options: ['Khi tài xế có lệnh giao hàng (D/O)', 'Khi hàng đã đủ điều kiện qua khu vực giám sát theo xác nhận của hải quan', 'Khi chủ hàng đã trả phí lưu bãi', 'Khi hãng tàu đồng ý'], answer: 1, explain: 'D/O và phí là điều kiện thương mại; điều kiện pháp lý là xác nhận của cơ quan hải quan.' },
        { q: 'Phát hiện số seal container không khớp manifest khi hạ bãi, việc đầu tiên nên làm là?', options: ['Cắt seal kiểm tra hàng', 'Ghi chú vào sổ và cho hạ bãi bình thường', 'Lập biên bản bất thường, chụp ảnh, thông báo hải quan & hãng tàu, cách ly container', 'Trả container về cho tài xế'], answer: 2 },
        { q: 'VASSCM là gì?', options: ['Hệ thống khai báo thuế điện tử', 'Hệ thống quản lý, giám sát hải quan tự động tại cảng', 'Phần mềm quản lý kho của DN', 'Hệ thống đặt chỗ tàu'], answer: 1 }
      ]
    },
    {
      id: 'kho-ngoai-quan', title: 'Kho ngoại quan, CFS, kho bảo thuế, hàng quá cảnh & chuyển cảng', minutes: 14,
      source: 'Luật Hải quan 2014 (Mục kho ngoại quan, CFS); NĐ 68/2016 (sửa đổi 67/2020)',
      body: `
<h2>1. So sánh các loại kho, địa điểm</h2>
<div class="table-wrap"><table>
<tr><th>Loại</th><th>Chức năng</th><th>Điểm cần nhớ</th></tr>
<tr><td><b>Kho ngoại quan</b> (Bonded warehouse)</td><td>Lưu giữ hàng từ nước ngoài, hàng chờ xuất khẩu, hàng chờ đưa vào nội địa; được phép thực hiện một số dịch vụ (đóng gói, phân loại, chia tách, gia cố, bảo dưỡng…)</td><td>Hàng gửi kho ngoại quan được lưu giữ <b>không quá 12 tháng</b> kể từ ngày đưa vào; có thể được gia hạn (tối đa thêm 12 tháng) nếu có lý do chính đáng. Hàng phải được khai báo khi đưa vào/đưa ra.</td></tr>
<tr><td><b>Địa điểm thu gom hàng lẻ – CFS</b></td><td>Đóng ghép (consolidation) hàng lẻ xuất khẩu, chia tách (deconsolidation) hàng lẻ nhập khẩu</td><td>Hàng nhập được khai hải quan sau khi chia tách; quản lý theo từng vận đơn thứ cấp (House B/L).</td></tr>
<tr><td><b>Kho bảo thuế</b></td><td>Lưu giữ nguyên liệu nhập khẩu chưa nộp thuế để phục vụ sản xuất hàng xuất khẩu của chính DN</td><td>Gắn với DN sản xuất có điều kiện; ít liên quan khai thác cảng công cộng.</td></tr>
<tr><td><b>Địa điểm kiểm tra tập trung / kiểm tra tại chân công trình</b></td><td>Nơi hải quan kiểm tra thực tế hàng</td><td>Hàng siêu trường siêu trọng có thể được kiểm tra tại chân công trình/kho DN theo quy định.</td></tr>
</table></div>

<h2>2. Điều kiện kinh doanh (NĐ 68/2016, sửa đổi NĐ 67/2020)</h2>
<p>Khái quát các yêu cầu khi đề nghị công nhận kho ngoại quan/CFS: vị trí trong khu vực được phép; diện tích tối thiểu theo quy định; có tường rào ngăn cách; <b>hệ thống camera</b> kết nối với hải quan; <b>phần mềm quản lý</b> hàng hóa kết nối trao đổi dữ liệu với hải quan; điều kiện PCCC. Không duy trì đủ điều kiện có thể bị <b>tạm dừng hoặc chấm dứt hoạt động</b>.</p>

<h2>3. Hàng quá cảnh, chuyển cảng, chuyển tải</h2>
<ul>
<li><b>Quá cảnh (transit)</b>: hàng từ nước ngoài đi qua lãnh thổ Việt Nam sang nước thứ ba (ví dụ hàng Campuchia, Lào qua cảng Việt Nam). Phải giữ nguyên trạng, đi đúng tuyến đường, cửa khẩu và thời gian đã đăng ký.</li>
<li><b>Chuyển cảng</b>: hàng được vận chuyển từ cảng dỡ hàng sang cảng/địa điểm khác (ví dụ ICD, cảng cạn, cảng thủy nội địa) để làm thủ tục. Giám sát bằng niêm phong và/hoặc seal định vị.</li>
<li><b>Chuyển tải (transhipment)</b>: hàng chuyển từ phương tiện này sang phương tiện khác trong khu vực cảng để tiếp tục vận chuyển.</li>
</ul>
<div class="callout tip"><strong class="title">💡 Với cảng thủy nội địa / sà lan</strong>Hàng container chuyển cảng bằng sà lan từ cảng biển về cảng thủy nội địa/ICD là mô hình phổ biến ở khu vực phía Nam và phía Bắc. Điểm hay sai: <b>số seal và số container trên tờ khai vận chuyển độc lập không khớp</b> với thực tế nhận tại cảng đích, hoặc sà lan đến <b>quá thời gian</b> đã đăng ký. Hãy đối chiếu ngay khi tiếp nhận và báo cáo hải quan đúng hạn.</div>

<h2>4. Dịch vụ giá trị gia tăng được phép trong kho ngoại quan</h2>
<p>Chia tách, đóng gói, đóng gói lại, phân loại, dán nhãn (theo quy định), gia cố, sửa chữa bao bì, bảo quản, bảo dưỡng. Đây là nguồn doanh thu bổ sung đáng kể nếu cảng/kho có không gian và nhân lực phù hợp — nhưng mọi thao tác phải được hải quan giám sát và ghi nhận đúng quy trình.</p>
`,
      keyPoints: [
        'Kho ngoại quan: thời hạn lưu giữ không quá 12 tháng, có thể gia hạn (tối đa thêm 12 tháng).',
        'CFS: đóng ghép/chia tách hàng lẻ, quản lý theo House B/L.',
        'Quá cảnh – chuyển cảng – chuyển tải là ba chế độ khác nhau; điểm chung là giữ nguyên trạng và đúng tuyến/thời gian.',
        'Điều kiện kho ngoại quan/CFS: tường rào, camera, phần mềm kết nối hải quan, PCCC — phải duy trì liên tục.'
      ],
      apply: [
        'Nếu cảng/kho của bạn có kho ngoại quan: lập báo cáo hàng lưu giữ sắp chạm mốc 12 tháng (cảnh báo trước 60 ngày).',
        'Với hàng chuyển cảng bằng sà lan: kiểm tra quy trình đối chiếu seal & thời gian đến so với tờ khai vận chuyển.',
        'Liệt kê dịch vụ giá trị gia tăng có thể cung cấp trong kho ngoại quan/CFS và ước tính doanh thu tiềm năng.'
      ],
      quiz: [
        { q: 'Thời hạn lưu giữ hàng hóa gửi kho ngoại quan theo Luật Hải quan là?', options: ['3 tháng', '6 tháng', 'Không quá 12 tháng, có thể gia hạn', 'Không giới hạn'], answer: 2 },
        { q: 'Hoạt động chia tách hàng lẻ nhập khẩu thường diễn ra ở đâu?', options: ['Kho bảo thuế', 'Địa điểm thu gom hàng lẻ (CFS)', 'Cầu tàu', 'Trên tàu'], answer: 1 },
        { q: 'Hàng từ Campuchia đi qua cảng Việt Nam để xuất sang Mỹ thuộc chế độ nào?', options: ['Chuyển cảng', 'Quá cảnh', 'Tạm nhập tái xuất', 'Nhập khẩu kinh doanh'], answer: 1 }
      ]
    },
    {
      id: 'ton-dong-xu-phat', title: 'Hàng tồn đọng, hàng không người nhận & rủi ro xử phạt', minutes: 12,
      source: 'Luật Hải quan 2014; NĐ 08/2015; NĐ 128/2020 (sửa đổi 102/2021)',
      body: `
<h2>1. Hàng không có người nhận / tồn đọng</h2>
<p>Hàng nhập khẩu đã đến cửa khẩu nhưng <b>sau 90 ngày</b> kể từ ngày hàng đến mà không có người đến nhận (hoặc không làm thủ tục) được xác định là hàng không có người nhận và được xử lý theo quy định (thông báo tìm chủ hàng, thanh lý, tiêu hủy…). Hàng bị từ bỏ, hàng thất lạc, nhầm lẫn cũng có cơ chế xử lý riêng.</p>
<p>Đối với doanh nghiệp cảng, hàng tồn đọng gây ra:</p>
<ul>
<li><b>Chiếm dụng bãi</b>, đặc biệt container lạnh (tốn điện, ổ cắm) và hàng nguy hiểm.</li>
<li><b>Rủi ro chi phí</b>: phí lưu bãi khó thu; chi phí vệ sinh, tiêu hủy hàng hư hỏng (thực phẩm thối rữa) có thể rất lớn.</li>
<li><b>Rủi ro an toàn – môi trường</b>: hóa chất, phế liệu tồn lâu.</li>
</ul>
<div class="callout tip"><strong class="title">💡 Quy trình đề xuất</strong>
<ol>
<li>Mốc 30 ngày: tự động gửi thông báo cho hãng tàu/đại lý & người nhận hàng (nếu có thông tin).</li>
<li>Mốc 60 ngày: báo cáo danh sách lên hải quan quản lý địa bàn, đề nghị phối hợp.</li>
<li>Mốc 90 ngày: lập hồ sơ đề nghị xử lý hàng không người nhận theo quy định; phối hợp hãng tàu về container rỗng.</li>
<li>Hàng lạnh/hàng dễ hư hỏng/hàng nguy hiểm: rút ngắn các mốc trên, báo cáo sớm.</li>
</ol></div>

<h2>2. Hành vi vi phạm thường gặp liên quan đến DN cảng, kho, bãi</h2>
<div class="table-wrap"><table>
<tr><th>Hành vi</th><th>Nguyên nhân gốc thường gặp</th><th>Biện pháp phòng ngừa</th></tr>
<tr><td>Đưa hàng ra khỏi khu vực giám sát khi chưa đủ điều kiện</td><td>Thao tác tay ở cổng, hệ thống không khóa, áp lực giải phóng xe</td><td>Hard-block trên TOS; phân quyền override có phê duyệt; log kiểm toán</td></tr>
<tr><td>Không bảo quản nguyên trạng, để mất/thay đổi seal, hàng</td><td>Đảo chuyển thiếu kiểm soát, va chạm, trộm cắp</td><td>Camera, kiểm đếm seal theo ca, khu tạm giữ có rào</td></tr>
<tr><td>Khai báo/xác nhận thông tin sai lệch trên hệ thống</td><td>Nhập liệu tay, sai số container, sai trọng lượng</td><td>Quét OCR cổng, đối soát tự động, kiểm tra chéo</td></tr>
<tr><td>Không báo cáo/báo cáo chậm theo yêu cầu</td><td>Không rõ đầu mối, không có lịch báo cáo</td><td>Lịch báo cáo cố định, phân công người chịu trách nhiệm</td></tr>
</table></div>
<p>Mức phạt cụ thể quy định tại <b>NĐ 128/2020/NĐ-CP</b> (đã sửa đổi). Ngoài phạt tiền, nếu hành vi có dấu hiệu tội phạm (ví dụ tiếp tay buôn lậu) cá nhân có thể bị truy cứu trách nhiệm hình sự. Cần tra mức phạt tại văn bản hợp nhất mới nhất khi xử lý vụ việc cụ thể.</p>

<h2>3. Kỹ năng làm việc với đoàn kiểm tra</h2>
<ul>
<li>Chỉ định <b>một đầu mối</b> tiếp đoàn; ghi nhận yêu cầu bằng văn bản.</li>
<li>Cung cấp tài liệu đúng phạm vi yêu cầu; <b>lập danh mục tài liệu đã giao</b>, có ký nhận.</li>
<li>Đọc kỹ biên bản trước khi ký; được quyền ghi ý kiến giải trình vào biên bản.</li>
<li>Báo cáo ngay lãnh đạo và pháp chế khi có dấu hiệu vi phạm nghiêm trọng.</li>
</ul>
`,
      keyPoints: [
        'Hàng nhập khẩu quá 90 ngày kể từ ngày đến mà không có người nhận → xử lý theo cơ chế hàng không người nhận.',
        'Xây quy trình cảnh báo nhiều mốc (30 – 60 – 90 ngày), rút ngắn với hàng lạnh/hàng nguy hiểm.',
        'Rủi ro lớn nhất của DN cảng: cho hàng ra khi chưa đủ điều kiện, mất nguyên trạng, khai báo sai.',
        'Xử phạt theo NĐ 128/2020 (sửa đổi 102/2021); trường hợp nghiêm trọng có thể bị xử lý hình sự.'
      ],
      apply: [
        'Lấy danh sách container lưu bãi > 30 ngày, phân loại: lạnh, nguy hiểm, khô; xác định chủ hàng/hãng tàu chịu trách nhiệm.',
        'Kiểm tra trên TOS: ai có quyền override trạng thái cổng? Có log và có phê duyệt cấp trên không?',
        'Soạn quy trình 1 trang “Tiếp đoàn kiểm tra” và phổ biến cho trưởng ca.'
      ],
      quiz: [
        { q: 'Hàng nhập khẩu được xác định là hàng không có người nhận sau bao lâu kể từ ngày hàng đến cửa khẩu?', options: ['30 ngày', '60 ngày', '90 ngày', '12 tháng'], answer: 2 },
        { q: 'Biện pháp hiệu quả nhất để ngăn hàng bị đưa ra cổng khi chưa đủ điều kiện là?', options: ['Nhắc nhở nhân viên', 'Khóa cứng trên hệ thống TOS + phân quyền override có phê duyệt và log', 'Kiểm tra chứng từ giấy kỹ hơn', 'Tăng bảo vệ'], answer: 1, explain: 'Kiểm soát kỹ thuật (hard-block) mạnh hơn kiểm soát hành chính; override phải có phê duyệt và để lại dấu vết.' },
        { q: 'Khi ký biên bản làm việc với đoàn kiểm tra, doanh nghiệp có quyền gì?', options: ['Không có quyền gì', 'Ghi ý kiến giải trình vào biên bản', 'Từ chối mọi yêu cầu cung cấp tài liệu', 'Yêu cầu đoàn rời đi'], answer: 1 }
      ]
    },
    {
      id: 'thue-hs-co', title: 'Thuế, mã HS, trị giá, C/O & Incoterms — đủ để nói chuyện với khách hàng', minutes: 14,
      source: 'Luật Thuế XNK 107/2016/QH13; Incoterms® 2020',
      body: `
<h2>1. Vì sao người khai thác cảng nên biết?</h2>
<p>Bạn không làm thủ tục thuế thay khách hàng, nhưng hiểu thuế – mã HS – Incoterms giúp bạn <b>dự báo hàng nào sẽ nằm bãi lâu</b>, <b>tư vấn dịch vụ</b> (kho ngoại quan để hoãn thuế, CFS…) và <b>xác định ai trả phí</b> xếp dỡ, lưu bãi.</p>

<h2>2. Mã HS (Harmonized System)</h2>
<ul>
<li>Việt Nam áp dụng biểu thuế dựa trên danh mục HS 8 số (theo AHTN của ASEAN).</li>
<li>Mã HS quyết định: <b>thuế suất</b>, chính sách quản lý (giấy phép, kiểm tra chuyên ngành), ưu đãi FTA.</li>
<li>Khai sai mã HS → truy thu thuế, phạt; hàng bị giữ lại → kéo dài lưu bãi.</li>
</ul>

<h2>3. Trị giá hải quan</h2>
<p>Nguyên tắc: trị giá hải quan hàng nhập khẩu là giá thực tế phải trả tính đến <b>cửa khẩu nhập đầu tiên</b> (thường tương đương giá CIF). Nghĩa là chi phí vận chuyển và bảo hiểm quốc tế được cộng vào; còn chi phí xếp dỡ, vận chuyển nội địa sau cửa khẩu nhập thì không.</p>

<h2>4. Chứng nhận xuất xứ (C/O)</h2>
<p>C/O (form E, D, AK, VJ, EUR.1… hoặc tự chứng nhận xuất xứ) giúp hàng hưởng thuế ưu đãi đặc biệt theo FTA. C/O có vấn đề (sai sót, nghi ngờ) → hải quan có thể xác minh → hàng chậm thông quan.</p>

<h2>5. Incoterms® 2020 — ai chịu chi phí tại cảng?</h2>
<div class="table-wrap"><table>
<tr><th>Điều kiện</th><th>Chuyển rủi ro</th><th>Chi phí xếp dỡ tại cảng đi</th><th>Chi phí dỡ tại cảng đến</th></tr>
<tr><td>EXW</td><td>Tại xưởng người bán</td><td>Người mua</td><td>Người mua</td></tr>
<tr><td>FCA</td><td>Giao cho người chuyên chở do người mua chỉ định</td><td>Tùy nơi giao (thường người mua)</td><td>Người mua</td></tr>
<tr><td>FAS</td><td>Dọc mạn tàu cảng đi</td><td>Người mua (xếp lên tàu)</td><td>Người mua</td></tr>
<tr><td>FOB</td><td>Hàng đã xếp lên tàu tại cảng đi</td><td>Người bán</td><td>Người mua</td></tr>
<tr><td>CFR / CIF</td><td>Hàng đã xếp lên tàu tại cảng đi</td><td>Người bán</td><td>Theo hợp đồng vận tải (thường người mua)</td></tr>
<tr><td>CPT / CIP</td><td>Giao cho người chuyên chở đầu tiên</td><td>Người bán</td><td>Theo hợp đồng vận tải</td></tr>
<tr><td>DAP</td><td>Tại nơi đến, trên phương tiện, sẵn sàng để dỡ</td><td>Người bán</td><td>Người mua</td></tr>
<tr><td>DPU</td><td>Tại nơi đến, đã dỡ khỏi phương tiện</td><td>Người bán</td><td>Người bán</td></tr>
<tr><td>DDP</td><td>Tại nơi đến, đã thông quan nhập khẩu</td><td>Người bán</td><td>Theo thỏa thuận (thường người bán)</td></tr>
</table></div>
<div class="callout warn"><strong class="title">⚠️ Lưu ý</strong>FAS, FOB, CFR, CIF chỉ dùng cho vận tải <b>đường biển và đường thủy nội địa</b>. Với hàng container, ICC khuyến nghị dùng FCA/CPT/CIP thay cho FOB/CFR/CIF vì container thường được giao tại bãi (CY) chứ không phải lên tàu. Incoterms không quy định ai trả <b>THC</b> — điều này phụ thuộc hợp đồng vận tải và tập quán cảng.</div>

<h2>6. Ứng dụng: kho ngoại quan như công cụ tài chính cho khách hàng</h2>
<p>Hàng nhập vào kho ngoại quan <b>chưa phải nộp thuế nhập khẩu</b> cho đến khi đưa vào nội địa. Khách hàng có thể rút hàng theo từng đợt, chỉ nộp thuế phần rút ra → giảm áp lực dòng tiền. Đây là luận điểm bán hàng mạnh cho dịch vụ kho ngoại quan.</p>
`,
      keyPoints: [
        'Mã HS quyết định thuế suất + chính sách quản lý; sai mã HS → hàng bị giữ lâu.',
        'Trị giá hải quan hàng nhập ≈ giá tại cửa khẩu nhập đầu tiên (tương đương CIF).',
        'FAS/FOB/CFR/CIF chỉ dùng cho đường biển & thủy nội địa; hàng container nên dùng FCA/CPT/CIP.',
        'Kho ngoại quan giúp khách hàng hoãn nộp thuế → lợi thế dòng tiền.'
      ],
      apply: [
        'Lấy 5 khách hàng lớn nhất, xác định điều kiện Incoterms họ thường dùng để biết ai là người quyết định chọn cảng/dịch vụ.',
        'Soạn 3 câu giới thiệu dịch vụ kho ngoại quan nhấn mạnh lợi ích hoãn thuế cho khách hàng nhập khẩu.'
      ],
      quiz: [
        { q: 'Điều kiện Incoterms nào chỉ dùng cho vận tải biển/thủy nội địa?', options: ['FCA', 'CPT', 'FOB', 'DAP'], answer: 2 },
        { q: 'Theo DPU, ai chịu chi phí dỡ hàng tại nơi đến?', options: ['Người mua', 'Người bán', 'Hãng tàu', 'Cảng'], answer: 1, explain: 'DPU = Delivered at Place Unloaded: người bán giao hàng đã dỡ khỏi phương tiện tại nơi đến.' },
        { q: 'Lợi ích tài chính chính của kho ngoại quan cho nhà nhập khẩu là?', options: ['Miễn thuế vĩnh viễn', 'Chưa phải nộp thuế nhập khẩu cho tới khi đưa hàng vào nội địa', 'Không phải khai hải quan', 'Giảm phí vận tải biển'], answer: 1 }
      ]
    }
  ]
});
