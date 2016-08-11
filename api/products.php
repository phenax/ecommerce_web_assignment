<?php

require_once '../models/Products.php';

$responseObject= [];

if(isset($_GET['id'])) {
    $id= (int) $_GET['id'];

    if($id >= $products->size() || $id < 0) {
        $responseObject= [
            'status'=> 2
        ];
    } else {
        $responseObject= [
            'status'=> 1,
            'product'=> $products->getProduct($id)->getItem()
        ];
    }
} else {
    $responseObject= [
        'status'=> 1,
        'products'=> $products->getProductArray()
    ];
}

echo json_encode($responseObject);
