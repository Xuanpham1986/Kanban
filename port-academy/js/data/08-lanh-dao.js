window.PA_DATA = window.PA_DATA || { modules: [], glossary: [] };
window.PA_DATA.modules.push({
  id: 'lanh-dao', order: 8, icon: '🧭', short: 'Lãnh đạo & quản lý',
  title: 'Lãnh đạo & quản lý đội ngũ',
  desc: 'Chuyển từ chuyên gia sang quản lý, lãnh đạo tình huống, ủy quyền, an toàn tâm lý & văn hóa an toàn, xử lý xung đột, quản lý thay đổi và chỉ huy sự cố.',
  lessons: [
    {
      id: 'tu-chuyen-gia', title: 'Từ người giỏi chuyên môn thành nhà quản lý', minutes: 12,
      body: `
<h2>1. Thay đổi lớn nhất: kết quả qua người khác</h2>
<p>Khi là chuyên viên, bạn được đánh giá bằng <b>việc mình làm</b>. Khi là quản lý, bạn được đánh giá bằng <b>kết quả của cả đội</b>. Sai lầm phổ biến nhất: tiếp tục “làm thay” vì mình làm nhanh hơn — kết quả là đội không lớn lên và bạn kiệt sức.</p>
<div class="table-wrap"><table>
<tr><th>Tư duy chuyên viên</th><th>Tư duy quản lý</th></tr>
<tr><td>Tôi giải quyết vấn đề</td><td>Tôi xây hệ thống để đội tự giải quyết vấn đề</td></tr>
<tr><td>Tôi phải biết mọi câu trả lời</td><td>Tôi đặt đúng câu hỏi</td></tr>
<tr><td>Bận rộn = hiệu quả</td><td>Đội đạt mục tiêu = hiệu quả</td></tr>
<tr><td>Tránh xung đột</td><td>Giải quyết xung đột sớm, thẳng thắn</td></tr>
</table></div>

<h2>2. Ma trận Eisenhower — quản lý thời gian</h2>
<div class="table-wrap"><table>
<tr><th></th><th>Khẩn cấp</th><th>Không khẩn cấp</th></tr>
<tr><th>Quan trọng</th><td><b>LÀM NGAY</b>: sự cố an toàn, tàu chậm nghiêm trọng</td><td><b>LÊN LỊCH</b>: đào tạo, cải tiến quy trình, 1-1, phòng ngừa — <i>vùng tạo giá trị lớn nhất</i></td></tr>
<tr><th>Không quan trọng</th><td><b>ỦY QUYỀN</b>: nhiều cuộc gọi, báo cáo thường lệ</td><td><b>LOẠI BỎ</b>: họp không cần thiết, email cc</td></tr>
</table></div>
<p>Nhà quản lý ở cảng thường bị cuốn vào ô “khẩn cấp”. Hãy <b>khóa lịch</b> 2–3 khung giờ mỗi tuần cho ô “Quan trọng – Không khẩn cấp”.</p>

<h2>3. Ủy quyền hiệu quả</h2>
<ol>
<li>Chọn đúng người (theo năng lực + mong muốn phát triển).</li>
<li>Giải thích <b>kết quả mong đợi</b> và <b>lý do</b>, không chỉ cách làm.</li>
<li>Xác định <b>mức quyền hạn</b>: (1) Tìm hiểu và báo lại; (2) Đề xuất phương án; (3) Quyết định nhưng báo trước khi làm; (4) Làm rồi báo cáo; (5) Toàn quyền.</li>
<li>Cung cấp nguồn lực, thời hạn, điểm kiểm tra.</li>
<li>Theo dõi, hỗ trợ — <b>không lấy lại việc</b> khi gặp khó; ghi nhận khi hoàn thành.</li>
</ol>
<div class="callout warn"><strong class="title">⚠️ Ủy quyền không phải là thoái thác</strong>Bạn ủy quyền <b>công việc và quyền hạn</b>, nhưng <b>trách nhiệm cuối cùng</b> vẫn thuộc về bạn — đặc biệt với các quyết định an toàn.</div>
`,
      keyPoints: [
        'Quản lý = tạo kết quả qua người khác; ngừng “làm thay”.',
        'Eisenhower: khóa lịch cho việc Quan trọng – Không khẩn cấp.',
        'Ủy quyền 5 mức quyền hạn; giải thích kết quả + lý do; không lấy lại việc.',
        'Ủy quyền công việc, không ủy quyền trách nhiệm cuối cùng.'
      ],
      apply: [
        'Ghi lại mọi việc bạn làm trong 2 ngày, phân vào 4 ô Eisenhower. Bao nhiêu % ở ô “Lên lịch”?',
        'Chọn 1 việc bạn đang tự làm và ủy quyền cho cấp dưới ở mức quyền hạn 3 hoặc 4.'
      ],
      quiz: [
        { q: 'Theo ma trận Eisenhower, đào tạo nhân viên thường thuộc ô nào?', options: ['Làm ngay', 'Lên lịch', 'Ủy quyền', 'Loại bỏ'], answer: 1 },
        { q: 'Khi ủy quyền, điều gì KHÔNG được chuyển giao hoàn toàn?', options: ['Công việc', 'Quyền hạn', 'Trách nhiệm cuối cùng', 'Thời hạn'], answer: 2 }
      ]
    },
    {
      id: 'lanh-dao-tinh-huong', title: 'Lãnh đạo tình huống: chỉ đạo, kèm cặp, hỗ trợ, ủy thác', minutes: 12,
      source: 'Mô hình Situational Leadership (Hersey & Blanchard)',
      body: `
<h2>1. Không có phong cách lãnh đạo tốt nhất — chỉ có phong cách phù hợp</h2>
<p>Phong cách phụ thuộc vào <b>mức độ sẵn sàng</b> của người thực hiện với <b>từng nhiệm vụ cụ thể</b> = năng lực + cam kết.</p>
<div class="table-wrap"><table>
<tr><th>Mức sẵn sàng của nhân viên</th><th>Phong cách</th><th>Hành vi của lãnh đạo</th><th>Ví dụ ở cảng</th></tr>
<tr><td>D1: Năng lực thấp, nhiệt tình cao (người mới)</td><td><b>S1 – Chỉ đạo</b></td><td>Hướng dẫn cụ thể, giám sát chặt</td><td>Lái RTG mới: chỉ rõ từng bước, kèm cạnh</td></tr>
<tr><td>D2: Có chút năng lực, cam kết giảm (vỡ mộng)</td><td><b>S2 – Kèm cặp</b></td><td>Vẫn chỉ đạo + giải thích, động viên, lắng nghe</td><td>Nhân viên điều độ 3 tháng, bắt đầu nản vì áp lực</td></tr>
<tr><td>D3: Năng lực khá, cam kết dao động</td><td><b>S3 – Hỗ trợ</b></td><td>Ít chỉ đạo, nhiều lắng nghe, cùng ra quyết định</td><td>Kiểm đếm lâu năm nhưng thiếu tự tin khi gặp hàng lạ</td></tr>
<tr><td>D4: Năng lực cao, cam kết cao</td><td><b>S4 – Ủy thác</b></td><td>Giao việc, giao quyền, theo dõi kết quả</td><td>Trưởng ca giàu kinh nghiệm</td></tr>
</table></div>
<div class="callout tip"><strong class="title">💡 Cùng một người, khác nhiệm vụ</strong>Một trưởng ca có thể ở D4 với làm tàu container nhưng ở D1 với hàng siêu trọng lần đầu. Hãy chẩn đoán theo <b>nhiệm vụ</b>, không theo người.</div>

<h2>2. Hai lỗi thường gặp</h2>
<ul>
<li><b>Quản lý vi mô người giỏi</b> (dùng S1 với D4) → họ chán và bỏ đi.</li>
<li><b>Bỏ mặc người mới</b> (dùng S4 với D1) → sai sót, tai nạn, họ mất tự tin.</li>
</ul>

<h2>3. Lãnh đạo bằng làm gương</h2>
<p>Ở hiện trường cảng, nhân viên nhìn hành vi của bạn chứ không nghe lời bạn nói: bạn có đội mũ, mặc áo phản quang khi xuống bãi? Bạn có dừng việc khi thấy nguy hiểm dù tàu đang gấp? Đó chính là “chính sách an toàn” thật sự.</p>
`,
      keyPoints: [
        'Phong cách theo mức sẵn sàng của người với từng nhiệm vụ: S1 Chỉ đạo – S2 Kèm cặp – S3 Hỗ trợ – S4 Ủy thác.',
        'Đừng quản lý vi mô người giỏi; đừng bỏ mặc người mới.',
        'Hành vi của lãnh đạo ở hiện trường là chính sách thật sự.'
      ],
      apply: [
        'Liệt kê 5 nhân viên trực tiếp và nhiệm vụ chính của mỗi người; xác định D1–D4 và phong cách bạn đang dùng — có khớp không?'
      ],
      quiz: [
        { q: 'Với nhân viên mới nhiệt tình nhưng chưa có kỹ năng, phong cách phù hợp?', options: ['Ủy thác', 'Hỗ trợ', 'Chỉ đạo', 'Bỏ mặc'], answer: 2 },
        { q: 'Với trưởng ca giỏi và cam kết cao trong nhiệm vụ quen thuộc?', options: ['Chỉ đạo', 'Kèm cặp', 'Hỗ trợ', 'Ủy thác'], answer: 3 },
        { q: 'Mức sẵn sàng nên được đánh giá theo?', options: ['Tuổi tác', 'Thâm niên', 'Từng nhiệm vụ cụ thể', 'Chức danh'], answer: 2 }
      ]
    },
    {
      id: 'van-hoa-an-toan', title: 'Xây dựng đội ngũ, an toàn tâm lý & văn hóa an toàn', minutes: 14,
      body: `
<h2>1. Các giai đoạn phát triển nhóm (Tuckman)</h2>
<p><b>Hình thành</b> (lịch sự, dè dặt) → <b>Xung đột</b> (tranh cãi vai trò) → <b>Ổn định</b> (thống nhất chuẩn mực) → <b>Hiệu suất cao</b>. Giai đoạn xung đột là bình thường — nhà quản lý cần làm rõ vai trò, mục tiêu, nguyên tắc làm việc thay vì né tránh.</p>

<h2>2. An toàn tâm lý</h2>
<p>Là niềm tin rằng trong nhóm, <b>có thể lên tiếng, hỏi, báo lỗi, đưa ý kiến trái chiều mà không bị trừng phạt hay bẽ mặt</b>. Nghiên cứu nổi tiếng của Google (Project Aristotle) cho thấy đây là yếu tố quan trọng nhất của nhóm hiệu quả. Ở cảng, thiếu an toàn tâm lý = <b>cận nguy không được báo cáo</b> = tai nạn lớn chờ xảy ra.</p>
<p>Hành vi tạo an toàn tâm lý:</p>
<ul>
<li>Cảm ơn người báo lỗi/ cận nguy — <b>trước</b> khi phân tích.</li>
<li>Thừa nhận lỗi của chính mình.</li>
<li>Hỏi “Chúng ta học được gì?” thay vì “Ai làm?”.</li>
<li>Chủ động mời người ít nói phát biểu.</li>
</ul>

<h2>3. Văn hóa công bằng (Just Culture)</h2>
<div class="table-wrap"><table>
<tr><th>Hành vi</th><th>Ý nghĩa</th><th>Cách xử lý</th></tr>
<tr><td>Sai sót của con người (human error)</td><td>Vô ý, lỡ tay, quên</td><td><b>An ủi</b>, cải tiến hệ thống để khó sai</td></tr>
<tr><td>Hành vi rủi ro (at-risk behavior)</td><td>Đi tắt vì nghĩ không sao, thành thói quen</td><td><b>Kèm cặp</b>, loại bỏ động cơ đi tắt, nhận diện rủi ro</td></tr>
<tr><td>Hành vi liều lĩnh (reckless)</td><td>Cố ý bất chấp rủi ro đã biết rõ</td><td><b>Kỷ luật</b> theo nội quy</td></tr>
</table></div>

<h2>4. Tháp an toàn & chỉ số dẫn dắt</h2>
<p>Theo nghiên cứu kinh điển (Heinrich, Bird), phía dưới mỗi tai nạn nghiêm trọng là hàng chục tai nạn nhẹ và hàng trăm <b>cận nguy</b>, hàng nghìn <b>hành vi/ điều kiện không an toàn</b>. Tỷ lệ chính xác còn tranh luận, nhưng thông điệp đúng: <b>quản lý phần đáy tháp</b> (cận nguy, hành vi) để ngăn đỉnh tháp. Một tổ báo cáo nhiều cận nguy thường là tổ <b>an toàn hơn</b>, không phải nguy hiểm hơn.</p>
<div class="callout info"><strong class="title">Lưu ý</strong>Các sự cố nghiêm trọng (tử vong, sập cẩu) thường có nguyên nhân khác với tai nạn nhẹ. Cần nhận diện riêng các <b>rủi ro có khả năng gây tử vong</b> (nâng hạ, làm việc trên cao, va chạm xe – người, không gian kín, điện) và có biện pháp kiểm soát chuyên biệt (critical controls).</div>
`,
      keyPoints: [
        'Tuckman: Hình thành – Xung đột – Ổn định – Hiệu suất cao.',
        'An toàn tâm lý: cảm ơn người báo lỗi, hỏi “học được gì” thay vì “ai làm”.',
        'Just Culture: sai sót → an ủi & sửa hệ thống; hành vi rủi ro → kèm cặp; liều lĩnh → kỷ luật.',
        'Quản lý đáy tháp an toàn (cận nguy) + kiểm soát riêng rủi ro gây tử vong.'
      ],
      apply: [
        'Ở buổi họp tới, công khai cảm ơn một người đã báo cáo cận nguy/ lỗi.',
        'Xem lại 3 vụ việc gần nhất: đã xử lý theo đúng phân loại Just Culture chưa?',
        'Liệt kê 5 rủi ro có thể gây tử vong ở khu vực bạn quản lý và biện pháp kiểm soát then chốt cho từng rủi ro.'
      ],
      quiz: [
        { q: 'Theo Just Culture, một nhân viên lỡ tay bấm nhầm nút do thiết kế bảng điều khiển khó nhìn nên được xử lý thế nào?', options: ['Kỷ luật', 'An ủi và cải tiến thiết kế hệ thống', 'Sa thải', 'Bỏ qua'], answer: 1 },
        { q: 'Một tổ báo cáo nhiều cận nguy thường cho thấy?', options: ['Tổ đó nguy hiểm nhất', 'Văn hóa báo cáo tốt, nhiều cơ hội phòng ngừa', 'Tổ đó lười', 'Cần kỷ luật tổ trưởng'], answer: 1 },
        { q: 'An toàn tâm lý là?', options: ['Không bao giờ có tai nạn', 'Niềm tin có thể lên tiếng, báo lỗi mà không bị trừng phạt hay bẽ mặt', 'Có bảo hiểm', 'Không có xung đột'], answer: 1 }
      ]
    },
    {
      id: 'xung-dot-giao-tiep', title: 'Giao tiếp, xử lý xung đột & quản lý cấp trên', minutes: 12,
      source: 'Mô hình Thomas–Kilmann',
      body: `
<h2>1. Năm phong cách xử lý xung đột (Thomas–Kilmann)</h2>
<div class="table-wrap"><table>
<tr><th>Phong cách</th><th>Khi nào phù hợp</th><th>Ví dụ</th></tr>
<tr><td><b>Cạnh tranh</b> (quyết đoán, ít hợp tác)</td><td>Khẩn cấp, vấn đề an toàn, nguyên tắc không thể nhân nhượng</td><td>Dừng nâng vì gió vượt giới hạn dù khách hàng phản đối</td></tr>
<tr><td><b>Hợp tác</b> (quyết đoán + hợp tác)</td><td>Vấn đề quan trọng với cả hai, có thời gian, cần giải pháp lâu dài</td><td>Cùng hãng tàu thiết kế berth window cố định</td></tr>
<tr><td><b>Thỏa hiệp</b></td><td>Hai bên ngang quyền, cần giải pháp tạm thời nhanh</td><td>Chia cẩu giữa hai tàu đến cùng lúc</td></tr>
<tr><td><b>Né tránh</b></td><td>Vấn đề nhỏ, cảm xúc đang cao, cần thời gian bình tĩnh</td><td>Hoãn cuộc nói chuyện căng thẳng sang hôm sau</td></tr>
<tr><td><b>Nhượng bộ</b></td><td>Vấn đề quan trọng với bên kia hơn mình, giữ quan hệ</td><td>Đồng ý đổi giờ họp theo khách hàng</td></tr>
</table></div>

<h2>2. Xử lý mâu thuẫn giữa hai nhân viên/ hai ca</h2>
<ol>
<li>Gặp riêng từng người, <b>lắng nghe</b> để hiểu lợi ích thật (không chỉ quan điểm).</li>
<li>Gặp chung, đặt nguyên tắc: tôn trọng, nói về sự việc, không công kích cá nhân.</li>
<li>Xác định <b>mục tiêu chung</b> (tàu đi đúng giờ, không tai nạn).</li>
<li>Cùng đưa ra phương án, thống nhất hành động cụ thể, theo dõi.</li>
</ol>

<h2>3. Giao tiếp một chiều sang hai chiều</h2>
<ul>
<li><b>Lắng nghe chủ động</b>: nhắc lại ý người nói (“Ý anh là…?”), hỏi mở, không ngắt lời.</li>
<li>Truyền đạt chỉ thị quan trọng: yêu cầu người nhận <b>nhắc lại</b> (read-back) — như trong hàng hải, hàng không.</li>
</ul>

<h2>4. Quản lý cấp trên (Managing up)</h2>
<ul>
<li>Hiểu ưu tiên và phong cách của sếp (thích số liệu hay câu chuyện, chi tiết hay tóm tắt).</li>
<li><b>Không mang vấn đề trống</b> — mang vấn đề + 2–3 phương án + khuyến nghị của bạn.</li>
<li>Báo tin xấu sớm, kèm kế hoạch xử lý. Không để sếp bị bất ngờ trước cấp trên của họ.</li>
<li>Viết tóm tắt theo nguyên tắc <b>BLUF</b> (Bottom Line Up Front): kết luận/ đề nghị ở câu đầu tiên.</li>
</ul>
`,
      keyPoints: [
        'Thomas–Kilmann: Cạnh tranh, Hợp tác, Thỏa hiệp, Né tránh, Nhượng bộ — chọn theo tình huống.',
        'An toàn là nguyên tắc: dùng phong cách cạnh tranh khi cần.',
        'Xử lý mâu thuẫn: gặp riêng → gặp chung → mục tiêu chung → hành động.',
        'Managing up: vấn đề + phương án + khuyến nghị; BLUF; báo tin xấu sớm.'
      ],
      apply: [
        'Viết lại email báo cáo gần nhất gửi cấp trên theo BLUF.',
        'Lần tới gặp vấn đề, mang theo 2 phương án và khuyến nghị khi báo cáo sếp.'
      ],
      quiz: [
        { q: 'Phong cách xử lý xung đột phù hợp khi phải dừng công việc vì lý do an toàn?', options: ['Né tránh', 'Nhượng bộ', 'Cạnh tranh (quyết đoán)', 'Thỏa hiệp'], answer: 2 },
        { q: 'BLUF nghĩa là?', options: ['Viết dài và chi tiết', 'Đưa kết luận/đề nghị lên đầu', 'Viết bằng tiếng Anh', 'Kết thúc bằng câu hỏi'], answer: 1 }
      ]
    },
    {
      id: 'quan-ly-thay-doi', title: 'Quản lý thay đổi: Kotter & ADKAR', minutes: 12,
      body: `
<h2>1. Vì sao thay đổi thất bại?</h2>
<p>Triển khai TOS mới, thay đổi quy trình cổng, áp dụng ca 12 giờ… thường gặp phản ứng không phải vì nhân viên “bảo thủ” mà vì họ <b>không hiểu lý do</b>, <b>lo mất lợi ích</b>, hoặc <b>không được trang bị kỹ năng mới</b>.</p>

<h2>2. Mô hình ADKAR (theo từng cá nhân)</h2>
<div class="table-wrap"><table>
<tr><th>Bước</th><th>Câu hỏi của nhân viên</th><th>Việc của quản lý</th></tr>
<tr><td><b>A</b>wareness — Nhận thức</td><td>Tại sao phải thay đổi?</td><td>Giải thích lý do, rủi ro nếu không đổi</td></tr>
<tr><td><b>D</b>esire — Mong muốn</td><td>Tôi được gì?</td><td>Kết nối lợi ích cá nhân, lắng nghe lo ngại</td></tr>
<tr><td><b>K</b>nowledge — Kiến thức</td><td>Làm thế nào?</td><td>Đào tạo</td></tr>
<tr><td><b>A</b>bility — Khả năng</td><td>Tôi làm được chưa?</td><td>Thực hành, kèm cặp, thời gian chuyển tiếp</td></tr>
<tr><td><b>R</b>einforcement — Củng cố</td><td>Có duy trì không?</td><td>Ghi nhận, đo lường, sửa hệ thống khen thưởng</td></tr>
</table></div>
<p>Khi thay đổi bị kẹt, hãy tìm <b>bước đầu tiên chưa đạt</b> — đào tạo (K) vô ích nếu người ta chưa muốn (D).</p>

<h2>3. Kotter 8 bước (theo tổ chức)</h2>
<ol>
<li>Tạo tính cấp bách.</li>
<li>Lập liên minh dẫn dắt (gồm cả trưởng ca có uy tín).</li>
<li>Xây dựng tầm nhìn & chiến lược.</li>
<li>Truyền thông tầm nhìn — nhiều lần, nhiều kênh.</li>
<li>Trao quyền, gỡ rào cản.</li>
<li>Tạo <b>thắng lợi ngắn hạn</b> (thí điểm 1 block, 1 cổng).</li>
<li>Củng cố, mở rộng.</li>
<li>Gắn thay đổi vào văn hóa.</li>
</ol>
<div class="callout tip"><strong class="title">💡 Thí điểm trước</strong>Ở cảng, thay đổi lớn nên <b>thí điểm</b> trên phạm vi nhỏ, đo trước – sau, rồi dùng chính kết quả và người tham gia thí điểm để thuyết phục số đông.</div>
`,
      keyPoints: [
        'ADKAR: Nhận thức – Mong muốn – Kiến thức – Khả năng – Củng cố; tìm bước đầu tiên bị kẹt.',
        'Kotter 8 bước: cấp bách → liên minh → tầm nhìn → truyền thông → trao quyền → thắng lợi ngắn hạn → mở rộng → văn hóa.',
        'Thí điểm nhỏ, đo trước – sau, nhân rộng.'
      ],
      apply: [
        'Chọn 1 thay đổi đang triển khai, đánh giá từng người chủ chốt đang ở bước nào trong ADKAR.',
        'Thiết kế 1 “thắng lợi ngắn hạn” có thể đạt trong 30 ngày cho thay đổi đó.'
      ],
      quiz: [
        { q: 'Trong ADKAR, chữ D là?', options: ['Decision', 'Desire — mong muốn', 'Data', 'Delivery'], answer: 1 },
        { q: 'Nếu nhân viên chưa muốn thay đổi, tổ chức đào tạo ngay có hiệu quả không?', options: ['Rất hiệu quả', 'Thường kém hiệu quả — cần xử lý bước Desire trước', 'Không liên quan', 'Bắt buộc phải làm'], answer: 1 }
      ]
    },
    {
      id: 'chi-huy-su-co', title: 'Chỉ huy sự cố & truyền thông khủng hoảng ở cảng', minutes: 12,
      body: `
<h2>1. Nguyên tắc chỉ huy sự cố (theo tinh thần ICS)</h2>
<ul>
<li><b>Một người chỉ huy</b> hiện trường rõ ràng; mọi người biết đó là ai.</li>
<li>Ưu tiên: <b>Con người → Môi trường → Tài sản → Uy tín/ hoạt động</b>.</li>
<li>Phạm vi kiểm soát: một người quản lý trực tiếp 3–7 người.</li>
<li>Liên lạc chuẩn hóa, ghi nhật ký sự cố theo thời gian.</li>
</ul>

<h2>2. 10 phút đầu khi có sự cố nghiêm trọng (ví dụ rơi container, cháy hàng DG)</h2>
<ol>
<li>Đảm bảo an toàn bản thân; <b>dừng hoạt động</b> khu vực liên quan.</li>
<li>Cứu người, gọi cấp cứu/ PCCC (114, 115) và đội ứng cứu nội bộ.</li>
<li>Thiết lập vùng cách ly, kiểm soát ra vào.</li>
<li>Báo cáo theo cây thông tin (trưởng ca → quản lý → lãnh đạo → các cơ quan theo quy định).</li>
<li>Giữ nguyên hiện trường (trừ khi cần cứu người/ ngăn hậu quả); chụp ảnh, ghi nhân chứng.</li>
</ol>

<h2>3. Truyền thông khủng hoảng</h2>
<ul>
<li>Chỉ người được phân công phát ngôn với báo chí/ bên ngoài.</li>
<li>Nội dung: <b>sự thật đã xác nhận – hành động đang làm – sự quan tâm đến người bị ảnh hưởng – khi nào có thông tin tiếp</b>. Không suy đoán nguyên nhân, không đổ lỗi.</li>
<li>Thông báo khách hàng/ hãng tàu bị ảnh hưởng sớm, kèm phương án thay thế.</li>
</ul>

<h2>4. Sau sự cố</h2>
<p>Điều tra nguyên nhân gốc (xem chuyên đề Tư duy quyết định: 5 Whys, xương cá), chia sẻ bài học toàn cảng, theo dõi việc thực hiện biện pháp khắc phục đến khi đóng. Chăm sóc tâm lý cho người chứng kiến.</p>
`,
      keyPoints: [
        'Một người chỉ huy; ưu tiên Con người → Môi trường → Tài sản → Uy tín.',
        '10 phút đầu: an toàn, dừng việc, cứu người, cách ly, báo cáo, giữ hiện trường.',
        'Truyền thông: sự thật – hành động – quan tâm – thời điểm cập nhật; không suy đoán.'
      ],
      apply: [
        'Kiểm tra cây thông tin báo cáo sự cố của bộ phận có số điện thoại cập nhật không.',
        'Tổ chức diễn tập bàn giấy (table-top) 30 phút với kịch bản rơi container.'
      ],
      quiz: [
        { q: 'Thứ tự ưu tiên khi xử lý sự cố?', options: ['Tài sản → Con người → Môi trường', 'Con người → Môi trường → Tài sản → Uy tín', 'Uy tín → Tài sản → Con người', 'Hoạt động → Tài sản → Con người'], answer: 1 },
        { q: 'Khi phát ngôn về sự cố lúc chưa điều tra xong, nên?', options: ['Đoán nguyên nhân', 'Đổ lỗi cho nhà thầu', 'Nêu sự thật đã xác nhận, hành động đang làm, thời điểm cập nhật', 'Từ chối mọi thông tin'], answer: 2 }
      ]
    }
  ]
});
