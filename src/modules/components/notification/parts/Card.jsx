import React from "react"
import notification_unread from "../../../../../public/assets/images/icons/system/notification.svg"
import notification_read from "../../../../../public/assets/images/icons/system/notification-outline.svg"
import clock_icon from "../../../../../public/assets/images/icons/system/clock.svg"
import '../_notification.scss'

const Card = ({notification})=>{
    switch (notification.type) {
        case 'user':
            if(notification.isRead == 'true'){
                return (
                    <a href="#" className="notification__item notification__item--read">
                        <div className="notification__icon">
                            <img src={notification_read} alt="" />
                        </div>
                        <div className="notification__body">
                            <div className="notification__content">
                                <span className="bold">{notification.userName}</span> vừa <span className="primary">{notification.userAction}</span> với giá trị {notification.orderFee}₫.
                            </div>
                            <div className="notification__time-stamp">
                                <img src={clock_icon} alt="notification-read"/>
                                <span>1 phút trước</span>
                            </div>
                        </div>
                    </a>
                );
            }
            else{
                return (
                    <a href="#" className="notification__item notification__item--unread">
                        <div className="notification__icon">
                            <img src={notification_unread} alt="" />
                        </div>
                        <div className="notification__body">
                            <div className="notification__content">
                                <span className="bold">{notification.userName}</span> vừa <span className="primary">{notification.userAction}</span> với giá trị {notification.orderFee}₫.
                            </div>
                            <div className="notification__time-stamp">
                                <img src={clock_icon} alt="notification-read"/>
                                <span>1 phút trước</span>
                            </div>
                        </div>
                    </a>
                );
            }
        case 'product':
            if(notification.isRead == 'true'){
                return (
                    <a href="#" className="notification__item notification__item--read">
                        <div className="notification__icon">
                            <img src={notification_read} alt="" />
                        </div>
                        <div className="notification__body">
                            <div className="notification__content">
                                Đang có hàng hoá <span className="bold">có tồn kho bằng {notification.productAmount}</span> tại chi nhánh {notification.productLocation}.
                            </div>
                            <div className="notification__time-stamp">
                                <img src={clock_icon} alt="notification-read"/>
                                <span>1 phút trước</span>
                            </div>
                        </div>
                    </a>
                );
            }
            else{
                return (
                    <a href="#" className="notification__item notification__item--unread">
                        <div className="notification__icon">
                            <img src={notification_unread} alt="" />
                        </div>
                        <div className="notification__body">
                            <div className="notification__content">
                                Đang có hàng hoá <span className="bold">có tồn kho bằng {notification.productAmount}</span> tại chi nhánh {notification.productLocation}.
                            </div>
                            <div className="notification__time-stamp">
                                <img src={clock_icon} alt="notification-read"/>
                                <span>1 phút trước</span>
                            </div>
                        </div>
                    </a>
                );
            }
        default:
            return <div className="notification">Thông báo hệ thống</div>;
    }
}
export default Card;