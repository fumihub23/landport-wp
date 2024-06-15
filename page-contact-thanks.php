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
		<p>Thank you for your inquiry. <br>
We received inquiries with the following contents. <br class="br-pc">
The person in charge will contact you within 2 to 3 business days.</p>
	</div>
<?php } else { ?>
	<h2 class="contact-title">
		<span class="jp">お問い合わせ</span>
	</h2>

	<div class="contact-message">
		<p>この度は、お問い合わせありがとうございました。<br>
	以下の内容でお問い合わせをお受けいたしました。<br class="br-pc">
	2~3営業日以内に、担当者よりご連絡いたします。</p>
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
