
import React, { Component } from 'react';
import ReactDom from 'react-dom';

export class Header extends Component {

    render() {
        return (
            <header>
            	<div className='topbar'>
                    <div className='topbar--logo'></div>
            		<label className='topbar--search clearfix'>
            			<input type='text' className='topbar--search--input' />
                        <button className='topbar--search--send fa fa-search'></button>
            		</label>
            	</div>
            </header>
        );
    }
}
