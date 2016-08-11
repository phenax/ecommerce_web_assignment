<?php require_once './partials/head.php' ?>
	<title>Awesome ECommerce</title>
	<link rel="stylesheet" type="text/css" href="./css/style.css" />
</head>
<body>

<div class='overlay js-overlay'>
	<div class='bg-color js-close-overlay'></div>

	<div class='overlay--window'>
		<button class='overlay--close js-close-overlay'>&times;</button>

		<div class='authentication js-auth'>
			<div class='authentication--options'>
				<button class='authentication--options--btn js-option-btn' data-option='login'>Login</button>
				<button class='authentication--options--btn js-option-btn' data-option='signup'>Signup</button>
			</div>

			<div class='authentication--wrap'>
				<div class='authentication--login  js-auth-type js-login'>
					<form class='form' onSubmit='return false;'>
						<label class='form--text'>
							<div class='form--text--label'>Email address</div>
							<input type='text' name='email' class='form--text--input js-input' />
						</label>
						<label class='form--text'>
							<div class='form--text--label'>Password</div>
							<input type='password' name='password' class='form--text--input js-input' />
						</label>
						<div class='form--submit'>
							<button class='form--submit--btn'>Log In</button>
						</div>
					</form>
				</div>
				<div class='authentication--signup js-auth-type js-signup'>
					<form class='form' onSubmit='return false;'>
						<label class='form--text'>
							<div class='form--text--label'>Full Name</div>
							<input type='text' name='name' class='form--text--input js-input' />
						</label>
						<label class='form--text'>
							<div class='form--text--label'>Email Address</div>
							<input type='password' name='email' class='form--text--input js-input' />
						</label>
						<label class='form--text'>
							<div class='form--text--label'>Password</div>
							<input type='password' name='password' class='form--text--input js-input' />
						</label>
						<label class='form--text'>
							<div class='form--text--label'>Repeat Password</div>
							<input type='password' name='repeat-password' class='form--text--input js-input' />
						</label>
						<div class='form--submit'>
							<button class='form--submit--btn'>Sign Up</button>
						</div>
					</form>
				</div>

			</div>
		</div>
	</div>

</div>

<header class='clearfix'> <!-- .fixed-topbar -->
	<div class='logo'></div>
	<nav>
		<ul>
			<li><button class='_nav--btn js-modal-btn' data-modal='login'>Login</button></li>
			<li><button class='_nav--btn js-modal-btn' data-modal='signup'>Signup</button></li>
		</ul>
	</nav>
</header>

<section class='banner'>
	<canvas class='banner--canvas js-canvas'></canvas>
	<div class='banner--text'>
		<div class='banner--text--main'>Awesome Commerce</div>
		<div class='banner--text--sub'>Our awesome slogan</div>
	</div>
</section>

<section class='about'>
	Yello
</section>

<script src='./js/script.js'></script>
</body>
</html>
