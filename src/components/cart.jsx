import React, { Component } from 'react';
import "./cart.css"
import storeContext from '../context/storeContext';

/**
 * In cart component
 * 
 * connect to the context
 * 
 * get the cart(array) from the context
 * map the array into string(x.title)
 * 
 * **/

class Cart extends Component {
    static contextType = storeContext;

    state = {};

    render() {
        return (
            <div className="cart-page">
                <h1> Cart Page</h1>

                <h1>These are the items in your cart</h1>
                <div >{this.context.cart.map((prod) => prod.title)} </div>
            </div>

        );
    }
}

export default Cart;