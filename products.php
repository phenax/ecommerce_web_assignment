<?php
require_once './partials/head.php'
?>
	<title>Awesome ECommerce</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
	<link rel="stylesheet" type="text/css" href="./css/products.css" />
</head>
<body>

<?php

function sanitizeToInt($data) {
	$data= htmlspecialchars($data);
	return (int) $data;
}

$data_render_id= (isset($_GET['id']))? sanitizeToInt($_GET['id']): -1;
?>

<div class='products-app clearfix' data-request-id='<?= $data_render_id ?>'>
	Rendering...
</div>

<script src='./js/products.js'></script>
