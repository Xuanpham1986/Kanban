window.PA_DATA = window.PA_DATA || { modules: [], glossary: [] };
window.PA_DATA.modules.push({
  id: 'kinh-doanh', order: 3, icon: '📜', short: 'Luật kinh doanh',
  title: 'Luật kinh doanh, hợp đồng & dịch vụ logistics',
  desc: 'Luật Doanh nghiệp, Luật Thương mại (dịch vụ logistics, quyền cầm giữ), Bộ luật Dân sự về hợp đồng, phạt vi phạm, bồi thường, giá dịch vụ, bảo hiểm.',
  intro: '<p>Hầu hết tranh chấp ở cảng và kho không nằm ở luật chuyên ngành mà ở <b>hợp đồng</b>: ai chịu trách nhiệm khi hàng hư hỏng, giới hạn bồi thường bao nhiêu, cảng có được giữ hàng khi khách nợ phí không. Chuyên đề này giúp bạn đọc và đàm phán hợp đồng như một nhà quản lý hiểu luật.</p>',
  lessons: [
    {
      id: 'doanh-nghiep', title: 'Luật Doanh nghiệp: thẩm quyền ký kết & đại diện', minutes: 10,
      source: 'Luật Doanh nghiệp 59/2020/QH14 (đã sửa đổi); BLDS 2015 phần đại diện',
      body: `
<h2>1. Ai được ký hợp đồng thay công ty?</h2>
<ul>
<li><b>Người đại diện theo pháp luật</b> (ghi trong Giấy chứng nhận đăng ký doanh nghiệp/Điều lệ) — thường là Tổng Giám đốc/Giám đốc hoặc Chủ tịch.</li>
<li><b>Người đại diện theo ủy quyền</b>: được ủy quyền bằng văn bản (giấy ủy quyền, quyết định phân cấp) — chỉ được ký trong <b>phạm vi và thời hạn</b> ủy quyền.</li>
<li>Giao dịch vượt phạm vi đại diện: có thể <b>không phát sinh nghĩa vụ</b> với doanh nghiệp, trừ khi doanh nghiệp chấp thuận hoặc biết mà không phản đối (theo BLDS).</li>
</ul>
<div class="callout tip"><strong class="title">💡 Thực hành</strong>Khi ký hợp đồng với khách hàng/nhà thầu lớn, hãy <b>yêu cầu bản sao giấy ủy quyền</b> của người ký phía đối tác và kiểm tra phạm vi (giá trị tối đa, loại hợp đồng). Ngược lại, nắm rõ ma trận phân cấp ký kết của chính công ty bạn.</div>

<h2>2. Con dấu</h2>
<p>Theo Luật Doanh nghiệp 2020, doanh nghiệp tự quyết định loại dấu, số lượng, hình thức (kể cả <b>chữ ký số</b>). Việc quản lý, sử dụng dấu theo Điều lệ/quy chế. Hợp đồng không đóng dấu <b>không đương nhiên vô hiệu</b> nếu người ký có thẩm quyền — trừ khi hai bên thỏa thuận hợp đồng chỉ có hiệu lực khi có dấu.</p>

<h2>3. Các loại hình doanh nghiệp thường gặp trong ngành cảng</h2>
<div class="table-wrap"><table>
<tr><th>Loại hình</th><th>Đặc điểm quản trị</th></tr>
<tr><td>Công ty cổ phần (nhiều cảng đã cổ phần hóa)</td><td>Đại hội đồng cổ đông – HĐQT – Ban Tổng giám đốc – Ban kiểm soát/Ủy ban kiểm toán; quy định chặt về giao dịch với người có liên quan</td></tr>
<tr><td>Công ty TNHH một thành viên (100% vốn Nhà nước hoặc vốn công ty mẹ)</td><td>Chủ sở hữu – Chủ tịch/Hội đồng thành viên – Giám đốc</td></tr>
<tr><td>Liên doanh (thường với hãng tàu/nhà khai thác quốc tế)</td><td>Thỏa thuận liên doanh, quyền phủ quyết, cơ chế bế tắc</td></tr>
</table></div>

<h2>4. Trách nhiệm của người quản lý</h2>
<p>Người quản lý doanh nghiệp phải thực hiện nhiệm vụ một cách <b>trung thực, cẩn trọng, tốt nhất</b> vì lợi ích doanh nghiệp; công khai lợi ích liên quan; không lạm dụng chức vụ. Với nhà quản lý cấp trung (trưởng kho, trưởng ca), nguyên tắc này thể hiện qua: không nhận quà từ nhà thầu/khách hàng vượt quy chế, khai báo xung đột lợi ích khi chọn nhà cung cấp.</p>
`,
      keyPoints: [
        'Chỉ người đại diện theo pháp luật hoặc người được ủy quyền hợp lệ (trong phạm vi) mới ký ràng buộc công ty.',
        'Kiểm tra giấy ủy quyền của người ký phía đối tác với hợp đồng giá trị lớn.',
        'Hợp đồng không có dấu không đương nhiên vô hiệu nếu người ký có thẩm quyền.',
        'Người quản lý phải trung thực, cẩn trọng, công khai xung đột lợi ích.'
      ],
      apply: [
        'Tìm và đọc quy chế phân cấp ký kết của công ty bạn: bạn được ký văn bản/hợp đồng gì, đến giá trị nào?',
        'Lập danh sách 5 hợp đồng đang thực hiện quan trọng nhất với đơn vị bạn, kiểm tra ai ký phía đối tác và có ủy quyền không.'
      ],
      quiz: [
        { q: 'Hợp đồng do người được ủy quyền ký vượt phạm vi ủy quyền thì?', options: ['Luôn có hiệu lực', 'Có thể không phát sinh nghĩa vụ với doanh nghiệp, trừ khi doanh nghiệp chấp thuận', 'Luôn vô hiệu tuyệt đối', 'Chỉ cần đóng dấu là hợp lệ'], answer: 1 },
        { q: 'Theo Luật Doanh nghiệp 2020, hình thức con dấu do ai quyết định?', options: ['Công an', 'Sở Kế hoạch và Đầu tư', 'Doanh nghiệp tự quyết định', 'Bộ Tài chính'], answer: 2 }
      ]
    },
    {
      id: 'hop-dong', title: 'Hợp đồng thương mại: phạt vi phạm, bồi thường, bất khả kháng, tranh chấp', minutes: 15,
      source: 'Luật Thương mại 36/2005/QH11; BLDS 91/2015/QH13; Luật Trọng tài thương mại 2010',
      body: `
<h2>1. Cấu trúc một hợp đồng dịch vụ cảng/kho tốt</h2>
<ol>
<li>Chủ thể, đại diện, thẩm quyền ký.</li>
<li><b>Phạm vi dịch vụ</b> (scope of work) — mô tả cụ thể: xếp dỡ, lưu bãi, đóng rút, cân, giám sát…</li>
<li><b>Tiêu chuẩn dịch vụ (SLA/KPI)</b>: năng suất, thời gian giao nhận, tỷ lệ hư hỏng cho phép.</li>
<li>Giá, phương thức thanh toán, điều chỉnh giá.</li>
<li><b>Giao nhận và chuyển rủi ro</b>: thời điểm cảng bắt đầu và kết thúc trách nhiệm; cách giao nhận (nguyên container – nguyên seal, kiểm đếm theo kiện, theo trọng lượng).</li>
<li><b>Trách nhiệm & giới hạn bồi thường</b>.</li>
<li>Bảo hiểm.</li>
<li>Bất khả kháng.</li>
<li>Phạt vi phạm, bồi thường thiệt hại.</li>
<li>Quyền cầm giữ hàng hóa (lien).</li>
<li>Luật áp dụng, cơ quan giải quyết tranh chấp.</li>
</ol>

<h2>2. Phạt vi phạm và bồi thường thiệt hại</h2>
<div class="table-wrap"><table>
<tr><th></th><th>Phạt vi phạm</th><th>Bồi thường thiệt hại</th></tr>
<tr><td>Căn cứ</td><td><b>Chỉ áp dụng khi có thỏa thuận</b> trong hợp đồng</td><td>Phát sinh khi có vi phạm + thiệt hại thực tế + quan hệ nhân quả</td></tr>
<tr><td>Mức (Luật Thương mại)</td><td>Tổng mức phạt <b>không quá 8%</b> giá trị phần nghĩa vụ hợp đồng bị vi phạm</td><td>Theo thiệt hại thực tế, trực tiếp + khoản lợi trực tiếp đáng lẽ được hưởng</td></tr>
<tr><td>Áp dụng đồng thời?</td><td colspan="2">Nếu hợp đồng có thỏa thuận phạt vi phạm, bên bị vi phạm <b>có quyền áp dụng cả phạt vi phạm và buộc bồi thường</b> (trừ khi luật có quy định khác)</td></tr>
</table></div>
<p>Bên yêu cầu bồi thường phải <b>chứng minh tổn thất</b> và có nghĩa vụ <b>hạn chế tổn thất</b> — nếu không, bên vi phạm được giảm phần bồi thường tương ứng.</p>

<h2>3. Miễn trách nhiệm & bất khả kháng</h2>
<p>Luật Thương mại miễn trách khi: xảy ra trường hợp miễn trách đã thỏa thuận; sự kiện bất khả kháng; vi phạm hoàn toàn do lỗi bên kia; do thực hiện quyết định của cơ quan nhà nước mà các bên không thể biết khi giao kết. Bên muốn miễn trách phải <b>thông báo bằng văn bản</b> kịp thời và <b>chứng minh</b>.</p>
<div class="callout tip"><strong class="title">💡 Soạn điều khoản bất khả kháng cho cảng</strong>Liệt kê cụ thể: bão từ cấp X, lệnh cấm cảng/đóng luồng của Cảng vụ, dịch bệnh có lệnh phong tỏa, sự cố lưới điện quốc gia kéo dài… Kèm nghĩa vụ thông báo trong N giờ và quyền chấm dứt hợp đồng nếu kéo dài quá M ngày.</div>

<h2>4. Thời hiệu và giải quyết tranh chấp</h2>
<ul>
<li>Thời hiệu khởi kiện tranh chấp thương mại theo Luật Thương mại: <b>02 năm</b> kể từ thời điểm quyền và lợi ích hợp pháp bị xâm phạm (lưu ý: tranh chấp hàng hải, vận đơn có thời hiệu riêng).</li>
<li>Phương thức: thương lượng → hòa giải (hòa giải thương mại) → <b>trọng tài thương mại</b> (ví dụ VIAC) hoặc <b>tòa án</b>.</li>
<li>Trọng tài: xét xử kín, chung thẩm, nhanh hơn — chỉ áp dụng khi có <b>thỏa thuận trọng tài</b> hợp lệ.</li>
</ul>

<h2>5. Lỗi thường gặp khi đọc hợp đồng</h2>
<ul>
<li>Điều khoản phạt vượt 8% → phần vượt có nguy cơ không được công nhận.</li>
<li>Không quy định giới hạn trách nhiệm → cảng có thể phải bồi thường toàn bộ giá trị hàng hóa (có thể gấp hàng trăm lần doanh thu dịch vụ).</li>
<li>Thỏa thuận trọng tài mơ hồ (“trọng tài hoặc tòa án”) → dễ bị tuyên vô hiệu, mất thời gian.</li>
<li>Không có điều khoản thông báo khiếu nại trong thời hạn → khách hàng có thể khiếu nại muộn.</li>
</ul>
`,
      keyPoints: [
        'Phạt vi phạm chỉ áp dụng khi có thỏa thuận; tối đa 8% giá trị phần nghĩa vụ bị vi phạm (Luật Thương mại).',
        'Bồi thường thiệt hại cần: vi phạm + thiệt hại thực tế + quan hệ nhân quả; bên bị hại phải hạn chế tổn thất.',
        'Có thể áp dụng đồng thời phạt và bồi thường nếu hợp đồng có thỏa thuận phạt.',
        'Thời hiệu khởi kiện tranh chấp thương mại: 2 năm. Trọng tài cần thỏa thuận trọng tài rõ ràng.'
      ],
      apply: [
        'Chọn 1 hợp đồng dịch vụ đang thực hiện, đối chiếu với 11 mục trong “Cấu trúc hợp đồng tốt” — thiếu mục nào?',
        'Kiểm tra hợp đồng có quy định giới hạn trách nhiệm bồi thường của cảng/kho không. Nếu không, đề xuất bổ sung.',
        'Kiểm tra điều khoản tranh chấp: có chỉ định rõ một trung tâm trọng tài hoặc tòa án không?'
      ],
      quiz: [
        { q: 'Mức phạt vi phạm tối đa theo Luật Thương mại 2005 là?', options: ['5%', '8%', '10%', '12%'], answer: 1, explain: 'Tổng mức phạt không quá 8% giá trị phần nghĩa vụ hợp đồng bị vi phạm.' },
        { q: 'Phạt vi phạm được áp dụng khi nào?', options: ['Luôn luôn khi có vi phạm', 'Khi có thỏa thuận trong hợp đồng', 'Khi tòa án quyết định', 'Khi có thiệt hại'], answer: 1 },
        { q: 'Thời hiệu khởi kiện tranh chấp thương mại theo Luật Thương mại?', options: ['1 năm', '2 năm', '3 năm', '5 năm'], answer: 1 },
        { q: 'Điều kiện để giải quyết tranh chấp bằng trọng tài?', options: ['Giá trị tranh chấp lớn', 'Có thỏa thuận trọng tài hợp lệ', 'Một bên là doanh nghiệp nước ngoài', 'Tòa án đồng ý'], answer: 1 }
      ]
    },
    {
      id: 'logistics', title: 'Dịch vụ logistics: trách nhiệm, giới hạn & quyền cầm giữ hàng', minutes: 13,
      source: 'Luật Thương mại 2005 (Mục dịch vụ logistics); NĐ 163/2017/NĐ-CP',
      body: `
<h2>1. Dịch vụ logistics theo pháp luật Việt Nam</h2>
<p>Luật Thương mại định nghĩa dịch vụ logistics là hoạt động thương mại trong đó thương nhân tổ chức thực hiện một hoặc nhiều công việc: nhận hàng, vận chuyển, lưu kho, lưu bãi, làm thủ tục hải quan, tư vấn, đóng gói, ghi ký mã hiệu, giao hàng… Nghị định <b>163/2017/NĐ-CP</b> liệt kê các loại dịch vụ logistics, trong đó có <b>dịch vụ xếp dỡ container, dịch vụ kho bãi container, dịch vụ hỗ trợ vận tải biển</b> — tức là hoạt động khai thác cảng, kho bãi nằm trong phạm vi này.</p>

<h2>2. Giới hạn trách nhiệm</h2>
<ul>
<li>Trách nhiệm của thương nhân logistics được giới hạn theo thỏa thuận và pháp luật chuyên ngành (ví dụ hàng hải áp dụng BLHH).</li>
<li>Theo NĐ 163/2017: nếu không có thỏa thuận và pháp luật chuyên ngành không quy định, các bên được thỏa thuận; trách nhiệm tối đa <b>không vượt quá giá trị hàng hóa</b> (khách hàng có thể kê khai giá trị).</li>
<li>Thương nhân <b>không được hưởng giới hạn trách nhiệm</b> nếu tổn thất do lỗi cố ý của mình.</li>
</ul>

<h2>3. Các trường hợp miễn trách đặc thù</h2>
<p>Ngoài các trường hợp miễn trách chung, thương nhân logistics không chịu trách nhiệm khi: tổn thất do lỗi của khách hàng hoặc người được ủy quyền; do làm đúng theo chỉ dẫn của khách hàng; do khuyết tật của hàng hóa; do các trường hợp miễn trách trong pháp luật vận tải; không nhận được thông báo khiếu nại trong thời hạn quy định (thường 14 ngày kể từ ngày giao hàng) hoặc không nhận được thông báo khởi kiện trong thời hạn (9 tháng) — theo Luật Thương mại.</p>

<h2>4. Quyền cầm giữ và định đoạt hàng hóa</h2>
<p>Thương nhân kinh doanh dịch vụ logistics có quyền <b>cầm giữ một số lượng hàng hóa nhất định và các chứng từ liên quan</b> để đòi tiền nợ đã đến hạn của khách hàng — nhưng phải <b>thông báo ngay bằng văn bản</b> cho khách hàng.</p>
<ul>
<li>Sau <b>45 ngày</b> kể từ ngày thông báo cầm giữ mà khách hàng không trả nợ, thương nhân có quyền định đoạt hàng hóa (theo quy định pháp luật), dùng tiền thu được để thanh toán nợ.</li>
<li>Hàng có dấu hiệu hư hỏng có thể được định đoạt sớm hơn.</li>
<li>Thương nhân phải <b>bảo quản hàng</b> trong thời gian cầm giữ và chịu trách nhiệm nếu để mất mát, hư hỏng.</li>
</ul>
<div class="callout warn"><strong class="title">⚠️ Cẩn trọng với hàng chịu giám sát hải quan</strong>Quyền cầm giữ thương mại <b>không cho phép</b> đưa hàng chưa thông quan ra khỏi khu vực giám sát hay bán hàng nhập khẩu mà không qua thủ tục hải quan. Với hàng nhập chưa thông quan, phối hợp với hải quan và hãng tàu theo cơ chế hàng tồn đọng.</div>

<h2>5. Hợp đồng gửi giữ/lưu kho (BLDS 2015)</h2>
<p>Bên giữ tài sản phải bảo quản như đã thỏa thuận, trả lại đúng tài sản; nếu làm mất, hư hỏng phải bồi thường (trừ trường hợp miễn trách). Bên gửi phải báo trước tính chất tài sản cần bảo quản đặc biệt (dễ cháy, nhiệt độ…). → Áp dụng: yêu cầu khách hàng <b>khai báo hàng nguy hiểm/hàng đặc biệt</b> trong phiếu nhập kho, có điều khoản chuyển trách nhiệm nếu khai sai.</p>
`,
      keyPoints: [
        'Khai thác cảng, kho bãi container là dịch vụ logistics theo NĐ 163/2017.',
        'Giới hạn trách nhiệm theo thỏa thuận/luật chuyên ngành; tối đa không vượt giá trị hàng; mất quyền giới hạn nếu lỗi cố ý.',
        'Quyền cầm giữ hàng để đòi nợ đến hạn — phải thông báo văn bản; sau 45 ngày được định đoạt theo quy định.',
        'Không dùng quyền cầm giữ để xử lý hàng chưa thông quan trái quy định hải quan.'
      ],
      apply: [
        'Kiểm tra điều kiện giao dịch chung (T&C) của cảng/kho: có điều khoản giới hạn trách nhiệm, thời hạn khiếu nại, quyền cầm giữ chưa?',
        'Soạn mẫu “Thông báo cầm giữ hàng hóa” gồm: căn cứ, khoản nợ, hàng bị cầm giữ, thời hạn, hậu quả.',
        'Lập danh sách khách hàng nợ quá hạn có hàng đang lưu kho/bãi.'
      ],
      quiz: [
        { q: 'Thương nhân logistics được định đoạt hàng cầm giữ sau bao lâu kể từ ngày thông báo (nếu khách không trả nợ)?', options: ['15 ngày', '30 ngày', '45 ngày', '90 ngày'], answer: 2 },
        { q: 'Trường hợp nào thương nhân logistics KHÔNG được hưởng giới hạn trách nhiệm?', options: ['Tổn thất do thiên tai', 'Tổn thất do lỗi cố ý của chính thương nhân', 'Tổn thất do khuyết tật của hàng', 'Tổn thất do làm theo chỉ dẫn khách hàng'], answer: 1 },
        { q: 'Nghị định nào quy định chi tiết về kinh doanh dịch vụ logistics?', options: ['NĐ 163/2017/NĐ-CP', 'NĐ 37/2017/NĐ-CP', 'NĐ 68/2016/NĐ-CP', 'NĐ 08/2021/NĐ-CP'], answer: 0 }
      ]
    },
    {
      id: 'gia-hoa-don-tuan-thu', title: 'Giá dịch vụ, hóa đơn điện tử & tuân thủ trong kinh doanh cảng', minutes: 10,
      source: 'Luật Giá 16/2023/QH15; NĐ 123/2020/NĐ-CP về hóa đơn; quy định khung giá dịch vụ cảng biển',
      body: `
<h2>1. Giá dịch vụ cảng</h2>
<ul>
<li><b>Luật Giá 2023</b> (hiệu lực 01/7/2024): doanh nghiệp phải <b>niêm yết giá</b> hàng hóa, dịch vụ; một số dịch vụ thuộc danh mục phải <b>kê khai giá</b>.</li>
<li>Nhà nước ban hành <b>khung giá</b> cho một số dịch vụ cảng biển (ví dụ dịch vụ bốc dỡ container, hoa tiêu, sử dụng cầu bến, lai dắt) — giá của cảng phải nằm trong khung.</li>
<li>Thay đổi biểu giá: thông báo khách hàng trước thời hạn hợp lý; cập nhật niêm yết, kê khai theo quy định.</li>
</ul>

<h2>2. Hóa đơn điện tử</h2>
<p>Theo NĐ 123/2020/NĐ-CP (đã sửa đổi), doanh nghiệp sử dụng <b>hóa đơn điện tử</b>; thời điểm lập hóa đơn đối với cung cấp dịch vụ là khi hoàn thành việc cung cấp dịch vụ (hoặc khi thu tiền trước). Sai sót phổ biến: lập hóa đơn trễ với dịch vụ lưu bãi kéo dài, sai thông tin người mua (chủ hàng vs forwarder). Thống nhất quy trình giữa bộ phận khai thác và kế toán.</p>

<h2>3. Tuân thủ & đạo đức kinh doanh</h2>
<ul>
<li><b>Phòng chống tham nhũng</b>: không nhận/đưa lợi ích để “ưu tiên” giải phóng hàng, cấp chỗ bãi, lấy container trước.</li>
<li><b>Cạnh tranh</b>: không thỏa thuận ấn định giá với cảng khác; không lạm dụng vị trí thống lĩnh (ép khách hàng dùng dịch vụ kèm theo).</li>
<li><b>Bảo vệ dữ liệu cá nhân</b>: dữ liệu tài xế, camera, nhân viên phải được xử lý theo quy định về bảo vệ dữ liệu cá nhân.</li>
</ul>
<div class="callout info"><strong class="title">Ứng dụng</strong>Các “phí ngoài” (phí ưu tiên, phí lấy nhanh không có trong biểu giá) là rủi ro pháp lý và rủi ro uy tín lớn. Mọi dịch vụ thu tiền phải có trong biểu giá niêm yết và có hóa đơn.</div>
`,
      keyPoints: [
        'Luật Giá 2023: niêm yết giá; một số dịch vụ phải kê khai; dịch vụ cảng biển có khung giá Nhà nước.',
        'Hóa đơn điện tử lập khi hoàn thành dịch vụ (hoặc khi thu tiền trước).',
        'Mọi khoản thu phải có trong biểu giá niêm yết và có hóa đơn — loại bỏ “phí ngoài”.'
      ],
      apply: [
        'So sánh biểu giá đang áp dụng với khung giá Nhà nước hiện hành cho các dịch vụ chính.',
        'Rà soát xem có khoản thu nào ở hiện trường không nằm trong biểu giá niêm yết.'
      ],
      quiz: [
        { q: 'Luật Giá 2023 có hiệu lực từ?', options: ['01/01/2024', '01/7/2024', '01/01/2025', '01/7/2023'], answer: 1 },
        { q: '“Phí ưu tiên lấy container” thu bằng tiền mặt không có trong biểu giá là?', options: ['Bình thường trong ngành', 'Rủi ro pháp lý và uy tín, cần loại bỏ', 'Được phép nếu khách đồng ý', 'Chỉ cần ghi sổ'], answer: 1 }
      ]
    },
    {
      id: 'bao-hiem-rui-ro', title: 'Bảo hiểm & quản trị rủi ro pháp lý cho cảng, kho', minutes: 10,
      source: 'Luật Kinh doanh bảo hiểm 08/2022/QH15; thực tiễn bảo hiểm ngành cảng',
      body: `
<h2>1. Các loại bảo hiểm cần có</h2>
<div class="table-wrap"><table>
<tr><th>Loại</th><th>Bảo vệ cái gì</th></tr>
<tr><td><b>Bảo hiểm trách nhiệm người khai thác cảng (Terminal Operator's Liability – TOL)</b></td><td>Trách nhiệm pháp lý với hàng hóa của khách, tàu của khách, bên thứ ba khi xảy ra tổn thất do cảng gây ra</td></tr>
<tr><td>Bảo hiểm tài sản / thiết bị (cẩu, xe nâng, kho)</td><td>Hư hỏng tài sản của chính cảng (cháy, bão, va chạm)</td></tr>
<tr><td>Bảo hiểm gián đoạn kinh doanh</td><td>Mất doanh thu khi sự cố làm ngưng hoạt động</td></tr>
<tr><td>Bảo hiểm tai nạn lao động / sức khỏe</td><td>Người lao động</td></tr>
<tr><td>Bảo hiểm trách nhiệm công cộng</td><td>Thiệt hại cho bên thứ ba (người, tài sản) trong khu vực cảng</td></tr>
</table></div>
<p>Phân biệt với <b>bảo hiểm hàng hóa</b> (do chủ hàng mua — Institute Cargo Clauses A/B/C) và <b>P&I</b> (của chủ tàu). Khi xảy ra tổn thất hàng, công ty bảo hiểm hàng sẽ bồi thường cho chủ hàng rồi <b>thế quyền (subrogation)</b> đòi bên gây lỗi — có thể là cảng.</p>

<h2>2. Quản trị rủi ro pháp lý — 5 lớp phòng thủ</h2>
<ol>
<li><b>Hợp đồng/Điều kiện giao dịch chung</b>: giới hạn trách nhiệm, thời hạn khiếu nại.</li>
<li><b>Quy trình vận hành</b> chuẩn (SOP) và đào tạo.</li>
<li><b>Chứng cứ</b>: EIR, biên bản, camera, log hệ thống — lưu trữ đủ thời hạn khởi kiện.</li>
<li><b>Bảo hiểm</b> chuyển giao rủi ro tài chính.</li>
<li><b>Xử lý sự cố</b>: thông báo bảo hiểm sớm, giám định độc lập, không thừa nhận trách nhiệm khi chưa đủ căn cứ.</li>
</ol>
<div class="callout warn"><strong class="title">⚠️ Khi xảy ra tổn thất lớn</strong>Thông báo ngay cho công ty bảo hiểm (nhiều đơn bảo hiểm yêu cầu trong 24–72 giờ), giữ nguyên hiện trường nếu có thể, mời giám định viên độc lập, thu thập chứng cứ. Không tự ý ký văn bản thừa nhận lỗi hoặc cam kết bồi thường trước khi bảo hiểm đồng ý — có thể làm mất quyền được bồi thường.</div>
`,
      keyPoints: [
        'TOL (trách nhiệm người khai thác cảng) khác bảo hiểm hàng hóa và P&I.',
        'Bảo hiểm hàng bồi thường cho chủ hàng rồi thế quyền đòi bên có lỗi (có thể là cảng).',
        '5 lớp phòng thủ: hợp đồng – SOP – chứng cứ – bảo hiểm – xử lý sự cố.',
        'Không thừa nhận lỗi/cam kết bồi thường trước khi bảo hiểm đồng ý.'
      ],
      apply: [
        'Tìm hợp đồng bảo hiểm TOL hiện hành: hạn mức, mức khấu trừ, thời hạn thông báo tổn thất.',
        'Soạn quy trình 1 trang “Xử lý tổn thất hàng hóa trong 24 giờ đầu”.'
      ],
      quiz: [
        { q: 'Bảo hiểm nào bảo vệ cảng trước trách nhiệm bồi thường hàng hóa của khách?', options: ['P&I', 'Bảo hiểm hàng hóa ICC(A)', 'Bảo hiểm trách nhiệm người khai thác cảng (TOL)', 'Bảo hiểm sức khỏe'], answer: 2 },
        { q: '“Thế quyền” (subrogation) nghĩa là?', options: ['Bảo hiểm từ chối bồi thường', 'Bảo hiểm sau khi bồi thường được thay chủ hàng đòi bên có lỗi', 'Chuyển nhượng vận đơn', 'Hủy hợp đồng bảo hiểm'], answer: 1 }
      ]
    }
  ]
});
