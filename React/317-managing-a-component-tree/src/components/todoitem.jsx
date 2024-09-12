import React, { useState } from "react";

function todoItem(props){

    return <div onClick={()=>{
        props.onChecked(props.id);
    }}>
        <li>{props.Text}</li>
    </div>
    
}

export default todoItem;
