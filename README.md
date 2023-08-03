# (GEEK Up) Frontend - Technical Assessment
## Công nghệ được sử dụng và hướng tiếp cận
### 1. Các công nghệ được sử dụng trong project
  - Fetch data từ API sử dụng Axios.
  - UI hiển thị dữ liệu sử dụng antD (với các components Select, List, Icon, Layout, ...).
  - Front-end sử dụng React + Vite với JavaScript. 
### 2. Ý tưởng ban đầu
  - Khi start chương trình sẽ fetch dữ liệu User, duyệt qua tất cả phần tử và biến đổi dữ liệu cho phù hợp và hiển thị ra bằng Select Component.
  - Thực hiện chức năng search bằng cách so sánh dữ liệu input với label của các item.
  - Khi người dùng chọn User sẽ fetch Todo List tương ứng với userId được chọn và hiển thị ra bằng List Component.
  - Sắp xếp các item theo thứ tự giảm dần, ta có completed có giá trị boolean (với true = 1, false = 0).
  - Với các item có trường completed = true thì render ra element với icon check và không có button, ngược lại thì render ra element với icon minus và button "Mark Done"
  - Khi ấn nút "Mark Done" thực hiện PATCH dữ liệu, nếu có dữ liệu trả về set trường completed của item vừa được ấn nút thành true
  - Chức năng đếm: tổng công việc = số lượng phần tử của Todo List được fetch ra trước đó, công việc đã hoàn thành = chạy hàm reduce() cộng dồn số lượng các phần tử có completed = true.
## Cách set up và start project
### 1. Cài đặt phần mềm, package cần thiết trước khi triển khai
  - Node.js: thực hiện việc cài Nodejs theo đường dẫn: https://nodejs.org/en/download và chọn phiên bản phù hợp với hệ điều hành
  - yarn: thực hiện việc cài yarn package theo đường dẫn: https://classic.yarnpkg.com/lang/en/docs/install/
  - VSCode: thực hiện cài VSCode theo đường dẫn https://code.visualstudio.com/download
### 2. Cách start project
  - Tải file .zip của project từ URL được đính kèm
  - Giải nén file .zip vừa tải và mở trong VSCode
  - Chạy câu lệnh "yarn" trong terminal để tải toàn bộ các package cần thiết
  - Chạy câu lệnh "yarn run dev" 
