<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita3aa0be6ca142846e5235a465e7bbb36
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Carbon_Fields\\' => 14,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Carbon_Fields\\' => 
        array (
            0 => __DIR__ . '/..' . '/htmlburger/carbon-fields/core',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita3aa0be6ca142846e5235a465e7bbb36::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita3aa0be6ca142846e5235a465e7bbb36::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInita3aa0be6ca142846e5235a465e7bbb36::$classMap;

        }, null, ClassLoader::class);
    }
}
