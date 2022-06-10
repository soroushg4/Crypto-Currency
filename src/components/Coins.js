import React from "react";
import './coin.css'
import 'remixicon/fonts/remixicon.css'

function Coins({name,price,symbol,icon,information}){
    return(
        <div className="coin">

            <h1 className="header-text" >Name: {name}</h1>
            <img src={icon} />

            <h3 className="section-text">Price: {price}</h3>
            <h3 className="symbol-name">Symbol: {symbol}</h3>
            <a href={information} className="information" > <i class="ri-information-line i-icon"></i>More information</a>

        </div>

    )
}
export default Coins;