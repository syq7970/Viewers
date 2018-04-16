//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:polyfill":{"client":{"index.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/ohif_polyfill/client/index.js                                    //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
module.watch(require("./ie.js"));
///////////////////////////////////////////////////////////////////////////////

},"ie.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/ohif_polyfill/client/ie.js                                       //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 1);
var writeScript;
module.watch(require("./lib/writeScript"), {
  "default": function (v) {
    writeScript = v;
  }
}, 2);

// Check if browser is IE and add the polyfill scripts
if (navigator && /MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
  Meteor.startup(function () {
    $(window).on('load', function () {
      // Fix SVG+USE issues by calling the SVG polyfill
      writeScript('svgxuse.min.js');
    });
  });
}
///////////////////////////////////////////////////////////////////////////////

},"lib":{"absoluteUrl.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/ohif_polyfill/client/lib/absoluteUrl.js                          //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
module.exportDefault(function (path) {
  if (path) {
    // Remove the leading "/"
    path = path.replace(/^\//, '');
  }

  return Meteor.absoluteUrl(path);
});
///////////////////////////////////////////////////////////////////////////////

},"writeScript.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/ohif_polyfill/client/lib/writeScript.js                          //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
var absoluteUrl;
module.watch(require("./absoluteUrl"), {
  "default": function (v) {
    absoluteUrl = v;
  }
}, 0);
module.exportDefault(function (fileName, callback) {
  var script = document.createElement('script');
  script.src = absoluteUrl("/packages/ohif_polyfill/public/js/" + fileName);

  script.onload = function () {
    if (typeof callback === 'function') {
      callback(script);
    }
  };

  document.body.appendChild(script);
});
///////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("/node_modules/meteor/ohif:polyfill/client/index.js");

/* Exports */
Package._define("ohif:polyfill");

})();
