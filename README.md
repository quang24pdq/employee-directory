# Danh Bạ Nhân Viên

Dự án này là một ứng dụng React đơn giản hiển thị danh sách nhân viên từ một tên miền phụ của Bitrix24. Nó bao gồm các chức năng để làm mới danh sách nhân viên, làm nổi bật một nhân viên được chọn và xem thông tin chi tiết của nhân viên được chọn.

## Bắt Đầu

Các hướng dẫn này sẽ giúp bạn có được một bản sao của dự án và chạy nó trên máy tính của bạn để phát triển và thử nghiệm.

### Yêu Cầu

Đảm bảo rằng bạn đã cài đặt:

- Node.js
- npm

### Cài Đặt

1. Sao chép kho lưu trữ:

```sh
git clone <repository-url>
Điều hướng đến thư mục dự án:


cd employee-directory
Cài đặt các phụ thuộc:


npm install
Chạy Ứng Dụng
Để khởi động máy chủ phát triển, chạy:


npm start
Mở http://localhost:3000 để xem nó trong trình duyệt của bạn. Trang sẽ tải lại khi bạn thực hiện các thay đổi. Bạn cũng có thể thấy bất kỳ lỗi lint nào trong bảng điều khiển.



Lấy danh sách nhân viên từ API Bitrix24.
Hiển thị danh sách nhân viên.
Làm mới danh sách nhân viên.
Làm nổi bật một nhân viên được chọn.
Xem thông tin chi tiết của nhân viên được chọn.
Tích Hợp API
Ứng dụng tích hợp với API Bitrix24 để lấy danh sách nhân viên. Đảm bảo rằng bạn có một tên miền phụ của Bitrix24 và thay thế <subdomain> trong mã với tên miền phụ thực tế của bạn.

Sử Dụng
Làm Mới Danh Sách Nhân Viên:

Nhấp vào nút "Refresh" để làm mới danh sách nhân viên.
Làm Nổi Bật Nhân Viên:

Nhấp vào tên của một nhân viên để làm nổi bật nó.
Xem Thông Tin Chi Tiết Nhân Viên:

Nhấp vào nút "View employee" để mở một hộp thoại với thông tin chi tiết của nhân viên được chọn.