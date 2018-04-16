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
var HTTP = Package.http.HTTP;
var Random = Package.random.Random;
var JSZip = Package['silentcicero:jszip'].JSZip;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Accounts = Package['accounts-base'].Accounts;
var Collection2 = Package['aldeed:collection2'].Collection2;
var moment = Package['momentjs:moment'].moment;
var dialogPolyfill = Package['ohif:viewerbase'].dialogPolyfill;
var WADOProxy = Package['ohif:wadoproxy'].WADOProxy;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Mongo = Package.mongo.Mongo;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var WebApp = Package.webapp.WebApp;
var Log = Package.logging.Log;
var Tracker = Package.deps.Tracker;
var Deps = Package.deps.Deps;
var Session = Package.session.Session;
var DDP = Package['ddp-client'].DDP;
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Template = Package['templating-runtime'].Template;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var EJSON = Package.ejson.EJSON;
var FastClick = Package.fastclick.FastClick;
var LaunchScreen = Package['launch-screen'].LaunchScreen;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var queryStudies, queryStudiesWithProgress, getNumberOfFilesInStudy;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:study-list":{"both":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/both/index.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./base.js"));
module.watch(require("./collections.js"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"base.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/both/base.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
OHIF.studylist = {
  collections: {},
  actions: {}
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"collections.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/both/collections.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  StudyImportStatus: function () {
    return StudyImportStatus;
  }
});
var Mongo;
module.watch(require("meteor/mongo"), {
  Mongo: function (v) {
    Mongo = v;
  }
}, 0);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 1);
var StudyImportStatus = new Mongo.Collection('studyImportStatus');
StudyImportStatus._debugName = 'StudyImportStatus';
OHIF.studylist.collections.StudyImportStatus = StudyImportStatus;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/index.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./base"));
module.watch(require("./collections"));
module.watch(require("./lib"));
module.watch(require("./components"));
module.watch(require("./dropdown"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"base.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/base.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
Object.assign(OHIF.studylist, {
  callbacks: {}
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dropdown.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/dropdown.js                                                                         //
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
Meteor.startup(function () {
  OHIF.studylist.dropdown = new OHIF.ui.Dropdown();
  OHIF.studylist.dropdown.setItems([{
    action: OHIF.studylist.viewSeriesDetails,
    text: 'View Series Details'
  }, {
    text: 'Anonymize',
    disabled: true
  }, {
    text: 'Send',
    disabled: true,
    separatorAfter: true
  }, {
    text: 'Delete',
    disabled: true
  }, {
    action: OHIF.studylist.exportSelectedStudies,
    text: 'Export',
    title: 'Export Selected Studies'
  }]);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"collections":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/collections/index.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./studies.js"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studies.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/collections/studies.js                                                              //
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
// Define the Studies Collection. This is a client-side only Collection which stores the list of
// studies in the StudyList
Meteor.startup(function () {
  var Studies = new Meteor.Collection(null);
  Studies._debugName = 'Studies';
  OHIF.studylist.collections.Studies = Studies;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"components":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/index.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./seriesDetailsModal"));
module.watch(require("./studylist"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"seriesDetailsModal":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/seriesDetailsModal/index.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./seriesDetailsModal.html"));
module.watch(require("./seriesDetailsTable/seriesDetailsTable.html"));
module.watch(require("./seriesDetailsTable/seriesDetailsTable.styl"));
module.watch(require("./seriesDetailsTable/seriesDetailsTable.js"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"seriesDetailsModal.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_study-list/client/components/seriesDetailsModal/seriesDetailsModal.html                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.seriesDetailsModal.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.seriesDetailsModal.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/seriesDetailsModal/template.seriesDetailsModal.js                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("seriesDetailsModal");
Template["seriesDetailsModal"] = new Template("Template.seriesDetailsModal", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      title: "Series Details"
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("dialogSimple"), function() {
      return [ "\n        ", Blaze._TemplateWith(function() {
        return {
          selectedStudies: Spacebars.call(Spacebars.dot(view.lookup("."), "selectedStudies"))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("seriesDetailsTable"));
      }), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"seriesDetailsTable":{"seriesDetailsTable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_study-list/client/components/seriesDetailsModal/seriesDetailsTable/seriesDetailsTable.html //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.seriesDetailsTable.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.seriesDetailsTable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/seriesDetailsModal/seriesDetailsTable/template.seriesDetailsTable.js     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("seriesDetailsTable");
Template["seriesDetailsTable"] = new Template("Template.seriesDetailsTable", (function() {
  var view = this;
  return [ Blaze.Unless(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("selectedStudies"), "length"));
  }, function() {
    return [ "\n        ", HTML.P({
      align: "center"
    }, "Series details not found"), "\n    " ];
  }), "\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("selectedStudies"));
  }, function() {
    return [ "\n        ", HTML.DIV({
      class: "selectedStudyContainer"
    }, "\n            ", HTML.TABLE({
      class: "table table-responsive tblStudyDetails"
    }, "\n                ", HTML.TBODY("\n                ", HTML.TR("\n                    ", HTML.TD({
      class: "center patientID"
    }, "\n                        ", HTML.DIV("\n                            ", HTML.SPAN("Patient ID"), "\n                        "), "\n                        ", HTML.INPUT({
      type: "text",
      class: "form-control",
      id: "patientID",
      placeholder: "Patient ID",
      disabled: "disabled",
      value: function() {
        return Spacebars.mustache(view.lookup("patientId"));
      }
    }), "\n                    "), "\n                    ", HTML.TD({
      class: "patientName"
    }, "\n                        ", HTML.DIV("\n                            ", HTML.SPAN("Patient Name"), "\n                        "), "\n                        ", HTML.INPUT({
      type: "text",
      class: "form-control",
      id: "patientName",
      placeholder: "Patient Name",
      disabled: "disabled",
      value: function() {
        return Spacebars.mustache(view.lookup("formatPN"), view.lookup("patientName"));
      }
    }), "\n                    "), "\n                    ", HTML.TD({
      class: "accessionNumber"
    }, "\n                        ", HTML.DIV("\n                            ", HTML.SPAN("Accession Number"), "\n                        "), "\n                        ", HTML.INPUT({
      type: "text",
      class: "form-control",
      id: "accessionNumber",
      placeholder: "Accession Number",
      disabled: "disabled",
      value: function() {
        return Spacebars.mustache(view.lookup("accessionNumber"));
      }
    }), "\n                    "), "\n                "), "\n                ", HTML.TR("\n                    ", HTML.TD({
      class: "studyDescription"
    }, "\n                        ", HTML.DIV("\n                            ", HTML.SPAN("Study Description"), "\n                        "), "\n                        ", HTML.INPUT({
      type: "text",
      class: "form-control",
      id: "studyDescription",
      placeholder: "Study Description",
      disabled: "disabled",
      value: function() {
        return Spacebars.mustache(view.lookup("studyDescription"));
      }
    }), "\n                    "), "\n                    ", HTML.TD({
      class: "studyDate"
    }, "\n                        ", HTML.DIV("\n                            ", HTML.SPAN("Study Date"), "\n                        "), "\n                        ", HTML.INPUT({
      type: "text",
      class: "form-control",
      id: "studyDate",
      placeholder: "Study Date",
      disabled: "disabled",
      value: function() {
        return Spacebars.mustache(view.lookup("formatDA"), view.lookup("studyDate"));
      }
    }), "\n                    "), "\n\n                    ", HTML.TD(), "\n                "), "\n                "), "\n            "), "\n\n            ", HTML.TABLE({
      class: "table table-responsive tblSeriesDetails"
    }, "\n                ", HTML.THEAD("\n                ", HTML.TR("\n                    ", HTML.TH({
      class: "header"
    }, "Number"), "\n                    ", HTML.TH({
      class: "header"
    }, "Modality"), "\n                    ", HTML.TH({
      class: "header"
    }, "Description"), "\n                    ", HTML.TH({
      class: "header"
    }, "Instances"), "\n                "), "\n                "), "\n\n                ", HTML.TBODY("\n                ", Blaze.If(function() {
      return Spacebars.call(view.lookup("displaySeriesLoadingText"));
    }, function() {
      return [ "\n                    ", HTML.TR("\n                        ", HTML.TD({
        colspan: "4",
        class: "center"
      }, "\n                            ", Spacebars.include(view.lookupTemplate("loadingText")), "\n                        "), "\n                    "), "\n                " ];
    }), "\n\n                ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("seriesList"));
    }, function() {
      return [ "\n                    ", HTML.TR("\n                        ", HTML.TD({
        class: "center"
      }, Blaze.View("lookup:seriesNumber", function() {
        return Spacebars.mustache(view.lookup("seriesNumber"));
      })), "\n                        ", HTML.TD({
        class: "center"
      }, Blaze.View("lookup:modality", function() {
        return Spacebars.mustache(view.lookup("modality"));
      })), "\n                        ", HTML.TD({
        class: "center"
      }, Blaze.View("lookup:seriesDescription", function() {
        return Spacebars.mustache(view.lookup("seriesDescription"));
      })), "\n                        ", HTML.TD({
        class: "center"
      }, Blaze.View("lookup:instances.length", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("instances"), "length"));
      })), "\n                    "), "\n                " ];
    }), "\n                "), "\n            "), "\n        "), "\n    " ];
  }) ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"seriesDetailsTable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/seriesDetailsModal/seriesDetailsTable/seriesDetailsTable.js              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 2);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 3);
Template.seriesDetailsTable.onCreated(function () {
  var instance = Template.instance(); // Create selected studies

  instance.selectedStudies = new ReactiveDict();
  var selectedStudiesData = instance.data.selectedStudies;

  if (!selectedStudiesData) {
    return;
  } // Display loading text while getting series


  _.each(selectedStudiesData, function (selectedStudy) {
    selectedStudy.displaySeriesLoadingText = true;
  }); // Set reactive selected studies


  instance.selectedStudies.set('studies', selectedStudiesData);
});
Template.seriesDetailsTable.onRendered(function () {
  var instance = Template.instance();
  var studies = instance.selectedStudies.get('studies');

  if (!studies) {
    return;
  } // Get series list for the study


  _.map(studies, function (selectedStudy, index) {
    studies[index].seriesList = [];
    OHIF.studies.retrieveStudyMetadata(function (study) {
      // Set series list
      studies[index].seriesList = study.seriesList;
      studies[index].displaySeriesLoadingText = false; // Update selected studies

      instance.selectedStudies.set('studies', studies);
    });
  });
});
Template.seriesDetailsTable.helpers({
  selectedStudies: function () {
    var instance = Template.instance();
    return instance.selectedStudies.get('studies');
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"seriesDetailsTable.styl":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_study-list/client/components/seriesDetailsModal/seriesDetailsTable/seriesDetailsTable.styl //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./seriesDetailsTable.styl.css"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"seriesDetailsTable.styl.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/seriesDetailsModal/seriesDetailsTable/seriesDetailsTable.styl.css        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".theme-icon-crickets,\n.theme-icon-tide,\n.theme-icon-tigerlily,\n.theme-icon-quartz,\n.theme-icon-overcast,\n.theme-icon-mint,\n.theme-icon-honeycomb {\n  display: inline-block;\n  background: url(\"/packages/ohif_design/assets/theme-icons.png\") no-repeat;\n  overflow: hidden;\n  text-indent: -9999px;\n  text-align: left;\n}\n.theme-icon-crickets {\n  background-position: 0px 0px;\n  width: 64px;\n  height: 56px;\n}\n.theme-icon-tide {\n  background-position: 0px -56px;\n  width: 64px;\n  height: 54px;\n}\n.theme-icon-tigerlily {\n  background-position: 0px -110px;\n  width: 62px;\n  height: 61px;\n}\n.theme-icon-quartz {\n  background-position: 0px -171px;\n  width: 59px;\n  height: 64px;\n}\n.theme-icon-overcast {\n  background-position: 0px -235px;\n  width: 58px;\n  height: 37px;\n}\n.theme-icon-mint {\n  background-position: 0px -272px;\n  width: 57px;\n  height: 61px;\n}\n.theme-icon-honeycomb {\n  background-position: 0px -333px;\n  width: 50px;\n  height: 58px;\n}\n.selectedStudyContainer {\n  margin-bottom: 15px;\n}\n.selectedStudyContainer .tblStudyDetails tbody > tr > td > label {\n  color: $textPrimaryColor;\n}\n.selectedStudyContainer .tblStudyDetails tbody > tr > td > input[type=\"text\"] {\n  height: 28px;\n  background-color: $primaryBackgroundColor;\n  color: $textPrimaryColor;\n  width: calc(100% - 10px);\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  -ms-border-radius: 4px;\n  -o-border-radius: 4px;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.selectedStudyContainer .tblSeriesDetails thead > tr > th {\n  text-align: center;\n}\n.selectedStudyContainer .tblSeriesDetails tbody > tr td {\n  text-align: center;\n  color: $textPrimaryColor;\n}\n.selectedStudyContainer .tblSeriesDetails .loadingTextDiv {\n  font-size: 13px;\n  color: $textSecondaryColor;\n}\n"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"studylist":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/studylist/index.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./studylist.html"));
module.watch(require("./studylist.styl"));
module.watch(require("./studylistStudy/studylistStudy.html"));
module.watch(require("./studylistStudy/studylistStudy.js"));
module.watch(require("./studylistStudy/studylistStudy.styl"));
module.watch(require("./studylistResult/studylistResult.html"));
module.watch(require("./studylistResult/studylistResult.js"));
module.watch(require("./studylistResult/studylistResult.styl"));
module.watch(require("./studylistToolbar/studylistToolbar.html"));
module.watch(require("./studylistToolbar/studylistToolbar.js"));
module.watch(require("./studylistToolbar/studylistToolbar.styl"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studylist.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_study-list/client/components/studylist/studylist.html                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.studylist.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.studylist.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/studylist/template.studylist.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("studylist");
Template["studylist"] = new Template("Template.studylist", (function() {
  var view = this;
  return HTML.DIV({
    class: "study-list-wrapper"
  }, "\n        ", Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."));
  }, function() {
    return Spacebars.include(view.lookupTemplate("studylistResult"));
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studylist.styl":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_study-list/client/components/studylist/studylist.styl                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./studylist.styl.css"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studylist.styl.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/studylist/studylist.styl.css                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".theme-icon-crickets,\n.theme-icon-tide,\n.theme-icon-tigerlily,\n.theme-icon-quartz,\n.theme-icon-overcast,\n.theme-icon-mint,\n.theme-icon-honeycomb {\n  display: inline-block;\n  background: url(\"/packages/ohif_design/assets/theme-icons.png\") no-repeat;\n  overflow: hidden;\n  text-indent: -9999px;\n  text-align: left;\n}\n.theme-icon-crickets {\n  background-position: 0px 0px;\n  width: 64px;\n  height: 56px;\n}\n.theme-icon-tide {\n  background-position: 0px -56px;\n  width: 64px;\n  height: 54px;\n}\n.theme-icon-tigerlily {\n  background-position: 0px -110px;\n  width: 62px;\n  height: 61px;\n}\n.theme-icon-quartz {\n  background-position: 0px -171px;\n  width: 59px;\n  height: 64px;\n}\n.theme-icon-overcast {\n  background-position: 0px -235px;\n  width: 58px;\n  height: 37px;\n}\n.theme-icon-mint {\n  background-position: 0px -272px;\n  width: 57px;\n  height: 61px;\n}\n.theme-icon-honeycomb {\n  background-position: 0px -333px;\n  width: 50px;\n  height: 58px;\n}\n.study-list-wrapper {\n  color: #fff;\n  margin: 2px auto 0;\n  height: calc(100% - 91px);\n  position: relative;\n  width: 100%;\n}\n.study-list-wrapper {\n  background-color: #000;\n}\nbody.theme-tide .study-list-wrapper {\n  background-color: #000;\n}\nbody.theme-tigerlily .study-list-wrapper {\n  background-color: #000;\n}\nbody.theme-crickets .study-list-wrapper {\n  background-color: #000;\n}\nbody.theme-honeycomb .study-list-wrapper {\n  background-color: #000;\n}\nbody.theme-mint .study-list-wrapper {\n  background-color: #000;\n}\nbody.theme-overcast .study-list-wrapper {\n  background-color: #000;\n}\nbody.theme-quartz .study-list-wrapper {\n  background-color: #000;\n}\n.study-list-wrapper .loadingTextDiv {\n  font-size: 30px;\n}\n.study-list-wrapper .loadingTextDiv {\n  color: #91b9cd;\n}\nbody.theme-tide .study-list-wrapper .loadingTextDiv {\n  color: #91b9cd;\n}\nbody.theme-tigerlily .study-list-wrapper .loadingTextDiv {\n  color: #9ccdf8;\n}\nbody.theme-crickets .study-list-wrapper .loadingTextDiv {\n  color: #8be7b5;\n}\nbody.theme-honeycomb .study-list-wrapper .loadingTextDiv {\n  color: #fab797;\n}\nbody.theme-mint .study-list-wrapper .loadingTextDiv {\n  color: #a7e9b3;\n}\nbody.theme-overcast .study-list-wrapper .loadingTextDiv {\n  color: #73f2fc;\n}\nbody.theme-quartz .study-list-wrapper .loadingTextDiv {\n  color: #d7e8fe;\n}\n"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studylistResult":{"studylistResult.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_study-list/client/components/studylist/studylistResult/studylistResult.html                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.studylistResult.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.studylistResult.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/studylist/studylistResult/template.studylistResult.js                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("studylistResult");
Template["studylistResult"] = new Template("Template.studylistResult", (function() {
  var view = this;
  return [ HTML.DIV({
    class: "studyListToolbar clearfix"
  }, "\n        ", HTML.Raw('<div class="header pull-left">Study List</div>'), "\n        ", HTML.DIV({
    class: "studyCount pull-right"
  }, Blaze.View("lookup:numberOfStudies", function() {
    return Spacebars.mustache(view.lookup("numberOfStudies"));
  })), "\n        ", HTML.DIV({
    class: "pull-right"
  }, Spacebars.include(view.lookupTemplate("studylistToolbar"))), "\n    "), HTML.Raw('\n    <div class="theadBackground">\n    </div>\n    '), HTML.DIV({
    id: "studyListContainer"
  }, "\n        ", HTML.TABLE({
    id: "tblStudyList",
    class: "studylistResult table noselect"
  }, "\n            ", HTML.THEAD("\n                ", HTML.TR("\n                    ", HTML.TH({
    class: "patientName"
  }, "\n                        ", HTML.DIV({
    id: "_patientName",
    class: "sortingCell"
  }, "\n                            ", HTML.SPAN("Patient Name"), "\n                            ", HTML.I({
    class: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("sortingColumnsIcons"), "patientName"));
    }
  }, HTML.CharRef({
    html: "&nbsp;",
    str: " "
  })), "\n                        "), "\n                        ", HTML.INPUT({
    type: "text",
    class: "form-control studylist-search",
    id: "patientName"
  }), "\n                    "), "\n                    ", HTML.TH({
    class: "patientId"
  }, "\n                        ", HTML.DIV({
    id: "_patientId",
    class: "sortingCell"
  }, "\n                            ", HTML.SPAN("MRN"), "\n                            ", HTML.I({
    class: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("sortingColumnsIcons"), "patientId"));
    }
  }, HTML.CharRef({
    html: "&nbsp;",
    str: " "
  })), "\n                        "), "\n                        ", HTML.INPUT({
    type: "text",
    class: "form-control studylist-search",
    id: "patientId"
  }), "\n                    "), "\n                    ", HTML.TH({
    class: "accessionNumber"
  }, "\n                        ", HTML.DIV({
    id: "_accessionNumber",
    class: "sortingCell "
  }, "\n                            ", HTML.SPAN("Accession #"), "\n                            ", HTML.I({
    class: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("sortingColumnsIcons"), "accessionNumber"));
    }
  }, HTML.CharRef({
    html: "&nbsp;",
    str: " "
  })), "\n                        "), "\n                        ", HTML.INPUT({
    type: "text",
    class: "form-control studylist-search",
    id: "accessionNumber"
  }), "\n                    "), "\n                    ", HTML.TH({
    class: "studyDate"
  }, "\n                        ", HTML.DIV({
    id: "_studyDate",
    class: "sortingCell"
  }, "\n                            ", HTML.SPAN("Study Date"), "\n                            ", HTML.I({
    class: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("sortingColumnsIcons"), "studyDate"));
    }
  }, HTML.CharRef({
    html: "&nbsp;",
    str: " "
  })), "\n                        "), "\n                        ", HTML.INPUT({
    type: "text",
    class: "form-control studylist-search",
    name: "daterange",
    id: "studyDate"
  }), "\n                    "), "\n                    ", HTML.TH({
    class: "modalities"
  }, "\n                        ", HTML.DIV({
    id: "_modalities",
    class: "sortingCell"
  }, "\n                            ", HTML.SPAN("Modality"), "\n                            ", HTML.I({
    class: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("sortingColumnsIcons"), "modalities"));
    }
  }, HTML.CharRef({
    html: "&nbsp;",
    str: " "
  })), "\n                        "), "\n                        ", HTML.INPUT({
    type: "text",
    class: "form-control studylist-search",
    id: "modality"
  }), "\n                    "), "\n                    ", HTML.TH({
    class: "studyDescription"
  }, "\n                        ", HTML.DIV({
    id: "_studyDescription",
    class: "sortingCell"
  }, "\n                            ", HTML.SPAN("Study Description"), "\n                            ", HTML.I({
    class: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("sortingColumnsIcons"), "studyDescription"));
    }
  }, HTML.CharRef({
    html: "&nbsp;",
    str: " "
  })), "\n                        "), "\n                        ", HTML.INPUT({
    type: "text",
    class: "form-control studylist-search",
    id: "studyDescription"
  }), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.TBODY({
    id: "studyListData"
  }, "\n                ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("studies")),
      _variable: "study"
    };
  }, function() {
    return [ "\n                    ", Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("clone"), view.lookup("study"), view.lookup("."));
    }, function() {
      return Spacebars.include(view.lookupTemplate("studylistStudy"));
    }), "\n                " ];
  }), "\n            "), "\n        "), "\n\n        ", HTML.Raw("<!-- Pagination -->"), "\n        ", Blaze._TemplateWith(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("instance"), "paginationData"));
  }, function() {
    return Spacebars.include(view.lookupTemplate("paginationArea"));
  }), "\n\n        ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("session"), "showLoadingText");
  }, function() {
    return [ "\n            ", Spacebars.include(view.lookupTemplate("loadingText")), "\n        " ];
  }, function() {
    return [ "\n            ", Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("session"), "serverError");
    }, function() {
      return [ "\n                ", HTML.DIV({
        class: "notFound"
      }, "There was an error fetching studies"), "\n            " ];
    }, function() {
      return [ "\n                ", Blaze.Unless(function() {
        return Spacebars.call(view.lookup("numberOfStudies"));
      }, function() {
        return [ "\n                    ", HTML.DIV({
          class: "notFound"
        }, "No matching results"), "\n                " ];
      }), "\n            " ];
    }), "\n        " ];
  }), "\n    ") ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studylistResult.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/studylist/studylistResult/studylistResult.js                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 1);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 2);
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 3);
var ReactiveDict;
module.watch(require("meteor/reactive-dict"), {
  ReactiveDict: function (v) {
    ReactiveDict = v;
  }
}, 4);
var moment;
module.watch(require("meteor/momentjs:moment"), {
  moment: function (v) {
    moment = v;
  }
}, 5);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 6);
Session.setDefault('showLoadingText', true);
Session.setDefault('serverError', false);
Template.studylistResult.helpers({
  /**
   * Returns a ascending sorted instance of the Studies Collection by Patient name and Study Date
   */
  studies: function () {
    var instance = Template.instance();
    var studies;
    var sortOption = {
      patientName: 1,
      studyDate: 1
    }; // Update sort option if session is defined

    if (Session.get('sortOption')) {
      sortOption = Session.get('sortOption');
    } // Pagination parameters


    var rowsPerPage = instance.paginationData.rowsPerPage.get();
    var currentPage = instance.paginationData.currentPage.get();
    var offset = rowsPerPage * currentPage;
    var limit = offset + rowsPerPage;
    studies = OHIF.studylist.collections.Studies.find({}, {
      sort: sortOption
    }).fetch();

    if (!studies) {
      return;
    } // Update record count


    instance.paginationData.recordCount.set(studies.length); // Limit studies

    return studies.slice(offset, limit);
  },
  numberOfStudies: function () {
    return OHIF.studylist.collections.Studies.find().count();
  },
  sortingColumnsIcons: function () {
    var instance = Template.instance();
    var sortingColumnsIcons = {};
    Object.keys(instance.sortingColumns.keys).forEach(function (key) {
      var value = instance.sortingColumns.get(key);

      if (value === 1) {
        sortingColumnsIcons[key] = 'fa fa-fw fa-sort-up';
      } else if (value === -1) {
        sortingColumnsIcons[key] = 'fa fa-fw fa-sort-down';
      } else {
        // fa-fw is blank
        sortingColumnsIcons[key] = 'fa fa-fw';
      }
    });
    return sortingColumnsIcons;
  }
});
var studyDateFrom;
var studyDateTo;
var filter;
/**
 * Transforms an input string into a search filter for
 * the StudyList Search call
 *
 * @param filter The input string to be searched for
 * @returns {*}
 */

