# 💰 Sổ Chi Tiêu

Ứng dụng quản lý thu chi cá nhân chạy hoàn toàn trên trình duyệt web. Không cần server, không cần cài đặt, không cần tài khoản. Có thể cài lên điện thoại/máy tính như một app (PWA) và dùng offline.

## Tính năng

| Nhóm | Chi tiết |
|---|---|
| **Giao dịch** | Thêm / sửa / xóa khoản thu, khoản chi; số tiền tự định dạng `1.500.000`; nút chọn nhanh mệnh giá |
| **Tổng quan** | Số dư, tổng thu, tổng chi, trung bình chi/ngày theo tháng; giao dịch gần đây |
| **Ngân sách** | Hạn mức chi theo tháng và theo từng danh mục; cảnh báo ở mức 80% / 100%; gợi ý số tiền có thể chi mỗi ngày |
| **Danh mục** | 13 danh mục mặc định; tự thêm, sửa, xóa (đổi icon, màu); giao dịch của danh mục bị xóa tự chuyển sang "Chi khác" / "Thu khác" |
| **Thống kê** | Biểu đồ tròn cơ cấu chi, biểu đồ cột thu/chi 6 tháng, chi theo ngày, tỷ lệ tiết kiệm, so với cùng kỳ tháng trước |
| **Tìm kiếm** | Lọc theo từ khóa, loại thu/chi, danh mục; nhóm theo ngày |
| **Dữ liệu** | Sao lưu / khôi phục JSON, xuất CSV mở bằng Excel (đúng tiếng Việt), tạo dữ liệu mẫu, xóa toàn bộ |
| **Trải nghiệm** | Giao diện sáng/tối, responsive mobile ↔ desktop, phím tắt (`N` thêm giao dịch, `←` `→` đổi tháng), chạy offline, cài như app |

## Chạy ứng dụng

**Cách 1: mở trực tiếp.** Nhấp đúp `index.html`. Mọi chức năng đều chạy, trừ chế độ offline/cài đặt app (trình duyệt chỉ hỗ trợ hai chức năng này qua `http(s)`).

**Cách 2: chạy bằng web server cục bộ (khuyến nghị)**

```bash
cd expense-app
python3 -m http.server 8080
# hoặc: npx serve .
```

Rồi mở <http://localhost:8080>.

**Cách 3: đưa lên Internet (miễn phí).** Đây là site tĩnh, nên có thể đưa thẳng thư mục `expense-app/` lên **GitHub Pages**, **Netlify**, **Vercel** hoặc **Cloudflare Pages**. Sau khi có link HTTPS, mở trên điện thoại rồi chọn:
- Android/Chrome: menu ⋮ → *Cài đặt ứng dụng* (hoặc nút 📲 trong tab Cài đặt)
- iOS/Safari: nút Chia sẻ → *Thêm vào MH chính*

## Kiến trúc

```
expense-app/
├── index.html             # Khung giao diện + 2 hộp thoại (giao dịch, danh mục)
├── css/styles.css         # Design tokens, sáng/tối, responsive
├── js/app.js              # Toàn bộ logic: store, render, biểu đồ canvas, import/export
├── sw.js                  # Service worker: cache app shell để chạy offline
├── manifest.webmanifest   # Cấu hình PWA (tên, icon, màu, lối tắt)
└── icons/                 # SVG + PNG 192/512 + maskable
```

- **Không phụ thuộc thư viện ngoài.** Biểu đồ vẽ bằng Canvas API, không cần build hay `npm install`, nên không có rủi ro chuỗi cung ứng và tải rất nhanh (~75 KB chưa nén).
- **Dữ liệu** nằm trong `localStorage` (key `sochitieu:v1`) dưới dạng JSON có `version` để nâng cấp schema về sau. App gọi `navigator.storage.persist()` để trình duyệt không tự xóa dữ liệu.
- **Một luồng render:** mọi thay đổi đi qua `commit()`, tức là lưu rồi render lại view hiện tại. Các tab đang mở app cùng lúc tự đồng bộ qua sự kiện `storage`.
- **Service worker:** HTML dùng *network-first* (luôn lấy bản mới khi có mạng); CSS/JS/icon dùng *stale-while-revalidate*. Khi phát hành bản mới, tăng `CACHE_VERSION` trong `sw.js`.

## Bảo mật & toàn vẹn dữ liệu

- Mọi nội dung người dùng nhập đều được escape trước khi render, nên ghi chú như `<img onerror=…>` không thực thi được.
- File import đi qua `sanitizeState()`: kiểm tra kiểu, giới hạn độ dài, ngày hợp lệ, màu hex, số tiền trong khoảng 0–10.000 tỷ; giao dịch trỏ tới danh mục không tồn tại sẽ được gán lại về danh mục dự phòng.
- File CSV chặn *formula injection*: ô bắt đầu bằng `= + - @` sẽ được thêm `'` ở đầu.
- Nếu dữ liệu trong `localStorage` bị hỏng, app giữ lại bản gốc ở key `sochitieu:v1:corrupt:<timestamp>` thay vì ghi đè mất.

## Giới hạn hiện tại

- Dữ liệu chỉ nằm trên **một trình duyệt, một thiết bị**. Xóa dữ liệu trình duyệt là mất dữ liệu, nên hãy sao lưu JSON định kỳ.
- Chỉ dùng một đơn vị tiền tệ (VND).
- `localStorage` chứa được khoảng 5 MB, tương đương ~25.000 giao dịch, đủ dùng cá nhân nhiều năm.

## Hướng mở rộng

1. **Đồng bộ đa thiết bị:** thêm backend (Supabase/Firebase hoặc API riêng) với đăng nhập. Lớp `Store` đã được tách riêng nên chỉ cần thay `load()`/`save()`.
2. **Giao dịch định kỳ:** tiền nhà, lương, các gói đăng ký.
3. **Nhiều ví/tài khoản** (tiền mặt, ngân hàng, thẻ tín dụng) và chuyển khoản giữa ví.
4. **Chuyển sang IndexedDB** khi dữ liệu vượt ~10.000 giao dịch.
5. **Nhập liệu bằng AI:** chụp hóa đơn hoặc gõ "cà phê 45k" để tự phân loại.
