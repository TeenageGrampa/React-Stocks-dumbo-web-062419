import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allStocks: [],
    availableStocks: [],
    purchasedStocks: [],
    havePurchase: false
  }

  componentDidMount(){
    
    fetch('http://localhost:3000/stocks').then(res => res.json())
    .then(data => this.setState({
      allStocks: data,
      availableStocks: data
    }))
  }

  handleStock = (stock) => {
    const availableStocks = this.state.availableStocks.filter(function(ele){
      return ele !== stock
    })
    this.setState({
      availableStocks: availableStocks,
      purchasedStocks: [...this.state.purchasedStocks, stock],
      havePurchase: true
    })

  }

  handleFilterChange = (e) =>{
    const selectedfilter = e.target.value
    const filteredStocks = this.state.allStocks.filter(function(ele){
      return ele.type === selectedfilter
    })
    console.log(filteredStocks)
    this.setState({
      availableStocks: filteredStocks
    })
  }

  handleSort = (e) => {
    if(e.target.value === 'Alphabetically'){
      const sortedAlpha = this.state.availableStocks.sort((a, b) => (a.name > b.name) ? 1 : -1)
      this.setState({
        availableStocks: sortedAlpha
      })
    } else if (e.target.value === 'Price'){
      const sortedPrice = this.state.availableStocks.sort((a, b )=>(a.price > b.price) ? 1 : -1)
      this.setState({
        availableStocks: sortedPrice
      })
    }
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <SearchBar handleFilterChange={this.handleFilterChange} handleSort={this.handleSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer allStocks={this.state.availableStocks} handleStock={this.handleStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer purchasedStocks={this.state.purchasedStocks} havePurchase={this.state.havePurchase}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
