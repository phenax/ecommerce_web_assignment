<!DOCTYPE html>
<html>
<head>
	<title>ECommerce</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="stylesheet" type="text/css" href="./css/style.css" />
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Oswald|Roboto" />
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
						<button class='form--submit'>Log In</button>
					</form>
				</div>
				<div class='authentication--signup js-auth-type js-signup'>
					Cool signup<br />
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
					irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
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
