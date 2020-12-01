<?php
/**
 * Autoload class file
 *
 * @package pivot-corporate
 */

 namespace Theme\Helpers;

 final class Autoload{
     static $namespace_root = 'Theme';

     public function __construct() {
         spl_autoload_register([$this, 'load']);
     }

     final private function load($resource) {
         //trim slash
         $resource = trim($resource, '\\');
         $resource = str_replace('\\', '/', $resource);

         //Trim Root Namespace
         $resource = explode('/', $resource);
         if(isset($resource[0]) && $resource[0] == static::$namespace_root){
             array_shift($resource);
         }
         $resource = join('/', $resource);

         $resource_path = get_template_directory() . '/inc/'.$resource.'.php';
         
         if(!empty($resource_path)  && file_exists($resource_path)){
             require_once $resource_path;
         }
     }

 }

 new Autoload;