function getFilter(filter) {
  if (filter && filter.length && filter.substr(filter.length - 1) !== '*') {
    filter += '*';
  }

  return filter;
}
/**
 * Search for a value in a string
 */


function isIndexOf(mainVal, searchVal) {
  if (mainVal === undefined || mainVal === '' || mainVal.indexOf(searchVal) > -1) {
    return true;
  }

  return false;
}
/**
 * Replace object if undefined
 */


function replaceUndefinedColumnValue(text) {
  if (text === undefined || text === 'undefined') {
    return '';
  } else {
    return text.toUpperCase();
  }
}
/**
 * Convert string to study date
 */


function convertStringToStudyDate(dateStr) {
  var y = dateStr.substring(0, 4);
  var m = dateStr.substring(4, 6);
  var d = dateStr.substring(6, 8);
  var newDateStr = m + '/' + d + '/' + y;
  return new Date(newDateStr);
}
/**
 * Runs a search for studies matching the studylist query parameters
 * Inserts the identified studies into the Studies Collection
 */


function search() {
  OHIF.log.info('search()'); // Show loading message

  Session.set('showLoadingText', true); // Hiding error message

  Session.set('serverError', false); // Create the filters to be used for the StudyList Search

  filter = {
    patientName: getFilter($('input#patientName').val()),
    patientId: getFilter($('input#patientId').val()),
    accessionNumber: getFilter($('input#accessionNumber').val()),
    studyDescription: getFilter($('input#studyDescription').val()),
    studyDateFrom: studyDateFrom,
    studyDateTo: studyDateTo,
    modalitiesInStudy: $('input#modality').val() ? $('input#modality').val() : ''
  }; // Make sure that modality has a reasonable value, since it is occasionally
  // returned as 'undefined'

  var modality = replaceUndefinedColumnValue($('input#modality').val()); // Clear all current studies

  OHIF.studylist.collections.Studies.remove({});
  Meteor.call('StudyListSearch', filter, function (error, studies) {
    OHIF.log.info('StudyListSearch'); // Hide loading text

    Session.set('showLoadingText', false);

    if (error) {
      Session.set('serverError', true);
      var errorType = error.error;

      if (errorType === 'server-connection-error') {
        OHIF.log.error('There was an error connecting to the DICOM server, please verify if it is up and running.');
      } else if (errorType === 'server-internal-error') {
        OHIF.log.error('There was an internal error with the DICOM server');
      } else {
        OHIF.log.error('For some reason we could not list the studies.');
      }

      OHIF.log.error(error.stack);
      return;
    }

    if (!studies) {
      OHIF.log.warn('No studies found');
      return;
    } // Loop through all identified studies


    studies.forEach(function (study) {
      // Search the rest of the parameters that aren't done via the server call
      if (isIndexOf(study.modalities, modality) && (new Date(studyDateFrom).setHours(0, 0, 0, 0) <= convertStringToStudyDate(study.studyDate) || !studyDateFrom || studyDateFrom === '') && (convertStringToStudyDate(study.studyDate) <= new Date(studyDateTo).setHours(0, 0, 0, 0) || !studyDateTo || studyDateTo === '')) {
        // Convert numberOfStudyRelatedInstance string into integer
        study.numberOfStudyRelatedInstances = !isNaN(study.numberOfStudyRelatedInstances) ? parseInt(study.numberOfStudyRelatedInstances) : undefined; // Insert any matching studies into the Studies Collection

        OHIF.studylist.collections.Studies.insert(study);
      }
    });
  });
}

