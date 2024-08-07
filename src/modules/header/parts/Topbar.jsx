import React from "react";
import bell_icon_EMPTY from '../../../../public/assets/images/icons/system/bell-empty.svg'
import info_bubble__icon from '../../../../public/assets/images/icons/system/info-bubble.svg'
import bell_icon from '../../../../public/assets/images/icons/system/bell-on.svg'
import setting_icon from '../../../../public/assets/images/icons/system/gear.svg'
import logo from '../../../../public/assets/images/xweb.svg'
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import UserSection from "../../components/ui/user/Dropdown";

function TopbarComponent(){
    const tooltip = (props) => (
        <Tooltip {...props}>
          Gói website hiện tại: Basic 1 tháng (1-31/07/2024)
        </Tooltip>
      );
    return(
        <div className="topbar">
            <a className="logo" href="/">
                <img src={logo} alt="" />
            </a>
            <div className="utility">
                <div className="utility__item bubble-notification">
                    <span>Gói trang web còn lại 21 ngày</span>
                    <OverlayTrigger overlay={tooltip} placement="bottom">
                        <img src={info_bubble__icon} alt="info-bubble-icon" />
                    </OverlayTrigger>
                </div>
                <div className="utility__item">
                    <button><img src={bell_icon} alt="bell-empty-icon" /></button>
                </div>
                <div className="utility__item">
                    <button><img src={setting_icon} alt="gear-icon-icon" /></button>
                </div>
                <div className="utility__item user-section">
                    <UserSection/>
                </div>
            </div>
        </div>
    )
}
export default TopbarComponent;