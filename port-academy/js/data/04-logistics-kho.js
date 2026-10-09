window.PA_DATA = window.PA_DATA || { modules: [], glossary: [] };
window.PA_DATA.modules.push({
  id: 'logistics-kho', order: 4, icon: '🏗️', short: 'Logistics kho bãi',
  title: 'Quản trị logistics kho bãi ngành cảng',
  desc: 'Dòng chảy hàng hóa, quy hoạch bãi container, quản lý kho, KPI khai thác, Lean – Kaizen, TOS/EDI và hàng rời – bách hóa.',
  intro: '<p>Một cảng là một <b>hệ thống xếp hàng đợi</b> gồm ba điểm nghẽn: <b>cầu tàu (quay) – bãi (yard) – cổng (gate)</b>. Năng suất toàn cảng bằng năng suất của điểm nghẽn yếu nhất. Nhà quản lý giỏi luôn biết hôm nay điểm nghẽn đang nằm ở đâu.</p>',
  lessons: [
    {
      id: 'dong-chay', title: 'Dòng chảy hàng hóa & thiết bị tại cảng', minutes: 12,
      body: `
<h2>1. Ba phân hệ của cảng container</h2>
<div class="table-wrap"><table>
<tr><th>Phân hệ</th><th>Hoạt động</th><th>Thiết bị chính</th><th>Chỉ số then chốt</th></tr>
<tr><td><b>Cầu tàu (Quay side)</b></td><td>Xếp/dỡ container giữa tàu và xe nội bộ</td><td>Cẩu bờ STS (Ship-to-Shore), cẩu di động MHC</td><td>Năng suất cẩu (moves/giờ), thời gian tàu tại cầu</td></tr>
<tr><td><b>Bãi (Yard)</b></td><td>Lưu, sắp xếp, đảo chuyển container</td><td>RTG, RMG, reach stacker, xe nâng vỏ rỗng (empty handler), xe đầu kéo nội bộ</td><td>Hệ số sử dụng bãi, dwell time, tỷ lệ đảo chuyển</td></tr>
<tr><td><b>Cổng (Gate)</b></td><td>Giao nhận với xe ngoài, kiểm tra chứng từ, seal, tình trạng vỏ</td><td>Cổng tự động (OCR, RFID), cân</td><td>Thời gian xe quay vòng (truck turnaround time)</td></tr>
</table></div>

<h2>2. Các loại hàng và đặc thù</h2>
<ul>
<li><b>Container</b> (hàng khô, lạnh – reefer, hàng nguy hiểm, OOG – quá khổ).</li>
<li><b>Hàng rời</b> (dry bulk: than, clinker, quặng, ngũ cốc; liquid bulk: xăng dầu, hóa chất).</li>
<li><b>Hàng bách hóa / breakbulk</b> (thép cuộn, thép tấm, gỗ, bao kiện).</li>
<li><b>Hàng Ro-Ro</b> (ô tô, xe máy chuyên dùng — tự lăn lên/xuống tàu).</li>
<li><b>Hàng dự án, siêu trường siêu trọng</b> (thiết bị nhà máy, cánh quạt gió, máy biến áp) — xem chuyên đề Nâng hạ.</li>
</ul>

<h2>3. Thiết bị bãi — chọn đúng công cụ</h2>
<div class="table-wrap"><table>
<tr><th>Thiết bị</th><th>Ưu điểm</th><th>Hạn chế</th></tr>
<tr><td>RTG (cẩu khung bánh lốp)</td><td>Mật độ xếp cao (5–6 hàng × 4–6 tầng), linh hoạt di chuyển giữa block</td><td>Đầu tư lớn, cần nền bãi tốt, tốn nhiên liệu (trừ e-RTG)</td></tr>
<tr><td>RMG / ASC (cẩu khung chạy ray)</td><td>Tự động hóa tốt, năng suất ổn định, điện hóa</td><td>Cố định, đầu tư hạ tầng ray rất lớn</td></tr>
<tr><td>Reach stacker</td><td>Linh hoạt, đầu tư thấp, phù hợp cảng nhỏ/ICD, xếp hàng OOG</td><td>Mật độ thấp (cần lối đi), áp lực bánh lên nền rất lớn, tiếp cận hàng thứ 2–3 hạn chế</td></tr>
<tr><td>Empty handler</td><td>Xếp vỏ rỗng cao 6–8 tầng, rẻ</td><td>Chỉ nâng container rỗng</td></tr>
<tr><td>Xe nâng (forklift)</td><td>Kho, đóng rút hàng, hàng bách hóa</td><td>Tải trọng giảm theo tâm tải và chiều cao nâng</td></tr>
</table></div>

<h2>4. Tư duy hệ thống: lý thuyết điểm nghẽn (TOC)</h2>
<ol>
<li><b>Xác định</b> điểm nghẽn (ví dụ: xe nội bộ không theo kịp STS).</li>
<li><b>Khai thác tối đa</b> điểm nghẽn (không để STS chờ xe: điều phối xe hợp lý, dual-cycling).</li>
<li><b>Điều phối mọi thứ khác theo</b> điểm nghẽn.</li>
<li><b>Nâng cấp</b> điểm nghẽn (thêm xe, thêm RTG).</li>
<li><b>Lặp lại</b> — điểm nghẽn sẽ dịch chuyển.</li>
</ol>
<div class="callout tip"><strong class="title">💡 Câu hỏi hằng ngày của trưởng ca</strong>“Trong ca này, thiết bị nào đang <b>chờ</b> nhiều nhất và thiết bị nào khiến người khác phải <b>chờ</b> nhiều nhất?” — câu trả lời thứ hai chính là điểm nghẽn.</div>
`,
      keyPoints: [
        'Cảng = Cầu tàu + Bãi + Cổng; năng suất toàn cảng = năng suất điểm nghẽn.',
        'Chọn thiết bị theo mật độ, linh hoạt, chi phí và nền bãi.',
        'Áp dụng 5 bước TOC: xác định – khai thác – điều phối – nâng cấp – lặp lại.'
      ],
      apply: [
        'Trong 3 ca tới, ghi lại thời gian STS phải chờ xe nội bộ và thời gian xe chờ RTG. Điểm nghẽn ở đâu?',
        'Vẽ sơ đồ dòng chảy hàng nhập từ cầu tàu → bãi → cổng của cảng bạn, đánh dấu các điểm chờ.'
      ],
      quiz: [
        { q: 'Thiết bị nào phù hợp nhất để xếp container rỗng cao nhiều tầng với chi phí thấp?', options: ['STS', 'Empty handler', 'RMG', 'Cẩu nổi'], answer: 1 },
        { q: 'Theo lý thuyết điểm nghẽn, bước thứ 2 là gì?', options: ['Mua thêm thiết bị', 'Khai thác tối đa điểm nghẽn hiện có', 'Thuê tư vấn', 'Tăng giá dịch vụ'], answer: 1 },
        { q: 'Hạn chế lớn của reach stacker so với RTG?', options: ['Không nâng được container 40 feet', 'Mật độ xếp thấp do cần lối đi', 'Không thể di chuyển', 'Chỉ làm được hàng rỗng'], answer: 1 }
      ]
    },
    {
      id: 'quy-hoach-bai', title: 'Quy hoạch & kế hoạch bãi container: giảm đảo chuyển', minutes: 15,
      body: `
<h2>1. Hệ tọa độ vị trí container</h2>
<p>Vị trí trong bãi thường mã hóa: <b>Block – Bay – Row – Tier</b> (Khu – Hàng ngang – Hàng dọc – Tầng). Ví dụ <code>A1-23-04-3</code>. Trên tàu: <b>Bay – Row – Tier</b> (ví dụ <code>230482</code>: bay 23, row 04, tier 82 trên boong).</p>

<h2>2. Nguyên tắc phân khu</h2>
<ul>
<li>Tách riêng: <b>hàng xuất – hàng nhập – vỏ rỗng – lạnh – nguy hiểm – OOG – hàng tạm giữ/kiểm hóa</b>.</li>
<li>Hàng xuất gom theo <b>tàu → cảng đích (POD) → cỡ (20/40/45) → nhóm trọng lượng</b> để bốc theo kế hoạch xếp tàu không phải đảo.</li>
<li>Hàng nhập: gom theo tàu, ưu tiên khu gần cổng cho hàng dự kiến lấy nhanh (luồng xanh, khách hàng lớn), khu xa cho hàng dự kiến lưu lâu.</li>
<li>Vỏ rỗng: gom theo <b>hãng tàu – loại vỏ – tình trạng</b> (sạch/bẩn/hỏng).</li>
</ul>

<h2>3. Đảo chuyển (rehandle/shifting) — kẻ thù số một của năng suất</h2>
<p>Mỗi lần phải nhấc container phía trên để lấy container phía dưới là một <b>move không tạo doanh thu</b>. Tỷ lệ đảo chuyển 30–50% là phổ biến ở bãi quản lý kém.</p>
<div class="formula">Tỷ lệ đảo chuyển = Số move đảo chuyển / Số move tạo doanh thu × 100%</div>
<p>Cách giảm:</p>
<ul>
<li><b>Hàng xuất</b>: xếp theo <b>thứ tự bốc lên tàu</b> — container bốc trước nằm trên. Vì kế hoạch xếp tàu thường đặt container nặng ở dưới (bốc trước), nên trong bãi xuất container nặng nên nằm ở <b>tầng trên</b>, ngược với trực giác “nặng để dưới”.</li>
<li><b>Hàng nhập</b>: không biết trước thứ tự lấy → giới hạn chiều cao xếp, dùng dữ liệu lịch sử (khách hàng nào lấy nhanh), hẹn giờ lấy hàng (Truck Appointment System).</li>
<li><b>Housekeeping/remarshalling</b>: đảo chuyển chủ động vào giờ thấp điểm (ban đêm) để chuẩn bị cho tàu/cao điểm.</li>
</ul>

<h2>4. Ngưỡng hệ số sử dụng bãi</h2>
<div class="table-wrap"><table>
<tr><th>Hệ số sử dụng (so với sức chứa danh nghĩa)</th><th>Tình trạng</th></tr>
<tr><td>&lt; 60%</td><td>Thoải mái, năng suất cao</td></tr>
<tr><td>60 – 75%</td><td>Vùng tối ưu kinh tế</td></tr>
<tr><td>75 – 85%</td><td>Đảo chuyển tăng nhanh, năng suất giảm</td></tr>
<tr><td>&gt; 85%</td><td>Nguy cơ “kẹt bãi” (yard congestion), ảnh hưởng tàu và cổng</td></tr>
</table></div>

<h2>5. Năng lực bãi — công thức</h2>
<div class="formula">Năng lực thông qua (TEU/năm) = TGS × Chiều cao xếp TB × Hệ số khai thác × 365 / Dwell time TB (ngày)</div>
<p><b>Ví dụ:</b> 3.000 TGS × 3,5 tầng × 70% × 365 / 5 ngày ≈ <b>536.550 TEU/năm</b>. Giảm dwell time từ 5 xuống 4 ngày → ≈ 670.000 TEU/năm (+25%) mà không cần xây thêm bãi. Hãy thử với công cụ “Năng lực thông qua bãi”.</p>
<div class="callout tip"><strong class="title">💡 Đòn bẩy dwell time</strong>Biểu phí lưu bãi lũy tiến, nhắc chủ hàng tự động, ưu tiên khu kiểm hóa, phối hợp kiểm tra chuyên ngành tại chỗ — mỗi ngày dwell time giảm được tương đương mở rộng 20–25% diện tích bãi.</div>
`,
      keyPoints: [
        'Mã vị trí Block – Bay – Row – Tier; phân khu theo xuất/nhập/rỗng/lạnh/DG/OOG.',
        'Bãi xuất: xếp theo thứ tự bốc tàu (bốc trước nằm trên).',
        'Hệ số sử dụng bãi tối ưu 60–75%; trên 85% có nguy cơ kẹt bãi.',
        'Giảm dwell time là cách tăng năng lực rẻ nhất.'
      ],
      apply: [
        'Lấy số liệu tháng trước: tổng move đảo chuyển / move doanh thu. Đặt mục tiêu giảm 20%.',
        'Tính năng lực bãi hiện tại bằng công cụ, so với sản lượng thực tế — còn dư bao nhiêu %?',
        'Đề xuất 1 thay đổi quy tắc xếp bãi xuất để giảm đảo chuyển khi bốc tàu.'
      ],
      quiz: [
        { q: 'Hệ số sử dụng bãi nào được xem là vùng tối ưu kinh tế?', options: ['30–40%', '60–75%', '85–95%', '100%'], answer: 1 },
        { q: 'Trong bãi hàng xuất, container cần bốc lên tàu trước nên ở vị trí nào?', options: ['Tầng dưới cùng', 'Tầng trên', 'Khu xa cổng', 'Không quan trọng'], answer: 1 },
        { q: 'Giảm dwell time từ 5 xuống 4 ngày làm năng lực thông qua bãi tăng khoảng?', options: ['5%', '10%', '25%', '50%'], answer: 2, explain: '5/4 = 1,25 → tăng 25%.' }
      ]
    },
    {
      id: 'quan-ly-kho', title: 'Quản lý kho: nhập – lưu – xuất, FIFO/FEFO, ABC, kiểm kê', minutes: 14,
      body: `
<h2>1. Quy trình kho chuẩn</h2>
<ol>
<li><b>Lập kế hoạch nhận</b> (ASN — thông báo hàng đến): bố trí cửa kho, nhân lực, thiết bị.</li>
<li><b>Nhận hàng</b>: kiểm đếm, kiểm tra tình trạng, đối chiếu chứng từ; lập biên bản bất thường.</li>
<li><b>Cất hàng (put-away)</b> vào vị trí theo quy tắc slotting; cập nhật hệ thống ngay.</li>
<li><b>Lưu trữ & bảo quản</b>: điều kiện nhiệt độ, độ ẩm, chống ẩm mốc, chống côn trùng, xếp chồng đúng giới hạn.</li>
<li><b>Lấy hàng (picking)</b> theo lệnh xuất; <b>kiểm tra</b> lại trước khi giao.</li>
<li><b>Giao hàng</b>: đối chiếu người nhận, chứng từ, ký nhận.</li>
</ol>

<h2>2. Nguyên tắc xuất hàng</h2>
<ul>
<li><b>FIFO</b> (First In – First Out): nhập trước xuất trước — mặc định.</li>
<li><b>FEFO</b> (First Expired – First Out): hết hạn trước xuất trước — thực phẩm, hóa chất, dược phẩm.</li>
<li><b>LIFO</b>: hàng rời đổ đống (cát, than) — thường thực tế là LIFO do cấu trúc đống.</li>
</ul>

<h2>3. Phân tích ABC & bố trí vị trí (slotting)</h2>
<div class="table-wrap"><table>
<tr><th>Nhóm</th><th>Tỷ lệ mã hàng</th><th>Tỷ lệ lượt xuất/giá trị</th><th>Bố trí</th></tr>
<tr><td>A</td><td>~20%</td><td>~80%</td><td>Gần cửa, tầm tay, lối đi chính</td></tr>
<tr><td>B</td><td>~30%</td><td>~15%</td><td>Vị trí trung gian</td></tr>
<tr><td>C</td><td>~50%</td><td>~5%</td><td>Xa, cao, sâu</td></tr>
</table></div>
<p>Kết hợp ABC với kiểm kê: nhóm A kiểm kê thường xuyên (hằng tuần/tháng), nhóm C ít hơn — gọi là <b>kiểm kê chu kỳ (cycle counting)</b>, thay cho kiểm kê toàn bộ cuối năm gây dừng kho.</p>

<h2>4. An toàn kho</h2>
<ul>
<li>Giới hạn tải trọng kệ (biển báo tải trọng mỗi tầng), kiểm tra kệ định kỳ, thay thanh bị móp.</li>
<li>Tách lối đi người – xe nâng; gương cầu ở góc khuất; giới hạn tốc độ xe nâng.</li>
<li>Xếp chồng bao kiện theo giới hạn chồng (stacking limit) ghi trên bao bì.</li>
<li>PCCC: lối thoát hiểm thông thoáng, khoảng cách hàng tới đầu phun sprinkler, hàng nguy hiểm tách khu.</li>
</ul>

<h2>5. 5S trong kho</h2>
<p><b>Sàng lọc</b> (Seiri) – <b>Sắp xếp</b> (Seiton) – <b>Sạch sẽ</b> (Seiso) – <b>Săn sóc</b> (Seiketsu – chuẩn hóa) – <b>Sẵn sàng</b> (Shitsuke – kỷ luật). Đo bằng chấm điểm định kỳ theo khu, công khai kết quả.</p>
`,
      keyPoints: [
        '6 bước: kế hoạch nhận – nhận – cất – lưu – lấy – giao; cập nhật hệ thống ngay tại mỗi bước.',
        'FIFO mặc định; FEFO cho hàng có hạn dùng.',
        'ABC: 20% mã hàng chiếm ~80% lượt xuất → đặt gần cửa; kiểm kê chu kỳ theo nhóm.',
        '5S + an toàn kệ + tách luồng người/xe nâng.'
      ],
      apply: [
        'Xuất dữ liệu xuất kho 3 tháng, phân nhóm ABC theo số lượt xuất, so với vị trí hiện tại.',
        'Thiết lập lịch kiểm kê chu kỳ: nhóm A hằng tuần, B hằng tháng, C hằng quý.',
        'Đi một vòng kho chấm điểm 5S (thang 1–5 cho mỗi S), chụp ảnh trước/sau.'
      ],
      quiz: [
        { q: 'FEFO phù hợp nhất với loại hàng nào?', options: ['Thép cuộn', 'Thực phẩm, hóa chất có hạn dùng', 'Container rỗng', 'Máy móc'], answer: 1 },
        { q: 'Kiểm kê chu kỳ (cycle counting) là?', options: ['Kiểm kê toàn bộ một lần/năm', 'Kiểm kê từng phần theo lịch, ưu tiên nhóm hàng quan trọng', 'Chỉ kiểm khi mất hàng', 'Kiểm kê bằng camera'], answer: 1 },
        { q: 'Trong phân tích ABC, nhóm A thường chiếm?', options: ['50% mã hàng, 5% giá trị', '20% mã hàng, ~80% giá trị/lượt xuất', '80% mã hàng, 20% giá trị', 'Toàn bộ mã hàng'], answer: 1 }
      ]
    },
    {
      id: 'kpi', title: 'Bộ KPI khai thác cảng & kho — định nghĩa và cách dùng', minutes: 15,
      body: `
<h2>1. KPI cầu tàu</h2>
<div class="table-wrap"><table>
<tr><th>KPI</th><th>Công thức</th><th>Ghi chú</th></tr>
<tr><td><b>GCR / GMPH</b> — năng suất cẩu thô</td><td>Tổng move / Tổng thời gian cẩu được phân công cho tàu (từ bắt đầu tới kết thúc)</td><td>Gồm cả thời gian dừng — phản ánh trải nghiệm hãng tàu</td></tr>
<tr><td><b>NCR</b> — năng suất cẩu thuần</td><td>Tổng move / (Thời gian làm hàng − thời gian dừng)</td><td>Phản ánh kỹ năng lái cẩu, thiết bị</td></tr>
<tr><td><b>BMPH</b> — năng suất cầu tàu</td><td>Tổng move / Thời gian tàu tại cầu (first line → last line)</td><td>KPI hãng tàu quan tâm nhất</td></tr>
<tr><td><b>Vessel turnaround time</b></td><td>Từ khi tàu đến vùng neo đến khi rời cảng</td><td>Gồm thời gian chờ cầu</td></tr>
<tr><td><b>BOR</b> — hệ số chiếm dụng cầu bến</td><td>Giờ tàu chiếm cầu / (Số cầu × Giờ trong kỳ)</td><td>&gt;70–75% thời gian chờ tăng nhanh</td></tr>
</table></div>

<h2>2. KPI bãi và cổng</h2>
<div class="table-wrap"><table>
<tr><th>KPI</th><th>Công thức / ý nghĩa</th></tr>
<tr><td><b>Yard occupancy</b></td><td>TEU đang lưu / Sức chứa danh nghĩa</td></tr>
<tr><td><b>Dwell time</b></td><td>Thời gian TB từ lúc container vào cảng đến lúc ra (tách nhập/xuất/rỗng)</td></tr>
<tr><td><b>Rehandle ratio</b></td><td>Move đảo chuyển / Move doanh thu</td></tr>
<tr><td><b>Truck turnaround time (TTT)</b></td><td>Từ lúc xe vào cổng đến lúc ra cổng — mục tiêu phổ biến &lt; 30–60 phút</td></tr>
<tr><td><b>Gate transactions/giờ</b></td><td>Năng lực xử lý cổng giờ cao điểm</td></tr>
</table></div>

<h2>3. KPI kho</h2>
<div class="table-wrap"><table>
<tr><th>KPI</th><th>Mục tiêu tham khảo</th></tr>
<tr><td>Độ chính xác tồn kho (Inventory accuracy)</td><td>≥ 99,5%</td></tr>
<tr><td>Độ chính xác đơn hàng (Order accuracy)</td><td>≥ 99,8%</td></tr>
<tr><td>Dock-to-stock time (nhận → sẵn sàng trên hệ thống)</td><td>&lt; 4–24 giờ tùy loại hàng</td></tr>
<tr><td>Tỷ lệ hư hỏng hàng do kho</td><td>&lt; 0,05% giá trị</td></tr>
<tr><td>Mức sử dụng diện tích/thể tích kho</td><td>75–85%</td></tr>
</table></div>

<h2>4. KPI thiết bị, an toàn, tài chính</h2>
<ul>
<li><b>Mức sẵn sàng thiết bị</b> = (Thời gian kế hoạch − Thời gian hỏng) / Thời gian kế hoạch. <b>MTBF</b> (thời gian TB giữa hai lần hỏng), <b>MTTR</b> (thời gian TB sửa chữa).</li>
<li><b>LTIFR</b> = Số vụ tai nạn mất ngày công × 1.000.000 / Tổng giờ công lao động.</li>
<li><b>Chi phí/move</b>, <b>doanh thu/TEU</b>, <b>EBITDA margin</b>.</li>
</ul>

<h2>5. Nguyên tắc thiết kế bảng KPI</h2>
<ul>
<li><b>Ít mà chất</b>: 5–7 KPI cho mỗi cấp quản lý; KPI cấp ca khác KPI cấp giám đốc.</li>
<li>Kết hợp <b>chỉ số dẫn dắt</b> (leading: tỷ lệ thiết bị sẵn sàng, số báo cáo cận nguy) và <b>chỉ số kết quả</b> (lagging: năng suất, tai nạn).</li>
<li>Mỗi KPI có: định nghĩa chuẩn, nguồn dữ liệu, tần suất, người chịu trách nhiệm, mục tiêu, ngưỡng cảnh báo.</li>
<li>Tránh KPI gây hành vi lệch: chỉ đo năng suất cẩu → lái cẩu ẩu → tăng hư hỏng. Luôn ghép cặp <b>năng suất + an toàn/chất lượng</b>.</li>
</ul>
`,
      keyPoints: [
        'Cầu tàu: GMPH/NCR/BMPH, turnaround, BOR. Bãi: occupancy, dwell, rehandle. Cổng: TTT.',
        'Kho: inventory accuracy ≥ 99,5%, order accuracy ≥ 99,8%, dock-to-stock.',
        'LTIFR = LTI × 1.000.000 / giờ công.',
        'Luôn ghép cặp KPI năng suất với KPI an toàn/chất lượng; kết hợp leading & lagging.'
      ],
      apply: [
        'Viết “thẻ định nghĩa KPI” cho 5 KPI bạn đang chịu trách nhiệm: công thức, nguồn, tần suất, mục tiêu, ngưỡng.',
        'Kiểm tra: KPI nào đang được đo nhưng không ai ra quyết định từ nó? Bỏ hoặc sửa.',
        'Thêm 1 chỉ số dẫn dắt về an toàn (ví dụ số báo cáo cận nguy/tuần) vào báo cáo ca.'
      ],
      quiz: [
        { q: 'BMPH đo gì?', options: ['Năng suất một cẩu thuần', 'Tổng move chia thời gian tàu tại cầu', 'Số xe qua cổng/giờ', 'Thời gian lưu bãi'], answer: 1 },
        { q: 'Công thức LTIFR?', options: ['Số tai nạn / số nhân viên', 'Số vụ LTI × 1.000.000 / tổng giờ công', 'Số ngày nghỉ / 365', 'Số tai nạn × 100'], answer: 1 },
        { q: 'Vì sao nên ghép KPI năng suất với KPI an toàn/chất lượng?', options: ['Cho đẹp báo cáo', 'Tránh hành vi lệch: chạy năng suất mà gây hư hỏng, tai nạn', 'Theo yêu cầu pháp luật', 'Để tăng số KPI'], answer: 1 }
      ]
    },
    {
      id: 'lean-kaizen', title: 'Lean, Kaizen & giải quyết vấn đề năng suất', minutes: 12,
      body: `
<h2>1. 8 lãng phí (TIMWOODS) trong cảng/kho</h2>
<div class="table-wrap"><table>
<tr><th>Lãng phí</th><th>Ví dụ ở cảng/kho</th></tr>
<tr><td>Transport — vận chuyển</td><td>Xe nội bộ chạy rỗng, quãng đường bãi–cầu dài do xếp sai khu</td></tr>
<tr><td>Inventory — tồn kho</td><td>Container tồn lâu, vật tư phụ tùng tồn quá mức</td></tr>
<tr><td>Motion — thao tác</td><td>Nhân viên kiểm đếm đi lại nhiều, tìm dụng cụ</td></tr>
<tr><td>Waiting — chờ đợi</td><td>STS chờ xe, xe chờ cổng, chờ chứng từ</td></tr>
<tr><td>Overproduction — làm thừa</td><td>Đảo chuyển chuẩn bị cho tàu bị hủy</td></tr>
<tr><td>Overprocessing — xử lý thừa</td><td>Nhập liệu trùng giữa giấy và hệ thống</td></tr>
<tr><td>Defects — lỗi</td><td>Sai vị trí, giao nhầm container, hư hỏng hàng</td></tr>
<tr><td>Skills — lãng phí con người</td><td>Không lắng nghe ý tưởng của công nhân hiện trường</td></tr>
</table></div>

<h2>2. Chu trình PDCA và A3</h2>
<p><b>Plan</b> (xác định vấn đề, đo hiện trạng, tìm nguyên nhân gốc) → <b>Do</b> (thử nghiệm quy mô nhỏ) → <b>Check</b> (đo lại) → <b>Act</b> (chuẩn hóa hoặc điều chỉnh). Trình bày trên 1 tờ A3: bối cảnh – hiện trạng – mục tiêu – phân tích nguyên nhân – biện pháp – kế hoạch – theo dõi.</p>

<h2>3. Ví dụ: năng suất cẩu STS thấp</h2>
<p><b>Hiện trạng:</b> GMPH 22 move/giờ, mục tiêu 28. Phân tích thời gian dừng (Pareto):</p>
<div class="table-wrap"><table>
<tr><th>Nguyên nhân dừng</th><th>% thời gian dừng</th></tr>
<tr><td>Chờ xe nội bộ</td><td>38%</td></tr>
<tr><td>Tháo/lắp chốt (lashing, cone)</td><td>22%</td></tr>
<tr><td>Đổi ca, nghỉ giữa ca</td><td>15%</td></tr>
<tr><td>Hỏng thiết bị</td><td>12%</td></tr>
<tr><td>Khác</td><td>13%</td></tr>
</table></div>
<p>→ Tập trung 2 nguyên nhân đầu (60%): tăng xe/ điều phối xe theo pool, chuẩn bị đội cone đủ người, đổi ca tại chỗ (hot seat change) để không dừng cẩu.</p>

<h2>4. Gemba walk — đi hiện trường đúng cách</h2>
<ul>
<li>Đi <b>để học và hỏi</b>, không để bắt lỗi.</li>
<li>Câu hỏi: “Hôm nay điều gì làm anh/chị mất thời gian nhất?”, “Nếu được thay đổi một thứ, anh/chị sẽ thay đổi gì?”.</li>
<li>Ghi chép, phản hồi lại cho người đã góp ý trong vòng 1 tuần — đây là cách xây văn hóa cải tiến.</li>
</ul>
`,
      keyPoints: [
        '8 lãng phí TIMWOODS — “Waiting” và “Transport” là lớn nhất ở cảng.',
        'PDCA + A3: giải quyết vấn đề có dữ liệu, thử nhỏ, chuẩn hóa.',
        'Pareto: 20% nguyên nhân gây 80% thời gian dừng — tập trung vào đó.',
        'Gemba walk để học, phản hồi trong 1 tuần.'
      ],
      apply: [
        'Lấy dữ liệu dừng cẩu 1 tuần, vẽ biểu đồ Pareto các nguyên nhân dừng.',
        'Thực hiện 1 Gemba walk 30 phút trong tuần này, ghi 3 ý tưởng từ công nhân.',
        'Chọn 1 vấn đề, viết A3 một trang và trình bày với cấp trên.'
      ],
      quiz: [
        { q: 'STS phải dừng chờ xe nội bộ thuộc loại lãng phí nào?', options: ['Defects', 'Waiting', 'Inventory', 'Overprocessing'], answer: 1 },
        { q: 'Thứ tự đúng của chu trình PDCA?', options: ['Do – Plan – Act – Check', 'Plan – Do – Check – Act', 'Plan – Check – Do – Act', 'Check – Plan – Do – Act'], answer: 1 },
        { q: 'Mục đích chính của Gemba walk?', options: ['Kiểm tra, phạt lỗi', 'Quan sát, học hỏi và lắng nghe tại hiện trường', 'Chụp ảnh báo cáo', 'Đếm nhân viên'], answer: 1 }
      ]
    },
    {
      id: 'so-hoa', title: 'Số hóa cảng: TOS, EDI, e-Port, tự động hóa', minutes: 12,
      body: `
<h2>1. TOS — Terminal Operating System</h2>
<p>Hệ thống “bộ não” của cảng: lập kế hoạch tàu, bãi, điều phối thiết bị, quản lý cổng, tính cước. Ví dụ phổ biến: Navis N4, CATOS, TOPX, các TOS do doanh nghiệp Việt Nam phát triển. Giá trị của TOS phụ thuộc vào <b>chất lượng dữ liệu đầu vào</b> và <b>kỷ luật cập nhật thời gian thực</b>.</p>

<h2>2. Các bản tin EDI phổ biến (UN/EDIFACT)</h2>
<div class="table-wrap"><table>
<tr><th>Bản tin</th><th>Nội dung</th><th>Chiều</th></tr>
<tr><td><b>BAPLIE</b></td><td>Sơ đồ xếp hàng trên tàu (bay plan)</td><td>Hãng tàu ↔ Cảng</td></tr>
<tr><td><b>MOVINS</b></td><td>Chỉ dẫn xếp hàng (stowage instruction)</td><td>Hãng tàu → Cảng</td></tr>
<tr><td><b>COPRAR</b></td><td>Danh sách container cần xếp/dỡ</td><td>Hãng tàu → Cảng</td></tr>
<tr><td><b>COARRI</b></td><td>Báo cáo đã xếp/dỡ</td><td>Cảng → Hãng tàu</td></tr>
<tr><td><b>CODECO</b></td><td>Báo cáo container ra/vào cổng</td><td>Cảng → Hãng tàu</td></tr>
<tr><td><b>VERMAS</b></td><td>Thông tin VGM</td><td>Shipper/Hãng tàu → Cảng</td></tr>
</table></div>

<h2>3. Cảng điện tử (e-Port) tại Việt Nam</h2>
<ul>
<li><b>e-D/O</b> (lệnh giao hàng điện tử), đăng ký giao nhận container trực tuyến, thanh toán điện tử, hóa đơn điện tử.</li>
<li>Kết nối <b>VASSCM</b> với hải quan; <b>Cơ chế một cửa quốc gia</b> cho thủ tục tàu.</li>
<li>Cổng tự động: OCR đọc số container/biển số, camera ghi tình trạng vỏ, RFID/QR cho tài xế.</li>
<li><b>Truck Appointment System</b>: hẹn giờ lấy/hạ hàng để san phẳng cao điểm.</li>
</ul>

<h2>4. Lộ trình số hóa thực tế cho cảng/kho vừa và nhỏ</h2>
<ol>
<li><b>Chuẩn hóa dữ liệu</b> (mã khách hàng, mã hàng, vị trí) — không có bước này mọi phần mềm đều thất bại.</li>
<li><b>Số hóa giao dịch</b>: e-D/O, thanh toán, hóa đơn — giảm giấy, giảm thời gian ở cổng.</li>
<li><b>Thiết bị cầm tay</b> cho kiểm đếm, cập nhật vị trí thời gian thực.</li>
<li><b>Dashboard KPI</b> tự động từ dữ liệu hệ thống (Power BI…).</li>
<li><b>Tối ưu hóa</b>: thuật toán phân bổ vị trí, điều xe; dự báo dwell time bằng dữ liệu lịch sử/AI.</li>
<li><b>Tự động hóa</b> một phần (cổng tự động, điều khiển cẩu từ xa) khi quy mô đủ lớn.</li>
</ol>
<div class="callout warn"><strong class="title">⚠️ Bài học triển khai</strong>Dự án phần mềm cảng thất bại thường do <b>quy trình chưa chuẩn</b> và <b>người dùng hiện trường không được tham gia</b>, không phải do công nghệ. Hãy để trưởng ca, nhân viên điều độ tham gia từ giai đoạn thiết kế và chạy thử song song trước khi chuyển đổi.</div>
`,
      keyPoints: [
        'TOS là bộ não cảng; chất lượng dữ liệu + cập nhật thời gian thực quyết định giá trị.',
        'EDI: BAPLIE (bay plan), MOVINS, COPRAR, COARRI (xếp dỡ xong), CODECO (ra vào cổng), VERMAS (VGM).',
        'Lộ trình: chuẩn hóa dữ liệu → số hóa giao dịch → thiết bị cầm tay → dashboard → tối ưu → tự động.',
        'Số hóa thất bại chủ yếu do quy trình và con người.'
      ],
      apply: [
        'Liệt kê các điểm còn dùng giấy trong quy trình giao nhận của bạn và thời gian mỗi điểm tốn.',
        'Kiểm tra độ trễ cập nhật vị trí container trên hệ thống so với thực tế (mẫu 20 container).'
      ],
      quiz: [
        { q: 'Bản tin EDI báo cáo container ra/vào cổng là?', options: ['BAPLIE', 'COARRI', 'CODECO', 'MOVINS'], answer: 2 },
        { q: 'Bản tin chứa sơ đồ xếp hàng trên tàu?', options: ['BAPLIE', 'CODECO', 'VERMAS', 'COPRAR'], answer: 0 },
        { q: 'Bước đầu tiên trong lộ trình số hóa nên là?', options: ['Mua cẩu tự động', 'Chuẩn hóa dữ liệu và quy trình', 'Thuê AI', 'Mua phần mềm đắt nhất'], answer: 1 }
      ]
    },
    {
      id: 'hang-roi-bach-hoa', title: 'Hàng rời & bách hóa: kiểm đếm, giám định mớn nước, hao hụt, bảo quản', minutes: 12,
      body: `
<h2>1. Giám định mớn nước (Draft survey)</h2>
<p>Phương pháp xác định khối lượng hàng rời xếp/dỡ bằng cách đọc mớn nước tàu (6 điểm: mũi, giữa, lái × 2 mạn) trước và sau khi làm hàng, hiệu chỉnh theo tỷ trọng nước, độ chúi, độ võng, và trừ đi thay đổi nước dằn, nhiên liệu, nước ngọt. Sai số thường khoảng <b>±0,3–0,5%</b>.</p>
<p>Cảng cần: chứng kiến, cung cấp thông tin tỷ trọng nước tại cầu, đối chiếu với số liệu <b>cân</b> (cân ô tô, cân băng tải) của cảng.</p>

<h2>2. Hao hụt hàng rời</h2>
<ul>
<li>Nguyên nhân: bay bụi, rơi vãi khi gầu ngoạm, thay đổi độ ẩm, sai số đo.</li>
<li>Hợp đồng nên quy định <b>tỷ lệ hao hụt cho phép</b> (ví dụ 0,3–0,5% tùy loại hàng) và phương pháp xác định khối lượng chuẩn (draft survey hay cân).</li>
<li>Giảm hao hụt: phễu chống bụi, máng hứng giữa tàu và cầu (spill plate), vệ sinh cầu tàu cuối ca, che phủ đống hàng.</li>
</ul>

<h2>3. Hàng bách hóa — lưu ý theo loại</h2>
<div class="table-wrap"><table>
<tr><th>Loại hàng</th><th>Rủi ro</th><th>Biện pháp</th></tr>
<tr><td>Thép cuộn (coil)</td><td>Lăn, móp mép, gỉ do nước mưa/nước biển</td><td>Kê chèn (chock) bằng gỗ, xếp tối đa 2 tầng theo hình kim tự tháp, che bạt, cẩu bằng C-hook hoặc dây vải bản rộng</td></tr>
<tr><td>Thép tấm, thép hình</td><td>Cong vênh, trượt</td><td>Kê đà gỗ thẳng hàng, dùng thanh dàn (spreader beam), nam châm nâng (có quy trình an toàn riêng)</td></tr>
<tr><td>Phân bón, xi măng bao</td><td>Rách bao, ẩm, vón cục</td><td>Pallet, bạt, sàn khô, giới hạn tầng chồng</td></tr>
<tr><td>Gỗ tròn, gỗ xẻ</td><td>Lăn, mục, côn trùng</td><td>Cọc chặn, kiểm dịch, xếp cách nền</td></tr>
<tr><td>Máy móc thiết bị (kiện gỗ)</td><td>Trọng tâm lệch, kiện hỏng</td><td>Đọc ký hiệu trọng tâm, điểm cẩu trên kiện; không lật</td></tr>
</table></div>

<h2>4. Kiểm đếm (tally)</h2>
<p>Ghi nhận theo từng mã ký hiệu (marks), số lượng, tình trạng; đánh dấu kiện hư hỏng, kiện thiếu/thừa so với manifest. Báo cáo <b>Cargo Outturn Report</b> cuối tàu, có xác nhận của đại diện tàu — đây là chứng cứ chính trong tranh chấp.</p>
`,
      keyPoints: [
        'Draft survey: xác định khối lượng hàng rời qua mớn nước; sai số ~0,3–0,5%.',
        'Hợp đồng hàng rời cần quy định tỷ lệ hao hụt cho phép và phương pháp xác định khối lượng.',
        'Thép cuộn: chèn chock, tối đa 2 tầng, C-hook/dây vải; không dùng cáp thép trần.',
        'Cargo Outturn Report có xác nhận của tàu là chứng cứ chủ chốt.'
      ],
      apply: [
        'So sánh khối lượng theo draft survey và theo cân của cảng cho 5 tàu gần nhất — chênh lệch bao nhiêu %?',
        'Kiểm tra quy cách xếp thép cuộn tại bãi: có chock và giới hạn tầng chưa?'
      ],
      quiz: [
        { q: 'Draft survey dùng để?', options: ['Kiểm tra an ninh tàu', 'Xác định khối lượng hàng rời qua mớn nước', 'Đo tốc độ tàu', 'Kiểm tra hầm hàng sạch'], answer: 1 },
        { q: 'Thiết bị phù hợp để cẩu thép cuộn là?', options: ['Cáp thép trần luồn qua lõi', 'C-hook hoặc dây vải bản rộng', 'Xích không bọc', 'Gầu ngoạm'], answer: 1 }
      ]
    }
  ]
});
