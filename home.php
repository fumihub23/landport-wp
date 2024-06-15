<?php
get_header();
?>
	<section class="sec-fv">
		<div class="inner">
			<div class="fv-area">
				<div class="left">
					<div class="fv-title-box">
						<?php $locale = get_locale();
if ('en_US' == $locale  ) { ?>
	<h2 class="fv-title">
		Beyond just "selling", we deliver a life<br class="br-pc"> with light to the people over the world
	</h2>
<?php } else { ?>
	<h2 class="fv-title">
		「モノを売る」を超え、灯りのある<br>
生活を世界の人々に届けたい
	</h2>
<?php } ?>

						<div class="fv-catchcopy">
	At beach, at mountain,<br>
	everywhere becomes your cozy space.<br>
	Lightweight, compact, waterproof, and safe<br>
	Simple, functioning, and reliable<br>
	You can use it everywhere
						</div>
					</div>

				</div>
				<div class="right">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/top/fv_img3.jpg" alt="<?php bloginfo( 'name' ); ?>">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/top/fv_img4.jpg" alt="<?php bloginfo( 'name' ); ?>">
				</div>
			</div>
		</div>
	</section>

	<section id="news-top" class="sec-news">
		<div class="inner">
			<h2 class="news-title">TOPICS</h2>
			<div class="news-area">
				<ul class="news-list">

					<?php
					$paged = get_query_var('paged') ? get_query_var('paged') : 1 ;
					// the query
					$args = array(
							'post_type' => 'post',
							'category__not_in' =>array(6),
							 "posts_per_page" =>5,
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
											<h3 class="text"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
										</dd>
									</dl>
								</li>

							<?php endwhile; ?>

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
								<?php $locale = get_locale();
if ('en_US' == $locale  ) { ?>
<a href="<?php echo esc_url( home_url( '/news/' ) ); ?>">NEWS</a>
<?php } else { ?>
<a href="<?php echo esc_url( home_url( '/news/' ) ); ?>">ニュース一覧</a>
<?php } ?>
							</div>

						</li>
						<li><div class="button">
							<?php $locale = get_locale();
if ('en_US' == $locale  ) { ?>
<a href="<?php echo esc_url( home_url( '/event/' ) ); ?>">EVENT</a>
<?php } else { ?>
<a href="<?php echo esc_url( home_url( '/event/' ) ); ?>">イベント一覧</a>
<?php } ?>
						</div>
						</li>
					</ul>
				</nav>

			</div>
		</div>
	</section>


	<section class="sec-about">
		<div class="inner">
			<div class="about-area">
				<div class="left">
					<div class="about-title-box">
					<h2 class="about-logo">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/top/carrythesun_logo.svg" alt="キャリーザ・サン">
					</h2>
					<?php $locale = get_locale();
				if ('en_US' == $locale  ) { ?>
					<div class="about-catchcopy">
						The sun at night in the world.<br>
Solar Lantern, CARRY THE SUN
					</div>
				<?php } else { ?>
					<div class="about-catchcopy">
						世界の夜に太陽を。<br>
ソーラーランタン、CARRY THE SUN
					</div>
				<?php } ?>


					<div class="button">
						<?php $locale = get_locale();
if ('en_US' == $locale  ) { ?>
	<a href="https://www.carrythesun.jp/" target="_blank">
		<span class="icn-link">BRAND WEBSITE</span>
	</a>
<?php } else { ?>
	<a href="https://www.carrythesun.jp/" target="_blank">
		<span class="icn-link">ブランドサイトへ</span>
	</a>
<?php } ?>


					</div>
					</div>
				</div>
				<div class="right">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/top/about_img.jpg" alt=">">
				</div>
			</div>
		</div>
	</section>

<?php
get_footer();
?>
