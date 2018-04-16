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
var cornerstone = Package['ohif:cornerstone'].cornerstone;
var cornerstoneMath = Package['ohif:cornerstone'].cornerstoneMath;
var cornerstoneTools = Package['ohif:cornerstone'].cornerstoneTools;
var cornerstoneWADOImageLoader = Package['ohif:cornerstone'].cornerstoneWADOImageLoader;
var dicomParser = Package['ohif:cornerstone'].dicomParser;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:cornerstone-settings":{"client":{"main.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_cornerstone-settings/client/main.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Include cornerstone's settings imports
require('../imports/client');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"client":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_cornerstone-settings/imports/client/index.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
module.watch(require("./renderer.js"));
var MetadataProvider;
module.watch(require("./lib/classes/MetadataProvider"), {
  MetadataProvider: function (v) {
    MetadataProvider = v;
  }
}, 1);
OHIF.cornerstone.MetadataProvider = MetadataProvider; // TODO: Remove this after all viewers are updated to create an instance of OHIF.cornerstone.MetadataProvider

OHIF.cornerstone.metadataProvider = new MetadataProvider();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"renderer.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_cornerstone-settings/imports/client/renderer.js                                                       //
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
var rendererPath = 'settings.public.ui.cornerstoneRenderer';
OHIF.cornerstone.renderer = OHIF.utils.ObjectPath.get(Meteor, rendererPath) || '';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"parsingUtils.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_cornerstone-settings/imports/client/lib/parsingUtils.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  parsingUtils: function () {
    return parsingUtils;
  }
});
var dicomParser;
module.watch(require("meteor/ohif:cornerstone"), {
  dicomParser: function (v) {
    dicomParser = v;
  }
}, 0);
var parsingUtils = {
  /**
   * Check if supplied argument is a valid instance of the dicomParser.DataSet class.
   * @param data {Object} An instance of the dicomParser.DataSet class.
   * @returns {Boolean} Returns true if data is a valid instance of the dicomParser.DataSet class.
   */
  isValidDataSet: function (data) {
    return data instanceof dicomParser.DataSet;
  },

  /**
   * Parses an element tag according to the 'AT' VR definition.
   * @param data {Object} An instance of the dicomParser.DataSet class.
   * @param tag {String} A DICOM tag with in the format xGGGGEEEE.
   * @returns {String} A string representation of a data element tag or null if the field is not present or data is not long enough.
   */
  attributeTag: function (data, tag) {
    if (this.isValidDataSet(data) && tag in data.elements) {
      var element = data.elements[tag];

      if (element && element.length === 4) {
        var parser = data.byteArrayParser.readUint16,
            bytes = data.byteArray,
            offset = element.dataOffset;
        return 'x' + ('00000000' + (parser(bytes, offset) * 256 * 256 + parser(bytes, offset + 2)).toString(16)).substr(-8);
      }
    }

    return null;
  },

  /**
   * Parses the string representation of a multi-valued element into an array of strings. If the parser
   * parameter is passed and is a function, it will be applied to each element of the resulting array.
   * @param data {Object} An instance of the dicomParser.DataSet class.
   * @param tag {String} A DICOM tag with in the format xGGGGEEEE.
   * @param parser {Function} An optional parser function that can be applied to each element of the array.
   * @returns {Array} An array of floating point numbers or null if the field is not present or data is not long enough.
   */
  multiValue: function (data, tag, parser) {
    if (this.isValidDataSet(data) && tag in data.elements) {
      var element = data.elements[tag];

      if (element && element.length > 0) {
        var string = dicomParser.readFixedString(data.byteArray, element.dataOffset, element.length);

        if (typeof string === 'string' && string.length > 0) {
          if (typeof parser !== 'function') {
            parser = null;
          }

          return string.split('\\').map(function (value) {
            value = value.trim();
            return parser !== null ? parser(value) : value;
          });
        }
      }
    }

    return null;
  },

  /**
   * Parses a string to an array of floats for a multi-valued element.
   * @param data {Object} An instance of the dicomParser.DataSet class.
   * @param tag {String} A DICOM tag with in the format xGGGGEEEE.
   * @returns {Array} An array of floating point numbers or null if the field is not present or data is not long enough.
   */
  floatArray: function (data, tag) {
    return this.multiValue(data, tag, parseFloat);
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"classes":{"MetadataProvider.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_cornerstone-settings/imports/client/lib/classes/MetadataProvider.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

module.export({
  MetadataProvider: function () {
    return MetadataProvider;
  }
});
var cornerstoneMath;
module.watch(require("meteor/ohif:cornerstone"), {
  cornerstoneMath: function (v) {
    cornerstoneMath = v;
  }
}, 0);
var parsingUtils;
module.watch(require("../parsingUtils"), {
  parsingUtils: function (v) {
    parsingUtils = v;
  }
}, 1);
var FUNCTION = 'function';

var MetadataProvider =
/*#__PURE__*/
function () {
  function MetadataProvider() {
    // Define the main "metadataLookup" private property as an immutable property.
    Object.defineProperty(this, 'metadataLookup', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: new Map()
    }); // Local reference to provider function bound to current instance.

    Object.defineProperty(this, '_provider', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: null
    });
  }
  /**
   * Cornerstone Metadata provider to store image meta data
   * Data from instances, series, and studies are associated with
   * imageIds to facilitate usage of this information by Cornerstone's Tools
   *
   * e.g. the imagePlane metadata object contains instance information about
   * row/column pixel spacing, patient position, and patient orientation. It
   * is used in CornerstoneTools to position reference lines and orientation markers.
   *
   * @param {String} imageId The Cornerstone ImageId
   * @param {Object} data An object containing instance, series, and study metadata
   */


  var _proto = MetadataProvider.prototype;

  _proto.addMetadata = function () {
    function addMetadata(imageId, data) {
      var instanceMetadata = data.instance;
      var seriesMetadata = data.series;
      var studyMetadata = data.study;
      var numImages = data.numImages;
      var metadata = {};
      metadata.study = {
        accessionNumber: studyMetadata.accessionNumber,
        patientId: studyMetadata.patientId,
        studyInstanceUid: studyMetadata.studyInstanceUid,
        studyDate: studyMetadata.studyDate,
        studyTime: studyMetadata.studyTime,
        studyDescription: studyMetadata.studyDescription,
        institutionName: studyMetadata.institutionName,
        patientHistory: studyMetadata.patientHistory
      };
      metadata.series = {
        seriesDescription: seriesMetadata.seriesDescription,
        seriesNumber: seriesMetadata.seriesNumber,
        seriesDate: seriesMetadata.seriesDate,
        seriesTime: seriesMetadata.seriesTime,
        modality: seriesMetadata.modality,
        seriesInstanceUid: seriesMetadata.seriesInstanceUid,
        numImages: numImages
      };
      metadata.instance = instanceMetadata;
      metadata.patient = {
        name: studyMetadata.patientName,
        id: studyMetadata.patientId,
        birthDate: studyMetadata.patientBirthDate,
        sex: studyMetadata.patientSex,
        age: studyMetadata.patientAge
      }; // If there is sufficient information, populate
      // the imagePlane object for easier use in the Viewer

      metadata.imagePlane = this.getImagePlane(instanceMetadata); // Add the metadata to the imageId lookup object

      this.metadataLookup.set(imageId, metadata);
    }

    return addMetadata;
  }();
  /**
   * Return the metadata for the given imageId
   * @param {String} imageId The Cornerstone ImageId
   * @returns image metadata
   */


  _proto.getMetadata = function () {
    function getMetadata(imageId) {
      return this.metadataLookup.get(imageId);
    }

    return getMetadata;
  }();
  /**
   * Adds a set of metadata to the Cornerstone metadata provider given a specific
   * imageId, type, and dataset
   *
   * @param imageId
   * @param type (e.g. series, instance, tagDisplay)
   * @param data
   */


  _proto.addSpecificMetadata = function () {
    function addSpecificMetadata(imageId, type, data) {
      var metadata = {};
      metadata[type] = data;
      var oldMetadata = this.metadataLookup.get(imageId);
      this.metadataLookup.set(imageId, Object.assign(oldMetadata, metadata));
    }

    return addSpecificMetadata;
  }();

  _proto.getFromImage = function () {
    function getFromImage(image, type, tag, attrName, defaultValue) {
      var value;

      if (image.data) {
        value = this.getFromDataSet(image.data, type, tag);
      } else {
        value = image.instance[attrName];
      }

      return value == null ? defaultValue : value;
    }

    return getFromImage;
  }();

  _proto.getFromDataSet = function () {
    function getFromDataSet(dataSet, type, tag) {
      if (!dataSet) {
        return;
      }

      var fn = dataSet[type];

      if (!fn) {
        return;
      }

      return fn.call(dataSet, tag);
    }

    return getFromDataSet;
  }();

  _proto.getFrameIncrementPointer = function () {
    function getFrameIncrementPointer(image) {
      var dataSet = image.data;
      var frameInstancePointer = '';

      if (parsingUtils.isValidDataSet(dataSet)) {
        var frameInstancePointerNames = {
          x00181063: 'frameTime',
          x00181065: 'frameTimeVector'
        }; // (0028,0009) = Frame Increment Pointer

        var frameInstancePointerTag = parsingUtils.attributeTag(dataSet, 'x00280009');
        frameInstancePointer = frameInstancePointerNames[frameInstancePointerTag];
      } else {
        frameInstancePointer = image.instance.frameIncrementPointer;
      }

      return frameInstancePointer || '';
    }

    return getFrameIncrementPointer;
  }();

  _proto.getFrameTimeVector = function () {
    function getFrameTimeVector(image) {
      var dataSet = image.data;

      if (parsingUtils.isValidDataSet(dataSet)) {
        // Frame Increment Pointer points to Frame Time Vector (0018,1065) field
        return parsingUtils.floatArray(dataSet, 'x00181065');
      }

      return image.instance.frameTimeVector;
    }

    return getFrameTimeVector;
  }();

  _proto.getFrameTime = function () {
    function getFrameTime(image) {
      var dataSet = image.data;

      if (parsingUtils.isValidDataSet(dataSet)) {
        // Frame Increment Pointer points to Frame Time (0018,1063) field or is not defined (for addtional flexibility).
        // Yet another value is possible for this field (5200,9230 for Multi-frame Functional Groups)
        // but that case is currently not supported.
        return dataSet.floatString('x00181063', -1);
      }

      return image.instance.frameTime;
    }

    return getFrameTime;
  }();
  /**
   * Updates the related metadata for missing fields given a specified image
   *
   * @param image
   */


  _proto.updateMetadata = function () {
    function updateMetadata(image) {
      var imageMetadata = this.metadataLookup.get(image.imageId);

      if (!imageMetadata) {
        return;
      }

      imageMetadata.patient.age = imageMetadata.patient.age || this.getFromDataSet(image.data, 'string', 'x00101010');
      imageMetadata.instance.rows = imageMetadata.instance.rows || image.rows;
      imageMetadata.instance.columns = imageMetadata.instance.columns || image.columns;
      imageMetadata.instance.sopClassUid = imageMetadata.instance.sopClassUid || this.getFromDataSet(image.data, 'string', 'x00080016');
      imageMetadata.instance.sopInstanceUid = imageMetadata.instance.sopInstanceUid || this.getFromDataSet(image.data, 'string', 'x00080018');
      imageMetadata.instance.pixelSpacing = imageMetadata.instance.pixelSpacing || this.getFromDataSet(image.data, 'string', 'x00280030');
      imageMetadata.instance.frameOfReferenceUID = imageMetadata.instance.frameOfReferenceUID || this.getFromDataSet(image.data, 'string', 'x00200052');
      imageMetadata.instance.imageOrientationPatient = imageMetadata.instance.imageOrientationPatient || this.getFromDataSet(image.data, 'string', 'x00200037');
      imageMetadata.instance.imagePositionPatient = imageMetadata.instance.imagePositionPatient || this.getFromDataSet(image.data, 'string', 'x00200032');
      imageMetadata.instance.sliceThickness = imageMetadata.instance.sliceThickness || this.getFromDataSet(image.data, 'string', 'x00180050');
      imageMetadata.instance.sliceLocation = imageMetadata.instance.sliceLocation || this.getFromDataSet(image.data, 'string', 'x00201041');
      imageMetadata.instance.tablePosition = imageMetadata.instance.tablePosition || this.getFromDataSet(image.data, 'string', 'x00189327');
      imageMetadata.instance.spacingBetweenSlices = imageMetadata.instance.spacingBetweenSlices || this.getFromDataSet(image.data, 'string', 'x00180088');
      imageMetadata.instance.lossyImageCompression = imageMetadata.instance.lossyImageCompression || this.getFromDataSet(image.data, 'string', 'x00282110');
      imageMetadata.instance.lossyImageCompressionRatio = imageMetadata.instance.lossyImageCompressionRatio || this.getFromDataSet(image.data, 'string', 'x00282112');
      imageMetadata.instance.frameIncrementPointer = imageMetadata.instance.frameIncrementPointer || this.getFromDataSet(image.data, 'string', 'x00280009');
      imageMetadata.instance.frameTime = imageMetadata.instance.frameTime || this.getFromDataSet(image.data, 'string', 'x00181063');
      imageMetadata.instance.frameTimeVector = imageMetadata.instance.frameTimeVector || this.getFromDataSet(image.data, 'string', 'x00181065');

      if ((image.data || image.instance) && !imageMetadata.instance.multiframeMetadata) {
        imageMetadata.instance.multiframeMetadata = this.getMultiframeModuleMetadata(image);
      }

      imageMetadata.imagePlane = imageMetadata.imagePlane || this.getImagePlane(imageMetadata.instance);
    }

    return updateMetadata;
  }();
  /**
   * Constructs and returns the imagePlane given the metadata instance
   *
   * @param metadataInstance The metadata instance (InstanceMetadata class) containing information to construct imagePlane
   * @returns imagePlane The constructed imagePlane to be used in viewer easily
   */


  _proto.getImagePlane = function () {
    function getImagePlane(instance) {
      if (!instance.rows || !instance.columns || !instance.pixelSpacing || !instance.frameOfReferenceUID || !instance.imageOrientationPatient || !instance.imagePositionPatient) {
        return;
      }

      var imageOrientation = instance.imageOrientationPatient.split('\\');
      var imagePosition = instance.imagePositionPatient.split('\\');
      var columnPixelSpacing = 1.0;
      var rowPixelSpacing = 1.0;

      if (instance.pixelSpacing) {
        var split = instance.pixelSpacing.split('\\');
        rowPixelSpacing = parseFloat(split[0]);
        columnPixelSpacing = parseFloat(split[1]);
      }

      return {
        frameOfReferenceUID: instance.frameOfReferenceUID,
        rows: instance.rows,
        columns: instance.columns,
        rowCosines: new cornerstoneMath.Vector3(parseFloat(imageOrientation[0]), parseFloat(imageOrientation[1]), parseFloat(imageOrientation[2])),
        columnCosines: new cornerstoneMath.Vector3(parseFloat(imageOrientation[3]), parseFloat(imageOrientation[4]), parseFloat(imageOrientation[5])),
        imagePositionPatient: new cornerstoneMath.Vector3(parseFloat(imagePosition[0]), parseFloat(imagePosition[1]), parseFloat(imagePosition[2])),
        rowPixelSpacing: rowPixelSpacing,
        columnPixelSpacing: columnPixelSpacing
      };
    }

    return getImagePlane;
  }();
  /**
   * This function extracts miltiframe information from a dicomParser.DataSet object.
   *
   * @param dataSet {Object} An instance of dicomParser.DataSet object where multiframe information can be found.
   * @return {Object} An object containing multiframe image metadata (frameIncrementPointer, frameTime, frameTimeVector, etc).
   */


  _proto.getMultiframeModuleMetadata = function () {
    function getMultiframeModuleMetadata(image) {
      var imageInfo = {
        isMultiframeImage: false,
        frameIncrementPointer: null,
        numberOfFrames: 0,
        frameTime: 0,
        frameTimeVector: null,
        averageFrameRate: 0 // backwards compatibility only... it might be useless in the future

      };
      var frameTime;
      var numberOfFrames = this.getFromImage(image, 'intString', 'x00280008', 'numberOfFrames', -1);

      if (numberOfFrames > 0) {
        // set multi-frame image indicator
        imageInfo.isMultiframeImage = true;
        imageInfo.numberOfFrames = numberOfFrames; // (0028,0009) = Frame Increment Pointer

        var frameIncrementPointer = this.getFrameIncrementPointer(image);

        if (frameIncrementPointer === 'frameTimeVector') {
          // Frame Increment Pointer points to Frame Time Vector (0018,1065) field
          var frameTimeVector = this.getFrameTimeVector(image);

          if (frameTimeVector instanceof Array && frameTimeVector.length > 0) {
            imageInfo.frameIncrementPointer = frameIncrementPointer;
            imageInfo.frameTimeVector = frameTimeVector;
            frameTime = frameTimeVector.reduce(function (a, b) {
              return a + b;
            }) / frameTimeVector.length;
            imageInfo.averageFrameRate = 1000 / frameTime;
          }
        } else if (frameIncrementPointer === 'frameTime' || frameIncrementPointer === '') {
          frameTime = this.getFrameTime(image);

          if (frameTime > 0) {
            imageInfo.frameIncrementPointer = frameIncrementPointer;
            imageInfo.frameTime = frameTime;
            imageInfo.averageFrameRate = 1000 / frameTime;
          }
        }
      }

      return imageInfo;
    }

    return getMultiframeModuleMetadata;
  }();
  /**
   * Get a bound reference to the provider function.
   */


  _proto.getProvider = function () {
    function getProvider() {
      var provider = this._provider;

      if ((0, _typeof2.default)(this._provider) !== FUNCTION) {
        provider = this.provider.bind(this);
        this._provider = provider;
      }

      return provider;
    }

    return getProvider;
  }();
  /**
   * Looks up metadata for Cornerstone Tools given a specified type and imageId
   * A type may be, e.g. 'study', or 'patient', or 'imagePlane'. These types
   * are keys in the stored metadata objects.
   *
   * @param type
   * @param imageId
   * @returns {Object} Relevant metadata of the specified type
   */


  _proto.provider = function () {
    function provider(type, imageId) {
      // TODO: Cornerstone Tools use 'imagePlaneModule', but OHIF use 'imagePlane'. It must be consistent.
      if (type === 'imagePlaneModule') {
        type = 'imagePlane';
      }

      var imageMetadata = this.metadataLookup.get(imageId);

      if (!imageMetadata) {
        return;
      }

      if (imageMetadata.hasOwnProperty(type)) {
        return imageMetadata[type];
      }
    }

    return provider;
  }();

  return MetadataProvider;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("/node_modules/meteor/ohif:cornerstone-settings/client/main.js");

/* Exports */
Package._define("ohif:cornerstone-settings", exports);

})();
