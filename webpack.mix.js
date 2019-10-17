const mix = require('laravel-mix');

require('laravel-mix-alias');
 
mix.alias('@argon-admin', '/resources/js/argon-admin');
mix.alias('@argon-landing', '/resources/js/argon-landing');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .js('resources/js/app_admin.js', 'public/js')
   .js('resources/js/app_landing.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
