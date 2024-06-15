<?php

get_header();
?>


		<section class="topics-single-contents">
			<div class="inner">
				<div class="topics-single-area">

					<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
					<article class="topics-post">
					    <header class="header">
									<time class="time"><?php the_time('Y/m/d'); ?></time>
										<h1 class="title"><?php the_title(); ?></h1>
								</div>
					    </header>
							<div class="topics-textarea">
								<?php the_content(); ?>
							</div>


						<div class="single-pagenation">

				 				<ul>
									<?php $locale = get_locale();
			if ('en_US' == $locale  ) { ?>
				<li class="prev"><?php previous_post_link('%link', 'PREV', TRUE, '1,2'); ?></li>
			<?php } else { ?>
				<li class="prev"><?php previous_post_link('%link', '前の記事', TRUE, '1,2'); ?></li>
			<?php } ?>

			<?php $locale = get_locale();
if ('en_US' == $locale  ) { ?>
	<li class="vewlist"><a href="<?php echo esc_url( home_url( '/topics' ) ); ?>" class="icn-viewlist">BACK TO LIST</a></li>
<?php } else { ?>
	<li class="vewlist"><a href="<?php echo esc_url( home_url( '/topics' ) ); ?>" class="icn-viewlist">一覧に戻る</a></li>
<?php } ?>


<?php $locale = get_locale();
if ('en_US' == $locale  ) { ?>
<li class="next"><?php next_post_link('%link', 'NEXT', TRUE, '1,2'); ?></li>
<?php } else { ?>
<li class="next"><?php next_post_link('%link', '次の記事', TRUE, '1,2'); ?></li>
<?php } ?>


				 			 </ul>
			 		 </div>
					</article>
				<?php endwhile; ?>
				<?php else : ?>
				<?php endif; ?>


<?php

get_footer();
