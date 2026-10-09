# ⚓ Port Pro Academy

Trang web tự học dành cho người làm **khai thác cảng và quản lý kho**. Chạy hoàn toàn trên trình duyệt (không cần server, không cần tài khoản), xem tốt trên cả điện thoại và máy tính, cài được như app và học được khi mất mạng.

## Nội dung

| # | Chuyên đề | Bài | Trọng tâm |
|---|---|---|---|
| 0 | 🚢 Thực chiến cảng quốc tế đa hàng | 6 | Tàu – bãi – sà lan – ô tô; hàng rời (gầu ngoạm, IMSBC, đống hàng, hao hụt), tôn cuộn, siêu trọng (cẩu tàu heavy-lift, Ro-Ro qua sà lan), container chuyển tải sà lan, giám định mớn nước |
| 1 | 🛃 Pháp luật hải quan cho cảng & kho bãi | 6 | Luật Hải quan, phân luồng, thời hạn, VASSCM, seal, kho ngoại quan/CFS, hàng tồn đọng, xử phạt, HS/Incoterms |
| 2 | ⚓ Luật hàng hải & đường thủy nội địa | 5 | BLHH 2015, vận đơn & giới hạn trách nhiệm, Luật GTĐTNĐ, sà lan, IMDG/VGM/ISPS, NOR–laytime–demurrage |
| 3 | 📜 Luật kinh doanh & dịch vụ logistics | 5 | Thẩm quyền ký, hợp đồng (phạt 8%, bồi thường, bất khả kháng), quyền cầm giữ hàng, giá & hóa đơn, bảo hiểm TOL |
| 4 | 🏗️ Quản trị logistics kho bãi ngành cảng | 7 | Điểm nghẽn, quy hoạch bãi, quản lý kho, bộ KPI, Lean/Kaizen, TOS/EDI, hàng rời & bách hóa |
| 5 | 🏋️ Nâng hạ hàng siêu trường siêu trọng | 6 | Pháp lý ATLĐ, phụ kiện nâng, góc cáp & trọng tâm, bảng tải & nền đất, nâng kép, phương án nâng, chằng buộc CSS |
| 6 | 🗣️ Tiếng Anh chuyên ngành khai thác cảng | 5 | Họp với đại phó, VHF/SMCP, email sự cố, đàm phán, tín hiệu nâng hạ (có phát âm 🔊) |
| 7 | 👥 Quản trị nhân sự | 5 | Bộ luật Lao động 2019, tuyển dụng STAR, phản hồi SBI, ma trận kỹ năng, ca kíp & giữ chân |
| 8 | 🧭 Lãnh đạo & quản lý | 6 | Ủy quyền, lãnh đạo tình huống, an toàn tâm lý & Just Culture, xung đột, quản lý thay đổi, chỉ huy sự cố |
| 9 | 🎯 Tư duy ra quyết định | 6 | Cửa một chiều/hai chiều, 5 Whys & xương cá, NPV/hoàn vốn, thiên kiến, OODA, đọc dữ liệu đúng |

Trang chủ có **lộ trình gợi ý 17 bài** cho cảng quốc tế đa hàng (hàng rời, tôn cuộn, siêu trọng, container).

Mỗi bài gồm: nội dung, **Ghi nhớ**, **Áp dụng ngay** (checklist lưu trạng thái), **Kiểm tra nhanh** (có giải thích), **Ghi chú cá nhân**. Mỗi chuyên đề có bài kiểm tra tổng hợp 15 câu ngẫu nhiên.

**Luyện tập & công cụ**

- 🗂️ **Flashcard** 173 thuật ngữ Anh – Việt theo 9 nhóm, phương pháp Leitner 5 hộp, có phát âm.
- 📖 **Từ điển** chuyên ngành, lọc theo nhóm.
- 🧮 **Công cụ hiện trường**: năng suất gầu ngoạm, khối lượng hàng theo mớn nước sà lan, đống hàng rời (thể tích, khối lượng, áp lực nền), lực cáp sling theo góc, áp lực chân chống lên nền, chằng buộc (CSS Code), năng lực bãi, BOR, laytime–demurrage, EOQ, ma trận rủi ro 5×5, ma trận ra quyết định có trọng số.
- 🔎 **Tìm kiếm** toàn bộ bài học (gõ có dấu hoặc không dấu đều được).
- 📈 **Tiến độ**: chuỗi ngày học, điểm kiểm tra, ghi chú; **sao lưu/khôi phục** bằng file JSON để chuyển giữa điện thoại và máy tính.

## Đưa lên GitHub Pages (một lần duy nhất)

1. Merge nhánh này vào `main`.
2. Trên GitHub: **Settings → Pages → Build and deployment → Source: _Deploy from a branch_ → Branch: `main` / `(root)` → Save**.
3. Sau 1–2 phút, trang có tại:
   - Trang tổng hợp: `https://xuanpham1986.github.io/Kanban/`
   - Port Pro Academy: `https://xuanpham1986.github.io/Kanban/port-academy/`

Cài lên điện thoại: Android/Chrome → menu ⋮ → *Cài đặt ứng dụng*; iPhone/Safari → nút Chia sẻ → *Thêm vào MH chính*.

## Chạy trên máy

```bash
cd port-academy
python3 -m http.server 8080   # rồi mở http://localhost:8080
```

Mở trực tiếp `index.html` cũng chạy được (trừ chế độ offline).

## Cấu trúc & cách thêm nội dung

```
port-academy/
├── index.html              # Khung trang
├── css/styles.css          # Giao diện (sáng/tối, responsive)
├── js/app.js               # Router, bài học, quiz, flashcard, công cụ, tìm kiếm, tiến độ
├── js/data/00-…09-*.js     # Nội dung từng chuyên đề (00 = thực chiến cảng quốc tế + lộ trình gợi ý)
├── js/data/glossary.js     # Từ vựng Anh – Việt
├── sw.js, manifest.webmanifest, icons/   # PWA, offline
```

Mỗi bài học là một đối tượng trong `lessons` của chuyên đề:

```js
{
  id: 'ma-bai', title: 'Tên bài', minutes: 10, source: 'Căn cứ pháp lý (tùy chọn)',
  body: `<h2>…</h2><p>…</p>`,          // HTML; dùng class callout tip|warn|danger|info, formula, table-wrap, en (câu tiếng Anh có nút 🔊)
  keyPoints: ['…'],                     // Ghi nhớ
  apply: ['…'],                         // Checklist áp dụng
  quiz: [{ q: '…', options: ['A','B','C','D'], answer: 1, explain: '…' }]
}
```

Thêm từ vựng: thêm dòng `['term', 'nghĩa', 'Example sentence.']` vào nhóm phù hợp trong `glossary.js`. Khi phát hành bản mới, tăng `CACHE_VERSION` trong `sw.js` để điện thoại nhận nội dung mới ngay khi offline.

## Lưu ý

Nội dung pháp luật tổng hợp để học tập, theo hiểu biết đến năm 2026. Văn bản pháp luật (đặc biệt thông tư hải quan) thay đổi thường xuyên và bộ máy nhà nước đã sắp xếp lại từ 2025 — hãy đối chiếu văn bản hợp nhất hiện hành trên vbpl.vn trước khi áp dụng cho hồ sơ cụ thể. Thông số nâng hạ chỉ để tham khảo và kiểm tra chéo; luôn tuân theo bảng tải nhà sản xuất và phương án nâng được phê duyệt.
