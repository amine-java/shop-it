import React from 'react';
import './Product.css';
import ShopContext from '../../contexts/ShopContext';

export class Product extends React.Component {


    state = {
        id : this.props.id , 
        title : this.props.title , 
        image : this.props.image , 
        description : this.props.description , 
        price : this.props.price 
    }

    /**
     * Render method
     */
    render() {
        return (
          <div className="card">
            <ShopContext.Consumer>
              {({ addItem }) => (
                <div>
                  <img src={this.state.image} alt="Denim Jeans" />
                  <h1>{this.state.title}</h1>
                  <p className="price">${this.state.price}</p>
                  <p>{this.state.description}</p>
                  <p>
                    <button onClick={() => this.onAddProduct(addItem)}>
                      Add to Cart
                    </button>
                  </p>
                </div>
              )}
            </ShopContext.Consumer>
          </div>
        );
      }
    
    
    /**
     * OnAddToCart handler event
     */
    onAddProduct(func){
        func({id : this.state.id , title : this.state.title , price : this.state.price});
    }
}