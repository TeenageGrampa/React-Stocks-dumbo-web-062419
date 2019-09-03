import React from 'react'


class Stock extends React.Component{ 

  handleClick = () =>{
    const currentStock = this.props.stock
    this.props.handleStock(currentStock)
  }
  render(){
    return(
    <div>

      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">Company Name: {
              this.props.stock.name
            }</h5>
          <p className="card-text">Price: {
              this.props.stock.price
            }</p>
            <button onClick={this.handleClick}>Buy</button>
        </div>
      </div>
    </div>
    )
  }
}

export default Stock
