import React, { Component } from 'react'
import TableDataRow from './TableDataRow';

export default class TableData extends Component {

    /* truyền id cần xóa lên cha App thông qua props */
    deleteButtonClick = (idUser) =>{
       this.props.deleteUser(idUser);
    }

    /* mapping dữ liệu được gửi vào từ component cha app*/
    mappingDataUser = () => this.props.dataUserProps.map((value, key) => (
        <TableDataRow
            deleteButtonClick={(idUser) => { this.deleteButtonClick(idUser) }}
            id={value.id}
            userName={value.name}
            tel={value.tel}
            permission={value.permission}
            stt={key}
            key={key}
            editFunClick={(user) => { this.props.editFun(value) }}
            changeEditUserStatus={() => { this.props.changeEditUserStatus() }} />
    ))

    render() {
        return (
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>stt</th>
                        <th>tên</th>
                        <th>dien thoai</th>
                        <th>quyen</th>
                        <th>hanh dong</th>
                    </tr>
                </thead>
                <tbody>
                    {this.mappingDataUser()}
                </tbody>
            </table>
        )
    }
}
