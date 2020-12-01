<?php
/**
 * Theme Main class file
 *
 * @package pivot-corporate
 */

namespace Theme;

use Theme\Api\Api;
use Theme\Custom\Meta_Boxes;
use Theme\Setup\Enqueue;
use Theme\Setup\Menus;
use Theme\Setup\Theme_Support;

class Theme {
	static $boot;

	public function __construct () {
		//Load Methods
		$this->include_files();

		//Get Instance Classes
		Api::get_instance();
		Theme_Support::get_instance();
		Enqueue::get_instance();
		Menus::get_instance();
		Meta_Boxes::get_instance();
		Meta_Boxes\Theme_Options::get_instance();
		Meta_Boxes\Page::get_instance();
		Meta_Boxes\Home::get_instance();
		Meta_Boxes\Blog::get_instance();
		Meta_Boxes\Contact::get_instance();
	}

	public function include_files () {
		require_once get_template_directory() . '/inc/Helpers/functions.php';
		require_once get_template_directory() . '/inc/Helpers/template-tags.php';
		require_once get_template_directory() . '/inc/Helpers/plugin_activation.php';
		require_once get_template_directory() . '/demo-data/demo-data.php';
		require_once get_template_directory() . '/inc/Plugins/carbon-fields/vendor/autoload.php';
	}

	static public function boot () {
		if ( ! static::$boot ) {
			static::$boot = new Theme();
		}
		return static::$boot;
	}
}