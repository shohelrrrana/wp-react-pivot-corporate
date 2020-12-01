<?php

namespace Theme\Custom\Meta_Boxes;

use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Theme\Traits\Singleton;

class Theme_Options {
	use Singleton;

	public function __construct () {
		add_action( 'carbon_fields_register_fields', [ $this, 'theme_options_meta_boxes' ] );
	}

	public function theme_options_meta_boxes () {
		Container::make( 'theme_options', __( 'Theme Options' ) )
			->add_tab( __( 'Header' ), $this->header_options_fields() )
			->add_tab( __( 'Footer' ), $this->footer_options_fields() )
			->add_tab( __( 'Scripts' ), $this->scripts_options_fields() );

	}

	public function header_options_fields () {
		return [
			Field::make( 'image', 'site_logo', __( 'Site Logo' ) ),
			Field::make( 'text', 'facebook_link', __( 'Facebook Link' ) )->set_width( 50 ),
			Field::make( 'text', 'twitter_link', __( 'Twitter Link' ) )->set_width( 50 ),
			Field::make( 'text', 'instagram_link', __( 'Instagram Link' ) )->set_width( 50 ),
			Field::make( 'text', 'youtube_link', __( 'Youtube Link' ) )->set_width( 50 ),
			Field::make( 'rich_text', 'top_header_left', __( 'Top header left content' ) ),
			Field::make( 'rich_text', 'top_header_right', __( 'Top header right content' ) ),
		];
	}

	public function footer_options_fields () {
		return [
			Field::make( 'rich_text', 'footer_one', __( 'Footer #1' ) ),
			Field::make( 'rich_text', 'footer_two', __( 'Footer #2' ) ),
			Field::make( 'rich_text', 'footer_three', __( 'Footer #3' ) ),
			Field::make( 'rich_text', 'footer_four', __( 'Footer #4' ) ),
		];
	}

	public function scripts_options_fields () {
		return [
			Field::make( 'header_scripts', 'header_scripts', __( 'Header Scripts' ) ),
			Field::make( 'footer_scripts', 'footer_scripts', __( 'Footer Scripts' ) ),
		];
	}


}