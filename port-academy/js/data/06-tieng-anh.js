window.PA_DATA = window.PA_DATA || { modules: [], glossary: [] };
window.PA_DATA.modules.push({
  id: 'tieng-anh', order: 6, icon: '🗣️', short: 'Tiếng Anh cảng',
  title: 'Tiếng Anh chuyên ngành khai thác cảng',
  desc: 'Giao tiếp với thuyền phó, bộ đàm VHF theo IMO SMCP, email sự cố, họp với hãng tàu, tiếng Anh an toàn nâng hạ. Bấm 🔊 để nghe phát âm.',
  intro: '<p>Mục tiêu: <b>nói được những câu cần thiết trong công việc thật</b>, không phải ngữ pháp hàn lâm. Mỗi bài có các câu mẫu — bấm 🔊 để nghe, đọc to theo 3 lần. Kết hợp với mục <a href="#/flashcards">Flashcard</a> mỗi ngày 10 phút.</p>',
  lessons: [
    {
      id: 'pre-ops', title: 'Họp trước khi làm hàng với thuyền phó (Pre-operation meeting)', minutes: 12,
      body: `
<h2>1. Tình huống</h2>
<p>Tàu vừa cập cầu. Bạn (Ship Planner/ Foreman/ Supervisor) lên tàu gặp <b>Chief Officer (C/O — đại phó)</b> để thống nhất kế hoạch làm hàng.</p>

<h2>2. Câu mẫu</h2>
<div class="table-wrap"><table>
<tr><th>Mục đích</th><th>English</th><th>Tiếng Việt</th></tr>
<tr><td>Chào & giới thiệu</td><td class="en">Good morning, Chief. I'm the terminal supervisor for your vessel today.</td><td>Chào anh, tôi là giám sát của cảng phụ trách tàu hôm nay.</td></tr>
<tr><td>Kế hoạch</td><td class="en">We will work with three gantry cranes. Discharging first, then loading.</td><td>Chúng tôi làm với 3 cẩu bờ. Dỡ trước, xếp sau.</td></tr>
<tr><td>Thời gian dự kiến</td><td class="en">Estimated completion is at eighteen hundred hours, weather permitting.</td><td>Dự kiến hoàn thành lúc 18:00 nếu thời tiết cho phép.</td></tr>
<tr><td>Hỏi về hầm hàng</td><td class="en">Are all hatch covers ready to be opened?</td><td>Tất cả nắp hầm đã sẵn sàng mở chưa?</td></tr>
<tr><td>Hỏi dằn tàu</td><td class="en">Please keep the vessel upright during operations. Any ballast changes, please inform us.</td><td>Vui lòng giữ tàu cân bằng trong khi làm hàng. Thay đổi nước dằn xin báo chúng tôi.</td></tr>
<tr><td>Hàng nguy hiểm</td><td class="en">We have four dangerous goods containers, class three and class eight, in bay twenty-two.</td><td>Có 4 container hàng nguy hiểm loại 3 và loại 8 ở bay 22.</td></tr>
<tr><td>Hàng quá khổ</td><td class="en">There is one out-of-gauge flat rack. We will use a special frame and manual lashing.</td><td>Có một flat rack quá khổ, chúng tôi dùng khung đặc biệt và chằng buộc thủ công.</td></tr>
<tr><td>Hư hỏng</td><td class="en">We found a damaged container on discharge. Please sign the damage report.</td><td>Phát hiện một container hư hỏng khi dỡ. Xin ký biên bản hư hỏng.</td></tr>
<tr><td>Xác nhận</td><td class="en">Let me confirm: lashing is by the terminal, unlashing on deck by the crew. Is that correct?</td><td>Tôi xác nhận lại: cảng chằng buộc, thuyền viên tháo chằng trên boong. Đúng không?</td></tr>
</table></div>

<h2>3. Mẹo giao tiếp</h2>
<ul>
<li><b>Xác nhận lại bằng cách nhắc lại</b> (read-back): “Let me confirm…”, “So you mean…”.</li>
<li>Nói chậm, câu ngắn, số đọc từng chữ số: “bay two-two” thay vì “bay twenty-two” khi có nhiễu.</li>
<li>Không hiểu thì hỏi lại — đừng gật đầu: “Sorry, could you say that again, please?”.</li>
</ul>
`,
      keyPoints: [
        'Chief Officer (đại phó) phụ trách hàng hóa trên tàu — đầu mối chính của cảng.',
        'Luôn read-back: “Let me confirm…”.',
        'Đọc số từng chữ số khi liên lạc có nhiễu.'
      ],
      apply: [
        'Đọc to 9 câu mẫu, mỗi câu 3 lần, ghi âm lại và so sánh với phát âm 🔊.',
        'Lần lên tàu tiếp theo, dùng ít nhất 3 câu mẫu.'
      ],
      quiz: [
        { q: '“Discharging first, then loading” nghĩa là?', options: ['Xếp trước, dỡ sau', 'Dỡ trước, xếp sau', 'Chỉ dỡ hàng', 'Chỉ xếp hàng'], answer: 1 },
        { q: '“Weather permitting” nghĩa là?', options: ['Bất chấp thời tiết', 'Nếu thời tiết cho phép', 'Thời tiết xấu', 'Dự báo thời tiết'], answer: 1 },
        { q: 'Câu nào dùng để xác nhận lại thông tin?', options: ['Go ahead.', 'Let me confirm…', 'Stand by.', 'Out.'], answer: 1 }
      ]
    },
    {
      id: 'vhf-smcp', title: 'Bộ đàm/VHF theo IMO SMCP & bảng chữ cái phiên âm', minutes: 12,
      source: 'IMO Standard Marine Communication Phrases (SMCP)',
      body: `
<h2>1. Bảng chữ cái phiên âm (NATO/ICAO)</h2>
<p class="en">Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu</p>
<p>Số: <span class="en">One, Two, Three, Four, Fife, Six, Seven, Eight, Niner, Zero</span> (5 đọc “fife”, 9 đọc “niner” để tránh nhầm).</p>
<p>Ví dụ đánh vần số container <b>MSCU 123456 7</b>: <span class="en">Mike Sierra Charlie Uniform, one two three four fife six, check digit seven</span>.</p>

<h2>2. Message markers (nhãn thông điệp) — SMCP</h2>
<div class="table-wrap"><table>
<tr><th>Marker</th><th>Dùng khi</th><th>Ví dụ</th></tr>
<tr><td>INSTRUCTION</td><td>Ra chỉ thị (người có thẩm quyền)</td><td class="en">Instruction. Stop cargo operations in bay one-zero.</td></tr>
<tr><td>ADVICE</td><td>Khuyến nghị</td><td class="en">Advice. Wait for the wind to drop before lifting.</td></tr>
<tr><td>WARNING</td><td>Cảnh báo nguy hiểm</td><td class="en">Warning. Wind speed is increasing to fifteen metres per second.</td></tr>
<tr><td>INFORMATION</td><td>Thông tin</td><td class="en">Information. Crane number three is out of service.</td></tr>
<tr><td>QUESTION</td><td>Câu hỏi</td><td class="en">Question. What is your estimated time of completion?</td></tr>
<tr><td>ANSWER</td><td>Trả lời</td><td class="en">Answer. Estimated time of completion is twenty-two hundred.</td></tr>
<tr><td>REQUEST</td><td>Yêu cầu</td><td class="en">Request. Please shift the vessel two metres ahead.</td></tr>
<tr><td>INTENTION</td><td>Thông báo ý định của mình</td><td class="en">Intention. I will start loading hatch number four.</td></tr>
</table></div>

<h2>3. Quy tắc gọi bộ đàm</h2>
<ul>
<li>Gọi: <span class="en">“Crane three, crane three, this is Control, over.”</span></li>
<li>Trả lời: <span class="en">“Control, this is crane three, go ahead, over.”</span></li>
<li>Sửa sai: <span class="en">“Correction. Bay one-four, not one-two.”</span></li>
<li>Yêu cầu nhắc lại: <span class="en">“Say again, over.”</span></li>
<li>Chờ: <span class="en">“Stand by.”</span> — Kết thúc: <span class="en">“Out.”</span> (không nói “over and out”).</li>
<li>Khẩn cấp: <span class="en">“All stop! All stop! All stop!”</span></li>
</ul>
`,
      keyPoints: [
        'Đánh vần bằng bảng NATO; 5 = fife, 9 = niner.',
        'Dùng message markers: INSTRUCTION, ADVICE, WARNING, INFORMATION, QUESTION, ANSWER, REQUEST, INTENTION.',
        'Over = mời trả lời; Out = kết thúc; Say again = nhắc lại; Correction = sửa sai.'
      ],
      apply: [
        'Tự đánh vần 5 số container trong bãi bằng bảng chữ cái NATO.',
        'Đề xuất áp dụng message markers cho kênh bộ đàm giữa điều độ và lái cẩu khi làm tàu nước ngoài.'
      ],
      quiz: [
        { q: 'Chữ cái “M” trong bảng phiên âm là?', options: ['Mama', 'Mike', 'Mary', 'Metro'], answer: 1 },
        { q: 'Số 9 đọc trong liên lạc vô tuyến là?', options: ['Nine', 'Niner', 'Nein', 'Ninety'], answer: 1 },
        { q: 'Khi muốn đối phương nhắc lại, nói?', options: ['Repeat please over and out', 'Say again', 'What?', 'Roger'], answer: 1 },
        { q: 'Message marker dùng để cảnh báo nguy hiểm là?', options: ['ADVICE', 'INFORMATION', 'WARNING', 'INTENTION'], answer: 2 }
      ]
    },
    {
      id: 'email', title: 'Email chuyên nghiệp: báo sự cố, xác nhận lịch, từ chối khéo', minutes: 15,
      body: `
<h2>1. Cấu trúc email công việc</h2>
<ol>
<li><b>Subject</b> rõ ràng: tên tàu/ chuyến/ số container + vấn đề. Ví dụ: <span class="en">MV OCEAN STAR V.123E – Damaged container MSCU1234567 on discharge</span></li>
<li><b>Mở đầu</b> 1 câu nêu mục đích.</li>
<li><b>Nội dung</b>: sự việc – thời gian – vị trí – tình trạng – hành động đã làm.</li>
<li><b>Yêu cầu/ bước tiếp theo</b> có hạn chót.</li>
<li><b>Kết</b> và chữ ký đầy đủ (chức danh, điện thoại).</li>
</ol>

<h2>2. Mẫu 1 — Báo cáo hư hỏng container</h2>
<div class="formula">Subject: MV OCEAN STAR V.123E – Damaged container MSCU1234567 on discharge

Dear Sir/Madam,

We would like to inform you that container MSCU1234567 (40'HC) was found damaged during discharge from bay 22 at 14:35 hrs on 12 March.

Details:
- Damage: dent and hole on the left side panel, approx. 30 x 20 cm
- Seal: intact, no. VN123456
- The damage was noted before the container left the crane spreader and was witnessed by the Chief Officer.

The damage report has been signed by the vessel. Photos are attached for your reference.

Please advise whether a survey is required before delivery to the consignee. We kindly request your reply by 10:00 hrs tomorrow.

Best regards,
[Name] – Operations Supervisor
[Company] | Tel: +84 ...</div>

<h2>3. Mẫu 2 — Xác nhận lịch cập cầu (berthing)</h2>
<div class="formula">Subject: Berthing confirmation – MV ASIA PRIDE V.045N

Dear Agent,

Thank you for your berthing request. We are pleased to confirm the following:
- Berth: No. 3
- ETB: 06:00 hrs, 15 May
- Cranes: 2 x STS
- Cargo cut-off: 18:00 hrs, 14 May

Please note that containers arriving after the cut-off time may be rolled to the next vessel.

Kind regards,</div>

<h2>4. Mẫu 3 — Từ chối khéo léo + đề xuất thay thế</h2>
<div class="formula">Dear Mr. Lee,

Thank you for your request to extend the cut-off time for MV ASIA PRIDE.

Unfortunately, we are unable to extend it beyond 18:00 hrs because the vessel's loading plan must be finalised for customs and safety checks.

As an alternative, we can offer priority gate-in from 14:00 to 17:00 hrs for your containers. Please let us know if this works for you.

Best regards,</div>

<h2>5. Cụm từ hữu ích</h2>
<div class="table-wrap"><table>
<tr><th>English</th><th>Tiếng Việt</th></tr>
<tr><td class="en">Please find attached the statement of facts.</td><td>Vui lòng xem SOF đính kèm.</td></tr>
<tr><td class="en">We regret to inform you that…</td><td>Chúng tôi rất tiếc phải thông báo…</td></tr>
<tr><td class="en">Due to bad weather, operations were suspended from 10:00 to 13:00 hrs.</td><td>Do thời tiết xấu, việc làm hàng tạm dừng từ 10:00 đến 13:00.</td></tr>
<tr><td class="en">We would appreciate it if you could…</td><td>Chúng tôi sẽ rất cảm kích nếu anh/chị có thể…</td></tr>
<tr><td class="en">Without prejudice.</td><td>Không làm phương hại đến quyền lợi (dùng khi trao đổi về tranh chấp, không thừa nhận trách nhiệm).</td></tr>
<tr><td class="en">Please advise at your earliest convenience.</td><td>Vui lòng phản hồi sớm nhất có thể.</td></tr>
</table></div>
<div class="callout warn"><strong class="title">⚠️ Cẩn trọng pháp lý</strong>Trong email về hư hỏng/tổn thất, chỉ <b>mô tả sự việc</b>; tránh câu thừa nhận lỗi như “Our driver damaged the container” khi chưa điều tra. Dùng “The container was found damaged…”.</div>
`,
      keyPoints: [
        'Subject: tàu/chuyến/số container + vấn đề.',
        'Nội dung: sự việc – thời gian – vị trí – tình trạng – hành động – yêu cầu có hạn chót.',
        'Từ chối: cảm ơn → lý do ngắn → đề xuất thay thế.',
        'Không thừa nhận lỗi trong email khi chưa điều tra; dùng câu bị động mô tả sự việc.'
      ],
      apply: [
        'Lưu 3 mẫu email vào email templates/ chữ ký nhanh của bạn.',
        'Viết lại email tiếng Anh gần nhất bạn gửi theo cấu trúc 5 phần.'
      ],
      quiz: [
        { q: 'Câu nào phù hợp khi báo hư hỏng mà chưa xác định lỗi?', options: ['Our crane driver damaged the container.', 'The container was found damaged during discharge.', 'It is your fault.', 'We broke it.'], answer: 1 },
        { q: '“Cut-off time” nghĩa là?', options: ['Giờ tàu đến', 'Giờ cắt máng/ hạn chót nhận hàng xuất', 'Giờ nghỉ trưa', 'Giờ cắt điện'], answer: 1 },
        { q: '“Rolled to the next vessel” nghĩa là?', options: ['Container bị lăn', 'Bị chuyển sang chuyến tàu sau', 'Bị hủy', 'Được ưu tiên'], answer: 1 }
      ]
    },
    {
      id: 'hop-dam-phan', title: 'Họp & đàm phán với hãng tàu, khách hàng', minutes: 12,
      body: `
<h2>1. Mở đầu và điều phối cuộc họp</h2>
<div class="table-wrap"><table>
<tr><th>English</th><th>Tiếng Việt</th></tr>
<tr><td class="en">Thank you for joining. The purpose of today's meeting is to review last month's performance.</td><td>Cảm ơn đã tham dự. Mục đích hôm nay là đánh giá kết quả tháng trước.</td></tr>
<tr><td class="en">Let's start with the berth productivity figures.</td><td>Bắt đầu với số liệu năng suất cầu bến.</td></tr>
<tr><td class="en">Could we come back to that point later?</td><td>Chúng ta quay lại ý đó sau được không?</td></tr>
<tr><td class="en">To sum up, we agreed on three action items.</td><td>Tóm lại, chúng ta thống nhất 3 việc cần làm.</td></tr>
</table></div>

<h2>2. Trình bày số liệu</h2>
<div class="table-wrap"><table>
<tr><th>English</th><th>Tiếng Việt</th></tr>
<tr><td class="en">Our average berth productivity increased from sixty to seventy-two moves per hour.</td><td>Năng suất cầu bến TB tăng từ 60 lên 72 move/giờ.</td></tr>
<tr><td class="en">Vessel waiting time dropped by thirty percent compared to last quarter.</td><td>Thời gian tàu chờ giảm 30% so với quý trước.</td></tr>
<tr><td class="en">The main reason for the delay was crane breakdown.</td><td>Nguyên nhân chính của chậm trễ là hỏng cẩu.</td></tr>
</table></div>

<h2>3. Đàm phán</h2>
<div class="table-wrap"><table>
<tr><th>Mục đích</th><th>English</th></tr>
<tr><td>Đề xuất</td><td class="en">We would like to propose a fixed berthing window every Tuesday.</td></tr>
<tr><td>Điều kiện</td><td class="en">We can guarantee seventy moves per hour, provided that the bay plan is sent forty-eight hours in advance.</td></tr>
<tr><td>Nhượng bộ có điều kiện</td><td class="en">If you can increase the volume to five thousand TEU per month, we could offer a five percent discount.</td></tr>
<tr><td>Từ chối mềm</td><td class="en">I'm afraid that would be difficult for us, but let's see what else we can do.</td></tr>
<tr><td>Câu giờ</td><td class="en">Let me check with my management and get back to you by Friday.</td></tr>
</table></div>
<div class="callout tip"><strong class="title">💡 Nguyên tắc đàm phán</strong>Không bao giờ nhượng bộ “miễn phí” — luôn gắn với điều kiện: <b>“If you…, then we…”</b>. Chuẩn bị trước <b>BATNA</b> (phương án tốt nhất nếu không đạt thỏa thuận) và giới hạn cuối cùng của mình.</div>
`,
      keyPoints: [
        'Điều phối họp: purpose – let’s start with – come back later – to sum up.',
        'Số liệu: increased from… to…, dropped by…%, compared to…',
        'Đàm phán: “provided that…”, “If you…, we could…”; luôn có BATNA.'
      ],
      apply: [
        'Chuẩn bị 3 câu tiếng Anh trình bày KPI chính của bộ phận bạn tháng này.',
        'Viết sẵn 1 câu nhượng bộ có điều kiện cho cuộc đàm phán sắp tới với khách hàng.'
      ],
      quiz: [
        { q: '“Provided that” có nghĩa gần nhất với?', options: ['Bởi vì', 'Với điều kiện là', 'Mặc dù', 'Sau khi'], answer: 1 },
        { q: 'BATNA là gì?', options: ['Một loại tàu', 'Phương án thay thế tốt nhất nếu không đạt thỏa thuận', 'Mức giá sàn của Nhà nước', 'Tên hợp đồng'], answer: 1 }
      ]
    },
    {
      id: 'an-toan-tieng-anh', title: 'Tiếng Anh an toàn & tín hiệu nâng hạ', minutes: 10,
      body: `
<h2>1. Lệnh tín hiệu nâng hạ</h2>
<div class="table-wrap"><table>
<tr><th>English</th><th>Tiếng Việt</th></tr>
<tr><td class="en">Hoist slowly.</td><td>Nâng từ từ.</td></tr>
<tr><td class="en">Lower.</td><td>Hạ xuống.</td></tr>
<tr><td class="en">Stop.</td><td>Dừng.</td></tr>
<tr><td class="en">Emergency stop!</td><td>Dừng khẩn cấp!</td></tr>
<tr><td class="en">Swing left. Swing right.</td><td>Quay trái. Quay phải.</td></tr>
<tr><td class="en">Boom up. Boom down.</td><td>Nâng cần. Hạ cần.</td></tr>
<tr><td class="en">Trolley in. Trolley out.</td><td>Xe con vào. Xe con ra.</td></tr>
<tr><td class="en">Take the weight.</td><td>Căng tải (nhận tải từ từ).</td></tr>
<tr><td class="en">Hold the load.</td><td>Giữ tải tại chỗ.</td></tr>
<tr><td class="en">Keep clear of the load!</td><td>Tránh xa tải!</td></tr>
<tr><td class="en">Never stand under a suspended load.</td><td>Không bao giờ đứng dưới tải đang treo.</td></tr>
</table></div>

<h2>2. Toolbox talk mẫu (2 phút)</h2>
<div class="formula">Good morning, everyone. Today we will lift a 120-tonne transformer using two mobile cranes.
The exclusion zone is marked with red barriers. Only the riggers and the lift supervisor may enter.
Wind limit is ten metres per second. If the wind exceeds the limit, we stop.
There is only one signalman: Mr. Nam. But anyone can call STOP if they see danger.
Any questions? … Let's work safely.</div>

<h2>3. Báo cáo sự cố</h2>
<ul>
<li><span class="en">There was a near miss at the gate this morning.</span> — Sáng nay có một sự cố suýt xảy ra tai nạn ở cổng.</li>
<li><span class="en">No one was injured.</span> — Không ai bị thương.</li>
<li><span class="en">The root cause is under investigation.</span> — Nguyên nhân gốc đang được điều tra.</li>
<li><span class="en">Corrective actions have been taken.</span> — Đã thực hiện biện pháp khắc phục.</li>
</ul>
`,
      keyPoints: [
        'Hoist / Lower / Stop / Emergency stop / Swing / Boom up-down / Trolley in-out.',
        '“Never stand under a suspended load.”',
        'Near miss = sự cố suýt xảy ra tai nạn; root cause = nguyên nhân gốc; corrective action = biện pháp khắc phục.'
      ],
      apply: [
        'Thực hiện một toolbox talk tiếng Anh 2 phút theo mẫu (tự luyện hoặc trước nhóm).',
        'In bảng lệnh tín hiệu Anh – Việt dán tại phòng điều độ.'
      ],
      quiz: [
        { q: '“Near miss” nghĩa là?', options: ['Bỏ lỡ chuyến tàu', 'Sự cố suýt xảy ra tai nạn', 'Mất hàng', 'Gần đến nơi'], answer: 1 },
        { q: '“Take the weight” trong nâng hạ nghĩa là?', options: ['Cân hàng', 'Căng tải, nhận tải từ từ', 'Hạ hàng', 'Tháo cáp'], answer: 1 },
        { q: '“Trolley out” là lệnh cho?', options: ['Xe con của cẩu chạy ra phía ngoài', 'Xe tải ra cổng', 'Hạ cần', 'Quay phải'], answer: 0 }
      ]
    }
  ]
});
