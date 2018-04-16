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
var HTTP = Package.http.HTTP;
var dialogPolyfill = Package['ohif:viewerbase'].dialogPolyfill;
var WADOProxy = Package['ohif:wadoproxy'].WADOProxy;
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

var require = meteorInstall({"node_modules":{"meteor":{"ohif:studies":{"both":{"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/both/main.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
OHIF.studies = {};

require('../imports/both');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"main.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/client/main.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('../imports/client');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"both":{"index.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/both/index.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/index.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./components"));
module.watch(require("./lib"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"components":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/components/index.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./browser"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"browser":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/components/browser/index.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./item.html"));
module.watch(require("./item.js"));
module.watch(require("./list.html"));
module.watch(require("./list.js"));
module.watch(require("./list.styl"));
module.watch(require("./quickSwitch.html"));
module.watch(require("./quickSwitch.js"));
module.watch(require("./series.html"));
module.watch(require("./series.js"));
module.watch(require("./sidebar.html"));
module.watch(require("./sidebar.js"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"item.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_studies/imports/client/components/browser/item.html                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.item.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.item.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/components/browser/template.item.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("studyBrowserItem");
Template["studyBrowserItem"] = new Template("Template.studyBrowserItem", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "study-browser-item ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "studyItemClass")), " ", Blaze.If(function() {
        return Spacebars.call(view.lookup("isActive"));
      }, function() {
        return "active";
      }), " ", Blaze.If(function() {
        return Spacebars.call(view.lookup("isLoading"));
      }, function() {
        return "loading";
      }) ];
    },
    "data-uid": function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "studyInformation", "studyInstanceUid"));
    }
  }, "\n        ", HTML.DIV({
    class: "study-item"
  }, "\n            ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isLoading"));
  }, function() {
    return [ "\n                ", Spacebars.include(view.lookupTemplate("loadingText")), "\n            " ];
  }), "\n            ", Blaze.Let({
    studyData: function() {
      return Spacebars.call(Spacebars.dot(view.lookup("instance"), "studyData", "get"));
    }
  }, function() {
    return [ "\n                ", HTML.DIV({
      class: "study-item-box"
    }, "\n                    ", HTML.DIV({
      class: "study-modality"
    }, "\n                        ", HTML.DIV({
      class: "study-modality-text",
      style: function() {
        return Spacebars.mustache(view.lookup("modalityStyle"), Spacebars.dot(view.lookup("studyData"), "modalities"));
      }
    }, Blaze.View("lookup:studyData.modalities", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("studyData"), "modalities"));
    })), "\n                    "), "\n                    ", HTML.DIV({
      class: "study-text"
    }, "\n                        ", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("or"), view.lookup("isLoaded"), view.lookup("hasDescriptionAndDate"));
    }, function() {
      return [ "\n                            ", HTML.DIV({
        class: "study-date"
      }, Blaze.View("lookup:formatDA", function() {
        return Spacebars.mustache(view.lookup("formatDA"), Spacebars.dot(view.lookup("studyData"), "studyDate"), "D-MMM-YYYY");
      })), "\n                            ", HTML.DIV({
        class: "study-description"
      }, Blaze.View("lookup:studyData.studyDescription", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("studyData"), "studyDescription"));
      })), "\n                        " ];
    }, function() {
      return [ "\n                            ", HTML.DIV({
        class: "study-availability"
      }, Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("eq"), view.lookup("studyAvailable"), false);
      }, function() {
        return "N/A";
      }, function() {
        return "Click to load";
      })), "\n                        " ];
    }), "\n                    "), "\n                "), "\n            " ];
  }), "\n        "), "\n        ", Blaze.If(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("."), "studyChildTemplate"));
  }, function() {
    return [ "\n            ", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("and"), Spacebars.dataMustache(view.lookup("not"), view.lookup("isLoading")), Spacebars.dot(view.lookup("instance"), "studyData", "get"), Spacebars.dot(view.lookup("instance"), "loaded"));
    }, function() {
      return [ "\n                ", Blaze._TemplateWith(function() {
        return {
          template: Spacebars.call(Spacebars.dot(view.lookup("."), "studyChildTemplate")),
          data: Spacebars.call(Spacebars.dataMustache(view.lookup("clone"), view.lookup(".")))
        };
      }, function() {
        return Spacebars.include(function() {
          return Spacebars.call(Template.__dynamic);
        });
      }), "\n            " ];
    }), "\n        " ];
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"item.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/components/browser/item.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 1);
var Tracker;
module.watch(require("meteor/tracker"), {
  Tracker: function (v) {
    Tracker = v;
  }
}, 2);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 3);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 4);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 5);
Template.studyBrowserItem.onCreated(function () {
  var instance = Template.instance();
  var studyInformation = instance.data.studyInformation;
  var studyInstanceUid = studyInformation.studyInstanceUid;
  instance.loaded = new ReactiveVar(false);
  instance.loading = new ReactiveVar(false);
  instance.studyData = new ReactiveVar(studyInformation); // Try to load the study data from an external source if available

  if (OHIF.studies.getStudyBoxData) {
    OHIF.studies.getStudyBoxData(studyInformation).then(function (studyData) {
      if (!instance.loaded.get()) {
        instance.studyData.set(studyData);
      }
    });
  }

  instance.studyMetadata = null;

  instance.getStudyMetadata = function () {
    instance.loading.dep.depend();

    if (!instance.studyMetadata) {
      var study = OHIF.viewer.Studies.findBy({
        studyInstanceUid: studyInstanceUid
      }) || null;

      if (study && !(study instanceof OHIF.viewerbase.metadata.StudyMetadata)) {
        study = new OHIF.metadata.StudyMetadata(study, study.studyInstanceUid);
      }

      instance.studyMetadata = study;
    }

    return instance.studyMetadata;
  };

  instance.autorun(function () {
    var instance = Template.instance();
    OHIF.studies.loadingDict.get(studyInstanceUid);
    var studyMetadata = instance.getStudyMetadata();

    if (studyMetadata) {
      var firstInstance = studyMetadata.getFirstInstance();
      instance.studyData.set({
        studyDate: firstInstance.getRawValue('x00080020') || '',
        studyDescription: firstInstance.getRawValue('x00081030') || '',
        modalities: firstInstance.getRawValue('x00080060') || ''
      });
      instance.loaded.set(true);
      instance.loading.set(false);
    }
  });
});
Template.studyBrowserItem.events({
  'click .study-item': function (event, instance) {
    if (instance.loading.get()) return;
    var studyInformation = instance.data.studyInformation; //  Skip if study is not available (set to false explicitly)

    if (studyInformation.available === false) {
      return;
    }

    var element = event.currentTarget.parentElement;
    var $element = $(element);

    var triggerClick = function () {
      var cloneEvent = _.clone(event);

      delete cloneEvent.type;
      cloneEvent.currentTarget = cloneEvent.target = element;
      var newEvent = $.Event('ohif.studies.study.click', cloneEvent);
      $element.trigger(newEvent, studyInformation);
    };

    if (instance.loaded.get()) {
      triggerClick();
    } else {
      instance.loading.set(true);
      OHIF.studies.loadStudy(studyInformation.studyInstanceUid).then(function () {
        instance.loaded.set(true);
        instance.loading.set(false);
        $element.trigger('ohif.studies.study.load', studyInformation);
        Tracker.afterFlush(triggerClick);
      });
    }
  }
});
Template.studyBrowserItem.helpers({
  isLoaded: function () {
    return Template.instance().loaded.get();
  },
  hasDescriptionAndDate: function () {
    var studyData = Template.instance().studyData.get();
    return studyData.studyDescription && studyData.studyDate;
  },
  isLoading: function () {
    return Template.instance().loading.get();
  },
  modalitiesText: function (modalities) {
    var text = modalities || 'UN';
    return _.uniq(text.split(/[^A-Za-z]+/g)).join(' ');
  },
  modalityStyle: function (modalities) {
    // Responsively styles the Modality Acronyms for studies with more than one modality
    var numModalities = modalities ? modalities.split(/\s/g).length : 1;

    if (numModalities === 1) {
      // If we have only one modality, it should take up the whole div
      return 'font-size:1em';
    } else if (numModalities === 2) {
      // If we have two modalities, let them sit side-by-side
      return 'font-size:0.7em';
    } else {
      // If we have more than two modalities, change the line height to display multiple rows
      return 'font-size:0.7em;line-height:1.4em;padding-top:0.5em';
    }
  },
  studyAvailable: function () {
    var studyInformation = Template.instance().data.studyInformation;

    if (!studyInformation) {
      return;
    }

    return studyInformation.available;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_studies/imports/client/components/browser/list.html                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.list.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.list.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/components/browser/template.list.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("studyBrowserList");
Template["studyBrowserList"] = new Template("Template.studyBrowserList", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "study-browser-list ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "class")) ];
    }
  }, "\n        ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("getStudiesInformation")),
      _variable: "studyInformation"
    };
  }, function() {
    return [ "\n            ", Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."), Spacebars.kw({
        studyInformation: view.lookup("studyInformation")
      }));
    }, function() {
      return Spacebars.include(view.lookupTemplate("studyBrowserItem"));
    }), "\n        " ];
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/components/browser/list.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
Template.studyBrowserList.onCreated(function () {
  var instance = Template.instance();

  if (instance.data.studiesData) {
    instance.studiesData = instance.data.studiesData;
  }
});
Template.studyBrowserList.helpers({
  getStudiesInformation: function () {
    var instance = Template.instance();
    var studiesInformation;

    if (instance.studiesData) {
      studiesInformation = instance.studiesData.get() || [];
    } else {
      studiesInformation = instance.data.studiesInformation || [];
    }

    var result = new Map();
    studiesInformation.forEach(function (item) {
      return result.set(item.studyInstanceUid, item);
    });
    return Array.from(result.values());
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.styl":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_studies/imports/client/components/browser/list.styl                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./list.styl.css"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"list.styl.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/components/browser/list.styl.css                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".theme-icon-crickets,\n.theme-icon-tide,\n.theme-icon-tigerlily,\n.theme-icon-quartz,\n.theme-icon-overcast,\n.theme-icon-mint,\n.theme-icon-honeycomb {\n  display: inline-block;\n  background: url(\"/packages/ohif_design/assets/theme-icons.png\") no-repeat;\n  overflow: hidden;\n  text-indent: -9999px;\n  text-align: left;\n}\n.theme-icon-crickets {\n  background-position: 0px 0px;\n  width: 64px;\n  height: 56px;\n}\n.theme-icon-tide {\n  background-position: 0px -56px;\n  width: 64px;\n  height: 54px;\n}\n.theme-icon-tigerlily {\n  background-position: 0px -110px;\n  width: 62px;\n  height: 61px;\n}\n.theme-icon-quartz {\n  background-position: 0px -171px;\n  width: 59px;\n  height: 64px;\n}\n.theme-icon-overcast {\n  background-position: 0px -235px;\n  width: 58px;\n  height: 37px;\n}\n.theme-icon-mint {\n  background-position: 0px -272px;\n  width: 57px;\n  height: 61px;\n}\n.theme-icon-honeycomb {\n  background-position: 0px -333px;\n  width: 50px;\n  height: 58px;\n}\n.study-browser-item {\n  position: relative;\n  -webkit-transform: scale(1);\n  -moz-transform: scale(1);\n  -ms-transform: scale(1);\n  -o-transform: scale(1);\n  transform: scale(1);\n}\n.study-browser-item .loadingTextDiv {\n  background-color: #14191e;\n  -webkit-border-radius: 12px;\n  -moz-border-radius: 12px;\n  -ms-border-radius: 12px;\n  -o-border-radius: 12px;\n  border-radius: 12px;\n  font-size: 32px;\n  opacity: 0;\n  margin: 0;\n  padding: 25px;\n  position: absolute;\n  pointer-events: none;\n  z-index: 100;\n}\n.study-browser-item .loadingTextDiv {\n  color: #91b9cd;\n}\nbody.theme-tide .study-browser-item .loadingTextDiv {\n  color: #91b9cd;\n}\nbody.theme-tigerlily .study-browser-item .loadingTextDiv {\n  color: #9ccdf8;\n}\nbody.theme-crickets .study-browser-item .loadingTextDiv {\n  color: #8be7b5;\n}\nbody.theme-honeycomb .study-browser-item .loadingTextDiv {\n  color: #fab797;\n}\nbody.theme-mint .study-browser-item .loadingTextDiv {\n  color: #a7e9b3;\n}\nbody.theme-overcast .study-browser-item .loadingTextDiv {\n  color: #73f2fc;\n}\nbody.theme-quartz .study-browser-item .loadingTextDiv {\n  color: #d7e8fe;\n}\n.study-browser-item.loading .loadingTextDiv {\n  height: 100%;\n  left: 0;\n  opacity: 0.75;\n  top: 0;\n  width: 100%;\n}\n.study-browser-item.loading .study-item-box {\n  opacity: 0.2;\n}\n.study-browser-item.active .study-item-box .study-modality {\n  color: #000;\n}\nbody.theme-tide .study-browser-item.active .study-item-box .study-modality {\n  color: #000;\n}\nbody.theme-tigerlily .study-browser-item.active .study-item-box .study-modality {\n  color: #000;\n}\nbody.theme-crickets .study-browser-item.active .study-item-box .study-modality {\n  color: #000;\n}\nbody.theme-honeycomb .study-browser-item.active .study-item-box .study-modality {\n  color: #000;\n}\nbody.theme-mint .study-browser-item.active .study-item-box .study-modality {\n  color: #000;\n}\nbody.theme-overcast .study-browser-item.active .study-item-box .study-modality {\n  color: #000;\n}\nbody.theme-quartz .study-browser-item.active .study-item-box .study-modality {\n  color: #000;\n}\n.study-browser-item.active .study-item-box .study-modality,\n.study-browser-item.active .study-item-box .study-modality:before,\n.study-browser-item.active .study-item-box .study-modality:after {\n  border-color: #131d29;\n}\n.study-browser-item.active .study-item-box .study-modality,\n.study-browser-item.active .study-item-box .study-modality:before,\n.study-browser-item.active .study-item-box .study-modality:after {\n  background-color: #20a5d6;\n}\nbody.theme-tide .study-browser-item.active .study-item-box .study-modality {\n  background-color: #20a5d6;\n}\nbody.theme-tide .study-browser-item.active .study-item-box .study-modality:before {\n  background-color: #20a5d6;\n}\nbody.theme-tide .study-browser-item.active .study-item-box .study-modality:after {\n  background-color: #20a5d6;\n}\nbody.theme-tigerlily .study-browser-item.active .study-item-box .study-modality {\n  background-color: #fa8947;\n}\nbody.theme-tigerlily .study-browser-item.active .study-item-box .study-modality:before {\n  background-color: #fa8947;\n}\nbody.theme-tigerlily .study-browser-item.active .study-item-box .study-modality:after {\n  background-color: #fa8947;\n}\nbody.theme-crickets .study-browser-item.active .study-item-box .study-modality {\n  background-color: #d4c3c1;\n}\nbody.theme-crickets .study-browser-item.active .study-item-box .study-modality:before {\n  background-color: #d4c3c1;\n}\nbody.theme-crickets .study-browser-item.active .study-item-box .study-modality:after {\n  background-color: #d4c3c1;\n}\nbody.theme-honeycomb .study-browser-item.active .study-item-box .study-modality {\n  background-color: #cda56b;\n}\nbody.theme-honeycomb .study-browser-item.active .study-item-box .study-modality:before {\n  background-color: #cda56b;\n}\nbody.theme-honeycomb .study-browser-item.active .study-item-box .study-modality:after {\n  background-color: #cda56b;\n}\nbody.theme-mint .study-browser-item.active .study-item-box .study-modality {\n  background-color: #31b166;\n}\nbody.theme-mint .study-browser-item.active .study-item-box .study-modality:before {\n  background-color: #31b166;\n}\nbody.theme-mint .study-browser-item.active .study-item-box .study-modality:after {\n  background-color: #31b166;\n}\nbody.theme-overcast .study-browser-item.active .study-item-box .study-modality {\n  background-color: #507d80;\n}\nbody.theme-overcast .study-browser-item.active .study-item-box .study-modality:before {\n  background-color: #507d80;\n}\nbody.theme-overcast .study-browser-item.active .study-item-box .study-modality:after {\n  background-color: #507d80;\n}\nbody.theme-quartz .study-browser-item.active .study-item-box .study-modality {\n  background-color: #7858ce;\n}\nbody.theme-quartz .study-browser-item.active .study-item-box .study-modality:before {\n  background-color: #7858ce;\n}\nbody.theme-quartz .study-browser-item.active .study-item-box .study-modality:after {\n  background-color: #7858ce;\n}\n.study-browser-item:not(.active) .study-browser-series {\n  max-height: 0 !important;\n}\n.study-browser-item:not(.active) .study-browser-series .study-series-container {\n  opacity: 0;\n  -webkit-transform: translateY(-100%);\n  -moz-transform: translateY(-100%);\n  -ms-transform: translateY(-100%);\n  -o-transform: translateY(-100%);\n  transform: translateY(-100%);\n}\n.study-browser-item .study-browser-series {\n  overflow: hidden;\n  -webkit-transition: max-height 0.3s ease;\n  -moz-transition: max-height 0.3s ease;\n  -ms-transition: max-height 0.3s ease;\n  -o-transition: max-height 0.3s ease;\n  transition: max-height 0.3s ease;\n}\n.study-browser-item .study-browser-series .study-series-container {\n  opacity: 1;\n  -webkit-transition: opacity 0.3s ease , transform 0.3s ease;\n  -moz-transition: opacity 0.3s ease , transform 0.3s ease;\n  -ms-transition: opacity 0.3s ease , transform 0.3s ease;\n  -o-transition: opacity 0.3s ease , transform 0.3s ease;\n  transition: opacity 0.3s ease , transform 0.3s ease;\n  -webkit-transform: translateY(0);\n  -moz-transform: translateY(0);\n  -ms-transform: translateY(0);\n  -o-transform: translateY(0);\n  transform: translateY(0);\n  -webkit-transform-origin: 50% 0%;\n  -moz-transform-origin: 50% 0%;\n  -ms-transform-origin: 50% 0%;\n  -o-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n}\n.study-item-box {\n  border: 1px solid transparent;\n  -webkit-border-radius: 12px;\n  -moz-border-radius: 12px;\n  -ms-border-radius: 12px;\n  -o-border-radius: 12px;\n  border-radius: 12px;\n  cursor: pointer;\n  padding: 12px 7px 11px;\n  position: relative;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -ms-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  z-index: 0;\n}\n.study-item-box:hover {\n  background-color: #14191e;\n  border-color: #2d4660;\n}\n.study-item-box:hover.additional {\n  color: #91b9cd;\n}\nbody.theme-tide .study-item-box:hover.additional {\n  color: #91b9cd;\n}\nbody.theme-tigerlily .study-item-box:hover.additional {\n  color: #9ccdf8;\n}\nbody.theme-crickets .study-item-box:hover.additional {\n  color: #8be7b5;\n}\nbody.theme-honeycomb .study-item-box:hover.additional {\n  color: #fab797;\n}\nbody.theme-mint .study-item-box:hover.additional {\n  color: #a7e9b3;\n}\nbody.theme-overcast .study-item-box:hover.additional {\n  color: #73f2fc;\n}\nbody.theme-quartz .study-item-box:hover.additional {\n  color: #d7e8fe;\n}\n.study-item-box.additional {\n  font-size: 16px;\n  font-weight: normal;\n  height: 91px;\n  line-height: 91px;\n  padding: 0;\n  text-align: center;\n}\n.study-item-box.additional {\n  color: #fff;\n}\nbody.theme-tide .study-item-box.additional {\n  color: #fff;\n}\nbody.theme-tigerlily .study-item-box.additional {\n  color: #fff;\n}\nbody.theme-crickets .study-item-box.additional {\n  color: #fff;\n}\nbody.theme-honeycomb .study-item-box.additional {\n  color: #fff;\n}\nbody.theme-mint .study-item-box.additional {\n  color: #fff;\n}\nbody.theme-overcast .study-item-box.additional {\n  color: #fff;\n}\nbody.theme-quartz .study-item-box.additional {\n  color: #fff;\n}\n.study-item-box .study-text {\n  font-size: 13px;\n  left: 89px;\n  line-height: 14px;\n  position: absolute;\n  right: 7px;\n  top: 12px;\n}\n.study-item-box .study-text .study-date {\n  margin-top: 8px;\n}\n.study-item-box .study-text .study-date {\n  color: #91b9cd;\n}\nbody.theme-tide .study-item-box .study-text .study-date {\n  color: #91b9cd;\n}\nbody.theme-tigerlily .study-item-box .study-text .study-date {\n  color: #9ccdf8;\n}\nbody.theme-crickets .study-item-box .study-text .study-date {\n  color: #8be7b5;\n}\nbody.theme-honeycomb .study-item-box .study-text .study-date {\n  color: #fab797;\n}\nbody.theme-mint .study-item-box .study-text .study-date {\n  color: #a7e9b3;\n}\nbody.theme-overcast .study-item-box .study-text .study-date {\n  color: #73f2fc;\n}\nbody.theme-quartz .study-item-box .study-text .study-date {\n  color: #d7e8fe;\n}\n.study-item-box .study-text .study-description {\n  margin-top: 8px;\n}\n.study-item-box .study-text .study-description {\n  color: #fff;\n}\nbody.theme-tide .study-item-box .study-text .study-description {\n  color: #fff;\n}\nbody.theme-tigerlily .study-item-box .study-text .study-description {\n  color: #fff;\n}\nbody.theme-crickets .study-item-box .study-text .study-description {\n  color: #fff;\n}\nbody.theme-honeycomb .study-item-box .study-text .study-description {\n  color: #fff;\n}\nbody.theme-mint .study-item-box .study-text .study-description {\n  color: #fff;\n}\nbody.theme-overcast .study-item-box .study-text .study-description {\n  color: #fff;\n}\nbody.theme-quartz .study-item-box .study-text .study-description {\n  color: #fff;\n}\n.study-item-box .study-text .study-availability {\n  margin-top: 24px;\n}\n.study-item-box .study-text .study-availability {\n  color: #fff;\n}\nbody.theme-tide .study-item-box .study-text .study-availability {\n  color: #fff;\n}\nbody.theme-tigerlily .study-item-box .study-text .study-availability {\n  color: #fff;\n}\nbody.theme-crickets .study-item-box .study-text .study-availability {\n  color: #fff;\n}\nbody.theme-honeycomb .study-item-box .study-text .study-availability {\n  color: #fff;\n}\nbody.theme-mint .study-item-box .study-text .study-availability {\n  color: #fff;\n}\nbody.theme-overcast .study-item-box .study-text .study-availability {\n  color: #fff;\n}\nbody.theme-quartz .study-item-box .study-text .study-availability {\n  color: #fff;\n}\n.study-item-box .study-modality {\n  font-size: 20px;\n  line-height: 50px;\n  margin-left: 12px;\n  margin-top: 12px;\n  position: relative;\n}\n.study-item-box .study-modality {\n  color: #91b9cd;\n}\nbody.theme-tide .study-item-box .study-modality {\n  color: #91b9cd;\n}\nbody.theme-tigerlily .study-item-box .study-modality {\n  color: #9ccdf8;\n}\nbody.theme-crickets .study-item-box .study-modality {\n  color: #8be7b5;\n}\nbody.theme-honeycomb .study-item-box .study-modality {\n  color: #fab797;\n}\nbody.theme-mint .study-item-box .study-modality {\n  color: #a7e9b3;\n}\nbody.theme-overcast .study-item-box .study-modality {\n  color: #73f2fc;\n}\nbody.theme-quartz .study-item-box .study-modality {\n  color: #d7e8fe;\n}\n.study-item-box .study-modality .study-modality-text {\n  height: 100%;\n  overflow: hidden;\n  text-align: center;\n  text-transform: uppercase;\n}\n.study-item-box .study-modality,\n.study-item-box .study-modality:before,\n.study-item-box .study-modality:after {\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  -ms-border-radius: 8px;\n  -o-border-radius: 8px;\n  border-radius: 8px;\n  height: 54px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  -ms-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  width: 54px;\n}\n.study-item-box .study-modality,\n.study-item-box .study-modality:before,\n.study-item-box .study-modality:after {\n  border: 2px solid #000;\n}\nbody.theme-tide .study-item-box .study-modality {\n  border: 2px solid #000;\n}\nbody.theme-tide .study-item-box .study-modality:before {\n  border: 2px solid #000;\n}\nbody.theme-tide .study-item-box .study-modality:after {\n  border: 2px solid #000;\n}\nbody.theme-tigerlily .study-item-box .study-modality {\n  border: 2px solid #000;\n}\nbody.theme-tigerlily .study-item-box .study-modality:before {\n  border: 2px solid #000;\n}\nbody.theme-tigerlily .study-item-box .study-modality:after {\n  border: 2px solid #000;\n}\nbody.theme-crickets .study-item-box .study-modality {\n  border: 2px solid #000;\n}\nbody.theme-crickets .study-item-box .study-modality:before {\n  border: 2px solid #000;\n}\nbody.theme-crickets .study-item-box .study-modality:after {\n  border: 2px solid #000;\n}\nbody.theme-honeycomb .study-item-box .study-modality {\n  border: 2px solid #000;\n}\nbody.theme-honeycomb .study-item-box .study-modality:before {\n  border: 2px solid #000;\n}\nbody.theme-honeycomb .study-item-box .study-modality:after {\n  border: 2px solid #000;\n}\nbody.theme-mint .study-item-box .study-modality {\n  border: 2px solid #000;\n}\nbody.theme-mint .study-item-box .study-modality:before {\n  border: 2px solid #000;\n}\nbody.theme-mint .study-item-box .study-modality:after {\n  border: 2px solid #000;\n}\nbody.theme-overcast .study-item-box .study-modality {\n  border: 2px solid #000;\n}\nbody.theme-overcast .study-item-box .study-modality:before {\n  border: 2px solid #000;\n}\nbody.theme-overcast .study-item-box .study-modality:after {\n  border: 2px solid #000;\n}\nbody.theme-quartz .study-item-box .study-modality {\n  border: 2px solid #000;\n}\nbody.theme-quartz .study-item-box .study-modality:before {\n  border: 2px solid #000;\n}\nbody.theme-quartz .study-item-box .study-modality:after {\n  border: 2px solid #000;\n}\n.study-item-box .study-modality,\n.study-item-box .study-modality:before,\n.study-item-box .study-modality:after {\n  background-color: #344a61;\n}\nbody.theme-tide .study-item-box .study-modality {\n  background-color: #344a61;\n}\nbody.theme-tide .study-item-box .study-modality:before {\n  background-color: #344a61;\n}\nbody.theme-tide .study-item-box .study-modality:after {\n  background-color: #344a61;\n}\nbody.theme-tigerlily .study-item-box .study-modality {\n  background-color: #5b3a59;\n}\nbody.theme-tigerlily .study-item-box .study-modality:before {\n  background-color: #5b3a59;\n}\nbody.theme-tigerlily .study-item-box .study-modality:after {\n  background-color: #5b3a59;\n}\nbody.theme-crickets .study-item-box .study-modality {\n  background-color: #344a61;\n}\nbody.theme-crickets .study-item-box .study-modality:before {\n  background-color: #344a61;\n}\nbody.theme-crickets .study-item-box .study-modality:after {\n  background-color: #344a61;\n}\nbody.theme-honeycomb .study-item-box .study-modality {\n  background-color: #344a61;\n}\nbody.theme-honeycomb .study-item-box .study-modality:before {\n  background-color: #344a61;\n}\nbody.theme-honeycomb .study-item-box .study-modality:after {\n  background-color: #344a61;\n}\nbody.theme-mint .study-item-box .study-modality {\n  background-color: #344a61;\n}\nbody.theme-mint .study-item-box .study-modality:before {\n  background-color: #344a61;\n}\nbody.theme-mint .study-item-box .study-modality:after {\n  background-color: #344a61;\n}\nbody.theme-overcast .study-item-box .study-modality {\n  background-color: #344a61;\n}\nbody.theme-overcast .study-item-box .study-modality:before {\n  background-color: #344a61;\n}\nbody.theme-overcast .study-item-box .study-modality:after {\n  background-color: #344a61;\n}\nbody.theme-quartz .study-item-box .study-modality {\n  background-color: #344a61;\n}\nbody.theme-quartz .study-item-box .study-modality:before {\n  background-color: #344a61;\n}\nbody.theme-quartz .study-item-box .study-modality:after {\n  background-color: #344a61;\n}\n.study-item-box .study-modality:before,\n.study-item-box .study-modality:after {\n  display: block;\n  content: '';\n  position: absolute;\n}\n.study-item-box .study-modality:before {\n  top: -8px;\n  left: -8px;\n  z-index: -1;\n}\n.study-item-box .study-modality:after {\n  top: -14px;\n  left: -14px;\n  z-index: -2;\n}\n"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"quickSwitch.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_studies/imports/client/components/browser/quickSwitch.html                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.quickSwitch.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.quickSwitch.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/components/browser/template.quickSwitch.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("studyBrowserQuickSwitch");
Template["studyBrowserQuickSwitch"] = new Template("Template.studyBrowserQuickSwitch", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.call(view.lookup("studyBrowserData"));
  }, function() {
    return Spacebars.include(view.lookupTemplate("studyBrowserList"));
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"quickSwitch.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/components/browser/quickSwitch.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 1);
var Tracker;
module.watch(require("meteor/tracker"), {
  Tracker: function (v) {
    Tracker = v;
  }
}, 2);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 3);
Template.studyBrowserQuickSwitch.onCreated(function () {
  var instance = Template.instance();
  instance.studiesInformation = new ReactiveVar();
  var filter = {
    studyInstanceUid: OHIF.viewer.data.studyInstanceUids
  };
  OHIF.studies.searchStudies(filter).then(function (studies) {
    return instance.studiesInformation.set(studies);
  });
});
Template.studyBrowserQuickSwitch.onRendered(function () {
  var instance = Template.instance();
  instance.autorun(function () {
    instance.studiesInformation.dep.depend();
    var currentStudy = instance.data.currentStudy.get();
    var studyInstanceUid = currentStudy && currentStudy.studyInstanceUid || '';
    Tracker.afterFlush(function () {
      var $studyBrowserItems = instance.$('.study-browser-item');
      $studyBrowserItems.removeClass('active');
      $studyBrowserItems.filter("[data-uid=\"" + studyInstanceUid + "\"]").addClass('active');
    });
  });
});
Template.studyBrowserQuickSwitch.events({
  'ohif.studies.study.click': function (event, instance, studyInformation) {
    var studyInstanceUid = studyInformation.studyInstanceUid;
    var study = OHIF.viewer.Studies.findBy({
      studyInstanceUid: studyInstanceUid
    });
    instance.data.currentStudy.set(study);
    var $studySwitch = $(event.currentTarget).closest('.study-switch');
    $studySwitch.siblings('.series-switch').trigger('rescale');
  }
});
Template.studyBrowserQuickSwitch.helpers({
  studyBrowserData: function () {
    var instance = Template.instance();
    var studiesInformation = instance.studiesInformation.get();
    return {
      studiesInformation: studiesInformation
    };
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"series.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_studies/imports/client/components/browser/series.html                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.series.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.series.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/components/browser/template.series.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("studyBrowserSeries");
Template["studyBrowserSeries"] = new Template("Template.studyBrowserSeries", (function() {
  var view = this;
  return HTML.DIV({
    class: "study-browser-series"
  }, "\n        ", HTML.DIV({
    class: "study-series-container"
  }, "\n            ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(Spacebars.dot(view.lookup("instance"), "thumbnails", "get")),
      _variable: "thumbnail"
    };
  }, function() {
    return [ "\n                ", Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."), Spacebars.kw({
        thumbnail: view.lookup("thumbnail")
      }));
    }, function() {
      return Spacebars.include(view.lookupTemplate("thumbnailEntry"));
    }), "\n            " ];
  }), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"series.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/components/browser/series.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 1);
var Tracker;
module.watch(require("meteor/tracker"), {
  Tracker: function (v) {
    Tracker = v;
  }
}, 2);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 3);
Template.studyBrowserSeries.onCreated(function () {
  var instance = Template.instance();
  var _instance$data = instance.data,
      studyInformation = _instance$data.studyInformation,
      studyMetadata = _instance$data.studyMetadata;
  var studyInstanceUid = studyMetadata && studyMetadata.studyInstanceUid || studyInformation && studyInformation.studyInstanceUid;
  instance.thumbnails = new ReactiveVar([]); // Get the study metadata and update the study thumbnails

  instance.autorun(function () {
    var metadata = studyMetadata; // Check for reactivity

    if (metadata instanceof ReactiveVar) {
      metadata = metadata.get();
    } // Retrieve the study metadata


    if (!metadata) {
      metadata = OHIF.viewer.Studies.findBy({
        studyInstanceUid: studyInstanceUid
      });
    } // Stop here if there's no study metadata


    if (!metadata) return; // Get the study display sets

    var displaySets = metadata.displaySets;

    if (!displaySets.length) {
      displaySets = OHIF.viewerbase.sortingManager.getDisplaySets(metadata);
      metadata.displaySets = displaySets;
      metadata.setDisplaySets(displaySets);
      metadata.forEachDisplaySet(function (displaySet) {
        OHIF.viewerbase.stackManager.makeAndAddStack(metadata, displaySet);
      });
    } // Defines the resulting thumbnails list


    var thumbnails = [];
    displaySets.forEach(function (stack, thumbnailIndex) {
      thumbnails.push({
        thumbnailIndex: thumbnailIndex,
        stack: stack
      });
    });
    instance.thumbnails.set(thumbnails);
  });
});
Template.studyBrowserSeries.onRendered(function () {
  var instance = Template.instance(); // Run this computation every time the thumbnails are changed

  instance.autorun(function () {
    instance.thumbnails.get();
    Tracker.afterFlush(function () {
      instance.$('.study-browser-series').adjustMax('height');
    });
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"sidebar.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_studies/imports/client/components/browser/sidebar.html                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.sidebar.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.sidebar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/components/browser/template.sidebar.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("studyBrowserSidebar");
Template["studyBrowserSidebar"] = new Template("Template.studyBrowserSidebar", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      class: Spacebars.call("fit noselect"),
      scrollableClass: Spacebars.call("p-a-1"),
      scrollStep: Spacebars.call(191)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("scrollArea"), function() {
      return [ "\n        ", Blaze._TemplateWith(function() {
        return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."), Spacebars.kw({
          studyChildTemplate: "studyBrowserSeries"
        }));
      }, function() {
        return Spacebars.include(view.lookupTemplate("studyBrowserList"));
      }), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"sidebar.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/components/browser/sidebar.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
Template.studyBrowserSidebar.events({
  'ohif.studies.study.click': function (event, instance) {
    var $element = $(event.currentTarget); // Remove active class from sibling studies

    $element.siblings().removeClass('active'); // Toggle the active class on clicked study

    $element.toggleClass('active');
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"lib":{"getStudyBoxData.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/lib/getStudyBoxData.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

/**
 * Overridable namespace to allow getting study boxes data externally.
 *
 * The function must handle the first parameter as a studyInformation object containing at least the
 * studyInstanceUid attribute.
 *
 * Shall return a promise that will be resolved with an object containing those attributes:
 * - studyInstanceUid {String}: copy of studyInformation.studyInstanceUid
 * - modalities {String}: 2 uppercase letters for each modality split by any non-alphabetical char(s)
 * - studyDate {String}: date formatted as YYYYMMDD
 * - studyDescription {String}: study description string
 */
OHIF.studies.getStudyBoxData = false;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/lib/index.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./classes"));
module.watch(require("./getStudyBoxData"));
module.watch(require("./loadStudy"));
module.watch(require("./retrieveStudiesMetadata"));
module.watch(require("./retrieveStudyMetadata"));
module.watch(require("./searchStudies"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"loadStudy.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/lib/loadStudy.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var ReactiveDict;
module.watch(require("meteor/reactive-dict"), {
  ReactiveDict: function (v) {
    ReactiveDict = v;
  }
}, 0);
var Tracker;
module.watch(require("meteor/tracker"), {
  Tracker: function (v) {
    Tracker = v;
  }
}, 1);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 2);
// Create a studies loaded state dictionary to enable reactivity. Values: loading|loaded|failed
OHIF.studies.loadingDict = new ReactiveDict();
/**
 * Load the study metadata and store its information locally
 *
 * @param {String} studyInstanceUid The UID of the Study to be loaded
 * @returns {Promise} that will be resolved with the study metadata or rejected with an error
 */

OHIF.studies.loadStudy = function (studyInstanceUid) {
  return new Promise(function (resolve, reject) {
    // Disable reactivity to get the current loading state
    var currentLoadingState;
    Tracker.nonreactive(function () {
      currentLoadingState = OHIF.studies.loadingDict.get(studyInstanceUid) || '';
    }); // Set the loading state as the study is not yet loaded

    if (currentLoadingState !== 'loading') {
      OHIF.studies.loadingDict.set(studyInstanceUid, 'loading');
    }

    return OHIF.studies.retrieveStudyMetadata(studyInstanceUid).then(function (study) {
      // Add the display sets to the study if not present
      if (!study.displaySets) {
        var displaySets = OHIF.viewerbase.sortingManager.getDisplaySets(study);
        study.displaySets = displaySets;
        study.setDisplaySets(displaySets);
        study.forEachDisplaySet(function (displaySet) {
          OHIF.viewerbase.stackManager.makeAndAddStack(study, displaySet);
        });
      } // Double check to make sure this study wasn't already inserted into OHIF.viewer.Studies
      // so we don't cause duplicate entry errors


      var loaded = OHIF.viewer.Studies.findBy({
        studyInstanceUid: study.studyInstanceUid
      });

      if (!loaded) {
        OHIF.viewer.Studies.insert(study);
        OHIF.viewer.StudyMetadataList.insert(study);
      } // Add the study to the loading listener to allow loading progress handling


      var studyLoadingListener = OHIF.viewerbase.StudyLoadingListener.getInstance();
      studyLoadingListener.addStudy(study); // Add the studyInstanceUid to the loaded state dictionary

      OHIF.studies.loadingDict.set(studyInstanceUid, 'loaded');
      resolve(study);
    }).catch(function () {
      OHIF.studies.loadingDict.set(studyInstanceUid, 'failed');

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      reject(args);
    });
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"retrieveStudiesMetadata.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/lib/retrieveStudiesMetadata.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

/**
 * Retrieves metaData for multiple studies at once.
 *
 * This function calls retrieveStudyMetadata several times, asynchronously,
 * and waits for all of the results to be returned.
 *
 * @param studyInstanceUids The UIDs of the Studies to be retrieved
 * @return Promise
 */
OHIF.studies.retrieveStudiesMetadata = function (studyInstanceUids, seriesInstanceUids) {
  // Create an empty array to store the Promises for each metaData retrieval call
  var promises = []; // Loop through the array of studyInstanceUids

  studyInstanceUids.forEach(function (studyInstanceUid) {
    // Send the call and resolve or reject the related promise based on its outcome
    var promise = OHIF.studies.retrieveStudyMetadata(studyInstanceUid, seriesInstanceUids); // Add the current promise to the array of promises

    promises.push(promise);
  }); // When all of the promises are complete, this callback runs

  var promise = Promise.all(promises); // Warn the error on console if some retrieval failed

  promise.catch(function (error) {
    return OHIF.log.warn(error);
  });
  return promise;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"retrieveStudyMetadata.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/lib/retrieveStudyMetadata.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 1);
module.watch(require("meteor/ohif:viewerbase"));
// Define the StudyMetaDataPromises object. This is used as a cache to store study meta data
// promises and prevent unnecessary subsequent calls to the server
var StudyMetaDataPromises = new Map();
/**
 * Retrieves study metadata using a server call
 *
 * @param {String} studyInstanceUid The UID of the Study to be retrieved
 * @returns {Promise} that will be resolved with the metadata or rejected with the error
 */

OHIF.studies.retrieveStudyMetadata = function (studyInstanceUid, seriesInstanceUids) {
  // @TODO: Whenever a study metadata request has failed, its related promise will be rejected once and for all
  // and further requests for that metadata will always fail. On failure, we probably need to remove the
  // corresponding promise from the "StudyMetaDataPromises" map...
  // If the StudyMetaDataPromises cache already has a pending or resolved promise related to the
  // given studyInstanceUid, then that promise is returned
  if (StudyMetaDataPromises.has(studyInstanceUid)) {
    return StudyMetaDataPromises.get(studyInstanceUid);
  }

  var seriesKeys = Array.isArray(seriesInstanceUids) ? '|' + seriesInstanceUids.join('|') : '';
  var timingKey = "retrieveStudyMetadata[" + studyInstanceUid + seriesKeys + "]";
  OHIF.log.time(timingKey); // Create a promise to handle the data retrieval

  var promise = new Promise(function (resolve, reject) {
    // If no study metadata is in the cache variable, we need to retrieve it from
    // the server with a call.
    Meteor.call('GetStudyMetadata', studyInstanceUid, function (error, study) {
      OHIF.log.timeEnd(timingKey);

      if (error) {
        var errorType = error.error;
        var errorMessage = '';

        if (errorType === 'server-connection-error') {
          errorMessage = 'There was an error connecting to the DICOM server, please verify if it is up and running.';
        } else if (errorType === 'server-internal-error') {
          errorMessage = "There was an internal error with the DICOM server getting metadeta for " + studyInstanceUid;
        } else {
          errorMessage = "For some reason we could not retrieve the study's metadata for " + studyInstanceUid + ".";
        }

        OHIF.log.error(errorMessage);
        OHIF.log.error(error.stack);
        reject("GetStudyMetadata: " + errorMessage);
        return;
      } // Filter series if seriesInstanceUid exists


      if (seriesInstanceUids && seriesInstanceUids.length) {
        study.seriesList = study.seriesList.filter(function (series) {
          return seriesInstanceUids.indexOf(series.seriesInstanceUid) > -1;
        });
      }

      if (!study) {
        reject("GetStudyMetadata: No study data returned from server: " + studyInstanceUid);
        return;
      }

      if (window.HipaaLogger && Meteor.user && Meteor.user()) {
        window.HipaaLogger.logEvent({
          eventType: 'viewed',
          userId: Meteor.userId(),
          userName: Meteor.user().profile.fullName,
          collectionName: 'Study',
          recordId: studyInstanceUid,
          patientId: study.patientId,
          patientName: study.patientName
        });
      } // Once the data was retrieved, the series are sorted by series and instance number


      OHIF.viewerbase.sortStudy(study); // Updates WADO-RS metaDataManager

      OHIF.viewerbase.updateMetaDataManager(study); // Transform the study in a StudyMetadata object

      var studyMetadata = new OHIF.metadata.StudyMetadata(study); // Add the display sets to the study

      study.displaySets = OHIF.viewerbase.sortingManager.getDisplaySets(studyMetadata);
      study.displaySets.forEach(function (displaySet) {
        OHIF.viewerbase.stackManager.makeAndAddStack(study, displaySet);
        studyMetadata.addDisplaySet(displaySet);
      }); // Resolve the promise with the final study metadata object

      resolve(study);
    });
  }); // Store the promise in cache

  StudyMetaDataPromises.set(studyInstanceUid, promise);
  return promise;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"searchStudies.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/lib/searchStudies.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 1);
var studySearchPromises = new Map();
/**
 * Search for studies information by the given filter
 *
 * @param {Object} filter Filter that will be used on search
 * @returns {Promise} resolved with an array of studies information or rejected with an error
 */

OHIF.studies.searchStudies = function (filter) {
  var promiseKey = JSON.stringify(filter);

  if (studySearchPromises.has(promiseKey)) {
    return studySearchPromises.get(promiseKey);
  } else {
    var promise = new Promise(function (resolve, reject) {
      Meteor.call('StudyListSearch', filter, function (error, studiesData) {
        if (error) {
          reject(error);
        } else {
          resolve(studiesData);
        }
      });
    });
    studySearchPromises.set(promiseKey, promise);
    return promise;
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"classes":{"OHIFStudyMetadataSource.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/lib/classes/OHIFStudyMetadataSource.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  OHIFStudyMetadataSource: function () {
    return OHIFStudyMetadataSource;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
module.watch(require("meteor/ohif:viewerbase"));
// Important metadata classes
var _OHIF$viewerbase = OHIF.viewerbase,
    OHIFError = _OHIF$viewerbase.OHIFError,
    metadata = _OHIF$viewerbase.metadata;
var StudySummary = metadata.StudySummary,
    StudyMetadata = metadata.StudyMetadata;

var OHIFStudyMetadataSource =
/*#__PURE__*/
function (_OHIF$viewerbase$Stud) {
  (0, _inheritsLoose2.default)(OHIFStudyMetadataSource, _OHIF$viewerbase$Stud);

  function OHIFStudyMetadataSource() {
    return _OHIF$viewerbase$Stud.apply(this, arguments) || this;
  }

  var _proto = OHIFStudyMetadataSource.prototype;

  /**
   * Get study metadata for a study with given study InstanceUID
   * @param  {String} studyInstanceUID Study InstanceUID
   * @return {Promise} A Promise object
   */
  _proto.getByInstanceUID = function () {
    function getByInstanceUID(studyInstanceUID) {
      return OHIF.studies.retrieveStudyMetadata(studyInstanceUID);
    }

    return getByInstanceUID;
  }();
  /**
   * Load study info (OHIF.viewer.Studies) and study metadata (OHIF.viewer.StudyMetadataList) for a given study.
   * @param {StudySummary|StudyMetadata} study of StudySummary or StudyMetadata object.
   */


  _proto.loadStudy = function () {
    function loadStudy(study) {
      var _this = this;

      if (!(study instanceof StudyMetadata) && !(study instanceof StudySummary)) {
        throw new OHIFError('OHIFStudyMetadataSource::loadStudy study is not an instance of StudySummary or StudyMetadata');
      }

      return new Promise(function (resolve, reject) {
        var studyInstanceUID = study.getStudyInstanceUID();

        if (study instanceof StudyMetadata) {
          var alreadyLoaded = OHIF.viewer.Studies.findBy({
            studyInstanceUid: studyInstanceUID
          });

          if (!alreadyLoaded) {
            OHIFStudyMetadataSource._updateStudyCollections(study);
          }

          resolve(study);
          return;
        }

        _this.getByInstanceUID(studyInstanceUID).then(function (studyInfo) {
          // Create study metadata object
          var studyMetadata = new OHIF.metadata.StudyMetadata(studyInfo, studyInfo.studyInstanceUid); // Get Study display sets

          var displaySets = OHIF.viewerbase.sortingManager.getDisplaySets(studyMetadata); // Set studyMetadata display sets

          studyMetadata.setDisplaySets(displaySets);

          OHIFStudyMetadataSource._updateStudyCollections(studyMetadata);

          resolve(studyMetadata);
        }).catch(reject);
      });
    }

    return loadStudy;
  }(); // Static methods


  OHIFStudyMetadataSource._updateStudyCollections = function () {
    function _updateStudyCollections(studyMetadata) {
      var studyInfo = studyMetadata.getData(); // Set some studyInfo properties

      studyInfo.selected = true;
      studyInfo.displaySets = studyMetadata.getDisplaySets(); // Insert new study info object in Studies TypeSafeCollection

      OHIF.viewer.Studies.insert(studyInfo); // Insert new study metadata in StudyMetadataList TypeSafeCollection

      OHIF.viewer.StudyMetadataList.insert(studyMetadata);
    }

    return _updateStudyCollections;
  }();

  return OHIFStudyMetadataSource;
}(OHIF.viewerbase.StudyMetadataSource);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"OHIFStudySummary.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/lib/classes/OHIFStudySummary.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  OHIFStudySummary: function () {
    return OHIFStudySummary;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
module.watch(require("meteor/ohif:viewerbase"));

/**
 * Constants
 */
var STRING = 'string';
var propertyReplacementMap = {
  modalities: 'ModalitiesInStudy',
  patientBirthdate: 'PatientBirthDate'
};
/**
 * OHIF Viewers specialized version of StudySummary class
 */

var OHIFStudySummary =
/*#__PURE__*/
function (_OHIF$viewerbase$meta) {
  (0, _inheritsLoose2.default)(OHIFStudySummary, _OHIF$viewerbase$meta);

  function OHIFStudySummary() {
    return _OHIF$viewerbase$meta.apply(this, arguments) || this;
  }

  var _proto = OHIFStudySummary.prototype;

  // @Override
  _proto.addTags = function () {
    function addTags(tagMap) {
      var _hasOwn = Object.prototype.hasOwnProperty;

      var _tagMap = Object.create(null);

      for (var property in meteorBabelHelpers.sanitizeForInObject(tagMap)) {
        if (_hasOwn.call(tagMap, property)) {
          var standardProperty = OHIFStudySummary.getStandardPropertyName(property);

          if (standardProperty) {
            _tagMap[standardProperty] = tagMap[property];
          }
        }
      }

      _OHIF$viewerbase$meta.prototype.addTags.call(this, _tagMap);
    }

    return addTags;
  }();
  /**
   * Turns a non-standard, OHIF specific, DICOM property name into a standard one.
   * @param {string} property A string representing a non-conforming keyword.
   * @returns {string|undefined} Returns a standard-conforming property name.
   */


  OHIFStudySummary.getStandardPropertyName = function () {
    function getStandardPropertyName(property) {
      var standardProperty;

      if ((0, _typeof2.default)(property) === STRING && property.charAt(0) !== '_') {
        if (property in propertyReplacementMap) {
          standardProperty = propertyReplacementMap[propertyReplacementMap];
        } else {
          standardProperty = property.replace(/^sop/, 'SOP').replace(/Uid$/, 'UID').replace(/Id$/, 'ID');
          standardProperty = standardProperty.charAt(0).toUpperCase() + standardProperty.substr(1);
        }
      }

      return standardProperty;
    }

    return getStandardPropertyName;
  }();

  return OHIFStudySummary;
}(OHIF.viewerbase.metadata.StudySummary);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_studies/imports/client/lib/classes/index.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
var OHIFStudyMetadataSource;
module.watch(require("./OHIFStudyMetadataSource"), {
  OHIFStudyMetadataSource: function (v) {
    OHIFStudyMetadataSource = v;
  }
}, 1);
var OHIFStudySummary;
module.watch(require("./OHIFStudySummary"), {
  OHIFStudySummary: function (v) {
    OHIFStudySummary = v;
  }
}, 2);
OHIF.studies.classes = {
  OHIFStudyMetadataSource: OHIFStudyMetadataSource,
  OHIFStudySummary: OHIFStudySummary
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".styl"
  ]
});
require("/node_modules/meteor/ohif:studies/both/main.js");
require("/node_modules/meteor/ohif:studies/client/main.js");

/* Exports */
Package._define("ohif:studies");

})();