var getRowsPerPage = function () {
  return sessionStorage.getItem('rowsPerPage');
}; // Wraps ReactiveVar equalsFunc function. Whenever ReactiveVar is
// set to a new value, it will save it in the Session Storage.
// The return is the default ReactiveVar equalsFunc if available
// or values are === compared


var setRowsPerPage = function (oldValue, newValue) {
  sessionStorage.setItem('rowsPerPage', newValue);
  return typeof ReactiveVar._isEqual === 'function' ? ReactiveVar._isEqual(oldValue, newValue) : oldValue === newValue;
};

Template.studylistResult.onCreated(function () {
  var instance = Template.instance();
  instance.sortOption = new ReactiveVar();
  instance.sortingColumns = new ReactiveDict(); // Pagination parameters
  // Rows per page
  // Check session storage or set 25 as default

  var cachedRowsPerPage = getRowsPerPage();

  if (!cachedRowsPerPage) {
    setRowsPerPage(0, 25);
  }

  var rowsPerPage = getRowsPerPage();
  instance.paginationData = {
    "class": 'studylist-pagination',
    currentPage: new ReactiveVar(0),
    rowsPerPage: new ReactiveVar(parseInt(rowsPerPage, 10), setRowsPerPage),
    recordCount: new ReactiveVar(0)
  }; // Set sortOption

  var sortOptionSession = Session.get('sortOption');

  if (sortOptionSession) {
    instance.sortingColumns.set(sortOptionSession);
  } else {
    instance.sortingColumns.set({
      patientName: 1,
      studyDate: 1,
      patientId: 0,
      accessionNumber: 0,
      studyDescription: 0,
      modality: 0
    });
  }
});
Template.studylistResult.onRendered(function () {
  var instance = Template.instance(); // Initialize daterangepicker

  var today = moment();
  var lastWeek = moment().subtract(6, 'days');
  var lastMonth = moment().subtract(29, 'days');
  var $studyDate = instance.$('#studyDate');
  var dateFilterNumDays = OHIF.uiSettings.studyListDateFilterNumDays;
  var startDate, endDate;

  if (dateFilterNumDays) {
    startDate = moment().subtract(dateFilterNumDays - 1, 'days');
    endDate = today;
  }

  instance.datePicker = $studyDate.daterangepicker({
    maxDate: today,
    autoUpdateInput: true,
    startDate: startDate,
    endDate: endDate,
    ranges: {
      Today: [today, today],
      'Last 7 Days': [lastWeek, today],
      'Last 30 Days': [lastMonth, today]
    }
  }).data('daterangepicker');

  if (startDate && endDate) {
    instance.datePicker.updateInputText();
  } else {
    // Retrieve all studies
    search();
  }
});
Template.studylistResult.onDestroyed(function () {
  var instance = Template.instance(); // Destroy the daterangepicker to prevent residual elements on DOM

  instance.datePicker.remove();
});

