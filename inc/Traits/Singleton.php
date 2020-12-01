<?php
/**
 * Singleton class file
 *
 * @package pivot-corporate
 */

namespace Theme\Traits;

trait Singleton {
    static $instance = [];

    final static function get_instance() {
        $called_class = get_called_class();
        if ( !isset( self::$instance[$called_class] ) ) {
            self::$instance[$called_class] = new $called_class;
        }
        return self::$instance[$called_class];
    }
}