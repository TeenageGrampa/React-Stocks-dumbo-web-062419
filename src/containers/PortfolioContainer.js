import React, { Component } from 'react';
import Stock from '../components/Stock'

export default class PortfolioContainer extends Component {

  render() {

    if(this.props.havePurchase === true){
      const stockComps = this.props.purchasedStocks.map(stock => <Stock stock={stock} handleStock={this.props.handleStock}/>)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            stockComps
          }
      </div>
    );
    } else if (this.props.havePurchase === false){
      return (
        <div>
          <h2>My Portfolio</h2>
        </div>
      )
    }

  }
}

