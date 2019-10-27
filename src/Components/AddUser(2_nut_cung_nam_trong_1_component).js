import React, { Component } from 'react'

export default class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trangThaiChinhSua: true
        }
    }

    thayDoiTrangThai = () => {
        this.setState({
            trangThaiChinhSua: !this.state.trangThaiChinhSua
        });
    }

    hienThiNut = () => {
        if (this.state.trangThaiChinhSua === true) {
            return <button className="btn btn-block btn-secondary" onClick={() => this.thayDoiTrangThai()}>Đóng lại</button>;
        } else {
            return <button className="btn btn-block btn-info" onClick={() => this.thayDoiTrangThai()}>Thêm mới</button>;
        }
    }
    hienThiForm = () => {
        if (this.state.trangThaiChinhSua === true) {
            return (
                <div className="card mb-3 mt-3">
                    <div className="card-header">thêm mới</div>
                    <div className="card-body text-left">
                        <div className="form-group">
                            <label>ten user</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>dien thoai</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>phan quen</label>
                            <select className="form-control">
                                <option value>Chọn quyền mặc định</option>
                                <option value={1}>admin</option>
                                <option value={2}>modrator</option>
                                <option value={3}>normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block">Thêm mới</button>
                        </div>
                    </div>
                </div>
            );
        }
    }


    render() {
        return (
            <div>
                {this.hienThiNut()}
                {this.hienThiForm()}

            </div>
        )
    }
}
