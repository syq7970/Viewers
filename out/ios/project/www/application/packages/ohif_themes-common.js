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

var require = meteorInstall({"node_modules":{"meteor":{"ohif:themes-common":{"client":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/ohif_themes-common/client/index.js                                             //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
module.watch(require("./components"));
/////////////////////////////////////////////////////////////////////////////////////////////

},"components":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/ohif_themes-common/client/components/index.js                                  //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
module.watch(require("./themeSelectorModal/themeSelectorModal.html"));
module.watch(require("./themeSelectorModal/themeSelectorModal.styl"));
module.watch(require("./themeSelectorModal/themeSelectorModal.js"));
/////////////////////////////////////////////////////////////////////////////////////////////

},"themeSelectorModal":{"themeSelectorModal.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// node_modules/meteor/ohif_themes-common/client/components/themeSelectorModal/themeSelect //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
module.watch(require("./template.themeSelectorModal.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////

},"template.themeSelectorModal.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/ohif_themes-common/client/components/themeSelectorModal/template.themeSelector //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //

Template.__checkName("themeSelectorModal");
Template["themeSelectorModal"] = new Template("Template.themeSelectorModal", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      id: "themeSelectorModal",
      dialogClass: "modal-lg",
      confirmLabel: "Apply theme",
      title: "Themes",
      titleIcon: "fa fa-sliders"
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("dialogForm"), function() {
      return [ "\n        ", HTML.UL({
        class: "theme-list text-center"
      }, "\n            ", Blaze.Each(function() {
        return {
          _sequence: Spacebars.call(view.lookup("themes")),
          _variable: "theme"
        };
      }, function() {
        return [ "\n                ", HTML.LI({
          class: function() {
            return [ "text-center preview-theme ", Spacebars.mustache(view.lookup("printClassIfSelected"), view.lookup("theme")) ];
          },
          "data-theme": function() {
            return Spacebars.mustache(view.lookup("theme"));
          }
        }, "\n                    ", HTML.DIV({
          class: "icon-wrapper"
        }, "\n                        ", HTML.SPAN({
          class: function() {
            return [ "theme-icon-", Spacebars.mustache(view.lookup("theme")) ];
          }
        }), "\n                    "), "\n                    ", HTML.H4({
          class: "theme-title"
        }, Blaze.View("lookup:ucFirst", function() {
          return Spacebars.mustache(view.lookup("ucFirst"), view.lookup("theme"));
        })), "\n                "), "\n            " ];
      }), "\n        "), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////

},"themeSelectorModal.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/ohif_themes-common/client/components/themeSelectorModal/themeSelectorModal.js  //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var ReactiveDict;
module.watch(require("meteor/reactive-dict"), {
  ReactiveDict: function (v) {
    ReactiveDict = v;
  }
}, 1);
var DEFAULT_THEME = 'tide';

var getCurrentTheme = function () {
  return sessionStorage.getItem('theme');
};

var setActualTheme = function (theme) {
  return sessionStorage.setItem('theme', theme);
};

var addThemeToBody = function (theme) {
  return document.body.classList.add('theme-' + theme);
};

var removeThemesFromBody = function () {
  var classList = document.body.classList;

  for (var i = classList.length - 1; i >= 0; i--) {
    if (classList[i].search('theme-') !== -1) {
      document.body.classList.remove(classList[i]);
    }
  }
};

Template.themeSelectorModal.onCreated(function () {
  var instance = Template.instance();
  var currentTheme = getCurrentTheme();

  if (!currentTheme) {
    currentTheme = DEFAULT_THEME;
    setActualTheme(currentTheme);
  }

  instance.state = new ReactiveDict();
  instance.state.set('selectedTheme', currentTheme);
  addThemeToBody(currentTheme);
  instance.container = {
    currentTheme: currentTheme,
    previewTheme: function (theme, state) {
      state.set('selectedTheme', theme);
      removeThemesFromBody();
      addThemeToBody(theme);
    },
    applyTheme: function (state) {
      setActualTheme(state.get('selectedTheme'));
    },
    resetState: function (state) {
      var theme = getCurrentTheme();
      state.set('selectedTheme', theme);
      removeThemesFromBody();
      addThemeToBody(theme);
    }
  };
  var promise = instance.data.promise;
  promise.then(function () {
    return instance.container.applyTheme(instance.state);
  });
  promise.catch(function () {
    return instance.container.resetState(instance.state);
  });
});
Template.themeSelectorModal.helpers({
  themes: ['crickets', 'honeycomb', 'mint', 'overcast', 'quartz', 'tide', 'tigerlily'],
  ucFirst: function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  },
  printClassIfSelected: function (theme) {
    var instance = Template.instance();
    return theme === instance.state.get('selectedTheme') ? 'selected' : '';
  }
});
Template.themeSelectorModal.events({
  'click .preview-theme': function (event, instance) {
    instance.container.previewTheme(event.currentTarget.dataset.theme, instance.state);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////

},"themeSelectorModal.styl":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// node_modules/meteor/ohif_themes-common/client/components/themeSelectorModal/themeSelect //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
module.watch(require("./themeSelectorModal.styl.css"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////

},"themeSelectorModal.styl.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/ohif_themes-common/client/components/themeSelectorModal/themeSelectorModal.sty //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
module.exports = require("meteor/modules").addStyles(
  ".theme-icon-crickets,\n.theme-icon-tide,\n.theme-icon-tigerlily,\n.theme-icon-quartz,\n.theme-icon-overcast,\n.theme-icon-mint,\n.theme-icon-honeycomb {\n  display: inline-block;\n  background: url(\"/packages/ohif_design/assets/theme-icons.png\") no-repeat;\n  overflow: hidden;\n  text-indent: -9999px;\n  text-align: left;\n}\n.theme-icon-crickets {\n  background-position: 0px 0px;\n  width: 64px;\n  height: 56px;\n}\n.theme-icon-tide {\n  background-position: 0px -56px;\n  width: 64px;\n  height: 54px;\n}\n.theme-icon-tigerlily {\n  background-position: 0px -110px;\n  width: 62px;\n  height: 61px;\n}\n.theme-icon-quartz {\n  background-position: 0px -171px;\n  width: 59px;\n  height: 64px;\n}\n.theme-icon-overcast {\n  background-position: 0px -235px;\n  width: 58px;\n  height: 37px;\n}\n.theme-icon-mint {\n  background-position: 0px -272px;\n  width: 57px;\n  height: 61px;\n}\n.theme-icon-honeycomb {\n  background-position: 0px -333px;\n  width: 50px;\n  height: 58px;\n}\n#themeSelectorModal .theme-list {\n  list-style: none;\n  padding: 0;\n}\n#themeSelectorModal .theme-list li {\n  display: inline-block;\n  cursor: pointer;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  padding: 10px;\n  width: 110px;\n}\n#themeSelectorModal .theme-list li {\n  border: 1px solid #3c5d80;\n}\nbody.theme-tide #themeSelectorModal .theme-list li {\n  border: 1px solid #3c5d80;\n}\nbody.theme-tigerlily #themeSelectorModal .theme-list li {\n  border: 1px solid #744b71;\n}\nbody.theme-crickets #themeSelectorModal .theme-list li {\n  border: 1px solid #3c5d80;\n}\nbody.theme-honeycomb #themeSelectorModal .theme-list li {\n  border: 1px solid #3c5d80;\n}\nbody.theme-mint #themeSelectorModal .theme-list li {\n  border: 1px solid #3c5d80;\n}\nbody.theme-overcast #themeSelectorModal .theme-list li {\n  border: 1px solid #3c5d80;\n}\nbody.theme-quartz #themeSelectorModal .theme-list li {\n  border: 1px solid #3c5d80;\n}\n#themeSelectorModal .theme-list li:hover {\n  background-color: rgba(21,25,30,0.7);\n}\n#themeSelectorModal .theme-list li:last-child {\n  margin-right: 0;\n}\n#themeSelectorModal .theme-list li.selected {\n  padding: 7px;\n}\n#themeSelectorModal .theme-list li.selected {\n  border: 3px solid #00a4d9;\n}\nbody.theme-tide #themeSelectorModal .theme-list li.selected {\n  border: 3px solid #00a4d9;\n}\nbody.theme-tigerlily #themeSelectorModal .theme-list li.selected {\n  border: 3px solid #ff8a3d;\n}\nbody.theme-crickets #themeSelectorModal .theme-list li.selected {\n  border: 3px solid #d4aaa5;\n}\nbody.theme-honeycomb #themeSelectorModal .theme-list li.selected {\n  border: 3px solid #ce9e59;\n}\nbody.theme-mint #themeSelectorModal .theme-list li.selected {\n  border: 3px solid #23b15d;\n}\nbody.theme-overcast #themeSelectorModal .theme-list li.selected {\n  border: 3px solid #467c80;\n}\nbody.theme-quartz #themeSelectorModal .theme-list li.selected {\n  border: 3px solid #6843cc;\n}\n#themeSelectorModal .theme-list li .icon-wrapper {\n  height: 64px;\n  width: 64px;\n  margin: 0 auto;\n  line-height: 6.5;\n}\n#themeSelectorModal .theme-list li .theme-title {\n  font-weight: normal;\n  font-size: 1.1em;\n  margin-bottom: 0;\n}\n"
);

/////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".styl",
    ".html"
  ]
});
require("/node_modules/meteor/ohif:themes-common/client/index.js");

/* Exports */
Package._define("ohif:themes-common");

})();
