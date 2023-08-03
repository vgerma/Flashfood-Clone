import React  from "react";

export default function Home(){
    return(
        <div className="home-container">
            <div className="home">
                <h1>Save money and fight against food waste.</h1>
                <p>Get massive savings on fresh food items 
                    like meat and produce that are nearing their
                    best before date at grocery stores across 
                    Canada and the U.S.
                </p>
                <div className="home-download">
                    <img src="/images/apSt.png"/>
                    <img src ="/images/gooSt.png"/>
                    <p>How it works ></p>
                </div>
            </div>
        </div>
    )
}