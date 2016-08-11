
import React, { Component } from 'react';
import ReactDom from 'react-dom';

export class Header extends Component {

    render() {
        return (
            <header>
            	<div className='topbar'>
                    <a href='/'><div className='topbar--logo'>
                        <img src='./img/logo.svg' width='100%' />
                    </div></a>
            		<label className='topbar--search clearfix'>
            			<input type='text' className='topbar--search--input' />
                        <button className='topbar--search--send fa fa-search'></button>
            		</label>
            	</div>
            </header>
        );
    }
}
