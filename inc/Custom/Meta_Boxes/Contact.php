<?php

namespace Theme\Custom\Meta_Boxes;

use Carbon_Fields\Container;
use Carbon_Fields\Field;
use Theme\Traits\Singleton;

class Contact {
	use Singleton;

	public function __construct () {
		add_action( 'carbon_fields_register_fields', [ $this, 'contact_page_meta_boxes' ] );
	}

	public function contact_page_meta_boxes () {
		Container::make( 'post_meta', __( 'Contact Page Options' ) )
			->where( 'post_type', '=', 'page' )
			->where( 'post_id', 'CUSTOM', function ( $post_id ) {
				if ( carbon_get_post_meta( $post_id, 'page_type' ) == 'contact' ) {
					return true;
				}
				return false;
			} )
			->add_fields( [
				Field::make( 'complex', 'contact_page_sections' )
					->set_duplicate_groups_allowed( false )
					->set_layout( 'tabbed-vertical' )
					->set_visible_in_rest_api( true )
					->setup_labels( [
						'plural_name'   => 'Sections',
						'singular_name' => 'Section',
					] )
					->add_fields( 'page_header_section', __( 'Page Header Section', 'pivot-corporate' ), $this->page_header_section_fields() )
					->add_fields( 'contact_section', __( 'Contact Section', 'pivot-corporate' ), $this->contact_section_fields() )
			] );

	}

	public function page_header_section_fields () {
		return array(
			Field::make( 'image', 'section_bg', __( 'Section Background', 'pivot-corporate' ) ),
			Field::make( 'text', 'sub_heading', __( 'Sub Heading', 'pivot-corporate' ) ),
			Field::make( 'text', 'heading', __( 'Heading', 'pivot-corporate' ) ),
		);
	}

	public function contact_section_fields () {
		return array(
			Field::make( 'rich_text', 'section_title', __( 'Section Title', 'pivot-corporate' ) ),
			Field::make( 'rich_text', 'section_desc', __( 'Section Description', 'pivot-corporate' ) ),
		);
	}
}