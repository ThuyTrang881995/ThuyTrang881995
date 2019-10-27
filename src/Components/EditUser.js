import React, { Component } from 'react'

export default class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission
        }
    }
    /*lấy các thông tin mới được nhập vào form lưu vào State để truyền lên cho cho App (EditUser -> Seảch -> App) */
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    /* các công việc cầm phải làm khi bấm lưu (gửi thông tin mới lên cho cha app và set trang thái hiển thị của form (lúc nào là ẩn đi)) */
    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus(); //an form
    }

    render() {
        return (
            <div className="card border-primary mb-3 mt-3">
                <div className="card-header bg-primary text-center text-white">Sủa thông tin user</div>
                <div className="card-body text-left">
                    <form>
                        <div className="form-group">
                            <label>ten user</label>
                            <input defaultValue={this.props.userEditObject.name}
                                onChange={(event) => { this.isChange(event) }}
                                type="text" name="name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>dien thoai</label>
                            <input defaultValue={this.props.userEditObject.tel}
                                onChange={(event) => { this.isChange(event) }}
                                type="text" name="tel" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>phan quyen</label>
                            <select
                                className="form-control" name="permission"
                                defaultValue={this.props.userEditObject.permission}
                                onChange={(event) => { this.isChange(event) }}
                                required>
                                <option value>Chọn quyền mặc định</option>
                                <option value={1}>admin</option>
                                <option value={2}>modrator</option>
                                <option value={3}>normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="button" value="Lưu" onClick={() => { this.saveButton() }} className="btn btn-primary btn-block" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
