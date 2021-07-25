


- Khái niệm component: 
    + what:
        * Là 1 khối đóng gói, bên trong gồm các thẻ HTML, props, state,...
        * Tạm hiểu giống như là 1 thẻ HTML mình tự định nghĩa ra.
        * Đây là khái niệm nền tảng của react js, để làm web = react js bạn cần chuyển các html thông thường sang dạng component.
    + why: Tại sao phải làm vậy??
        * Việc chuyển đổi các khối HTML, hoặc là các thẻ html sang sạng component là rất mất time.
        * Nhưng nhờ vậy chương trình có thể đóng gói các khối code thành 1 đối tượng độc lập, nó là 1 thế giới nhỏ trong các component có đầy đủ chức năng về tương tác, lập trình hướng đối tượng trong đó.
    + How:
        * create-react-app vd1
        * có 4 cách định nghĩa component
            ^ Kiểu hàm bình thường: function One();
            ^ Kiểu anonymous function: function(){};
            ^ Kiểu arrow funtion (ES6): ()=>{}
            ^ Kiểu class: 
VD: 

lệnh terminal: ctrl + ~
Câu lệnh đầu tiên:  npm install -g create-react-app
Mô tả câu lệnh: -g: global (mình cài ứng dụng tiếp theo ở đâu cung đc, không nhất thiêt phải là folder mình đang cài.)
    - npm:  node packet manager: Công cụ cho phép mình gõ code và giúp mình cài đặt các chương trình cần thiết. (nó sẽ tự động tải về cho mình).
    - create-react-app: Là 1 phần mềm của react - cho phép mình tạo ra 1 ứng dụng đúng chuẩn của react luôn (chuẩn này do react js quy định - chỉ cần áp dụng).

Câu lệnh thứ 2: Sau khi gõ xong câu lệnh trên thì tại thư mục mình đang đứng trên terminal: ta gõ lệnh sau để install 1 ứng dụng react js nha.
Lệnh tạo ứng dụng react: create-react-app nameApp
    - Mô tả: Nó tạo folder nameApp sau đó nó tạo khung chương trình react quy định, nó tạo hết cho mình, và cần nhưng module nào nó cũng down hết cho mình nha.
Câu lệnh thứ 3: Tại folder đang đứng ta gõ vào terminal: 
npm start 
=> khởi chạy ứng dụng react đầu tiên


- Với 4 cách định nghĩa component: 
+ C1: hàm bình thường
function One() {
  return <div> Cach 1</div>
}    
==> KHÔNG CHo phép định nghĩa trả về 2 thẻ ngang hàng: 

+C2: anonymous function
let Two = function () {
  return (
    <div>
      <h3>Cach so 2</h3>
    </div>
  )
}
=> như trên là cách khai báo 1 anonymous function ta sẽ viết thử và chạy nó


+C3: arrow funtion (ES6)
let Three = ()=> (<div><h3>Cách số 3 nha</h3></div>)

+C4: Kiểu class component: Cài plugin:  Reactjs code snippets (Định nghĩa sẵn code có sẵn viết cho nhanh): gõ "rcjc" 
class Four extends Component {
  render() {
    return (
      <div>
        <button>ReactJS Component so 4</button>
      </div>
    );
  }
}

==> Dùng class cũng khá hay vì nó là khởi nguồn của OOP từ thời Java đã rất hot



---------------------------
- Khái niệm props trong component: 
^ What is props:
    + Props là từ khóa
    + Props = properties
    + Props là thuộc tính của component
^ Why is props:
    + Là cách để truyền tham số từ ngoài vào trong component
    + Giảm bớt thời gian phát triển các Component.
^ How:
    + Có 2 cách thao tác với props:
        * C1: function
        * C2: class:

        <div className="container">
        <div className="card text-left">
          <img className="card-img-top" src="" alt="" />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Body</p>
          </div>
        </div>
        
        <div className="card text-left">
          <img className="card-img-top" src="" alt="" />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Body</p>
          </div>
        </div>

      </div>


- Su dung props cach 1: 
function NumberOne(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}
=> Truyền vào từ khóa props.


- Sử dụng props cách 2: (với class)
class NumberTwo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

==> Nhung gì được truyền vào thì nó sẽ nhảy hết vào props: Với cách làm này => mất time phát triển component => ez to change content with react mà vẫn giữ nguyên cấu trúc bài làm (Với class: từ khóa lưu ý: this.props).


--------------------------------
- Cách viết JSX: 
    What?
    + JSX: là viết tắt của javascript extension
    + Giúp ta có thể viết HTML trong file JS
    HOW? 
    + 1.Viết dạng biến trong  component với cặp ngoặc {}
    + 2. Viết dạng gần giống HTML (công cụ convert: jsx to javascript)


VD: 
const a1 = "Hieu";
class App1 extends Component {
  render() {
    return (
      <div>
        <h3>Ten toi la: {a1}</h3>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
            Display value
          </label>
        </div>
      </div>
    );
  }
}




- Cách sử dụng hàm map trong reactJS
    + Là hàm được sử dụng rấtt nhiều trong React js
    + Tác dụng của hàm là lặp lại phần tử 
        * foreacth
        * Duyệt tất cả phần tử trong mảng

// vidu ve ham map
const so = [1, 2, 3, 4, 5, 6];
const so2 = so.map(x => x * 2);

class App2 extends Component {
  render() {
    return (
      <div>
        This is value of map: {so2 + ", "}
      </div>
    );
  }
}
==> kết quả trả về của hàm map: là 1 mảng mới sau khi các phần tử thực hiện xong câu lệnh trả về trong map.
==> Duyệt qua từng phần tử (từ đầu đến hết thì thôi).
Và nó thay = biến đầu vào(từng phần tử trong hàm) và thực hiện hàm.


--------- Thực hành component hóa giao diện HTML = React JS