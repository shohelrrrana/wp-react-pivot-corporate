<?php
require_once get_template_directory() . '/inc/Plugins/class-tgm-plugin-activation.php';

function pivot_corporate_plugin_activation() {

    $plugins = [
        [
            'name'     => __( 'One Click Demo Import', 'pivot_corporate' ),
            'slug'     => 'one-click-demo-import',
            'source'   => 'https://downloads.wordpress.org/plugin/one-click-demo-import.2.6.1.zip',
            'required' => true,
        ],
    ];

    $config = [
        'id'          => 'pivot_corporate_plugins_activation',
        'menu'        => 'pivot_corporate-plugins-activation',
        'parent_slug' => 'themes.php',
        'has_notices' => true,

    ];

    tgmpa( $plugins, $config );

}
add_action( 'tgmpa_register', 'pivot_corporate_plugin_activation' );