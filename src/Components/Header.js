import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3">Project quản lý thành viên bằng reactjs</h1>
                    <p className="lead">Jumbo helper text</p>
                    <hr className="my-2" />
                </div>
            </div>

        )
    }
}
