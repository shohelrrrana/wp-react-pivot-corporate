<?php
/**
 * The main template file
 *
 * @package pivot-corporate
 */
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pivot Corporate</title>

    <link href='//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,400,300,600,700%7CRaleway:700'
          rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="<?php echo get_theme_file_uri( '/front-end/build/bundle.css' ) . '?' . time(); ?>">
</head>
<body>

<div id="root"></div>

<script src="<?php echo get_theme_file_uri( '/front-end/build/bundle.js' ) . '?' . time(); ?>"></script>

</body>
</html>
