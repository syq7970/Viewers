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
var WebApp = Package.webapp.WebApp;
var Log = Package.logging.Log;
var Tracker = Package.deps.Tracker;
var Deps = Package.deps.Deps;
var Session = Package.session.Session;
var DDP = Package['ddp-client'].DDP;
var Mongo = Package.mongo.Mongo;
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Template = Package['templating-runtime'].Template;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var FastClick = Package.fastclick.FastClick;
var LaunchScreen = Package['launch-screen'].LaunchScreen;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:design":{"components":{"roundedButtonGroup":{"template.roundedButtonGroup.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_design/components/roundedButtonGroup/template.roundedButtonGroup.js                            //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //

Template.__checkName("roundedButtonGroup");
Template["roundedButtonGroup"] = new Template("Template.roundedButtonGroup", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ Spacebars.mustache(view.lookup("class")), " roundedButtonGroup clearfix center-table" ];
    }
  }, "\n        ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(Spacebars.dot(view.lookup("."), "options")),
      _variable: "item"
    };
  }, function() {
    return [ "\n            ", HTML.A({
      class: function() {
        return [ "roundedButtonWrapper noselect ", Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("eq"), view.lookup("getValue"), Spacebars.dot(view.lookup("item"), "value"));
        }, function() {
          return "active";
        }) ];
      },
      "data-value": function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "value"));
      }
    }, "\n                ", HTML.DIV({
      class: "roundedButton"
    }, "\n                    ", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("item"), "svgLink"));
    }, function() {
      return [ "\n                        ", HTML.SVG({
        style: function() {
          return [ "width: ", Spacebars.mustache(Spacebars.dot(view.lookup("item"), "svgWidth")), "px; height: ", Spacebars.mustache(Spacebars.dot(view.lookup("item"), "svgHeight")), "px" ];
        }
      }, "\n                            ", HTML.USE({
        "xlink:href": function() {
          return Spacebars.mustache(view.lookup("absoluteUrl"), Spacebars.dot(view.lookup("item"), "svgLink"));
        }
      }), "\n                        "), "\n                    " ];
    }), "\n                    ", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("item"), "text"));
    }, function() {
      return [ "\n                        ", HTML.SPAN(Blaze.View("lookup:item.text", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "text"));
      })), "\n                    " ];
    }), "\n                    ", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("item"), "iconClasses"));
    }, function() {
      return [ "\n                        ", HTML.I({
        class: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "iconClasses"));
        }
      }), "\n                    " ];
    }), "\n                "), "\n                ", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("item"), "bottomLabel"));
    }, function() {
      return [ "\n                    ", HTML.DIV({
        class: "bottomLabel"
      }, Blaze.View("lookup:item.bottomLabel", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "bottomLabel"));
      })), "\n                " ];
    }), "\n            "), "\n        " ];
  }), "\n    ");
}));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"roundedButtonGroup.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/ohif_design/components/roundedButtonGroup/roundedButtonGroup.js                                     //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Template.roundedButtonGroup.onCreated(function () {
  var instance = Template.instance();
  var reactiveValue = instance.data.value; // Get the value for ReactiveVar or ReactiveDict objects

  instance.getValue = function () {
    return reactiveValue.get(instance.data.key);
  }; // Set the value for ReactiveVar or ReactiveDict objects


  instance.setValue = function (value) {
    var args = [value];

    if (reactiveValue instanceof ReactiveDict) {
      args.unshift(instance.data.key);
    }

    reactiveValue.set.apply(reactiveValue, args);
  }; // Initialize the value with the first option if there's no value set and options are not toggleable


  if (!instance.getValue() && !instance.data.toggleable) {
    instance.setValue(instance.data.options[0].value);
  }
});
Template.roundedButtonGroup.events({
  'click [data-value]': function (event, instance) {
    event.preventDefault();
    var $target = $(event.currentTarget); // Stop here if the tool is disabled

    if ($target.hasClass('disabled')) {
      return;
    }

    var nullValue = $target.hasClass('active') && instance.data.toggleable;
    var value = nullValue ? null : $target.attr('data-value');
    instance.setValue(value);
  }
});
Template.roundedButtonGroup.helpers({
  getValue: function () {
    return Template.instance().getValue();
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".styl",
    ".html"
  ]
});
require("/node_modules/meteor/ohif:design/components/roundedButtonGroup/template.roundedButtonGroup.js");
require("/node_modules/meteor/ohif:design/components/roundedButtonGroup/roundedButtonGroup.js");

/* Exports */
Package._define("ohif:design");

})();
