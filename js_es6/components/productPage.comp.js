import React, { Component } from 'react';
import ReactDom from 'react-dom';

import simple_store from '../store/simple_store.js';

export class ProductPage extends Component {
    constructor(props) {
        super(props);

        simple_store.fetchOneProduct(this.props.id);

        this.state= {
            product: simple_store.getProduct()
        };

        simple_store.bindChange(this.productChange.bind(this));
    }

    productChange() {
        this.setState({
            product: simple_store.getProduct()
        });
    }

    render() {
        return (
            <div className='product-page clearfix'>
                <div className='wrapper row clearfix'>
                    <div className='image col col-4'>
                        <div className='image'>&nbsp;{this.state.product.thumb}</div>
                    </div>
                    <div className='data col col-8'>
                        <div className='data--name'>{this.state.product.name}</div>
                        <div className='data--descr'>{this.state.product.descr}</div>
                        <div className='data--price'>{this.state.product.price}</div>
                    </div>
                </div>
            </div>
        );
    }
}
