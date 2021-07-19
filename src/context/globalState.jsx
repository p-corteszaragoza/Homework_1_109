import React, { Component } from 'react';
import StoreContext from './storeContext';

class GlobalState extends Component {
    state = {
        name: "Paola",
        products: [],
        categories: [],
        cart: [],

    };
    render() {
        return (<StoreContext.Provider value={{
            name: this.state.name,
            products: this.state.products,
            categories: this.state.categories,
            cart: this.state.cart,
            addProdToCart: this.addProdToCart,
        }}>
            {this.props.children}
        </StoreContext.Provider>
        );
    }

    addProdToCart = (product) => {
        let myCart = this.state.cart;
        console.log("0: ", product)
        console.log("1: ", myCart)
        myCart.push(product);
        console.log("2: ", myCart)
        this.setState({ cart: myCart });
        console.log("Added a prod to cart: ", myCart);
    };
}

export default GlobalState;