import React from 'react'

export default React.createContext({
    name: "",
    products: [],
    categories: [],
    cart: [],
    addProdToCart: (product) => {},

});