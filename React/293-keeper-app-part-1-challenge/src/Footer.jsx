import React from "react";

let date=new Date();

export default function footer(){
    return <footer>
        <p>Copyright ⓒ {date.getFullYear()}</p>
    </footer>
}