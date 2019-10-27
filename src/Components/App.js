import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

import DataUser from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      searchText: "",
      editUserStatus: false,
      userEditObject: {}
    }
  }

  componentWillMount() {
    //Kiểm tra
    if(localStorage.getItem('userData') === null){
      localStorage.setItem("userData",JSON.stringify(DataUser));
    }else{
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data: temp
      })
    }
  }
  

  /* lấy id cần xóa, lọc bỏ phần tử có id trùng với id được truyền lên bằng hàm filter */
  deleteUser = (idUser) => {
    /* trong data lọc bỏ item có id trùng với idUser và set lại data bằng mảng trung gian tempData */
    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data: tempData
    });
    //Đẩy dữ liệu vào data
    localStorage.setItem('userData',JSON.stringify(tempData));
  }

  /* ẩn hoặc hiện form thêm user*/
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }

  /* lấy thông tin search từ component search*/
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
    console.log("du lieu" + this.state.searchText);
  }


  /* lấy thông tin thêm mới user từ component addUser*/
  getNewUserData = (name, tel, permission) => {

    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.ppermission = permission;

    var items = this.state.data;
    items.push(item);

    this.setState({
      data: items
    });
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }

  /*trạng thái ẩn hay hiện của form EditUser */
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  /*lấy lên user cần chỉnh sửa thông tin (thông tin user cũ) từ bên tableDataRow và set vào state
  sau đó truyền user nào vào search để hiển thị lên form  */
  editUser = (user) => {
    console.log('kêt nối vào component cháu tableDataRow thành công');
    console.log(user);
    this.setState({
      userEditObject: user
    });
  }
  /*nhận thông tin mới của user từ bên EditUser và lưu lại vào data*/
  getUserEditInfoApp = (info) => {
    console.log("thong tin da sua xong" + info.name);
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tell = info.tel;
        value.permission = info.permission;
      }
    });

    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }

  render() {
    //localStorage.setItem("userData",JSON.stringify(DataUser));

    var ketqua = [];
    this.state.data.forEach((element) => {
      if (element.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(element);
      }
    });

    return (
      <div>
        <Header></Header>
        <div className="container">
          <Search
            getUserEditInfoApp={(info) => { this.getUserEditInfoApp(info) }}
            ketNoi={() => this.doiTrangThai()}
            hienThiForm={this.state.hienThiForm}
            getTextSearch={(dl) => { this.getTextSearch(dl) }}
            editUserStatus={this.state.editUserStatus}
            changeEditUserStatus={() => { this.changeEditUserStatus() }}
            userEditObject={this.state.userEditObject}></Search>
          <hr></hr>

          <div className="row">
            <div className="col">
              <TableData
                deleteUser={(idUser) => { this.deleteUser(idUser) }}
                editFun={(user) => { this.editUser(user) }}
                dataUserProps={ketqua}
                changeEditUserStatus={() => { this.changeEditUserStatus() }} ></TableData>
            </div>
            <AddUser hienThiForm={this.state.hienThiForm} add={(name, tel, permission) => this.getNewUserData(name, tel, permission)} ></AddUser>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
