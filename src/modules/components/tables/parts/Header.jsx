import React, { useState } from 'react';

export default function Header({tableName, children}){
    return(
        <div className="table-list__header">
            <div className="title">{tableName}</div>
            {children}
        </div>
    )
}