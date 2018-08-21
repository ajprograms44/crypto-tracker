import React from 'react';
import axios from 'axios';
import Coin from './Coin'

class CoinContainer extends React.Component {
  state = {
    coins: []
  }

  componentDidMount() {
    axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=15`)
      .then(res => {
        const coins = res.data;
        this.setState({coins})
      })
  }

  render() {
    return <Coin coins={this.state.coins} />
  }

}

export default CoinContainer;