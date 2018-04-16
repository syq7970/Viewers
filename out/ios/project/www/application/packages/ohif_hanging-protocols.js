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
var Random = Package.random.Random;
var Template = Package['templating-runtime'].Template;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var moment = Package['momentjs:moment'].moment;
var validate = Package.validatejs.validate;
var dialogPolyfill = Package['ohif:viewerbase'].dialogPolyfill;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Iron = Package['iron:core'].Iron;
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
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var EJSON = Package.ejson.EJSON;
var FastClick = Package.fastclick.FastClick;
var LaunchScreen = Package['launch-screen'].LaunchScreen;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var HP, HangingProtocols, MatchedProtocols, Comparators, ProtocolEngine, openRuleEntryDialog, openSettingEntryDialog, openTextEntryDialog, getActiveViewportModel, indexToRemove;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:hanging-protocols":{"both":{"namespace.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/namespace.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
HP = {};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"collections.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/collections.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
HangingProtocols = new Meteor.Collection('hangingprotocols');
HangingProtocols._debugName = 'HangingProtocols';
HangingProtocols.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
}); // @TODO: Remove this after stabilizing ProtocolEngine

if (Meteor.isDevelopment && Meteor.isServer) {
  Meteor.startup(function () {
    HangingProtocols.remove({});
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schema.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/schema.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./classes/Protocol"));
module.watch(require("./classes/Stage"));
module.watch(require("./classes/Viewport"));
module.watch(require("./classes/ViewportStructure"));
module.watch(require("./classes/rules/ProtocolMatchingRule"));
module.watch(require("./classes/rules/StudyMatchingRule"));
module.watch(require("./classes/rules/SeriesMatchingRule"));
module.watch(require("./classes/rules/ImageMatchingRule"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hardcodedData.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/hardcodedData.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
HP.attributeDefaults = {
  abstractPriorValue: 0
};
HP.displaySettings = {
  invert: {
    id: 'invert',
    text: 'Show Grayscale Inverted',
    defaultValue: 'NO',
    options: ['YES', 'NO']
  }
}; // @TODO Fix abstractPriorValue comparison

HP.studyAttributes = [{
  id: 'x00100020',
  text: '(x00100020) Patient ID'
}, {
  id: 'x0020000d',
  text: '(x0020000d) Study Instance UID'
}, {
  id: 'x00080020',
  text: '(x00080020) Study Date'
}, {
  id: 'x00080030',
  text: '(x00080030) Study Time'
}, {
  id: 'x00081030',
  text: '(x00081030) Study Description'
}, {
  id: 'abstractPriorValue',
  text: 'Abstract Prior Value'
}];
HP.protocolAttributes = [{
  id: 'x00100020',
  text: '(x00100020) Patient ID'
}, {
  id: 'x0020000d',
  text: '(x0020000d) Study Instance UID'
}, {
  id: 'x00080020',
  text: '(x00080020) Study Date'
}, {
  id: 'x00080030',
  text: '(x00080030) Study Time'
}, {
  id: 'x00081030',
  text: '(x00081030) Study Description'
}, {
  id: 'anatomicRegion',
  text: 'Anatomic Region'
}];
HP.seriesAttributes = [{
  id: 'x0020000e',
  text: '(x0020000e) Series Instance UID'
}, {
  id: 'x00080060',
  text: '(x00080060) Modality'
}, {
  id: 'x00200011',
  text: '(x00200011) Series Number'
}, {
  id: 'x0008103e',
  text: '(x0008103e) Series Description'
}, {
  id: 'numImages',
  text: 'Number of Images'
}];
HP.instanceAttributes = [{
  id: 'x00080016',
  text: '(x00080016) SOP Class UID'
}, {
  id: 'x00080018',
  text: '(x00080018) SOP Instance UID'
}, {
  id: 'x00185101',
  text: '(x00185101) View Position'
}, {
  id: 'x00200013',
  text: '(x00200013) Instance Number'
}, {
  id: 'x00080008',
  text: '(x00080008) Image Type'
}, {
  id: 'x00181063',
  text: '(x00181063) Frame Time'
}, {
  id: 'x00200060',
  text: '(x00200060) Laterality'
}, {
  id: 'x00541330',
  text: '(x00541330) Image Index'
}, {
  id: 'x00280004',
  text: '(x00280004) Photometric Interpretation'
}, {
  id: 'x00180050',
  text: '(x00180050) Slice Thickness'
}];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"testData.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/testData.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function getDefaultProtocol() {
  var protocol = new HP.Protocol('Default');
  protocol.id = 'defaultProtocol';
  protocol.locked = true;
  var oneByOne = new HP.ViewportStructure('grid', {
    rows: 1,
    columns: 1
  });
  var viewport = new HP.Viewport();
  var first = new HP.Stage(oneByOne, 'oneByOne');
  first.viewports.push(viewport);
  protocol.stages.push(first);
  HP.defaultProtocol = protocol;
  return HP.defaultProtocol;
}

function getMRTwoByTwoTest() {
  var proto = new HP.Protocol('MR_TwoByTwo');
  proto.id = 'MR_TwoByTwo';
  proto.locked = true; // Use http://localhost:3000/viewer/1.2.840.113619.2.5.1762583153.215519.978957063.78

  var studyInstanceUid = new HP.ProtocolMatchingRule('studyInstanceUid', {
    equals: {
      value: '1.2.840.113619.2.5.1762583153.215519.978957063.78'
    }
  }, true);
  proto.addProtocolMatchingRule(studyInstanceUid);
  var oneByTwo = new HP.ViewportStructure('grid', {
    rows: 1,
    columns: 2
  }); // Stage 1

  var left = new HP.Viewport();
  var right = new HP.Viewport();
  var firstSeries = new HP.SeriesMatchingRule('seriesNumber', {
    equals: {
      value: 1
    }
  });
  var secondSeries = new HP.SeriesMatchingRule('seriesNumber', {
    equals: {
      value: 2
    }
  });
  var thirdImage = new HP.ImageMatchingRule('instanceNumber', {
    equals: {
      value: 3
    }
  });
  left.seriesMatchingRules.push(firstSeries);
  left.imageMatchingRules.push(thirdImage);
  right.seriesMatchingRules.push(secondSeries);
  right.imageMatchingRules.push(thirdImage);
  var first = new HP.Stage(oneByTwo, 'oneByTwo');
  first.viewports.push(left);
  first.viewports.push(right);
  proto.stages.push(first); // Stage 2

  var twoByOne = new HP.ViewportStructure('grid', {
    rows: 2,
    columns: 1
  });
  var left2 = new HP.Viewport();
  var right2 = new HP.Viewport();
  var fourthSeries = new HP.SeriesMatchingRule('seriesNumber', {
    equals: {
      value: 4
    }
  });
  var fifthSeries = new HP.SeriesMatchingRule('seriesNumber', {
    equals: {
      value: 5
    }
  });
  left2.seriesMatchingRules.push(fourthSeries);
  left2.imageMatchingRules.push(thirdImage);
  right2.seriesMatchingRules.push(fifthSeries);
  right2.imageMatchingRules.push(thirdImage);
  var second = new HP.Stage(twoByOne, 'twoByOne');
  second.viewports.push(left2);
  second.viewports.push(right2);
  proto.stages.push(second);
  HP.testProtocol = proto;
  return HP.testProtocol;
}

function getDemoProtocols() {
  HP.demoProtocols = [];
  /**
   * Demo #1
   */

  HP.demoProtocols.push({
    "id": "demoProtocol1",
    "locked": false,
    "name": "DFCI-CT-CHEST-COMPARE",
    "createdDate": "2017-02-14T16:07:09.033Z",
    "modifiedDate": "2017-02-14T16:18:43.930Z",
    "availableTo": {},
    "editableBy": {},
    "protocolMatchingRules": [{
      "id": "7tmuq7KzDMCWFeapc",
      "weight": 2,
      "required": false,
      "attribute": "x00081030",
      "constraint": {
        "contains": {
          "value": "DFCI CT CHEST"
        }
      }
    }],
    "stages": [{
      "id": "v5PfGt9F6mffZPif5",
      "name": "oneByOne",
      "viewportStructure": {
        "type": "grid",
        "properties": {
          "rows": 1,
          "columns": 2
        },
        "layoutTemplateName": "gridLayout"
      },
      "viewports": [{
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "2.0"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "ygz4nb28iJZcJhnYa",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "2.0"
            }
          }
        }],
        "studyMatchingRules": [{
          "id": "uDoEgLTvnXTByWnPz",
          "weight": 1,
          "required": false,
          "attribute": "abstractPriorValue",
          "constraint": {
            "equals": {
              "value": 1
            }
          }
        }]
      }],
      "createdDate": "2017-02-14T16:07:09.033Z"
    }, {
      "id": "XTzu8HB3feep3HYKs",
      "viewportStructure": {
        "type": "grid",
        "properties": {
          "rows": 1,
          "columns": 2
        },
        "layoutTemplateName": "gridLayout"
      },
      "viewports": [{
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "3.0"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "ygz4nb28iJZcJhnYa",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "3.0"
            }
          }
        }],
        "studyMatchingRules": [{
          "id": "uDoEgLTvnXTByWnPz",
          "weight": 1,
          "required": false,
          "attribute": "abstractPriorValue",
          "constraint": {
            "equals": {
              "value": 1
            }
          }
        }]
      }],
      "createdDate": "2017-02-14T16:07:12.085Z"
    }, {
      "id": "3yPYNaeFtr76Qz3jq",
      "viewportStructure": {
        "type": "grid",
        "properties": {
          "rows": 2,
          "columns": 2
        },
        "layoutTemplateName": "gridLayout"
      },
      "viewports": [{
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Body 3.0"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {
          "wlPreset": "Lung"
        },
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "ygz4nb28iJZcJhnYa",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Lung 3.0"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "6vdBRZYnqmmosipph",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Body 3.0"
            }
          }
        }],
        "studyMatchingRules": [{
          "id": "SxfTyhGcMhr56PtPM",
          "weight": 1,
          "required": false,
          "attribute": "abstractPriorValue",
          "constraint": {
            "equals": {
              "value": 1
            }
          }
        }]
      }, {
        "viewportSettings": {
          "wlPreset": "Lung"
        },
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "FTAyChZCPW68yJjXD",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Lung 3.0"
            }
          }
        }],
        "studyMatchingRules": [{
          "id": "gMJjfrbsqYNbErPx5",
          "weight": 1,
          "required": false,
          "attribute": "abstractPriorValue",
          "constraint": {
            "equals": {
              "value": 1
            }
          }
        }]
      }],
      "createdDate": "2017-02-14T16:11:40.489Z"
    }],
    "numberOfPriorsReferenced": 4
  });
  /**
   * Demo #2
   */

  HP.demoProtocols.push({
    "id": "demoProtocol2",
    "locked": false,
    "name": "DFCI-CT-CHEST-COMPARE-2",
    "createdDate": "2017-02-14T16:07:09.033Z",
    "modifiedDate": "2017-02-14T16:18:43.930Z",
    "availableTo": {},
    "editableBy": {},
    "protocolMatchingRules": [{
      "id": "7tmuq7KzDMCWFeapc",
      "weight": 2,
      "required": false,
      "attribute": "x00081030",
      "constraint": {
        "contains": {
          "value": "DFCI CT CHEST"
        }
      }
    }],
    "stages": [{
      "id": "v5PfGt9F6mffZPif5",
      "name": "oneByOne",
      "viewportStructure": {
        "type": "grid",
        "properties": {
          "rows": 1,
          "columns": 2
        },
        "layoutTemplateName": "gridLayout"
      },
      "viewports": [{
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZL56z7mac",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "2.0"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "ygz4nb28iJZcJhnYc",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "2.0"
            }
          }
        }],
        "studyMatchingRules": [{
          "id": "uDoEgLTvnXTByWnPt",
          "weight": 1,
          "required": false,
          "attribute": "abstractPriorValue",
          "constraint": {
            "equals": {
              "value": 1
            }
          }
        }]
      }],
      "createdDate": "2017-02-14T16:07:09.033Z"
    }, {
      "id": "XTzu8HB3feep3HYKs",
      "viewportStructure": {
        "type": "grid",
        "properties": {
          "rows": 1,
          "columns": 2
        },
        "layoutTemplateName": "gridLayout"
      },
      "viewports": [{
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Body 3.0"
            }
          }
        }, {
          "id": "mYnsCcNwZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Body 5.0"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "ygz4nb28iJZcJhnYa",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Body 3.0"
            }
          }
        }, {
          "id": "ygz4nb29iJZcJhnYa",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Body 5.0"
            }
          }
        }],
        "studyMatchingRules": [{
          "id": "uDoEgLTvnXTByWnPz",
          "weight": 1,
          "required": false,
          "attribute": "abstractPriorValue",
          "constraint": {
            "equals": {
              "value": 1
            }
          }
        }]
      }],
      "createdDate": "2017-02-14T16:07:12.085Z"
    }, {
      "id": "3yPYNaeFtr76Qz3jq",
      "viewportStructure": {
        "type": "grid",
        "properties": {
          "rows": 2,
          "columns": 2
        },
        "layoutTemplateName": "gridLayout"
      },
      "viewports": [{
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZL56z7mtr",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Body 3.0"
            }
          }
        }, {
          "id": "jXnsCcNzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Body 5.0"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {
          "wlPreset": "Lung"
        },
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "ygz4nb28iJZcJhnYb",
          "weight": 2,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Lung 3.0"
            }
          }
        }, {
          "id": "ycz4nb28iJZcJhnYa",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Lung 5.0"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "6vdBRZYnqmmosipph",
          "weight": 2,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Body 3.0"
            }
          }
        }, {
          "id": "6vdBRFYnqmmosipph",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Body 5.0"
            }
          }
        }],
        "studyMatchingRules": [{
          "id": "SxfTyhGcMhr56PtPM",
          "weight": 1,
          "required": false,
          "attribute": "abstractPriorValue",
          "constraint": {
            "equals": {
              "value": 1
            }
          }
        }]
      }, {
        "viewportSettings": {
          "wlPreset": "Lung"
        },
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "FTAyChZCPW68yJjXD",
          "weight": 2,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Lung 3.0"
            }
          }
        }, {
          "id": "DTAyChZCPW68yJjXD",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Lung 5.0"
            }
          }
        }],
        "studyMatchingRules": [{
          "id": "gMJjfrbsqYNbErPx5",
          "weight": 1,
          "required": false,
          "attribute": "abstractPriorValue",
          "constraint": {
            "equals": {
              "value": 1
            }
          }
        }]
      }],
      "createdDate": "2017-02-14T16:11:40.489Z"
    }],
    "numberOfPriorsReferenced": 1
  });
  /**
   * Demo: screenCT
   */

  HP.demoProtocols.push({
    "id": "screenCT",
    "locked": false,
    "name": "DFCI-CT-CHEST-SCREEN",
    "createdDate": "2017-02-14T16:07:09.033Z",
    "modifiedDate": "2017-02-14T16:18:43.930Z",
    "availableTo": {},
    "editableBy": {},
    "protocolMatchingRules": [{
      "id": "7tmuq7KzDMCWFeapc",
      "weight": 2,
      "required": false,
      "attribute": "x00081030",
      "constraint": {
        "contains": {
          "value": "DFCI CT CHEST"
        }
      }
    }],
    "stages": [{
      "id": "v5PfGt9F6mffZPif5",
      "name": "oneByOne",
      "viewportStructure": {
        "type": "grid",
        "properties": {
          "rows": 1,
          "columns": 1
        },
        "layoutTemplateName": "gridLayout"
      },
      "viewports": [{
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZL55z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "2.0"
            }
          }
        }],
        "studyMatchingRules": []
      }],
      "createdDate": "2017-02-14T16:07:09.033Z"
    }, {
      "id": "v5PfGt9F4mffZPif5",
      "name": "oneByOne",
      "viewportStructure": {
        "type": "grid",
        "properties": {
          "rows": 2,
          "columns": 2
        },
        "layoutTemplateName": "gridLayout"
      },
      "viewports": [{
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZL56z7nTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Body 5.0"
            }
          }
        }, {
          "id": "mXnsCcNzZL56z7rTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Body 3.0"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZL56r7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Lung 5.0"
            }
          }
        }, {
          "id": "mXnsCcNzZL56a7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Lung 3.0"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcRzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Body 4.0"
            }
          }
        }, {
          "id": "mXnsCcNzTL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Coronal"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcMzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Body 4.0"
            }
          }
        }, {
          "id": "mXnsCcAzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Sagittal"
            }
          }
        }],
        "studyMatchingRules": []
      }],
      "createdDate": "2017-02-14T16:07:09.033Z"
    }],
    "numberOfPriorsReferenced": 0
  });
  /**
   * Demo: PETCTSCREEN
   */

  HP.demoProtocols.push({
    "id": "PETCTSCREEN",
    "locked": false,
    "name": "PETCT-SCREEN",
    "createdDate": "2017-02-14T16:07:09.033Z",
    "modifiedDate": "2017-02-14T16:18:43.930Z",
    "availableTo": {},
    "editableBy": {},
    "protocolMatchingRules": [{
      "id": "7tmuqgKzDMCWFeapc",
      "weight": 5,
      "required": false,
      "attribute": "x00081030",
      "constraint": {
        "contains": {
          "value": "PETCT"
        }
      }
    }],
    "stages": [{
      "id": "v5PfGt9F6mFgZPif5",
      "name": "oneByOne",
      "viewportStructure": {
        "type": "grid",
        "properties": {
          "rows": 1,
          "columns": 2
        },
        "layoutTemplateName": "gridLayout"
      },
      "viewports": [{
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcAzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Topogram"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZR56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Topogram"
            }
          }
        }, {
          "id": "mRnsCcNzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x00200011",
          "constraint": {
            "numericality": {
              "greaterThanOrEqualTo": 2
            }
          }
        }],
        "studyMatchingRules": []
      }],
      "createdDate": "2017-02-14T16:07:09.033Z"
    }, {
      "id": "v5PfGt9F6mFgZPif5",
      "name": "oneByOne",
      "viewportStructure": {
        "type": "grid",
        "properties": {
          "rows": 1,
          "columns": 2
        },
        "layoutTemplateName": "gridLayout"
      },
      "viewports": [{
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsGcNzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "PET WB Corrected"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsHcNzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "CT WB"
            }
          }
        }],
        "studyMatchingRules": []
      }],
      "createdDate": "2017-02-14T16:07:09.033Z"
    }, {
      "id": "v5PfGt9F6mFgZPif5",
      "name": "oneByOne",
      "viewportStructure": {
        "type": "grid",
        "properties": {
          "rows": 1,
          "columns": 2
        },
        "layoutTemplateName": "gridLayout"
      },
      "viewports": [{
        "viewportSettings": {
          "invert": "YES"
        },
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXneCcNzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "PET WB Uncorrected"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCuNzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "CT Nk"
            }
          }
        }],
        "studyMatchingRules": []
      }],
      "createdDate": "2017-02-14T16:07:09.033Z"
    }],
    "numberOfPriorsReferenced": 0
  });
  /**
   * Demo: PETCTCOMPARE
   */

  HP.demoProtocols.push({
    "id": "PETCTCOMPARE",
    "locked": false,
    "name": "PETCT-COMPARE",
    "createdDate": "2017-02-14T16:07:09.033Z",
    "modifiedDate": "2017-02-14T16:18:43.930Z",
    "availableTo": {},
    "editableBy": {},
    "protocolMatchingRules": [{
      "id": "7tmuqgKzDMCWFeapc",
      "weight": 5,
      "required": false,
      "attribute": "x00081030",
      "constraint": {
        "contains": {
          "value": "PETCT"
        }
      }
    }],
    "stages": [{
      "id": "v5PfGt9F6mFgZPif5",
      "name": "oneByOne",
      "viewportStructure": {
        "type": "grid",
        "properties": {
          "rows": 1,
          "columns": 2
        },
        "layoutTemplateName": "gridLayout"
      },
      "viewports": [{
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZL59z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Topogram"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZL56z7lTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Topogram"
            }
          }
        }],
        "studyMatchingRules": [{
          "id": "uDoEgLTbnXTByWnPz",
          "weight": 1,
          "required": false,
          "attribute": "abstractPriorValue",
          "constraint": {
            "equals": {
              "value": 1
            }
          }
        }]
      }],
      "createdDate": "2017-02-14T16:07:09.033Z"
    }, {
      "id": "v5PfGt9F6mFgZPif5",
      "name": "oneByOne",
      "viewportStructure": {
        "type": "grid",
        "properties": {
          "rows": 1,
          "columns": 2
        },
        "layoutTemplateName": "gridLayout"
      },
      "viewports": [{
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNjZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Topogram"
            }
          }
        }, {
          "id": "mXnsCcNzZL56z7gTZ",
          "weight": 1,
          "required": false,
          "attribute": "x00200011",
          "constraint": {
            "numericality": {
              "greaterThanOrEqualTo": 2
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcCzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "Topogram"
            }
          }
        }, {
          "id": "mXnsCcNzZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x00200011",
          "constraint": {
            "numericality": {
              "greaterThanOrEqualTo": 2
            }
          }
        }],
        "studyMatchingRules": [{
          "id": "uDoEgLTvn1TByWnPz",
          "weight": 1,
          "required": false,
          "attribute": "abstractPriorValue",
          "constraint": {
            "equals": {
              "value": 1
            }
          }
        }]
      }],
      "createdDate": "2017-02-14T16:07:09.033Z"
    }, {
      "id": "v5PfGt9F6mFgZPif5",
      "name": "oneByOne",
      "viewportStructure": {
        "type": "grid",
        "properties": {
          "rows": 2,
          "columns": 2
        },
        "layoutTemplateName": "gridLayout"
      },
      "viewports": [{
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZL26z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "PET WB Corrected"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZL46z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "CT WB"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZL57z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "PET WB Corrected"
            }
          }
        }],
        "studyMatchingRules": [{
          "id": "uDoEgLTvnYTByWnPz",
          "weight": 1,
          "required": false,
          "attribute": "abstractPriorValue",
          "constraint": {
            "equals": {
              "value": 1
            }
          }
        }]
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZQ56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "CT WB"
            }
          }
        }],
        "studyMatchingRules": [{
          "id": "uDoEgLTvnKTByWnPz",
          "weight": 1,
          "required": false,
          "attribute": "abstractPriorValue",
          "constraint": {
            "equals": {
              "value": 1
            }
          }
        }]
      }],
      "createdDate": "2017-02-14T16:07:09.033Z"
    }, {
      "id": "v5PfGt9F6mFgZPif5",
      "name": "oneByOne",
      "viewportStructure": {
        "type": "grid",
        "properties": {
          "rows": 2,
          "columns": 2
        },
        "layoutTemplateName": "gridLayout"
      },
      "viewports": [{
        "viewportSettings": {
          "invert": "YES"
        },
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZL56z7nTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "PET WB Uncorrected"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNxZL56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "CT Nk"
            }
          }
        }],
        "studyMatchingRules": []
      }, {
        "viewportSettings": {
          "invert": "YES"
        },
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZA56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "PET WB Uncorrected"
            }
          }
        }],
        "studyMatchingRules": [{
          "id": "uDoEgHTvnXTByWnPz",
          "weight": 1,
          "required": false,
          "attribute": "abstractPriorValue",
          "constraint": {
            "equals": {
              "value": 1
            }
          }
        }]
      }, {
        "viewportSettings": {},
        "imageMatchingRules": [],
        "seriesMatchingRules": [{
          "id": "mXnsCcNzZP56z7mTZ",
          "weight": 1,
          "required": false,
          "attribute": "x0008103e",
          "constraint": {
            "contains": {
              "value": "CT Nk"
            }
          }
        }],
        "studyMatchingRules": [{
          "id": "uDoEgITvnXTByWnPz",
          "weight": 1,
          "required": false,
          "attribute": "abstractPriorValue",
          "constraint": {
            "equals": {
              "value": 1
            }
          }
        }]
      }],
      "createdDate": "2017-02-14T16:07:09.033Z"
    }],
    "numberOfPriorsReferenced": 1
  });
}

