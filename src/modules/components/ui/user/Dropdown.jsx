import React from "react";
import sample_user_avatar from "../../../../../public/assets/images/icons/user/dummy-user-icon.svg"
import dropdown_icon from "../../../../../public/assets/images/icons/system/dropdown-DOWN.svg"
import user_icon from "../../../../../public/assets/images/icons/system/user-icon.svg"
import sign_out_icon from "../../../../../public/assets/images/icons/system/sign-out.svg"
import { Dropdown, DropdownMenu, ButtonGroup, Button, Card } from "react-bootstrap";
function UserSection(){
    return(
        <>
        <Dropdown as={ButtonGroup} className="dropdown">
            <Dropdown.Toggle className="dropdown-toggle">
                <img src={sample_user_avatar} alt="sample-user-icon" />
                <span>Hi, Minh Triết</span>
                <img className="dropdown__icon" src={dropdown_icon} alt="dropdown-icon-down" />
            </Dropdown.Toggle>
            <DropdownMenu className="dropdown-menu">
                <Dropdown.Item className="dropdown-item" href="#/action-1">
                    <img src={user_icon} alt="" />
                    <span>Thông tin tài khoản</span>
                </Dropdown.Item>
                <Dropdown.Divider className="dropdown-divider" />
                <Dropdown.Item className="dropdown-item" href="#/action-2">
                    <img src={sign_out_icon} alt="" />
                    <span className="text-error">Đăng xuất</span>
                </Dropdown.Item>
            </DropdownMenu>
        </Dropdown>
        </>
    )
}
export default UserSection;