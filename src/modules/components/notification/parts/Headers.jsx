import React from "react";
import done_all_icon from "../../../../../public/assets/images/icons/system/done-all.svg"


const Header = ({children})=>{
    return(
        <div className="notification-panel__header">
            <span>{children}</span>
            <button><img src={done_all_icon} alt="done-all-icon"/></button>
        </div>
    )
}
export default Header