getDefaultProtocol(); //getMRTwoByTwoTest();
//getDemoProtocols();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"classes":{"Protocol.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/classes/Protocol.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Random;
module.watch(require("meteor/random"), {
  Random: function (v) {
    Random = v;
  }
}, 1);
var removeFromArray;
module.watch(require("../lib/removeFromArray"), {
  removeFromArray: function (v) {
    removeFromArray = v;
  }
}, 2);

/**
 * This class represents a Hanging Protocol at the highest level
 *
 * @type {Protocol}
 */
HP.Protocol =
/*#__PURE__*/
function () {
  /**
   * The Constructor for the Class to create a Protocol with the bare
   * minimum information
   *
   * @param name The desired name for the Protocol
   */
  function Protocol(name) {
    // Create a new UUID for this Protocol
    this.id = Random.id(); // Store a value which determines whether or not a Protocol is locked
    // This is probably temporary, since we will eventually have role / user
    // checks for editing. For now we just need it to prevent changes to the
    // default protocols.

    this.locked = false; // Boolean value to indicate if the protocol has updated priors information
    // it's set in "updateNumberOfPriorsReferenced" function

    this.hasUpdatedPriorsInformation = false; // Apply the desired name

    this.name = name; // Set the created and modified dates to Now

    this.createdDate = new Date();
    this.modifiedDate = new Date(); // If we are logged in while creating this Protocol,
    // store this information as well

    if (Meteor.users && Meteor.userId) {
      this.createdBy = Meteor.userId;
      this.modifiedBy = Meteor.userId;
    } // Create two empty Sets specifying which roles
    // have read and write access to this Protocol


    this.availableTo = new Set();
    this.editableBy = new Set(); // Define empty arrays for the Protocol matching rules
    // and Stages

    this.protocolMatchingRules = [];
    this.stages = []; // Define auxiliary values for priors

    this.numberOfPriorsReferenced = -1;
  }

  var _proto = Protocol.prototype;

  _proto.getNumberOfPriorsReferenced = function () {
    function getNumberOfPriorsReferenced() {
      var skipCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var numberOfPriorsReferenced = skipCache !== true ? this.numberOfPriorsReferenced : -1; // Check if information is cached already

      if (numberOfPriorsReferenced > -1) {
        return numberOfPriorsReferenced;
      }

      numberOfPriorsReferenced = 0; // Search each study matching rule for prior rules
      // Each stage can have many viewports that can have
      // multiple study matching rules.

      this.stages.forEach(function (stage) {
        if (!stage.viewports) {
          return;
        }

        stage.viewports.forEach(function (viewport) {
          if (!viewport.studyMatchingRules) {
            return;
          }

          viewport.studyMatchingRules.forEach(function (rule) {
            // If the current rule is not a priors rule, it will return -1 then numberOfPriorsReferenced will continue to be 0
            var priorsReferenced = rule.getNumberOfPriorsReferenced();

            if (priorsReferenced > numberOfPriorsReferenced) {
              numberOfPriorsReferenced = priorsReferenced;
            }
          });
        });
      });
      this.numberOfPriorsReferenced = numberOfPriorsReferenced;
      return numberOfPriorsReferenced;
    }

    return getNumberOfPriorsReferenced;
  }();

  _proto.updateNumberOfPriorsReferenced = function () {
    function updateNumberOfPriorsReferenced() {
      this.getNumberOfPriorsReferenced(true);
    }

    return updateNumberOfPriorsReferenced;
  }();
  /**
   * Method to update the modifiedDate when the Protocol
   * has been changed
   */


  _proto.protocolWasModified = function () {
    function protocolWasModified() {
      // If we are logged in while modifying this Protocol,
      // store this information as well
      if (Meteor.users && Meteor.userId) {
        this.modifiedBy = Meteor.userId;
      } // Protocol has been modified, so mark priors information
      // as "outdated"


      this.hasUpdatedPriorsInformation = false; // Update number of priors referenced info

      this.updateNumberOfPriorsReferenced(); // Update the modifiedDate with the current Date/Time

      this.modifiedDate = new Date();
    }

    return protocolWasModified;
  }();
  /**
   * Occasionally the Protocol class needs to be instantiated from a JavaScript Object
   * containing the Protocol data. This function fills in a Protocol with the Object
   * data.
   *
   * @param input A Protocol as a JavaScript Object, e.g. retrieved from MongoDB or JSON
   */


  _proto.fromObject = function () {
    function fromObject(input) {
      var _this = this;

      // Check if the input already has an ID
      // If so, keep it. It not, create a new UUID
      this.id = input.id || Random.id(); // Assign the input name to the Protocol

      this.name = input.name; // Retrieve locked status, use !! to make it truthy
      // so that undefined values will be set to false

      this.locked = !!input.locked; // TODO: Check how to regenerate Set from Object
      //this.availableTo = new Set(input.availableTo);
      //this.editableBy = new Set(input.editableBy);
      // If the input contains Protocol matching rules

      if (input.protocolMatchingRules) {
        input.protocolMatchingRules.forEach(function (ruleObject) {
          // Create new Rules from the stored data
          var rule = new HP.ProtocolMatchingRule();
          rule.fromObject(ruleObject); // Add them to the Protocol

          _this.protocolMatchingRules.push(rule);
        });
      } // If the input contains data for various Stages in the
      // display set sequence


      if (input.stages) {
        input.stages.forEach(function (stageObject) {
          // Create Stages from the stored data
          var stage = new HP.Stage();
          stage.fromObject(stageObject); // Add them to the Protocol

          _this.stages.push(stage);
        });
      }
    }

    return fromObject;
  }();
  /**
   * Creates a clone of the current Protocol with a new name
   *
   * @param name
   * @returns {Protocol|*}
   */


  _proto.createClone = function () {
    function createClone(name) {
      // Create a new JavaScript independent of the current Protocol
      var currentProtocol = Object.assign({}, this); // Create a new Protocol to return

      var clonedProtocol = new HP.Protocol(); // Apply the desired properties

      currentProtocol.id = clonedProtocol.id;
      clonedProtocol.fromObject(currentProtocol); // If we have specified a name, assign it

      if (name) {
        clonedProtocol.name = name;
      } // Unlock the clone


      clonedProtocol.locked = false; // Return the cloned Protocol

      return clonedProtocol;
    }

    return createClone;
  }();
  /**
   * Adds a Stage to this Protocol's display set sequence
   *
   * @param stage
   */


  _proto.addStage = function () {
    function addStage(stage) {
      this.stages.push(stage); // Update the modifiedDate and User that last
      // modified this Protocol

      this.protocolWasModified();
    }

    return addStage;
  }();
  /**
   * Adds a Rule to this Protocol's array of matching rules
   *
   * @param rule
   */


  _proto.addProtocolMatchingRule = function () {
    function addProtocolMatchingRule(rule) {
      this.protocolMatchingRules.push(rule); // Update the modifiedDate and User that last
      // modified this Protocol

      this.protocolWasModified();
    }

    return addProtocolMatchingRule;
  }();
  /**
   * Removes a Rule from this Protocol's array of matching rules
   *
   * @param rule
   */


  _proto.removeProtocolMatchingRule = function () {
    function removeProtocolMatchingRule(rule) {
      var wasRemoved = removeFromArray(this.protocolMatchingRules, rule); // Update the modifiedDate and User that last
      // modified this Protocol

      if (wasRemoved) {
        this.protocolWasModified();
      }
    }

    return removeProtocolMatchingRule;
  }();

  return Protocol;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Rule.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/classes/Rule.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Rule: function () {
    return Rule;
  }
});
var Random;
module.watch(require("meteor/random"), {
  Random: function (v) {
    Random = v;
  }
}, 0);
var comparators;
module.watch(require("../lib/comparators"), {
  comparators: function (v) {
    comparators = v;
  }
}, 1);
var EQUALS_REGEXP = /^equals$/;
/**
 * This Class represents a Rule to be evaluated given a set of attributes
 * Rules have:
 * - An attribute (e.g. 'seriesDescription')
 * - A constraint Object, in the form required by Validate.js:
 *
 * rule.constraint = {
 *   contains: {
 *      value: 'T-1'
 *      }
 *   };
 *
 *  Note: In this example we use the 'contains' Validator, which is a custom Validator defined in Viewerbase
 *
 * - A value for whether or not they are Required to be matched (default: False)
 * - A value for their relative weighting during Protocol or Image matching (default: 1)
 */

var Rule =
/*#__PURE__*/
function () {
  /**
   * The Constructor for the Class to create a Rule with the bare
   * minimum information
   *
   * @param name The desired name for the Rule
   */
  function Rule(attribute, constraint, required, weight) {
    // Create a new UUID for this Rule
    this.id = Random.id(); // Set the Rule's weight (defaults to 1)

    this.weight = weight || 1; // If an attribute is specified, assign it

    if (attribute) {
      this.attribute = attribute;
    } // If a constraint is specified, assign it


    if (constraint) {
      this.constraint = constraint;
    } // If a value for 'required' is specified, assign it


    if (required === undefined) {
      // If no value was specified, default to False
      this.required = false;
    } else {
      this.required = required;
    } // Cache for constraint info object


    this._constraintInfo = void 0; // Cache for validator and value object

    this._validatorAndValue = void 0;
  }
  /**
   * Occasionally the Rule class needs to be instantiated from a JavaScript Object.
   * This function fills in a Protocol with the Object data.
   *
   * @param input A Rule as a JavaScript Object, e.g. retrieved from MongoDB or JSON
   */


  var _proto = Rule.prototype;

  _proto.fromObject = function () {
    function fromObject(input) {
      // Check if the input already has an ID
      // If so, keep it. It not, create a new UUID
      this.id = input.id || Random.id(); // Assign the specified input data to the Rule

      this.required = input.required;
      this.weight = input.weight;
      this.attribute = input.attribute;
      this.constraint = input.constraint;
    }

    return fromObject;
  }();
  /**
   * Get the constraint info object for the current constraint
   * @return {Object\undefined} Constraint object or undefined if current constraint 
   *                            is not valid or not found in comparators list
   */


  _proto.getConstraintInfo = function () {
    function getConstraintInfo() {
      var constraintInfo = this._constraintInfo; // Check if info is cached already

      if (constraintInfo !== void 0) {
        return constraintInfo;
      }

      var ruleConstraint = Object.keys(this.constraint)[0];

      if (ruleConstraint !== void 0) {
        constraintInfo = comparators.find(function (comparator) {
          return ruleConstraint === comparator.id;
        });
      } // Cache this information for later use


      this._constraintInfo = constraintInfo;
      return constraintInfo;
    }

    return getConstraintInfo;
  }();
  /**
  * Check if current rule is related to priors
  * @return {Boolean} True if a rule is related to priors or false otherwise
  */


  _proto.isRuleForPrior = function () {
    function isRuleForPrior() {
      // @TODO: Should we check this too? this.attribute === 'relativeTime'
      return this.attribute === 'abstractPriorValue';
    }

    return isRuleForPrior;
  }();
  /**
   * If the current rule is a rule for priors, returns the number of referenced priors. Otherwise, returns -1.
   * @return {Number} The number of referenced priors or -1 if not applicable. Returns zero if the actual value could not be determined.
   */


  _proto.getNumberOfPriorsReferenced = function () {
    function getNumberOfPriorsReferenced() {
      if (!this.isRuleForPrior()) {
        return -1;
      } // Get rule's validator and value


      var ruleValidatorAndValue = this.getConstraintValidatorAndValue();
      var value = ruleValidatorAndValue.value,
          validator = ruleValidatorAndValue.validator;
      var intValue = parseInt(value, 10) || 0; // avoid possible NaN
      // "Equal to" validators

      if (EQUALS_REGEXP.test(validator)) {
        // In this case, -1 (the oldest prior) indicates that at least one study is used
        return intValue < 0 ? 1 : intValue;
      } // Default cases return value


      return 0;
    }

    return getNumberOfPriorsReferenced;
  }();
  /**
   * Get the constraint validator and value
   * @return {Object|undefined} Returns an object containing the validator and it's value or undefined
   */


  _proto.getConstraintValidatorAndValue = function () {
    function getConstraintValidatorAndValue() {
      var validatorAndValue = this._validatorAndValue; // Check if validator and value are cached already

      if (validatorAndValue !== void 0) {
        return validatorAndValue;
      } // Get the constraint info object


      var constraintInfo = this.getConstraintInfo(); // Constraint info object exists and is valid

      if (constraintInfo !== void 0) {
        var validator = constraintInfo.validator;
        var currentValidator = this.constraint[validator];

        if (currentValidator) {
          var constraintValidator = constraintInfo.validatorOption;
          var constraintValue = currentValidator[constraintValidator];
          validatorAndValue = {
            value: constraintValue,
            validator: constraintInfo.id
          };
          this._validatorAndValue = validatorAndValue;
        }
      }

      return validatorAndValue;
    }

    return getConstraintValidatorAndValue;
  }();

  return Rule;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Stage.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/classes/Stage.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Random;
module.watch(require("meteor/random"), {
  Random: function (v) {
    Random = v;
  }
}, 0);

/**
 * A Stage is one step in the Display Set Sequence for a Hanging Protocol
 *
 * Stages are defined as a ViewportStructure and an array of Viewports
 *
 * @type {Stage}
 */
HP.Stage =
/*#__PURE__*/
function () {
  function Stage(ViewportStructure, name) {
    // Create a new UUID for this Stage
    this.id = Random.id(); // Assign the name and ViewportStructure provided

    this.name = name;
    this.viewportStructure = ViewportStructure; // Create an empty array for the Viewports

    this.viewports = []; // Set the created date to Now

    this.createdDate = new Date();
  }
  /**
   * Creates a clone of the current Stage with a new name
   *
   * Note! This method absolutely cannot be renamed 'clone', because
   * Minimongo's insert method uses 'clone' internally and this
   * somehow causes very bizarre behaviour
   *
   * @param name
   * @returns {Stage|*}
   */


  var _proto = Stage.prototype;

  _proto.createClone = function () {
    function createClone(name) {
      // Create a new JavaScript independent of the current Protocol
      var currentStage = Object.assign({}, this); // Create a new Stage to return

      var clonedStage = new HP.Stage(); // Assign the desired properties

      currentStage.id = clonedStage.id;
      clonedStage.fromObject(currentStage); // If we have specified a name, assign it

      if (name) {
        clonedStage.name = name;
      } // Return the cloned Stage


      return clonedStage;
    }

    return createClone;
  }();
  /**
   * Occasionally the Stage class needs to be instantiated from a JavaScript Object.
   * This function fills in a Protocol with the Object data.
   *
   * @param input A Stage as a JavaScript Object, e.g. retrieved from MongoDB or JSON
   */


  _proto.fromObject = function () {
    function fromObject(input) {
      var _this = this;

      // Check if the input already has an ID
      // If so, keep it. It not, create a new UUID
      this.id = input.id || Random.id(); // Assign the input name to the Stage

      this.name = input.name; // If a ViewportStructure is present in the input, add it from the
      // input data

      this.viewportStructure = new HP.ViewportStructure();
      this.viewportStructure.fromObject(input.viewportStructure); // If any viewports are present in the input object

      if (input.viewports) {
        input.viewports.forEach(function (viewportObject) {
          // Create a new Viewport with their data
          var viewport = new HP.Viewport();
          viewport.fromObject(viewportObject); // Add it to the viewports array

          _this.viewports.push(viewport);
        });
      }
    }

    return fromObject;
  }();

  return Stage;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Viewport.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/classes/Viewport.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var removeFromArray;
module.watch(require("../lib/removeFromArray"), {
  removeFromArray: function (v) {
    removeFromArray = v;
  }
}, 0);

/**
 * This Class defines a Viewport in the Hanging Protocol Stage. A Viewport contains
 * arrays of Rules that are matched in the ProtocolEngine in order to determine which
 * images should be hung.
 *
 * @type {Viewport}
 */
HP.Viewport =
/*#__PURE__*/
function () {
  function Viewport() {
    this.viewportSettings = {};
    this.imageMatchingRules = [];
    this.seriesMatchingRules = [];
    this.studyMatchingRules = [];
  }
  /**
   * Occasionally the Viewport class needs to be instantiated from a JavaScript Object.
   * This function fills in a Viewport with the Object data.
   *
   * @param input The Viewport as a JavaScript Object, e.g. retrieved from MongoDB or JSON
   */


  var _proto = Viewport.prototype;

  _proto.fromObject = function () {
    function fromObject(input) {
      var _this = this;

      // If ImageMatchingRules exist, create them from the Object data
      // and add them to the Viewport's imageMatchingRules array
      if (input.imageMatchingRules) {
        input.imageMatchingRules.forEach(function (ruleObject) {
          var rule = new HP.ImageMatchingRule();
          rule.fromObject(ruleObject);

          _this.imageMatchingRules.push(rule);
        });
      } // If SeriesMatchingRules exist, create them from the Object data
      // and add them to the Viewport's seriesMatchingRules array


      if (input.seriesMatchingRules) {
        input.seriesMatchingRules.forEach(function (ruleObject) {
          var rule = new HP.SeriesMatchingRule();
          rule.fromObject(ruleObject);

          _this.seriesMatchingRules.push(rule);
        });
      } // If StudyMatchingRules exist, create them from the Object data
      // and add them to the Viewport's studyMatchingRules array


      if (input.studyMatchingRules) {
        input.studyMatchingRules.forEach(function (ruleObject) {
          var rule = new HP.StudyMatchingRule();
          rule.fromObject(ruleObject);

          _this.studyMatchingRules.push(rule);
        });
      } // If ViewportSettings exist, add them to the current protocol


      if (input.viewportSettings) {
        this.viewportSettings = input.viewportSettings;
      }
    }

    return fromObject;
  }();
  /**
   * Finds and removes a rule from whichever array it exists in.
   * It is not required to specify if it exists in studyMatchingRules,
   * seriesMatchingRules, or imageMatchingRules
   *
   * @param rule
   */


  _proto.removeRule = function () {
    function removeRule(rule) {
      var array;

      if (rule instanceof HP.StudyMatchingRule) {
        array = this.studyMatchingRules;
      } else if (rule instanceof HP.SeriesMatchingRule) {
        array = this.seriesMatchingRules;
      } else if (rule instanceof HP.ImageMatchingRule) {
        array = this.imageMatchingRules;
      }

      removeFromArray(array, rule);
    }

    return removeRule;
  }();

  return Viewport;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ViewportStructure.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/classes/ViewportStructure.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**
 * The ViewportStructure class represents the layout and layout properties that
 * Viewports are displayed in. ViewportStructure has a type, which corresponds to
 * a layout template, and a set of properties, which depend on the type.
 *
 * @type {ViewportStructure}
 */
HP.ViewportStructure =
/*#__PURE__*/
function () {
  function ViewportStructure(type, properties) {
    this.type = type;
    this.properties = properties;
  }
  /**
   * Occasionally the ViewportStructure class needs to be instantiated from a JavaScript Object.
   * This function fills in a ViewportStructure with the Object data.
   *
   * @param input The ViewportStructure as a JavaScript Object, e.g. retrieved from MongoDB or JSON
   */


  var _proto = ViewportStructure.prototype;

  _proto.fromObject = function () {
    function fromObject(input) {
      this.type = input.type;
      this.properties = input.properties;
    }

    return fromObject;
  }();
  /**
   * Retrieve the layout template name based on the layout type
   *
   * @returns {string}
   */


  _proto.getLayoutTemplateName = function () {
    function getLayoutTemplateName() {
      // Viewport structure can be updated later when we build more complex display layouts
      switch (this.type) {
        case 'grid':
          return 'gridLayout';
      }
    }

    return getLayoutTemplateName;
  }();
  /**
   * Retrieve the number of Viewports required for this layout
   * given the layout type and properties
   *
   * @returns {string}
   */


  _proto.getNumViewports = function () {
    function getNumViewports() {
      // Viewport structure can be updated later when we build more complex display layouts
      switch (this.type) {
        case 'grid':
          // For the typical grid layout, we only need to multiply rows by columns to
          // obtain the number of viewports
          return this.properties.rows * this.properties.columns;
      }
    }

    return getNumViewports;
  }();

  return ViewportStructure;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"rules":{"ImageMatchingRule.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/classes/rules/ImageMatchingRule.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var Rule;
module.watch(require("../Rule"), {
  Rule: function (v) {
    Rule = v;
  }
}, 0);

/**
 * The ImageMatchingRule class extends the Rule Class.
 *
 * At present it does not add any new methods or attributes
 * @type {ImageMatchingRule}
 */
HP.ImageMatchingRule =
/*#__PURE__*/
function (_Rule) {
  (0, _inheritsLoose2.default)(ImageMatchingRule, _Rule);

  function ImageMatchingRule() {
    return _Rule.apply(this, arguments) || this;
  }

  return ImageMatchingRule;
}(Rule);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ProtocolMatchingRule.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/classes/rules/ProtocolMatchingRule.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var Rule;
module.watch(require("../Rule"), {
  Rule: function (v) {
    Rule = v;
  }
}, 0);

/**
 * The ProtocolMatchingRule Class extends the Rule Class.
 *
 * At present it does not add any new methods or attributes
 * @type {ProtocolMatchingRule}
 */
HP.ProtocolMatchingRule =
/*#__PURE__*/
function (_Rule) {
  (0, _inheritsLoose2.default)(ProtocolMatchingRule, _Rule);

  function ProtocolMatchingRule() {
    return _Rule.apply(this, arguments) || this;
  }

  return ProtocolMatchingRule;
}(Rule);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"SeriesMatchingRule.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/classes/rules/SeriesMatchingRule.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var Rule;
module.watch(require("../Rule"), {
  Rule: function (v) {
    Rule = v;
  }
}, 0);

/**
 * The SeriesMatchingRule Class extends the Rule Class.
 *
 * At present it does not add any new methods or attributes
 * @type {SeriesMatchingRule}
 */
HP.SeriesMatchingRule =
/*#__PURE__*/
function (_Rule) {
  (0, _inheritsLoose2.default)(SeriesMatchingRule, _Rule);

  function SeriesMatchingRule() {
    return _Rule.apply(this, arguments) || this;
  }

  return SeriesMatchingRule;
}(Rule);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"StudyMatchingRule.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/classes/rules/StudyMatchingRule.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var Rule;
module.watch(require("../Rule"), {
  Rule: function (v) {
    Rule = v;
  }
}, 0);

/**
 * The StudyMatchingRule Class extends the Rule Class.
 *
 * At present it does not add any new methods or attributes
 * @type {StudyMatchingRule}
 */
HP.StudyMatchingRule =
/*#__PURE__*/
function (_Rule) {
  (0, _inheritsLoose2.default)(StudyMatchingRule, _Rule);

  function StudyMatchingRule() {
    return _Rule.apply(this, arguments) || this;
  }

  return StudyMatchingRule;
}(Rule);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"lib":{"comparators.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/lib/comparators.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  comparators: function () {
    return comparators;
  }
});
var comparators = [{
  id: 'equals',
  name: '= (Equals)',
  validator: 'equals',
  validatorOption: 'value',
  description: 'The attribute must equal this value.'
}, {
  id: 'doesNotEqual',
  name: '!= (Does not equal)',
  validator: 'doesNotEqual',
  validatorOption: 'value',
  description: 'The attribute must not equal this value.'
}, {
  id: 'contains',
  name: 'Contains',
  validator: 'contains',
  validatorOption: 'value',
  description: 'The attribute must contain this value.'
}, {
  id: 'doesNotContain',
  name: 'Does not contain',
  validator: 'doesNotContain',
  validatorOption: 'value',
  description: 'The attribute must not contain this value.'
}, {
  id: 'startsWith',
  name: 'Starts with',
  validator: 'startsWith',
  validatorOption: 'value',
  description: 'The attribute must start with this value.'
}, {
  id: 'endsWith',
  name: 'Ends with',
  validator: 'endsWith',
  validatorOption: 'value',
  description: 'The attribute must end with this value.'
}, {
  id: 'onlyInteger',
  name: 'Only Integers',
  validator: 'numericality',
  validatorOption: 'onlyInteger',
  description: "Real numbers won't be allowed."
}, {
  id: 'greaterThan',
  name: '> (Greater than)',
  validator: 'numericality',
  validatorOption: 'greaterThan',
  description: 'The attribute has to be greater than this value.'
}, {
  id: 'greaterThanOrEqualTo',
  name: '>= (Greater than or equal to)',
  validator: 'numericality',
  validatorOption: 'greaterThanOrEqualTo',
  description: 'The attribute has to be at least this value.'
}, {
  id: 'lessThanOrEqualTo',
  name: '<= (Less than or equal to)',
  validator: 'numericality',
  validatorOption: 'lessThanOrEqualTo',
  description: 'The attribute can be this value at the most.'
}, {
  id: 'lessThan',
  name: '< (Less than)',
  validator: 'numericality',
  validatorOption: 'lessThan',
  description: 'The attribute has to be less than this value.'
}, {
  id: 'odd',
  name: 'Odd',
  validator: 'numericality',
  validatorOption: 'odd',
  description: 'The attribute has to be odd.'
}, {
  id: 'even',
  name: 'Even',
  validator: 'numericality',
  validatorOption: 'even',
  description: 'The attribute has to be even.'
}]; // Immutable object

Object.freeze(comparators);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"removeFromArray.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/both/lib/removeFromArray.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  removeFromArray: function () {
    return removeFromArray;
  }
});

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 0);

