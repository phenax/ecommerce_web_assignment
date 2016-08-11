/**
 * I merged the functionality of a dispatcher+action with the store for now
 */

import $ from 'jquery';

window.$= $;

import { EventEmitter } from 'events';

const CHANGE_KEY= "PRODUCT_CHANGE";

class SimpleStore extends EventEmitter {
    constructor() {
        super();

        this.products= [];
        this.product= {
            name: "",
            descr: "",
            price: 0,
            thumb: ""
        };
    }

    getAll() {
        return this.products;
    }

    bindChange(callback) {
        this.on(CHANGE_KEY, callback);
    }

    unbindChange(callback) {
        this.off(CHANGE_KEY, callback);
    }

    emitChange() {
        this.emit(CHANGE_KEY);
    }

    fetchOneProduct(id) {
        const _this= this;

        $.ajax({
            url: '/api/products.php',
            method: 'get',
            data: { id },
            success(data) {
                data= JSON.parse(data);

                if(data.status == 1) {
                    _this.product= data.product;
                    _this.emitChange();
                } else if(data.status == 2) {
                    alert("No such item");
                }
            }
        });
    }

    getProduct() {
        return this.product;
    }

    fetchProducts() {
        const _this= this;

        $.ajax({
            url: '/api/products.php',
            method: 'get',
            success(data) {
                data= JSON.parse(data);

                if(data.status == 1) {
                    _this.products= data.products;
                    _this.emitChange();
                }
            }
        });
    }
}

let simple_store= new SimpleStore();

export default simple_store;
