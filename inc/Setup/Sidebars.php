<?php
/**
 * Sidebars class file
 *
 * @package pivot-corporate
 */

namespace Theme\Setup;

use Theme\Traits\Singleton;

class Sidebars {
	use Singleton;

	protected function __construct () {
		$this->setup_hooks();
	}

	public function setup_hooks () {
		//Action
		add_action( 'widgets_init', [ $this, 'register_sidebars' ] );
	}

	public function register_sidebars () {
		register_sidebar( [
			'name'          => __( 'Blog Sidebar', 'pivot-corporate' ),
			'id'            => 'blog-sidebar',
			'description'   => __( 'Widgets in this area will be shown on blog page.', 'pivot-corporate' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widgettitle">',
			'after_title'   => '</h5>',
		] );

		if ( class_exists( 'WooCommerce' ) ) {
			register_sidebar( [
				'name'          => __( 'Shop Sidebar', 'pivot-corporate' ),
				'id'            => 'shop-sidebar',
				'description'   => __( 'Widgets in this area will be shown on shop page.', 'pivot-corporate' ),
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h5 class="widgettitle">',
				'after_title'   => '</h5>',
			] );
		}

		register_sidebar( [
			'name'          => __( 'Footer #1', 'pivot-corporate' ),
			'id'            => 'footer-one',
			'description'   => __( 'Widgets in this area will be footer on page.', 'pivot-corporate' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widgettitle">',
			'after_title'   => '</h5>',
		] );

		register_sidebar( [
			'name'          => __( 'Footer #2', 'pivot-corporate' ),
			'id'            => 'footer-two',
			'description'   => __( 'Widgets in this area will be footer on page.', 'pivot-corporate' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widgettitle">',
			'after_title'   => '</h5>',
		] );

		register_sidebar( [
			'name'          => __( 'Footer #3', 'pivot-corporate' ),
			'id'            => 'footer-three',
			'description'   => __( 'Widgets in this area will be footer on page.', 'pivot-corporate' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widgettitle">',
			'after_title'   => '</h5>',
		] );

		register_sidebar( [
			'name'          => __( 'Footer #4', 'pivot-corporate' ),
			'id'            => 'footer-four',
			'description'   => __( 'Widgets in this area will be footer on page.', 'pivot-corporate' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h5 class="widgettitle">',
			'after_title'   => '</h5>',
		] );
	}
}