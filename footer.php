</main>
<!--
	<section class="sec-contact">
		<div class="inner">

			<div class="contact-area">
				<h2 class="contact-title">
					<span class="en">CONTACT</span>
					<span class="jp">お問い合わせ・ご相談はこちら</span>
				</h2>
			</div>
		</div>
	</section>
-->

<?php if ( is_page('contact') ) : ?>

<?php elseif ( is_page('support') ) : ?>

<?php else: ?>
	<section class="sec-contact-common-wrapper">
	<a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="sec-contact-common">

		<?php $locale = get_locale();
if ('en_US' == $locale  ) { ?>
	<h2>CONTACT</h2>

<?php } else { ?>
	<h2>CONTACT</h2>
	<p>お問い合わせ・ご相談はこちら</p>
<?php } ?>



		<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/common/contact_bg.jpg" alt="CONTACT" class="contact-img">
	</a>
	</section>
<?php endif; ?>


	<footer id="colophon" class="site-footer">
		<div class="inner">
			<nav id="site-navigation" class="footer-navigation">
				<div class="footer-logo">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/common/logo.svg" alt="<?php bloginfo( 'name' ); ?>">
					</a>
				</div>
				<?
				/*php
				wp_nav_menu(
					array(
						'theme_location' => 'footer-menu',
						'menu_id'        => 'footer-menu',
					)
				);
				*/
				?>
<div class="menu-footer-menu-container">
	<ul id="footer-menu" class="menu">
<li><a href="<?php echo esc_url( home_url( '/category/topics' ) ); ?>">TOPICS</a></li>
<li><a href="<?php echo esc_url( home_url( '/company' ) ); ?>">COMPANY</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://carrythesun.jp/pages/product">ONLINE SHOP</a></li>
<li><a href="<?php echo esc_url( home_url( '/contact' ) ); ?>">CONTACT</a></li>
</ul></div>
				<div class="footer-second-line">
					<?php $locale = get_locale();
			if ('en_US' == $locale  ) { ?>
				<div class="footer-address">
					ACCESS：<br class="br-sp">
					MK Bldg. 2-2-19 Sotokanda, Chiyodaku, Tokyo <a href="https://www.google.co.jp/maps/place/%E3%80%92101-0021+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E5%A4%96%E7%A5%9E%E7%94%B0%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%92%E2%88%92%EF%BC%91%EF%BC%99/@35.6996938,139.7650587,17z/data=!3m1!4b1!4m5!3m4!1s0x60188c1bf0c77f97:0xb3463b0499a008bd!8m2!3d35.6996938!4d139.7672527?hl=ja" target="_blank">MAP</a>
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/common/icn_map.svg" alt="map_marker"><br>
					TEL：03-3255-8388
				</div>

			<?php } else { ?>
				<div class="footer-address">
					ACCESS：<br class="br-sp">
					東京都千代田区外神田2-2-19 MKビル <a href="https://www.google.co.jp/maps/place/%E3%80%92101-0021+%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8D%83%E4%BB%A3%E7%94%B0%E5%8C%BA%E5%A4%96%E7%A5%9E%E7%94%B0%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%92%E2%88%92%EF%BC%91%EF%BC%99/@35.6996938,139.7650587,17z/data=!3m1!4b1!4m5!3m4!1s0x60188c1bf0c77f97:0xb3463b0499a008bd!8m2!3d35.6996938!4d139.7672527?hl=ja" target="_blank">MAP</a>
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/common/icn_map.svg" alt="map_marker"><br>
					TEL：03-3255-8388
				</div>
			<?php } ?>


					<div class="copyright">
						Copyright c2022 Landport Co.,Ltd All rights reserved
					</div>
				</div>
			</nav>
		</div>
	</footer>
</div>

<?php wp_footer(); ?>

</body>
</html>
