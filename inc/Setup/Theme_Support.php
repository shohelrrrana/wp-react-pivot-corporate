<?php
/**
 * Theme_Support class file
 *
 * @package pivot-corporate
 */
namespace Theme\Setup;
use Theme\Traits\Singleton;

class Theme_Support {
    use Singleton;

    protected function __construct() {
        //Load Methods
        $this->setup_hooks();
    }

    protected function setup_hooks() {
        //Actions
        add_action( 'after_setup_theme', [$this, 'setup_theme'] );
    }

    public function setup_theme() {
        load_theme_textdomain( 'pivot-corporate', get_template_directory() . '/languages' );
        add_theme_support( 'automatic-feed-links' );
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );
        add_editor_style();
        add_theme_support( 'wp-block-styles' );
        add_theme_support( 'align-wide' );
        global $content_width;
        if ( !isset( $content_width ) ) {
            $content_width = 1240;
        }
        add_theme_support(
            'html5',
            [
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
                'style',
                'script',
            ]
        );

        add_theme_support(
            'custom-background',
            [
                'default-color'  => 'ffffff',
                'default-image'  => '',
                'default-repeat' => 'no-repeat',
            ]
        );
        add_theme_support( 'customize-selective-refresh-widgets' );
        add_theme_support(
            'custom-logo',
            [
                'height'      => 250,
                'width'       => 250,
                'flex-width'  => true,
                'flex-height' => true,
            ]
        );
		\Carbon_Fields\Carbon_Fields::boot();
    }
}