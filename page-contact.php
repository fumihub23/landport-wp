<?php

get_header();
?>

<div class="contact-container">

	<?php $locale = get_locale();
if ('en_US' == $locale  ) { ?>
	<h2 class="contact-title">
		<span class="jp">CONTACT</span>
	</h2>

	<div class="contact-message">
		<p>Please feel free to contact us for any opinions, impressions,<br class="br-pc"> questions, etc. about our products and our company.</p>
	</div>
<?php } else { ?>
	<h2 class="contact-title">
		<span class="jp">お問い合わせ</span>
	</h2>

	<div class="contact-message">
		<p>商品や弊社に関するご意見、ご感想、ご質問など<br class="br-pc">なんでもお気軽にお問合せください。</p>
	</div>
<?php } ?>


		<div class="contact-area">
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<?php the_content(); ?>
			<?php endwhile; else : ?>
			<?php endif; ?>

		</div>
</div>

<?php

get_footer();
