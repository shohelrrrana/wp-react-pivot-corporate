<?php

namespace Theme\Custom\Meta_Boxes;

use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Theme\Traits\Singleton;

class Home {
	use Singleton;

	public function __construct () {
		add_action( 'carbon_fields_register_fields', [ $this, 'home_page_meta_boxes' ] );
	}

	public function home_page_meta_boxes () {
		Container::make( 'post_meta', __( 'Home Page Options' ) )
			->where( 'post_type', '=', 'page' )
			->where( 'post_id', 'CUSTOM', function ( $post_id ) {
				if ( carbon_get_post_meta( $post_id, 'page_type' ) == 'home' ) {
					return true;
				}
				return false;
			} )
			->add_fields( [
				Field::make( 'complex', 'home_page_sections' )
					->set_duplicate_groups_allowed( false )
					->set_layout( 'tabbed-vertical' )
					->set_visible_in_rest_api( true )
					->setup_labels( [
						'plural_name'   => 'Sections',
						'singular_name' => 'Section',
					] )
					->add_fields( 'hero_section', __( 'Hero Section', 'pivot-corporate' ), $this->hero_section_fields() )
					->add_fields( 'cta_section', __( 'Cta Section', 'pivot-corporate' ), $this->cta_section_fields() )
					->add_fields( 'video_section', __( 'Video Section', 'pivot-corporate' ), $this->video_section_fields() )
					->add_fields( 'feature_section', __( 'Feature Section', 'pivot-corporate' ), $this->feature_section_fields() )
					->add_fields( 'client_logo_section', __( 'Client Logo Section', 'pivot-corporate' ), $this->client_logo_section_fields() )
			] );

	}

	public function hero_section_fields () {
		return array(
			Field::make( 'image', 'hero_bg', __( 'Hero Background Image', 'pivot-corporate' ) ),
			Field::make( 'text', 'hero_title', __( 'Hero Title', 'pivot-corporate' ) ),
			Field::make( 'textarea', 'hero_desc', __( 'Hero Description', 'pivot-corporate' ) ),
			Field::make( 'text', 'button_one_title', __( 'Button One Title', 'pivot-corporate' ) )->set_width( 50 ),
			Field::make( 'text', 'button_one_url', __( 'Button One URL', 'pivot-corporate' ) )->set_width( 50 ),
			Field::make( 'text', 'button_two_title', __( 'Button Two Title', 'pivot-corporate' ) )->set_width( 50 ),
			Field::make( 'text', 'button_two_url', __( 'Button Two URL', 'pivot-corporate' ) )->set_width( 50 ),
		);
	}

	public function cta_section_fields () {
		return array(
			Field::make( 'textarea', 'section_title', __( 'Section Title', 'pivot-corporate' ) ),
			Field::make( 'text', 'button_title', __( 'Button Title', 'pivot-corporate' ) )->set_width( 50 ),
			Field::make( 'text', 'button_url', __( 'Button URL', 'pivot-corporate' ) )->set_width( 50 ),
		);
	}

	public function video_section_fields () {
		return array(
			Field::make( 'text', 'video_url', __( 'Video URL', 'pivot-corporate' ) ),
			Field::make( 'textarea', 'section_title', __( 'Section Title', 'pivot-corporate' ) ),
			Field::make( 'rich_text', 'section_desc', __( 'Section Title', 'pivot-corporate' ) ),
			Field::make( 'text', 'button_title', __( 'Button Title', 'pivot-corporate' ) )->set_width( 50 ),
			Field::make( 'text', 'button_url', __( 'Button URL', 'pivot-corporate' ) )->set_width( 50 ),
		);
	}

	public function feature_section_fields () {
		return array(
			Field::make( 'complex', 'features', __( 'Features', 'pivot-corporate' ) )
				->set_duplicate_groups_allowed( false )
				->add_fields( __( 'feature_one', 'Feature One', 'pivot-corporate' ), [
					Field::make( 'image', 'bg_image', __( 'Background Image', 'pivot-corporate' ) ),
					Field::make( 'text', 'sub_title', __( 'Sub Title', 'pivot-corporate' ) ),
					Field::make( 'text', 'title', __( 'Title', 'pivot-corporate' ) ),
					Field::make( 'rich_text', 'desc', __( 'Description', 'pivot-corporate' ) ),
					Field::make( 'text', 'button_title', __( 'Button Title', 'pivot-corporate' ) )->set_width( 50 ),
					Field::make( 'text', 'button_url', __( 'Button URL', 'pivot-corporate' ) )->set_width( 50 ),
				] )
				->add_fields( 'feature_two', __( 'Feature Two', 'pivot-corporate' ), [
					Field::make( 'image', 'bg_image', __( 'Background Image', 'pivot-corporate' ) ),
					Field::make( 'text', 'sub_title', __( 'Sub Title', 'pivot-corporate' ) ),
					Field::make( 'text', 'title', __( 'Title', 'pivot-corporate' ) ),
					Field::make( 'rich_text', 'desc', __( 'Description', 'pivot-corporate' ) ),
					Field::make( 'text', 'button_title', __( 'Button Title', 'pivot-corporate' ) )->set_width( 50 ),
					Field::make( 'text', 'button_url', __( 'Button URL', 'pivot-corporate' ) )->set_width( 50 ),
				] )
		);
	}

	public function client_logo_section_fields () {
		return array(
			Field::make( 'media_gallery', 'client_logos', __( 'Client Logos', 'pivot-corporate' ) )
		);
	}
}