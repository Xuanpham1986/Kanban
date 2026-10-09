window.PA_DATA = window.PA_DATA || { modules: [], glossary: [] };
window.PA_DATA.modules.push({
  id: 'nang-ha', order: 5, icon: '🏋️', short: 'Nâng hạ siêu trọng',
  title: 'Nâng hạ hàng siêu trường siêu trọng',
  desc: 'Pháp luật an toàn thiết bị nâng, phụ kiện nâng (sling, ma ní), góc cáp, trọng tâm, bảng tải cẩu, nền đất, nâng kép, phương án nâng và chằng buộc.',
  intro: '<div class="callout danger"><strong class="title">⛔ Nguyên tắc tối thượng</strong>Không có lô hàng nào gấp đến mức phải đánh đổi mạng người. Mọi con số trong chuyên đề này để <b>hiểu và kiểm tra chéo</b> — quyết định cuối cùng phải dựa trên <b>bảng tải của nhà sản xuất, phương án nâng được phê duyệt và người có chuyên môn</b>.</div>',
  lessons: [
    {
      id: 'phap-ly-an-toan', title: 'Khung pháp lý an toàn thiết bị nâng tại Việt Nam', minutes: 12,
      source: 'Luật ATVSLĐ 84/2015/QH13; NĐ 44/2016/NĐ-CP; QCVN 7:2012/BLĐTBXH; TCVN 4244:2005',
      body: `
<h2>1. Văn bản cần nắm</h2>
<ul>
<li><b>Luật An toàn, vệ sinh lao động 2015</b> (84/2015/QH13): thiết bị nâng thuộc danh mục máy, thiết bị có <b>yêu cầu nghiêm ngặt về an toàn lao động</b> → phải <b>kiểm định</b> trước khi đưa vào sử dụng, định kỳ trong quá trình sử dụng và sau sửa chữa lớn.</li>
<li><b>Nghị định 44/2016/NĐ-CP</b> (đã sửa đổi): hoạt động kiểm định kỹ thuật an toàn lao động, <b>huấn luyện</b> ATVSLĐ. Người vận hành cẩu, người móc cáp/xi nhan thuộc nhóm làm công việc có yêu cầu nghiêm ngặt (nhóm 3) — phải được huấn luyện và cấp thẻ an toàn.</li>
<li><b>QCVN 7:2012/BLĐTBXH</b> — Quy chuẩn kỹ thuật quốc gia về an toàn lao động đối với thiết bị nâng.</li>
<li><b>TCVN 4244:2005</b> — Thiết bị nâng: thiết kế, chế tạo và kiểm tra kỹ thuật.</li>
<li>Danh mục máy, thiết bị có yêu cầu nghiêm ngặt do Bộ quản lý lĩnh vực lao động ban hành (thông tư, cập nhật định kỳ — kiểm tra bản hiện hành).</li>
<li>Thiết bị nâng trên tàu biển, cẩu nổi: còn chịu quy định đăng kiểm của <b>Cục Đăng kiểm</b> (quy chuẩn thiết bị nâng trên công trình biển/tàu).</li>
</ul>

<h2>2. Thử tải khi kiểm định (tham khảo theo quy chuẩn)</h2>
<div class="table-wrap"><table>
<tr><th>Loại thử</th><th>Tải thử</th><th>Mục đích</th></tr>
<tr><td>Thử tĩnh</td><td><b>125% tải trọng làm việc an toàn</b> (SWL)</td><td>Kiểm tra độ bền kết cấu, phanh giữ</td></tr>
<tr><td>Thử động</td><td><b>110% SWL</b></td><td>Kiểm tra cơ cấu khi vận hành (nâng, hạ, quay, di chuyển)</td></tr>
</table></div>

<h2>3. Trách nhiệm của người sử dụng lao động</h2>
<ul>
<li>Chỉ sử dụng thiết bị đã kiểm định, còn hạn, có tem/giấy chứng nhận kết quả kiểm định.</li>
<li>Bố trí người vận hành có chứng chỉ phù hợp, đã huấn luyện ATVSLĐ; khám sức khỏe định kỳ.</li>
<li>Xây dựng quy trình vận hành an toàn, nội quy; kiểm tra hằng ngày trước ca (pre-use check).</li>
<li>Khai báo, điều tra, báo cáo tai nạn lao động và sự cố kỹ thuật gây mất an toàn nghiêm trọng.</li>
</ul>
<div class="callout warn"><strong class="title">⚠️ Phụ kiện nâng cũng phải quản lý</strong>Cáp, xích, ma ní, móc, dầm nâng phải có <b>chứng chỉ</b> (certificate) ghi WLL, được đánh số nhận dạng, <b>kiểm tra định kỳ</b> (thường 6 tháng/lần với phụ kiện dùng thường xuyên theo thông lệ quốc tế) và kiểm tra bằng mắt trước mỗi lần dùng. Phụ kiện không có tag WLL = <b>không được dùng</b>.</div>
`,
      keyPoints: [
        'Thiết bị nâng có yêu cầu nghiêm ngặt về ATLĐ → kiểm định trước khi dùng, định kỳ, sau sửa chữa lớn.',
        'Người vận hành cẩu và người móc cáp/xi nhan phải được huấn luyện nhóm 3, có thẻ an toàn.',
        'Thử tĩnh 125% SWL, thử động 110% SWL.',
        'Phụ kiện nâng không có tag WLL/chứng chỉ thì không dùng.'
      ],
      apply: [
        'Lập/rà soát sổ theo dõi kiểm định toàn bộ thiết bị nâng: số hiệu, ngày kiểm định, ngày hết hạn, cảnh báo trước 30 ngày.',
        'Kiểm tra kho phụ kiện nâng: loại bỏ (cắt hủy) phụ kiện không có tag, hỏng, hết hạn kiểm tra.',
        'Kiểm tra danh sách thẻ an toàn nhóm 3 của lái cẩu và công nhân móc cáp còn hạn không.'
      ],
      quiz: [
        { q: 'Tải thử tĩnh khi kiểm định thiết bị nâng thường là?', options: ['100% SWL', '110% SWL', '125% SWL', '150% SWL'], answer: 2 },
        { q: 'Người móc cáp, xi nhan cẩu thuộc nhóm huấn luyện ATVSLĐ nào?', options: ['Nhóm 1', 'Nhóm 2', 'Nhóm 3', 'Không cần huấn luyện'], answer: 2 },
        { q: 'Phụ kiện nâng không có tag WLL thì xử lý thế nào?', options: ['Dùng cho hàng nhẹ', 'Ước lượng WLL theo kinh nghiệm', 'Không được dùng, cách ly/hủy', 'Dùng gấp đôi số lượng'], answer: 2 }
      ]
    },
    {
      id: 'phu-kien-nang', title: 'Phụ kiện nâng: cáp, xích, dây vải, ma ní, hệ số an toàn', minutes: 14,
      source: 'Thông lệ quốc tế ASME B30.9/B30.26, EN 13414, EN 1492, EN 818',
      body: `
<h2>1. Thuật ngữ tải trọng</h2>
<div class="table-wrap"><table>
<tr><th>Thuật ngữ</th><th>Ý nghĩa</th></tr>
<tr><td><b>WLL</b> (Working Load Limit) / <b>SWL</b> (Safe Working Load)</td><td>Tải trọng làm việc tối đa cho phép do nhà sản xuất quy định (ở cấu hình chuẩn — thường là treo thẳng đứng)</td></tr>
<tr><td><b>MBL / MBS</b> (Minimum Breaking Load)</td><td>Lực phá đứt tối thiểu</td></tr>
<tr><td><b>Hệ số an toàn</b> (Safety factor)</td><td>MBL / WLL</td></tr>
<tr><td><b>Proof load</b></td><td>Tải thử khi xuất xưởng (thường 2 × WLL với ma ní, móc)</td></tr>
</table></div>

<h2>2. Hệ số an toàn điển hình</h2>
<div class="table-wrap"><table>
<tr><th>Phụ kiện</th><th>Hệ số an toàn thường gặp</th><th>Kiểm tra loại bỏ (ví dụ dấu hiệu)</th></tr>
<tr><td>Cáp thép (wire rope sling)</td><td>5 : 1</td><td>Đứt sợi vượt giới hạn, xoắn gãy (kink), lồng đèn (birdcage), ăn mòn, dập bẹp, mối ép bị nứt</td></tr>
<tr><td>Xích hợp kim (Grade 80/100)</td><td>4 : 1</td><td>Mắt xích giãn dài &gt; giới hạn (thường ~5%), mòn, nứt, cong</td></tr>
<tr><td>Dây vải bản dẹt / dây tròn (polyester)</td><td>7 : 1 (EN 1492)</td><td>Rách, cắt, cháy, hóa chất, mất nhãn, sợi lõi lộ ra</td></tr>
<tr><td>Ma ní, móc (shackle, hook)</td><td>thường 5 : 1 – 6 : 1</td><td>Biến dạng, mòn &gt; 10%, chốt cong, ren hỏng, móc mở miệng &gt; 15% hoặc xoắn</td></tr>
</table></div>
<p class="meta">Màu dây vải theo EN 1492: tím 1 t, xanh lá 2 t, vàng 3 t, xám 4 t, đỏ 5 t, nâu 6 t, xanh dương 8 t, cam 10 t+ (WLL treo thẳng). Luôn đọc nhãn — màu chỉ để nhận diện nhanh.</p>

<h2>3. Các kiểu móc cáp và hệ số</h2>
<div class="table-wrap"><table>
<tr><th>Kiểu</th><th>Hệ số WLL so với treo thẳng</th><th>Ghi chú</th></tr>
<tr><td>Treo thẳng (vertical)</td><td>1,0</td><td>—</td></tr>
<tr><td>Thắt thòng lọng (choke)</td><td>~0,8 (cáp thép, dây vải)</td><td>Giảm thêm nếu góc thắt &lt; 120°</td></tr>
<tr><td>Ôm vòng chữ U (basket) thẳng đứng</td><td>2,0</td><td>Giảm theo góc nhánh; cần chống trượt</td></tr>
</table></div>

<h2>4. Ma ní (shackle)</h2>
<ul>
<li><b>Ma ní chữ D (dee/chain)</b>: chịu tải thẳng hàng. <b>Ma ní omega (bow/anchor)</b>: cho phép nhiều nhánh, tải lệch có giảm WLL.</li>
<li>Chốt phải vặn hết ren; với nâng lâu dài/ không giám sát dùng chốt bu lông – đai ốc – chốt chẻ (safety pin).</li>
<li><b>Không</b> để tải lên lệch tâm thân ma ní, không thay chốt bằng bu lông thường.</li>
</ul>

<h2>5. Bảo vệ cạnh sắc</h2>
<p>Cạnh sắc có thể cắt đứt dây vải tải trọng lớn chỉ trong tích tắc. Luôn dùng <b>đệm bảo vệ cạnh</b> (edge protector, ống bọc) khi dây tiếp xúc cạnh kim loại; với cáp thép, bán kính uốn quanh cạnh quá nhỏ làm giảm đáng kể sức chịu tải (tỷ số D/d).</p>
`,
      keyPoints: [
        'WLL do nhà sản xuất quy định; hệ số an toàn = MBL/WLL.',
        'Hệ số an toàn điển hình: cáp thép 5:1, xích 4:1, dây vải 7:1.',
        'Choke ≈ 0,8 WLL; basket thẳng đứng ≈ 2 WLL (trước khi xét góc).',
        'Dây vải + cạnh sắc = nguy hiểm: luôn có đệm bảo vệ.'
      ],
      apply: [
        'Kiểm tra 10 sling bất kỳ đang dùng: còn nhãn/tag WLL đọc được? Có dấu hiệu loại bỏ không?',
        'Bổ sung đệm bảo vệ cạnh vào bộ phụ kiện chuẩn cho mỗi tổ cẩu.',
        'Treo bảng màu dây vải EN 1492 và các dấu hiệu loại bỏ tại kho phụ kiện.'
      ],
      quiz: [
        { q: 'Hệ số an toàn điển hình của dây vải polyester theo EN 1492?', options: ['4:1', '5:1', '7:1', '10:1'], answer: 2 },
        { q: 'Kiểu móc choke (thắt thòng lọng) làm WLL giảm còn khoảng?', options: ['50%', '80%', '100%', '200%'], answer: 1 },
        { q: 'Dây vải màu vàng (EN 1492) có WLL treo thẳng là?', options: ['1 tấn', '2 tấn', '3 tấn', '5 tấn'], answer: 2 },
        { q: 'Biện pháp nào bắt buộc khi dây vải đi qua cạnh kim loại sắc?', options: ['Bôi mỡ', 'Dùng đệm bảo vệ cạnh', 'Giảm tốc độ nâng', 'Dùng dây ngắn hơn'], answer: 1 }
      ]
    },
    {
      id: 'goc-cap-trong-tam', title: 'Góc cáp, trọng tâm & lực trên từng nhánh', minutes: 15,
      body: `
<h2>1. Góc cáp làm tăng lực — công thức cốt lõi</h2>
<div class="formula">Lực mỗi nhánh = (W / n) × 1 / sin(α)
W: khối lượng hàng, n: số nhánh chịu lực, α: góc nhánh so với phương NGANG</div>
<div class="table-wrap"><table>
<tr><th>Góc so với phương ngang</th><th>Hệ số 1/sin(α)</th><th>Lực mỗi nhánh khi nâng 10 t bằng 2 nhánh</th><th>Đánh giá</th></tr>
<tr><td>90° (thẳng đứng)</td><td>1,000</td><td>5,0 t</td><td>Lý tưởng</td></tr>
<tr><td>60°</td><td>1,155</td><td>5,8 t</td><td>Khuyến nghị</td></tr>
<tr><td>45°</td><td>1,414</td><td>7,1 t</td><td>Chấp nhận được</td></tr>
<tr><td>30°</td><td>2,000</td><td>10,0 t</td><td>Giới hạn — tránh</td></tr>
<tr><td>15°</td><td>3,864</td><td>19,3 t</td><td>⛔ Cấm</td></tr>
</table></div>
<p>Góc nhỏ còn tạo <b>lực ép ngang</b> vào hàng (có thể làm móp kết cấu) và lực kéo lệch lên tai cẩu (padeye). Dùng công cụ “Lực căng cáp sling” để tính nhanh.</p>

<h2>2. Quy tắc với cáp 3–4 nhánh</h2>
<p>Với hàng cứng (kiện máy, container), tải <b>không chia đều</b> cho 4 nhánh vì chiều dài cáp và điểm cẩu không bao giờ tuyệt đối bằng nhau. Thông lệ an toàn: <b>tính như chỉ có 2 nhánh chịu toàn bộ tải</b> (một số tiêu chuẩn cho phép 3 nhánh với cấu hình đặc biệt). Nếu cần chia đều thật sự: dùng <b>dầm cân bằng</b>, <b>pa lăng xích điều chỉnh</b> hoặc <b>khung nâng</b>.</p>

<h2>3. Trọng tâm (Center of Gravity – CoG)</h2>
<ul>
<li>Móc cẩu phải nằm <b>thẳng đứng phía trên trọng tâm</b> — nếu không hàng sẽ nghiêng, xoay và tải dồn về nhánh gần CoG hơn.</li>
<li>Hàng siêu trọng thường có ký hiệu CoG (⊕) trên kiện và trong bản vẽ; kiểm tra chéo với danh sách đóng gói (packing list) và bản vẽ nâng của nhà sản xuất.</li>
<li><b>Nâng thử</b>: nâng cách mặt đất 100–300 mm, dừng lại, kiểm tra cân bằng, phanh, sling, nền — rồi mới nâng tiếp.</li>
</ul>
<div class="formula">Phân bố tải khi CoG lệch (2 điểm cẩu cách CoG lần lượt a và b):
Tải tại điểm A = W × b / (a + b)    Tải tại điểm B = W × a / (a + b)</div>
<p><b>Ví dụ:</b> Máy biến áp 120 t, hai điểm cẩu cách CoG lần lượt 2 m và 3 m → điểm gần (2 m) chịu 120 × 3/5 = <b>72 t</b>, điểm xa chịu <b>48 t</b>. Nếu chọn sling 60 t cho mỗi bên vì nghĩ “chia đều” → quá tải 20%.</p>

<h2>4. Dầm nâng (lifting beam) vs thanh dàn (spreader bar)</h2>
<div class="table-wrap"><table>
<tr><th></th><th>Lifting beam</th><th>Spreader bar</th></tr>
<tr><td>Chịu lực</td><td>Uốn (bending) — 1 điểm treo phía trên</td><td>Nén (compression) — 2 nhánh cáp phía trên tạo góc</td></tr>
<tr><td>Chiều cao</td><td>Tiết kiệm chiều cao nâng</td><td>Cần chiều cao cho cáp phía trên</td></tr>
<tr><td>Trọng lượng</td><td>Nặng hơn</td><td>Nhẹ hơn với cùng tải</td></tr>
<tr><td>Dùng khi</td><td>Hạn chế chiều cao, hàng dài</td><td>Hàng rộng, cần chuyển lực cáp thành thẳng đứng xuống hàng</td></tr>
</table></div>
<p>Trọng lượng dầm/khung nâng, móc, sling <b>phải cộng vào tải</b> khi tra bảng tải cẩu.</p>
`,
      keyPoints: [
        'Lực mỗi nhánh = (W/n)/sin(α), α so với phương ngang; 60° → ×1,155; 45° → ×1,414; 30° → ×2.',
        'Cáp 4 nhánh với hàng cứng: tính như 2 nhánh chịu toàn tải.',
        'Móc phải thẳng trên trọng tâm; CoG lệch → điểm gần CoG chịu tải lớn hơn: W × b/(a+b).',
        'Luôn nâng thử 100–300 mm rồi dừng kiểm tra.'
      ],
      apply: [
        'Dùng công cụ tính lực sling kiểm tra lại cấu hình móc cáp của 1 lô hàng nặng gần nhất.',
        'Bổ sung bước “nâng thử – dừng – kiểm tra” vào quy trình nâng hàng nặng nếu chưa có.',
        'Tạo bảng tra nhanh hệ số góc cáp, dán trong cabin cẩu/xe dụng cụ.'
      ],
      quiz: [
        { q: 'Nâng 20 t bằng 2 nhánh cáp, mỗi nhánh 60° so với phương ngang. Lực mỗi nhánh ≈ ?', options: ['10 t', '11,5 t', '14,1 t', '20 t'], answer: 1, explain: '20/2 × 1,155 ≈ 11,5 t.' },
        { q: 'Nâng hàng cứng bằng sling 4 nhánh, thông lệ an toàn tính như bao nhiêu nhánh chịu tải?', options: ['4', '3', '2', '1'], answer: 2 },
        { q: 'Hàng 100 t, điểm cẩu A cách CoG 1 m, điểm B cách CoG 4 m. Điểm A chịu?', options: ['20 t', '50 t', '80 t', '100 t'], answer: 2, explain: 'Tải tại A = W × b/(a+b) = 100 × 4/5 = 80 t.' },
        { q: 'Góc cáp 30° so với phương ngang làm lực mỗi nhánh tăng bao nhiêu lần so với treo thẳng?', options: ['1,15', '1,41', '2,0', '3,0'], answer: 2 }
      ]
    },
    {
      id: 'bang-tai-nen', title: 'Đọc bảng tải cẩu (load chart) & kiểm tra nền đất', minutes: 15,
      body: `
<h2>1. Các yếu tố trong bảng tải cẩu di động/bánh xích</h2>
<ul>
<li><b>Bán kính làm việc (radius)</b>: khoảng cách ngang từ tâm quay đến tâm móc — <b>không phải chiều dài cần</b>. Bán kính tăng → sức nâng giảm rất nhanh.</li>
<li><b>Chiều dài cần (boom length)</b>, góc cần, có/không có cần phụ (jib).</li>
<li><b>Cấu hình đối trọng</b>, <b>chân chống</b> (mở hết/mở một phần) hoặc trên lốp.</li>
<li><b>Vùng làm việc</b>: 360°, phía sau, phía hông — sức nâng khác nhau.</li>
<li>Giá trị trong bảng thường là <b>tổng tải</b> — gồm hàng + móc + cáp + dầm nâng + phụ kiện (đọc ghi chú của nhà sản xuất: có hãng đã trừ trọng lượng móc chính).</li>
</ul>
<div class="formula">Tổng tải cần nâng = Hàng + Móc (hook block) + Sling/ma ní + Dầm/khung nâng + Cáp tời phần thừa (nếu nhà sản xuất yêu cầu)
Mức sử dụng (%) = Tổng tải / Sức nâng tại bán kính lớn nhất trong quá trình nâng × 100%</div>

<h2>2. Ngưỡng phân loại nâng (thông lệ)</h2>
<div class="table-wrap"><table>
<tr><th>Mức sử dụng bảng tải</th><th>Phân loại</th><th>Yêu cầu</th></tr>
<tr><td>&lt; 75%</td><td>Nâng thông thường</td><td>Quy trình chuẩn, JSA</td></tr>
<tr><td>75 – 90%</td><td>Nâng quan trọng (critical lift)</td><td>Phương án nâng bằng văn bản, phê duyệt kỹ thuật, giám sát nâng có chuyên môn</td></tr>
<tr><td>&gt; 90%</td><td>Rất cao</td><td>Chỉ thực hiện khi có đánh giá kỹ thuật đặc biệt, thường phải đổi cẩu lớn hơn</td></tr>
</table></div>
<p class="meta">Các doanh nghiệp/ dự án có thể đặt ngưỡng khác (ví dụ critical lift từ 80%). Tuân theo quy định nội bộ và yêu cầu của chủ đầu tư.</p>

<h2>3. Ảnh hưởng của gió</h2>
<ul>
<li>Hàng có diện tích chắn gió lớn (cánh quạt gió, vách panel, bồn) chịu lực gió đáng kể → lắc, xoay, tăng tải động.</li>
<li>Tốc độ gió giới hạn do <b>nhà sản xuất cẩu</b> quy định (thường quanh 9–14 m/s cho cẩu di động, thấp hơn với hàng diện tích lớn). Đo gió <b>ở độ cao đỉnh cần</b>, không phải dưới mặt đất — gió trên cao mạnh hơn.</li>
<li>Luôn dùng <b>dây lèo (tag line)</b> để kiểm soát xoay; không ai đứng dưới tải.</li>
</ul>

<h2>4. Áp lực lên nền (Ground bearing pressure)</h2>
<div class="formula">Áp lực (kPa) = Lực lên chân chống (kN) / Diện tích tấm kê (m²)
1 tấn ≈ 9,81 kN</div>
<p><b>Ví dụ:</b> Cẩu 60 t + hàng 25 t; ước tính chân chống chịu tải lớn nhất ~75% × 85 = 63,75 t ≈ 625 kN. Tấm kê 1,5 × 1,5 m = 2,25 m² → áp lực ≈ <b>278 kPa</b>. Nếu nền chỉ chịu 200 kPa → cần tấm kê ≥ 3,13 m² (≈ 1,8 × 1,8 m) hoặc dùng tấm thép/gỗ ghép lớn hơn.</p>
<div class="callout danger"><strong class="title">⛔ Nguy hiểm tiềm ẩn</strong>Hố ga, cống ngầm, đường ống, mép kè, nền mới đắp, nền sau mưa lớn. Phải khảo sát, hỏi bản vẽ hạ tầng, giữ khoảng cách tới mép kè/mương (thông lệ: ≥ 1 lần chiều sâu hố tính từ chân hố, hoặc theo đánh giá kỹ thuật).</div>

<h2>5. Khoảng cách an toàn đường dây điện</h2>
<p>Không để bất kỳ phần nào của cẩu, cáp, hàng tiến vào vùng nguy hiểm của đường dây điện. Khoảng cách tối thiểu phụ thuộc cấp điện áp (theo quy định bảo vệ an toàn công trình lưới điện cao áp). Khi không chắc — <b>yêu cầu cắt điện</b> hoặc bố trí người cảnh giới chuyên trách.</p>
`,
      keyPoints: [
        'Bán kính = khoảng cách ngang tâm quay → tâm móc; sức nâng giảm mạnh theo bán kính.',
        'Tổng tải = hàng + móc + sling + dầm + phụ kiện; tra tại bán kính lớn nhất trong cả hành trình.',
        'Thông lệ: > 75% bảng tải = critical lift → phương án nâng văn bản + phê duyệt.',
        'Áp lực nền = lực chân chống / diện tích tấm kê; cẩn thận hố ga, mép kè, nền sau mưa.'
      ],
      apply: [
        'Lấy 1 lần nâng gần nhất, tự tính lại tổng tải và % sử dụng bảng tải tại bán kính lớn nhất.',
        'Dùng công cụ “Áp lực chân chống” kiểm tra kích thước tấm kê đang dùng với cẩu lớn nhất ở cảng.',
        'Đánh dấu trên sơ đồ bãi các vị trí hố ga, cống ngầm, khu nền yếu — cấm đặt chân chống.'
      ],
      quiz: [
        { q: 'Bán kính làm việc của cẩu là?', options: ['Chiều dài cần', 'Khoảng cách ngang từ tâm quay đến tâm móc', 'Chiều cao nâng', 'Khoảng cách giữa hai chân chống'], answer: 1 },
        { q: 'Tổng tải tra bảng tải gồm những gì?', options: ['Chỉ trọng lượng hàng', 'Hàng + móc + sling/ma ní + dầm nâng + phụ kiện', 'Hàng + đối trọng', 'Chỉ trọng lượng móc'], answer: 1 },
        { q: 'Lực 500 kN đặt lên tấm kê 2 m² tạo áp lực?', options: ['100 kPa', '250 kPa', '500 kPa', '1000 kPa'], answer: 1 },
        { q: 'Tốc độ gió nên được đo ở đâu khi nâng hàng diện tích lớn?', options: ['Mặt đất', 'Ở độ cao đỉnh cần/ độ cao của hàng', 'Trong cabin', 'Không cần đo'], answer: 1 }
      ]
    },
    {
      id: 'nang-kep-phuong-an', title: 'Nâng kép (tandem), phương án nâng & vai trò các vị trí', minutes: 15,
      body: `
<h2>1. Nâng kép bằng hai cẩu (tandem/dual lift)</h2>
<p>Dùng khi hàng quá nặng/dài cho một cẩu, hoặc cần lật hàng (tailing — một cẩu nâng đầu, một cẩu giữ đuôi khi dựng đứng thiết bị).</p>
<ul>
<li>Thông lệ: mỗi cẩu chỉ khai thác <b>tối đa 75–80%</b> sức nâng theo bảng tải tại cấu hình đó (dự phòng cho phân bố tải thay đổi khi hàng nghiêng, cẩu không đồng tốc).</li>
<li>Tính tải mỗi cẩu theo vị trí trọng tâm (công thức đòn bẩy) — <b>khi hàng nghiêng, CoG dịch chuyển</b> và tải chuyển dần sang cẩu thấp hơn.</li>
<li>Cáp tời phải luôn <b>thẳng đứng</b>; hạn chế quay/ di chuyển đồng thời; chỉ một người chỉ huy duy nhất.</li>
<li>Ưu tiên cẩu có cùng tính năng; có <b>hệ thống chỉ báo tải (LMI/RCI)</b> hoạt động tốt.</li>
</ul>

<h2>2. Nội dung tối thiểu của một phương án nâng (Lift Plan / Method Statement)</h2>
<ol>
<li>Thông tin hàng: kích thước, khối lượng (được xác minh), trọng tâm, điểm cẩu, bản vẽ.</li>
<li>Thiết bị: loại cẩu, cấu hình (cần, đối trọng, chân chống), bảng tải, bán kính đầu/cuối, % sử dụng.</li>
<li>Phụ kiện: danh sách, WLL, chứng chỉ, sơ đồ móc cáp, tính lực mỗi nhánh.</li>
<li>Mặt bằng: vị trí cẩu, đường di chuyển, áp lực nền & tấm kê, chướng ngại vật, đường dây điện, vùng loại trừ (exclusion zone).</li>
<li>Điều kiện thời tiết giới hạn (gió, mưa, tầm nhìn), giờ làm việc.</li>
<li>Trình tự thực hiện từng bước, điểm dừng kiểm tra (hold points), nâng thử.</li>
<li>Nhân sự & trách nhiệm, phương tiện liên lạc (bộ đàm, kênh riêng), tín hiệu tay.</li>
<li>Phân tích rủi ro (JSA/HIRA) và kế hoạch ứng phó khẩn cấp (bao gồm trường hợp hàng treo lơ lửng khi cẩu sự cố).</li>
<li>Chữ ký lập – kiểm tra – phê duyệt; họp triển khai (toolbox talk) trước khi nâng.</li>
</ol>

<h2>3. Vai trò trong tổ nâng</h2>
<div class="table-wrap"><table>
<tr><th>Vị trí</th><th>Trách nhiệm chính</th></tr>
<tr><td>Người lập phương án / kỹ sư nâng (Lift planner)</td><td>Tính toán, lập phương án, chọn thiết bị</td></tr>
<tr><td>Giám sát nâng (Lift supervisor / Person in charge)</td><td>Chỉ đạo hiện trường, quyết định dừng/tiếp tục, đảm bảo đúng phương án</td></tr>
<tr><td>Người vận hành cẩu</td><td>Vận hành an toàn, có quyền <b>từ chối</b> nâng khi thấy không an toàn</td></tr>
<tr><td>Người móc cáp (rigger)</td><td>Chọn, kiểm tra, lắp đặt phụ kiện đúng sơ đồ</td></tr>
<tr><td>Người ra tín hiệu (signalman/banksman)</td><td>Duy nhất một người ra tín hiệu tại mỗi thời điểm, luôn trong tầm nhìn/ liên lạc với lái cẩu</td></tr>
</table></div>
<div class="callout tip"><strong class="title">💡 Quyền dừng công việc (Stop Work Authority)</strong>Bất kỳ ai thấy nguy hiểm đều có quyền và nghĩa vụ hô <b>“DỪNG”</b> — và tín hiệu dừng khẩn cấp phải được tuân thủ ngay, bất kể ai ra hiệu. Nhà quản lý phải bảo vệ người dừng công việc, kể cả khi sau đó xác định là không cần thiết.</div>

<h2>4. Hàng siêu trường siêu trọng qua cảng — chuỗi việc cần phối hợp</h2>
<ul>
<li><b>Trước khi tàu đến</b>: nhận bản vẽ, khối lượng, CoG; khảo sát cầu tàu (tải trọng cho phép trên mặt cầu — kN/m²), tuyến vận chuyển trong cảng; chọn phương án: cẩu tàu (heavy-lift derrick), cẩu bờ, cẩu nổi, hay Ro-Ro bằng SPMT/ rơ moóc thủy lực.</li>
<li><b>Vận chuyển đường bộ ra khỏi cảng</b>: giấy phép lưu hành xe quá tải, quá khổ; khảo sát cầu, cống, đường dây trên tuyến (theo quy định của Bộ quản lý giao thông đường bộ hiện hành).</li>
<li><b>Bằng sà lan</b>: tính ổn định sà lan khi hàng nặng xếp lên (đặc biệt khi cẩu từ bờ xuống sà lan — sà lan nghiêng, chìm thêm); phương án dằn (ballast) và chằng buộc.</li>
<li><b>Hải quan</b>: có thể đăng ký kiểm tra tại chân công trình; phối hợp sớm để không phải hạ bãi rồi nâng lại.</li>
</ul>
`,
      keyPoints: [
        'Nâng kép: mỗi cẩu ≤ 75–80% bảng tải; cáp luôn thẳng đứng; một người chỉ huy duy nhất.',
        'Phương án nâng: hàng – thiết bị – phụ kiện – mặt bằng – thời tiết – trình tự – nhân sự – rủi ro – phê duyệt.',
        'Chỉ một người ra tín hiệu; ai cũng có quyền hô DỪNG.',
        'Hàng siêu trọng: kiểm tra tải trọng mặt cầu tàu, tuyến vận chuyển, ổn định sà lan, giấy phép quá khổ quá tải.'
      ],
      apply: [
        'Đối chiếu mẫu phương án nâng hiện hành của công ty với 9 nội dung tối thiểu — bổ sung mục còn thiếu.',
        'Kiểm tra hồ sơ tải trọng cho phép trên mặt cầu tàu/bãi (kN/m²) đã có và còn hiệu lực chưa.',
        'Tổ chức tuyên bố chính thức “Quyền dừng công việc” trong buổi họp an toàn gần nhất.'
      ],
      quiz: [
        { q: 'Trong nâng kép, mỗi cẩu thường chỉ được khai thác tối đa khoảng?', options: ['50%', '75–80%', '95%', '100%'], answer: 1 },
        { q: 'Khi nâng, có bao nhiêu người được ra tín hiệu cho lái cẩu tại một thời điểm?', options: ['Một người duy nhất', 'Hai người', 'Bất kỳ ai', 'Cả tổ'], answer: 0, explain: 'Riêng tín hiệu DỪNG KHẨN CẤP thì phải tuân theo từ bất kỳ ai.' },
        { q: 'Khi cẩu hàng nặng từ bờ xuống sà lan, yếu tố cần tính thêm là?', options: ['Màu sơn sà lan', 'Ổn định và mớn nước sà lan thay đổi trong quá trình hạ', 'Tên thuyền trưởng', 'Không cần tính'], answer: 1 }
      ]
    },
    {
      id: 'chang-buoc', title: 'Chằng buộc hàng trên tàu, sà lan, rơ moóc', minutes: 12,
      source: 'IMO CSS Code (Code of Safe Practice for Cargo Stowage and Securing), Phụ lục 13',
      body: `
<h2>1. Lực tác động khi vận chuyển</h2>
<p>Trên biển, hàng chịu gia tốc do tàu lắc ngang (rolling), chúi (pitching), chòng chành lên xuống (heaving), cộng với gió và sóng tràn boong. Lực ngang có thể đạt <b>0,5–1,0 lần trọng lượng hàng</b> tùy vị trí trên tàu (cao, xa tâm, phía mũi càng lớn).</p>

<h2>2. MSL — Maximum Securing Load</h2>
<p>Theo CSS Code, mỗi thiết bị chằng buộc có <b>MSL</b> — tải trọng tối đa cho phép khi dùng chằng buộc. Ví dụ tham khảo trong CSS Code:</p>
<div class="table-wrap"><table>
<tr><th>Vật liệu</th><th>MSL (so với lực phá đứt – MBL)</th></tr>
<tr><td>Ma ní, khóa, tăng đơ, xích thép (mild steel)</td><td>50% MBL</td></tr>
<tr><td>Cáp thép (dùng một lần)</td><td>80% MBL</td></tr>
<tr><td>Cáp thép (dùng lại)</td><td>30% MBL</td></tr>
<tr><td>Đai vải (web lashing)</td><td>50% MBL</td></tr>
<tr><td>Dây sợi (fibre rope)</td><td>33% MBL</td></tr>
</table></div>

<h2>3. Quy tắc kinh nghiệm (Rule of thumb) — CSS Phụ lục 13</h2>
<div class="formula">Tổng MSL của các dây chằng ở MỖI BÊN (mạn trái và mạn phải) của kiện hàng ≥ Trọng lượng kiện hàng</div>
<p><b>Ví dụ:</b> Kiện 80 t, dùng tăng đơ – xích MSL 10 t → cần ≥ 8 dây mỗi bên (16 dây tổng). Thử với công cụ “Chằng buộc hàng”. Quy tắc này dùng khi không có tính toán chi tiết; hàng nặng đặc biệt cần tính theo phương pháp chi tiết trong Cargo Securing Manual của tàu.</p>

<h2>4. Nguyên tắc thực hành</h2>
<ul>
<li>Góc dây chằng hợp lý: khoảng <b>30–60°</b> so với sàn — góc dốc chống lật tốt, góc thoải chống trượt tốt; kết hợp cả hai.</li>
<li>Dây chằng đối xứng; dây cùng chức năng phải <b>cùng độ cứng</b> (không trộn xích với đai vải trên cùng hướng — dây cứng sẽ chịu hết tải).</li>
<li>Chèn hãm (chock, cleat hàn) chống trượt dọc/ngang; vật liệu kê tăng ma sát (gỗ, cao su chống trượt).</li>
<li>Kiểm tra lại độ căng sau khi tàu/sà lan chạy một đoạn hoặc sau thời tiết xấu.</li>
<li>Trên rơ moóc đường bộ: theo hướng dẫn chằng buộc đường bộ (tham khảo EN 12195) — hàng phải chống trượt theo hướng phía trước ~0,8 lần trọng lượng, ngang và sau ~0,5 lần.</li>
</ul>
`,
      keyPoints: [
        'MSL: cáp thép dùng một lần 80% MBL; xích/ma ní/tăng đơ 50%; dây sợi 33%.',
        'Quy tắc CSS: tổng MSL mỗi bên ≥ trọng lượng kiện.',
        'Góc dây 30–60°; không trộn dây khác độ cứng cùng chức năng; dùng chock chống trượt.',
        'Kiểm tra lại độ căng sau khi chạy một đoạn hoặc thời tiết xấu.'
      ],
      apply: [
        'Kiểm tra 1 lô hàng nặng xếp sà lan/rơ moóc gần nhất bằng công cụ “Chằng buộc hàng”.',
        'Bổ sung bước “kiểm tra lại chằng buộc” vào checklist bàn giao sà lan chở hàng siêu trọng.'
      ],
      quiz: [
        { q: 'Theo quy tắc kinh nghiệm CSS Code, tổng MSL dây chằng mỗi bên phải?', options: ['≥ 50% trọng lượng kiện', '≥ trọng lượng kiện', '≥ 2 lần trọng lượng kiện', 'Không có quy tắc'], answer: 1 },
        { q: 'MSL của xích, ma ní, tăng đơ theo CSS Code là?', options: ['30% MBL', '50% MBL', '80% MBL', '100% MBL'], answer: 1 },
        { q: 'Vì sao không nên trộn xích và đai vải cùng một hướng chằng?', options: ['Khác màu', 'Độ cứng khác nhau — dây cứng sẽ chịu gần hết tải', 'Tốn tiền', 'Không có lý do'], answer: 1 }
      ]
    }
  ]
});
