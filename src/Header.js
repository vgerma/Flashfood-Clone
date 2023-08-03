import React from "react";

export default function Header(){
    return(
        <div className="header">
            
            <div className="header-left">
                <img 
                    className="header-logo"
                    src="./images/flashfood-logo.jpg"
                />
                <h3>Flashfood®</h3>
            </div>
            
            <ul className="header-right">
                <li>HOW IT WORKS</li>
                <li>LOCATIONS</li>
                <li>ABOUT</li>
                <li>SUPPORT</li>
                <li>PARTNER</li>
                <li><button>DOWNLOAD</button></li>
            </ul>
            
        </div>
    )
}