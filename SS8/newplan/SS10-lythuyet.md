- Redux là gì?

  - Nó là 1 tool dành cho các ứng dụng Javascript. Nó giúp bạn viết các ứng dụng hoạt động nhất, chạy trong các môi trường (client, server, native). Redux ra đời thường dùng để kết hợp với react

  - Với Redux, "state" của ứng dụng được giữ trong một nơi gọi là "store" và mỗi "component" đều có thể access bất kỳ state nào mà chúng muốn từ cái store này.

SS11

- Redux js là 1 thư viện JS giúp tạo thành 1 lớp quản lý trạng thái của ứng dụng. Được dựa trên nền tảng của ngôn ngữ Elm kiến trúc Flux do Facebook giới thiệu, do vậy Redux thường là bộ đoi kết hợp hoàn hảo với React.

- Redux Thunk là 1 Middleware cho phép mình viết các Action trả về 1 hàm thay vì 1 "plain js object" bằng cách trì hoãn việc đưa action đến reducer.
- Redux Thunk đc sử dụng để xử lý các logic bất đồng bộ phức tạp cần truy cập tới store (redux) hoặc đơn giản là việc lấy dữ liệu như Ajax request.
