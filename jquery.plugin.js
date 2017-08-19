(function($, undefined) {

  'use strict';

  $.fn.pluginname = function(options) {

    var defaults = {
      opt1: 'foo',
      opt2: 'bar',
    };

    var settings = $.extend(true, {}, defaults, options);

    return this.each(function() {
      // Do something awesome.
    });

  };

})(jQuery);
