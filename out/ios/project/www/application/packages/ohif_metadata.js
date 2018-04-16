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
var dialogPolyfill = Package['ohif:viewerbase'].dialogPolyfill;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:metadata":{"main.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/ohif_metadata/main.js                                                                           //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var module1 = module;
module1.export({
  OHIF: function () {
    return OHIF;
  },
  Metadata: function () {
    return Metadata;
  }
});
var OHIF, Metadata;
module1.watch(require("./namespace.js"), {
  OHIF: function (v) {
    OHIF = v;
  },
  Metadata: function (v) {
    Metadata = v;
  }
}, 0);
module1.watch(require("./client/"));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"namespace.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/ohif_metadata/namespace.js                                                                      //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
module.export({
  OHIF: function () {
    return OHIF;
  },
  Metadata: function () {
    return Metadata;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

/**
 * Create Metadata namespace...
 */
var Metadata = {};
/**
 * Append Metadata namespace to OHIF namespace...
 */

OHIF.metadata = Metadata;
/**
 * Export relevant objects...
 */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"client":{"OHIFInstanceMetadata.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/ohif_metadata/client/OHIFInstanceMetadata.js                                                    //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  OHIFInstanceMetadata: function () {
    return OHIFInstanceMetadata;
  }
});
var Viewerbase;
module.watch(require("meteor/ohif:viewerbase"), {
  Viewerbase: function (v) {
    Viewerbase = v;
  }
}, 0);
var InstanceMetadata = Viewerbase.metadata.InstanceMetadata;
var DICOMTagDescriptions = Viewerbase.DICOMTagDescriptions;

var OHIFInstanceMetadata =
/*#__PURE__*/
function (_InstanceMetadata) {
  (0, _inheritsLoose2.default)(OHIFInstanceMetadata, _InstanceMetadata);

  /**
   * @param {Object} Instance object.
   */
  function OHIFInstanceMetadata(data, series, study, uid) {
    var _this;

    _this = _InstanceMetadata.call(this, data, uid) || this;

    _this.init(series, study);

    return _this;
  }

  var _proto = OHIFInstanceMetadata.prototype;

  _proto.init = function () {
    function init(series, study) {
      var instance = this.getData(); // Initialize Private Properties

      Object.defineProperties(this, {
        _sopInstanceUID: {
          configurable: false,
          enumerable: false,
          writable: false,
          value: instance.sopInstanceUid
        },
        _study: {
          configurable: false,
          enumerable: false,
          writable: false,
          value: study
        },
        _series: {
          configurable: false,
          enumerable: false,
          writable: false,
          value: series
        },
        _instance: {
          configurable: false,
          enumerable: false,
          writable: false,
          value: instance
        },
        _cache: {
          configurable: false,
          enumerable: false,
          writable: false,
          value: Object.create(null)
        }
      });
    }

    return init;
  }(); // Override


  _proto.getTagValue = function () {
    function getTagValue(tagOrProperty, defaultValue, bypassCache) {
      // check if this property has been cached...
      if (tagOrProperty in this._cache && bypassCache !== true) {
        return this._cache[tagOrProperty];
      }

      var propertyName = OHIFInstanceMetadata.getPropertyName(tagOrProperty); // Search property value in the whole study metadata chain...

      var rawValue;

      if (propertyName in this._instance) {
        rawValue = this._instance[propertyName];
      } else if (propertyName in this._series) {
        rawValue = this._series[propertyName];
      } else if (propertyName in this._study) {
        rawValue = this._study[propertyName];
      }

      if (rawValue !== void 0) {
        // if rawValue value is not undefined, cache result...
        this._cache[tagOrProperty] = rawValue;
        return rawValue;
      }

      return defaultValue;
    }

    return getTagValue;
  }(); // Override


  _proto.tagExists = function () {
    function tagExists(tagOrProperty) {
      var propertyName = OHIFInstanceMetadata.getPropertyName(tagOrProperty);
      return propertyName in this._instance || propertyName in this._series || propertyName in this._study;
    }

    return tagExists;
  }(); // Override


  _proto.getImageId = function () {
    function getImageId(frame, thumbnail) {
      // If _imageID is not cached, create it
      if (this._imageId === null) {
        this._imageId = Viewerbase.getImageId(this.getData(), frame, thumbnail);
      }

      return this._imageId;
    }

    return getImageId;
  }();
  /**
   * Static methods
   */
  // @TODO: The current mapping of standard DICOM property names to local property names is not optimal.
  // The inconsistency in property naming makes this function increasingly complex.
  // A possible solution to improve this would be adapt retriveMetadata names to use DICOM standard names as in dicomTagDescriptions.js


  OHIFInstanceMetadata.getPropertyName = function () {
    function getPropertyName(tagOrProperty) {
      var propertyName;
      var tagInfo = DICOMTagDescriptions.find(tagOrProperty);

      if (tagInfo !== void 0) {
        // This function tries to translate standard DICOM property names into local naming convention.
        propertyName = tagInfo.keyword.replace(/^SOP/, 'sop').replace(/UID$/, 'Uid').replace(/ID$/, 'Id');
        propertyName = propertyName.charAt(0).toLowerCase() + propertyName.substr(1);
      }

      return propertyName;
    }

    return getPropertyName;
  }();

  return OHIFInstanceMetadata;
}(InstanceMetadata);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"OHIFSeriesMetadata.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/ohif_metadata/client/OHIFSeriesMetadata.js                                                      //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  OHIFSeriesMetadata: function () {
    return OHIFSeriesMetadata;
  }
});
var Viewerbase;
module.watch(require("meteor/ohif:viewerbase"), {
  Viewerbase: function (v) {
    Viewerbase = v;
  }
}, 0);
var OHIFInstanceMetadata;
module.watch(require("./OHIFInstanceMetadata"), {
  OHIFInstanceMetadata: function (v) {
    OHIFInstanceMetadata = v;
  }
}, 1);

