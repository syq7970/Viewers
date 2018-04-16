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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Collection2 = Package['aldeed:collection2'].Collection2;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Mongo = Package.mongo.Mongo;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:servers":{"both":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/both/index.js                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.watch(require("./base.js"));
module.watch(require("./collections"));
module.watch(require("./lib"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"base.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/both/base.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
OHIF.servers = {
  collections: {}
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"collections":{"currentServer.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/both/collections/currentServer.js                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  CurrentServer: function () {
    return CurrentServer;
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
// CurrentServer is a single document collection to describe which of the Servers is being used
var CurrentServer = new Mongo.Collection('currentServer');
CurrentServer._debugName = 'CurrentServer';
OHIF.servers.collections.currentServer = CurrentServer;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/both/collections/index.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  CurrentServer: function () {
    return CurrentServer;
  },
  Servers: function () {
    return Servers;
  }
});
var CurrentServer;
module.watch(require("./currentServer.js"), {
  CurrentServer: function (v) {
    CurrentServer = v;
  }
}, 0);
var Servers;
module.watch(require("./servers.js"), {
  Servers: function (v) {
    Servers = v;
  }
}, 1);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"servers.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/both/collections/servers.js                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  Servers: function () {
    return Servers;
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
// import { Servers as ServerSchema } from 'meteor/ohif:servers/both/schema/servers.js';
// Servers describe the DICOM servers configurations
var Servers = new Mongo.Collection('servers'); // TODO: Make the Schema match what we are currently sticking into the Collection
//Servers.attachSchema(ServerSchema);

Servers._debugName = 'Servers';
OHIF.servers.collections.servers = Servers;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"getCurrentServer.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/both/lib/getCurrentServer.js                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
var Servers, CurrentServer;
module.watch(require("meteor/ohif:servers/both/collections"), {
  Servers: function (v) {
    Servers = v;
  },
  CurrentServer: function (v) {
    CurrentServer = v;
  }
}, 1);

/**
 * Retrieves the current server configuration used to retrieve studies
 */
OHIF.servers.getCurrentServer = function () {
  var currentServer = CurrentServer.findOne();

  if (!currentServer) {
    return;
  }

  var serverConfiguration = Servers.findOne({
    _id: currentServer.serverId
  });
  return serverConfiguration;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/both/lib/index.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.watch(require("./getCurrentServer.js"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"schema":{"servers.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/both/schema/servers.js                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  DICOMWebRequestOptions: function () {
    return DICOMWebRequestOptions;
  },
  DICOMWebServer: function () {
    return DICOMWebServer;
  },
  DIMSEPeer: function () {
    return DIMSEPeer;
  },
  DIMSEServer: function () {
    return DIMSEServer;
  },
  UISettings: function () {
    return UISettings;
  },
  PrefetchSchema: function () {
    return PrefetchSchema;
  },
  MouseButtonToolSchema: function () {
    return MouseButtonToolSchema;
  },
  PublicServerConfig: function () {
    return PublicServerConfig;
  },
  Servers: function () {
    return Servers;
  },
  ServerConfiguration: function () {
    return ServerConfiguration;
  }
});
var SimpleSchema;
module.watch(require("meteor/aldeed:simple-schema"), {
  SimpleSchema: function (v) {
    SimpleSchema = v;
  }
}, 0);
var serverNameDefinitions = {
  type: String,
  label: 'Server Name',
  max: 100
};
var serverTypeDefinitions = {
  type: String,
  label: 'Server Type',
  allowedValues: ['dicomWeb', 'dimse'],
  valuesLabels: ['DICOM Web', 'DIMSE'],
  optional: true
};
var wadoUriRootDefinitions = {
  type: String,
  label: 'WADO URI root',
  max: 1000
};
var availableMouseButtonTools = ['wwwc', 'zoom', 'pan', 'stackScroll'];
var DICOMWebRequestOptions = new SimpleSchema({
  auth: {
    type: String,
    label: 'Authentication',
    defaultValue: 'orthanc:orthanc',
    optional: true
  },
  logRequests: {
    type: Boolean,
    defaultValue: true,
    label: 'Requests'
  },
  logResponses: {
    type: Boolean,
    defaultValue: false,
    label: 'Responses'
  },
  logTiming: {
    type: Boolean,
    defaultValue: true,
    label: 'Timing'
  }
});
var DICOMWebServer = new SimpleSchema({
  name: serverNameDefinitions,
  type: serverTypeDefinitions,
  wadoUriRoot: wadoUriRootDefinitions,
  wadoRoot: {
    type: String,
    label: 'WADO root',
    max: 1000
  },
  imageRendering: {
    type: String,
    label: 'Image rendering',
    allowedValues: ['wadouri', 'orthanc'],
    valuesLabels: ['WADO URI', 'ORTHANC']
  },
  qidoRoot: {
    type: String,
    label: 'QIDO root',
    max: 1000
  },
  qidoSupportsIncludeField: {
    type: Boolean,
    label: 'QIDO supports including fields',
    defaultValue: false
  },
  requestOptions: {
    type: DICOMWebRequestOptions,
    label: 'Request Options'
  }
});
var DIMSEPeer = new SimpleSchema({
  aeTitle: {
    type: String,
    label: 'AE Title'
  },
  hostAE: {
    type: String,
    label: 'AE Host',
    optional: true
  },
  host: {
    type: String,
    label: 'Host Domain/IP',
    regEx: SimpleSchema.RegEx.WeakDomain
  },
  port: {
    type: Number,
    label: 'Port',
    min: 1,
    defaultValue: 11112,
    max: 65535
  },
  "default": {
    type: Boolean,
    label: 'Default',
    defaultValue: false
  },
  server: {
    type: Boolean,
    label: 'Server',
    defaultValue: false
  },
  supportsInstanceRetrievalByStudyUid: {
    type: Boolean,
    label: 'Supports instance retrieval by StudyUid',
    defaultValue: true
  }
});
var DIMSEServer = new SimpleSchema({
  name: serverNameDefinitions,
  type: serverTypeDefinitions,
  wadoUriRoot: wadoUriRootDefinitions,
  requestOptions: {
    type: DICOMWebRequestOptions,
    label: 'Request Options'
  },
  peers: {
    type: [DIMSEPeer],
    label: 'Peer List',
    minCount: 1
  }
});
var UISettings = new SimpleSchema({
  studyListFunctionsEnabled: {
    type: Boolean,
    label: 'Study List Functions Enabled?',
    defaultValue: true
  },
  leftSidebarOpen: {
    type: Boolean,
    label: 'Left sidebar open by default?',
    defaultValue: false
  },
  leftSidebarDragAndDrop: {
    type: Boolean,
    label: 'Left sidebar allows thumbnail drag and drop. If false, images will be loaded on single click.',
    defaultValue: true
  },
  displaySetNavigationLoopOverSeries: {
    type: Boolean,
    label: 'The UP/DOWN display set navigation buttons will start over when reach the last display set in viewport?',
    defaultValue: true
  },
  displaySetNavigationMultipleViewports: {
    type: Boolean,
    label: 'The UP/DOWN display set navigation buttons will iterate over all the viewports at once?',
    defaultValue: false
  },
  displayEchoUltrasoundWorkflow: {
    type: Boolean,
    label: 'Enable cine dialog enhancements for multiframe images.',
    defaultValue: false
  },
  autoPositionMeasurementsTextCallOuts: {
    type: String,
    label: 'Auto position text call-outs for measurements when creating them.',
    defaultValue: 'TRBL'
  },
  studyListDateFilterNumDays: {
    type: Number,
    label: 'Number of days to be used on Study List date filter',
    min: 1
  },
  showStackLoadingProgressBar: {
    type: Boolean,
    label: 'Show a progress bar closest to the thumbnail showing how much the stack has loaded',
    defaultValue: true
  },
  cornerstoneRenderer: {
    type: String,
    label: 'Cornerstone default image renderer',
    defaultValue: 'webgl'
  },
  sortSeriesByIncomingOrder: {
    type: Boolean,
    label: 'Define if the series\' images shall be sorted by incoming order. Sort by Instance Number by default.',
    defaultValue: false
  },
  useMiddleSeriesInstanceAsThumbnail: {
    type: Boolean,
    label: 'Define if the middle instance of a series will be used as thumbnail. If not, the first instance will be used.',
    defaultValue: true
  }
});
var PrefetchSchema = new SimpleSchema({
  order: {
    type: String,
    label: 'Prefetch Order',
    allowedValues: ['topdown', 'downward', 'closest'],
    optional: false
  },
  displaySetCount: {
    type: Number,
    label: 'Display Set Count',
    min: 1,
    defaultValue: 1
  }
});
var MouseButtonToolSchema = new SimpleSchema({
  left: {
    type: String,
    label: 'Left Mouse Button',
    allowedValues: availableMouseButtonTools,
    optional: true
  },
  right: {
    type: String,
    label: 'Right Mouse Button',
    allowedValues: availableMouseButtonTools,
    optional: true
  },
  middle: {
    type: String,
    label: 'Middle Mouse Button',
    allowedValues: availableMouseButtonTools,
    optional: true
  }
});
var PublicServerConfig = new SimpleSchema({
  verifyEmail: {
    type: Boolean,
    label: 'Verify Email',
    defaultValue: false
  },
  demoUserEnabled: {
    type: Boolean,
    label: 'Creates demo user on startup and show TestDrive button',
    defaultValue: true
  },
  ui: {
    type: UISettings,
    label: 'UI Settings'
  },
  prefetch: {
    type: PrefetchSchema,
    label: 'Prefetch settings'
  },
  defaultMouseButtonTools: {
    type: MouseButtonToolSchema,
    label: 'Default Mouse Button Tools'
  }
});
var Servers = new SimpleSchema({
  dicomWeb: {
    type: [DICOMWebServer],
    label: 'DICOMWeb Servers',
    optional: true
  },
  dimse: {
    type: [DIMSEServer],
    label: 'DIMSE Servers',
    optional: true
  }
});
var ServerConfiguration = new SimpleSchema({
  servers: {
    type: Servers,
    label: 'Servers'
  },
  defaultServiceType: {
    type: String,
    label: 'Default Service Type',
    defaultValue: 'dicomWeb'
  },
  dropCollections: {
    type: Boolean,
    label: 'Drop database collections',
    defaultValue: false
  },
  "public": {
    type: PublicServerConfig,
    label: 'Public Server Configuration'
  },
  origin: {
    type: String,
    label: 'Origin',
    optional: true
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/index.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.watch(require("./collections"));
module.watch(require("./components"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"collections":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/collections/index.js                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.watch(require("./subscriptions.js"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"subscriptions.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/collections/subscriptions.js                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
Meteor.subscribe('servers');
Meteor.subscribe('currentServer');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"components":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/components/index.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.watch(require("./serverInformation"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"serverInformation":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/components/serverInformation/index.js                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.watch(require("./serverInformationDicomWeb/serverInformationDicomWeb.html"));
module.watch(require("./serverInformationDicomWeb/serverInformationDicomWeb.js"));
module.watch(require("./serverInformationDimse/serverInformationDimse.html"));
module.watch(require("./serverInformationDimse/serverInformationDimse.js"));
module.watch(require("./serverInformationForm/serverInformationForm.html"));
module.watch(require("./serverInformationForm/serverInformationForm.js"));
module.watch(require("./serverInformationList/serverInformationList.html"));
module.watch(require("./serverInformationList/serverInformationList.js"));
module.watch(require("./serverInformationModal/serverInformationModal.html"));
module.watch(require("./serverInformationModal/serverInformationModal.styl"));
module.watch(require("./serverInformationModal/serverInformationModal.js"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"serverInformationDicomWeb":{"serverInformationDicomWeb.html":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// node_modules/meteor/ohif_servers/client/components/serverInformation/serverInformationDicomWeb/serverInformationDi //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.watch(require("./template.serverInformationDicomWeb.js"), {
  "*": module.makeNsSetter(true)
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.serverInformationDicomWeb.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/components/serverInformation/serverInformationDicomWeb/template.serverInformationDico //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.__checkName("serverInformationDicomWeb");
Template["serverInformationDicomWeb"] = new Template("Template.serverInformationDicomWeb", (function() {
  var view = this;
  return [ HTML.DIV({
    class: "row"
  }, "\n        ", HTML.DIV({
    class: "col-lg-6"
  }, "\n            ", Blaze._TemplateWith(function() {
    return {
      labelClass: Spacebars.call("form-group"),
      key: Spacebars.call("wadoUriRoot")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("inputText"));
  }), "\n        "), "\n        ", HTML.DIV({
    class: "col-lg-6"
  }, "\n            ", Blaze._TemplateWith(function() {
    return {
      labelClass: Spacebars.call("form-group"),
      key: Spacebars.call("wadoRoot")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("inputText"));
  }), "\n        "), "\n        ", HTML.DIV({
    class: "col-lg-6"
  }, "\n            ", Blaze._TemplateWith(function() {
    return {
      labelClass: Spacebars.call("form-group"),
      key: Spacebars.call("imageRendering"),
      hideSearch: Spacebars.call(true),
      options: Spacebars.call(Spacebars.dataMustache(view.lookup("clone"), Spacebars.kw({
        placeholder: "Select an option"
      })))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("inputSelect"));
  }), "\n        "), "\n        ", HTML.DIV({
    class: "col-lg-6"
  }, "\n            ", Blaze._TemplateWith(function() {
    return {
      labelClass: Spacebars.call("form-group"),
      key: Spacebars.call("qidoRoot")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("inputText"));
  }), "\n        "), "\n        ", HTML.DIV({
    class: "col-lg-6"
  }, "\n            ", HTML.Raw("<strong>QIDO options</strong>"), "\n            ", HTML.DIV({
    class: "form-group"
  }, "\n                ", HTML.DIV({
    class: "form-control"
  }, "\n                    ", HTML.DIV({
    class: "checkbox"
  }, "\n                        ", Blaze._TemplateWith(function() {
    return {
      key: Spacebars.call("qidoSupportsIncludeField")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("inputCheckbox"));
  }), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    "), HTML.Raw("\n    <hr>\n    <h4>Request options</h4>\n    "), Blaze._TemplateWith(function() {
    return {
      class: Spacebars.call("row"),
      key: Spacebars.call("requestOptions")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("group"), function() {
      return [ "\n        ", HTML.DIV({
        class: "col-lg-6"
      }, "\n            ", Blaze._TemplateWith(function() {
        return {
          labelClass: Spacebars.call("form-group"),
          key: Spacebars.call("auth")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputText"));
      }), "\n        "), "\n        ", HTML.DIV({
        class: "col-lg-6"
      }, "\n            ", HTML.STRONG("Logging options"), "\n            ", HTML.DIV({
        class: "form-group"
      }, "\n                ", HTML.DIV({
        class: "form-control clearfix"
      }, "\n                    ", HTML.DIV({
        class: "checkbox pull-left"
      }, "\n                        ", Blaze._TemplateWith(function() {
        return {
          key: Spacebars.call("logRequests")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputCheckbox"));
      }), "\n                    "), "\n                    ", HTML.DIV({
        class: "checkbox pull-left"
      }, "\n                        ", Blaze._TemplateWith(function() {
        return {
          key: Spacebars.call("logResponses")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputCheckbox"));
      }), "\n                    "), "\n                    ", HTML.DIV({
        class: "checkbox pull-left"
      }, "\n                        ", Blaze._TemplateWith(function() {
        return {
          key: Spacebars.call("logTiming")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputCheckbox"));
      }), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    " ];
    });
  }) ];
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"serverInformationDicomWeb.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/components/serverInformation/serverInformationDicomWeb/serverInformationDicomWeb.js   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
Template.serverInformationDicomWeb.onRendered(function () {
  var instance = Template.instance();
  instance.autorun(function () {
    var mode = instance.data.mode.get();

    if (mode === 'edit') {
      var data = instance.data.currentItem.get();
      instance.data.form.value(data);
    }
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"serverInformationDimse":{"serverInformationDimse.html":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// node_modules/meteor/ohif_servers/client/components/serverInformation/serverInformationDimse/serverInformationDimse //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.watch(require("./template.serverInformationDimse.js"), {
  "*": module.makeNsSetter(true)
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.serverInformationDimse.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/components/serverInformation/serverInformationDimse/template.serverInformationDimse.j //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.__checkName("serverInformationDimse");
Template["serverInformationDimse"] = new Template("Template.serverInformationDimse", (function() {
  var view = this;
  return [ HTML.DIV({
    class: "row"
  }, "\n        ", HTML.DIV({
    class: "col-lg-6"
  }, "\n            ", Blaze._TemplateWith(function() {
    return {
      labelClass: Spacebars.call("form-group"),
      key: Spacebars.call("wadoUriRoot")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("inputText"));
  }), "\n        "), "\n    "), "\n    ", HTML.DIV({
    class: "panel panel-default panel-body"
  }, "\n        ", HTML.DIV({
    class: "clearfix"
  }, "\n            ", HTML.Raw('<h4 class="pull-left">Peer List</h4>'), "\n            ", Blaze._TemplateWith(function() {
    return {
      class: Spacebars.call("btn btn-primary pull-right"),
      action: Spacebars.call("newPeer"),
      params: Spacebars.call(view.lookup("peer"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("button"), function() {
      return "New peer";
    });
  }), "\n        "), "\n        ", HTML.Raw("<hr>"), "\n        ", Blaze._TemplateWith(function() {
    return {
      class: Spacebars.call("row"),
      key: Spacebars.call("peers"),
      arrayValues: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("group"), function() {
      return [ "\n            ", Blaze.Each(function() {
        return {
          _sequence: Spacebars.call(Spacebars.dot(view.lookup("instance"), "peers", "get")),
          _variable: "peer"
        };
      }, function() {
        return [ "\n                ", Blaze._TemplateWith(function() {
          return {
            class: Spacebars.call("col-lg-6")
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("group"), function() {
            return [ "\n                    ", HTML.DIV({
              class: "panel panel-default panel-body"
            }, "\n                        ", HTML.DIV({
              class: "row"
            }, "\n                            ", HTML.DIV({
              class: "col-lg-6"
            }, "\n                                ", Blaze._TemplateWith(function() {
              return {
                class: Spacebars.call("form-control"),
                key: Spacebars.call("aeTitle")
              };
            }, function() {
              return Spacebars.include(view.lookupTemplate("inputText"));
            }), "\n                            "), "\n                            ", HTML.DIV({
              class: "col-lg-6"
            }, "\n                                ", Blaze._TemplateWith(function() {
              return {
                class: Spacebars.call("form-control"),
                key: Spacebars.call("hostAE")
              };
            }, function() {
              return Spacebars.include(view.lookupTemplate("inputText"));
            }), "\n                            "), "\n                            ", HTML.DIV({
              class: "col-lg-6"
            }, "\n                                ", Blaze._TemplateWith(function() {
              return {
                class: Spacebars.call("form-control"),
                key: Spacebars.call("host")
              };
            }, function() {
              return Spacebars.include(view.lookupTemplate("inputText"));
            }), "\n                            "), "\n                            ", HTML.DIV({
              class: "col-lg-6"
            }, "\n                                ", Blaze._TemplateWith(function() {
              return {
                class: Spacebars.call("form-control"),
                key: Spacebars.call("port")
              };
            }, function() {
              return Spacebars.include(view.lookupTemplate("inputText"));
            }), "\n                            "), "\n                            ", HTML.DIV({
              class: "col-lg-12"
            }, "\n                                ", HTML.STRONG("Settings"), "\n                                ", HTML.DIV({
              class: "form-group"
            }, "\n                                    ", HTML.DIV({
              class: "form-control height-auto clearfix"
            }, "\n                                        ", HTML.DIV({
              class: "checkbox pull-left"
            }, "\n                                            ", Blaze._TemplateWith(function() {
              return {
                key: Spacebars.call("default")
              };
            }, function() {
              return Spacebars.include(view.lookupTemplate("inputCheckbox"));
            }), "\n                                        "), "\n                                        ", HTML.DIV({
              class: "checkbox pull-left"
            }, "\n                                            ", Blaze._TemplateWith(function() {
              return {
                key: Spacebars.call("server")
              };
            }, function() {
              return Spacebars.include(view.lookupTemplate("inputCheckbox"));
            }), "\n                                        "), "\n                                        ", HTML.DIV({
              class: "checkbox pull-left"
            }, "\n                                            ", Blaze._TemplateWith(function() {
              return {
                key: Spacebars.call("supportsInstanceRetrievalByStudyUid")
              };
            }, function() {
              return Spacebars.include(view.lookupTemplate("inputCheckbox"));
            }), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.DIV({
              class: "col-lg-12 text-right"
            }, "\n                                ", Blaze._TemplateWith(function() {
              return {
                class: Spacebars.call("btn btn-sm btn-danger"),
                action: Spacebars.call("removePeer"),
                params: Spacebars.call(view.lookup("@index"))
              };
            }, function() {
              return Spacebars.include(view.lookupTemplate("button"), function() {
                return "Remove";
              });
            }), "\n                            "), "\n                        "), "\n                    "), "\n                " ];
          });
        }), "\n            " ];
      }), "\n        " ];
    });
  }), "\n    "), HTML.Raw("\n    <hr>") ];
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"serverInformationDimse.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/components/serverInformation/serverInformationDimse/serverInformationDimse.js         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 3);
Template.serverInformationDimse.onCreated(function () {
  var instance = Template.instance();
  instance.peers = new ReactiveVar([]);
  instance.autorun(function () {
    var currentItem = instance.data.currentItem.get();

    if (currentItem) {
      instance.peers.set(currentItem.peers || []);
    }
  });
  var api = instance.data.api;

  _.extend(api, {
    newPeer: function () {
      var peers = instance.peers.get();
      peers.push({});
      instance.peers.set(peers);
    },
    removePeer: function (peerIndex) {
      var peers = instance.peers.get();
      peers.splice(peerIndex, 1);
      instance.peers.set(peers);
      var data = instance.data.currentItem.get();
      data.peers = peers;
      Tracker.afterFlush(function () {
        return instance.data.form.value(data);
      });
    }
  });
});
Template.serverInformationDimse.onRendered(function () {
  var instance = Template.instance();
  instance.autorun(function () {
    var mode = instance.data.mode.get();

    if (mode === 'edit') {
      var data = instance.data.currentItem.get();
      instance.data.form.value(data);
    }
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"serverInformationForm":{"serverInformationForm.html":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// node_modules/meteor/ohif_servers/client/components/serverInformation/serverInformationForm/serverInformationForm.h //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.watch(require("./template.serverInformationForm.js"), {
  "*": module.makeNsSetter(true)
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.serverInformationForm.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/components/serverInformation/serverInformationForm/template.serverInformationForm.js  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.__checkName("serverInformationForm");
Template["serverInformationForm"] = new Template("Template.serverInformationForm", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      class: Spacebars.call("server-information-form"),
      schema: Spacebars.call(Spacebars.dot(view.lookup("instance"), "currentSchema")),
      api: Spacebars.call(Spacebars.dot(view.lookup("."), "api"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("form"), function() {
      return [ "\n        ", Blaze._TemplateWith(function() {
        return {
          key: Spacebars.call("_id")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputHidden"));
      }), "\n        ", HTML.DIV({
        class: "row"
      }, "\n            ", HTML.DIV({
        class: "col-lg-6"
      }, "\n                ", Blaze._TemplateWith(function() {
        return {
          labelClass: Spacebars.call("form-group"),
          key: Spacebars.call("name")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputText"));
      }), "\n            "), "\n            ", HTML.DIV({
        class: "col-lg-6"
      }, "\n                ", Blaze._TemplateWith(function() {
        return {
          labelClass: Spacebars.call("form-group"),
          key: Spacebars.call("type"),
          hideSearch: Spacebars.call(true),
          disabled: Spacebars.call(Spacebars.dataMustache(view.lookup("eq"), Spacebars.dot(view.lookup("."), "mode", "get"), "edit")),
          options: Spacebars.call(Spacebars.dataMustache(view.lookup("clone"), Spacebars.kw({
            placeholder: "Choose a server type"
          })))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputSelect"));
      }), "\n            "), "\n        "), "\n        ", HTML.HR(), "\n        ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("eq"), Spacebars.dot(view.lookup("."), "serverType", "get"), "dicomWeb");
      }, function() {
        return [ "\n          ", Blaze._TemplateWith(function() {
          return Spacebars.call(view.lookup("."));
        }, function() {
          return Spacebars.include(view.lookupTemplate("serverInformationDicomWeb"));
        }), "\n        " ];
      }), "\n        ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("eq"), Spacebars.dot(view.lookup("."), "serverType", "get"), "dimse");
      }, function() {
        return [ "\n          ", Blaze._TemplateWith(function() {
          return Spacebars.call(view.lookup("."));
        }, function() {
          return Spacebars.include(view.lookupTemplate("serverInformationDimse"));
        }), "\n        " ];
      }), "\n        ", Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("."), "serverType", "get"));
      }, function() {
        return [ "\n            ", HTML.DIV("\n                ", Blaze._TemplateWith(function() {
          return {
            class: Spacebars.call("btn btn-primary"),
            action: Spacebars.call("save")
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("button"), function() {
            return "Save";
          });
        }), "\n            "), "\n        " ];
      }), "\n    " ];
    });
  });
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"serverInformationForm.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/components/serverInformation/serverInformationForm/serverInformationForm.js           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 2);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 3);
var dicomSchema;
module.watch(require("meteor/ohif:servers/both/schema/servers.js"), {
  DICOMWebServer: function (v) {
    dicomSchema = v;
  }
}, 4);
var dimseSchema;
module.watch(require("meteor/ohif:servers/both/schema/servers.js"), {
  DIMSEServer: function (v) {
    dimseSchema = v;
  }
}, 5);
Template.serverInformationForm.onCreated(function () {
  var instance = Template.instance();
  instance.data.api = {
    save: function () {
      // Stop here if the form validation fails
      if (!instance.data.form.validate()) {
        return;
      } // Get the current form data


      var formData = instance.data.form.value(); // Call the save method

      Meteor.call('serverSave', formData, function (error) {
        if (error) {
          // TODO: check for errors: not-authorized, data-write
          OHIF.log.error(error);
        }

        instance.data.resetState();
      });
    }
  };
  instance.currentSchema = new ReactiveVar(dicomSchema);
});
Template.serverInformationForm.onRendered(function () {
  var instance = Template.instance();
  instance.data.$form = instance.$('form').first();
  instance.data.form = instance.data.$form.data('component'); // Handle the server type

  instance.autorun(function () {
    // Get the server type component
    var typeComponent = instance.$('[data-key=type] :input').data('component'); // Run this computation every time the user change the server type

    typeComponent.depend(); // Get the current server type value

    var type = typeComponent.value(); // Set the serverType reactive value

    instance.data.serverType.set(type); // Change the schema based on the selected server type

    if (type === 'dimse') {
      instance.currentSchema.set(dimseSchema);
    } else {
      instance.currentSchema.set(dicomSchema);
    }
  }); // Handle the form mode (edit or add)

  instance.autorun(function () {
    var mode = instance.data.mode.get(); // Check if it is on edit mode and load the saved data

    if (mode === 'edit') {
      var data = instance.data.currentItem.get();
      instance.data.form.value(data);
    }
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"serverInformationList":{"serverInformationList.html":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// node_modules/meteor/ohif_servers/client/components/serverInformation/serverInformationList/serverInformationList.h //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.watch(require("./template.serverInformationList.js"), {
  "*": module.makeNsSetter(true)
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.serverInformationList.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/components/serverInformation/serverInformationList/template.serverInformationList.js  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.__checkName("serverInformationList");
Template["serverInformationList"] = new Template("Template.serverInformationList", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      api: Spacebars.call(Spacebars.dot(view.lookup("instance"), "api"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("form"), function() {
      return [ "\n        ", HTML.TABLE({
        id: "tblServer",
        class: "table"
      }, "\n            ", HTML.THEAD("\n                ", HTML.TR("\n                    ", HTML.TH("Name"), "\n                    ", HTML.TH("Type"), "\n                    ", HTML.TH({
        class: "text-right"
      }, "Actions"), "\n                "), "\n            "), "\n            ", HTML.TBODY("\n                ", Blaze.Each(function() {
        return {
          _sequence: Spacebars.call(view.lookup("servers")),
          _variable: "server"
        };
      }, function() {
        return [ "\n                    ", HTML.TR("\n                        ", HTML.TD(Blaze.View("lookup:server.name", function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("server"), "name"));
        })), "\n                        ", HTML.TD(Blaze.View("lookup:server.type", function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("server"), "type"));
        })), "\n                        ", HTML.TD({
          class: "text-right"
        }, "\n                            ", HTML.DIV({
          class: "btn-group",
          role: "group",
          "aria-label": "Actions"
        }, "\n                                ", Blaze._TemplateWith(function() {
          return {
            class: Spacebars.call("btn btn-sm btn-default"),
            action: Spacebars.call("use"),
            params: Spacebars.call(view.lookup("server")),
            title: Spacebars.call("Use this server"),
            disabled: Spacebars.call(Spacebars.dataMustache(view.lookup("isActive"), view.lookup("server")))
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("button"), function() {
            return [ "\n                                    ", Blaze.If(function() {
              return Spacebars.dataMustache(view.lookup("isActive"), view.lookup("server"));
            }, function() {
              return [ "\n                                        ", HTML.I({
                class: "fa fa-check-square-o"
              }), "\n                                    " ];
            }, function() {
              return [ "\n                                        ", HTML.I({
                class: "fa fa-square-o"
              }), "\n                                    " ];
            }), "\n                                " ];
          });
        }), "\n                                ", Blaze._TemplateWith(function() {
          return {
            class: Spacebars.call("btn btn-sm btn-default"),
            action: Spacebars.call("edit"),
            params: Spacebars.call(view.lookup("server")),
            title: Spacebars.call("Edit"),
            disabled: Spacebars.call(Spacebars.dataMustache(view.lookup("eq"), Spacebars.dot(view.lookup("server"), "origin"), "json"))
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("button"), function() {
            return [ "\n                                    ", HTML.I({
              class: "fa fa-pencil"
            }), "\n                                " ];
          });
        }), "\n                                ", Blaze._TemplateWith(function() {
          return {
            class: Spacebars.call("btn btn-sm btn-danger"),
            action: Spacebars.call("delete"),
            params: Spacebars.call(view.lookup("server")),
            title: Spacebars.call("Remove"),
            disabled: Spacebars.call(Spacebars.dataMustache(view.lookup("eq"), Spacebars.dot(view.lookup("server"), "origin"), "json"))
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("button"), function() {
            return [ "\n                                    ", HTML.I({
              class: "fa fa-trash"
            }), "\n                                " ];
          });
        }), "\n                            "), "\n                        "), "\n                    "), "\n                " ];
      }, function() {
        return [ "\n                    ", HTML.TR("\n                        ", HTML.TD({
          class: "text-center",
          colspan: "3"
        }, "No servers found"), "\n                    "), "\n                " ];
      }), "\n            "), "\n        "), "\n        ", Blaze._TemplateWith(function() {
        return {
          class: Spacebars.call("btn btn-sm btn-default"),
          action: Spacebars.call("add")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("button"), function() {
          return [ "\n            ", HTML.I({
            class: "fa fa-plus"
          }), " Add a new server\n        " ];
        });
      }), "\n    " ];
    });
  });
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"serverInformationList.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/components/serverInformation/serverInformationList/serverInformationList.js           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
var Servers, CurrentServer;
module.watch(require("meteor/ohif:servers/both/collections"), {
  Servers: function (v) {
    Servers = v;
  },
  CurrentServer: function (v) {
    CurrentServer = v;
  }
}, 2);
Template.serverInformationList.onCreated(function () {
  var instance = Template.instance();
  instance.api = {
    add: function () {
      return instance.data.mode.set('create');
    },
    edit: function (server) {
      instance.data.currentItem.set(server);
      instance.data.mode.set('edit');
    },
    "delete": function (server) {
      // TODO: Replace this for confirmation dialog after LT-refactor is merged back to master
      if (!window.confirm('Are you sure you want to remove this peer?')) {
        return;
      }

      Meteor.call('serverRemove', server._id, function (error) {// TODO: check for errors: data-write
      });
    },
    use: function (server) {
      Meteor.call('serverSetActive', server._id, function (error) {// TODO: check for errors: data-write
      });
    }
  };
});
Template.serverInformationList.helpers({
  isActive: function (server) {
    var currentServer = CurrentServer.findOne();

    if (!currentServer) {
      return;
    }

    return server._id === currentServer.serverId;
  },
  servers: function () {
    var options = {
      sort: {
        origin: -1,
        type: 1,
        name: 1
      }
    };
    return Servers.find({}, options).fetch();
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"serverInformationModal":{"serverInformationModal.html":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// node_modules/meteor/ohif_servers/client/components/serverInformation/serverInformationModal/serverInformationModal //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.watch(require("./template.serverInformationModal.js"), {
  "*": module.makeNsSetter(true)
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.serverInformationModal.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/components/serverInformation/serverInformationModal/template.serverInformationModal.j //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //

Template.__checkName("serverInformationModal");
Template["serverInformationModal"] = new Template("Template.serverInformationModal", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      dialogClass: "modal-lg",
      title: "Server Information"
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("dialogSimple"), function() {
      return [ "\n        ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("eq"), Spacebars.dot(view.lookup("instance"), "container", "mode", "get"), "list");
      }, function() {
        return [ "\n            ", Blaze._TemplateWith(function() {
          return Spacebars.call(Spacebars.dot(view.lookup("instance"), "container"));
        }, function() {
          return Spacebars.include(view.lookupTemplate("serverInformationList"));
        }), "\n        " ];
      }, function() {
        return [ "\n            ", Blaze._TemplateWith(function() {
          return Spacebars.call(Spacebars.dot(view.lookup("instance"), "container"));
        }, function() {
          return Spacebars.include(view.lookupTemplate("serverInformationForm"));
        }), "\n        " ];
      }), "\n        ", Blaze._TemplateWith(function() {
        return "dialogFooter";
      }, function() {
        return Spacebars.include(view.lookupTemplate("section"), function() {
          return Blaze.Unless(function() {
            return Spacebars.dataMustache(view.lookup("eq"), Spacebars.dot(view.lookup("instance"), "container", "mode", "get"), "list");
          }, function() {
            return HTML.BUTTON({
              type: "button",
              class: "btn btn-default js-back"
            }, "Back");
          });
        });
      }), "\n    " ];
    });
  });
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"serverInformationModal.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/components/serverInformation/serverInformationModal/serverInformationModal.js         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
Template.serverInformationModal.onCreated(function () {
  var instance = Template.instance();
  instance.container = {
    mode: new ReactiveVar('list'),
    serverType: new ReactiveVar(null),
    currentItem: new ReactiveVar(null),
    $form: null,
    resetState: function () {
      instance.container.mode.set('list');
      instance.container.serverType.set(null);
      instance.container.currentItem.set(null);
    }
  };
});
Template.serverInformationModal.events({
  'click .js-back': function (event, instance) {
    instance.container.resetState();
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"serverInformationModal.styl":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// node_modules/meteor/ohif_servers/client/components/serverInformation/serverInformationModal/serverInformationModal //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.watch(require("./serverInformationModal.styl.css"), {
  "*": module.makeNsSetter(true)
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"serverInformationModal.styl.css":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/ohif_servers/client/components/serverInformation/serverInformationModal/serverInformationModal.styl.css   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = require("meteor/modules").addStyles(
  ".server-information-form label.wrapper {\n  display: block;\n}\n.server-information-form .checkbox {\n  margin: 0 8px 0 0;\n}\n"
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".styl"
  ]
});
require("/node_modules/meteor/ohif:servers/both/index.js");
require("/node_modules/meteor/ohif:servers/client/index.js");

/* Exports */
Package._define("ohif:servers");

})();
