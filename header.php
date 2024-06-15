<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M3X8R5H');</script>
<!-- End Google Tag Manager -->

	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@300;400;500;600&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">

	<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon/favicon.ico" />
<link rel="icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon/favicon.png" type="image/png"/>
<link rel="apple-touch-icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon/favicon.png" />

	<?php wp_head(); ?>

<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style2.css" type="text/css"/>


</head>

<body <?php body_class(); ?>>
	<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M3X8R5H"
xheight="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->


<?php wp_body_open(); ?>
<div id="page" class="site">

	<div id="menu-toggle" class="add">
		<div id="hamburger">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div id="cross">
			<span></span>
			<span></span>
		</div>
	</div>
	<header id="masthead" class="site-header">
		<div class="inner">
			<div class="site-branding">
				<?php
				if ( is_front_page() && is_home() ) :
					?>
					<h1 class="site-logo">
								<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
									<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/common/logo.svg" alt="<?php bloginfo( 'name' ); ?>">
								</a>
							</h1>
					<?php
				else :
					?>
					<div class="site-logo">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
							<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/common/logo.svg" alt="<?php bloginfo( 'name' ); ?>">
						</a>
					</div>
				<?php endif; ?>
			</div>
			<div class="header-navigaiton-wrapper">
			<nav id="site-navigation" class="main-navigation">
				<?/*php
				wp_nav_menu(
					array(
						'theme_location' => 'grobal-menu',
						'menu_id'        => 'primary-menu',
					)
				);
				*/?>
<div class="menu-grobal-menu-container">
	<ul id="primary-menu" class="menu">
<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">HOME</a></li>
<li><a href="<?php echo esc_url( home_url( '/category/topics' ) ); ?>">TOPICS</a></li>
<li><a href="<?php echo esc_url( home_url( '/company' ) ); ?>">COMPANY</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://carrythesun.jp/pages/product">ONLINE SHOP</a></li>
<li><a href="<?php echo esc_url( home_url( '/contact' ) ); ?>">CONTACT</a></li>
</ul></div>

			</nav>
			<?php echo do_shortcode( '[bogo]' ); ?>
			<!--<ul class="header-lang-menu">
				<li>
					<a href="#" class="current">JP</a>
				</li>
				<li>
					<a href="#">EN</a>
				</li>
			</ul>
		-->
		</div>
		</div>
	</header>

	<main id="primary" class="site-main">
