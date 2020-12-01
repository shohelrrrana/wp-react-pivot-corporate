<?php
/**
 * Menu class file for handle navigation
 *
 * @package pivot-corporate
 */

namespace Theme\Setup;

use Theme\Traits\Singleton;

class Menus {
	use Singleton;

	protected function __construct () {
		$this->setup_hooks();
	}

	public function setup_hooks () {
		//Actions & filters
		add_action( 'init', [ $this, 'register_menus' ] );
		// add_filter( 'nav_menu_css_class', [$this, 'add_class_to_all_menu_list'] );
		// add_filter( 'nav_menu_link_attributes', [$this, 'add_class_to_all_menu_anchors'] );

	}

	public function register_menus () {
		register_nav_menus( [
			'HEADER_MENU' => __( 'Header Menu', 'pivot-corporate' ),
			'FOOTER_MENU' => __( 'Footer Menu', 'pivot-corporate' ),
		] );
	}

	public static function get_nav_menu_items_by_location ( $location, $args = [] ) {
		$menu_items = [];
		$locations = get_nav_menu_locations();
		if ( array_key_exists( $location, $locations ) ) {
			$object = wp_get_nav_menu_object( $locations[ $location ] );
			$menu_items = wp_get_nav_menu_items( $object->name, $args );
		}
		return $menu_items;
	}

	public function add_class_to_all_menu_list ( $classes ) {
		$classes[] = 'nav-item';
		return $classes;
	}

	public function add_class_to_all_menu_anchors ( $atts ) {
		$atts['class'] = 'nav-link';
		return $atts;
	}

	public static function get_child_menu_items ( $menu_array, $parent_id ) {
		$child_menu_items = [];
		if ( ! empty( $menu_array ) && is_array( $menu_array ) ) {
			foreach ( $menu_array as $menu ) {
				if ( intval( $menu->menu_item_parent ) === intval( $parent_id ) ) {
					array_push( $child_menu_items, $menu );
				}
			}
		}
		return $child_menu_items;
	}

	public static function is_current_menu ( $menu_item ) {
		if ( is_object( $menu_item ) && ! empty( $menu_item ) && ( intval( get_queried_object()->ID ) === intval( $menu_item->object_id ) ) ) {
			return true;
		}
		return false;
	}
}