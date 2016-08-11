import React, { Component } from 'react';
import ReactDom from 'react-dom';

import simple_store from '../store/simple_store';

import {Product} from './product.comp';

export class ProductList extends Component {
    constructor() {
        super();

        simple_store.fetchProducts();

        this.state= {
            products: simple_store.getAll()
        };

        simple_store.bindChange(this.productsChange.bind(this));
    }

    productsChange() {
        this.setState({
            products: simple_store.getAll()
        });
    }

    render() {
        const allProducts= this.state.products.map((val, i)=> (
            <Product name={val.name} descr={val.descr} price={val.price} key={i} />
        ));
        return (
            <div className='products-list row clearfix'>
                {allProducts}
            </div>
        );
    }
}
