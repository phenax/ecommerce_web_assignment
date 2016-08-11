<?php

require_once './models/Products.php';

require_once './partials/head.php'
?>
	<title>Awesome ECommerce</title>
	<link rel="stylesheet" type="text/css" href="./css/products.css" />
</head>
<body>

<?php

if(isset($_GET['id'])) {
?>



<?php } else { ?>
	<div class='clearfix'>
	<div class='products-list row clearfix'>
		<?php for($i= 0; $i < $products->size(); $i++) { ?>
			<?php $product= $products->getProduct($i) ?>

			<div class='product col col-4 clearfix'>
				<div class='product-wrap'>
					<div class='product--name'>
						<?= $product->getName() ?>
					</div>
					<div class='product--price'>
						Rs. <?= $product->getPrice() ?>
					</div>
					<div class='product--descr'>
						<?= $product->getDescr() ?>
					</div>
				</div>
			</div>

		<?php } ?>
	</div>
	</div>
<?php } ?>
