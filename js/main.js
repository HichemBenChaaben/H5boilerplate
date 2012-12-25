/*
               .__              __         
  _____ _____  |__| ____       |__| ______ 
 /     \\__  \ |  |/    \      |  |/  ___/ 
|  Y Y  \/ __ \|  |   |  \     |  |\___ \  
|__|_|  (____  /__|___|  / /\__|  /____  > 
      \/     \/        \/  \______|    \/  

main.js by hichem benchaabene flyweight js pattern  

*/
;(function ( $, window, undefined ) {
	'use_strict';
  var pluginName = 'expandSearch',
      document = window.document,
      defaults = {
      	// pass the field name over here dude 
        fieldName: ""
      };

  function Plugin( element, options ) {
    this.element = element;

    this.options = $.extend( {}, defaults, options) ;

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  Plugin.prototype.init = function () {
    
  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
      }
    });
  }

}(jQuery, window));