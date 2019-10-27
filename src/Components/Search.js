import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj: {}
        }
    }
    /*trung gian lấy thông tin mới của user từ bên EditUser và truyền lên cha app */
    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });

        this.props.getUserEditInfoApp(info);
    }


    /* kiểm tra nhập nội dung search add vào state và gửi nội dung search vào cha app*/
    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
        this.props.getTextSearch(this.state.tempValue);
    }

    /* kiểm tra để hiện thị nút đóng mở form thêm thông tin*/
    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return <button className="btn btn-secondary" onClick={() => this.props.ketNoi()}>Đóng lại</button>;
        } else {
            return <button className="btn btn-info" onClick={() => this.props.ketNoi()}>Thêm mới</button>;
        }
    }

    /*kiểm soát ẩn hay hiện form EditUser nhờ vào props changeEditUserStatus được truyền xuống từ cha app*/
    iShowEditForm = () => {
        if (this.props.editUserStatus === true) {
            return <EditUser
                getUserEditInfo={(info) => { this.getUserEditInfo(info) }}
                changeEditUserStatus={() => { this.props.changeEditUserStatus() }}
                userEditObject={this.props.userEditObject}
            ></EditUser>;
        }
    }

    render() {
        return (
            <div>
                {this.iShowEditForm()}
                <div className="search-form">
                    <div className="input-group mb-3 w-50">
                        <input type="text" className="form-control" placeholder="Tìm kiếm" onChange={(event) => this.isChange(event)} />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="button" onClick={(dl) => { this.props.getTextSearch(this.state.tempValue) }}>Tìm kiếm</button>
                        </div>
                    </div>

                    {this.hienThiNut()}

                </div>
            </div>
        )
    }
}
