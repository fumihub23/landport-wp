<?php


get_header();
?>


<section class="sec-news">
	<div class="inner">
		<header class="sec-news-header">
			<?php $locale = get_locale();
if ('en_US' == $locale  ) { ?>
<h2 class="news-title"><span class="en">TOPICS</span></h2>
<?php } else { ?>
<h2 class="news-title"><span class="en">TOPICS</span><span class="jp">トピックス</span></h2>
<?php } ?>


		<nav class="news-more-navigation">
			<ul>
				<li>
					<div class="button">
						<?php $locale = get_locale();
if ('en_US' == $locale  ) { ?>
<a href="<?php echo esc_url( home_url( '/news' ) ); ?>">NEWS</a>
<?php } else { ?>
<a href="<?php echo esc_url( home_url( '/news' ) ); ?>">ニュース一覧</a>
<?php } ?>

					</div>

				</li>
				<li><div class="button">
					<?php $locale = get_locale();
if ('en_US' == $locale  ) { ?>
<a href="<?php echo esc_url( home_url( '/event' ) ); ?>">EVENT</a>
<?php } else { ?>
<a href="<?php echo esc_url( home_url( '/event' ) ); ?>">イベント一覧</a>
<?php } ?>

				</div>
				</li>
			</ul>
		</nav>
	</header>
		<div class="news-area">
			<ul class="news-list">

				<?php
				$paged = get_query_var('paged') ? get_query_var('paged') : 1 ;
				// the query
				$args = array(
				    'post_type' => 'post',
				     "posts_per_page" =>20,
						 	'paged' => $paged,
				);
				$wp_query = new WP_Query( $args );
				?>
				<?php if ( $wp_query->have_posts() ) : ?>
				    <!-- the loop -->
				    <?php while ( $wp_query->have_posts() ) : $wp_query->the_post(); ?>

							<li>
								<dl class="news-detail">
									<dt>
										<time class="time"><?php the_time('Y/m/d'); ?></time>
										<?php $cat = get_the_category(); ?>
										<?php $cat = $cat[0]; ?>
<?php
$catename = get_cat_name($cat->term_id);
if($catename=="EVENT"){
	$labelname = "news-label_event";
}else{
	$labelname = "news-label";
}
?>
										<div class="label <?php echo $labelname; ?>">
											<?php echo get_cat_name($cat->term_id); ?>
										</div>
									</dt>
									<dd>
										<h2 class="news-post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
									</dd>
								</dl>
							</li>

				    <?php endwhile; ?>

									</ul>
									<?php
							//Pagenation
							if (function_exists("pagination")) {
							 pagination($wp_query->max_num_pages);
							}
							?>

						<?php
						wp_reset_postdata();
						 ?>

				<?php else : ?>

				<?php endif; ?>


		</div>
	</div>
</section>

<?php

get_footer();
