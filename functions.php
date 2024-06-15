<?php
//bogo 国旗アイコンを削除
add_filter( 'bogo_language_switcher_links', 'custom_bogo_language_title_name', 10, 2 );
function custom_bogo_language_title_name( $links ) {
  foreach ( $links as $code => $name ) {
    if ( $name['lang'] === 'en-US' ) {
      $links[$code]['title'] = 'EN';
      $links[$code]['native_name'] = 'EN';
    } elseif ( $name['lang'] === 'ja' ) {
      $links[$code]['title'] = 'JP';
      $links[$code]['native_name'] = 'JP';
    }
  }
  return $links;
}

//bogo 国旗アイコンを削除
add_filter( 'bogo_use_flags','bogo_use_flags_false');
function bogo_use_flags_false(){
 return false;
}

//bogo 言語スイッチのテキスト変更
add_filter( 'bogo_language_switcher','replace_bogo_text');
function replace_bogo_text($output){
 return str_replace(' (United States)','',$output);
}
if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'landport_setup' ) ) :

	function landport_setup() {

		load_theme_textdomain( 'landport', get_template_directory() . '/languages' );

		add_theme_support( 'automatic-feed-links' );


		add_theme_support( 'title-tag' );


		add_theme_support( 'post-thumbnails' );

		register_nav_menus(
			array(
				'grobal-menu' => esc_html__( 'Primary', 'landport' ),
				'footer-menu' => esc_html__( 'Footer', 'landport' ),
			)
		);


		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);



		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

	}
endif;
add_action( 'after_setup_theme', 'landport_setup' );

//WordPress自体の読み込みをキャンセル
wp_deregister_script( 'jquery' );
//バージョンの指定
wp_enqueue_script('jquery','//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');


//Pagenation
function pagination($pages = '', $range = 2)
{
     $showitems = ($range * 2)+1;//表示するページ数（５ページを表示）

     global $paged;//現在のページ値
     if(empty($paged)) $paged = 1;//デフォルトのページ

     if($pages == '')
     {
         global $wp_query;
         $pages = $wp_query->max_num_pages;//全ページ数を取得
         if(!$pages)//全ページ数が空の場合は、１とする
         {
             $pages = 1;
         }
     }

     if(1 != $pages)//全ページが１でない場合はページネーションを表示する
     {
		 echo "<div class=\"pagenation\">\n";
		 echo "<ul>\n";
		 //Prev：現在のページ値が１より大きい場合は表示
         if($paged > 1) echo "<li class=\"prev\"><a href='".get_pagenum_link($paged - 1)."'></a></li>\n";

         for ($i=1; $i <= $pages; $i++)
         {
             if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems ))
             {
                //三項演算子での条件分岐
                echo ($paged == $i)? "<li class=\"active\">".$i."</li>\n":"<li><a href='".get_pagenum_link($i)."'>".$i."</a></li>\n";
             }
         }
		//Next：総ページ数より現在のページ値が小さい場合は表示
		if ($paged < $pages) echo "<li class=\"next\"><a href=\"".get_pagenum_link($paged + 1)."\"></a></li>\n";
		echo "</ul>\n";
		echo "</div>\n";
     }
}

/*
* スラッグ名が日本語だったら自動的に投稿タイプ＋id付与へ変更（スラッグを設定した場合は適用しない）
*/
function auto_post_slug( $slug, $post_ID, $post_status, $post_type ) {
    if ( preg_match( '/(%[0-9a-f]{2})+/', $slug ) ) {
        $slug = utf8_uri_encode( $post_type ) . '-' . $post_ID;
    }
    return $slug;
}
add_filter( 'wp_unique_post_slug', 'auto_post_slug', 10, 4  );



function change_posts_per_page($query) {
 /* 管理画面,メインクエリに干渉しないために必須 */
if ( is_admin() || ! $query->is_main_query() ){
     return;
 }

 /* カテゴリーページの表示件数を5件にする */
 if ( $query->is_category('topics') ) {
     $query->set( 'posts_per_page', '20' );
     return;
 }
 if ( $query->is_category('news') ) {
     $query->set( 'posts_per_page', '20' );
     return;
 }
 if ( $query->is_category('event') ) {
		 $query->set( 'posts_per_page', '20' );
		 return;
 }
 /*
 if ( $query->is_post_type_archive( 'howto' ) ) {
     $query->set( 'posts_per_page', '9' );
     return;
 }
 if ( $query->is_post_type_archive( 'shoplist' ) ) {
		 $query->set( 'posts_per_page', '-1' );
		 return;
 }
 */

}
add_action( 'pre_get_posts', 'change_posts_per_page' );


function landport_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'landport_content_width', 640 );
}
add_action( 'after_setup_theme', 'landport_content_width', 0 );



/**
 * Enqueue scripts and styles.
 */
function landport_scripts() {
	wp_enqueue_style( 'landport-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'landport-style', 'rtl', 'replace' );

	wp_enqueue_script( 'app', get_template_directory_uri() . '/js/app.min.js', array(), _S_VERSION, true );


}
add_action( 'wp_enqueue_scripts', 'landport_scripts' );


// 条件分岐による管理者宛メールの操作(MW WP Form)（テスト用）
// 2022年7月15日作成

function my_mail_test($Mail, $values, $Data) {

	$selected = $Data->get('subject');

	// 選択された内容により送信先を変更する
	if ($selected == 'CARRY THE SUNについて') {
		$Mail->to = 'info@carrythesun.jp';
	} else if ($selected == 'CARRY THE SUN以外の商品について') {
		$Mail->to = 'info@landport.co.jp';
	} else if ($selected == 'BuyOneGiveOneについて') {
		$Mail->to = 'info@landport.co.jp';
	} else if ($selected == '取材・掲載について') {
		$Mail->to = 'info@landport.co.jp';
	} else if ($selected == 'お取り引きについて') {
		$Mail->to = 'info@landport.co.jp';
	} else if ($selected == 'その他') {
		$Mail->to = 'info@landport.co.jp';
	}

// テスト記述を残しておく
//	$Mail->subject = "【Landport】お問い合わせありがとうございます。１";

	return $Mail;

}

// 上記の設定をテスト用のお問い合わせフォームに設定する
add_filter('mwform_admin_mail_mw-wp-form-3916', 'my_mail_test', 10, 3);


//
// 条件分岐による管理者宛メールの操作(MW WP Form)
// 2022年7月15日作成

function my_mail($Mail, $values, $Data) {

	$selected = $Data->get('subject');

	// 選択された内容により送信先を変更する
	if ($selected == 'CARRY THE SUNについて') {
		$Mail->to = 'info@carrythesun.jp';
	} else if ($selected == 'CARRY THE SUN以外の商品について') {
		$Mail->to = 'info@landport.co.jp';
	} else if ($selected == 'BuyOneGiveOneについて') {
		$Mail->to = 'info@landport.co.jp';
	} else if ($selected == '取材・掲載について') {
		$Mail->to = 'info@landport.co.jp';
	} else if ($selected == 'お取り引きについて') {
		$Mail->to = 'info@landport.co.jp';
	} else if ($selected == 'その他') {
		$Mail->to = 'info@landport.co.jp';
	}

	return $Mail;

}
// 上記の設定を本番用のお問い合わせフォームに設定する
add_filter('mwform_admin_mail_mw-wp-form-13', 'my_mail', 10, 3);


