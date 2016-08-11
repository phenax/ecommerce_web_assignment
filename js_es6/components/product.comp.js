import React, { Component } from 'react';
import ReactDom from 'react-dom';

export class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='product col col-4 clearfix'>
                <div className='product-wrap'>
                    <div className='product--thumb'>
                        <div className='image' style={{ 'backgroundImage': `url(./img/${this.props.thumb})` }}></div>
                    </div>
                    <a href={`products.php?id=${this.props.id}`}>
                        <div className='wrapper'>
                            <div className='product--name'>
                                {this.props.name}
                            </div>
                            <div className='product--price'>
                                Rs. {this.props.price}
                            </div>
                            <div className='product--descr'>
                                {this.props.descr.slice(0,100)}...
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}
