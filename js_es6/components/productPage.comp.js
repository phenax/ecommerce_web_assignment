import React, { Component } from 'react';
import ReactDom from 'react-dom';

import simple_store from '../store/simple_store.js';

import * as loader from '../loading';

export class ProductPage extends Component {
    constructor(props) {
        super(props);

        simple_store.fetchOneProduct(this.props.id);

        this.state= {
            product: simple_store.getProduct()
        };

        simple_store.bindChange(this.productChange.bind(this));
    }

    componentDidMount() {
        loader.stopLoading();
    }

    productChange() {
        this.setState({
            product: simple_store.getProduct()
        });
    }

    render() {
        const image= (
            <div className='image--img'
                style={{ 'backgroundImage': `url(./img/${this.state.product.thumb})` }}>
                &nbsp;
            </div>
        );

        return (
            <div className='product-page clearfix'>
                <div className='nav'>
                    <a href='/'>Home</a> <span className='fa fa-long-arrow-right'></span>
                    <a href='/products.php'>Products</a> <span className='fa fa-long-arrow-right'></span>
                    <a>TShirt</a>
                </div>
                <div className='wrapper row clearfix'>
                    <div className='image col col-4'>
                        {(this.state.product.thumb)? (image): (<div>&nbsp;</div>) }
                    </div>
                    <div className='data col col-8'>
                        <div className='data--name'>{this.state.product.name}</div>
                        <div className='data--price'>Rs. {this.state.product.price}</div>
                        <div className='data--descr'>{this.state.product.descr}</div>
                        <div className='data--buttons'>
                            <button className='data--buttons--btns full-500 buy-now'>Buy Now</button>
                            <button className='data--buttons--btns full-500 add-wish'>Add to wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
