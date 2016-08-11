import React from 'react';
import ReactDom from 'react-dom';
import {EventEmitter} from 'events';

import {ProductList} from './components/productList.comp';
import {ProductPage} from './components/productPage.comp';
import {Header} from './components/header.comp';

const events= new EventEmitter();

const $renderTarget= $('.products-app');

const itemId= parseInt($renderTarget.data('request-id'));

const pageToRender= (itemId < 0)? (<ProductList />): (<ProductPage id={itemId} />);


ReactDom.render(
    (<div>
        <Header />
        {pageToRender}
    </div>),
    $renderTarget.get(0)
);
