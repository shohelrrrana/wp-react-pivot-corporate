<?php

namespace Theme\Custom\Meta_Boxes;

use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Theme\Traits\Singleton;

class Page {
	use Singleton;

	public function __construct () {
		add_action( 'carbon_fields_register_fields', [ $this, 'pages_meta_boxes' ] );
	}

	public function pages_meta_boxes () {
		Container::make( 'post_meta', __( 'Page Meta Boxes' ) )
			->where( 'post_type', '=', 'page' )
			->add_fields( array(
				Field::make( 'select', 'page_type', __( 'Page Type', 'pivot-corporate' ) )
					->set_visible_in_rest_api( true )
					->set_options( array(
						'default' => __( 'Default', 'pivot-corporate' ),
						'home' => __( 'Home', 'pivot-corporate' ),
						'blog' => __( 'Blog', 'pivot-corporate' ),
						'contact' => __( 'Contact', 'pivot-corporate' ),
					) ),
			) );
	}
}