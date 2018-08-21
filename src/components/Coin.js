import React from 'react';
import numeral from 'numeral';
import '../styles/Coin.css';
import images from '../constants/constants';


const Coin = (props) => (
  <div>
    {props.coins.map(coin => (

      <div className="coinContainer">

        <img className="coinIcon" src={images[coin.symbol]} alt={coin.name}/>

        <h3 className="coinName" >{coin.name}</h3>

        <span className="coinSymbol" >{coin.symbol}</span>
      
        <div className="coinStats">  
          <span className="coinMkt">Market Cap: {numeral(coin.market_cap_usd).format('$0,0.00')}</span><br />
          <span className="coinPrice">Price: {numeral(coin.price_usd).format('$0,0.00')}</span><br />
          <span className="coinPercent" >24h Change: {coin.percent_change_24h}%</span><br />
        </div>

      </div> 
    ))}
  </div>  
)



export default Coin;