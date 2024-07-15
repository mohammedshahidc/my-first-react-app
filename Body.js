import React, { Component } from "react";
import logo from "./logo192.png";

function Body(){
    return (
        <div className="body">
            <img src={logo} alt="this is react logo"/>
           <p>Hello <br></br>Welcome to my first react app</p>
        </div>
    )
}
export default Body;
