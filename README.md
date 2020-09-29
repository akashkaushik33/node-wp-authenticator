This repo is forked from Nightgunner5/node-wordpress-auth. Since The original project is not working on new node versions and is not maintained by the original author anymore, So I decided to update the code to make it work and publish a npm package based on that.

NPM package link: https://www.npmjs.com/package/wp-auth

TO INSTALL:
===========
    npm install wp-auth

TO USE:
=======
In your init:

    var wp_auth = require('wp-auth').create({
                          wpurl: 'http://my-blog.example',
                          logged_in_key: 'LOGGED_IN_KEY from wp-config.php',
                          logged_in_salt: 'LOGGED_IN_SALT from wp-config.php',
                          mysql_host: 'MySQL host',
                          mysql_user: 'MySQL username',
                          mysql_pass: 'MySQL password',
			              mysql_port: 'MySQL port (defaults to 3306)',
                          mysql_db: 'MySQL database',
                          wp_table_prefix: 'WordPress table prefix (eg. wp_)' });

When you get a HTTP request and you need to verify auth:

    wp_auth.checkAuth( req ).on( 'auth', function( auth_is_valid, user_id ) {
        auth_is_valid; // true if the user is logged in, false if they are not
        user_id; // the ID number of the user or 0 if the user is not logged in
    } );

To get a usermeta value:

    wp_auth.getUserMeta( user_id, 'meta_key (eg. occupation)', function( data ) {
        // data is null if the user doesn't exist or doesn't have the key.
        // Otherwise, it is the value you would get in WordPress (unserialized intelligently)
    } );

To set a usermeta value:

    wp_auth.setUserMeta( user_id, 'meta_key (eg. occupation)', 'meta_value (eg. Eating spaghetti)' );

To get a user_id from a usermeta value:

    wp_auth.reverseUserMeta( 'meta_key (eg. occupation)', 'meta_value (eg. Eating spaghetti)', function( id ) {
        // id is null if no user could be found with the given meta key value pair
        // Otherwise, it is the ID of the user
        // If multiple users matched, only one will be given
    } );
