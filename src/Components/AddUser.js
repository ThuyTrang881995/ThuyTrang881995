import React, { Component } from 'react'

export default class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
        }
    }

    /* kiểm tra và lấy thông tin khi nhập thông tin user*/
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.ppermission = this.state.permission;
    }

    /* kiểm tra biến trang thái gửi từ component app để ânt hoặc hiện form thêm thông tin user*/
    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col" >
                    <div className="card mb-3 mt-3">
                        <div className="card-header">thêm mới</div>
                        <div className="card-body text-left">
                            <form>
                                <div className="form-group">
                                    <label>ten user</label>
                                    <input type="text" name="name" onChange={(event) => { this.isChange(event) }} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>dien thoai</label>
                                    <input type="text" name="tel" onChange={(event) => { this.isChange(event) }} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>phan quen</label>
                                    <select className="form-control" name="permission" onChange={(event) => { this.isChange(event) }}>
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>admin</option>
                                        <option value={2}>modrator</option>
                                        <option value={3}>normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" value="Thêm mới" className="btn btn-primary btn-block" onClick={() => { this.props.add(this.state.name, this.state.tel, this.state.permission) }} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.kiemTraTrangThai()}
            </div>
        )
    }
}
