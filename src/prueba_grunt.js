/*
 * prueba_grunt
 * index.php
 *
 * Copyright (c) 2013 @argkont
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.prueba_grunt = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.prueba_grunt = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.prueba_grunt.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.prueba_grunt.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].prueba_grunt = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
