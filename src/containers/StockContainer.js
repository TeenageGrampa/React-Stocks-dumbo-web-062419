import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  

  render() {

    const stockComps = this.props.allStocks.map(stock => <Stock stock={stock} handleStock={this.props.handleStock}/>)
    return (
      <div>
        <h2>Stocks</h2>
        {
          stockComps
        }
      </div>
    );
  }

}

export default StockContainer;