var OHIFSeriesMetadata =
/*#__PURE__*/
function (_Viewerbase$metadata$) {
  (0, _inheritsLoose2.default)(OHIFSeriesMetadata, _Viewerbase$metadata$);

  /**
   * @param {Object} Series object.
   */
  function OHIFSeriesMetadata(data, study, uid) {
    var _this;

    _this = _Viewerbase$metadata$.call(this, data, uid) || this;

    _this.init(study);

    return _this;
  }

  var _proto = OHIFSeriesMetadata.prototype;

  _proto.init = function () {
    function init(study) {
      var _this2 = this;

      var series = this.getData(); // define "_seriesInstanceUID" protected property...

      Object.defineProperty(this, '_seriesInstanceUID', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: series.seriesInstanceUid
      }); // populate internal list of instances...

      series.instances.forEach(function (instance) {
        _this2.addInstance(new OHIFInstanceMetadata(instance, series, study));
      });
    }

    return init;
  }();

  return OHIFSeriesMetadata;
}(Viewerbase.metadata.SeriesMetadata);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"OHIFStudyMetadata.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/ohif_metadata/client/OHIFStudyMetadata.js                                                       //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  OHIFStudyMetadata: function () {
    return OHIFStudyMetadata;
  }
});
var Viewerbase;
module.watch(require("meteor/ohif:viewerbase"), {
  Viewerbase: function (v) {
    Viewerbase = v;
  }
}, 0);
var OHIFSeriesMetadata;
module.watch(require("./OHIFSeriesMetadata"), {
  OHIFSeriesMetadata: function (v) {
    OHIFSeriesMetadata = v;
  }
}, 1);

var OHIFStudyMetadata =
/*#__PURE__*/
function (_Viewerbase$metadata$) {
  (0, _inheritsLoose2.default)(OHIFStudyMetadata, _Viewerbase$metadata$);

  /**
   * @param {Object} Study object.
   */
  function OHIFStudyMetadata(data, uid) {
    var _this;

    _this = _Viewerbase$metadata$.call(this, data, uid) || this;

    _this.init();

    return _this;
  }

  var _proto = OHIFStudyMetadata.prototype;

  _proto.init = function () {
    function init() {
      var _this2 = this;

      var study = this.getData(); // define "_studyInstanceUID" protected property

      Object.defineProperty(this, '_studyInstanceUID', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: study.studyInstanceUid
      }); // populate internal list of series

      study.seriesList.forEach(function (series) {
        _this2.addSeries(new OHIFSeriesMetadata(series, study));
      });
    }

    return init;
  }();

  return OHIFStudyMetadata;
}(Viewerbase.metadata.StudyMetadata);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/ohif_metadata/client/index.js                                                                   //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var Metadata;
module.watch(require("../namespace"), {
  Metadata: function (v) {
    Metadata = v;
  }
}, 0);
var OHIFStudyMetadata;
module.watch(require("./OHIFStudyMetadata"), {
  OHIFStudyMetadata: function (v) {
    OHIFStudyMetadata = v;
  }
}, 1);
var OHIFSeriesMetadata;
module.watch(require("./OHIFSeriesMetadata"), {
  OHIFSeriesMetadata: function (v) {
    OHIFSeriesMetadata = v;
  }
}, 2);
var OHIFInstanceMetadata;
module.watch(require("./OHIFInstanceMetadata"), {
  OHIFInstanceMetadata: function (v) {
    OHIFInstanceMetadata = v;
  }
}, 3);
Metadata.StudyMetadata = OHIFStudyMetadata;
Metadata.SeriesMetadata = OHIFSeriesMetadata;
Metadata.InstanceMetadata = OHIFInstanceMetadata;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("/node_modules/meteor/ohif:metadata/main.js");

/* Exports */
Package._define("ohif:metadata", exports);

})();
