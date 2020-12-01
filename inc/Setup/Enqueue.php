<?php
/**
 * Enqueue class file
 *
 * @package pivot-corporate
 */

namespace Theme\Setup;

use Theme\Traits\Singleton;

class Enqueue {
	use Singleton;

	protected function __construct () {
		$this->setup_hooks();
	}

	public function setup_hooks () {
		//Action
		add_action( 'wp_enqueue_scripts', [ $this, 'register_style' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'register_script' ] );
	}

	public function register_style () {
		wp_enqueue_style( 'google-font', '//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800%7CShadows+Into+Light', [], THEME_VERSION );
		wp_enqueue_style( 'bootstrap', THEME_URI . '/assets/vendor/bootstrap/css/bootstrap.css', [], THEME_VERSION );
		wp_enqueue_style( 'font-awesome', THEME_URI . '/assets/vendor/font-awesome/css/font-awesome.min.css', [], THEME_VERSION );
		wp_enqueue_style( 'main-style', THEME_URI . '/assets/css/main-style.css', [], THEME_VERSION );
		wp_enqueue_style( 'theme-style', get_stylesheet_uri(), [], THEME_VERSION );
	}

	public function register_script () {
		wp_enqueue_script( 'bootstrap', THEME_URI . '/assets/vendor/bootstrap/js/bootstrap.min.js', [ 'jquery' ], THEME_VERSION, true );
		wp_enqueue_script( 'popper', THEME_URI . '/assets/vendor/bootstrap/js/popper.min.js', [ 'jquery' ], THEME_VERSION, true );
		wp_enqueue_script( 'macy', THEME_URI . '/assets/vendor/macy/js/macy.js', [ 'jquery' ], THEME_VERSION, true );
		wp_enqueue_script( 'main-script', THEME_URI . '/assets/js/main-script.js', [ 'jquery' ], THEME_VERSION, true );
	}
}