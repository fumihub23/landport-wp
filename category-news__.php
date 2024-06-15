<?php


get_header();
?>


<section class="sec-news">
	<div class="inner">
		<h2 class="news-title">NEWS</h2>
		<div class="news-area">
			<ul class="news-list">

				<?php
				$paged = get_query_var('paged') ? get_query_var('paged') : 1 ;
				// the query
				$args = array(
				    'post_type' => 'post',
				     "posts_per_page" =>3,
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
										<div class="label news-label">
											<?php $cat = get_the_category(); ?>
						<?php $cat = $cat[0]; ?>
						<?php echo get_cat_name($cat->term_id); ?>
										</div>
									</dt>
									<dd>
										<h2 class="news-post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
									</dd>
								</dl>
							</li>

				    <?php endwhile; ?>


						<?php
				//Pagenation
				if (function_exists("pagination")) {
				 pagination($additional_loop->max_num_pages);
				}
				?>

						<?php
						wp_reset_postdata();
						 ?>

				<?php else : ?>

				<?php endif; ?>




			</ul>

			<nav class="news-more-navigation">
				<ul>
					<li>
						<div class="button">
							<a href="<?php echo esc_url( home_url( '/news' ) ); ?>">お知らせ一覧</a>
						</div>

					</li>
					<li><div class="button">
						<a href="<?php echo esc_url( home_url( '/event' ) ); ?>">イベント一覧</a>
					</div>
					</li>
				</ul>
			</nav>

		</div>
	</div>
</section>

<section class="sec-page newsinfo-page">
	<div class="inner">
	<h1 class="page-title"><p class="white-cover"></p>NEWS</h1>
	<section class="newsinfo-contents">
		<div class="inner">
					<div class="newsinfo-area">
<?php

$cat = get_the_category();
$cat_slug = $cat[0]->slug;

$paged = get_query_var('paged') ? get_query_var('paged') : 1 ;
// the query
$args = array(
    'post_type' => 'post',
		'category_name' => $cat_slug,
     "posts_per_page" =>-1,
		 	'paged' => $paged,
);
$wp_query = new WP_Query( $args );
?>
<?php if ( $wp_query->have_posts() ) : ?>
    <!-- the loop -->
    <?php while ( $wp_query->have_posts() ) : $wp_query->the_post(); ?>
			<article class="newsinfo-post">
				<a href="<?php the_permalink(); ?>">
				<figure class="thumb">
					<div class="white-cover"></div>
					<?php if (has_post_thumbnail()): ?>
									<?/*php the_post_thumbnail('news-thumb');*/?>
									<?php the_post_thumbnail();?>
					<?php else: ?>
					<img src="<?php echo get_template_directory_uri(); ?>/img/news/dummy.png" / alt="">
					<?php endif; ?>
				</figure>
				<div class="detail">
					<time class="time"><?php the_time('Y/m/d'); ?></time>
					<h2 class="title"><?php the_title(); ?></h2>
			<?php
    $cat = get_the_category();
    $cat_slug = $cat[0]->slug;
    $cat_name = $cat[0]->name;
  ?>
  <div class="catname <?php echo $cat_slug; ?>" ><?php echo $cat_name; ?></div>

				</div>
			</a>
			</article>
    <?php endwhile; ?>

		<?php
//Pagenation
if (function_exists("pagination")) {
 pagination($additional_loop->max_num_pages);
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
		</div>
</section>

<nav class="page-site-navigation">
	<ul class="pagenavi">
		<li><a href="<?php echo esc_url( home_url( '/about' ) ); ?>">ABOUT</a></li>
		<li><a href="<?php echo esc_url( home_url( '/howto' ) ); ?>">HOWTO</a></li>
	</ul>
</nav>


<?php

get_footer();
