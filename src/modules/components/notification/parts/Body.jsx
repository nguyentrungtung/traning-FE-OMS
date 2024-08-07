import React from "react";
import Card from './Card';


const Body = ({data})=>{
    return(
        <div className="notification-panel__body">
            {data.map((context, index) => (
                <Card key={index} notification={context}/>
            ))}
        </div>
    )
}
export default Body;
// <Card key={index} type={context.type} isRead={context.isRead}  userName={context.userName} productAmount={context.productAmount} productLocation={context.productLocation} userAction={context.userAction} orderFee={context.orderFee}/>