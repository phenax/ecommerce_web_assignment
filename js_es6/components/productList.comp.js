import React, { Component } from 'react';
import ReactDom from 'react-dom';

import simple_store from '../store/simple_store';

import * as loader from '../loading';

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

    componentDidMount() {
        loader.stopLoading();
    }

    productsChange() {
        this.setState({
            products: simple_store.getAll()
        });
    }

    render() {
        const allProducts= this.state.products.map((val, i)=> (
            <Product name={val.name} descr={val.descr} price={val.price} thumb={val.thumb} id={i} key={i} />
        ));
        return (
            <div className='products-list row clearfix'>
                <div className='nav'>
                    <a href='/'>Home</a> <span className='fa fa-long-arrow-right'></span>
                    <a>Products</a>
                </div>
                {allProducts}
            </div>
        );
    }
}
