import React from 'react';
import { ListProducts } from '../listProducts/ListProducts';

export class Cart extends React.Component{

    state = {
        products : [] , 
        total : 0 
    }

    /**
     * Constructor
     * @param {*} props 
     */
    constructor(props){
        super(props);
        this.onAddItem = this.onAddItem.bind(this);
    }

    /**
     * The render method 
     */
    render(){
        return (<div>
            <h1>My Cart ${this.state.total}</h1>
            {this.state.products.length === 0 && <p>no items in your cart</p>}
            {
                this.state.products.length > 0 &&
                this.state.products.map((value , index) => {
                return <p key={index}>{value.title}: ${value.price} -> {value.quantity}</p>
                })
            }
            <ListProducts onAddItem = {this.onAddItem} />
            </div>
        );
    }

    /**
     * Adds the product, if the product already exists in the cart, then we just increment the quantity 
     * @param {*} product 
     */
    onAddItem(product){
        let items = this.state.products.filter(p => p.id === product.id);
        let item ; 
        if (items.length > 0){
            item = items.pop();
            item.quantity = item.quantity + 1; 
        }else{
            item = {
                id : product.id , 
                title : product.title , 
                price : product.price , 
                quantity : 1
            }
            this.state.products.push(item);
        }
        this.setState(
            {
                product : this.state.products , 
                total : this.state.total + item.price
            }
        )
    }
}