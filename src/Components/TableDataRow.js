import React, { Component } from 'react'

export default class TableDataRow extends Component {
    /*hiển thị permission ra dạng text vì trong data là dạng số (kiểu như id của permission)  */
    permissionShow = () =>{
        if(this.props.permission === 1 ){ return "Admin"}
        else if(this.props.permission === 2){ return "Morator"}
        else{ return "Normal User"}
    }
    /*các công việc cần phải làm khi bấm nút sửa , 
    set trạng thái hiển thị form EditUser (cho form hiện) 
    và gọi hàm gửi thông tin cũ chưa sửa lên cho cha app (ở đây chỉ gọi editFunClick, vì value cần gửi nằm trong mapping bên TableData ) */
    editClick = () =>{
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    /*các công việc cần làm khi bấm nút xóa ,  truyền id cần xóa lên cha Search thông qua props */
    deleteButtonClick = (idUser) =>{
        this.props.deleteButtonClick(idUser);
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary" 
                        onClick={() =>{this.editClick()}}  >sua</button>
                        <button type="button" className="btn btn-danger" onClick={(idUser) =>{this.deleteButtonClick(this.props.id)}} >xoa</button>
                    </div>
                </td>
            </tr>
        )
    }
}