function resetSortingColumns(instance, sortingColumn) {
  Object.keys(instance.sortingColumns.keys).forEach(function (key) {
    if (key !== sortingColumn) {
      instance.sortingColumns.set(key, null);
    }
  });
}

Template.studylistResult.events({
  'keydown input': function (event) {
    if (event.which === 13) {
      //  Enter
      search();
    }
  },
  'onsearch input': function () {
    search();
  },
  'change #studyDate': function (event) {
    var dateRange = $(event.currentTarget).val(); // Remove all space chars

    dateRange = dateRange.replace(/ /g, ''); // Split dateRange into subdates

    var dates = dateRange.split('-');
    studyDateFrom = dates[0];
    studyDateTo = dates[1];

    if (dateRange !== '') {
      search();
    }
  },
  'click div.sortingCell': function (event, instance) {
    var elementId = event.currentTarget.id; // Remove _ from id

    var columnName = elementId.replace('_', '');
    var sortOption = {};
    resetSortingColumns(instance, columnName);
    var columnObject = instance.sortingColumns.get(columnName);

    if (columnObject) {
      instance.sortingColumns.set(columnName, columnObject * -1);
      sortOption[columnName] = columnObject * -1;
    } else {
      instance.sortingColumns.set(columnName, 1);
      sortOption[columnName] = 1;
    }

    instance.sortOption.set(sortOption);
    Session.set('sortOption', sortOption);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studylistResult.styl":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_study-list/client/components/studylist/studylistResult/studylistResult.styl                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./studylistResult.styl.css"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studylistResult.styl.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/studylist/studylistResult/studylistResult.styl.css                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".theme-icon-crickets,\n.theme-icon-tide,\n.theme-icon-tigerlily,\n.theme-icon-quartz,\n.theme-icon-overcast,\n.theme-icon-mint,\n.theme-icon-honeycomb {\n  display: inline-block;\n  background: url(\"/packages/ohif_design/assets/theme-icons.png\") no-repeat;\n  overflow: hidden;\n  text-indent: -9999px;\n  text-align: left;\n}\n.theme-icon-crickets {\n  background-position: 0px 0px;\n  width: 64px;\n  height: 56px;\n}\n.theme-icon-tide {\n  background-position: 0px -56px;\n  width: 64px;\n  height: 54px;\n}\n.theme-icon-tigerlily {\n  background-position: 0px -110px;\n  width: 62px;\n  height: 61px;\n}\n.theme-icon-quartz {\n  background-position: 0px -171px;\n  width: 59px;\n  height: 64px;\n}\n.theme-icon-overcast {\n  background-position: 0px -235px;\n  width: 58px;\n  height: 37px;\n}\n.theme-icon-mint {\n  background-position: 0px -272px;\n  width: 57px;\n  height: 61px;\n}\n.theme-icon-honeycomb {\n  background-position: 0px -333px;\n  width: 50px;\n  height: 58px;\n}\n.studyListToolbar {\n  height: 75px;\n  margin-bottom: 2px;\n  padding: 0 8%;\n}\n.studyListToolbar {\n  background: #151a1f;\n}\nbody.theme-tide .studyListToolbar {\n  background: #151a1f;\n}\nbody.theme-tigerlily .studyListToolbar {\n  background: #151a1f;\n}\nbody.theme-crickets .studyListToolbar {\n  background: #231c1e;\n}\nbody.theme-honeycomb .studyListToolbar {\n  background: #18161a;\n}\nbody.theme-mint .studyListToolbar {\n  background: #15191e;\n}\nbody.theme-overcast .studyListToolbar {\n  background: #15191e;\n}\nbody.theme-quartz .studyListToolbar {\n  background: #151a1f;\n}\n.studyListToolbar>div {\n  display: inline-block;\n}\n.studyListToolbar .header {\n  font-size: 22px;\n  font-weight: 300;\n  color: #91b9cd;\n  line-height: 75px;\n}\n.studyListToolbar .studylistToolbar {\n  height: 75px;\n  line-height: 75px;\n}\n.studyListToolbar .studyCount {\n  font-size: 40px;\n  font-weight: 100;\n  line-height: 75px;\n}\n.studyListToolbar .studyCount {\n  color: #6fbde2;\n}\nbody.theme-tide .studyListToolbar .studyCount {\n  color: #6fbde2;\n}\nbody.theme-tigerlily .studyListToolbar .studyCount {\n  color: #d47c66;\n}\nbody.theme-crickets .studyListToolbar .studyCount {\n  color: #d47c66;\n}\nbody.theme-honeycomb .studyListToolbar .studyCount {\n  color: #d47c66;\n}\nbody.theme-mint .studyListToolbar .studyCount {\n  color: #76d27d;\n}\nbody.theme-overcast .studyListToolbar .studyCount {\n  color: #74f1fa;\n}\nbody.theme-quartz .studyListToolbar .studyCount {\n  color: #abcdf6;\n}\n.theadBackground {\n  height: 121px;\n  position: absolute;\n  width: 100%;\n}\n.theadBackground:before,\n.theadBackground:after {\n  content: '';\n  display: block;\n  left: 0;\n  position: absolute;\n  width: 100%;\n}\n.theadBackground:before {\n  height: 100%;\n  top: 0;\n  z-index: 1;\n}\n.theadBackground:before {\n  background-color: #151a1f;\n}\nbody.theme-tide .theadBackground:before {\n  background-color: #151a1f;\n}\nbody.theme-tigerlily .theadBackground:before {\n  background-color: #151a1f;\n}\nbody.theme-crickets .theadBackground:before {\n  background-color: #231c1e;\n}\nbody.theme-honeycomb .theadBackground:before {\n  background-color: #18161a;\n}\nbody.theme-mint .theadBackground:before {\n  background-color: #15191e;\n}\nbody.theme-overcast .theadBackground:before {\n  background-color: #15191e;\n}\nbody.theme-quartz .theadBackground:before {\n  background-color: #151a1f;\n}\n.theadBackground:after {\n  bottom: -1px;\n  height: 1px;\n  z-index: 3;\n}\n.theadBackground:after {\n  background-color: #6fbde2;\n}\nbody.theme-tide .theadBackground:after {\n  background-color: #6fbde2;\n}\nbody.theme-tigerlily .theadBackground:after {\n  background-color: #d47c66;\n}\nbody.theme-crickets .theadBackground:after {\n  background-color: #d47c66;\n}\nbody.theme-honeycomb .theadBackground:after {\n  background-color: #d47c66;\n}\nbody.theme-mint .theadBackground:after {\n  background-color: #76d27d;\n}\nbody.theme-overcast .theadBackground:after {\n  background-color: #74f1fa;\n}\nbody.theme-quartz .theadBackground:after {\n  background-color: #abcdf6;\n}\n#studyListContainer {\n  width: 100%;\n  padding: 0 8%;\n  position: absolute;\n  z-index: 2;\n}\n#studyListContainer .loadingTextDiv {\n  color: #91b9cd;\n  font-size: 30px;\n}\n#studyListContainer .notFound {\n  color: #91b9cd;\n  font-size: 30px;\n  font-weight: 200;\n  text-align: center;\n}\n#studyListContainer table#tblStudyList tr {\n  height: 20px;\n}\n#studyListContainer table#tblStudyList thead {\n  white-space: nowrap;\n}\n#studyListContainer table#tblStudyList thead tr th {\n  padding: 0;\n  border-bottom: solid 1px #6fbde2;\n  width: 100%;\n}\n#studyListContainer table#tblStudyList thead tr th:first-child {\n  padding-left: $tablePadding;\n}\n#studyListContainer table#tblStudyList thead tr th:last-child {\n  padding-right: $tablePadding;\n}\n#studyListContainer table#tblStudyList thead tr th div.sortingCell {\n  display: inline-block;\n  cursor: pointer;\n  width: 100%;\n  min-width: 95px;\n  margin: 0 auto;\n  color: #fff;\n  font-weight: 400;\n  padding: 20px;\n}\n#studyListContainer table#tblStudyList thead tr th div.sortingCell span {\n  font-size: 15px;\n  float: left;\n}\n#studyListContainer table#tblStudyList thead tr th div.sortingCell i {\n  margin: 0 5px;\n}\n#studyListContainer table#tblStudyList thead tr th div.sortingCell:hover {\n  color: #20a5d6;\n}\nbody.theme-tide #studyListContainer table#tblStudyList thead tr th div.sortingCell:hover {\n  color: #20a5d6;\n}\nbody.theme-tigerlily #studyListContainer table#tblStudyList thead tr th div.sortingCell:hover {\n  color: #fa8947;\n}\nbody.theme-crickets #studyListContainer table#tblStudyList thead tr th div.sortingCell:hover {\n  color: #d4c3c1;\n}\nbody.theme-honeycomb #studyListContainer table#tblStudyList thead tr th div.sortingCell:hover {\n  color: #cda56b;\n}\nbody.theme-mint #studyListContainer table#tblStudyList thead tr th div.sortingCell:hover {\n  color: #31b166;\n}\nbody.theme-overcast #studyListContainer table#tblStudyList thead tr th div.sortingCell:hover {\n  color: #507d80;\n}\nbody.theme-quartz #studyListContainer table#tblStudyList thead tr th div.sortingCell:hover {\n  color: #7858ce;\n}\n#studyListContainer table#tblStudyList thead tr th div.sortingCell.active,\n#studyListContainer table#tblStudyList thead tr th div.sortingCell:active {\n  color: #20a5d6;\n}\nbody.theme-tide #studyListContainer table#tblStudyList thead tr th div.sortingCell.active {\n  color: #20a5d6;\n}\nbody.theme-tide #studyListContainer table#tblStudyList thead tr th div.sortingCell:active {\n  color: #20a5d6;\n}\nbody.theme-tigerlily #studyListContainer table#tblStudyList thead tr th div.sortingCell.active {\n  color: #fa8947;\n}\nbody.theme-tigerlily #studyListContainer table#tblStudyList thead tr th div.sortingCell:active {\n  color: #fa8947;\n}\nbody.theme-crickets #studyListContainer table#tblStudyList thead tr th div.sortingCell.active {\n  color: #d4c3c1;\n}\nbody.theme-crickets #studyListContainer table#tblStudyList thead tr th div.sortingCell:active {\n  color: #d4c3c1;\n}\nbody.theme-honeycomb #studyListContainer table#tblStudyList thead tr th div.sortingCell.active {\n  color: #cda56b;\n}\nbody.theme-honeycomb #studyListContainer table#tblStudyList thead tr th div.sortingCell:active {\n  color: #cda56b;\n}\nbody.theme-mint #studyListContainer table#tblStudyList thead tr th div.sortingCell.active {\n  color: #31b166;\n}\nbody.theme-mint #studyListContainer table#tblStudyList thead tr th div.sortingCell:active {\n  color: #31b166;\n}\nbody.theme-overcast #studyListContainer table#tblStudyList thead tr th div.sortingCell.active {\n  color: #507d80;\n}\nbody.theme-overcast #studyListContainer table#tblStudyList thead tr th div.sortingCell:active {\n  color: #507d80;\n}\nbody.theme-quartz #studyListContainer table#tblStudyList thead tr th div.sortingCell.active {\n  color: #7858ce;\n}\nbody.theme-quartz #studyListContainer table#tblStudyList thead tr th div.sortingCell:active {\n  color: #7858ce;\n}\n#studyListContainer table#tblStudyList thead tr th input.studylist-search {\n  height: 40px;\n  margin: 0 5px 20px 5px;\n  padding: 0 20px;\n  cursor: pointer;\n  border: none;\n  background-color: #2c363f;\n  color: #d3d3d3;\n  font-size: 10pt;\n  font-weight: normal;\n  width: calc(100% - 10px);\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  -ms-border-radius: 4px;\n  -o-border-radius: 4px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  -webkit-transition: all 0.15s ease;\n  -moz-transition: all 0.15s ease;\n  -ms-transition: all 0.15s ease;\n  -o-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n}\n#studyListContainer table#tblStudyList thead tr th input.studylist-search::-webkit-input-placeholder {\n  color: #d3d3d3;\n}\n#studyListContainer table#tblStudyList thead tr th input.studylist-search:-moz-placeholder {\n  color: #d3d3d3;\n}\n#studyListContainer table#tblStudyList thead tr th input.studylist-search::-moz-placeholder {\n  color: #d3d3d3;\n}\n#studyListContainer table#tblStudyList thead tr th input.studylist-search:-ms-input-placeholder {\n  color: #d3d3d3;\n}\n#studyListContainer table#tblStudyList thead tr th input.studylist-search.invisible {\n  visibility: hidden;\n}\n#studyListContainer table#tblStudyList thead tr th input.studylist-search:active,\n#studyListContainer table#tblStudyList thead tr th input.studylist-search:hover {\n  background-color: #2c363f;\n}\n#studyListContainer table#tblStudyList thead ::-webkit-datetime-edit-year-field:not([aria-valuenow]),\n#studyListContainer table#tblStudyList thead ::-webkit-datetime-edit-month-field:not([aria-valuenow]),\n#studyListContainer table#tblStudyList thead ::-webkit-datetime-edit-day-field:not([aria-valuenow]) {\n  color: transparent;\n}\n#studyListContainer table#tblStudyList tbody tr {\n  padding: 5px;\n  background-color: #000;\n}\n#studyListContainer table#tblStudyList tbody tr:nth-child(even) {\n  background-color: #151a1f;\n}\nbody.theme-tide #studyListContainer table#tblStudyList tbody tr:nth-child(even) {\n  background-color: #151a1f;\n}\nbody.theme-tigerlily #studyListContainer table#tblStudyList tbody tr:nth-child(even) {\n  background-color: #151a1f;\n}\nbody.theme-crickets #studyListContainer table#tblStudyList tbody tr:nth-child(even) {\n  background-color: #231c1e;\n}\nbody.theme-honeycomb #studyListContainer table#tblStudyList tbody tr:nth-child(even) {\n  background-color: #18161a;\n}\nbody.theme-mint #studyListContainer table#tblStudyList tbody tr:nth-child(even) {\n  background-color: #15191e;\n}\nbody.theme-overcast #studyListContainer table#tblStudyList tbody tr:nth-child(even) {\n  background-color: #15191e;\n}\nbody.theme-quartz #studyListContainer table#tblStudyList tbody tr:nth-child(even) {\n  background-color: #151a1f;\n}\n#studyListContainer table#tblStudyList tbody tr td {\n  height: 40px;\n  line-height: 40px;\n  color: #fff;\n  font-weight: 300;\n  border-top: 1px solid #436270;\n  border-bottom: 1px solid #436270;\n  white-space: nowrap;\n  -webkit-transition: all 0.1s ease;\n  -moz-transition: all 0.1s ease;\n  -ms-transition: all 0.1s ease;\n  -o-transition: all 0.1s ease;\n  transition: all 0.1s ease;\n}\n#studyListContainer table#tblStudyList tbody tr:hover,\n#studyListContainer table#tblStudyList tbody tr:active,\n#studyListContainer table#tblStudyList tbody tr.active {\n  background-color: #2c363f;\n  color: #fff;\n}\n#studyListContainer table#tblStudyList tbody tr:hover td,\n#studyListContainer table#tblStudyList tbody tr:active td,\n#studyListContainer table#tblStudyList tbody tr.active td {\n  border-top: 1px solid #436270;\n  border-bottom: 1px solid #436270;\n  background-color: #2c363f;\n}\n@media only screen and (max-width: 1362px) {\n  #studyListContainer {\n    padding: 0 5%;\n  }\n  #studyListContainer table#tblStudyList thead tr th:first-child,\n  #studyListContainer table#tblStudyList tbody tr th:first-child,\n  #studyListContainer table#tblStudyList thead tr td:first-child,\n  #studyListContainer table#tblStudyList tbody tr td:first-child {\n    padding-left: 5%;\n  }\n  #studyListContainer table#tblStudyList thead tr th:last-child,\n  #studyListContainer table#tblStudyList tbody tr th:last-child,\n  #studyListContainer table#tblStudyList thead tr td:last-child,\n  #studyListContainer table#tblStudyList tbody tr td:last-child {\n    padding-right: 5%;\n  }\n}\n@media only screen and (max-width: 1161px) {\n  #studyListContainer {\n    padding: 0 3%;\n  }\n  #studyListContainer table#tblStudyList thead tr th:first-child,\n  #studyListContainer table#tblStudyList tbody tr th:first-child,\n  #studyListContainer table#tblStudyList thead tr td:first-child,\n  #studyListContainer table#tblStudyList tbody tr td:first-child {\n    padding-left: 3%;\n  }\n  #studyListContainer table#tblStudyList thead tr th:last-child,\n  #studyListContainer table#tblStudyList tbody tr th:last-child,\n  #studyListContainer table#tblStudyList thead tr td:last-child,\n  #studyListContainer table#tblStudyList tbody tr td:last-child {\n    padding-right: 3%;\n  }\n}\n@media only screen and (max-width: 1069px) {\n  .theadBackground {\n    height: 101px;\n  }\n  .studyListToolbar {\n    padding: 0 5px;\n  }\n  #studyListContainer {\n    padding: 0;\n  }\n  #studyListContainer table#tblStudyList thead > tr > th:first-child {\n    padding-left: 5px;\n  }\n  #studyListContainer table#tblStudyList thead > tr > th:last-child {\n    padding-right: 5px;\n  }\n  #studyListContainer table#tblStudyList thead > tr > th input.worklist-search {\n    padding: 10px;\n  }\n  #studyListContainer table#tblStudyList thead > tr > th div.sortingCell {\n    padding: 10px 5px;\n  }\n  #studyListContainer table#tblStudyList thead > tr > th div.sortingCell i {\n    width: auto;\n  }\n  #studyListContainer table#tblStudyList tbody > tr > td:first-child {\n    padding-left: 5px;\n  }\n  #studyListContainer table#tblStudyList tbody > tr > td:last-child {\n    padding-right: 5px;\n  }\n  #studyListContainer .worklistPagination .row {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n@media only screen and (max-width: 1069px) {\n  .studylist-pagination > .row {\n    margin-right: 0;\n  }\n}\n"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"studylistStudy":{"studylistStudy.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_study-list/client/components/studylist/studylistStudy/studylistStudy.html                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.studylistStudy.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.studylistStudy.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/studylist/studylistStudy/template.studylistStudy.js                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("studylistStudy");
Template["studylistStudy"] = new Template("Template.studylistStudy", (function() {
  var view = this;
  return HTML.TR({
    class: function() {
      return [ "studylistStudy noselect ", Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("."), "selected"));
      }, function() {
        return "active";
      }) ];
    }
  }, "\n        ", HTML.TD({
    class: "patientName"
  }, "\n            ", Blaze.View("lookup:formatPN", function() {
    return Spacebars.mustache(view.lookup("formatPN"), view.lookup("patientName"));
  }), "\n        "), "\n        ", HTML.TD({
    class: "patientId"
  }, "\n            ", Blaze.View("lookup:patientId", function() {
    return Spacebars.mustache(view.lookup("patientId"));
  }), "\n        "), "\n        ", HTML.TD({
    class: "accessionNumber"
  }, "\n            ", Blaze.View("lookup:accessionNumber", function() {
    return Spacebars.mustache(view.lookup("accessionNumber"));
  }), "\n        "), "\n        ", HTML.TD({
    class: "studyDate"
  }, "\n            ", Blaze.View("lookup:formatDA", function() {
    return Spacebars.mustache(view.lookup("formatDA"), view.lookup("studyDate"));
  }), "\n        "), "\n        ", HTML.TD({
    class: "modalities"
  }, "\n            ", Blaze.View("lookup:modalities", function() {
    return Spacebars.mustache(view.lookup("modalities"));
  }), "\n        "), "\n        ", HTML.TD({
    class: "studyDescription"
  }, "\n            ", Blaze.View("lookup:studyDescription", function() {
    return Spacebars.mustache(view.lookup("studyDescription"));
  }), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studylistStudy.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/studylist/studylistStudy/studylistStudy.js                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 1);
var Hammer;
module.watch(require("hammerjs"), {
  "default": function (v) {
    Hammer = v;
  }
}, 2);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 3);

// Clear all selected studies
function doClearStudySelections() {
  OHIF.studylist.collections.Studies.update({}, {
    $set: {
      selected: false
    }
  }, {
    multi: true
  });
}

function doSelectRow($studyRow, data) {
  // Mark the current study as selected if it's not marked yet
  if (!data.selected) {
    var filter = {
      studyInstanceUid: data.studyInstanceUid
    };
    var modifiers = {
      $set: {
        selected: true
      }
    };
    OHIF.studylist.collections.Studies.update(filter, modifiers);
  } // Set it as the previously selected row, so the user can use Shift to select from this point on


  OHIF.studylist.$lastSelectedRow = $studyRow;
}

function doSelectSingleRow($studyRow, data) {
  // Clear all selected studies
  doClearStudySelections(); // Add selected row to selection list

  doSelectRow($studyRow, data);
}

function doUnselectRow($studyRow, data) {
  // Find the current studyInstanceUid in the stored list and mark as unselected
  var filter = {
    studyInstanceUid: data.studyInstanceUid
  };
  var modifiers = {
    $set: {
      selected: false
    }
  };
  OHIF.studylist.collections.Studies.update(filter, modifiers);
}

function handleShiftClick($studyRow, data) {
  var study;
  var $previousRow = OHIF.studylist.$lastSelectedRow;

  if ($previousRow && $previousRow.length > 0) {
    study = Blaze.getData($previousRow.get(0));

    if (!study.selected) {
      $previousRow = $(); // undefined

      OHIF.studylist.$lastSelectedRow = $previousRow;
    }
  } // Select all rows in between these two rows


  if ($previousRow.length) {
    var $rowsInBetween;

    if ($previousRow.index() < $studyRow.index()) {
      // The previously selected row is above (lower index) the
      // currently selected row.
      // Fill in the rows upwards from the previously selected row
      $rowsInBetween = $previousRow.nextAll('tr');
    } else if ($previousRow.index() > $studyRow.index()) {
      // The previously selected row is below the currently
      // selected row.
      // Fill in the rows upwards from the previously selected row
      $rowsInBetween = $previousRow.prevAll('tr');
    } else {
      // nothing to do since $previousRow.index() === $studyRow.index()
      // the user is shift-clicking the same row...
      return;
    } // Loop through the rows in between current and previous selected studies


    $rowsInBetween.each(function (index, row) {
      var $row = $(row); // Retrieve the data context through Blaze

      var data = Blaze.getData(row); // If we find one that is already selected, do nothing

      if (data.selected) return; // Set the current study as selected

      doSelectRow($row, data); // When we reach the currently clicked-on $row, stop the loop

      return !$row.is($studyRow);
    });
  } else {
    // Set the current study as selected
    doSelectSingleRow($studyRow, data);
  }
}

function handleCtrlClick($studyRow, data) {
  var handler = data.selected ? doUnselectRow : doSelectRow;
  handler($studyRow, data);
}

Template.studylistStudy.onRendered(function () {
  var instance = Template.instance();
  var data = instance.data;
  var $row = instance.$('tr.studylistStudy').first(); // Enable HammerJS to allow touch support

  var mc = new Hammer.Manager($row.get(0));
  var doubleTapRecognizer = new Hammer.Tap({
    event: 'doubletap',
    taps: 2,
    interval: 500,
    threshold: 30,
    posThreshold: 30
  });
  mc.add(doubleTapRecognizer); // Check if current row has been previously selected

  if (data.selected) {
    doSelectRow($row, data);
  }
});
Template.studylistStudy.events({
  'click tr.studylistStudy': function (event, instance) {
    var $studyRow = $(event.currentTarget);
    var data = instance.data; // Remove the ID so we can directly insert this into our client-side collection

    delete data._id;

    if (event.shiftKey) {
      handleShiftClick($studyRow, data);
    } else if (event.ctrlKey || event.metaKey) {
      handleCtrlClick($studyRow, data);
    } else {
      doSelectSingleRow($studyRow, data);
    }
  },
  'mousedown tr.studylistStudy': function (event, instance) {
    // This event handler is meant to handle middle-click on a study
    if (event.which !== 2) {
      return;
    }

    var middleClickOnStudy = OHIF.studylist.callbacks.middleClickOnStudy;

    if (middleClickOnStudy && typeof middleClickOnStudy === 'function') {
      middleClickOnStudy(instance.data);
    }
  },
  'dblclick tr.studylistStudy, doubletap tr.studylistStudy': function (event, instance) {
    if (event.which !== undefined && event.which !== 1) {
      return;
    }

    var dblClickOnStudy = OHIF.studylist.callbacks.dblClickOnStudy;

    if (dblClickOnStudy && typeof dblClickOnStudy === 'function') {
      dblClickOnStudy(instance.data);
    }
  },
  'contextmenu tr.studylistStudy, press tr.studylistStudy': function (event, instance) {
    var $studyRow = $(event.currentTarget);

    if (!instance.data.selected) {
      doSelectSingleRow($studyRow, instance.data);
    }

    event.preventDefault();
    OHIF.ui.showDropdown(OHIF.studylist.dropdown.getItems(), {
      event: event,
      menuClasses: 'dropdown-menu-left'
    });
    return false;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studylistStudy.styl":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_study-list/client/components/studylist/studylistStudy/studylistStudy.styl                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./studylistStudy.styl.css"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studylistStudy.styl.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/studylist/studylistStudy/studylistStudy.styl.css                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".studylistStudy {\n  cursor: pointer;\n}\n"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"studylistToolbar":{"studylistToolbar.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_study-list/client/components/studylist/studylistToolbar/studylistToolbar.html              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.studylistToolbar.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.studylistToolbar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/studylist/studylistToolbar/template.studylistToolbar.js                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("studylistToolbar");
Template["studylistToolbar"] = new Template("Template.studylistToolbar", (function() {
  var view = this;
  return HTML.DIV({
    class: "studylistToolbar"
  }, "\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("importSupported"));
  }, function() {
    return [ "\n            ", HTML.DIV({
      class: "addNewStudy btn-file"
    }, "\n                ", HTML.LABEL({
      for: "btnImport"
    }, "\n                    ", HTML.I({
      class: "fa fa-plus"
    }), " Import study\n                "), "\n                ", HTML.INPUT({
      id: "btnImport",
      class: "js-import-files",
      type: "file",
      webkitdirectory: "",
      directory: "",
      multiple: ""
    }), "\n            "), "\n        " ];
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studylistToolbar.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/studylist/studylistToolbar/studylistToolbar.js                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 1);
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 2);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 3);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 4);
Template.studylistToolbar.onCreated(function () {
  Meteor.call('importSupported', function (error, result) {
    if (error || !result) {
      Session.set('importSupported', false);
    } else {
      Session.set('importSupported', true);
    }
  });
});
Template.studylistToolbar.events({
  'change .js-import-files': function (event) {
    //  Get selected files located in the client machine
    var selectedFiles = $.map(event.currentTarget.files, function (value) {
      return value;
    });
    OHIF.studylist.importStudies(selectedFiles);
  },
  'click .js-import-files': function (event) {
    // Reset file input
    $(event.currentTarget).val('');
  }
});
Template.studylistToolbar.helpers({
  importSupported: function () {
    var importSupported = Session.get('importSupported');
    return importSupported && OHIF.uiSettings.studyListFunctionsEnabled;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studylistToolbar.styl":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_study-list/client/components/studylist/studylistToolbar/studylistToolbar.styl              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./studylistToolbar.styl.css"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studylistToolbar.styl.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/components/studylist/studylistToolbar/studylistToolbar.styl.css                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".theme-icon-crickets,\n.theme-icon-tide,\n.theme-icon-tigerlily,\n.theme-icon-quartz,\n.theme-icon-overcast,\n.theme-icon-mint,\n.theme-icon-honeycomb {\n  display: inline-block;\n  background: url(\"/packages/ohif_design/assets/theme-icons.png\") no-repeat;\n  overflow: hidden;\n  text-indent: -9999px;\n  text-align: left;\n}\n.theme-icon-crickets {\n  background-position: 0px 0px;\n  width: 64px;\n  height: 56px;\n}\n.theme-icon-tide {\n  background-position: 0px -56px;\n  width: 64px;\n  height: 54px;\n}\n.theme-icon-tigerlily {\n  background-position: 0px -110px;\n  width: 62px;\n  height: 61px;\n}\n.theme-icon-quartz {\n  background-position: 0px -171px;\n  width: 59px;\n  height: 64px;\n}\n.theme-icon-overcast {\n  background-position: 0px -235px;\n  width: 58px;\n  height: 37px;\n}\n.theme-icon-mint {\n  background-position: 0px -272px;\n  width: 57px;\n  height: 61px;\n}\n.theme-icon-honeycomb {\n  background-position: 0px -333px;\n  width: 50px;\n  height: 58px;\n}\n.studylistToolbar .addNewStudy {\n  margin: 0 10px;\n}\n.studylistToolbar .addNewStudy label {\n  font-weight: 400;\n  cursor: pointer;\n}\n.studylistToolbar .addNewStudy label {\n  color: #91b9cd;\n}\nbody.theme-tide .studylistToolbar .addNewStudy label {\n  color: #91b9cd;\n}\nbody.theme-tigerlily .studylistToolbar .addNewStudy label {\n  color: #9ccdf8;\n}\nbody.theme-crickets .studylistToolbar .addNewStudy label {\n  color: #8be7b5;\n}\nbody.theme-honeycomb .studylistToolbar .addNewStudy label {\n  color: #fab797;\n}\nbody.theme-mint .studylistToolbar .addNewStudy label {\n  color: #a7e9b3;\n}\nbody.theme-overcast .studylistToolbar .addNewStudy label {\n  color: #73f2fc;\n}\nbody.theme-quartz .studylistToolbar .addNewStudy label {\n  color: #d7e8fe;\n}\n.studylistToolbar .addNewStudy label * {\n  pointer-events: none;\n}\n.studylistToolbar .addNewStudy label:hover {\n  color: #fff;\n}\nbody.theme-tide .studylistToolbar .addNewStudy label:hover {\n  color: #fff;\n}\nbody.theme-tigerlily .studylistToolbar .addNewStudy label:hover {\n  color: #fff;\n}\nbody.theme-crickets .studylistToolbar .addNewStudy label:hover {\n  color: #fff;\n}\nbody.theme-honeycomb .studylistToolbar .addNewStudy label:hover {\n  color: #fff;\n}\nbody.theme-mint .studylistToolbar .addNewStudy label:hover {\n  color: #fff;\n}\nbody.theme-overcast .studylistToolbar .addNewStudy label:hover {\n  color: #fff;\n}\nbody.theme-quartz .studylistToolbar .addNewStudy label:hover {\n  color: #fff;\n}\n.studylistToolbar .addNewStudy label:active {\n  color: #20a5d6;\n}\nbody.theme-tide .studylistToolbar .addNewStudy label:active {\n  color: #20a5d6;\n}\nbody.theme-tigerlily .studylistToolbar .addNewStudy label:active {\n  color: #fa8947;\n}\nbody.theme-crickets .studylistToolbar .addNewStudy label:active {\n  color: #d4c3c1;\n}\nbody.theme-honeycomb .studylistToolbar .addNewStudy label:active {\n  color: #cda56b;\n}\nbody.theme-mint .studylistToolbar .addNewStudy label:active {\n  color: #31b166;\n}\nbody.theme-overcast .studylistToolbar .addNewStudy label:active {\n  color: #507d80;\n}\nbody.theme-quartz .studylistToolbar .addNewStudy label:active {\n  color: #7858ce;\n}\n.studylistToolbar .addNewStudy input {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"lib":{"exportSelectedStudies.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/lib/exportSelectedStudies.js                                                        //
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
 * Exports all selected studies on the studylist
 * @param event Event that triggered the export
 */
OHIF.studylist.exportSelectedStudies = function (event) {
  var selectedStudies = OHIF.studylist.getSelectedStudies();
  var studiesCount = selectedStudies.length;
  var studyText = studiesCount > 1 ? 'Studies' : 'Study';
  OHIF.ui.showDialog('dialogConfirm', {
    element: event.element,
    title: "Export " + studyText,
    message: "Would you like to export " + studiesCount + " " + studyText.toLowerCase() + "?"
  }).then(function () {
    OHIF.studylist.exportStudies(selectedStudies);
  }).catch(function () {});
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"exportStudies.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/lib/exportStudies.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _this = this;

var JSZip;
module.watch(require("meteor/silentcicero:jszip"), {
  JSZip: function (v) {
    JSZip = v;
  }
}, 0);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 1);

var getNumberOfFilesToExport = function (studiesToExport) {
  var numberOfFilesToExport = 0;
  studiesToExport.forEach(function (study) {
    numberOfFilesToExport += getNumberOfFilesInStudy(study);
  });
  return numberOfFilesToExport;
};

var convertSizeToString = function (size) {
  var measuments = ['B', 'KB', 'MB', 'GB'];
  var totalBytes = size,
      measumentIndex = 0;

  while (totalBytes > 1024) {
    totalBytes /= 1024;
    measumentIndex++;
  }

  return totalBytes.toFixed(2) + " " + measuments[measumentIndex];
};
/**
 * Exports requested studies
 * @param studiesToExport Studies to export
 */


OHIF.studylist.exportStudies = function (studiesToExport) {
  if (studiesToExport.length < 1) {
    return;
  }

  queryStudiesWithProgress(studiesToExport).then(exportQueriedStudiesWithProgress);
};

var exportQueriedStudiesWithProgress = function (studiesToExport) {
  var exportFilesCount = getNumberOfFilesToExport(studiesToExport);
  var exportHandler;
  return OHIF.ui.showDialog('dialogProgress', {
    title: 'Exporting Studies...',
    message: "Exported files: 0 / " + exportFilesCount,
    total: getNumberOfFilesToExport(studiesToExport),
    task: {
      run: function (dialog) {
        exportHandler = exportQueriedStudies(studiesToExport, {
          notify: function (stats) {
            var fileSize = convertSizeToString(stats.totalBytes);
            dialog.update(stats.processed);
            dialog.setMessage("Exported files: " + stats.processed + " / " + stats.total + " (" + fileSize + ")");
          }
        });
        exportHandler.promise.then(function () {
          dialog.done();
        }, function () {
          dialog.setMessage('Failed to export studies');
        });
      }
    }
  }).then(null, function (err) {
    exportHandler.cancel();
  });
};

var exportQueriedStudies = function (studiesToExport, options) {
  var zip = new JSZip(),
      promises = [],
      pendingDownloads = [],
      exportFilesCount = getNumberOfFilesToExport(studiesToExport),
      notify = (options || {}).notify || function () {
    /* noop */
  };

  var cancelDownloads = function () {
    while (pendingDownloads.length) {
      var download = pendingDownloads.pop();
      download.cancel();
    }
  };

  var totalBytes = 0;
  studiesToExport.forEach(function (study) {
    study.seriesList.forEach(function (series) {
      series.instances.forEach(function (instance) {
        if (!instance.wadouri) {
          return;
        }

        var download = downloadDicomFile(instance);
        pendingDownloads.push(download);
        var promise = download.promise.then(function (data) {
          var downloadIndex = pendingDownloads.indexOf(download);
          totalBytes += data && data.size ? data.size : 0;

          if (downloadIndex > -1) {
            pendingDownloads.splice(downloadIndex, 1);
          }

          notify({
            total: exportFilesCount,
            processed: exportFilesCount - pendingDownloads.length,
            totalBytes: totalBytes
          });
          return zipInstance(study, series, instance, zip, data);
        }).catch(function (err) {
          if (!(err instanceof ExportStudyDownloadCanceledError)) {
            OHIF.log.error('Failed to export studies', err);
          }

          cancelDownloads();
          throw err;
        });
        promises.push(promise);
      });
    });
  });
  return {
    cancel: cancelDownloads,
    promise: Promise.all(promises).then(function () {
      var zipContent = zip.generate({
        type: 'blob'
      });
      saveAs(zipContent, 'studies.zip');
    })
  };
};

var downloadDicomFile = function (instance) {
  var xhr, promiseReject;
  var promise = new Promise(function (resolve, reject) {
    promiseReject = reject;
    xhr = new XMLHttpRequest();
    xhr.open('GET', instance.wadouri, true);
    xhr.responseType = 'blob';

    xhr.onload = function () {
      if (xhr.readyState === 4 && xhr.status !== 200) {
        return reject(new Error("File not downloaded: " + instance.wadouri));
      }

      resolve(xhr.response);
    };

    xhr.onerror = function () {
      reject(new Error("File not downloaded: " + instance.wadouri));
    };

    xhr.send();
  });
  return {
    promise: promise,
    cancel: function () {
      xhr.abort();
      promiseReject(new ExportStudyDownloadCanceledError('Download canceled'));
    }
  };
};

var zipInstance = function (study, series, instance, zip, data) {
  var fileReader = new FileReader(),
      blobFile = new Blob([data], {
    type: 'application/dicom'
  }),
      zipFolder = zip.folder(study.studyInstanceUid).folder(series.seriesInstanceUid);
  var promise = new Promise(function (resolve, reject) {
    fileReader.onload = function () {
      try {
        zipFolder.file(instance.sopInstanceUid + ".dcm", fileReader.result, {
          binary: true
        });
        resolve();
      } catch (err) {
        reject(err);
      }
    };
  });
  fileReader.readAsArrayBuffer(blobFile);
  return promise;
};

var ExportStudyDownloadCanceledError = function (message) {
  _this.name = 'ExportStudyDownloadCanceledError';
  _this.message = message || 'Download canceled';
  _this.stack = new Error().stack;
};

ExportStudyDownloadCanceledError.prototype = Object.create(Error.prototype);
ExportStudyDownloadCanceledError.prototype.constructor = ExportStudyDownloadCanceledError;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getSelectedStudies.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/lib/getSelectedStudies.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

OHIF.studylist.getSelectedStudies = function () {
  return OHIF.studylist.collections.Studies.find({
    selected: true
  }, {
    sort: {
      studyDate: 1
    }
  }).fetch() || [];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getStudyPriors.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/lib/getStudyPriors.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getStudyPriors: function () {
    return getStudyPriors;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
module.watch(require("meteor/ohif:viewerbase"));
var _OHIF$viewerbase$meta = OHIF.viewerbase.metadata,
    StudyMetadata = _OHIF$viewerbase$meta.StudyMetadata,
    StudySummary = _OHIF$viewerbase$meta.StudySummary;
var PATIENT_ID = 'x00100020';
var STUDY_DATE = 'x00080020';
/**
 * Get the priors of a given study
 * @param  {StudyMetadata|StudySummary} study An instance of StudyMetadata|StudySummary class to get it's priors
 * @return {Array}       An Array of StudySummary objects representing the study priors for the given study or an empty array if none
 */

var getStudyPriors = function (study) {
  if (!(study instanceof StudyMetadata) && !(study instanceof StudySummary)) {
    throw new OHIF.viewerbase.OHIFError('getStudyPriors study must be an instance of StudySummary or StudyMetadata');
  }

  if (study instanceof StudyMetadata) {
    study = study.getFirstInstance();
  }

  var priorStudies = [];
  var patientID = study.getTagValue(PATIENT_ID); // PatientID

  var studyDate = study.getTagValue(STUDY_DATE); // StudyDate
  // Find prior studies in global Studies Minimongo collection

  var cursor = OHIF.studylist.collections.Studies.find({
    patientId: patientID,
    studyDate: {
      $lt: studyDate
    }
  }, {
    sort: {
      studyDate: 'desc'
    }
  }); // Create an OHIFStudySummary object for each prior study found

  cursor.forEach(function (study) {
    var summary = new OHIF.studies.classes.OHIFStudySummary(study, null, study.studyInstanceUid);
    priorStudies.push(summary);
  });
  return priorStudies;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getStudyPriorsMap.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/lib/getStudyPriorsMap.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getStudyPriorsMap: function () {
    return getStudyPriorsMap;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
module.watch(require("meteor/ohif:viewerbase"));
var getStudyPriors;
module.watch(require("./getStudyPriors"), {
  getStudyPriors: function (v) {
    getStudyPriors = v;
  }
}, 1);
var _OHIF$viewerbase$meta = OHIF.viewerbase.metadata,
    StudyMetadata = _OHIF$viewerbase$meta.StudyMetadata,
    StudySummary = _OHIF$viewerbase$meta.StudySummary;
/**
 * Create a Map of study priors where the key of each entry is the StudyInstanceUID and its value is an array of StudySummary instances.
 * @returns {Map} The study map.
 */

var getStudyPriorsMap = function (studies) {
  var priorsMap = new Map();

  if (studies instanceof Array) {
    studies.forEach(function (study) {
      if (study instanceof StudyMetadata || study instanceof StudySummary) {
        var studyObjectID = study.getObjectID();

        if (studyObjectID) {
          var priors = getStudyPriors(study);
          priorsMap.set(studyObjectID, priors);
        }
      }
    });
  }

  return priorsMap;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"importStudies.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/lib/importStudies.js                                                                //
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

/**
 * Imports selected studies from local into studylist
 * @param filesToImport Files located in the client machine to import
 */
OHIF.studylist.importStudies = function (filesToImport) {
  var numberOfFiles = filesToImport && filesToImport.length;

  if (!numberOfFiles) {
    return new Promise(function (resolve, reject) {
      return reject('No files to upload');
    });
  }

  var uploadMessage = function (_ref) {
    var processed = _ref.processed,
        total = _ref.total;
    return "Uploaded files: " + processed + " / " + total;
  };

  var taskRunHandler = function (dialog) {
    var uploadErrorHandler = function (fileNames) {
      var names = fileNames.join('; ');
      dialog.setMessage("Failed to upload files: " + names);
    };

    var uploadSuccessHandler = function (studiesToImport) {
      importStudiesInternal(studiesToImport, dialog).then(function () {
        dialog.done();
      }).catch(function (errorMessage) {
        dialog.setMessage(errorMessage);
      });
    };

    uploadFiles(filesToImport, dialog).then(uploadSuccessHandler).catch(uploadErrorHandler);
  };

  return OHIF.ui.showDialog('dialogProgress', {
    title: 'Importing Studies...',
    message: uploadMessage,
    total: numberOfFiles,
    task: {
      run: taskRunHandler
    }
  });
};

var uploadFiles = function (files, dialog) {
  var processed = 0;
  var promise = new Promise(function (resolve, reject) {
    var promises = []; //  Upload files to the server

    files.forEach(function (file) {
      var filePromise = uploadFile(file, dialog);
      filePromise.then(function () {
        return dialog.update(++processed);
      });
      promises.push(filePromise);
    });
    Promise.all(promises).then(resolve).catch(reject);
  });
  return promise;
};

var uploadFile = function (file) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/uploadFilesToImport', true);
    xhr.setRequestHeader('filename', file.name);

    xhr.onload = function () {
      if (xhr.readyState === 4 && xhr.status !== 200) {
        // Failed to upload the file
        reject(file.name);
      } else {
        // Success uploading the file
        resolve(xhr.responseText);
      }
    }; // Failed to upload the file


    xhr.onerror = function () {
      return reject(file.name);
    };

    xhr.send(file);
  });
};

var importStudiesInternal = function (studiesToImport, dialog) {
  var numberOfStudies = studiesToImport && studiesToImport.length;

  if (!numberOfStudies) {
    return new Promise(function (resolve, reject) {
      return reject('No studies to import');
    });
  }

  var processed = 0;
  dialog.update(processed);
  dialog.setTotal(numberOfStudies);
  dialog.setMessage(function (_ref2) {
    var processed = _ref2.processed,
        total = _ref2.total;
    return "Imported: " + processed + " / " + total;
  });
  return new Promise(function (resolve, reject) {
    //  Create/Insert a new study import status item
    Meteor.call('createStudyImportStatus', function (error, studyImportStatusId) {
      if (error) {
        return reject(error.message);
      } //  Handle when StudyImportStatus collection is updated


      OHIF.studylist.collections.StudyImportStatus.find(studyImportStatusId).observe({
        changed: function (studyImportStatus) {
          var numberOfStudiesImported = studyImportStatus.numberOfStudiesImported,
              numberOfStudiesFailed = studyImportStatus.numberOfStudiesFailed;
          dialog.update(numberOfStudiesImported);

          if (numberOfStudiesImported === numberOfStudies) {
            //  The entire import operation is completed, so remove the study import status item
            Meteor.call('removeStudyImportStatus', studyImportStatus._id); // Show number of failed files if there is at least one failed file

            if (studyImportStatus.numberOfStudiesFailed > 0) {
              var failed = numberOfStudiesFailed;
              reject("Failed to import " + failed + " of " + numberOfStudies + " studies");
            } else {
              resolve();
            }
          }
        }
      }); //  Import studies with study import status id to get callbacks

      Meteor.call('importStudies', studiesToImport, studyImportStatusId);
    });
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/lib/index.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./exportSelectedStudies.js"));
module.watch(require("./exportStudies.js"));
module.watch(require("./getSelectedStudies.js"));
module.watch(require("./importStudies.js"));
module.watch(require("./queryStudies.js"));
module.watch(require("./retrieveStudiesMetadata.js"));
module.watch(require("./retrieveStudyMetadata.js"));
module.watch(require("./studylist.js"));
module.watch(require("./viewSeriesDetails.js"));
module.watch(require("./viewStudies.js"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"queryStudies.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/lib/queryStudies.js                                                                 //
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
 * Queries requested studies to get their metadata from PACS
 * @param studiesToQuery Studies to query
 */
queryStudies = function (studiesToQuery, options) {
  var studiesQueried = 0;
  var numberOfStudiesToQuery = studiesToQuery.length;

  var notify = (options || {}).notify || function () {
    /* noop */
  };

  var promises = [];
  studiesToQuery.forEach(function (studyToQuery) {
    var promise = OHIF.studies.retrieveStudyMetadata(studyToQuery.studyInstanceUid);
    promise.then(function (study) {
      studiesQueried++;
      notify({
        total: numberOfStudiesToQuery,
        processed: studiesQueried
      });
    });
    promises.push(promise);
  });
  return Promise.all(promises);
};

queryStudiesWithProgress = function (studiesToQuery) {
  return OHIF.ui.showDialog('dialogProgress', {
    title: 'Querying Studies...',
    message: "Queried: 0 / " + studiesToQuery.length,
    total: studiesToQuery.length,
    task: {
      run: function (dialog) {
        queryStudies(studiesToQuery, {
          notify: function (stats) {
            dialog.update(stats.processed);
            dialog.setMessage("Queried: " + stats.processed + " / " + stats.total);
          }
        }).then(function (studiesQueried) {
          dialog.done(studiesQueried);
        }, function () {
          dialog.cancel();
        }).catch(function (error) {
          OHIF.log.error('There was an error retrieving all studies metadeta.');
          OHIF.log.error(error.stack);
          OHIF.log.trace();
        });
      }
    }
  });
};
/**
 * Returns the total number of dicom files in a study
 * @param study Queried study (includes metadata)
 * @returns {number}
 */


getNumberOfFilesInStudy = function (study) {
  var numberOFFilesToExport = 0;
  study.seriesList.forEach(function (series) {
    series.instances.forEach(function (instance) {
      if (instance.wadouri) {
        numberOFFilesToExport++;
      }
    });
  });
  return numberOFFilesToExport;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"retrieveStudiesMetadata.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/lib/retrieveStudiesMetadata.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
var note = 'OHIF.studylist.retrieveStudiesMetadata is deprecated.';
var instructions = 'Please use OHIF.studies.retrieveStudiesMetadata instead.';
/**
 * @deprecated Please use OHIF.studies.retrieveStudiesMetadata instead
 */

OHIF.studylist.retrieveStudiesMetadata = function () {
  OHIF.log.warn(note + "\n" + instructions);
  OHIF.studies.retrieveStudiesMetadata.apply(this, arguments);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"retrieveStudyMetadata.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/lib/retrieveStudyMetadata.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
var note = 'OHIF.studylist.retrieveStudyMetadata is deprecated.';
var instructions = 'Please use OHIF.studies.retrieveStudyMetadata instead.';
/**
 * @deprecated Please use OHIF.studies.retrieveStudyMetadata instead
 */

OHIF.studylist.retrieveStudyMetadata = function () {
  OHIF.log.warn(note + "\n" + instructions);
  OHIF.studies.retrieveStudyMetadata.apply(this, arguments);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studylist.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/lib/studylist.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
var Router;
module.watch(require("meteor/iron:router"), {
  Router: function (v) {
    Router = v;
  }
}, 1);
var getStudyPriors;
module.watch(require("./getStudyPriors"), {
  getStudyPriors: function (v) {
    getStudyPriors = v;
  }
}, 2);
var getStudyPriorsMap;
module.watch(require("./getStudyPriorsMap"), {
  getStudyPriorsMap: function (v) {
    getStudyPriorsMap = v;
  }
}, 3);
OHIF.studylist.functions = {
  getStudyPriors: getStudyPriors,
  getStudyPriorsMap: getStudyPriorsMap
}; // Add deprecation notice to the OHIF.studylist.classes namespace

var note = 'OHIF.studylist.classes is deprecated.';
var instructions = 'Please use OHIF.studies.classes instead.';
Object.defineProperty(OHIF.studylist, 'classes', {
  get: function () {
    OHIF.log.warn(note + "\n" + instructions);
    return OHIF.studies.classes;
  }
});

var dblClickOnStudy = function (data) {
  Router.go('viewerStudies', {
    studyInstanceUids: data.studyInstanceUid
  });
};

OHIF.studylist.callbacks.dblClickOnStudy = dblClickOnStudy;
OHIF.studylist.callbacks.middleClickOnStudy = dblClickOnStudy;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"viewSeriesDetails.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/lib/viewSeriesDetails.js                                                            //
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
 * Display series details of study in a modal
 */
OHIF.studylist.viewSeriesDetails = function () {
  var selectedStudies = OHIF.studylist.getSelectedStudies();
  if (!selectedStudies) return;
  OHIF.ui.showDialog('seriesDetailsModal', {
    selectedStudies: selectedStudies
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"viewStudies.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_study-list/client/lib/viewStudies.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
var Router;
module.watch(require("meteor/iron:router"), {
  Router: function (v) {
    Router = v;
  }
}, 1);

/**
 * Loads multiple unassociated studies in the Viewer
 */
OHIF.studylist.viewStudies = function () {
  OHIF.log.info('viewStudies');
  var selectedStudies = OHIF.studylist.getSelectedStudies();

  if (!selectedStudies || !selectedStudies.length) {
    return;
  }

  var studyInstanceUids = selectedStudies.map(function (study) {
    return study.studyInstanceUid;
  }).join(';');
  Router.go('viewerStudies', {
    studyInstanceUids: studyInstanceUids
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"node_modules":{"hammerjs":{"package.json":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_study-list/node_modules/hammerjs/package.json                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.name = "hammerjs";
exports.version = "2.0.8";
exports.main = "hammer.js";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hammer.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_study-list/node_modules/hammerjs/hammer.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (typeof define === 'function' && define.amd) {
    define(function() {
        return Hammer;
    });
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".styl"
  ]
});
require("/node_modules/meteor/ohif:study-list/both/index.js");
require("/node_modules/meteor/ohif:study-list/client/index.js");

/* Exports */
Package._define("ohif:study-list");

})();
