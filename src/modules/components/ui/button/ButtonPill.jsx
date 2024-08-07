import React from "react";
import './_button.scss';

export default function Button({onClick, children, className}){
    return(
        <button onClick={onClick} className={`btn btn--pill ${className}`}>{children}</button>
    )
}