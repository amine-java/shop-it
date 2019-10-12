import React from 'react';
import './Product.css';

export class Product extends React.Component {


    constructor(){
        super();
        this.onAddToCart = this.onAddToCart.bind(this);
    }
    render(){        
        return ( 
        <div className="card">
            <img src={this.props.image} alt="Denim Jeans"/>
            <h1>{this.props.title}</h1>
            <p className="price">${this.props.price}</p>
            <p>{this.props.description}</p>
            <p><button onClick={this.onAddToCart}>Add to Cart</button></p>
          </div>);
    }
    
    onAddToCart(){
        alert('You just added: ' + this.props.title + ' to your cart');
    }
}