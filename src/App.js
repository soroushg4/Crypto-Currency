import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import './App.css'
import Coins from "./components/Coins";
import btcImg from "./bitcoin.png"
// import bootstrap from "bootstrap";
function App () {
    const [listOfCoins, setListOfCoins] = useState([])
    const [searchWord , setSearchWord] =  useState("") 

    useEffect(() => {
        axios.get(`https://api.coinstats.app/public/v1/coins/?skip=0`).then(
            (response) =>{
                setListOfCoins(response.data.coins)
            }
        )


    },[]) 
      const filteresCoins = listOfCoins.filter((coin) =>{
            return coin.name.toLowerCase().includes(searchWord.toLowerCase())
        })

    return(
        <div className="App">
            <div class="header-color" role="alert"> 
            <div className="cryptoHeader">
                <img src={btcImg}></img>
                <h3 className="header-text_logo">Cryptocurrency</h3>
            </div> 
            <div className="header" > <h2>Find Your Best Cryptocurrency</h2></div>
                <div className="inputContainer input-group">
                                  <input className="input-coin" type="text" placeholder="BitCoin..." onChange={(event) => {
                    setSearchWord(event.target.value)
                    }}/> 
                </div>
 
             
            </div>

            <div className="cryptoDisplay ">
                {filteresCoins.map((coins) =>{
                    
               return <div className="container coins-display"> <Coins
                name={coins.name}  
                icon={coins.icon}
                price={coins.price}
                symbol={coins.symbol}
                information={coins.exp[1]}
                   />

                </div>

            })}</div>
        </div>
    )
}



export default App;