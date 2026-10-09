window.PA_DATA = window.PA_DATA || { modules: [], glossary: [] };
window.PA_DATA.modules.push({
  id: 'hang-hai-dtnd', order: 2, icon: '⚓', short: 'Hàng hải & ĐTNĐ',
  title: 'Luật hàng hải & giao thông đường thủy nội địa',
  desc: 'Bộ luật Hàng hải 2015, Luật GTĐTNĐ, vận đơn – trách nhiệm người vận chuyển, hàng nguy hiểm, ISPS, NOR – laytime – demurrage.',
  intro: '<p>Cảng là điểm giao giữa tàu biển, phương tiện thủy nội địa (sà lan) và vận tải bộ. Mỗi phương thức có luật riêng — hiểu ranh giới trách nhiệm giữa <b>hãng tàu – cảng – chủ hàng – sà lan</b> là chìa khóa để xử lý tổn thất và tranh chấp.</p>',
  lessons: [
    {
      id: 'blhh-cang-bien', title: 'Bộ luật Hàng hải 2015: cảng biển, cảng vụ, tàu đến – rời cảng', minutes: 12,
      source: 'Bộ luật Hàng hải Việt Nam số 95/2015/QH13; NĐ 58/2017/NĐ-CP (đã sửa đổi)',
      body: `
<h2>1. Khung pháp lý</h2>
<ul>
<li><b>Bộ luật Hàng hải Việt Nam 2015</b> (số 95/2015/QH13, hiệu lực 01/7/2017): tàu biển, thuyền viên, cảng biển, hợp đồng vận chuyển, đại lý, môi giới, hoa tiêu, cứu hộ, tổn thất chung, giới hạn trách nhiệm…</li>
<li><b>Nghị định 58/2017/NĐ-CP</b> quản lý hoạt động hàng hải (thủ tục tàu đến, rời cảng; hoạt động trong vùng nước cảng biển) — đã được sửa đổi, bổ sung nhiều lần.</li>
<li><b>Nghị định 37/2017/NĐ-CP</b> về điều kiện kinh doanh khai thác cảng biển.</li>
<li><b>Nghị định 142/2017/NĐ-CP</b> (sửa đổi bởi NĐ 123/2021) xử phạt VPHC lĩnh vực hàng hải.</li>
</ul>
<div class="callout info"><strong class="title">Bộ máy sau sắp xếp 2025</strong>Bộ Giao thông vận tải hợp nhất vào <b>Bộ Xây dựng</b>; Cục Hàng hải Việt Nam và Cục Đường thủy nội địa Việt Nam hợp nhất thành <b>Cục Hàng hải và Đường thủy Việt Nam</b>. Các Cảng vụ hàng hải và Cảng vụ đường thủy nội địa tiếp tục là cơ quan quản lý nhà nước chuyên ngành tại cảng. Kiểm tra lại tên gọi chính thức khi soạn công văn.</div>

<h2>2. Các chủ thể tại cảng biển</h2>
<div class="table-wrap"><table>
<tr><th>Chủ thể</th><th>Vai trò</th></tr>
<tr><td>Cảng vụ hàng hải</td><td>Quản lý nhà nước tại vùng nước cảng: cấp phép tàu vào/rời, điều động tàu, an toàn – an ninh – môi trường</td></tr>
<tr><td>Doanh nghiệp khai thác cảng (terminal operator)</td><td>Khai thác cầu bến, bãi; xếp dỡ; giao nhận; lưu kho bãi</td></tr>
<tr><td>Hãng tàu / người vận chuyển</td><td>Vận chuyển theo hợp đồng/vận đơn</td></tr>
<tr><td>Đại lý tàu biển</td><td>Thay mặt chủ tàu làm thủ tục, thu xếp dịch vụ cho tàu</td></tr>
<tr><td>Hoa tiêu hàng hải</td><td>Dẫn tàu ra vào, di chuyển trong vùng hoa tiêu bắt buộc</td></tr>
<tr><td>Hải quan, Biên phòng, Kiểm dịch y tế/động vật/thực vật</td><td>Thủ tục cho tàu, người, hàng hóa</td></tr>
</table></div>

<h2>3. Thủ tục tàu đến, rời cảng (khái quát)</h2>
<ul>
<li>Đại lý/chủ tàu thông báo, xác báo tàu đến; khai báo điện tử qua <b>Cơ chế một cửa quốc gia</b>.</li>
<li>Cảng vụ ra kế hoạch điều động; tàu đón hoa tiêu, lai dắt (nếu bắt buộc).</li>
<li>Rời cảng: tàu chỉ được rời khi đã được <b>Cảng vụ cấp giấy phép rời cảng</b> (port clearance), sau khi hoàn thành nghĩa vụ phí, lệ phí, các yêu cầu của cơ quan chức năng.</li>
</ul>
<div class="callout tip"><strong class="title">💡 Liên hệ với điều độ cảng</strong>Kế hoạch cầu bến của cảng (berth plan) phải khớp kế hoạch điều động của Cảng vụ. Khi tàu thay đổi ETA, điều độ cảng nên cập nhật cho cả đại lý, Cảng vụ và bộ phận khai thác bãi để tránh tàu nằm chờ (waiting time) — chỉ số khách hàng hãng tàu theo dõi rất sát.</div>

<h2>4. Nghĩa vụ của doanh nghiệp cảng theo pháp luật hàng hải</h2>
<ul>
<li>Bảo đảm điều kiện an toàn của cầu cảng, vùng nước trước bến (độ sâu, đệm va, bích neo), công bố thông số kỹ thuật cầu cảng.</li>
<li>Thực hiện kế hoạch an ninh bến cảng (<b>ISPS Code</b>) nếu tiếp nhận tàu biển chạy tuyến quốc tế.</li>
<li>Có phương án ứng phó sự cố tràn dầu, phòng cháy chữa cháy, tiếp nhận chất thải từ tàu theo quy định.</li>
<li>Duy trì điều kiện kinh doanh khai thác cảng biển (NĐ 37/2017).</li>
</ul>
`,
      keyPoints: [
        'BLHH 2015 (95/2015/QH13) hiệu lực 01/7/2017 là luật gốc cho tàu biển, cảng biển, vận chuyển.',
        'Cảng vụ hàng hải cấp phép tàu vào/rời cảng; tàu chỉ rời cảng khi có giấy phép rời cảng.',
        'Từ 2025: Cục Hàng hải và Đường thủy Việt Nam thuộc Bộ Xây dựng.',
        'DN cảng phải duy trì an toàn cầu bến, kế hoạch an ninh ISPS, ứng phó sự cố, điều kiện kinh doanh.'
      ],
      apply: [
        'Kiểm tra ngày hết hạn của các hồ sơ: công bố cầu cảng, kế hoạch an ninh bến cảng (PFSP), phương án ứng phó tràn dầu, PCCC.',
        'Đo thời gian trung bình tàu chờ cầu (waiting time) 3 tháng gần nhất và nguyên nhân chính.'
      ],
      quiz: [
        { q: 'Cơ quan nào cấp giấy phép rời cảng cho tàu biển?', options: ['Doanh nghiệp cảng', 'Cảng vụ hàng hải', 'Hải quan cửa khẩu', 'Đại lý tàu biển'], answer: 1 },
        { q: 'Nghị định nào quy định điều kiện kinh doanh khai thác cảng biển?', options: ['NĐ 37/2017/NĐ-CP', 'NĐ 08/2021/NĐ-CP', 'NĐ 128/2020/NĐ-CP', 'NĐ 42/2020/NĐ-CP'], answer: 0 },
        { q: 'Bộ luật Hàng hải Việt Nam 2015 có hiệu lực từ?', options: ['01/01/2016', '01/7/2016', '01/7/2017', '01/01/2018'], answer: 2 }
      ]
    },
    {
      id: 'van-don-trach-nhiem', title: 'Vận đơn, trách nhiệm người vận chuyển & xử lý tổn thất hàng hóa', minutes: 15,
      source: 'BLHH 2015 — Chương Hợp đồng vận chuyển hàng hóa',
      body: `
<h2>1. Ba chức năng của vận đơn (B/L)</h2>
<ol>
<li><b>Biên lai nhận hàng</b> của người vận chuyển (ghi nhận số lượng, tình trạng bên ngoài).</li>
<li><b>Bằng chứng</b> của hợp đồng vận chuyển.</li>
<li><b>Chứng từ sở hữu</b> (document of title) — người cầm B/L gốc hợp lệ có quyền nhận hàng.</li>
</ol>
<div class="table-wrap"><table>
<tr><th>Loại</th><th>Đặc điểm</th><th>Rủi ro khi giao hàng</th></tr>
<tr><td>B/L đích danh (Straight)</td><td>Ghi tên người nhận cụ thể</td><td>Giao đúng người nhận có tên</td></tr>
<tr><td>B/L theo lệnh (To order)</td><td>Chuyển nhượng bằng ký hậu</td><td>Phải kiểm tra chuỗi ký hậu</td></tr>
<tr><td>B/L vô danh (To bearer)</td><td>Ai cầm thì nhận</td><td>Rủi ro mất cắp cao</td></tr>
<tr><td>Surrendered B/L / Seaway bill</td><td>Không cần xuất trình bản gốc tại cảng đến</td><td>Giao theo xác nhận điện tử của hãng tàu</td></tr>
<tr><td>Clean vs Claused B/L</td><td>Có/không ghi chú tình trạng xấu của hàng</td><td>Ghi chú “dirty” ảnh hưởng thanh toán L/C</td></tr>
</table></div>
<p><b>Lệnh giao hàng (D/O)</b> do hãng tàu/đại lý phát hành sau khi người nhận xuất trình B/L hợp lệ và thanh toán cước, phí. Cảng giao hàng dựa trên D/O (thường là <b>e-D/O</b>) + điều kiện hải quan + phí cảng.</p>

<h2>2. Trách nhiệm & giới hạn trách nhiệm người vận chuyển</h2>
<ul>
<li>Người vận chuyển chịu trách nhiệm đối với hàng từ khi nhận tại cảng nhận hàng cho tới khi trả hàng tại cảng trả hàng.</li>
<li>Nghĩa vụ: làm cho tàu đủ khả năng đi biển, bố trí thuyền bộ, trang bị cung ứng; chăm sóc hàng hóa (xếp, chằng buộc, bảo quản, dỡ hàng) cẩn thận.</li>
<li><b>Giới hạn trách nhiệm</b> (khi không kê khai giá trị hàng trên vận đơn): tối đa <b>666,67 SDR/kiện</b> hoặc <b>2 SDR/kg</b> trọng lượng cả bì, tùy cách tính nào cao hơn. Container đóng nhiều kiện: nếu vận đơn ghi số kiện thì tính theo số kiện đó.</li>
<li>Có các trường hợp <b>miễn trách</b> (ví dụ: lỗi của thuyền trưởng, thuyền viên trong việc điều khiển hoặc quản trị tàu; hỏa hoạn không do lỗi người vận chuyển; thiên tai; khuyết tật ẩn tỳ của hàng; lỗi của người gửi hàng…).</li>
<li><b>Thời hiệu khởi kiện</b> về mất mát, hư hỏng hàng hóa vận chuyển theo chứng từ vận chuyển: <b>01 năm</b> kể từ ngày trả hàng hoặc lẽ ra phải trả hàng.</li>
</ul>

<h2>3. Thông báo tổn thất — mốc thời gian sống còn</h2>
<ul>
<li>Mất mát, hư hỏng <b>rõ ràng</b>: thông báo bằng văn bản <b>ngay khi nhận hàng</b>.</li>
<li>Hư hỏng <b>không thể phát hiện từ bên ngoài</b>: thông báo trong vòng <b>03 ngày</b> kể từ ngày nhận hàng.</li>
<li>Nếu không thông báo, hàng được <b>suy đoán</b> là đã được giao đúng như mô tả trong vận đơn (người khiếu nại phải chứng minh ngược lại).</li>
</ul>

<h2>4. Vai trò của cảng trong chuỗi chứng cứ tổn thất</h2>
<p>Khi có tổn thất, câu hỏi đầu tiên là: <b>tổn thất xảy ra ở đâu</b> — trên tàu, trong quá trình xếp dỡ, hay trong bãi? Chứng cứ của cảng quyết định ai phải bồi thường:</p>
<ul>
<li><b>EIR</b> (Equipment Interchange Receipt) — phiếu giao nhận container ghi tình trạng vỏ, seal tại cổng.</li>
<li><b>Biên bản hàng đổ vỡ/hư hỏng</b> (COR — Cargo Outturn Report / Damage Report) lập khi dỡ hàng, có chữ ký đại diện tàu (Chief Officer).</li>
<li><b>Tally sheet</b> (phiếu kiểm đếm) với hàng rời, hàng bách hóa.</li>
<li>Ảnh, video camera cầu tàu, dữ liệu cảm biến cẩu (cú va, quá tải).</li>
</ul>
<div class="callout warn"><strong class="title">⚠️ Nguyên tắc vàng</strong>Container/hàng hư hỏng phát hiện khi dỡ từ tàu → lập biên bản <b>trước khi</b> hàng rời móc cẩu hoặc ngay tại cầu tàu, có xác nhận của tàu. Nếu để sang bãi mới phát hiện, cảng rất khó chứng minh tổn thất không do mình gây ra.</div>
`,
      keyPoints: [
        'B/L: biên lai nhận hàng + bằng chứng hợp đồng + chứng từ sở hữu.',
        'Giới hạn trách nhiệm: 666,67 SDR/kiện hoặc 2 SDR/kg, lấy mức cao hơn (nếu không kê khai giá trị).',
        'Thông báo tổn thất: ngay khi nhận hàng (rõ ràng) hoặc trong 3 ngày (không rõ ràng). Thời hiệu khởi kiện: 1 năm.',
        'Chứng cứ của cảng (EIR, COR, tally, ảnh) quyết định ai phải bồi thường.'
      ],
      apply: [
        'Rà soát mẫu EIR/biên bản hư hỏng: có đủ sơ đồ vị trí hư hỏng, ảnh, chữ ký tàu/tài xế không?',
        'Kiểm tra camera cầu tàu: có ghi lại được thao tác cẩu ở mọi vị trí hầm hàng không?',
        'Tập huấn nhân viên kiểm đếm về quy tắc “lập biên bản trước khi rời móc cẩu”.'
      ],
      quiz: [
        { q: 'Giới hạn trách nhiệm của người vận chuyển theo BLHH 2015 (không kê khai giá trị) là?', options: ['100 USD/kiện', '666,67 SDR/kiện hoặc 2 SDR/kg, lấy mức cao hơn', '8,33 SDR/kg', 'Toàn bộ giá trị hàng'], answer: 1 },
        { q: 'Hư hỏng không thể phát hiện từ bên ngoài phải thông báo trong thời hạn?', options: ['24 giờ', '3 ngày kể từ ngày nhận hàng', '7 ngày', '30 ngày'], answer: 1 },
        { q: 'Chức năng nào giúp vận đơn có thể mua bán, chuyển nhượng?', options: ['Biên lai nhận hàng', 'Bằng chứng hợp đồng', 'Chứng từ sở hữu hàng hóa', 'Chứng từ hải quan'], answer: 2 },
        { q: 'Thời hiệu khởi kiện về mất mát, hư hỏng hàng hóa theo chứng từ vận chuyển là?', options: ['6 tháng', '1 năm', '2 năm', '3 năm'], answer: 1 }
      ]
    },
    {
      id: 'luat-dtnd', title: 'Luật Giao thông đường thủy nội địa: cảng, bến, phương tiện, sà lan', minutes: 14,
      source: 'Luật GTĐTNĐ 23/2004/QH11, sửa đổi 48/2014/QH13; NĐ 08/2021/NĐ-CP; NĐ 139/2021/NĐ-CP',
      body: `
<h2>1. Văn bản cốt lõi</h2>
<ul>
<li><b>Luật Giao thông đường thủy nội địa</b> số 23/2004/QH11, sửa đổi, bổ sung bởi Luật số 48/2014/QH13 (và một số luật liên quan sau đó).</li>
<li><b>Nghị định 08/2021/NĐ-CP</b> về quản lý hoạt động đường thủy nội địa (cảng, bến, vùng nước; phương tiện vào/rời cảng) — sửa đổi bởi NĐ 54/2022/NĐ-CP và các văn bản sau.</li>
<li><b>Nghị định 139/2021/NĐ-CP</b> xử phạt VPHC lĩnh vực đường thủy nội địa.</li>
<li><b>Nghị định 42/2020/NĐ-CP</b> về danh mục hàng hóa nguy hiểm và vận chuyển hàng nguy hiểm trên đường bộ, đường thủy nội địa.</li>
</ul>

<h2>2. Cảng thủy nội địa và bến thủy nội địa</h2>
<div class="table-wrap"><table>
<tr><th></th><th>Cảng thủy nội địa</th><th>Bến thủy nội địa</th></tr>
<tr><td>Quy mô</td><td>Hệ thống công trình (vùng đất cảng + vùng nước), có thể gồm nhiều cầu cảng</td><td>Vị trí độc lập, quy mô nhỏ, đơn giản</td></tr>
<tr><td>Thủ tục</td><td>Phải được <b>công bố</b> đưa vào sử dụng</td><td>Phải được <b>cấp phép hoạt động</b></td></tr>
<tr><td>Phân loại</td><td>Cảng hàng hóa, cảng hành khách, cảng chuyên dùng; có cảng được tiếp nhận phương tiện thủy nước ngoài/tàu biển</td><td>Bến hàng hóa, bến hành khách, bến khách ngang sông…</td></tr>
</table></div>

<h2>3. Điều kiện để phương tiện (sà lan, tàu đẩy, tàu kéo) hoạt động</h2>
<ul>
<li><b>Giấy chứng nhận đăng ký</b> phương tiện thủy nội địa.</li>
<li><b>Giấy chứng nhận an toàn kỹ thuật và bảo vệ môi trường</b> (đăng kiểm) còn hiệu lực; có <b>vạch dấu mớn nước an toàn</b> (dấu chuyên chở).</li>
<li>Thuyền viên, người lái có <b>bằng, chứng chỉ chuyên môn</b> phù hợp; đủ định biên.</li>
<li>Phương tiện mang cấp <b>VR-SB</b> được hoạt động tuyến ven biển theo quy định.</li>
<li>Vào, rời cảng/bến: thực hiện thủ tục với <b>Cảng vụ đường thủy nội địa</b> (hoặc Cảng vụ hàng hải đối với phương tiện vào vùng nước cảng biển).</li>
</ul>

<h2>4. Trách nhiệm của doanh nghiệp cảng khi xếp dỡ hàng cho sà lan</h2>
<div class="callout danger"><strong class="title">⛔ Không xếp hàng quá vạch mớn nước</strong>Xếp hàng làm phương tiện <b>chìm quá vạch dấu mớn nước an toàn</b> là vi phạm phổ biến, bị xử phạt nặng và là nguyên nhân hàng đầu gây chìm sà lan. Doanh nghiệp cảng nên kiểm tra mớn nước trước khi cho phương tiện rời cầu và từ chối xếp thêm khi vượt tải.</div>
<ul>
<li>Kiểm tra giấy tờ phương tiện, thuyền viên trước khi làm hàng (đặc biệt với khách hàng mới).</li>
<li>Bố trí hàng cân bằng, đúng sơ đồ xếp; container xếp tầng trên sà lan phải chằng buộc, khóa góc (twistlock) đầy đủ.</li>
<li>Không làm hàng khi thời tiết vượt giới hạn, mực nước/dòng chảy nguy hiểm.</li>
<li>Hàng nguy hiểm: kiểm tra phương tiện có đủ điều kiện chở hàng nguy hiểm, nhãn, biển báo theo NĐ 42/2020.</li>
</ul>

<h2>5. Hợp đồng vận chuyển bằng đường thủy nội địa</h2>
<p>Luật GTĐTNĐ có quy định riêng về hợp đồng vận tải hàng hóa, giấy vận chuyển, trách nhiệm bồi thường. Trong thực tế, các hợp đồng thuê sà lan nên quy định rõ: thời gian làm hàng cho phép, phí chờ đợi (tương tự demurrage), trách nhiệm kiểm đếm, giao nhận theo nguyên đai nguyên kiện hay theo trọng lượng, xử lý hao hụt hàng rời (than, clinker, cát…).</p>
`,
      keyPoints: [
        'Luật GTĐTNĐ 23/2004 (sửa đổi 48/2014); NĐ 08/2021 quản lý hoạt động; NĐ 139/2021 xử phạt; NĐ 42/2020 hàng nguy hiểm.',
        'Cảng thủy nội địa phải được công bố; bến thủy nội địa phải được cấp phép hoạt động.',
        'Phương tiện cần: đăng ký, đăng kiểm còn hạn, vạch mớn nước, thuyền viên có bằng, định biên đủ.',
        'Tuyệt đối không xếp hàng quá vạch dấu mớn nước an toàn.'
      ],
      apply: [
        'Lập checklist 1 trang “Tiếp nhận sà lan”: giấy tờ, mớn nước trước/sau xếp, chằng buộc, thời tiết.',
        'Rà soát hợp đồng thuê/ phục vụ sà lan: có điều khoản về thời gian làm hàng, phí chờ, hao hụt cho phép chưa?'
      ],
      quiz: [
        { q: 'Bến thủy nội địa muốn hoạt động cần thủ tục gì?', options: ['Công bố cảng', 'Cấp phép hoạt động', 'Không cần thủ tục', 'Đăng ký kinh doanh là đủ'], answer: 1 },
        { q: 'Nghị định xử phạt VPHC trong lĩnh vực đường thủy nội địa là?', options: ['NĐ 142/2017', 'NĐ 139/2021', 'NĐ 128/2020', 'NĐ 100/2019'], answer: 1 },
        { q: 'Phương tiện mang cấp VR-SB được phép?', options: ['Chạy tuyến quốc tế', 'Hoạt động tuyến ven biển theo quy định', 'Chỉ hoạt động trong sông nhỏ', 'Chở hành khách quốc tế'], answer: 1 },
        { q: 'Hành vi nào là nguyên nhân hàng đầu gây chìm sà lan?', options: ['Sơn vỏ không đúng màu', 'Xếp hàng quá vạch dấu mớn nước an toàn', 'Thuyền viên không mặc đồng phục', 'Chạy ban ngày'], answer: 1 }
      ]
    },
    {
      id: 'hang-nguy-hiem-isps', title: 'Hàng nguy hiểm (IMDG), VGM, an ninh cảng (ISPS) & môi trường', minutes: 14,
      source: 'IMDG Code; SOLAS Ch.VI/VII & XI-2; ISPS Code; MARPOL; NĐ 42/2020',
      body: `
<h2>1. Hàng nguy hiểm — 9 nhóm (Class) theo IMDG Code</h2>
<div class="table-wrap"><table>
<tr><th>Class</th><th>Loại</th><th>Ví dụ</th></tr>
<tr><td>1</td><td>Chất nổ</td><td>Pháo, kíp nổ</td></tr>
<tr><td>2</td><td>Khí (2.1 dễ cháy, 2.2 không cháy, 2.3 độc)</td><td>LPG, CO₂, chlorine</td></tr>
<tr><td>3</td><td>Chất lỏng dễ cháy</td><td>Xăng, sơn, dung môi</td></tr>
<tr><td>4</td><td>Chất rắn dễ cháy, tự cháy, gặp nước sinh khí cháy</td><td>Lưu huỳnh, than hoạt tính, canxi cacbua</td></tr>
<tr><td>5</td><td>Chất oxy hóa (5.1), peroxide hữu cơ (5.2)</td><td>Ammonium nitrate, hydrogen peroxide</td></tr>
<tr><td>6</td><td>Chất độc (6.1), chất lây nhiễm (6.2)</td><td>Thuốc trừ sâu, mẫu y tế</td></tr>
<tr><td>7</td><td>Chất phóng xạ</td><td>Nguồn phóng xạ công nghiệp</td></tr>
<tr><td>8</td><td>Chất ăn mòn</td><td>Axit, xút</td></tr>
<tr><td>9</td><td>Chất và vật phẩm nguy hiểm khác</td><td>Pin lithium, amiăng, chất ô nhiễm biển</td></tr>
</table></div>
<p>Yêu cầu khai thác: tờ khai hàng nguy hiểm (<b>DG Declaration</b>), <b>MSDS/SDS</b>, nhãn (placard) đúng class trên 4 mặt container, số UN. Bãi phải bố trí <b>khu vực riêng</b>, tuân thủ <b>bảng cách ly (segregation)</b> giữa các class, có phương án ứng cứu, thiết bị PCCC phù hợp.</p>
<div class="callout danger"><strong class="title">⛔ Bài học lớn</strong>Vụ nổ cảng Beirut (2020) — ammonium nitrate (Class 5.1) lưu kho nhiều năm không đúng điều kiện — và cảng Thiên Tân (2015) cho thấy hàng nguy hiểm tồn đọng và khai báo sai là rủi ro thảm họa. Hàng nguy hiểm tồn bãi phải được báo cáo và xử lý ưu tiên.</div>

<h2>2. VGM — Khối lượng toàn bộ container đã xác minh</h2>
<p>Theo <b>SOLAS Chương VI, Quy định 2</b> (hiệu lực toàn cầu từ 01/7/2016), container hàng xuất phải có VGM do <b>người gửi hàng</b> cung cấp trước khi xếp tàu. Hai phương pháp:</p>
<ul>
<li><b>Phương pháp 1</b>: cân toàn bộ container đã đóng hàng, đã niêm phong.</li>
<li><b>Phương pháp 2</b>: cân toàn bộ hàng + vật liệu chèn lót, cộng với trọng lượng vỏ (tare) container.</li>
</ul>
<p>Container không có VGM <b>không được xếp lên tàu</b>. Cảng có cân tại cổng có thể cung cấp dịch vụ cân VGM.</p>

<h2>3. An ninh bến cảng — ISPS Code</h2>
<ul>
<li>Áp dụng cho bến cảng tiếp nhận tàu biển chạy tuyến quốc tế (SOLAS Chương XI-2).</li>
<li>Ba cấp độ an ninh: <b>Cấp 1</b> (bình thường), <b>Cấp 2</b> (tăng cường), <b>Cấp 3</b> (đặc biệt).</li>
<li>Bến cảng có <b>Kế hoạch an ninh bến cảng (PFSP)</b> được phê duyệt và <b>Nhân viên an ninh bến cảng (PFSO)</b>.</li>
<li>Kiểm soát ra vào, khu vực hạn chế, giám sát hàng hóa và đồ dự trữ, diễn tập định kỳ.</li>
</ul>

<h2>4. Môi trường</h2>
<ul>
<li>Tiếp nhận chất thải từ tàu theo MARPOL (dầu thải, rác, nước thải).</li>
<li>Phương án ứng phó sự cố tràn dầu được phê duyệt; vật tư ứng phó (phao quây, chất thấm dầu).</li>
<li>Kiểm soát bụi với hàng rời (than, clinker, quặng): phun sương, che phủ, quét dọn — vấn đề thường bị khiếu nại bởi cộng đồng.</li>
</ul>
`,
      keyPoints: [
        'IMDG có 9 class; yêu cầu DG Declaration, SDS, placard, số UN, cách ly theo bảng segregation.',
        'VGM (SOLAS VI/2, từ 01/7/2016): không có VGM → không xếp tàu. Hai phương pháp cân.',
        'ISPS: 3 cấp an ninh, PFSP, PFSO, diễn tập định kỳ.',
        'Hàng nguy hiểm tồn bãi là rủi ro thảm họa — xử lý ưu tiên.'
      ],
      apply: [
        'Đi kiểm tra khu hàng nguy hiểm: placard còn đủ 4 mặt? Có container trái bảng cách ly không?',
        'Lấy danh sách container DG lưu bãi > 14 ngày và báo cáo lãnh đạo.',
        'Kiểm tra lịch diễn tập an ninh ISPS & ứng phó tràn dầu năm nay đã thực hiện chưa.'
      ],
      quiz: [
        { q: 'Ammonium nitrate thuộc class nào theo IMDG?', options: ['Class 3', 'Class 5.1', 'Class 8', 'Class 9'], answer: 1 },
        { q: 'Ai có trách nhiệm cung cấp VGM?', options: ['Cảng', 'Người gửi hàng (shipper)', 'Thuyền trưởng', 'Hải quan'], answer: 1 },
        { q: 'Pin lithium thường được xếp vào class nào?', options: ['Class 1', 'Class 4.1', 'Class 9', 'Class 7'], answer: 2 },
        { q: 'ISPS Code có bao nhiêu cấp độ an ninh?', options: ['2', '3', '4', '5'], answer: 1 }
      ]
    },
    {
      id: 'nor-laytime', title: 'Tàu chuyến: NOR, SOF, laytime, demurrage & despatch', minutes: 13,
      source: 'Tập quán thuê tàu chuyến (GENCON), BLHH 2015 phần hợp đồng thuê tàu chuyến',
      body: `
<h2>1. Vì sao người khai thác cảng hàng rời/hàng dự án cần biết?</h2>
<p>Với tàu chuyến (hàng rời, hàng siêu trường siêu trọng), <b>năng suất xếp dỡ của cảng quyết định trực tiếp tiền phạt (demurrage) hoặc thưởng (despatch)</b> giữa chủ tàu và người thuê tàu. Khách hàng sẽ yêu cầu cảng cam kết năng suất và hồ sơ thời gian chính xác.</p>

<h2>2. Các khái niệm</h2>
<div class="table-wrap"><table>
<tr><th>Thuật ngữ</th><th>Ý nghĩa</th></tr>
<tr><td><b>NOR</b> – Notice of Readiness</td><td>Thông báo sẵn sàng làm hàng do thuyền trưởng phát khi tàu đã đến nơi quy định, sẵn sàng về mọi mặt (hầm hàng sạch, thủ tục xong…)</td></tr>
<tr><td><b>Laytime</b></td><td>Thời gian làm hàng cho phép theo hợp đồng (ví dụ 5.000 MT/WWD SHEX)</td></tr>
<tr><td><b>WWD / WIBON / SHEX / SHINC</b></td><td>Ngày làm việc thời tiết tốt / Có cầu hay không đều tính / Trừ Chủ nhật, ngày lễ / Kể cả Chủ nhật, ngày lễ</td></tr>
<tr><td><b>SOF</b> – Statement of Facts</td><td>Bảng ghi chép sự kiện có xác nhận của tàu và đại lý/cảng: giờ đến, NOR, cập cầu, bắt đầu/kết thúc làm hàng, mưa, hỏng thiết bị…</td></tr>
<tr><td><b>Demurrage</b></td><td>Tiền phạt người thuê trả chủ tàu khi vượt laytime</td></tr>
<tr><td><b>Despatch</b></td><td>Tiền thưởng chủ tàu trả người thuê khi xong sớm (thường = ½ demurrage)</td></tr>
<tr><td><b>Once on demurrage, always on demurrage</b></td><td>Đã bị phạt thì các ngoại lệ (mưa, Chủ nhật) thường không còn được trừ, trừ khi hợp đồng quy định khác</td></tr>
</table></div>

<h2>3. Container: Demurrage vs Detention</h2>
<ul>
<li><b>DEM</b> (container demurrage): phí hãng tàu tính khi container hàng lưu tại cảng/bãi quá số ngày miễn phí.</li>
<li><b>DET</b> (detention): phí khi người nhận giữ vỏ container ngoài cảng quá thời gian miễn phí.</li>
<li><b>Storage</b>: phí lưu bãi do <b>cảng</b> thu — khác với DEM của hãng tàu.</li>
</ul>

<h2>4. Thực hành tốt cho cảng</h2>
<ul>
<li>SOF phải được ghi <b>chính xác đến phút</b>, có lý do cho mọi gián đoạn (mưa, hỏng cẩu cảng, hỏng cẩu tàu, chờ hàng, chờ xe…). Gián đoạn do lỗi tàu hay lỗi cảng có hệ quả tài chính khác nhau.</li>
<li>Báo cáo năng suất theo ca gửi cho đại lý/khách hàng giúp tránh tranh chấp về sau.</li>
<li>Cam kết năng suất trong hợp đồng với khách hàng cần có điều kiện đi kèm (hàng sẵn sàng, xe đủ, thời tiết, thiết bị tàu hoạt động tốt).</li>
</ul>
`,
      keyPoints: [
        'NOR khởi động laytime (theo điều kiện hợp đồng); SOF là chứng cứ tính demurrage/despatch.',
        'WWD, SHEX, SHINC, WIBON quyết định thời gian nào được tính.',
        'Container: DEM (tại cảng, hãng tàu thu) ≠ DET (ngoài cảng) ≠ Storage (cảng thu).',
        'Mọi gián đoạn phải ghi rõ nguyên nhân — lỗi tàu hay lỗi cảng.'
      ],
      apply: [
        'Lấy 1 SOF gần nhất, kiểm tra: mọi khoảng dừng > 15 phút đã có lý do và chữ ký xác nhận chưa?',
        'Dùng công cụ “Laytime – Demurrage” trong mục Công cụ để mô phỏng 1 chuyến tàu hàng rời gần đây.'
      ],
      quiz: [
        { q: 'SHEX nghĩa là?', options: ['Kể cả Chủ nhật và ngày lễ', 'Trừ Chủ nhật và ngày lễ', 'Chỉ làm ban ngày', 'Thời tiết tốt'], answer: 1 },
        { q: 'Phí lưu container hàng tại cảng quá thời gian miễn phí do hãng tàu thu gọi là?', options: ['Detention', 'Demurrage', 'Despatch', 'THC'], answer: 1 },
        { q: 'Despatch thường bằng bao nhiêu so với demurrage?', options: ['Gấp đôi', 'Bằng nhau', 'Một nửa', 'Không liên quan'], answer: 2 }
      ]
    }
  ]
});
