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
var Template = Package['templating-runtime'].Template;
var _ = Package.underscore._;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:header":{"main.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_header/main.js                                                                                 //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.export({
  header: function () {
    return header;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

/*
 * Defines the base OHIF header object
 */
var dropdown = new OHIF.ui.Dropdown();
var header = {
  dropdown: dropdown
};
OHIF.header = header;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"client":{"index.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_header/client/index.js                                                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.watch(require("./components"));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"components":{"index.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_header/client/components/index.js                                                              //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.watch(require("./header/header.html"));
module.watch(require("./header/header.js"));
module.watch(require("./header/header.styl"));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header":{"header.html":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// node_modules/meteor/ohif_header/client/components/header/header.html                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.watch(require("./template.header.js"), {
  "*": module.makeNsSetter(true)
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.header.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_header/client/components/header/template.header.js                                             //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //

Template.__checkName("header");
Template["header"] = new Template("Template.header", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "header noselect ", Spacebars.mustache(view.lookup("reactive"), view.lookup("headerClasses")) ];
    }
  }, "\n        ", HTML.DIV({
    class: "clearfix"
  }, "\n            ", HTML.A({
    target: "_blank",
    class: "brand pull-left",
    href: function() {
      return Spacebars.mustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "brandHref"), "/");
    }
  }, "\n                ", Blaze._TemplateWith(function() {
    return "brand";
  }, function() {
    return Spacebars.include(view.lookupTemplate("section"));
  }), "\n            "), "\n            ", Blaze._TemplateWith(function() {
    return "headerAfterBrand";
  }, function() {
    return Spacebars.include(view.lookupTemplate("section"));
  }), "\n            ", HTML.A({
    href: "#",
    class: "header-menu pull-right"
  }, Blaze._TemplateWith(function() {
    return "headerMenu";
  }, function() {
    return Spacebars.include(view.lookupTemplate("section"));
  })), "\n        "), "\n        ", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  }), "\n    ");
}));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_header/client/components/header/header.js                                                      //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 1);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 2);
Template.header.onCreated(function () {
  var instance = Template.instance();
  instance.dropdownItems = [];
  instance.autorun(function () {
    OHIF.header.dropdown.observer.depend();
    instance.dropdownItems = OHIF.header.dropdown.getItems();
  });
});
Template.header.events({
  'click .header-menu': function (event, instance) {
    event.preventDefault(); // Prevent dropdown from being opened if there's one already opened

    if ($(event.currentTarget).find('.dropdown').length) return; // Show the dropdown

    OHIF.ui.showDropdown(instance.dropdownItems, {
      parentElement: event.currentTarget,
      menuClasses: 'dropdown-menu-right',
      marginTop: '25px'
    });
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.styl":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// node_modules/meteor/ohif_header/client/components/header/header.styl                                         //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.watch(require("./header.styl.css"), {
  "*": module.makeNsSetter(true)
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.styl.css":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_header/client/components/header/header.styl.css                                                //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.exports = require("meteor/modules").addStyles(
  ".theme-icon-crickets,\n.theme-icon-tide,\n.theme-icon-tigerlily,\n.theme-icon-quartz,\n.theme-icon-overcast,\n.theme-icon-mint,\n.theme-icon-honeycomb {\n  display: inline-block;\n  background: url(\"/packages/ohif_design/assets/theme-icons.png\") no-repeat;\n  overflow: hidden;\n  text-indent: -9999px;\n  text-align: left;\n}\n.theme-icon-crickets {\n  background-position: 0px 0px;\n  width: 64px;\n  height: 56px;\n}\n.theme-icon-tide {\n  background-position: 0px -56px;\n  width: 64px;\n  height: 54px;\n}\n.theme-icon-tigerlily {\n  background-position: 0px -110px;\n  width: 62px;\n  height: 61px;\n}\n.theme-icon-quartz {\n  background-position: 0px -171px;\n  width: 59px;\n  height: 64px;\n}\n.theme-icon-overcast {\n  background-position: 0px -235px;\n  width: 58px;\n  height: 37px;\n}\n.theme-icon-mint {\n  background-position: 0px -272px;\n  width: 57px;\n  height: 61px;\n}\n.theme-icon-honeycomb {\n  background-position: 0px -333px;\n  width: 50px;\n  height: 58px;\n}\nbody>.header {\n  height: 40px;\n  padding: 10px 10px 0;\n  -webkit-transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -ms-transition: all 0.5s ease;\n  -o-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\nbody>.header {\n  color: #fff;\n}\nbody.theme-tide body>.header {\n  color: #fff;\n}\nbody.theme-tigerlily body>.header {\n  color: #fff;\n}\nbody.theme-crickets body>.header {\n  color: #fff;\n}\nbody.theme-honeycomb body>.header {\n  color: #fff;\n}\nbody.theme-mint body>.header {\n  color: #fff;\n}\nbody.theme-overcast body>.header {\n  color: #fff;\n}\nbody.theme-quartz body>.header {\n  color: #fff;\n}\nbody>.header {\n  background-color: #000;\n}\nbody.theme-tide body>.header {\n  background-color: #000;\n}\nbody.theme-tigerlily body>.header {\n  background-color: #000;\n}\nbody.theme-crickets body>.header {\n  background-color: #000;\n}\nbody.theme-honeycomb body>.header {\n  background-color: #000;\n}\nbody.theme-mint body>.header {\n  background-color: #000;\n}\nbody.theme-overcast body>.header {\n  background-color: #000;\n}\nbody.theme-quartz body>.header {\n  background-color: #000;\n}\nbody>.header>.clearfix {\n  position: relative;\n}\nbody>.header .header-menu {\n  padding: 4px 0;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n  text-decoration: none;\n}\nbody>.header .header-menu {\n  color: #9ccef9;\n}\nbody.theme-tide body>.header .header-menu {\n  color: #9ccef9;\n}\nbody.theme-tigerlily body>.header .header-menu {\n  color: #9acffd;\n}\nbody.theme-crickets body>.header .header-menu {\n  color: #92c2da;\n}\nbody.theme-honeycomb body>.header .header-menu {\n  color: #b5b5b5;\n}\nbody.theme-mint body>.header .header-menu {\n  color: #a7e9b3;\n}\nbody.theme-overcast body>.header .header-menu {\n  color: #9cbecf;\n}\nbody.theme-quartz body>.header .header-menu {\n  color: #8ea2a4;\n}\nbody>.header .header-menu:empty {\n  display: none;\n}\nbody>.header.header-big {\n  height: 160px;\n  background-color: rgba(21,25,30,0.7);\n}\n"
);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".styl"
  ]
});
var exports = require("/node_modules/meteor/ohif:header/main.js");
require("/node_modules/meteor/ohif:header/client/index.js");

/* Exports */
Package._define("ohif:header", exports);

})();
