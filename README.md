About
=====

Browser-only AMD versions of Backbone, Underscore, Bootstrap, noty and Handlebars.
I deleted checks for 'exports', 'module', objects etc.
Modules getting returned only - no global (window) namespace pollution.

Also require.js with jquery got patched, so jquery gets not added to the global window object.
This could be problematic with jquery plugins and other scripts which are not AMD modules. It might be neccessary to
wrap your jquery plugins and scripts with a 'define' call.

I have added a simple test (test/index.html) which loads all libraries and does a very very basic test of those.

require, require-jquery, jquery - WTF?
======================================

 * require: just requirejs standalone unmodified
 * jquery: jquery AMD browser only version, standalone
 * require-jquery: requirejs WITH jquery bundled in one file


LICENSE
=======

See each library for license details.