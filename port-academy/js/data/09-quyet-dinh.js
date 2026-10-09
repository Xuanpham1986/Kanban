window.PA_DATA = window.PA_DATA || { modules: [], glossary: [] };
window.PA_DATA.modules.push({
  id: 'quyet-dinh', order: 9, icon: '🎯', short: 'Tư duy ra quyết định',
  title: 'Tư duy & kỹ năng ra quyết định',
  desc: 'Phân loại quyết định, phân tích nguyên nhân gốc, ma trận quyết định, phân tích đầu tư, thiên kiến nhận thức, ra quyết định dưới áp lực và dựa trên dữ liệu.',
  lessons: [
    {
      id: 'phan-loai', title: 'Phân loại quyết định: cửa một chiều & cửa hai chiều', minutes: 10,
      body: `
<h2>1. Đừng dùng cùng một quy trình cho mọi quyết định</h2>
<div class="table-wrap"><table>
<tr><th></th><th>Cửa hai chiều (dễ đảo ngược)</th><th>Cửa một chiều (khó/ không thể đảo ngược)</th></tr>
<tr><td>Ví dụ</td><td>Đổi cách xếp một block bãi, thử lịch ca mới 2 tuần, đổi mẫu báo cáo</td><td>Mua cẩu 50 tỷ, ký hợp đồng 5 năm, quyết định nâng một kiện 300 t, sa thải</td></tr>
<tr><td>Cách quyết</td><td><b>Nhanh</b>, ở cấp thấp, thử rồi điều chỉnh</td><td><b>Chậm và kỹ</b>: dữ liệu, phương án, ý kiến chuyên gia, phê duyệt</td></tr>
<tr><td>Rủi ro thường gặp</td><td>Chần chừ quá lâu, họp mãi</td><td>Quyết vội theo cảm tính, áp lực thời gian</td></tr>
</table></div>
<p>Quy tắc thực dụng: với quyết định dễ đảo ngược, hãy quyết khi có khoảng <b>70% thông tin</b> mong muốn — chờ 90% thường là quá muộn. Với quyết định liên quan an toàn tính mạng: <b>nếu nghi ngờ — dừng lại</b>.</p>

<h2>2. Quy trình 6 bước cho quyết định quan trọng</h2>
<ol>
<li><b>Xác định đúng vấn đề</b> — viết thành câu hỏi: “Làm thế nào để giảm thời gian xe chờ ở cổng từ 75 xuống 45 phút trong quý?”.</li>
<li><b>Xác định tiêu chí</b> và trọng số (chi phí, an toàn, thời gian, tác động khách hàng, rủi ro pháp lý).</li>
<li><b>Tạo ít nhất 3 phương án</b> (gồm cả “không làm gì” — để có điểm so sánh).</li>
<li><b>Đánh giá</b> phương án theo tiêu chí, dữ liệu, rủi ro.</li>
<li><b>Quyết định</b> và giao trách nhiệm thực hiện.</li>
<li><b>Xem lại</b> sau một thời gian: kết quả có như dự kiến? Học được gì?</li>
</ol>

<h2>3. Ai quyết định? — làm rõ vai trò bằng RACI</h2>
<div class="table-wrap"><table>
<tr><th>Vai trò</th><th>Ý nghĩa</th></tr>
<tr><td><b>R</b>esponsible</td><td>Người thực hiện</td></tr>
<tr><td><b>A</b>ccountable</td><td>Người chịu trách nhiệm cuối cùng — <b>chỉ một người</b></td></tr>
<tr><td><b>C</b>onsulted</td><td>Người được hỏi ý kiến trước</td></tr>
<tr><td><b>I</b>nformed</td><td>Người được thông báo sau</td></tr>
</table></div>
`,
      keyPoints: [
        'Cửa hai chiều: quyết nhanh, ở cấp thấp, thử – điều chỉnh. Cửa một chiều: chậm, kỹ, phê duyệt.',
        'Quyết khi có ~70% thông tin với quyết định đảo ngược được; an toàn: nghi ngờ thì dừng.',
        '6 bước: vấn đề – tiêu chí – ≥3 phương án – đánh giá – quyết – xem lại.',
        'RACI: chỉ một người Accountable.'
      ],
      apply: [
        'Liệt kê 5 quyết định đang chờ bạn; phân loại cửa một chiều/hai chiều. Quyết ngay các cửa hai chiều.',
        'Lập bảng RACI cho 1 quy trình hay bị đùn đẩy (ví dụ xử lý container hư hỏng).'
      ],
      quiz: [
        { q: 'Quyết định nào là “cửa một chiều”?', options: ['Thử lịch ca mới 2 tuần', 'Đổi mẫu báo cáo ca', 'Ký hợp đồng mua cẩu 50 tỷ', 'Đổi vị trí để vỏ rỗng'], answer: 2 },
        { q: 'Trong RACI, có bao nhiêu người Accountable cho một việc?', options: ['Một', 'Hai', 'Tất cả', 'Không cần'], answer: 0 },
        { q: 'Vì sao nên có phương án “không làm gì”?', options: ['Để lười', 'Làm điểm so sánh chi phí – lợi ích của các phương án', 'Theo quy định', 'Không cần thiết'], answer: 1 }
      ]
    },
    {
      id: 'nguyen-nhan-goc', title: 'Phân tích nguyên nhân gốc: 5 Whys, xương cá, Pareto', minutes: 14,
      body: `
<h2>1. 5 Whys — hỏi “Tại sao?” đến khi chạm hệ thống</h2>
<p><b>Vấn đề:</b> Container bị rơi khỏi xe đầu kéo nội bộ khi rẽ.</p>
<ol>
<li>Tại sao rơi? → Chốt khóa container (twistlock) trên rơ moóc không được khóa.</li>
<li>Tại sao không khóa? → Tài xế không kiểm tra sau khi RTG đặt container.</li>
<li>Tại sao không kiểm tra? → Áp lực chạy nhanh để STS không chờ, và không có bước xác nhận khóa.</li>
<li>Tại sao không có bước xác nhận? → Quy trình được viết cho rơ moóc loại cũ có chốt tự động.</li>
<li>Tại sao chưa cập nhật? → Không có quy trình đánh giá thay đổi (MOC) khi mua rơ moóc mới.</li>
</ol>
<p><b>Nguyên nhân gốc:</b> thiếu quản lý thay đổi thiết bị. → Biện pháp: bổ sung bước xác nhận khóa, cảm biến/ chỉ báo khóa, quy trình MOC. Nếu dừng ở “tài xế bất cẩn” → kỷ luật tài xế → sự cố sẽ lặp lại với người khác.</p>
<div class="callout tip"><strong class="title">💡 Dấu hiệu dừng sai chỗ</strong>Nếu nguyên nhân cuối cùng là “do con người” (bất cẩn, quên, không tuân thủ) — hãy hỏi tiếp “Tại sao hệ thống cho phép điều đó xảy ra?”.</div>

<h2>2. Biểu đồ xương cá (Ishikawa) — 6M</h2>
<div class="table-wrap"><table>
<tr><th>Nhóm</th><th>Câu hỏi gợi ý (ví dụ: năng suất cẩu thấp)</th></tr>
<tr><td><b>Man</b> — Con người</td><td>Kỹ năng lái cẩu? Mệt mỏi? Thiếu người?</td></tr>
<tr><td><b>Machine</b> — Thiết bị</td><td>Cẩu hay hỏng? Spreader lỗi? Xe nội bộ đủ?</td></tr>
<tr><td><b>Method</b> — Phương pháp</td><td>Trình tự xếp dỡ? Điều phối xe? Kế hoạch bãi?</td></tr>
<tr><td><b>Material</b> — Hàng hóa</td><td>Nhiều hatch cover? Hàng OOG? Container hỏng?</td></tr>
<tr><td><b>Measurement</b> — Đo lường</td><td>Dữ liệu năng suất có đúng? Định nghĩa thống nhất?</td></tr>
<tr><td><b>Mother nature</b> — Môi trường</td><td>Mưa, gió, ban đêm, tầm nhìn?</td></tr>
</table></div>

<h2>3. Pareto — tập trung vào số ít quan trọng</h2>
<p>Sắp xếp nguyên nhân theo tần suất/ tác động giảm dần, vẽ đường cộng dồn. Thường ~20% nguyên nhân gây ~80% vấn đề. Giải quyết 2–3 nguyên nhân đầu trước.</p>

<h2>4. Kết hợp</h2>
<p>Xương cá để <b>liệt kê rộng</b> → dữ liệu + Pareto để <b>chọn trọng tâm</b> → 5 Whys để <b>đào sâu</b> từng nguyên nhân chính → biện pháp → PDCA.</p>
`,
      keyPoints: [
        '5 Whys: hỏi đến khi chạm hệ thống/quy trình, không dừng ở “lỗi con người”.',
        'Xương cá 6M: Man, Machine, Method, Material, Measurement, Mother nature.',
        'Pareto: tập trung 20% nguyên nhân gây 80% vấn đề.',
        'Xương cá (rộng) → Pareto (chọn) → 5 Whys (sâu).'
      ],
      apply: [
        'Chọn 1 sự cố/ vấn đề lặp lại trong tháng; làm 5 Whys với 2–3 người hiện trường.',
        'Vẽ xương cá 6M cho 1 KPI đang không đạt.'
      ],
      quiz: [
        { q: 'Khi 5 Whys dừng ở “do công nhân bất cẩn”, nên làm gì?', options: ['Kỷ luật và kết thúc', 'Hỏi tiếp tại sao hệ thống cho phép điều đó xảy ra', 'Bỏ qua', 'Đổi người'], answer: 1 },
        { q: 'Trong 6M, “Measurement” liên quan đến?', options: ['Máy móc', 'Dữ liệu và cách đo lường', 'Thời tiết', 'Vật liệu'], answer: 1 },
        { q: 'Mục đích của biểu đồ Pareto?', options: ['Liệt kê mọi nguyên nhân', 'Xác định số ít nguyên nhân gây phần lớn vấn đề', 'Vẽ quy trình', 'Đánh giá nhân viên'], answer: 1 }
      ]
    },
    {
      id: 'dau-tu', title: 'Phân tích phương án & đầu tư: ma trận trọng số, NPV, hoàn vốn', minutes: 15,
      body: `
<h2>1. Ma trận quyết định có trọng số</h2>
<p>Dùng công cụ <a href="#/tools/dm">Ma trận ra quyết định</a>: liệt kê tiêu chí, gán trọng số (tổng 100%), chấm 1–5 cho từng phương án, nhân và cộng. Giá trị của ma trận không nằm ở con số cuối cùng mà ở việc <b>buộc cả nhóm thống nhất tiêu chí trước khi bàn phương án</b>.</p>

<h2>2. Phân tích đầu tư cơ bản</h2>
<div class="formula">Thời gian hoàn vốn giản đơn = Vốn đầu tư / Dòng tiền ròng tăng thêm mỗi năm
ROI = (Tổng lợi ích − Tổng chi phí) / Tổng chi phí × 100%
NPV = Σ [Dòng tiền năm t / (1 + r)^t] − Vốn đầu tư ban đầu   (r: chi phí vốn)</div>

<h2>3. Ví dụ: Có nên đầu tư thêm 1 RTG?</h2>
<div class="table-wrap"><table>
<tr><th>Hạng mục</th><th>Giá trị (giả định)</th></tr>
<tr><td>Vốn đầu tư</td><td>35 tỷ đồng</td></tr>
<tr><td>Doanh thu tăng thêm (nhận thêm khách, giảm từ chối hàng)</td><td>12 tỷ/năm</td></tr>
<tr><td>Chi phí vận hành, bảo dưỡng, nhân lực tăng thêm</td><td>5 tỷ/năm</td></tr>
<tr><td>Dòng tiền ròng tăng thêm</td><td><b>7 tỷ/năm</b></td></tr>
<tr><td>Thời gian hoàn vốn giản đơn</td><td>35 / 7 = <b>5 năm</b></td></tr>
<tr><td>Tuổi thọ kinh tế</td><td>15 năm</td></tr>
</table></div>
<p>Với chi phí vốn 10%/năm, NPV ≈ 7 × 7,606 (hệ số chiết khấu niên kim 15 năm, 10%) − 35 ≈ <b>+18,2 tỷ</b> → đáng đầu tư <i>nếu</i> giả định doanh thu đúng.</p>
<div class="callout warn"><strong class="title">⚠️ Câu hỏi phản biện trước khi trình ký</strong>
<ul>
<li>Giả định doanh thu dựa trên gì? Khách hàng nào đã cam kết?</li>
<li>Có phương án rẻ hơn đạt cùng mục tiêu? (giảm dwell time, cải tiến điều phối, thuê thiết bị mùa cao điểm)</li>
<li>Nếu doanh thu chỉ đạt 60% dự kiến thì sao? (phân tích độ nhạy: 7,2 − 5 = 2,2 tỷ/năm → hoàn vốn ~16 năm → <b>không hiệu quả</b>)</li>
<li>Rủi ro: nền bãi có chịu được? Có người lái? Thời gian giao hàng?</li>
</ul></div>

<h2>4. Giá trị kỳ vọng (Expected value) cho quyết định có rủi ro</h2>
<div class="formula">EV = Σ (Xác suất kết quả × Giá trị kết quả)</div>
<p><b>Ví dụ:</b> Có bão dự báo, xác suất ảnh hưởng 30%. Chằng buộc gia cố toàn bộ cẩu/ container rỗng tốn 200 triệu. Nếu không gia cố mà bão tới, thiệt hại ước 3 tỷ. EV(không gia cố) = 0,3 × 3 tỷ = 900 triệu > 200 triệu → <b>gia cố</b>. Với rủi ro thảm họa/ tính mạng, đừng chỉ dùng EV — hãy loại trừ rủi ro.</p>
`,
      keyPoints: [
        'Ma trận trọng số: thống nhất tiêu chí trước khi bàn phương án.',
        'Hoàn vốn = Vốn / Dòng tiền ròng tăng thêm/năm; NPV > 0 là đáng đầu tư (nếu giả định đúng).',
        'Luôn phân tích độ nhạy và tìm phương án rẻ hơn (vận hành) trước khi đầu tư (thiết bị).',
        'EV = Σ xác suất × giá trị; rủi ro tính mạng/thảm họa: loại trừ, không chỉ tính EV.'
      ],
      apply: [
        'Dùng công cụ ma trận quyết định cho 1 lựa chọn đang cân nhắc (nhà cung cấp, phương án bố trí bãi…).',
        'Với đề xuất đầu tư tiếp theo, bổ sung phân tích “nếu doanh thu chỉ đạt 60%”.'
      ],
      quiz: [
        { q: 'Đầu tư 20 tỷ, dòng tiền ròng tăng thêm 4 tỷ/năm. Hoàn vốn giản đơn?', options: ['4 năm', '5 năm', '8 năm', '20 năm'], answer: 1 },
        { q: 'Xác suất sự cố 10%, thiệt hại 5 tỷ; chi phí phòng ngừa 300 triệu. EV thiệt hại nếu không phòng ngừa?', options: ['50 triệu', '300 triệu', '500 triệu', '5 tỷ'], answer: 2, explain: '0,1 × 5 tỷ = 500 triệu > 300 triệu → nên phòng ngừa.' },
        { q: 'Giá trị lớn nhất của ma trận quyết định có trọng số là?', options: ['Ra con số chính xác tuyệt đối', 'Buộc nhóm thống nhất tiêu chí và trọng số trước khi chọn', 'Thay thế lãnh đạo ra quyết định', 'Làm báo cáo đẹp'], answer: 1 }
      ]
    },
    {
      id: 'thien-kien', title: 'Thiên kiến nhận thức, pre-mortem & tư duy bậc hai', minutes: 12,
      body: `
<h2>1. Các thiên kiến hay gặp ở nhà quản lý vận hành</h2>
<div class="table-wrap"><table>
<tr><th>Thiên kiến</th><th>Biểu hiện</th><th>Cách chống</th></tr>
<tr><td><b>Xác nhận</b> (confirmation)</td><td>Chỉ tìm dữ liệu ủng hộ ý mình</td><td>Chủ động hỏi: “Bằng chứng nào cho thấy tôi sai?”</td></tr>
<tr><td><b>Chi phí chìm</b> (sunk cost)</td><td>Tiếp tục dự án tồi vì “đã đầu tư nhiều rồi”</td><td>Chỉ xét chi phí – lợi ích <b>từ hôm nay trở đi</b></td></tr>
<tr><td><b>Neo</b> (anchoring)</td><td>Bị con số đầu tiên chi phối (giá chào đầu, ước tính cũ)</td><td>Tự ước tính độc lập trước khi xem số của người khác</td></tr>
<tr><td><b>Tự tin thái quá</b></td><td>“Lần trước nâng được, lần này chắc chắn được”</td><td>Dùng checklist, phương án nâng, ý kiến thứ hai</td></tr>
<tr><td><b>Bình thường hóa sai lệch</b> (normalization of deviance)</td><td>Vi phạm nhỏ lặp lại không sao → thành chuẩn mới</td><td>Đối chiếu định kỳ thực tế với quy trình chuẩn</td></tr>
<tr><td><b>Tư duy nhóm</b> (groupthink)</td><td>Cả nhóm đồng ý vì ngại phản biện sếp</td><td>Sếp nói sau cùng; chỉ định người “phản biện”</td></tr>
<tr><td><b>Sẵn có</b> (availability)</td><td>Đánh giá rủi ro theo sự cố gần nhất, ấn tượng nhất</td><td>Dùng dữ liệu thống kê nhiều năm</td></tr>
</table></div>

<h2>2. Pre-mortem — “khám nghiệm trước khi chết”</h2>
<p>Trước khi triển khai kế hoạch lớn, nói với nhóm: <i>“Hãy tưởng tượng 6 tháng nữa dự án này đã thất bại thảm hại. Mỗi người viết ra 3 lý do khiến nó thất bại.”</i> Kỹ thuật này giúp mọi người dám nói ra rủi ro mà bình thường ngại nêu. Sau đó bổ sung biện pháp phòng ngừa cho các rủi ro hàng đầu.</p>

<h2>3. Tư duy bậc hai</h2>
<p>Hỏi “<b>Và sau đó thì sao?</b>”.</p>
<ul>
<li>Bậc 1: Tăng phí lưu bãi → container ra nhanh hơn.</li>
<li>Bậc 2: Khách hàng chuyển sang cảng đối thủ hoặc kéo container về depot ngoài → doanh thu dịch vụ khác giảm? Ùn xe cổng tăng ngày cuối miễn phí?</li>
<li>Bậc 3: Hãng tàu đánh giá lại cảng ghé…</li>
</ul>
<div class="callout tip"><strong class="title">💡 Câu hỏi hữu ích</strong>“Ai sẽ phản ứng với quyết định này và họ sẽ làm gì?” — khách hàng, hãng tàu, nhân viên, đối thủ, cơ quan quản lý.</div>
`,
      keyPoints: [
        'Thiên kiến: xác nhận, chi phí chìm, neo, tự tin thái quá, bình thường hóa sai lệch, tư duy nhóm, sẵn có.',
        'Sếp nói sau cùng để tránh tư duy nhóm.',
        'Pre-mortem: giả định đã thất bại, tìm lý do — rồi phòng ngừa.',
        'Tư duy bậc hai: “Và sau đó thì sao?” – ai sẽ phản ứng thế nào?'
      ],
      apply: [
        'Tổ chức 1 buổi pre-mortem 20 phút cho kế hoạch/ dự án sắp triển khai.',
        'Trong cuộc họp tới, thử để cấp dưới phát biểu trước, bạn nói sau cùng.',
        'Tìm 1 “sai lệch đã bị bình thường hóa” ở hiện trường và đưa về chuẩn.'
      ],
      quiz: [
        { q: 'Tiếp tục dự án kém hiệu quả vì “đã đầu tư quá nhiều” là thiên kiến gì?', options: ['Neo', 'Chi phí chìm', 'Sẵn có', 'Xác nhận'], answer: 1 },
        { q: 'Pre-mortem yêu cầu nhóm làm gì?', options: ['Ăn mừng trước', 'Tưởng tượng dự án đã thất bại và tìm lý do', 'Viết báo cáo sau dự án', 'Tính NPV'], answer: 1 },
        { q: 'Vi phạm nhỏ lặp lại mãi rồi trở thành “chuyện bình thường” gọi là?', options: ['Tư duy nhóm', 'Bình thường hóa sai lệch', 'Hiệu ứng neo', 'Tối ưu hóa'], answer: 1 }
      ]
    },
    {
      id: 'ap-luc-hien-truong', title: 'Ra quyết định dưới áp lực ở hiện trường: OODA & tiêu chí Dừng/Tiếp tục', minutes: 12,
      body: `
<h2>1. Vòng OODA</h2>
<p><b>Observe</b> (Quan sát) → <b>Orient</b> (Định hướng: hiểu tình hình dựa trên kinh nghiệm, quy trình) → <b>Decide</b> (Quyết định) → <b>Act</b> (Hành động) → quan sát lại kết quả. Ở hiện trường, chất lượng quyết định phụ thuộc chủ yếu vào bước <b>Orient</b> — được rèn luyện bằng đào tạo, diễn tập và bài học từ sự cố.</p>

<h2>2. Tiêu chí Dừng/Tiếp tục định sẵn (Stop/Go criteria)</h2>
<p>Đừng để quyết định quan trọng phụ thuộc vào cảm xúc lúc áp lực. Hãy định sẵn ngưỡng <b>trước khi</b> bắt đầu:</p>
<div class="table-wrap"><table>
<tr><th>Tình huống</th><th>Tiêu chí dừng ví dụ</th></tr>
<tr><td>Nâng hàng siêu trọng</td><td>Gió đỉnh cần &gt; giới hạn trong phương án; LMI cảnh báo; nền lún; mất liên lạc với người xi nhan</td></tr>
<tr><td>Làm hàng sà lan</td><td>Mớn nước chạm vạch; sà lan nghiêng &gt; X°; dòng chảy/ sóng vượt ngưỡng</td></tr>
<tr><td>Bão</td><td>Cấp gió dự báo → các mốc chằng buộc cẩu, hạ container rỗng tầng cao, dừng khai thác</td></tr>
<tr><td>Hàng nguy hiểm rò rỉ</td><td>Phát hiện mùi/ rò rỉ → dừng, cách ly, gọi đội ứng cứu, tra SDS</td></tr>
</table></div>

<h2>3. Quy tắc “Nghi ngờ thì dừng” và chi phí của việc dừng</h2>
<p>Dừng 30 phút để kiểm tra có thể tốn tiền demurrage; một tai nạn có thể tốn mạng người, hàng chục tỷ đồng, giấy phép hoạt động và uy tín. Nhà quản lý cần <b>công khai ủng hộ</b> người đã dừng đúng lúc — dù sau đó kiểm tra thấy an toàn.</p>

<h2>4. Ra quyết định khi thiếu thông tin</h2>
<ul>
<li>Tách điều <b>biết chắc</b> – điều <b>giả định</b> – điều <b>chưa biết</b>.</li>
<li>Chọn phương án <b>giữ được nhiều lựa chọn</b> nhất cho bước sau (ví dụ tạm dừng nâng nhưng giữ cẩu ở trạng thái an toàn, thay vì tháo dỡ cấu hình).</li>
<li>Đặt thời điểm xem xét lại (“30 phút nữa đánh giá lại gió”).</li>
</ul>
`,
      keyPoints: [
        'OODA: Quan sát – Định hướng – Quyết định – Hành động; bước Định hướng được rèn bằng đào tạo, diễn tập.',
        'Định sẵn tiêu chí Dừng/Tiếp tục trước khi bắt đầu công việc rủi ro cao.',
        'Nghi ngờ thì dừng; công khai ủng hộ người dừng đúng lúc.',
        'Thiếu thông tin: tách biết/giả định/chưa biết; giữ lựa chọn; đặt mốc xem lại.'
      ],
      apply: [
        'Viết bảng tiêu chí Dừng/Tiếp tục cho 3 công việc rủi ro cao nhất ở bộ phận bạn.',
        'Kiểm tra phương án phòng chống bão: có các mốc hành động theo cấp gió dự báo chưa?'
      ],
      quiz: [
        { q: 'Trong OODA, bước nào quyết định chất lượng phán đoán và được rèn bằng đào tạo, diễn tập?', options: ['Observe', 'Orient', 'Decide', 'Act'], answer: 1 },
        { q: 'Vì sao nên định sẵn tiêu chí Dừng/Tiếp tục?', options: ['Để có giấy tờ', 'Tránh quyết định cảm tính khi đang chịu áp lực', 'Theo yêu cầu khách hàng', 'Tăng năng suất'], answer: 1 }
      ]
    },
    {
      id: 'du-lieu', title: 'Quyết định dựa trên dữ liệu: đọc số liệu cho đúng', minutes: 12,
      body: `
<h2>1. Trung bình có thể đánh lừa</h2>
<p>Thời gian xe quay vòng (TTT) trung bình 40 phút nghe có vẻ tốt, nhưng nếu <b>10% xe phải chờ hơn 2 giờ</b> thì đó là 10% khách hàng rất không hài lòng. Hãy xem <b>phân phối</b>: trung vị (P50), P90, P95, giá trị lớn nhất.</p>
<div class="formula">Ví dụ báo cáo tốt: TTT trung vị 32 phút | P90 = 75 phút | P95 = 118 phút | 3% xe &gt; 2 giờ</div>

<h2>2. Tương quan ≠ nhân quả</h2>
<p>“Ca có nhiều nhân viên mới thì năng suất thấp” — có thể do ca đó trùng thời điểm có nhiều tàu khó, ca đêm, hay thời tiết. Trước khi kết luận, hãy hỏi: có yếu tố thứ ba nào giải thích cả hai không? Cách tốt nhất để chứng minh nhân quả: <b>thử nghiệm có kiểm soát</b> (áp dụng thay đổi ở 1 block, so với block tương tự không đổi).</p>

<h2>3. So sánh công bằng</h2>
<ul>
<li>So sánh cùng kỳ (tháng này vs cùng tháng năm trước) khi có tính mùa vụ.</li>
<li>Chuẩn hóa theo quy mô (sự cố/ 1.000 move, LTIFR theo giờ công) thay vì số tuyệt đối.</li>
<li>Cẩn thận với mẫu nhỏ: 1 tàu năng suất cao chưa nói lên điều gì.</li>
</ul>

<h2>4. Biểu đồ kiểm soát (control chart) — đừng phản ứng thái quá với dao động</h2>
<p>Mọi quá trình đều dao động. Vẽ trung bình và giới hạn ±3 độ lệch chuẩn; chỉ điều tra khi điểm vượt giới hạn hoặc có xu hướng (7 điểm liên tiếp một phía). Phản ứng với dao động ngẫu nhiên (“năng suất hôm qua giảm 5%, họp kiểm điểm!”) chỉ làm hệ thống tệ hơn.</p>

<h2>5. Dashboard tốt cho nhà quản lý</h2>
<ul>
<li>Trả lời được 3 câu: <b>Đang tốt hay xấu? So với mục tiêu? Tôi cần làm gì?</b></li>
<li>Ít chỉ số, có ngưỡng màu, có xu hướng thời gian, có thể đi sâu (drill-down) đến tàu/ ca/ thiết bị.</li>
<li>Một nguồn số liệu duy nhất (single source of truth), định nghĩa KPI thống nhất.</li>
</ul>
`,
      keyPoints: [
        'Xem phân phối (P50, P90, P95), không chỉ trung bình.',
        'Tương quan ≠ nhân quả — tìm yếu tố thứ ba, thử nghiệm có kiểm soát.',
        'So sánh cùng kỳ, chuẩn hóa theo quy mô, cẩn thận mẫu nhỏ.',
        'Control chart: chỉ phản ứng khi vượt giới hạn hoặc có xu hướng.'
      ],
      apply: [
        'Tính P90 của truck turnaround time tháng trước bên cạnh giá trị trung bình.',
        'Vẽ control chart năng suất cầu bến theo ngày trong 2 tháng.',
        'Rà soát dashboard hiện tại: trả lời được 3 câu hỏi của nhà quản lý chưa?'
      ],
      quiz: [
        { q: 'Vì sao nên báo cáo P90 bên cạnh trung bình?', options: ['Cho dài báo cáo', 'Thấy được trải nghiệm của nhóm chịu ảnh hưởng xấu nhất', 'Vì trung bình luôn sai', 'Theo luật'], answer: 1 },
        { q: 'Khi nào nên điều tra một biến động trên control chart?', options: ['Mỗi khi số liệu giảm', 'Khi điểm vượt giới hạn kiểm soát hoặc có xu hướng bất thường', 'Mỗi ngày', 'Không bao giờ'], answer: 1 },
        { q: 'Cách tốt nhất để chứng minh một thay đổi gây ra cải thiện?', options: ['Hỏi ý kiến', 'Thử nghiệm có kiểm soát so với nhóm đối chứng', 'Xem một ngày', 'So với kế hoạch'], answer: 1 }
      ]
    }
  ]
});
