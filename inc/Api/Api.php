<?php

namespace Theme\Api;

use Theme\Custom\Form;
use Theme\Setup\Menus;
use Theme\Traits\Singleton;

class Api {
	use Singleton;

	private $namespace = "theme/v1";

	public function __construct () {
		add_action( 'rest_api_init', [ $this, 'get_nav_menu' ] );
		add_action( 'rest_api_init', [ $this, 'contact_form_handle' ] );
		add_action( 'rest_api_init', [ $this, 'get_theme_options' ] );
	}

	public function get_nav_menu () {
		register_rest_route( $this->namespace, "/menu/(?P<location>\w+)", array(
			'methods'  => 'GET',
			'permission_callback' => '__return_true',
			'callback' => function ( $request ) {
				$location = $request['location'];
				$menu_items = Menus::get_nav_menu_items_by_location( $location );
				foreach ( $menu_items as $menu_item ) {
					$menu_item->url = str_replace( site_url(), '', $menu_item->url );
					$menu_item->page_id = $menu_item->object_id;
					$menu_item->page_type = carbon_get_post_meta( $menu_item->object_id, 'page_type' );

				}
				return $menu_items;
			}
		), true );
	}

	public function contact_form_handle () {
		register_rest_route( $this->namespace, "/submit/contact-form", array(
			'methods'  => 'POST',
			'permission_callback' => '__return_true',
			'callback' => function ( $request ) {
				$params = [ "name" => $request["name"], "email" => $request["email"], "message" => $request['message'] ];
				$form = new Form();
				$form->contactMail( $params );
			}
		), true );
	}

	public function get_theme_options () {
		register_rest_route( $this->namespace, "/options", array(
			'methods'  => 'GET',
			'permission_callback' => '__return_true',
			'callback' => function ( $request ) {
				$params = [
					'header'  => [
						'site_logo'        => wp_get_attachment_image_url( carbon_get_theme_option( 'site_logo' ) ),
						'facebook_link'    => carbon_get_theme_option( 'facebook_link' ),
						'twitter_link'     => carbon_get_theme_option( 'twitter_link' ),
						'instagram_link'   => carbon_get_theme_option( 'instagram_link' ),
						'youtube_link'     => carbon_get_theme_option( 'youtube_link' ),
						'top_header_left'  => carbon_get_theme_option( 'top_header_left' ),
						'top_header_right' => carbon_get_theme_option( 'top_header_right' ),
					],
					'footer'  => [
						'footer_one'   => carbon_get_theme_option( 'footer_one' ),
						'footer_two'   => carbon_get_theme_option( 'footer_two' ),
						'footer_three' => carbon_get_theme_option( 'footer_three' ),
						'footer_four'  => carbon_get_theme_option( 'footer_four' ),
					],
					'scripts' => [
						'header_scripts' => carbon_get_theme_option( 'header_scripts' ),
						'footer_scripts' => carbon_get_theme_option( 'footer_scripts' ),
					]
				];
				return $params;
			}
		), true );
	}

}
