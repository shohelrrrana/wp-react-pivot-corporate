<?php
/**
 * The main function file for theme
 *
 * @package pivot-corporate
 */
//Define theme constant
define( 'THEME_PATH', trailingslashit( get_template_directory() ) );
define( 'THEME_URI', trailingslashit( get_template_directory_uri() ) );

if ( get_site_url() == 'http://wp-demo.test' ) {
	define( 'THEME_VERSION', time() );
} else {
	define( 'THEME_VERSION', wp_get_theme()->get( 'Version' ) );
}

//Include autoloader
require_once get_template_directory() . '/inc/Helpers/Autoload.php';

//Theme Boot
\Theme\Theme::boot();