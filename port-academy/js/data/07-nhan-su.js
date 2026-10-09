window.PA_DATA = window.PA_DATA || { modules: [], glossary: [] };
window.PA_DATA.modules.push({
  id: 'nhan-su', order: 7, icon: '👥', short: 'Quản trị nhân sự',
  title: 'Quản trị nhân sự cho nhà quản lý cảng & kho',
  desc: 'Bộ luật Lao động 2019 cho quản lý trực tiếp, tuyển dụng – hội nhập, đánh giá – phản hồi, ma trận kỹ năng, ca kíp, bàn giao ca và giữ chân người giỏi.',
  intro: '<p>Nhà quản lý trực tiếp là người “làm nhân sự” nhiều nhất trong doanh nghiệp. Phòng Nhân sự thiết kế chính sách, nhưng <b>trải nghiệm của người lao động do quản lý trực tiếp tạo ra</b>.</p>',
  lessons: [
    {
      id: 'blld', title: 'Bộ luật Lao động 2019 — những điều quản lý trực tiếp phải biết', minutes: 15,
      source: 'Bộ luật Lao động 45/2019/QH14; NĐ 145/2020/NĐ-CP',
      body: `
<h2>1. Hợp đồng lao động & thử việc</h2>
<ul>
<li>Hai loại HĐLĐ: <b>không xác định thời hạn</b> và <b>xác định thời hạn</b> (không quá 36 tháng). Ký tiếp HĐ xác định thời hạn chỉ được thêm <b>1 lần</b>; sau đó phải ký không xác định thời hạn (trừ một số trường hợp đặc biệt).</li>
<li>Thử việc (một lần cho một công việc): tối đa <b>180 ngày</b> với người quản lý doanh nghiệp; <b>60 ngày</b> với chức danh cần trình độ cao đẳng trở lên; <b>30 ngày</b> với trung cấp, công nhân kỹ thuật, nhân viên nghiệp vụ; <b>6 ngày làm việc</b> với công việc khác. Lương thử việc ít nhất <b>85%</b> lương của công việc đó.</li>
</ul>

<h2>2. Thời giờ làm việc, làm thêm, ca đêm</h2>
<div class="table-wrap"><table>
<tr><th>Nội dung</th><th>Quy định</th></tr>
<tr><td>Giờ làm việc bình thường</td><td>Không quá 8 giờ/ngày và 48 giờ/tuần</td></tr>
<tr><td>Làm thêm giờ</td><td>Phải có sự <b>đồng ý của người lao động</b>; không quá 50% giờ làm việc bình thường/ngày; không quá <b>40 giờ/tháng</b>; không quá <b>200 giờ/năm</b> (một số ngành, công việc được tới 300 giờ/năm theo quy định)</td></tr>
<tr><td>Tiền lương làm thêm</td><td>Ít nhất 150% (ngày thường), 200% (ngày nghỉ hằng tuần), 300% (ngày lễ, Tết — chưa kể lương ngày lễ)</td></tr>
<tr><td>Làm việc ban đêm</td><td>Từ 22 giờ đến 6 giờ sáng; được trả thêm ít nhất 30%</td></tr>
<tr><td>Nghỉ giữa giờ</td><td>Ít nhất 30 phút liên tục (làm việc ban đêm ít nhất 45 phút) khi làm từ 6 giờ/ngày trở lên</td></tr>
<tr><td>Nghỉ chuyển ca</td><td>Ít nhất 12 giờ trước khi chuyển sang ca làm việc khác</td></tr>
<tr><td>Nghỉ hằng tuần</td><td>Ít nhất 24 giờ liên tục/tuần (hoặc bình quân 4 ngày/tháng nếu không thể nghỉ hằng tuần)</td></tr>
</table></div>
<div class="callout warn"><strong class="title">⚠️ Rủi ro ở cảng</strong>Mùa cao điểm, tàu dồn dập → làm thêm giờ vượt trần là vi phạm phổ biến. Ngoài rủi ro pháp lý, <b>mệt mỏi là nguyên nhân gốc của nhiều tai nạn nâng hạ</b>. Theo dõi giờ làm thêm cộng dồn theo người, không chỉ theo tổ.</div>

<h2>3. Kỷ luật lao động</h2>
<ul>
<li>Hình thức: <b>khiển trách</b>; <b>kéo dài thời hạn nâng lương</b> không quá 6 tháng; <b>cách chức</b>; <b>sa thải</b> (chỉ trong các trường hợp luật định).</li>
<li>Chỉ xử lý kỷ luật với hành vi được quy định trong <b>nội quy lao động</b> (đã đăng ký, phổ biến), HĐLĐ hoặc pháp luật.</li>
<li>Nguyên tắc trình tự: người sử dụng lao động phải <b>chứng minh lỗi</b>; có sự tham gia của <b>tổ chức đại diện người lao động</b> (nếu người lao động là thành viên); người lao động có mặt, có quyền tự bào chữa hoặc nhờ người bào chữa; <b>lập biên bản</b>.</li>
<li>Thời hiệu xử lý: <b>6 tháng</b> kể từ ngày xảy ra vi phạm; <b>12 tháng</b> với vi phạm liên quan tài chính, tài sản, bí mật công nghệ, kinh doanh.</li>
<li><b>Cấm</b>: phạt tiền, cắt lương thay cho kỷ luật; xâm phạm thân thể, nhân phẩm; kỷ luật cho hành vi không có trong nội quy.</li>
</ul>
<div class="callout tip"><strong class="title">💡 Với quản lý trực tiếp</strong>Việc của bạn là <b>ghi nhận sự việc khách quan, kịp thời</b> (biên bản vi phạm có thời gian, địa điểm, nhân chứng, ảnh), báo cáo đúng kênh. Đừng tự “phạt” bằng cách trừ tiền thưởng ngoài quy chế — đó là vi phạm pháp luật.</div>
`,
      keyPoints: [
        'HĐ xác định thời hạn ≤ 36 tháng, chỉ ký thêm 1 lần. Thử việc: 180/60/30/6 ngày; lương thử việc ≥ 85%.',
        'Làm thêm: cần đồng ý của NLĐ; ≤ 40 giờ/tháng; ≤ 200 giờ/năm (một số ngành 300 giờ).',
        'Ca đêm 22h–6h: +30%; nghỉ giữa giờ ≥ 30 phút (ca đêm ≥ 45 phút); nghỉ chuyển ca ≥ 12 giờ.',
        'Kỷ luật: 4 hình thức; thời hiệu 6/12 tháng; cấm phạt tiền, cắt lương.'
      ],
      apply: [
        'Lập bảng theo dõi giờ làm thêm cộng dồn tháng/năm theo từng người trong tổ của bạn.',
        'Đọc lại nội quy lao động hiện hành, đánh dấu các hành vi vi phạm liên quan an toàn nâng hạ.',
        'Kiểm tra lịch ca: có trường hợp nghỉ chuyển ca dưới 12 giờ không?'
      ],
      quiz: [
        { q: 'Giới hạn làm thêm giờ mỗi tháng theo BLLĐ 2019?', options: ['30 giờ', '40 giờ', '50 giờ', '60 giờ'], answer: 1 },
        { q: 'Thời hiệu xử lý kỷ luật lao động với vi phạm liên quan đến tài chính, tài sản?', options: ['3 tháng', '6 tháng', '12 tháng', '24 tháng'], answer: 2 },
        { q: 'Hình thức nào bị CẤM khi xử lý kỷ luật?', options: ['Khiển trách', 'Kéo dài thời hạn nâng lương', 'Phạt tiền, cắt lương', 'Cách chức'], answer: 2 },
        { q: 'Tiền lương làm thêm vào ngày nghỉ hằng tuần ít nhất bằng?', options: ['130%', '150%', '200%', '300%'], answer: 2 }
      ]
    },
    {
      id: 'tuyen-dung', title: 'Tuyển đúng người & hội nhập 30-60-90 ngày', minutes: 12,
      body: `
<h2>1. Hồ sơ năng lực vị trí</h2>
<p>Trước khi tuyển, viết rõ: <b>kết quả công việc mong đợi</b> sau 6–12 tháng, <b>năng lực bắt buộc</b> (chứng chỉ vận hành, kinh nghiệm), <b>năng lực mong muốn</b>, <b>tố chất</b> (tuân thủ an toàn, làm việc ca, chịu áp lực).</p>

<h2>2. Phỏng vấn có cấu trúc — phương pháp STAR</h2>
<p>Hỏi về hành vi trong quá khứ, yêu cầu ứng viên kể theo: <b>S</b>ituation (tình huống) – <b>T</b>ask (nhiệm vụ) – <b>A</b>ction (hành động của chính họ) – <b>R</b>esult (kết quả).</p>
<div class="table-wrap"><table>
<tr><th>Năng lực</th><th>Câu hỏi mẫu</th></tr>
<tr><td>An toàn</td><td>“Kể về một lần anh/chị từ chối làm một việc vì thấy không an toàn. Chuyện gì đã xảy ra?”</td></tr>
<tr><td>Giải quyết vấn đề</td><td>“Kể về lần tàu bị chậm do sự cố bãi/thiết bị. Anh/chị đã làm gì cụ thể?”</td></tr>
<tr><td>Làm việc nhóm</td><td>“Kể về một mâu thuẫn với đồng nghiệp ca khác và cách anh/chị xử lý.”</td></tr>
<tr><td>Học hỏi</td><td>“Kỹ năng mới nhất anh/chị tự học là gì? Học bằng cách nào?”</td></tr>
</table></div>
<p>Chấm điểm từng năng lực theo thang 1–5 <b>ngay sau</b> phỏng vấn, mỗi người phỏng vấn chấm độc lập rồi mới thảo luận — giảm thiên kiến.</p>

<h2>3. Hội nhập 30-60-90 ngày</h2>
<div class="table-wrap"><table>
<tr><th>Giai đoạn</th><th>Mục tiêu</th><th>Hoạt động</th></tr>
<tr><td>Ngày 1–30: Học</td><td>Hiểu an toàn, quy trình, con người</td><td>Huấn luyện ATVSLĐ, đi kèm người hướng dẫn (buddy), học hệ thống, làm việc có giám sát</td></tr>
<tr><td>Ngày 31–60: Đóng góp</td><td>Làm được việc độc lập ở phạm vi cơ bản</td><td>Nhận nhiệm vụ riêng, phản hồi hằng tuần</td></tr>
<tr><td>Ngày 61–90: Chủ động</td><td>Đạt tiêu chuẩn vị trí, đề xuất cải tiến</td><td>Đánh giá kết thúc thử việc, đặt mục tiêu 6 tháng</td></tr>
</table></div>
<div class="callout tip"><strong class="title">💡 Ngày đầu tiên quyết định nhiều điều</strong>Chuẩn bị sẵn: đồ bảo hộ đúng cỡ, tài khoản hệ thống, người hướng dẫn, lịch tuần đầu. Nhân viên mới có tỷ lệ tai nạn cao hơn trong những tháng đầu — không giao việc nguy hiểm cao khi chưa đánh giá năng lực.</div>
`,
      keyPoints: [
        'Viết hồ sơ năng lực trước khi tuyển: kết quả mong đợi, năng lực bắt buộc, tố chất.',
        'Phỏng vấn STAR + chấm điểm độc lập ngay sau phỏng vấn.',
        'Hội nhập 30-60-90: Học → Đóng góp → Chủ động; có buddy.',
        'Nhân viên mới rủi ro tai nạn cao — giám sát chặt tháng đầu.'
      ],
      apply: [
        'Viết bộ 5 câu hỏi STAR cho vị trí bạn sắp tuyển (lái cẩu, kiểm đếm, điều độ…).',
        'Soạn checklist “Ngày đầu tiên” và kế hoạch 30-60-90 cho nhân viên mới tiếp theo.'
      ],
      quiz: [
        { q: 'STAR là viết tắt của?', options: ['Strategy – Team – Action – Review', 'Situation – Task – Action – Result', 'Start – Test – Assess – Report', 'Skill – Talent – Ability – Role'], answer: 1 },
        { q: 'Vì sao người phỏng vấn nên chấm điểm độc lập trước khi thảo luận?', options: ['Tiết kiệm thời gian', 'Giảm thiên kiến và ảnh hưởng lẫn nhau', 'Theo quy định pháp luật', 'Không có lý do'], answer: 1 }
      ]
    },
    {
      id: 'danh-gia-phan-hoi', title: 'Đánh giá hiệu suất, phản hồi SBI & họp 1-1', minutes: 14,
      body: `
<h2>1. Đặt mục tiêu</h2>
<p>Mục tiêu cá nhân theo <b>SMART</b>: Cụ thể – Đo lường được – Khả thi – Liên quan – Có thời hạn. Ví dụ: “Giảm tỷ lệ đảo chuyển bãi xuất block B từ 35% xuống 25% trong quý III” thay vì “Làm bãi tốt hơn”.</p>

<h2>2. Phản hồi theo mô hình SBI</h2>
<div class="table-wrap"><table>
<tr><th>Bước</th><th>Nội dung</th><th>Ví dụ</th></tr>
<tr><td><b>S</b>ituation</td><td>Bối cảnh cụ thể</td><td>“Ca đêm thứ Ba, khi làm tàu ASIA PRIDE…”</td></tr>
<tr><td><b>B</b>ehavior</td><td>Hành vi quan sát được (không phán xét tính cách)</td><td>“…anh đã cho cẩu nâng khi chưa có tín hiệu của người xi nhan.”</td></tr>
<tr><td><b>I</b>mpact</td><td>Tác động</td><td>“Việc đó khiến người móc cáp còn đứng gần container, có thể gây tai nạn nghiêm trọng.”</td></tr>
</table></div>
<p>Sau SBI: <b>hỏi</b> (“Anh thấy lúc đó thế nào?”) và <b>thống nhất</b> hành động. Phản hồi tích cực cũng dùng SBI — cụ thể thì người nghe mới biết lặp lại điều gì.</p>
<div class="callout tip"><strong class="title">💡 Tỷ lệ vàng</strong>Ghi nhận tích cực nhiều hơn góp ý (thường khuyến nghị khoảng 3–5 : 1). Ghi nhận công khai, góp ý riêng tư. Phản hồi càng gần thời điểm sự việc càng hiệu quả.</div>

<h2>3. Họp 1-1 (one-on-one)</h2>
<ul>
<li>15–30 phút, 2 tuần/lần, <b>chương trình của nhân viên</b> là chính.</li>
<li>Câu hỏi gợi ý: “Tuần qua việc gì khó nhất?”, “Tôi có thể giúp gì?”, “Có điều gì anh/chị muốn học thêm?”, “Có điều gì ở tổ khiến anh/chị lo lắng?”.</li>
<li>Ghi lại cam kết của <b>cả hai bên</b> và kiểm tra lần sau.</li>
</ul>

<h2>4. Xử lý hiệu suất kém</h2>
<ol>
<li><b>Chẩn đoán</b>: do không biết (đào tạo), không thể (nguồn lực, sức khỏe, quy trình), hay không muốn (động lực, thái độ)?</li>
<li>Trao đổi rõ khoảng cách giữa kỳ vọng và thực tế bằng dữ liệu.</li>
<li><b>Kế hoạch cải thiện (PIP)</b> 30–90 ngày: mục tiêu đo được, hỗ trợ cụ thể, lịch kiểm tra.</li>
<li>Ghi chép đầy đủ; nếu không cải thiện → áp dụng chính sách (điều chuyển, kỷ luật theo nội quy).</li>
</ol>
`,
      keyPoints: [
        'Mục tiêu SMART cụ thể bằng số.',
        'SBI: Bối cảnh – Hành vi – Tác động; sau đó hỏi và thống nhất hành động.',
        'Ghi nhận công khai, góp ý riêng; ghi nhận nhiều hơn góp ý.',
        'Hiệu suất kém: chẩn đoán không biết/không thể/không muốn → PIP có dữ liệu.'
      ],
      apply: [
        'Trong tuần này, đưa 3 phản hồi tích cực theo SBI cho 3 người khác nhau.',
        'Lên lịch họp 1-1 định kỳ với các trưởng tổ/nhân viên trực tiếp.',
        'Viết lại 1 mục tiêu mơ hồ của bộ phận thành mục tiêu SMART.'
      ],
      quiz: [
        { q: 'Trong SBI, chữ B cần mô tả gì?', options: ['Tính cách của nhân viên', 'Hành vi cụ thể quan sát được', 'Kết quả kinh doanh', 'Lời khuyên'], answer: 1 },
        { q: 'Câu nào là phản hồi theo SBI tốt?', options: ['Anh lúc nào cũng ẩu.', 'Ca sáng nay, anh quên kiểm tra seal 3 container ở cổng 2, nên chúng ta phải gọi xe quay lại.', 'Cố gắng hơn nhé.', 'Anh làm tệ quá.'], answer: 1 },
        { q: 'Bước đầu tiên khi xử lý hiệu suất kém?', options: ['Kỷ luật ngay', 'Chẩn đoán nguyên nhân: không biết, không thể hay không muốn', 'Chuyển công tác', 'Giảm lương'], answer: 1 }
      ]
    },
    {
      id: 'dao-tao-ky-nang', title: 'Ma trận kỹ năng, đào tạo tại chỗ & kế thừa', minutes: 12,
      body: `
<h2>1. Ma trận kỹ năng (Skill matrix)</h2>
<p>Bảng: hàng = nhân viên, cột = kỹ năng/ thiết bị (STS, RTG, reach stacker, kiểm đếm, điều độ, DG…), ô = cấp độ:</p>
<div class="table-wrap"><table>
<tr><th>Cấp</th><th>Ý nghĩa</th></tr>
<tr><td>0</td><td>Chưa được đào tạo</td></tr>
<tr><td>1</td><td>Đang đào tạo — làm dưới giám sát</td></tr>
<tr><td>2</td><td>Làm độc lập đạt chuẩn</td></tr>
<tr><td>3</td><td>Thành thạo — có thể xử lý tình huống khó</td></tr>
<tr><td>4</td><td>Có thể đào tạo người khác</td></tr>
</table></div>
<p>Dùng ma trận để: phát hiện <b>điểm rủi ro</b> (kỹ năng chỉ 1 người biết), lập lịch ca đủ năng lực, lập kế hoạch đào tạo, minh bạch lộ trình thăng tiến.</p>

<h2>2. Mô hình 70-20-10</h2>
<p>~70% năng lực đến từ <b>trải nghiệm công việc</b> (giao việc thử thách), ~20% từ <b>người khác</b> (kèm cặp, phản hồi), ~10% từ <b>đào tạo chính thức</b>. → Đừng chỉ gửi đi học; hãy thiết kế công việc để học.</p>

<h2>3. Đào tạo tại chỗ — phương pháp 4 bước (Job Instruction)</h2>
<ol>
<li><b>Chuẩn bị</b> người học: giải thích mục đích, tạo tâm lý thoải mái.</li>
<li><b>Trình bày</b>: làm mẫu từng bước, nhấn mạnh <b>điểm then chốt</b> (an toàn, chất lượng) và <b>lý do</b>.</li>
<li><b>Thực hành</b>: người học làm, giải thích lại các điểm then chốt; sửa ngay.</li>
<li><b>Theo dõi</b>: để làm độc lập, kiểm tra định kỳ, giảm dần giám sát.</li>
</ol>

<h2>4. Kế hoạch kế thừa</h2>
<p>Với mỗi vị trí then chốt (trưởng ca, điều độ tàu, kỹ sư nâng): xác định <b>người sẵn sàng ngay</b>, <b>sẵn sàng trong 1–2 năm</b>, và kế hoạch phát triển cho họ. Nhà quản lý giỏi là người <b>đào tạo được người thay thế mình</b>.</p>
`,
      keyPoints: [
        'Ma trận kỹ năng cấp 0–4 giúp phát hiện điểm rủi ro “chỉ 1 người biết”.',
        '70-20-10: học chủ yếu qua công việc và người khác.',
        'Đào tạo tại chỗ 4 bước: Chuẩn bị – Trình bày – Thực hành – Theo dõi.',
        'Mỗi vị trí then chốt cần người kế thừa sẵn sàng.'
      ],
      apply: [
        'Lập ma trận kỹ năng cho tổ/bộ phận của bạn trên Excel; đánh dấu đỏ các kỹ năng chỉ có ≤ 1 người cấp 2+.',
        'Chọn 1 người tiềm năng, giao 1 nhiệm vụ thử thách có hỗ trợ trong tháng này.'
      ],
      quiz: [
        { q: 'Theo mô hình 70-20-10, phần lớn năng lực đến từ?', options: ['Khóa học chính thức', 'Trải nghiệm công việc thực tế', 'Đọc sách', 'Hội thảo'], answer: 1 },
        { q: 'Mục đích quan trọng của ma trận kỹ năng là?', options: ['Trang trí phòng họp', 'Phát hiện kỹ năng chỉ một người nắm và lập kế hoạch đào tạo', 'Tính lương', 'Chấm công'], answer: 1 }
      ]
    },
    {
      id: 'ca-kip-dong-luc', title: 'Ca kíp, bàn giao ca, mệt mỏi & giữ chân nhân viên', minutes: 12,
      body: `
<h2>1. Bàn giao ca — điểm rơi thông tin</h2>
<p>Nhiều sự cố xảy ra trong <b>1 giờ đầu ca</b> do thông tin không được bàn giao. Bàn giao chuẩn gồm:</p>
<ul>
<li>An toàn: sự cố, cận nguy, khu vực đang có công việc nguy hiểm, thiết bị bị khóa (LOTO).</li>
<li>Tàu: tiến độ, bay còn lại, vấn đề với tàu, hàng đặc biệt.</li>
<li>Bãi: khu đầy, khu cần đảo chuyển, container bất thường/tạm giữ.</li>
<li>Thiết bị: hỏng, đang sửa, dự kiến hoàn thành.</li>
<li>Con người: thiếu người, người mới, người làm thêm nhiều.</li>
<li>Việc dở dang và cam kết với khách hàng.</li>
</ul>
<p>Hình thức: <b>văn bản (mẫu cố định) + trao đổi trực tiếp 5–10 phút</b>, có ký nhận.</p>

<h2>2. Quản lý mệt mỏi</h2>
<ul>
<li>Thời điểm nguy hiểm: <b>2h–6h sáng</b>, ca kéo dài &gt; 12 giờ, ca đêm liên tiếp nhiều ngày.</li>
<li>Biện pháp: giới hạn số ca đêm liên tiếp, xoay ca theo chiều thuận (sáng → chiều → đêm), nghỉ ngắn định kỳ cho lái cẩu (cabin STS đòi hỏi tập trung cao), cho phép báo cáo mệt mỏi mà không bị phạt.</li>
</ul>

<h2>3. Động lực — thuyết hai yếu tố của Herzberg</h2>
<div class="table-wrap"><table>
<tr><th>Yếu tố duy trì (thiếu → bất mãn)</th><th>Yếu tố động viên (có → hăng say)</th></tr>
<tr><td>Lương, phúc lợi, điều kiện làm việc, an toàn, chính sách công bằng, quan hệ với quản lý</td><td>Được ghi nhận, trách nhiệm, thành tựu, cơ hội phát triển, ý nghĩa công việc</td></tr>
</table></div>
<p>→ Lương tốt chỉ giúp nhân viên <b>không bất mãn</b>; muốn họ <b>gắn bó và cố gắng</b>, nhà quản lý phải tạo ghi nhận, trách nhiệm và phát triển — những thứ <b>không tốn nhiều tiền</b>.</p>

<h2>4. Phỏng vấn giữ chân (stay interview)</h2>
<p>Đừng đợi đến khi nhân viên nộp đơn nghỉ. Hỏi định kỳ người giỏi: “Điều gì khiến anh/chị ở lại?”, “Điều gì có thể khiến anh/chị ra đi?”, “Tôi có thể làm gì để công việc tốt hơn?”.</p>
`,
      keyPoints: [
        'Bàn giao ca: an toàn – tàu – bãi – thiết bị – con người – việc dở dang; văn bản + trực tiếp.',
        'Mệt mỏi nguy hiểm nhất 2h–6h; xoay ca thuận chiều, giới hạn ca đêm liên tiếp.',
        'Herzberg: lương là yếu tố duy trì; ghi nhận – trách nhiệm – phát triển là yếu tố động viên.',
        'Stay interview với người giỏi trước khi họ muốn nghỉ.'
      ],
      apply: [
        'Dùng thử mẫu <a href="#/forms/handover/new">Biên bản bàn giao ca</a> trong 1 tuần, sau đó điều chỉnh theo thực tế.',
        'Thực hiện 1 stay interview với nhân viên giỏi nhất của bạn trong tháng này.'
      ],
      quiz: [
        { q: 'Theo Herzberg, lương thuộc nhóm yếu tố nào?', options: ['Động viên', 'Duy trì', 'Không liên quan', 'Cả hai'], answer: 1 },
        { q: 'Xoay ca theo chiều thuận là?', options: ['Đêm → chiều → sáng', 'Sáng → chiều → đêm', 'Ngẫu nhiên', 'Chỉ làm ca đêm'], answer: 1 },
        { q: 'Khoảng thời gian mệt mỏi nguy hiểm nhất?', options: ['8h–10h', '13h–15h', '2h–6h', '18h–20h'], answer: 2 }
      ]
    }
  ]
});
