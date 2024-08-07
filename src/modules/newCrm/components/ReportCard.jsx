import React from "react";

export default function ReportCard(props){
    return(
        <div className={`report-card report-card--${props.color}`}>
            <div className="report-card__icon">
                <img src={`/assets/images/icons/system/${props.icon}.svg`} alt="" />
            </div>
            <div className="report-card__specs w-100 row">
                {
                    props.data.map((item, index)=>(
                        <div key={index} className="spec col">
                            <div className="spec__number">{item[1]}</div>
                            <div className="spec__title">{item[0]}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}