<?php
/**
 * Each item in the product list
 */
class Item {
    private $_name= "";
    private $_descr= "";
    private $_thumbnail= "";
    private $_price= 0;




    /**
     * Item
     *
     * @param String $name  The name of the product
     * @param String $descr Product description
     * @param Number $price Price
     * @param String $descr The thumbnail(image) of the product
     */
    public function __construct($name, $descr, $price, $thumbnail) {
        $this->_name= $name;
        $this->_descr= $descr;
        $this->_price= $price;
        $this->_thumbnail= $thumbnail;
    }



    // A bunch of getters
    function getName() {
        return $this->_name;
    }
    function getDescr() {
        return $this->_descr;
    }
    function getPrice() {
        return $this->_price;
    }
    function getThumb() {
        return $this->_thumbnail;
    }




    /**
     * Returns Item as an array
     *
     * @return Array The item properties as an array
     */
    public function getItem() {
        return [
            'name'=> $this->_name,
            'descr'=> $this->_descr,
            'price'=> $this->_price,
            'thumb'=> $this->_thumbnail,
        ];
    }
}





/**
 * Products model
 */
class ProductsList {


    // List of all products
    private $_products= [];



    /**
     * Add a product to the model
     *
     * @param String $name  The name of the product
     * @param String $descr Product description
     * @param Number $price Price
     * @param String $descr The thumbnail(image) of the product
     */
    public function addProduct($name, $descr, $price, $thumbnail) {
        array_push(
            $this->_products,
            new Item($name, $descr, $price, $thumbnail)
        );
    }



    /**
     * Get product at a particular index
     *
     * @param  Number $id  The index position of the product
     *
     * @return Item        The product
     */
    public function getProduct($id) {
        if($this->size() > $id) {
            return $this->_products[$id];
        }
    }




    /**
     * Returns the list of products
     *
     * @return Array  List of all products
     */
    public function getAllProducts() {
        return $this->_products;
    }




    /**
     * Size of the product list
     *
     * @return Number  The number of items in the product list
     */
    public function size() {
        return sizeof($this->getAllProducts());
    }




    /**
     * All the products in the list as a 2D array
     *
     * @return Array  List of products as an array
     */
    public function getProductArray() {
        $newList= [];

        for($i= 0; $i < $this->size(); $i++) {
            array_push(
                $newList,
                $this->getProduct($i)->getItem()
            );
        }

        return $newList;
    }
}


// Create a product list
$products= new ProductsList();


// Add dummy items
$products->addProduct(
    "Batman TShirt",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    499, "bm.jpg"
);
$products->addProduct(
    "Nightwing TShirt",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    499, "nw.jpg"
);
$products->addProduct(
    "Star Wars TShirt",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    499, "sw.jpg"
);
$products->addProduct(
    "Dexter TShirt",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    499, "dx.jpg"
);
