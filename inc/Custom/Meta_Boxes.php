<?php
/**
 * Custom meta boxes class file
 *
 * @package pivot-corporate
 */

namespace Theme\Custom;

use Theme\Traits\Singleton;

class Meta_Boxes {
	use Singleton;

	public function __construct () {
		$this->setup_hooks();
	}

	public function setup_hooks () {
		add_action( 'add_meta_boxes', [ $this, 'hide_page_title_meta' ] );
		add_action( 'save_post', [ $this, 'save_hide_page_title_meta' ] );
	}

	public function hide_page_title_meta () {
		add_meta_box( 'hide_page_title', 'Hide Page Title', [ $this, 'hide_page_title_meta_input' ], 'page', 'side', 'high' );
	}


	public function hide_page_title_meta_input ( $post ) {
		$hide_page_title = get_post_meta( $post->ID, 'hide_page_title', true );
		if ( ! isset( $hide_page_title ) ) {
			add_post_meta( $post->ID, 'hide_page_title', '', false );
		}
		$checked = ( $hide_page_title == 'yes' ) ? 'checked="checked"' : '';
		?>
        <label class="components-base-control__label" for="hide_page_title">
            <input type="checkbox" name="hide_page_title" value="yes" <?php echo $checked; ?> />
            &nbsp;
            Hide Page Title
        </label>

		<?php
	}


	public function save_hide_page_title_meta ( $post_ID ) {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
		if ( isset( $_POST['post_type'] ) && 'page' == $_POST['post_type'] ) {
			update_post_meta( $post_ID, 'hide_page_title', strip_tags( $_POST['hide_page_title'] ) );
		}
	}

}