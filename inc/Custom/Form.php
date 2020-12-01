<?php

namespace Theme\Custom;

class Form {
	public function __construct () {

	}

	public function contactMail ( $params ) {
		$message = sprintf( "Name: %s <br/> Email: %s <br/> Message: <br/> %s", $params['name'], $params['email'], $params['message'] );
		wp_mail( get_option( 'admin_email' ), $params['name'], $message );
	}
}
