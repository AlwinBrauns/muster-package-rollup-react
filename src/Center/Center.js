import './Center.scss'
import React from "react";
export default function Center(props){
    return (
        <div className="Center">
            {
                props.children
            }
        </div>
    )
}
