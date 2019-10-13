import React from 'react';
import './Product.css';

export class Product extends React.Component {


    state = {
        id : this.props.id , 
        title : this.props.title , 
        image : this.props.image , 
        description : this.props.description , 
        price : this.props.price 
    }

    /**
     * Constructor
     * @param {*} props 
     */
    constructor(props){
        super(props);
        this.onAddToCart = this.onAddToCart.bind(this);
    }

    /**
     * Render method
     */
    render(){        
        return ( 
        <div className="card">
            <img src={this.state.image} alt="Denim Jeans"/>
            <h1>{this.state.title}</h1>
            <p className="price">${this.state.price}</p>
            <p>{this.state.description}</p>
            <p><button onClick={this.onAddToCart}>Add to Cart</button></p>
          </div>);
    }
    
    /**
     * OnAddToCart handler event
     */
    onAddToCart(){
        this.props.onAddItem({id : this.state.id , title : this.state.title , price : this.state.price});
    }
}