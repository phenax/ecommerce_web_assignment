import React from 'react';
import ReactDom from 'react-dom';

import {ProductList} from './components/productList.comp';
import {ProductPage} from './components/productPage.comp';

const $renderTarget= $('.products-app');

const itemId= parseInt($renderTarget.data('request-id'));

const pageToRender= (itemId < 0)? (<ProductList />): (<ProductPage id={itemId} />);

ReactDom.render(
    pageToRender,
    $renderTarget.get(0)
);