/**
 * Removes the first instance of an element from an array, if an equal value exists
 *
 * @param array
 * @param input
 *
 * @returns {boolean} Whether or not the element was found and removed
 */
var removeFromArray = function (array, input) {
  // If the array is empty, stop here
  if (!array || !array.length) {
    return false;
  }

  array.forEach(function (value, index) {
    if (_.isEqual(value, input)) {
      indexToRemove = index;
      return false;
    }
  });

  if (indexToRemove === void 0) {
    return false;
  }

  array.splice(indexToRemove, 1);
  return true;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"collections.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/collections.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var comparators;
module.watch(require("../both/lib/comparators"), {
  comparators: function (v) {
    comparators = v;
  }
}, 1);
MatchedProtocols = new Meteor.Collection(null);
MatchedProtocols._debugName = 'MatchedProtocols';
Comparators = new Meteor.Collection(null);
Comparators._debugName = 'Comparators';
comparators.forEach(function (item) {
  Comparators.insert(item);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"protocolEngine.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/protocolEngine.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 1);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 2);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 3);
module.watch(require("meteor/ohif:viewerbase"));
var HPMatcher;
module.watch(require("./matcher/HPMatcher"), {
  HPMatcher: function (v) {
    HPMatcher = v;
  }
}, 4);
var sortByScore;
module.watch(require("./lib/sortByScore"), {
  sortByScore: function (v) {
    sortByScore = v;
  }
}, 5);
module.watch(require("./customViewportSettings"));

/**
 * Import Constants
 */
var _OHIF$viewerbase = OHIF.viewerbase,
    OHIFError = _OHIF$viewerbase.OHIFError,
    _OHIF$viewerbase$meta = _OHIF$viewerbase.metadata,
    StudyMetadata = _OHIF$viewerbase$meta.StudyMetadata,
    SeriesMetadata = _OHIF$viewerbase$meta.SeriesMetadata,
    InstanceMetadata = _OHIF$viewerbase$meta.InstanceMetadata,
    StudySummary = _OHIF$viewerbase$meta.StudySummary; // Useful constants

var ABSTRACT_PRIOR_VALUE = 'abstractPriorValue'; // Define a global variable that will be used to refer to the Protocol Engine
// It must be populated by HP.setEngine when the Viewer is initialized and a ProtocolEngine
// is instantiated on top of the LayoutManager. If the global ProtocolEngine variable remains
// undefined, none of the HangingProtocol functions will operate.

ProtocolEngine = undefined;
/**
 * Sets the ProtocolEngine global given an instantiated ProtocolEngine. This is done so that
 * The functions in the package can depend on a ProtocolEngine variable, but this variable does
 * not have to be exported from the application level.
 *
 * (There may be a better way to do this, but for now this works with no real downside)
 *
 * @param protocolEngine An instantiated ProtocolEngine linked to a LayoutManager from the
 *                       Viewerbase package
 */

HP.setEngine = function (protocolEngine) {
  ProtocolEngine = protocolEngine;
};
/**
 * Gets the instantiated ProtocolEngine global object
 *
 * @returns protocolEngine An instantiated ProtocolEngine linked to a LayoutManager from the
 *                       Viewerbase package
 */


HP.getEngine = function () {
  return ProtocolEngine;
};

Meteor.startup(function () {
  HP.addCustomViewportSetting('wlPreset', 'Window/Level Preset', Object.create(null), function (element, optionValue) {
    if (_.findWhere(OHIF.viewer.wlPresets, {
      id: optionValue
    })) {
      OHIF.viewerbase.wlPresets.applyWLPreset(optionValue, element);
    }
  });
});

HP.ProtocolEngine =
/*#__PURE__*/
function () {
  /**
   * Constructor
   * @param  {Object} layoutManager  Layout Manager Object
   * @param  {Array} studies        Array of study metadata
   * @param  {Map} priorStudies Map of prior studies
   * @param  {Object} studyMedadataSource Instance of StudyMetadataSource (ohif-viewerbase) Object to get study metadata
   */
  function ProtocolEngine(layoutManager, studies, priorStudies, studyMetadataSource) {
    var _OHIF$viewerbase2 = OHIF.viewerbase,
        LayoutManager = _OHIF$viewerbase2.LayoutManager,
        StudyMetadataSource = _OHIF$viewerbase2.StudyMetadataSource; // -----------
    // Type Validations

    if (!(layoutManager instanceof LayoutManager)) {
      throw new OHIFError('ProtocolEngine::constructor layoutManager is not an instance of LayoutManager');
    }

    if (!(studyMetadataSource instanceof StudyMetadataSource)) {
      throw new OHIFError('ProtocolEngine::constructor studyMetadataSource is not an instance of StudyMetadataSource');
    }

    if (!(studies instanceof Array) && !studies.every(function (study) {
      return study instanceof StudyMetadata;
    })) {
      throw new OHIFError('ProtocolEngine::constructor studies is not an array or it\'s items are not instances of StudyMetadata');
    } // --------------
    // Initialization


    this.LayoutManager = layoutManager;
    this.studies = studies;
    this.priorStudies = priorStudies instanceof Map ? priorStudies : new Map();
    this.studyMetadataSource = studyMetadataSource; // Put protocol engine in a known states

    this.reset(); // Create an array for new stage ids to be stored
    // while editing a stage

    this.newStageIds = [];
  }
  /**
   * Resets the ProtocolEngine to the best match
   */


  var _proto = ProtocolEngine.prototype;

  _proto.reset = function () {
    function reset() {
      var protocol = this.getBestProtocolMatch();
      this.setHangingProtocol(protocol);
    }

    return reset;
  }();
  /**
   * Retrieves the current Stage from the current Protocol and stage index
   *
   * @returns {*} The Stage model for the currently displayed Stage
   */


  _proto.getCurrentStageModel = function () {
    function getCurrentStageModel() {
      return this.protocol.stages[this.stage];
    }

    return getCurrentStageModel;
  }();
  /**
   * Finds the best protocols from Protocol Store, matching each protocol matching rules
   * with the given study. The best protocol are orded by score and returned in an array
   * @param  {Object} study StudyMetadata instance object
   * @return {Array}       Array of match objects or an empty array if no match was found
   *                       Each match object has the score of the matching and the matched
   *                       protocol
   */


  _proto.findMatchByStudy = function () {
    function findMatchByStudy(study) {
      OHIF.log.info('ProtocolEngine::findMatchByStudy');
      var matched = [];
      var studyInstance = study.getFirstInstance(); // Set custom attribute for study metadata

      var numberOfAvailablePriors = this.getNumberOfAvailablePriors(study.getObjectID());
      HP.ProtocolStore.getProtocol().forEach(function (protocol) {
        // Clone the protocol's protocolMatchingRules array
        // We clone it so that we don't accidentally add the
        // numberOfPriorsReferenced rule to the Protocol itself.
        var rules = protocol.protocolMatchingRules.slice();

        if (!rules) {
          return;
        } // Check if the study has the minimun number of priors used by the protocol.


        var numberOfPriorsReferenced = protocol.getNumberOfPriorsReferenced();

        if (numberOfPriorsReferenced > numberOfAvailablePriors) {
          return;
        } // Run the matcher and get matching details


        var matchedDetails = HPMatcher.match(studyInstance, rules);
        var score = matchedDetails.score; // The protocol matched some rule, add it to the matched list

        if (score > 0) {
          matched.push({
            score: score,
            protocol: protocol
          });
        }
      }); // If no matches were found, select the default protocol

      if (!matched.length) {
        var defaultProtocol = HP.ProtocolStore.getProtocol('defaultProtocol');
        return [{
          score: 1,
          protocol: defaultProtocol
        }];
      } // Sort the matched list by score


      sortByScore(matched);
      OHIF.log.info('ProtocolEngine::findMatchByStudy matched', matched);
      return matched;
    }

    return findMatchByStudy;
  }();
  /**
   * Populates the MatchedProtocols Collection by running the matching procedure
   */


  _proto.updateProtocolMatches = function () {
    function updateProtocolMatches() {
      var _this = this;

      OHIF.log.info('ProtocolEngine::updateProtocolMatches'); // Clear all data from the MatchedProtocols Collection

      MatchedProtocols.remove({}); // For each study, find the matching protocols

      this.studies.forEach(function (study) {
        var matched = _this.findMatchByStudy(study); // For each matched protocol, check if it is already in MatchedProtocols


        matched.forEach(function (matchedDetail) {
          var protocol = matchedDetail.protocol;

          if (!protocol) {
            return;
          }

          var protocolInCollection = MatchedProtocols.findOne({
            id: protocol.id
          }); // If it is not already in the MatchedProtocols Collection, insert it with its score

          if (!protocolInCollection) {
            OHIF.log.info('ProtocolEngine::updateProtocolMatches inserting protocol match', matchedDetail);
            MatchedProtocols.insert(matchedDetail);
          }
        });
      });
    }

    return updateProtocolMatches;
  }();
  /**
   * Return the best matched Protocol to the current study or set of studies
   * @returns {*}
   */


  _proto.getBestProtocolMatch = function () {
    function getBestProtocolMatch() {
      // Run the matching to populate the MatchedProtocols Collection
      this.updateProtocolMatches(); // Retrieve the highest scoring Protocol

      var sorted = MatchedProtocols.find({}, {
        sort: {
          score: -1
        },
        limit: 1
      }).fetch(); // Highest scoring Protocol

      var bestMatch = sorted[0].protocol;
      OHIF.log.info('ProtocolEngine::getBestProtocolMatch bestMatch', bestMatch);
      return bestMatch;
    }

    return getBestProtocolMatch;
  }();
  /**
   * Get the number of prior studies supplied in the priorStudies map property.
   *
   * @param {String} studyObjectID The study object ID of the study whose priors are needed
   * @returns {number} The number of available prior studies with the same PatientID
   */


  _proto.getNumberOfAvailablePriors = function () {
    function getNumberOfAvailablePriors(studyObjectID) {
      var priors = this.getAvailableStudyPriors(studyObjectID);
      return priors.length;
    }

    return getNumberOfAvailablePriors;
  }();
  /**
   * Get the array of prior studies from a specific study.
   *
   * @param {String} studyObjectID The study object ID of the study whose priors are needed
   * @returns {Array} The array of available priors or an empty array
   */


  _proto.getAvailableStudyPriors = function () {
    function getAvailableStudyPriors(studyObjectID) {
      var priors = this.priorStudies.get(studyObjectID);
      return priors instanceof Array ? priors : [];
    }

    return getAvailableStudyPriors;
  }(); // Match images given a list of Studies and a Viewport's image matching reqs


  _proto.matchImages = function () {
    function matchImages(viewport, viewportIndex) {
      var _this2 = this;

      OHIF.log.info('ProtocolEngine::matchImages');
      var studyMatchingRules = viewport.studyMatchingRules,
          seriesMatchingRules = viewport.seriesMatchingRules,
          instanceMatchingRules = viewport.imageMatchingRules;
      var matchingScores = [];
      var currentStudy = this.studies[0]; // @TODO: Should this be: this.studies[this.currentStudy] ???

      var firstInstance = currentStudy.getFirstInstance();
      var highestStudyMatchingScore = 0;
      var highestSeriesMatchingScore = 0;
      var highestImageMatchingScore = 0;
      var bestMatch; // Set custom attribute for study metadata and it's first instance

      currentStudy.setCustomAttribute(ABSTRACT_PRIOR_VALUE, 0);

      if (firstInstance instanceof InstanceMetadata) {
        firstInstance.setCustomAttribute(ABSTRACT_PRIOR_VALUE, 0);
      } // Only used if study matching rules has abstract prior values defined...


      var priorStudies;
      studyMatchingRules.forEach(function (rule) {
        if (rule.attribute === ABSTRACT_PRIOR_VALUE) {
          var validatorType = Object.keys(rule.constraint)[0];
          var validator = Object.keys(rule.constraint[validatorType])[0];
          var abstractPriorValue = rule.constraint[validatorType][validator];
          abstractPriorValue = parseInt(abstractPriorValue, 10); // TODO: Restrict or clarify validators for abstractPriorValue?
          // No need to call it more than once...

          if (!priorStudies) {
            priorStudies = _this2.getAvailableStudyPriors(currentStudy.getObjectID());
          } // TODO: Revisit this later: What about two studies with the same
          // study date?


          var priorStudy;

          if (abstractPriorValue === -1) {
            priorStudy = priorStudies[priorStudies.length - 1];
          } else {
            var studyIndex = Math.max(abstractPriorValue - 1, 0);
            priorStudy = priorStudies[studyIndex];
          } // Invalid data


          if (!(priorStudy instanceof StudyMetadata) && !(priorStudy instanceof StudySummary)) {
            return;
          }

          var priorStudyObjectID = priorStudy.getObjectID(); // Check if study metadata is already in studies list

          if (_this2.studies.find(function (study) {
            return study.getObjectID() === priorStudyObjectID;
          })) {
            return;
          } // Get study metadata if necessary and load study in the viewer (each viewer should provide it's own load study method)


          _this2.studyMetadataSource.loadStudy(priorStudy).then(function (studyMetadata) {
            // Set the custom attribute abstractPriorValue for the study metadata
            studyMetadata.setCustomAttribute(ABSTRACT_PRIOR_VALUE, abstractPriorValue); // Also add custom attribute

            var firstInstance = studyMetadata.getFirstInstance();

            if (firstInstance instanceof InstanceMetadata) {
              firstInstance.setCustomAttribute(ABSTRACT_PRIOR_VALUE, abstractPriorValue);
            } // Insert the new study metadata


            _this2.studies.push(studyMetadata); // Update the viewport to refresh layout manager with new study


            _this2.updateViewports(viewportIndex);
          }, function (error) {
            OHIF.log.warn(error);
            throw new OHIFError("ProtocolEngine::matchImages could not get study metadata for the Study with the following ObjectID: " + priorStudyObjectID);
          });
        } // TODO: Add relative Date / time

      });
      this.studies.forEach(function (study) {
        var studyMatchDetails = HPMatcher.match(study.getFirstInstance(), studyMatchingRules);

        if (studyMatchingRules.length && !studyMatchDetails.score || studyMatchDetails.score < highestStudyMatchingScore) {
          return;
        }

        highestStudyMatchingScore = studyMatchDetails.score;
        study.forEachSeries(function (series) {
          var seriesMatchDetails = HPMatcher.match(series.getFirstInstance(), seriesMatchingRules);

          if (seriesMatchingRules.length && !seriesMatchDetails.score || seriesMatchDetails.score < highestSeriesMatchingScore) {
            return;
          }

          highestSeriesMatchingScore = seriesMatchDetails.score;
          series.forEachInstance(function (instance, index) {
            // This tests to make sure there is actually image data in this instance
            // TODO: Change this when we add PDF and MPEG support
            // See https://ohiforg.atlassian.net/browse/LT-227
            // sopClassUid = x00080016
            // rows = x00280010
            if (!OHIF.viewerbase.isImage(instance.getTagValue('x00080016')) && !instance.getTagValue('x00280010')) {
              return;
            }

            var instanceMatchDetails = HPMatcher.match(instance, instanceMatchingRules);
            var matchDetails = {
              passed: [],
              failed: []
            };
            matchDetails.passed = matchDetails.passed.concat(instanceMatchDetails.details.passed);
            matchDetails.passed = matchDetails.passed.concat(seriesMatchDetails.details.passed);
            matchDetails.passed = matchDetails.passed.concat(studyMatchDetails.details.passed);
            matchDetails.failed = matchDetails.failed.concat(instanceMatchDetails.details.failed);
            matchDetails.failed = matchDetails.failed.concat(seriesMatchDetails.details.failed);
            matchDetails.failed = matchDetails.failed.concat(studyMatchDetails.details.failed);
            var totalMatchScore = instanceMatchDetails.score + seriesMatchDetails.score + studyMatchDetails.score;
            var currentSOPInstanceUID = instance.getSOPInstanceUID();
            var imageDetails = {
              studyInstanceUid: study.getStudyInstanceUID(),
              seriesInstanceUid: series.getSeriesInstanceUID(),
              sopInstanceUid: currentSOPInstanceUID,
              currentImageIdIndex: index,
              matchingScore: totalMatchScore,
              matchDetails: matchDetails,
              sortingInfo: {
                score: totalMatchScore,
                study: instance.getTagValue('x00080020') + instance.getTagValue('x00080030'),
                // StudyDate = x00080020 StudyTime = x00080030
                series: parseInt(instance.getTagValue('x00200011')),
                // TODO: change for seriesDateTime SeriesNumber = x00200011
                instance: parseInt(instance.getTagValue('x00200013')) // TODO: change for acquisitionTime InstanceNumber = x00200013

              }
            }; // Find the displaySet

            var displaySet = study.findDisplaySet(function (displaySet) {
              return displaySet.images.find(function (image) {
                return image.getSOPInstanceUID() === currentSOPInstanceUID;
              });
            }); // If the instance was found, set the displaySet ID

            if (displaySet) {
              imageDetails.displaySetInstanceUid = displaySet.getUID();
              imageDetails.imageId = instance.getImageId();
            }

            if (totalMatchScore > highestImageMatchingScore || !bestMatch) {
              highestImageMatchingScore = totalMatchScore;
              bestMatch = imageDetails;
            }

            matchingScores.push(imageDetails);
          });
        });
      }); // Sort the matchingScores

      var sortingFunction = OHIF.utils.sortBy({
        name: 'score',
        reverse: true
      }, {
        name: 'study',
        reverse: true
      }, {
        name: 'instance'
      }, {
        name: 'series'
      });
      matchingScores.sort(function (a, b) {
        return sortingFunction(a.sortingInfo, b.sortingInfo);
      });
      OHIF.log.info('ProtocolEngine::matchImages bestMatch', bestMatch);
      return {
        bestMatch: bestMatch,
        matchingScores: matchingScores
      };
    }

    return matchImages;
  }();
  /**
   * Rerenders viewports that are part of the current ProtocolEngine's LayoutManager
   * using the matching rules internal to each viewport.
   *
   * If this function is provided the index of a viewport, only the specified viewport
   * is rerendered.
   *
   * @param viewportIndex
   */


  _proto.updateViewports = function () {
    function updateViewports(viewportIndex) {
      var _this3 = this;

      OHIF.log.info("ProtocolEngine::updateViewports viewportIndex: " + viewportIndex); // Make sure we have an active protocol with a non-empty array of display sets

      if (!this.getNumProtocolStages()) {
        return;
      } // Retrieve the current display set in the display set sequence


      var stageModel = this.getCurrentStageModel(); // If the current display set does not fulfill the requirements to be displayed,
      // stop here.

      if (!stageModel || !stageModel.viewportStructure || !stageModel.viewports || !stageModel.viewports.length) {
        return;
      } // Retrieve the layoutTemplate associated with the current display set's viewport structure
      // If no such template name exists, stop here.


      var layoutTemplateName = stageModel.viewportStructure.getLayoutTemplateName();

      if (!layoutTemplateName) {
        return;
      } // Retrieve the properties associated with the current display set's viewport structure template
      // If no such layout properties exist, stop here.


      var layoutProps = stageModel.viewportStructure.properties;

      if (!layoutProps) {
        return;
      } // Create an empty array to store the output viewportData


      var viewportData = []; // Empty the matchDetails associated with the ProtocolEngine.
      // This will be used to store the pass/fail details and score
      // for each of the viewport matching procedures

      this.matchDetails = []; // Loop through each viewport

      stageModel.viewports.forEach(function (viewport, viewportIndex) {
        var details = _this3.matchImages(viewport, viewportIndex);

        _this3.matchDetails[viewportIndex] = details; // Convert any YES/NO values into true/false for Cornerstone

        var cornerstoneViewportParams = {}; // Cache viewportSettings keys

        var viewportSettingsKeys = Object.keys(viewport.viewportSettings);
        viewportSettingsKeys.forEach(function (key) {
          var value = viewport.viewportSettings[key];

          if (value === 'YES') {
            value = true;
          } else if (value === 'NO') {
            value = false;
          }

          cornerstoneViewportParams[key] = value;
        }); // imageViewerViewports occasionally needs relevant layout data in order to set
        // the element style of the viewport in question

        var currentViewportData = (0, _objectSpread2.default)({
          viewportIndex: viewportIndex,
          viewport: cornerstoneViewportParams
        }, layoutProps);
        var customSettings = [];
        viewportSettingsKeys.forEach(function (id) {
          var setting = HP.CustomViewportSettings[id];

          if (!setting) {
            return;
          }

          customSettings.push({
            id: id,
            value: viewport.viewportSettings[id]
          });
        });

        currentViewportData.renderedCallback = function (element) {
          //console.log('renderedCallback for ' + element.id);
          customSettings.forEach(function (customSetting) {
            OHIF.log.info("ProtocolEngine::currentViewportData.renderedCallback Applying custom setting: " + customSetting.id);
            OHIF.log.info("ProtocolEngine::currentViewportData.renderedCallback with value: " + customSetting.value);
            var setting = HP.CustomViewportSettings[customSetting.id];
            setting.callback(element, customSetting.value);
          });
        };

        var currentMatch = details.bestMatch;
        var currentPosition = 1;
        var scoresLength = details.matchingScores.length;

        while (currentPosition < scoresLength && _.findWhere(viewportData, {
          imageId: currentMatch.imageId
        })) {
          currentMatch = details.matchingScores[currentPosition];
          currentPosition++;
        }

        if (currentMatch && currentMatch.imageId) {
          currentViewportData.studyInstanceUid = currentMatch.studyInstanceUid;
          currentViewportData.seriesInstanceUid = currentMatch.seriesInstanceUid;
          currentViewportData.sopInstanceUid = currentMatch.sopInstanceUid;
          currentViewportData.currentImageIdIndex = currentMatch.currentImageIdIndex;
          currentViewportData.displaySetInstanceUid = currentMatch.displaySetInstanceUid;
          currentViewportData.imageId = currentMatch.imageId;
        } // @TODO Why should we throw an exception when a best match is not found? This was aborting the whole process.
        // if (!currentViewportData.displaySetInstanceUid) {
        //     throw new OHIFError('ProtocolEngine::updateViewports No matching display set found?');
        // }


        viewportData.push(currentViewportData);
      });
      this.LayoutManager.layoutTemplateName = layoutTemplateName;
      this.LayoutManager.layoutProps = layoutProps;
      this.LayoutManager.viewportData = viewportData;

      if (viewportIndex !== undefined && viewportData[viewportIndex]) {
        this.LayoutManager.rerenderViewportWithNewDisplaySet(viewportIndex, viewportData[viewportIndex]);
      } else {
        this.LayoutManager.updateViewports();
      }
    }

    return updateViewports;
  }();
  /**
   * Sets the current Hanging Protocol to the specified Protocol
   * An optional argument can also be used to prevent the updating of the Viewports
   *
   * @param newProtocol
   * @param updateViewports
   */


  _proto.setHangingProtocol = function () {
    function setHangingProtocol(newProtocol) {
      var updateViewports = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      OHIF.log.info('ProtocolEngine::setHangingProtocol newProtocol', newProtocol);
      OHIF.log.info("ProtocolEngine::setHangingProtocol updateViewports = " + updateViewports); // Reset the array of newStageIds

      this.newStageIds = [];

      if (HP.Protocol.prototype.isPrototypeOf(newProtocol)) {
        this.protocol = newProtocol;
      } else {
        this.protocol = new HP.Protocol();
        this.protocol.fromObject(newProtocol);
      }

      this.stage = 0; // Update viewports by default

      if (updateViewports) {
        this.updateViewports();
      }

      MatchedProtocols.update({}, {
        $set: {
          selected: false
        }
      }, {
        multi: true
      });
      MatchedProtocols.update({
        id: this.protocol.id
      }, {
        $set: {
          selected: true
        }
      });
      Session.set('HangingProtocolName', this.protocol.name);
      Session.set('HangingProtocolStage', this.stage);
    }

    return setHangingProtocol;
  }();
  /**
  * Check if the next stage is available
  * @return {Boolean} True if next stage is available or false otherwise
  */


  _proto.isNextStageAvailable = function () {
    function isNextStageAvailable() {
      var numberOfStages = this.getNumProtocolStages();
      return this.stage + 1 < numberOfStages;
    }

    return isNextStageAvailable;
  }();
  /**
  * Check if the previous stage is available
  * @return {Boolean} True if previous stage is available or false otherwise
  */


  _proto.isPreviousStageAvailable = function () {
    function isPreviousStageAvailable() {
      return this.stage - 1 >= 0;
    }

    return isPreviousStageAvailable;
  }();
  /**
   * Changes the current stage to a new stage index in the display set sequence.
   * It checks if the next stage exists.
   *
   * @param {Integer} stageAction An integer value specifying wheater next (1) or previous (-1) stage
   * @return {Boolean} True if new stage has set or false, otherwise
   */


  _proto.setCurrentProtocolStage = function () {
    function setCurrentProtocolStage(stageAction) {
      // Check if previous or next stage is available
      if (stageAction === -1 && !this.isPreviousStageAvailable()) {
        return false;
      } else if (stageAction === 1 && !this.isNextStageAvailable()) {
        return false;
      } // Sets the new stage


      this.stage += stageAction; // Log the new stage

      OHIF.log.info("ProtocolEngine::setCurrentProtocolStage stage = " + this.stage); // Set stage Session variable for reactivity

      Session.set('HangingProtocolStage', this.stage); // Since stage has changed, we need to update the viewports
      // and redo matchings

      this.updateViewports(); // Everything went well

      return true;
    }

    return setCurrentProtocolStage;
  }();
  /**
   * Retrieves the number of Stages in the current Protocol or
   * undefined if no protocol or stages are set
   */


  _proto.getNumProtocolStages = function () {
    function getNumProtocolStages() {
      if (!this.protocol || !this.protocol.stages || !this.protocol.stages.length) {
        return;
      }

      return this.protocol.stages.length;
    }

    return getNumProtocolStages;
  }();
  /**
   * Switches to the next protocol stage in the display set sequence
   */


  _proto.nextProtocolStage = function () {
    function nextProtocolStage() {
      OHIF.log.info('ProtocolEngine::nextProtocolStage');

      if (!this.setCurrentProtocolStage(1)) {
        // Just for logging purpose
        OHIF.log.info('ProtocolEngine::nextProtocolStage failed');
      }
    }

    return nextProtocolStage;
  }();
  /**
   * Switches to the previous protocol stage in the display set sequence
   */


  _proto.previousProtocolStage = function () {
    function previousProtocolStage() {
      OHIF.log.info('ProtocolEngine::previousProtocolStage');

      if (!this.setCurrentProtocolStage(-1)) {
        // Just for logging purpose
        OHIF.log.info('ProtocolEngine::previousProtocolStage failed');
      }
    }

    return previousProtocolStage;
  }();

  return ProtocolEngine;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"helpers":{"displayConstraint.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/helpers/displayConstraint.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);
var attributeCache = Object.create(null);
var REGEXP = /^\([x0-9a-f]+\)/;

var humanize = function (text) {
  var humanized = text.replace(/([A-Z])/g, ' $1'); // insert a space before all caps

  humanized = humanized.replace(/^./, function (str) {
    // uppercase the first character
    return str.toUpperCase();
  });
  return humanized;
};
/**
 * Get the text of an attribute for a given attribute
 * @param  {String} attributeId The attribute ID
 * @param  {Array} attributes   Array of attributes objects with id and text properties
 * @return {String}             If found return the attribute text or an empty string otherwise
 */


var getAttributeText = function (attributeId, attributes) {
  // If the attribute is already in the cache, return it
  if (attributeId in attributeCache) {
    return attributeCache[attributeId];
  } // Find the attribute with given attributeId


  var attribute = attributes.find(function (attribute) {
    return attribute.id === attributeId;
  });
  var attributeText; // If attribute was found get its text and save it on the cache

  if (attribute) {
    attributeText = attribute.text.replace(REGEXP, '');
    attributeCache[attributeId] = attributeText;
  }

  return attributeText || '';
};

Blaze.registerHelper('displayConstraint', function (attributeId, constraint, attributes) {
  if (!constraint || !attributeId) {
    return;
  }

  var validatorType = Object.keys(constraint)[0];

  if (!validatorType) {
    return;
  }

  var validator = Object.keys(constraint[validatorType])[0];

  if (!validator) {
    return;
  }

  var value = constraint[validatorType][validator];

  if (value === void 0) {
    return;
  }

  var comparator = validator;

  if (validator === 'value') {
    comparator = validatorType;
  }

  var attributeText = getAttributeText(attributeId, attributes);
  var constraintText = attributeText + ' ' + humanize(comparator).toLowerCase() + ' ' + value;
  return constraintText;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"attributes.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/helpers/attributes.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);
Blaze.registerHelper('viewportSettingsTypes', function () {
  return HP.viewportSettingsTypes;
});
Blaze.registerHelper('toolSettingsTypes', function () {
  return HP.toolSettingsTypes;
});
Blaze.registerHelper('studyAttributes', function () {
  return HP.studyAttributes;
});
Blaze.registerHelper('seriesAttributes', function () {
  return HP.seriesAttributes;
});
Blaze.registerHelper('instanceAttributes', function () {
  return HP.instanceAttributes;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"protocolStore":{"protocolStore.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/protocolStore/protocolStore.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// The ProtocolStore module allows persisting hanging protocols using different strategies.
// For example, one strategy stores hanging protocols in the application server while
// another strategy stores them in a remote machine, but only one strategy can be used at a time.
HP.ProtocolStore = function () {
  var strategy;
  /**
   * Sets the strategy used to persist hanging protocols
   *
   * @param preferredStrategy A preferred strategy will be using to persist hanging protocols
   */

  function setStrategy(preferredStrategy) {
    strategy = preferredStrategy;
  }
  /**
   * Registers a function to be called when the protocol store is ready to persist hanging protocols
   *
   * NOTE: Strategies should implement this function
   *
   * @param callback The function to be called as a callback
   */


  function onReady(callback) {
    strategy.onReady(callback);
  }
  /**
   * Get a HP.Protocol instance for the given protocol object
   * @param  {Object} protocolObject Protocol plain object
   * @return {HP.Protocol}           HP.Protocol instance for the given protocol object
   */


  function getProtocolInstance(protocolObject) {
    var protocolInstance = new HP.Protocol();
    protocolInstance.fromObject(protocolObject);
    return protocolInstance;
  }
  /**
   * Gets the hanging protocol by protocolId if defined, otherwise all stored hanging protocols
   *
   * NOTE: Strategies should implement this function
   *
   * @param protocolId The protocol ID used to find the hanging protocol
   * @returns {object|array} The hanging protocol by protocolId or array of the stored hanging protocols
   */


  function getProtocol(protocolId) {
    var result = strategy.getProtocol(protocolId); // If result is an array of protocols objects

    if (result instanceof Array) {
      result.forEach(function (protocol, index) {
        // Check if protocol is an instance of HP.Protocol
        if (!(protocol instanceof HP.Protocol)) {
          result[index] = getProtocolInstance(protocol);
        }
      });
    } else if (result !== void 0 && !(result instanceof HP.Protocol)) {
      // Check if result exists and is not an instance of HP.Protocol
      result = getProtocolInstance(result);
    }

    return result;
  }
  /**
   * Stores the hanging protocol
   *
   * NOTE: Strategies should implement this function
   *
   * @param protocol The hanging protocol to be stored
   */


  function addProtocol(protocol) {
    strategy.addProtocol(protocol);
  }
  /**
   * Updates the hanging protocol by protocolId
   *
   * NOTE: Strategies should implement this function
   *
   * @param protocolId The protocol ID used to find the hanging protocol to update
   * @param protocol The updated hanging protocol
   */


  function updateProtocol(protocolId, protocol) {
    strategy.updateProtocol(protocolId, protocol);
  }
  /**
   * Removes the hanging protocol
   *
   * NOTE: Strategies should implement this function
   *
   * @param protocolId The protocol ID used to remove the hanging protocol
   */


  function removeProtocol(protocolId) {
    strategy.removeProtocol(protocolId);
  } // Module Exports


  return {
    setStrategy: setStrategy,
    onReady: onReady,
    getProtocol: getProtocol,
    addProtocol: addProtocol,
    updateProtocol: updateProtocol,
    removeProtocol: removeProtocol
  };
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"defaultStrategy.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/protocolStore/defaultStrategy.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// The ProtocolStore default strategy is used to persist hanging protocols in
// the MongoDB collection 'HangingProtocols' in the application server.
var defaultStrategy = function () {
  var hangingProtocolSubs;

  function addDefaultProtocols() {
    console.log('Inserting default protocols');
    addProtocol(HP.defaultProtocol); //addProtocol(HP.testProtocol);

    /* HP.demoProtocols.forEach(protocol => {
        addProtocol(protocol);
    });*/
  }

  function getDatabaseIdByProtocolId(protocolId) {
    var filteredProtocol = HangingProtocols.findOne({
      id: protocolId
    }, {
      fields: {
        _id: true
      }
    });

    if (!filteredProtocol) {
      return;
    }

    return filteredProtocol._id;
  }
  /**
   * Registers a function to be called when the hangingprotocols collection is subscribed
   * The callback is called only one time when the subscription is ready
   *
   * @param callback The function to be called as a callback
   */


  function onReady(callback) {
    if (hangingProtocolSubs && hangingProtocolSubs.ready()) {
      // It is already ready
      callback();
    } else {
      // Subscribe the hangingprotocols collection
      hangingProtocolSubs = Meteor.subscribe('hangingprotocols'); // Wait for the subscription to be ready

      Tracker.autorun(function (computation) {
        if (hangingProtocolSubs.ready()) {
          computation.stop();
          addDefaultProtocols();
          callback();
        }
      });
    }
  }
  /**
   * Gets the hanging protocol by protocolId if defined, otherwise all stored hanging protocols
   *
   * @param protocolId The protocol ID used to find the hanging protocol
   * @returns {object|array} The hanging protocol by protocolId or array of the stored hanging protocols
   */


  function getProtocol(protocolId) {
    // Return the hanging protocol by protocolId if defined
    if (protocolId) {
      return HangingProtocols.findOne({
        id: protocolId
      });
    } // Otherwise, return all protocols


    return HangingProtocols.find().fetch();
  }
  /**
   * Stores the hanging protocol
   *
   * @param protocol The hanging protocol to be stored
   */


  function addProtocol(protocol) {
    // Collections can only be updated by database ID (_id) on client, so
    // get the database ID (_id) by the hanging protocol ID firstly
    var databaseId = getDatabaseIdByProtocolId(protocol.id); // Remove any MongoDB ID the protocol may have had

    delete protocol._id; // Update the protocol with the same id if exists instead of inserting this protocol

    if (databaseId) {
      // Update the hanging protocol by the database ID
      HangingProtocols.update(databaseId, {
        $set: protocol
      });
      return;
    } // Insert the protocol


    HangingProtocols.insert(protocol);
  }
  /**
   * Updates the hanging protocol by protocolId
   *
   * @param protocolId The protocol ID used to find the hanging protocol to update
   * @param protocol The updated hanging protocol
   */


  function updateProtocol(protocolId, protocol) {
    // Collections can only be updated by database ID (_id) on client, so
    // get the database ID (_id) by the hanging protocol ID firstly
    var databaseId = getDatabaseIdByProtocolId(protocolId); // Skip if it does not exist in database

    if (!databaseId) {
      return;
    } // Remove any MongoDB ID the protocol may have had


    delete protocol._id; // Update the hanging protocol by the database ID

    HangingProtocols.update(databaseId, {
      $set: protocol
    });
  }
  /**
   * Removes the hanging protocol
   *
   * @param protocolId The protocol ID used to remove the hanging protocol
   */


  function removeProtocol(protocolId) {
    // Collections can only be removed by database ID (_id) on client, so
    // get the database ID (_id) by the hanging protocol ID firstly
    var databaseId = getDatabaseIdByProtocolId(protocolId); // Skip if it does not exist in database

    if (!databaseId) {
      return;
    } // Remove the hanging protocol by the database ID


    HangingProtocols.remove(databaseId);
  } // Module Exports


  return {
    onReady: onReady,
    getProtocol: getProtocol,
    addProtocol: addProtocol,
    updateProtocol: updateProtocol,
    removeProtocol: removeProtocol
  };
}();

HP.ProtocolStore.setStrategy(defaultStrategy);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"components":{"previousPresentationGroupButton":{"template.previousPresentationGroupButton.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/previousPresentationGroupButton/template.previousPresentationGrou //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("previousPresentationGroupButton");
Template["previousPresentationGroupButton"] = new Template("Template.previousPresentationGroupButton", (function() {
  var view = this;
  return HTML.DIV({
    id: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));
    },
    class: function() {
      return [ "toolbarSectionButton rp-x-1 ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "classes")), " ", Spacebars.mustache(view.lookup("activeClass")), " ", Blaze.If(function() {
        return Spacebars.call(view.lookup("previousNotAvailable"));
      }, function() {
        return "disabled";
      }) ];
    },
    title: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "title"));
    },
    disabled: function() {
      return Blaze.If(function() {
        return Spacebars.call(view.lookup("previousNotAvailable"));
      }, function() {
        return "true";
      });
    }
  }, "\n        ", HTML.DIV({
    class: "svgContainer"
  }, "\n        ", Blaze.If(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("."), "svgLink"));
  }, function() {
    return [ "\n        ", HTML.SVG("\n            ", HTML.USE({
      "xlink:href": function() {
        return Spacebars.mustache(view.lookup("absoluteUrl"), Spacebars.dot(view.lookup("."), "svgLink"));
      }
    }), "\n        "), "\n        " ];
  }, function() {
    return [ "\n            ", HTML.I({
      class: function() {
        return Spacebars.mustache(view.lookup("iconClasses"));
      }
    }), "\n        " ];
  }), "\n        "), "\n        ", HTML.DIV({
    class: "buttonLabel"
  }, "\n            ", Blaze.View("lookup:..title", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("."), "title"));
  }), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"previousPresentationGroupButton.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/previousPresentationGroupButton/previousPresentationGroupButton.j //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.previousPresentationGroupButton.helpers({
  /**
   * Check if an earlier stage exists for the user to switch to
   *
   * @returns {boolean} Whether or not an earlier stage exists
   */
  previousNotAvailable: function () {
    // Run this helper whenever the ProtocolEngine / LayoutManager has changed
    Session.get('LayoutManagerUpdated'); // If no ProtocolEngine has been defined yet, stop here

    if (!ProtocolEngine) {
      return;
    } // Return whether or not the current stage is the first stage


    return ProtocolEngine.stage === 0;
  }
});
Template.previousPresentationGroupButton.events({
  /**
   * Switch to the previous Presentation group
   *
   * @param event The click event on the button
   */
  'click #previousPresentationGroup': function (event) {
    // If no ProtocolEngine has been defined yet, do nothing
    if (!ProtocolEngine) {
      return;
    } // Stop here if the tool is disabled


    if ($(event.currentTarget).hasClass('disabled')) {
      return;
    } // Hide the button's Bootstrap tooltip in case it was shown


    $(event.currentTarget).tooltip('hide'); // Instruct the ProtocolEngine to switch to the next stage

    ProtocolEngine.previousProtocolStage();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"nextPresentationGroupButton":{"template.nextPresentationGroupButton.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/nextPresentationGroupButton/template.nextPresentationGroupButton. //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("nextPresentationGroupButton");
Template["nextPresentationGroupButton"] = new Template("Template.nextPresentationGroupButton", (function() {
  var view = this;
  return HTML.DIV({
    id: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));
    },
    class: function() {
      return [ "toolbarSectionButton rp-x-1 ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "classes")), " ", Spacebars.mustache(view.lookup("activeClass")), " ", Blaze.If(function() {
        return Spacebars.call(view.lookup("nextNotAvailable"));
      }, function() {
        return "disabled";
      }) ];
    },
    title: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "title"));
    },
    disabled: function() {
      return Blaze.If(function() {
        return Spacebars.call(view.lookup("nextNotAvailable"));
      }, function() {
        return "true";
      });
    }
  }, "\n    ", HTML.DIV({
    class: "svgContainer"
  }, "\n        ", Blaze.If(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("."), "svgLink"));
  }, function() {
    return [ "\n        ", HTML.SVG("\n            ", HTML.USE({
      "xlink:href": function() {
        return Spacebars.mustache(view.lookup("absoluteUrl"), Spacebars.dot(view.lookup("."), "svgLink"));
      }
    }), "\n        "), "\n        " ];
  }, function() {
    return [ "\n        ", HTML.I({
      class: function() {
        return Spacebars.mustache(view.lookup("iconClasses"));
      }
    }), "\n        " ];
  }), "\n    "), "\n        ", HTML.DIV({
    class: "buttonLabel"
  }, "\n            ", Blaze.View("lookup:..title", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("."), "title"));
  }), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"nextPresentationGroupButton.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/nextPresentationGroupButton/nextPresentationGroupButton.js        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.nextPresentationGroupButton.helpers({
  /**
   * Check if a later stage exists for the user to switch to
   *
   * @returns {boolean} Whether or not a later stage exists
   */
  nextNotAvailable: function () {
    // Run this helper whenever the ProtocolEngine / LayoutManager has changed
    Session.get('LayoutManagerUpdated'); // If no ProtocolEngine has been defined yet, stop here

    if (!ProtocolEngine) {
      return;
    } // Return whether or not the current stage is the last stage


    return ProtocolEngine.stage === ProtocolEngine.getNumProtocolStages() - 1;
  }
});
Template.nextPresentationGroupButton.events({
  /**
   * Switch to the next Presentation group
   *
   * @param event The click event on the button
   */
  'click #nextPresentationGroup': function (event) {
    // If no ProtocolEngine has been defined yet, do nothing
    if (!ProtocolEngine) {
      return;
    } // Stop here if the tool is disabled


    if ($(event.currentTarget).hasClass('disabled')) {
      return;
    } // Hide the button's Bootstrap tooltip in case it was shown


    $(event.currentTarget).tooltip('hide'); // Instruct the ProtocolEngine to switch to the next stage

    ProtocolEngine.nextProtocolStage();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"matchedProtocols":{"template.matchedProtocols.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/matchedProtocols/template.matchedProtocols.js                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("matchedProtocols");
Template["matchedProtocols"] = new Template("Template.matchedProtocols", (function() {
  var view = this;
  return HTML.DIV({
    id: "matchedProtocols",
    class: "btn-group"
  }, "\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("matchedProtocols"));
  }, function() {
    return [ "\n        ", HTML.BUTTON({
      type: "button",
      class: "btn btn-sm dropdown-toggle",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false",
      title: "Select Hanging Protocol"
    }, "\n            ", HTML.I({
      class: "fa fa-list-ol"
    }), "\n            ", HTML.SPAN({
      class: "caret"
    }), "\n        "), "\n        ", HTML.UL({
      class: "dropdown-menu"
    }, "\n            ", HTML.LI("\n                ", HTML.H5("Select a Hanging Protocol"), "\n            "), "\n            ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("matchedProtocols"));
    }, function() {
      return [ "\n            ", HTML.LI("\n                ", HTML.A({
        class: function() {
          return [ "matchedProtocol ", Blaze.If(function() {
            return Spacebars.call(view.lookup("active"));
          }, function() {
            return "active";
          }) ];
        }
      }, "\n                    ", Blaze.View("lookup:name", function() {
        return Spacebars.mustache(view.lookup("name"));
      }), "\n                "), "\n            "), "\n            " ];
    }), "\n        "), "\n        " ];
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"matchedProtocols.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/matchedProtocols/matchedProtocols.js                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
Template.matchedProtocols.helpers({
  /**
   * Reactively re-render the MatchedProtocols Collection contents
   */
  matchedProtocols: function () {
    return MatchedProtocols.find();
  }
});
Template.matchedProtocols.events({
  /**
   * Instruct the ProtocolEngine to apply the specified Hanging Protocol
   */
  'click .matchedProtocol': function () {
    var protocol = this;
    ProtocolEngine.setHangingProtocol(protocol);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"protocolEditor":{"template.protocolEditor.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/protocolEditor/template.protocolEditor.js                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("protocolEditor");
Template["protocolEditor"] = new Template("Template.protocolEditor", (function() {
  var view = this;
  return HTML.DIV({
    id: "protocolEditor"
  }, HTML.Raw('\n        <div class="row navigationButtonsContainer">\n            <div class="navigationButtons col-xs-12">\n                <ul class="nav nav-pills">\n                    <li class="active">\n                        <a data-toggle="tab" href="#protocolRulePane">\n                            Protocol\n                        </a>\n                    </li>\n                    <li>\n                        <a data-toggle="tab" href="#activeViewportEditor">\n                            Active Viewport\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        '), HTML.DIV({
    class: "tab-content"
  }, "\n            ", HTML.DIV({
    id: "protocolRulePane",
    class: "tab-pane active"
  }, "\n                ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("activeProtocol"));
  }, function() {
    return [ "\n                ", HTML.DIV({
      id: "selectProtocol",
      class: "protocolEditorSection"
    }, "\n                    ", HTML.SELECT({
      id: "protocolSelect",
      style: "width: 50%"
    }, "\n                    "), "\n                    ", HTML.DIV({
      class: "dropdown protocolDropdown"
    }, "\n                        ", HTML.BUTTON({
      type: "button",
      class: "btn btn-sm dropdown-toggle",
      id: "protocolDropdown",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "true"
    }, "\n                            ", HTML.I({
      class: "fa fa-cog"
    }), " ", HTML.SPAN({
      class: "caret"
    }), "\n                        "), "\n                        ", HTML.UL({
      class: "dropdown-menu dropdown-menu-right",
      "aria-labelledby": "protocolDropdown"
    }, "\n                            ", HTML.LI("\n                                ", HTML.A({
      id: "newProtocol"
    }, "\n                                    New ", HTML.I({
      class: "fa fa-file-text"
    }), "\n                                "), "\n                            "), "\n                            ", HTML.LI("\n                                ", HTML.A({
      id: "importProtocol",
      class: "btn-file"
    }, "\n                                    Import ", HTML.INPUT({
      type: "file"
    }), " ", HTML.I({
      class: "fa fa-upload"
    }), "\n                                "), "\n                            "), "\n                            ", Blaze.Unless(function() {
      return Spacebars.call(view.lookup("locked"));
    }, function() {
      return [ "\n                            ", HTML.LI("\n                                ", HTML.A({
        id: "renameProtocol"
      }, "\n                                    Rename ", HTML.I({
        class: "fa fa-pencil"
      }), "\n                                "), "\n                            "), "\n                            " ];
    }), "\n                            ", HTML.LI("\n                                ", HTML.A({
      id: "saveAsProtocol"
    }, "\n                                    Save As ", HTML.I({
      class: "fa fa-files-o"
    }), "\n                                "), "\n                            "), "\n                            ", HTML.LI("\n                                ", HTML.A({
      id: "exportJSON"
    }, "\n                                    Export ", HTML.I({
      class: "fa fa-download"
    }), "\n                                "), "\n                            "), "\n                            ", Blaze.Unless(function() {
      return Spacebars.call(view.lookup("locked"));
    }, function() {
      return [ "\n                            ", HTML.LI("\n                                ", HTML.A({
        id: "deleteProtocol"
      }, "\n                                    Delete ", HTML.I({
        class: "fa fa-trash-o"
      }), "\n                                "), "\n                            "), "\n                            " ];
    }), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.DIV({
      id: "editProtocol",
      class: "protocolEditorSection"
    }, "\n                    ", HTML.DIV({
      class: "row"
    }, "\n                        ", HTML.DIV({
      class: "col-xs-12"
    }, "\n                            ", HTML.P("Created: ", Blaze.View("lookup:formatJSDate", function() {
      return Spacebars.mustache(view.lookup("formatJSDate"), view.lookup("createdDate"));
    }), Blaze.If(function() {
      return Spacebars.call(view.lookup("createdBy"));
    }, function() {
      return [ " by ", Blaze.View("lookup:getUsername", function() {
        return Spacebars.mustache(view.lookup("getUsername"), view.lookup("createdBy"));
      }) ];
    })), "\n                            ", HTML.P("Last modified: ", Blaze.View("lookup:formatJSDate", function() {
      return Spacebars.mustache(view.lookup("formatJSDate"), view.lookup("modifiedDate"));
    }), Blaze.If(function() {
      return Spacebars.call(view.lookup("createdBy"));
    }, function() {
      return [ " by ", Blaze.View("lookup:getUsername", function() {
        return Spacebars.mustache(view.lookup("getUsername"), view.lookup("modifiedBy"));
      }) ];
    })), "\n                            ", HTML.P("Number of Priors Referenced: ", Blaze.View("lookup:numberOfPriorsReferenced", function() {
      return Spacebars.mustache(view.lookup("numberOfPriorsReferenced"));
    })), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      class: "row"
    }, "\n                        ", HTML.H3("Protocol Applicability"), "\n                        ", HTML.HR(), "\n                        ", Blaze._TemplateWith(function() {
      return {
        level: Spacebars.call("protocol"),
        rules: Spacebars.call(view.lookup("protocolMatchingRules")),
        attributes: Spacebars.call(view.lookup("studyAttributes"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("ruleTable"));
    }), "\n                    "), "\n                    ", HTML.DIV({
      class: "row"
    }, "\n                        ", HTML.H3("Stages"), "\n                        ", HTML.HR(), "\n                        ", Blaze._TemplateWith(function() {
      return {
        stages: Spacebars.call(view.lookup("stages"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("stageSortable"));
    }), "\n                    "), "\n                "), "\n                " ];
  }), "\n            "), "\n\n            ", HTML.DIV({
    id: "activeViewportEditor",
    class: "tab-pane"
  }, "\n                ", Blaze.If(function() {
    return Spacebars.call(view.lookup("activeViewportUndefined"));
  }, function() {
    return [ "\n                    ", HTML.DIV({
      class: "noActiveViewport"
    }, "\n                        ", HTML.H2("Select a Viewport"), "\n                        ", HTML.HR(), "\n                        ", HTML.P("\n                            Upon selecting a Viewport, this section will show a list of rules that can be used\n                            to determine which images will populate the specified Viewport. You can specify these\n                            rules to be evaluated at the study, series, or image level.\n                        "), "\n                    "), "\n                " ];
  }), "\n                ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("activeStage"));
  }, function() {
    return [ "\n                ", Spacebars.include(view.lookupTemplate("stageDetails")), "\n                " ];
  }), "\n            "), "\n        "), "\n\n        ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("activeProtocol"));
  }, function() {
    return [ "\n        ", HTML.DIV({
      id: "protocolOptions",
      class: "protocolEditorSection"
    }, "\n            ", Blaze.If(function() {
      return Spacebars.call(view.lookup("locked"));
    }, function() {
      return [ "\n            ", HTML.BUTTON({
        id: "saveProtocol",
        type: "button",
        class: "btn btn-sm",
        disabled: ""
      }, "\n                Locked ", HTML.I({
        class: "fa fa-lock",
        "aria-hidden": "true"
      }), "\n            "), "\n            " ];
    }, function() {
      return [ "\n            ", HTML.BUTTON({
        id: "saveProtocol",
        type: "button",
        class: "btn btn-sm"
      }, "\n                Save Changes ", HTML.I({
        class: "fa fa-floppy-o",
        "aria-hidden": "true"
      }), "\n            "), "\n            " ];
    }), "\n\n            ", Blaze.If(function() {
      return Spacebars.call(view.lookup("modifiedDate"));
    }, function() {
      return [ "\n            ", HTML.P({
        class: "lastSavedText"
      }, "Last saved ", Blaze.View("lookup:jsDateFromNow", function() {
        return Spacebars.mustache(view.lookup("jsDateFromNow"), view.lookup("modifiedDate"));
      })), "\n            " ];
    }), "\n        "), "\n        ", HTML.A({
      id: "downloadElement",
      style: "display:none;"
    }), "\n        " ];
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"protocolEditor.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/protocolEditor/protocolEditor.js                                  //
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
var Random;
module.watch(require("meteor/random"), {
  Random: function (v) {
    Random = v;
  }
}, 3);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 4);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 5);
module.watch(require("meteor/ohif:viewerbase"));

/**
 * Updates the Hanging Protocol Select2 Input
 */
function updateProtocolSelect() {
  if (!ProtocolEngine) {
    return;
  } // Loop through the available hanging protocols
  // to create an array with the protocols that includes
  // a property labelled 'text', so that Select2 has something
  // to display


  var protocolsSelect2Data = HP.ProtocolStore.getProtocol().map(function (protocol) {
    return {
      id: protocol.id,
      text: protocol.name
    };
  }); // Select the Protocol select DOM element

  var protocolSelect = $('#protocolSelect'); // Empty the element using Select2 for rerendering

  protocolSelect.select2().empty(); // Initialize the select element with Select2 using the
  // array of protocols

  protocolSelect.select2({
    data: protocolsSelect2Data
  }); // Update the ProtocolSelector to display the current active Protocol

  protocolSelect.select2().val(ProtocolEngine.protocol.id).trigger('change');
}

Template.protocolEditor.onRendered(function () {
  var instance = Template.instance();
  instance.timeAgoInterval = Meteor.setInterval(function () {
    // Run this every minute
    Session.set('timeAgoVariable', new Date());
  }, 60000); // Update the Protocol select box when the hanging protocol store is ready

  HP.ProtocolStore.onReady(function () {
    updateProtocolSelect();
  });
});
Template.protocolEditor.onDestroyed(function () {
  var instance = Template.instance();
  Meteor.clearInterval(instance.timeAgoInterval);
});
Template.protocolEditor.helpers({
  /**
   * Reactively updates the active Protocol
   *
   * @returns {*} The currently active Protocol Model
   */
  activeProtocol: function () {
    // Whenever the Layout Manager is updated, trigger this helper
    Session.get('LayoutManagerUpdated'); // If no ProtocolEngine, protocol, or stage is defined, stop here

    if (!ProtocolEngine || !ProtocolEngine.protocol || !ProtocolEngine.LayoutManager || ProtocolEngine.stage === undefined) {
      return;
    } // Update the Protocol Select box


    updateProtocolSelect(); // Make sure that the number of referenced priors is correct

    ProtocolEngine.protocol.updateNumberOfPriorsReferenced(); // Otherwise, return the active Hanging Protocol

    return ProtocolEngine.protocol;
  },

  /**
   * Reactively updates the active Protocol Stage
   *
   * @returns {*} The current Protocol's active Stage model
   */
  activeStage: function () {
    // Whenever the Layout Manager is updated, trigger this helper
    Session.get('LayoutManagerUpdated'); // If no ProtocolEngine, protocol, or stage is defined, stop here

    if (!ProtocolEngine || !ProtocolEngine.protocol || !ProtocolEngine.LayoutManager || ProtocolEngine.stage === undefined) {
      return;
    } // Retrieve the Stage Model for the current Protocol's active Stage


    var stage = ProtocolEngine.getCurrentStageModel();

    if (!stage) {
      return;
    } // Update active Stage's layout template and properties based on the displayed
    // layout properties. This is used to update the Stage Model when the user modifies
    // the layout in the viewer


    stage.viewportStructure.layoutTemplateName = ProtocolEngine.LayoutManager.layoutTemplateName;
    stage.viewportStructure.properties = ProtocolEngine.LayoutManager.layoutProps; // If there is a discrepancy between the Stage's number of viewports and the
    // the number of required viewports given the properties above, rectify it
    // by removing or adding Viewports to the stage
    //
    // First, calculate the difference, if any exists

    var difference = stage.viewportStructure.getNumViewports() - stage.viewports.length;

    if (difference < 0) {
      // Make the viewport difference into a positive value
      var absDifference = Math.abs(difference); // If there are more Viewports defined than necessary, remove the extraneous Viewports

      var position = stage.viewports.length - absDifference; // Splice extra viewports from the Stage's viewports array

      stage.viewports.splice(position, absDifference);
    } else if (difference > 0) {
      // If there are less Viewports defined than necessary, add viewports until we reach the
      // required amount
      // Count up until the difference in number of Viewports
      for (var i = 0; i < difference; i++) {
        // Instantiate a new Viewport Model
        var viewport = new HP.Viewport(); // Add new Viewports to the Stage's viewports array

        stage.viewports.push(viewport);
      }
    } // Return the current Stage model for the active Protocol


    return ProtocolEngine.getCurrentStageModel();
  },
  activeViewportUndefined: function () {
    var viewportIndex = Session.get('activeViewport');
    return viewportIndex === undefined;
  }
});
Template.protocolEditor.events({
  /**
   * Creates a new Hanging Protocol and displays it in the Viewer
   */
  'click #newProtocol': function () {
    // Clone the default Protocol
    var protocol = HP.defaultProtocol.createClone(); // Change the Protocol name to state that it is New, and give it a timestamp

    protocol.name = 'New (created ' + moment().format('h:mm:ss a') + ')'; // Change the Protocol ID from the default value

    protocol.id = Random.id(); // Insert the protocol

    HP.ProtocolStore.addProtocol(protocol); // Activate the new Protocol using the ProtocolEngine

    ProtocolEngine.setHangingProtocol(protocol); // Update the protocol selector to display the new Protocols

    updateProtocolSelect();
  },

  /**
   * Rename the current Protocol
   */
  'click #renameProtocol': function () {
    var selectedProtocol = this;

    if (selectedProtocol.locked) {
      return;
    } // Define some details for the text entry dialog


    var title = 'Rename Protocol';
    var instructions = 'Enter a new name';
    var currentValue = selectedProtocol.name; // Open the text entry dialog with the details above
    // and fire the callback function when finished.

    openTextEntryDialog(title, instructions, currentValue, function (value) {
      // Update the name with the entered text
      selectedProtocol.name = value; // Update the protocol

      HP.ProtocolStore.updateProtocol(selectedProtocol.id, selectedProtocol); // Update the protocol selector

      updateProtocolSelect();
    });
  },

  /**
   * Import a Protocol
   */
  'click #importProtocol': function () {
    // Hide the protocol dropdown manually, because it is not hidden automatically
    // when it has input as a child
    $("#protocolDropdown").dropdown('toggle');
  },

  /**
   * Triggers a custom event when for the HTML5 File input when files are selected
   *
   * @param event The Change event for the input
   */
  'change .btn-file :file': function (event) {
    // http://www.abeautifulsite.net/whipping-file-inputs-into-shape-with-bootstrap-3/
    // Find the Input in the DOM
    var input = $(event.currentTarget); // Get the number of selected files

    var numFiles = input.get(0).files ? input.get(0).files.length : 1; // Get the label of the file

    var label = input.val().replace(/\\/g, '/').replace(/.*\//, ''); // Trigger our custom event with the number of files and label

    input.trigger('fileselect', [numFiles, label]);
  },

  /**
   * Imports files selected by the user into the Hanging Protocols Collection
   *
   * @param event The custom fileselect event
   */
  'fileselect .btn-file :file': function (event) {
    // Retreieve the FileList
    var files = event.target.files; // Create an HTML5 File Reader

    var reader = new FileReader();

    reader.onload = function () {
      var protocolToImport = JSON.parse(reader.result); // Insert the protocol

      HP.ProtocolStore.addProtocol(protocolToImport); // Update the protocol selector to display the imported Protocol

      updateProtocolSelect();
    }; // Instruct the FileReader to read the (first) selected file
    // TODO: Update to allow batch uploads?


    reader.readAsText(files[0], 'utf-8');
  },

  /**
   * Set the Hanging Protocol when the select box is changed
   *
   * @param event The select2:select event
   */
  'select2:select #protocolSelect': function (event) {
    // Retrieve the protocolId
    var protocolId = event.params.data.id; // Retrieve the protocol from the protocol store

    var selectedProtocol = HP.ProtocolStore.getProtocol(protocolId); // If it doesn't exist, stop here

    if (!selectedProtocol) {
      return;
    } // Set the current Hanging Protocol to the user-specified Protocol


    ProtocolEngine.setHangingProtocol(selectedProtocol);
  },

  /**
   * Allow the Protocols / Stage navigation tabs to toggle the
   * 'active' class when clicked
   */
  'click .navigationButtons a': function () {
    $(this).addClass('active').siblings().removeClass('active');
  },

  /**
   * Update the protocol with the latest changes to the current Protocol
   */
  'click #saveProtocol': function () {
    var selectedProtocol = this;

    if (selectedProtocol.locked) {
      return;
    } // Update the Protocol's modifiedDate and modifiedBy User details


    selectedProtocol.protocolWasModified(); // Update the current Protocol in the database with the latest changes

    HP.ProtocolStore.updateProtocol(selectedProtocol.id, selectedProtocol);
  },

  /**
   * Save the current Protocol as a new document
   */
  'click #saveAsProtocol': function () {
    var selectedProtocol = this; // Clone the selected Protocol

    var protocol = selectedProtocol.createClone(); // Define some details for the text entry dialog

    var title = 'Save Protocol As';
    var instructions = 'Enter a new name';
    var currentValue = protocol.name; // Open the text entry dialog with the details above
    // and fire the callback function when finished.

    openTextEntryDialog(title, instructions, currentValue, function (value) {
      // Create a new ID for the protocol
      protocol.id = Random.id(); // Update the name with the entered text

      protocol.name = value; // Unlock the protocol

      protocol.locked = false; // Update the Protocol's modifiedDate and modifiedBy User details

      protocol.protocolWasModified(); // Insert the new Protocol

      HP.ProtocolStore.addProtocol(protocol); // Activate the new Protocol using the ProtocolEngine

      ProtocolEngine.setHangingProtocol(protocol); // Update the protocol selector to display the new Protocols

      updateProtocolSelect();
    });
  },

  /**
   * Export the currently selected Protocol as a JSON file
   */
  'click #exportJSON': function () {
    var selectedProtocol = this;
    var protocolJSON = JSON.stringify(selectedProtocol, null, 2),
        currentDate = new Date(),
        filename = selectedProtocol.name + '-' + currentDate.getTime().toString() + '.json',
        protocolBlob = new Blob([protocolJSON], {
      type: 'application/json'
    });
    var downloadElement = document.getElementById('downloadElement');
    downloadElement.href = URL.createObjectURL(protocolBlob);
    downloadElement.download = filename;
    downloadElement.click();
  },

  /**
   * Delete the currently selected Protocol
   */
  'click #deleteProtocol': function () {
    var selectedProtocol = this;

    if (selectedProtocol.locked) {
      return;
    }

    var options = {
      title: 'Delete Protocol',
      text: 'Are you sure you would like to remove this Protocol? This cannot be reversed.'
    };
    OHIF.viewerbase.dialogUtils.showConfirmDialog(function () {
      // Remove the Protocol
      HP.ProtocolStore.removeProtocol(selectedProtocol.id); // Reset the ProtocolEngine to the next best match

      ProtocolEngine.reset(); // Update the protocol selector

      updateProtocolSelect();
    }, options);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ruleTable":{"template.ruleTable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/ruleTable/template.ruleTable.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("ruleTable");
Template["ruleTable"] = new Template("Template.ruleTable", (function() {
  var view = this;
  return [ HTML.TABLE({
    class: "ruleTable table"
  }, "\n        ", HTML.THEAD("\n        ", HTML.TR("\n            ", HTML.TH("Constraint"), "\n            ", HTML.TH("Wt."), "\n            ", HTML.TH("Req."), "\n        "), "\n        "), "\n        ", HTML.TBODY("\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("rules"));
  }, function() {
    return [ "\n        ", Blaze.If(function() {
      return Spacebars.call(view.lookup("constraint"));
    }, function() {
      return [ "\n        ", HTML.TR("\n            ", HTML.TD("\n                ", HTML.I({
        class: "fa fa-pencil editRule"
      }), "\n                ", HTML.I({
        class: "fa fa-trash deleteRule"
      }), "\n                ", Blaze.View("lookup:displayConstraint", function() {
        return Spacebars.mustache(view.lookup("displayConstraint"), view.lookup("attribute"), view.lookup("constraint"), Spacebars.dot(view.lookup(".."), "attributes"));
      }), "\n                ", Blaze.Unless(function() {
        return Spacebars.call(view.lookup("rulePassed"));
      }, function() {
        return HTML.SMALL({
          class: "failWarning"
        }, "Fail");
      }), "\n            "), "\n            ", HTML.TD(HTML.INPUT({
        class: "ruleWeight",
        type: "number",
        value: function() {
          return Spacebars.mustache(view.lookup("weight"));
        },
        min: "1",
        step: "1",
        max: "1000"
      })), "\n            ", HTML.TD(HTML.INPUT(HTML.Attrs({
        class: "ruleRequired",
        type: "checkbox"
      }, function() {
        return Spacebars.attrMustache(view.lookup("valueIf"), view.lookup("required"), "checked", "");
      }))), "\n        "), "\n        " ];
    }), "\n        " ];
  }), "\n        "), "\n    "), HTML.Raw('\n    <div class="addRuleContainer">\n        <span class="addRule">\n            Add New Constraint <i class="fa fa-plus-circle"></i>\n        </span>\n    </div>') ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ruleTable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/ruleTable/ruleTable.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.ruleTable.helpers({
  /**
   * Retrieve validation data on each rule for the active viewport
   *
   * @returns {boolean} Whether or not the current rule passed for the active viewport
   */
  rulePassed: function () {
    // Retrieve the latest match details given the active viewport index
    var viewportIndex = Session.get('activeViewport');
    var details = ProtocolEngine.matchDetails[viewportIndex]; // If no match was found, stop here

    if (!details || !details.bestMatch) {
      return;
    } // Retrieve the list of failed rules for this Viewport


    var failed = details.bestMatch.matchDetails.failed; // Check if the current rule failed or not

    var rule = this;
    var hasPassed = true;
    failed.forEach(function (failedRuleData) {
      var failedRule = failedRuleData.rule;

      if (failedRule.id === rule.id) {
        hasPassed = false;
        return false;
      }
    }); // Return a boolean representing whether or not the rule passed

    return hasPassed;
  }
});
Template.ruleTable.events({
  /**
   * Opens the Rule Entry dialog to allow the user to create a new rule
   * Specifies attributes and rule level for the Rule Entry dialog
   * based on the data given to this template.
   */
  'click .addRule': function () {
    // Get the current template data
    var data = Template.currentData(); // Retrieve the rule attributes and level (e.g. study / series / instance)

    var attributes = data.attributes;
    var level = data.level; // Open the Rule Entry Dialog with the attributes, level, and rule

    openRuleEntryDialog(attributes, level);
  },

  /**
   * Opens the Rule Entry dialog to allow the user to edit an existing
   * rule. Passes rule details to the dialog so its current properties
   * can be displayed.
   *
   * Specifies attributes and rule level for the Rule Entry dialog
   * based on the data given to this template.
   */
  'click .editRule': function () {
    // Get the current template data
    var data = Template.currentData(); // Retrieve the rule attribtes and level (e.g. study / series / instance)

    var attributes = data.attributes;
    var level = data.level; // Get the properties of the current rule

    var rule = this; // Open the Rule Entry Dialog with the attributes, level, and rule

    openRuleEntryDialog(attributes, level, rule);
  },

  /**
   * Removes a rule from the current Viewport or Protocol depending on
   * the type of rule
   */
  'click .deleteRule': function () {
    // Get the properties of the current rule
    var rule = this;

    if (rule instanceof HP.ProtocolMatchingRule) {
      // If this Rule is evaluated at the protocol level,
      // remove it from the current Protocol
      ProtocolEngine.protocol.removeProtocolMatchingRule(rule);
    } else {
      // If this Rule is evaluated at the Viewport level,
      // remove it from the active viewport model
      var viewport = getActiveViewportModel();
      viewport.removeRule(rule);
    } // Instruct the Protocol Engine to update the Layout Manager with new data


    var viewportIndex = Session.get('activeViewport');
    ProtocolEngine.updateViewports(viewportIndex);
  },

  /**
   * Updates a Rule's weight in response to user input
   *
   * @param event The input change event
   */
  'change .ruleWeight': function (event) {
    // Get the properties of the current rule
    var rule = this; // Update the value of the rule weight

    rule.weight = $(event.currentTarget).val(); // Instruct the Protocol Engine to update the Layout Manager with new data

    var viewportIndex = Session.get('activeViewport');
    ProtocolEngine.updateViewports(viewportIndex);
  },

  /**
   * Updates a Rule's 'required' property in response to user input
   *
   * @param event The input change event
   */
  'change .ruleRequired': function (event) {
    // Get the properties of the current rule
    var rule = this; // Update the value of the 'required' property

    rule.required = $(event.currentTarget).prop('checked'); // Instruct the Protocol Engine to update the Layout Manager with new data

    var viewportIndex = Session.get('activeViewport');
    ProtocolEngine.updateViewports(viewportIndex);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ruleEntryDialog":{"template.ruleEntryDialog.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/ruleEntryDialog/template.ruleEntryDialog.js                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("ruleEntryDialog");
Template["ruleEntryDialog"] = new Template("Template.ruleEntryDialog", (function() {
  var view = this;
  return HTML.DIV({
    class: "ruleEntryDialog dialog-animated"
  }, HTML.Raw('\n        <div class="dialogHeader">\n            <h5>Rule Editor</h5>\n        </div>\n        '), HTML.DIV({
    class: "dialogContent"
  }, "\n            ", HTML.Raw('<div class="row">\n                <div class="col-xs-12">\n                    <select class="attributes" style="width: 95%;">\n                    </select>\n                </div>\n            </div>'), "\n            ", HTML.DIV({
    class: "row"
  }, "\n                ", HTML.DIV({
    class: "col-xs-12"
  }, "\n                    ", HTML.SELECT({
    class: "comparators",
    style: "width: 95%;"
  }, "\n                        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("comparators"));
  }, function() {
    return [ "\n                        ", HTML.OPTION({
      value: function() {
        return Spacebars.mustache(view.lookup("id"));
      }
    }, Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    })), "\n                        " ];
  }), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    class: "row"
  }, "\n                ", HTML.DIV({
    class: "col-xs-12"
  }, "\n                    ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("ifTypeIs"), view.lookup("currentValue"), "string");
  }, function() {
    return [ "\n                    ", HTML.INPUT({
      class: "currentValue",
      type: "text",
      value: function() {
        return Spacebars.mustache(view.lookup("currentValue"));
      }
    }), "\n                    " ];
  }), "\n\n                    ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("ifTypeIs"), view.lookup("currentValue"), "undefined");
  }, function() {
    return [ "\n                    ", HTML.INPUT({
      class: "currentValue",
      type: "text",
      value: function() {
        return Spacebars.mustache(view.lookup("currentValue"));
      }
    }), "\n                    " ];
  }), "\n\n                    ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("ifTypeIs"), view.lookup("currentValue"), "number");
  }, function() {
    return [ "\n                    ", HTML.INPUT({
      class: "currentValue",
      type: "number",
      value: function() {
        return Spacebars.mustache(view.lookup("currentValue"));
      }
    }), "\n                    " ];
  }), "\n\n                    ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("ifTypeIs"), view.lookup("currentValue"), "boolean");
  }, function() {
    return [ "\n                    ", HTML.INPUT(HTML.Attrs({
      class: "currentValue",
      type: "checkbox"
    }, function() {
      return Spacebars.attrMustache(view.lookup("valueIf"), view.lookup("currentValue"), "selected", "");
    })), "\n                    " ];
  }), "\n                "), "\n            "), "\n        "), HTML.Raw('\n        <div class="dialogFooter">\n            <button id="cancel" class="btn btn-link" tabindex="1">Cancel</button>\n            <button id="save" class="btn btn-primary" tabindex="0">OK</button>\n        </div>\n    '));
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ruleEntryDialog.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/ruleEntryDialog/ruleEntryDialog.js                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 0);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 1);
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 2);
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 3);
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 4);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 5);
var Viewerbase;
module.watch(require("meteor/ohif:viewerbase"), {
  Viewerbase: function (v) {
    Viewerbase = v;
  }
}, 6);
var keys = {
  ESC: 27
};
/**
 * Close the specified dialog element and return browser
 * focus to the active viewport.
 *
 * @param dialog The DOM element of the dialog to close
 */

function closeHandler(dialog) {
  // Hide the lesion dialog
  $(dialog).css('display', 'none'); // Remove the backdrop

  $('.removableBackdrop').remove(); // Restore the focus to the active viewport

  Viewerbase.setFocusToActiveViewport();
}
/**
 * Displays and updates the UI of the Rule Entry Dialog given a new set of
 * attributes, the rule level (protocol, study, series, or instance), and an
 * optional rule to edit.
 *
 * @param attributes List of attributes the user can set
 * @param level Level of the Rule to create / edit
 * @param rule Optional Rule
 */


openRuleEntryDialog = function (attributes, level, rule) {
  // Get the lesion location dialog
  var dialog = $('.ruleEntryDialog'); // Clear any input that is still on the page

  var currentValueInput = dialog.find('input.currentValue');
  currentValueInput.val(''); // Store the Dialog DOM data, rule level and rule in the template data

  Template.ruleEntryDialog.dialog = dialog;
  Template.ruleEntryDialog.level = level;
  Template.ruleEntryDialog.rule = rule; // Initialize the Select2 search box for the attribute list

  var attributeSelect = dialog.find('.attributes');
  attributeSelect.html('').select2({
    data: attributes,
    placeholder: 'Select an attribute',
    allowClear: true
  }); // If a rule has been provided, set the value of the attribute Select2 input
  // to the attribute set in the rule.

  if (rule && rule.attribute) {
    attributeSelect.val(rule.attribute);
  } // Event data to be passed to the event handler


  var eventData; // If a rule has been provided, use its constraint to find the relevant Comparator

  if (rule && rule.constraint) {
    var validator = Object.keys(rule.constraint)[0];
    var validatorOption = Object.keys(rule.constraint[validator])[0];
    var comparator = Comparators.findOne({
      validator: validator,
      validatorOption: validatorOption
    }); // Set the current value input based on the rule constraint

    var currentValue = rule.constraint[validator][validatorOption];
    currentValueInput.val(currentValue);
    eventData = currentValue; // If a Comparator was found, set the default value of the Comparators select2 box
    // to the comparatorId in the input rule

    if (comparator) {
      // Trigger('change') is used to update the Select2 choice in the UI
      dialog.find('.comparators').val(comparator.id).trigger('change');
    }
  } // Trigger('change') is used to update the Select2 choice in the UI and so
  // that the currentValue is updated based on the current attribute


  attributeSelect.trigger('change', eventData); // Update the dialog's CSS so that it is visible on the page

  dialog.css('display', 'block'); // Show the backdrop

  Blaze.render(Template.removableBackdrop, document.body); // Make sure the context menu is closed when the user clicks away

  $('.removableBackdrop').one('mousedown touchstart', function () {
    closeHandler(dialog);
  });
};
/**
 * Retrieves the current active element's imageId using Cornerstone
 */


function getActiveViewportImageId() {
  var enabledElement = Viewerbase.viewportUtils.getEnabledElementForActiveElement();

  if (!enabledElement) {
    return;
  } // Return the enabled element's imageId


  return enabledElement.image.imageId;
}

function getAbstractPriorValue(imageId) {
  // @TypeSafeStudies
  // Retrieves the first study of the collection using the given sort order.
  // Since we're only interrested in the first record, "null" will be used
  // as search criteria (thus no actual search will be made).
  var currentStudy = OHIF.viewer.Studies.findBy(null, {
    sort: [['studyDate', 'desc']]
  });

  if (!currentStudy) {
    return;
  }

  var priorStudy = cornerstone.metaData.get('study', imageId);

  if (!priorStudy) {
    return;
  }

  var studies = OHIF.studylist.collections.Studies.find({
    patientId: currentStudy.patientId,
    studyDate: {
      $lt: currentStudy.studyDate
    }
  }, {
    sort: {
      studyDate: -1
    }
  });
  var priorIndex = 0; // TODO: Check what the abstract prior value should equal for an unrelated study?

  studies.forEach(function (study, index) {
    if (study.studyInstanceUid === priorStudy.studyInstanceUid) {
      // Abstract prior index starts from 1 in the DICOM standard
      // so we add 1 here
      priorIndex = index + 1;
      return false;
    }
  });
  return priorIndex;
}
/**
 * Retrieve the current value of a metadata tag or property. It searches the value in different levels (study, series or instance)
 * @param  {String} tagOrProperty DICOM Tag or Property name (Ex: 'x00100020', 'patientId')
 * @return {Any}              The value of the DICOM tag or property name
 */


var getCurrentTagOrPropertyValue = function (tagOrProperty) {
  // Retrieve the active viewport's imageId. If none exists, stop here
  var imageId = getActiveViewportImageId();

  if (!imageId) {
    return;
  }

  if (tagOrProperty === 'abstractPriorValue') {
    return getAbstractPriorValue(imageId);
  } // Create the object for the instance metadata


  var instance;
  OHIF.viewer.StudyMetadataList.find(function (studyMetadata) {
    // Search for the instance that has the current imageId
    instance = studyMetadata.findInstance(function (instance) {
      return instance.getImageId() === imageId;
    }); // If instance if found stop the search

    return !!instance;
  }); // No instance found

  if (!instance) {
    return;
  } // Get the value for the given tag
  // It searches the value in different levels (study, series or instance)


  var tagOrPropertyValue = instance.getTagValue(tagOrProperty); // If not found, is a custom Hanging Protocol attribute

  if (tagOrPropertyValue === void 0) {
    return HP.attributeDefaults[tagOrProperty];
  }

  return tagOrPropertyValue;
};

Template.ruleEntryDialog.onCreated(function () {
  // Define the ReactiveVars that will be used to link aspects of the UI
  var template = this; // Note: currentValue's initial value must be a string so the template renders properly

  template.currentValue = new ReactiveVar('');
  template.attribute = new ReactiveVar();
  template.comparatorId = new ReactiveVar();
});
Template.ruleEntryDialog.onRendered(function () {
  // Initialize the Comparators Select2 box
  var template = Template.instance();
  template.$('.comparators').select2(); // Get the default Comparator from the Select2 box and use it to
  // initialize the comparatorId ReactiveVar

  var comparatorId = template.$('.comparators').val();
  template.comparatorId.set(comparatorId);
  var dialog = template.$('.ruleEntryDialog');
  dialog.draggable();
});
Template.ruleEntryDialog.helpers({
  /**
   * Returns the Comparators Collection to the Template with reactive rerendering
   */
  comparators: function () {
    return Comparators.find();
  },

  /**
   * Reactively updates the current value of the selected attribute for the selected image
   *
   * @returns {*} Attribute value for the active image
   */
  currentValue: function () {
    return Template.instance().currentValue.get();
  }
});
Template.ruleEntryDialog.events({
  /**
   * Save a rule that is being edited
   *
   * @param event the Click event
   * @param template The template context
   */
  'click #save': function (event, template) {
    // Retrieve the input properties to the template
    var dialog = Template.ruleEntryDialog.dialog;
    var level = Template.ruleEntryDialog.level; // Retrieve the current values for the attribute value and comparatorId

    var attribute = template.attribute.get();
    var comparatorId = template.comparatorId.get();
    var currentValue = template.currentValue.get(); // If currentValue input is undefined, prevent saving this rule

    if (currentValue === undefined) {
      return;
    } // Check if we are editing a rule or creating a new one


    var rule;

    if (Template.ruleEntryDialog.rule) {
      // If we are editing a rule, change the rule data
      rule = Template.ruleEntryDialog.rule;
    } else {
      // If we are creating a rule, obtain the active Viewport model
      // from the Protocol and Stage
      var viewport = getActiveViewportModel(); // Create a rule depending on the level property of this dialog

      switch (level) {
        case 'protocol':
          rule = new HP.ProtocolMatchingRule();
          ProtocolEngine.protocol.addProtocolMatchingRule(rule);
          break;

        case 'study':
          rule = new HP.StudyMatchingRule();
          viewport.studyMatchingRules.push(rule);
          break;

        case 'series':
          rule = new HP.SeriesMatchingRule();
          viewport.seriesMatchingRules.push(rule);
          break;

        case 'instance':
          rule = new HP.ImageMatchingRule();
          viewport.imageMatchingRules.push(rule);
          break;
      }
    } // Find the Comparator from the Comparators Collection given its ID


    var comparator = Comparators.findOne({
      id: comparatorId
    }); // Create a new constraint to add to the rule

    var constraint = {};
    constraint[comparator.validator] = {};
    constraint[comparator.validator][comparator.validatorOption] = currentValue; // Set the attribute and constraint of the rule

    rule.attribute = attribute;
    rule.constraint = constraint; // Instruct the Protocol Engine to update the Layout Manager with new data

    var viewportIndex = Session.get('activeViewport');
    ProtocolEngine.updateViewports(viewportIndex); // Close the dialog

    closeHandler(dialog);
  },

  /**
   * Allow the user to click the Cancel button to close the dialog
   */
  'click #cancel': function () {
    var dialog = Template.ruleEntryDialog.dialog;
    closeHandler(dialog);
  },

  /**
   * Allow Esc keydown events to close the dialog
   *
   * @param event The Keydown event details
   * @returns {boolean} Return false to prevent bubbling of the event
   */
  'keydown .ruleEntryDialog': function (event) {
    var dialog = Template.ruleEntryDialog.dialog; // If Esc key is pressed, close the dialog

    if (event.which === keys.ESC) {
      closeHandler(dialog);
      return false;
    }
  },

  /**
   * Update the currentValue ReactiveVar if the user changes the attribute
   *
   * @param event The Change event for the select box
   * @param template The current template context
   */
  'change select.attributes': function (event, template, currentValue) {
    // Obtain the user-specified attribute to test against
    var attribute = $(event.currentTarget).val(); // Store it in the ReactiveVar

    template.attribute.set(attribute); // Store this attribute in the template data context

    Template.ruleEntryDialog.selectedAttribute = attribute; // // Get the level of this dialog
    // var level = Template.ruleEntryDialog.level;

    var value; // Preset currentValue, use it

    if (currentValue) {
      value = currentValue;
    } else {
      // Retrieve the current value of the attribute for the active viewport model
      value = getCurrentTagOrPropertyValue(attribute);
    } // Update the ReactiveVar with the user-specified value


    template.currentValue.set(value); // Enforce to update the input value (Otherwise, ReactiveVar does not update input value with the same values)

    var currentValueInput = $('.ruleEntryDialog').find('input.currentValue');
    currentValueInput.val(value);
  },

  /**
   * Update the currentValue ReactiveVar if the user changes the attribute value
   *
   * @param event The Change event for the input
   * @param template The current template context
   */
  'change input.currentValue': function (event, template) {
    // Get the DOM element representing the input box
    var input = $(event.currentTarget); // Get the current value of the input

    var value = input.val(); // If the input is of type 'number', parse it as a Float

    if (input.attr('type') === 'number') {
      value = parseFloat(value);
    } // Update the ReactiveVar with the user-specified value


    template.currentValue.set(value);
  },

  /**
   * Update the comparatorId ReactiveVar whenever the Comparators select box is changed
   *
   * @param event The Change event for the select box
   * @param template The current template context
   */
  'change select.comparators': function (event, template) {
    // Get the current value of the select box
    var comparatorId = $(event.currentTarget).val(); // Update the ReactiveVar with the value of the Comparators select box

    template.comparatorId.set(comparatorId);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"settingEntryDialog":{"template.settingEntryDialog.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/settingEntryDialog/template.settingEntryDialog.js                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("settingEntryDialog");
Template["settingEntryDialog"] = new Template("Template.settingEntryDialog", (function() {
  var view = this;
  return HTML.Raw('<div class="settingEntryDialog dialog-animated">\n        <div class="dialogHeader">\n            <h5>Viewport Setting Editor</h5>\n        </div>\n        <div class="dialogContent">\n            <div class="row">\n                <div class="col-xs-12">\n                    <select class="settings" style="width: 95%;">\n                    </select>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-xs-12">\n                    <select class="currentValue" style="width: 95%;">\n                    </select>\n                </div>\n            </div>\n        </div>\n        <div class="dialogFooter">\n            <button id="cancel" class="btn btn-link" tabindex="1">Cancel</button>\n            <button id="save" class="btn btn-primary" tabindex="0">OK</button>\n        </div>\n    </div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"settingEntryDialog.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/settingEntryDialog/settingEntryDialog.js                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 1);
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 2);
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 3);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 4);
var Viewerbase;
module.watch(require("meteor/ohif:viewerbase"), {
  Viewerbase: function (v) {
    Viewerbase = v;
  }
}, 5);
var keys = {
  ESC: 27
};
/**
 * Close the specified dialog element and return browser
 * focus to the active viewport.
 *
 * @param dialog The DOM element of the dialog to close
 */

function closeHandler(dialog) {
  // Hide the lesion dialog
  $(dialog).css('display', 'none'); // Remove the backdrop

  $('.removableBackdrop').remove(); // Restore the focus to the active viewport

  Viewerbase.setFocusToActiveViewport();
}
/**
 * Displays and updates the UI of the Setting Entry Dialog given an
 * optional setting to edit.
 *
 * @param settingObject
 */


openSettingEntryDialog = function (settingObject) {
  // Get the lesion location dialog
  var dialog = $('.settingEntryDialog'); // Store the Dialog DOM data, setting level and setting in the template data

  Template.settingEntryDialog.dialog = dialog;
  Template.settingEntryDialog.settingObject = settingObject; // Initialize the Select2 search box for the attribute list

  var settings = Object.keys(HP.displaySettings);
  settings.concat(Object.keys(HP.CustomViewportSettings));
  var displaySettingsOptions = Object.keys(HP.displaySettings).map(function (key) {
    return {
      id: key,
      text: HP.displaySettings[key].text
    };
  });
  var customSettingsOptions = Object.keys(HP.CustomViewportSettings).map(function (key) {
    return {
      id: key,
      text: HP.CustomViewportSettings[key].text
    };
  });
  var settingsOptions = displaySettingsOptions.concat(customSettingsOptions);
  var settingSelect = dialog.find('.settings');
  settingSelect.html('').select2({
    data: settingsOptions,
    placeholder: 'Select a setting',
    allowClear: true
  });
  var settingDetails = {
    options: []
  };

  if (settingObject && HP.displaySettings[settingObject.id]) {
    settingDetails = HP.displaySettings[settingObject.id];
  } else if (settingObject && HP.CustomViewportSettings[settingObject.id]) {
    settingDetails = HP.CustomViewportSettings[settingObject.id];
  }

  var valueSelect = dialog.find('.currentValue');
  valueSelect.html('').select2({
    data: settingDetails.options,
    placeholder: 'Select a value',
    allowClear: true
  }); // If a setting has been provided, set the value of the attribute Select2 input
  // to the attribute set in the setting.

  if (settingObject && settingObject.id) {
    settingSelect.val(settingObject.id);
  } // Trigger('change') is used to update the Select2 choice in the UI
  // This is done after setting the value in case no setting was provided


  settingSelect.trigger('change'); // If a setting has been provided, display its current value

  if (settingObject && settingObject.value !== undefined) {
    valueSelect.val(settingObject.value).trigger('change');
  } // Update the dialog's CSS so that it is visible on the page


  dialog.css('display', 'block'); // Show the backdrop

  Blaze.render(Template.removableBackdrop, document.body); // Make sure the context menu is closed when the user clicks away

  $('.removableBackdrop').one('mousedown touchstart', function () {
    closeHandler(dialog);
  });
};

Template.settingEntryDialog.onCreated(function () {
  // Define the ReactiveVars that will be used to link aspects of the UI
  var template = this; // Note: currentValue's initial value must be a string so the template renders properly

  template.currentValue = new ReactiveVar('');
  template.setting = new ReactiveVar();
});
Template.settingEntryDialog.onRendered(function () {
  var template = this;
  var dialog = template.$('.settingEntryDialog');
  dialog.draggable();
});
Template.settingEntryDialog.events({
  /**
   * Save a setting that is being edited
   *
   * @param event the Click event
   * @param template The template context
   */
  'click #save': function (event, template) {
    // Retrieve the input properties to the template
    var dialog = Template.settingEntryDialog.dialog; // Retrieve the current values for the id and current value

    var setting = template.setting.get();
    var currentValue = template.currentValue.get(); // If currentValue input is undefined, prevent saving this setting

    if (currentValue === undefined) {
      return;
    }

    var viewportSetting = {
      id: setting,
      value: currentValue
    }; // Obtain the active Viewport model from the Protocol and Stage

    var viewport = getActiveViewportModel(); // Remove any old rules if the ID has been changes

    var originalSettingObject = Template.settingEntryDialog.settingObject;

    if (originalSettingObject && originalSettingObject.id) {
      delete viewport.viewportSettings[originalSettingObject.id];
    } // Update the active Viewport model' viewportSettings dictionary


    viewport.viewportSettings[viewportSetting.id] = viewportSetting.value; // Instruct the Protocol Engine to update the Layout Manager with new data

    var viewportIndex = Session.get('activeViewport');
    ProtocolEngine.updateViewports(viewportIndex); // Close the dialog

    closeHandler(dialog);
  },

  /**
   * Allow the user to click the Cancel button to close the dialog
   */
  'click #cancel': function () {
    var dialog = Template.settingEntryDialog.dialog;
    closeHandler(dialog);
  },

  /**
   * Allow Esc keydown events to close the dialog
   *
   * @param event The Keydown event details
   * @returns {boolean} Return false to prevent bubbling of the event
   */
  'keydown .settingEntryDialog': function (event) {
    var dialog = Template.settingEntryDialog.dialog; // If Esc key is pressed, close the dialog

    if (event.which === keys.ESC) {
      closeHandler(dialog);
      return false;
    }
  },

  /**
   * Update the currentValue ReactiveVar if the user changes the attribute
   *
   * @param event The Change event for the select box
   * @param template The current template context
   */
  'change select.settings': function (event, template) {
    // Obtain the user-specified attribute to test against
    var settingId = $(event.currentTarget).val(); // Store it in the ReactiveVar

    template.setting.set(settingId); // Retrieve the current value from the attribute

    var settingDetails = {
      options: []
    };

    if (settingId && HP.displaySettings[settingId]) {
      settingDetails = HP.displaySettings[settingId];
    } else if (settingId && HP.CustomViewportSettings[settingId]) {
      settingDetails = HP.CustomViewportSettings[settingId];
    }

    var dialog = Template.settingEntryDialog.dialog;
    var valueSelect = dialog.find('.currentValue');
    valueSelect.html('').select2({
      data: settingDetails.options,
      placeholder: 'Select a value',
      allowClear: true
    }); // Update the ReactiveVar with the user-specified value

    if (settingDetails && settingDetails.defaultValue) {
      template.currentValue.set(settingDetails.defaultValue);
      valueSelect.val(settingDetails.defaultValue).trigger('change');
    }
  },

  /**
   * Update the currentValue ReactiveVar if the user changes the current value
   *
   * @param event The Change event for the input
   * @param template The current template context
   */
  'change select.currentValue': function (event, template) {
    // Get the current value of the select box
    var value = $(event.currentTarget).val(); // Update the ReactiveVar with the user-specified value

    template.currentValue.set(value);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"textEntryDialog":{"template.textEntryDialog.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/textEntryDialog/template.textEntryDialog.js                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("textEntryDialog");
Template["textEntryDialog"] = new Template("Template.textEntryDialog", (function() {
  var view = this;
  return HTML.DIV({
    class: "textEntryDialog dialog-animated"
  }, "\n        ", HTML.DIV({
    class: "dialogHeader"
  }, "\n            ", HTML.H4({
    class: "title"
  }, Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n        "), "\n        ", HTML.DIV({
    class: "dialogContent"
  }, "\n            ", HTML.DIV({
    class: "row"
  }, "\n                ", HTML.DIV({
    class: "col-xs-12"
  }, "\n                    ", HTML.H5({
    class: "instructions"
  }, Blaze.View("lookup:instructions", function() {
    return Spacebars.mustache(view.lookup("instructions"));
  })), "\n                "), "\n            "), "\n            ", HTML.DIV({
    class: "row"
  }, "\n                ", HTML.DIV({
    class: "col-xs-12"
  }, "\n                    ", HTML.INPUT({
    class: "currentValue",
    type: "text",
    value: function() {
      return Spacebars.mustache(view.lookup("currentValue"));
    }
  }), "\n                "), "\n            "), "\n        "), HTML.Raw('\n        <div class="dialogFooter">\n            <button class="cancel btn btn-link" tabindex="1">Cancel</button>\n            <button class="save btn btn-primary" tabindex="0">OK</button>\n        </div>\n    '));
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"textEntryDialog.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/textEntryDialog/textEntryDialog.js                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 1);
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 2);
var Viewerbase;
module.watch(require("meteor/ohif:viewerbase"), {
  Viewerbase: function (v) {
    Viewerbase = v;
  }
}, 3);
var keys = {
  ESC: 27,
  ENTER: 13
};
/**
 * Close the specified dialog element and returns the browser
 * focus to the active viewport.
 *
 * @param dialog The DOM element of the dialog to close
 */

function closeHandler(dialog) {
  // Hide the lesion dialog
  $(dialog).css('display', 'none'); // Remove the backdrop

  $('.removableBackdrop').remove(); // Restore the focus to the active viewport

  Viewerbase.setFocusToActiveViewport();
}
/**
 * Displays and updates the UI of the Text Entry Dialog given a new title,
 * instructions, and doneCallback
 *
 * @param title Title of the dialog box
 * @param instructions Instructions to display to the user
 * @param doneCallback Function to execute when the dialog has been closed
 */


openTextEntryDialog = function (title, instructions, currentValue, doneCallback) {
  // Get the lesion location dialog
  var dialog = $('.textEntryDialog'); // Clear any input that is still on the page

  var currentValueInput = dialog.find('input.currentValue');
  currentValueInput.val(currentValue); // Store the Dialog DOM data, rule level and rule in the template data

  Template.textEntryDialog.dialog = dialog;
  Template.textEntryDialog.title = title;
  Template.textEntryDialog.instructions = instructions;
  Template.textEntryDialog.doneCallback = doneCallback;
  dialog.find('.title').html(title);
  dialog.find('.instructions').html(instructions); // Update the dialog's CSS so that it is visible on the page

  dialog.css('display', 'block'); // Show the backdrop

  UI.render(Template.removableBackdrop, document.body); // Make sure the context menu is closed when the user clicks away

  $('.removableBackdrop').one('mousedown touchstart', function () {
    closeHandler(dialog);
  });
};

Template.textEntryDialog.onRendered(function () {
  var instance = Template.instance();
  var dialog = instance.$('.settingEntryDialog');
  dialog.draggable();
});
Template.textEntryDialog.events({
  /**
   * Save the user-specified text
   *
   */
  'click .save': function () {
    // Retrieve the input properties to the template
    var dialog = Template.textEntryDialog.dialog;
    var currentValue = dialog.find('input.currentValue').val(); // If currentValue input is undefined, prevent saving this rule

    if (currentValue === undefined) {
      return;
    }

    var doneCallback = Template.textEntryDialog.doneCallback;

    if (doneCallback) {
      doneCallback(currentValue);
    } // Close the dialog


    closeHandler(Template.textEntryDialog.dialog);
  },

  /**
   * Allow the user to click the Cancel button to close the dialog
   */
  'click .cancel': function () {
    closeHandler(Template.textEntryDialog.dialog);
  },

  /**
   * Allow Esc keydown events to close the dialog
   *
   * @param event The Keydown event details
   * @returns {boolean} Return false to prevent bubbling of the event
   */
  'keydown .textEntryDialog': function (event) {
    var dialog = Template.textEntryDialog.dialog; // If Esc key is pressed, close the dialog

    if (event.which === keys.ESC) {
      closeHandler(dialog);
      return false;
    } else if (event.which === keys.ENTER) {
      var currentValue = dialog.find('input.currentValue').val(); // If currentValue input is undefined, prevent saving this rule

      if (currentValue === undefined) {
        return;
      }

      var doneCallback = Template.textEntryDialog.doneCallback;

      if (doneCallback) {
        doneCallback(currentValue);
      }

      closeHandler(dialog);
      return false;
    }
  },

  /**
   * Update the currentValue ReactiveVar if the user changes the attribute value
   *
   * @param event The Change event for the input
   * @param template The current template context
   */
  'change input.currentValue': function (event, template) {
    // Get the DOM element representing the input box
    var input = $(event.currentTarget); // Update the template data with the current value

    Template.textEntryDialog.currentValue = input.val();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"settingsTable":{"template.settingsTable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/settingsTable/template.settingsTable.js                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("settingsTable");
Template["settingsTable"] = new Template("Template.settingsTable", (function() {
  var view = this;
  return [ HTML.TABLE({
    class: "settingsTable table"
  }, "\n        ", HTML.THEAD("\n            ", HTML.TR("\n                ", HTML.TH("Setting"), "\n                ", HTML.TH("Value"), "\n            "), "\n        "), "\n        ", HTML.TBODY("\n            ", Blaze.Each(function() {
    return Spacebars.dataMustache(view.lookup("objectToPairs"), view.lookup("settings"));
  }, function() {
    return [ "\n            ", Blaze.If(function() {
      return Spacebars.call(view.lookup("value"));
    }, function() {
      return [ "\n                ", HTML.TR("\n                    ", HTML.TD("\n                        ", HTML.I({
        class: "fa fa-pencil editSetting"
      }), "\n                        ", HTML.I({
        class: "fa fa-trash deleteSetting"
      }), "\n                        ", Blaze.View("lookup:getSettingText", function() {
        return Spacebars.mustache(view.lookup("getSettingText"));
      }), "\n                    "), "\n                    ", HTML.TD("\n                        ", Blaze.View("lookup:prettyPrintStringify", function() {
        return Spacebars.mustache(view.lookup("prettyPrintStringify"), view.lookup("value"));
      }), "\n                    "), "\n                "), "\n            " ];
    }), "\n            " ];
  }), "\n        "), "\n    "), HTML.Raw('\n    <div class="addSettingContainer">\n        <span class="addSetting">\n            Add Display Setting <i class="fa fa-plus-circle"></i>\n        </span>\n    </div>') ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"settingsTable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/settingsTable/settingsTable.js                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.settingsTable.events({
  /**
   * Opens the Setting Entry dialog to allow the user to create a new setting
   * Specifies attributes and setting level for the Setting Entry dialog
   * based on the data given to this template.
   */
  'click .addSetting': function () {
    // Open the Setting Entry Dialog
    openSettingEntryDialog();
  },

  /**
   * Opens the Setting Entry dialog to allow the user to edit an existing
   * setting. Passes setting details to the dialog so its current properties
   * can be displayed.
   *
   * Specifies attributes for the Setting Entry dialog
   * based on the data given to this template.
   */
  'click .editSetting': function () {
    // Get the properties of the current setting
    var setting = this; // Open the Setting Entry Dialog with the setting

    openSettingEntryDialog(setting);
  },

  /**
   * Removes a setting from the current Viewport
   */
  'click .deleteSetting': function () {
    // Get the properties of the current setting
    var setting = this; // Retrieve the current viewport model

    var viewport = getActiveViewportModel(); // Remove the specified setting

    delete viewport.viewportSettings[setting.key]; // Instruct the Protocol Engine to update the Layout Manager with new data

    var viewportIndex = Session.get('activeViewport');
    ProtocolEngine.updateViewports(viewportIndex);
  }
});
Template.settingsTable.helpers({
  getSettingText: function () {
    var setting = this;

    if (HP.CustomViewportSettings[setting.key]) {
      return HP.CustomViewportSettings[setting.key].text;
    } else if (HP.displaySettings[setting.key]) {
      return HP.displaySettings[setting.key].text;
    } else {
      return Blaze._globalHelpers['prettyPrintStringify'](setting.key);
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"stageDetails":{"template.stageDetails.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/stageDetails/template.stageDetails.js                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("stageDetails");
Template["stageDetails"] = new Template("Template.stageDetails", (function() {
  var view = this;
  return HTML.DIV({
    id: "stageDetails",
    class: "protocolEditorSection"
  }, "\n        ", HTML.DIV({
    class: "row"
  }, "\n            ", HTML.DIV({
    class: "col-xs-12"
  }, "\n                ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("activeViewport"));
  }, function() {
    return [ "\n                ", HTML.DIV({
      class: "stageEditorSection"
    }, "\n                    ", HTML.H3("Viewport Settings"), "\n                    ", HTML.HR(), "\n                    ", Blaze._TemplateWith(function() {
      return {
        settings: Spacebars.call(view.lookup("viewportSettings"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("settingsTable"));
    }), "\n                "), "\n\n                ", HTML.DIV({
      class: "stageEditorSection"
    }, "\n                    ", HTML.H3("Study Matching Rules"), "\n                    ", HTML.HR(), "\n                    ", Blaze._TemplateWith(function() {
      return {
        level: Spacebars.call("study"),
        rules: Spacebars.call(view.lookup("studyMatchingRules")),
        attributes: Spacebars.call(view.lookup("studyAttributes"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("ruleTable"));
    }), "\n                "), "\n\n                ", HTML.DIV({
      class: "stageEditorSection"
    }, "\n                    ", HTML.H3("Series Matching Rules"), "\n                    ", HTML.HR(), "\n                    ", Blaze._TemplateWith(function() {
      return {
        level: Spacebars.call("series"),
        rules: Spacebars.call(view.lookup("seriesMatchingRules")),
        attributes: Spacebars.call(view.lookup("seriesAttributes"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("ruleTable"));
    }), "\n                "), "\n\n                ", HTML.DIV({
      class: "stageEditorSection"
    }, "\n                    ", HTML.H3("Image Matching Rules"), "\n                    ", HTML.HR(), "\n                    ", Blaze._TemplateWith(function() {
      return {
        level: Spacebars.call("instance"),
        rules: Spacebars.call(view.lookup("imageMatchingRules")),
        attributes: Spacebars.call(view.lookup("instanceAttributes"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("ruleTable"));
    }), "\n                "), "\n                " ];
  }), "\n            "), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"stageDetails.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/stageDetails/stageDetails.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
getActiveViewportModel = function () {
  // If no ProtocolEngine has been defined yet, or there is
  // no currently displayed Protocol or Stage, stop here
  if (!ProtocolEngine || !ProtocolEngine.protocol || ProtocolEngine.stage === undefined) {
    return;
  } // Retrieve the model of the currently displayed stage


  var stage = ProtocolEngine.getCurrentStageModel(); // Retrieve the index of the active viewport

  var activeViewport = Session.get('activeViewport'); // If the active viewport index is outside the bounds of the
  // number of Viewports defined for this Stage, stop here

  if (activeViewport >= stage.viewports.length) {
    return;
  } // Return the Viewport model for this viewport index in the
  // current stage


  return stage.viewports[activeViewport];
};

Template.stageDetails.helpers({
  /**
   * Retrieves the ViewportModel for the active viewport from the
   * currently displayed Protocol and display sequence Stage
   *
   * @returns {*} The Viewport model for the active viewport
   */
  activeViewport: function () {
    // Run this function anytime the layout manager has changed
    Session.get('LayoutManagerUpdated');
    return getActiveViewportModel();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"stageSortable":{"template.stageSortable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/stageSortable/template.stageSortable.js                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("stageSortable");
Template["stageSortable"] = new Template("Template.stageSortable", (function() {
  var view = this;
  return HTML.DIV({
    id: "stageSortingContainer"
  }, "\n        ", HTML.DIV({
    class: "moveStageButtons"
  }, "\n            ", HTML.A({
    class: "moveStageUp noselect",
    disabled: function() {
      return Blaze.Unless(function() {
        return Spacebars.call(view.lookup("isPreviousAvailable"));
      }, function() {
        return "true";
      });
    }
  }, "\n                Move Stage Up ", HTML.Raw('<i class="fa fa-chevron-up"></i>'), "\n            "), "\n            ", HTML.A({
    class: "moveStageDown noselect",
    disabled: function() {
      return Blaze.Unless(function() {
        return Spacebars.call(view.lookup("isNextAvailable"));
      }, function() {
        return "true";
      });
    }
  }, "\n                Move Stage Down ", HTML.Raw('<i class="fa fa-chevron-down"></i>'), "\n            "), "\n        "), "\n        ", HTML.DIV({
    id: "stageSortable",
    class: "sortable"
  }, "\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("stages"));
  }, function() {
    return [ "\n                ", HTML.DIV({
      class: "sortable-item",
      "data-id": function() {
        return Spacebars.mustache(view.lookup("id"));
      }
    }, "\n                    ", HTML.SPAN("\n                        ", HTML.DIV({
      class: "sortable-handle pull-left"
    }), "\n                        ", HTML.I({
      class: "deleteStage fa fa-trash fa-lg pull-right"
    }), "\n                        ", HTML.SPAN({
      class: function() {
        return Blaze.If(function() {
          return Spacebars.call(view.lookup("isActiveStage"));
        }, function() {
          return "active";
        });
      }
    }, "\n                            ", Blaze.View("lookup:stageLabel", function() {
      return Spacebars.mustache(view.lookup("stageLabel"));
    }), "\n                        "), "\n                    "), "\n                "), "\n            " ];
  }), "\n        "), HTML.Raw('\n        <div class="addStage">\n            <span id="addStage">\n                Create New Stage <i class="fa fa-plus-circle"></i>\n            </span>\n        </div>\n    '));
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"stageSortable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/components/stageSortable/stageSortable.js                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 1);
var Random;
module.watch(require("meteor/random"), {
  Random: function (v) {
    Random = v;
  }
}, 2);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 3);
module.watch(require("meteor/ohif:viewerbase"));

/**
 * Extend the Array prototype with a Swap function
 * so we can swap stages more easily
 */
Array.prototype.move = function (oldIndex, newIndex) {
  var value = this[oldIndex];
  newIndex = Math.max(0, newIndex);
  newIndex = Math.min(this.length, newIndex);
  this.splice(oldIndex, 1);
  this.splice(newIndex, 0, value);
  return this;
};
/**
 * Helper function to obtain the current index of a stage in the
 * current protocol
 *
 * @param protocol The Hanging Protocol to search within
 * @param id The id of the current stage to search for
 * @returns {number} The index of the specified stage within the Protocol,
 *                   or undefined if it is not present.
 */


function getStageIndex(protocol, id) {
  var stageIndex;

  if (!protocol || !protocol.stages) {
    return;
  }

  protocol.stages.forEach(function (stage, index) {
    if (stage.id === id) {
      stageIndex = index;
      return false;
    }
  });
  return stageIndex;
}

Template.stageSortable.helpers({
  /**
   * Checks a specified stage to see if it is currently being displayed
   *
   * @returns {boolean} Whether or not the stage is currently being displayed
   */
  isActiveStage: function () {
    // Rerun this function every time the layout manager has been updated
    Session.get('LayoutManagerUpdated'); // If no Protocol Engine has been defined yet, stop here to prevent errors

    if (!ProtocolEngine) {
      return;
    }

    var currentStage = ProtocolEngine.getCurrentStageModel();

    if (!currentStage) {
      return false;
    } // Return a boolean representing if the active stage and the specified stage index are equal


    return this.id === currentStage.id;
  },

  /**
   * Retrieves the index of the stage at the point it was last saved
   *
   * @returns {number|*}
   */
  stageLabel: function () {
    var stage = this; // If no Protocol Engine has been defined yet, stop here to prevent errors

    if (!ProtocolEngine) {
      return;
    } // Retrieve the last saved copy of the current protocol


    var lastSavedCopy = HP.ProtocolStore.getProtocol(ProtocolEngine.protocol.id); // Try to find the index of this stage in the previously saved copy

    var stageIndex = getStageIndex(lastSavedCopy, stage.id); // If the stage is new, and therefore wasn't present in the last save,
    // retrieve it's index in the array of new stage ids and use that for
    // the label. Also include the time since it was created.

    if (stageIndex === undefined) {
      // Reactively update this helper every minute
      Session.get('timeAgoVariable'); // Find the index of the stage in the array of newly created stage IDs

      var newStageNumber = ProtocolEngine.newStageIds.indexOf(stage.id) + 1; // Use Moment.js to format the createdDate of this stage relative to the
      // current time

      var dateCreatedFromNow = moment(stage.createdDate).fromNow(); // Return the label for the new stage,
      // e.g. "New Stage 1 (created a few seconds ago)"

      return 'New Stage ' + newStageNumber + ' (created ' + dateCreatedFromNow + ')';
    } // If the stage is not new, label it by the index it held in the stages array
    // at the previous saved point


    return 'Stage ' + ++stageIndex;
  },

  /**
   * Check if a later stage exists for the user to switch to
   *
   * @returns {boolean} Whether or not a later stage exists
   */
  isNextAvailable: function () {
    // Run this helper whenever the ProtocolEngine / LayoutManager has changed
    Session.get('LayoutManagerUpdated'); // If no ProtocolEngine has been defined yet, stop here

    if (!ProtocolEngine) {
      return;
    } // Return whether or not the current stage is the last stage


    return ProtocolEngine.stage < ProtocolEngine.getNumProtocolStages() - 1;
  },

  /**
   * Check if an earlier stage exists for the user to switch to
   *
   * @returns {boolean} Whether or not an earlier stage exists
   */
  isPreviousAvailable: function () {
    // Run this helper whenever the ProtocolEngine / LayoutManager has changed
    Session.get('LayoutManagerUpdated'); // If no ProtocolEngine has been defined yet, stop here

    if (!ProtocolEngine) {
      return;
    } // Return whether or not the current stage is the first stage


    return ProtocolEngine.stage > 0;
  }
});
Template.stageSortable.events({
  /**
   * Displays a stage when its title is clicked
   */
  'click .sortable-item span': function () {
    // Retrieve the index of this stage in the display set sequences
    var stageIndex = getStageIndex(ProtocolEngine.protocol, this.id); // Display the selected stage

    ProtocolEngine.setCurrentProtocolStage(stageIndex - ProtocolEngine.stage);
  },

  /**
   * Creates a new stage and adds it to the currently loaded Protocol at
   * the end of the display set sequence
   */
  'click #addStage': function () {
    // Retrieve the model describing the current stage
    var stage = ProtocolEngine.getCurrentStageModel(); // Clone this stage to create a new stage

    var newStage = stage.createClone(); // Remove the stage's name if it has one

    delete newStage.name; // Append this new stage to the end of the display set sequence

    ProtocolEngine.protocol.stages.push(newStage); // Append the new stage the list of new stage IDs, so we can label it properly

    ProtocolEngine.newStageIds.push(newStage.id); // Switch to the next stage in the display set sequence

    ProtocolEngine.setCurrentProtocolStage(1);
  },

  /**
   * Deletes a stage from the currently loaded Protocol by removing it from
   * the stages array. If it is the currently active stage, the current stage is
   * set to one stage earlier in the display set sequence.
   */
  'click .deleteStage': function () {
    // If this is the only stage in the Protocol, stop here
    if (ProtocolEngine.protocol.stages.length === 1) {
      return;
    }

    var stageId = this.id;
    var options = {
      title: 'Remove Protocol Stage',
      text: 'Are you sure you would like to remove this Protocol Stage? This cannot be reversed.'
    };
    OHIF.viewerbase.dialogUtils.showConfirmDialog(function () {
      // Retrieve the index of this stage in the display set sequences
      var stageIndex = getStageIndex(ProtocolEngine.protocol, stageId); // Remove it from the display set sequence

      ProtocolEngine.protocol.stages.splice(stageIndex, 1); // If we have removed the currently active stage, switch to the one before it

      if (ProtocolEngine.stage === stageIndex) {
        // Display the previous stage
        ProtocolEngine.setCurrentProtocolStage(-1);
      } // Update the Session variable to the UI re-renders


      Session.set('LayoutManagerUpdated', Math.random());
    }, options);
  },
  'click .moveStageUp': function () {
    // Get the old and new indices following a 'sort' event
    var oldIndex = ProtocolEngine.stage;
    var newIndex = Math.max(ProtocolEngine.stage - 1, 0);

    if (oldIndex === newIndex) {
      return;
    } // Swap the stages in the current Protocol's display set sequence
    // using our addition to the Array prototype


    ProtocolEngine.protocol.stages = ProtocolEngine.protocol.stages.move(oldIndex, newIndex); // If the currently displayed stage was reordered into a new position,
    // update the value for the stage index in the displayed Protocol

    ProtocolEngine.stage = newIndex; // Update the Session variable to the UI re-renders

    Session.set('LayoutManagerUpdated', Math.random());
  },
  'click .moveStageDown': function () {
    // Get the old and new indices following a 'sort' event
    var oldIndex = ProtocolEngine.stage;
    var newIndex = Math.min(ProtocolEngine.stage + 1, ProtocolEngine.protocol.stages.length - 1);

    if (oldIndex === newIndex) {
      return;
    } // Swap the stages in the current Protocol's display set sequence
    // using our addition to the Array prototype


    ProtocolEngine.protocol.stages = ProtocolEngine.protocol.stages.move(oldIndex, newIndex); // If the currently displayed stage was reordered into a new position,
    // update the value for the stage index in the displayed Protocol

    ProtocolEngine.stage = newIndex; // Update the Session variable to the UI re-renders

    Session.set('LayoutManagerUpdated', Math.random());
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"customAttributes":{"index.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/customAttributes/index.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Define an empty object to store callbacks that are used to retrieve custom attributes
// The simplest example for a custom attribute is the Timepoint type (i.e. baseline or follow-up)
// used in the LesionTracker application.
//
// Timepoint type can be obtained given a studyId, and this is done through a custom callback.
// Developers can define attributes (i.e. attributeId = timepointType) with a name ('Timepoint Type')
// and a callback function that is used to calculate them.
//
// The input to the callback, which is called during viewport-image matching rule evaluation
// is the set of attributes that contains the specified attribute. In our example, timepointType is
// linked to the study attributes, and so the inputs to the callback is an object containing
// the study attributes.
HP.CustomAttributeRetrievalCallbacks = {};
/**
 * Adds a custom attribute to be used in the HangingProtocol UI and matching rules, including a
 * callback that will be used to calculate the attribute value.
 *
 * @param attributeId The ID used to refer to the attribute (e.g. 'timepointType')
 * @param attributeName The name of the attribute to be displayed (e.g. 'Timepoint Type')
 * @param callback The function used to calculate the attribute value from the other attributes at its level (e.g. study/series/image)
 */

HP.addCustomAttribute = function (attributeId, attributeName, callback) {
  HP.CustomAttributeRetrievalCallbacks[attributeId] = {
    name: attributeName,
    callback: callback
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"customViewportSettings":{"index.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/customViewportSettings/index.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Define an empty object to store callbacks that are used to apply custom viewport settings
// after a viewport is rendered.
HP.CustomViewportSettings = {};
/**
 * Adds a custom setting that can be chosen in the HangingProtocol UI and applied to a Viewport
 *
 * @param settingId The ID used to refer to the setting (e.g. 'displayCADMarkers')
 * @param settingName The name of the setting to be displayed (e.g. 'Display CAD Markers')
 * @param options
 * @param callback A function to be run after a viewport is rendered with a series
 */

HP.addCustomViewportSetting = function (settingId, settingName, options, callback) {
  HP.CustomViewportSettings[settingId] = {
    id: settingId,
    text: settingName,
    options: options,
    callback: callback
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"sortByScore.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/lib/sortByScore.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  sortByScore: function () {
    return sortByScore;
  }
});

// Sorts an array by score
var sortByScore = function (arr) {
  arr.sort(function (a, b) {
    return b.score - a.score;
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"matcher":{"HPMatcher.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hanging-protocols/client/matcher/HPMatcher.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  HPMatcher: function () {
    return HPMatcher;
  }
});
var Viewerbase;
module.watch(require("meteor/ohif:viewerbase"), {
  Viewerbase: function (v) {
    Viewerbase = v;
  }
}, 0);
module.watch(require("../customAttributes"));

/**
 * Import Constants
 */
var _Viewerbase = Viewerbase,
    OHIFError = _Viewerbase.OHIFError,
    _Viewerbase$metadata = _Viewerbase.metadata,
    StudySummary = _Viewerbase$metadata.StudySummary,
    InstanceMetadata = _Viewerbase$metadata.InstanceMetadata;
/**
 * Match a Metadata instance against rules using Validate.js for validation.
 * @param  {StudySummary|InstanceMetadata} metadataInstance Metadata instance object
 * @param  {Array} rules Array of MatchingRules instances (StudyMatchingRule|SeriesMatchingRule|ImageMatchingRule) for the match
 * @return {Object}      Matching Object with score and details (which rule passed or failed)
 */

var match = function (metadataInstance, rules) {
  // Make sure the supplied data is valid.
  if (!(metadataInstance instanceof StudySummary || metadataInstance instanceof InstanceMetadata)) {
    throw new OHIFError('HPMatcher::match metadataInstance must be an instance of StudySummary or InstanceMetadata');
  }

  var options = {
    format: 'grouped'
  };
  var details = {
    passed: [],
    failed: []
  };
  var requiredFailed = false;
  var score = 0;
  rules.forEach(function (rule) {
    var _testConstraint, _attributeMap;

    var attribute = rule.attribute;
    var customAttributeExists = metadataInstance.customAttributeExists(attribute); // If the metadataInstance we are testing (e.g. study, series, or instance MetadataInstance) do
    // not contain the attribute specified in the rule, check whether or not they have been
    // defined in the CustomAttributeRetrievalCallbacks Object.

    if (!customAttributeExists && HP.CustomAttributeRetrievalCallbacks.hasOwnProperty(attribute)) {
      var customAttribute = HP.CustomAttributeRetrievalCallbacks[attribute];
      metadataInstance.setCustomAttribute(attribute, customAttribute.callback(metadataInstance));
      customAttributeExists = true;
    } // Format the constraint as required by Validate.js


    var testConstraint = (_testConstraint = {}, _testConstraint[attribute] = rule.constraint, _testConstraint); // Create a single attribute object to be validated, since metadataInstance is an 
    // instance of Metadata (StudyMetadata, SeriesMetadata or InstanceMetadata)

    var attributeValue = customAttributeExists ? metadataInstance.getCustomAttribute(attribute) : metadataInstance.getTagValue(attribute);
    var attributeMap = (_attributeMap = {}, _attributeMap[attribute] = attributeValue, _attributeMap); // Use Validate.js to evaluate the constraints on the specified metadataInstance

    var errorMessages;

    try {
      errorMessages = validate(attributeMap, testConstraint, [options]);
    } catch (e) {
      errorMessages = ['Something went wrong during validation.', e];
    }

    if (!errorMessages) {
      // If no errorMessages were returned, then validation passed.
      // Add the rule's weight to the total score
      score += parseInt(rule.weight, 10); // Log that this rule passed in the matching details object

      details.passed.push({
        rule: rule
      });
    } else {
      // If errorMessages were present, then validation failed
      // If the rule that failed validation was Required, then
      // mark that a required Rule has failed
      if (rule.required) {
        requiredFailed = true;
      } // Log that this rule failed in the matching details object
      // and include any error messages


      details.failed.push({
        rule: rule,
        errorMessages: errorMessages
      });
    }
  }); // If a required Rule has failed Validation, set the matching score to zero

  if (requiredFailed) {
    score = 0;
  }

  return {
    score: score,
    details: details
  };
};

var HPMatcher = {
  match: match
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".styl"
  ]
});
require("/node_modules/meteor/ohif:hanging-protocols/both/namespace.js");
require("/node_modules/meteor/ohif:hanging-protocols/both/collections.js");
require("/node_modules/meteor/ohif:hanging-protocols/both/schema.js");
require("/node_modules/meteor/ohif:hanging-protocols/both/hardcodedData.js");
require("/node_modules/meteor/ohif:hanging-protocols/both/testData.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/collections.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/protocolEngine.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/helpers/displayConstraint.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/helpers/attributes.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/protocolStore/protocolStore.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/protocolStore/defaultStrategy.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/previousPresentationGroupButton/template.previousPresentationGroupButton.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/previousPresentationGroupButton/previousPresentationGroupButton.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/nextPresentationGroupButton/template.nextPresentationGroupButton.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/nextPresentationGroupButton/nextPresentationGroupButton.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/matchedProtocols/template.matchedProtocols.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/matchedProtocols/matchedProtocols.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/protocolEditor/template.protocolEditor.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/protocolEditor/protocolEditor.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/ruleTable/template.ruleTable.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/ruleTable/ruleTable.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/ruleEntryDialog/template.ruleEntryDialog.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/ruleEntryDialog/ruleEntryDialog.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/settingEntryDialog/template.settingEntryDialog.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/settingEntryDialog/settingEntryDialog.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/textEntryDialog/template.textEntryDialog.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/textEntryDialog/textEntryDialog.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/settingsTable/template.settingsTable.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/settingsTable/settingsTable.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/stageDetails/template.stageDetails.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/stageDetails/stageDetails.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/stageSortable/template.stageSortable.js");
require("/node_modules/meteor/ohif:hanging-protocols/client/components/stageSortable/stageSortable.js");

/* Exports */
Package._define("ohif:hanging-protocols", {
  HP: HP
});

})();
