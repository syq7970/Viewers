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
var HTTP = Package.http.HTTP;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var moment = Package['momentjs:moment'].moment;
var validate = Package.validatejs.validate;
var PersistentSession = Package['u2622:persistent-session'].PersistentSession;
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

/* Package-scope variables */
var ProtocolEngine, dialogPolyfill;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:viewerbase":{"client":{"components":{"basic":{"layout":{"template.layout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/basic/layout/template.layout.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("layout");
Template["layout"] = new Template("Template.layout", (function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("yield"));
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"loadingText":{"template.loadingText.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/basic/loadingText/template.loadingText.js                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("loadingText");
Template["loadingText"] = new Template("Template.loadingText", (function() {
  var view = this;
  return HTML.Raw('<div class="loadingTextDiv">\n        Loading... <i class="fa fa-spin fa-circle-o-notch fa-fw"></i>\n    </div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"errorText":{"template.errorText.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/basic/errorText/template.errorText.js                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("errorText");
Template["errorText"] = new Template("Template.errorText", (function() {
  var view = this;
  return HTML.DIV({
    class: "errorTextDiv"
  }, "\n        Error: ", Blaze.View("lookup:error", function() {
    return Spacebars.mustache(view.lookup("error"));
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"removableBackdrop":{"template.removableBackdrop.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/basic/removableBackdrop/template.removableBackdrop.js                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("removableBackdrop");
Template["removableBackdrop"] = new Template("Template.removableBackdrop", (function() {
  var view = this;
  return HTML.Raw('<div class="removableBackdrop noselect" oncontextmenu="return false;" unselectable="on" onselectstart="return false;">\n    </div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"aboutModal":{"template.aboutModal.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/basic/aboutModal/template.aboutModal.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("aboutModal");
Template["aboutModal"] = new Template("Template.aboutModal", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      id: "aboutModal",
      dialogClass: "modal-lg",
      title: "About"
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("dialogSimple"), function() {
      return [ "\n        ", HTML.A({
        target: "_blank",
        class: "forkOnGithub",
        href: function() {
          return Spacebars.mustache(view.lookup("githubUrl"));
        }
      }, "\n            ", HTML.IMG({
        src: "https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67",
        alt: "Fork me on GitHub",
        "data-canonical-src": "https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
      }), "\n        "), "\n        ", HTML.DIV({
        class: "logo p-x-3 p-y-3 clearfix"
      }, "\n            ", HTML.SVG({
        class: "logoImage pull-left"
      }, "\n                ", HTML.USE({
        "xlink:href": function() {
          return Spacebars.mustache(view.lookup("absoluteUrl"), "packages/ohif_viewerbase/assets/icons.svg#icon-ohif-logo");
        }
      }), "\n            "), "\n            ", HTML.A({
        class: "logoText pull-left",
        target: "_blank",
        href: "http://ohif.org"
      }, "\n                Open Health Imaging Foundation DICOM Viewer\n            "), "\n        "), "\n        ", HTML.DIV({
        class: "p-x-1 p-y-1 m-y-2"
      }, "\n            ", HTML.A({
        class: "btn btn-default inline",
        target: "_blank",
        href: "https://groups.google.com/forum/#!forum/cornerstone-platform"
      }, "\n                Visit the forum\n            "), "\n            ", HTML.A({
        class: "btn btn-default inline",
        target: "_blank",
        href: "https://github.com/OHIF/Viewers/issues"
      }, "\n                Report an issue\n            "), "\n        "), "\n        ", HTML.DIV({
        class: "p-y-1 p-x-1"
      }, "\n            ", HTML.H3("Version Information"), "\n            ", HTML.TABLE({
        class: "table table-responsive"
      }, "\n                ", HTML.THEAD("\n                    ", HTML.TR("\n                        ", HTML.TH("Name"), "\n                        ", HTML.TH("Value"), "\n                    "), "\n                "), "\n                ", HTML.TBODY("\n                    ", HTML.TR("\n                        ", HTML.TD("Repository URL"), "\n                        ", HTML.TD("\n                            ", HTML.A({
        target: "_blank",
        href: function() {
          return Spacebars.mustache(view.lookup("githubUrl"));
        }
      }, Blaze.View("lookup:githubUrl", function() {
        return Spacebars.mustache(view.lookup("githubUrl"));
      })), "\n                        "), "\n                    "), "\n                    ", HTML.TR("\n                        ", HTML.TD("Last Commit Hash"), "\n                        ", HTML.TD("\n                            ", HTML.A({
        target: "_blank",
        href: function() {
          return [ Spacebars.mustache(view.lookup("githubUrl")), "/commit/", Spacebars.mustache(view.lookup("gitRev"), "long") ];
        }
      }, "\n                            ", Blaze.View("lookup:gitRev", function() {
        return Spacebars.mustache(view.lookup("gitRev"), "long");
      }), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.TR("\n                        ", HTML.TD("Latest Tag"), "\n                        ", HTML.TD("\n                            ", HTML.A({
        target: "_blank",
        href: function() {
          return [ Spacebars.mustache(view.lookup("githubUrl")), "/releases/tag/", Spacebars.mustache(view.lookup("gitRev"), "tag") ];
        }
      }, "\n                            ", Blaze.View("lookup:gitRev", function() {
        return Spacebars.mustache(view.lookup("gitRev"), "tag");
      }), "\n                            "), "\n                        "), "\n                    "), "\n                    ", HTML.TR("\n                        ", HTML.TD("Branch"), "\n                        ", HTML.TD("\n                            ", HTML.A({
        target: "_blank",
        href: function() {
          return [ Spacebars.mustache(view.lookup("githubUrl")), "/tree/", Spacebars.mustache(view.lookup("gitRev"), "branch") ];
        }
      }, "\n                                ", Blaze.View("lookup:gitRev", function() {
        return Spacebars.mustache(view.lookup("gitRev"), "branch");
      }), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"aboutModal.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/basic/aboutModal/aboutModal.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.aboutModal.helpers({
  githubUrl: function () {
    return 'https://github.com/OHIF/Viewers';
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"studyBrowser":{"studyBrowser":{"template.studyBrowser.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/studyBrowser/studyBrowser/template.studyBrowser.js                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("studyBrowser");
Template["studyBrowser"] = new Template("Template.studyBrowser", (function() {
  var view = this;
  return HTML.DIV({
    class: "studyBrowser"
  }, "\n        ", HTML.DIV({
    class: "scrollableStudyThumbnails"
  }, "\n            ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("studies")),
      _variable: "study"
    };
  }, function() {
    return [ "\n                ", Blaze.Each(function() {
      return {
        _sequence: Spacebars.dataMustache(view.lookup("sort"), Spacebars.dataMustache(view.lookup("studyThumbnails"), view.lookup("study")), view.lookup("thumbnailSortBy"), view.lookup("thumbnailSortType")),
        _variable: "thumbnail"
      };
    }, function() {
      return [ "\n                    ", Blaze._TemplateWith(function() {
        return {
          thumbnail: Spacebars.call(view.lookup("thumbnail"))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("thumbnailEntry"));
      }), "\n                " ];
    }), "\n            " ];
  }), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studyBrowser.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/studyBrowser/studyBrowser/studyBrowser.js                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 1);
Template.studyBrowser.helpers({
  studies: function () {
    // @TypeSafeStudies
    return OHIF.viewer.Studies.findAllBy({
      selected: true
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"thumbnailEntry":{"template.thumbnailEntry.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/studyBrowser/thumbnailEntry/template.thumbnailEntry.js                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("thumbnailEntry");
Template["thumbnailEntry"] = new Template("Template.thumbnailEntry", (function() {
  var view = this;
  return Blaze.Let({
    stack: function() {
      return Spacebars.call(Spacebars.dot(view.lookup("."), "thumbnail", "stack"));
    }
  }, function() {
    return [ "\n        ", HTML.DIV({
      class: function() {
        return [ "thumbnailEntry noselect m-t-1 m-b-2 ", Spacebars.mustache(view.lookup("draggableClass")), " ", Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("isDisplaySetActive"), Spacebars.dot(view.lookup("stack"), "displaySetInstanceUid"), view.lookup("viewportIndex"));
        }, function() {
          return "active";
        }) ];
      }
    }, "\n            ", HTML.DIV({
      class: "p-x-1"
    }, "\n                ", Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."));
    }, function() {
      return Spacebars.include(view.lookupTemplate("imageThumbnail"));
    }), "\n            "), "\n            ", HTML.DIV({
      class: function() {
        return [ "seriesDetails flex-h m-x-1 ", Blaze.Unless(function() {
          return Spacebars.call(Spacebars.dot(view.lookup("stack"), "seriesDescription"));
        }, function() {
          return "info-only";
        }) ];
      }
    }, "\n                ", HTML.DIV({
      class: "seriesDescription flex-grow"
    }, "\n                    ", Blaze.View("lookup:stack.seriesDescription", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("stack"), "seriesDescription"));
    }), "\n                "), "\n                ", HTML.DIV({
      class: "seriesInformation"
    }, "\n                    ", HTML.DIV({
      class: "item item-series clearfix"
    }, "\n                        ", HTML.DIV({
      class: "icon"
    }, "S:"), "\n                        ", HTML.DIV({
      class: "value"
    }, Blaze.View("lookup:stack.seriesNumber", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("stack"), "seriesNumber"));
    })), "\n                    "), "\n                    ", Blaze.Unless(function() {
      return Spacebars.dataMustache(view.lookup("isUndefined"), view.lookup("instanceNumber"));
    }, function() {
      return [ "\n                        ", HTML.DIV({
        class: "item item-series clearfix"
      }, "\n                            ", HTML.DIV({
        class: "icon"
      }, "I:"), "\n                            ", HTML.DIV({
        class: "value"
      }, Blaze.View("lookup:instanceNumber", function() {
        return Spacebars.mustache(view.lookup("instanceNumber"));
      })), "\n                        "), "\n                    " ];
    }), "\n                    ", HTML.DIV({
      class: "item item-frames clearfix"
    }, "\n                        ", HTML.DIV({
      class: "icon"
    }, HTML.DIV()), "\n                        ", HTML.DIV({
      class: "value"
    }, Blaze.View("lookup:stack.numImageFrames", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("stack"), "numImageFrames"));
    })), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    " ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"thumbnailEntry.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/studyBrowser/thumbnailEntry/thumbnailEntry.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
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
var thumbnailDragHandlers;
module.watch(require("../../../lib/thumbnailDragHandlers"), {
  thumbnailDragHandlers: function (v) {
    thumbnailDragHandlers = v;
  }
}, 4);
Template.thumbnailEntry.onCreated(function () {
  var instance = Template.instance(); // Check if the thumbnails will be draggable or clickable

  var isIndexUndefined = _.isUndefined(instance.data.viewportIndex);

  instance.isDragAndDrop = isIndexUndefined && OHIF.uiSettings.leftSidebarDragAndDrop !== false;
});
Template.thumbnailEntry.events({
  // Event handlers for drag and drop
  'mousedown .thumbnailEntry': function (event, instance) {
    var data = instance.data.thumbnail.stack;
    if (!instance.isDragAndDrop || event.button !== 0) return;
    thumbnailDragHandlers.thumbnailDragStartHandler(event, data);
  },
  'touchstart .thumbnailEntry': function (event, instance) {
    var data = instance.data.thumbnail.stack;
    if (!instance.isDragAndDrop) return;
    thumbnailDragHandlers.thumbnailDragStartHandler(event, data);
  },
  'touchmove .thumbnailEntry': function (event, instance) {
    if (!instance.isDragAndDrop) return;
    thumbnailDragHandlers.thumbnailDragHandler(event);
  },
  'touchend .thumbnailEntry': function (event, instance) {
    var data = instance.data.thumbnail.stack;
    if (!instance.isDragAndDrop) return;
    thumbnailDragHandlers.thumbnailDragEndHandler(event, data);
  },
  // Event handlers for click (quick switch)
  'click .thumbnailEntry': function (event, instance) {
    if (instance.isDragAndDrop) return; // Get the thumbnail stack data

    var data = instance.data.thumbnail.stack; // Get the viewport index

    var viewportIndex = instance.data.viewportIndex;

    if (_.isUndefined(viewportIndex)) {
      viewportIndex = Session.get('activeViewport') || 0;
    } // Rerender the viewport using the clicked thumbnail data


    OHIF.viewerbase.layoutManager.rerenderViewportWithNewDisplaySet(viewportIndex, data);
  },
  // Event handlers for double click
  'dblclick .thumbnailEntry': function (event, instance) {
    if (!instance.isDragAndDrop) return; // Get the active viewport index and total number of viewports...

    var viewportCount = OHIF.viewerbase.layoutManager.getNumberOfViewports();
    var viewportIndex = Session.get('activeViewport') || 0;

    if (viewportIndex >= viewportCount) {
      viewportIndex = viewportCount > 0 ? viewportCount - 1 : 0;
    } // Get the thumbnail stack data


    var data = instance.data.thumbnail.stack; // Rerender the viewport using the clicked thumbnail data

    OHIF.viewerbase.layoutManager.rerenderViewportWithNewDisplaySet(viewportIndex, data);
  }
});
Template.thumbnailEntry.helpers({
  draggableClass: function () {
    return Template.instance().isDragAndDrop ? 'draggable' : '';
  },
  instanceNumber: function () {
    var thumbnail = Template.instance().data.thumbnail;

    if (!thumbnail) {
      return;
    }

    var stack = thumbnail.stack;

    if (!stack) {
      return;
    } //  No need to show instance number for single-frame images


    if (!stack.isMultiFrame) {
      return;
    }

    var firstImage = stack.images[0];

    if (!firstImage) {
      return;
    }

    return firstImage.instanceNumber;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imageThumbnail":{"template.imageThumbnail.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/studyBrowser/imageThumbnail/template.imageThumbnail.js                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("imageThumbnail");
Template["imageThumbnail"] = new Template("Template.imageThumbnail", (function() {
  var view = this;
  return HTML.DIV({
    class: "imageThumbnail"
  }, HTML.Raw('\n        <div class="imageThumbnailCanvas"></div>\n        '), HTML.DIV({
    class: "imageThumbnailLoadingIndicator thumbnailLoadingIndicator"
  }, "\n            ", HTML.P("Loading ", Blaze.View("lookup:percentComplete", function() {
    return Spacebars.mustache(view.lookup("percentComplete"));
  })), "\n        "), HTML.Raw('\n        <div class="imageThumbnailErrorLoadingIndicator thumbnailLoadingIndicator">\n            <p>Error</p>\n        </div>\n        '), Blaze.If(function() {
    return Spacebars.call(view.lookup("showStackLoadingProgressBar"));
  }, function() {
    return [ "\n            ", HTML.DIV({
      class: "imageThumbnailProgressBar"
    }, "\n                ", HTML.DIV({
      class: "imageThumbnailProgressBarInner",
      style: function() {
        return [ "width:", Spacebars.mustache(view.lookup("stackPercentComplete")), "%" ];
      }
    }), "\n            "), "\n        " ];
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"imageThumbnail.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/studyBrowser/imageThumbnail/imageThumbnail.js                            //
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
var Tracker;
module.watch(require("meteor/tracker"), {
  Tracker: function (v) {
    Tracker = v;
  }
}, 2);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 3);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 4);
var cornerstone;
module.watch(require("meteor/ohif:cornerstone"), {
  cornerstone: function (v) {
    cornerstone = v;
  }
}, 5);
Template.imageThumbnail.onCreated(function () {
  var instance = Template.instance(); // Get the image ID for current thumbnail

  instance.getThumbnailImageId = function () {
    var settingPath = 'public.ui.useMiddleSeriesInstanceAsThumbnail';
    var useMiddleFrame = OHIF.utils.ObjectPath.get(Meteor.settings, settingPath);
    var stack = instance.data.thumbnail.stack;
    var lastIndex = (stack.numImageFrames || stack.images.length || 1) - 1;
    var imageIndex = useMiddleFrame ? Math.floor(lastIndex / 2) : 0;
    var imageInstance;

    if (stack.isMultiFrame) {
      imageInstance = stack.images[0];
    } else {
      imageInstance = stack.images[imageIndex];
      imageIndex = undefined;
    }

    return imageInstance.getImageId(imageIndex, true);
  };
});
Template.imageThumbnail.onRendered(function () {
  var instance = Template.instance(); // Declare DOM and jQuery objects

  var $parent = instance.$('.imageThumbnail');
  var $loading = $parent.find('.imageThumbnailLoadingIndicator');
  var $loadingError = $parent.find('.imageThumbnailErrorLoadingIndicator');
  var $element = $parent.find('.imageThumbnailCanvas');
  var element = $element.get(0);

  instance.refreshImage = function () {
    if (!element) {
      return;
    } // Remove previously generated static images


    $element.find('.static-image').remove(); // Enable cornerstone for thumbnail element again creating a new canvas

    cornerstone.enable(element, {
      renderer: ''
    }); // Activate the loading state

    $loading.css('display', 'block'); // Define a handler for success on image load

    var loadSuccess = function (image) {
      // Check to make sure the element is enabled.
      try {
        cornerstone.getEnabledElement(element);
      } catch (error) {
        return;
      }

      cornerstone.displayImage(element, image);
      $element.one('cornerstoneimagerendered', function (event) {
        var eventData = event.originalEvent.detail;
        var element = eventData.element;
        var enabledElement = cornerstone.getEnabledElement(element); // Create a static image from

        var imageElement = document.createElement('img');
        imageElement.classList.add('static-image');
        var dataUrl = enabledElement.canvas.toDataURL('image/jpeg', 1);
        imageElement.src = dataUrl; // Try to disable cornerstone for thumbnail element and remove its canvas

        try {
          cornerstone.disable(element);
        } catch (e) {}

        $element.append(imageElement);
        $loading.css('display', 'none');
      });
    }; // Define a handler for error on image load


    var loadError = function () {
      $loading.css('display', 'none');
      $loadingError.css('display', 'block');
    }; // Get the image ID


    var imageId = instance.getThumbnailImageId(); // Call cornerstone image loader with the defined handlers

    cornerstone.loadAndCacheImage(imageId).then(loadSuccess, loadError);
  }; // Run this computation every time the current study is changed


  instance.autorun(function () {
    // Check if there is a reactive var set for current study
    if (instance.data.currentStudy) {
      // Register a dependency from this computation on current study
      instance.data.currentStudy.dep.depend();
    } // Depend on external data and re-run this computation when it changes


    Template.currentData(); // Wait for the new data and refresh the image thumbnail

    Tracker.afterFlush(function () {
      return instance.refreshImage();
    });
  });
});
Template.imageThumbnail.onDestroyed(function () {
  var instance = Template.instance(); // Declare DOM and jQuery objects

  var $parent = instance.$('.imageThumbnail');
  var $element = $parent.find('.imageThumbnailCanvas');
  var element = $element.get(0); // Try to disable the element if it still exists

  try {
    cornerstone.disable(element);
  } catch (e) {}
});
Template.imageThumbnail.helpers({
  // Executed every time the thumbnail image loading progress is changed
  percentComplete: function () {
    var instance = Template.instance(); // Get the encoded image ID for thumbnail

    var encodedImageId = OHIF.string.encodeId(instance.getThumbnailImageId()); // Register a dependency from this computation on Session key

    var percentComplete = Session.get('CornerstoneThumbnailLoadProgress' + encodedImageId); // Return the complete percent amount of the image loading

    if (percentComplete && percentComplete !== 100) {
      return percentComplete + '%';
    }
  },
  // Return how much the stack has already loaded
  stackPercentComplete: function () {
    var instance = Template.instance();
    var stack = instance.data.thumbnail.stack;
    var displaySetInstanceUid = stack.displaySetInstanceUid;
    var progress = Session.get('StackProgress:' + displaySetInstanceUid);
    var percentComplete = progress && progress.percentComplete;
    return percentComplete;
  },
  showStackLoadingProgressBar: function () {
    return OHIF.uiSettings.showStackLoadingProgressBar;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"viewer":{"imageViewerViewport":{"template.imageViewerViewport.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/imageViewerViewport/template.imageViewerViewport.js               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("imageViewerViewport");
Template["imageViewerViewport"] = new Template("Template.imageViewerViewport", (function() {
  var view = this;
  return [ HTML.Raw('<div class="imageViewerViewport" oncontextmenu="return false;" unselectable="on" onselectstart="return false;" tabindex="0">\n    </div>\n    <div class="viewportInstructions">\n        Please drag a stack here to view images.\n    </div>\n    '), Spacebars.include(view.lookupTemplate("viewportOverlay")), "\n    ", Spacebars.include(view.lookupTemplate("loadingIndicator")), "\n    ", Spacebars.include(view.lookupTemplate("viewportOrientationMarkers")) ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"imageViewerViewport.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/imageViewerViewport/imageViewerViewport.js                        //
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
var Tracker;
module.watch(require("meteor/tracker"), {
  Tracker: function (v) {
    Tracker = v;
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
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 5);
var cornerstone, cornerstoneTools;
module.watch(require("meteor/ohif:cornerstone"), {
  cornerstone: function (v) {
    cornerstone = v;
  },
  cornerstoneTools: function (v) {
    cornerstoneTools = v;
  }
}, 6);
var StackManager;
module.watch(require("../../../lib/StackManager"), {
  StackManager: function (v) {
    StackManager = v;
  }
}, 7);
var setActiveViewport;
module.watch(require("../../../lib/setActiveViewport"), {
  setActiveViewport: function (v) {
    setActiveViewport = v;
  }
}, 8);
var imageViewerViewportData;
module.watch(require("../../../lib/imageViewerViewportData"), {
  imageViewerViewportData: function (v) {
    imageViewerViewportData = v;
  }
}, 9);
var updateCrosshairsSynchronizer;
module.watch(require("../../../lib/updateCrosshairsSynchronizer"), {
  updateCrosshairsSynchronizer: function (v) {
    updateCrosshairsSynchronizer = v;
  }
}, 10);
var toolManager;
module.watch(require("../../../lib/toolManager"), {
  toolManager: function (v) {
    toolManager = v;
  }
}, 11);
var updateOrientationMarkers;
module.watch(require("../../../lib/updateOrientationMarkers"), {
  updateOrientationMarkers: function (v) {
    updateOrientationMarkers = v;
  }
}, 12);
var getInstanceClassDefaultViewport;
module.watch(require("../../../lib/instanceClassSpecificViewport"), {
  getInstanceClassDefaultViewport: function (v) {
    getInstanceClassDefaultViewport = v;
  }
}, 13);
var OHIFError;
module.watch(require("../../../lib/classes/OHIFError"), {
  OHIFError: function (v) {
    OHIFError = v;
  }
}, 14);
var allCornerstoneEvents = ['click', 'cornerstonetoolsmousedown', 'cornerstonetoolsmousedownactivate', 'cornerstonetoolsmouseclick', 'cornerstonetoolsmousedrag', 'cornerstonetoolsmouseup', 'cornerstonetoolsmousewheel', 'cornerstonetoolsdoubletap', 'cornerstonetoolstouchpress', 'cornerstonetoolsmultitouchstart', 'cornerstonetoolsmultitouchstartactive', 'cornerstonetoolsmultitouchdrag'];
/**
 * This function loads a study series into a viewport element.
 *
 * @param data {object} Object containing the study, series, and viewport element to be used
 */

var loadDisplaySetIntoViewport = function (data, templateData) {
  OHIF.log.info('imageViewerViewport loadDisplaySetIntoViewport'); // Make sure we have all the data required to render the series

  if (!data.study || !data.displaySet || !data.element) {
    OHIF.log.warn('loadDisplaySetIntoViewport: No Study, Display Set, or Element provided');
    return;
  } // Get the current element and it's index in the list of all viewports
  // The viewport index is often used to store information about a viewport element


  var element = data.element;
  var viewportIndex = $('.imageViewerViewport').index(element);
  var layoutManager = OHIF.viewerbase.layoutManager;
  layoutManager.viewportData = layoutManager.viewportData || {};
  layoutManager.viewportData[viewportIndex] = layoutManager.viewportData[viewportIndex] || {};
  layoutManager.viewportData[viewportIndex].viewportIndex = viewportIndex; // Stop here if no data was defined for the viewer

  if (!OHIF.viewer.data) return; // This data will be saved so that the viewport can be reloaded to the same state  later

  OHIF.viewer.data.loadedSeriesData[viewportIndex] = {}; // Create shortcut to displaySet

  var displaySet = data.displaySet; // Get stack from Stack Manager

  var stack = StackManager.findOrCreateStack(data.study, displaySet); // If is a clip, updates the global FPS for cine dialog

  if (stack.isClip && stack.frameRate > 0) {
    // Sets the global variable
    OHIF.viewer.cine.framesPerSecond = parseFloat(stack.frameRate); // Update the cine dialog FPS

    Session.set('UpdateCINE', Math.random());
  } // Shortcut for array with image IDs


  var imageIds = stack.imageIds; // Define the current image stack using the newly created image IDs

  stack = {
    currentImageIdIndex: data.currentImageIdIndex > 0 && data.currentImageIdIndex < imageIds.length ? data.currentImageIdIndex : 0,
    imageIds: imageIds,
    displaySetInstanceUid: data.displaySetInstanceUid
  }; // Get the current image ID for the stack that will be rendered

  var imageId = imageIds[stack.currentImageIdIndex]; // Save the current image ID inside the template data so it can be
  // retrieved from the template helpers

  templateData.imageId = imageId; // Save the current image ID inside the ViewportLoading object.
  //
  // The ViewportLoading object relates the viewport elements with whichever
  // image is currently being loaded into them. This is useful so that we can
  // place progress (download %) for each image inside the proper viewports.

  window.ViewportLoading[viewportIndex] = imageId; // Enable Cornerstone for the viewport element

  var options = {
    renderer: OHIF.cornerstone.renderer
  };
  cornerstone.enable(element, options); // Get the handler functions that will run when loading has finished or thrown
  // an error. These are used to show/hide loading / error text boxes on each viewport.

  var endLoadingHandler = cornerstoneTools.loadHandlerManager.getEndLoadHandler();
  var errorLoadingHandler = cornerstoneTools.loadHandlerManager.getErrorLoadingHandler(); // Get the current viewport settings

  var viewport = cornerstone.getViewport(element);
  var studyInstanceUid = data.studyInstanceUid,
      seriesInstanceUid = data.seriesInstanceUid,
      displaySetInstanceUid = data.displaySetInstanceUid,
      currentImageIdIndex = data.currentImageIdIndex; // Store the current series data inside the Layout Manager

  layoutManager.viewportData[viewportIndex] = {
    imageId: imageId,
    studyInstanceUid: studyInstanceUid,
    seriesInstanceUid: seriesInstanceUid,
    displaySetInstanceUid: displaySetInstanceUid,
    currentImageIdIndex: currentImageIdIndex,
    viewport: viewport || data.viewport,
    viewportIndex: viewportIndex
  }; // Handle the case where the imageId isn't loaded correctly and the
  // imagePromise returns undefined
  // To test, uncomment the next line
  // data.imageId = 'AfileThatDoesntWork'; // For testing only!

  var imagePromise;

  try {
    imagePromise = cornerstone.loadAndCacheImage(imageId);
  } catch (error) {
    OHIF.log.info(error);

    if (!imagePromise) {
      errorLoadingHandler(element, imageId, error);
      return;
    }
  } // Additional tasks for metadata provider. If using your own
  // metadata provider, this may not be necessary.
  // updateMetadata is important, though, to update image metadata that
  // for any reason was missing some information such as rows, columns,
  // sliceThickness, etc (See MetadataProvider class from ohif-cornerstone package)


  var metadataProvider = OHIF.viewer.metadataProvider;
  var isUpdateMetadataDefined = metadataProvider && typeof metadataProvider.updateMetadata === 'function'; // loadAndCacheImage configurable callbacks

  var callbacks = imageViewerViewportData.callbacks; // Check if it has before loadAndCacheImage callback

  if (typeof callbacks.before === 'function') {
    OHIF.log.info('imageViewerViewport before loadAndCacheImage callback');
    callbacks.before(imagePromise, templateData);
  } // Start loading the image.


  imagePromise.then(function (image) {
    var enabledElement;

    try {
      enabledElement = cornerstone.getEnabledElement(element);
    } catch (error) {
      OHIF.log.warn('Viewport destroyed before loaded image could be displayed');
      return;
    } // Caches element's jQuery object


    var $element = $(element); // Update the enabled element with the image and viewport data
    // This is not usually necessary, but we need them stored in case
    // a sopClassUid-specific viewport setting is present.

    enabledElement.image = image;
    enabledElement.viewport = cornerstone.getDefaultViewport(enabledElement.canvas, image);

    if (isUpdateMetadataDefined) {
      // Update the metaData for missing fields
      metadataProvider.updateMetadata(image);
    } // Check if there are default viewport settings for this sopClassUid


    if (!displaySet.images || !displaySet.images.length) {
      return;
    }

    var instance = displaySet.images[0];
    var instanceClassViewport = getInstanceClassDefaultViewport(instance, enabledElement, image.imageId); // If there are sopClassUid-specific viewport settings, apply them

    if (instanceClassViewport) {
      cornerstone.displayImage(element, image, instanceClassViewport); // Mark that this element should not be fit to the window in the resize listeners
      // TODO: Find another way to do this?

      enabledElement.fitToWindow = false; // Resize the canvas to fit the current viewport element size.

      cornerstone.resize(element, false);
    } else if (data.viewport) {
      // If there is a saved object containing Cornerstone viewport data
      // (e.g. scale, invert, window settings) in the input data, apply it now.
      cornerstone.displayImage(element, image, data.viewport); // Resize the canvas to fit the current viewport element size. Fit the displayed
      // image to the canvas dimensions.

      cornerstone.resize(element, true);
    } else {
      // If no saved viewport settings or modality-specific settings exists,
      // display the loaded image in the viewport element with no loaded viewport
      // settings.
      cornerstone.displayImage(element, image); // Resize the canvas to fit the current viewport element size. Fit the displayed
      // image to the canvas dimensions.

      cornerstone.resize(element, true);
    } // Remove the data for this viewport from the ViewportLoading object
    // This will stop the loading percentage complete from being displayed.


    delete window.ViewportLoading[viewportIndex]; // Call the handler function that represents the end of the image loading phase
    // (e.g. hide the progress text box)

    endLoadingHandler(element, image); // Remove the 'empty' class from the viewport to hide any instruction text

    element.classList.remove('empty'); // Hide the viewport instructions (i.e. 'Drag a stack here') and show
    // the viewport overlay data.

    $element.siblings('.viewportInstructions').hide();
    $element.siblings('.imageViewerViewportOverlay').show(); // Add stack state managers for the stack tool, CINE tool, and reference lines

    cornerstoneTools.addStackStateManager(element, ['stack', 'playClip', 'referenceLines']); // Enable orientation markers, if applicable

    updateOrientationMarkers(element); // Clear any old stack data

    cornerstoneTools.clearToolState(element, 'stack');
    cornerstoneTools.addToolState(element, 'stack', stack); // Set the default CINE settings

    var multiframeMetadata = instance.getDataProperty('multiframeMetadata');
    var fps;

    if (multiframeMetadata && multiframeMetadata.averageFrameRate > 0) {
      fps = multiframeMetadata.averageFrameRate;
    } else {
      fps = OHIF.viewer.cine.framesPerSecond;
    }

    var cineToolData = {
      loop: OHIF.viewer.cine.loop,
      framesPerSecond: fps
    };
    cornerstoneTools.addToolState(element, 'playClip', cineToolData); // Autoplay datasets that have framerates set

    if (multiframeMetadata && multiframeMetadata.isMultiframeImage && multiframeMetadata.averageFrameRate > 0) {
      cornerstoneTools.playClip(element);
    } // Enable mouse, mouseWheel, touch, and keyboard input on the element


    cornerstoneTools.mouseInput.enable(element);
    cornerstoneTools.touchInput.enable(element);
    cornerstoneTools.mouseWheelInput.enable(element);
    cornerstoneTools.keyboardInput.enable(element); // Use the tool manager to enable the currently active tool for this
    // newly rendered element

    var activeTool = toolManager.getActiveTool();
    toolManager.setActiveTool(activeTool, [element]); // Define a function to run whenever the Cornerstone viewport is rendered
    // (e.g. following a change of window or zoom)

    var onImageRendered = function (event) {
      var eventData = event.detail; // Attention: Adding OHIF.log.info in this function may decrease the performance
      // since this callback function is called multiple times (eg: when a tool is
      // enabled/disabled -> cornerstone[toolName].tool.enable)

      if (!layoutManager.viewportData[viewportIndex]) {
        OHIF.log.warn("onImageRendered: LayoutManager has no viewport data for this viewport index?: " + viewportIndex);
      } // Use Session to trigger reactive updates in the viewportOverlay helper functions
      // This lets the viewport overlay always display correct window / zoom values


      Session.set('CornerstoneImageRendered' + viewportIndex, Math.random()); // Save the current viewport into the OHIF.viewer.data global variable

      var viewport = cornerstone.getViewport(element);
      layoutManager.viewportData[viewportIndex].viewport = viewport;
      OHIF.viewer.data.loadedSeriesData[viewportIndex].viewport = viewport; // Check if it has onImageRendered loadAndCacheImage callback

      if (typeof callbacks.onImageRendered === 'function') {
        callbacks.onImageRendered(event, eventData, viewportIndex, templateData);
      }
    }; // Attach the onImageRendered callback to the CornerstoneImageRendered event


    element.removeEventListener('cornerstoneimagerendered', onImageRendered);
    element.addEventListener('cornerstoneimagerendered', onImageRendered); // Set a random value for the Session variable in order to trigger an overlay update

    Session.set('CornerstoneImageRendered' + viewportIndex, Math.random()); // Define a function to run whenever the Cornerstone viewport changes images
    // (e.g. during scrolling)

    var onNewImage = function (event) {
      var eventData = event.detail; // Attention: Adding OHIF.log.info in this function may decrease the performance
      // since this callback function is called multiple times (eg: when a tool is
      // enabled/disabled -> cornerstone[toolName].tool.enable)

      if (isUpdateMetadataDefined) {
        // Update the metaData for missing fields
        metadataProvider.updateMetadata(eventData.enabledElement.image);
      } // Update the templateData with the new imageId
      // This allows the template helpers to update reactively


      templateData.imageId = eventData.enabledElement.image.imageId;
      Session.set('CornerstoneNewImage' + viewportIndex, Math.random());
      layoutManager.viewportData[viewportIndex].imageId = eventData.enabledElement.image.imageId; // Get the element and stack data

      var element = event.target;
      var toolData = cornerstoneTools.getToolState(element, 'stack');

      if (!toolData || !toolData.data || !toolData.data.length) {
        return;
      } // Update orientation markers in case new slices don't have the same orientation
      // as the first slice


      updateOrientationMarkers(element); // If this viewport is displaying a stack of images, save the current image
      // index in the stack to the global OHIF.viewer.data object.

      var stack = cornerstoneTools.getToolState(element, 'stack');

      if (stack && stack.data.length && stack.data[0].imageIds.length > 1) {
        var imageIdIndex = stack.data[0].imageIds.indexOf(templateData.imageId);
        layoutManager.viewportData[viewportIndex].currentImageIdIndex = imageIdIndex;
        OHIF.viewer.data.loadedSeriesData[viewportIndex].currentImageIdIndex = imageIdIndex;
      } // Check if it has onNewImage loadAndCacheImage callback


      if (typeof callbacks.onNewImage === 'function') {
        callbacks.onNewImage(event, eventData, viewportIndex, templateData);
      }
    }; // Attach the onNewImage callback to the CornerstoneNewImage event


    element.removeEventListener('cornerstonenewimage', onNewImage);
    element.addEventListener('cornerstonenewimage', onNewImage); // Set a random value for the Session variable in order to trigger an overlay update

    Session.set('CornerstoneNewImage' + viewportIndex, Math.random());

    var onStackScroll = function () {
      // Attention: Adding OHIF.log.info in this function may decrease the performance
      // since this callback function is called multiple times (eg: when a tool is
      // enabled/disabled -> cornerstone[toolName].tool.enable)
      // Update the imageSlider value
      Session.set('CornerstoneNewImage' + viewportIndex, Math.random());
    };

    element.removeEventListener('cornerstonestackscroll', onStackScroll);

    if (stack.imageIds.length > 1) {
      element.addEventListener('cornerstonestackscroll', onStackScroll);
    } // Define a function to trigger an event whenever a new viewport is being used
    // This is used to update the value of the "active viewport", when the user interacts
    // with a new viewport element


    var sendActivationTrigger = function (event) {
      var eventData = event && event.detail; // Attention: Adding OHIF.log.info in this function decrease the performance
      // since this callback function is called multiple times (eg: when a tool is
      // enabled/disabled -> cornerstone[toolName].tool.enable)
      // Reset the focus, even if we don't need to re-enable reference lines or prefetching

      var element = eventData && eventData.element || event && event.currentTarget;
      if (!element) return;
      var $element = $(element);
      $element.focus(); // Stop here if we don't have eventData set

      if (!eventData) return; // Check if the current active viewport in the Meteor Session
      // Is the same as the viewport in which the activation event was fired.
      // If it was, no changes are necessary, so stop here.

      var activeViewportIndex = Session.get('activeViewport');
      if (viewportIndex === activeViewportIndex) return;
      OHIF.log.info('imageViewerViewport sendActivationTrigger'); // Otherwise, trigger an 'OHIFActivateViewport' event to be handled by the Template event
      // handler

      eventData.viewportIndex = viewportIndex;
      var customEvent = $.Event('OHIFActivateViewport', eventData); // Need to overwrite the type set in the original event

      customEvent.type = 'OHIFActivateViewport';
      $element.trigger(customEvent, eventData);
    }; // Handle mouseenter event to send viewport activation trigger only if there is no focused dropdown


    var onMouseEnter = function () {
      if ($(':focus').closest('.dropdown').length) return;
      sendActivationTrigger();
    }; // Attach the sendActivationTrigger function to all of the Cornerstone interaction events


    allCornerstoneEvents.forEach(function (eventType) {
      element.removeEventListener(eventType, sendActivationTrigger);
      element.addEventListener(eventType, sendActivationTrigger);
    });
    $element.off('mouseenter', onMouseEnter);
    $element.on('mouseenter', onMouseEnter);
    OHIF.viewer.data.loadedSeriesData = layoutManager.viewportData; // Check if image plane (orientation / location) data is present for the current image

    var imagePlane = cornerstone.metaData.get('imagePlane', image.imageId);

    if (imagePlane && imagePlane.frameOfReferenceUID) {
      // If it is, add this element to the global synchronizer...
      OHIF.viewer.updateImageSynchronizer.add(element);

      if (OHIF.viewer.refLinesEnabled) {
        // ... and if reference lines are globally enabled, let cornerstoneTools know.
        cornerstoneTools.referenceLines.tool.enable(element, OHIF.viewer.updateImageSynchronizer);
      } // If the crosshairs tool is active, update the synchronizer
      // that is used for its synchronized viewport updating.
      // This is necessary if this new image shares a frame of reference
      // with currently displayed images


      if (activeTool === 'crosshairs') {
        updateCrosshairsSynchronizer(imagePlane.frameOfReferenceUID);
      }
    } // Set the active viewport based on the Session variable
    // This is done to ensure that the active element has the current
    // focus, so that keyboard events are triggered.


    if (viewportIndex === Session.get('activeViewport')) {
      setActiveViewport(element);
    } // Run any renderedCallback that exists in the data context


    if (data.renderedCallback && typeof data.renderedCallback === 'function') {
      data.renderedCallback(element);
    } // Update the LayoutManagerUpdated session key


    layoutManager.updateSession(); // Check if it has after loadAndCacheImage callback

    if (typeof callbacks.after === 'function') {
      OHIF.log.info('imageViewerViewport after callback');
      callbacks.after(image, templateData, element);
    }
  }, function (error) {
    // If something goes wrong while loading the image, fire the error handler.
    errorLoadingHandler(element, imageId, error);
  });
};
/**
 * This function sets the display set for the study and calls LoadDisplaySetIntoViewport function
 *
 * @param data includes study data
 * @param displaySetInstanceUid Display set information which is loaded in Template
 * @param templateData currentData of Template
 *
 */


var setDisplaySet = function (data, displaySetInstanceUid, templateData) {
  var study = data.study;

  if (!study) {
    throw new OHIFError('Study does not exist');
  }

  var displaySets = study.displaySets;

  if (!displaySets.length) {
    displaySets = OHIF.viewerbase.sortingManager.getDisplaySets(study);
    study.displaySets = displaySets;
    study.setDisplaySets(displaySets);
    study.forEachDisplaySet(function (displaySet) {
      OHIF.viewerbase.stackManager.makeAndAddStack(study, displaySet);
    });
  }

  if (!displaySets) {
    throw new OHIFError('Study has no display sets');
  }

  displaySets.every(function (displaySet) {
    if (displaySet.displaySetInstanceUid === displaySetInstanceUid) {
      data.displaySet = displaySet;
      return false;
    }

    return true;
  }); // If we didn't find anything, stop here

  if (!data.displaySet) {
    data.displaySet = displaySets[0]; // throw new OHIFError('Display set not found in specified study!');
  } // Otherwise, load pass the data object into loadSeriesIntoViewport


  loadDisplaySetIntoViewport(data, templateData);
};

Meteor.startup(function () {
  window.ViewportLoading = window.ViewportLoading || {};
  toolManager.configureLoadProcess();
});
Template.imageViewerViewport.onRendered(function () {
  var templateData = Template.currentData();
  OHIF.log.info('imageViewerViewport onRendered'); // When the imageViewerViewport template is rendered

  var element = this.find('.imageViewerViewport');
  this.element = element;
  this.$element = $(element); // Display the loading indicator for this element

  this.$element.siblings('.imageViewerLoadingIndicator').css('display', 'block'); // Get the current active viewport index, if this viewport has the same index,
  // add the CSS 'active' class to highlight this viewport.

  var activeViewport = Session.get('activeViewport'); // Focus the viewport if it's the active one

  if (templateData.viewportIndex === activeViewport) {
    this.$element.focus();
  }

  var currentImageIdIndex = templateData.currentImageIdIndex;
  var viewport = templateData.viewport,
      studyInstanceUid = templateData.studyInstanceUid,
      seriesInstanceUid = templateData.seriesInstanceUid,
      renderedCallback = templateData.renderedCallback,
      displaySetInstanceUid = templateData.displaySetInstanceUid;

  if (!currentImageIdIndex) {
    currentImageIdIndex = 0;
  } // Calls extendData function to provide flexibility between systems


  imageViewerViewportData.extendData(templateData); // Create a data object to pass to the series loading function (loadSeriesIntoViewport)

  var data = {
    element: element,
    viewport: viewport,
    currentImageIdIndex: currentImageIdIndex,
    displaySetInstanceUid: displaySetInstanceUid,
    studyInstanceUid: studyInstanceUid,
    seriesInstanceUid: seriesInstanceUid,
    renderedCallback: renderedCallback,
    activeViewport: activeViewport
  }; // If no displaySetInstanceUid was supplied, display the drag/drop
  // instructions and then stop here since we don't know what to display in the viewport.

  if (!displaySetInstanceUid) {
    element.classList.add('empty');
    this.$element.siblings('.imageViewerLoadingIndicator').css('display', 'none');
    this.$element.siblings('.viewportInstructions').show();
    return;
  } // @TypeSafeStudies


  var study = OHIF.viewer.Studies.findBy({
    studyInstanceUid: studyInstanceUid
  });
  data.study = study;
  setDisplaySet(data, displaySetInstanceUid, templateData); // Double click event handlers to handle viewport enlargement

  function doubleClickHandler(event) {
    var $element = $(this);
    var layoutManager = OHIF.viewerbase.layoutManager;
    var $viewports = $('.imageViewerViewport');
    $element.trigger('ohif.viewer.viewport.toggleEnlargement'); // Get the double clicked viewport index

    var viewportIndex = $viewports.index(event.currentTarget); // Stop here if there's only one viewport

    if (!layoutManager.isZoomed && $viewports.length <= 1) return; // Enlarge the double clicked viewport

    layoutManager.toggleEnlargement(viewportIndex); // Wait for DOM re-rendering and update the active viewport

    Tracker.afterFlush(function () {
      var viewportIndexToZoom; // Check if the viewer is zoomed

      if (layoutManager.isZoomed) {
        // Set the active viewport as the only one visible
        viewportIndexToZoom = 0;
      } else {
        // Set the active viewport as the previous zoomed viewport
        viewportIndexToZoom = layoutManager.zoomedViewportIndex || 0;
      } // Set zoomed viewport as active...


      var element = $('.imageViewerViewport').get(viewportIndexToZoom);
      setActiveViewport(element);
    });
  }

  var doubleClickEvents = ['cornerstonetoolsmousedoubleclick', 'cornerstonetoolsdoubletap'];
  doubleClickEvents.forEach(function (eventType) {
    element.removeEventListener(eventType, doubleClickHandler);
    element.addEventListener(eventType, doubleClickHandler);
  });
});
Template.imageViewerViewport.onDestroyed(function () {
  OHIF.log.info('imageViewerViewport onDestroyed'); // When a viewport element is being destroyed

  var element = this.find('.imageViewerViewport');
  var $element = $(element);

  if (!element || $element.hasClass('empty') || !$element.find('canvas').length) {
    return;
  } // Disable mouse functions


  cornerstoneTools.mouseInput.disable(element);
  cornerstoneTools.touchInput.disable(element);
  cornerstoneTools.mouseWheelInput.disable(element);
  OHIF.viewer.updateImageSynchronizer.remove(element); // Clear the stack prefetch data

  var stackPrefetchData = cornerstoneTools.getToolState(element, 'stackPrefetch');
  stackPrefetchData = [];
  cornerstoneTools.stackPrefetch.disable(element); // Try to stop any currently playing clips
  // Otherwise the interval will continuously throw errors

  try {
    var enabledElement = cornerstone.getEnabledElement(element);

    if (enabledElement) {
      cornerstoneTools.stopClip(element);
    }
  } catch (error) {
    OHIF.log.warn(error);
  } // Trigger custom Destroy Viewport event
  // for compatibility with other systems


  $element.trigger('OHIFDestroyedViewport'); // Disable the viewport element with Cornerstone
  // This also triggers the removal of the element from all available
  // synchronizers, such as the one used for reference lines.

  cornerstone.disable(element);
});
Template.imageViewerViewport.events({
  'OHIFActivateViewport .imageViewerViewport': function (event) {
    OHIF.log.info('imageViewerViewport OHIFActivateViewport');
    setActiveViewport(event.currentTarget);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"gridLayout":{"template.gridLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/gridLayout/template.gridLayout.js                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("gridLayout");
Template["gridLayout"] = new Template("Template.gridLayout", (function() {
  var view = this;
  return HTML.DIV({
    id: "imageViewerViewports"
  }, "\n        ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("viewports")),
      _variable: "viewport"
    };
  }, function() {
    return [ "\n            ", HTML.DIV({
      class: function() {
        return [ "viewportContainer ", Spacebars.mustache(view.lookup("getClass"), view.lookup("@index")) ];
      },
      style: function() {
        return [ "height:", Spacebars.mustache(view.lookup("height")), "%;width:", Spacebars.mustache(view.lookup("width")), "%;" ];
      }
    }, "\n                ", HTML.DIV({
      class: "removable"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("clone"), view.lookup("viewport"));
    }, function() {
      return Spacebars.include(view.lookupTemplate("imageViewerViewport"));
    }), "\n                "), "\n                ", Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."), Spacebars.kw({
        viewport: view.lookup("viewport"),
        viewportIndex: view.lookup("@index")
      }));
    }, function() {
      return Spacebars.include(view.lookupTemplate("seriesQuickSwitch"));
    }), "\n            "), "\n        " ];
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"gridLayout.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/gridLayout/gridLayout.js                                          //
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
var TOP_CLASS = 'top';
var BOTTOM_CLASS = 'bottom';
var MIDDLE_CLASS = 'middle';
Template.gridLayout.helpers({
  // Get the height percentage for each viewport
  height: function () {
    var instance = Template.instance();
    var rows = instance.data.rows || 1;
    return 100 / rows;
  },
  // Get the width percentage for each viewport
  width: function () {
    var instance = Template.instance();
    var columns = instance.data.columns || 1;
    return 100 / columns;
  },
  // Get class for each viewport, so each app
  // using ohif-viewerbase can style on their own
  getClass: function (index) {
    var rows = this.rows,
        columns = this.columns;

    if (rows === 1) {
      return TOP_CLASS + " " + BOTTOM_CLASS;
    }

    var actualRow = Math.floor(index / columns);

    if (actualRow === 0) {
      return TOP_CLASS;
    }

    if (actualRow + 1 === rows) {
      return BOTTOM_CLASS;
    }

    return MIDDLE_CLASS;
  },
  // Return the viewports list
  viewports: function () {
    var instance = Template.instance();
    var rows = instance.data.rows;
    var columns = instance.data.columns;
    var numViewports = rows * columns;
    var viewportData = instance.data.viewportData;
    var numViewportsWithData = viewportData.length; // Check if the viewportData length is different from the given

    if (numViewportsWithData < numViewports) {
      // Add the missing viewports
      var difference = numViewports - numViewportsWithData;

      for (var i = 0; i < difference; i++) {
        viewportData.push({
          viewportIndex: numViewportsWithData + i + 1,
          rows: rows,
          columns: columns
        });
      }
    } else if (numViewportsWithData > numViewports) {
      // Remove the additional viewports
      return viewportData.slice(0, numViewports);
    } // Return the viewports


    return viewportData;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"loadingIndicator":{"template.loadingIndicator.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/loadingIndicator/template.loadingIndicator.js                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("loadingIndicator");
Template["loadingIndicator"] = new Template("Template.loadingIndicator", (function() {
  var view = this;
  return [ HTML.DIV({
    class: "imageViewerLoadingIndicator loadingIndicator"
  }, "\n        ", HTML.DIV({
    class: "indicatorContents"
  }, "\n            ", HTML.P("Loading... ", HTML.Raw('<i class="fa fa-spin fa-circle-o-notch fa-fw"></i>'), " ", Blaze.View("lookup:percentComplete", function() {
    return Spacebars.mustache(view.lookup("percentComplete"));
  })), "\n        "), "\n    "), HTML.Raw('\n    <div class="imageViewerErrorLoadingIndicator loadingIndicator">\n        <div class="indicatorContents">\n            <h4>Error Loading Image</h4>\n            <p class="description">An error has occurred.</p>\n            <p class="details"></p>\n        </div>\n    </div>') ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"loadingIndicator.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/loadingIndicator/loadingIndicator.js                              //
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
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 2);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 3);
Meteor.startup(function () {
  // This checking is necessary because cornerstoneTools may not have some tools available.
  // Example: when an app defines its own cornerstone's lib versions, so it 
  // uses only ohif-viewerbase and not ohif-cornerstone and those libs are added later.
  if (cornerstoneTools.loadHandlerManager) {
    cornerstoneTools.loadHandlerManager.setStartLoadHandler(startLoadingHandler);
    cornerstoneTools.loadHandlerManager.setEndLoadHandler(doneLoadingHandler);
    cornerstoneTools.loadHandlerManager.setErrorLoadingHandler(errorLoadingHandler);
  }
});
var loadHandlerTimeout;

var startLoadingHandler = function (element) {
  clearTimeout(loadHandlerTimeout);
  loadHandlerTimeout = setTimeout(function () {
    console.log('startLoading');
    var elem = $(element);
    elem.siblings('.imageViewerErrorLoadingIndicator').css('display', 'none');
    elem.find('canvas').not('.magnifyTool').addClass('faded');
    elem.siblings('.imageViewerLoadingIndicator').css('display', 'block');
  }, OHIF.viewer.loadIndicatorDelay);
};

var doneLoadingHandler = function (element) {
  clearTimeout(loadHandlerTimeout);
  var elem = $(element);
  elem.siblings('.imageViewerErrorLoadingIndicator').css('display', 'none');
  elem.find('canvas').not('.magnifyTool').removeClass('faded');
  elem.siblings('.imageViewerLoadingIndicator').css('display', 'none');
};

var errorLoadingHandler = function (element, imageId, error, source) {
  clearTimeout(loadHandlerTimeout);
  var elem = $(element); // Could probably chain all of these, but this is more readable

  elem.find('canvas').not('.magnifyTool').removeClass('faded');
  elem.siblings('.imageViewerLoadingIndicator').css('display', 'none'); // Don't display errors from the stackPrefetch tool

  if (source === 'stackPrefetch') {
    return;
  }

  var errorLoadingIndicator = elem.siblings('.imageViewerErrorLoadingIndicator');
  errorLoadingIndicator.css('display', 'block'); // This is just used to expand upon some error messages that are sent
  // when things fail. An example is a network error throwing the error
  // which is only described as "network".

  var errorDetails = {
    network: 'A network error has occurred' // We need to expand this further when we see more obscure error messages

  };

  if (errorDetails.hasOwnProperty(error)) {
    error = errorDetails[error];
  }

  errorLoadingIndicator.find('.description').text("An error has occurred while loading image: " + imageId);

  if (error) {
    errorLoadingIndicator.find('.details').text("Details: " + error);
  }
};

Template.loadingIndicator.helpers({
  'percentComplete': function () {
    var percentComplete = Session.get('CornerstoneLoadProgress' + this.viewportIndex);

    if (percentComplete && percentComplete !== 100) {
      return percentComplete + "%";
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"annotationDialogs":{"template.annotationDialogs.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/annotationDialogs/template.annotationDialogs.js                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("annotationDialogs");
Template["annotationDialogs"] = new Template("Template.annotationDialogs", (function() {
  var view = this;
  return [ HTML.getTag("dialog")({
    id: "annotationDialog",
    class: "annotationDialog noselect"
  }, "\n        ", HTML.H5("Enter your annotation"), "\n        ", HTML.DIV({
    class: "annotationTextInputOptions"
  }, "\n            ", HTML.LABEL({
    for: "annotationTextInput"
  }, "New label"), "\n            ", HTML.INPUT({
    name: "annotationTextInput",
    class: "annotationTextInput",
    type: "text",
    tabindex: "-1",
    autocomplete: "off"
  }), "\n        "), "\n        ", HTML.A({
    class: "annotationDialogConfirm btn btn-sm btn-primary"
  }, "OK"), "\n    "), "\n\n    ", HTML.getTag("dialog")({
    id: "relabelAnnotationDialog",
    class: "annotationDialog noselect",
    oncontextmenu: "return false"
  }, "\n        ", HTML.H5("Edit your annotation"), "\n        ", HTML.DIV({
    class: "annotationTextInputOptions"
  }, "\n            ", HTML.LABEL({
    for: "annotationTextInput"
  }, "New label"), "\n            ", HTML.INPUT({
    name: "annotationTextInput",
    class: "annotationTextInput",
    type: "text",
    tabindex: "-1",
    autocomplete: "off"
  }), "\n        "), "\n        ", HTML.DIV("\n            ", HTML.A({
    class: "relabelRemove btn btn-sm btn-secondary"
  }, "Remove marker"), "\n            ", HTML.A({
    class: "relabelConfirm btn btn-sm btn-primary"
  }, "OK"), "\n        "), "\n    ") ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"annotationDialogs.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/annotationDialogs/annotationDialogs.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.annotationDialogs.onRendered(function () {
  var instance = Template.instance();
  var dialogIds = ['annotationDialog', 'relabelAnnotationDialog'];
  dialogIds.forEach(function (id) {
    var dialog = instance.$('#' + id);
    dialog.draggable();
    dialogPolyfill.registerDialog(dialog.get(0));
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"viewportOrientationMarkers":{"template.viewportOrientationMarkers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/viewportOrientationMarkers/template.viewportOrientationMarkers.js //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("viewportOrientationMarkers");
Template["viewportOrientationMarkers"] = new Template("Template.viewportOrientationMarkers", (function() {
  var view = this;
  return HTML.Raw('<div class="viewportOrientationMarkers noselect">\n        <div class="topMid orientationMarker">\n        </div>\n        <div class="leftMid orientationMarker">\n        </div>\n    </div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"viewportOverlay":{"template.viewportOverlay.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/viewportOverlay/template.viewportOverlay.js                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("viewportOverlay");
Template["viewportOverlay"] = new Template("Template.viewportOverlay", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "imageViewerViewportOverlay noselect ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("gt"), view.lookup("numImages"), 1);
      }, function() {
        return "controlsVisible";
      }) ];
    }
  }, "\n        ", Blaze.Unless(function() {
    return Spacebars.call(view.lookup("tagDisplaySpecified"));
  }, function() {
    return [ "\n            ", HTML.DIV({
      class: "topleft dicomTag"
    }, "\n                ", HTML.DIV(Blaze.View("lookup:formatPN", function() {
      return Spacebars.mustache(view.lookup("formatPN"), view.lookup("patientName"));
    })), "\n                ", HTML.DIV(Blaze.View("lookup:patientId", function() {
      return Spacebars.mustache(view.lookup("patientId"));
    })), "\n                ", HTML.DIV({
      class: "priorIndicator"
    }, Blaze.View("lookup:prior", function() {
      return Spacebars.mustache(view.lookup("prior"));
    })), "\n            "), "\n            ", HTML.DIV({
      class: "topright dicomTag"
    }, "\n                ", HTML.DIV(Blaze.View("lookup:studyDescription", function() {
      return Spacebars.mustache(view.lookup("studyDescription"));
    })), "\n                ", HTML.DIV(Blaze.View("lookup:formatDA", function() {
      return Spacebars.mustache(view.lookup("formatDA"), view.lookup("studyDate"));
    }), " ", Blaze.View("lookup:formatTM", function() {
      return Spacebars.mustache(view.lookup("formatTM"), view.lookup("studyTime"));
    })), "\n            "), "\n            ", HTML.DIV({
      class: "bottomright dicomTag"
    }, "\n                ", HTML.DIV(Blaze.If(function() {
      return Spacebars.call(view.lookup("zoom"));
    }, function() {
      return [ "Zoom: ", Blaze.View("lookup:formatNumberPrecision", function() {
        return Spacebars.mustache(view.lookup("formatNumberPrecision"), view.lookup("zoom"), 0);
      }), "%" ];
    })), "\n                ", HTML.DIV({
      class: "compressionIndicator"
    }, Blaze.View("lookup:compression", function() {
      return Spacebars.mustache(view.lookup("compression"));
    })), "\n                ", HTML.DIV(Blaze.View("lookup:wwwc", function() {
      return Spacebars.mustache(view.lookup("wwwc"));
    })), "\n            "), "\n            ", HTML.DIV({
      class: "bottomleft dicomTag"
    }, "\n                ", HTML.DIV(Blaze.If(function() {
      return Spacebars.call(view.lookup("seriesNumber"));
    }, function() {
      return [ "Ser: ", Blaze.View("lookup:seriesNumber", function() {
        return Spacebars.mustache(view.lookup("seriesNumber"));
      }) ];
    })), "\n                ", HTML.DIV(Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("gt"), view.lookup("numImages"), 1);
    }, function() {
      return [ "Img: ", Blaze.View("lookup:instanceNumber", function() {
        return Spacebars.mustache(view.lookup("instanceNumber"));
      }), " (", Blaze.View("lookup:imageIndex", function() {
        return Spacebars.mustache(view.lookup("imageIndex"));
      }), "/", Blaze.View("lookup:numImages", function() {
        return Spacebars.mustache(view.lookup("numImages"));
      }), ")" ];
    })), "\n                ", HTML.DIV(Blaze.If(function() {
      return Spacebars.call(view.lookup("frameRate"));
    }, function() {
      return [ Blaze.View("lookup:formatNumberPrecision", function() {
        return Spacebars.mustache(view.lookup("formatNumberPrecision"), view.lookup("frameRate"), 2);
      }), " FPS" ];
    })), "\n                ", HTML.DIV(Blaze.View("lookup:imageDimensions", function() {
      return Spacebars.mustache(view.lookup("imageDimensions"));
    })), "\n                ", HTML.DIV("\n                    ", HTML.SPAN(Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("isValidNumber"), view.lookup("location"));
    }, function() {
      return [ "Loc: ", Blaze.View("lookup:formatNumberPrecision", function() {
        return Spacebars.mustache(view.lookup("formatNumberPrecision"), view.lookup("location"), 2);
      }), " mm" ];
    })), "\n                    ", HTML.SPAN(Blaze.If(function() {
      return Spacebars.call(view.lookup("thickness"));
    }, function() {
      return [ "Thick: ", Blaze.View("lookup:formatNumberPrecision", function() {
        return Spacebars.mustache(view.lookup("formatNumberPrecision"), view.lookup("thickness"), 2);
      }), " mm" ];
    })), "\n                    ", HTML.SPAN(Blaze.If(function() {
      return Spacebars.call(view.lookup("spacingBetweenSlices"));
    }, function() {
      return [ "Spacing: ", Blaze.View("lookup:formatNumberPrecision", function() {
        return Spacebars.mustache(view.lookup("formatNumberPrecision"), view.lookup("spacingBetweenSlices"), 2);
      }), " mm" ];
    })), "\n                "), "\n                ", HTML.DIV(Blaze.View("lookup:seriesDescription", function() {
      return Spacebars.mustache(view.lookup("seriesDescription"));
    })), "\n            "), "\n        " ];
  }), "\n\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("tagDisplayRightOnly"));
  }, function() {
    return [ "\n            ", HTML.DIV({
      class: "topright dicomTag"
    }, "\n                ", HTML.DIV(Blaze.View("lookup:formatPN", function() {
      return Spacebars.mustache(view.lookup("formatPN"), view.lookup("patientName"));
    })), "\n                ", HTML.DIV(Blaze.View("lookup:patientId", function() {
      return Spacebars.mustache(view.lookup("patientId"));
    })), "\n                ", HTML.DIV({
      class: "priorIndicator"
    }, Blaze.View("lookup:prior", function() {
      return Spacebars.mustache(view.lookup("prior"));
    })), "\n                ", HTML.DIV(Blaze.View("lookup:studyDescription", function() {
      return Spacebars.mustache(view.lookup("studyDescription"));
    })), "\n                ", HTML.DIV(Blaze.View("lookup:formatDA", function() {
      return Spacebars.mustache(view.lookup("formatDA"), view.lookup("studyDate"));
    }), " ", Blaze.View("lookup:formatTM", function() {
      return Spacebars.mustache(view.lookup("formatTM"), view.lookup("studyTime"));
    })), "\n            "), "\n            ", HTML.DIV({
      class: "bottomright dicomTag"
    }, "\n                ", HTML.DIV(Blaze.If(function() {
      return Spacebars.call(view.lookup("seriesNumber"));
    }, function() {
      return [ "Ser: ", Blaze.View("lookup:seriesNumber", function() {
        return Spacebars.mustache(view.lookup("seriesNumber"));
      }) ];
    })), "\n                ", HTML.DIV(Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("gt"), view.lookup("numImages"), 1);
    }, function() {
      return [ "Img: ", Blaze.View("lookup:instanceNumber", function() {
        return Spacebars.mustache(view.lookup("instanceNumber"));
      }), " (", Blaze.View("lookup:imageIndex", function() {
        return Spacebars.mustache(view.lookup("imageIndex"));
      }), "/", Blaze.View("lookup:numImages", function() {
        return Spacebars.mustache(view.lookup("numImages"));
      }), ")" ];
    })), "\n                ", HTML.DIV(Blaze.If(function() {
      return Spacebars.call(view.lookup("frameRate"));
    }, function() {
      return [ Blaze.View("lookup:formatNumberPrecision", function() {
        return Spacebars.mustache(view.lookup("formatNumberPrecision"), view.lookup("frameRate"), 2);
      }), " FPS" ];
    })), "\n                ", HTML.DIV(Blaze.View("lookup:imageDimensions", function() {
      return Spacebars.mustache(view.lookup("imageDimensions"));
    })), "\n                ", HTML.DIV(Blaze.View("lookup:seriesDescription", function() {
      return Spacebars.mustache(view.lookup("seriesDescription"));
    })), "\n                ", HTML.DIV(Blaze.If(function() {
      return Spacebars.call(view.lookup("zoom"));
    }, function() {
      return [ "Zoom: ", Blaze.View("lookup:formatNumberPrecision", function() {
        return Spacebars.mustache(view.lookup("formatNumberPrecision"), view.lookup("zoom"), 0);
      }), "%" ];
    })), "\n                ", HTML.DIV({
      class: "compressionIndicator"
    }, Blaze.View("lookup:compression", function() {
      return Spacebars.mustache(view.lookup("compression"));
    })), "\n                ", HTML.DIV(Blaze.View("lookup:wwwc", function() {
      return Spacebars.mustache(view.lookup("wwwc"));
    })), "\n            "), "\n        " ];
  }), "\n\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("tagDisplayLeftOnly"));
  }, function() {
    return [ "\n            ", HTML.DIV({
      class: "topleft dicomTag"
    }, "\n                ", HTML.DIV(Blaze.View("lookup:formatPN", function() {
      return Spacebars.mustache(view.lookup("formatPN"), view.lookup("patientName"));
    })), "\n                ", HTML.DIV(Blaze.View("lookup:patientId", function() {
      return Spacebars.mustache(view.lookup("patientId"));
    })), "\n                ", HTML.DIV({
      class: "priorIndicator"
    }, Blaze.View("lookup:prior", function() {
      return Spacebars.mustache(view.lookup("prior"));
    })), "\n                ", HTML.DIV(Blaze.View("lookup:studyDescription", function() {
      return Spacebars.mustache(view.lookup("studyDescription"));
    })), "\n                ", HTML.DIV(Blaze.View("lookup:formatDA", function() {
      return Spacebars.mustache(view.lookup("formatDA"), view.lookup("studyDate"));
    }), " ", Blaze.View("lookup:formatTM", function() {
      return Spacebars.mustache(view.lookup("formatTM"), view.lookup("studyTime"));
    })), "\n            "), "\n            ", HTML.DIV({
      class: "bottomleft dicomTag"
    }, "\n                ", HTML.DIV(Blaze.If(function() {
      return Spacebars.call(view.lookup("seriesNumber"));
    }, function() {
      return [ "Ser: ", Blaze.View("lookup:seriesNumber", function() {
        return Spacebars.mustache(view.lookup("seriesNumber"));
      }) ];
    })), "\n                ", HTML.DIV(Blaze.If(function() {
      return Spacebars.dataMustache(view.lookup("gt"), view.lookup("numImages"), 1);
    }, function() {
      return [ "Img: ", Blaze.View("lookup:instanceNumber", function() {
        return Spacebars.mustache(view.lookup("instanceNumber"));
      }), " (", Blaze.View("lookup:imageIndex", function() {
        return Spacebars.mustache(view.lookup("imageIndex"));
      }), "/", Blaze.View("lookup:numImages", function() {
        return Spacebars.mustache(view.lookup("numImages"));
      }), ")" ];
    })), "\n                ", HTML.DIV(Blaze.If(function() {
      return Spacebars.call(view.lookup("frameRate"));
    }, function() {
      return [ Blaze.View("lookup:formatNumberPrecision", function() {
        return Spacebars.mustache(view.lookup("formatNumberPrecision"), view.lookup("frameRate"), 2);
      }), " FPS" ];
    })), "\n                ", HTML.DIV(Blaze.View("lookup:imageDimensions", function() {
      return Spacebars.mustache(view.lookup("imageDimensions"));
    })), "\n                ", HTML.DIV(Blaze.View("lookup:seriesDescription", function() {
      return Spacebars.mustache(view.lookup("seriesDescription"));
    })), "\n                ", HTML.DIV(Blaze.If(function() {
      return Spacebars.call(view.lookup("zoom"));
    }, function() {
      return [ "Zoom: ", Blaze.View("lookup:formatNumberPrecision", function() {
        return Spacebars.mustache(view.lookup("formatNumberPrecision"), view.lookup("zoom"), 0);
      }), "%" ];
    })), "\n                ", HTML.DIV({
      class: "compressionIndicator"
    }, Blaze.View("lookup:compression", function() {
      return Spacebars.mustache(view.lookup("compression"));
    })), "\n                ", HTML.DIV(Blaze.View("lookup:wwwc", function() {
      return Spacebars.mustache(view.lookup("wwwc"));
    })), "\n            "), "\n        " ];
  }), "\n\n        ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("gt"), view.lookup("numImages"), 1);
  }, function() {
    return [ "\n            ", Blaze._TemplateWith(function() {
      return {
        imageIndex: Spacebars.call(view.lookup("imageIndex")),
        numImages: Spacebars.call(view.lookup("numImages"))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("imageControls"));
    }), "\n        " ];
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"viewportOverlay.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/viewportOverlay/viewportOverlay.js                                //
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
var cornerstone;
module.watch(require("meteor/ohif:cornerstone"), {
  cornerstone: function (v) {
    cornerstone = v;
  }
}, 4);
var viewportOverlayUtils;
module.watch(require("../../../lib/viewportOverlayUtils"), {
  viewportOverlayUtils: function (v) {
    viewportOverlayUtils = v;
  }
}, 5);
var getElementIfNotEmpty;
module.watch(require("../../../lib/getElementIfNotEmpty"), {
  getElementIfNotEmpty: function (v) {
    getElementIfNotEmpty = v;
  }
}, 6);
var getStackDataIfNotEmpty;
module.watch(require("../../../lib/getStackDataIfNotEmpty"), {
  getStackDataIfNotEmpty: function (v) {
    getStackDataIfNotEmpty = v;
  }
}, 7);
Template.viewportOverlay.onCreated(function () {
  var instance = Template.instance();

  instance.getImageIndex = function () {
    var stack = getStackDataIfNotEmpty(instance.data.viewportIndex);
    if (!stack || stack.currentImageIdIndex === undefined) return;
    return stack.currentImageIdIndex;
  };
});
Template.viewportOverlay.helpers({
  wwwc: function () {
    Session.get('CornerstoneImageRendered' + this.viewportIndex);
    var element = getElementIfNotEmpty(this.viewportIndex);

    if (!element) {
      return '';
    }

    var viewport = cornerstone.getViewport(element);

    if (!viewport) {
      return '';
    }

    return 'W ' + viewport.voi.windowWidth.toFixed(0) + ' L ' + viewport.voi.windowCenter.toFixed(0);
  },
  zoom: function () {
    Session.get('CornerstoneImageRendered' + this.viewportIndex);
    var element = getElementIfNotEmpty(this.viewportIndex);

    if (!element) {
      return;
    }

    var viewport = cornerstone.getViewport(element);

    if (!viewport) {
      return;
    }

    return viewport.scale * 100.0;
  },
  imageDimensions: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    var image = viewportOverlayUtils.getImage(this.viewportIndex);

    if (!image) {
      return '';
    }

    return image.width + ' x ' + image.height;
  },
  patientName: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getPatient.call(this, 'name');
  },
  patientId: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getPatient.call(this, 'id');
  },
  patientBirthDate: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getPatient.call(this, 'birthDate');
  },
  patientSex: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getPatient.call(this, 'sex');
  },
  studyDate: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getStudy.call(this, 'studyDate');
  },
  studyTime: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getStudy.call(this, 'studyTime');
  },
  studyDescription: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getStudy.call(this, 'studyDescription');
  },
  seriesDescription: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getSeries.call(this, 'seriesDescription');
  },
  frameRate: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    var frameTime = viewportOverlayUtils.getInstance.call(this, 'frameTime');

    if (!frameTime) {
      return;
    }

    var frameRate = 1000 / frameTime;
    return frameRate.toFixed(1);
  },
  seriesNumber: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getSeries.call(this, 'seriesNumber');
  },
  instanceNumber: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getInstance.call(this, 'instanceNumber');
  },
  thickness: function () {
    // Displays Slice Thickness (0018,0050)
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getInstance.call(this, 'sliceThickness');
  },
  location: function () {
    // Displays Slice Location (0020,1041), if present.
    // - Otherwise, displays Table Position (0018,9327)
    // - TODO: Otherwise, displays a value derived from Image Position (Patient) (0020,0032)
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    var sliceLocation = viewportOverlayUtils.getInstance.call(this, 'sliceLocation');

    if (sliceLocation !== '') {
      return sliceLocation;
    }

    var tablePosition = viewportOverlayUtils.getInstance.call(this, 'tablePosition');

    if (tablePosition !== '') {
      return tablePosition;
    }

    return viewportOverlayUtils.getInstance.call(this, 'imagePositionPatient');
  },
  spacingBetweenSlices: function () {
    // Displays Spacing Between Slices (0018,0088), if present.
    // TODO: Otherwise, displays a value derived from successive values
    // of Image Position (Patient) (0020,0032) perpendicular to
    // the Image Orientation (Patient) (0020,0037)
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getInstance.call(this, 'spacingBetweenSlices');
  },
  compression: function () {
    // Displays whether or not lossy compression has been applied:
    //
    // - Checks Lossy Image Compression (0028,2110)
    // - If so, displays the value of Lossy Image Compression Ratio (0028,2112)
    //          and Lossy Image Compression Method (0028,2114)
    Session.get('CornerstoneNewImage' + this.viewportIndex);

    if (!this.imageId) {
      return false;
    }

    var instance = cornerstone.metaData.get('instance', this.imageId);

    if (!instance) {
      return '';
    }

    if (instance.lossyImageCompression === '01' && instance.lossyImageCompressionRatio !== '') {
      var compressionMethod = instance.lossyImageCompressionMethod || 'Lossy: ';
      var compressionRatio = parseFloat(instance.lossyImageCompressionRatio).toFixed(2);
      return compressionMethod + compressionRatio + ' : 1';
    }

    return 'Lossless / Uncompressed';
  },
  tagDisplayLeftOnly: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getTagDisplay.call(this, 'side') === 'L';
  },
  tagDisplayRightOnly: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getTagDisplay.call(this, 'side') === 'R';
  },
  tagDisplaySpecified: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getTagDisplay.call(this, 'side');
  },
  imageNumber: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    return viewportOverlayUtils.getInstance.call(this, 'number');
  },
  imageIndex: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    var imageIndex = Template.instance().getImageIndex();
    return _.isUndefined(imageIndex) ? 0 : imageIndex + 1;
  },
  numImages: function () {
    Session.get('CornerstoneNewImage' + this.viewportIndex);
    var stack = getStackDataIfNotEmpty(this.viewportIndex);

    if (!stack || !stack.imageIds) {
      return;
    }

    return stack.imageIds.length;
  },
  prior: function () {
    // This helper is updated whenever a new image is displayed in the viewport
    Session.get('CornerstoneNewImage' + this.viewportIndex);

    if (!this.imageId) {
      return;
    } // @TypeSafeStudies
    // Make sure there are more than two studies loaded in the viewer


    var viewportStudies = OHIF.viewer.Studies.all();

    if (viewportStudies.length < 2) {
      return;
    } // Here we sort the collection in ascending order by study date, so
    // that we can obtain the oldest study as the first element of the array
    //
    // TODO= Find out if we should encode studyDate as a Date in the OHIF.viewer.Studies Collection


    var viewportStudiesArray = _.sortBy(viewportStudies, function (study) {
      return viewportOverlayUtils.formatDateTime(study.studyDate, study.studyTime);
    }); // Get study data


    var study = cornerstone.metaData.get('study', this.imageId);

    if (!study) {
      return;
    }

    var oldestStudy = viewportStudiesArray[0];

    if (viewportOverlayUtils.formatDateTime(study.studyDate, study.studyTime) <= viewportOverlayUtils.formatDateTime(oldestStudy.studyDate, oldestStudy.studyTime)) {
      return 'Prior';
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"viewerMain":{"template.viewerMain.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/viewerMain/template.viewerMain.js                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("viewerMain");
Template["viewerMain"] = new Template("Template.viewerMain", (function() {
  var view = this;
  return HTML.Raw('<div class="viewerMain">\n        <div id="layoutManagerTarget">\n        </div>\n    </div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"viewerMain.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/viewerMain/viewerMain.js                                          //
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
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 3);
var unloadHandlers;
module.watch(require("../../../lib/unloadHandlers"), {
  unloadHandlers: function (v) {
    unloadHandlers = v;
  }
}, 4);
var ResizeViewportManager;
module.watch(require("../../../lib/classes/ResizeViewportManager"), {
  ResizeViewportManager: function (v) {
    ResizeViewportManager = v;
  }
}, 5);
var LayoutManager;
module.watch(require("../../../lib/classes/LayoutManager"), {
  LayoutManager: function (v) {
    LayoutManager = v;
  }
}, 6);
var StudyPrefetcher;
module.watch(require("../../../lib/classes/StudyPrefetcher"), {
  StudyPrefetcher: function (v) {
    StudyPrefetcher = v;
  }
}, 7);
var StudyLoadingListener;
module.watch(require("../../../lib/classes/StudyLoadingListener"), {
  StudyLoadingListener: function (v) {
    StudyLoadingListener = v;
  }
}, 8);
Meteor.startup(function () {
  window.ResizeViewportManager = window.ResizeViewportManager || new ResizeViewportManager(); // Set initial value for OHIFViewerMainRendered
  // session variable. This can used in viewer main template

  Session.set('OHIFViewerMainRendered', false);
});
Template.viewerMain.onCreated(function () {
  // Attach the Window resize listener
  // Don't use jQuery here. "window.onresize" will always be null
  // If its necessary, check all the code for window.onresize getter
  // and change it to jQuery._data(window, 'events')['resize'].
  // Otherwise this function will be probably overrided.
  // See cineDialog instance.setResizeHandler function
  window.addEventListener('resize', window.ResizeViewportManager.getResizeHandler()); // Add beforeUnload event handler to check for unsaved changes

  window.addEventListener('beforeunload', unloadHandlers.beforeUnload);
});
Template.viewerMain.onRendered(function () {
  var instance = Template.instance();
  var studies = instance.data.studies;
  var parentElement = instance.$('#layoutManagerTarget').get(0);
  var studyPrefetcher = StudyPrefetcher.getInstance();
  instance.studyPrefetcher = studyPrefetcher;
  instance.studyLoadingListener = StudyLoadingListener.getInstance();
  instance.studyLoadingListener.clear();
  instance.studyLoadingListener.addStudies(studies);
  OHIF.viewerbase.layoutManager = new LayoutManager(parentElement, studies);
  studyPrefetcher.setStudies(studies);
  Session.set('OHIFViewerMainRendered', Math.random());
});
Template.viewerMain.onDestroyed(function () {
  var instance = Template.instance();
  OHIF.log.info('viewerMain onDestroyed'); // Remove the Window resize listener

  window.removeEventListener('resize', window.ResizeViewportManager.getResizeHandler()); // Remove beforeUnload event handler...

  window.removeEventListener('beforeunload', unloadHandlers.beforeUnload); // Destroy the synchronizer used to update reference lines

  OHIF.viewer.updateImageSynchronizer.destroy();
  delete OHIF.viewerbase.layoutManager;
  ProtocolEngine = null;
  Session.set('OHIFViewerMainRendered', false); // Stop prefetching when we close the viewer

  instance.studyPrefetcher.destroy(); // Destroy stack loading listeners when we close the viewer

  instance.studyLoadingListener.clear(); // Clear references to all stacks in the StackManager

  OHIF.viewerbase.stackManager.clearStacks(); // @TypeSafeStudies
  // Clears OHIF.viewer.Studies collection

  OHIF.viewer.Studies.removeAll(); // @TypeSafeStudies
  // Clears OHIF.viewer.StudyMetadataList collection

  OHIF.viewer.StudyMetadataList.removeAll();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"toolContextMenu":{"toolContextMenu.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/toolContextMenu/toolContextMenu.js                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 1);
var cornerstone, cornerstoneTools;
module.watch(require("meteor/ohif:cornerstone"), {
  cornerstone: function (v) {
    cornerstone = v;
  },
  cornerstoneTools: function (v) {
    cornerstoneTools = v;
  }
}, 2);
var toolManager;
module.watch(require("../../../lib/toolManager"), {
  toolManager: function (v) {
    toolManager = v;
  }
}, 3);
var toolTypes = ['length', 'simpleAngle', 'probe', 'ellipticalRoi', 'rectangleRoi', 'arrowAnnotate'];
var TypeToLabelMap = {
  length: 'Length',
  simpleAngle: 'Angle',
  probe: 'Probe',
  ellipticalRoi: 'Elliptical ROI',
  rectangleRoi: 'Rectangle ROI',
  arrowAnnotate: 'Annotation'
};
var dropdownItems = [{
  actionType: 'Delete',
  action: function (_ref) {
    var nearbyToolData = _ref.nearbyToolData,
        eventData = _ref.eventData;
    var element = eventData.element;
    cornerstoneTools.removeToolState(element, nearbyToolData.toolType, nearbyToolData.tool);
    cornerstone.updateImage(element);
  }
}];

var getTypeText = function (toolData, actionType) {
  var toolType = toolData.toolType;
  var message = "" + TypeToLabelMap[toolType];

  if (toolType === 'arrowAnnotate') {
    message = message + " \"" + toolData.tool.text + "\"";
  }

  return actionType + " " + message;
};

var createDropdown = function (eventData) {
  var isTouchEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var nearbyToolData = toolManager.getNearbyToolData(eventData.element, eventData.currentPoints.canvas, toolTypes); // Annotate tools for touch events already have a press handle to edit it, has a better UX for deleting it

  if (isTouchEvent && nearbyToolData.toolType === 'arrowAnnotate') return;

  if (nearbyToolData) {
    dropdownItems.forEach(function (item) {
      item.params = {
        eventData: eventData,
        nearbyToolData: nearbyToolData
      };
      item.text = getTypeText(nearbyToolData, item.actionType);
    });
    OHIF.ui.showDropdown(dropdownItems, {
      menuClasses: 'dropdown-menu-left',
      event: eventData.event
    });
  }
};

Template.viewerMain.events({
  'cornerstonetoolsmouseclick .imageViewerViewport': function (event) {
    var originalEvent = event.originalEvent;
    var eventData = originalEvent.detail;

    if (eventData.which === 3) {
      createDropdown(eventData);
    }
  },
  'cornerstonetoolstouchpress .imageViewerViewport': function (event) {
    var originalEvent = event.originalEvent;
    var eventData = originalEvent.detail;
    createDropdown(eventData, true);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imageControls":{"template.imageControls.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/imageControls/template.imageControls.js                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("imageControls");
Template["imageControls"] = new Template("Template.imageControls", (function() {
  var view = this;
  return HTML.DIV({
    class: "imageControls"
  }, "\n        ", HTML.DIV({
    class: "scrollbar"
  }, "\n            ", HTML.INPUT({
    class: "imageSlider",
    type: "range",
    min: "1",
    value: function() {
      return Spacebars.mustache(view.lookup("imageIndex"));
    },
    max: function() {
      return Spacebars.mustache(view.lookup("numImages"));
    }
  }), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"imageControls.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/imageControls/imageControls.js                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
var setActiveViewport;
module.watch(require("../../../lib/setActiveViewport"), {
  setActiveViewport: function (v) {
    setActiveViewport = v;
  }
}, 4);
var switchToImageByIndex;
module.watch(require("../../../lib/switchToImageByIndex"), {
  switchToImageByIndex: function (v) {
    switchToImageByIndex = v;
  }
}, 5);
var slideTimeoutTime = 40;
var slideTimeout;
Template.imageControls.onRendered(function () {
  var instance = Template.instance(); // Set the current imageSlider width to its parent's height
  // (because webkit is stupid and can't style vertical sliders)

  var $slider = instance.$('.imageSlider');
  var $viewport = $slider.closest('.imageViewerViewportOverlay').siblings('.imageViewerViewport');
  instance.handleResize = _.throttle(function () {
    var viewportHeight = $viewport.height();
    $slider.width(viewportHeight - 20);
  }, 150);
  instance.handleResize();
  $(window).on('resize', instance.handleResize);
});
Template.imageControls.onDestroyed(function () {
  var instance = Template.instance();
  $(window).off('resize', instance.handleResize);
});
Template.imageControls.events({
  'rescale .scrollbar': function (event, instance) {
    instance.handleResize();
  },
  'keydown input[type=range]': function (event) {
    // We don't allow direct keyboard up/down input on the
    // image sliders since the natural direction is reversed (0 is at the top)
    // Store the KeyCodes in an object for readability
    var keys = {
      DOWN: 40,
      UP: 38
    };

    if (event.which === keys.DOWN) {
      OHIF.commands.run('scrollDown');
      event.preventDefault();
    } else if (event.which === keys.UP) {
      OHIF.commands.run('scrollUp');
      event.preventDefault();
    }
  },
  'input input[type=range], change input[type=range]': function (event) {
    // Note that we throttle requests to prevent the
    // user's ultrafast scrolling from firing requests too quickly.
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(function () {
      // Using the slider in an inactive viewport
      // should cause that viewport to become active
      var $slider = $(event.currentTarget);
      var newActiveElement = $slider.parents('.viewportContainer').find('.imageViewerViewport');
      setActiveViewport(newActiveElement); // Subtract 1 here since the slider goes from 1 to N images
      // But the stack indexing starts at 0

      var newImageIdIndex = parseInt($slider.val(), 10) - 1;
      switchToImageByIndex(newImageIdIndex);
    }, slideTimeoutTime);
    return false;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"layoutButton":{"template.layoutButton.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/layoutButton/template.layoutButton.js                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("layoutButton");
Template["layoutButton"] = new Template("Template.layoutButton", (function() {
  var view = this;
  return HTML.DIV({
    id: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));
    },
    class: function() {
      return [ "toolbarSectionButton rp-x-1 ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "classes")), " ", Spacebars.mustache(view.lookup("activeClass")), " js-dropdown-toggle" ];
    },
    title: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "title"));
    },
    "data-target": "#layoutChooser"
  }, "\n        ", HTML.DIV({
    class: "svgContainer"
  }, "\n            ", Blaze.If(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("."), "svgLink"));
  }, function() {
    return [ "\n                ", HTML.SVG("\n                    ", HTML.USE({
      "xlink:href": function() {
        return Spacebars.mustache(view.lookup("absoluteUrl"), Spacebars.dot(view.lookup("."), "svgLink"));
      }
    }), "\n                "), "\n            " ];
  }, function() {
    return [ "\n                ", HTML.I({
      class: function() {
        return Spacebars.mustache(view.lookup("iconClasses"));
      }
    }), "\n            " ];
  }), "\n        "), "\n        ", HTML.DIV({
    class: "buttonLabel"
  }, "\n            ", Blaze.View("lookup:..title", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("."), "title"));
  }), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"layoutButton.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/layoutButton/layoutButton.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
var viewportUtils;
module.watch(require("../../../lib/viewportUtils"), {
  viewportUtils: function (v) {
    viewportUtils = v;
  }
}, 2);
Template.layoutButton.events({
  // TODO: Check why 'click' event won't fire?
  'mousedown .js-dropdown-toggle': function (event) {
    // Select the button and it's target dropdown menu
    var $button = $(event.currentTarget);
    var $dropdown = $($button.data('target')); // Adjust the dropdown's CSS to properly place it on the page

    $dropdown.css({
      top: $button.offset().top + $button.outerHeight() + 'px',
      left: $button.offset().left + 'px'
    }); // Open or close the layout chooser dialog

    viewportUtils.toggleDialog($dropdown);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"layoutChooser":{"template.layoutChooser.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/layoutChooser/template.layoutChooser.js                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("layoutChooser");
Template["layoutChooser"] = new Template("Template.layoutChooser", (function() {
  var view = this;
  return HTML.DIV({
    id: "layoutChooser",
    class: "layoutChooser dialog-animated"
  }, "\n        ", HTML.TABLE("\n            ", HTML.TR("\n                ", HTML.TD(), "\n                ", HTML.TD(), "\n                ", HTML.TD(), "\n                ", HTML.TD(), "\n            "), "\n            ", HTML.TR("\n                ", HTML.TD(), "\n                ", HTML.TD(), "\n                ", HTML.TD(), "\n                ", HTML.TD(), "\n            "), "\n            ", HTML.TR("\n                ", HTML.TD(), "\n                ", HTML.TD(), "\n                ", HTML.TD(), "\n                ", HTML.TD(), "\n            "), "\n            ", HTML.TR("\n                ", HTML.TD(), "\n                ", HTML.TD(), "\n                ", HTML.TD(), "\n                ", HTML.TD(), "\n            "), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"layoutChooser.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/layoutChooser/layoutChooser.js                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _this = this;

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
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 2);
module.watch(require("meteor/ohif:viewerbase"));
var viewportUtils;
module.watch(require("../../../lib/viewportUtils"), {
  viewportUtils: function (v) {
    viewportUtils = v;
  }
}, 3);
Template.layoutChooser.onRendered(function () {
  var instance = Template.instance();
  /**
   * Adds the 'hover' class to cells above and to the left of the current cell
   * This is used to "fill in" the grid that the user will change the layout to,
   * if they click on a specific table cell.
   *
   * @param currentCell
   */

  instance.highlightCells = function (currentCell) {
    var cells = _this.$('.layoutChooser table td');

    cells.removeClass('hover');
    currentCell = _this.$(currentCell);
    var table = currentCell.parents('.layoutChooser table').get(0);
    var rowIndex = currentCell.closest('tr').index();
    var columnIndex = currentCell.index(); // Loop through the table row by row
    // and cell by cell to apply the highlighting

    for (var i = table.rows.length - 1; i >= 0; i--) {
      var row = table.rows[i];

      if (i <= rowIndex) {
        for (var j = row.cells.length - 1; j >= 0; j--) {
          if (j <= columnIndex) {
            var cell = row.cells[j];
            cell.classList.add('hover');
          }
        }
      }
    }
  }; // Refresh layout chooser highlighting based on current viewports state


  instance.refreshHighlights = function () {
    // Stop here if layoutManager is not defined yet
    if (!OHIF.viewerbase.layoutManager) {
      return;
    } // Get the layout rows and columns amount


    var info = OHIF.viewerbase.layoutManager.layoutProps; // get the limiter cell

    var cell = instance.$('tr').eq(info.rows - 1).children().eq(info.columns - 1); // Highlight all cells before the limiter

    instance.highlightCells(cell);
  };

  instance.autorun(function () {
    // Run this computation every time the viewer layout is changed
    Session.get('LayoutManagerUpdated');
    instance.refreshHighlights();
  });
});
Template.layoutChooser.events({
  'touchstart .layoutChooser table td, mouseenter .layoutChooser table td': function (event, instance) {
    instance.highlightCells(event.currentTarget);
  },
  'mouseleave .layoutChooser': function (event, instance) {
    instance.refreshHighlights();
  },
  'click .layoutChooser table td': function (event, instance) {
    var $currentCell = instance.$(event.currentTarget);
    var rowIndex = $currentCell.closest('tr').index();
    var columnIndex = $currentCell.index(); // Add 1 because the indices start from zero

    var layoutProps = {
      rows: rowIndex + 1,
      columns: columnIndex + 1
    };
    OHIF.viewerbase.layoutManager.layoutTemplateName = 'gridLayout';
    OHIF.viewerbase.layoutManager.layoutProps = layoutProps;
    OHIF.viewerbase.layoutManager.updateViewports();
    var $dropdown = instance.$('.layoutChooser');
    viewportUtils.toggleDialog($dropdown);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"cineDialog":{"template.cineDialog.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/cineDialog/template.cineDialog.js                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("cineDialog");
Template["cineDialog"] = new Template("Template.cineDialog", (function() {
  var view = this;
  return HTML.getTag("dialog")({
    id: "cineDialog"
  }, "\n        ", Blaze._TemplateWith(function() {
    return {
      id: Spacebars.call("cineDialogForm"),
      class: Spacebars.call(Spacebars.dataMustache(view.lookup("getClassNames"), "dialog-animated noselect")),
      schema: Spacebars.call(Spacebars.dot(view.lookup("instance"), "schema")),
      api: Spacebars.call(Spacebars.dot(view.lookup("instance"), "api"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("form"), function() {
      return [ "\n            ", Blaze._TemplateWith(function() {
        return {
          key: Spacebars.call("intervalId")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputHidden"));
      }), "\n            ", HTML.DIV({
        class: "button-close-container"
      }, "\n                ", HTML.DIV({
        class: "button-close"
      }, HTML.SPAN({
        "aria-hidden": "true"
      }, "x")), "\n            "), "\n            ", HTML.DIV({
        class: "cine-controls"
      }, "\n                ", HTML.DIV({
        class: "btn-group"
      }, "\n                    ", Blaze._TemplateWith(function() {
        return {
          class: Spacebars.call("btn"),
          action: Spacebars.call("cineFirst"),
          title: Spacebars.call("Skip to first image"),
          disabled: Spacebars.call(Spacebars.dataMustache(view.lookup("buttonDisabled")))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("button"), function() {
          return [ "\n                        ", HTML.I({
            class: "fa fa-fast-backward"
          }), "\n                    " ];
        });
      }), "\n                    ", Blaze._TemplateWith(function() {
        return {
          class: Spacebars.call("btn"),
          action: Spacebars.call("cinePrevious"),
          title: Spacebars.call("Previous image"),
          disabled: Spacebars.call(Spacebars.dataMustache(view.lookup("buttonDisabled")))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("button"), function() {
          return [ "\n                        ", HTML.I({
            class: "fa fa-step-backward"
          }), "\n                    " ];
        });
      }), "\n                    ", Blaze._TemplateWith(function() {
        return {
          class: Spacebars.call(Spacebars.dataMustache(view.lookup("concat"), "btn ", Spacebars.dataMustache(view.lookup("valueIf"), view.lookup("isPlaying"), "active", ""))),
          action: Spacebars.call("cineToggle"),
          title: Spacebars.call("Play / Stop"),
          disabled: Spacebars.call(Spacebars.dataMustache(view.lookup("buttonDisabled")))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("button"), function() {
          return [ "\n                        ", Blaze.If(function() {
            return Spacebars.call(view.lookup("isPlaying"));
          }, function() {
            return [ "\n                            ", HTML.I({
              class: "fa fa-fw fa-stop"
            }), "\n                        " ];
          }, function() {
            return [ "\n                            ", HTML.I({
              class: "fa fa-fw fa-play"
            }), "\n                        " ];
          }), "\n                    " ];
        });
      }), "\n                    ", Blaze._TemplateWith(function() {
        return {
          class: Spacebars.call("btn"),
          action: Spacebars.call("cineNext"),
          title: Spacebars.call("Next image"),
          disabled: Spacebars.call(Spacebars.dataMustache(view.lookup("buttonDisabled")))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("button"), function() {
          return [ "\n                        ", HTML.I({
            class: "fa fa-step-forward"
          }), "\n                    " ];
        });
      }), "\n                    ", Blaze._TemplateWith(function() {
        return {
          class: Spacebars.call("btn"),
          action: Spacebars.call("cineLast"),
          title: Spacebars.call("Skip to last image"),
          disabled: Spacebars.call(Spacebars.dataMustache(view.lookup("buttonDisabled")))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("button"), function() {
          return [ "\n                        ", HTML.I({
            class: "fa fa-fast-forward"
          }), "\n                    " ];
        });
      }), "\n                "), "\n            "), "\n            ", HTML.DIV({
        class: "cine-options"
      }, "\n                ", HTML.DIV({
        class: "fps-section"
      }, "\n                    ", Blaze._TemplateWith(function() {
        return {
          key: Spacebars.call("framesPerSecond"),
          class: Spacebars.call("p-a-0"),
          labelClass: Spacebars.call("form-group m-a-0"),
          labelAsDiv: Spacebars.call(true)
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputRange"), function() {
          return "\n                    ";
        });
      }), "\n                "), "\n                ", HTML.SPAN({
        id: "fps"
      }, Blaze.View("lookup:framerate", function() {
        return Spacebars.mustache(view.lookup("framerate"));
      }), " fps"), "\n            "), "\n            ", HTML.DIV({
        class: "cine-navigation"
      }, "\n                ", HTML.DIV({
        class: "btn-group"
      }, "\n                    ", Blaze._TemplateWith(function() {
        return {
          class: Spacebars.call("btn"),
          disabled: Spacebars.call(Spacebars.dataMustache(view.lookup("displaySetDisabled"), false)),
          action: Spacebars.call("displaySetPrevious"),
          title: Spacebars.call("Previous display set")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("button"), function() {
          return [ "\n                        ", HTML.I({
            class: "fa fa-toggle-up"
          }), "\n                    " ];
        });
      }), "\n                    ", Blaze._TemplateWith(function() {
        return {
          class: Spacebars.call("btn"),
          disabled: Spacebars.call(Spacebars.dataMustache(view.lookup("displaySetDisabled"), true)),
          action: Spacebars.call("displaySetNext"),
          title: Spacebars.call("Next display set")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("button"), function() {
          return [ "\n                        ", HTML.I({
            class: "fa fa-toggle-down"
          }), "\n                    " ];
        });
      }), "\n                "), "\n            "), "\n        " ];
    });
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cineDialog.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/cineDialog/cineDialog.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var SimpleSchema;
module.watch(require("meteor/aldeed:simple-schema"), {
  SimpleSchema: function (v) {
    SimpleSchema = v;
  }
}, 1);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 2);
var Tracker;
module.watch(require("meteor/tracker"), {
  Tracker: function (v) {
    Tracker = v;
  }
}, 3);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 4);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 5);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 6);
var cornerstoneTools;
module.watch(require("meteor/ohif:cornerstone"), {
  cornerstoneTools: function (v) {
    cornerstoneTools = v;
  }
}, 7);
var viewportUtils;
module.watch(require("../../../lib/viewportUtils"), {
  viewportUtils: function (v) {
    viewportUtils = v;
  }
}, 8);
var switchToImageRelative;
module.watch(require("../../../lib/switchToImageRelative"), {
  switchToImageRelative: function (v) {
    switchToImageRelative = v;
  }
}, 9);
var switchToImageByIndex;
module.watch(require("../../../lib/switchToImageByIndex"), {
  switchToImageByIndex: function (v) {
    switchToImageByIndex = v;
  }
}, 10);
Template.cineDialog.onCreated(function () {
  var instance = Template.instance(); // Create the data schema for CINE controls

  instance.schema = new SimpleSchema({
    intervalId: {
      type: Number,
      optional: true
    },
    loop: {
      type: Boolean,
      label: 'Loop',
      defaultValue: true
    },
    framesPerSecond: {
      type: Number,
      label: '',
      defaultValue: 24,
      min: 1,
      max: 90,
      optional: true
    }
  }); // Update the current viewport frame rate

  instance.updateFramerate = function (rate) {
    OHIF.viewer.cine.framesPerSecond = rate; // Update playClip toolData for this imageId

    var element = viewportUtils.getActiveViewportElement();

    if (!element) {
      return;
    }

    var playClipData = cornerstoneTools.getToolState(element, 'playClip');

    if (!playClipData || !playClipData.data || !playClipData.data.length) {
      return;
    } // A valid playClip data object is available.


    playClipData = playClipData.data[0]; // If the movie is playing, stop/start to update the framerate

    if (playClipData.intervalId !== void 0) {
      cornerstoneTools.stopClip(element);
      cornerstoneTools.playClip(element, OHIF.viewer.cine.framesPerSecond);
    } else {
      playClipData.framesPerSecond = OHIF.viewer.cine.framesPerSecond;
    }

    Session.set('UpdateCINE', Math.random());
  }; // Define the actions API


  instance.api = {
    displaySetPrevious: function () {
      return OHIF.viewerbase.layoutManager.moveDisplaySets(false);
    },
    displaySetNext: function () {
      return OHIF.viewerbase.layoutManager.moveDisplaySets(true);
    },
    cineToggle: function () {
      return viewportUtils.toggleCinePlay();
    },
    cineFirst: function () {
      return switchToImageByIndex(0);
    },
    cineLast: function () {
      return switchToImageByIndex(-1);
    },
    cinePrevious: function () {
      return switchToImageRelative(-1);
    },
    cineNext: function () {
      return switchToImageRelative(1);
    },
    cineSlowDown: function () {
      var newValue = OHIF.viewer.cine.framesPerSecond - 1;

      if (newValue > 0) {
        instance.updateFramerate(newValue);
      }
    },
    cineSpeedUp: function () {
      var newValue = OHIF.viewer.cine.framesPerSecond + 1;

      if (newValue <= 90) {
        instance.updateFramerate(newValue);
      }
    }
  }; // Run this computation every time the active viewport is changed

  instance.autorun(function () {
    Session.get('activeViewport');
    Tracker.afterFlush(function () {
      // Get the active viewportElement
      var element = viewportUtils.getActiveViewportElement();

      if (!element) {
        return;
      } // check if playClip tool has been initialized...


      var playClipData = cornerstoneTools.getToolState(element, 'playClip');

      if (!playClipData) {
        return;
      } // Get the cornerstone playClip tool data


      var toolData = playClipData.data[0]; // Get the cine object

      var cine = OHIF.viewer.cine; // replace the cine values with the tool data

      _.extend(cine, toolData); // Set the defaults


      cine.framesPerSecond = cine.framesPerSecond || 24;
      cine.loop = _.isUndefined(cine.loop) ? true : cine.loop; // Set the updated data on the form inputs

      var elementComponent = instance.$('form:first').data('component');

      if (elementComponent) {
        elementComponent.value(cine);
      } // Update the session to refresh the framerate text


      Session.set('UpdateCINE', Math.random());
    });
  });
  /**
   * Set/Reset Window resize handler. This function is a replacement for
   * ... jQuery's on('resize', func) version which, for some unkown reason
   * ... is currently not working for this portion of code.
   * ... Further investigation is necessary.
   *
   * This happens because when an event is attached using jQuery's
   * you can't get it using vanilla JavaScript, it returns null.
   * You need to use jQuery for that. So, either you use vanilla JS or jQuery
   * to get an element's event handler. See viewerMain for more details.
   */

  instance.setResizeHandler = function (handler) {
    if (typeof handler === 'function') {
      var origHandler = window.onresize;
      instance.origWindowResizeHandler = typeof origHandler === 'function' ? origHandler : null;

      window.onresize = function (event) {
        if (typeof origHandler === 'function') {
          origHandler.call(window, event);
        }

        handler.call(window, event);
      };
    } else {
      window.onresize = instance.origWindowResizeHandler || null;
      window.origWindowResizeHandler = null;
    }
  };
  /**
   * Set optimal position for Cine dialog.
   */


  instance.setOptimalPosition = function (event, options) {
    var $viewer = $('#viewer');
    var $toolbarElement = $('.toolbarSection .toolbarSectionTools:first');
    var $cineDialog = $('#cineDialog');
    $cineDialog.width($('#cineDialogForm').outerWidth());

    if ($toolbarElement.length < 1 || $cineDialog.length < 1) {
      return;
    }

    if ($cineDialog.data('wasDragged') || $cineDialog.data('wasBounded')) {
      // restore original handler...
      instance.setResizeHandler(null);
      return;
    }

    var cineDialogSize = {
      width: $cineDialog.outerWidth() || 0,
      height: $cineDialog.outerHeight() || 0
    };
    var topLeftCoords = {
      top: 0,
      left: 0
    };
    var toolbarRect = {
      offset: $toolbarElement.offset() || topLeftCoords,
      width: $toolbarElement.outerWidth() || 0,
      height: $toolbarElement.outerHeight() || 0
    };
    var cineDialogCoords = {
      left: toolbarRect.offset.left + toolbarRect.width + 20,
      top: toolbarRect.offset.top + toolbarRect.height - cineDialogSize.height
    };

    if (options) {
      if (options.left) {
        cineDialogCoords.left = options.left;
      }

      if (options.top) {
        cineDialogCoords.top = options.top;
      }
    } // Check if it is out of screen


    if (cineDialogCoords.top < 0) {
      cineDialogCoords.top = 0;
    } else if (cineDialogCoords.top + cineDialogSize.height > $viewer.height()) {
      cineDialogCoords.top -= cineDialogCoords.top + cineDialogSize.height - $viewer.height();
    }

    if (cineDialogCoords.left < 0) {
      cineDialogCoords.left = 0;
    } else if (cineDialogCoords.left + cineDialogSize.width > $viewer.width()) {
      cineDialogCoords.left -= cineDialogCoords.left + cineDialogSize.width - $viewer.width();
    }

    $cineDialog.css(cineDialogCoords);
  };
});
Template.cineDialog.onRendered(function () {
  var instance = Template.instance();
  var $dialog = instance.$('#cineDialog');
  var singleRowLayout = OHIF.uiSettings.displayEchoUltrasoundWorkflow; // set dialog in optimal position and make sure it continues in a optimal position...
  // ... when the window has been resized

  instance.setOptimalPosition(null, {
    top: singleRowLayout ? 47 : 26
  }); // The jQuery method does not seem to be working...
  // ... $(window).resize(instance.setOptimalPosition)
  // This requires additional investigation.

  instance.setResizeHandler(instance.setOptimalPosition); // Make the CINE dialog bounded and draggable

  $dialog.draggable({
    defaultElementCursor: 'move'
  }).bounded(); // Polyfill for older browsers

  window.dialogPolyfill.registerDialog($dialog.get(0)); // Prevent dialog from being dragged when user clicks any button

  var $controls = $dialog.find('.cine-navigation, .cine-controls, .cine-options');
  $controls.on('mousedown touchstart', function (event) {
    return event.stopPropagation();
  });
});
Template.cineDialog.onDestroyed(function () {
  var instance = Template.instance(); // remove resize handler...

  instance.setResizeHandler(null);
});
Template.cineDialog.events({
  'change [data-key=loop] input': function (event, instance) {
    var element = viewportUtils.getActiveViewportElement();
    OHIF.viewer.cine.loop = $(event.currentTarget).is(':checked'); // Update playClip tool data if available.

    var playClipData = cornerstoneTools.getToolState(element, 'playClip');

    if (playClipData && playClipData.data && playClipData.data.length > 0) {
      playClipData.data[0].loop = OHIF.viewer.cine.loop;
    }
  },
  'input [data-key=framesPerSecond] input, change [data-key=framesPerSecond] input': function (event, instance) {
    // Update the FPS text onscreen
    var rate = parseFloat($(event.currentTarget).val());
    instance.updateFramerate(rate);
  },
  'click .button-close': function (event, instance) {
    OHIF.commands.run('toggleCineDialog');
  }
});
Template.cineDialog.helpers({
  isPlaying: function () {
    return viewportUtils.isPlaying();
  },
  framerate: function () {
    Session.get('UpdateCINE');
    return OHIF.viewer.cine.framesPerSecond.toFixed(1);
  },
  displaySetDisabled: function (isNext) {
    Session.get('LayoutManagerUpdated'); // @TODO: Investigate why this is running while OHIF.viewerbase.layoutManager is undefined

    if (!OHIF.viewerbase.layoutManager) {
      return;
    }

    return !OHIF.viewerbase.layoutManager.canMoveDisplaySets(isNext) ? 'disabled' : '';
  },
  buttonDisabled: function () {
    return viewportUtils.hasMultipleFrames();
  },
  getClassNames: function (baseClass) {
    var style = OHIF.uiSettings.displayEchoUltrasoundWorkflow ? 'single' : 'double';
    return baseClass + " " + style + "-row-style";
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"downloadDialog":{"template.downloadDialog.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/downloadDialog/template.downloadDialog.js                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("imageDownloadDialog");
Template["imageDownloadDialog"] = new Template("Template.imageDownloadDialog", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      title: "Download High Quality Image",
      class: "themed",
      dialogClass: "modal-lg",
      formClass: "form-themed",
      confirmLabel: "Download Image",
      confirmCallback: Spacebars.dot(view.lookup("instance"), "getConfirmCallback"),
      cancelLabel: "Cancel",
      id: "imageDownloadDialog",
      schema: Spacebars.dot(view.lookup("instance"), "schema")
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("dialogForm"), function() {
      return [ "\n        ", HTML.H5("Please specify the dimensions, filename, and desired type for the output image."), "\n        ", HTML.DIV({
        class: "card-round"
      }, "\n            ", HTML.DIV({
        class: "row m-t-2"
      }, "\n                ", HTML.DIV({
        class: "col-lg-4"
      }, "\n                    ", HTML.TABLE({
        class: "full-width"
      }, "\n                        ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD({
        class: "text-right p-r-1 nowrap"
      }, "Image width (px)"), "\n                                ", HTML.TD(Blaze._TemplateWith(function() {
        return {
          key: Spacebars.call("width"),
          min: Spacebars.call("1"),
          max: Spacebars.call("16384")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputNumber"));
      })), "\n                                ", HTML.TD({
        class: "p-l-1",
        rowspan: "2"
      }, "\n                                    ", HTML.BUTTON({
        class: function() {
          return [ "btn btn-secondary js-keep-aspect ", Blaze.If(function() {
            return Spacebars.call(view.lookup("keepAspect"));
          }, function() {
            return "active";
          }) ];
        },
        title: "Keep aspect ratio"
      }, "\n                                        ", HTML.I({
        class: function() {
          return [ "fa fa-chain", Blaze.Unless(function() {
            return Spacebars.call(view.lookup("keepAspect"));
          }, function() {
            return "-broken";
          }) ];
        }
      }), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD({
        class: "text-right p-r-1 nowrap"
      }, "Image height (px)"), "\n                                ", HTML.TD(Blaze._TemplateWith(function() {
        return {
          key: Spacebars.call("height"),
          min: Spacebars.call("1"),
          max: Spacebars.call("16384")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputNumber"));
      })), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.DIV({
        class: "col-lg-5"
      }, "\n                    ", HTML.TABLE({
        class: "full-width"
      }, "\n                        ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD({
        class: "text-right p-r-1"
      }, "File name"), "\n                                ", HTML.TD(Blaze._TemplateWith(function() {
        return {
          key: Spacebars.call("name")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputText"));
      })), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD({
        class: "text-right p-r-1"
      }, "File type"), "\n                                ", HTML.TD(Blaze._TemplateWith(function() {
        return {
          key: Spacebars.call("type"),
          hideSearch: Spacebars.call(true)
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputSelect"));
      })), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.DIV({
        class: "col-lg-3"
      }, "\n                    ", HTML.TABLE({
        class: "full-width"
      }, "\n                        ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD({
        class: "text-right",
        colspan: "2"
      }, Blaze._TemplateWith(function() {
        return {
          key: Spacebars.call("showAnnotations")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputCheckbox"));
      })), "\n                            "), "\n                            ", Blaze.If(function() {
        return Spacebars.call(view.lookup("showQuality"));
      }, function() {
        return [ "\n                                ", HTML.TR("\n                                    ", HTML.TD({
          class: "text-right p-r-1 nowrap"
        }, "Image quality (%)"), "\n                                    ", HTML.TD(Blaze._TemplateWith(function() {
          return {
            key: Spacebars.call("quality"),
            min: Spacebars.call("1"),
            max: Spacebars.call("100")
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("inputNumber"));
        })), "\n                                "), "\n                            " ];
      }), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
        class: "viewport-element hidden"
      }), "\n        ", HTML.DIV({
        class: "image-preview card-round m-t-2 text-center"
      }, "\n            ", HTML.H4({
        class: "m-t-0"
      }, "Image Preview"), "\n            ", HTML.IMG({
        class: "viewport-preview"
      }), "\n        "), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"downloadDialog.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/downloadDialog/downloadDialog.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var Tracker;
module.watch(require("meteor/tracker"), {
  Tracker: function (v) {
    Tracker = v;
  }
}, 1);
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
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
var SimpleSchema;
module.watch(require("meteor/aldeed:simple-schema"), {
  SimpleSchema: function (v) {
    SimpleSchema = v;
  }
}, 5);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 6);
var cornerstone, cornerstoneTools;
module.watch(require("meteor/ohif:cornerstone"), {
  cornerstone: function (v) {
    cornerstone = v;
  },
  cornerstoneTools: function (v) {
    cornerstoneTools = v;
  }
}, 7);

OHIF.viewerbase.getImageDownloadDialogAnnotationTools = function () {
  return ['length', 'probe', 'simpleAngle', 'arrowAnnotate', 'ellipticalRoi', 'rectangleRoi'];
};

Template.imageDownloadDialog.onCreated(function () {
  var instance = Template.instance();
  instance.schema = new SimpleSchema({
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    name: {
      type: String,
      defaultValue: 'image'
    },
    type: {
      type: String,
      allowedValues: ['jpeg', 'png'],
      valuesLabels: ['JPEG', 'PNG'],
      defaultValue: 'jpeg'
    },
    showAnnotations: {
      type: Boolean,
      label: 'Show Annotations',
      defaultValue: true
    },
    quality: {
      type: Number,
      defaultValue: 100
    }
  });
  instance.changeObserver = new Tracker.Dependency();
  instance.keepAspect = new ReactiveVar(true);
  instance.showAnnotations = new ReactiveVar(false);
  instance.lastImage = {};

  instance.getConfirmCallback = function () {
    return function () {
      instance.downloadImage();
    };
  };
});
Template.imageDownloadDialog.onRendered(function () {
  var instance = Template.instance();
  var viewportUtils = OHIF.viewerbase.viewportUtils;
  instance.$viewportElement = instance.$('.viewport-element');
  instance.viewportElement = instance.$viewportElement[0];
  instance.$viewportPreview = instance.$('.viewport-preview');
  instance.viewportPreview = instance.$viewportPreview[0];
  cornerstone.enable(instance.viewportElement);
  instance.downloadCanvas = $(instance.viewportElement).find('canvas')[0];
  instance.form = instance.$('form').data('component');

  instance.setElementSize = function (element, canvas, size, value) {
    $(element)[size](value);
    canvas[size] = value;
    canvas.style[size] = value + "px";
    instance.form.item(size).$element.val(value);
  };

  instance.toggleAnnotations = function (toggle) {
    var action = toggle ? 'enable' : 'disable';
    var annotationTools = OHIF.viewerbase.getImageDownloadDialogAnnotationTools();
    annotationTools.forEach(function (tool) {
      return cornerstoneTools[tool][action](instance.viewportElement);
    });
  };

  instance.updateViewportPreview = function () {
    instance.$viewportElement.one('cornerstoneimagerendered', function (event) {
      // Wait for the tools to handle CornerstoneImageRendered event
      Tracker.afterFlush(function () {
        var enabledElement = cornerstone.getEnabledElement(event.currentTarget);
        var formData = instance.form.value();
        var image = instance.viewportPreview;
        var type = 'image/' + formData.type;
        var quality = formData.type === 'png' ? 1 : formData.quality / 100;
        var dataUrl = instance.downloadCanvas.toDataURL(type, quality);
        image.src = dataUrl;
        var $element = $(enabledElement.element);
        var width = $element.width();
        var height = $element.height();

        if (width > 512 || height > 512) {
          var multiplier = 512 / Math.max(width, height);
          height *= multiplier;
          width *= multiplier;
        }

        image.width = width;
        image.height = height;
      });
    });
  }; // TODO: Add quality parameter to cornerstoneTools' saveAs method


  instance.downloadImage = function () {
    var formData = instance.form.value();
    var link = document.createElement('a');
    link.download = formData.name + "." + formData.type;
    link.href = instance.viewportPreview.src; // Create a 'fake' click event to trigger the download

    if (document.createEvent) {
      var event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      link.dispatchEvent(event);
    } else if (link.fireEvent) {
      link.fireEvent('onclick');
    }
  };

  instance.autorun(function () {
    instance.changeObserver.depend();
    Session.get('UpdateDownloadViewport');
    var activeViewport = viewportUtils.getActiveViewportElement();

    if (activeViewport) {
      var enabledElement = cornerstone.getEnabledElement(activeViewport);
      var viewport = Object.assign({}, enabledElement.viewport);
      delete viewport.scale;
      viewport.translation = {
        x: 0,
        y: 0
      };
      cornerstone.loadImage(enabledElement.image.imageId).then(function (image) {
        instance.lastImage = image;
        var viewportElement = instance.viewportElement,
            downloadCanvas = instance.downloadCanvas;
        var formData = instance.form.value();
        cornerstone.displayImage(viewportElement, image);
        cornerstone.setViewport(viewportElement, viewport);
        cornerstone.resize(viewportElement, true);
        instance.toggleAnnotations(formData.showAnnotations);
        var width = Math.min(formData.width || image.width, 16384);
        var height = Math.min(formData.height || image.height, 16384);
        instance.setElementSize(viewportElement, downloadCanvas, 'width', width);
        instance.setElementSize(viewportElement, downloadCanvas, 'height', height);
        cornerstone.fitToWindow(viewportElement);
        instance.updateViewportPreview();
      });
    }
  });
});
Template.imageDownloadDialog.events({
  'click .js-keep-aspect': function (event, instance) {
    var currentState = instance.keepAspect.get();
    instance.keepAspect.set(!currentState);
    instance.$('[data-key=width]').trigger('input');
  },
  'change [data-key=showAnnotations], change [data-key=type]': function (event, instance) {
    instance.changeObserver.changed();
  },
  'input [data-key=quality]': function (event, instance) {
    instance.changeObserver.changed();
  },
  'input [data-key=width]': function (event, instance) {
    var viewportElement = instance.viewportElement,
        downloadCanvas = instance.downloadCanvas;
    var formData = instance.form.value();
    var _instance$lastImage = instance.lastImage,
        width = _instance$lastImage.width,
        height = _instance$lastImage.height;
    var newWidth = formData.width;
    instance.setElementSize(viewportElement, downloadCanvas, 'width', newWidth);

    if (instance.keepAspect.get()) {
      var multiplier = newWidth / width;
      var newHeight = Math.round(height * multiplier);
      instance.setElementSize(viewportElement, downloadCanvas, 'height', newHeight);
    }

    instance.changeObserver.changed();
  },
  'input [data-key=height]': function (event, instance) {
    var viewportElement = instance.viewportElement,
        downloadCanvas = instance.downloadCanvas;
    var formData = instance.form.value();
    var _instance$lastImage2 = instance.lastImage,
        width = _instance$lastImage2.width,
        height = _instance$lastImage2.height;
    var newHeight = formData.height;
    instance.setElementSize(viewportElement, downloadCanvas, 'height', newHeight);

    if (instance.keepAspect.get()) {
      var multiplier = newHeight / height;
      var newWidth = Math.round(width * multiplier);
      instance.setElementSize(viewportElement, downloadCanvas, 'width', newWidth);
    }

    instance.changeObserver.changed();
  }
});
Template.imageDownloadDialog.helpers({
  keepAspect: function () {
    return Template.instance().keepAspect.get();
  },
  showQuality: function () {
    var instance = Template.instance();
    instance.changeObserver.depend();
    if (!instance.form) return true;
    return instance.form.item('type').value() === 'jpeg';
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"toolbarSectionButton":{"template.toolbarSectionButton.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/toolbarSectionButton/template.toolbarSectionButton.js             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("toolbarSectionButton");
Template["toolbarSectionButton"] = new Template("Template.toolbarSectionButton", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("."), "buttonTemplateName"));
  }, function() {
    return [ "\n        ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(Spacebars.dot(view.lookup("."), "buttonTemplateName")),
        data: Spacebars.call(view.lookup("."))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n    " ];
  }, function() {
    return [ "\n        ", HTML.DIV({
      id: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));
      },
      tabindex: "1",
      class: function() {
        return [ "toolbarSectionButton rp-x-1 ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "classes")), " ", Spacebars.mustache(view.lookup("activeClass")), " ", Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("or"), Spacebars.dot(view.lookup("."), "disabled"), Spacebars.dataMustache(view.lookup("disableButton")));
        }, function() {
          return "disabled";
        }), " ", Blaze.If(function() {
          return Spacebars.call(Spacebars.dot(view.lookup("."), "subTools"));
        }, function() {
          return "expandable";
        }) ];
      },
      title: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "tooltipTitle"));
      }
    }, "\n            ", HTML.DIV({
      class: "svgContainer"
    }, "\n                ", Blaze.Let({
      svg: function() {
        return Spacebars.call(view.lookup("svgLink"));
      },
      icon: function() {
        return Spacebars.call(view.lookup("iconClasses"));
      }
    }, function() {
      return [ "\n                    ", Blaze.If(function() {
        return Spacebars.call(view.lookup("svg"));
      }, function() {
        return [ "\n                        ", HTML.SVG("\n                            ", HTML.USE({
          "xlink:href": function() {
            return Spacebars.mustache(view.lookup("absoluteUrl"), view.lookup("svg"));
          }
        }), "\n                        "), "\n                    " ];
      }, function() {
        return [ "\n                        ", HTML.I({
          class: function() {
            return Spacebars.mustache(view.lookup("icon"));
          }
        }), "\n                    " ];
      }), "\n                " ];
    }), "\n            "), "\n            ", HTML.DIV({
      class: "buttonLabel"
    }, "\n                ", HTML.SPAN(Blaze.View("lookup:..title", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "title"));
    })), "\n                ", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("."), "subTools"));
    }, function() {
      return [ "\n                    ", HTML.I({
        class: "fa fa-caret-down expanded-status",
        "aria-hidden": "true"
      }), "\n                " ];
    }), "\n            "), "\n            ", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("."), "subTools"));
    }, function() {
      return [ "\n                ", HTML.DIV({
        class: "toolbarSectionDrawerContainer"
      }, "\n                    ", HTML.DIV({
        class: "toolbarSectionDrawer"
      }, "\n                        ", Blaze.Each(function() {
        return {
          _sequence: Spacebars.call(Spacebars.dot(view.lookup("."), "subTools")),
          _variable: "subTool"
        };
      }, function() {
        return [ "\n                            ", Blaze._TemplateWith(function() {
          return Spacebars.call(view.lookup("subTool"));
        }, function() {
          return Spacebars.include(view.lookupTemplate("toolbarSectionButton"));
        }), "\n                        " ];
      }), "\n                    "), "\n                "), "\n            " ];
    }), "\n        "), "\n    " ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"toolbarSectionButton.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/toolbarSectionButton/toolbarSectionButton.js                      //
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
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 2);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 3);
Template.toolbarSectionButton.onCreated(function () {
  var instance = Template.instance();

  instance.isActive = function (activeToolId) {
    OHIF.commands.last.dep.depend();
    var subTools = instance.data.subTools;
    var currentId = instance.data.id;
    var isCurrentTool = currentId === activeToolId;

    var isSubTool = subTools && _.findWhere(subTools, {
      id: activeToolId
    });

    var activeCommandButtons = Session.get('ToolManagerActiveCommandButtons') || [];
    var isActiveCommandButton = activeCommandButtons.indexOf(instance.data.id) !== -1;
    var isActive = typeof instance.data.active === 'function' && instance.data.active(); // Check if the current tool, a sub tool or a command button is active

    return isActive || isCurrentTool || isSubTool || isActiveCommandButton;
  };

  instance.getActiveToolSubProperty = function (propertyName, activeToolId) {
    var instance = Template.instance();
    var subTools = instance.data.subTools;
    var defaultProperty = instance.data[propertyName];
    var currentId = instance.data.id;

    if (subTools && activeToolId !== currentId && instance.isActive(activeToolId)) {
      var subTool = _.findWhere(subTools, {
        id: activeToolId
      });

      return subTool ? subTool[propertyName] : defaultProperty;
    } else {
      return defaultProperty;
    }
  };

  instance.autorun(function (computation) {
    Session.get('ToolManagerActiveToolUpdated'); // Get the last executed command

    var lastCommand = OHIF.commands.last.get(); // Prevent running this computation on its first run

    if (computation.firstRun) return; // Stop here if it's not the last command or if it's already an active tool

    var id = instance.data.id;
    var activeToolId = OHIF.viewerbase.toolManager.getActiveTool();
    if (lastCommand !== id || instance.isActive(activeToolId)) return; // Add an active class to a button for 100ms to give the impression the button was pressed

    var flashButton = function ($element) {
      $element.addClass('active');
      setTimeout(function () {
        if ($element.hasClass('expandable') && $element.find('.toolbarSectionButton.active').length) return;
        var activeToolId = OHIF.viewerbase.toolManager.getActiveTool();
        var isActive = instance.isActive(activeToolId);

        if (!isActive) {
          $element.removeClass('active');
        }
      }, 100);
    }; // Flash the active button


    var $button = instance.$('.toolbarSectionButton').first();
    flashButton($button); // Flash the parent button as well in case of this button is inside a drawer

    var $parentButton = $button.closest('.toolbarSectionButton.expandable');

    if ($parentButton.length) {
      flashButton($parentButton);
    }
  });
});
Template.toolbarSectionButton.helpers({
  activeClass: function () {
    Session.get('ToolManagerActiveToolUpdated');
    var instance = Template.instance();
    var activeToolId = OHIF.viewerbase.toolManager.getActiveTool();
    var isActive = instance.isActive(activeToolId);
    return isActive ? 'active' : '';
  },
  svgLink: function () {
    Session.get('ToolManagerActiveToolUpdated');
    var instance = Template.instance();
    var activeToolId = OHIF.viewerbase.toolManager.getActiveTool();
    var svgLink = instance.getActiveToolSubProperty('svgLink', activeToolId);
    return _.isFunction(svgLink) ? svgLink() : svgLink;
  },
  iconClasses: function () {
    Session.get('ToolManagerActiveToolUpdated');
    var instance = Template.instance();
    var activeToolId = OHIF.viewerbase.toolManager.getActiveTool();
    var iconClasses = instance.getActiveToolSubProperty('iconClasses', activeToolId);
    return _.isFunction(iconClasses) ? iconClasses() : iconClasses;
  },
  disableButton: function () {
    Session.get('activeViewport');
    Session.get('LayoutManagerUpdated');
    var instance = Template.instance();
    var isCommandDisabled = OHIF.commands.isDisabled(instance.data.id);
    var isFunctionDisabled = instance.data.disableFunction && instance.data.disableFunction();
    return isCommandDisabled || isFunctionDisabled;
  }
});
Template.toolbarSectionButton.events({
  'click .toolbarSectionButton:not(.expandable)': function (event, instance) {
    // Prevent the event from bubbling to parent tools
    event.stopPropagation(); // Stop here if the button is disabled

    if ($(event.currentTarget).hasClass('disabled')) return; // Run the command attached to the button

    OHIF.commands.run(instance.data.id);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"toolbarSectionTools":{"template.toolbarSectionTools.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/toolbarSectionTools/template.toolbarSectionTools.js               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("toolbarSectionTools");
Template["toolbarSectionTools"] = new Template("Template.toolbarSectionTools", (function() {
  var view = this;
  return HTML.DIV({
    class: "toolbarSectionTools pull-left m-t-1 rm-l-3"
  }, "\n        ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("toolbarButtons")),
      _variable: "toolbarButton"
    };
  }, function() {
    return [ "\n            ", Blaze._TemplateWith(function() {
      return Spacebars.call(view.lookup("toolbarButton"));
    }, function() {
      return Spacebars.include(view.lookupTemplate("toolbarSectionButton"));
    }), "\n        " ];
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"toolbarSectionTools.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/toolbarSectionTools/toolbarSectionTools.js                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
Template.toolbarSectionTools.events({
  'click .expandable': function (event, instance) {
    var $target = $(event.currentTarget);
    var isExpanded = $target.hasClass('expanded');
    $target.toggleClass('expanded', !isExpanded); // Remove the previously set repositioning css attribute

    var $box = $target.find('.toolbarSectionDrawerContainer:first');
    $box.css('left', ''); // Stop here if the tool group is not expanded

    if (isExpanded) {
      return;
    } // Move the box left or right if it is overflowing the window


    var transitionendHandler = function (event) {
      var originalEvent = event.originalEvent;
      var propertyName = originalEvent && originalEvent.propertyName;

      if (propertyName && propertyName === 'transform') {
        $target.off('transitionend', transitionendHandler);
      } else {
        return;
      }

      var boxWidth = $box.outerWidth();
      var start = $box.offset().left;
      var bodyWidth = $(document.body).outerWidth();
      var end = start + boxWidth;

      if (start < 0) {
        $box.css('left', "calc(50% - " + start + "px)");
      } else if (end > bodyWidth) {
        var diff = end - bodyWidth;
        $box.css('left', "calc(50% - " + diff + "px)");
      }
    }; // Attach the handler to deal with position fixing


    $target.on('transitionend', transitionendHandler);
  },
  'focusout .expandable': function (event, instance) {
    var target = event.target;
    var currentTarget = event.currentTarget; // Postpone the execution to be able to get the focused element

    Meteor.defer(function () {
      var $focused = $(':focus');
      var $expandable = $(currentTarget).closest('.expandable');
      var focusInside = $expandable.find(':focus').length; // Check if the expandable lost the focus

      if (!$focused.length || !focusInside) {
        // Stop here if focus is going from subtool to expandable tool
        if (currentTarget !== target && $focused[0] === currentTarget) {
          return;
        }

        $expandable.removeClass('expanded');
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"confirmDeleteDialog":{"template.confirmDeleteDialog.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/confirmDeleteDialog/template.confirmDeleteDialog.js               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("confirmDeleteDialog");
Template["confirmDeleteDialog"] = new Template("Template.confirmDeleteDialog", (function() {
  var view = this;
  return HTML.DIV({
    id: "confirmDeleteDialog",
    class: "dialog-animated",
    tabindex: "0"
  }, "\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("title"));
  }, function() {
    return [ "\n            ", HTML.H5(Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    })), "\n        " ];
  }, function() {
    return [ "\n            ", HTML.H5("Remove data from Timepoint?"), "\n        " ];
  }), "\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("text"));
  }, function() {
    return [ "\n            ", HTML.P(Blaze.View("lookup:text", function() {
      return Spacebars.mustache(view.lookup("text"));
    })), "\n        " ];
  }, function() {
    return [ "\n            ", HTML.P("Are you sure you would like to remove the measurement data at this timepoint?"), "\n        " ];
  }), HTML.Raw('\n        <button id="cancel" class="btn btn-link" tabindex="1">Cancel</button>\n        <button id="confirm" class="btn btn-primary" tabindex="0">OK</button>\n    '));
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"confirmDeleteDialog.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/confirmDeleteDialog/confirmDeleteDialog.js                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var dialogUtils;
module.watch(require("../../../lib/dialogUtils"), {
  dialogUtils: function (v) {
    dialogUtils = v;
  }
}, 1);
// Global object of key names (TODO: put this somewhere else)
var keys = {
  ESC: 27,
  ENTER: 13
};
Template.confirmDeleteDialog.events({
  'click #cancel, click #close': function () {
    // Action canceled, just close dialog without calling callback
    dialogUtils.closeHandler(false);
  },
  'click #confirm': function () {
    // Action confirmed, close dialog and calls callback, if exists
    dialogUtils.closeHandler();
  },
  'keydown #confirmDeleteDialog': function (e) {
    // Action canceled, just close dialog without calling callback
    if (e.which === keys.ESC) {
      dialogUtils.closeHandler(false);
      return false;
    }

    if (this.keyPressAllowed === false) {
      return;
    } // If Enter is pressed


    if (e.which === keys.ENTER) {
      // Action confirmed, close dialog and calls callback,  if exists
      dialogUtils.closeHandler();
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"textMarkerDialogs":{"template.textMarkerDialogs.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/textMarkerDialogs/template.textMarkerDialogs.js                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("textMarkerDialogs");
Template["textMarkerDialogs"] = new Template("Template.textMarkerDialogs", (function() {
  var view = this;
  return [ HTML.getTag("dialog")({
    id: "textMarkerOptionsDialog",
    oncontextmenu: "return false",
    class: "textMarkerDialog noselect"
  }, "\n        ", HTML.H5("Spine Labels"), "\n        ", HTML.A({
    class: "closeTextMarkerDialogs"
  }, Spacebars.include(view.lookupTemplate("iconCrossCircle"))), "\n        ", HTML.DIV({
    class: "optionsDiv"
  }, "\n            ", HTML.DIV({
    class: "select2-wrapper optionBox"
  }, "\n                ", HTML.LABEL({
    for: "startFrom"
  }, "Label: "), "\n                ", HTML.SELECT({
    name: "start",
    id: "startFrom",
    tabindex: "-1",
    class: "select2"
  }, "\n                    ", HTML.Comment(" Cervical spine !"), "\n                    ", HTML.OPTION({
    value: "C1",
    selected: ""
  }, "C1"), "\n                    ", HTML.OPTION({
    value: "C2"
  }, "C2"), "\n                    ", HTML.OPTION({
    value: "C3"
  }, "C3"), "\n                    ", HTML.OPTION({
    value: "C4"
  }, "C4"), "\n                    ", HTML.OPTION({
    value: "C5"
  }, "C5"), "\n                    ", HTML.OPTION({
    value: "C6"
  }, "C6"), "\n                    ", HTML.OPTION({
    value: "C7"
  }, "C7"), "\n\n                    ", HTML.Comment(" Thoracic spine !"), "\n                    ", HTML.OPTION({
    value: "T1"
  }, "T1"), "\n                    ", HTML.OPTION({
    value: "T2"
  }, "T2"), "\n                    ", HTML.OPTION({
    value: "T3"
  }, "T3"), "\n                    ", HTML.OPTION({
    value: "T4"
  }, "T4"), "\n                    ", HTML.OPTION({
    value: "T5"
  }, "T5"), "\n                    ", HTML.OPTION({
    value: "T6"
  }, "T6"), "\n                    ", HTML.OPTION({
    value: "T7"
  }, "T7"), "\n                    ", HTML.OPTION({
    value: "T8"
  }, "T8"), "\n                    ", HTML.OPTION({
    value: "T9"
  }, "T9"), "\n                    ", HTML.OPTION({
    value: "T10"
  }, "T10"), "\n                    ", HTML.OPTION({
    value: "T11"
  }, "T11"), "\n                    ", HTML.OPTION({
    value: "T12"
  }, "T12"), "\n\n                    ", HTML.Comment(" Lumbar spine !"), "\n                    ", HTML.OPTION({
    value: "L1"
  }, "L1"), "\n                    ", HTML.OPTION({
    value: "L2"
  }, "L2"), "\n                    ", HTML.OPTION({
    value: "L3"
  }, "L3"), "\n                    ", HTML.OPTION({
    value: "L4"
  }, "L4"), "\n                    ", HTML.OPTION({
    value: "L5"
  }, "L5"), "\n                "), "\n            "), "\n            ", HTML.DIV({
    class: "optionBox"
  }, "\n                ", HTML.DIV({
    class: "btn-group iconSwitch",
    "data-toggle": "buttons"
  }, "\n                    ", HTML.LABEL({
    for: "ascending",
    class: "btn btn-link",
    title: "Add labels from head to feet (down) or feet to head (up)",
    "data-toggle": "tooltip",
    "data-container": "body"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    id: "ascending"
  }), " ", HTML.SPAN({
    class: "on"
  }, HTML.I({
    class: "fa fa-long-arrow-up",
    "aria-hidden": "true"
  })), " ", HTML.SPAN({
    class: "off"
  }, HTML.I({
    class: "fa fa-long-arrow-down",
    "aria-hidden": "true"
  })), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.BUTTON({
    id: "clearLabels",
    class: "btn viewerBtn btn-xs",
    type: "button"
  }, "\n                Clear Labels ", HTML.I({
    class: "viewerIcon-clear"
  }), "\n            "), "\n        "), "        \n    "), "\n\n    ", HTML.getTag("dialog")({
    id: "textMarkerRelabelDialog",
    oncontextmenu: "return false",
    class: "textMarkerDialog noselect"
  }, "\n        ", HTML.H5("Change Spine Label"), "\n        ", HTML.DIV({
    class: "relabelOptions"
  }, "\n\n            ", HTML.DIV({
    class: "select2-wrapper optionBox"
  }, "\n                ", HTML.LABEL({
    for: "relabelSelect"
  }, "Label:"), "\n                ", HTML.SELECT({
    name: "relabelSelect",
    class: "relabelSelect"
  }, "\n                    ", HTML.Comment(" Cervical spine !"), "\n                    ", HTML.OPTION({
    value: "C1"
  }, "C1"), "\n                    ", HTML.OPTION({
    value: "C2"
  }, "C2"), "\n                    ", HTML.OPTION({
    value: "C3"
  }, "C3"), "\n                    ", HTML.OPTION({
    value: "C4"
  }, "C4"), "\n                    ", HTML.OPTION({
    value: "C5"
  }, "C5"), "\n                    ", HTML.OPTION({
    value: "C6"
  }, "C6"), "\n                    ", HTML.OPTION({
    value: "C7"
  }, "C7"), "\n\n                    ", HTML.Comment(" Thoracic spine !"), "\n                    ", HTML.OPTION({
    value: "T1"
  }, "T1"), "\n                    ", HTML.OPTION({
    value: "T2"
  }, "T2"), "\n                    ", HTML.OPTION({
    value: "T3"
  }, "T3"), "\n                    ", HTML.OPTION({
    value: "T4"
  }, "T4"), "\n                    ", HTML.OPTION({
    value: "T5"
  }, "T5"), "\n                    ", HTML.OPTION({
    value: "T6"
  }, "T6"), "\n                    ", HTML.OPTION({
    value: "T7"
  }, "T7"), "\n                    ", HTML.OPTION({
    value: "T8"
  }, "T8"), "\n                    ", HTML.OPTION({
    value: "T9"
  }, "T9"), "\n                    ", HTML.OPTION({
    value: "T10"
  }, "T10"), "\n                    ", HTML.OPTION({
    value: "T11"
  }, "T11"), "\n                    ", HTML.OPTION({
    value: "T12"
  }, "T12"), "\n\n                    ", HTML.Comment(" Lumbar spine !"), "\n                    ", HTML.OPTION({
    value: "L1"
  }, "L1"), "\n                    ", HTML.OPTION({
    value: "L2"
  }, "L2"), "\n                    ", HTML.OPTION({
    value: "L3"
  }, "L3"), "\n                    ", HTML.OPTION({
    value: "L4"
  }, "L4"), "\n                    ", HTML.OPTION({
    value: "L5"
  }, "L5"), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
    class: "relabelButtons"
  }, "\n            ", HTML.BUTTON({
    class: "relabelRemove btn btn-xs btn-secondary viewerBtn"
  }, "Delete"), "\n            ", HTML.BUTTON({
    class: "relabelConfirm btn btn-xs viewerBtn"
  }, "Save"), "\n        "), "\n        ", HTML.DIV({
    class: "dialog arrow"
  }, "\n        "), "\n    ") ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"textMarkerDialogs.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/textMarkerDialogs/textMarkerDialogs.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
var toolManager;
module.watch(require("../../../lib/toolManager"), {
  toolManager: function (v) {
    toolManager = v;
  }
}, 2);
var viewportUtils;
module.watch(require("../../../lib/viewportUtils"), {
  viewportUtils: function (v) {
    viewportUtils = v;
  }
}, 3);
Template.textMarkerDialogs.events({
  'change #startFrom': function (e) {
    var config = cornerstoneTools.textMarker.getConfiguration();
    config.current = $(e.target).val(); //console.log("Changed starting point to: " + config.current);
  },
  'change #ascending': function (e) {
    var config = cornerstoneTools.textMarker.getConfiguration();
    config.ascending = $(e.target).is(':checked');
    var currentIndex = config.markers.indexOf(config.current);
    config.current = config.markers[currentIndex];
    var nextMarker = config.current;
    $('#startFrom').val(nextMarker).trigger('change'); //console.log("Changed ascending to: " + config.ascending);
  },
  'click #clearLabels': function () {
    var element = viewportUtils.getActiveViewportElement();
    var toolType = 'textMarker';
    var toolStateManager = cornerstoneTools.globalImageIdSpecificToolStateManager;
    var toolState = toolStateManager.toolState; // We might want to make this a convenience function in cornerstoneTools

    var stack = cornerstoneTools.getToolState(element, 'stack');

    if (stack && stack.data.length && stack.data[0].imageIds.length) {
      var imageIds = stack.data[0].imageIds; // Clear the tool data for each image in the stack

      imageIds.forEach(function (imageId) {
        if (toolState.hasOwnProperty(imageId)) {
          var toolData = toolState[imageId];

          if (toolData.hasOwnProperty(toolType)) {
            delete toolData[toolType];
          }
        }
      });
    }

    cornerstone.updateImage(element);
  },
  'click .closeTextMarkerDialogs': function () {
    var defaultTool = toolManager.getDefaultTool();
    toolManager.setActiveTool(defaultTool);
    document.getElementById('textMarkerOptionsDialog').close();
    $('#spine').removeClass('active');
    $('#' + defaultTool).addClass('active');
  }
});
Template.textMarkerDialogs.onRendered(function () {
  var optionsDialog = $('#textMarkerOptionsDialog');
  optionsDialog.draggable();
  dialogPolyfill.registerDialog(optionsDialog.get(0));
  var relabelDialog = $('#textMarkerRelabelDialog');
  relabelDialog.draggable();
  dialogPolyfill.registerDialog(relabelDialog.get(0));
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.select2-wrapper').length) {
      setTimeout(function () {
        $('#startFrom, .relabelSelect').select2('close');
      }, 200);
    }
  });
  $(document).on('touchmove', function (event) {
    if (!$(event.target).closest('.select2-container').length) {
      setTimeout(function () {
        $('#startFrom, .relabelSelect').select2('close');
      }, 200);
    }
  });
  $(function () {
    FastClick.attach(document.body);
    var $customSelects = $('#startFrom, .relabelSelect');
    $customSelects.select2({
      /**
       * Adds needsclick class to all DOM elements in the Select2 results list
       * so they can be accessible on iOS mobile when FastClick is initiated too.
       */
      templateResult: function (result, container) {
        if (!result.id) {
          return result.text;
        }

        container.className += ' needsclick';
        return result.text;
      },
      placeholder: 'C1',
      minimumResultsForSearch: -1,
      theme: 'viewerDropdown'
    });
    /**
     * Additional to tweaking the templateResult option in Select2,
     * add needsclick class to all DOM elements in the Select2 container,
     * so they can be accessible on iOS mobile when FastClick is initiated too.
     *
     * More info about needsclick:
     * https://github.com/ftlabs/fastclick#ignore-certain-elements-with-needsclick
     *
     */

    $customSelects.each(function (index, el) {
      $(el).data('select2').$container.find('*').addClass('needsclick');
    });
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"seriesQuickSwitch":{"template.seriesQuickSwitch.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/seriesQuickSwitch/template.seriesQuickSwitch.js                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("seriesQuickSwitch");
Template["seriesQuickSwitch"] = new Template("Template.seriesQuickSwitch", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("shallDisplay"));
  }, function() {
    return [ "\n        ", HTML.DIV({
      class: function() {
        return [ "series-quick-switch ", Spacebars.mustache(view.lookup("side")), " clearfix noselect" ];
      }
    }, "\n            ", HTML.DIV({
      class: "series-switch rp-t-1 rp-x-1"
    }, "\n                ", HTML.DIV({
      class: "title-label"
    }, "Series"), "\n                ", HTML.DIV({
      class: "series-box r-font"
    }, "\n                    ", Blaze.Each(function() {
      return {
        _sequence: Spacebars.call(view.lookup("seriesItems")),
        _variable: "seriesItem"
      };
    }, function() {
      return [ "\n                        ", HTML.DIV({
        class: function() {
          return [ "series-item ", Spacebars.mustache(Spacebars.dot(view.lookup("seriesItem"), "class")) ];
        }
      }, Blaze.View("lookup:seriesItem.value", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("seriesItem"), "value"));
      })), "\n                    " ];
    }), "\n                    ", Blaze._TemplateWith(function() {
      return {
        class: Spacebars.call("series-browser"),
        scrollStep: Spacebars.call(201)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("scrollArea"), function() {
        return [ "\n                        ", HTML.DIV({
          class: "clearfix thumbnails-wrapper"
        }, "\n                            ", Blaze._TemplateWith(function() {
          return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."), Spacebars.kw({
            studyMetadata: Spacebars.dot(view.lookup("instance"), "currentStudy")
          }));
        }, function() {
          return Spacebars.include(view.lookupTemplate("studyBrowserSeries"));
        }), "\n                        "), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n            ", HTML.DIV({
      class: "study-switch rp-t-1 rp-x-1"
    }, "\n                ", HTML.DIV({
      class: "title-label"
    }, "Study"), "\n                ", HTML.DIV({
      class: "study-box r-font"
    }, "\n                    ", Blaze._TemplateWith(function() {
      return {
        class: Spacebars.call("study-browser"),
        scrollStep: Spacebars.call(91)
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("scrollArea"), function() {
        return [ "\n                        ", Blaze._TemplateWith(function() {
          return {
            template: Spacebars.call(view.lookup("studyBrowserTemplate")),
            data: Spacebars.call(Spacebars.dataMustache(view.lookup("clone"), view.lookup("."), Spacebars.kw({
              currentStudy: Spacebars.dot(view.lookup("instance"), "currentStudy")
            })))
          };
        }, function() {
          return Spacebars.include(function() {
            return Spacebars.call(Template.__dynamic);
          });
        }), "\n                    " ];
      });
    }), "\n                "), "\n            "), "\n        "), "\n    " ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"seriesQuickSwitch.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/seriesQuickSwitch/seriesQuickSwitch.js                            //
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
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 2);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 3);
Template.seriesQuickSwitch.onCreated(function () {
  var instance = Template.instance(); // Defines the study being shown in the current viewport

  instance.currentStudy = new ReactiveVar(); // Gets the viewport data for the given viewport index

  instance.getViewportData = function (viewportIndex) {
    var layoutManager = OHIF.viewerbase.layoutManager;
    return layoutManager && layoutManager.viewportData && layoutManager.viewportData[viewportIndex];
  }; // Gets the current viewport data


  var viewportIndex = instance.data.viewportIndex;
  instance.study = {};
  instance.lastStudy = {};
  instance.autorun(function () {
    OHIF.viewerbase.layoutManager.observer.depend();
    var viewportData = instance.getViewportData(viewportIndex); // @TypeSafeStudies

    if (viewportData) {
      // Finds the current study and return it
      instance.study = OHIF.viewer.Studies.findBy({
        studyInstanceUid: viewportData.studyInstanceUid
      });
    }

    if (!instance.study) {
      instance.study = OHIF.viewer.Studies.getElementByIndex(0);
    }

    if (!instance.study) {
      return;
    }

    if (instance.study.studyInstanceUid !== instance.lastStudy.studyInstanceUid) {
      // Change the current study to update the thumbnails
      instance.currentStudy.set(instance.study);
      instance.lastStudy = instance.study;
    }
  });
});
Template.seriesQuickSwitch.helpers({
  shallDisplay: function () {
    var instance = Template.instance();
    var _instance$data = instance.data,
        rows = _instance$data.rows,
        columns = _instance$data.columns;
    return OHIF.viewer.displaySeriesQuickSwitch && rows === 1 && columns <= 2;
  },
  side: function () {
    var instance = Template.instance();
    var _instance$data2 = instance.data,
        columns = _instance$data2.columns,
        viewportIndex = _instance$data2.viewportIndex;
    if (columns === 1) return '';
    return viewportIndex === 0 ? 'left' : 'right';
  },
  seriesItems: function () {
    var instance = Template.instance();
    OHIF.viewerbase.layoutManager.observer.depend();
    var viewportIndex = instance.data.viewportIndex;
    var viewportData = OHIF.viewerbase.layoutManager.viewportData[viewportIndex];
    var study = instance.currentStudy.get();
    var seriesItems = [];
    var displaySets = study.displaySets;

    if (!displaySets.length) {
      displaySets = OHIF.viewerbase.sortingManager.getDisplaySets(study);
      study.displaySets = displaySets;
      study.setDisplaySets(displaySets);
      study.forEachDisplaySet(function (displaySet) {
        OHIF.viewerbase.stackManager.makeAndAddStack(study, displaySet);
      });
    }

    var items = displaySets.length;

    for (var i = 0; i < items; i++) {
      var displaySet = displaySets[i];
      var item = {
        "class": ''
      };
      seriesItems.push(item);

      if (i === 8 && items !== 9) {
        item.class += ' count';
        item.value = items;
        break;
      }

      if (displaySet.displaySetInstanceUid === viewportData.displaySetInstanceUid) {
        item.class += ' active';
      }
    }

    return seriesItems;
  },
  studyBrowserTemplate: function () {
    return OHIF.viewer.quickSwitchStudyBrowserTemplate || 'studyBrowserQuickSwitch';
  }
});
Template.seriesQuickSwitch.events({
  'mouseenter .series-switch, rescale .series-switch': function (event, instance) {
    // Control the width of the series browser
    var $switch = $(event.currentTarget);
    var $seriesBrowser = $switch.find('.series-browser');
    var $seriesQuickSwitch = $switch.closest('.series-quick-switch');
    var isRight = $seriesQuickSwitch.hasClass('right');
    var switchOffsetLeft = $switch.offset().left;
    var switchOuterWidth = $switch.outerWidth();
    var browserWidth;

    if (isRight) {
      browserWidth = $(window).width() - switchOffsetLeft;
    } else {
      browserWidth = switchOffsetLeft + switchOuterWidth;
    }

    $seriesBrowser.width(browserWidth - browserWidth % 240);
    var $quickSwitch = instance.$('.series-quick-switch');

    if ($quickSwitch.is(':hover')) {
      $quickSwitch.addClass('series-triggered');
    }
  },
  'mouseleave .series-browser': function (event, instance) {
    $(event.currentTarget).children('.scrollable').stop().animate({
      scrollTop: 0
    }, 300, 'swing');
  },
  'mouseleave .series-quick-switch': function (event, instance) {
    $(event.currentTarget).removeClass('series-triggered');
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"studySeriesQuickSwitch":{"template.studySeriesQuickSwitch.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/studySeriesQuickSwitch/template.studySeriesQuickSwitch.js         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("studySeriesQuickSwitch");
Template["studySeriesQuickSwitch"] = new Template("Template.studySeriesQuickSwitch", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "quickSwitchWrapper ", Spacebars.mustache(view.lookup("side")) ];
    }
  }, "\n        ", HTML.DIV({
    class: function() {
      return [ "quickSwitch js-quick-switch clearfix ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("eq"), view.lookup("side"), "right");
      }, function() {
        return "rp-l-3";
      }), Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("eq"), view.lookup("side"), "left");
      }, function() {
        return "rp-r-3";
      }) ];
    }
  }, "\n            ", HTML.DIV({
    class: function() {
      return [ "switchSection switchSectionStudy rp-t-1 rp-x-1 ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("eq"), view.lookup("side"), "right");
      }, function() {
        return "pull-left";
      }, function() {
        return "pull-right";
      }) ];
    }
  }, "\n                ", HTML.Raw('<div class="label">Study</div>'), "\n                ", HTML.DIV({
    class: "studySwitch"
  }, "\n                    ", HTML.Raw('<div class="studyBox"></div>'), "\n                    ", HTML.DIV({
    class: "switchHover studyHover clearfix"
  }, "\n                        ", HTML.DIV({
    class: function() {
      return [ "scrollArea ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("isMac"));
      }, function() {
        return "is-mac";
      }) ];
    }
  }, "\n                            ", Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."), Spacebars.kw({
      timepointViewType: "key"
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("studyTimepointBrowser"));
  }), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    class: function() {
      return [ "switchSection switchSectionSeries rp-t-1 rp-x-1 ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("eq"), view.lookup("side"), "right");
      }, function() {
        return "pull-left";
      }, function() {
        return "pull-right";
      }) ];
    }
  }, "\n                ", Blaze.Let({
    thumbnailsList: function() {
      return Spacebars.call(Spacebars.dataMustache(view.lookup("studyThumbnails"), view.lookup("currentStudy")));
    }
  }, function() {
    return [ "\n                    ", HTML.DIV({
      class: "label"
    }, "Series"), "\n                    ", HTML.DIV({
      class: "seriesSwitch clearfix"
    }, "\n                        ", Blaze.Each(function() {
      return {
        _sequence: Spacebars.call(view.lookup("thumbnailsList")),
        _variable: "thumbnail"
      };
    }, function() {
      return [ "\n                            ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("lt"), view.lookup("@index"), 8);
      }, function() {
        return [ "\n                                ", HTML.DIV({
          class: function() {
            return [ "seriesItem ", Blaze.If(function() {
              return Spacebars.dataMustache(view.lookup("eq"), view.lookup("side"), "right");
            }, function() {
              return "pull-left";
            }, function() {
              return "pull-right";
            }), " ", Blaze.If(function() {
              return Spacebars.dataMustache(view.lookup("isDisplaySetActive"), Spacebars.dot(view.lookup("thumbnail"), "stack", "displaySetInstanceUid"), view.lookup("viewportIndex"));
            }, function() {
              return "active";
            }) ];
          }
        }), "\n                            " ];
      }, function() {
        return [ "\n                                ", Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("eq"), view.lookup("@index"), 8);
        }, function() {
          return [ "\n                                    ", HTML.DIV({
            class: function() {
              return [ "seriesItem count ", Blaze.If(function() {
                return Spacebars.dataMustache(view.lookup("eq"), view.lookup("side"), "right");
              }, function() {
                return "pull-left";
              }, function() {
                return "pull-right";
              }) ];
            }
          }, Blaze.View("lookup:thumbnailsList.length", function() {
            return Spacebars.mustache(Spacebars.dot(view.lookup("thumbnailsList"), "length"));
          })), "\n                                " ];
        }), "\n                            " ];
      }), "\n                        " ];
    }), "\n                        ", HTML.DIV({
      class: "switchHover seriesHover clearfix"
    }, "\n                            ", HTML.DIV({
      class: function() {
        return [ "scrollArea ", Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("isMac"));
        }, function() {
          return "is-mac";
        }) ];
      }
    }, "\n                                ", HTML.DIV({
      class: "thumbnailsWrapper"
    }, "\n                                    ", Blaze.Each(function() {
      return {
        _sequence: Spacebars.call(view.lookup("thumbnailsList")),
        _variable: "thumbnail"
      };
    }, function() {
      return [ "\n                                        ", Blaze._TemplateWith(function() {
        return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."), Spacebars.kw({
          thumbnail: view.lookup("thumbnail")
        }));
      }, function() {
        return Spacebars.include(view.lookupTemplate("thumbnailEntry"));
      }), "\n                                    " ];
    }), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                " ];
  }), "\n            "), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studySeriesQuickSwitch.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/studySeriesQuickSwitch/studySeriesQuickSwitch.js                  //
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
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 2);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 3);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 4);
Template.studySeriesQuickSwitch.onCreated(function () {
  var instance = Template.instance(); // Defines the study being shown in the current viewport

  instance.data.currentStudy = new ReactiveVar(); // Gets the viewport data for the given viewport index

  instance.getViewportData = function (viewportIndex) {
    var layoutManager = OHIF.viewerbase.layoutManager;
    return layoutManager && layoutManager.viewportData && layoutManager.viewportData[viewportIndex];
  }; // Gets the current viewport data


  var viewportIndex = instance.data.viewportIndex;
  instance.study = {};
  instance.lastStudy = {};
  instance.autorun(function () {
    Session.get('LayoutManagerUpdated');
    var viewportData = instance.getViewportData(viewportIndex); // @TypeSafeStudies

    if (viewportData) {
      // Finds the current study and return it
      instance.study = OHIF.viewer.Studies.findBy({
        studyInstanceUid: viewportData.studyInstanceUid
      });
    } else {
      instance.study = OHIF.viewer.Studies.getElementByIndex(0);
    }

    if (!instance.study) {
      return;
    }

    if (instance.study.studyInstanceUid !== instance.lastStudy.studyInstanceUid) {
      // Change the current study to update the thumbnails
      instance.data.currentStudy.set(instance.study);
      instance.lastStudy = instance.study;
    }
  });
});

var checkScrollArea = function (element) {
  var scrollHeight = element.scrollHeight,
      offsetHeight = element.offsetHeight,
      scrollTop = element.scrollTop;
  var matrix = $(element).find('.thumbnailsWrapper').css('transform');
  var translateY = 0;

  if (matrix && matrix !== 'none') {
    translateY = parseInt(matrix.match(/-?[\d\.]+/g)[5]);
  }

  if (scrollHeight > offsetHeight + scrollTop + translateY) {
    element.classList.add('show-scroll-indicator-down');
  } else {
    element.classList.remove('show-scroll-indicator-down');
  }

  if (scrollTop > 0) {
    element.classList.add('show-scroll-indicator-up');
  } else {
    element.classList.remove('show-scroll-indicator-up');
  }
};

Template.studySeriesQuickSwitch.events({
  'mouseenter .js-quick-switch, mouseenter .js-quick-switch .switchSectionSeries': function (event, instance) {
    instance.$('.quickSwitchWrapper').addClass('overlay');
    $(event.currentTarget).addClass('hover');
    instance.$('.scrollArea').each(function (index, scrollAreaElement) {
      return checkScrollArea(scrollAreaElement);
    });
  },
  'mouseleave .js-quick-switch': function (event, instance) {
    instance.$('.js-quick-switch, .switchSectionSeries').removeClass('hover');
    instance.$('.quickSwitchWrapper').removeClass('overlay');
  },
  'click .thumbnailEntry': function (event, instance) {
    // Close the quick switch if we have selected a series
    instance.$('.js-quick-switch, .switchSectionSeries').removeClass('hover');
    instance.$('.quickSwitchWrapper').removeClass('overlay');
  },
  'click .study-browser-item': function (event, instance) {
    instance.$('.switchSectionSeries').addClass('hover');
  },
  'scroll .scrollArea': function (event) {
    checkScrollArea(event.currentTarget);
  }
});
Template.studySeriesQuickSwitch.helpers({
  // Get the current study
  currentStudy: function () {
    return Template.instance().data.currentStudy.get();
  },
  // Check if is Mac OS
  // This is necessary due to fix scrollbar space only in browsers in Mac OS:
  // Since Lion version, the scrollbar is visible only when user scrolls a div
  // As scrollbar is hidden, the space added to hide it in Windows browsers
  // is not enough in Mac OS. For WebKit (Safari and Chrome in Mac OS) there is a CSS
  // solution using ::-webkit-scrollbar, but unfortunately doesn't work for Firefox
  // JS seems to be the only solution for now:
  // - http://stackoverflow.com/questions/6165472/custom-css-scrollbar-for-firefox/6165489#6165489
  // - http://stackoverflow.com/questions/18317634/force-visible-scrollbar-in-firefox-on-mac-os-x/18318273
  isMac: function () {
    return window.navigator.appVersion.indexOf('Mac');
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"studyTimepointBrowser":{"template.studyTimepoint.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/studyTimepointBrowser/template.studyTimepoint.js                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("studyTimepoint");
Template["studyTimepoint"] = new Template("Template.studyTimepoint", (function() {
  var view = this;
  return HTML.DIV({
    class: "studyTimepointWrapper"
  }, "\n        ", HTML.DIV({
    class: "studyTimepoint"
  }, "\n            ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(view.lookup("studies")),
      _variable: "study"
    };
  }, function() {
    return [ "\n                ", Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."), Spacebars.kw({
        study: view.lookup("study"),
        active: Spacebars.dataMustache(view.lookup("isActive"), view.lookup("study"))
      }));
    }, function() {
      return Spacebars.include(view.lookupTemplate("studyTimepointStudy"));
    }), "\n            " ];
  }), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studyTimepoint.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/studyTimepointBrowser/studyTimepoint.js                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 1);
Template.studyTimepoint.onCreated(function () {
  var instance = Template.instance();
  var data = instance.data;
  instance.isActive = {};

  if (data.isUnassociatedStudy === true && data.studyInstanceUids.length === 1) {
    instance.isActive[data.studyInstanceUids[0]] = true;
  }
}); // Initialize the timepoint wrapper max-height to enable CSS transition

Template.studyTimepoint.onRendered(function () {
  var instance = Template.instance();
  var $studies = instance.$('.studyTimepoint');
  var $wrapper = $studies.closest('.studyTimepointWrapper');
  var $timepoint = $wrapper.closest('.timepoint-item');
  var studiesVisible = $studies.is(':visible');

  if (!studiesVisible) {
    $timepoint.addClass('active');
  } // Recalculates the timepoint height to make CSS transition smoother


  $studies.trigger('displayStateChanged');

  if (!studiesVisible) {
    $timepoint.removeClass('active');
  }
});
Template.studyTimepoint.events({
  // Changes the selected study
  'selectionChanged .studyTimepoint': function (event, instance, changed) {
    var $selection = $(changed.selection); // Defines where will be the studies searched

    var $studiesTarget = instance.$('.studyTimepoint'); // @TypeSafeStudies

    if (changed.isQuickSwitch) {
      // Changes the current quick switch study
      var study = OHIF.viewer.Studies.findBy({
        studyInstanceUid: changed.studyInstanceUid
      });
      instance.data.currentStudy.set(study); // Changes the target to toggle the selection in all the studies

      $studiesTarget = $studiesTarget.closest('.studyTimepointBrowser');
    } // Removes selected state from all studies but the triggered study


    $studiesTarget.find('.study-browser-item').not($selection).removeClass('active');

    if (changed.isQuickSwitch) {
      // Reset active studies map to allow only one active study
      instance.isActive = {}; // Add selected state for the triggered study

      $selection.addClass('active');
    } else {
      var $timepoint = instance.$('.studyTimepoint'); // Set the max-height to inherit to be able to expand the wrapper on its full height

      instance.$('.studyTimepointWrapper').css('max-height', 'inherit'); // Toggle selected state for the triggered study

      $selection.removeClass('loading');
      $selection.toggleClass('active'); // Recalculates the timepoint height to make CSS transition smoother

      var $thumbnails = $selection.find('.study-browser-series');
      $thumbnails.one('transitionend', function () {
        return $timepoint.trigger('displayStateChanged');
      });
    } // Set the current study as active


    instance.isActive[changed.studyInstanceUid] = $selection.hasClass('active');
  },
  // It should be triggered when the timepoint height is changed
  'displayStateChanged .studyTimepoint': function (event, instance) {
    var $timepoint = $(event.currentTarget);
    var $wrapper = $timepoint.closest('.studyTimepointWrapper'); // Set the max-height for the wrapper to make CSS transition smoother

    $wrapper.css('max-height', $timepoint.height());
  }
});
Template.studyTimepoint.helpers({
  isActive: function (study) {
    var instance = Template.instance();

    if (!study.studyInstanceUid) {
      return;
    }

    return instance.isActive[study.studyInstanceUid];
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.studyTimepointBrowser.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/studyTimepointBrowser/template.studyTimepointBrowser.js           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("studyTimepointBrowser");
Template["studyTimepointBrowser"] = new Template("Template.studyTimepointBrowser", (function() {
  var view = this;
  return Blaze.Let({
    timepointList: function() {
      return Spacebars.call(view.lookup("timepoints"));
    }
  }, function() {
    return [ "\n        ", HTML.DIV({
      class: function() {
        return [ "studyTimepointBrowser noselect ", Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("shallShowViewType"), view.lookup("timepointList"));
        }, function() {
          return "viewTypeVisible";
        }) ];
      }
    }, "\n            ", HTML.DIV({
      class: "timepointButtonContainer p-t-2"
    }, "\n                ", Blaze._TemplateWith(function() {
      return Spacebars.call(view.lookup("viewTypeButtonGroupData"));
    }, function() {
      return Spacebars.include(view.lookupTemplate("roundedButtonGroup"));
    }), "\n            "), "\n            ", HTML.DIV({
      class: "studyTimepointScrollArea"
    }, "\n                ", HTML.DIV({
      class: "p-x-1"
    }, "\n                    ", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("timepointList"), "length"));
    }, function() {
      return [ "\n                        ", Blaze.Each(function() {
        return {
          _sequence: Spacebars.call(view.lookup("timepointList")),
          _variable: "timepoint"
        };
      }, function() {
        return [ "\n                            ", HTML.DIV({
          class: "timepoint-browser-item"
        }, "\n                                ", HTML.DIV({
          class: "timepoint-item p-y-2"
        }, "\n                                    ", HTML.DIV({
          class: "timepointHeader"
        }, "\n                                        ", HTML.DIV({
          class: "timepoint-details clearfix"
        }, "\n                                            ", HTML.DIV({
          class: "timepoint-title pull-left"
        }, "\n                                                ", Blaze.View("lookup:timepointApi.title", function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("timepointApi"), "title"), view.lookup("timepoint"));
        }), "\n                                            "), "\n                                            ", HTML.DIV({
          class: "timepoint-expand-icon pull-right"
        }, "\n                                                ", HTML.I({
          class: "fa fa-chevron-down"
        }), "\n                                            "), "\n                                            ", HTML.DIV({
          class: "timepoint-date pull-right m-r-1"
        }, Blaze.View("lookup:formatDA", function() {
          return Spacebars.mustache(view.lookup("formatDA"), Spacebars.dot(view.lookup("timepoint"), "earliestDate"), "D-MMM-YYYY");
        })), "\n                                        "), "\n                                        ", HTML.DIV({
          class: "timepoint-summary"
        }, Blaze.View("lookup:modalitiesSummary", function() {
          return Spacebars.mustache(view.lookup("modalitiesSummary"), view.lookup("timepoint"));
        })), "\n                                    "), "\n                                    ", Blaze._TemplateWith(function() {
          return {
            studies: Spacebars.call(Spacebars.dataMustache(view.lookup("studies"), view.lookup("timepoint"))),
            index: Spacebars.call(view.lookup("@index")),
            viewportIndex: Spacebars.call(Spacebars.dot(view.lookup("."), "viewportIndex")),
            currentStudy: Spacebars.call(Spacebars.dot(view.lookup("."), "currentStudy"))
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("studyTimepoint"));
        }), "\n                                "), "\n                            "), "\n                            ", HTML.HR(), "\n                        " ];
      }), "\n                        ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("and"), Spacebars.dot(view.lookup("."), "currentStudy"), Spacebars.dataMustache(view.lookup("not"), view.lookup("showAdditionalTimepoints")), view.lookup("hasAdditionalTimepoints"));
      }, function() {
        return [ "\n                            ", HTML.DIV({
          class: "study-item-box additional"
        }, "\n                                Show additional timepoints\n                            "), "\n                        " ];
      }), "\n                    " ];
    }, function() {
      return [ "\n                        ", HTML.DIV({
        class: "p-t-2"
      }, "\n                            ", Blaze._TemplateWith(function() {
        return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."), Spacebars.kw({
          studies: view.lookup("studies")
        }));
      }, function() {
        return Spacebars.include(view.lookupTemplate("studyTimepoint"));
      }), "\n                        "), "\n                    " ];
    }), "\n                "), "\n            "), "\n        "), "\n    " ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studyTimepointBrowser.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/studyTimepointBrowser/studyTimepointBrowser.js                    //
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

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 3);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 4);
var OHIFError;
module.watch(require("../../../lib/classes/OHIFError"), {
  OHIFError: function (v) {
    OHIFError = v;
  }
}, 5);
Template.studyTimepointBrowser.onCreated(function () {
  var instance = Template.instance(); // Reactive variable to control the view type for all or key timepoints

  instance.timepointViewType = new ReactiveVar(instance.data.timepointViewType); // Defines whether to show all key timepoints or only the current one

  instance.showAdditionalTimepoints = new ReactiveVar(true); // Return the current study if it's defined

  instance.getCurrentStudy = function () {
    return instance.data.currentStudy && instance.data.currentStudy.get();
  }; // Get the studies for a specific timepoint


  instance.getStudies = function (timepoint) {
    // @TypeSafeStudies
    if (!timepoint) {
      return OHIF.viewer.Studies.all();
    }

    return timepoint.studyInstanceUids.map(function (studyInstanceUid) {
      var query = {
        studyInstanceUid: studyInstanceUid
      };
      var loadedStudy = OHIF.viewer.Studies.findBy(query);
      if (loadedStudy) return loadedStudy;
      var notYetLoaded = OHIF.studylist.collections.Studies.findOne(query);
      if (notYetLoaded) return notYetLoaded; // const studyData = _.findWhere(timepoint.studiesData, query);
      // if (studyData) return studyData;

      throw new OHIFError("No study data available for Study: " + studyInstanceUid);
    });
  };
});
Template.studyTimepointBrowser.onRendered(function () {
  var instance = Template.instance(); // Collapse all timepoints but first when timepoint view type changes

  instance.autorun(function () {
    // Runs this computation every time the timepointViewType is changed
    var type = instance.timepointViewType.get(); // Removes all active classes to collapse the timepoints and studies

    instance.$('.timepoint-item, .study-browser-item').removeClass('active');

    if (type === 'key' && !instance.data.currentStudy) {
      // Show only first timepoint expanded for key timepoints
      instance.$('.timepoint-item:first').addClass('active');
    }
  }); // Expand only the timepoints with loaded studies in viewports

  var lastStudy;
  var activeStudiesUids = []; // Wait for rerendering and set the timepoint as active

  instance.refreshActiveStudies = function () {
    return Tracker.afterFlush(function () {
      _.each(activeStudiesUids, function (studyInstanceUid) {
        instance.$(".study-browser-item[data-uid='" + studyInstanceUid + "']").addClass('active');
      }); // Show only first timepoint expanded for key timepoints


      instance.$('.timepoint-item:first').addClass('active');
    });
  };

  instance.autorun(function () {
    // Runs this computation every time the curenty study is changed
    var currentStudy = instance.data.currentStudy && instance.data.currentStudy.get(); // Stop here if there's no current study set

    if (!currentStudy) {
      return;
    } // Check if the study really changed and update the last study


    if (currentStudy !== lastStudy) {
      instance.showAdditionalTimepoints.set(false);
      lastStudy = currentStudy;
      activeStudiesUids = [currentStudy.studyInstanceUid];
    }

    instance.refreshActiveStudies();
  });
});
Template.studyTimepointBrowser.events({
  'click .timepointHeader': function (event, instance) {
    var $timepoint = $(event.currentTarget).closest('.timepoint-item'); // Recalculates the timepoint height to make CSS transition smoother

    $timepoint.find('.studyTimepoint').trigger('displayStateChanged'); // Toggle active class to group/ungroup timepoint studies

    $timepoint.toggleClass('active');
  },
  'click .study-item-box.additional': function (event, instance) {
    // Show all key timepoints
    instance.showAdditionalTimepoints.set(true);
  }
});
Template.studyTimepointBrowser.helpers({
  // Decides if the timepoint view type switch shall be shown or omitted
  shallShowViewType: function (timepointList) {
    var instance = Template.instance();
    return timepointList.length && !instance.data.timepointViewType;
  },
  // Returns the button group data for switching between timepoint view types
  viewTypeButtonGroupData: function () {
    return {
      value: Template.instance().timepointViewType,
      options: [{
        value: 'key',
        text: 'Key Timepoints'
      }, {
        value: 'all',
        text: 'All Timepoints'
      }]
    };
  },
  // Defines whether to show all key timepoints or only the current one
  showAdditionalTimepoints: function () {
    return Template.instance().showAdditionalTimepoints.get();
  },
  hasAdditionalTimepoints: function () {
    var instance = Template.instance();
    var timepointApi = instance.data.timepointApi;
    var allTimepoints = timepointApi && timepointApi.all();
    return allTimepoints && allTimepoints.length > 1;
  },
  // Get the timepoints to be listed
  timepoints: function () {
    var instance = Template.instance(); // Get the current study

    var currentStudy = instance.getCurrentStudy(); // Declare the timepoints

    var timepointApi = instance.data.timepointApi;
    var timepoints;

    if (currentStudy && !instance.showAdditionalTimepoints.get()) {
      // Show only the current study's timepoint
      timepoints = timepointApi.study(currentStudy.studyInstanceUid);
    } else {
      if (!timepointApi) {
        // If there is no timepoint API defined whatsoever, this means that there is no
        // current timepoint ID, so we can just display all of the currently loaded studies
        // in the study sidebar
        timepoints = [];
      } else if (instance.timepointViewType.get() === 'all') {
        // Show all timepoints
        timepoints = timepointApi.all();
      } else {
        // Show only key timepoints
        timepoints = timepointApi.key();
      }
    } // Filter timepoints and show only the current timepoint and previous ones


    var result = [];
    var currentTimepoint = timepointApi.current();

    if (currentTimepoint) {
      timepoints.forEach(function (timepoint) {
        if (timepoint.latestDate.getTime() <= currentTimepoint.latestDate.getTime()) {
          result.push(timepoint);
        }
      });
    } // Returns the timepoints


    return result;
  },
  // Get the studies for a specific timepoint
  studies: function (timepoint) {
    return Template.instance().getStudies(timepoint);
  },
  // Build the modalities summary for all timepoint's studies
  modalitiesSummary: function (timepoint) {
    var instance = Template.instance();
    var studies = instance.getStudies(timepoint);
    var modalities = {};
    studies.forEach(function (study) {
      var modality = study.modalities || 'UN';
      modalities[modality] = modalities[modality] + 1 || 1;
    });
    var result = [];

    _.each(modalities, function (count, modality) {
      result.push(count + " " + modality);
    });

    return result.join(', ');
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.studyTimepointStudy.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/studyTimepointBrowser/template.studyTimepointStudy.js             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("studyTimepointStudy");
Template["studyTimepointStudy"] = new Template("Template.studyTimepointStudy", (function() {
  var view = this;
  return Blaze.Let({
    isSidebar: function() {
      return Spacebars.call(Spacebars.dataMustache(view.lookup("isUndefined"), view.lookup("viewportIndex")));
    }
  }, function() {
    return [ "\n        ", HTML.DIV({
      class: function() {
        return [ "study-browser-item ", Blaze.If(function() {
          return Spacebars.call(view.lookup("isSidebar"));
        }, function() {
          return "studySidebarTimepoint";
        }, function() {
          return "studyQuickSwitchTimepoint";
        }), " ", Blaze.If(function() {
          return Spacebars.call(Spacebars.dot(view.lookup("."), "active"));
        }, function() {
          return "active";
        }), " ", Blaze.If(function() {
          return Spacebars.call(view.lookup("isLoading"));
        }, function() {
          return "loading";
        }) ];
      },
      "data-uid": function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "study", "studyInstanceUid"));
      }
    }, "\n            ", HTML.DIV({
      class: "study-item"
    }, "\n                ", Blaze.If(function() {
      return Spacebars.call(view.lookup("isLoading"));
    }, function() {
      return [ "\n                    ", Spacebars.include(view.lookupTemplate("loadingText")), "\n                " ];
    }), "\n                ", HTML.DIV({
      class: "study-item-box"
    }, "\n                    ", HTML.DIV({
      class: "study-modality"
    }, "\n                        ", HTML.DIV({
      class: "study-modality-text",
      style: function() {
        return Spacebars.mustache(view.lookup("modalityStyle"));
      }
    }, "\n                            ", Blaze.View("lookup:choose", function() {
      return Spacebars.mustache(view.lookup("choose"), Spacebars.dot(view.lookup("instance"), "modalities"), "UN");
    }), "\n                        "), "\n                    "), "\n                    ", HTML.DIV({
      class: "study-text"
    }, "\n                        ", HTML.DIV({
      class: "study-date"
    }, Blaze.View("lookup:formatDA", function() {
      return Spacebars.mustache(view.lookup("formatDA"), Spacebars.dot(view.lookup("instance"), "studyDate"), "D-MMM-YYYY");
    })), "\n                        ", HTML.DIV({
      class: "study-description"
    }, Blaze.View("lookup:instance.studyDescription", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("instance"), "studyDescription"));
    })), "\n                    "), "\n                "), "\n            "), "\n            ", Blaze.If(function() {
      return Spacebars.call(view.lookup("isSidebar"));
    }, function() {
      return [ "\n                ", HTML.DIV({
        class: "study-browser-series"
      }, "\n                    ", HTML.DIV({
        class: "study-series-container"
      }, "\n                        ", Blaze.Each(function() {
        return {
          _sequence: Spacebars.dataMustache(view.lookup("studyThumbnails"), Spacebars.dot(view.lookup("."), "study")),
          _variable: "thumbnail"
        };
      }, function() {
        return [ "\n                            ", Blaze._TemplateWith(function() {
          return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."), Spacebars.kw({
            thumbnail: view.lookup("thumbnail")
          }));
        }, function() {
          return Spacebars.include(view.lookupTemplate("thumbnailEntry"));
        }), "\n                        " ];
      }), "\n                    "), "\n                "), "\n            " ];
    }), "\n        "), "\n    " ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studyTimepointStudy.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/studyTimepointBrowser/studyTimepointStudy.js                      //
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
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 2);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
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
Template.studyTimepointStudy.onCreated(function () {
  var instance = Template.instance();
  instance.loading = new ReactiveVar(false);
  var studyMetadata = OHIF.viewerbase.getStudyMetadata(instance.data.study);
  var firstInstance = studyMetadata.getFirstInstance();

  if (firstInstance) {
    instance.modalities = firstInstance.getRawValue('x00080060');
    instance.studyDescription = firstInstance.getRawValue('x00081030');
    instance.studyDate = firstInstance.getRawValue('x00080020');
  } // Get the current study element


  instance.getStudyElement = function () {
    var isGlobal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var studyInstanceUid = instance.data.study.studyInstanceUid;
    var selector = ".study-browser-item[data-uid='" + studyInstanceUid + "']";
    return isGlobal ? $(selector) : instance.$browser.find(selector);
  };

  instance.isQuickSwitch = function () {
    return !_.isUndefined(instance.data.viewportIndex);
  }; // Set the current study as selected in the studies list


  instance.select = function () {
    var isQuickSwitch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var studyInstanceUid = instance.data.study.studyInstanceUid;
    var $study = instance.getStudyElement();
    var $timepoint = $study.closest('.studyTimepoint');
    var selectionChanged = {
      selection: [$study[0]],
      studyInstanceUid: studyInstanceUid,
      isQuickSwitch: isQuickSwitch
    };
    $timepoint.trigger('selectionChanged', selectionChanged);
  };

  instance.initializeStudyWrapper = function () {
    // Stop here if it's a quick switch
    if (instance.isQuickSwitch()) {
      return;
    }

    var $study = instance.getStudyElement();
    var $thumbnails = $study.find('.study-browser-series');
    $study.addClass('active'); // If element already has max-height property set, .height()
    // will return that value, so remove it to recalculate

    $thumbnails.css('max-height', '');
    $thumbnails.css('max-height', $thumbnails.height());
    $study.removeClass('active'); // Here we add, remove, and add the active class again because this way
    // the max-height animation appears smooth to the user.

    if (instance.data.active) {
      Meteor.setTimeout(function () {
        return $study.addClass('active');
      }, 1);
    }
  };
}); // Initialize the study wrapper max-height to enable CSS transition

Template.studyTimepointStudy.onRendered(function () {
  var instance = Template.instance(); // Keep the study timepoint browser element to manipulate elements even after DOM is removed

  instance.$browser = instance.$('.study-browser-item').closest('.studyTimepointBrowser');
  instance.initializeStudyWrapper();
});
Template.studyTimepointStudy.events({
  // Recalculates the timepoint height to make CSS transition smoother
  'transitionend .study-browser-series': function (event, instance) {
    if (event.target === event.currentTarget) {
      $(event.currentTarget).closest('.studyTimepoint').trigger('displayStateChanged');
    }
  },
  // Transfers the active state to the current study
  'click .studyQuickSwitchTimepoint .study-item-container': function (event, instance) {
    instance.select(true);
  },
  // Set loading state
  'loadStarted .study-browser-item': function (event, instance) {
    instance.loading.set(true);
  },
  // Remove loading state and fix the thumbnails wrappers height
  'loadEnded .study-browser-item': function (event, instance) {
    instance.loading.set(false);
    instance.initializeStudyWrapper();
  },
  // Changes the current study selection for the clicked study
  'click .study-item-box': function (event, instance) {
    var studyData = instance.data.study;
    var studyInstanceUid = studyData.studyInstanceUid;
    var isQuickSwitch = instance.isQuickSwitch(); // @TypeSafeStudies
    // Check if the study already has series data,
    // and if not, retrieve it.

    if (!studyData.seriesList) {
      var alreadyLoaded = OHIF.viewer.Studies.findBy({
        studyInstanceUid: studyInstanceUid
      });

      if (!alreadyLoaded) {
        var $studies = instance.getStudyElement(true);
        $studies.trigger('loadStarted');
        OHIF.studies.retrieveStudyMetadata(studyInstanceUid).then(function (study) {
          instance.data.study = study;
          OHIF.viewer.Studies.insert(study);
          Meteor.setTimeout(function () {
            $studies.trigger('loadEnded');
            instance.select(isQuickSwitch);
          }, 1);
        }).catch(function (error) {
          OHIF.log.error("There was an error trying to retrieve the study's metadata for studyInstanceUid: " + studyInstanceUid);
          OHIF.log.error(error.stack);
          OHIF.log.trace();
        });
      } else {
        studyData.seriesList = alreadyLoaded.seriesList;
        instance.select(isQuickSwitch);
      }
    } else {
      instance.select(isQuickSwitch);
    }
  }
});
Template.studyTimepointStudy.helpers({
  isLoading: function () {
    // @TypeSafeStudies
    var instance = Template.instance();
    var studyData = instance.data.study;
    var alreadyLoaded = OHIF.viewer.Studies.findBy({
      studyInstanceUid: studyData.studyInstanceUid
    });
    return instance.loading.get() && !alreadyLoaded;
  },
  modalities: function () {
    var instance = Template.instance();
    var modalities = instance.modalities || 'UN'; // Replace backslashes with spaces

    return modalities.replace(/\\/g, ' ');
  },
  modalityStyle: function () {
    // Responsively styles the Modality Acronyms for studies
    // with more than one modality
    var instance = Template.instance();
    var modalities = instance.modalities || 'UN';
    var numModalities = modalities.split(/\\/g).length;

    if (numModalities === 1) {
      // If we have only one modality, it should take up the whole div.
      return 'font-size: 1em';
    } else if (numModalities === 2) {
      // If we have two, let them sit side-by-side
      return 'font-size: 0.75em';
    } else {
      // If we have more than two modalities, change the line height to display multiple rows,
      // depending on the number of modalities we need to display.
      var lineHeight = Math.ceil(numModalities / 2) * 1.2;
      return 'line-height: ' + lineHeight + 'em';
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"windowLevelPresets":{"template.form.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/windowLevelPresets/template.form.js                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("windowLevelPresetsForm");
Template["windowLevelPresetsForm"] = new Template("Template.windowLevelPresetsForm", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), Spacebars.kw({
      api: Spacebars.dot(view.lookup("instance"), "api"),
      class: "form-themed"
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("form"), function() {
      return [ "\n        ", HTML.DIV({
        class: "form-content"
      }, "\n            ", HTML.TABLE({
        class: "full-width"
      }, "\n                ", HTML.THEAD("\n                    ", HTML.TR("\n                        ", HTML.TH({
        class: "p-x-1 text-center"
      }, "Preset"), "\n                        ", HTML.TH({
        class: "p-x-1"
      }, "Description"), "\n                        ", HTML.TH({
        class: "p-x-1"
      }, "Window"), "\n                        ", HTML.TH({
        class: "p-x-1"
      }, "Level"), "\n                    "), "\n                "), "\n                ", HTML.TBODY("\n                    ", Blaze.Each(function() {
        return {
          _sequence: Spacebars.call(view.lookup("getPresetsInputInformationList")),
          _variable: "presetInputInformation"
        };
      }, function() {
        return [ "\n                        ", Blaze._TemplateWith(function() {
          return {
            base: Spacebars.call("baseTr"),
            key: Spacebars.call(Spacebars.dataMustache(view.lookup("concat"), view.lookup("@index")))
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("group"), function() {
            return [ "\n                            ", HTML.TD({
              class: "p-x-1 text-center"
            }, Blaze.View("lookup:sum", function() {
              return Spacebars.mustache(view.lookup("sum"), view.lookup("@index"), 1);
            })), "\n                            ", HTML.TD({
              class: "p-x-1"
            }, Blaze._TemplateWith(function() {
              return {
                key: Spacebars.call("id"),
                value: Spacebars.call(Spacebars.dot(view.lookup("presetInputInformation"), "id"))
              };
            }, function() {
              return Spacebars.include(view.lookupTemplate("inputText"));
            })), "\n                            ", HTML.TD({
              class: "p-x-1"
            }, Blaze._TemplateWith(function() {
              return {
                key: Spacebars.call("ww"),
                value: Spacebars.call(Spacebars.dataMustache(view.lookup("filterNaN"), Spacebars.dot(view.lookup("presetInputInformation"), "ww"))),
                dataType: Spacebars.call("Number")
              };
            }, function() {
              return Spacebars.include(view.lookupTemplate("inputText"));
            })), "\n                            ", HTML.TD({
              class: "p-x-1"
            }, Blaze._TemplateWith(function() {
              return {
                key: Spacebars.call("wc"),
                value: Spacebars.call(Spacebars.dataMustache(view.lookup("filterNaN"), Spacebars.dot(view.lookup("presetInputInformation"), "wc"))),
                dataType: Spacebars.call("Number")
              };
            }, function() {
              return Spacebars.include(view.lookupTemplate("inputText"));
            })), "\n                        " ];
          });
        }), "\n                    " ];
      }), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
        class: "form-buttons clearfix"
      }, "\n            ", Blaze._TemplateWith(function() {
        return {
          class: Spacebars.call("btn btn-danger pull-left"),
          action: Spacebars.call("resetDefaults")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("button"), function() {
          return "Reset to Defaults";
        });
      }), "\n            ", Blaze._TemplateWith(function() {
        return {
          class: Spacebars.call("btn btn-primary pull-right"),
          action: Spacebars.call("save")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("button"), function() {
          return "Save";
        });
      }), "\n            ", Blaze._TemplateWith(function() {
        return {
          class: Spacebars.call("btn btn-secondary pull-right m-r-1"),
          tagAttributes: Spacebars.call(Spacebars.dataMustache(view.lookup("extend"), "", Spacebars.kw({
            "data-dismiss": "modal"
          })))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("button"), function() {
          return "Close";
        });
      }), "\n        "), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"form.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/components/viewer/windowLevelPresets/form.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 1);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 2);
Template.windowLevelPresetsForm.onCreated(function () {
  var instance = Template.instance();
  var wlPresets = OHIF.viewerbase.wlPresets;
  instance.api = {
    save: function () {
      var form = instance.$('form').first().data('component');
      var definitions = form.value();
      var promise = wlPresets.store(definitions);
      promise.then(function () {
        return OHIF.ui.notifications.success({
          text: 'The Window/Levels preferences were successfully saved.'
        });
      });
      return promise;
    },
    resetDefaults: function () {
      var dialogOptions = {
        "class": 'themed',
        title: 'Reset Window/Levels Presets',
        message: 'Are you sure you want to reset all the window level presets to their defaults?'
      };
      return OHIF.ui.showDialog('dialogConfirm', dialogOptions).then(function () {
        return wlPresets.resetDefaults();
      });
    }
  };
});
Template.windowLevelPresetsForm.helpers({
  getPresetsInputInformationList: function () {
    OHIF.viewerbase.wlPresets.changeObserver.depend();
    return _.toArray(OHIF.viewer.wlPresets);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"collections.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/collections.js                                                                      //
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
module.watch(require("../namespace"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 1);
var TypeSafeCollection;
module.watch(require("./lib/classes/TypeSafeCollection"), {
  TypeSafeCollection: function (v) {
    TypeSafeCollection = v;
  }
}, 2);
// Create main Studies collection which will be used across the entire viewer...
var Studies = new TypeSafeCollection(); // Make it publicly available on "OHIF.viewer" namespace...

OHIF.viewer.Studies = Studies; // Create main StudyMetadataList collection which will be used across the entire viewer...

var StudyMetadataList = new TypeSafeCollection(); // Make it publicly available on "OHIF.viewer" namespace...

OHIF.viewer.StudyMetadataList = StudyMetadataList; // Subscriptions...

Meteor.subscribe('studyImportStatus');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/index.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Viewerbase;
module.watch(require("../namespace"), {
  Viewerbase: function (v) {
    Viewerbase = v;
  }
}, 0);
module.watch(require("./collections"));
module.watch(require("./lib/debugReactivity"));
var getElementIfNotEmpty;
module.watch(require("./lib/getElementIfNotEmpty"), {
  getElementIfNotEmpty: function (v) {
    getElementIfNotEmpty = v;
  }
}, 1);
var getStackDataIfNotEmpty;
module.watch(require("./lib/getStackDataIfNotEmpty"), {
  getStackDataIfNotEmpty: function (v) {
    getStackDataIfNotEmpty = v;
  }
}, 2);
var switchToImageRelative;
module.watch(require("./lib/switchToImageRelative"), {
  switchToImageRelative: function (v) {
    switchToImageRelative = v;
  }
}, 3);
var switchToImageByIndex;
module.watch(require("./lib/switchToImageByIndex"), {
  switchToImageByIndex: function (v) {
    switchToImageByIndex = v;
  }
}, 4);
var getFrameOfReferenceUID;
module.watch(require("./lib/getFrameOfReferenceUID"), {
  getFrameOfReferenceUID: function (v) {
    getFrameOfReferenceUID = v;
  }
}, 5);
var getImageIdForImagePath;
module.watch(require("./lib/getImageIdForImagePath"), {
  getImageIdForImagePath: function (v) {
    getImageIdForImagePath = v;
  }
}, 6);
var updateCrosshairsSynchronizer;
module.watch(require("./lib/updateCrosshairsSynchronizer"), {
  updateCrosshairsSynchronizer: function (v) {
    updateCrosshairsSynchronizer = v;
  }
}, 7);
var getImageId;
module.watch(require("./lib/getImageId"), {
  getImageId: function (v) {
    getImageId = v;
  }
}, 8);
var setActiveViewport;
module.watch(require("./lib/setActiveViewport"), {
  setActiveViewport: function (v) {
    setActiveViewport = v;
  }
}, 9);
var setFocusToActiveViewport;
module.watch(require("./lib/setFocusToActiveViewport"), {
  setFocusToActiveViewport: function (v) {
    setFocusToActiveViewport = v;
  }
}, 10);
var getWADORSImageId;
module.watch(require("./lib/getWADORSImageId"), {
  getWADORSImageId: function (v) {
    getWADORSImageId = v;
  }
}, 11);
var updateAllViewports;
module.watch(require("./lib/updateAllViewports"), {
  updateAllViewports: function (v) {
    updateAllViewports = v;
  }
}, 12);
var sortStudy;
module.watch(require("./lib/sortStudy"), {
  sortStudy: function (v) {
    sortStudy = v;
  }
}, 13);
var updateMetaDataManager;
module.watch(require("./lib/updateMetaDataManager"), {
  updateMetaDataManager: function (v) {
    updateMetaDataManager = v;
  }
}, 14);
var updateOrientationMarkers;
module.watch(require("./lib/updateOrientationMarkers"), {
  updateOrientationMarkers: function (v) {
    updateOrientationMarkers = v;
  }
}, 15);
var isImage;
module.watch(require("./lib/isImage"), {
  isImage: function (v) {
    isImage = v;
  }
}, 16);
var getInstanceClassDefaultViewport, setInstanceClassDefaultViewportFunction;
module.watch(require("./lib/instanceClassSpecificViewport"), {
  getInstanceClassDefaultViewport: function (v) {
    getInstanceClassDefaultViewport = v;
  },
  setInstanceClassDefaultViewportFunction: function (v) {
    setInstanceClassDefaultViewportFunction = v;
  }
}, 17);
var displayReferenceLines;
module.watch(require("./lib/displayReferenceLines"), {
  displayReferenceLines: function (v) {
    displayReferenceLines = v;
  }
}, 18);
var getStudyMetadata;
module.watch(require("./lib/getStudyMetadata"), {
  getStudyMetadata: function (v) {
    getStudyMetadata = v;
  }
}, 19);
var imageViewerViewportData;
module.watch(require("./lib/imageViewerViewportData"), {
  imageViewerViewportData: function (v) {
    imageViewerViewportData = v;
  }
}, 20);
var panelNavigation;
module.watch(require("./lib/panelNavigation"), {
  panelNavigation: function (v) {
    panelNavigation = v;
  }
}, 21);
var prepareViewerData;
module.watch(require("./lib/prepareViewerData"), {
  prepareViewerData: function (v) {
    prepareViewerData = v;
  }
}, 22);
var renderViewer;
module.watch(require("./lib/renderViewer"), {
  renderViewer: function (v) {
    renderViewer = v;
  }
}, 23);
var WLPresets;
module.watch(require("./lib/WLPresets"), {
  WLPresets: function (v) {
    WLPresets = v;
  }
}, 24);
var hotkeyUtils;
module.watch(require("./lib/hotkeyUtils"), {
  hotkeyUtils: function (v) {
    hotkeyUtils = v;
  }
}, 25);
var viewportOverlayUtils;
module.watch(require("./lib/viewportOverlayUtils"), {
  viewportOverlayUtils: function (v) {
    viewportOverlayUtils = v;
  }
}, 26);
var viewportUtils;
module.watch(require("./lib/viewportUtils"), {
  viewportUtils: function (v) {
    viewportUtils = v;
  }
}, 27);
var thumbnailDragHandlers;
module.watch(require("./lib/thumbnailDragHandlers"), {
  thumbnailDragHandlers: function (v) {
    thumbnailDragHandlers = v;
  }
}, 28);
var dialogUtils;
module.watch(require("./lib/dialogUtils"), {
  dialogUtils: function (v) {
    dialogUtils = v;
  }
}, 29);
var unloadHandlers;
module.watch(require("./lib/unloadHandlers"), {
  unloadHandlers: function (v) {
    unloadHandlers = v;
  }
}, 30);
var sortingManager;
module.watch(require("./lib/sortingManager"), {
  sortingManager: function (v) {
    sortingManager = v;
  }
}, 31);
var crosshairsSynchronizers;
module.watch(require("./lib/crosshairsSynchronizers"), {
  crosshairsSynchronizers: function (v) {
    crosshairsSynchronizers = v;
  }
}, 32);
var annotateTextUtils;
module.watch(require("./lib/annotateTextUtils"), {
  annotateTextUtils: function (v) {
    annotateTextUtils = v;
  }
}, 33);
var textMarkerUtils;
module.watch(require("./lib/textMarkerUtils"), {
  textMarkerUtils: function (v) {
    textMarkerUtils = v;
  }
}, 34);
var createStacks;
module.watch(require("./lib/createStacks"), {
  createStacks: function (v) {
    createStacks = v;
  }
}, 35);
var StackManager;
module.watch(require("./lib/StackManager"), {
  StackManager: function (v) {
    StackManager = v;
  }
}, 36);
var toolManager;
module.watch(require("./lib/toolManager"), {
  toolManager: function (v) {
    toolManager = v;
  }
}, 37);
var helpers;
module.watch(require("./lib/helpers/"), {
  helpers: function (v) {
    helpers = v;
  }
}, 38);
var sopClassDictionary;
module.watch(require("./lib/sopClassDictionary"), {
  sopClassDictionary: function (v) {
    sopClassDictionary = v;
  }
}, 39);
var DICOMTagDescriptions;
module.watch(require("./lib/DICOMTagDescriptions"), {
  DICOMTagDescriptions: function (v) {
    DICOMTagDescriptions = v;
  }
}, 40);
var ImageSet;
module.watch(require("./lib/classes/ImageSet"), {
  ImageSet: function (v) {
    ImageSet = v;
  }
}, 41);
var LayoutManager;
module.watch(require("./lib/classes/LayoutManager"), {
  LayoutManager: function (v) {
    LayoutManager = v;
  }
}, 42);
var StudyPrefetcher;
module.watch(require("./lib/classes/StudyPrefetcher"), {
  StudyPrefetcher: function (v) {
    StudyPrefetcher = v;
  }
}, 43);
var ResizeViewportManager;
module.watch(require("./lib/classes/ResizeViewportManager"), {
  ResizeViewportManager: function (v) {
    ResizeViewportManager = v;
  }
}, 44);
var StudyLoadingListener;
module.watch(require("./lib/classes/StudyLoadingListener"), {
  StudyLoadingListener: function (v) {
    StudyLoadingListener = v;
  }
}, 45);
var StackLoadingListener;
module.watch(require("./lib/classes/StudyLoadingListener"), {
  StackLoadingListener: function (v) {
    StackLoadingListener = v;
  }
}, 46);
var DICOMFileLoadingListener;
module.watch(require("./lib/classes/StudyLoadingListener"), {
  DICOMFileLoadingListener: function (v) {
    DICOMFileLoadingListener = v;
  }
}, 47);
var StudyMetadata;
module.watch(require("./lib/classes/metadata/StudyMetadata"), {
  StudyMetadata: function (v) {
    StudyMetadata = v;
  }
}, 48);
var SeriesMetadata;
module.watch(require("./lib/classes/metadata/SeriesMetadata"), {
  SeriesMetadata: function (v) {
    SeriesMetadata = v;
  }
}, 49);
var InstanceMetadata;
module.watch(require("./lib/classes/metadata/InstanceMetadata"), {
  InstanceMetadata: function (v) {
    InstanceMetadata = v;
  }
}, 50);
var StudySummary;
module.watch(require("./lib/classes/metadata/StudySummary"), {
  StudySummary: function (v) {
    StudySummary = v;
  }
}, 51);
var TypeSafeCollection;
module.watch(require("./lib/classes/TypeSafeCollection"), {
  TypeSafeCollection: function (v) {
    TypeSafeCollection = v;
  }
}, 52);
var OHIFError;
module.watch(require("./lib/classes/OHIFError"), {
  OHIFError: function (v) {
    OHIFError = v;
  }
}, 53);
var StackImagePositionOffsetSynchronizer;
module.watch(require("./lib/classes/StackImagePositionOffsetSynchronizer"), {
  StackImagePositionOffsetSynchronizer: function (v) {
    StackImagePositionOffsetSynchronizer = v;
  }
}, 54);
var StudyMetadataSource;
module.watch(require("./lib/classes/StudyMetadataSource"), {
  StudyMetadataSource: function (v) {
    StudyMetadataSource = v;
  }
}, 55);
Viewerbase.getElementIfNotEmpty = getElementIfNotEmpty; // getStackDataIfNotEmpty

Viewerbase.getStackDataIfNotEmpty = getStackDataIfNotEmpty; // switchToImageRelative

Viewerbase.switchToImageRelative = switchToImageRelative; // switchToImageByIndex

Viewerbase.switchToImageByIndex = switchToImageByIndex; // getFrameOfReferenceUID

Viewerbase.getFrameOfReferenceUID = getFrameOfReferenceUID; // getImageIdForImagePath

Viewerbase.getImageIdForImagePath = getImageIdForImagePath; // updateCrosshairsSynchronizer

Viewerbase.updateCrosshairsSynchronizer = updateCrosshairsSynchronizer; // getImageId

Viewerbase.getImageId = getImageId; // setActiveViewport

Viewerbase.setActiveViewport = setActiveViewport; // setFocusToActiveViewport

Viewerbase.setFocusToActiveViewport = setFocusToActiveViewport; // getWADORSImageId

Viewerbase.getWADORSImageId = getWADORSImageId; // updateAllViewports

Viewerbase.updateAllViewports = updateAllViewports; // sortStudy

Viewerbase.sortStudy = sortStudy; // updateMetaDataManager

Viewerbase.updateMetaDataManager = updateMetaDataManager; // updateOrientationMarkers

Viewerbase.updateOrientationMarkers = updateOrientationMarkers; // isImage

Viewerbase.isImage = isImage; // getInstanceClassDefaultViewport, setInstanceClassDefaultViewportFunction

Viewerbase.getInstanceClassDefaultViewport = getInstanceClassDefaultViewport;
Viewerbase.setInstanceClassDefaultViewportFunction = setInstanceClassDefaultViewportFunction; // displayReferenceLines

Viewerbase.displayReferenceLines = displayReferenceLines; // getStudyMetadata

Viewerbase.getStudyMetadata = getStudyMetadata;
/**
 * Exported Namespaces (sub-namespaces)
 */
// imageViewerViewportData.*

Viewerbase.imageViewerViewportData = imageViewerViewportData; // panelNavigation.*

Viewerbase.panelNavigation = panelNavigation; // prepareViewerData

Viewerbase.prepareViewerData = prepareViewerData; // renderViewer

Viewerbase.renderViewer = renderViewer; // WLPresets.*

Viewerbase.wlPresets = WLPresets; // hotkeyUtils.*

Viewerbase.hotkeyUtils = hotkeyUtils; // viewportOverlayUtils.*

Viewerbase.viewportOverlayUtils = viewportOverlayUtils; // viewportUtils.*

Viewerbase.viewportUtils = viewportUtils; // thumbnailDragHandlers.*

Viewerbase.thumbnailDragHandlers = thumbnailDragHandlers; // dialogUtils.*

Viewerbase.dialogUtils = dialogUtils; // unloadHandlers.*

Viewerbase.unloadHandlers = unloadHandlers; // sortingManager.*

Viewerbase.sortingManager = sortingManager; // crosshairsSynchronizers.*

Viewerbase.crosshairsSynchronizers = crosshairsSynchronizers; // annotateTextUtils.*

Viewerbase.annotateTextUtils = annotateTextUtils; // textMarkerUtils.*

Viewerbase.textMarkerUtils = textMarkerUtils; // createStacks.*

Viewerbase.createStacks = createStacks;
/**
 * Exported Singletons
 */
// StackManager as "stackManager" (since it's a plain object instance, the exported name starts with a lowercase letter)

Viewerbase.stackManager = StackManager; // toolManager

Viewerbase.toolManager = toolManager;
/**
 * Exported Helpers
 */

Viewerbase.helpers = helpers;
/**
 * Exported Collections
 */
// sopClassDictionary

Viewerbase.sopClassDictionary = sopClassDictionary; // dicomTagDescriptions

Viewerbase.DICOMTagDescriptions = DICOMTagDescriptions;
/**
 * Exported Classes
 */
// ImageSet

Viewerbase.ImageSet = ImageSet; // LayoutManager

Viewerbase.LayoutManager = LayoutManager; // StudyPrefetcher

Viewerbase.StudyPrefetcher = StudyPrefetcher; // ResizeViewportManager

Viewerbase.ResizeViewportManager = ResizeViewportManager; // StudyLoadingListener

Viewerbase.StudyLoadingListener = StudyLoadingListener; // StackLoadingListener

Viewerbase.StackLoadingListener = StackLoadingListener; // DICOMFileLoadingListener

Viewerbase.DICOMFileLoadingListener = DICOMFileLoadingListener; // StudyMetadata, SeriesMetadata, InstanceMetadata

Viewerbase.metadata = {
  StudyMetadata: StudyMetadata,
  SeriesMetadata: SeriesMetadata,
  InstanceMetadata: InstanceMetadata,
  StudySummary: StudySummary
}; // TypeSafeCollection

Viewerbase.TypeSafeCollection = TypeSafeCollection; // OHIFError

Viewerbase.OHIFError = OHIFError; // StackImagePositionOffsetSynchronizer

Viewerbase.StackImagePositionOffsetSynchronizer = StackImagePositionOffsetSynchronizer; // StudyMetadataSource

Viewerbase.StudyMetadataSource = StudyMetadataSource;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"DICOMTagDescriptions.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/DICOMTagDescriptions.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

module.export({
  DICOMTagDescriptions: function () {
    return DICOMTagDescriptions;
  }
});
var NUMBER = 'number';
var STRING = 'string';
var REGEX_TAG = /^x[0-9a-fx]{8}$/;
var DICOMTagDescriptions = Object.create(Object.prototype, {
  _descriptions: {
    configurable: false,
    enumerable: false,
    writable: false,
    value: Object.create(null)
  },
  tagNumberToString: {
    configurable: false,
    enumerable: true,
    writable: false,
    value: function () {
      function tagNumberToString(tag) {
        var string; // by default, undefined is returned...

        if (this.isValidTagNumber(tag)) {
          // if it's a number, build its hexadecimal representation...
          string = 'x' + ('00000000' + tag.toString(16)).substr(-8);
        }

        return string;
      }

      return tagNumberToString;
    }()
  },
  isValidTagNumber: {
    configurable: false,
    enumerable: true,
    writable: false,
    value: function () {
      function isValidTagNumber(tag) {
        return (0, _typeof2.default)(tag) === NUMBER && tag >= 0 && tag <= 0xFFFFFFFF;
      }

      return isValidTagNumber;
    }()
  },
  isValidTag: {
    configurable: false,
    enumerable: true,
    writable: false,
    value: function () {
      function isValidTag(tag) {
        return (0, _typeof2.default)(tag) === STRING ? REGEX_TAG.test(tag) : this.isValidTagNumber(tag);
      }

      return isValidTag;
    }()
  },
  find: {
    configurable: false,
    enumerable: true,
    writable: false,
    value: function () {
      function find(name) {
        var description; // by default, undefined is returned...

        if ((0, _typeof2.default)(name) !== STRING) {
          // if it's a number, a tag string will be returned...
          name = this.tagNumberToString(name);
        }

        if ((0, _typeof2.default)(name) === STRING) {
          description = this._descriptions[name];
        }

        return description;
      }

      return find;
    }()
  },
  init: {
    configurable: false,
    enumerable: true,
    writable: false,
    value: function () {
      function init(descriptionMap) {
        var _hasOwn = Object.prototype.hasOwnProperty;
        var _descriptions = this._descriptions;

        for (var tag in meteorBabelHelpers.sanitizeForInObject(descriptionMap)) {
          if (_hasOwn.call(descriptionMap, tag)) {
            if (!this.isValidTag(tag)) {
              // Skip in case tag is not valid...
              console.info("DICOMTagDescriptions: Invalid tag \"" + tag + "\"...");
              continue;
            }

            if (tag in _descriptions) {
              // Skip in case the tag is duplicated...
              console.info("DICOMTagDescriptions: Duplicated tag \"" + tag + "\"...");
              continue;
            } // Save keyword...


            var keyword = descriptionMap[tag]; // Create a description entry and freeze it...

            var entry = Object.create(null);
            entry.tag = tag;
            entry.keyword = keyword;
            Object.freeze(entry); // Add tag references to entry...

            _descriptions[tag] = entry; // Add keyword references to entry (if not present already)...

            if (keyword in _descriptions) {
              var currentEntry = _descriptions[keyword];
              console.info("DICOMTagDescriptions: Using <" + currentEntry.tag + "," + currentEntry.keyword + "> instead of <" + entry.tag + "," + entry.keyword + "> for keyword \"" + keyword + "\"...");
            } else {
              _descriptions[keyword] = entry;
            }
          }
        } // Freeze internal description map...


        Object.freeze(_descriptions); // Freeze itself...

        Object.freeze(this);
      }

      return init;
    }()
  }
});
/**
 * Map with DICOM Tag Descriptions
 */

var initialTagDescriptionMap = {
  x00020000: 'FileMetaInfoGroupLength',
  x00020001: 'FileMetaInfoVersion',
  x00020002: 'MediaStorageSOPClassUID',
  x00020003: 'MediaStorageSOPInstanceUID',
  x00020010: 'TransferSyntaxUID',
  x00020012: 'ImplementationClassUID',
  x00020013: 'ImplementationVersionName',
  x00020016: 'SourceApplicationEntityTitle',
  x00020100: 'PrivateInformationCreatorUID',
  x00020102: 'PrivateInformation',
  x00041130: 'FileSetID',
  x00041141: 'FileSetDescriptorFileID',
  x00041142: 'SpecificCharacterSetOfFile',
  x00041200: 'FirstDirectoryRecordOffset',
  x00041202: 'LastDirectoryRecordOffset',
  x00041212: 'FileSetConsistencyFlag',
  x00041220: 'DirectoryRecordSequence',
  x00041400: 'OffsetOfNextDirectoryRecord',
  x00041410: 'RecordInUseFlag',
  x00041420: 'LowerLevelDirectoryEntityOffset',
  x00041430: 'DirectoryRecordType',
  x00041432: 'PrivateRecordUID',
  x00041500: 'ReferencedFileID',
  x00041504: 'MRDRDirectoryRecordOffset',
  x00041510: 'ReferencedSOPClassUIDInFile',
  x00041511: 'ReferencedSOPInstanceUIDInFile',
  x00041512: 'ReferencedTransferSyntaxUIDInFile',
  x0004151a: 'ReferencedRelatedSOPClassUIDInFile',
  x00041600: 'NumberOfReferences',
  x00080000: 'IdentifyingGroupLength',
  x00080001: 'LengthToEnd',
  x00080005: 'SpecificCharacterSet',
  x00080006: 'LanguageCodeSequence',
  x00080008: 'ImageType',
  x00080010: 'RecognitionCode',
  x00080012: 'InstanceCreationDate',
  x00080013: 'InstanceCreationTime',
  x00080014: 'InstanceCreatorUID',
  x00080016: 'SOPClassUID',
  x00080018: 'SOPInstanceUID',
  x0008001a: 'RelatedGeneralSOPClassUID',
  x0008001b: 'OriginalSpecializedSOPClassUID',
  x00080020: 'StudyDate',
  x00080021: 'SeriesDate',
  x00080022: 'AcquisitionDate',
  x00080023: 'ContentDate',
  x00080024: 'OverlayDate',
  x00080025: 'CurveDate',
  x0008002a: 'AcquisitionDateTime',
  x00080030: 'StudyTime',
  x00080031: 'SeriesTime',
  x00080032: 'AcquisitionTime',
  x00080033: 'ContentTime',
  x00080034: 'OverlayTime',
  x00080035: 'CurveTime',
  x00080040: 'DataSetType',
  x00080041: 'DataSetSubtype',
  x00080042: 'NuclearMedicineSeriesType',
  x00080050: 'AccessionNumber',
  x00080052: 'QueryRetrieveLevel',
  x00080054: 'RetrieveAETitle',
  x00080056: 'InstanceAvailability',
  x00080058: 'FailedSOPInstanceUIDList',
  x00080060: 'Modality',
  x00080061: 'ModalitiesInStudy',
  x00080062: 'SOPClassesInStudy',
  x00080064: 'ConversionType',
  x00080068: 'PresentationIntentType',
  x00080070: 'Manufacturer',
  x00080080: 'InstitutionName',
  x00080081: 'InstitutionAddress',
  x00080082: 'InstitutionCodeSequence',
  x00080090: 'ReferringPhysicianName',
  x00080092: 'ReferringPhysicianAddress',
  x00080094: 'ReferringPhysicianTelephoneNumber',
  x00080096: 'ReferringPhysicianIDSequence',
  x00080100: 'CodeValue',
  x00080102: 'CodingSchemeDesignator',
  x00080103: 'CodingSchemeVersion',
  x00080104: 'CodeMeaning',
  x00080105: 'MappingResource',
  x00080106: 'ContextGroupVersion',
  x00080107: 'ContextGroupLocalVersion',
  x0008010b: 'ContextGroupExtensionFlag',
  x0008010c: 'CodingSchemeUID',
  x0008010d: 'ContextGroupExtensionCreatorUID',
  x0008010f: 'ContextIdentifier',
  x00080110: 'CodingSchemeIDSequence',
  x00080112: 'CodingSchemeRegistry',
  x00080114: 'CodingSchemeExternalID',
  x00080115: 'CodingSchemeName',
  x00080116: 'CodingSchemeResponsibleOrganization',
  x00080117: 'ContextUID',
  x00080201: 'TimezoneOffsetFromUTC',
  x00081000: 'NetworkID',
  x00081010: 'StationName',
  x00081030: 'StudyDescription',
  x00081032: 'ProcedureCodeSequence',
  x0008103e: 'SeriesDescription',
  x00081040: 'InstitutionalDepartmentName',
  x00081048: 'PhysiciansOfRecord',
  x00081049: 'PhysiciansOfRecordIDSequence',
  x00081050: 'PerformingPhysicianName',
  x00081052: 'PerformingPhysicianIDSequence',
  x00081060: 'NameOfPhysicianReadingStudy',
  x00081062: 'PhysicianReadingStudyIDSequence',
  x00081070: 'OperatorsName',
  x00081072: 'OperatorIDSequence',
  x00081080: 'AdmittingDiagnosesDescription',
  x00081084: 'AdmittingDiagnosesCodeSequence',
  x00081090: 'ManufacturersModelName',
  x00081100: 'ReferencedResultsSequence',
  x00081110: 'ReferencedStudySequence',
  x00081111: 'ReferencedPerformedProcedureStepSequence',
  x00081115: 'ReferencedSeriesSequence',
  x00081120: 'ReferencedPatientSequence',
  x00081125: 'ReferencedVisitSequence',
  x00081130: 'ReferencedOverlaySequence',
  x0008113a: 'ReferencedWaveformSequence',
  x00081140: 'ReferencedImageSequence',
  x00081145: 'ReferencedCurveSequence',
  x0008114a: 'ReferencedInstanceSequence',
  x00081150: 'ReferencedSOPClassUID',
  x00081155: 'ReferencedSOPInstanceUID',
  x0008115a: 'SOPClassesSupported',
  x00081160: 'ReferencedFrameNumber',
  x00081161: 'SimpleFrameList',
  x00081162: 'CalculatedFrameList',
  x00081163: 'TimeRange',
  x00081164: 'FrameExtractionSequence',
  x00081195: 'TransactionUID',
  x00081197: 'FailureReason',
  x00081198: 'FailedSOPSequence',
  x00081199: 'ReferencedSOPSequence',
  x00081200: 'OtherReferencedStudiesSequence',
  x00081250: 'RelatedSeriesSequence',
  x00082110: 'LossyImageCompressionRetired',
  x00082111: 'DerivationDescription',
  x00082112: 'SourceImageSequence',
  x00082120: 'StageName',
  x00082122: 'StageNumber',
  x00082124: 'NumberOfStages',
  x00082127: 'ViewName',
  x00082128: 'ViewNumber',
  x00082129: 'NumberOfEventTimers',
  x0008212a: 'NumberOfViewsInStage',
  x00082130: 'EventElapsedTimes',
  x00082132: 'EventTimerNames',
  x00082133: 'EventTimerSequence',
  x00082134: 'EventTimeOffset',
  x00082135: 'EventCodeSequence',
  x00082142: 'StartTrim',
  x00082143: 'StopTrim',
  x00082144: 'RecommendedDisplayFrameRate',
  x00082200: 'TransducerPosition',
  x00082204: 'TransducerOrientation',
  x00082208: 'AnatomicStructure',
  x00082218: 'AnatomicRegionSequence',
  x00082220: 'AnatomicRegionModifierSequence',
  x00082228: 'PrimaryAnatomicStructureSequence',
  x00082229: 'AnatomicStructureOrRegionSequence',
  x00082230: 'AnatomicStructureModifierSequence',
  x00082240: 'TransducerPositionSequence',
  x00082242: 'TransducerPositionModifierSequence',
  x00082244: 'TransducerOrientationSequence',
  x00082246: 'TransducerOrientationModifierSeq',
  x00082253: 'AnatomicEntrancePortalCodeSeqTrial',
  x00082255: 'AnatomicApproachDirCodeSeqTrial',
  x00082256: 'AnatomicPerspectiveDescrTrial',
  x00082257: 'AnatomicPerspectiveCodeSeqTrial',
  x00083001: 'AlternateRepresentationSequence',
  x00083010: 'IrradiationEventUID',
  x00084000: 'IdentifyingComments',
  x00089007: 'FrameType',
  x00089092: 'ReferencedImageEvidenceSequence',
  x00089121: 'ReferencedRawDataSequence',
  x00089123: 'CreatorVersionUID',
  x00089124: 'DerivationImageSequence',
  x00089154: 'SourceImageEvidenceSequence',
  x00089205: 'PixelPresentation',
  x00089206: 'VolumetricProperties',
  x00089207: 'VolumeBasedCalculationTechnique',
  x00089208: 'ComplexImageComponent',
  x00089209: 'AcquisitionContrast',
  x00089215: 'DerivationCodeSequence',
  x00089237: 'GrayscalePresentationStateSequence',
  x00089410: 'ReferencedOtherPlaneSequence',
  x00089458: 'FrameDisplaySequence',
  x00089459: 'RecommendedDisplayFrameRateInFloat',
  x00089460: 'SkipFrameRangeFlag',
  // x00091001: 'FullFidelity',
  // x00091002: 'SuiteID',
  // x00091004: 'ProductID',
  // x00091027: 'ImageActualDate',
  // x00091030: 'ServiceID',
  // x00091031: 'MobileLocationNumber',
  // x000910e3: 'EquipmentUID',
  // x000910e6: 'GenesisVersionNow',
  // x000910e7: 'ExamRecordChecksum',
  // x000910e9: 'ActualSeriesDataTimeStamp',
  x00100000: 'PatientGroupLength',
  x00100010: 'PatientName',
  x00100020: 'PatientID',
  x00100021: 'IssuerOfPatientID',
  x00100022: 'TypeOfPatientID',
  x00100030: 'PatientBirthDate',
  x00100032: 'PatientBirthTime',
  x00100040: 'PatientSex',
  x00100050: 'PatientInsurancePlanCodeSequence',
  x00100101: 'PatientPrimaryLanguageCodeSeq',
  x00100102: 'PatientPrimaryLanguageCodeModSeq',
  x00101000: 'OtherPatientIDs',
  x00101001: 'OtherPatientNames',
  x00101002: 'OtherPatientIDsSequence',
  x00101005: 'PatientBirthName',
  x00101010: 'PatientAge',
  x00101020: 'PatientSize',
  x00101030: 'PatientWeight',
  x00101040: 'PatientAddress',
  x00101050: 'InsurancePlanIdentification',
  x00101060: 'PatientMotherBirthName',
  x00101080: 'MilitaryRank',
  x00101081: 'BranchOfService',
  x00101090: 'MedicalRecordLocator',
  x00102000: 'MedicalAlerts',
  x00102110: 'Allergies',
  x00102150: 'CountryOfResidence',
  x00102152: 'RegionOfResidence',
  x00102154: 'PatientTelephoneNumbers',
  x00102160: 'EthnicGroup',
  x00102180: 'Occupation',
  x001021a0: 'SmokingStatus',
  x001021b0: 'AdditionalPatientHistory',
  x001021c0: 'PregnancyStatus',
  x001021d0: 'LastMenstrualDate',
  x001021f0: 'PatientReligiousPreference',
  x00102201: 'PatientSpeciesDescription',
  x00102202: 'PatientSpeciesCodeSequence',
  x00102203: 'PatientSexNeutered',
  x00102210: 'AnatomicalOrientationType',
  x00102292: 'PatientBreedDescription',
  x00102293: 'PatientBreedCodeSequence',
  x00102294: 'BreedRegistrationSequence',
  x00102295: 'BreedRegistrationNumber',
  x00102296: 'BreedRegistryCodeSequence',
  x00102297: 'ResponsiblePerson',
  x00102298: 'ResponsiblePersonRole',
  x00102299: 'ResponsibleOrganization',
  x00104000: 'PatientComments',
  x00109431: 'ExaminedBodyThickness',
  x00111010: 'PatientStatus',
  x00120010: 'ClinicalTrialSponsorName',
  x00120020: 'ClinicalTrialProtocolID',
  x00120021: 'ClinicalTrialProtocolName',
  x00120030: 'ClinicalTrialSiteID',
  x00120031: 'ClinicalTrialSiteName',
  x00120040: 'ClinicalTrialSubjectID',
  x00120042: 'ClinicalTrialSubjectReadingID',
  x00120050: 'ClinicalTrialTimePointID',
  x00120051: 'ClinicalTrialTimePointDescription',
  x00120060: 'ClinicalTrialCoordinatingCenter',
  x00120062: 'PatientIdentityRemoved',
  x00120063: 'DeidentificationMethod',
  x00120064: 'DeidentificationMethodCodeSequence',
  x00120071: 'ClinicalTrialSeriesID',
  x00120072: 'ClinicalTrialSeriesDescription',
  x00120084: 'DistributionType',
  x00120085: 'ConsentForDistributionFlag',
  x00180000: 'AcquisitionGroupLength',
  x00180010: 'ContrastBolusAgent',
  x00180012: 'ContrastBolusAgentSequence',
  x00180014: 'ContrastBolusAdministrationRoute',
  x00180015: 'BodyPartExamined',
  x00180020: 'ScanningSequence',
  x00180021: 'SequenceVariant',
  x00180022: 'ScanOptions',
  x00180023: 'MRAcquisitionType',
  x00180024: 'SequenceName',
  x00180025: 'AngioFlag',
  x00180026: 'InterventionDrugInformationSeq',
  x00180027: 'InterventionDrugStopTime',
  x00180028: 'InterventionDrugDose',
  x00180029: 'InterventionDrugSequence',
  x0018002a: 'AdditionalDrugSequence',
  x00180030: 'Radionuclide',
  x00180031: 'Radiopharmaceutical',
  x00180032: 'EnergyWindowCenterline',
  x00180033: 'EnergyWindowTotalWidth',
  x00180034: 'InterventionDrugName',
  x00180035: 'InterventionDrugStartTime',
  x00180036: 'InterventionSequence',
  x00180037: 'TherapyType',
  x00180038: 'InterventionStatus',
  x00180039: 'TherapyDescription',
  x0018003a: 'InterventionDescription',
  x00180040: 'CineRate',
  x00180042: 'InitialCineRunState',
  x00180050: 'SliceThickness',
  x00180060: 'KVP',
  x00180070: 'CountsAccumulated',
  x00180071: 'AcquisitionTerminationCondition',
  x00180072: 'EffectiveDuration',
  x00180073: 'AcquisitionStartCondition',
  x00180074: 'AcquisitionStartConditionData',
  x00180075: 'AcquisitionEndConditionData',
  x00180080: 'RepetitionTime',
  x00180081: 'EchoTime',
  x00180082: 'InversionTime',
  x00180083: 'NumberOfAverages',
  x00180084: 'ImagingFrequency',
  x00180085: 'ImagedNucleus',
  x00180086: 'EchoNumber',
  x00180087: 'MagneticFieldStrength',
  x00180088: 'SpacingBetweenSlices',
  x00180089: 'NumberOfPhaseEncodingSteps',
  x00180090: 'DataCollectionDiameter',
  x00180091: 'EchoTrainLength',
  x00180093: 'PercentSampling',
  x00180094: 'PercentPhaseFieldOfView',
  x00180095: 'PixelBandwidth',
  x00181000: 'DeviceSerialNumber',
  x00181002: 'DeviceUID',
  x00181003: 'DeviceID',
  x00181004: 'PlateID',
  x00181005: 'GeneratorID',
  x00181006: 'GridID',
  x00181007: 'CassetteID',
  x00181008: 'GantryID',
  x00181010: 'SecondaryCaptureDeviceID',
  x00181011: 'HardcopyCreationDeviceID',
  x00181012: 'DateOfSecondaryCapture',
  x00181014: 'TimeOfSecondaryCapture',
  x00181016: 'SecondaryCaptureDeviceManufacturer',
  x00181017: 'HardcopyDeviceManufacturer',
  x00181018: 'SecondaryCaptureDeviceModelName',
  x00181019: 'SecondaryCaptureDeviceSoftwareVers',
  x0018101a: 'HardcopyDeviceSoftwareVersion',
  x0018101b: 'HardcopyDeviceModelName',
  x00181020: 'SoftwareVersion',
  x00181022: 'VideoImageFormatAcquired',
  x00181023: 'DigitalImageFormatAcquired',
  x00181030: 'ProtocolName',
  x00181040: 'ContrastBolusRoute',
  x00181041: 'ContrastBolusVolume',
  x00181042: 'ContrastBolusStartTime',
  x00181043: 'ContrastBolusStopTime',
  x00181044: 'ContrastBolusTotalDose',
  x00181045: 'SyringeCounts',
  x00181046: 'ContrastFlowRate',
  x00181047: 'ContrastFlowDuration',
  x00181048: 'ContrastBolusIngredient',
  x00181049: 'ContrastBolusConcentration',
  x00181050: 'SpatialResolution',
  x00181060: 'TriggerTime',
  x00181061: 'TriggerSourceOrType',
  x00181062: 'NominalInterval',
  x00181063: 'FrameTime',
  x00181064: 'CardiacFramingType',
  x00181065: 'FrameTimeVector',
  x00181066: 'FrameDelay',
  x00181067: 'ImageTriggerDelay',
  x00181068: 'MultiplexGroupTimeOffset',
  x00181069: 'TriggerTimeOffset',
  x0018106a: 'SynchronizationTrigger',
  x0018106c: 'SynchronizationChannel',
  x0018106e: 'TriggerSamplePosition',
  x00181070: 'RadiopharmaceuticalRoute',
  x00181071: 'RadiopharmaceuticalVolume',
  x00181072: 'RadiopharmaceuticalStartTime',
  x00181073: 'RadiopharmaceuticalStopTime',
  x00181074: 'RadionuclideTotalDose',
  x00181075: 'RadionuclideHalfLife',
  x00181076: 'RadionuclidePositronFraction',
  x00181077: 'RadiopharmaceuticalSpecActivity',
  x00181078: 'RadiopharmaceuticalStartDateTime',
  x00181079: 'RadiopharmaceuticalStopDateTime',
  x00181080: 'BeatRejectionFlag',
  x00181081: 'LowRRValue',
  x00181082: 'HighRRValue',
  x00181083: 'IntervalsAcquired',
  x00181084: 'IntervalsRejected',
  x00181085: 'PVCRejection',
  x00181086: 'SkipBeats',
  x00181088: 'HeartRate',
  x00181090: 'CardiacNumberOfImages',
  x00181094: 'TriggerWindow',
  x00181100: 'ReconstructionDiameter',
  x00181110: 'DistanceSourceToDetector',
  x00181111: 'DistanceSourceToPatient',
  x00181114: 'EstimatedRadiographicMagnification',
  x00181120: 'GantryDetectorTilt',
  x00181121: 'GantryDetectorSlew',
  x00181130: 'TableHeight',
  x00181131: 'TableTraverse',
  x00181134: 'TableMotion',
  x00181135: 'TableVerticalIncrement',
  x00181136: 'TableLateralIncrement',
  x00181137: 'TableLongitudinalIncrement',
  x00181138: 'TableAngle',
  x0018113a: 'TableType',
  x00181140: 'RotationDirection',
  x00181141: 'AngularPosition',
  x00181142: 'RadialPosition',
  x00181143: 'ScanArc',
  x00181144: 'AngularStep',
  x00181145: 'CenterOfRotationOffset',
  x00181146: 'RotationOffset',
  x00181147: 'FieldOfViewShape',
  x00181149: 'FieldOfViewDimensions',
  x00181150: 'ExposureTime',
  x00181151: 'XRayTubeCurrent',
  x00181152: 'Exposure',
  x00181153: 'ExposureInMicroAmpSec',
  x00181154: 'AveragePulseWidth',
  x00181155: 'RadiationSetting',
  x00181156: 'RectificationType',
  x0018115a: 'RadiationMode',
  x0018115e: 'ImageAreaDoseProduct',
  x00181160: 'FilterType',
  x00181161: 'TypeOfFilters',
  x00181162: 'IntensifierSize',
  x00181164: 'ImagerPixelSpacing',
  x00181166: 'Grid',
  x00181170: 'GeneratorPower',
  x00181180: 'CollimatorGridName',
  x00181181: 'CollimatorType',
  x00181182: 'FocalDistance',
  x00181183: 'XFocusCenter',
  x00181184: 'YFocusCenter',
  x00181190: 'FocalSpots',
  x00181191: 'AnodeTargetMaterial',
  x001811a0: 'BodyPartThickness',
  x001811a2: 'CompressionForce',
  x00181200: 'DateOfLastCalibration',
  x00181201: 'TimeOfLastCalibration',
  x00181210: 'ConvolutionKernel',
  x00181240: 'UpperLowerPixelValues',
  x00181242: 'ActualFrameDuration',
  x00181243: 'CountRate',
  x00181244: 'PreferredPlaybackSequencing',
  x00181250: 'ReceiveCoilName',
  x00181251: 'TransmitCoilName',
  x00181260: 'PlateType',
  x00181261: 'PhosphorType',
  x00181300: 'ScanVelocity',
  x00181301: 'WholeBodyTechnique',
  x00181302: 'ScanLength',
  x00181310: 'AcquisitionMatrix',
  x00181312: 'InPlanePhaseEncodingDirection',
  x00181314: 'FlipAngle',
  x00181315: 'VariableFlipAngleFlag',
  x00181316: 'SAR',
  x00181318: 'DB-Dt',
  x00181400: 'AcquisitionDeviceProcessingDescr',
  x00181401: 'AcquisitionDeviceProcessingCode',
  x00181402: 'CassetteOrientation',
  x00181403: 'CassetteSize',
  x00181404: 'ExposuresOnPlate',
  x00181405: 'RelativeXRayExposure',
  x00181450: 'ColumnAngulation',
  x00181460: 'TomoLayerHeight',
  x00181470: 'TomoAngle',
  x00181480: 'TomoTime',
  x00181490: 'TomoType',
  x00181491: 'TomoClass',
  x00181495: 'NumberOfTomosynthesisSourceImages',
  x00181500: 'PositionerMotion',
  x00181508: 'PositionerType',
  x00181510: 'PositionerPrimaryAngle',
  x00181511: 'PositionerSecondaryAngle',
  x00181520: 'PositionerPrimaryAngleIncrement',
  x00181521: 'PositionerSecondaryAngleIncrement',
  x00181530: 'DetectorPrimaryAngle',
  x00181531: 'DetectorSecondaryAngle',
  x00181600: 'ShutterShape',
  x00181602: 'ShutterLeftVerticalEdge',
  x00181604: 'ShutterRightVerticalEdge',
  x00181606: 'ShutterUpperHorizontalEdge',
  x00181608: 'ShutterLowerHorizontalEdge',
  x00181610: 'CenterOfCircularShutter',
  x00181612: 'RadiusOfCircularShutter',
  x00181620: 'VerticesOfPolygonalShutter',
  x00181622: 'ShutterPresentationValue',
  x00181623: 'ShutterOverlayGroup',
  x00181624: 'ShutterPresentationColorCIELabVal',
  x00181700: 'CollimatorShape',
  x00181702: 'CollimatorLeftVerticalEdge',
  x00181704: 'CollimatorRightVerticalEdge',
  x00181706: 'CollimatorUpperHorizontalEdge',
  x00181708: 'CollimatorLowerHorizontalEdge',
  x00181710: 'CenterOfCircularCollimator',
  x00181712: 'RadiusOfCircularCollimator',
  x00181720: 'VerticesOfPolygonalCollimator',
  x00181800: 'AcquisitionTimeSynchronized',
  x00181801: 'TimeSource',
  x00181802: 'TimeDistributionProtocol',
  x00181803: 'NTPSourceAddress',
  x00182001: 'PageNumberVector',
  x00182002: 'FrameLabelVector',
  x00182003: 'FramePrimaryAngleVector',
  x00182004: 'FrameSecondaryAngleVector',
  x00182005: 'SliceLocationVector',
  x00182006: 'DisplayWindowLabelVector',
  x00182010: 'NominalScannedPixelSpacing',
  x00182020: 'DigitizingDeviceTransportDirection',
  x00182030: 'RotationOfScannedFilm',
  x00183100: 'IVUSAcquisition',
  x00183101: 'IVUSPullbackRate',
  x00183102: 'IVUSGatedRate',
  x00183103: 'IVUSPullbackStartFrameNumber',
  x00183104: 'IVUSPullbackStopFrameNumber',
  x00183105: 'LesionNumber',
  x00184000: 'AcquisitionComments',
  x00185000: 'OutputPower',
  x00185010: 'TransducerData',
  x00185012: 'FocusDepth',
  x00185020: 'ProcessingFunction',
  x00185021: 'PostprocessingFunction',
  x00185022: 'MechanicalIndex',
  x00185024: 'BoneThermalIndex',
  x00185026: 'CranialThermalIndex',
  x00185027: 'SoftTissueThermalIndex',
  x00185028: 'SoftTissueFocusThermalIndex',
  x00185029: 'SoftTissueSurfaceThermalIndex',
  x00185030: 'DynamicRange',
  x00185040: 'TotalGain',
  x00185050: 'DepthOfScanField',
  x00185100: 'PatientPosition',
  x00185101: 'ViewPosition',
  x00185104: 'ProjectionEponymousNameCodeSeq',
  x00185210: 'ImageTransformationMatrix',
  x00185212: 'ImageTranslationVector',
  x00186000: 'Sensitivity',
  x00186011: 'SequenceOfUltrasoundRegions',
  x00186012: 'RegionSpatialFormat',
  x00186014: 'RegionDataType',
  x00186016: 'RegionFlags',
  x00186018: 'RegionLocationMinX0',
  x0018601a: 'RegionLocationMinY0',
  x0018601c: 'RegionLocationMaxX1',
  x0018601e: 'RegionLocationMaxY1',
  x00186020: 'ReferencePixelX0',
  x00186022: 'ReferencePixelY0',
  x00186024: 'PhysicalUnitsXDirection',
  x00186026: 'PhysicalUnitsYDirection',
  x00186028: 'ReferencePixelPhysicalValueX',
  x0018602a: 'ReferencePixelPhysicalValueY',
  x0018602c: 'PhysicalDeltaX',
  x0018602e: 'PhysicalDeltaY',
  x00186030: 'TransducerFrequency',
  x00186031: 'TransducerType',
  x00186032: 'PulseRepetitionFrequency',
  x00186034: 'DopplerCorrectionAngle',
  x00186036: 'SteeringAngle',
  x00186038: 'DopplerSampleVolumeXPosRetired',
  x00186039: 'DopplerSampleVolumeXPosition',
  x0018603a: 'DopplerSampleVolumeYPosRetired',
  x0018603b: 'DopplerSampleVolumeYPosition',
  x0018603c: 'TMLinePositionX0Retired',
  x0018603d: 'TMLinePositionX0',
  x0018603e: 'TMLinePositionY0Retired',
  x0018603f: 'TMLinePositionY0',
  x00186040: 'TMLinePositionX1Retired',
  x00186041: 'TMLinePositionX1',
  x00186042: 'TMLinePositionY1Retired',
  x00186043: 'TMLinePositionY1',
  x00186044: 'PixelComponentOrganization',
  x00186046: 'PixelComponentMask',
  x00186048: 'PixelComponentRangeStart',
  x0018604a: 'PixelComponentRangeStop',
  x0018604c: 'PixelComponentPhysicalUnits',
  x0018604e: 'PixelComponentDataType',
  x00186050: 'NumberOfTableBreakPoints',
  x00186052: 'TableOfXBreakPoints',
  x00186054: 'TableOfYBreakPoints',
  x00186056: 'NumberOfTableEntries',
  x00186058: 'TableOfPixelValues',
  x0018605a: 'TableOfParameterValues',
  x00186060: 'RWaveTimeVector',
  x00187000: 'DetectorConditionsNominalFlag',
  x00187001: 'DetectorTemperature',
  x00187004: 'DetectorType',
  x00187005: 'DetectorConfiguration',
  x00187006: 'DetectorDescription',
  x00187008: 'DetectorMode',
  x0018700a: 'DetectorID',
  x0018700c: 'DateOfLastDetectorCalibration',
  x0018700e: 'TimeOfLastDetectorCalibration',
  x00187010: 'DetectorExposuresSinceCalibration',
  x00187011: 'DetectorExposuresSinceManufactured',
  x00187012: 'DetectorTimeSinceLastExposure',
  x00187014: 'DetectorActiveTime',
  x00187016: 'DetectorActiveOffsetFromExposure',
  x0018701a: 'DetectorBinning',
  x00187020: 'DetectorElementPhysicalSize',
  x00187022: 'DetectorElementSpacing',
  x00187024: 'DetectorActiveShape',
  x00187026: 'DetectorActiveDimensions',
  x00187028: 'DetectorActiveOrigin',
  x0018702a: 'DetectorManufacturerName',
  x0018702b: 'DetectorManufacturersModelName',
  x00187030: 'FieldOfViewOrigin',
  x00187032: 'FieldOfViewRotation',
  x00187034: 'FieldOfViewHorizontalFlip',
  x00187040: 'GridAbsorbingMaterial',
  x00187041: 'GridSpacingMaterial',
  x00187042: 'GridThickness',
  x00187044: 'GridPitch',
  x00187046: 'GridAspectRatio',
  x00187048: 'GridPeriod',
  x0018704c: 'GridFocalDistance',
  x00187050: 'FilterMaterial',
  x00187052: 'FilterThicknessMinimum',
  x00187054: 'FilterThicknessMaximum',
  x00187060: 'ExposureControlMode',
  x00187062: 'ExposureControlModeDescription',
  x00187064: 'ExposureStatus',
  x00187065: 'PhototimerSetting',
  x00188150: 'ExposureTimeInMicroSec',
  x00188151: 'XRayTubeCurrentInMicroAmps',
  x00189004: 'ContentQualification',
  x00189005: 'PulseSequenceName',
  x00189006: 'MRImagingModifierSequence',
  x00189008: 'EchoPulseSequence',
  x00189009: 'InversionRecovery',
  x00189010: 'FlowCompensation',
  x00189011: 'MultipleSpinEcho',
  x00189012: 'MultiPlanarExcitation',
  x00189014: 'PhaseContrast',
  x00189015: 'TimeOfFlightContrast',
  x00189016: 'Spoiling',
  x00189017: 'SteadyStatePulseSequence',
  x00189018: 'EchoPlanarPulseSequence',
  x00189019: 'TagAngleFirstAxis',
  x00189020: 'MagnetizationTransfer',
  x00189021: 'T2Preparation',
  x00189022: 'BloodSignalNulling',
  x00189024: 'SaturationRecovery',
  x00189025: 'SpectrallySelectedSuppression',
  x00189026: 'SpectrallySelectedExcitation',
  x00189027: 'SpatialPresaturation',
  x00189028: 'Tagging',
  x00189029: 'OversamplingPhase',
  x00189030: 'TagSpacingFirstDimension',
  x00189032: 'GeometryOfKSpaceTraversal',
  x00189033: 'SegmentedKSpaceTraversal',
  x00189034: 'RectilinearPhaseEncodeReordering',
  x00189035: 'TagThickness',
  x00189036: 'PartialFourierDirection',
  x00189037: 'CardiacSynchronizationTechnique',
  x00189041: 'ReceiveCoilManufacturerName',
  x00189042: 'MRReceiveCoilSequence',
  x00189043: 'ReceiveCoilType',
  x00189044: 'QuadratureReceiveCoil',
  x00189045: 'MultiCoilDefinitionSequence',
  x00189046: 'MultiCoilConfiguration',
  x00189047: 'MultiCoilElementName',
  x00189048: 'MultiCoilElementUsed',
  x00189049: 'MRTransmitCoilSequence',
  x00189050: 'TransmitCoilManufacturerName',
  x00189051: 'TransmitCoilType',
  x00189052: 'SpectralWidth',
  x00189053: 'ChemicalShiftReference',
  x00189054: 'VolumeLocalizationTechnique',
  x00189058: 'MRAcquisitionFrequencyEncodeSteps',
  x00189059: 'Decoupling',
  x00189060: 'DecoupledNucleus',
  x00189061: 'DecouplingFrequency',
  x00189062: 'DecouplingMethod',
  x00189063: 'DecouplingChemicalShiftReference',
  x00189064: 'KSpaceFiltering',
  x00189065: 'TimeDomainFiltering',
  x00189066: 'NumberOfZeroFills',
  x00189067: 'BaselineCorrection',
  x00189069: 'ParallelReductionFactorInPlane',
  x00189070: 'CardiacRRIntervalSpecified',
  x00189073: 'AcquisitionDuration',
  x00189074: 'FrameAcquisitionDateTime',
  x00189075: 'DiffusionDirectionality',
  x00189076: 'DiffusionGradientDirectionSequence',
  x00189077: 'ParallelAcquisition',
  x00189078: 'ParallelAcquisitionTechnique',
  x00189079: 'InversionTimes',
  x00189080: 'MetaboliteMapDescription',
  x00189081: 'PartialFourier',
  x00189082: 'EffectiveEchoTime',
  x00189083: 'MetaboliteMapCodeSequence',
  x00189084: 'ChemicalShiftSequence',
  x00189085: 'CardiacSignalSource',
  x00189087: 'DiffusionBValue',
  x00189089: 'DiffusionGradientOrientation',
  x00189090: 'VelocityEncodingDirection',
  x00189091: 'VelocityEncodingMinimumValue',
  x00189093: 'NumberOfKSpaceTrajectories',
  x00189094: 'CoverageOfKSpace',
  x00189095: 'SpectroscopyAcquisitionPhaseRows',
  x00189096: 'ParallelReductFactorInPlaneRetired',
  x00189098: 'TransmitterFrequency',
  x00189100: 'ResonantNucleus',
  x00189101: 'FrequencyCorrection',
  x00189103: 'MRSpectroscopyFOV-GeometrySequence',
  x00189104: 'SlabThickness',
  x00189105: 'SlabOrientation',
  x00189106: 'MidSlabPosition',
  x00189107: 'MRSpatialSaturationSequence',
  x00189112: 'MRTimingAndRelatedParametersSeq',
  x00189114: 'MREchoSequence',
  x00189115: 'MRModifierSequence',
  x00189117: 'MRDiffusionSequence',
  x00189118: 'CardiacTriggerSequence',
  x00189119: 'MRAveragesSequence',
  x00189125: 'MRFOV-GeometrySequence',
  x00189126: 'VolumeLocalizationSequence',
  x00189127: 'SpectroscopyAcquisitionDataColumns',
  x00189147: 'DiffusionAnisotropyType',
  x00189151: 'FrameReferenceDateTime',
  x00189152: 'MRMetaboliteMapSequence',
  x00189155: 'ParallelReductionFactorOutOfPlane',
  x00189159: 'SpectroscopyOutOfPlanePhaseSteps',
  x00189166: 'BulkMotionStatus',
  x00189168: 'ParallelReductionFactSecondInPlane',
  x00189169: 'CardiacBeatRejectionTechnique',
  x00189170: 'RespiratoryMotionCompTechnique',
  x00189171: 'RespiratorySignalSource',
  x00189172: 'BulkMotionCompensationTechnique',
  x00189173: 'BulkMotionSignalSource',
  x00189174: 'ApplicableSafetyStandardAgency',
  x00189175: 'ApplicableSafetyStandardDescr',
  x00189176: 'OperatingModeSequence',
  x00189177: 'OperatingModeType',
  x00189178: 'OperatingMode',
  x00189179: 'SpecificAbsorptionRateDefinition',
  x00189180: 'GradientOutputType',
  x00189181: 'SpecificAbsorptionRateValue',
  x00189182: 'GradientOutput',
  x00189183: 'FlowCompensationDirection',
  x00189184: 'TaggingDelay',
  x00189185: 'RespiratoryMotionCompTechDescr',
  x00189186: 'RespiratorySignalSourceID',
  x00189195: 'ChemicalShiftsMinIntegrateLimitHz',
  x00189196: 'ChemicalShiftsMaxIntegrateLimitHz',
  x00189197: 'MRVelocityEncodingSequence',
  x00189198: 'FirstOrderPhaseCorrection',
  x00189199: 'WaterReferencedPhaseCorrection',
  x00189200: 'MRSpectroscopyAcquisitionType',
  x00189214: 'RespiratoryCyclePosition',
  x00189217: 'VelocityEncodingMaximumValue',
  x00189218: 'TagSpacingSecondDimension',
  x00189219: 'TagAngleSecondAxis',
  x00189220: 'FrameAcquisitionDuration',
  x00189226: 'MRImageFrameTypeSequence',
  x00189227: 'MRSpectroscopyFrameTypeSequence',
  x00189231: 'MRAcqPhaseEncodingStepsInPlane',
  x00189232: 'MRAcqPhaseEncodingStepsOutOfPlane',
  x00189234: 'SpectroscopyAcqPhaseColumns',
  x00189236: 'CardiacCyclePosition',
  x00189239: 'SpecificAbsorptionRateSequence',
  x00189240: 'RFEchoTrainLength',
  x00189241: 'GradientEchoTrainLength',
  x00189295: 'ChemicalShiftsMinIntegrateLimitPPM',
  x00189296: 'ChemicalShiftsMaxIntegrateLimitPPM',
  x00189301: 'CTAcquisitionTypeSequence',
  x00189302: 'AcquisitionType',
  x00189303: 'TubeAngle',
  x00189304: 'CTAcquisitionDetailsSequence',
  x00189305: 'RevolutionTime',
  x00189306: 'SingleCollimationWidth',
  x00189307: 'TotalCollimationWidth',
  x00189308: 'CTTableDynamicsSequence',
  x00189309: 'TableSpeed',
  x00189310: 'TableFeedPerRotation',
  x00189311: 'SpiralPitchFactor',
  x00189312: 'CTGeometrySequence',
  x00189313: 'DataCollectionCenterPatient',
  x00189314: 'CTReconstructionSequence',
  x00189315: 'ReconstructionAlgorithm',
  x00189316: 'ConvolutionKernelGroup',
  x00189317: 'ReconstructionFieldOfView',
  x00189318: 'ReconstructionTargetCenterPatient',
  x00189319: 'ReconstructionAngle',
  x00189320: 'ImageFilter',
  x00189321: 'CTExposureSequence',
  x00189322: 'ReconstructionPixelSpacing',
  x00189323: 'ExposureModulationType',
  x00189324: 'EstimatedDoseSaving',
  x00189325: 'CTXRayDetailsSequence',
  x00189326: 'CTPositionSequence',
  x00189327: 'TablePosition',
  x00189328: 'ExposureTimeInMilliSec',
  x00189329: 'CTImageFrameTypeSequence',
  x00189330: 'XRayTubeCurrentInMilliAmps',
  x00189332: 'ExposureInMilliAmpSec',
  x00189333: 'ConstantVolumeFlag',
  x00189334: 'FluoroscopyFlag',
  x00189335: 'SourceToDataCollectionCenterDist',
  x00189337: 'ContrastBolusAgentNumber',
  x00189338: 'ContrastBolusIngredientCodeSeq',
  x00189340: 'ContrastAdministrationProfileSeq',
  x00189341: 'ContrastBolusUsageSequence',
  x00189342: 'ContrastBolusAgentAdministered',
  x00189343: 'ContrastBolusAgentDetected',
  x00189344: 'ContrastBolusAgentPhase',
  x00189345: 'CTDIvol',
  x00189346: 'CTDIPhantomTypeCodeSequence',
  x00189351: 'CalciumScoringMassFactorPatient',
  x00189352: 'CalciumScoringMassFactorDevice',
  x00189353: 'EnergyWeightingFactor',
  x00189360: 'CTAdditionalXRaySourceSequence',
  x00189401: 'ProjectionPixelCalibrationSequence',
  x00189402: 'DistanceSourceToIsocenter',
  x00189403: 'DistanceObjectToTableTop',
  x00189404: 'ObjectPixelSpacingInCenterOfBeam',
  x00189405: 'PositionerPositionSequence',
  x00189406: 'TablePositionSequence',
  x00189407: 'CollimatorShapeSequence',
  x00189412: 'XA-XRFFrameCharacteristicsSequence',
  x00189417: 'FrameAcquisitionSequence',
  x00189420: 'XRayReceptorType',
  x00189423: 'AcquisitionProtocolName',
  x00189424: 'AcquisitionProtocolDescription',
  x00189425: 'ContrastBolusIngredientOpaque',
  x00189426: 'DistanceReceptorPlaneToDetHousing',
  x00189427: 'IntensifierActiveShape',
  x00189428: 'IntensifierActiveDimensions',
  x00189429: 'PhysicalDetectorSize',
  x00189430: 'PositionOfIsocenterProjection',
  x00189432: 'FieldOfViewSequence',
  x00189433: 'FieldOfViewDescription',
  x00189434: 'ExposureControlSensingRegionsSeq',
  x00189435: 'ExposureControlSensingRegionShape',
  x00189436: 'ExposureControlSensRegionLeftEdge',
  x00189437: 'ExposureControlSensRegionRightEdge',
  x00189440: 'CenterOfCircExposControlSensRegion',
  x00189441: 'RadiusOfCircExposControlSensRegion',
  x00189447: 'ColumnAngulationPatient',
  x00189449: 'BeamAngle',
  x00189451: 'FrameDetectorParametersSequence',
  x00189452: 'CalculatedAnatomyThickness',
  x00189455: 'CalibrationSequence',
  x00189456: 'ObjectThicknessSequence',
  x00189457: 'PlaneIdentification',
  x00189461: 'FieldOfViewDimensionsInFloat',
  x00189462: 'IsocenterReferenceSystemSequence',
  x00189463: 'PositionerIsocenterPrimaryAngle',
  x00189464: 'PositionerIsocenterSecondaryAngle',
  x00189465: 'PositionerIsocenterDetRotAngle',
  x00189466: 'TableXPositionToIsocenter',
  x00189467: 'TableYPositionToIsocenter',
  x00189468: 'TableZPositionToIsocenter',
  x00189469: 'TableHorizontalRotationAngle',
  x00189470: 'TableHeadTiltAngle',
  x00189471: 'TableCradleTiltAngle',
  x00189472: 'FrameDisplayShutterSequence',
  x00189473: 'AcquiredImageAreaDoseProduct',
  x00189474: 'CArmPositionerTabletopRelationship',
  x00189476: 'XRayGeometrySequence',
  x00189477: 'IrradiationEventIDSequence',
  x00189504: 'XRay3DFrameTypeSequence',
  x00189506: 'ContributingSourcesSequence',
  x00189507: 'XRay3DAcquisitionSequence',
  x00189508: 'PrimaryPositionerScanArc',
  x00189509: 'SecondaryPositionerScanArc',
  x00189510: 'PrimaryPositionerScanStartAngle',
  x00189511: 'SecondaryPositionerScanStartAngle',
  x00189514: 'PrimaryPositionerIncrement',
  x00189515: 'SecondaryPositionerIncrement',
  x00189516: 'StartAcquisitionDateTime',
  x00189517: 'EndAcquisitionDateTime',
  x00189524: 'ApplicationName',
  x00189525: 'ApplicationVersion',
  x00189526: 'ApplicationManufacturer',
  x00189527: 'AlgorithmType',
  x00189528: 'AlgorithmDescription',
  x00189530: 'XRay3DReconstructionSequence',
  x00189531: 'ReconstructionDescription',
  x00189538: 'PerProjectionAcquisitionSequence',
  x00189601: 'DiffusionBMatrixSequence',
  x00189602: 'DiffusionBValueXX',
  x00189603: 'DiffusionBValueXY',
  x00189604: 'DiffusionBValueXZ',
  x00189605: 'DiffusionBValueYY',
  x00189606: 'DiffusionBValueYZ',
  x00189607: 'DiffusionBValueZZ',
  x00189701: 'DecayCorrectionDateTime',
  x00189715: 'StartDensityThreshold',
  x00189722: 'TerminationTimeThreshold',
  x00189725: 'DetectorGeometry',
  x00189727: 'AxialDetectorDimension',
  x00189735: 'PETPositionSequence',
  x00189739: 'NumberOfIterations',
  x00189740: 'NumberOfSubsets',
  x00189751: 'PETFrameTypeSequence',
  x00189756: 'ReconstructionType',
  x00189758: 'DecayCorrected',
  x00189759: 'AttenuationCorrected',
  x00189760: 'ScatterCorrected',
  x00189761: 'DeadTimeCorrected',
  x00189762: 'GantryMotionCorrected',
  x00189763: 'PatientMotionCorrected',
  x00189765: 'RandomsCorrected',
  x00189767: 'SensitivityCalibrated',
  x00189801: 'DepthsOfFocus',
  x00189804: 'ExclusionStartDatetime',
  x00189805: 'ExclusionDuration',
  x00189807: 'ImageDataTypeSequence',
  x00189808: 'DataType',
  x0018980b: 'AliasedDataType',
  x0018a001: 'ContributingEquipmentSequence',
  x0018a002: 'ContributionDateTime',
  x0018a003: 'ContributionDescription',
  // x00191002: 'NumberOfCellsIInDetector',
  // x00191003: 'CellNumberAtTheta',
  // x00191004: 'CellSpacing',
  // x0019100f: 'HorizFrameOfRef',
  // x00191011: 'SeriesContrast',
  // x00191012: 'LastPseq',
  // x00191013: 'StartNumberForBaseline',
  // x00191014: 'EndNumberForBaseline',
  // x00191015: 'StartNumberForEnhancedScans',
  // x00191016: 'EndNumberForEnhancedScans',
  // x00191017: 'SeriesPlane',
  // x00191018: 'FirstScanRas',
  // x00191019: 'FirstScanLocation',
  // x0019101a: 'LastScanRas',
  // x0019101b: 'LastScanLoc',
  // x0019101e: 'DisplayFieldOfView',
  // x00191023: 'TableSpeed',
  // x00191024: 'MidScanTime',
  // x00191025: 'MidScanFlag',
  // x00191026: 'DegreesOfAzimuth',
  // x00191027: 'GantryPeriod',
  // x0019102a: 'XRayOnPosition',
  // x0019102b: 'XRayOffPosition',
  // x0019102c: 'NumberOfTriggers',
  // x0019102e: 'AngleOfFirstView',
  // x0019102f: 'TriggerFrequency',
  // x00191039: 'ScanFOVType',
  // x00191040: 'StatReconFlag',
  // x00191041: 'ComputeType',
  // x00191042: 'SegmentNumber',
  // x00191043: 'TotalSegmentsRequested',
  // x00191044: 'InterscanDelay',
  // x00191047: 'ViewCompressionFactor',
  // x0019104a: 'TotalNoOfRefChannels',
  // x0019104b: 'DataSizeForScanData',
  // x00191052: 'ReconPostProcflag',
  // x00191057: 'CTWaterNumber',
  // x00191058: 'CTBoneNumber',
  // x0019105a: 'AcquisitionDuration',
  // x0019105e: 'NumberOfChannels',
  // x0019105f: 'IncrementBetweenChannels',
  // x00191060: 'StartingView',
  // x00191061: 'NumberOfViews',
  // x00191062: 'IncrementBetweenViews',
  // x0019106a: 'DependantOnNoViewsProcessed',
  // x0019106b: 'FieldOfViewInDetectorCells',
  // x00191070: 'ValueOfBackProjectionButton',
  // x00191071: 'SetIfFatqEstimatesWereUsed',
  // x00191072: 'ZChanAvgOverViews',
  // x00191073: 'AvgOfLeftRefChansOverViews',
  // x00191074: 'MaxLeftChanOverViews',
  // x00191075: 'AvgOfRightRefChansOverViews',
  // x00191076: 'MaxRightChanOverViews',
  // x0019107d: 'SecondEcho',
  // x0019107e: 'NumberOfEchoes',
  // x0019107f: 'TableDelta',
  // x00191081: 'Contiguous',
  // x00191084: 'PeakSAR',
  // x00191085: 'MonitorSAR',
  // x00191087: 'CardiacRepetitionTime',
  // x00191088: 'ImagesPerCardiacCycle',
  // x0019108a: 'ActualReceiveGainAnalog',
  // x0019108b: 'ActualReceiveGainDigital',
  // x0019108d: 'DelayAfterTrigger',
  // x0019108f: 'Swappf',
  // x00191090: 'PauseInterval',
  // x00191091: 'PulseTime',
  // x00191092: 'SliceOffsetOnFreqAxis',
  // x00191093: 'CenterFrequency',
  // x00191094: 'TransmitGain',
  // x00191095: 'AnalogReceiverGain',
  // x00191096: 'DigitalReceiverGain',
  // x00191097: 'BitmapDefiningCVs',
  // x00191098: 'CenterFreqMethod',
  // x0019109b: 'PulseSeqMode',
  // x0019109c: 'PulseSeqName',
  // x0019109d: 'PulseSeqDate',
  // x0019109e: 'InternalPulseSeqName',
  // x0019109f: 'TransmittingCoil',
  // x001910a0: 'SurfaceCoilType',
  // x001910a1: 'ExtremityCoilFlag',
  // x001910a2: 'RawDataRunNumber',
  // x001910a3: 'CalibratedFieldStrength',
  // x001910a4: 'SATFatWaterBone',
  // x001910a5: 'ReceiveBandwidth',
  // x001910a7: 'UserData01',
  // x001910a8: 'UserData02',
  // x001910a9: 'UserData03',
  // x001910aa: 'UserData04',
  // x001910ab: 'UserData05',
  // x001910ac: 'UserData06',
  // x001910ad: 'UserData07',
  // x001910ae: 'UserData08',
  // x001910af: 'UserData09',
  // x001910b0: 'UserData10',
  // x001910b1: 'UserData11',
  // x001910b2: 'UserData12',
  // x001910b3: 'UserData13',
  // x001910b4: 'UserData14',
  // x001910b5: 'UserData15',
  // x001910b6: 'UserData16',
  // x001910b7: 'UserData17',
  // x001910b8: 'UserData18',
  // x001910b9: 'UserData19',
  // x001910ba: 'UserData20',
  // x001910bb: 'UserData21',
  // x001910bc: 'UserData22',
  // x001910bd: 'UserData23',
  // x001910be: 'ProjectionAngle',
  // x001910c0: 'SaturationPlanes',
  // x001910c1: 'SurfaceCoilIntensity',
  // x001910c2: 'SATLocationR',
  // x001910c3: 'SATLocationL',
  // x001910c4: 'SATLocationA',
  // x001910c5: 'SATLocationP',
  // x001910c6: 'SATLocationH',
  // x001910c7: 'SATLocationF',
  // x001910c8: 'SATThicknessR-L',
  // x001910c9: 'SATThicknessA-P',
  // x001910ca: 'SATThicknessH-F',
  // x001910cb: 'PrescribedFlowAxis',
  // x001910cc: 'VelocityEncoding',
  // x001910cd: 'ThicknessDisclaimer',
  // x001910ce: 'PrescanType',
  // x001910cf: 'PrescanStatus',
  // x001910d0: 'RawDataType',
  // x001910d2: 'ProjectionAlgorithm',
  // x001910d3: 'ProjectionAlgorithm',
  // x001910d5: 'FractionalEcho',
  // x001910d6: 'PrepPulse',
  // x001910d7: 'CardiacPhases',
  // x001910d8: 'VariableEchoflag',
  // x001910d9: 'ConcatenatedSAT',
  // x001910da: 'ReferenceChannelUsed',
  // x001910db: 'BackProjectorCoefficient',
  // x001910dc: 'PrimarySpeedCorrectionUsed',
  // x001910dd: 'OverrangeCorrectionUsed',
  // x001910de: 'DynamicZAlphaValue',
  // x001910df: 'UserData',
  // x001910e0: 'UserData',
  // x001910e2: 'VelocityEncodeScale',
  // x001910f2: 'FastPhases',
  // x001910f9: 'TransmissionGain',
  x00200000: 'RelationshipGroupLength',
  x0020000d: 'StudyInstanceUID',
  x0020000e: 'SeriesInstanceUID',
  x00200010: 'StudyID',
  x00200011: 'SeriesNumber',
  x00200012: 'AcquisitionNumber',
  x00200013: 'InstanceNumber',
  x00200014: 'IsotopeNumber',
  x00200015: 'PhaseNumber',
  x00200016: 'IntervalNumber',
  x00200017: 'TimeSlotNumber',
  x00200018: 'AngleNumber',
  x00200019: 'ItemNumber',
  x00200020: 'PatientOrientation',
  x00200022: 'OverlayNumber',
  x00200024: 'CurveNumber',
  x00200026: 'LookupTableNumber',
  x00200030: 'ImagePosition',
  x00200032: 'ImagePositionPatient',
  x00200035: 'ImageOrientation',
  x00200037: 'ImageOrientationPatient',
  x00200050: 'Location',
  x00200052: 'FrameOfReferenceUID',
  x00200060: 'Laterality',
  x00200062: 'ImageLaterality',
  x00200070: 'ImageGeometryType',
  x00200080: 'MaskingImage',
  x00200100: 'TemporalPositionIdentifier',
  x00200105: 'NumberOfTemporalPositions',
  x00200110: 'TemporalResolution',
  x00200200: 'SynchronizationFrameOfReferenceUID',
  x00201000: 'SeriesInStudy',
  x00201001: 'AcquisitionsInSeries',
  x00201002: 'ImagesInAcquisition',
  x00201003: 'ImagesInSeries',
  x00201004: 'AcquisitionsInStudy',
  x00201005: 'ImagesInStudy',
  x00201020: 'Reference',
  x00201040: 'PositionReferenceIndicator',
  x00201041: 'SliceLocation',
  x00201070: 'OtherStudyNumbers',
  x00201200: 'NumberOfPatientRelatedStudies',
  x00201202: 'NumberOfPatientRelatedSeries',
  x00201204: 'NumberOfPatientRelatedInstances',
  x00201206: 'NumberOfStudyRelatedSeries',
  x00201208: 'NumberOfStudyRelatedInstances',
  x00201209: 'NumberOfSeriesRelatedInstances',
  x002031xx: 'SourceImageIDs',
  x00203401: 'ModifyingDeviceID',
  x00203402: 'ModifiedImageID',
  x00203403: 'ModifiedImageDate',
  x00203404: 'ModifyingDeviceManufacturer',
  x00203405: 'ModifiedImageTime',
  x00203406: 'ModifiedImageDescription',
  x00204000: 'ImageComments',
  x00205000: 'OriginalImageIdentification',
  x00205002: 'OriginalImageIdentNomenclature',
  x00209056: 'StackID',
  x00209057: 'InStackPositionNumber',
  x00209071: 'FrameAnatomySequence',
  x00209072: 'FrameLaterality',
  x00209111: 'FrameContentSequence',
  x00209113: 'PlanePositionSequence',
  x00209116: 'PlaneOrientationSequence',
  x00209128: 'TemporalPositionIndex',
  x00209153: 'TriggerDelayTime',
  x00209156: 'FrameAcquisitionNumber',
  x00209157: 'DimensionIndexValues',
  x00209158: 'FrameComments',
  x00209161: 'ConcatenationUID',
  x00209162: 'InConcatenationNumber',
  x00209163: 'InConcatenationTotalNumber',
  x00209164: 'DimensionOrganizationUID',
  x00209165: 'DimensionIndexPointer',
  x00209167: 'FunctionalGroupPointer',
  x00209213: 'DimensionIndexPrivateCreator',
  x00209221: 'DimensionOrganizationSequence',
  x00209222: 'DimensionIndexSequence',
  x00209228: 'ConcatenationFrameOffsetNumber',
  x00209238: 'FunctionalGroupPrivateCreator',
  x00209241: 'NominalPercentageOfCardiacPhase',
  x00209245: 'NominalPercentOfRespiratoryPhase',
  x00209246: 'StartingRespiratoryAmplitude',
  x00209247: 'StartingRespiratoryPhase',
  x00209248: 'EndingRespiratoryAmplitude',
  x00209249: 'EndingRespiratoryPhase',
  x00209250: 'RespiratoryTriggerType',
  x00209251: 'RRIntervalTimeNominal',
  x00209252: 'ActualCardiacTriggerDelayTime',
  x00209253: 'RespiratorySynchronizationSequence',
  x00209254: 'RespiratoryIntervalTime',
  x00209255: 'NominalRespiratoryTriggerDelayTime',
  x00209256: 'RespiratoryTriggerDelayThreshold',
  x00209257: 'ActualRespiratoryTriggerDelayTime',
  x00209301: 'ImagePositionVolume',
  x00209302: 'ImageOrientationVolume',
  x00209308: 'ApexPosition',
  x00209421: 'DimensionDescriptionLabel',
  x00209450: 'PatientOrientationInFrameSequence',
  x00209453: 'FrameLabel',
  x00209518: 'AcquisitionIndex',
  x00209529: 'ContributingSOPInstancesRefSeq',
  x00209536: 'ReconstructionIndex',
  // x00211003: 'SeriesFromWhichPrescribed',
  // x00211005: 'GenesisVersionNow',
  // x00211007: 'SeriesRecordChecksum',
  // x00211018: 'GenesisVersionNow',
  // x00211019: 'AcqreconRecordChecksum',
  // x00211020: 'TableStartLocation',
  // x00211035: 'SeriesFromWhichPrescribed',
  // x00211036: 'ImageFromWhichPrescribed',
  // x00211037: 'ScreenFormat',
  // x0021104a: 'AnatomicalReferenceForScout',
  // x0021104f: 'LocationsInAcquisition',
  // x00211050: 'GraphicallyPrescribed',
  // x00211051: 'RotationFromSourceXRot',
  // x00211052: 'RotationFromSourceYRot',
  // x00211053: 'RotationFromSourceZRot',
  // x00211054: 'ImagePosition',
  // x00211055: 'ImageOrientation',
  // x00211056: 'IntegerSlop',
  // x00211057: 'IntegerSlop',
  // x00211058: 'IntegerSlop',
  // x00211059: 'IntegerSlop',
  // x0021105a: 'IntegerSlop',
  // x0021105b: 'FloatSlop',
  // x0021105c: 'FloatSlop',
  // x0021105d: 'FloatSlop',
  // x0021105e: 'FloatSlop',
  // x0021105f: 'FloatSlop',
  // x00211081: 'AutoWindowLevelAlpha',
  // x00211082: 'AutoWindowLevelBeta',
  // x00211083: 'AutoWindowLevelWindow',
  // x00211084: 'ToWindowLevelLevel',
  // x00211090: 'TubeFocalSpotPosition',
  // x00211091: 'BiopsyPosition',
  // x00211092: 'BiopsyTLocation',
  // x00211093: 'BiopsyRefLocation',
  x00220001: 'LightPathFilterPassThroughWavelen',
  x00220002: 'LightPathFilterPassBand',
  x00220003: 'ImagePathFilterPassThroughWavelen',
  x00220004: 'ImagePathFilterPassBand',
  x00220005: 'PatientEyeMovementCommanded',
  x00220006: 'PatientEyeMovementCommandCodeSeq',
  x00220007: 'SphericalLensPower',
  x00220008: 'CylinderLensPower',
  x00220009: 'CylinderAxis',
  x0022000a: 'EmmetropicMagnification',
  x0022000b: 'IntraOcularPressure',
  x0022000c: 'HorizontalFieldOfView',
  x0022000d: 'PupilDilated',
  x0022000e: 'DegreeOfDilation',
  x00220010: 'StereoBaselineAngle',
  x00220011: 'StereoBaselineDisplacement',
  x00220012: 'StereoHorizontalPixelOffset',
  x00220013: 'StereoVerticalPixelOffset',
  x00220014: 'StereoRotation',
  x00220015: 'AcquisitionDeviceTypeCodeSequence',
  x00220016: 'IlluminationTypeCodeSequence',
  x00220017: 'LightPathFilterTypeStackCodeSeq',
  x00220018: 'ImagePathFilterTypeStackCodeSeq',
  x00220019: 'LensesCodeSequence',
  x0022001a: 'ChannelDescriptionCodeSequence',
  x0022001b: 'RefractiveStateSequence',
  x0022001c: 'MydriaticAgentCodeSequence',
  x0022001d: 'RelativeImagePositionCodeSequence',
  x00220020: 'StereoPairsSequence',
  x00220021: 'LeftImageSequence',
  x00220022: 'RightImageSequence',
  x00220030: 'AxialLengthOfTheEye',
  x00220031: 'OphthalmicFrameLocationSequence',
  x00220032: 'ReferenceCoordinates',
  x00220035: 'DepthSpatialResolution',
  x00220036: 'MaximumDepthDistortion',
  x00220037: 'AlongScanSpatialResolution',
  x00220038: 'MaximumAlongScanDistortion',
  x00220039: 'OphthalmicImageOrientation',
  x00220041: 'DepthOfTransverseImage',
  x00220042: 'MydriaticAgentConcUnitsSeq',
  x00220048: 'AcrossScanSpatialResolution',
  x00220049: 'MaximumAcrossScanDistortion',
  x0022004e: 'MydriaticAgentConcentration',
  x00220055: 'IlluminationWaveLength',
  x00220056: 'IlluminationPower',
  x00220057: 'IlluminationBandwidth',
  x00220058: 'MydriaticAgentSequence',
  // x00231001: 'NumberOfSeriesInStudy',
  // x00231002: 'NumberOfUnarchivedSeries',
  // x00231010: 'ReferenceImageField',
  // x00231050: 'SummaryImage',
  // x00231070: 'StartTimeSecsInFirstAxial',
  // x00231074: 'NoofUpdatesToHeader',
  // x0023107d: 'IndicatesIfTheStudyHasCompleteInfo',
  // x00251006: 'LastPulseSequenceUsed',
  // x00251007: 'ImagesInSeries',
  // x00251010: 'LandmarkCounter',
  // x00251011: 'NumberOfAcquisitions',
  // x00251014: 'IndicatesNoofUpdatesToHeader',
  // x00251017: 'SeriesCompleteFlag',
  // x00251018: 'NumberOfImagesArchived',
  // x00251019: 'LastImageNumberUsed',
  // x0025101a: 'PrimaryReceiverSuiteAndHost',
  // x00271006: 'ImageArchiveFlag',
  // x00271010: 'ScoutType',
  // x0027101c: 'VmaMamp',
  // x0027101d: 'VmaPhase',
  // x0027101e: 'VmaMod',
  // x0027101f: 'VmaClip',
  // x00271020: 'SmartScanOnOffFlag',
  // x00271030: 'ForeignImageRevision',
  // x00271031: 'ImagingMode',
  // x00271032: 'PulseSequence',
  // x00271033: 'ImagingOptions',
  // x00271035: 'PlaneType',
  // x00271036: 'ObliquePlane',
  // x00271040: 'RASLetterOfImageLocation',
  // x00271041: 'ImageLocation',
  // x00271042: 'CenterRCoordOfPlaneImage',
  // x00271043: 'CenterACoordOfPlaneImage',
  // x00271044: 'CenterSCoordOfPlaneImage',
  // x00271045: 'NormalRCoord',
  // x00271046: 'NormalACoord',
  // x00271047: 'NormalSCoord',
  // x00271048: 'RCoordOfTopRightCorner',
  // x00271049: 'ACoordOfTopRightCorner',
  // x0027104a: 'SCoordOfTopRightCorner',
  // x0027104b: 'RCoordOfBottomRightCorner',
  // x0027104c: 'ACoordOfBottomRightCorner',
  // x0027104d: 'SCoordOfBottomRightCorner',
  // x00271050: 'TableStartLocation',
  // x00271051: 'TableEndLocation',
  // x00271052: 'RASLetterForSideOfImage',
  // x00271053: 'RASLetterForAnteriorPosterior',
  // x00271054: 'RASLetterForScoutStartLoc',
  // x00271055: 'RASLetterForScoutEndLoc',
  // x00271060: 'ImageDimensionX',
  // x00271061: 'ImageDimensionY',
  // x00271062: 'NumberOfExcitations',
  x00280000: 'ImagePresentationGroupLength',
  x00280002: 'SamplesPerPixel',
  x00280003: 'SamplesPerPixelUsed',
  x00280004: 'PhotometricInterpretation',
  x00280005: 'ImageDimensions',
  x00280006: 'PlanarConfiguration',
  x00280008: 'NumberOfFrames',
  x00280009: 'FrameIncrementPointer',
  x0028000a: 'FrameDimensionPointer',
  x00280010: 'Rows',
  x00280011: 'Columns',
  x00280012: 'Planes',
  x00280014: 'UltrasoundColorDataPresent',
  x00280030: 'PixelSpacing',
  x00280031: 'ZoomFactor',
  x00280032: 'ZoomCenter',
  x00280034: 'PixelAspectRatio',
  x00280040: 'ImageFormat',
  x00280050: 'ManipulatedImage',
  x00280051: 'CorrectedImage',
  x0028005f: 'CompressionRecognitionCode',
  x00280060: 'CompressionCode',
  x00280061: 'CompressionOriginator',
  x00280062: 'CompressionLabel',
  x00280063: 'CompressionDescription',
  x00280065: 'CompressionSequence',
  x00280066: 'CompressionStepPointers',
  x00280068: 'RepeatInterval',
  x00280069: 'BitsGrouped',
  x00280070: 'PerimeterTable',
  x00280071: 'PerimeterValue',
  x00280080: 'PredictorRows',
  x00280081: 'PredictorColumns',
  x00280082: 'PredictorConstants',
  x00280090: 'BlockedPixels',
  x00280091: 'BlockRows',
  x00280092: 'BlockColumns',
  x00280093: 'RowOverlap',
  x00280094: 'ColumnOverlap',
  x00280100: 'BitsAllocated',
  x00280101: 'BitsStored',
  x00280102: 'HighBit',
  x00280103: 'PixelRepresentation',
  x00280104: 'SmallestValidPixelValue',
  x00280105: 'LargestValidPixelValue',
  x00280106: 'SmallestImagePixelValue',
  x00280107: 'LargestImagePixelValue',
  x00280108: 'SmallestPixelValueInSeries',
  x00280109: 'LargestPixelValueInSeries',
  x00280110: 'SmallestImagePixelValueInPlane',
  x00280111: 'LargestImagePixelValueInPlane',
  x00280120: 'PixelPaddingValue',
  x00280121: 'PixelPaddingRangeLimit',
  x00280200: 'ImageLocation',
  x00280300: 'QualityControlImage',
  x00280301: 'BurnedInAnnotation',
  x00280400: 'TransformLabel',
  x00280401: 'TransformVersionNumber',
  x00280402: 'NumberOfTransformSteps',
  x00280403: 'SequenceOfCompressedData',
  x00280404: 'DetailsOfCoefficients',
  x002804x2: 'CoefficientCoding',
  x002804x3: 'CoefficientCodingPointers',
  x00280700: 'DCTLabel',
  x00280701: 'DataBlockDescription',
  x00280702: 'DataBlock',
  x00280710: 'NormalizationFactorFormat',
  x00280720: 'ZonalMapNumberFormat',
  x00280721: 'ZonalMapLocation',
  x00280722: 'ZonalMapFormat',
  x00280730: 'AdaptiveMapFormat',
  x00280740: 'CodeNumberFormat',
  x002808x0: 'CodeLabel',
  x002808x2: 'NumberOfTables',
  x002808x3: 'CodeTableLocation',
  x002808x4: 'BitsForCodeWord',
  x002808x8: 'ImageDataLocation',
  x00280a02: 'PixelSpacingCalibrationType',
  x00280a04: 'PixelSpacingCalibrationDescription',
  x00281040: 'PixelIntensityRelationship',
  x00281041: 'PixelIntensityRelationshipSign',
  x00281050: 'WindowCenter',
  x00281051: 'WindowWidth',
  x00281052: 'RescaleIntercept',
  x00281053: 'RescaleSlope',
  x00281054: 'RescaleType',
  x00281055: 'WindowCenterAndWidthExplanation',
  x00281056: 'VOI_LUTFunction',
  x00281080: 'GrayScale',
  x00281090: 'RecommendedViewingMode',
  x00281100: 'GrayLookupTableDescriptor',
  x00281101: 'RedPaletteColorTableDescriptor',
  x00281102: 'GreenPaletteColorTableDescriptor',
  x00281103: 'BluePaletteColorTableDescriptor',
  x00281111: 'LargeRedPaletteColorTableDescr',
  x00281112: 'LargeGreenPaletteColorTableDescr',
  x00281113: 'LargeBluePaletteColorTableDescr',
  x00281199: 'PaletteColorTableUID',
  x00281200: 'GrayLookupTableData',
  x00281201: 'RedPaletteColorTableData',
  x00281202: 'GreenPaletteColorTableData',
  x00281203: 'BluePaletteColorTableData',
  x00281211: 'LargeRedPaletteColorTableData',
  x00281212: 'LargeGreenPaletteColorTableData',
  x00281213: 'LargeBluePaletteColorTableData',
  x00281214: 'LargePaletteColorLookupTableUID',
  x00281221: 'SegmentedRedColorTableData',
  x00281222: 'SegmentedGreenColorTableData',
  x00281223: 'SegmentedBlueColorTableData',
  x00281300: 'BreastImplantPresent',
  x00281350: 'PartialView',
  x00281351: 'PartialViewDescription',
  x00281352: 'PartialViewCodeSequence',
  x0028135a: 'SpatialLocationsPreserved',
  x00281402: 'DataPathAssignment',
  x00281404: 'BlendingLUT1Sequence',
  x00281406: 'BlendingWeightConstant',
  x00281408: 'BlendingLookupTableData',
  x0028140c: 'BlendingLUT2Sequence',
  x0028140e: 'DataPathID',
  x0028140f: 'RGBLUTTransferFunction',
  x00281410: 'AlphaLUTTransferFunction',
  x00282000: 'ICCProfile',
  x00282110: 'LossyImageCompression',
  x00282112: 'LossyImageCompressionRatio',
  x00282114: 'LossyImageCompressionMethod',
  x00283000: 'ModalityLUTSequence',
  x00283002: 'LUTDescriptor',
  x00283003: 'LUTExplanation',
  x00283004: 'ModalityLUTType',
  x00283006: 'LUTData',
  x00283010: 'VOILUTSequence',
  x00283110: 'SoftcopyVOILUTSequence',
  x00284000: 'ImagePresentationComments',
  x00285000: 'BiPlaneAcquisitionSequence',
  x00286010: 'RepresentativeFrameNumber',
  x00286020: 'FrameNumbersOfInterest',
  x00286022: 'FrameOfInterestDescription',
  x00286023: 'FrameOfInterestType',
  x00286030: 'MaskPointers',
  x00286040: 'RWavePointer',
  x00286100: 'MaskSubtractionSequence',
  x00286101: 'MaskOperation',
  x00286102: 'ApplicableFrameRange',
  x00286110: 'MaskFrameNumbers',
  x00286112: 'ContrastFrameAveraging',
  x00286114: 'MaskSubPixelShift',
  x00286120: 'TIDOffset',
  x00286190: 'MaskOperationExplanation',
  x00287fe0: 'PixelDataProviderURL',
  x00289001: 'DataPointRows',
  x00289002: 'DataPointColumns',
  x00289003: 'SignalDomainColumns',
  x00289099: 'LargestMonochromePixelValue',
  x00289108: 'DataRepresentation',
  x00289110: 'PixelMeasuresSequence',
  x00289132: 'FrameVOILUTSequence',
  x00289145: 'PixelValueTransformationSequence',
  x00289235: 'SignalDomainRows',
  x00289411: 'DisplayFilterPercentage',
  x00289415: 'FramePixelShiftSequence',
  x00289416: 'SubtractionItemID',
  x00289422: 'PixelIntensityRelationshipLUTSeq',
  x00289443: 'FramePixelDataPropertiesSequence',
  x00289444: 'GeometricalProperties',
  x00289445: 'GeometricMaximumDistortion',
  x00289446: 'ImageProcessingApplied',
  x00289454: 'MaskSelectionMode',
  x00289474: 'LUTFunction',
  x00289478: 'MaskVisibilityPercentage',
  x00289501: 'PixelShiftSequence',
  x00289502: 'RegionPixelShiftSequence',
  x00289503: 'VerticesOfTheRegion',
  x00289506: 'PixelShiftFrameRange',
  x00289507: 'LUTFrameRange',
  x00289520: 'ImageToEquipmentMappingMatrix',
  x00289537: 'EquipmentCoordinateSystemID',
  // x00291004: 'LowerRangeOfPixels1a',
  // x00291005: 'LowerRangeOfPixels1b',
  // x00291006: 'LowerRangeOfPixels1c',
  // x00291007: 'LowerRangeOfPixels1d',
  // x00291008: 'LowerRangeOfPixels1e',
  // x00291009: 'LowerRangeOfPixels1f',
  // x0029100a: 'LowerRangeOfPixels1g',
  // x00291015: 'LowerRangeOfPixels1h',
  // x00291016: 'LowerRangeOfPixels1i',
  // x00291017: 'LowerRangeOfPixels2',
  // x00291018: 'UpperRangeOfPixels2',
  // x0029101a: 'LenOfTotHdrInBytes',
  // x00291026: 'VersionOfTheHdrStruct',
  // x00291034: 'AdvantageCompOverflow',
  // x00291035: 'AdvantageCompUnderflow',
  x00320000: 'StudyGroupLength',
  x0032000a: 'StudyStatusID',
  x0032000c: 'StudyPriorityID',
  x00320012: 'StudyIDIssuer',
  x00320032: 'StudyVerifiedDate',
  x00320033: 'StudyVerifiedTime',
  x00320034: 'StudyReadDate',
  x00320035: 'StudyReadTime',
  x00321000: 'ScheduledStudyStartDate',
  x00321001: 'ScheduledStudyStartTime',
  x00321010: 'ScheduledStudyStopDate',
  x00321011: 'ScheduledStudyStopTime',
  x00321020: 'ScheduledStudyLocation',
  x00321021: 'ScheduledStudyLocationAETitle',
  x00321030: 'ReasonForStudy',
  x00321031: 'RequestingPhysicianIDSequence',
  x00321032: 'RequestingPhysician',
  x00321033: 'RequestingService',
  x00321040: 'StudyArrivalDate',
  x00321041: 'StudyArrivalTime',
  x00321050: 'StudyCompletionDate',
  x00321051: 'StudyCompletionTime',
  x00321055: 'StudyComponentStatusID',
  x00321060: 'RequestedProcedureDescription',
  x00321064: 'RequestedProcedureCodeSequence',
  x00321070: 'RequestedContrastAgent',
  x00324000: 'StudyComments',
  x00380004: 'ReferencedPatientAliasSequence',
  x00380008: 'VisitStatusID',
  x00380010: 'AdmissionID',
  x00380011: 'IssuerOfAdmissionID',
  x00380016: 'RouteOfAdmissions',
  x0038001a: 'ScheduledAdmissionDate',
  x0038001b: 'ScheduledAdmissionTime',
  x0038001c: 'ScheduledDischargeDate',
  x0038001d: 'ScheduledDischargeTime',
  x0038001e: 'ScheduledPatientInstitResidence',
  x00380020: 'AdmittingDate',
  x00380021: 'AdmittingTime',
  x00380030: 'DischargeDate',
  x00380032: 'DischargeTime',
  x00380040: 'DischargeDiagnosisDescription',
  x00380044: 'DischargeDiagnosisCodeSequence',
  x00380050: 'SpecialNeeds',
  x00380060: 'ServiceEpisodeID',
  x00380061: 'IssuerOfServiceEpisodeID',
  x00380062: 'ServiceEpisodeDescription',
  x00380100: 'PertinentDocumentsSequence',
  x00380300: 'CurrentPatientLocation',
  x00380400: 'PatientInstitutionResidence',
  x00380500: 'PatientState',
  x00380502: 'PatientClinicalTrialParticipSeq',
  x00384000: 'VisitComments',
  x003a0004: 'WaveformOriginality',
  x003a0005: 'NumberOfWaveformChannels',
  x003a0010: 'NumberOfWaveformSamples',
  x003a001a: 'SamplingFrequency',
  x003a0020: 'MultiplexGroupLabel',
  x003a0200: 'ChannelDefinitionSequence',
  x003a0202: 'WaveformChannelNumber',
  x003a0203: 'ChannelLabel',
  x003a0205: 'ChannelStatus',
  x003a0208: 'ChannelSourceSequence',
  x003a0209: 'ChannelSourceModifiersSequence',
  x003a020a: 'SourceWaveformSequence',
  x003a020c: 'ChannelDerivationDescription',
  x003a0210: 'ChannelSensitivity',
  x003a0211: 'ChannelSensitivityUnitsSequence',
  x003a0212: 'ChannelSensitivityCorrectionFactor',
  x003a0213: 'ChannelBaseline',
  x003a0214: 'ChannelTimeSkew',
  x003a0215: 'ChannelSampleSkew',
  x003a0218: 'ChannelOffset',
  x003a021a: 'WaveformBitsStored',
  x003a0220: 'FilterLowFrequency',
  x003a0221: 'FilterHighFrequency',
  x003a0222: 'NotchFilterFrequency',
  x003a0223: 'NotchFilterBandwidth',
  x003a0230: 'WaveformDataDisplayScale',
  x003a0231: 'WaveformDisplayBkgCIELabValue',
  x003a0240: 'WaveformPresentationGroupSequence',
  x003a0241: 'PresentationGroupNumber',
  x003a0242: 'ChannelDisplaySequence',
  x003a0244: 'ChannelRecommendDisplayCIELabValue',
  x003a0245: 'ChannelPosition',
  x003a0246: 'DisplayShadingFlag',
  x003a0247: 'FractionalChannelDisplayScale',
  x003a0248: 'AbsoluteChannelDisplayScale',
  x003a0300: 'MultiplexAudioChannelsDescrCodeSeq',
  x003a0301: 'ChannelIdentificationCode',
  x003a0302: 'ChannelMode',
  x00400001: 'ScheduledStationAETitle',
  x00400002: 'ScheduledProcedureStepStartDate',
  x00400003: 'ScheduledProcedureStepStartTime',
  x00400004: 'ScheduledProcedureStepEndDate',
  x00400005: 'ScheduledProcedureStepEndTime',
  x00400006: 'ScheduledPerformingPhysiciansName',
  x00400007: 'ScheduledProcedureStepDescription',
  x00400008: 'ScheduledProtocolCodeSequence',
  x00400009: 'ScheduledProcedureStepID',
  x0040000a: 'StageCodeSequence',
  x0040000b: 'ScheduledPerformingPhysicianIDSeq',
  x00400010: 'ScheduledStationName',
  x00400011: 'ScheduledProcedureStepLocation',
  x00400012: 'PreMedication',
  x00400020: 'ScheduledProcedureStepStatus',
  x00400031: 'LocalNamespaceEntityID',
  x00400032: 'UniversalEntityID',
  x00400033: 'UniversalEntityIDType',
  x00400035: 'IdentifierTypeCode',
  x00400036: 'AssigningFacilitySequence',
  x00400100: 'ScheduledProcedureStepSequence',
  x00400220: 'ReferencedNonImageCompositeSOPSeq',
  x00400241: 'PerformedStationAETitle',
  x00400242: 'PerformedStationName',
  x00400243: 'PerformedLocation',
  x00400244: 'PerformedProcedureStepStartDate',
  x00400245: 'PerformedProcedureStepStartTime',
  x00400250: 'PerformedProcedureStepEndDate',
  x00400251: 'PerformedProcedureStepEndTime',
  x00400252: 'PerformedProcedureStepStatus',
  x00400253: 'PerformedProcedureStepID',
  x00400254: 'PerformedProcedureStepDescription',
  x00400255: 'PerformedProcedureTypeDescription',
  x00400260: 'PerformedProtocolCodeSequence',
  x00400261: 'PerformedProtocolType',
  x00400270: 'ScheduledStepAttributesSequence',
  x00400275: 'RequestAttributesSequence',
  x00400280: 'CommentsOnPerformedProcedureStep',
  x00400281: 'ProcStepDiscontinueReasonCodeSeq',
  x00400293: 'QuantitySequence',
  x00400294: 'Quantity',
  x00400295: 'MeasuringUnitsSequence',
  x00400296: 'BillingItemSequence',
  x00400300: 'TotalTimeOfFluoroscopy',
  x00400301: 'TotalNumberOfExposures',
  x00400302: 'EntranceDose',
  x00400303: 'ExposedArea',
  x00400306: 'DistanceSourceToEntrance',
  x00400307: 'DistanceSourceToSupport',
  x0040030e: 'ExposureDoseSequence',
  x00400310: 'CommentsOnRadiationDose',
  x00400312: 'XRayOutput',
  x00400314: 'HalfValueLayer',
  x00400316: 'OrganDose',
  x00400318: 'OrganExposed',
  x00400320: 'BillingProcedureStepSequence',
  x00400321: 'FilmConsumptionSequence',
  x00400324: 'BillingSuppliesAndDevicesSequence',
  x00400330: 'ReferencedProcedureStepSequence',
  x00400340: 'PerformedSeriesSequence',
  x00400400: 'CommentsOnScheduledProcedureStep',
  x00400440: 'ProtocolContextSequence',
  x00400441: 'ContentItemModifierSequence',
  x0040050a: 'SpecimenAccessionNumber',
  x00400512: 'ContainerIdentifier',
  x0040051a: 'ContainerDescription',
  x00400550: 'SpecimenSequence',
  x00400551: 'SpecimenIdentifier',
  x00400552: 'SpecimenDescriptionSequenceTrial',
  x00400553: 'SpecimenDescriptionTrial',
  x00400554: 'SpecimenUID',
  x00400555: 'AcquisitionContextSequence',
  x00400556: 'AcquisitionContextDescription',
  x0040059a: 'SpecimenTypeCodeSequence',
  x00400600: 'SpecimenShortDescription',
  x004006fa: 'SlideIdentifier',
  x0040071a: 'ImageCenterPointCoordinatesSeq',
  x0040072a: 'XOffsetInSlideCoordinateSystem',
  x0040073a: 'YOffsetInSlideCoordinateSystem',
  x0040074a: 'ZOffsetInSlideCoordinateSystem',
  x004008d8: 'PixelSpacingSequence',
  x004008da: 'CoordinateSystemAxisCodeSequence',
  x004008ea: 'MeasurementUnitsCodeSequence',
  x004009f8: 'VitalStainCodeSequenceTrial',
  x00401001: 'RequestedProcedureID',
  x00401002: 'ReasonForRequestedProcedure',
  x00401003: 'RequestedProcedurePriority',
  x00401004: 'PatientTransportArrangements',
  x00401005: 'RequestedProcedureLocation',
  x00401006: 'PlacerOrderNumber-Procedure',
  x00401007: 'FillerOrderNumber-Procedure',
  x00401008: 'ConfidentialityCode',
  x00401009: 'ReportingPriority',
  x0040100a: 'ReasonForRequestedProcedureCodeSeq',
  x00401010: 'NamesOfIntendedRecipientsOfResults',
  x00401011: 'IntendedRecipientsOfResultsIDSeq',
  x00401101: 'PersonIdentificationCodeSequence',
  x00401102: 'PersonAddress',
  x00401103: 'PersonTelephoneNumbers',
  x00401400: 'RequestedProcedureComments',
  x00402001: 'ReasonForImagingServiceRequest',
  x00402004: 'IssueDateOfImagingServiceRequest',
  x00402005: 'IssueTimeOfImagingServiceRequest',
  x00402006: 'PlacerOrderNumberImagingServiceRequestRetired',
  x00402007: 'FillerOrderNumberImagingServiceRequestRetired',
  x00402008: 'OrderEnteredBy',
  x00402009: 'OrderEntererLocation',
  x00402010: 'OrderCallbackPhoneNumber',
  x00402016: 'PlacerOrderNum-ImagingServiceReq',
  x00402017: 'FillerOrderNum-ImagingServiceReq',
  x00402400: 'ImagingServiceRequestComments',
  x00403001: 'ConfidentialityOnPatientDataDescr',
  x00404001: 'GenPurposeScheduledProcStepStatus',
  x00404002: 'GenPurposePerformedProcStepStatus',
  x00404003: 'GenPurposeSchedProcStepPriority',
  x00404004: 'SchedProcessingApplicationsCodeSeq',
  x00404005: 'SchedProcedureStepStartDateAndTime',
  x00404006: 'MultipleCopiesFlag',
  x00404007: 'PerformedProcessingAppsCodeSeq',
  x00404009: 'HumanPerformerCodeSequence',
  x00404010: 'SchedProcStepModificationDateTime',
  x00404011: 'ExpectedCompletionDateAndTime',
  x00404015: 'ResultingGenPurposePerfProcStepSeq',
  x00404016: 'RefGenPurposeSchedProcStepSeq',
  x00404018: 'ScheduledWorkitemCodeSequence',
  x00404019: 'PerformedWorkitemCodeSequence',
  x00404020: 'InputAvailabilityFlag',
  x00404021: 'InputInformationSequence',
  x00404022: 'RelevantInformationSequence',
  x00404023: 'RefGenPurSchedProcStepTransUID',
  x00404025: 'ScheduledStationNameCodeSequence',
  x00404026: 'ScheduledStationClassCodeSequence',
  x00404027: 'SchedStationGeographicLocCodeSeq',
  x00404028: 'PerformedStationNameCodeSequence',
  x00404029: 'PerformedStationClassCodeSequence',
  x00404030: 'PerformedStationGeogLocCodeSeq',
  x00404031: 'RequestedSubsequentWorkItemCodeSeq',
  x00404032: 'NonDICOMOutputCodeSequence',
  x00404033: 'OutputInformationSequence',
  x00404034: 'ScheduledHumanPerformersSequence',
  x00404035: 'ActualHumanPerformersSequence',
  x00404036: 'HumanPerformersOrganization',
  x00404037: 'HumanPerformerName',
  x00404040: 'RawDataHandling',
  x00408302: 'EntranceDoseInMilliGy',
  x00409094: 'RefImageRealWorldValueMappingSeq',
  x00409096: 'RealWorldValueMappingSequence',
  x00409098: 'PixelValueMappingCodeSequence',
  x00409210: 'LUTLabel',
  x00409211: 'RealWorldValueLastValueMapped',
  x00409212: 'RealWorldValueLUTData',
  x00409216: 'RealWorldValueFirstValueMapped',
  x00409224: 'RealWorldValueIntercept',
  x00409225: 'RealWorldValueSlope',
  x0040a010: 'RelationshipType',
  x0040a027: 'VerifyingOrganization',
  x0040a030: 'VerificationDateTime',
  x0040a032: 'ObservationDateTime',
  x0040a040: 'ValueType',
  x0040a043: 'ConceptNameCodeSequence',
  x0040a050: 'ContinuityOfContent',
  x0040a073: 'VerifyingObserverSequence',
  x0040a075: 'VerifyingObserverName',
  x0040a078: 'AuthorObserverSequence',
  x0040a07a: 'ParticipantSequence',
  x0040a07c: 'CustodialOrganizationSequence',
  x0040a080: 'ParticipationType',
  x0040a082: 'ParticipationDateTime',
  x0040a084: 'ObserverType',
  x0040a088: 'VerifyingObserverIdentCodeSequence',
  x0040a090: 'EquivalentCDADocumentSequence',
  x0040a0b0: 'ReferencedWaveformChannels',
  x0040a120: 'DateTime',
  x0040a121: 'Date',
  x0040a122: 'Time',
  x0040a123: 'PersonName',
  x0040a124: 'UID',
  x0040a130: 'TemporalRangeType',
  x0040a132: 'ReferencedSamplePositions',
  x0040a136: 'ReferencedFrameNumbers',
  x0040a138: 'ReferencedTimeOffsets',
  x0040a13a: 'ReferencedDateTime',
  x0040a160: 'TextValue',
  x0040a168: 'ConceptCodeSequence',
  x0040a170: 'PurposeOfReferenceCodeSequence',
  x0040a180: 'AnnotationGroupNumber',
  x0040a195: 'ModifierCodeSequence',
  x0040a300: 'MeasuredValueSequence',
  x0040a301: 'NumericValueQualifierCodeSequence',
  x0040a30a: 'NumericValue',
  x0040a353: 'AddressTrial',
  x0040a354: 'TelephoneNumberTrial',
  x0040a360: 'PredecessorDocumentsSequence',
  x0040a370: 'ReferencedRequestSequence',
  x0040a372: 'PerformedProcedureCodeSequence',
  x0040a375: 'CurrentRequestedProcEvidenceSeq',
  x0040a385: 'PertinentOtherEvidenceSequence',
  x0040a390: 'HL7StructuredDocumentRefSeq',
  x0040a491: 'CompletionFlag',
  x0040a492: 'CompletionFlagDescription',
  x0040a493: 'VerificationFlag',
  x0040a494: 'ArchiveRequested',
  x0040a496: 'PreliminaryFlag',
  x0040a504: 'ContentTemplateSequence',
  x0040a525: 'IdenticalDocumentsSequence',
  x0040a730: 'ContentSequence',
  x0040b020: 'AnnotationSequence',
  x0040db00: 'TemplateIdentifier',
  x0040db06: 'TemplateVersion',
  x0040db07: 'TemplateLocalVersion',
  x0040db0b: 'TemplateExtensionFlag',
  x0040db0c: 'TemplateExtensionOrganizationUID',
  x0040db0d: 'TemplateExtensionCreatorUID',
  x0040db73: 'ReferencedContentItemIdentifier',
  x0040e001: 'HL7InstanceIdentifier',
  x0040e004: 'HL7DocumentEffectiveTime',
  x0040e006: 'HL7DocumentTypeCodeSequence',
  x0040e010: 'RetrieveURI',
  x0040e011: 'RetrieveLocationUID',
  x00420010: 'DocumentTitle',
  x00420011: 'EncapsulatedDocument',
  x00420012: 'MIMETypeOfEncapsulatedDocument',
  x00420013: 'SourceInstanceSequence',
  x00420014: 'ListOfMIMETypes',
  // x00431001: 'BitmapOfPrescanOptions',
  // x00431002: 'GradientOffsetInX',
  // x00431003: 'GradientOffsetInY',
  // x00431004: 'GradientOffsetInZ',
  // x00431005: 'ImgIsOriginalOrUnoriginal',
  // x00431006: 'NumberOfEPIShots',
  // x00431007: 'ViewsPerSegment',
  // x00431008: 'RespiratoryRateBpm',
  // x00431009: 'RespiratoryTriggerPoint',
  // x0043100a: 'TypeOfReceiverUsed',
  // x0043100b: 'PeakRateOfChangeOfGradientField',
  // x0043100c: 'LimitsInUnitsOfPercent',
  // x0043100d: 'PSDEstimatedLimit',
  // x0043100e: 'PSDEstimatedLimitInTeslaPerSecond',
  // x0043100f: 'Saravghead',
  // x00431010: 'WindowValue',
  // x00431011: 'TotalInputViews',
  // x00431012: 'X-RayChain',
  // x00431013: 'DeconKernelParameters',
  // x00431014: 'CalibrationParameters',
  // x00431015: 'TotalOutputViews',
  // x00431016: 'NumberOfOverranges',
  // x00431017: 'IBHImageScaleFactors',
  // x00431018: 'BBHCoefficients',
  // x00431019: 'NumberOfBBHChainsToBlend',
  // x0043101a: 'StartingChannelNumber',
  // x0043101b: 'PpscanParameters',
  // x0043101c: 'GEImageIntegrity',
  // x0043101d: 'LevelValue',
  // x0043101e: 'DeltaStartTime',
  // x0043101f: 'MaxOverrangesInAView',
  // x00431020: 'AvgOverrangesAllViews',
  // x00431021: 'CorrectedAfterGlowTerms',
  // x00431025: 'ReferenceChannels',
  // x00431026: 'NoViewsRefChansBlocked',
  // x00431027: 'ScanPitchRatio',
  // x00431028: 'UniqueImageIden',
  // x00431029: 'HistogramTables',
  // x0043102a: 'UserDefinedData',
  // x0043102b: 'PrivateScanOptions',
  // x0043102c: 'EffectiveEchoSpacing',
  // x0043102d: 'StringSlopField1',
  // x0043102e: 'StringSlopField2',
  // x0043102f: 'RawDataType',
  // x00431030: 'RawDataType',
  // x00431031: 'RACordOfTargetReconCenter',
  // x00431032: 'RawDataType',
  // x00431033: 'NegScanspacing',
  // x00431034: 'OffsetFrequency',
  // x00431035: 'UserUsageTag',
  // x00431036: 'UserFillMapMSW',
  // x00431037: 'UserFillMapLSW',
  // x00431038: 'User25-48',
  // x00431039: 'SlopInt6-9',
  // x00431040: 'TriggerOnPosition',
  // x00431041: 'DegreeOfRotation',
  // x00431042: 'DASTriggerSource',
  // x00431043: 'DASFpaGain',
  // x00431044: 'DASOutputSource',
  // x00431045: 'DASAdInput',
  // x00431046: 'DASCalMode',
  // x00431047: 'DASCalFrequency',
  // x00431048: 'DASRegXm',
  // x00431049: 'DASAutoZero',
  // x0043104a: 'StartingChannelOfView',
  // x0043104b: 'DASXmPattern',
  // x0043104c: 'TGGCTriggerMode',
  // x0043104d: 'StartScanToXrayOnDelay',
  // x0043104e: 'DurationOfXrayOn',
  // x00431060: 'SlopInt10-17',
  // x00431061: 'ScannerStudyEntityUID',
  // x00431062: 'ScannerStudyID',
  // x0043106f: 'ScannerTableEntry',
  x00440001: 'ProductPackageIdentifier',
  x00440002: 'SubstanceAdministrationApproval',
  x00440003: 'ApprovalStatusFurtherDescription',
  x00440004: 'ApprovalStatusDateTime',
  x00440007: 'ProductTypeCodeSequence',
  x00440008: 'ProductName',
  x00440009: 'ProductDescription',
  x0044000a: 'ProductLotIdentifier',
  x0044000b: 'ProductExpirationDateTime',
  x00440010: 'SubstanceAdministrationDateTime',
  x00440011: 'SubstanceAdministrationNotes',
  x00440012: 'SubstanceAdministrationDeviceID',
  x00440013: 'ProductParameterSequence',
  x00440019: 'SubstanceAdminParameterSeq',
  // x00451001: 'NumberOfMacroRowsInDetector',
  // x00451002: 'MacroWidthAtISOCenter',
  // x00451003: 'DASType',
  // x00451004: 'DASGain',
  // x00451005: 'DASTemperature',
  // x00451006: 'TableDirectionInOrOut',
  // x00451007: 'ZSmoothingFactor',
  // x00451008: 'ViewWeightingMode',
  // x00451009: 'SigmaRowNumberWhichRowsWereUsed',
  // x0045100a: 'MinimumDasValueFoundInTheScanData',
  // x0045100b: 'MaximumOffsetShiftValueUsed',
  // x0045100c: 'NumberOfViewsShifted',
  // x0045100d: 'ZTrackingFlag',
  // x0045100e: 'MeanZError',
  // x0045100f: 'ZTrackingMaximumError',
  // x00451010: 'StartingViewForRow2a',
  // x00451011: 'NumberOfViewsInRow2a',
  // x00451012: 'StartingViewForRow1a',
  // x00451013: 'SigmaMode',
  // x00451014: 'NumberOfViewsInRow1a',
  // x00451015: 'StartingViewForRow2b',
  // x00451016: 'NumberOfViewsInRow2b',
  // x00451017: 'StartingViewForRow1b',
  // x00451018: 'NumberOfViewsInRow1b',
  // x00451019: 'AirFilterCalibrationDate',
  // x0045101a: 'AirFilterCalibrationTime',
  // x0045101b: 'PhantomCalibrationDate',
  // x0045101c: 'PhantomCalibrationTime',
  // x0045101d: 'ZSlopeCalibrationDate',
  // x0045101e: 'ZSlopeCalibrationTime',
  // x0045101f: 'CrosstalkCalibrationDate',
  // x00451020: 'CrosstalkCalibrationTime',
  // x00451021: 'IterboneOptionFlag',
  // x00451022: 'PeristalticFlagOption',
  x00460012: 'LensDescription',
  x00460014: 'RightLensSequence',
  x00460015: 'LeftLensSequence',
  x00460018: 'CylinderSequence',
  x00460028: 'PrismSequence',
  x00460030: 'HorizontalPrismPower',
  x00460032: 'HorizontalPrismBase',
  x00460034: 'VerticalPrismPower',
  x00460036: 'VerticalPrismBase',
  x00460038: 'LensSegmentType',
  x00460040: 'OpticalTransmittance',
  x00460042: 'ChannelWidth',
  x00460044: 'PupilSize',
  x00460046: 'CornealSize',
  x00460060: 'DistancePupillaryDistance',
  x00460062: 'NearPupillaryDistance',
  x00460064: 'OtherPupillaryDistance',
  x00460075: 'RadiusOfCurvature',
  x00460076: 'KeratometricPower',
  x00460077: 'KeratometricAxis',
  x00460092: 'BackgroundColor',
  x00460094: 'Optotype',
  x00460095: 'OptotypePresentation',
  x00460100: 'AddNearSequence',
  x00460101: 'AddIntermediateSequence',
  x00460102: 'AddOtherSequence',
  x00460104: 'AddPower',
  x00460106: 'ViewingDistance',
  x00460125: 'ViewingDistanceType',
  x00460135: 'VisualAcuityModifiers',
  x00460137: 'DecimalVisualAcuity',
  x00460139: 'OptotypeDetailedDefinition',
  x00460146: 'SpherePower',
  x00460147: 'CylinderPower',
  x00500004: 'CalibrationImage',
  x00500010: 'DeviceSequence',
  x00500014: 'DeviceLength',
  x00500015: 'ContainerComponentWidth',
  x00500016: 'DeviceDiameter',
  x00500017: 'DeviceDiameterUnits',
  x00500018: 'DeviceVolume',
  x00500019: 'InterMarkerDistance',
  x0050001b: 'ContainerComponentID',
  x00500020: 'DeviceDescription',
  x00540010: 'EnergyWindowVector',
  x00540011: 'NumberOfEnergyWindows',
  x00540012: 'EnergyWindowInformationSequence',
  x00540013: 'EnergyWindowRangeSequence',
  x00540014: 'EnergyWindowLowerLimit',
  x00540015: 'EnergyWindowUpperLimit',
  x00540016: 'RadiopharmaceuticalInformationSeq',
  x00540017: 'ResidualSyringeCounts',
  x00540018: 'EnergyWindowName',
  x00540020: 'DetectorVector',
  x00540021: 'NumberOfDetectors',
  x00540022: 'DetectorInformationSequence',
  x00540030: 'PhaseVector',
  x00540031: 'NumberOfPhases',
  x00540032: 'PhaseInformationSequence',
  x00540033: 'NumberOfFramesInPhase',
  x00540036: 'PhaseDelay',
  x00540038: 'PauseBetweenFrames',
  x00540039: 'PhaseDescription',
  x00540050: 'RotationVector',
  x00540051: 'NumberOfRotations',
  x00540052: 'RotationInformationSequence',
  x00540053: 'NumberOfFramesInRotation',
  x00540060: 'RRIntervalVector',
  x00540061: 'NumberOfRRIntervals',
  x00540062: 'GatedInformationSequence',
  x00540063: 'DataInformationSequence',
  x00540070: 'TimeSlotVector',
  x00540071: 'NumberOfTimeSlots',
  x00540072: 'TimeSlotInformationSequence',
  x00540073: 'TimeSlotTime',
  x00540080: 'SliceVector',
  x00540081: 'NumberOfSlices',
  x00540090: 'AngularViewVector',
  x00540100: 'TimeSliceVector',
  x00540101: 'NumberOfTimeSlices',
  x00540200: 'StartAngle',
  x00540202: 'TypeOfDetectorMotion',
  x00540210: 'TriggerVector',
  x00540211: 'NumberOfTriggersInPhase',
  x00540220: 'ViewCodeSequence',
  x00540222: 'ViewModifierCodeSequence',
  x00540300: 'RadionuclideCodeSequence',
  x00540302: 'AdministrationRouteCodeSequence',
  x00540304: 'RadiopharmaceuticalCodeSequence',
  x00540306: 'CalibrationDataSequence',
  x00540308: 'EnergyWindowNumber',
  x00540400: 'ImageID',
  x00540410: 'PatientOrientationCodeSequence',
  x00540412: 'PatientOrientationModifierCodeSeq',
  x00540414: 'PatientGantryRelationshipCodeSeq',
  x00540500: 'SliceProgressionDirection',
  x00541000: 'SeriesType',
  x00541001: 'Units',
  x00541002: 'CountsSource',
  x00541004: 'ReprojectionMethod',
  x00541100: 'RandomsCorrectionMethod',
  x00541101: 'AttenuationCorrectionMethod',
  x00541102: 'DecayCorrection',
  x00541103: 'ReconstructionMethod',
  x00541104: 'DetectorLinesOfResponseUsed',
  x00541105: 'ScatterCorrectionMethod',
  x00541200: 'AxialAcceptance',
  x00541201: 'AxialMash',
  x00541202: 'TransverseMash',
  x00541203: 'DetectorElementSize',
  x00541210: 'CoincidenceWindowWidth',
  x00541220: 'SecondaryCountsType',
  x00541300: 'FrameReferenceTime',
  x00541310: 'PrimaryCountsAccumulated',
  x00541311: 'SecondaryCountsAccumulated',
  x00541320: 'SliceSensitivityFactor',
  x00541321: 'DecayFactor',
  x00541322: 'DoseCalibrationFactor',
  x00541323: 'ScatterFractionFactor',
  x00541324: 'DeadTimeFactor',
  x00541330: 'ImageIndex',
  x00541400: 'CountsIncluded',
  x00541401: 'DeadTimeCorrectionFlag',
  x00603000: 'HistogramSequence',
  x00603002: 'HistogramNumberOfBins',
  x00603004: 'HistogramFirstBinValue',
  x00603006: 'HistogramLastBinValue',
  x00603008: 'HistogramBinWidth',
  x00603010: 'HistogramExplanation',
  x00603020: 'HistogramData',
  x00620001: 'SegmentationType',
  x00620002: 'SegmentSequence',
  x00620003: 'SegmentedPropertyCategoryCodeSeq',
  x00620004: 'SegmentNumber',
  x00620005: 'SegmentLabel',
  x00620006: 'SegmentDescription',
  x00620008: 'SegmentAlgorithmType',
  x00620009: 'SegmentAlgorithmName',
  x0062000a: 'SegmentIdentificationSequence',
  x0062000b: 'ReferencedSegmentNumber',
  x0062000c: 'RecommendedDisplayGrayscaleValue',
  x0062000d: 'RecommendedDisplayCIELabValue',
  x0062000e: 'MaximumFractionalValue',
  x0062000f: 'SegmentedPropertyTypeCodeSequence',
  x00620010: 'SegmentationFractionalType',
  x00640002: 'DeformableRegistrationSequence',
  x00640003: 'SourceFrameOfReferenceUID',
  x00640005: 'DeformableRegistrationGridSequence',
  x00640007: 'GridDimensions',
  x00640008: 'GridResolution',
  x00640009: 'VectorGridData',
  x0064000f: 'PreDeformationMatrixRegistSeq',
  x00640010: 'PostDeformationMatrixRegistSeq',
  x00660001: 'NumberOfSurfaces',
  x00660002: 'SurfaceSequence',
  x00660003: 'SurfaceNumber',
  x00660004: 'SurfaceComments',
  x00660009: 'SurfaceProcessing',
  x0066000a: 'SurfaceProcessingRatio',
  x0066000e: 'FiniteVolume',
  x00660010: 'Manifold',
  x00660011: 'SurfacePointsSequence',
  x00660015: 'NumberOfSurfacePoints',
  x00660016: 'PointCoordinatesData',
  x00660017: 'PointPositionAccuracy',
  x00660018: 'MeanPointDistance',
  x00660019: 'MaximumPointDistance',
  x0066001b: 'AxisOfRotation',
  x0066001c: 'CenterOfRotation',
  x0066001e: 'NumberOfVectors',
  x0066001f: 'VectorDimensionality',
  x00660020: 'VectorAccuracy',
  x00660021: 'VectorCoordinateData',
  x00660023: 'TrianglePointIndexList',
  x00660024: 'EdgePointIndexList',
  x00660025: 'VertexPointIndexList',
  x00660026: 'TriangleStripSequence',
  x00660027: 'TriangleFanSequence',
  x00660028: 'LineSequence',
  x00660029: 'PrimitivePointIndexList',
  x0066002a: 'SurfaceCount',
  x0066002f: 'AlgorithmFamilyCodeSequ',
  x00660031: 'AlgorithmVersion',
  x00660032: 'AlgorithmParameters',
  x00660034: 'FacetSequence',
  x00660036: 'AlgorithmName',
  x00700001: 'GraphicAnnotationSequence',
  x00700002: 'GraphicLayer',
  x00700003: 'BoundingBoxAnnotationUnits',
  x00700004: 'AnchorPointAnnotationUnits',
  x00700005: 'GraphicAnnotationUnits',
  x00700006: 'UnformattedTextValue',
  x00700008: 'TextObjectSequence',
  x00700009: 'GraphicObjectSequence',
  x00700010: 'BoundingBoxTopLeftHandCorner',
  x00700011: 'BoundingBoxBottomRightHandCorner',
  x00700012: 'BoundingBoxTextHorizJustification',
  x00700014: 'AnchorPoint',
  x00700015: 'AnchorPointVisibility',
  x00700020: 'GraphicDimensions',
  x00700021: 'NumberOfGraphicPoints',
  x00700022: 'GraphicData',
  x00700023: 'GraphicType',
  x00700024: 'GraphicFilled',
  x00700040: 'ImageRotationRetired',
  x00700041: 'ImageHorizontalFlip',
  x00700042: 'ImageRotation',
  x00700050: 'DisplayedAreaTopLeftTrial',
  x00700051: 'DisplayedAreaBottomRightTrial',
  x00700052: 'DisplayedAreaTopLeft',
  x00700053: 'DisplayedAreaBottomRight',
  x0070005a: 'DisplayedAreaSelectionSequence',
  x00700060: 'GraphicLayerSequence',
  x00700062: 'GraphicLayerOrder',
  x00700066: 'GraphicLayerRecDisplayGraysclValue',
  x00700067: 'GraphicLayerRecDisplayRGBValue',
  x00700068: 'GraphicLayerDescription',
  x00700080: 'ContentLabel',
  x00700081: 'ContentDescription',
  x00700082: 'PresentationCreationDate',
  x00700083: 'PresentationCreationTime',
  x00700084: 'ContentCreatorName',
  x00700086: 'ContentCreatorIDCodeSequence',
  x00700100: 'PresentationSizeMode',
  x00700101: 'PresentationPixelSpacing',
  x00700102: 'PresentationPixelAspectRatio',
  x00700103: 'PresentationPixelMagRatio',
  x00700306: 'ShapeType',
  x00700308: 'RegistrationSequence',
  x00700309: 'MatrixRegistrationSequence',
  x0070030a: 'MatrixSequence',
  x0070030c: 'FrameOfRefTransformationMatrixType',
  x0070030d: 'RegistrationTypeCodeSequence',
  x0070030f: 'FiducialDescription',
  x00700310: 'FiducialIdentifier',
  x00700311: 'FiducialIdentifierCodeSequence',
  x00700312: 'ContourUncertaintyRadius',
  x00700314: 'UsedFiducialsSequence',
  x00700318: 'GraphicCoordinatesDataSequence',
  x0070031a: 'FiducialUID',
  x0070031c: 'FiducialSetSequence',
  x0070031e: 'FiducialSequence',
  x00700401: 'GraphicLayerRecomDisplayCIELabVal',
  x00700402: 'BlendingSequence',
  x00700403: 'RelativeOpacity',
  x00700404: 'ReferencedSpatialRegistrationSeq',
  x00700405: 'BlendingPosition',
  x00720002: 'HangingProtocolName',
  x00720004: 'HangingProtocolDescription',
  x00720006: 'HangingProtocolLevel',
  x00720008: 'HangingProtocolCreator',
  x0072000a: 'HangingProtocolCreationDateTime',
  x0072000c: 'HangingProtocolDefinitionSequence',
  x0072000e: 'HangingProtocolUserIDCodeSequence',
  x00720010: 'HangingProtocolUserGroupName',
  x00720012: 'SourceHangingProtocolSequence',
  x00720014: 'NumberOfPriorsReferenced',
  x00720020: 'ImageSetsSequence',
  x00720022: 'ImageSetSelectorSequence',
  x00720024: 'ImageSetSelectorUsageFlag',
  x00720026: 'SelectorAttribute',
  x00720028: 'SelectorValueNumber',
  x00720030: 'TimeBasedImageSetsSequence',
  x00720032: 'ImageSetNumber',
  x00720034: 'ImageSetSelectorCategory',
  x00720038: 'RelativeTime',
  x0072003a: 'RelativeTimeUnits',
  x0072003c: 'AbstractPriorValue',
  x0072003e: 'AbstractPriorCodeSequence',
  x00720040: 'ImageSetLabel',
  x00720050: 'SelectorAttributeVR',
  x00720052: 'SelectorSequencePointer',
  x00720054: 'SelectorSeqPointerPrivateCreator',
  x00720056: 'SelectorAttributePrivateCreator',
  x00720060: 'SelectorATValue',
  x00720062: 'SelectorCSValue',
  x00720064: 'SelectorISValue',
  x00720066: 'SelectorLOValue',
  x00720068: 'SelectorLTValue',
  x0072006a: 'SelectorPNValue',
  x0072006c: 'SelectorSHValue',
  x0072006e: 'SelectorSTValue',
  x00720070: 'SelectorUTValue',
  x00720072: 'SelectorDSValue',
  x00720074: 'SelectorFDValue',
  x00720076: 'SelectorFLValue',
  x00720078: 'SelectorULValue',
  x0072007a: 'SelectorUSValue',
  x0072007c: 'SelectorSLValue',
  x0072007e: 'SelectorSSValue',
  x00720080: 'SelectorCodeSequenceValue',
  x00720100: 'NumberOfScreens',
  x00720102: 'NominalScreenDefinitionSequence',
  x00720104: 'NumberOfVerticalPixels',
  x00720106: 'NumberOfHorizontalPixels',
  x00720108: 'DisplayEnvironmentSpatialPosition',
  x0072010a: 'ScreenMinimumGrayscaleBitDepth',
  x0072010c: 'ScreenMinimumColorBitDepth',
  x0072010e: 'ApplicationMaximumRepaintTime',
  x00720200: 'DisplaySetsSequence',
  x00720202: 'DisplaySetNumber',
  x00720203: 'DisplaySetLabel',
  x00720204: 'DisplaySetPresentationGroup',
  x00720206: 'DisplaySetPresentationGroupDescr',
  x00720208: 'PartialDataDisplayHandling',
  x00720210: 'SynchronizedScrollingSequence',
  x00720212: 'DisplaySetScrollingGroup',
  x00720214: 'NavigationIndicatorSequence',
  x00720216: 'NavigationDisplaySet',
  x00720218: 'ReferenceDisplaySets',
  x00720300: 'ImageBoxesSequence',
  x00720302: 'ImageBoxNumber',
  x00720304: 'ImageBoxLayoutType',
  x00720306: 'ImageBoxTileHorizontalDimension',
  x00720308: 'ImageBoxTileVerticalDimension',
  x00720310: 'ImageBoxScrollDirection',
  x00720312: 'ImageBoxSmallScrollType',
  x00720314: 'ImageBoxSmallScrollAmount',
  x00720316: 'ImageBoxLargeScrollType',
  x00720318: 'ImageBoxLargeScrollAmount',
  x00720320: 'ImageBoxOverlapPriority',
  x00720330: 'CineRelativeToRealTime',
  x00720400: 'FilterOperationsSequence',
  x00720402: 'FilterByCategory',
  x00720404: 'FilterByAttributePresence',
  x00720406: 'FilterByOperator',
  x00720432: 'SynchronizedImageBoxList',
  x00720434: 'TypeOfSynchronization',
  x00720500: 'BlendingOperationType',
  x00720510: 'ReformattingOperationType',
  x00720512: 'ReformattingThickness',
  x00720514: 'ReformattingInterval',
  x00720516: 'ReformattingOpInitialViewDir',
  x00720520: 'RenderingType3D',
  x00720600: 'SortingOperationsSequence',
  x00720602: 'SortByCategory',
  x00720604: 'SortingDirection',
  x00720700: 'DisplaySetPatientOrientation',
  x00720702: 'VOIType',
  x00720704: 'PseudoColorType',
  x00720706: 'ShowGrayscaleInverted',
  x00720710: 'ShowImageTrueSizeFlag',
  x00720712: 'ShowGraphicAnnotationFlag',
  x00720714: 'ShowPatientDemographicsFlag',
  x00720716: 'ShowAcquisitionTechniquesFlag',
  x00720717: 'DisplaySetHorizontalJustification',
  x00720718: 'DisplaySetVerticalJustification',
  x00741000: 'UnifiedProcedureStepState',
  x00741002: 'UPSProgressInformationSequence',
  x00741004: 'UnifiedProcedureStepProgress',
  x00741006: 'UnifiedProcedureStepProgressDescr',
  x00741008: 'UnifiedProcedureStepComURISeq',
  x0074100a: 'ContactURI',
  x0074100c: 'ContactDisplayName',
  x00741020: 'BeamTaskSequence',
  x00741022: 'BeamTaskType',
  x00741024: 'BeamOrderIndex',
  x00741030: 'DeliveryVerificationImageSequence',
  x00741032: 'VerificationImageTiming',
  x00741034: 'DoubleExposureFlag',
  x00741036: 'DoubleExposureOrdering',
  x00741038: 'DoubleExposureMeterset',
  x0074103a: 'DoubleExposureFieldDelta',
  x00741040: 'RelatedReferenceRTImageSequence',
  x00741042: 'GeneralMachineVerificationSequence',
  x00741044: 'ConventionalMachineVerificationSeq',
  x00741046: 'IonMachineVerificationSequence',
  x00741048: 'FailedAttributesSequence',
  x0074104a: 'OverriddenAttributesSequence',
  x0074104c: 'ConventionalControlPointVerifySeq',
  x0074104e: 'IonControlPointVerificationSeq',
  x00741050: 'AttributeOccurrenceSequence',
  x00741052: 'AttributeOccurrencePointer',
  x00741054: 'AttributeItemSelector',
  x00741056: 'AttributeOccurrencePrivateCreator',
  x00741200: 'ScheduledProcedureStepPriority',
  x00741202: 'StudyListLabel',
  x00741204: 'ProcedureStepLabel',
  x00741210: 'ScheduledProcessingParametersSeq',
  x00741212: 'PerformedProcessingParametersSeq',
  x00741216: 'UPSPerformedProcedureSequence',
  x00741220: 'RelatedProcedureStepSequence',
  x00741222: 'ProcedureStepRelationshipType',
  x00741230: 'DeletionLock',
  x00741234: 'ReceivingAE',
  x00741236: 'RequestingAE',
  x00741238: 'ReasonForCancellation',
  x00741242: 'SCPStatus',
  x00741244: 'SubscriptionListStatus',
  x00741246: 'UPSListStatus',
  x00880130: 'StorageMediaFileSetID',
  x00880140: 'StorageMediaFileSetUID',
  x00880200: 'IconImageSequence',
  x00880904: 'TopicTitle',
  x00880906: 'TopicSubject',
  x00880910: 'TopicAuthor',
  x00880912: 'TopicKeywords',
  x01000410: 'SOPInstanceStatus',
  x01000420: 'SOPAuthorizationDateAndTime',
  x01000424: 'SOPAuthorizationComment',
  x01000426: 'AuthorizationEquipmentCertNumber',
  x04000005: 'MACIDNumber',
  x04000010: 'MACCalculationTransferSyntaxUID',
  x04000015: 'MACAlgorithm',
  x04000020: 'DataElementsSigned',
  x04000100: 'DigitalSignatureUID',
  x04000105: 'DigitalSignatureDateTime',
  x04000110: 'CertificateType',
  x04000115: 'CertificateOfSigner',
  x04000120: 'Signature',
  x04000305: 'CertifiedTimestampType',
  x04000310: 'CertifiedTimestamp',
  x04000401: 'DigitalSignaturePurposeCodeSeq',
  x04000402: 'ReferencedDigitalSignatureSeq',
  x04000403: 'ReferencedSOPInstanceMACSeq',
  x04000404: 'MAC',
  x04000500: 'EncryptedAttributesSequence',
  x04000510: 'EncryptedContentTransferSyntaxUID',
  x04000520: 'EncryptedContent',
  x04000550: 'ModifiedAttributesSequence',
  x04000561: 'OriginalAttributesSequence',
  x04000562: 'AttributeModificationDateTime',
  x04000563: 'ModifyingSystem',
  x04000564: 'SourceOfPreviousValues',
  x04000565: 'ReasonForTheAttributeModification',
  x1000xxx0: 'EscapeTriplet',
  x1000xxx1: 'RunLengthTriplet',
  x1000xxx2: 'HuffmanTableSize',
  x1000xxx3: 'HuffmanTableTriplet',
  x1000xxx4: 'ShiftTableSize',
  x1000xxx5: 'ShiftTableTriplet',
  x1010xxxx: 'ZonalMap',
  x20000010: 'NumberOfCopies',
  x2000001e: 'PrinterConfigurationSequence',
  x20000020: 'PrintPriority',
  x20000030: 'MediumType',
  x20000040: 'FilmDestination',
  x20000050: 'FilmSessionLabel',
  x20000060: 'MemoryAllocation',
  x20000061: 'MaximumMemoryAllocation',
  x20000062: 'ColorImagePrintingFlag',
  x20000063: 'CollationFlag',
  x20000065: 'AnnotationFlag',
  x20000067: 'ImageOverlayFlag',
  x20000069: 'PresentationLUTFlag',
  x2000006a: 'ImageBoxPresentationLUTFlag',
  x200000a0: 'MemoryBitDepth',
  x200000a1: 'PrintingBitDepth',
  x200000a2: 'MediaInstalledSequence',
  x200000a4: 'OtherMediaAvailableSequence',
  x200000a8: 'SupportedImageDisplayFormatSeq',
  x20000500: 'ReferencedFilmBoxSequence',
  x20000510: 'ReferencedStoredPrintSequence',
  x20100010: 'ImageDisplayFormat',
  x20100030: 'AnnotationDisplayFormatID',
  x20100040: 'FilmOrientation',
  x20100050: 'FilmSizeID',
  x20100052: 'PrinterResolutionID',
  x20100054: 'DefaultPrinterResolutionID',
  x20100060: 'MagnificationType',
  x20100080: 'SmoothingType',
  x201000a6: 'DefaultMagnificationType',
  x201000a7: 'OtherMagnificationTypesAvailable',
  x201000a8: 'DefaultSmoothingType',
  x201000a9: 'OtherSmoothingTypesAvailable',
  x20100100: 'BorderDensity',
  x20100110: 'EmptyImageDensity',
  x20100120: 'MinDensity',
  x20100130: 'MaxDensity',
  x20100140: 'Trim',
  x20100150: 'ConfigurationInformation',
  x20100152: 'ConfigurationInformationDescr',
  x20100154: 'MaximumCollatedFilms',
  x2010015e: 'Illumination',
  x20100160: 'ReflectedAmbientLight',
  x20100376: 'PrinterPixelSpacing',
  x20100500: 'ReferencedFilmSessionSequence',
  x20100510: 'ReferencedImageBoxSequence',
  x20100520: 'ReferencedBasicAnnotationBoxSeq',
  x20200010: 'ImageBoxPosition',
  x20200020: 'Polarity',
  x20200030: 'RequestedImageSize',
  x20200040: 'RequestedDecimate-CropBehavior',
  x20200050: 'RequestedResolutionID',
  x202000a0: 'RequestedImageSizeFlag',
  x202000a2: 'DecimateCropResult',
  x20200110: 'BasicGrayscaleImageSequence',
  x20200111: 'BasicColorImageSequence',
  x20200130: 'ReferencedImageOverlayBoxSequence',
  x20200140: 'ReferencedVOILUTBoxSequence',
  x20300010: 'AnnotationPosition',
  x20300020: 'TextString',
  x20400010: 'ReferencedOverlayPlaneSequence',
  x20400011: 'ReferencedOverlayPlaneGroups',
  x20400020: 'OverlayPixelDataSequence',
  x20400060: 'OverlayMagnificationType',
  x20400070: 'OverlaySmoothingType',
  x20400072: 'OverlayOrImageMagnification',
  x20400074: 'MagnifyToNumberOfColumns',
  x20400080: 'OverlayForegroundDensity',
  x20400082: 'OverlayBackgroundDensity',
  x20400090: 'OverlayMode',
  x20400100: 'ThresholdDensity',
  x20400500: 'ReferencedImageBoxSequenceRetired',
  x20500010: 'PresentationLUTSequence',
  x20500020: 'PresentationLUTShape',
  x20500500: 'ReferencedPresentationLUTSequence',
  x21000010: 'PrintJobID',
  x21000020: 'ExecutionStatus',
  x21000030: 'ExecutionStatusInfo',
  x21000040: 'CreationDate',
  x21000050: 'CreationTime',
  x21000070: 'Originator',
  x21000140: 'DestinationAE',
  x21000160: 'OwnerID',
  x21000170: 'NumberOfFilms',
  x21000500: 'ReferencedPrintJobSequencePullStoredPrint',
  x21100010: 'PrinterStatus',
  x21100020: 'PrinterStatusInfo',
  x21100030: 'PrinterName',
  x21100099: 'PrintQueueID',
  x21200010: 'QueueStatus',
  x21200050: 'PrintJobDescriptionSequence',
  x21200070: 'ReferencedPrintJobSequence',
  x21300010: 'PrintManagementCapabilitiesSeq',
  x21300015: 'PrinterCharacteristicsSequence',
  x21300030: 'FilmBoxContentSequence',
  x21300040: 'ImageBoxContentSequence',
  x21300050: 'AnnotationContentSequence',
  x21300060: 'ImageOverlayBoxContentSequence',
  x21300080: 'PresentationLUTContentSequence',
  x213000a0: 'ProposedStudySequence',
  x213000c0: 'OriginalImageSequence',
  x22000001: 'LabelFromInfoExtractedFromInstance',
  x22000002: 'LabelText',
  x22000003: 'LabelStyleSelection',
  x22000004: 'MediaDisposition',
  x22000005: 'BarcodeValue',
  x22000006: 'BarcodeSymbology',
  x22000007: 'AllowMediaSplitting',
  x22000008: 'IncludeNonDICOMObjects',
  x22000009: 'IncludeDisplayApplication',
  x2200000a: 'SaveCompInstancesAfterMediaCreate',
  x2200000b: 'TotalNumberMediaPiecesCreated',
  x2200000c: 'RequestedMediaApplicationProfile',
  x2200000d: 'ReferencedStorageMediaSequence',
  x2200000e: 'FailureAttributes',
  x2200000f: 'AllowLossyCompression',
  x22000020: 'RequestPriority',
  x30020002: 'RTImageLabel',
  x30020003: 'RTImageName',
  x30020004: 'RTImageDescription',
  x3002000a: 'ReportedValuesOrigin',
  x3002000c: 'RTImagePlane',
  x3002000d: 'XRayImageReceptorTranslation',
  x3002000e: 'XRayImageReceptorAngle',
  x30020010: 'RTImageOrientation',
  x30020011: 'ImagePlanePixelSpacing',
  x30020012: 'RTImagePosition',
  x30020020: 'RadiationMachineName',
  x30020022: 'RadiationMachineSAD',
  x30020024: 'RadiationMachineSSD',
  x30020026: 'RTImageSID',
  x30020028: 'SourceToReferenceObjectDistance',
  x30020029: 'FractionNumber',
  x30020030: 'ExposureSequence',
  x30020032: 'MetersetExposure',
  x30020034: 'DiaphragmPosition',
  x30020040: 'FluenceMapSequence',
  x30020041: 'FluenceDataSource',
  x30020042: 'FluenceDataScale',
  x30020051: 'FluenceMode',
  x30020052: 'FluenceModeID',
  x30040001: 'DVHType',
  x30040002: 'DoseUnits',
  x30040004: 'DoseType',
  x30040006: 'DoseComment',
  x30040008: 'NormalizationPoint',
  x3004000a: 'DoseSummationType',
  x3004000c: 'GridFrameOffsetVector',
  x3004000e: 'DoseGridScaling',
  x30040010: 'RTDoseROISequence',
  x30040012: 'DoseValue',
  x30040014: 'TissueHeterogeneityCorrection',
  x30040040: 'DVHNormalizationPoint',
  x30040042: 'DVHNormalizationDoseValue',
  x30040050: 'DVHSequence',
  x30040052: 'DVHDoseScaling',
  x30040054: 'DVHVolumeUnits',
  x30040056: 'DVHNumberOfBins',
  x30040058: 'DVHData',
  x30040060: 'DVHReferencedROISequence',
  x30040062: 'DVHROIContributionType',
  x30040070: 'DVHMinimumDose',
  x30040072: 'DVHMaximumDose',
  x30040074: 'DVHMeanDose',
  x30060002: 'StructureSetLabel',
  x30060004: 'StructureSetName',
  x30060006: 'StructureSetDescription',
  x30060008: 'StructureSetDate',
  x30060009: 'StructureSetTime',
  x30060010: 'ReferencedFrameOfReferenceSequence',
  x30060012: 'RTReferencedStudySequence',
  x30060014: 'RTReferencedSeriesSequence',
  x30060016: 'ContourImageSequence',
  x30060020: 'StructureSetROISequence',
  x30060022: 'ROINumber',
  x30060024: 'ReferencedFrameOfReferenceUID',
  x30060026: 'ROIName',
  x30060028: 'ROIDescription',
  x3006002a: 'ROIDisplayColor',
  x3006002c: 'ROIVolume',
  x30060030: 'RTRelatedROISequence',
  x30060033: 'RTROIRelationship',
  x30060036: 'ROIGenerationAlgorithm',
  x30060038: 'ROIGenerationDescription',
  x30060039: 'ROIContourSequence',
  x30060040: 'ContourSequence',
  x30060042: 'ContourGeometricType',
  x30060044: 'ContourSlabThickness',
  x30060045: 'ContourOffsetVector',
  x30060046: 'NumberOfContourPoints',
  x30060048: 'ContourNumber',
  x30060049: 'AttachedContours',
  x30060050: 'ContourData',
  x30060080: 'RTROIObservationsSequence',
  x30060082: 'ObservationNumber',
  x30060084: 'ReferencedROINumber',
  x30060085: 'ROIObservationLabel',
  x30060086: 'RTROIIdentificationCodeSequence',
  x30060088: 'ROIObservationDescription',
  x300600a0: 'RelatedRTROIObservationsSequence',
  x300600a4: 'RTROIInterpretedType',
  x300600a6: 'ROIInterpreter',
  x300600b0: 'ROIPhysicalPropertiesSequence',
  x300600b2: 'ROIPhysicalProperty',
  x300600b4: 'ROIPhysicalPropertyValue',
  x300600b6: 'ROIElementalCompositionSequence',
  x300600b7: 'ROIElementalCompAtomicNumber',
  x300600b8: 'ROIElementalCompAtomicMassFraction',
  x300600c0: 'FrameOfReferenceRelationshipSeq',
  x300600c2: 'RelatedFrameOfReferenceUID',
  x300600c4: 'FrameOfReferenceTransformType',
  x300600c6: 'FrameOfReferenceTransformMatrix',
  x300600c8: 'FrameOfReferenceTransformComment',
  x30080010: 'MeasuredDoseReferenceSequence',
  x30080012: 'MeasuredDoseDescription',
  x30080014: 'MeasuredDoseType',
  x30080016: 'MeasuredDoseValue',
  x30080020: 'TreatmentSessionBeamSequence',
  x30080021: 'TreatmentSessionIonBeamSequence',
  x30080022: 'CurrentFractionNumber',
  x30080024: 'TreatmentControlPointDate',
  x30080025: 'TreatmentControlPointTime',
  x3008002a: 'TreatmentTerminationStatus',
  x3008002b: 'TreatmentTerminationCode',
  x3008002c: 'TreatmentVerificationStatus',
  x30080030: 'ReferencedTreatmentRecordSequence',
  x30080032: 'SpecifiedPrimaryMeterset',
  x30080033: 'SpecifiedSecondaryMeterset',
  x30080036: 'DeliveredPrimaryMeterset',
  x30080037: 'DeliveredSecondaryMeterset',
  x3008003a: 'SpecifiedTreatmentTime',
  x3008003b: 'DeliveredTreatmentTime',
  x30080040: 'ControlPointDeliverySequence',
  x30080041: 'IonControlPointDeliverySequence',
  x30080042: 'SpecifiedMeterset',
  x30080044: 'DeliveredMeterset',
  x30080045: 'MetersetRateSet',
  x30080046: 'MetersetRateDelivered',
  x30080047: 'ScanSpotMetersetsDelivered',
  x30080048: 'DoseRateDelivered',
  x30080050: 'TreatmentSummaryCalcDoseRefSeq',
  x30080052: 'CumulativeDoseToDoseReference',
  x30080054: 'FirstTreatmentDate',
  x30080056: 'MostRecentTreatmentDate',
  x3008005a: 'NumberOfFractionsDelivered',
  x30080060: 'OverrideSequence',
  x30080061: 'ParameterSequencePointer',
  x30080062: 'OverrideParameterPointer',
  x30080063: 'ParameterItemIndex',
  x30080064: 'MeasuredDoseReferenceNumber',
  x30080065: 'ParameterPointer',
  x30080066: 'OverrideReason',
  x30080068: 'CorrectedParameterSequence',
  x3008006a: 'CorrectionValue',
  x30080070: 'CalculatedDoseReferenceSequence',
  x30080072: 'CalculatedDoseReferenceNumber',
  x30080074: 'CalculatedDoseReferenceDescription',
  x30080076: 'CalculatedDoseReferenceDoseValue',
  x30080078: 'StartMeterset',
  x3008007a: 'EndMeterset',
  x30080080: 'ReferencedMeasuredDoseReferenceSeq',
  x30080082: 'ReferencedMeasuredDoseReferenceNum',
  x30080090: 'ReferencedCalculatedDoseRefSeq',
  x30080092: 'ReferencedCalculatedDoseRefNumber',
  x300800a0: 'BeamLimitingDeviceLeafPairsSeq',
  x300800b0: 'RecordedWedgeSequence',
  x300800c0: 'RecordedCompensatorSequence',
  x300800d0: 'RecordedBlockSequence',
  x300800e0: 'TreatmentSummaryMeasuredDoseRefSeq',
  x300800f0: 'RecordedSnoutSequence',
  x300800f2: 'RecordedRangeShifterSequence',
  x300800f4: 'RecordedLateralSpreadingDeviceSeq',
  x300800f6: 'RecordedRangeModulatorSequence',
  x30080100: 'RecordedSourceSequence',
  x30080105: 'SourceSerialNumber',
  x30080110: 'TreatmentSessionAppSetupSeq',
  x30080116: 'ApplicationSetupCheck',
  x30080120: 'RecordedBrachyAccessoryDeviceSeq',
  x30080122: 'ReferencedBrachyAccessoryDeviceNum',
  x30080130: 'RecordedChannelSequence',
  x30080132: 'SpecifiedChannelTotalTime',
  x30080134: 'DeliveredChannelTotalTime',
  x30080136: 'SpecifiedNumberOfPulses',
  x30080138: 'DeliveredNumberOfPulses',
  x3008013a: 'SpecifiedPulseRepetitionInterval',
  x3008013c: 'DeliveredPulseRepetitionInterval',
  x30080140: 'RecordedSourceApplicatorSequence',
  x30080142: 'ReferencedSourceApplicatorNumber',
  x30080150: 'RecordedChannelShieldSequence',
  x30080152: 'ReferencedChannelShieldNumber',
  x30080160: 'BrachyControlPointDeliveredSeq',
  x30080162: 'SafePositionExitDate',
  x30080164: 'SafePositionExitTime',
  x30080166: 'SafePositionReturnDate',
  x30080168: 'SafePositionReturnTime',
  x30080200: 'CurrentTreatmentStatus',
  x30080202: 'TreatmentStatusComment',
  x30080220: 'FractionGroupSummarySequence',
  x30080223: 'ReferencedFractionNumber',
  x30080224: 'FractionGroupType',
  x30080230: 'BeamStopperPosition',
  x30080240: 'FractionStatusSummarySequence',
  x30080250: 'TreatmentDate',
  x30080251: 'TreatmentTime',
  x300a0002: 'RTPlanLabel',
  x300a0003: 'RTPlanName',
  x300a0004: 'RTPlanDescription',
  x300a0006: 'RTPlanDate',
  x300a0007: 'RTPlanTime',
  x300a0009: 'TreatmentProtocols',
  x300a000a: 'PlanIntent',
  x300a000b: 'TreatmentSites',
  x300a000c: 'RTPlanGeometry',
  x300a000e: 'PrescriptionDescription',
  x300a0010: 'DoseReferenceSequence',
  x300a0012: 'DoseReferenceNumber',
  x300a0013: 'DoseReferenceUID',
  x300a0014: 'DoseReferenceStructureType',
  x300a0015: 'NominalBeamEnergyUnit',
  x300a0016: 'DoseReferenceDescription',
  x300a0018: 'DoseReferencePointCoordinates',
  x300a001a: 'NominalPriorDose',
  x300a0020: 'DoseReferenceType',
  x300a0021: 'ConstraintWeight',
  x300a0022: 'DeliveryWarningDose',
  x300a0023: 'DeliveryMaximumDose',
  x300a0025: 'TargetMinimumDose',
  x300a0026: 'TargetPrescriptionDose',
  x300a0027: 'TargetMaximumDose',
  x300a0028: 'TargetUnderdoseVolumeFraction',
  x300a002a: 'OrganAtRiskFullVolumeDose',
  x300a002b: 'OrganAtRiskLimitDose',
  x300a002c: 'OrganAtRiskMaximumDose',
  x300a002d: 'OrganAtRiskOverdoseVolumeFraction',
  x300a0040: 'ToleranceTableSequence',
  x300a0042: 'ToleranceTableNumber',
  x300a0043: 'ToleranceTableLabel',
  x300a0044: 'GantryAngleTolerance',
  x300a0046: 'BeamLimitingDeviceAngleTolerance',
  x300a0048: 'BeamLimitingDeviceToleranceSeq',
  x300a004a: 'BeamLimitingDevicePositionTol',
  x300a004b: 'SnoutPositionTolerance',
  x300a004c: 'PatientSupportAngleTolerance',
  x300a004e: 'TableTopEccentricAngleTolerance',
  x300a004f: 'TableTopPitchAngleTolerance',
  x300a0050: 'TableTopRollAngleTolerance',
  x300a0051: 'TableTopVerticalPositionTolerance',
  x300a0052: 'TableTopLongitudinalPositionTol',
  x300a0053: 'TableTopLateralPositionTolerance',
  x300a0055: 'RTPlanRelationship',
  x300a0070: 'FractionGroupSequence',
  x300a0071: 'FractionGroupNumber',
  x300a0072: 'FractionGroupDescription',
  x300a0078: 'NumberOfFractionsPlanned',
  x300a0079: 'NumberFractionPatternDigitsPerDay',
  x300a007a: 'RepeatFractionCycleLength',
  x300a007b: 'FractionPattern',
  x300a0080: 'NumberOfBeams',
  x300a0082: 'BeamDoseSpecificationPoint',
  x300a0084: 'BeamDose',
  x300a0086: 'BeamMeterset',
  x300a0088: 'BeamDosePointDepth',
  x300a0089: 'BeamDosePointEquivalentDepth',
  x300a008a: 'BeamDosePointSSD',
  x300a00a0: 'NumberOfBrachyApplicationSetups',
  x300a00a2: 'BrachyAppSetupDoseSpecPoint',
  x300a00a4: 'BrachyApplicationSetupDose',
  x300a00b0: 'BeamSequence',
  x300a00b2: 'TreatmentMachineName',
  x300a00b3: 'PrimaryDosimeterUnit',
  x300a00b4: 'SourceAxisDistance',
  x300a00b6: 'BeamLimitingDeviceSequence',
  x300a00b8: 'RTBeamLimitingDeviceType',
  x300a00ba: 'SourceToBeamLimitingDeviceDistance',
  x300a00bb: 'IsocenterToBeamLimitingDeviceDist',
  x300a00bc: 'NumberOfLeafJawPairs',
  x300a00be: 'LeafPositionBoundaries',
  x300a00c0: 'BeamNumber',
  x300a00c2: 'BeamName',
  x300a00c3: 'BeamDescription',
  x300a00c4: 'BeamType',
  x300a00c6: 'RadiationType',
  x300a00c7: 'HighDoseTechniqueType',
  x300a00c8: 'ReferenceImageNumber',
  x300a00ca: 'PlannedVerificationImageSequence',
  x300a00cc: 'ImagingDeviceSpecificAcqParams',
  x300a00ce: 'TreatmentDeliveryType',
  x300a00d0: 'NumberOfWedges',
  x300a00d1: 'WedgeSequence',
  x300a00d2: 'WedgeNumber',
  x300a00d3: 'WedgeType',
  x300a00d4: 'WedgeID',
  x300a00d5: 'WedgeAngle',
  x300a00d6: 'WedgeFactor',
  x300a00d7: 'TotalWedgeTrayWaterEquivThickness',
  x300a00d8: 'WedgeOrientation',
  x300a00d9: 'IsocenterToWedgeTrayDistance',
  x300a00da: 'SourceToWedgeTrayDistance',
  x300a00db: 'WedgeThinEdgePosition',
  x300a00dc: 'BolusID',
  x300a00dd: 'BolusDescription',
  x300a00e0: 'NumberOfCompensators',
  x300a00e1: 'MaterialID',
  x300a00e2: 'TotalCompensatorTrayFactor',
  x300a00e3: 'CompensatorSequence',
  x300a00e4: 'CompensatorNumber',
  x300a00e5: 'CompensatorID',
  x300a00e6: 'SourceToCompensatorTrayDistance',
  x300a00e7: 'CompensatorRows',
  x300a00e8: 'CompensatorColumns',
  x300a00e9: 'CompensatorPixelSpacing',
  x300a00ea: 'CompensatorPosition',
  x300a00eb: 'CompensatorTransmissionData',
  x300a00ec: 'CompensatorThicknessData',
  x300a00ed: 'NumberOfBoli',
  x300a00ee: 'CompensatorType',
  x300a00f0: 'NumberOfBlocks',
  x300a00f2: 'TotalBlockTrayFactor',
  x300a00f3: 'TotalBlockTrayWaterEquivThickness',
  x300a00f4: 'BlockSequence',
  x300a00f5: 'BlockTrayID',
  x300a00f6: 'SourceToBlockTrayDistance',
  x300a00f7: 'IsocenterToBlockTrayDistance',
  x300a00f8: 'BlockType',
  x300a00f9: 'AccessoryCode',
  x300a00fa: 'BlockDivergence',
  x300a00fb: 'BlockMountingPosition',
  x300a00fc: 'BlockNumber',
  x300a00fe: 'BlockName',
  x300a0100: 'BlockThickness',
  x300a0102: 'BlockTransmission',
  x300a0104: 'BlockNumberOfPoints',
  x300a0106: 'BlockData',
  x300a0107: 'ApplicatorSequence',
  x300a0108: 'ApplicatorID',
  x300a0109: 'ApplicatorType',
  x300a010a: 'ApplicatorDescription',
  x300a010c: 'CumulativeDoseReferenceCoefficient',
  x300a010e: 'FinalCumulativeMetersetWeight',
  x300a0110: 'NumberOfControlPoints',
  x300a0111: 'ControlPointSequence',
  x300a0112: 'ControlPointIndex',
  x300a0114: 'NominalBeamEnergy',
  x300a0115: 'DoseRateSet',
  x300a0116: 'WedgePositionSequence',
  x300a0118: 'WedgePosition',
  x300a011a: 'BeamLimitingDevicePositionSequence',
  x300a011c: 'LeafJawPositions',
  x300a011e: 'GantryAngle',
  x300a011f: 'GantryRotationDirection',
  x300a0120: 'BeamLimitingDeviceAngle',
  x300a0121: 'BeamLimitingDeviceRotateDirection',
  x300a0122: 'PatientSupportAngle',
  x300a0123: 'PatientSupportRotationDirection',
  x300a0124: 'TableTopEccentricAxisDistance',
  x300a0125: 'TableTopEccentricAngle',
  x300a0126: 'TableTopEccentricRotateDirection',
  x300a0128: 'TableTopVerticalPosition',
  x300a0129: 'TableTopLongitudinalPosition',
  x300a012a: 'TableTopLateralPosition',
  x300a012c: 'IsocenterPosition',
  x300a012e: 'SurfaceEntryPoint',
  x300a0130: 'SourceToSurfaceDistance',
  x300a0134: 'CumulativeMetersetWeight',
  x300a0140: 'TableTopPitchAngle',
  x300a0142: 'TableTopPitchRotationDirection',
  x300a0144: 'TableTopRollAngle',
  x300a0146: 'TableTopRollRotationDirection',
  x300a0148: 'HeadFixationAngle',
  x300a014a: 'GantryPitchAngle',
  x300a014c: 'GantryPitchRotationDirection',
  x300a014e: 'GantryPitchAngleTolerance',
  x300a0180: 'PatientSetupSequence',
  x300a0182: 'PatientSetupNumber',
  x300a0183: 'PatientSetupLabel',
  x300a0184: 'PatientAdditionalPosition',
  x300a0190: 'FixationDeviceSequence',
  x300a0192: 'FixationDeviceType',
  x300a0194: 'FixationDeviceLabel',
  x300a0196: 'FixationDeviceDescription',
  x300a0198: 'FixationDevicePosition',
  x300a0199: 'FixationDevicePitchAngle',
  x300a019a: 'FixationDeviceRollAngle',
  x300a01a0: 'ShieldingDeviceSequence',
  x300a01a2: 'ShieldingDeviceType',
  x300a01a4: 'ShieldingDeviceLabel',
  x300a01a6: 'ShieldingDeviceDescription',
  x300a01a8: 'ShieldingDevicePosition',
  x300a01b0: 'SetupTechnique',
  x300a01b2: 'SetupTechniqueDescription',
  x300a01b4: 'SetupDeviceSequence',
  x300a01b6: 'SetupDeviceType',
  x300a01b8: 'SetupDeviceLabel',
  x300a01ba: 'SetupDeviceDescription',
  x300a01bc: 'SetupDeviceParameter',
  x300a01d0: 'SetupReferenceDescription',
  x300a01d2: 'TableTopVerticalSetupDisplacement',
  x300a01d4: 'TableTopLongitudinalSetupDisplace',
  x300a01d6: 'TableTopLateralSetupDisplacement',
  x300a0200: 'BrachyTreatmentTechnique',
  x300a0202: 'BrachyTreatmentType',
  x300a0206: 'TreatmentMachineSequence',
  x300a0210: 'SourceSequence',
  x300a0212: 'SourceNumber',
  x300a0214: 'SourceType',
  x300a0216: 'SourceManufacturer',
  x300a0218: 'ActiveSourceDiameter',
  x300a021a: 'ActiveSourceLength',
  x300a0222: 'SourceEncapsulationNomThickness',
  x300a0224: 'SourceEncapsulationNomTransmission',
  x300a0226: 'SourceIsotopeName',
  x300a0228: 'SourceIsotopeHalfLife',
  x300a0229: 'SourceStrengthUnits',
  x300a022a: 'ReferenceAirKermaRate',
  x300a022b: 'SourceStrength',
  x300a022c: 'SourceStrengthReferenceDate',
  x300a022e: 'SourceStrengthReferenceTime',
  x300a0230: 'ApplicationSetupSequence',
  x300a0232: 'ApplicationSetupType',
  x300a0234: 'ApplicationSetupNumber',
  x300a0236: 'ApplicationSetupName',
  x300a0238: 'ApplicationSetupManufacturer',
  x300a0240: 'TemplateNumber',
  x300a0242: 'TemplateType',
  x300a0244: 'TemplateName',
  x300a0250: 'TotalReferenceAirKerma',
  x300a0260: 'BrachyAccessoryDeviceSequence',
  x300a0262: 'BrachyAccessoryDeviceNumber',
  x300a0263: 'BrachyAccessoryDeviceID',
  x300a0264: 'BrachyAccessoryDeviceType',
  x300a0266: 'BrachyAccessoryDeviceName',
  x300a026a: 'BrachyAccessoryDeviceNomThickness',
  x300a026c: 'BrachyAccessoryDevNomTransmission',
  x300a0280: 'ChannelSequence',
  x300a0282: 'ChannelNumber',
  x300a0284: 'ChannelLength',
  x300a0286: 'ChannelTotalTime',
  x300a0288: 'SourceMovementType',
  x300a028a: 'NumberOfPulses',
  x300a028c: 'PulseRepetitionInterval',
  x300a0290: 'SourceApplicatorNumber',
  x300a0291: 'SourceApplicatorID',
  x300a0292: 'SourceApplicatorType',
  x300a0294: 'SourceApplicatorName',
  x300a0296: 'SourceApplicatorLength',
  x300a0298: 'SourceApplicatorManufacturer',
  x300a029c: 'SourceApplicatorWallNomThickness',
  x300a029e: 'SourceApplicatorWallNomTrans',
  x300a02a0: 'SourceApplicatorStepSize',
  x300a02a2: 'TransferTubeNumber',
  x300a02a4: 'TransferTubeLength',
  x300a02b0: 'ChannelShieldSequence',
  x300a02b2: 'ChannelShieldNumber',
  x300a02b3: 'ChannelShieldID',
  x300a02b4: 'ChannelShieldName',
  x300a02b8: 'ChannelShieldNominalThickness',
  x300a02ba: 'ChannelShieldNominalTransmission',
  x300a02c8: 'FinalCumulativeTimeWeight',
  x300a02d0: 'BrachyControlPointSequence',
  x300a02d2: 'ControlPointRelativePosition',
  x300a02d4: 'ControlPoint3DPosition',
  x300a02d6: 'CumulativeTimeWeight',
  x300a02e0: 'CompensatorDivergence',
  x300a02e1: 'CompensatorMountingPosition',
  x300a02e2: 'SourceToCompensatorDistance',
  x300a02e3: 'TotalCompTrayWaterEquivThickness',
  x300a02e4: 'IsocenterToCompensatorTrayDistance',
  x300a02e5: 'CompensatorColumnOffset',
  x300a02e6: 'IsocenterToCompensatorDistances',
  x300a02e7: 'CompensatorRelStoppingPowerRatio',
  x300a02e8: 'CompensatorMillingToolDiameter',
  x300a02ea: 'IonRangeCompensatorSequence',
  x300a02eb: 'CompensatorDescription',
  x300a0302: 'RadiationMassNumber',
  x300a0304: 'RadiationAtomicNumber',
  x300a0306: 'RadiationChargeState',
  x300a0308: 'ScanMode',
  x300a030a: 'VirtualSourceAxisDistances',
  x300a030c: 'SnoutSequence',
  x300a030d: 'SnoutPosition',
  x300a030f: 'SnoutID',
  x300a0312: 'NumberOfRangeShifters',
  x300a0314: 'RangeShifterSequence',
  x300a0316: 'RangeShifterNumber',
  x300a0318: 'RangeShifterID',
  x300a0320: 'RangeShifterType',
  x300a0322: 'RangeShifterDescription',
  x300a0330: 'NumberOfLateralSpreadingDevices',
  x300a0332: 'LateralSpreadingDeviceSequence',
  x300a0334: 'LateralSpreadingDeviceNumber',
  x300a0336: 'LateralSpreadingDeviceID',
  x300a0338: 'LateralSpreadingDeviceType',
  x300a033a: 'LateralSpreadingDeviceDescription',
  x300a033c: 'LateralSpreadingDevWaterEquivThick',
  x300a0340: 'NumberOfRangeModulators',
  x300a0342: 'RangeModulatorSequence',
  x300a0344: 'RangeModulatorNumber',
  x300a0346: 'RangeModulatorID',
  x300a0348: 'RangeModulatorType',
  x300a034a: 'RangeModulatorDescription',
  x300a034c: 'BeamCurrentModulationID',
  x300a0350: 'PatientSupportType',
  x300a0352: 'PatientSupportID',
  x300a0354: 'PatientSupportAccessoryCode',
  x300a0356: 'FixationLightAzimuthalAngle',
  x300a0358: 'FixationLightPolarAngle',
  x300a035a: 'MetersetRate',
  x300a0360: 'RangeShifterSettingsSequence',
  x300a0362: 'RangeShifterSetting',
  x300a0364: 'IsocenterToRangeShifterDistance',
  x300a0366: 'RangeShifterWaterEquivThickness',
  x300a0370: 'LateralSpreadingDeviceSettingsSeq',
  x300a0372: 'LateralSpreadingDeviceSetting',
  x300a0374: 'IsocenterToLateralSpreadingDevDist',
  x300a0380: 'RangeModulatorSettingsSequence',
  x300a0382: 'RangeModulatorGatingStartValue',
  x300a0384: 'RangeModulatorGatingStopValue',
  x300a038a: 'IsocenterToRangeModulatorDistance',
  x300a0390: 'ScanSpotTuneID',
  x300a0392: 'NumberOfScanSpotPositions',
  x300a0394: 'ScanSpotPositionMap',
  x300a0396: 'ScanSpotMetersetWeights',
  x300a0398: 'ScanningSpotSize',
  x300a039a: 'NumberOfPaintings',
  x300a03a0: 'IonToleranceTableSequence',
  x300a03a2: 'IonBeamSequence',
  x300a03a4: 'IonBeamLimitingDeviceSequence',
  x300a03a6: 'IonBlockSequence',
  x300a03a8: 'IonControlPointSequence',
  x300a03aa: 'IonWedgeSequence',
  x300a03ac: 'IonWedgePositionSequence',
  x300a0401: 'ReferencedSetupImageSequence',
  x300a0402: 'SetupImageComment',
  x300a0410: 'MotionSynchronizationSequence',
  x300a0412: 'ControlPointOrientation',
  x300a0420: 'GeneralAccessorySequence',
  x300a0421: 'GeneralAccessoryID',
  x300a0422: 'GeneralAccessoryDescription',
  x300a0423: 'GeneralAccessoryType',
  x300a0424: 'GeneralAccessoryNumber',
  x300c0002: 'ReferencedRTPlanSequence',
  x300c0004: 'ReferencedBeamSequence',
  x300c0006: 'ReferencedBeamNumber',
  x300c0007: 'ReferencedReferenceImageNumber',
  x300c0008: 'StartCumulativeMetersetWeight',
  x300c0009: 'EndCumulativeMetersetWeight',
  x300c000a: 'ReferencedBrachyAppSetupSeq',
  x300c000c: 'ReferencedBrachyAppSetupNumber',
  x300c000e: 'ReferencedSourceNumber',
  x300c0020: 'ReferencedFractionGroupSequence',
  x300c0022: 'ReferencedFractionGroupNumber',
  x300c0040: 'ReferencedVerificationImageSeq',
  x300c0042: 'ReferencedReferenceImageSequence',
  x300c0050: 'ReferencedDoseReferenceSequence',
  x300c0051: 'ReferencedDoseReferenceNumber',
  x300c0055: 'BrachyReferencedDoseReferenceSeq',
  x300c0060: 'ReferencedStructureSetSequence',
  x300c006a: 'ReferencedPatientSetupNumber',
  x300c0080: 'ReferencedDoseSequence',
  x300c00a0: 'ReferencedToleranceTableNumber',
  x300c00b0: 'ReferencedBolusSequence',
  x300c00c0: 'ReferencedWedgeNumber',
  x300c00d0: 'ReferencedCompensatorNumber',
  x300c00e0: 'ReferencedBlockNumber',
  x300c00f0: 'ReferencedControlPointIndex',
  x300c00f2: 'ReferencedControlPointSequence',
  x300c00f4: 'ReferencedStartControlPointIndex',
  x300c00f6: 'ReferencedStopControlPointIndex',
  x300c0100: 'ReferencedRangeShifterNumber',
  x300c0102: 'ReferencedLateralSpreadingDevNum',
  x300c0104: 'ReferencedRangeModulatorNumber',
  x300e0002: 'ApprovalStatus',
  x300e0004: 'ReviewDate',
  x300e0005: 'ReviewTime',
  x300e0008: 'ReviewerName',
  x40000000: 'TextGroupLength',
  x40000010: 'Arbitrary',
  x40004000: 'TextComments',
  x40080040: 'ResultsID',
  x40080042: 'ResultsIDIssuer',
  x40080050: 'ReferencedInterpretationSequence',
  x40080100: 'InterpretationRecordedDate',
  x40080101: 'InterpretationRecordedTime',
  x40080102: 'InterpretationRecorder',
  x40080103: 'ReferenceToRecordedSound',
  x40080108: 'InterpretationTranscriptionDate',
  x40080109: 'InterpretationTranscriptionTime',
  x4008010a: 'InterpretationTranscriber',
  x4008010b: 'InterpretationText',
  x4008010c: 'InterpretationAuthor',
  x40080111: 'InterpretationApproverSequence',
  x40080112: 'InterpretationApprovalDate',
  x40080113: 'InterpretationApprovalTime',
  x40080114: 'PhysicianApprovingInterpretation',
  x40080115: 'InterpretationDiagnosisDescription',
  x40080117: 'InterpretationDiagnosisCodeSeq',
  x40080118: 'ResultsDistributionListSequence',
  x40080119: 'DistributionName',
  x4008011a: 'DistributionAddress',
  x40080200: 'InterpretationID',
  x40080202: 'InterpretationIDIssuer',
  x40080210: 'InterpretationTypeID',
  x40080212: 'InterpretationStatusID',
  x40080300: 'Impressions',
  x40084000: 'ResultsComments',
  x4ffe0001: 'MACParametersSequence',
  x50xx0005: 'CurveDimensions',
  x50xx0010: 'NumberOfPoints',
  x50xx0020: 'TypeOfData',
  x50xx0022: 'CurveDescription',
  x50xx0030: 'AxisUnits',
  x50xx0040: 'AxisLabels',
  x50xx0103: 'DataValueRepresentation',
  x50xx0104: 'MinimumCoordinateValue',
  x50xx0105: 'MaximumCoordinateValue',
  x50xx0106: 'CurveRange',
  x50xx0110: 'CurveDataDescriptor',
  x50xx0112: 'CoordinateStartValue',
  x50xx0114: 'CoordinateStepValue',
  x50xx1001: 'CurveActivationLayer',
  x50xx2000: 'AudioType',
  x50xx2002: 'AudioSampleFormat',
  x50xx2004: 'NumberOfChannels',
  x50xx2006: 'NumberOfSamples',
  x50xx2008: 'SampleRate',
  x50xx200a: 'TotalTime',
  x50xx200c: 'AudioSampleData',
  x50xx200e: 'AudioComments',
  x50xx2500: 'CurveLabel',
  x50xx2600: 'CurveReferencedOverlaySequence',
  x50xx2610: 'ReferencedOverlayGroup',
  x50xx3000: 'CurveData',
  x52009229: 'SharedFunctionalGroupsSequence',
  x52009230: 'PerFrameFunctionalGroupsSequence',
  x54000100: 'WaveformSequence',
  x54000110: 'ChannelMinimumValue',
  x54000112: 'ChannelMaximumValue',
  x54001004: 'WaveformBitsAllocated',
  x54001006: 'WaveformSampleInterpretation',
  x5400100a: 'WaveformPaddingValue',
  x54001010: 'WaveformData',
  x56000010: 'FirstOrderPhaseCorrectionAngle',
  x56000020: 'SpectroscopyData',
  x60000000: 'OverlayGroupLength',
  x60xx0010: 'OverlayRows',
  x60xx0011: 'OverlayColumns',
  x60xx0012: 'OverlayPlanes',
  x60xx0015: 'NumberOfFramesInOverlay',
  x60xx0022: 'OverlayDescription',
  x60xx0040: 'OverlayType',
  x60xx0045: 'OverlaySubtype',
  x60xx0050: 'OverlayOrigin',
  x60xx0051: 'ImageFrameOrigin',
  x60xx0052: 'OverlayPlaneOrigin',
  x60xx0060: 'OverlayCompressionCode',
  x60xx0061: 'OverlayCompressionOriginator',
  x60xx0062: 'OverlayCompressionLabel',
  x60xx0063: 'OverlayCompressionDescription',
  x60xx0066: 'OverlayCompressionStepPointers',
  x60xx0068: 'OverlayRepeatInterval',
  x60xx0069: 'OverlayBitsGrouped',
  x60xx0100: 'OverlayBitsAllocated',
  x60xx0102: 'OverlayBitPosition',
  x60xx0110: 'OverlayFormat',
  x60xx0200: 'OverlayLocation',
  x60xx0800: 'OverlayCodeLabel',
  x60xx0802: 'OverlayNumberOfTables',
  x60xx0803: 'OverlayCodeTableLocation',
  x60xx0804: 'OverlayBitsForCodeWord',
  x60xx1001: 'OverlayActivationLayer',
  x60xx1100: 'OverlayDescriptorGray',
  x60xx1101: 'OverlayDescriptorRed',
  x60xx1102: 'OverlayDescriptorGreen',
  x60xx1103: 'OverlayDescriptorBlue',
  x60xx1200: 'OverlaysGray',
  x60xx1201: 'OverlaysRed',
  x60xx1202: 'OverlaysGreen',
  x60xx1203: 'OverlaysBlue',
  x60xx1301: 'ROIArea',
  x60xx1302: 'ROIMean',
  x60xx1303: 'ROIStandardDeviation',
  x60xx1500: 'OverlayLabel',
  x60xx3000: 'OverlayData',
  x60xx4000: 'OverlayComments',
  x7fxx0000: 'PixelDataGroupLength',
  x7fxx0010: 'PixelData',
  x7fxx0011: 'VariableNextDataGroup',
  x7fxx0020: 'VariableCoefficientsSDVN',
  x7fxx0030: 'VariableCoefficientsSDHN',
  x7fxx0040: 'VariableCoefficientsSDDN',
  xfffafffa: 'DigitalSignaturesSequence',
  xfffcfffc: 'DataSetTrailingPadding',
  xfffee000: 'StartOfItem',
  xfffee00d: 'EndOfItems',
  xfffee0dd: 'EndOfSequence'
};
DICOMTagDescriptions.init(initialTagDescriptionMap); // Discard original map...

initialTagDescriptionMap = null;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"StackManager.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/StackManager.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  StackManager: function () {
    return StackManager;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
var getImageId;
module.watch(require("./getImageId"), {
  getImageId: function (v) {
    getImageId = v;
  }
}, 1);
var OHIFError;
module.watch(require("./classes/OHIFError"), {
  OHIFError: function (v) {
    OHIFError = v;
  }
}, 2);
var stackMap = {};
var configuration = {};
var stackUpdatedCallbacks = [];
/**
 * Loop through the current series and add metadata to the
 * Cornerstone meta data provider. This will be used to fill information
 * into the viewport overlays, and to calculate reference lines and orientation markers
 * @param  {Object} stackMap              stackMap object
 * @param  {Object} study                 Study object
 * @param  {Object} displaySet            The set of images to make the stack from
 * @return {Array}                        Array with image IDs
 */

function createAndAddStack(stackMap, study, displaySet) {
  var metadataProvider = OHIF.viewer.metadataProvider;
  var numImages = displaySet.images.length;
  var imageIds = [];
  var imageId;
  displaySet.images.forEach(function (instance, imageIndex) {
    var image = instance.getData();
    var metaData = {
      instance: image,
      // in this context, instance will be the data of the InstanceMetadata object...
      series: displaySet,
      // TODO: Check this
      study: study,
      numImages: numImages,
      imageIndex: imageIndex + 1
    };
    var numberOfFrames = image.numberOfFrames;

    if (numberOfFrames > 1) {
      OHIF.log.info('Multiframe image detected');

      for (var i = 0; i < numberOfFrames; i++) {
        metaData.frame = i;
        imageId = getImageId(image, i);
        imageIds.push(imageId);
        metadataProvider.addMetadata(imageId, metaData);
      }
    } else {
      imageId = getImageId(image);
      imageIds.push(imageId);
      metadataProvider.addMetadata(imageId, metaData);
    }
  });
  var stack = {
    displaySetInstanceUid: displaySet.displaySetInstanceUid,
    imageIds: imageIds,
    frameRate: displaySet.frameRate,
    isClip: displaySet.isClip
  };
  stackMap[displaySet.displaySetInstanceUid] = stack;
  return stack;
}

configuration = {
  createAndAddStack: createAndAddStack
};
/**
 * This object contains all the functions needed for interacting with the stack manager.
 * Generally, findStack is the only function used. If you want to know when new stacks
 * come in, you can register a callback with addStackUpdatedCallback.
 */

var StackManager = {
  /**
   * Removes all current stacks
   */
  clearStacks: function () {
    stackMap = {};
  },

  /**
   * Create a stack from an image set, as well as add in the metadata on a per image bases.
   * @param study The study who's metadata will be added
   * @param displaySet The set of images to make the stack from
   * @return {Array} Array with image IDs
   */
  makeAndAddStack: function (study, displaySet) {
    return configuration.createAndAddStack(stackMap, study, displaySet, stackUpdatedCallbacks);
  },

  /**
   * Find a stack from the currently created stacks.
   * @param displaySetInstanceUid The UID of the stack to find.
   * @returns {*} undefined if not found, otherwise the stack object is returned.
   */
  findStack: function (displaySetInstanceUid) {
    return stackMap[displaySetInstanceUid];
  },

  /**
   * Find a stack or reate one if it has not been created yet
   * @param study The study who's metadata will be added
   * @param displaySet The set of images to make the stack from
   * @return {Array} Array with image IDs
   */
  findOrCreateStack: function (study, displaySet) {
    var stack = this.findStack(displaySet.displaySetInstanceUid);

    if (!stack || !stack.imageIds) {
      stack = this.makeAndAddStack(study, displaySet);
    }

    return stack;
  },

  /**
   * Gets the underlying map of displaySetInstanceUid to stack object.
   * WARNING: Do not change this object. It directly affects the manager.
   * @returns {{}} map of displaySetInstanceUid -> stack.
   */
  getAllStacks: function () {
    return stackMap;
  },

  /**
   * Adds in a callback to be called on a stack being added / updated.
   * @param callback must accept at minimum one argument,
   * which is the stack that was added / updated.
   */
  addStackUpdatedCallback: function (callback) {
    if (typeof callback !== 'function') {
      throw new OHIFError('callback must be provided as a function');
    }

    stackUpdatedCallbacks.push(callback);
  },

  /**
   * Return configuration
   */
  getConfiguration: function () {
    return configuration;
  },

  /**
   * Set configuration, in order to provide compatibility
   * with other systems by overriding this functions
   * @param {Object} config object with functions to be overrided
   *
   * For now, only makeAndAddStack can be overrided
   */
  setConfiguration: function (config) {
    configuration = config;
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"WLPresets.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/WLPresets.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  WLPresets: function () {
    return WLPresets;
  }
});
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
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
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 4);
var cornerstone;
module.watch(require("meteor/ohif:cornerstone"), {
  cornerstone: function (v) {
    cornerstone = v;
  }
}, 5);
var viewportUtils;
module.watch(require("./viewportUtils"), {
  viewportUtils: function (v) {
    viewportUtils = v;
  }
}, 6);
var WL_PRESET_CUSTOM = 'Custom';
var WL_PRESET_DEFAULT = 'Default';
var WL_STORAGE_KEY = "WindowLevelPresetsDefinitions";
OHIF.viewer.defaultWLPresets = {
  0: {
    id: 'SoftTissue',
    wc: 40,
    ww: 400
  },
  1: {
    id: 'Lung',
    wc: -600,
    ww: 1500
  },
  2: {
    id: 'Liver',
    wc: 90,
    ww: 150
  },
  3: {
    id: 'Bone',
    wc: 480,
    ww: 2500
  },
  4: {
    id: 'Brain',
    wc: 40,
    ww: 80
  },
  5: {},
  6: {},
  7: {},
  8: {},
  9: {}
};

var WindowLevelPresetsManager =
/*#__PURE__*/
function () {
  function WindowLevelPresetsManager() {
    this.defaults = {};
    this.retrieveFunction = null;
    this.storeFunction = null;
    this.changeObserver = new Tracker.Dependency();
  }

  var _proto = WindowLevelPresetsManager.prototype;

  _proto.setRetrieveFunction = function () {
    function setRetrieveFunction(retrieveFunction) {
      this.retrieveFunction = retrieveFunction;
    }

    return setRetrieveFunction;
  }();

  _proto.setStoreFunction = function () {
    function setStoreFunction(storeFunction) {
      this.storeFunction = storeFunction;
    }

    return setStoreFunction;
  }();

  _proto.updateElementWLPresetData = function () {
    function updateElementWLPresetData(element) {
      var wlPresetData = cornerstone.getElementData(element, 'wlPreset');
      var enabledElement = cornerstone.getEnabledElement(element);
      var viewport = enabledElement.viewport,
          image = enabledElement.image;
      var _viewport$voi = viewport.voi,
          windowCenter = _viewport$voi.windowCenter,
          windowWidth = _viewport$voi.windowWidth;
      var preset, presetName;

      if (windowWidth === image.windowWidth && windowCenter === image.windowCenter) {
        presetName = WL_PRESET_DEFAULT;
      } else {
        var _WLPresets = OHIF.viewer.wlPresets;

        for (var index in meteorBabelHelpers.sanitizeForInObject(_WLPresets)) {
          if (!_WLPresets.hasOwnProperty(index)) continue;
          var currentPreset = _WLPresets[index];

          if (windowCenter === currentPreset.wc && windowWidth === currentPreset.ww) {
            preset = currentPreset;
            presetName = preset.id;
            break;
          }
        }
      }

      wlPresetData.name = presetName || WL_PRESET_CUSTOM;
      wlPresetData.ww = windowWidth;
      wlPresetData.wc = windowCenter;

      if (wlPresetData.name === WL_PRESET_CUSTOM) {
        var custom = wlPresetData.custom || (wlPresetData.custom = Object.create(null));
        custom.ww = windowWidth;
        custom.wc = windowCenter;
      }
    }

    return updateElementWLPresetData;
  }();
  /**
   * Set specified W/L preset on given element on fallback to default W/L preset if the specified preset is not valid.
   * @param {String} presetName The desired W/L preset to be applied
   * @param {DOMElement} element An enabled viewport DOM Element.
   */


  _proto.applyWLPreset = function () {
    function applyWLPreset(presetName, element) {
      var wlPresets = OHIF.viewer.wlPresets;
      var wlPresetData = cornerstone.getElementData(element, 'wlPreset');
      var viewport = cornerstone.getViewport(element);

      var preset = wlPresets[presetName] || _.findWhere(wlPresets, {
        id: presetName
      });

      if (presetName === WL_PRESET_CUSTOM && wlPresetData.custom) {
        viewport.voi.windowWidth = wlPresetData.custom.ww;
        viewport.voi.windowCenter = wlPresetData.custom.wc;
      } else if (preset && !_.isEmpty(preset) && preset.id) {
        presetName = preset.id;
        viewport.voi.windowWidth = preset.ww;
        viewport.voi.windowCenter = preset.wc;
      } else {
        var enabledElement = cornerstone.getEnabledElement(element);
        viewport.voi.windowWidth = enabledElement.image.windowWidth;
        viewport.voi.windowCenter = enabledElement.image.windowCenter;
        presetName = WL_PRESET_DEFAULT;
      }

      wlPresetData.name = presetName;
      wlPresetData.ww = viewport.voi.windowWidth;
      wlPresetData.wc = viewport.voi.windowCenter; // Update the viewport

      cornerstone.setViewport(element, viewport);
      OHIF.log.info('WLPresets::Applying WL Preset: ' + presetName); // Notify other components about W/L Preset changes

      Session.set('OHIFWlPresetApplied', presetName);
    }

    return applyWLPreset;
  }();

  _proto.store = function () {
    function store(wlPresets) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (_this.storeFunction) {
          _this.storeFunction.call(_this, WL_STORAGE_KEY, wlPresets).then(resolve).catch(reject);
        } else if (Meteor.userId()) {
          OHIF.user.setData(WL_STORAGE_KEY, wlPresets).then(resolve).catch(reject);
        } else {
          Session.setPersistent(WL_STORAGE_KEY, wlPresets);
          resolve();
        }
      }).then(function () {
        return _this.setOHIFWLPresets.call(_this, wlPresets);
      });
    }

    return store;
  }();

  _proto.retrieve = function () {
    function retrieve() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (_this2.retrieveFunction) {
          _this2.retrieveFunction.call(_this2).then(resolve).catch(reject);
        } else if (OHIF.user) {
          try {
            resolve(OHIF.user.getData(WL_STORAGE_KEY));
          } catch (error) {
            reject(error);
          }
        } else {
          resolve(Session.get(WL_STORAGE_KEY));
        }
      });
    }

    return retrieve;
  }();

  _proto.load = function () {
    function load() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.retrieve().then(function (wlPresets) {
          if (wlPresets) {
            _this3.setOHIFWLPresets.call(_this3, wlPresets);
          } else {
            _this3.loadDefaults.call(_this3);
          }
        }).catch(function () {
          return _this3.loadDefaults.call(_this3);
        });
      });
    }

    return load;
  }();

  _proto.applyWLPresetToActiveElement = function () {
    function applyWLPresetToActiveElement(presetName) {
      var element = viewportUtils.getActiveViewportElement();

      if (!element) {
        return;
      }

      this.applyWLPreset(presetName, element);
    }

    return applyWLPresetToActiveElement;
  }();
  /**
   * Overrides OHIF's wlPresets
   * @param  {Object} wlPresets Object with wlPresets mapping
   */


  _proto.setOHIFWLPresets = function () {
    function setOHIFWLPresets(wlPresets) {
      var hasOwn = Object.prototype.hasOwnProperty;
      var presetMap = Object.create(null); // Objects without prototype have much faster lookup times

      for (var index in meteorBabelHelpers.sanitizeForInObject(wlPresets)) {
        if (hasOwn.call(wlPresets, index)) {
          presetMap[index] = wlPresets[index];
        }
      }

      OHIF.viewer.wlPresets = presetMap;
      this.changeObserver.changed();
    }

    return setOHIFWLPresets;
  }();

  _proto.loadDefaults = function () {
    function loadDefaults() {
      this.setOHIFWLPresets(OHIF.viewer.defaultWLPresets);
    }

    return loadDefaults;
  }();

  _proto.resetDefaults = function () {
    function resetDefaults() {
      return this.store(OHIF.viewer.defaultWLPresets);
    }

    return resetDefaults;
  }();

  return WindowLevelPresetsManager;
}();
/**
 * Export functions inside WLPresets namespace.
 */


var WLPresets = new WindowLevelPresetsManager();
Meteor.startup(function () {
  WLPresets.loadDefaults();
  WLPresets.load();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"annotateTextUtils.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/annotateTextUtils.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  annotateTextUtils: function () {
    return annotateTextUtils;
  }
});
var viewportUtils;
module.watch(require("./viewportUtils"), {
  viewportUtils: function (v) {
    viewportUtils = v;
  }
}, 0);

var getTextCallback = function (doneChangingTextCallback) {
  // This handles the text entry for the annotation tool
  var keyPressHandler = function (e) {
    // If Enter or Esc are pressed, close the dialog
    if (e.which === 13 || e.which === 27) {
      closeHandler();
    }
  };

  var closeHandler = function () {
    dialog.get(0).close();
    doneChangingTextCallback(getTextInput.val()); // Reset the text value

    getTextInput.val(''); // Reset the focus to the active viewport element
    // This makes the mobile Safari keyboard close

    var element = viewportUtils.getActiveViewportElement();
    $(element).focus();
  };

  var dialog = $('#annotationDialog');

  if (dialog.get(0).open === true) {
    return;
  }

  var getTextInput = $('.annotationTextInput'); // Focus on the text input to open the Safari keyboard

  getTextInput.focus();
  dialog.get(0).showModal();
  var confirm = dialog.find('.annotationDialogConfirm');
  confirm.off('click');
  confirm.on('click', function () {
    closeHandler();
  }); // Use keydown since keypress doesn't handle ESC in Chrome

  dialog.off('keydown');
  dialog.on('keydown', keyPressHandler);
};

var changeTextCallback = function (data, eventData, doneChangingTextCallback) {
  var dialog = $('#relabelAnnotationDialog');

  if (dialog.get(0).open === true) {
    return;
  } // Is necessary to use Blaze object to not create 
  // circular depencency with helper object (./helpers)


  if (Blaze._globalHelpers.isTouchDevice()) {
    // Center the dialog on screen on touch devices
    dialog.css({
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto'
    });
  } else {
    // Place the dialog above the tool that is being relabelled
    dialog.css({
      top: eventData.currentPoints.page.y - dialog.outerHeight() - 20,
      left: eventData.currentPoints.page.x - dialog.outerWidth() / 2
    });
  }

  var getTextInput = dialog.find('.annotationTextInput');
  var confirm = dialog.find('.relabelConfirm');
  var remove = dialog.find('.relabelRemove');
  getTextInput.val(data.text); // Focus on the text input to open the Safari keyboard

  getTextInput.focus();
  dialog.get(0).showModal();
  confirm.off('click');
  confirm.on('click', function () {
    dialog.get(0).close();
    doneChangingTextCallback(data, getTextInput.val());
  }); // If the remove button is clicked, delete this marker

  remove.off('click');
  remove.on('click', function () {
    dialog.get(0).close();
    doneChangingTextCallback(data, undefined, true);
  });
  dialog.off('keydown');
  dialog.on('keydown', keyPressHandler);

  var keyPressHandler = function (e) {
    // If Enter is pressed, close the dialog
    if (e.which === 13) {
      closeHandler();
    }
  };

  var closeHandler = function () {
    dialog.get(0).close();
    doneChangingTextCallback(data, getTextInput.val()); // Reset the text value

    getTextInput.val(''); // Reset the focus to the active viewport element
    // This makes the mobile Safari keyboard close

    var element = viewportUtils.getActiveViewportElement();
    $(element).focus();
  };
};

var annotateTextUtils = {
  getTextCallback: getTextCallback,
  changeTextCallback: changeTextCallback
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"createStacks.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/createStacks.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  createStacks: function () {
    return createStacks;
  }
});
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var ImageSet;
module.watch(require("./classes/ImageSet"), {
  ImageSet: function (v) {
    ImageSet = v;
  }
}, 1);
var isImage;
module.watch(require("./isImage"), {
  isImage: function (v) {
    isImage = v;
  }
}, 2);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 3);

var isMultiFrame = function (instance) {
  // NumberOfFrames (0028,0008)
  return instance.getRawValue('x00280008') > 1;
};

var makeDisplaySet = function (series, instances) {
  var instance = instances[0];
  var imageSet = new ImageSet(instances);
  var seriesData = series.getData(); // set appropriate attributes to image set...

  imageSet.setAttributes({
    displaySetInstanceUid: imageSet.uid,
    // create a local alias for the imageSet UID
    seriesDate: seriesData.seriesDate,
    seriesTime: seriesData.seriesTime,
    seriesInstanceUid: series.getSeriesInstanceUID(),
    seriesNumber: instance.getRawValue('x00200011'),
    seriesDescription: instance.getRawValue('x0008103e'),
    numImageFrames: instances.length,
    frameRate: instance.getRawValue('x00181063'),
    modality: instance.getRawValue('x00080060'),
    isMultiFrame: isMultiFrame(instance)
  }); // Sort the images in this series if needed

  var shallSort = !OHIF.utils.ObjectPath.get(Meteor, 'settings.public.ui.sortSeriesByIncomingOrder');

  if (shallSort) {
    imageSet.sortBy(function (a, b) {
      // Sort by InstanceNumber (0020,0013)
      return (parseInt(a.getRawValue('x00200013', 0)) || 0) - (parseInt(b.getRawValue('x00200013', 0)) || 0);
    });
  } // Include the first image instance number (after sorted)


  imageSet.setAttribute('instanceNumber', imageSet.getImage(0).getRawValue('x00200013'));
  return imageSet;
};

var isSingleImageModality = function (modality) {
  return modality === 'CR' || modality === 'MG' || modality === 'DX';
};
/**
 * Creates a set of series to be placed in the Study Metadata
 * The series that appear in the Study Metadata must represent
 * imaging modalities.
 *
 * Furthermore, for drag/drop functionality,
 * it is easiest if the stack objects also contain information about
 * which study they are linked to.
 *
 * @param study The study instance metadata to be used
 * @returns {Array} An array of series to be placed in the Study Metadata
 */


var createStacks = function (study) {
  // Define an empty array of display sets
  var displaySets = [];

  if (!study || !study.getSeriesCount()) {
    return displaySets;
  } // Loop through the series (SeriesMetadata)


  study.forEachSeries(function (series) {
    // If the series has no instances, skip it
    if (!series.getInstanceCount()) {
      return;
    } // Search through the instances (InstanceMedatada object) of this series
    // Split Multi-frame instances and Single-image modalities
    // into their own specific display sets. Place the rest of each
    // series into another display set.


    var stackableInstances = [];
    series.forEachInstance(function (instance) {
      // All imaging modalities must have a valid value for sopClassUid (x00080016) or rows (x00280010)
      if (!isImage(instance.getRawValue('x00080016')) && !instance.getRawValue('x00280010')) {
        return;
      }

      var displaySet;

      if (isMultiFrame(instance)) {
        displaySet = makeDisplaySet(series, [instance]);
        displaySet.setAttributes({
          isClip: true,
          studyInstanceUid: study.getStudyInstanceUID(),
          // Include the study instance Uid for drag/drop purposes
          numImageFrames: instance.getRawValue('x00280008'),
          // Override the default value of instances.length
          instanceNumber: instance.getRawValue('x00200013'),
          // Include the instance number
          acquisitionDatetime: instance.getRawValue('x0008002a') // Include the acquisition datetime

        });
        displaySets.push(displaySet);
      } else if (isSingleImageModality(instance.modality)) {
        displaySet = makeDisplaySet(series, [instance]);
        displaySet.setAttributes({
          studyInstanceUid: study.getStudyInstanceUID(),
          // Include the study instance Uid
          instanceNumber: instance.getRawValue('x00200013'),
          // Include the instance number
          acquisitionDatetime: instance.getRawValue('x0008002a') // Include the acquisition datetime

        });
        displaySets.push(displaySet);
      } else {
        stackableInstances.push(instance);
      }
    });

    if (stackableInstances.length) {
      var displaySet = makeDisplaySet(series, stackableInstances);
      displaySet.setAttribute('studyInstanceUid', study.getStudyInstanceUID());
      displaySets.push(displaySet);
    }
  });
  return displaySets;
};
/**
 * Expose "createStacks"...
 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"crosshairsSynchronizers.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/crosshairsSynchronizers.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  crosshairsSynchronizers: function () {
    return crosshairsSynchronizers;
  }
});
var crosshairsSynchronizers = {
  synchronizers: {}
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"debugReactivity.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/debugReactivity.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
Meteor.startup(function () {
  var debug = false;

  if (debug === true) {
    var logRenders = function () {
      Object.keys(Template).forEach(function (name) {
        if (name.indexOf('_') > -1) {
          return;
        }

        var template = Template[name];
        var oldRender = template.rendered;
        var counter = 0;

        template.rendered = function () {
          console.log(name, 'render count: ', ++counter);
          oldRender && oldRender.apply(this, arguments);
        };
      });
    };

    // http://www.meteorpedia.com/read/Debugging_Reactivity
    Meteor.autorun(function (computation) {
      computation.onInvalidate(function () {
        console.trace();
      });
    });
    var wrappedFind = Meteor.Collection.prototype.find;

    Meteor.Collection.prototype.find = function () {
      var cursor = wrappedFind.apply(this, arguments);
      var collectionName = this._name || this._debugName;
      /*cursor.observeChanges({
          added: function(id, fields) {
              console.log(collectionName, 'added', id, fields);
          },
          changed: function(id, fields) {
              console.log(collectionName, 'changed', id, fields);
          },
          movedBefore: function(id, before) {
           console.log(collectionName, 'movedBefore', id, before);
           },
          removed: function(id) {
              console.log(collectionName, 'removed', id);
          }
      });*/

      cursor.observe({
        added: function (data) {
          console.log(collectionName, 'added', data);
        },
        changed: function (data) {
          console.log(collectionName, 'changed', data);
        },
        removed: function (data) {
          console.log(collectionName, 'removed', data);
        }
      });
      return cursor;
    };

    logRenders();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dialogUtils.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/dialogUtils.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  dialogUtils: function () {
    return dialogUtils;
  }
});
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 1);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 2);
var setFocusToActiveViewport;
module.watch(require("./setFocusToActiveViewport"), {
  setFocusToActiveViewport: function (v) {
    setFocusToActiveViewport = v;
  }
}, 3);
var doneCallbackFunction;
/**
 * Removes the backdrop abd closes opened dialog
 * and focus to the active viewport. If a done callback is set, 
 * it's called before
 * @param  {Boolean} runCallback Indicate if callback function needs to be called. Default: true
 */

var closeHandler = function () {
  var runCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  // Check if callback function exists
  if (runCallback && typeof doneCallbackFunction === 'function') {
    doneCallbackFunction();
  } // Hide the lesion dialog


  $('#confirmDeleteDialog').css('display', 'none'); // Remove the backdrop

  $('.removableBackdrop').remove(); // Remove the callback

  doneCallbackFunction = undefined; // Restore the focus to the active viewport

  setFocusToActiveViewport();
};
/**
 * Displays the confirmation dialog template and the removable backdrop element
 *
 * @param doneCallback A callback
 * @param options
 */


var showConfirmDialog = function (doneCallback, options) {
  // Show the backdrop
  options = options || {};
  Blaze.renderWithData(Template.removableBackdrop, options, document.body);
  var confirmDeleteDialog = $('#confirmDeleteDialog');
  confirmDeleteDialog.remove();
  var viewer = document.getElementById('viewer');
  Blaze.renderWithData(Template.confirmDeleteDialog, options, viewer); // Make sure the context menu is closed when the user clicks away

  $('.removableBackdrop').one('mousedown touchstart', function () {
    // Close dialog without calling callback
    closeHandler(false);
  });
  confirmDeleteDialog = $('#confirmDeleteDialog');
  confirmDeleteDialog.css('display', 'block');
  confirmDeleteDialog.focus(); // If callback function is defined, save it for closeHandler

  if (doneCallback && typeof doneCallback === 'function') {
    doneCallbackFunction = doneCallback;
  }
};

var dialogUtils = {
  showConfirmDialog: showConfirmDialog,
  closeHandler: closeHandler
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"displayReferenceLines.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/displayReferenceLines.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  displayReferenceLines: function () {
    return displayReferenceLines;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

function displayReferenceLines(element) {
  // Check if image plane (orientation / loction) data is present for the current image
  var enabledElement = cornerstone.getEnabledElement(element); // Check if element is already enabled and it's image was rendered

  if (!enabledElement || !enabledElement.image) {
    OHIF.log.info('displayReferenceLines enabled element is undefined or it\'s image is not rendered');
    return;
  }

  var imageId = enabledElement.image.imageId;
  var imagePlane = cornerstone.metaData.get('imagePlane', imageId); // Disable reference lines for the current element

  cornerstoneTools.referenceLines.tool.disable(element);

  if (!OHIF.viewer.refLinesEnabled || !imagePlane || !imagePlane.frameOfReferenceUID) {
    OHIF.log.info('displayReferenceLines refLinesEnabled is not enabled, no imagePlane or no frameOfReferenceUID');
    return;
  }

  OHIF.log.info("displayReferenceLines for image with id: " + imageId); // Loop through all other viewport elements and enable reference lines

  $('.imageViewerViewport').not(element).each(function (index, viewportElement) {
    var imageId;

    if ($(viewportElement).find('canvas').length) {
      try {
        var _enabledElement = cornerstone.getEnabledElement(viewportElement);

        imageId = _enabledElement.image.imageId;
      } catch (error) {
        return;
      }

      if (!imageId) {
        return;
      }

      cornerstoneTools.referenceLines.tool.enable(viewportElement, OHIF.viewer.updateImageSynchronizer);
    }
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getElementIfNotEmpty.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/getElementIfNotEmpty.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getElementIfNotEmpty: function () {
    return getElementIfNotEmpty;
  }
});
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 0);

function getElementIfNotEmpty(viewportIndex) {
  // Meteor template helpers run more often than expected
  // They often seem to run just before the whole template is rendered
  // This meant that the onRendered event hadn't fired yet, so the
  // element wasn't enabled / set empty yet. The check here
  // for canvases under the 'enabled' element div is to prevent
  // 'undefined' errors from the helper functions
  var imageViewerViewports = $('.imageViewerViewport'),
      element = imageViewerViewports.get(viewportIndex),
      canvases = imageViewerViewports.eq(viewportIndex).find('canvas');

  if (!element || $(element).hasClass('empty') || canvases.length === 0) {
    return;
  } // Check to make sure the element is enabled.


  try {
    var enabledElement = cornerstone.getEnabledElement(element);
  } catch (error) {
    return;
  }

  return element;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getFrameOfReferenceUID.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/getFrameOfReferenceUID.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getFrameOfReferenceUID: function () {
    return getFrameOfReferenceUID;
  }
});

function getFrameOfReferenceUID(element) {
  var enabledElement;

  try {
    enabledElement = cornerstone.getEnabledElement(element);
  } catch (error) {
    return;
  }

  if (!enabledElement || !enabledElement.image) {
    return;
  }

  var imageId = enabledElement.image.imageId;
  var imagePlane = cornerstone.metaData.get('imagePlane', imageId);

  if (!imagePlane || !imagePlane.frameOfReferenceUID) {
    return;
  }

  return imagePlane.frameOfReferenceUID;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getImageId.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/getImageId.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getImageId: function () {
    return getImageId;
  }
});
var getWADORSImageId;
module.watch(require("./getWADORSImageId"), {
  getWADORSImageId: function (v) {
    getWADORSImageId = v;
  }
}, 0);

// https://stackoverflow.com/a/6021027/3895126
function updateQueryStringParameter(uri, key, value) {
  var regex = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
  var separator = uri.indexOf('?') !== -1 ? '&' : '?';

  if (uri.match(regex)) {
    return uri.replace(regex, '$1' + key + '=' + value + '$2');
  } else {
    return uri + separator + key + '=' + value;
  }
}
/**
 * Obtain an imageId for Cornerstone from an image instance
 *
 * @param instance
 * @param frame
 * @param thumbnail
 * @returns {string} The imageId to be used by Cornerstone
 */


function getImageId(instance, frame) {
  var thumbnail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!instance) {
    return;
  }

  if (typeof instance.getImageId === 'function') {
    return instance.getImageId();
  }

  if (instance.url) {
    if (frame !== undefined) {
      instance.url = updateQueryStringParameter(instance.url, 'frame', frame);
    }

    return instance.url;
  }

  var renderingAttr = thumbnail ? 'thumbnailRendering' : 'imageRendering';

  if (!instance[renderingAttr] || instance[renderingAttr] === 'wadouri' || !instance.wadorsuri) {
    var imageId = 'dicomweb:' + instance.wadouri;

    if (frame !== undefined) {
      imageId += '&frame=' + frame;
    }

    return imageId;
  } else {
    return getWADORSImageId(instance, frame, thumbnail); // WADO-RS Retrieve Frame
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getImageIdForImagePath.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/getImageIdForImagePath.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

module.export({
  getImageIdForImagePath: function () {
    return getImageIdForImagePath;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

var getImageIdForImagePath = function (imagePath) {
  var thumbnail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _imagePath$split = imagePath.split('_'),
      _imagePath$split2 = (0, _slicedToArray2.default)(_imagePath$split, 4),
      studyInstanceUid = _imagePath$split2[0],
      seriesInstanceUid = _imagePath$split2[1],
      sopInstanceUid = _imagePath$split2[2],
      frameIndex = _imagePath$split2[3];

  var study = OHIF.viewer.Studies.findBy({
    studyInstanceUid: studyInstanceUid
  });
  var studyMetadata = OHIF.viewerbase.getStudyMetadata(study);
  var series = studyMetadata.getSeriesByUID(seriesInstanceUid);
  var instance = series.getInstanceByUID(sopInstanceUid);
  var imageId = OHIF.viewerbase.getImageId(instance, frameIndex, thumbnail);
  return imageId;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getStackDataIfNotEmpty.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/getStackDataIfNotEmpty.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getStackDataIfNotEmpty: function () {
    return getStackDataIfNotEmpty;
  }
});
var getElementIfNotEmpty;
module.watch(require("./getElementIfNotEmpty.js"), {
  getElementIfNotEmpty: function (v) {
    getElementIfNotEmpty = v;
  }
}, 0);

function getStackDataIfNotEmpty(viewportIndex) {
  var element = getElementIfNotEmpty(viewportIndex);

  if (!element) {
    return;
  }

  var stackToolData = cornerstoneTools.getToolState(element, 'stack');

  if (!stackToolData || !stackToolData.data || !stackToolData.data.length) {
    return;
  }

  var stack = stackToolData.data[0];

  if (!stack) {
    return;
  }

  return stack;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getStudyMetadata.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/getStudyMetadata.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getStudyMetadata: function () {
    return getStudyMetadata;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

var getStudyMetadata = function (study) {
  var studyMetadata = study;

  if (study && !(studyMetadata instanceof OHIF.viewerbase.metadata.StudyMetadata)) {
    studyMetadata = new OHIF.metadata.StudyMetadata(study, study.studyInstanceUid);
  }

  return studyMetadata;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getWADORSImageId.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/getWADORSImageId.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getWADORSImageId: function () {
    return getWADORSImageId;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
var getWADORSImageUrl;
module.watch(require("./getWADORSImageUrl"), {
  getWADORSImageUrl: function (v) {
    getWADORSImageUrl = v;
  }
}, 1);

function getWADORSImageId(instance, frame) {
  var uri = getWADORSImageUrl(instance, frame);

  if (!uri) {
    return;
  }

  var imageId = "wadors:" + uri;
  OHIF.log.info('WADO-RS ImageID: ' + imageId);
  return imageId;
}

;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getWADORSImageUrl.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/getWADORSImageUrl.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getWADORSImageUrl: function () {
    return getWADORSImageUrl;
  }
});

function getWADORSImageUrl(instance, frame) {
  var wadorsuri = instance.wadorsuri;

  if (!wadorsuri) {
    return;
  } // We need to sum 1 because WADO-RS frame number is 1-based


  frame = (frame || 0) + 1; // Replaces /frame/1 by /frame/{frame}

  wadorsuri = wadorsuri.replace(/(%2Fframes%2F)(\d+)/, "$1" + frame);
  return wadorsuri;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hotkeyUtils.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/hotkeyUtils.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  hotkeyUtils: function () {
    return hotkeyUtils;
  }
});
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 1);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 2);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 3);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 4);
var toolManager;
module.watch(require("./toolManager"), {
  toolManager: function (v) {
    toolManager = v;
  }
}, 5);
var switchToImageRelative;
module.watch(require("./switchToImageRelative"), {
  switchToImageRelative: function (v) {
    switchToImageRelative = v;
  }
}, 6);
var switchToImageByIndex;
module.watch(require("./switchToImageByIndex"), {
  switchToImageByIndex: function (v) {
    switchToImageByIndex = v;
  }
}, 7);
var viewportUtils;
module.watch(require("./viewportUtils"), {
  viewportUtils: function (v) {
    viewportUtils = v;
  }
}, 8);
var panelNavigation;
module.watch(require("./panelNavigation"), {
  panelNavigation: function (v) {
    panelNavigation = v;
  }
}, 9);
var WLPresets;
module.watch(require("./WLPresets"), {
  WLPresets: function (v) {
    WLPresets = v;
  }
}, 10);
// TODO: add this to namespace definitions
Meteor.startup(function () {
  OHIF.viewer.loadIndicatorDelay = 200;
  OHIF.viewer.defaultTool = 'wwwc';
  OHIF.viewer.refLinesEnabled = true;
  OHIF.viewer.isPlaying = {};
  OHIF.viewer.cine = {
    framesPerSecond: 24,
    loop: true
  };
  OHIF.viewer.defaultHotkeys = {
    // Tool hotkeys
    defaultTool: 'ESC',
    zoom: 'Z',
    wwwc: 'W',
    pan: 'P',
    angle: 'A',
    stackScroll: 'S',
    magnify: 'M',
    length: '',
    annotate: '',
    dragProbe: '',
    ellipticalRoi: '',
    rectangleRoi: '',
    // Viewport hotkeys
    flipH: 'H',
    flipV: 'V',
    rotateR: 'R',
    rotateL: 'L',
    invert: 'I',
    zoomIn: '',
    zoomOut: '',
    zoomToFit: '',
    resetViewport: '',
    clearTools: '',
    // Viewport navigation hotkeys
    scrollDown: 'DOWN',
    scrollUp: 'UP',
    scrollLastImage: 'END',
    scrollFirstImage: 'HOME',
    previousDisplaySet: 'PAGEUP',
    nextDisplaySet: 'PAGEDOWN',
    nextPanel: 'RIGHT',
    previousPanel: 'LEFT',
    // Miscellaneous hotkeys
    toggleOverlayTags: 'SHIFT',
    toggleCinePlay: 'SPACE',
    toggleCineDialog: '',
    toggleDownloadDialog: '',
    // Preset hotkeys
    WLPreset0: '1',
    WLPreset1: '2',
    WLPreset2: '3',
    WLPreset3: '4',
    WLPreset4: '5',
    WLPreset5: '6',
    WLPreset6: '7',
    WLPreset7: '8',
    WLPreset8: '9',
    WLPreset9: '0'
  }; // For now

  OHIF.viewer.hotkeys = OHIF.viewer.defaultHotkeys; // Create commands context for viewer

  var contextName = 'viewer';
  OHIF.commands.createContext(contextName); // Create a function that returns true if the active viewport is empty

  var isActiveViewportEmpty = function () {
    var activeViewport = Session.get('activeViewport') || 0;
    return $('.imageViewerViewport').eq(activeViewport).hasClass('empty');
  }; // Functions to register the tool switching commands


  var registerToolCommands = function (map) {
    return _.each(map, function (commandName, toolId) {
      OHIF.commands.register(contextName, toolId, {
        name: commandName,
        action: toolManager.setActiveTool,
        params: toolId
      });
    });
  }; // Register the default tool command


  OHIF.commands.register(contextName, 'defaultTool', {
    name: 'Default Tool',
    action: function () {
      return toolManager.setActiveTool(toolManager.getDefaultTool());
    }
  }); // Register the tool switching commands

  registerToolCommands({
    wwwc: 'W/L',
    zoom: 'Zoom',
    angle: 'Angle Measurement',
    dragProbe: 'Pixel Probe',
    ellipticalRoi: 'Elliptical ROI',
    rectangleRoi: 'Rectangle ROI',
    magnify: 'Magnify',
    annotate: 'Annotate',
    stackScroll: 'Scroll Stack',
    pan: 'Pan',
    length: 'Length Measurement',
    wwwcRegion: 'W/L by Region',
    crosshairs: 'Crosshairs'
  }); // Functions to register the viewport commands

  var registerViewportCommands = function (map) {
    return _.each(map, function (commandName, commandId) {
      OHIF.commands.register(contextName, commandId, {
        name: commandName,
        action: viewportUtils[commandId],
        disabled: isActiveViewportEmpty
      });
    });
  }; // Register the viewport commands


  registerViewportCommands({
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    zoomToFit: 'Zoom to Fit',
    invert: 'Invert',
    flipH: 'Flip Horizontally',
    flipV: 'Flip Vertically',
    rotateR: 'Rotate Right',
    rotateL: 'Rotate Left',
    resetViewport: 'Reset',
    clearTools: 'Clear Tools'
  }); // Register the preset switching commands

  var applyPreset = function (presetName) {
    return WLPresets.applyWLPresetToActiveElement(presetName);
  };

  for (var i = 0; i < 10; i++) {
    OHIF.commands.register(contextName, "WLPreset" + i, {
      name: "W/L Preset " + (i + 1),
      action: applyPreset,
      params: i
    });
  } // Check if display sets can be moved


  var canMoveDisplaySets = function (isNext) {
    if (!OHIF.viewerbase.layoutManager) {
      return false;
    } else {
      return OHIF.viewerbase.layoutManager.canMoveDisplaySets(isNext);
    }
  }; // Register viewport navigation commands


  OHIF.commands.set(contextName, {
    scrollDown: {
      name: 'Scroll Down',
      action: function () {
        return !isActiveViewportEmpty() && switchToImageRelative(1);
      }
    },
    scrollUp: {
      name: 'Scroll Up',
      action: function () {
        return !isActiveViewportEmpty() && switchToImageRelative(-1);
      }
    },
    scrollFirstImage: {
      name: 'Scroll to First Image',
      action: function () {
        return !isActiveViewportEmpty() && switchToImageByIndex(0);
      }
    },
    scrollLastImage: {
      name: 'Scroll to Last Image',
      action: function () {
        return !isActiveViewportEmpty() && switchToImageByIndex(-1);
      }
    },
    previousDisplaySet: {
      name: 'Previous Series',
      action: function () {
        return OHIF.viewerbase.layoutManager.moveDisplaySets(false);
      },
      disabled: function () {
        return !canMoveDisplaySets(false);
      }
    },
    nextDisplaySet: {
      name: 'Next Series',
      action: function () {
        return OHIF.viewerbase.layoutManager.moveDisplaySets(true);
      },
      disabled: function () {
        return !canMoveDisplaySets(true);
      }
    },
    nextPanel: {
      name: 'Next Panel',
      action: function () {
        return panelNavigation.loadNextActivePanel();
      }
    },
    previousPanel: {
      name: 'Previous Panel',
      action: function () {
        return panelNavigation.loadPreviousActivePanel();
      }
    }
  }, true); // Register miscellaneous commands

  OHIF.commands.set(contextName, {
    toggleOverlayTags: {
      name: 'Toggle Image Annotations',
      action: function () {
        var $dicomTags = $('.imageViewerViewportOverlay .dicomTag');
        $dicomTags.toggle($dicomTags.eq(0).css('display') === 'none');
      }
    },
    toggleCinePlay: {
      name: 'Play/Pause Cine',
      action: viewportUtils.toggleCinePlay,
      disabled: OHIF.viewerbase.viewportUtils.hasMultipleFrames
    },
    toggleCineDialog: {
      name: 'Show/Hide Cine Controls',
      action: viewportUtils.toggleCineDialog,
      disabled: OHIF.viewerbase.viewportUtils.hasMultipleFrames
    },
    toggleDownloadDialog: {
      name: 'Show/Hide Download Dialog',
      action: viewportUtils.toggleDownloadDialog,
      disabled: function () {
        return !viewportUtils.isDownloadEnabled();
      }
    }
  }, true);
  OHIF.viewer.hotkeyFunctions = {};
  OHIF.viewer.loadedSeriesData = {}; // Enable hotkeys

  hotkeyUtils.enableHotkeys();
}); // Define a jQuery reverse function

$.fn.reverse = [].reverse;
/**
 * Overrides OHIF's refLinesEnabled
 * @param  {Boolean} refLinesEnabled True to enable and False to disable
 */

function setOHIFRefLines(refLinesEnabled) {
  OHIF.viewer.refLinesEnabled = refLinesEnabled;
}
/**
 * Overrides OHIF's hotkeys
 * @param  {Object} hotkeys Object with hotkeys mapping
 */


function setOHIFHotkeys(hotkeys) {
  OHIF.viewer.hotkeys = hotkeys;
}
/**
 * Binds all hotkeys keydown events to the tasks defined in
 * OHIF.viewer.hotkeys or a given param
 * @param  {Object} hotkeys hotkey and task mapping (not required). If not given, uses OHIF.viewer.hotkeys
 */


function enableHotkeys(hotkeys) {
  var definitions = hotkeys || OHIF.viewer.hotkeys;
  OHIF.hotkeys.set('viewer', definitions, true);
  OHIF.context.set('viewer');
}
/**
 * Export functions inside hotkeyUtils namespace.
 */


var hotkeyUtils = {
  setOHIFRefLines: setOHIFRefLines,

  /* @TODO: find a better place for this...  */
  setOHIFHotkeys: setOHIFHotkeys,
  enableHotkeys: enableHotkeys
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"imageViewerViewportData.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/imageViewerViewportData.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  imageViewerViewportData: function () {
    return imageViewerViewportData;
  }
});
var imageViewerViewportData = {
  callbacks: {},
  extendData: function () {// No-Op function...
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"instanceClassSpecificViewport.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/instanceClassSpecificViewport.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getInstanceClassDefaultViewport: function () {
    return getInstanceClassDefaultViewport;
  },
  setInstanceClassDefaultViewportFunction: function () {
    return setInstanceClassDefaultViewportFunction;
  }
});
var instanceClassViewportSettingsFunctions = {};

var getInstanceClassDefaultViewport = function (series, enabledElement, imageId) {
  var instanceClass = series.sopClassUid;

  if (!instanceClassViewportSettingsFunctions[instanceClass]) {
    return;
  }

  return instanceClassViewportSettingsFunctions[instanceClass](series, enabledElement, imageId);
};

var setInstanceClassDefaultViewportFunction = function (instanceClass, fn) {
  instanceClassViewportSettingsFunctions[instanceClass] = fn;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isImage.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/isImage.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isImage: function () {
    return isImage;
  }
});
var sopClassDictionary;
module.watch(require("./sopClassDictionary"), {
  sopClassDictionary: function (v) {
    sopClassDictionary = v;
  }
}, 0);

function isImage(sopClassUid) {
  if (sopClassUid === sopClassDictionary.ComputedRadiographyImageStorage || sopClassUid === sopClassDictionary.DigitalXRayImageStorageForPresentation || sopClassUid === sopClassDictionary.DigitalXRayImageStorageForProcessing || sopClassUid === sopClassDictionary.DigitalMammographyXRayImageStorageForPresentation || sopClassUid === sopClassDictionary.DigitalMammographyXRayImageStorageForProcessing || sopClassUid === sopClassDictionary.DigitalIntraOralXRayImageStorageForPresentation || sopClassUid === sopClassDictionary.DigitalIntraOralXRayImageStorageForProcessing || sopClassUid === sopClassDictionary.CTImageStorage || sopClassUid === sopClassDictionary.EnhancedCTImageStorage || sopClassUid === sopClassDictionary.LegacyConvertedEnhancedCTImageStorage || sopClassUid === sopClassDictionary.UltrasoundMultiframeImageStorage || sopClassUid === sopClassDictionary.MRImageStorage || sopClassUid === sopClassDictionary.EnhancedMRImageStorage || sopClassUid === sopClassDictionary.EnhancedMRColorImageStorage || sopClassUid === sopClassDictionary.LegacyConvertedEnhancedMRImageStorage || sopClassUid === sopClassDictionary.UltrasoundImageStorage || sopClassUid === sopClassDictionary.SecondaryCaptureImageStorage || sopClassUid === sopClassDictionary.MultiframeSingleBitSecondaryCaptureImageStorage || sopClassUid === sopClassDictionary.MultiframeGrayscaleByteSecondaryCaptureImageStorage || sopClassUid === sopClassDictionary.MultiframeGrayscaleWordSecondaryCaptureImageStorage || sopClassUid === sopClassDictionary.MultiframeTrueColorSecondaryCaptureImageStorage || sopClassUid === sopClassDictionary.XRayAngiographicImageStorage || sopClassUid === sopClassDictionary.EnhancedXAImageStorage || sopClassUid === sopClassDictionary.XRayRadiofluoroscopicImageStorage || sopClassUid === sopClassDictionary.EnhancedXRFImageStorage || sopClassUid === sopClassDictionary.XRay3DAngiographicImageStorage || sopClassUid === sopClassDictionary.XRay3DCraniofacialImageStorage || sopClassUid === sopClassDictionary.BreastTomosynthesisImageStorage || sopClassUid === sopClassDictionary.BreastProjectionXRayImageStorageForPresentation || sopClassUid === sopClassDictionary.BreastProjectionXRayImageStorageForProcessing || sopClassUid === sopClassDictionary.IntravascularOpticalCoherenceTomographyImageStorageForPresentation || sopClassUid === sopClassDictionary.IntravascularOpticalCoherenceTomographyImageStorageForProcessing || sopClassUid === sopClassDictionary.NuclearMedicineImageStorage || sopClassUid === sopClassDictionary.VLEndoscopicImageStorage || sopClassUid === sopClassDictionary.VideoEndoscopicImageStorage || sopClassUid === sopClassDictionary.VLMicroscopicImageStorage || sopClassUid === sopClassDictionary.VideoMicroscopicImageStorage || sopClassUid === sopClassDictionary.VLSlideCoordinatesMicroscopicImageStorage || sopClassUid === sopClassDictionary.VLPhotographicImageStorage || sopClassUid === sopClassDictionary.VideoPhotographicImageStorage || sopClassUid === sopClassDictionary.OphthalmicPhotography8BitImageStorage || sopClassUid === sopClassDictionary.OphthalmicPhotography16BitImageStorage || sopClassUid === sopClassDictionary.OphthalmicTomographyImageStorage || sopClassUid === sopClassDictionary.VLWholeSlideMicroscopyImageStorage || sopClassUid === sopClassDictionary.PositronEmissionTomographyImageStorage || sopClassUid === sopClassDictionary.EnhancedPETImageStorage || sopClassUid === sopClassDictionary.LegacyConvertedEnhancedPETImageStorage || sopClassUid === sopClassDictionary.RTImageStorage) {
    return true;
  }

  return false;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"panelNavigation.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/panelNavigation.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  panelNavigation: function () {
    return panelNavigation;
  }
});
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
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
var setActiveViewport;
module.watch(require("./setActiveViewport"), {
  setActiveViewport: function (v) {
    setActiveViewport = v;
  }
}, 3);

var loadPreviousActivePanel = function () {
  OHIF.log.info('nextActivePanel');
  var currentIndex = Session.get('activeViewport');
  currentIndex--;
  var $viewports = $('.imageViewerViewport');
  var numViewports = $viewports.length;

  if (currentIndex < 0) {
    currentIndex = numViewports - 1;
  }

  var element = $viewports.get(currentIndex);

  if (!element) {
    return;
  }

  setActiveViewport(element);
};

var loadNextActivePanel = function () {
  OHIF.log.info('nextActivePanel');
  var currentIndex = Session.get('activeViewport');
  currentIndex++;
  var $viewports = $('.imageViewerViewport');
  var numViewports = $viewports.length;

  if (currentIndex >= numViewports) {
    currentIndex = 0;
  }

  var element = $viewports.get(currentIndex);

  if (!element) {
    return;
  }

  setActiveViewport(element);
};
/**
 * Export functions inside panelNavigation namespace.
 */


var panelNavigation = {
  loadPreviousActivePanel: loadPreviousActivePanel,
  loadNextActivePanel: loadNextActivePanel
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"prepareViewerData.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/prepareViewerData.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  prepareViewerData: function () {
    return prepareViewerData;
  }
});

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 0);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 1);

var prepareViewerData = function (_ref) {
  var studyInstanceUids = _ref.studyInstanceUids,
      seriesInstanceUids = _ref.seriesInstanceUids,
      timepointId = _ref.timepointId,
      _ref$timepointsFilter = _ref.timepointsFilter,
      timepointsFilter = _ref$timepointsFilter === void 0 ? {} : _ref$timepointsFilter;
  // Clear the cornerstone tool data to sync the measurements with the measurements API
  cornerstoneTools.globalImageIdSpecificToolStateManager.restoreToolState({}); // Retrieve the studies metadata

  var promise = new Promise(function (resolve, reject) {
    var processData = function (viewerData) {
      OHIF.studies.retrieveStudiesMetadata(viewerData.studyInstanceUids, viewerData.seriesInstanceUids).then(function (studies) {
        // Add additional metadata to our study from the studylist
        studies.forEach(function (study) {
          var studylistStudy = OHIF.studylist.collections.Studies.findOne({
            studyInstanceUid: study.studyInstanceUid
          });

          if (!studylistStudy) {
            return;
          }

          Object.assign(study, studylistStudy);
        });
        resolve({
          studies: studies,
          viewerData: viewerData
        });
      }).catch(reject);
    }; // Check if the studies are already given and ignore the timepoint ID if so


    if (studyInstanceUids && studyInstanceUids.length) {
      var viewerData = {
        studyInstanceUids: studyInstanceUids,
        seriesInstanceUids: seriesInstanceUids
      };
      processData(viewerData);
    } else {
      // Find the timepoint by ID and load the studies from it
      OHIF.studylist.timepointApi.retrieveTimepoints(timepointsFilter).then(function () {
        var viewerData = buildViewerDataFromTimepointId(timepointId);
        processData(viewerData);
      }).catch(reject);
    }
  });
  return promise;
};

var buildViewerDataFromTimepointId = function (timepointId) {
  var timepoint = OHIF.studylist.timepointApi.timepoints.findOne({
    timepointId: timepointId
  });

  if (!timepoint) {
    throw new Error('Unable to find a time point with the given ID');
  } // Get the relevant studyInstanceUids given the timepoints


  var data = getDataFromTimepoint(timepoint);

  if (!data.studyInstanceUids) {
    throw new Error('No studies found that are related to this timepoint');
  } // Build the viewer data and return it


  return Object.assign(data, {
    currentTimepointId: timepointId
  });
};
/**
 * Retrieves related studies given a Baseline or Follow-up Timepoint
 *
 * @param {Object} timepoint A document from the Timepoints Collection
 * @returns {Object} An object containing the related studies UIDs and timepoint IDs
 */


var getDataFromTimepoint = function (timepoint) {
  var relatedStudies = _.clone(timepoint.studyInstanceUids); // If this is the baseline, we should stop here and return the relevant studies


  if (isBaseline(timepoint)) {
    return {
      studyInstanceUids: relatedStudies,
      timepointIds: [timepoint.timepointId]
    };
  } // Otherwise, this is a follow-up exam, so we should also find the baseline timepoint,
  // and all studies related to it. We also enforce that the Baseline should have a studyDate
  // prior to the latest studyDate in the current (Follow-up) Timepoint.


  var Timepoints = OHIF.studylist.timepointApi.timepoints;
  var baseline = Timepoints.findOne({
    timepointType: 'baseline',
    patientId: timepoint.patientId,
    latestDate: {
      $lte: timepoint.latestDate
    }
  });
  var timepointIds = [];

  if (baseline) {
    relatedStudies = relatedStudies.concat(baseline.studyInstanceUids);
    timepointIds.push(baseline.timepointId);
  } else {
    OHIF.log.warn('No Baseline found while opening a Follow-up Timepoint');
  }

  var priorFilter = {
    latestDate: {
      $lt: timepoint.latestDate
    }
  };
  var priorSorting = {
    sort: {
      latestDate: -1
    }
  };
  var prior = OHIF.studylist.timepointApi.timepoints.findOne(priorFilter, priorSorting);

  if (prior && prior.timepointId !== baseline.timepointId) {
    relatedStudies = relatedStudies.concat(prior.studyInstanceUids);
    timepointIds.push(prior.timepointId);
  }

  relatedStudies = _.uniq(relatedStudies);
  timepointIds.push(timepoint.timepointId);
  return {
    studyInstanceUids: relatedStudies,
    timepointIds: timepointIds
  };
};
/**
 * Checks if a Timepoints is a baseline or not
 *
 * @param {Object} timepoint A document from the Timepoints Collection
 * @returns {boolean} Whether or not the timepoint is stored as a Baseline
 */


var isBaseline = function (timepoint) {
  return timepoint.timepointType === 'baseline';
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"renderViewer.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/renderViewer.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  renderViewer: function () {
    return renderViewer;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

var renderViewer = function (context, params) {
  var layoutTemplate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'app';
  // Wait until the viewer data is ready to render it
  var promise = OHIF.viewerbase.prepareViewerData(params); // Show loading state while preparing the viewer data

  OHIF.ui.showDialog('dialogLoading', {
    promise: promise
  }); // Render the viewer when the data is ready

  promise.then(function (_ref) {
    var studies = _ref.studies,
        viewerData = _ref.viewerData;
    OHIF.viewer.data = viewerData;
    context.render(layoutTemplate, {
      data: {
        template: 'viewer',
        studies: studies
      }
    });
  }).catch(function (error) {
    context.render(layoutTemplate, {
      data: {
        template: 'errorText',
        error: error
      }
    });
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"setActiveViewport.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/setActiveViewport.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  setActiveViewport: function () {
    return setActiveViewport;
  }
});
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 0);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
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
var StudyPrefetcher;
module.watch(require("./classes/StudyPrefetcher"), {
  StudyPrefetcher: function (v) {
    StudyPrefetcher = v;
  }
}, 4);
var displayReferenceLines;
module.watch(require("./displayReferenceLines"), {
  displayReferenceLines: function (v) {
    displayReferenceLines = v;
  }
}, 5);

function setActiveViewport(element) {
  var $viewerports = $('.imageViewerViewport');
  var viewportIndex;

  if (typeof element === 'number') {
    viewportIndex = element;
  } else {
    viewportIndex = $viewerports.index(element);
  }

  var $element = $viewerports.eq(viewportIndex);

  if (!$element.length) {
    OHIF.log.info('setActiveViewport element does not exist');
    return;
  }

  OHIF.log.info("setActiveViewport setting viewport index: " + viewportIndex); // If viewport is not active

  if (!$element.parents('.viewportContainer').hasClass('active')) {
    // Trigger an event for compatibility with other systems
    $element.trigger('OHIFBeforeActivateViewport');
  } // When an OHIFActivateViewport event is fired, update the Meteor Session
  // with the viewport index that it was fired from.


  Session.set('activeViewport', viewportIndex);
  var randomId = Random.id(); // Update the Session variable to inform that a viewport is active

  Session.set('viewportActivated', randomId); // Update the Session variable to the UI re-renders

  Session.set('LayoutManagerUpdated', randomId); // Add the 'active' class to the parent container to highlight the active viewport

  $('#imageViewerViewports .viewportContainer').removeClass('active');
  $element.parents('.viewportContainer').addClass('active'); // Finally, enable stack prefetching and hide the reference lines from
  // the newly activated viewport that has a canvas

  if ($element.find('canvas').length) {
    // Cornerstone Tools compare DOM elements (check getEnabledElement cornerstone function)
    // so we can't pass a jQuery object as an argument, otherwise it throws an excepetion
    var domElement = $element.get(0);
    displayReferenceLines(domElement);
    StudyPrefetcher.getInstance().prefetch(); // @TODO Add this to OHIFAfterActivateViewport handler...

    if (OHIF.viewer.stackImagePositionOffsetSynchronizer) {
      OHIF.viewer.stackImagePositionOffsetSynchronizer.update();
    }
  } // Set the div to focused, so keypress events are handled
  //$(element).focus();
  //.focus() event breaks in FF&IE


  $element.triggerHandler('focus'); // Trigger OHIFAfterActivateViewport event on activated instance
  // for compatibility with other systems

  $element.trigger('OHIFAfterActivateViewport');
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"setFocusToActiveViewport.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/setFocusToActiveViewport.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  setFocusToActiveViewport: function () {
    return setFocusToActiveViewport;
  }
});
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 0);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 1);

/**
 * Restores the browser focus to the currently specified active viewport
 * as determined from Meteor's Session variable.
 *
 * This is allows keydown events to be captured on the focused element.
 */
var setFocusToActiveViewport = function () {
  // Get the list of viewports
  var viewports = $('.imageViewerViewport'); // Get the current active viewport index from Session

  var activeViewportIndex = Session.get('activeViewport'); // Find the div from the list of viewports

  var activeViewport = viewports.eq(activeViewportIndex); // Set the browser focus to this div

  activeViewport.focus();
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"sopClassDictionary.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/sopClassDictionary.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  sopClassDictionary: function () {
    return sopClassDictionary;
  }
});
var sopClassDictionary = {
  ComputedRadiographyImageStorage: "1.2.840.10008.5.1.4.1.1.1",
  DigitalXRayImageStorageForPresentation: "1.2.840.10008.5.1.4.1.1.1.1",
  DigitalXRayImageStorageForProcessing: "1.2.840.10008.5.1.4.1.1.1.1.1",
  DigitalMammographyXRayImageStorageForPresentation: "1.2.840.10008.5.1.4.1.1.1.2",
  DigitalMammographyXRayImageStorageForProcessing: "1.2.840.10008.5.1.4.1.1.1.2.1",
  DigitalIntraOralXRayImageStorageForPresentation: "1.2.840.10008.5.1.4.1.1.1.3",
  DigitalIntraOralXRayImageStorageForProcessing: "1.2.840.10008.5.1.4.1.1.1.3.1",
  CTImageStorage: "1.2.840.10008.5.1.4.1.1.2",
  EnhancedCTImageStorage: "1.2.840.10008.5.1.4.1.1.2.1",
  LegacyConvertedEnhancedCTImageStorage: "1.2.840.10008.5.1.4.1.1.2.2",
  UltrasoundMultiframeImageStorage: "1.2.840.10008.5.1.4.1.1.3.1",
  MRImageStorage: "1.2.840.10008.5.1.4.1.1.4",
  EnhancedMRImageStorage: "1.2.840.10008.5.1.4.1.1.4.1",
  MRSpectroscopyStorage: "1.2.840.10008.5.1.4.1.1.4.2",
  EnhancedMRColorImageStorage: "1.2.840.10008.5.1.4.1.1.4.3",
  LegacyConvertedEnhancedMRImageStorage: "1.2.840.10008.5.1.4.1.1.4.4",
  UltrasoundImageStorage: "1.2.840.10008.5.1.4.1.1.6.1",
  EnhancedUSVolumeStorage: "1.2.840.10008.5.1.4.1.1.6.2",
  SecondaryCaptureImageStorage: "1.2.840.10008.5.1.4.1.1.7",
  MultiframeSingleBitSecondaryCaptureImageStorage: "1.2.840.10008.5.1.4.1.1.7.1",
  MultiframeGrayscaleByteSecondaryCaptureImageStorage: "1.2.840.10008.5.1.4.1.1.7.2",
  MultiframeGrayscaleWordSecondaryCaptureImageStorage: "1.2.840.10008.5.1.4.1.1.7.3",
  MultiframeTrueColorSecondaryCaptureImageStorage: "1.2.840.10008.5.1.4.1.1.7.4",
  Sop12LeadECGWaveformStorage: "1.2.840.10008.5.1.4.1.1.9.1.1",
  GeneralECGWaveformStorage: "1.2.840.10008.5.1.4.1.1.9.1.2",
  AmbulatoryECGWaveformStorage: "1.2.840.10008.5.1.4.1.1.9.1.3",
  HemodynamicWaveformStorage: "1.2.840.10008.5.1.4.1.1.9.2.1",
  CardiacElectrophysiologyWaveformStorage: "1.2.840.10008.5.1.4.1.1.9.3.1",
  BasicVoiceAudioWaveformStorage: "1.2.840.10008.5.1.4.1.1.9.4.1",
  GeneralAudioWaveformStorage: "1.2.840.10008.5.1.4.1.1.9.4.2",
  ArterialPulseWaveformStorage: "1.2.840.10008.5.1.4.1.1.9.5.1",
  RespiratoryWaveformStorage: "1.2.840.10008.5.1.4.1.1.9.6.1",
  GrayscaleSoftcopyPresentationStateStorage: "1.2.840.10008.5.1.4.1.1.11.1",
  ColorSoftcopyPresentationStateStorage: "1.2.840.10008.5.1.4.1.1.11.2",
  PseudoColorSoftcopyPresentationStateStorage: "1.2.840.10008.5.1.4.1.1.11.3",
  BlendingSoftcopyPresentationStateStorage: "1.2.840.10008.5.1.4.1.1.11.4",
  XAXRFGrayscaleSoftcopyPresentationStateStorage: "1.2.840.10008.5.1.4.1.1.11.5",
  XRayAngiographicImageStorage: "1.2.840.10008.5.1.4.1.1.12.1",
  EnhancedXAImageStorage: "1.2.840.10008.5.1.4.1.1.12.1.1",
  XRayRadiofluoroscopicImageStorage: "1.2.840.10008.5.1.4.1.1.12.2",
  EnhancedXRFImageStorage: "1.2.840.10008.5.1.4.1.1.12.2.1",
  XRay3DAngiographicImageStorage: "1.2.840.10008.5.1.4.1.1.13.1.1",
  XRay3DCraniofacialImageStorage: "1.2.840.10008.5.1.4.1.1.13.1.2",
  BreastTomosynthesisImageStorage: "1.2.840.10008.5.1.4.1.1.13.1.3",
  BreastProjectionXRayImageStorageForPresentation: "1.2.840.10008.5.1.4.1.1.13.1.4",
  BreastProjectionXRayImageStorageForProcessing: "1.2.840.10008.5.1.4.1.1.13.1.5",
  IntravascularOpticalCoherenceTomographyImageStorageForPresentation: "1.2.840.10008.5.1.4.1.1.14.1",
  IntravascularOpticalCoherenceTomographyImageStorageForProcessing: "1.2.840.10008.5.1.4.1.1.14.2",
  NuclearMedicineImageStorage: "1.2.840.10008.5.1.4.1.1.20",
  RawDataStorage: "1.2.840.10008.5.1.4.1.1.66",
  SpatialRegistrationStorage: "1.2.840.10008.5.1.4.1.1.66.1",
  SpatialFiducialsStorage: "1.2.840.10008.5.1.4.1.1.66.2",
  DeformableSpatialRegistrationStorage: "1.2.840.10008.5.1.4.1.1.66.3",
  SegmentationStorage: "1.2.840.10008.5.1.4.1.1.66.4",
  SurfaceSegmentationStorage: "1.2.840.10008.5.1.4.1.1.66.5",
  RealWorldValueMappingStorage: "1.2.840.10008.5.1.4.1.1.67",
  SurfaceScanMeshStorage: "1.2.840.10008.5.1.4.1.1.68.1",
  SurfaceScanPointCloudStorage: "1.2.840.10008.5.1.4.1.1.68.2",
  VLEndoscopicImageStorage: "1.2.840.10008.5.1.4.1.1.77.1.1",
  VideoEndoscopicImageStorage: "1.2.840.10008.5.1.4.1.1.77.1.1.1",
  VLMicroscopicImageStorage: "1.2.840.10008.5.1.4.1.1.77.1.2",
  VideoMicroscopicImageStorage: "1.2.840.10008.5.1.4.1.1.77.1.2.1",
  VLSlideCoordinatesMicroscopicImageStorage: "1.2.840.10008.5.1.4.1.1.77.1.3",
  VLPhotographicImageStorage: "1.2.840.10008.5.1.4.1.1.77.1.4",
  VideoPhotographicImageStorage: "1.2.840.10008.5.1.4.1.1.77.1.4.1",
  OphthalmicPhotography8BitImageStorage: "1.2.840.10008.5.1.4.1.1.77.1.5.1",
  OphthalmicPhotography16BitImageStorage: "1.2.840.10008.5.1.4.1.1.77.1.5.2",
  StereometricRelationshipStorage: "1.2.840.10008.5.1.4.1.1.77.1.5.3",
  OphthalmicTomographyImageStorage: "1.2.840.10008.5.1.4.1.1.77.1.5.4",
  VLWholeSlideMicroscopyImageStorage: "1.2.840.10008.5.1.4.1.1.77.1.6",
  LensometryMeasurementsStorage: "1.2.840.10008.5.1.4.1.1.78.1",
  AutorefractionMeasurementsStorage: "1.2.840.10008.5.1.4.1.1.78.2",
  KeratometryMeasurementsStorage: "1.2.840.10008.5.1.4.1.1.78.3",
  SubjectiveRefractionMeasurementsStorage: "1.2.840.10008.5.1.4.1.1.78.4",
  VisualAcuityMeasurementsStorage: "1.2.840.10008.5.1.4.1.1.78.5",
  SpectaclePrescriptionReportStorage: "1.2.840.10008.5.1.4.1.1.78.6",
  OphthalmicAxialMeasurementsStorage: "1.2.840.10008.5.1.4.1.1.78.7",
  IntraocularLensCalculationsStorage: "1.2.840.10008.5.1.4.1.1.78.8",
  MacularGridThicknessandVolumeReport: "1.2.840.10008.5.1.4.1.1.79.1",
  OphthalmicVisualFieldStaticPerimetryMeasurementsStorage: "1.2.840.10008.5.1.4.1.1.80.1",
  OphthalmicThicknessMapStorage: "1.2.840.10008.5.1.4.1.1.81.1",
  CornealTopographyMapStorage: "1.2.840.10008.5.1.4.1.1.82.1",
  BasicTextSR: "1.2.840.10008.5.1.4.1.1.88.11",
  EnhancedSR: "1.2.840.10008.5.1.4.1.1.88.22",
  ComprehensiveSR: "1.2.840.10008.5.1.4.1.1.88.33",
  Comprehensive3DSR: "1.2.840.10008.5.1.4.1.1.88.34",
  ProcedureLog: "1.2.840.10008.5.1.4.1.1.88.40",
  MammographyCADSR: "1.2.840.10008.5.1.4.1.1.88.50",
  KeyObjectSelection: "1.2.840.10008.5.1.4.1.1.88.59",
  ChestCADSR: "1.2.840.10008.5.1.4.1.1.88.65",
  XRayRadiationDoseSR: "1.2.840.10008.5.1.4.1.1.88.67",
  RadiopharmaceuticalRadiationDoseSR: "1.2.840.10008.5.1.4.1.1.88.68",
  ColonCADSR: "1.2.840.10008.5.1.4.1.1.88.69",
  ImplantationPlanSRDocumentStorage: "1.2.840.10008.5.1.4.1.1.88.70",
  EncapsulatedPDFStorage: "1.2.840.10008.5.1.4.1.1.104.1",
  EncapsulatedCDAStorage: "1.2.840.10008.5.1.4.1.1.104.2",
  PositronEmissionTomographyImageStorage: "1.2.840.10008.5.1.4.1.1.128",
  EnhancedPETImageStorage: "1.2.840.10008.5.1.4.1.1.130",
  LegacyConvertedEnhancedPETImageStorage: "1.2.840.10008.5.1.4.1.1.128.1",
  BasicStructuredDisplayStorage: "1.2.840.10008.5.1.4.1.1.131",
  RTImageStorage: "1.2.840.10008.5.1.4.1.1.481.1",
  RTDoseStorage: "1.2.840.10008.5.1.4.1.1.481.2",
  RTStructureSetStorage: "1.2.840.10008.5.1.4.1.1.481.3",
  RTBeamsTreatmentRecordStorage: "1.2.840.10008.5.1.4.1.1.481.4",
  RTPlanStorage: "1.2.840.10008.5.1.4.1.1.481.5",
  RTBrachyTreatmentRecordStorage: "1.2.840.10008.5.1.4.1.1.481.6",
  RTTreatmentSummaryRecordStorage: "1.2.840.10008.5.1.4.1.1.481.7",
  RTIonPlanStorage: "1.2.840.10008.5.1.4.1.1.481.8",
  RTIonBeamsTreatmentRecordStorage: "1.2.840.10008.5.1.4.1.1.481.9",
  RTBeamsDeliveryInstructionStorage: "1.2.840.10008.5.1.4.34.7",
  GenericImplantTemplateStorage: "1.2.840.10008.5.1.4.43.1",
  ImplantAssemblyTemplateStorage: "1.2.840.10008.5.1.4.44.1",
  ImplantTemplateGroupStorage: "1.2.840.10008.5.1.4.45.1"
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"sortStudy.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/sortStudy.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  sortStudy: function () {
    return sortStudy;
  }
});
var OHIFError;
module.watch(require("./classes/OHIFError"), {
  OHIFError: function (v) {
    OHIFError = v;
  }
}, 0);

function sortStudy(study) {
  if (!study || !study.seriesList) {
    throw new OHIFError('Insufficient study data was provided to sortStudy');
  }

  study.seriesList.sort(function (a, b) {
    return a.seriesNumber - b.seriesNumber;
  });
  study.seriesList.forEach(function (series) {
    series.instances.sort(function (a, b) {
      return a.instanceNumber - b.instanceNumber;
    });
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"sortingManager.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/sortingManager.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  sortingManager: function () {
    return sortingManager;
  }
});
var createStacks;
module.watch(require("./createStacks"), {
  createStacks: function (v) {
    createStacks = v;
  }
}, 0);

var getDisplaySets = function (studyMetadata, seriesNumber, iteratorFunction) {
  var iteratorFn = typeof iteratorFunction !== 'function' ? createStacks : iteratorFunction;
  return iteratorFn(studyMetadata, seriesNumber);
};

var sortingManager = {
  getDisplaySets: getDisplaySets
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"switchToImageByIndex.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/switchToImageByIndex.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  switchToImageByIndex: function () {
    return switchToImageByIndex;
  }
});
var viewportUtils;
module.watch(require("./viewportUtils"), {
  viewportUtils: function (v) {
    viewportUtils = v;
  }
}, 0);

function switchToImageByIndex(newImageIdIndex) {
  var element = viewportUtils.getActiveViewportElement();
  cornerstoneTools.scrollToIndex(element, newImageIdIndex);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"switchToImageRelative.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/switchToImageRelative.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  switchToImageRelative: function () {
    return switchToImageRelative;
  }
});
var viewportUtils;
module.watch(require("./viewportUtils"), {
  viewportUtils: function (v) {
    viewportUtils = v;
  }
}, 0);

function switchToImageRelative(distanceFromCurrentIndex) {
  var element = viewportUtils.getActiveViewportElement();
  cornerstoneTools.scroll(element, distanceFromCurrentIndex);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"textMarkerUtils.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/textMarkerUtils.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  textMarkerUtils: function () {
    return textMarkerUtils;
  }
});
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);
var toolManager;
module.watch(require("./toolManager"), {
  toolManager: function (v) {
    toolManager = v;
  }
}, 1);
var viewportUtils;
module.watch(require("./viewportUtils"), {
  viewportUtils: function (v) {
    viewportUtils = v;
  }
}, 2);

var changeTextCallback = function (data, eventData, doneChangingTextCallback) {
  // This handles the double-click/long-press event on Spine text marker labels
  var keyPressHandler = function (e) {
    // If Enter or Esc are pressed, close the dialog
    if (e.which === 13 || e.which === 27) {
      closeHandler();
    }
  }; // Deactivate textMarker tool after editing a spine label & if spine is not active tool


  var deactivateAfterEdit = function () {
    if (toolManager.getActiveTool() !== 'spine') {
      var element = viewportUtils.getActiveViewportElement();
      cornerstoneTools.textMarker.deactivate(element, 1);
    }
  };

  var closeHandler = function () {
    dialog.get(0).close();
    doneChangingTextCallback(data, select.val());
    deactivateAfterEdit(); // Reset the focus to the active viewport element
    // This makes the mobile Safari keyboard close

    var element = viewportUtils.getActiveViewportElement();
    $(element).focus();
  };

  var dialog = $('#textMarkerRelabelDialog'); // Is necessary to use Blaze object to not create 
  // circular depencency with helper object (./helpers)

  if (Blaze._globalHelpers.isTouchDevice()) {
    // Center the dialog on screen on touch devices
    dialog.css({
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto'
    });
    dialog.find('.dialog.arrow').hide();
  } else {
    // Place the dialog above the tool that is being relabelled
    // TODO = Switch this to the tool coordinates, but put back into
    // page coordinates.
    dialog.css({
      top: eventData.currentPoints.page.y - dialog.outerHeight() - 20,
      left: eventData.currentPoints.page.x - dialog.outerWidth() / 2
    });
    dialog.find('.dialog.arrow').show();
  }

  var select = dialog.find('.relabelSelect');
  var confirm = dialog.find('.relabelConfirm');
  var remove = dialog.find('.relabelRemove'); // If the remove button is clicked, delete this marker

  remove.off('click');
  remove.on('click', function () {
    dialog.get(0).close();
    doneChangingTextCallback(data, undefined, true);
    deactivateAfterEdit();
  });
  dialog.get(0).showModal();
  $('.relabelSelect').val(data.text).trigger('change'); //Update selector to the current

  confirm.off('click');
  confirm.on('click', function () {
    closeHandler();
  }); // Use keydown since keypress doesn't handle ESC in Chrome

  dialog.off('keydown');
  dialog.on('keydown', keyPressHandler);
};

var textMarkerUtils = {
  changeTextCallback: changeTextCallback
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"thumbnailDragHandlers.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/thumbnailDragHandlers.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  thumbnailDragHandlers: function () {
    return thumbnailDragHandlers;
  }
});
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 0);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 1);

var cloneElement = function (element, targetId) {
  // Clone the DOM element
  var clone = element.cloneNode(true); // Find any canvas children to clone

  var clonedCanvases = $(clone).find('canvas');
  clonedCanvases.each(function (canvasIndex, clonedCanvas) {
    // Draw from the original canvas to the cloned canvas
    var context = clonedCanvas.getContext('2d');
    var thumbnailCanvas = $(element).find('canvas').get(canvasIndex);
    context.drawImage(thumbnailCanvas, 0, 0);
  }); // Update the clone with the targetId

  clone.id = targetId;
  clone.style.visibility = 'hidden';
  return clone;
};

var thumbnailDragStartHandler = function (event, data) {
  // Prevent any scrolling behaviour normally caused by the original event
  event.originalEvent.preventDefault(); // Identify the current study and series index from the thumbnail's DOM position

  var targetThumbnail = event.currentTarget;
  var $imageThumbnail = $(targetThumbnail); // Force to hardware acceleration to move element
  // if browser supports translate property

  var useTransform = OHIF.ui.styleProperty.check('transform', 'translate(1px, 1px)'); // Clone the image thumbnail

  var targetId = 'DragClone';
  var clone = cloneElement(targetThumbnail, targetId);
  var $clone = $(clone);
  $clone.addClass('imageThumbnailClone'); // Set pointerEvents to pass through the clone DOM element
  // This is necessary in order to identify what is below it
  // when using document.elementFromPoint

  clone.style.pointerEvents = 'none'; // Append the clone to the body

  document.body.appendChild(clone); // Set the cursor x and y positions from the current touch/mouse coordinates

  var cursorX;
  var cursorY; // Handle touchStart cases

  if (event.type === 'touchstart') {
    cursorX = event.originalEvent.touches[0].pageX;
    cursorY = event.originalEvent.touches[0].pageY;
  } else {
    cursorX = event.pageX;
    cursorY = event.pageY; // Also hook up event handlers for mouse events

    var handlers = {};

    handlers.mousemove = function (event) {
      return thumbnailDragHandler(event);
    };

    handlers.mouseup = function (event) {
      return thumbnailDragEndHandler(event, data, handlers);
    };

    $(document).on('mousemove', handlers.mousemove);
    $(document).on('mouseup', handlers.mouseup);
  } // This block gets the current offset of the touch/mouse
  // relative to the window
  //
  // i.e. Where did the user grab it from?


  var offset = $imageThumbnail.offset();
  var left = offset.left,
      top = offset.top; // This difference is saved for later so the element movement looks normal

  var diff = {
    x: cursorX - left,
    y: cursorY - top
  };
  $clone.data('diff', diff);
  $clone.css({
    visibility: 'hidden',
    'z-index': 100000
  }); // This sets the default style properties of the cloned element so it is
  // ready to be dragged around the page

  if (useTransform) {
    var viewerHeight = $('#viewer').height();
    var headerHeight = $('.header').outerHeight();
    var heightDiff = viewerHeight + headerHeight; // Save height difference for later to set top position of the element during movement

    $clone.data('heightDiff', heightDiff);
    var positionX = cursorX - diff.x;
    var positionY = cursorY - diff.y - heightDiff;
    var translation = "translate(" + positionX + "px, " + positionY + "px)";
    OHIF.ui.styleProperty.set($clone.get(0), 'transform', translation);
  } else {
    $clone.css({
      left: cursorX - diff.x,
      position: 'fixed',
      top: cursorY - diff.y
    });
  }
};

var thumbnailDragHandler = function (event) {
  // Get the touch/mouse coordinates from the event
  var cursorX;
  var cursorY;

  if (event.type === 'touchmove') {
    cursorX = event.originalEvent.changedTouches[0].pageX;
    cursorY = event.originalEvent.changedTouches[0].pageY;
  } else {
    cursorX = event.pageX;
    cursorY = event.pageY;
  } // Find the clone element and update it's position on the page


  var $clone = $('#DragClone');
  var diff = $clone.data('diff'); // Force to hardware acceleration to move element
  // if browser supports translate property

  var useTransform = OHIF.ui.styleProperty.check('transform', 'translate(1px, 1px)');
  $clone.css({
    visibility: 'visible',
    'z-index': 100000
  }); // This sets the default style properties of the cloned element so it is
  // ready to be dragged around the page

  if (useTransform) {
    var heightDiff = $clone.data('heightDiff');
    var positionX = cursorX - diff.x;
    var positionY = cursorY - diff.y - heightDiff;
    var translation = "translate(" + positionX + "px, " + positionY + "px)";
    OHIF.ui.styleProperty.set($clone.get(0), 'transform', translation);
  } else {
    $clone.css({
      left: cursorX - diff.x,
      position: 'fixed',
      top: cursorY - diff.y
    });
  } // Identify the element below the current cursor position


  var elemBelow = document.elementFromPoint(cursorX, cursorY); // If none exists, stop here

  if (!elemBelow) {
    return;
  } // Remove any current faded effects on viewports


  $('.imageViewerViewport canvas').removeClass('faded'); // Figure out what to do depending on what we're dragging over

  var $viewportsDraggedOver = $(elemBelow).parents('.imageViewerViewport');

  if ($viewportsDraggedOver.length) {
    // If we're dragging over a non-empty viewport, fade it and change the cursor style
    $viewportsDraggedOver.find('canvas').not('.magnifyTool').addClass('faded');
    document.body.style.cursor = 'copy';
  } else if (elemBelow.classList.contains('imageViewerViewport') && elemBelow.classList.contains('empty')) {
    // If we're dragging over an empty viewport, just change the cursor style
    document.body.style.cursor = 'copy';
  } else {
    // Otherwise, keep the cursor as no-drop style
    document.body.style.cursor = 'no-drop';
  }
};

var thumbnailDragEndHandler = function (event, data, handlers) {
  // Remove the mouse event listeners
  if (handlers) {
    $(document).off('mousemove', handlers.mousemove);
    $(document).off('mouseup', handlers.mouseup);
  } // Reset the cursor style to the default


  document.body.style.cursor = 'auto'; // Get the cloned element

  var $clone = $('#DragClone'); // If it doesn't exist, stop here

  if (!$clone.length) {
    return;
  }

  var offset = $clone.offset();
  var top = offset.top,
      left = offset.left;
  var diff = $clone.data('diff'); // Identify the element below the cloned element position

  var elemBelow = document.elementFromPoint(left + diff.x, top + diff.y); // Remove all cloned elements from the page

  $('.imageThumbnailClone').remove(); // Remove any current faded effects on viewports

  $('.imageViewerViewport canvas').removeClass('faded'); // If none exists, stop here

  if (!elemBelow) {
    return;
  } // Remove any fade effects on the element below


  elemBelow.classList.remove('faded');
  var element;
  var $viewportsDraggedOver = $(elemBelow).closest('.imageViewerViewport');

  if ($viewportsDraggedOver.length) {
    // If we're dragging over a non-empty viewport, retrieve it
    element = $viewportsDraggedOver.get(0);
  } else if (elemBelow.classList.contains('imageViewerViewport') && elemBelow.classList.contains('empty')) {
    // If we're dragging over an empty viewport, retrieve that instead
    element = elemBelow;
  } else {
    // Otherwise, stop here
    return false;
  } // If there is no stored drag and drop data, stop here


  if (!data) {
    return false;
  } // Get the dropped viewport index


  var viewportIndex = $('.imageViewerViewport').index(element); // Rerender the viewport using the dragged thumbnail data

  OHIF.viewerbase.layoutManager.rerenderViewportWithNewDisplaySet(viewportIndex, data);
  return false;
};

var thumbnailDragHandlers = {
  thumbnailDragEndHandler: thumbnailDragEndHandler,
  thumbnailDragStartHandler: thumbnailDragStartHandler,
  thumbnailDragHandler: thumbnailDragHandler
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"toolManager.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/toolManager.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  toolManager: function () {
    return toolManager;
  }
});
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
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
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 3);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 4);
var cornerstone, cornerstoneTools;
module.watch(require("meteor/ohif:cornerstone"), {
  cornerstone: function (v) {
    cornerstone = v;
  },
  cornerstoneTools: function (v) {
    cornerstoneTools = v;
  }
}, 5);
var getFrameOfReferenceUID;
module.watch(require("./getFrameOfReferenceUID"), {
  getFrameOfReferenceUID: function (v) {
    getFrameOfReferenceUID = v;
  }
}, 6);
var updateCrosshairsSynchronizer;
module.watch(require("./updateCrosshairsSynchronizer"), {
  updateCrosshairsSynchronizer: function (v) {
    updateCrosshairsSynchronizer = v;
  }
}, 7);
var crosshairsSynchronizers;
module.watch(require("./crosshairsSynchronizers"), {
  crosshairsSynchronizers: function (v) {
    crosshairsSynchronizers = v;
  }
}, 8);
var annotateTextUtils;
module.watch(require("./annotateTextUtils"), {
  annotateTextUtils: function (v) {
    annotateTextUtils = v;
  }
}, 9);
var textMarkerUtils;
module.watch(require("./textMarkerUtils"), {
  textMarkerUtils: function (v) {
    textMarkerUtils = v;
  }
}, 10);
var isTouchDevice;
module.watch(require("./helpers/isTouchDevice"), {
  isTouchDevice: function (v) {
    isTouchDevice = v;
  }
}, 11);
var defaultTool = {
  left: 'wwwc',
  right: 'zoom',
  middle: 'pan'
};
var activeTool;
var defaultMouseButtonTools;
var tools = {};
var gestures = {
  zoomTouchPinch: {
    enabled: true
  },
  panMultiTouch: {
    enabled: true,
    numPointers: 2
  },
  stackScrollMultiTouch: {
    enabled: true,
    numPointers: 3
  },
  doubleTapZoom: {
    enabled: true
  }
};
var toolDefaultStates = {
  activate: [],
  deactivate: ['length', 'angle', 'annotate', 'ellipticalRoi', 'rectangleRoi', 'spine'],
  enable: [],
  disable: [],
  disabledToolButtons: [],
  shadowConfig: {
    shadow: false,
    shadowColor: '#000000',
    shadowOffsetX: 0,
    shadowOffsetY: 0
  },
  textBoxConfig: {
    centering: {
      x: true,
      y: true
    }
  }
};
var initialized = false;
/**
 * Exported "toolManager" Singleton
 */

var toolManager = {
  init: function () {
    toolManager.addTool('wwwc', {
      mouse: cornerstoneTools.wwwc,
      touch: cornerstoneTools.wwwcTouchDrag
    });
    toolManager.addTool('zoom', {
      mouse: cornerstoneTools.zoom,
      touch: cornerstoneTools.zoomTouchDrag
    });
    toolManager.addTool('wwwcRegion', {
      mouse: cornerstoneTools.wwwcRegion,
      touch: cornerstoneTools.wwwcRegionTouch
    });
    toolManager.addTool('dragProbe', {
      mouse: cornerstoneTools.dragProbe,
      touch: cornerstoneTools.dragProbeTouch
    });
    toolManager.addTool('pan', {
      mouse: cornerstoneTools.pan,
      touch: cornerstoneTools.panTouchDrag,
      multiTouch: cornerstoneTools.panMultiTouch
    });
    toolManager.addTool('stackScroll', {
      mouse: cornerstoneTools.stackScroll,
      touch: cornerstoneTools.stackScrollTouchDrag,
      multiTouch: cornerstoneTools.stackScrollMultiTouch
    });
    toolManager.addTool('length', {
      mouse: cornerstoneTools.length,
      touch: cornerstoneTools.lengthTouch
    });
    toolManager.addTool('angle', {
      mouse: cornerstoneTools.simpleAngle,
      touch: cornerstoneTools.simpleAngleTouch
    });
    toolManager.addTool('magnify', {
      mouse: cornerstoneTools.magnify,
      touch: cornerstoneTools.magnifyTouchDrag
    });
    toolManager.addTool('ellipticalRoi', {
      mouse: cornerstoneTools.ellipticalRoi,
      touch: cornerstoneTools.ellipticalRoiTouch
    });
    toolManager.addTool('rectangleRoi', {
      mouse: cornerstoneTools.rectangleRoi,
      touch: cornerstoneTools.rectangleRoiTouch
    });
    toolManager.addTool('annotate', {
      mouse: cornerstoneTools.arrowAnnotate,
      touch: cornerstoneTools.arrowAnnotateTouch
    });
    toolManager.addTool('rotate', {
      mouse: cornerstoneTools.rotate,
      touch: cornerstoneTools.rotateTouchDrag
    });
    toolManager.addTool('spine', {
      mouse: cornerstoneTools.textMarker,
      touch: cornerstoneTools.textMarkerTouch
    });
    toolManager.addTool('crosshairs', {
      mouse: cornerstoneTools.crosshairs,
      touch: cornerstoneTools.crosshairsTouch
    }); // if a default tool is globally defined, make it the default tool...

    if (OHIF.viewer.defaultTool) {
      defaultTool.left = OHIF.viewer.defaultTool;
    }

    defaultMouseButtonTools = Meteor.settings && Meteor.settings.public && Meteor.settings.public.defaultMouseButtonTools; // Override default tool if defined in settings

    var defaultLeft = defaultMouseButtonTools && defaultMouseButtonTools.left || 'wwwc';
    var defaultRight = defaultMouseButtonTools && defaultMouseButtonTools.right || 'zoom';
    var defaultMiddle = defaultMouseButtonTools && defaultMouseButtonTools.middle || 'pan';
    defaultTool = {
      left: defaultLeft,
      right: defaultRight,
      middle: defaultMiddle
    };
    this.configureTools();
    initialized = true;
  },
  configureTools: function () {
    // Get Cornerstone Tools
    var _cornerstoneTools = cornerstoneTools,
        textStyle = _cornerstoneTools.textStyle,
        toolStyle = _cornerstoneTools.toolStyle,
        toolColors = _cornerstoneTools.toolColors,
        length = _cornerstoneTools.length,
        arrowAnnotate = _cornerstoneTools.arrowAnnotate,
        zoom = _cornerstoneTools.zoom,
        ellipticalRoi = _cornerstoneTools.ellipticalRoi,
        textMarker = _cornerstoneTools.textMarker,
        magnify = _cornerstoneTools.magnify; // Set text box background color

    textStyle.setBackgroundColor('transparent'); // Set the tool font and font size
    // context.font = "[style] [variant] [weight] [size]/[line height] [font family]";

    var fontFamily = 'Roboto, OpenSans, HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif';
    textStyle.setFont('15px ' + fontFamily); // Set the tool width

    toolStyle.setToolWidth(2); // Set color for inactive tools

    toolColors.setToolColor('rgb(255, 255, 0)'); // Set color for active tools

    toolColors.setActiveColor('rgb(0, 255, 0)'); // Set shadow configuration

    var shadowConfig = toolManager.getToolDefaultStates().shadowConfig; // Get some tools config to not override them

    var lengthConfig = length.getConfiguration();
    var ellipticalRoiConfig = ellipticalRoi.getConfiguration(); // Add shadow to length tool

    length.setConfiguration(Object.assign({}, lengthConfig, shadowConfig, {
      drawHandlesOnHover: true
    })); // Add shadow to length tool

    ellipticalRoi.setConfiguration(Object.assign({}, ellipticalRoiConfig, shadowConfig)); // Set the configuration values for the Text Marker (Spine Labelling) tool

    var $startFrom = $('#startFrom');
    var $ascending = $('#ascending');
    var textMarkerConfig = {
      markers: ['L5', 'L4', 'L3', 'L2', 'L1', // Lumbar spine
      'T12', 'T11', 'T10', 'T9', 'T8', 'T7', // Thoracic spine
      'T6', 'T5', 'T4', 'T3', 'T2', 'T1', 'C7', 'C6', 'C5', 'C4', 'C3', 'C2', 'C1'],
      current: $startFrom.val(),
      ascending: $ascending.is(':checked'),
      loop: true,
      changeTextCallback: textMarkerUtils.changeTextCallback,
      shadow: shadowConfig.shadow,
      shadowColor: shadowConfig.shadowColor,
      shadowOffsetX: shadowConfig.shadowOffsetX,
      shadowOffsetY: shadowConfig.shadowOffsetY
    };
    textMarker.setConfiguration(textMarkerConfig); // Set the configuration values for the text annotation (Arrow) tool

    var annotateConfig = {
      getTextCallback: annotateTextUtils.getTextCallback,
      changeTextCallback: annotateTextUtils.changeTextCallback,
      drawHandles: false,
      arrowFirst: true
    };
    arrowAnnotate.setConfiguration(annotateConfig);
    var zoomConfig = {
      minScale: 0.05,
      maxScale: 10
    };
    zoom.setConfiguration(zoomConfig);
    var magnifyConfig = {
      magnifySize: 300,
      magnificationLevel: 3
    };
    magnify.setConfiguration(magnifyConfig);

    if (Meteor.settings && Meteor.settings.public && Meteor.settings.public.defaultGestures) {
      gestures.zoomTouchPinch = Meteor.settings.public.defaultGestures.zoomTouchPinch || gestures.zoomTouchPinch;
      gestures.stackScrollMultiTouch = Meteor.settings.public.defaultGestures.stackScrollMultiTouch || gestures.stackScrollMultiTouch;
      gestures.panMultiTouch = Meteor.settings.public.defaultGestures.panMultiTouch || gestures.panMultiTouch;
      gestures.doubleTapZoom = Meteor.settings.public.defaultGestures.doubleTapZoom || gestures.doubleTapZoom;
    } //  Set number of fingers to stack scroll


    if (gestures.stackScrollMultiTouch.enabled === true && gestures.stackScrollMultiTouch.numPointers) {
      var stackScrollMultiTouchConfig = {
        testPointers: function (eventData) {
          return eventData.numPointers === gestures.stackScrollMultiTouch.numPointers;
        }
      };
      cornerstoneTools.stackScrollMultiTouch.setConfiguration(stackScrollMultiTouchConfig);
    } //  Set number of fingers to pan


    if (gestures.panMultiTouch.enabled === true && gestures.panMultiTouch.numPointers) {
      var panMultiTouchConfig = {
        testPointers: function (eventData) {
          return eventData.numPointers === gestures.panMultiTouch.numPointers;
        }
      };
      cornerstoneTools.panMultiTouch.setConfiguration(panMultiTouchConfig);
    }
  },

  /**
   * This function searches an object to return the keys that contain a specific value
   *
   * @param object {object} The object to be searched
   * @param value The value to be found
   *
   * @returns {array} The keys for which the object has the specified value
   */
  getKeysByValue: function (object, value) {
    // http://stackoverflow.com/questions/9907419/javascript-object-get-key-by-value
    return Object.keys(object).filter(function (key) {
      return object[key] === value;
    });
  },
  configureLoadProcess: function () {
    // Whenever CornerstoneImageLoadProgress is fired, identify which viewports
    // the "in-progress" image is to be displayed in. Then pass the percent complete
    // via the Meteor Session to the other templates to be displayed in the relevant viewports.
    function handleLoadProgress(e) {
      var eventData = e.detail;
      var viewportIndices = toolManager.getKeysByValue(window.ViewportLoading, eventData.imageId);
      viewportIndices.forEach(function (viewportIndex) {
        Session.set('CornerstoneLoadProgress' + viewportIndex, eventData.percentComplete);
      });
      var encodedId = OHIF.string.encodeId(eventData.imageId);
      Session.set('CornerstoneThumbnailLoadProgress' + encodedId, eventData.percentComplete);
    }

    cornerstone.events.removeEventListener('cornerstoneimageloadprogress', handleLoadProgress);
    cornerstone.events.addEventListener('cornerstoneimageloadprogress', handleLoadProgress);
  },
  setGestures: function (newGestures) {
    gestures = newGestures;
  },
  getGestures: function () {
    return gestures;
  },
  addTool: function (name, base) {
    tools[name] = base;
  },
  getTools: function () {
    return tools;
  },
  setToolDefaultStates: function (states) {
    toolDefaultStates = states;
  },
  getToolDefaultStates: function () {
    return toolDefaultStates;
  },
  setActiveToolForElement: function (toolId, element, button) {
    var canvases = $(element).find('canvas');

    if (element.classList.contains('empty') || !canvases.length) {
      return;
    } // If button is not defined, we should consider it left


    if (!button) {
      button = 'left';
    } // First, deactivate the current active tool


    tools[activeTool.left].mouse.deactivate(element, 1); // 1 means left mouse button

    tools[activeTool.middle].mouse.deactivate(element, 2); // 2 means middle mouse button

    tools[activeTool.right].mouse.deactivate(element, 4); // 3 means right mouse button

    if (tools[activeTool.left].touch) {
      tools[activeTool.left].touch.deactivate(element);
    }

    if (tools[activeTool.right].multiTouch) {
      tools[activeTool.right].multiTouch.disable(element);
    } // Enable tools based on their default states


    Object.keys(toolDefaultStates).forEach(function (action) {
      var relevantTools = toolDefaultStates[action];
      if (!relevantTools || !relevantTools.length || action === 'disabledToolButtons') return;
      relevantTools.forEach(function (toolType) {
        // the currently active tool has already been deactivated and can be skipped
        if (action === 'deactivate' && (toolType === activeTool.left || toolType === activeTool.middle || toolType === activeTool.right)) {
          return;
        }

        tools[toolType].mouse[action](element, action === 'activate' || action === 'deactivate' ? 1 : void 0);

        if (tools[toolType].touch) {
          tools[toolType].touch[action](element);
        }

        if (tools[toolType].multiTouch) {
          tools[toolType].multiTouch[action](element);
        }
      });
    }); // Get the stack toolData

    var toolData = cornerstoneTools.getToolState(element, 'stack');

    if (!toolData || !toolData.data || !toolData.data.length) {
      return;
    } // Get the imageIds for this element


    var imageIds = toolData.data[0].imageIds; // Get the mouse button tools

    var newToolIdLeft = activeTool.left;

    if (button === 'left') {
      newToolIdLeft = toolId;
    }

    var newCornerstoneToolLeft = tools[newToolIdLeft]; // left mouse tool is used for touch as well

    var newToolIdMiddle = activeTool.middle;

    if (button === 'middle') {
      newToolIdMiddle = toolId;
    }

    var newCornerstoneToolMiddle = cornerstoneTools[newToolIdMiddle];
    var newToolIdRight = activeTool.right;

    if (button === 'right') {
      newToolIdRight = toolId;
    }

    var newCornerstoneToolRight = tools[newToolIdRight]; // right mouse tool is used for multi-touch as well
    // Deactivate scroll wheel tools

    cornerstoneTools.zoomWheel.deactivate(element);
    cornerstoneTools.stackScrollWheel.deactivate(element);
    cornerstoneTools.panMultiTouch.disable(element);
    cornerstoneTools.zoomTouchPinch.disable(element);
    cornerstoneTools.stackScrollMultiTouch.disable(element);
    cornerstoneTools.doubleTapZoom.disable(element); // Reactivate the relevant scrollwheel tool for this element

    if (imageIds.length > 1) {
      // scroll is the default tool for middle mouse wheel for stacks
      cornerstoneTools.stackScrollWheel.activate(element); // 3 or more finger stack scroll

      if (gestures.stackScrollMultiTouch.enabled === true && gestures.stackScrollMultiTouch.numPointers >= 3) {
        var stackScrollMultiTouchConfig = {
          testPointers: function (eventData) {
            return eventData.numPointers === gestures.stackScrollMultiTouch.numPointers;
          }
        };
        cornerstoneTools.stackScrollMultiTouch.setConfiguration(stackScrollMultiTouchConfig);
        cornerstoneTools.stackScrollMultiTouch.activate(element);
      }
    } else {
      // zoom is the default tool for middle mouse wheel for single images (non stacks)
      cornerstoneTools.zoomWheel.activate(element);
    } // 3 or more finger pan


    if (gestures.panMultiTouch.enabled === true && gestures.panMultiTouch.numPointers >= 3) {
      var panMultiTouchConfig = {
        testPointers: function (eventData) {
          return eventData.numPointers === gestures.panMultiTouch.numPointers;
        }
      };
      cornerstoneTools.panMultiTouch.setConfiguration(panMultiTouchConfig);
      cornerstoneTools.panMultiTouch.activate(element);
    } // TODO: Remove this messy approach for adding synchronizer when necessary.


    var leftToolSynchronizer;

    if (newToolIdLeft === 'crosshairs') {
      var currentFrameOfReferenceUID = getFrameOfReferenceUID(element);

      if (currentFrameOfReferenceUID) {
        updateCrosshairsSynchronizer(currentFrameOfReferenceUID);
        leftToolSynchronizer = crosshairsSynchronizers.synchronizers[currentFrameOfReferenceUID];
      }

      if (newToolIdLeft === newToolIdMiddle && newToolIdMiddle === newToolIdRight) {
        newCornerstoneToolRight.mouse.activate(element, 7); // 7 means left mouse button, right mouse button and middle mouse button
      } else if (newToolIdLeft === newToolIdMiddle) {
        newCornerstoneToolMiddle.activate(element, 3); // 3 means left mouse button and middle mouse button

        newCornerstoneToolRight.mouse.activate(element, 4); // 4 means right mouse button
      } else if (newToolIdMiddle === newToolIdRight) {
        newCornerstoneToolRight.mouse.activate(element, 6); // 6 means right mouse button and middle mouse button

        newCornerstoneToolLeft.mouse.activate(element, 1, leftToolSynchronizer); // 1 means left mouse button
      } else if (newToolIdLeft === newToolIdRight) {
        newCornerstoneToolMiddle.activate(element, 2); // 2 means middle mouse button

        newCornerstoneToolRight.mouse.activate(element, 5); // 5 means left mouse button and right mouse button
      } else {
        newCornerstoneToolLeft.mouse.activate(element, 1, leftToolSynchronizer); // 1 means left mouse button

        newCornerstoneToolMiddle.activate(element, 2); // 2 means middle mouse button

        newCornerstoneToolRight.mouse.activate(element, 4); // 4 means right mouse button
      }
    } else {
      // This block ensures that all mouse button tools keep working
      if (newToolIdLeft === newToolIdMiddle && newToolIdMiddle === newToolIdRight) {
        newCornerstoneToolRight.mouse.activate(element, 7); // 7 means left mouse button, right mouse button and middle mouse button
      } else if (newToolIdLeft === newToolIdMiddle) {
        newCornerstoneToolMiddle.activate(element, 3); // 3 means left mouse button and middle mouse button

        newCornerstoneToolRight.mouse.activate(element, 4); // 4 means right mouse button
      } else if (newToolIdMiddle === newToolIdRight) {
        newCornerstoneToolRight.mouse.activate(element, 6); // 6 means right mouse button and middle mouse button

        newCornerstoneToolLeft.mouse.activate(element, 1); // 1 means left mouse button
      } else if (newToolIdLeft === newToolIdRight) {
        newCornerstoneToolMiddle.activate(element, 2); // 2 means middle mouse button

        newCornerstoneToolRight.mouse.activate(element, 5); // 5 means left mouse button and right mouse button
      } else {
        setTimeout(function () {
          return newCornerstoneToolLeft.mouse.activate(element, 1);
        }); // >>>> TODO Find out why it's working only with a timeout
        // newCornerstoneToolLeft.mouse.activate(element, 1); // 1 means left mouse button

        newCornerstoneToolMiddle.activate(element, 2); // 2 means middle mouse button

        newCornerstoneToolRight.mouse.activate(element, 4); // 4 means right mouse button
      }
    } // One finger touch


    if (newCornerstoneToolLeft.touch) {
      if (leftToolSynchronizer) {
        newCornerstoneToolLeft.touch.activate(element, leftToolSynchronizer);
      } else {
        newCornerstoneToolLeft.touch.activate(element);
      }
    } // Two finger swipe


    var twoFingerMultiTouchConfig = {
      testPointers: function (eventData) {
        return eventData.numPointers === 2;
      }
    };

    if (newCornerstoneToolRight.multiTouch) {
      newCornerstoneToolRight.multiTouch.setConfiguration(twoFingerMultiTouchConfig);
      newCornerstoneToolRight.multiTouch.activate(element);
    } else if (gestures.panMultiTouch.enabled === true && gestures.panMultiTouch.numPointers === 2) {
      cornerstoneTools.panMultiTouch.setConfiguration(twoFingerMultiTouchConfig);
      cornerstoneTools.panMultiTouch.activate(element);
    } else if (gestures.stackScrollMultiTouch.enabled === true && gestures.stackScrollMultiTouch.numPointers === 2) {
      cornerstoneTools.stackScrollMultiTouch.setConfiguration(twoFingerMultiTouchConfig);
      cornerstoneTools.stackScrollMultiTouch.activate(element);
    } // Two finger pinch


    if (gestures.zoomTouchPinch.enabled === true) {
      cornerstoneTools.zoomTouchPinch.activate(element);
    } // Double Tap


    if (gestures.doubleTapZoom.enabled === true) {
      cornerstoneTools.doubleTapZoom.activate(element);
    }
  },
  setActiveTool: function (toolId, elements, button) {
    if (!initialized) {
      toolManager.init();
    }

    var $elements;

    if (!elements || !elements.length) {
      $elements = $('.imageViewerViewport');
    } else {
      $elements = $(elements);
    }

    var checkElementEnabled = function (allElementsEnabled, element) {
      try {
        cornerstone.getEnabledElement(element);
        return allElementsEnabled;
      } catch (error) {
        return true;
      }
    };

    if (!activeTool) {
      activeTool = defaultTool;
    } // If button is not defined, we should consider it left


    if (!button) {
      button = 'left';
    }

    var activeToolId = activeTool[button];
    /**
     * TODO: Add textMarkerDialogs template to OHIF's
     */

    var dialog = document.getElementById('textMarkerOptionsDialog');

    if (dialog) {
      if (toolId === 'spine' && activeToolId !== 'spine' && dialog.getAttribute('open') !== 'open') {
        dialog.show();
      } else if (activeToolId !== 'spine' && dialog.getAttribute('open') === 'open') {
        dialog.close();
      }
    }

    if (!toolId) {
      toolId = defaultTool[button];
    } // Otherwise, set the active tool for all viewport elements


    $elements.each(function (index, element) {
      if (checkElementEnabled(element) === false) {
        return;
      }

      toolManager.setActiveToolForElement(toolId, element, button);
    });
    activeTool[button] = toolId; // Enable reactivity

    Session.set('ToolManagerActiveToolUpdated', Random.id());
  },
  getNearbyToolData: function (element, coords, toolTypes) {
    var allTools = this.getTools();
    var touchDevice = isTouchDevice();
    var nearbyTool = {};
    var pointNearTool = false;
    toolTypes.forEach(function (toolType) {
      var toolData = cornerstoneTools.getToolState(element, toolType);

      if (!toolData) {
        return;
      }

      toolData.data.forEach(function (data, index) {
        var toolInterfaceName = toolType;
        var toolInterface; // Edge cases where the tool is not the same as the typeName

        if (toolType === 'simpleAngle') {
          toolInterfaceName = 'angle';
        } else if (toolType === 'arrowAnnotate') {
          toolInterfaceName = 'annotate';
        }

        if (touchDevice) {
          toolInterface = allTools[toolInterfaceName].touch;
        } else {
          toolInterface = allTools[toolInterfaceName].mouse;
        }

        if (toolInterface.pointNearTool(element, data, coords)) {
          pointNearTool = true;
          nearbyTool.tool = data;
          nearbyTool.index = index;
          nearbyTool.toolType = toolType;
        }
      });

      if (pointNearTool) {
        return false;
      }
    });
    return pointNearTool ? nearbyTool : undefined;
  },
  getActiveTool: function (button) {
    if (!initialized) {
      toolManager.init();
    } // If activeTool is not defined, we should set as defaultTool


    if (!activeTool) {
      activeTool = defaultTool;
    } // If button is not defined, we should consider it left


    if (!button) {
      button = 'left';
    }

    return activeTool[button];
  },
  setDefaultTool: function (tool, button) {
    // If button is not defined, we should consider it left
    if (!button) {
      button = 'left';
    }

    defaultTool[button] = tool;
  },
  getDefaultTool: function (button) {
    // If button is not defined, we should consider it left
    if (!button) {
      button = 'left';
    }

    return defaultTool[button];
  },
  setConfigureTools: function (configureTools) {
    if (typeof configureTools === 'function') {
      this.configureTools = configureTools;
    }
  },
  activateCommandButton: function (button) {
    var activeCommandButtons = Session.get('ToolManagerActiveCommandButtons') || [];

    if (activeCommandButtons.indexOf(button) === -1) {
      activeCommandButtons.push(button);
      Session.set('ToolManagerActiveCommandButtons', activeCommandButtons);
    }
  },
  deactivateCommandButton: function (button) {
    var activeCommandButtons = Session.get('ToolManagerActiveCommandButtons') || [];
    var index = activeCommandButtons.indexOf(button);

    if (index !== -1) {
      activeCommandButtons.splice(index, 1);
      Session.set('ToolManagerActiveCommandButtons', activeCommandButtons);
    }
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"unloadHandlers.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/unloadHandlers.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  unloadHandlers: function () {
    return unloadHandlers;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
var unloadHandlers = {
  beforeUnload: function (event) {
    // Check for any unsaved changes on viewer namespace...
    if (OHIF.ui.unsavedChanges.probe('viewer.*') > 0) {
      var confirmationMessage = 'You have unsaved changes!';
      event.returnValue = confirmationMessage;
      return confirmationMessage;
    }
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"updateAllViewports.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/updateAllViewports.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  updateAllViewports: function () {
    return updateAllViewports;
  }
});
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 0);

function updateAllViewports() {
  var viewports = $('.imageViewerViewport').not('.empty');
  viewports.each(function (index, element) {
    cornerstone.updateImage(element);
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"updateCrosshairsSynchronizer.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/updateCrosshairsSynchronizer.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  updateCrosshairsSynchronizer: function () {
    return updateCrosshairsSynchronizer;
  }
});
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 0);
var getFrameOfReferenceUID;
module.watch(require("./getFrameOfReferenceUID"), {
  getFrameOfReferenceUID: function (v) {
    getFrameOfReferenceUID = v;
  }
}, 1);
var crosshairsSynchronizers;
module.watch(require("./crosshairsSynchronizers"), {
  crosshairsSynchronizers: function (v) {
    crosshairsSynchronizers = v;
  }
}, 2);

function updateCrosshairsSynchronizer(currentFrameOfReferenceUID) {
  // Check if an old synchronizer exists, and if it does, destroy it
  // If not, create a new one
  var synchronizer = crosshairsSynchronizers.synchronizers[currentFrameOfReferenceUID];

  if (synchronizer) {
    // If it already exists, remove all source & target elements
    synchronizer.destroy();
  } else {
    // Create a new synchronizer
    crosshairsSynchronizers.synchronizers[currentFrameOfReferenceUID] = new cornerstoneTools.Synchronizer('cornerstonenewimage', cornerstoneTools.updateImageSynchronizer);
    synchronizer = crosshairsSynchronizers.synchronizers[currentFrameOfReferenceUID];
  } // Add all elements that stem from the same frame of reference


  $('.imageViewerViewport').each(function (index, element) {
    var frameOfReferenceUID = getFrameOfReferenceUID(element);

    if (currentFrameOfReferenceUID !== frameOfReferenceUID) {
      return;
    }

    synchronizer.add(element);
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"updateMetaDataManager.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/updateMetaDataManager.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  updateMetaDataManager: function () {
    return updateMetaDataManager;
  }
});

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 0);
var getWADORSImageId;
module.watch(require("./getWADORSImageId"), {
  getWADORSImageId: function (v) {
    getWADORSImageId = v;
  }
}, 1);
var WadoRsMetaDataBuilder;
module.watch(require("./classes/metadata/WadoRsMetaDataBuilder"), {
  WadoRsMetaDataBuilder: function (v) {
    WadoRsMetaDataBuilder = v;
  }
}, 2);

function getRadiopharmaceuticalInfoMetaData(instance) {
  var radiopharmaceuticalInfo = instance.radiopharmaceuticalInfo;

  if (instance.modality !== 'PT' || !radiopharmaceuticalInfo) {
    return;
  }

  return new WadoRsMetaDataBuilder().addTag('00181072', radiopharmaceuticalInfo.radiopharmaceuticalStartTime).addTag('00181074', radiopharmaceuticalInfo.radionuclideTotalDose).addTag('00181075', radiopharmaceuticalInfo.radionuclideHalfLife).toJSON();
}

var getWadoRsInstanceMetaData = function (study, series, instance) {
  return new WadoRsMetaDataBuilder().addTag('00080016', instance.sopClassUid).addTag('00080018', instance.sopInstanceUid).addTag('00080021', series.seriesDate).addTag('00080031', series.seriesTime).addTag('00080060', instance.modality).addTag('00101010', study.patientAge).addTag('00101020', study.patientSize).addTag('00101030', study.patientWeight).addTag('00180050', instance.sliceThickness).addTag('0020000e', series.seriesInstanceUid).addTag('00200011', series.seriesNumber).addTag('0020000d', study.studyInstanceUid).addTag('00200013', instance.instanceNumber).addTag('00200032', instance.imagePositionPatient, true).addTag('00200037', instance.imageOrientationPatient, true).addTag('00200052', instance.frameOfReferenceUID).addTag('00201041', instance.sliceLocation).addTag('00280002', instance.samplesPerPixel).addTag('00280004', instance.photometricInterpretation).addTag('00280006', instance.planarConfiguration).addTag('00280010', instance.rows).addTag('00280011', instance.columns).addTag('00280030', instance.pixelSpacing, true).addTag('00280034', instance.pixelAspectRatio, true).addTag('00280100', instance.bitsAllocated).addTag('00280101', instance.bitsStored).addTag('00280102', instance.highBit).addTag('00280103', instance.pixelRepresentation).addTag('00280106', instance.smallestPixelValue).addTag('00280107', instance.largestPixelValue).addTag('00281050', instance.windowCenter, true).addTag('00281051', instance.windowWidth, true).addTag('00281052', instance.rescaleIntercept).addTag('00281053', instance.rescaleSlope).addTag('00281054', instance.rescaleType).addTag('00281101', instance.redPaletteColorLookupTableDescriptor).addTag('00281102', instance.greenPaletteColorLookupTableDescriptor).addTag('00281103', instance.bluePaletteColorLookupTableDescriptor).addTag('00281201', instance.redPaletteColorLookupTableData).addTag('00281202', instance.greenPaletteColorLookupTableData).addTag('00281203', instance.bluePaletteColorLookupTableData).addTag('00540016', getRadiopharmaceuticalInfoMetaData(instance)).toJSON();
};

function updateMetaDataManager(study) {
  study.seriesList.forEach(function (series) {
    series.instances.forEach(function (instance) {
      // Cache just images that are going to be loaded via WADO-RS
      if (instance.imageRendering !== 'wadors' && instance.thumbnailRendering !== 'wadors') {
        return;
      }

      var metaData = getWadoRsInstanceMetaData(study, series, instance);
      var numberOfFrames = instance.numberOfFrames || 1; // We can share the same metaData with all frames because it doesn't have
      // any frame specific data, such as frameNumber, pixelData, offset, etc.
      // WADO-RS frame number is 1-based

      for (var frameNumber = 0; frameNumber < numberOfFrames; frameNumber++) {
        var imageId = getWADORSImageId(instance, frameNumber);
        cornerstoneWADOImageLoader.wadors.metaDataManager.add(imageId, metaData);
      }
    });
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"updateOrientationMarkers.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/updateOrientationMarkers.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  updateOrientationMarkers: function () {
    return updateOrientationMarkers;
  }
});
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 0);

function updateOrientationMarkers(element, viewport) {
  // Get the current viewport settings
  if (!viewport) {
    viewport = cornerstone.getViewport(element);
  } // Updates the orientation labels on the viewport


  var enabledElement = cornerstone.getEnabledElement(element);
  var imagePlane = cornerstone.metaData.get('imagePlane', enabledElement.image.imageId);

  if (!imagePlane || !imagePlane.rowCosines || !imagePlane.columnCosines) {
    return;
  }

  var rowString = cornerstoneTools.orientation.getOrientationString(imagePlane.rowCosines);
  var columnString = cornerstoneTools.orientation.getOrientationString(imagePlane.columnCosines);
  var oppositeRowString = cornerstoneTools.orientation.invertOrientationString(rowString);
  var oppositeColumnString = cornerstoneTools.orientation.invertOrientationString(columnString);
  var markers = {
    top: oppositeColumnString,
    left: oppositeRowString
  }; // If any vertical or horizontal flips are applied, change the orientation strings ahead of
  // the rotation applications

  if (viewport.vflip) {
    markers.top = cornerstoneTools.orientation.invertOrientationString(markers.top);
  }

  if (viewport.hflip) {
    markers.left = cornerstoneTools.orientation.invertOrientationString(markers.left);
  } // Get the viewport orientation marker DOM elements


  var viewportOrientationMarkers = $(element).siblings('.viewportOrientationMarkers');
  var topMarker = viewportOrientationMarkers.find('.topMid');
  var leftMarker = viewportOrientationMarkers.find('.leftMid'); // Swap the labels accordingly if the viewport has been rotated
  // This could be done in a more complex way for intermediate rotation values (e.g. 45 degrees)

  if (viewport.rotation === 90 || viewport.rotation === -270) {
    topMarker.text(markers.left);
    leftMarker.text(cornerstoneTools.orientation.invertOrientationString(markers.top));
  } else if (viewport.rotation === -90 || viewport.rotation === 270) {
    topMarker.text(cornerstoneTools.orientation.invertOrientationString(markers.left));
    leftMarker.text(markers.top);
  } else if (viewport.rotation === 180 || viewport.rotation === -180) {
    topMarker.text(cornerstoneTools.orientation.invertOrientationString(markers.top));
    leftMarker.text(cornerstoneTools.orientation.invertOrientationString(markers.left));
  } else {
    topMarker.text(markers.top);
    leftMarker.text(markers.left);
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"viewportOverlayUtils.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/viewportOverlayUtils.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  viewportOverlayUtils: function () {
    return viewportOverlayUtils;
  }
});
var cornerstone;
module.watch(require("meteor/ohif:cornerstone"), {
  cornerstone: function (v) {
    cornerstone = v;
  }
}, 0);
var getElementIfNotEmpty;
module.watch(require("./getElementIfNotEmpty"), {
  getElementIfNotEmpty: function (v) {
    getElementIfNotEmpty = v;
  }
}, 1);

var getPatient = function (property) {
  if (!this.imageId) {
    return false;
  }

  var patient = cornerstone.metaData.get('patient', this.imageId);

  if (!patient) {
    return '';
  }

  return patient[property];
};

var getStudy = function (property) {
  if (!this.imageId) {
    return false;
  }

  var study = cornerstone.metaData.get('study', this.imageId);

  if (!study) {
    return '';
  }

  return study[property];
};

var getSeries = function (property) {
  if (!this.imageId) {
    return false;
  }

  var series = cornerstone.metaData.get('series', this.imageId);

  if (!series) {
    return '';
  }

  return series[property];
};

var getInstance = function (property) {
  if (!this.imageId) {
    return false;
  }

  var instance = cornerstone.metaData.get('instance', this.imageId);

  if (!instance) {
    return '';
  }

  return instance[property];
};

var getTagDisplay = function (property) {
  if (!this.imageId) {
    return false;
  }

  var instance = cornerstone.metaData.get('tagDisplay', this.imageId);

  if (!instance) {
    return '';
  }

  return instance[property];
};

var getImage = function (viewportIndex) {
  var element = getElementIfNotEmpty(viewportIndex);

  if (!element) {
    return false;
  }

  var enabledElement;

  try {
    enabledElement = cornerstone.getEnabledElement(element);
  } catch (error) {
    return false;
  }

  if (!enabledElement || !enabledElement.image) {
    return false;
  }

  return enabledElement.image;
};

var formatDateTime = function (date, time) {
  return date + " " + time;
};

var viewportOverlayUtils = {
  getPatient: getPatient,
  getStudy: getStudy,
  getSeries: getSeries,
  getInstance: getInstance,
  getTagDisplay: getTagDisplay,
  getImage: getImage,
  formatDateTime: formatDateTime
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"viewportUtils.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/viewportUtils.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  viewportUtils: function () {
    return viewportUtils;
  }
});
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 0);
var Random;
module.watch(require("meteor/random"), {
  Random: function (v) {
    Random = v;
  }
}, 1);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 2);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 3);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 4);
var cornerstone, cornerstoneTools;
module.watch(require("meteor/ohif:cornerstone"), {
  cornerstone: function (v) {
    cornerstone = v;
  },
  cornerstoneTools: function (v) {
    cornerstoneTools = v;
  }
}, 5);
var updateOrientationMarkers;
module.watch(require("./updateOrientationMarkers"), {
  updateOrientationMarkers: function (v) {
    updateOrientationMarkers = v;
  }
}, 6);
var getInstanceClassDefaultViewport;
module.watch(require("./instanceClassSpecificViewport"), {
  getInstanceClassDefaultViewport: function (v) {
    getInstanceClassDefaultViewport = v;
  }
}, 7);

/**
 * Get a cornerstone enabledElement for a DOM Element
 * @param  {DOMElement} element Element to get the enabledElement from Cornerstone
 * @return {Object}             Cornerstone's enabledElement object for the given
 *                              element or undefined if the element is not enabled
 */
var getEnabledElement = function (element) {
  var enabledElement;

  try {
    enabledElement = cornerstone.getEnabledElement(element);
  } catch (error) {
    OHIF.log.warn(error);
  }

  return enabledElement;
};
/**
 * Get the active viewport element. It uses activeViewport Session Variable
 * @return {DOMElement} DOMElement of the current active viewport
 */


var getActiveViewportElement = function () {
  var viewportIndex = Session.get('activeViewport') || 0;
  return $('.imageViewerViewport').get(viewportIndex);
};
/**
 * Get a cornerstone enabledElement for the Active Viewport Element
 * @return {Object}  Cornerstone's enabledElement object for the active
 *                   viewport element or undefined if the element
 *                   is not enabled
 */


var getEnabledElementForActiveElement = function () {
  var activeViewportElement = getActiveViewportElement();
  var enabledElement = getEnabledElement(activeViewportElement);
  return enabledElement;
};

var zoomIn = function () {
  var element = getActiveViewportElement();

  if (!element) {
    return;
  }

  var viewport = cornerstone.getViewport(element);
  var scaleIncrement = 0.15;
  var maximumScale = 10;
  viewport.scale = Math.min(viewport.scale + scaleIncrement, maximumScale);
  cornerstone.setViewport(element, viewport);
};

var zoomOut = function () {
  var element = getActiveViewportElement();

  if (!element) {
    return;
  }

  var viewport = cornerstone.getViewport(element);
  var scaleIncrement = 0.15;
  var minimumScale = 0.05;
  viewport.scale = Math.max(viewport.scale - scaleIncrement, minimumScale);
  cornerstone.setViewport(element, viewport);
};

var zoomToFit = function () {
  var element = getActiveViewportElement();

  if (!element) {
    return;
  }

  cornerstone.fitToWindow(element);
};

var rotateL = function () {
  var element = getActiveViewportElement();

  if (!element) {
    return;
  }

  var viewport = cornerstone.getViewport(element);
  viewport.rotation -= 90;
  cornerstone.setViewport(element, viewport);
  updateOrientationMarkers(element, viewport);
};

var rotateR = function () {
  var element = getActiveViewportElement();

  if (!element) {
    return;
  }

  var viewport = cornerstone.getViewport(element);
  viewport.rotation += 90;
  cornerstone.setViewport(element, viewport);
  updateOrientationMarkers(element, viewport);
};

var invert = function () {
  var element = getActiveViewportElement();

  if (!element) {
    return;
  }

  var viewport = cornerstone.getViewport(element);
  viewport.invert = viewport.invert === false;
  cornerstone.setViewport(element, viewport);
};

var flipV = function () {
  var element = getActiveViewportElement();
  var viewport = cornerstone.getViewport(element);
  viewport.vflip = viewport.vflip === false;
  cornerstone.setViewport(element, viewport);
  updateOrientationMarkers(element, viewport);
};

var flipH = function () {
  var element = getActiveViewportElement();
  var viewport = cornerstone.getViewport(element);
  viewport.hflip = viewport.hflip === false;
  cornerstone.setViewport(element, viewport);
  updateOrientationMarkers(element, viewport);
};

var resetViewportWithElement = function (element) {
  var enabledElement = cornerstone.getEnabledElement(element);

  if (enabledElement.fitToWindow === false) {
    var imageId = enabledElement.image.imageId;
    var instance = cornerstone.metaData.get('instance', imageId);
    enabledElement.viewport = cornerstone.getDefaultViewport(enabledElement.canvas, enabledElement.image);
    var instanceClassDefaultViewport = getInstanceClassDefaultViewport(instance, enabledElement, imageId);
    cornerstone.setViewport(element, instanceClassDefaultViewport);
  } else {
    cornerstone.reset(element);
  }
};

var resetViewport = function () {
  var viewportIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (viewportIndex === null) {
    resetViewportWithElement(getActiveViewportElement());
  } else if (viewportIndex === 'all') {
    $('.imageViewerViewport').each(function (index, element) {
      resetViewportWithElement(element);
    });
  } else {
    resetViewportWithElement($('.imageViewerViewport').get(viewportIndex));
  }
};

var clearTools = function () {
  var element = getActiveViewportElement();
  var toolStateManager = cornerstoneTools.globalImageIdSpecificToolStateManager;
  toolStateManager.clear(element);
  cornerstone.updateImage(element);
};

var linkStackScroll = function () {
  var synchronizer = OHIF.viewer.stackImagePositionOffsetSynchronizer;

  if (!synchronizer) {
    return;
  }

  if (synchronizer.isActive()) {
    synchronizer.deactivate();
  } else {
    synchronizer.activate();
  }
}; // This function was originally defined alone inside client/lib/toggleDialog.js
// and has been moved here to avoid circular dependency issues.


var toggleDialog = function (element, closeAction) {
  var $element = $(element);

  if ($element.is('dialog')) {
    if (element.hasAttribute('open')) {
      if (closeAction) {
        closeAction();
      }

      element.close();
    } else {
      element.show();
    }
  } else {
    var isClosed = $element.hasClass('dialog-open');
    $element.toggleClass('dialog-closed', isClosed);
    $element.toggleClass('dialog-open', !isClosed);
  }
}; // Toggle the play/stop state for the cornerstone clip tool


var toggleCinePlay = function () {
  // Get the active viewport element
  var element = getActiveViewportElement(); // Check if it's playing the clip to toggle it

  if (isPlaying()) {
    cornerstoneTools.stopClip(element);
  } else {
    cornerstoneTools.playClip(element);
  } // Update the UpdateCINE session property


  Session.set('UpdateCINE', Math.random());
}; // Show/hide the CINE dialog


var toggleCineDialog = function () {
  var dialog = document.getElementById('cineDialog');
  toggleDialog(dialog, stopAllClips);
  Session.set('UpdateCINE', Random.id());
};

var toggleDownloadDialog = function () {
  stopActiveClip();
  var $dialog = $('#imageDownloadDialog');

  if ($dialog.length) {
    $dialog.find('.close:first').click();
  } else {
    OHIF.ui.showDialog('imageDownloadDialog');
  }
};

var isDownloadEnabled = function () {
  var activeViewport = getActiveViewportElement();
  return activeViewport ? true : false;
}; // Check if the clip is playing on the active viewport


var isPlaying = function () {
  // Create a dependency on LayoutManagerUpdated and UpdateCINE session
  Session.get('UpdateCINE');
  Session.get('LayoutManagerUpdated'); // Get the viewport element and its current playClip tool state

  var element = getActiveViewportElement(); // Empty Elements throws cornerstore exception

  if (!element || !$(element).find('canvas').length) {
    return;
  }

  var toolState = cornerstoneTools.getToolState(element, 'playClip'); // Stop here if the tool state is not defined yet

  if (!toolState) {
    return false;
  } // Get the clip state


  var clipState = toolState.data[0];

  if (clipState) {
    // Return true if the clip is playing
    return !_.isUndefined(clipState.intervalId);
  }

  return false;
}; // Check if a study has multiple frames


var hasMultipleFrames = function () {
  // Its called everytime active viewport and/or layout change
  Session.get('activeViewport');
  Session.get('LayoutManagerUpdated');
  var activeViewport = getActiveViewportElement(); // No active viewport yet: disable button

  if (!activeViewport || !$(activeViewport).find('canvas').length) {
    return true;
  } // Get images in the stack


  var stackToolData = cornerstoneTools.getToolState(activeViewport, 'stack'); // No images in the stack, so disable button

  if (!stackToolData || !stackToolData.data || !stackToolData.data.length) {
    return true;
  } // Get number of images in the stack


  var stackData = stackToolData.data[0];
  var nImages = stackData.imageIds && stackData.imageIds.length ? stackData.imageIds.length : 1; // Stack has just one image, so disable button

  if (nImages === 1) {
    return true;
  }

  return false;
}; // Stop clips on all non-empty elements


var stopAllClips = function () {
  var elements = $('.imageViewerViewport').not('.empty');
  elements.each(function (index, element) {
    if ($(element).find('canvas').length) {
      cornerstoneTools.stopClip(element);
    }
  });
};

var stopActiveClip = function () {
  var activeElement = getActiveViewportElement();

  if ($(activeElement).find('canvas').length) {
    cornerstoneTools.stopClip(activeElement);
  }
};

var isStackScrollLinkingDisabled = function () {
  var linkableViewportsCount = 0; // Its called everytime active viewport and/or layout change

  Session.get('viewportActivated');
  Session.get('LayoutManagerUpdated');
  var synchronizer = OHIF.viewer.stackImagePositionOffsetSynchronizer;

  if (synchronizer) {
    var linkableViewports = synchronizer.getLinkableViewports();
    linkableViewportsCount = linkableViewports.length;
  }

  return linkableViewportsCount <= 1;
};

var isStackScrollLinkingActive = function () {
  var isActive = true; // Its called everytime active viewport layout changes

  Session.get('LayoutManagerUpdated');
  var synchronizer = OHIF.viewer.stackImagePositionOffsetSynchronizer;

  var syncedElements = _.pluck(synchronizer.syncedViewports, 'element');

  var $renderedViewports = $('.imageViewerViewport');
  $renderedViewports.each(function (index, element) {
    if (!_.contains(syncedElements, element)) {
      isActive = false;
    }
  });
  return isActive;
}; // Create an event listener to update playing state when a clip stops playing


window.addEventListener('cornerstonetoolsclipstopped', function () {
  Session.set('UpdateCINE', Math.random());
});
/**
 * Export functions inside viewportUtils namespace.
 */

var viewportUtils = {
  getEnabledElementForActiveElement: getEnabledElementForActiveElement,
  getEnabledElement: getEnabledElement,
  getActiveViewportElement: getActiveViewportElement,
  zoomIn: zoomIn,
  zoomOut: zoomOut,
  zoomToFit: zoomToFit,
  rotateL: rotateL,
  rotateR: rotateR,
  invert: invert,
  flipV: flipV,
  flipH: flipH,
  resetViewport: resetViewport,
  clearTools: clearTools,
  linkStackScroll: linkStackScroll,
  toggleDialog: toggleDialog,
  toggleCinePlay: toggleCinePlay,
  toggleCineDialog: toggleCineDialog,
  toggleDownloadDialog: toggleDownloadDialog,
  isPlaying: isPlaying,
  isDownloadEnabled: isDownloadEnabled,
  hasMultipleFrames: hasMultipleFrames,
  stopAllClips: stopAllClips,
  isStackScrollLinkingDisabled: isStackScrollLinkingDisabled,
  isStackScrollLinkingActive: isStackScrollLinkingActive
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"classes":{"ImageSet.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/classes/ImageSet.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

module.export({
  ImageSet: function () {
    return ImageSet;
  }
});
var Random;
module.watch(require("meteor/random"), {
  Random: function (v) {
    Random = v;
  }
}, 0);
var OHIFError;
module.watch(require("./OHIFError"), {
  OHIFError: function (v) {
    OHIFError = v;
  }
}, 1);
var OBJECT = 'object';
/**
 * This class defines an ImageSet object which will be used across the viewer. This object represents
 * a list of images that are associated by any arbitrary criteria being thus content agnostic. Besides the
 * main attributes (images and uid) it allows additional attributes to be appended to it (currently
 * indiscriminately, but this should be changed).
 */

var ImageSet =
/*#__PURE__*/
function () {
  function ImageSet(images) {
    if (Array.isArray(images) !== true) {
      throw new OHIFError('ImageSet expects an array of images');
    } // @property "images"


    Object.defineProperty(this, 'images', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: images
    }); // @property "uid"

    Object.defineProperty(this, 'uid', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: Random.id() // Unique ID of the instance

    });
  }

  var _proto = ImageSet.prototype;

  _proto.getUID = function () {
    function getUID() {
      return this.uid;
    }

    return getUID;
  }();

  _proto.setAttribute = function () {
    function setAttribute(attribute, value) {
      this[attribute] = value;
    }

    return setAttribute;
  }();

  _proto.getAttribute = function () {
    function getAttribute(attribute) {
      return this[attribute];
    }

    return getAttribute;
  }();

  _proto.setAttributes = function () {
    function setAttributes(attributes) {
      if ((0, _typeof2.default)(attributes) === OBJECT && attributes !== null) {
        var imageSet = this,
            hasOwn = Object.prototype.hasOwnProperty;

        for (var attribute in meteorBabelHelpers.sanitizeForInObject(attributes)) {
          if (hasOwn.call(attributes, attribute)) {
            imageSet[attribute] = attributes[attribute];
          }
        }
      }
    }

    return setAttributes;
  }();

  _proto.getImage = function () {
    function getImage(index) {
      return this.images[index];
    }

    return getImage;
  }();

  _proto.sortBy = function () {
    function sortBy(sortingCallback) {
      return this.images.sort(sortingCallback);
    }

    return sortBy;
  }();

  return ImageSet;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"LayoutManager.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/classes/LayoutManager.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  LayoutManager: function () {
    return LayoutManager;
  }
});
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 1);
var Tracker;
module.watch(require("meteor/tracker"), {
  Tracker: function (v) {
    Tracker = v;
  }
}, 2);
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 3);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 4);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 5);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 6);

var LayoutManager =
/*#__PURE__*/
function () {
  /**
   * Constructor: initializes a Layout Manager object.
   * @param {DOM element}    parentNode DOM element representing the parent node, which wraps the Layout Manager content
   * @param {Array} studies  Array of studies objects that will be rendered in the Viewer. Each object will be rendered in a div.imageViewerViewport
   */
  function LayoutManager(parentNode, studies) {
    var _this = this;

    OHIF.log.info('LayoutManager constructor');
    this.observer = new Tracker.Dependency();
    this.parentNode = parentNode;
    this.studies = studies;
    this.viewportData = [];
    this.layoutTemplateName = 'gridLayout';
    this.layoutProps = {
      rows: 1,
      columns: 1
    };
    this.layoutClassName = this.getLayoutClass();
    this.isZoomed = false;

    var updateSessionFn = function () {
      return Tracker.afterFlush(function () {
        Session.set('LayoutManagerUpdated', Math.random());

        _this.observer.changed();
      });
    };

    this.updateSession = _.throttle(updateSessionFn, 300);
  }
  /**
   * Returns the number of viewports rendered, based on layoutProps
   * @return {integer} number of viewports
   */


  var _proto = LayoutManager.prototype;

  _proto.getNumberOfViewports = function () {
    function getNumberOfViewports() {
      return this.layoutProps.rows * this.layoutProps.columns;
    }

    return getNumberOfViewports;
  }();
  /**
   * It creates a new viewport data. This is useful for the first rendering when no viewportData is set yet.
   */


  _proto.setDefaultViewportData = function () {
    function setDefaultViewportData() {
      OHIF.log.info('LayoutManager setDefaultViewportData');
      var self = this; // Get the number of viewports to be rendered

      var viewportsAmount = this.getNumberOfViewports(); // Store the old viewport data and reset the current

      var oldViewportData = self.viewportData; // Get the studies and display sets sequence map

      var sequenceMap = this.getDisplaySetSequenceMap(); // Check if the display sets are sequenced

      var isSequenced = this.isDisplaySetsSequenced(sequenceMap); // Define the current viewport index and the viewport data array

      var currentViewportIndex = 0;

      if (viewportsAmount > oldViewportData.length && oldViewportData.length && isSequenced) {
        // Keep the displayed display sets
        self.viewportData = oldViewportData;
        currentViewportIndex = oldViewportData.length;
      } else if (viewportsAmount <= oldViewportData.length) {
        // Reduce the original displayed display sets
        self.viewportData = oldViewportData.slice(0, viewportsAmount);
        return;
      } else {
        // Reset all display sets
        self.viewportData = [];
      } // Get all the display sets for the viewer studies


      var displaySets = [];
      this.studies.forEach(function (study) {
        study.displaySets.forEach(function (dSet) {
          return dSet.images.length && displaySets.push(dSet);
        });
      }); // Get the display sets that will be appended to the current ones

      var appendix;
      var currentLength = self.viewportData.length;

      if (currentLength) {
        // TODO: isolate displaySets array by study (maybe a map?)
        var beginIndex = sequenceMap.values().next().value[0].displaySetIndex + currentLength;
        var endIndex = beginIndex + (viewportsAmount - currentLength);
        appendix = displaySets.slice(beginIndex, endIndex);
      } else {
        // Get available display sets from the first to the grid size
        appendix = displaySets.slice(0, viewportsAmount);
      } // Generate the additional data based on the appendix


      var additionalData = [];
      appendix.forEach(function (displaySet, index) {
        var images = displaySet.images,
            studyInstanceUid = displaySet.studyInstanceUid,
            seriesInstanceUid = displaySet.seriesInstanceUid,
            displaySetInstanceUid = displaySet.displaySetInstanceUid;
        var sopInstanceUid = images[0] && images[0].getSOPInstanceUID ? images[0].getSOPInstanceUID() : '';
        var viewportIndex = currentViewportIndex + index;
        var data = {
          viewportIndex: viewportIndex,
          studyInstanceUid: studyInstanceUid,
          seriesInstanceUid: seriesInstanceUid,
          displaySetInstanceUid: displaySetInstanceUid,
          sopInstanceUid: sopInstanceUid
        };
        additionalData.push(data);
      }); // Append the additional data with the viewport data

      self.viewportData = self.viewportData.concat(additionalData); // Push empty objects if the amount is lesser than the grid size

      while (self.viewportData.length < viewportsAmount) {
        self.viewportData.push({});
      }
    }

    return setDefaultViewportData;
  }();
  /**
   * Returns the name of the class to be added to the parentNode
   * @return {string} class name following the pattern layout-<rows>-<columns>. Ex: layout-1-1, layout-2-2
   */


  _proto.getLayoutClass = function () {
    function getLayoutClass() {
      var _layoutProps = this.layoutProps,
          rows = _layoutProps.rows,
          columns = _layoutProps.columns;
      var layoutClass = "layout-" + rows + "-" + columns;
      return layoutClass;
    }

    return getLayoutClass;
  }();
  /**
   * Add a class to the parentNode based on the layout configuration.
   * This function is helpful to style the layout of viewports.
   * Besides that, each inner div.viewportContainer will have helpful classes
   * as well. See viewer/components/gridLayout/ component in this ohif-viewerbase package.
   */


  _proto.updateLayoutClass = function () {
    function updateLayoutClass() {
      var newLayoutClass = this.getLayoutClass(); // If layout has changed, change its class

      if (this.layoutClassName !== newLayoutClass) {
        this.parentNode.classList.remove(this.layoutClassName);
      }

      this.layoutClassName = newLayoutClass;
      this.parentNode.classList.add(newLayoutClass);
    }

    return updateLayoutClass;
  }();
  /**
   * Updates the grid with the new layout props.
   * It iterates over all viewportData to render the studies
   * in the viewports.
   * If no viewportData or no viewports defined, it renders the default viewport data.
   */


  _proto.updateViewports = function () {
    function updateViewports() {
      OHIF.log.info('LayoutManager updateViewports');

      if (!this.viewportData || !this.viewportData.length || this.viewportData.length !== this.getNumberOfViewports()) {
        this.setDefaultViewportData();
      } // imageViewerViewports occasionally needs relevant layout data in order to set
      // the element style of the viewport in question


      var layoutProps = this.layoutProps;
      var data = $.extend({
        viewportData: []
      }, layoutProps);
      this.viewportData.forEach(function (viewportData) {
        var viewportDataAndLayoutProps = $.extend(viewportData, layoutProps);
        data.viewportData.push(viewportDataAndLayoutProps);
      });
      var layoutTemplate = Template[this.layoutTemplateName];
      var $parentNode = $(this.parentNode);
      $parentNode.html('');
      this.updateLayoutClass();
      Blaze.renderWithData(layoutTemplate, data, this.parentNode);
      this.updateSession();
      this.isZoomed = false;
    }

    return updateViewports;
  }();
  /**
   * This function destroys and re-renders the imageViewerViewport template.
   * It uses the data provided to load a new display set into the produced viewport.
   * @param  {integer} viewportIndex index of the viewport to be re-rendered
   * @param  {Object} data           instance data object
   */


  _proto.rerenderViewportWithNewDisplaySet = function () {
    function rerenderViewportWithNewDisplaySet(viewportIndex, viewportData) {
      // Clone the data to prevent changing the original object
      var data = _.clone(viewportData);

      OHIF.log.info("LayoutManager rerenderViewportWithNewDisplaySet: " + viewportIndex); // The parent container is identified because it is later removed from the DOM

      var element = $('.imageViewerViewport').eq(viewportIndex);
      var container = element.parents('.viewportContainer').get(0); // Record the current viewportIndex so this can be passed into the re-rendering call

      data.viewportIndex = viewportIndex; // Update the dictionary of loaded displaySet for the specified viewport

      this.viewportData[viewportIndex] = {
        viewportIndex: viewportIndex,
        displaySetInstanceUid: data.displaySetInstanceUid,
        seriesInstanceUid: data.seriesInstanceUid,
        studyInstanceUid: data.studyInstanceUid,
        renderedCallback: data.renderedCallback,
        currentImageIdIndex: data.currentImageIdIndex || 0
      }; // Remove the hover styling

      element.find('canvas').not('.magnifyTool').removeClass('faded'); // Remove the whole template, add in the new one

      var viewportContainer = element.parents('.removable');
      var newViewportContainer = document.createElement('div');
      newViewportContainer.className = 'removable'; // Remove the parent element of the template
      // This is a workaround since otherwise Blaze UI onDestroyed doesn't fire

      viewportContainer.remove();
      container.appendChild(newViewportContainer); // Render and insert the template

      Blaze.renderWithData(Template.imageViewerViewport, data, newViewportContainer);
      this.updateSession();
    }

    return rerenderViewportWithNewDisplaySet;
  }();
  /**
   * Enlarge a single viewport. Useful when the layout has more than one viewport
   * @param  {integer} viewportIndex Index of the viewport to be enlarged
   */


  _proto.enlargeViewport = function () {
    function enlargeViewport(viewportIndex) {
      OHIF.log.info("LayoutManager enlargeViewport: " + viewportIndex);

      if (!this.viewportData || !this.viewportData.length) {
        return;
      } // Clone the array for later


      this.previousViewportData = this.viewportData.slice(0);
      var singleViewportData = $.extend({}, this.viewportData[viewportIndex]);
      singleViewportData.rows = 1;
      singleViewportData.columns = 1;
      singleViewportData.viewportIndex = 0;
      var data = {
        viewportData: [singleViewportData],
        rows: 1,
        columns: 1
      };
      var layoutTemplate = Template.gridLayout;
      $(this.parentNode).html('');
      Blaze.renderWithData(layoutTemplate, data, this.parentNode);
      this.isZoomed = true;
      this.zoomedViewportIndex = viewportIndex;
      this.viewportData = data.viewportData;
      this.updateSession();
    }

    return enlargeViewport;
  }();
  /**
   * Resets to the previous layout configuration.
   * Useful after enlarging a single viewport.
   */


  _proto.resetPreviousLayout = function () {
    function resetPreviousLayout() {
      OHIF.log.info('LayoutManager resetPreviousLayout');

      if (!this.isZoomed) {
        return;
      }

      this.previousViewportData[this.zoomedViewportIndex] = $.extend({}, this.viewportData[0]);
      this.previousViewportData[this.zoomedViewportIndex].viewportIndex = this.zoomedViewportIndex;
      this.viewportData = this.previousViewportData;
      this.updateViewports();
    }

    return resetPreviousLayout;
  }();
  /**
   * Toogle viewport enlargement.
   * Useful for user to enlarge or going back to previous layout configurations
   * @param  {integer} viewportIndex Index of the viewport to be toggled
   */


  _proto.toggleEnlargement = function () {
    function toggleEnlargement(viewportIndex) {
      OHIF.log.info("LayoutManager toggleEnlargement: " + viewportIndex);

      if (this.isZoomed) {
        this.resetPreviousLayout();
      } else {
        // Don't enlarge the viewport if we only have one Viewport
        // to begin with
        if (this.getNumberOfViewports() > 1) {
          this.enlargeViewport(viewportIndex);
        }
      }
    }

    return toggleEnlargement;
  }();
  /**
   * Return the display sets map sequence of display sets and viewports
   */


  _proto.getDisplaySetSequenceMap = function () {
    function getDisplaySetSequenceMap() {
      var _this2 = this;

      OHIF.log.info('LayoutManager getDisplaySetSequenceMap'); // Get the viewport data list

      var viewportDataList = this.viewportData; // Create a map to control the display set sequence

      var sequenceMap = new Map(); // Iterate over each viewport and register its  details on the sequence map

      viewportDataList.forEach(function (viewportData, viewportIndex) {
        // Get the current study
        var currentStudy = _.findWhere(_this2.studies, {
          studyInstanceUid: viewportData.studyInstanceUid
        }) || _this2.studies[0]; // Get the display sets


        var displaySets = currentStudy.displaySets; // Get the current display set

        var displaySet = _.findWhere(displaySets, {
          displaySetInstanceUid: viewportData.displaySetInstanceUid
        }); // Get the current instance index (using 9999 to sort greater than -1)


        var displaySetIndex = _.indexOf(displaySets, displaySet);

        displaySetIndex = displaySetIndex < 0 ? 9999 : displaySetIndex; // Try to get a map entry for current study or create it if not present

        var studyViewports = sequenceMap.get(currentStudy);

        if (!studyViewports) {
          studyViewports = [];
          sequenceMap.set(currentStudy, studyViewports);
        } // Register the viewport index and the display set index on the map


        studyViewports.push({
          viewportIndex: viewportIndex,
          displaySetIndex: displaySetIndex
        });
      }); // Return the generated sequence map

      return sequenceMap;
    }

    return getDisplaySetSequenceMap;
  }();
  /**
   * Check if all the display sets and viewports are sequenced
   * @param  {Array}  definedSequenceMap Array of display set sequence map
   * @return {Boolean}                   Returns if the display set sequence map is sequenced or not
   */


  _proto.isDisplaySetsSequenced = function () {
    function isDisplaySetsSequenced(definedSequenceMap) {
      OHIF.log.info('LayoutManager isDisplaySetsSequenced');
      var isSequenced = true; // Get the studies and display sets sequence map

      var sequenceMap = definedSequenceMap || this.getDisplaySetSequenceMap();
      sequenceMap.forEach(function (studyViewports, study) {
        var lastDisplaySetIndex = null;
        var lastViewportIndex = null;
        studyViewports.forEach(function (_ref, index) {
          var viewportIndex = _ref.viewportIndex,
              displaySetIndex = _ref.displaySetIndex;

          // Check if the sequence is wrong
          if (displaySetIndex !== 9999 && lastViewportIndex !== null && lastDisplaySetIndex !== null && displaySetIndex !== null && (viewportIndex - 1 !== lastViewportIndex || displaySetIndex - 1 !== lastDisplaySetIndex)) {
            // Set the sequenced flag as false;
            isSequenced = false;
          } // Update the last viewport index


          lastViewportIndex = viewportIndex; // Update the last display set index

          lastDisplaySetIndex = displaySetIndex;
        });
      });
      return isSequenced;
    }

    return isDisplaySetsSequenced;
  }();
  /**
   * Check if is possible to move display sets on a specific direction.
   * It checks if looping is allowed by OHIF.uiSettings.displaySetNavigationLoopOverSeries
   * @param  {Boolean} isNext Represents the direction
   * @return {Boolean}        Returns if display sets can be moved
   */


  _proto.canMoveDisplaySets = function () {
    function canMoveDisplaySets(isNext) {
      OHIF.log.info('LayoutManager canMoveDisplaySets'); // Get the setting that defines if the display set navigation is multiple

      var isMultiple = OHIF.uiSettings.displaySetNavigationMultipleViewports; // Get the setting that allow display set navigation looping over series

      var allowLooping = OHIF.uiSettings.displaySetNavigationLoopOverSeries; // Get the studies and display sets sequence map

      var sequenceMap = this.getDisplaySetSequenceMap(); // Check if the display sets are sequenced

      var isSequenced = this.isDisplaySetsSequenced(sequenceMap); // Get Active Viewport Index if isMultiple is false

      var activeViewportIndex = !isMultiple ? Session.get('activeViewport') : null; // Check if is next and looping is blocked

      if (isNext && !allowLooping) {
        // Check if the end was reached
        var endReached = true;
        sequenceMap.forEach(function (studyViewports, study) {
          // Get active viewport index if isMultiple is false ortherwise get last
          var studyViewport = studyViewports[activeViewportIndex !== null ? activeViewportIndex : studyViewports.length - 1];

          if (!studyViewport) {
            return;
          }

          var viewportIndex = studyViewport.displaySetIndex;
          var layoutViewports = studyViewports.length;
          var amount = study.displaySets.length;
          var move = !isMultiple ? 1 : amount % layoutViewports || layoutViewports;
          var lastStepIndex = amount - move; // 9999 for index means empty viewport, see getDisplaySetSequenceMap function

          if (viewportIndex !== 9999 && viewportIndex !== lastStepIndex) {
            endReached = false;
          }
        }); // Return false if end is not reached yet

        if ((!isMultiple || isSequenced) && endReached) {
          return false;
        }
      } // Check if is previous and looping is blocked


      if (!isNext && !allowLooping) {
        // Check if the begin was reached
        var beginReached = true;

        if (activeViewportIndex >= 0) {
          sequenceMap.forEach(function (studyViewports, study) {
            // Get active viewport index if isMultiple is false ortherwise get first
            var studyViewport = studyViewports[activeViewportIndex !== null ? activeViewportIndex : 0];

            if (!studyViewport) {
              return;
            }

            var viewportIndex = studyViewport.displaySetIndex;
            var layoutViewports = studyViewports.length; // 9999 for index means empty viewport, see getDisplaySetSequenceMap function

            if (viewportIndex !== 9999 && viewportIndex - layoutViewports !== -layoutViewports) {
              beginReached = false;
            }
          });
        } // Return false if begin is not reached yet


        if ((!isMultiple || isSequenced) && beginReached) {
          return false;
        }
      }

      return true;
    }

    return canMoveDisplaySets;
  }();
  /**
   * Move display sets forward or backward in the given viewport index
   * @param  {integer}  viewportIndex Index of the viewport to be moved
   * @param  {Boolean} isNext         Represents the direction (true = forward, false = backward)
   */


  _proto.moveSingleViewportDisplaySets = function () {
    function moveSingleViewportDisplaySets(viewportIndex, isNext) {
      OHIF.log.info("LayoutManager moveSingleViewportDisplaySets: " + viewportIndex); // Get the setting that allow display set navigation looping over series

      var allowLooping = OHIF.uiSettings.displaySetNavigationLoopOverSeries; // Get the selected viewport data

      var viewportData = this.viewportData[viewportIndex]; // Get the current study

      var currentStudy = _.findWhere(this.studies, {
        studyInstanceUid: viewportData.studyInstanceUid
      }) || this.studies[0]; // Get the display sets

      var displaySets = currentStudy.displaySets; // Get the current display set

      var currentDisplaySet = _.findWhere(displaySets, {
        displaySetInstanceUid: viewportData.displaySetInstanceUid
      }); // Get the new index and ensure that it will exists in display sets


      var newIndex = _.indexOf(displaySets, currentDisplaySet);

      if (isNext) {
        newIndex++;

        if (newIndex >= displaySets.length) {
          // Stop here if looping is not allowed
          if (!allowLooping) {
            return;
          }

          newIndex = 0;
        }
      } else {
        newIndex--;

        if (newIndex < 0) {
          // Stop here if looping is not allowed
          if (!allowLooping) {
            return;
          }

          newIndex = displaySets.length - 1;
        }
      } // Get the display set data for the new index


      var newDisplaySetData = displaySets[newIndex]; // Rerender the viewport using the new display set data

      this.rerenderViewportWithNewDisplaySet(viewportIndex, newDisplaySetData);
    }

    return moveSingleViewportDisplaySets;
  }();
  /**
   * Move multiple display sets forward or backward in all viewports
   * @param  {Boolean} isNext Represents the direction (true = forward, false = backward)
   */


  _proto.moveMultipleViewportDisplaySets = function () {
    function moveMultipleViewportDisplaySets(isNext) {
      var _this3 = this;

      OHIF.log.info('LayoutManager moveMultipleViewportDisplaySets'); // Get the setting that allow display set navigation looping over series

      var allowLooping = OHIF.uiSettings.displaySetNavigationLoopOverSeries; // Create a map to control the display set sequence

      var sequenceMap = this.getDisplaySetSequenceMap(); // Check if the display sets are sequenced

      var isSequenced = this.isDisplaySetsSequenced(sequenceMap);
      var displaySetsToRender = []; // Iterate over the studies map and move its display sets

      sequenceMap.forEach(function (studyViewports, study) {
        // Sort the viewports on the study by the display set index
        studyViewports.sort(function (a, b) {
          return a.displaySetIndex > b.displaySetIndex;
        }); // Get the study display sets

        var displaySets = study.displaySets; // Calculate the base index

        var firstIndex = studyViewports[0].displaySetIndex;
        var steps = studyViewports.length;
        var rest = firstIndex % steps;
        var baseIndex = rest ? firstIndex - rest : firstIndex;
        var direction = isNext ? 1 : -1;
        baseIndex += steps * direction;
        var amount = displaySets.length; // Check if the indexes are sequenced or will overflow the array bounds

        if (baseIndex >= amount) {
          var move = amount % steps || steps;
          var lastStepIndex = amount - move;

          if (firstIndex + steps !== lastStepIndex + steps) {
            // Reset the index if the display sets are sequenced but shifted
            baseIndex = lastStepIndex;
          } else if (!allowLooping) {
            // Stop here if looping is not allowed
            return;
          } else {
            // Start over the series if looping is allowed
            baseIndex = 0;
          }
        } else if (baseIndex < 0) {
          if (firstIndex > 0) {
            // Reset the index if the display sets are sequenced but shifted
            baseIndex = 0;
          } else if (!allowLooping) {
            // Stop here if looping is not allowed
            return;
          } else {
            // Go to the series' end if looping is allowed
            baseIndex = amount - 1 - (amount - 1) % steps;
          }
        } else if (!isSequenced) {
          // Reset the sequence if indexes are not sequenced
          baseIndex = 0;
        } // Iterate over the current study viewports


        studyViewports.forEach(function (_ref2, index) {
          var viewportIndex = _ref2.viewportIndex;
          // Get the new displaySet index to be rendered in viewport
          var newIndex = baseIndex + index; // Get the display set data for the new index

          var displaySetData = displaySets[newIndex] || {}; // Add the current display set that on the render list

          displaySetsToRender.push(displaySetData);
        });
      }); // Sort the display sets

      var sortingFunction = OHIF.utils.sortBy({
        name: 'studyInstanceUid'
      }, {
        name: 'instanceNumber'
      }, {
        name: 'seriesNumber'
      });
      displaySetsToRender.sort(function (a, b) {
        return sortingFunction(a, b);
      }); // Iterate over each display set data and render on its respective viewport

      displaySetsToRender.forEach(function (data, index) {
        _this3.rerenderViewportWithNewDisplaySet(index, data);
      });
    }

    return moveMultipleViewportDisplaySets;
  }();
  /**
   * Move display sets forward or backward
   * @param  {Boolean} isNext Represents the direction (true = forward, false = backward)
   */


  _proto.moveDisplaySets = function () {
    function moveDisplaySets(isNext) {
      OHIF.log.info('LayoutManager moveDisplaySets'); //Check if navigation is on a single or multiple viewports

      if (OHIF.uiSettings.displaySetNavigationMultipleViewports) {
        // Move display sets on multiple viewports
        this.moveMultipleViewportDisplaySets(isNext);
      } else {
        // Get the selected viewport index
        var viewportIndex = Session.get('activeViewport'); // Move display sets on a single viewport

        this.moveSingleViewportDisplaySets(viewportIndex, isNext);
      }
    }

    return moveDisplaySets;
  }();
  /**
   * Check if a study is loaded into a viewport
   * @param  {string}  studyInstanceUid Study instance Uid string
   * @param  {integer}  viewportIndex   Index of the viewport to be checked
   * @return {Boolean}                  Returns if the given study is in the given viewport or not
   */


  _proto.isStudyLoadedIntoViewport = function () {
    function isStudyLoadedIntoViewport(studyInstanceUid, viewportIndex) {
      return this.viewportData.find(function (item) {
        return item.studyInstanceUid === studyInstanceUid && item.viewportIndex === viewportIndex;
      }) !== void 0;
    }

    return isStudyLoadedIntoViewport;
  }();
  /**
   * Check if the layout has multiple rows and columns
   * @return {Boolean} Return if the layout has multiple rows and columns or not
   */


  _proto.isMultipleLayout = function () {
    function isMultipleLayout() {
      return this.layoutProps.row !== 1 && this.layoutProps.columns !== 1;
    }

    return isMultipleLayout;
  }();

  return LayoutManager;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"OHIFError.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/classes/OHIFError.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

module.export({
  OHIFError: function () {
    return OHIFError;
  }
});

var OHIFError =
/*#__PURE__*/
function (_Error) {
  (0, _inheritsLoose2.default)(OHIFError, _Error);

  function OHIFError(message) {
    var _this;

    _this = _Error.call(this) || this;
    _this.message = message;
    _this.stack = new Error().stack;
    _this.name = _this.constructor.name;
    return _this;
  }

  return OHIFError;
}((0, _wrapNativeSuper2.default)(Error));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ResizeViewportManager.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/classes/ResizeViewportManager.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  ResizeViewportManager: function () {
    return ResizeViewportManager;
  }
});
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
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
var getInstanceClassDefaultViewport;
module.watch(require("../instanceClassSpecificViewport"), {
  getInstanceClassDefaultViewport: function (v) {
    getInstanceClassDefaultViewport = v;
  }
}, 3);

var ResizeViewportManager =
/*#__PURE__*/
function () {
  function ResizeViewportManager() {
    this._resizeHandler = null;
  } // Reposition Study Series Quick Switch based whether side bars are opened or not


  var _proto = ResizeViewportManager.prototype;

  _proto.repositionStudySeriesQuickSwitch = function () {
    function repositionStudySeriesQuickSwitch() {
      OHIF.log.info('ResizeViewportManager repositionStudySeriesQuickSwitch'); // Stop here if viewer is not displayed

      var isViewer = Session.get('ViewerOpened');
      if (!isViewer) return; // Stop here if there is no one or only one viewport

      var nViewports = OHIF.viewerbase.layoutManager.viewportData.length;
      if (!nViewports || nViewports <= 1) return;
      var $viewer = $('#viewer');
      var leftSidebar = $viewer.find('.sidebar-left.sidebar-open');
      var rightSidebar = $viewer.find('.sidebar-right.sidebar-open');
      var $leftQuickSwitch = $('.quickSwitchWrapper.left');
      var $rightQuickSwitch = $('.quickSwitchWrapper.right');
      var hasLeftSidebar = leftSidebar.length > 0;
      var hasRightSidebar = rightSidebar.length > 0;
      $rightQuickSwitch.removeClass('left-sidebar-only');
      $leftQuickSwitch.removeClass('right-sidebar-only');
      var leftOffset = 0;

      if (hasLeftSidebar) {
        leftOffset = leftSidebar.width() / $(window).width() * 100;

        if (!hasRightSidebar) {
          $rightQuickSwitch.addClass('left-sidebar-only');
        }
      }

      if (hasRightSidebar && !hasLeftSidebar) {
        $leftQuickSwitch.addClass('right-sidebar-only');
      }

      var leftPosition = $('#imageViewerViewports').width() / nViewports / $(window).width() * 100 + leftOffset;
      var rightPosition = 100 - leftPosition;
      $leftQuickSwitch.css('right', rightPosition + '%');
      $rightQuickSwitch.css('left', leftPosition + '%');
    }

    return repositionStudySeriesQuickSwitch;
  }(); // Relocate dialogs positions


  _proto.relocateDialogs = function () {
    function relocateDialogs() {
      OHIF.log.info('ResizeViewportManager relocateDialogs');
      var $bottomRightDialogs = $('#annotationDialog, #textMarkerOptionsDialog');
      $bottomRightDialogs.css({
        top: '',
        // This removes the CSS property completely
        left: '',
        bottom: 0,
        right: 0
      });
      var centerDialogs = $('.draggableDialog').not($bottomRightDialogs);
      centerDialogs.css({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      });
    }

    return relocateDialogs;
  }(); // Resize viewport scrollbars


  _proto.resizeScrollbars = function () {
    function resizeScrollbars(element) {
      OHIF.log.info('ResizeViewportManager resizeScrollbars');
      var $currentOverlay = $(element).siblings('.imageViewerViewportOverlay');
      $currentOverlay.find('.scrollbar').trigger('rescale');
    }

    return resizeScrollbars;
  }(); // Resize a single viewport element


  _proto.resizeViewportElement = function () {
    function resizeViewportElement(element) {
      var fitToWindow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var enabledElement;

      try {
        enabledElement = cornerstone.getEnabledElement(element);
      } catch (error) {
        return;
      }

      cornerstone.resize(element, fitToWindow);

      if (enabledElement.fitToWindow === false) {
        var imageId = enabledElement.image.imageId;
        var instance = cornerstone.metaData.get('instance', imageId);
        var instanceClassViewport = getInstanceClassDefaultViewport(instance, enabledElement, imageId);
        cornerstone.setViewport(element, instanceClassViewport);
      }
    }

    return resizeViewportElement;
  }(); // Resize each viewport element


  _proto.resizeViewportElements = function () {
    function resizeViewportElements() {
      var _this = this;

      this.relocateDialogs();
      setTimeout(function () {
        _this.repositionStudySeriesQuickSwitch();

        var elements = $('.imageViewerViewport').not('.empty');
        elements.each(function (index, element) {
          _this.resizeViewportElement(element);

          _this.resizeScrollbars(element);
        });
      }, 1);
    }

    return resizeViewportElements;
  }(); // Function to override resizeViewportElements function


  _proto.setResizeViewportElement = function () {
    function setResizeViewportElement(resizeViewportElements) {
      this.resizeViewportElements = resizeViewportElements;
    }

    return setResizeViewportElement;
  }(); // Avoid doing DOM manipulation during the resize handler
  // because it is fired very often.
  // Resizing is therefore performed 100 ms after the resize event stops.


  _proto.handleResize = function () {
    function handleResize() {
      var _this2 = this;

      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(function () {
        OHIF.log.info('ResizeViewportManager resizeViewportElements');

        _this2.resizeViewportElements();
      }, 100);
    }

    return handleResize;
  }();
  /**
   * Returns a unique event handler function associated with a given instance using lazy assignment.
   * @return {function} Returns a unique copy of the event handler of this class.
   */


  _proto.getResizeHandler = function () {
    function getResizeHandler() {
      var resizeHandler = this._resizeHandler;

      if (resizeHandler === null) {
        resizeHandler = this.handleResize.bind(this);
        this._resizeHandler = resizeHandler;
      }

      return resizeHandler;
    }

    return getResizeHandler;
  }();

  return ResizeViewportManager;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"StackImagePositionOffsetSynchronizer.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/classes/StackImagePositionOffsetSynchronizer.js                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

module.export({
  StackImagePositionOffsetSynchronizer: function () {
    return StackImagePositionOffsetSynchronizer;
  }
});
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
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
var cornerstone, cornerstoneTools;
module.watch(require("meteor/ohif:cornerstone"), {
  cornerstone: function (v) {
    cornerstone = v;
  },
  cornerstoneTools: function (v) {
    cornerstoneTools = v;
  }
}, 3);
var toolManager;
module.watch(require("../toolManager"), {
  toolManager: function (v) {
    toolManager = v;
  }
}, 4);

var StackImagePositionOffsetSynchronizer =
/*#__PURE__*/
function () {
  function StackImagePositionOffsetSynchronizer() {
    this.active = false;
    this.syncedViewports = [];
    this.synchronizer = new cornerstoneTools.Synchronizer('cornerstonenewimage', cornerstoneTools.stackImagePositionOffsetSynchronizer);
  }

  var _proto = StackImagePositionOffsetSynchronizer.prototype;

  _proto.isActive = function () {
    function isActive() {
      return this.active;
    }

    return isActive;
  }();

  _proto.activate = function () {
    function activate() {
      var viewports = this.getLinkableViewports();
      this.syncViewports(viewports);
    }

    return activate;
  }();

  _proto.activateByViewportIndexes = function () {
    function activateByViewportIndexes(viewportIndexes) {
      var viewports = this.getViewportByIndexes(viewportIndexes);
      this.syncViewports(viewports);
    }

    return activateByViewportIndexes;
  }();

  _proto.deactivate = function () {
    function deactivate() {
      if (!this.isActive()) {
        return;
      }

      while (this.syncedViewports.length) {
        var viewport = this.syncedViewports[0];
        this.removeViewport(viewport);
      }

      this.active = false;
      toolManager.deactivateCommandButton('linkStackScroll');
    }

    return deactivate;
  }();

  _proto.update = function () {
    function update() {
      if (!this.isActive()) {
        return;
      }

      var activeViewportElement = this.getActiveViewportElement();

      if (this.isViewportSynced(activeViewportElement)) {
        return;
      }

      this.deactivate();
      this.activate();
    }

    return update;
  }();

  _proto.syncViewports = function () {
    function syncViewports(viewports) {
      var _this = this;

      var viewportIndexes = [];

      if (this.isActive() || viewports.length <= 1) {
        return;
      }

      viewports.forEach(function (viewport, index) {
        _this.synchronizer.add(viewport.element);

        _this.syncedViewports.push(viewport);

        viewportIndexes.push(viewport.index);

        if (!_this.disabledListener) {
          _this.disabledListener = _this.elementDisabledHandler(_this);
        }

        viewport.element.addEventListener(StackImagePositionOffsetSynchronizer.ELEMENT_DISABLED_EVENT, _this.disabledListener);
      });
      this.active = true;
      toolManager.activateCommandButton('linkStackScroll');
      Session.set('StackImagePositionOffsetSynchronizerLinkedViewports', viewportIndexes);
    }

    return syncViewports;
  }();

  _proto.isViewportSynced = function () {
    function isViewportSynced(viewportElement) {
      return !!this.getViewportByElement(viewportElement);
    }

    return isViewportSynced;
  }();

  _proto.getActiveViewportElement = function () {
    function getActiveViewportElement() {
      var viewportIndex = Session.get('activeViewport') || 0;
      return $('.imageViewerViewport').get(viewportIndex);
    }

    return getActiveViewportElement;
  }();

  _proto.removeViewport = function () {
    function removeViewport(viewport) {
      var index = this.syncedViewports.indexOf(viewport);

      if (index === -1) {
        return;
      }

      this.syncedViewports.splice(index, 1);
      this.synchronizer.remove(viewport.element);
      this.removeLinkedViewportFromSession(viewport);
      viewport.element.removeEventListener(StackImagePositionOffsetSynchronizer.ELEMENT_DISABLED_EVENT, this.disabledListener);
    }

    return removeViewport;
  }();

  _proto.getViewportByElement = function () {
    function getViewportByElement(viewportElement) {
      var length = this.syncedViewports.length;

      for (var i = 0; i < length; i++) {
        var viewport = this.syncedViewports[i];

        if (viewport.element === viewportElement) {
          return viewport;
        }
      }
    }

    return getViewportByElement;
  }();

  _proto.removeViewportByElement = function () {
    function removeViewportByElement(viewportElement) {
      var viewport = this.getViewportByElement(viewportElement);

      if (viewport) {
        this.removeViewport(viewport);
      }
    }

    return removeViewportByElement;
  }();

  _proto.removeLinkedViewportFromSession = function () {
    function removeLinkedViewportFromSession(viewport) {
      var linkedViewports = Session.get('StackImagePositionOffsetSynchronizerLinkedViewports');
      var index = linkedViewports.indexOf(viewport.index);

      if (index !== -1) {
        linkedViewports.splice(index, 1);
        Session.set('StackImagePositionOffsetSynchronizerLinkedViewports', linkedViewports);
      }
    }

    return removeLinkedViewportFromSession;
  }();

  _proto.elementDisabledHandler = function () {
    function elementDisabledHandler(context) {
      return function (e) {
        return context.removeViewportByElement(e.detail.element);
      };
    }

    return elementDisabledHandler;
  }();

  _proto.getViewportByIndexes = function () {
    function getViewportByIndexes(viewportIndexes) {
      var viewports = [];
      var $viewportElements = $('.imageViewerViewport');
      viewportIndexes.forEach(function (index) {
        var element = $viewportElements.get(index);

        if (!element) {
          return;
        }

        viewports.push({
          index: index,
          element: element
        });
      });
      return viewports;
    }

    return getViewportByIndexes;
  }();

  _proto.isViewportsLinkable = function () {
    function isViewportsLinkable(viewportElementA, viewportElementB) {
      var viewportAImageNormal = this.getViewportImageNormal(viewportElementA);
      var viewportBImageNormal = this.getViewportImageNormal(viewportElementB);

      if (viewportAImageNormal && viewportBImageNormal) {
        var angleInRadians = viewportBImageNormal.angleTo(viewportAImageNormal); // Pi / 12 radians = 15 degrees
        // If the angle between two vectors is Pi, it means they are just inverted

        return angleInRadians < Math.PI / 12 || angleInRadians === Math.PI;
      }

      return false;
    }

    return isViewportsLinkable;
  }();

  _proto.getLinkableViewports = function () {
    function getLinkableViewports() {
      var _this2 = this;

      var activeViewportElement = this.getActiveViewportElement();
      var viewports = [];
      $('.imageViewerViewport').each(function (index, viewportElement) {
        if (_this2.isViewportsLinkable(activeViewportElement, viewportElement)) {
          viewports.push({
            index: index,
            element: viewportElement
          });
        }
      });
      return viewports;
    }

    return getLinkableViewports;
  }();

  _proto.getViewportImageNormal = function () {
    function getViewportImageNormal(element) {
      if (!element) {
        return;
      }

      element = $(element).get(0);

      try {
        var enabledElement = cornerstone.getEnabledElement(element);

        if (!enabledElement.image) {
          return;
        }

        var imageId = enabledElement.image.imageId;
        var imagePlane = cornerstone.metaData.get('imagePlane', imageId);

        if (!imagePlane || !imagePlane.rowCosines || !imagePlane.columnCosines) {
          return;
        }

        return imagePlane.rowCosines.clone().cross(imagePlane.columnCosines);
      } catch (error) {
        var errorMessage = error.message || error;
        OHIF.log.info("StackImagePositionOffsetSynchronizer getViewportImageNormal: " + errorMessage);
      }
    }

    return getViewportImageNormal;
  }();

  (0, _createClass2.default)(StackImagePositionOffsetSynchronizer, null, [{
    key: "ELEMENT_DISABLED_EVENT",
    get: function () {
      return 'cornerstoneelementdisabled.StackImagePositionOffsetSynchronizer';
    }
  }]);
  return StackImagePositionOffsetSynchronizer;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"StudyLoadingListener.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/classes/StudyLoadingListener.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  StudyLoadingListener: function () {
    return StudyLoadingListener;
  },
  StackLoadingListener: function () {
    return StackLoadingListener;
  },
  DICOMFileLoadingListener: function () {
    return DICOMFileLoadingListener;
  }
});
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
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 2);
var cornerstone, cornerstoneWADOImageLoader;
module.watch(require("meteor/ohif:cornerstone"), {
  cornerstone: function (v) {
    cornerstone = v;
  },
  cornerstoneWADOImageLoader: function (v) {
    cornerstoneWADOImageLoader = v;
  }
}, 3);

var BaseLoadingListener =
/*#__PURE__*/
function () {
  function BaseLoadingListener(stack, options) {
    options = options || {};
    this.id = BaseLoadingListener.getNewId();
    this.stack = stack;
    this.startListening();
    this.statsItemsLimit = options.statsItemsLimit || 2;
    this.stats = {
      items: [],
      total: 0,
      elapsedTime: 0,
      speed: 0
    }; // Register the start point to make it possible to calculate
    // bytes/s or frames/s when the first byte or frame is received

    this._addStatsData(0); // Update the progress before starting the download
    // to make it possible to update the UI


    this._updateProgress();
  }

  var _proto = BaseLoadingListener.prototype;

  _proto._addStatsData = function () {
    function _addStatsData(value) {
      var date = new Date();
      var stats = this.stats;
      var items = stats.items;
      var newItem = {
        value: value,
        date: date
      };
      items.push(newItem);
      stats.total += newItem.value; // Remove items until it gets below the limit

      while (items.length > this.statsItemsLimit) {
        var item = items.shift();
        stats.total -= item.value;
      } // Update the elapsedTime (seconds) based on first and last
      // elements and recalculate the speed (bytes/s or frames/s)


      if (items.length > 1) {
        var oldestItem = items[0];
        stats.elapsedTime = (newItem.date.getTime() - oldestItem.date.getTime()) / 1000;
        stats.speed = (stats.total - oldestItem.value) / stats.elapsedTime;
      }
    }

    return _addStatsData;
  }();

  _proto._getProgressSessionId = function () {
    function _getProgressSessionId() {
      var displaySetInstanceUid = this.stack.displaySetInstanceUid;
      return 'StackProgress:' + displaySetInstanceUid;
    }

    return _getProgressSessionId;
  }();

  _proto._clearSession = function () {
    function _clearSession() {
      var progressSessionId = this._getProgressSessionId();

      Session.set(progressSessionId, undefined);
      delete Session.keys.progressSessionId;
    }

    return _clearSession;
  }();

  _proto.startListening = function () {
    function startListening() {
      throw new Error('`startListening` must be implemented by child clases');
    }

    return startListening;
  }();

  _proto.stopListening = function () {
    function stopListening() {
      throw new Error('`stopListening` must be implemented by child clases');
    }

    return stopListening;
  }();

  _proto.destroy = function () {
    function destroy() {
      this.stopListening();

      this._clearSession();
    }

    return destroy;
  }();

  BaseLoadingListener.getNewId = function () {
    function getNewId() {
      var timeSlice = new Date().getTime().toString().slice(-8);
      var randomNumber = parseInt(Math.random() * 1000000000);
      return timeSlice.toString() + randomNumber.toString();
    }

    return getNewId;
  }();

  return BaseLoadingListener;
}();

var DICOMFileLoadingListener =
/*#__PURE__*/
function (_BaseLoadingListener) {
  (0, _inheritsLoose2.default)(DICOMFileLoadingListener, _BaseLoadingListener);

  function DICOMFileLoadingListener(stack) {
    var _this;

    _this = _BaseLoadingListener.call(this, stack) || this;
    _this._dataSetUrl = _this._getDataSetUrl(stack);
    _this._lastLoaded = 0; // Check how many instances has already been download (cached)

    _this._checkCachedData();

    return _this;
  }

  var _proto2 = DICOMFileLoadingListener.prototype;

  _proto2._checkCachedData = function () {
    function _checkCachedData() {
      var dataSet = cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.get(this._dataSetUrl);

      if (dataSet) {
        var dataSetLength = dataSet.byteArray.length;

        this._updateProgress({
          percentComplete: 100,
          loaded: dataSetLength,
          total: dataSetLength
        });
      }
    }

    return _checkCachedData;
  }();

  _proto2._getImageLoadProgressEventName = function () {
    function _getImageLoadProgressEventName() {
      return 'cornerstoneimageloadprogress.' + this.id;
    }

    return _getImageLoadProgressEventName;
  }();

  _proto2.startListening = function () {
    function startListening() {
      var imageLoadProgressEventName = this._getImageLoadProgressEventName();

      var imageLoadProgressEventHandle = this._imageLoadProgressEventHandle.bind(this);

      this.stopListening();
      cornerstone.events.addEventListener(imageLoadProgressEventName, imageLoadProgressEventHandle);
    }

    return startListening;
  }();

  _proto2.stopListening = function () {
    function stopListening() {
      var imageLoadProgressEventName = this._getImageLoadProgressEventName();

      cornerstone.events.removeEventListener(imageLoadProgressEventName);
    }

    return stopListening;
  }();

  _proto2._imageLoadProgressEventHandle = function () {
    function _imageLoadProgressEventHandle(e) {
      var eventData = e.detail;

      var dataSetUrl = this._convertImageIdToDataSetUrl(eventData.imageId);

      var bytesDiff = eventData.loaded - this._lastLoaded;

      if (!this._dataSetUrl === dataSetUrl) {
        return;
      } // Add the bytes downloaded to the stats


      this._addStatsData(bytesDiff); // Update the download progress


      this._updateProgress(eventData); // Cache the last eventData.loaded value


      this._lastLoaded = eventData.loaded;
    }

    return _imageLoadProgressEventHandle;
  }();

  _proto2._updateProgress = function () {
    function _updateProgress(eventData) {
      var progressSessionId = this._getProgressSessionId();

      eventData = eventData || {};
      Session.set(progressSessionId, {
        multiFrame: false,
        percentComplete: eventData.percentComplete,
        bytesLoaded: eventData.loaded,
        bytesTotal: eventData.total,
        bytesPerSecond: this.stats.speed
      });
    }

    return _updateProgress;
  }();

  _proto2._convertImageIdToDataSetUrl = function () {
    function _convertImageIdToDataSetUrl(imageId) {
      // Remove the prefix ("dicomweb:" or "wadouri:"")
      imageId = imageId.replace(/^(dicomweb:|wadouri:)/i, ''); // Remove "frame=999&" from the imageId

      imageId = imageId.replace(/frame=\d+&?/i, ''); // Remove the last "&" like in "http://...?foo=1&bar=2&"

      imageId = imageId.replace(/&$/, '');
      return imageId;
    }

    return _convertImageIdToDataSetUrl;
  }();

  _proto2._getDataSetUrl = function () {
    function _getDataSetUrl(stack) {
      var imageId = stack.imageIds[0];
      return this._convertImageIdToDataSetUrl(imageId);
    }

    return _getDataSetUrl;
  }();

  return DICOMFileLoadingListener;
}(BaseLoadingListener);

var StackLoadingListener =
/*#__PURE__*/
function (_BaseLoadingListener2) {
  (0, _inheritsLoose2.default)(StackLoadingListener, _BaseLoadingListener2);

  function StackLoadingListener(stack) {
    var _this2;

    _this2 = _BaseLoadingListener2.call(this, stack, {
      statsItemsLimit: 20
    }) || this;
    _this2.imageDataMap = _this2._convertImageIdsArrayToMap(stack.imageIds);
    _this2.framesStatus = _this2._createArray(stack.imageIds.length, false);
    _this2.loadedCount = 0; // Check how many instances has already been download (cached)

    _this2._checkCachedData();

    return _this2;
  }

  var _proto3 = StackLoadingListener.prototype;

  _proto3._convertImageIdsArrayToMap = function () {
    function _convertImageIdsArrayToMap(imageIds) {
      var imageIdsMap = new Map();

      for (var i = 0; i < imageIds.length; i++) {
        imageIdsMap.set(imageIds[i], {
          index: i,
          loaded: false
        });
      }

      return imageIdsMap;
    }

    return _convertImageIdsArrayToMap;
  }();

  _proto3._createArray = function () {
    function _createArray(length, defaultValue) {
      // `new Array(length)` is an anti-pattern in javascript because its
      // funny API. Otherwise I would go for `new Array(length).fill(false)`
      var array = [];

      for (var i = 0; i < length; i++) {
        array[i] = defaultValue;
      }

      return array;
    }

    return _createArray;
  }();

  _proto3._checkCachedData = function () {
    function _checkCachedData() {// const imageIds = this.stack.imageIds;
      // TODO: No way to check status of Promise.

      /*for(let i = 0; i < imageIds.length; i++) {
          const imageId = imageIds[i];
           const imagePromise = cornerstone.imageCache.getImageLoadObject(imageId).promise;
           if (imagePromise && (imagePromise.state() === 'resolved')) {
              this._updateFrameStatus(imageId, true);
          }
      }*/
    }

    return _checkCachedData;
  }();

  _proto3._getImageLoadedEventName = function () {
    function _getImageLoadedEventName() {
      return 'cornerstoneimageloaded.' + this.id;
    }

    return _getImageLoadedEventName;
  }();

  _proto3._getImageCachePromiseRemoveEventName = function () {
    function _getImageCachePromiseRemoveEventName() {
      return 'cornerstoneimagecachepromiseremoved.' + this.id;
    }

    return _getImageCachePromiseRemoveEventName;
  }();

  _proto3.startListening = function () {
    function startListening() {
      var imageLoadedEventName = this._getImageLoadedEventName();

      var imageCachePromiseRemovedEventName = this._getImageCachePromiseRemoveEventName();

      var imageLoadedEventHandle = this._imageLoadedEventHandle.bind(this);

      var imageCachePromiseRemovedEventHandle = this._imageCachePromiseRemovedEventHandle.bind(this);

      this.stopListening();
      cornerstone.events.addEventListener(imageLoadedEventName, imageLoadedEventHandle);
      cornerstone.events.addEventListener(imageCachePromiseRemovedEventName, imageCachePromiseRemovedEventHandle);
    }

    return startListening;
  }();

  _proto3.stopListening = function () {
    function stopListening() {
      var imageLoadedEventName = this._getImageLoadedEventName();

      var imageCachePromiseRemovedEventName = this._getImageCachePromiseRemoveEventName();

      cornerstone.events.removeEventListener(imageLoadedEventName);
      cornerstone.events.removeEventListener(imageCachePromiseRemovedEventName);
    }

    return stopListening;
  }();

  _proto3._updateFrameStatus = function () {
    function _updateFrameStatus(imageId, loaded) {
      var imageData = this.imageDataMap.get(imageId);

      if (!imageData || imageData.loaded === loaded) {
        return;
      } // Add one more frame to the stats


      if (loaded) {
        this._addStatsData(1);
      }

      imageData.loaded = loaded;
      this.framesStatus[imageData.index] = loaded;
      this.loadedCount += loaded ? 1 : -1;

      this._updateProgress();
    }

    return _updateFrameStatus;
  }();

  _proto3._imageLoadedEventHandle = function () {
    function _imageLoadedEventHandle(e) {
      this._updateFrameStatus(e.detail.image.imageId, true);
    }

    return _imageLoadedEventHandle;
  }();

  _proto3._imageCachePromiseRemovedEventHandle = function () {
    function _imageCachePromiseRemovedEventHandle(e) {
      this._updateFrameStatus(e.detail.imageId, false);
    }

    return _imageCachePromiseRemovedEventHandle;
  }();

  _proto3._updateProgress = function () {
    function _updateProgress() {
      var totalFramesCount = this.stack.imageIds.length;
      var loadedFramesCount = this.loadedCount;
      var loadingFramesCount = totalFramesCount - loadedFramesCount;
      var percentComplete = Math.round(loadedFramesCount / totalFramesCount * 100);

      var progressSessionId = this._getProgressSessionId();

      Session.set(progressSessionId, {
        multiFrame: true,
        totalFramesCount: totalFramesCount,
        loadedFramesCount: loadedFramesCount,
        loadingFramesCount: loadingFramesCount,
        percentComplete: percentComplete,
        framesPerSecond: this.stats.speed,
        framesStatus: this.framesStatus
      });
    }

    return _updateProgress;
  }();

  _proto3._logProgress = function () {
    function _logProgress() {
      var totalFramesCount = this.stack.imageIds.length;
      var displaySetInstanceUid = this.stack.displaySetInstanceUid;
      var progressBar = '[';

      for (var i = 0; i < totalFramesCount; i++) {
        var ch = this.framesStatus[i] ? '|' : '.';
        progressBar += "" + ch;
      }

      progressBar += ']';
      OHIF.log.info(displaySetInstanceUid + ": " + progressBar);
    }

    return _logProgress;
  }();

  return StackLoadingListener;
}(BaseLoadingListener);

var StudyLoadingListener =
/*#__PURE__*/
function () {
  function StudyLoadingListener() {
    this.listeners = {};
  }

  var _proto4 = StudyLoadingListener.prototype;

  _proto4.addStack = function () {
    function addStack(stack, stackMetaData) {
      var displaySetInstanceUid = stack.displaySetInstanceUid;

      if (!this.listeners[displaySetInstanceUid]) {
        var listener = this._createListener(stack, stackMetaData);

        if (listener) {
          this.listeners[displaySetInstanceUid] = listener;
        }
      }
    }

    return addStack;
  }();

  _proto4.addStudy = function () {
    function addStudy(study) {
      var _this3 = this;

      study.displaySets.forEach(function (displaySet) {
        var stack = OHIF.viewerbase.stackManager.findOrCreateStack(study, displaySet);

        _this3.addStack(stack, {
          isMultiFrame: displaySet.isMultiFrame
        });
      });
    }

    return addStudy;
  }();

  _proto4.addStudies = function () {
    function addStudies(studies) {
      if (!studies || !studies.length) {
        return;
      }

      for (var i = 0; i < studies.length; i++) {
        this.addStudy(studies[i]);
      }
    }

    return addStudies;
  }();

  _proto4.clear = function () {
    function clear() {
      var displaySetInstanceUids = Object.keys(this.listeners);
      var length = displaySetInstanceUids.length;

      for (var i = 0; i < length; i++) {
        var displaySetInstanceUid = displaySetInstanceUids[i];
        var displaySet = this.listeners[displaySetInstanceUid];
        displaySet.destroy();
      }

      this.listeners = {};
    }

    return clear;
  }();

  _proto4._createListener = function () {
    function _createListener(stack, stackMetaData) {
      var schema = this._getSchema(stack); // A StackLoadingListener can be created if it's wadors or not a multiframe
      // wadouri instance (single file) that means "N" files will have to be
      // downloaded where "N" is the number of frames. DICOMFileLoadingListener
      // is created only if it's a single DICOM file and there's no way to know
      // how many frames has already been loaded (bytes/s instead of frames/s).


      if (schema === 'wadors' || !stackMetaData.isMultiFrame) {
        return new StackLoadingListener(stack);
      } else {
        return new DICOMFileLoadingListener(stack);
      }
    }

    return _createListener;
  }();

  _proto4._getSchema = function () {
    function _getSchema(stack) {
      var imageId = stack.imageIds[0];
      var colonIndex = imageId.indexOf(':');
      return imageId.substring(0, colonIndex);
    }

    return _getSchema;
  }(); // Singleton


  StudyLoadingListener.getInstance = function () {
    function getInstance() {
      if (!StudyLoadingListener._instance) {
        StudyLoadingListener._instance = new StudyLoadingListener();
      }

      return StudyLoadingListener._instance;
    }

    return getInstance;
  }();

  return StudyLoadingListener;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"StudyMetadataSource.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/classes/StudyMetadataSource.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  StudyMetadataSource: function () {
    return StudyMetadataSource;
  }
});
var OHIFError;
module.watch(require("./OHIFError"), {
  OHIFError: function (v) {
    OHIFError = v;
  }
}, 0);

var StudyMetadataSource =
/*#__PURE__*/
function () {
  function StudyMetadataSource() {}

  var _proto = StudyMetadataSource.prototype;

  /**
   * Get study metadata for a study with given study InstanceUID.
   * @param {String} studyInstanceUID Study InstanceUID.
   */
  _proto.getByInstanceUID = function () {
    function getByInstanceUID(studyInstanceUID) {
      /**
       * Please override this method on a specialized class.
       */
      throw new OHIFError('StudyMetadataSource::getByInstanceUID is not overriden. Please, override it in a specialized class. See OHIFStudyMetadataSource for example');
    }

    return getByInstanceUID;
  }();
  /**
   * Load study info and study metadata for a given study into the viewer.
   * @param {StudySummary|StudyMetadata} study of StudySummary or StudyMetadata object.
   */


  _proto.loadStudy = function () {
    function loadStudy(study) {
      /**
       * Please override this method on a specialized class.
       */
      throw new OHIFError('StudyMetadataSource::loadStudy is not overriden. Please, override it in a specialized class. See OHIFStudyMetadataSource for example');
    }

    return loadStudy;
  }();

  return StudyMetadataSource;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"StudyPrefetcher.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/classes/StudyPrefetcher.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  StudyPrefetcher: function () {
    return StudyPrefetcher;
  }
});
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 1);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 2);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 3);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 4);
var OHIFError;
module.watch(require("./OHIFError"), {
  OHIFError: function (v) {
    OHIFError = v;
  }
}, 5);
var StackManager;
module.watch(require("../StackManager.js"), {
  StackManager: function (v) {
    StackManager = v;
  }
}, 6);
var getImageId;
module.watch(require("../getImageId.js"), {
  getImageId: function (v) {
    getImageId = v;
  }
}, 7);

var StudyPrefetcher =
/*#__PURE__*/
function () {
  function StudyPrefetcher(studies) {
    this.studies = studies || [];
    this.prefetchDisplaySetsTimeout = 300;
    this.lastActiveViewportElement = null;
    this.cacheFullHandlerBound = _.bind(this.cacheFullHandler, this);
    cornerstone.events.addEventListener('cornerstoneimagecachefull.StudyPrefetcher', this.cacheFullHandlerBound);
  }

  var _proto = StudyPrefetcher.prototype;

  _proto.destroy = function () {
    function destroy() {
      this.stopPrefetching();
      cornerstone.events.removeEventListener('cornerstoneimagecachefull.StudyPrefetcher', this.cacheFullHandlerBound);
    }

    return destroy;
  }();

  StudyPrefetcher.getInstance = function () {
    function getInstance() {
      if (!StudyPrefetcher.instance) {
        StudyPrefetcher.instance = new StudyPrefetcher();
      }

      return StudyPrefetcher.instance;
    }

    return getInstance;
  }();

  _proto.setStudies = function () {
    function setStudies(studies) {
      this.stopPrefetching();
      this.studies = studies;
    }

    return setStudies;
  }();

  _proto.prefetch = function () {
    function prefetch() {
      if (!this.studies || !this.studies.length) {
        return;
      }

      this.stopPrefetching();
      this.prefetchActiveViewport();
      this.prefetchDisplaySets();
    }

    return prefetch;
  }();

  _proto.stopPrefetching = function () {
    function stopPrefetching() {
      this.disableViewportPrefetch();
      cornerstoneTools.requestPoolManager.clearRequestStack('prefetch');
    }

    return stopPrefetching;
  }();

  _proto.prefetchActiveViewport = function () {
    function prefetchActiveViewport() {
      var activeViewportElement = OHIF.viewerbase.viewportUtils.getActiveViewportElement();
      this.enablePrefetchOnElement(activeViewportElement);
      this.attachActiveViewportListeners(activeViewportElement);
    }

    return prefetchActiveViewport;
  }();

  _proto.disableViewportPrefetch = function () {
    function disableViewportPrefetch() {
      $('.imageViewerViewport').each(function () {
        if (!$(this).find('canvas').length) {
          return;
        }

        cornerstoneTools.stackPrefetch.disable(this);
      });
    }

    return disableViewportPrefetch;
  }();

  _proto.hasStack = function () {
    function hasStack(element) {
      var stack = cornerstoneTools.getToolState(element, 'stack');
      return stack && stack.data.length && stack.data[0].imageIds.length > 1;
    }

    return hasStack;
  }();
  /**
   * This function enables stack prefetching for a specified element (viewport)
   * It first disables any prefetching currently occurring on any other viewports.
   *
   * @param element {node} DOM Node representing the viewport element
   */


  _proto.enablePrefetchOnElement = function () {
    function enablePrefetchOnElement(element) {
      if (!$(element).find('canvas').length) {
        return;
      } // Make sure there is a stack to fetch


      if (this.hasStack(element)) {
        // Check if this is a clip or not
        var activeViewportIndex = Session.get('activeViewport');
        var displaySetInstanceUid = OHIF.viewer.data.loadedSeriesData[activeViewportIndex].displaySetInstanceUid;
        var stack = StackManager.findStack(displaySetInstanceUid);

        if (!stack) {
          throw new OHIFError("Requested stack " + displaySetInstanceUid + " was not created");
        }

        cornerstoneTools.stackPrefetch.enable(element);
      }
    }

    return enablePrefetchOnElement;
  }();

  _proto.attachActiveViewportListeners = function () {
    function attachActiveViewportListeners(activeViewportElement) {
      function newImageHandler() {
        // It needs to be called asynchronously because cornerstone does it at the same way.
        // All instance urls to be prefetched will be removed again if we add them before
        // Cornerstone callback (see stackPrefetch.onImageUpdated).
        StudyPrefetcher.prefetchDisplaySetsAsync();
      }

      if (this.lastActiveViewportElement) {
        this.lastActiveViewportElement.removeEventListener('cornerstonenewimage.StudyPrefetcher', newImageHandler);
      }

      activeViewportElement.removeEventListener('cornerstonenewimage.StudyPrefetcher', newImageHandler); // Cornerstone will not attach an event listener if the element doesn't have a stack

      if (this.hasStack(activeViewportElement)) {
        activeViewportElement.addEventListener('cornerstonenewimage.StudyPrefetcher', newImageHandler);
      }

      this.lastActiveViewportElement = activeViewportElement;
    }

    return attachActiveViewportListeners;
  }();

  _proto.prefetchDisplaySetsAsync = function () {
    function prefetchDisplaySetsAsync(timeout) {
      var _this = this;

      timeout = timeout || this.prefetchDisplaySetsTimeout;
      clearTimeout(this.prefetchDisplaySetsHandler);
      this.prefetchDisplaySetsHandler = setTimeout(function () {
        _this.prefetchDisplaySets();
      }, timeout);
    }

    return prefetchDisplaySetsAsync;
  }();

  _proto.prefetchDisplaySets = function () {
    function prefetchDisplaySets() {
      var config = Meteor.settings.public.prefetch;
      var displaySetsToPrefetch = this.getDisplaySetsToPrefetch(config);
      var imageIds = this.getImageIdsFromDisplaySets(displaySetsToPrefetch);
      this.prefetchImageIds(imageIds);
    }

    return prefetchDisplaySets;
  }();

  _proto.prefetchImageIds = function () {
    function prefetchImageIds(imageIds) {
      var nonCachedImageIds = this.filterCachedImageIds(imageIds);
      var requestPoolManager = cornerstoneTools.requestPoolManager;
      var requestType = 'prefetch';
      var preventCache = false;

      var noop = function () {};

      nonCachedImageIds.forEach(function (imageId) {
        requestPoolManager.addRequest({}, imageId, requestType, preventCache, noop, noop);
      });
      requestPoolManager.startGrabbing();
    }

    return prefetchImageIds;
  }();

  _proto.getActiveViewportImage = function () {
    function getActiveViewportImage() {
      var element = OHIF.viewerbase.viewportUtils.getActiveViewportElement();

      if (!element) {
        return;
      }

      var enabledElement = cornerstone.getEnabledElement(element);
      var image = enabledElement.image;
      return image;
    }

    return getActiveViewportImage;
  }();

  _proto.getStudy = function () {
    function getStudy(image) {
      var studyMetadata = cornerstone.metaData.get('study', image.imageId);
      return OHIF.viewer.Studies.find(function (study) {
        return study.studyInstanceUid === studyMetadata.studyInstanceUid;
      });
    }

    return getStudy;
  }();

  _proto.getSeries = function () {
    function getSeries(study, image) {
      var seriesMetadata = cornerstone.metaData.get('series', image.imageId);
      var studyMetadata = OHIF.viewerbase.getStudyMetadata(study);
      return studyMetadata.getSeriesByUID(seriesMetadata.seriesInstanceUid);
    }

    return getSeries;
  }();

  _proto.getInstance = function () {
    function getInstance(series, image) {
      var instanceMetadata = cornerstone.metaData.get('instance', image.imageId);
      return series.getInstanceByUID(instanceMetadata.sopInstanceUid);
    }

    return getInstance;
  }();

  _proto.getActiveDisplaySet = function () {
    function getActiveDisplaySet(displaySets, instance) {
      return _.find(displaySets, function (displaySet) {
        return _.some(displaySet.images, function (displaySetImage) {
          return displaySetImage.sopInstanceUid === instance.sopInstanceUid;
        });
      });
    }

    return getActiveDisplaySet;
  }();

  _proto.getDisplaySetsToPrefetch = function () {
    function getDisplaySetsToPrefetch(config) {
      var image = this.getActiveViewportImage();

      if (!image || !config || !config.displaySetCount) {
        return [];
      }

      var study = this.getStudy(image);
      var series = this.getSeries(study, image);
      var instance = this.getInstance(series, image);
      var displaySets = study.displaySets;
      var activeDisplaySet = this.getActiveDisplaySet(displaySets, instance);
      var prefetchMethodMap = {
        topdown: 'getFirstDisplaySets',
        downward: 'getNextDisplaySets',
        closest: 'getClosestDisplaySets'
      };
      var prefetchOrder = config.order;
      var methodName = prefetchMethodMap[prefetchOrder];
      var getDisplaySets = this[methodName];

      if (!getDisplaySets) {
        if (prefetchOrder) {
          OHIF.log.warn("Invalid prefetch order configuration (" + prefetchOrder + ")");
        }

        return [];
      }

      return getDisplaySets.call(this, displaySets, activeDisplaySet, config.displaySetCount);
    }

    return getDisplaySetsToPrefetch;
  }();

  _proto.getFirstDisplaySets = function () {
    function getFirstDisplaySets(displaySets, activeDisplaySet, displaySetCount) {
      var length = displaySets.length;
      var selectedDisplaySets = [];

      for (var i = 0; i < length && displaySetCount; i++) {
        var displaySet = displaySets[i];

        if (displaySet !== activeDisplaySet) {
          selectedDisplaySets.push(displaySet);
          displaySetCount--;
        }
      }

      return selectedDisplaySets;
    }

    return getFirstDisplaySets;
  }();

  _proto.getNextDisplaySets = function () {
    function getNextDisplaySets(displaySets, activeDisplaySet, displaySetCount) {
      var activeDisplaySetIndex = displaySets.indexOf(activeDisplaySet);
      var begin = activeDisplaySetIndex + 1;
      var end = Math.min(begin + displaySetCount, displaySets.length);
      return displaySets.slice(begin, end);
    }

    return getNextDisplaySets;
  }();

  _proto.getClosestDisplaySets = function () {
    function getClosestDisplaySets(displaySets, activeDisplaySet, displaySetCount) {
      var activeDisplaySetIndex = displaySets.indexOf(activeDisplaySet);
      var length = displaySets.length;
      var selectedDisplaySets = [];
      var left = activeDisplaySetIndex - 1;
      var right = activeDisplaySetIndex + 1;

      while ((left >= 0 || right < length) && displaySetCount) {
        if (left >= 0) {
          selectedDisplaySets.push(displaySets[left]);
          displaySetCount--;
          left--;
        }

        if (right < length && displaySetCount) {
          selectedDisplaySets.push(displaySets[right]);
          displaySetCount--;
          right++;
        }
      }

      return selectedDisplaySets;
    }

    return getClosestDisplaySets;
  }();

  _proto.getImageIdsFromDisplaySets = function () {
    function getImageIdsFromDisplaySets(displaySets) {
      var _this2 = this;

      var imageIds = [];
      displaySets.forEach(function (displaySet) {
        imageIds = imageIds.concat(_this2.getImageIdsFromDisplaySet(displaySet));
      });
      return imageIds;
    }

    return getImageIdsFromDisplaySets;
  }();

  _proto.getImageIdsFromDisplaySet = function () {
    function getImageIdsFromDisplaySet(displaySet) {
      var imageIds = [];
      displaySet.images.forEach(function (image) {
        var numFrames = image.numFrames;

        if (numFrames > 1) {
          for (var i = 0; i < numFrames; i++) {
            var imageId = getImageId(image, i);
            imageIds.push(imageId);
          }
        } else {
          var _imageId = getImageId(image);

          imageIds.push(_imageId);
        }
      });
      return imageIds;
    }

    return getImageIdsFromDisplaySet;
  }();

  _proto.filterCachedImageIds = function () {
    function filterCachedImageIds(imageIds) {
      var _this3 = this;

      return _.filter(imageIds, function (imageId) {
        return !_this3.isImageCached(imageId);
      });
    }

    return filterCachedImageIds;
  }();

  _proto.isImageCached = function () {
    function isImageCached(imageId) {
      var image = cornerstone.imageCache.imageCache[imageId];
      return image && image.sizeInBytes;
    }

    return isImageCached;
  }();

  _proto.cacheFullHandler = function () {
    function cacheFullHandler() {
      OHIF.log.warn('Cache full');
      this.stopPrefetching();
    }

    return cacheFullHandler;
  }();

  return StudyPrefetcher;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TypeSafeCollection.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/classes/TypeSafeCollection.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

module.export({
  TypeSafeCollection: function () {
    return TypeSafeCollection;
  }
});
var Random;
module.watch(require("meteor/random"), {
  Random: function (v) {
    Random = v;
  }
}, 0);
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 1);

/**
 * Constants
 */
var PROPERTY_SEPARATOR = '.';
var ORDER_ASC = 'asc';
var ORDER_DESC = 'desc';
var MIN_COUNT = 0x00000000;
var MAX_COUNT = 0x7FFFFFFF;
/**
 * Class Definition
 */

var TypeSafeCollection =
/*#__PURE__*/
function () {
  function TypeSafeCollection() {
    this._operationCount = new ReactiveVar(MIN_COUNT);
    this._elementList = [];
    this._handlers = Object.create(null);
  }
  /**
   * Private Methods
   */


  var _proto = TypeSafeCollection.prototype;

  _proto._invalidate = function () {
    function _invalidate() {
      var count = this._operationCount.get();

      this._operationCount.set(count < MAX_COUNT ? count + 1 : MIN_COUNT);
    }

    return _invalidate;
  }();

  _proto._elements = function () {
    function _elements(silent) {
      silent === true || this._operationCount.get();
      return this._elementList;
    }

    return _elements;
  }();

  _proto._elementWithPayload = function () {
    function _elementWithPayload(payload, silent) {
      return this._elements(silent).find(function (item) {
        return item.payload === payload;
      });
    }

    return _elementWithPayload;
  }();

  _proto._elementWithId = function () {
    function _elementWithId(id, silent) {
      return this._elements(silent).find(function (item) {
        return item.id === id;
      });
    }

    return _elementWithId;
  }();

  _proto._trigger = function () {
    function _trigger(event, data) {
      var handlers = this._handlers;

      if (event in handlers) {
        handlers = handlers[event];

        if (!(handlers instanceof Array)) {
          return;
        }

        for (var i = 0, limit = handlers.length; i < limit; ++i) {
          var handler = handlers[i];

          if (_isFunction(handler)) {
            handler.call(null, data);
          }
        }
      }
    }

    return _trigger;
  }();
  /**
   * Public Methods
   */


  _proto.onInsert = function () {
    function onInsert(callback) {
      if (_isFunction(callback)) {
        var handlers = this._handlers.insert;

        if (!(handlers instanceof Array)) {
          handlers = [];
          this._handlers.insert = handlers;
        }

        handlers.push(callback);
      }
    }

    return onInsert;
  }();
  /**
   * Update the payload associated with the given ID to be the new supplied payload.
   * @param {string} id The ID of the entry that will be updated.
   * @param {any} payload The element that will replace the previous payload.
   * @returns {boolean} Returns true if the given ID is present in the collection, false otherwise.
   */


  _proto.updateById = function () {
    function updateById(id, payload) {
      var result = false,
          found = this._elementWithPayload(payload, true);

      if (found) {
        // nothing to do since the element is already in the collection...
        if (found.id === id) {
          // set result to true since the ids match...
          result = true;

          this._invalidate();
        }
      } else {
        found = this._elementWithId(id, true);

        if (found) {
          found.payload = payload;
          result = true;

          this._invalidate();
        }
      }

      return result;
    }

    return updateById;
  }();
  /**
   * Signal that the given element has been changed by notifying reactive data-source observers.
   * This method is basically a means to invalidate the inernal reactive data-source.
   * @param {any} payload The element that has been altered.
   * @returns {boolean} Returns true if the element is present in the collection, false otherwise.
   */


  _proto.update = function () {
    function update(payload) {
      var result = false,
          found = this._elementWithPayload(payload, true);

      if (found) {
        // nothing to do since the element is already in the collection...
        result = true;

        this._invalidate();
      }

      return result;
    }

    return update;
  }();
  /**
   * Insert an element in the collection. On success, the element ID (a unique string) is returned. On failure, returns null.
   * A failure scenario only happens when the given payload is already present in the collection. Note that NO exceptions are thrown!
   * @param {any} payload The element to be stored.
   * @returns {string} The ID of the inserted element or null if the element already exists...
   */


  _proto.insert = function () {
    function insert(payload) {
      var id = null,
          found = this._elementWithPayload(payload, true);

      if (!found) {
        id = Random.id();

        this._elements(true).push({
          id: id,
          payload: payload
        });

        this._invalidate();

        this._trigger('insert', {
          id: id,
          data: payload
        });
      }

      return id;
    }

    return insert;
  }();
  /**
   * Remove all elements from the collection.
   * @returns {void} No meaningful value is returned.
   */


  _proto.removeAll = function () {
    function removeAll() {
      var all = this._elements(true),
          length = all.length;

      for (var i = length - 1; i >= 0; i--) {
        var item = all[i];
        delete item.id;
        delete item.payload;
        all[i] = null;
      }

      all.splice(0, length);

      this._invalidate();
    }

    return removeAll;
  }();
  /**
   * Remove elements from the collection that match the criteria given in the property map.
   * @param {Object} propertyMap A property map that will be macthed against all collection elements.
   * @returns {Array} A list with all removed elements.
   */


  _proto.remove = function () {
    function remove(propertyMap) {
      var found = this.findAllEntriesBy(propertyMap),
          foundCount = found.length,
          removed = [];

      if (foundCount > 0) {
        var _all = this._elements(true);

        for (var i = foundCount - 1; i >= 0; i--) {
          var item = found[i];

          _all.splice(item[2], 1);

          removed.push(item[0]);
        }

        this._invalidate();
      }

      return removed;
    }

    return remove;
  }();
  /**
   * Provides the ID of the given element inside the collection.
   * @param {any} payload The element being searched for.
   * @returns {string} The ID of the given element or undefined if the element is not present.
   */


  _proto.getElementId = function () {
    function getElementId(payload) {
      var found = this._elementWithPayload(payload);

      return found && found.id;
    }

    return getElementId;
  }();
  /**
   * Provides the position of the given element in the internal list returning -1 if the element is not present.
   * @param {any} payload The element being searched for.
   * @returns {number} The position of the given element in the internal list. If the element is not present -1 is returned.
   */


  _proto.findById = function () {
    function findById(id) {
      var found = this._elementWithId(id);

      return found && found.payload;
    }

    return findById;
  }();
  /**
   * Provides the position of the given element in the internal list returning -1 if the element is not present.
   * @param {any} payload The element being searched for.
   * @returns {number} The position of the given element in the internal list. If the element is not present -1 is returned.
   */


  _proto.indexOfElement = function () {
    function indexOfElement(payload) {
      return this._elements().indexOf(this._elementWithPayload(payload, true));
    }

    return indexOfElement;
  }();
  /**
   * Provides the position of the element associated with the given ID in the internal list returning -1 if the element is not present.
   * @param {string} id The index of the element.
   * @returns {number} The position of the element associated with the given ID in the internal list. If the element is not present -1 is returned.
   */


  _proto.indexOfId = function () {
    function indexOfId(id) {
      return this._elements().indexOf(this._elementWithId(id, true));
    }

    return indexOfId;
  }();
  /**
   * Provides a list-like approach to the collection returning an element by index.
   * @param {number} index The index of the element.
   * @returns {any} If out of bounds, undefined is returned. Otherwise the element in the given position is returned.
   */


  _proto.getElementByIndex = function () {
    function getElementByIndex(index) {
      var found = this._elements()[index >= 0 ? index : -1];

      return found && found.payload;
    }

    return getElementByIndex;
  }();
  /**
   * Find an element by a criteria defined by the given callback function.
   * Attention!!! The reactive source will not be notified if no valid callback is supplied...
   * @param {function} callback A callback function which will define the search criteria. The callback
   * function will be passed the collection element, its ID and its index in this very order. The callback
   * shall return true when its criterea has been fulfilled.
   * @returns {any} The matched element or undefined if not match was found.
   */


  _proto.find = function () {
    function find(callback) {
      var _this = this;

      var found;

      if (_isFunction(callback)) {
        found = this._elements().find(function (item, index) {
          return callback.call(_this, item.payload, item.id, index);
        });
      }

      return found && found.payload;
    }

    return find;
  }();
  /**
   * Find the first element that strictly matches the specified property map.
   * @param {Object} propertyMap A property map that will be macthed against all collection elements.
   * @param {Object} options A set of options. Currently only "options.sort" option is supported.
   * @param {Object.SortingSpecifier} options.sort An optional sorting specifier. If a sorting specifier is supplied
   * but is not valid, an exception will be thrown.
   * @returns {Any} The matched element or undefined if not match was found.
   */


  _proto.findBy = function () {
    function findBy(propertyMap, options) {
      var found;

      if (_isObject(options)) {
        // if the "options" argument is provided and is a valid object,
        // it must be applied to the dataset before search...
        var _all2 = this.all(options);

        if (_all2.length > 0) {
          if (_isObject(propertyMap)) {
            found = _all2.find(function (item) {
              return _compareToPropertyMapStrict(propertyMap, item);
            });
          } else {
            found = _all2[0]; // simply extract the first element...
          }
        }
      } else if (_isObject(propertyMap)) {
        found = this._elements().find(function (item) {
          return _compareToPropertyMapStrict(propertyMap, item.payload);
        });

        if (found) {
          found = found.payload;
        }
      }

      return found;
    }

    return findBy;
  }();
  /**
   * Find all elements that strictly match the specified property map.
   * Attention!!! The reactive source will not be notified if no valid property map is supplied...
   * @param {Object} propertyMap A property map that will be macthed against all collection elements.
   * @returns {Array} An array of entries of all elements that match the given criteria. Each set in
   * in the array has the following format: [ elementData, elementId, elementIndex ].
   */


  _proto.findAllEntriesBy = function () {
    function findAllEntriesBy(propertyMap) {
      var found = [];

      if (_isObject(propertyMap)) {
        this._elements().forEach(function (item, index) {
          if (_compareToPropertyMapStrict(propertyMap, item.payload)) {
            // Match! Add it to the found list...
            found.push([item.payload, item.id, index]);
          }
        });
      }

      return found;
    }

    return findAllEntriesBy;
  }();
  /**
   * Find all elements that match a specified property map.
   * Attention!!! The reactive source will not be notified if no valid property map is supplied...
   * @param {Object} propertyMap A property map that will be macthed against all collection elements.
   * @param {Object} options A set of options. Currently only "options.sort" option is supported.
   * @param {Object.SortingSpecifier} options.sort An optional sorting specifier. If a sorting specifier is supplied
   * but is not valid, an exception will be thrown.
   * @returns {Array} An array with all elements that match the given criteria and sorted in the specified sorting order.
   */


  _proto.findAllBy = function () {
    function findAllBy(propertyMap, options) {
      var found = this.findAllEntriesBy(propertyMap).map(function (item) {
        return item[0];
      }); // Only payload is relevant...

      if (_isObject(options)) {
        if ('sort' in options) {
          _sortListBy(found, options.sort);
        }
      }

      return found;
    }

    return findAllBy;
  }();
  /**
   * Executes the supplied callback function for each element of the collection.
   * Attention!!! The reactive source will not be notified if no valid property map is supplied...
   * @param {function} callback The callback function to be executed. The callback is passed the element,
   * its ID and its index in this very order.
   * @returns {void} Nothing is returned.
   */


  _proto.forEach = function () {
    function forEach(callback) {
      var _this2 = this;

      if (_isFunction(callback)) {
        this._elements().forEach(function (item, index) {
          callback.call(_this2, item.payload, item.id, index);
        });
      }
    }

    return forEach;
  }();
  /**
   * Count the number of elements currently in the collection.
   * @returns {number} The current number of elements in the collection.
   */


  _proto.count = function () {
    function count() {
      return this._elements().length;
    }

    return count;
  }();
  /**
   * Returns a list with all elements of the collection optionally sorted by a sorting specifier criteria.
   * @param {Object} options A set of options. Currently only "options.sort" option is supported.
   * @param {Object.SortingSpecifier} options.sort An optional sorting specifier. If a sorting specifier is supplied
   * but is not valid, an exception will be thrown.
   * @returns {Array} An array with all elements stored in the collection.
   */


  _proto.all = function () {
    function all(options) {
      var list = this._elements().map(function (item) {
        return item.payload;
      });

      if (_isObject(options)) {
        if ('sort' in options) {
          _sortListBy(list, options.sort);
        }
      }

      return list;
    }

    return all;
  }();

  return TypeSafeCollection;
}();

/**
 * Utility Functions
 */

/**
 * Test if supplied argument is a valid object for current class purposes.
 * Atention! The underscore version of this function should not be used for performance reasons.
 */
function _isObject(subject) {
  return subject instanceof Object || (0, _typeof2.default)(subject) === 'object' && subject !== null;
}
/**
 * Test if supplied argument is a valid string for current class purposes.
 * Atention! The underscore version of this function should not be used for performance reasons.
 */


function _isString(subject) {
  return typeof subject === 'string';
}
/**
 * Test if supplied argument is a valid function for current class purposes.
 * Atention! The underscore version of this function should not be used for performance reasons.
 */


function _isFunction(subject) {
  return typeof subject === 'function';
}
/**
 * Shortcut for Object's prototype "hasOwnProperty" method.
 */


var _hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Retrieve an object's property value by name. Composite property names (e.g., 'address.country.name') are accepted.
 * @param {Object} targetObject The object we want read the property from...
 * @param {String} propertyName The property to be read (e.g., 'address.street.name' or 'address.street.number'
 * to read object.address.street.name or object.address.street.number, respectively);
 * @returns {Any} Returns whatever the property holds or undefined if the property cannot be read or reached.
 */

function _getPropertyValue(targetObject, propertyName) {
  var propertyValue; // undefined (the default return value)

  if (_isObject(targetObject) && _isString(propertyName)) {
    var fragments = propertyName.split(PROPERTY_SEPARATOR);
    var fragmentCount = fragments.length;

    if (fragmentCount > 0) {
      var firstFragment = fragments[0];
      var remainingFragments = fragmentCount > 1 ? fragments.slice(1).join(PROPERTY_SEPARATOR) : null;
      propertyValue = targetObject[firstFragment];

      if (remainingFragments !== null) {
        propertyValue = _getPropertyValue(propertyValue, remainingFragments);
      }
    }
  }

  return propertyValue;
}
/**
 * Compare a property map with a target object using strict comparison.
 * @param {Object} propertyMap The property map whose properties will be used for comparison. Composite
 * property names (e.g., 'address.country.name') will be tested against the "resolved" properties from the target object.
 * @param {Object} targetObject The target object whose properties will be tested.
 * @returns {boolean} Returns true if the properties match, false otherwise.
 */


function _compareToPropertyMapStrict(propertyMap, targetObject) {
  var result = false; // "for in" loops do not thown exceptions for invalid data types...

  for (var propertyName in meteorBabelHelpers.sanitizeForInObject(propertyMap)) {
    if (_hasOwnProperty.call(propertyMap, propertyName)) {
      if (propertyMap[propertyName] !== _getPropertyValue(targetObject, propertyName)) {
        result = false;
        break;
      } else if (result !== true) {
        result = true;
      }
    }
  }

  return result;
}
/**
 * Checks if a sorting specifier is valid.
 * A valid sorting specifier consists of an array of arrays being each subarray a pair
 * in the format ["property name", "sorting order"].
 * The following exemple can be used to sort studies by "date"" and use "time" to break ties in descending order.
 * [ [ 'study.date', 'desc' ], [ 'study.time', 'desc' ] ]
 * @param {Array} specifiers The sorting specifier to be tested.
 * @returns {boolean} Returns true if the specifiers are valid, false otherwise.
 */


function _isValidSortingSpecifier(specifiers) {
  var result = true;

  if (specifiers instanceof Array && specifiers.length > 0) {
    for (var i = specifiers.length - 1; i >= 0; i--) {
      var item = specifiers[i];

      if (item instanceof Array) {
        var property = item[0];
        var order = item[1];

        if (_isString(property) && (order === ORDER_ASC || order === ORDER_DESC)) {
          continue;
        }
      }

      result = false;
      break;
    }
  }

  return result;
}
/**
 * Sorts an array based on sorting specifier options.
 * @param {Array} list The that needs to be sorted.
 * @param {Array} specifiers An array of specifiers. Please read isValidSortingSpecifier method definition for further details.
 * @returns {void} No value is returned. The array is sorted in place.
 */


function _sortListBy(list, specifiers) {
  if (list instanceof Array && _isValidSortingSpecifier(specifiers)) {
    var specifierCount = specifiers.length;
    list.sort(function () {
      function _sortListByCallback(a, b) {
        // callback name for stack traces...
        var index = 0;

        while (index < specifierCount) {
          var specifier = specifiers[index];
          var property = specifier[0];
          var order = specifier[1] === ORDER_DESC ? -1 : 1;

          var aValue = _getPropertyValue(a, property);

          var bValue = _getPropertyValue(b, property); // @TODO: should we check for the types being compared, like:
          // ~~ if (typeof aValue !== typeof bValue) continue;
          // Not sure because dates, for example, can be correctly compared to numbers...


          if (aValue < bValue) {
            return order * -1;
          }

          if (aValue > bValue) {
            return order * 1;
          }

          if (++index >= specifierCount) {
            return 0;
          }
        }
      }

      return _sortListByCallback;
    }());
  } else {
    throw new Error('Invalid Arguments');
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"metadata":{"InstanceMetadata.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/classes/metadata/InstanceMetadata.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

module.export({
  InstanceMetadata: function () {
    return InstanceMetadata;
  }
});
var Metadata;
module.watch(require("./Metadata"), {
  Metadata: function (v) {
    Metadata = v;
  }
}, 0);
var OHIFError;
module.watch(require("../OHIFError"), {
  OHIFError: function (v) {
    OHIFError = v;
  }
}, 1);

/**
 * ATTENTION! This class should never depend on StudyMetadata or SeriesMetadata classes as this could
 * possibly cause circular dependency issues.
 */
var UNDEFINED = 'undefined';
var NUMBER = 'number';
var STRING = 'string';
var STUDY_INSTANCE_UID = 'x0020000d';
var SERIES_INSTANCE_UID = 'x0020000e';

var InstanceMetadata =
/*#__PURE__*/
function (_Metadata) {
  (0, _inheritsLoose2.default)(InstanceMetadata, _Metadata);

  function InstanceMetadata(data, uid) {
    var _this;

    _this = _Metadata.call(this, data, uid) || this; // Initialize Private Properties

    Object.defineProperties((0, _assertThisInitialized2.default)(_this), {
      _sopInstanceUID: {
        configurable: true,
        // configurable so that it can be redefined in sub-classes...
        enumerable: false,
        writable: true,
        value: null
      },
      _imageId: {
        configurable: true,
        // configurable so that it can be redefined in sub-classes...
        enumerable: false,
        writable: true,
        value: null
      }
    }); // Initialize Public Properties

    _this._definePublicProperties();

    return _this;
  }
  /**
   * Private Methods
   */

  /**
   * Define Public Properties
   * This method should only be called during initialization (inside the class constructor)
   */


  var _proto = InstanceMetadata.prototype;

  _proto._definePublicProperties = function () {
    function _definePublicProperties() {
      /**
       * Property: this.sopInstanceUID
       * Same as this.getSOPInstanceUID()
       * It's specially useful in contexts where a method call is not suitable like in search criteria. For example:
       * sopInstanceCollection.findBy({
       *   sopInstanceUID: '1.2.3.4.5.6.77777.8888888.99999999999.0'
       * });
       */
      Object.defineProperty(this, 'sopInstanceUID', {
        configurable: false,
        enumerable: false,
        get: function () {
          return this.getSOPInstanceUID();
        }
      });
    }

    return _definePublicProperties;
  }();
  /**
   * Public Methods
   */

  /**
   * Returns the StudyInstanceUID of the current instance. This method is basically a shorthand the full "getTagValue" method call.
   */


  _proto.getStudyInstanceUID = function () {
    function getStudyInstanceUID() {
      return this.getTagValue(STUDY_INSTANCE_UID, null);
    }

    return getStudyInstanceUID;
  }();
  /**
   * Returns the SeriesInstanceUID of the current instance. This method is basically a shorthand the full "getTagValue" method call.
   */


  _proto.getSeriesInstanceUID = function () {
    function getSeriesInstanceUID() {
      return this.getTagValue(SERIES_INSTANCE_UID, null);
    }

    return getSeriesInstanceUID;
  }();
  /**
   * Returns the SOPInstanceUID of the current instance.
   */


  _proto.getSOPInstanceUID = function () {
    function getSOPInstanceUID() {
      return this._sopInstanceUID;
    }

    return getSOPInstanceUID;
  }(); // @TODO: Improve this... (E.g.: blob data)


  _proto.getStringValue = function () {
    function getStringValue(tagOrProperty, index, defaultValue) {
      var value = this.getTagValue(tagOrProperty, defaultValue);

      if ((0, _typeof2.default)(value) !== STRING && (0, _typeof2.default)(value) !== UNDEFINED) {
        value = value.toString();
      }

      return InstanceMetadata.getIndexedValue(value, index, defaultValue);
    }

    return getStringValue;
  }(); // @TODO: Improve this... (E.g.: blob data)


  _proto.getFloatValue = function () {
    function getFloatValue(tagOrProperty, index, defaultValue) {
      var value = this.getTagValue(tagOrProperty, defaultValue);
      value = InstanceMetadata.getIndexedValue(value, index, defaultValue);

      if (value instanceof Array) {
        value.forEach(function (val, idx) {
          value[idx] = parseFloat(val);
        });
        return value;
      }

      return (0, _typeof2.default)(value) === STRING ? parseFloat(value) : value;
    }

    return getFloatValue;
  }(); // @TODO: Improve this... (E.g.: blob data)


  _proto.getIntValue = function () {
    function getIntValue(tagOrProperty, index, defaultValue) {
      var value = this.getTagValue(tagOrProperty, defaultValue);
      value = InstanceMetadata.getIndexedValue(value, index, defaultValue);

      if (value instanceof Array) {
        value.forEach(function (val, idx) {
          value[idx] = parseFloat(val);
        });
        return value;
      }

      return (0, _typeof2.default)(value) === STRING ? parseInt(value) : value;
    }

    return getIntValue;
  }();
  /**
   * @deprecated Please use getTagValue instead.
   */


  _proto.getRawValue = function () {
    function getRawValue(tagOrProperty, defaultValue) {
      return this.getTagValue(tagOrProperty, defaultValue);
    }

    return getRawValue;
  }();
  /**
   * This function should be overriden by specialized classes in order to allow client libraries or viewers to take advantage of the Study Metadata API.
   */


  _proto.getTagValue = function () {
    function getTagValue(tagOrProperty, defaultValue) {
      /**
       * Please override this method on a specialized class.
       */
      throw new OHIFError('InstanceMetadata::getTagValue is not overriden. Please, override it in a specialized class. See OHIFInstanceMetadata for example');
    }

    return getTagValue;
  }();
  /**
   * Compares the current instance with another one.
   * @param {InstanceMetadata} instance An instance of the InstanceMetadata class.
   * @returns {boolean} Returns true if both instances refer to the same instance.
   */


  _proto.equals = function () {
    function equals(instance) {
      var self = this;
      return instance === self || instance instanceof InstanceMetadata && instance.getSOPInstanceUID() === self.getSOPInstanceUID();
    }

    return equals;
  }();
  /**
   * Check if the tagOrProperty exists
   * @param  {String} tagOrProperty tag or property be checked
   * @return {Boolean}   True if the tag or property exists or false if doesn't
   */


  _proto.tagExists = function () {
    function tagExists(tagOrProperty) {
      /**
       * Please override this method
       */
      throw new OHIFError('InstanceMetadata::tagExists is not overriden. Please, override it in a specialized class. See OHIFInstanceMetadata for example');
    }

    return tagExists;
  }();
  /**
   * Get custom image id of a sop instance
   * @return {Any}          sop instance image id
   */


  _proto.getImageId = function () {
    function getImageId(frame) {
      /**
       * Please override this method
       */
      throw new OHIFError('InstanceMetadata::getImageId is not overriden. Please, override it in a specialized class. See OHIFInstanceMetadata for example');
    }

    return getImageId;
  }();
  /**
   * Static Methods
   */

  /**
   * Get an value based that can be index based. This function is called by all getters. See above functions.
   *     - If value is a String and has indexes:
   *         - If undefined index: returns an array of the split values.
   *         - If defined index: 
   *             - If invalid: returns defaultValue
   *             - If valid: returns the indexed value
   *      - If value is not a String, returns default value.
   */


  InstanceMetadata.getIndexedValue = function () {
    function getIndexedValue(value, index, defaultValue) {
      var result = defaultValue;

      if ((0, _typeof2.default)(value) === STRING) {
        var hasIndexValues = value.indexOf('\\') !== -1;
        result = value;

        if (hasIndexValues) {
          var splitValues = value.split('\\');

          if (Metadata.isValidIndex(index)) {
            var indexedValue = splitValues[index];
            result = (0, _typeof2.default)(indexedValue) !== STRING ? defaultValue : indexedValue;
          } else {
            result = splitValues;
          }
        }
      }

      return result;
    }

    return getIndexedValue;
  }();

  return InstanceMetadata;
}(Metadata);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Metadata.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/classes/metadata/Metadata.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

module.export({
  Metadata: function () {
    return Metadata;
  }
});

/**
 * Constants
 */
var STRING = 'string';
var NUMBER = 'number';
var FUNCTION = 'function';
var OBJECT = 'object';
/**
 * Class Definition
 */

var Metadata =
/*#__PURE__*/
function () {
  /**
   * Constructor and Instance Methods
   */
  function Metadata(data, uid) {
    // Define the main "_data" private property as an immutable property.
    // IMPORTANT: This property can only be set during instance construction.
    Object.defineProperty(this, '_data', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: data
    }); // Define the main "_uid" private property as an immutable property.
    // IMPORTANT: This property can only be set during instance construction.

    Object.defineProperty(this, '_uid', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: uid
    }); // Define "_custom" properties as an immutable property.
    // IMPORTANT: This property can only be set during instance construction.

    Object.defineProperty(this, '_custom', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: Object.create(null)
    });
  }

  var _proto = Metadata.prototype;

  _proto.getData = function () {
    function getData() {
      return this._data;
    }

    return getData;
  }();

  _proto.getDataProperty = function () {
    function getDataProperty(propertyName) {
      var propertyValue;
      var _data = this._data;

      if (_data instanceof Object || (0, _typeof2.default)(_data) === OBJECT && _data !== null) {
        propertyValue = _data[propertyName];
      }

      return propertyValue;
    }

    return getDataProperty;
  }();
  /**
   * Get unique object ID
   */


  _proto.getObjectID = function () {
    function getObjectID() {
      return this._uid;
    }

    return getObjectID;
  }();
  /**
   * Set custom attribute value
   * @param {String} attribute Custom attribute name
   * @param {Any} value     Custom attribute value
   */


  _proto.setCustomAttribute = function () {
    function setCustomAttribute(attribute, value) {
      this._custom[attribute] = value;
    }

    return setCustomAttribute;
  }();
  /**
   * Get custom attribute value
   * @param  {String} attribute Custom attribute name
   * @return {Any}              Custom attribute value
   */


  _proto.getCustomAttribute = function () {
    function getCustomAttribute(attribute) {
      return this._custom[attribute];
    }

    return getCustomAttribute;
  }();
  /**
   * Check if a custom attribute exists
   * @param  {String} attribute Custom attribute name
   * @return {Boolean}          True if custom attribute exists or false if not
   */


  _proto.customAttributeExists = function () {
    function customAttributeExists(attribute) {
      return attribute in this._custom;
    }

    return customAttributeExists;
  }();
  /**
   * Set custom attributes in batch mode.
   * @param {Object} attributeMap An object whose own properties will be used as custom attributes.
   */


  _proto.setCustomAttributes = function () {
    function setCustomAttributes(attributeMap) {
      var _hasOwn = Object.prototype.hasOwnProperty;
      var _custom = this._custom;

      for (var attribute in meteorBabelHelpers.sanitizeForInObject(attributeMap)) {
        if (_hasOwn.call(attributeMap, attribute)) {
          _custom[attribute] = attributeMap[attribute];
        }
      }
    }

    return setCustomAttributes;
  }();
  /**
   * Static Methods
   */


  Metadata.isValidUID = function () {
    function isValidUID(uid) {
      return (0, _typeof2.default)(uid) === STRING && uid.length > 0;
    }

    return isValidUID;
  }();

  Metadata.isValidIndex = function () {
    function isValidIndex(index) {
      return (0, _typeof2.default)(index) === NUMBER && index >= 0 && (index | 0) === index;
    }

    return isValidIndex;
  }();

  Metadata.isValidCallback = function () {
    function isValidCallback(callback) {
      return (0, _typeof2.default)(callback) === FUNCTION;
    }

    return isValidCallback;
  }();

  return Metadata;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"SeriesMetadata.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/classes/metadata/SeriesMetadata.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

module.export({
  SeriesMetadata: function () {
    return SeriesMetadata;
  }
});
var Metadata;
module.watch(require("./Metadata"), {
  Metadata: function (v) {
    Metadata = v;
  }
}, 0);
var InstanceMetadata;
module.watch(require("./InstanceMetadata"), {
  InstanceMetadata: function (v) {
    InstanceMetadata = v;
  }
}, 1);

var SeriesMetadata =
/*#__PURE__*/
function (_Metadata) {
  (0, _inheritsLoose2.default)(SeriesMetadata, _Metadata);

  function SeriesMetadata(data, uid) {
    var _this;

    _this = _Metadata.call(this, data, uid) || this; // Initialize Private Properties

    Object.defineProperties((0, _assertThisInitialized2.default)(_this), {
      _seriesInstanceUID: {
        configurable: true,
        // configurable so that it can be redefined in sub-classes...
        enumerable: false,
        writable: true,
        value: null
      },
      _instances: {
        configurable: false,
        enumerable: false,
        writable: false,
        value: []
      },
      _firstInstance: {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      }
    }); // Initialize Public Properties

    _this._definePublicProperties();

    return _this;
  }
  /**
   * Private Methods
   */

  /**
   * Define Public Properties
   * This method should only be called during initialization (inside the class constructor)
   */


  var _proto = SeriesMetadata.prototype;

  _proto._definePublicProperties = function () {
    function _definePublicProperties() {
      /**
       * Property: this.seriesInstanceUID
       * Same as this.getSeriesInstanceUID()
       * It's specially useful in contexts where a method call is not suitable like in search criteria. For example:
       * seriesCollection.findBy({
       *   seriesInstanceUID: '1.2.3.4.5.6.77777.8888888.99999999999.0'
       * });
       */
      Object.defineProperty(this, 'seriesInstanceUID', {
        configurable: false,
        enumerable: false,
        get: function () {
          return this.getSeriesInstanceUID();
        }
      });
    }

    return _definePublicProperties;
  }();
  /**
   * Public Methods
   */

  /**
   * Returns the SeriesInstanceUID of the current series.
   */


  _proto.getSeriesInstanceUID = function () {
    function getSeriesInstanceUID() {
      return this._seriesInstanceUID;
    }

    return getSeriesInstanceUID;
  }();
  /**
   * Append an instance to the current series.
   * @param {InstanceMetadata} instance The instance to be added to the current series.
   * @returns {boolean} Returns true on success, false otherwise.
   */


  _proto.addInstance = function () {
    function addInstance(instance) {
      var result = false;

      if (instance instanceof InstanceMetadata && this.getInstanceByUID(instance.getSOPInstanceUID()) === void 0) {
        this._instances.push(instance);

        result = true;
      }

      return result;
    }

    return addInstance;
  }();
  /**
   * Get the first instance of the current series retaining a consistent result across multiple calls.
   * @return {InstanceMetadata} An instance of the InstanceMetadata class or null if it does not exist.
   */


  _proto.getFirstInstance = function () {
    function getFirstInstance() {
      var instance = this._firstInstance;

      if (!(instance instanceof InstanceMetadata)) {
        instance = null;
        var found = this.getInstanceByIndex(0);

        if (found instanceof InstanceMetadata) {
          this._firstInstance = found;
          instance = found;
        }
      }

      return instance;
    }

    return getFirstInstance;
  }();
  /**
   * Find an instance by index.
   * @param {number} index An integer representing a list index.
   * @returns {InstanceMetadata} Returns a InstanceMetadata instance when found or undefined otherwise.
   */


  _proto.getInstanceByIndex = function () {
    function getInstanceByIndex(index) {
      var found; // undefined by default...

      if (Metadata.isValidIndex(index)) {
        found = this._instances[index];
      }

      return found;
    }

    return getInstanceByIndex;
  }();
  /**
   * Find an instance by SOPInstanceUID.
   * @param {string} uid An UID string.
   * @returns {InstanceMetadata} Returns a InstanceMetadata instance when found or undefined otherwise.
   */


  _proto.getInstanceByUID = function () {
    function getInstanceByUID(uid) {
      var found; // undefined by default...

      if (Metadata.isValidUID(uid)) {
        found = this._instances.find(function (instance) {
          return instance.getSOPInstanceUID() === uid;
        });
      }

      return found;
    }

    return getInstanceByUID;
  }();
  /**
   * Retrieve the number of instances within the current series.
   * @returns {number} The number of instances in the current series.
   */


  _proto.getInstanceCount = function () {
    function getInstanceCount() {
      return this._instances.length;
    }

    return getInstanceCount;
  }();
  /**
   * Invokes the supplied callback for each instance in the current series passing
   * two arguments: instance (an InstanceMetadata instance) and index (the integer
   * index of the instance within the current series)
   * @param {function} callback The callback function which will be invoked for each instance in the series.
   * @returns {undefined} Nothing is returned.
   */


  _proto.forEachInstance = function () {
    function forEachInstance(callback) {
      if (Metadata.isValidCallback(callback)) {
        this._instances.forEach(function (instance, index) {
          callback.call(null, instance, index);
        });
      }
    }

    return forEachInstance;
  }();
  /**
   * Find the index of an instance inside the series.
   * @param {InstanceMetadata} instance An instance of the SeriesMetadata class.
   * @returns {number} The index of the instance inside the series or -1 if not found.
   */


  _proto.indexOfInstance = function () {
    function indexOfInstance(instance) {
      return this._instances.indexOf(instance);
    }

    return indexOfInstance;
  }();
  /**
   * Search the associated instances using the supplied callback as criteria. The callback is passed
   * two arguments: instance (a InstanceMetadata instance) and index (the integer
   * index of the instance within its series)
   * @param {function} callback The callback function which will be invoked for each instance.
   * @returns {InstanceMetadata|undefined} If an instance is found based on callback criteria it
   *                                     returns a InstanceMetadata. "undefined" is returned otherwise
   */


  _proto.findInstance = function () {
    function findInstance(callback) {
      if (Metadata.isValidCallback(callback)) {
        return this._instances.find(function (instance, index) {
          return callback.call(null, instance, index);
        });
      }
    }

    return findInstance;
  }();
  /**
   * Compares the current series with another one.
   * @param {SeriesMetadata} series An instance of the SeriesMetadata class.
   * @returns {boolean} Returns true if both instances refer to the same series.
   */


  _proto.equals = function () {
    function equals(series) {
      var self = this;
      return series === self || series instanceof SeriesMetadata && series.getSeriesInstanceUID() === self.getSeriesInstanceUID();
    }

    return equals;
  }();

  return SeriesMetadata;
}(Metadata);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"StudyMetadata.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/classes/metadata/StudyMetadata.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

module.export({
  StudyMetadata: function () {
    return StudyMetadata;
  }
});
var Metadata;
module.watch(require("./Metadata"), {
  Metadata: function (v) {
    Metadata = v;
  }
}, 0);
var SeriesMetadata;
module.watch(require("./SeriesMetadata"), {
  SeriesMetadata: function (v) {
    SeriesMetadata = v;
  }
}, 1);
var InstanceMetadata;
module.watch(require("./InstanceMetadata"), {
  InstanceMetadata: function (v) {
    InstanceMetadata = v;
  }
}, 2);
var ImageSet;
module.watch(require("../ImageSet"), {
  ImageSet: function (v) {
    ImageSet = v;
  }
}, 3);
var OHIFError;
module.watch(require("../OHIFError"), {
  OHIFError: function (v) {
    OHIFError = v;
  }
}, 4);

var StudyMetadata =
/*#__PURE__*/
function (_Metadata) {
  (0, _inheritsLoose2.default)(StudyMetadata, _Metadata);

  function StudyMetadata(data, uid) {
    var _this;

    _this = _Metadata.call(this, data, uid) || this; // Initialize Private Properties

    Object.defineProperties((0, _assertThisInitialized2.default)(_this), {
      _studyInstanceUID: {
        configurable: true,
        // configurable so that it can be redefined in sub-classes...
        enumerable: false,
        writable: true,
        value: null
      },
      _series: {
        configurable: false,
        enumerable: false,
        writable: false,
        value: []
      },
      _displaySets: {
        configurable: false,
        enumerable: false,
        writable: false,
        value: []
      },
      _firstSeries: {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      },
      _firstInstance: {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      }
    }); // Initialize Public Properties

    _this._definePublicProperties();

    return _this;
  }
  /**
   * Private Methods
   */

  /**
   * Define Public Properties
   * This method should only be called during initialization (inside the class constructor)
   */


  var _proto = StudyMetadata.prototype;

  _proto._definePublicProperties = function () {
    function _definePublicProperties() {
      /**
       * Property: this.studyInstanceUID
       * Same as this.getStudyInstanceUID()
       * It's specially useful in contexts where a method call is not suitable like in search criteria. For example:
       * studyCollection.findBy({
       *   studyInstanceUID: '1.2.3.4.5.6.77777.8888888.99999999999.0'
       * });
       */
      Object.defineProperty(this, 'studyInstanceUID', {
        configurable: false,
        enumerable: false,
        get: function () {
          return this.getStudyInstanceUID();
        }
      });
    }

    return _definePublicProperties;
  }();
  /**
   * Public Methods
   */

  /**
   * Getter for displaySets
   * @return {Array} Array of display set object
   */


  _proto.getDisplaySets = function () {
    function getDisplaySets() {
      return this._displaySets.slice();
    }

    return getDisplaySets;
  }();
  /**
   * Set display sets
   * @param {Array} displaySets Array of display sets (ImageSet[])
   */


  _proto.setDisplaySets = function () {
    function setDisplaySets(displaySets) {
      var _this2 = this;

      displaySets.forEach(function (displaySet) {
        return _this2.addDisplaySet(displaySet);
      });
    }

    return setDisplaySets;
  }();
  /**
   * Add a single display set to the list
   * @param {Object} displaySet Display set object
   * @returns {boolean} True on success, false on failure.
   */


  _proto.addDisplaySet = function () {
    function addDisplaySet(displaySet) {
      if (displaySet instanceof ImageSet) {
        this._displaySets.push(displaySet);

        return true;
      }

      return false;
    }

    return addDisplaySet;
  }();
  /**
   * Invokes the supplied callback for each display set in the current study passing
   * two arguments: display set (a ImageSet instance) and index (the integer
   * index of the display set within the current study)
   * @param {function} callback The callback function which will be invoked for each display set instance.
   * @returns {undefined} Nothing is returned.
   */


  _proto.forEachDisplaySet = function () {
    function forEachDisplaySet(callback) {
      if (Metadata.isValidCallback(callback)) {
        this._displaySets.forEach(function (displaySet, index) {
          callback.call(null, displaySet, index);
        });
      }
    }

    return forEachDisplaySet;
  }();
  /**
   * Search the associated display sets using the supplied callback as criteria. The callback is passed
   * two arguments: display set (a ImageSet instance) and index (the integer
   * index of the display set within the current study)
   * @param {function} callback The callback function which will be invoked for each display set instance.
   * @returns {undefined} Nothing is returned.
   */


  _proto.findDisplaySet = function () {
    function findDisplaySet(callback) {
      if (Metadata.isValidCallback(callback)) {
        return this._displaySets.find(function (displaySet, index) {
          return callback.call(null, displaySet, index);
        });
      }
    }

    return findDisplaySet;
  }();
  /**
   * Retrieve the number of display sets within the current study.
   * @returns {number} The number of display sets in the current study.
   */


  _proto.getDisplaySetCount = function () {
    function getDisplaySetCount() {
      return this._displaySets.length;
    }

    return getDisplaySetCount;
  }();
  /**
   * Returns the StudyInstanceUID of the current study.
   */


  _proto.getStudyInstanceUID = function () {
    function getStudyInstanceUID() {
      return this._studyInstanceUID;
    }

    return getStudyInstanceUID;
  }();
  /**
   * Getter for series
   * @return {Array} Array of SeriesMetadata object
   */


  _proto.getSeries = function () {
    function getSeries() {
      return this._series.slice();
    }

    return getSeries;
  }();
  /**
   * Append a series to the current study.
   * @param {SeriesMetadata} series The series to be added to the current study.
   * @returns {boolean} Returns true on success, false otherwise.
   */


  _proto.addSeries = function () {
    function addSeries(series) {
      var result = false;

      if (series instanceof SeriesMetadata && this.getSeriesByUID(series.getSeriesInstanceUID()) === void 0) {
        this._series.push(series);

        result = true;
      }

      return result;
    }

    return addSeries;
  }();
  /**
   * Find a series by index.
   * @param {number} index An integer representing a list index.
   * @returns {SeriesMetadata} Returns a SeriesMetadata instance when found or undefined otherwise.
   */


  _proto.getSeriesByIndex = function () {
    function getSeriesByIndex(index) {
      var found; // undefined by default...

      if (Metadata.isValidIndex(index)) {
        found = this._series[index];
      }

      return found;
    }

    return getSeriesByIndex;
  }();
  /**
   * Find a series by SeriesInstanceUID.
   * @param {string} uid An UID string.
   * @returns {SeriesMetadata} Returns a SeriesMetadata instance when found or undefined otherwise.
   */


  _proto.getSeriesByUID = function () {
    function getSeriesByUID(uid) {
      var found; // undefined by default...

      if (Metadata.isValidUID(uid)) {
        found = this._series.find(function (series) {
          return series.getSeriesInstanceUID() === uid;
        });
      }

      return found;
    }

    return getSeriesByUID;
  }();
  /**
   * Retrieve the number of series within the current study.
   * @returns {number} The number of series in the current study.
   */


  _proto.getSeriesCount = function () {
    function getSeriesCount() {
      return this._series.length;
    }

    return getSeriesCount;
  }();
  /**
   * Retrieve the number of instances within the current study.
   * @returns {number} The number of instances in the current study.
   */


  _proto.getInstanceCount = function () {
    function getInstanceCount() {
      return this._series.reduce(function (sum, series) {
        return sum + series.getInstanceCount();
      }, 0);
    }

    return getInstanceCount;
  }();
  /**
   * Invokes the supplied callback for each series in the current study passing
   * two arguments: series (a SeriesMetadata instance) and index (the integer
   * index of the series within the current study)
   * @param {function} callback The callback function which will be invoked for each series instance.
   * @returns {undefined} Nothing is returned.
   */


  _proto.forEachSeries = function () {
    function forEachSeries(callback) {
      if (Metadata.isValidCallback(callback)) {
        this._series.forEach(function (series, index) {
          callback.call(null, series, index);
        });
      }
    }

    return forEachSeries;
  }();
  /**
   * Find the index of a series inside the study.
   * @param {SeriesMetadata} series An instance of the SeriesMetadata class.
   * @returns {number} The index of the series inside the study or -1 if not found.
   */


  _proto.indexOfSeries = function () {
    function indexOfSeries(series) {
      return this._series.indexOf(series);
    }

    return indexOfSeries;
  }();
  /**
   * It sorts the series based on display sets order. Each series must be an instance 
   * of SeriesMetadata and each display sets must be an instance of ImageSet.
   * Useful example of usage: 
   *     Study data provided by backend does not sort series at all and client-side 
   *     needs series sorted by the same criteria used for sorting display sets.
   */


  _proto.sortSeriesByDisplaySets = function () {
    function sortSeriesByDisplaySets() {
      var _this3 = this;

      // Object for mapping display sets' index by seriesInstanceUid
      var displaySetsMapping = {}; // Loop through each display set to create the mapping

      this.forEachDisplaySet(function (displaySet, index) {
        if (!(displaySet instanceof ImageSet)) {
          throw new OHIFError("StudyMetadata::sortSeriesByDisplaySets display set at index " + index + " is not an instance of ImageSet");
        } // In case of multiframe studies, just get the first index occurence


        if (displaySetsMapping[displaySet.seriesInstanceUid] === void 0) {
          displaySetsMapping[displaySet.seriesInstanceUid] = index;
        }
      }); // Clone of actual series

      var actualSeries = this.getSeries();
      actualSeries.forEach(function (series, index) {
        if (!(series instanceof SeriesMetadata)) {
          throw new OHIFError("StudyMetadata::sortSeriesByDisplaySets series at index " + index + " is not an instance of SeriesMetadata");
        } // Get the new series index


        var seriesIndex = displaySetsMapping[series.getSeriesInstanceUID()]; // Update the series object with the new series position

        _this3._series[seriesIndex] = series;
      });
    }

    return sortSeriesByDisplaySets;
  }();
  /**
   * Compares the current study instance with another one.
   * @param {StudyMetadata} study An instance of the StudyMetadata class.
   * @returns {boolean} Returns true if both instances refer to the same study.
   */


  _proto.equals = function () {
    function equals(study) {
      var self = this;
      return study === self || study instanceof StudyMetadata && study.getStudyInstanceUID() === self.getStudyInstanceUID();
    }

    return equals;
  }();
  /**
   * Get the first series of the current study retaining a consistent result across multiple calls.
   * @return {SeriesMetadata} An instance of the SeriesMetadata class or null if it does not exist.
   */


  _proto.getFirstSeries = function () {
    function getFirstSeries() {
      var series = this._firstSeries;

      if (!(series instanceof SeriesMetadata)) {
        series = null;
        var found = this.getSeriesByIndex(0);

        if (found instanceof SeriesMetadata) {
          this._firstSeries = found;
          series = found;
        }
      }

      return series;
    }

    return getFirstSeries;
  }();
  /**
   * Get the first instance of the current study retaining a consistent result across multiple calls.
   * @return {InstanceMetadata} An instance of the InstanceMetadata class or null if it does not exist.
   */


  _proto.getFirstInstance = function () {
    function getFirstInstance() {
      var instance = this._firstInstance;

      if (!(instance instanceof InstanceMetadata)) {
        instance = null;
        var firstSeries = this.getFirstSeries();

        if (firstSeries instanceof SeriesMetadata) {
          var found = firstSeries.getFirstInstance();

          if (found instanceof InstanceMetadata) {
            this._firstInstance = found;
            instance = found;
          }
        }
      }

      return instance;
    }

    return getFirstInstance;
  }();
  /**
  * Search the associated series to find an specific instance using the supplied callback as criteria.
  * The callback is passed two arguments: instance (a InstanceMetadata instance) and index (the integer
  * index of the instance within the current series)
  * @param {function} callback The callback function which will be invoked for each instance instance.
  * @returns {Object} Result object containing series (SeriesMetadata) and instance (InstanceMetadata) 
  *                   objects or an empty object if not found.
  */


  _proto.findSeriesAndInstanceByInstance = function () {
    function findSeriesAndInstanceByInstance(callback) {
      var result;

      if (Metadata.isValidCallback(callback)) {
        var instance;

        var series = this._series.find(function (series) {
          instance = series.findInstance(callback);
          return instance instanceof InstanceMetadata;
        }); // No series found


        if (series instanceof SeriesMetadata) {
          result = {
            series: series,
            instance: instance
          };
        }
      }

      return result || {};
    }

    return findSeriesAndInstanceByInstance;
  }();
  /**
   * Find series by instance using the supplied callback as criteria. The callback is passed
   * two arguments: instance (a InstanceMetadata instance) and index (the integer index of 
   * the instance within its series)
   * @param {function} callback The callback function which will be invoked for each instance.
   * @returns {SeriesMetadata|undefined} If a series is found based on callback criteria it
   *                                     returns a SeriesMetadata. "undefined" is returned otherwise
   */


  _proto.findSeriesByInstance = function () {
    function findSeriesByInstance(callback) {
      var result = this.findSeriesAndInstanceByInstance(callback);
      return result.series;
    }

    return findSeriesByInstance;
  }();
  /**
   * Find an instance using the supplied callback as criteria. The callback is passed
   * two arguments: instance (a InstanceMetadata instance) and index (the integer index of 
   * the instance within its series)
   * @param {function} callback The callback function which will be invoked for each instance.
   * @returns {InstanceMetadata|undefined} If an instance is found based on callback criteria it
   *                                     returns a InstanceMetadata. "undefined" is returned otherwise
   */


  _proto.findInstance = function () {
    function findInstance(callback) {
      var result = this.findSeriesAndInstanceByInstance(callback);
      return result.instance;
    }

    return findInstance;
  }();

  return StudyMetadata;
}(Metadata);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"StudySummary.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/classes/metadata/StudySummary.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  StudySummary: function () {
    return StudySummary;
  }
});
var Metadata;
module.watch(require("./Metadata"), {
  Metadata: function (v) {
    Metadata = v;
  }
}, 0);
var OHIFError;
module.watch(require("../OHIFError"), {
  OHIFError: function (v) {
    OHIFError = v;
  }
}, 1);
var DICOMTagDescriptions;
module.watch(require("../../DICOMTagDescriptions"), {
  DICOMTagDescriptions: function (v) {
    DICOMTagDescriptions = v;
  }
}, 2);

/**
 * Constants
 */
var STUDY_INSTANCE_UID = 'x0020000d';
/**
 * Class Definition
 */

var StudySummary =
/*#__PURE__*/
function (_Metadata) {
  (0, _inheritsLoose2.default)(StudySummary, _Metadata);

  function StudySummary(tagMap, attributeMap, uid) {
    var _this;

    // Call the superclass constructor passing an plain object with no prototype to be used as the main "_data" attribute.
    var _data = Object.create(null);

    _this = _Metadata.call(this, _data, uid) || this; // Initialize internal tag map if first argument is given.

    if (tagMap !== void 0) {
      _this.addTags(tagMap);
    } // Initialize internal property map if second argument is given.


    if (attributeMap !== void 0) {
      _this.setCustomAttributes(attributeMap);
    }

    return _this;
  }

  var _proto = StudySummary.prototype;

  _proto.getStudyInstanceUID = function () {
    function getStudyInstanceUID() {
      // This method should return null if StudyInstanceUID is not available to keep compatibility StudyMetadata API
      return this.getTagValue(STUDY_INSTANCE_UID) || null;
    }

    return getStudyInstanceUID;
  }();
  /**
   * Append tags to internal tag map.
   * @param {Object} tagMap An object whose own properties will be used as tag values and appended to internal tag map.
   */


  _proto.addTags = function () {
    function addTags(tagMap) {
      var _hasOwn = Object.prototype.hasOwnProperty;
      var _data = this._data;

      for (var tag in meteorBabelHelpers.sanitizeForInObject(tagMap)) {
        if (_hasOwn.call(tagMap, tag)) {
          var description = DICOMTagDescriptions.find(tag); // When a description is available, use its tag as internal key...

          if (description) {
            _data[description.tag] = tagMap[tag];
          } else {
            _data[tag] = tagMap[tag];
          }
        }
      }
    }

    return addTags;
  }();

  _proto.tagExists = function () {
    function tagExists(tagName) {
      var _data = this._data;
      var description = DICOMTagDescriptions.find(tagName);

      if (description) {
        return description.tag in _data;
      }

      return tagName in _data;
    }

    return tagExists;
  }();

  _proto.getTagValue = function () {
    function getTagValue(tagName) {
      var _data = this._data;
      var description = DICOMTagDescriptions.find(tagName);

      if (description) {
        return _data[description.tag];
      }

      return _data[tagName];
    }

    return getTagValue;
  }();

  return StudySummary;
}(Metadata);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"WadoRsMetaDataBuilder.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/classes/metadata/WadoRsMetaDataBuilder.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  WadoRsMetaDataBuilder: function () {
    return WadoRsMetaDataBuilder;
  }
});

var WadoRsMetaDataBuilder =
/*#__PURE__*/
function () {
  function WadoRsMetaDataBuilder() {
    this.tags = {};
  }

  var _proto = WadoRsMetaDataBuilder.prototype;

  _proto.addTag = function () {
    function addTag(tag, value, multi) {
      this.tags[tag] = {
        tag: tag,
        value: value,
        multi: multi
      };
      return this;
    }

    return addTag;
  }();

  _proto.toJSON = function () {
    function toJSON() {
      var _this = this;

      var json = {};
      var keys = Object.keys(this.tags);
      keys.forEach(function (key) {
        if (!_this.tags.hasOwnProperty(key)) {
          return;
        }

        var tag = _this.tags[key];
        var multi = !!tag.multi;
        var value = tag.value;

        if (value == null || value.length === 1 && value[0] == null) {
          return;
        }

        if (typeof value === 'string' && multi) {
          value = value.split('\\');
        }

        if (!_.isArray(value)) {
          value = [value];
        }

        json[key] = {
          Value: value
        };
      });
      return json;
    }

    return toJSON;
  }();

  return WadoRsMetaDataBuilder;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"helpers":{"capitalizeFirstLetter.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/capitalizeFirstLetter.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);

/**
 * A global Blaze UI helper to capitalizes the first letter of an input String
 *
 * Credit to:
 *
 * http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript
 */
Blaze.registerHelper('capitalizeFirstLetter', function (context) {
  if (!context) {
    return;
  }

  return context.charAt(0).toUpperCase() + context.slice(1);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"formatDA.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/formatDA.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  formatDA: function () {
    return formatDA;
  }
});
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);
var moment;
module.watch(require("meteor/momentjs:moment"), {
  moment: function (v) {
    moment = v;
  }
}, 1);

/**
 * A global Blaze UI helper function to format DICOM Dates using the Moment library
 */
var formatDA = function (context, format, options) {
  if (!context) {
    return undefined;
  }

  var dateAsMoment = moment(context, "YYYYMMDD");
  var strFormat = "MMM D, YYYY";

  if (options) {
    strFormat = format;
  }

  return dateAsMoment.format(strFormat);
}; // Check if global helper already exists to not override it


if (!Blaze._getGlobalHelper('formatDA')) {
  Blaze.registerHelper('formatDA', formatDA);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"formatJSDate.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/formatJSDate.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);
var moment;
module.watch(require("meteor/momentjs:moment"), {
  moment: function (v) {
    moment = v;
  }
}, 1);

/**
 * A global Blaze UI helper function to format JavaScript Dates using the Moment library
 */
Blaze.registerHelper('formatJSDate', function (context, format, options) {
  if (!context) {
    return;
  }

  var dateAsMoment = moment(new Date(context));
  var strFormat = 'MMM D, YYYY';

  if (options) {
    strFormat = format;
  }

  return dateAsMoment.format(strFormat);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"formatNumberPrecision.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/formatNumberPrecision.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);

/**
 * A global Blaze UI helper to format a float value to a specified precision
 */
Blaze.registerHelper('formatNumberPrecision', function (context, precision) {
  if (context != null) {
    return parseFloat(context).toFixed(precision);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"formatPN.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/formatPN.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  formatPN: function () {
    return formatPN;
  }
});
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);

/**
 * Formats a patient name for display purposes
 */
var formatPN = function (context) {
  if (!context) {
    return;
  }

  return context.replace('^', ', ');
};
/**
 * A global Blaze UI helper to format a patient name for display purposes
 */
// Check if global helper already exists to not override it


if (!Blaze._getGlobalHelper('formatPN')) {
  Blaze.registerHelper('formatPN', formatPN);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"formatTM.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/formatTM.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  formatTM: function () {
    return formatTM;
  }
});
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);
var moment;
module.watch(require("meteor/momentjs:moment"), {
  moment: function (v) {
    moment = v;
  }
}, 1);

/**
 * A global Blaze UI helper to format a DICOM Time for display using the Moment library
 */
var formatTM = function (context, options) {
  if (!context) {
    return;
  } // DICOM Time is stored as HHmmss.SSS, where: 
  //      HH 24 hour time:
  //      m mm    0..59   Minutes
  //      s ss    0..59   Seconds
  //      S SS SSS    0..999  Fractional seconds
  //
  // See MomentJS: http://momentjs.com/docs/#/parsing/string-format/


  var dateTime = moment(context, 'HHmmss.SSS');
  var format = "HH:mm:ss";

  if (options && options.format) {
    format = options.format;
  }

  return dateTime.format(format);
}; // Check if global helper already exists to not override it


if (!Blaze._getGlobalHelper('formatTM')) {
  Blaze.registerHelper('formatTM', formatTM);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getUsername.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/getUsername.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 1);

/**
 * Helper for retrieving username given userId
 */
Blaze.registerHelper('getUsername', function (userId) {
  var user = Meteor.users.findOne({
    userId: userId
  });

  if (user && user.name) {
    return user.name;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ifTypeIs.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/ifTypeIs.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);

/**
 * Helper for checking datatype of a variable
 */
Blaze.registerHelper('ifTypeIs', function (value, match, attributeName) {
  if ((0, _typeof2.default)(value) === match) {
    return attributeName;
  }

  return '';
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"inc.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/inc.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);
Blaze.registerHelper('inc', function (value) {
  return parseInt(value) + 1;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/index.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  helpers: function () {
    return helpers;
  }
});
var isTouchDevice;
module.watch(require("./isTouchDevice"), {
  isTouchDevice: function (v) {
    isTouchDevice = v;
  }
}, 0);
var formatPN;
module.watch(require("./formatPN"), {
  formatPN: function (v) {
    formatPN = v;
  }
}, 1);
var formatDA;
module.watch(require("./formatDA"), {
  formatDA: function (v) {
    formatDA = v;
  }
}, 2);
var formatTM;
module.watch(require("./formatTM"), {
  formatTM: function (v) {
    formatTM = v;
  }
}, 3);
module.watch(require("./formatJSDate"));
module.watch(require("./jsDateFromNow"));
module.watch(require("./formatNumberPrecision"));
module.watch(require("./inc"));
module.watch(require("./isDisplaySetActive"));
module.watch(require("./getUsername"));
module.watch(require("./capitalizeFirstLetter"));
module.watch(require("./objectToPairs"));
module.watch(require("./objectEach"));
module.watch(require("./ifTypeIs"));
module.watch(require("./prettyPrintStringify"));
module.watch(require("./sorting"));
module.watch(require("./studyThumbnails"));

/**
 * Exposed interface...
 */
var helpers = {
  isTouchDevice: isTouchDevice,
  formatPN: formatPN,
  formatDA: formatDA,
  formatTM: formatTM
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isDisplaySetActive.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/isDisplaySetActive.js                                                   //
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
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 2);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 3);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 4);
module.watch(require("meteor/ohif:viewerbase"));

/**
 * Boolean helper to identify if a series instance is active in some viewport
 */
Template.registerHelper('isDisplaySetActive', function (displaySetInstanceUid, viewportIndex) {
  // Run this computation every time the viewports are updated
  Session.get('LayoutManagerUpdated'); // Stop here if layoutManager is not defined yet

  if (!OHIF.viewerbase.layoutManager) {
    return;
  } // Check if the display set is current visible in any of the layout
  // manager's displayed viewports. Note that we have to check the 
  // onscreen number of viewports here, since the layout manager will
  // keep the viewport data of old viewports, even after the layout is changed.
  //
  // This behaviour is intentional. If the user displays four viewports, then assigns
  // display sets to them, and then switches to / from another layout configuration,
  // we don't want them to lose their specified viewports.


  var result = false;

  if (_.isUndefined(viewportIndex)) {
    // Get the number of viewports that are currently displayed
    // (Note, viewportData may have more entries!)
    var currentNumberOfViewports = OHIF.viewerbase.layoutManager.getNumberOfViewports(); // Loop through the viewport data up until the currently displayed
    // number of viewports

    var viewportData = OHIF.viewerbase.layoutManager.viewportData;

    for (var i = 0; i < currentNumberOfViewports; i++) {
      var data = viewportData[i]; // If the display set is displayed in this viewport and is active, stop here

      if (data && data.displaySetInstanceUid === displaySetInstanceUid) {
        result = true;
        break;
      }
    }
  } else {
    var _data = OHIF.viewerbase.layoutManager.viewportData[viewportIndex]; // If the display set is displayed in this viewport, stop here

    if (_data && _data.displaySetInstanceUid === displaySetInstanceUid) {
      result = true;
    }
  }

  return result;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isTouchDevice.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/isTouchDevice.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isTouchDevice: function () {
    return isTouchDevice;
  }
});
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);

/**
 * Helper function to determine if the current client devices
 * is touch-capable. This can be used to modify certain aspects of the UI.
 *
 * The check may not work on all devices!
 *
 * @returns {boolean} true if the client device is touch-capable, false otherwise
 */
var isTouchDevice = function () {
  return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
};
/**
 * Blaze helper for checking if the current device is touch capable
 *
 * @returns {boolean} true if the client device is touch-capable, false otherwise
 */


Blaze.registerHelper('isTouchDevice', isTouchDevice);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"jsDateFromNow.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/jsDateFromNow.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 1);
var moment;
module.watch(require("meteor/momentjs:moment"), {
  moment: function (v) {
    moment = v;
  }
}, 2);

/**
 * A global Blaze UI helper function to format JavaScript Dates using the Moment library
 */
Blaze.registerHelper('jsDateFromNow', function (context, format, options) {
  if (!context) {
    return;
  }

  Session.get('timeAgoVariable');
  var dateAsMoment = moment(new Date(context));
  return dateAsMoment.fromNow();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"objectEach.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/objectEach.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 1);
Blaze.registerHelper('objectEach', function (object) {
  // http://stackoverflow.com/questions/30234732/how-to-print-key-and-values-in-meteor-template
  return _.map(object, function (value, key) {
    return _.extend({
      key: key
    }, value);
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"objectToPairs.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/objectToPairs.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 1);
Blaze.registerHelper('objectToPairs', function (object) {
  // http://stackoverflow.com/questions/30234732/how-to-print-key-and-values-in-meteor-template
  return _.map(object, function (value, key) {
    return {
      key: key,
      value: value
    };
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"prettyPrintStringify.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/prettyPrintStringify.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 0);

/**
 * A global Blaze UI helper to Stringify a JavaScript object
 *
 * Credit to:
 *
 * http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript
 */
Blaze.registerHelper('prettyPrintStringify', function (context) {
  if (!context) {
    return;
  }

  var string = JSON.stringify(context, null, 2);
  string = string.replace(/['"]+/g, '');
  string = string.replace('{', '');
  string = string.replace('}', '');
  string = string.replace(',', '\n');
  return string;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"sorting.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/sorting.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 1);

/**
 * Global Blaze UI helper to sort array elements
 *  by an array element's property (property) or deep object property (property.childProperty)
 * Sorts ascending as default
 */
Template.registerHelper('sort', function (array, sortBy, sortType) {
  if (!sortBy) {
    return array;
  } //  To keep the order for the same values of the field which is used to sort:
  //      1. Group the array by the field
  //      2. Sort the grouped array
  //      3. Ungroup the sorted array


  var groupedArray = _.groupBy(array, function (element) {
    if (sortBy) {
      var groupingElement = getKeyValue(element, sortBy);

      if (groupingElement) {
        return groupingElement;
      }
    }

    return element;
  });

  var sortedArray = _.sortBy(groupedArray, function (element) {
    if (sortBy) {
      var sortingElement = getKeyValue(element[0], sortBy);

      if (sortingElement) {
        return sortingElement;
      }
    }

    return element;
  });

  if (sortType === 'desc') {
    return _.flatten(sortedArray.reverse(), true);
  }

  return _.flatten(sortedArray, true);
});

function getKeyValue(object, keyPath) {
  keyPath = keyPath.split('.');

  for (var i = 0; i < keyPath.length; i++) {
    if (object && _.has(object, keyPath[i])) {
      object = object[keyPath[i]];
    } else {
      return undefined;
    }
  }

  return object;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"studyThumbnails.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/lib/helpers/studyThumbnails.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 1);

/**
 * A global Blaze UI helper to get the thumbnails for the given study
 */
Template.registerHelper('studyThumbnails', function (study) {
  if (!study) {
    return;
  } // Find the study's stacks


  var stacks = study.displaySets; // Defines the resulting thumbnails list

  var thumbnails = []; // Iterate over the stacks and add one by one with its index

  _.each(stacks, function (stack, thumbnailIndex) {
    thumbnails.push({
      thumbnailIndex: thumbnailIndex,
      stack: stack
    });
  });

  return thumbnails;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/main.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var module1 = module;
module1.export({
  OHIF: function () {
    return OHIF;
  },
  Viewerbase: function () {
    return Viewerbase;
  }
});
var OHIF, Viewerbase;
module1.watch(require("./namespace.js"), {
  OHIF: function (v) {
    OHIF = v;
  },
  Viewerbase: function (v) {
    Viewerbase = v;
  }
}, 0);
module1.watch(require("./client/"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"namespace.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/namespace.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  OHIF: function () {
    return OHIF;
  },
  Viewerbase: function () {
    return Viewerbase;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

/**
 * Create Viewerbase namespace
 */
var Viewerbase = {};
/**
 * Append Viewerbase namespace to OHIF namespace
 */

OHIF.viewerbase = Viewerbase;
/**
 * Export relevant objects
 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".styl",
    ".html"
  ]
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_viewerbase/client/compatibility/dialogPolyfill.js                                                     //
// This file is in bare mode and is not in its own closure.                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var dialogPolyfill = (function() {

    var supportCustomEvent = window.CustomEvent;
    if (!supportCustomEvent || typeof supportCustomEvent == "object") {
        supportCustomEvent = function CustomEvent(event, x) {
            x = x || {};
            var ev = document.createEvent('CustomEvent');
            ev.initCustomEvent(event, !!x.bubbles, !!x.cancelable, x.detail || null);
            return ev;
        };
        supportCustomEvent.prototype = window.Event.prototype;
    }

    /**
     * Finds the nearest <dialog> from the passed element.
     *
     * @param {Element} el to search from
     * @param {HTMLDialogElement} dialog found
     */
    function findNearestDialog(el) {
        while (el) {
            if (el.nodeName == 'DIALOG') {
                return el;
            }
            el = el.parentElement;
        }
        return null;
    }

    var dialogPolyfill = {};

    dialogPolyfill.reposition = function(element) {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var topValue = scrollTop + (window.innerHeight - element.offsetHeight) / 2;
        element.style.top = Math.max(0, topValue) + 'px';
        element.dialogPolyfillInfo.isTopOverridden = true;
    };

    dialogPolyfill.inNodeList = function(nodeList, node) {
        for (var i = 0; i < nodeList.length; ++i) {
            if (nodeList[i] == node)
                return true;
        }
        return false;
    };

    dialogPolyfill.isInlinePositionSetByStylesheet = function(element) {
        for (var i = 0; i < document.styleSheets.length; ++i) {
            var styleSheet = document.styleSheets[i];
            var cssRules = null;
            // Some browsers throw on cssRules.
            try {
                cssRules = styleSheet.cssRules;
            } catch (e) {}
            if (!cssRules)
                continue;
            for (var j = 0; j < cssRules.length; ++j) {
                var rule = cssRules[j];
                var selectedNodes = null;
                // Ignore errors on invalid selector texts.
                try {
                    selectedNodes = document.querySelectorAll(rule.selectorText);
                } catch(e) {}
                if (!selectedNodes || !dialogPolyfill.inNodeList(selectedNodes, element))
                    continue;
                var cssTop = rule.style.getPropertyValue('top');
                var cssBottom = rule.style.getPropertyValue('bottom');
                if ((cssTop && cssTop != 'auto') || (cssBottom && cssBottom != 'auto'))
                    return true;
            }
        }
        return false;
    };

    dialogPolyfill.needsCentering = function(dialog) {
        var computedStyle = window.getComputedStyle(dialog);
        if (computedStyle.position != 'absolute') {
            return false;
        }

        // We must determine whether the top/bottom specified value is non-auto.  In
        // WebKit/Blink, checking computedStyle.top == 'auto' is sufficient, but
        // Firefox returns the used value. So we do this crazy thing instead: check
        // the inline style and then go through CSS rules.
        if ((dialog.style.top != 'auto' && dialog.style.top != '') ||
            (dialog.style.bottom != 'auto' && dialog.style.bottom != ''))
            return false;
        return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);
    };

    dialogPolyfill.showDialog = function(isModal) {
        if (this.open) {
            throw 'InvalidStateError: showDialog called on open dialog';
        }
        this.open = true;  // TODO: should be a getter mapped to attribute
        this.setAttribute('open', 'open');

        if (isModal) {
            // Find element with `autofocus` attribute or first form control
            var first_form_ctrl = null;
            var autofocus = null;
            var findElementToFocus = function(root) {
                if (!root.children) {
                    return;
                }
                for (var i = 0; i < root.children.length; i++) {
                    var elem = root.children[i];
                    if (first_form_ctrl === null && !elem.disabled && (
                        elem.nodeName == 'BUTTON' ||
                        elem.nodeName == 'INPUT'  ||
                        elem.nodeName == 'KEYGEN' ||
                        elem.nodeName == 'SELECT' ||
                        elem.nodeName == 'TEXTAREA')) {
                        first_form_ctrl = elem;
                    }
                    if (elem.autofocus) {
                        autofocus = elem;
                        return;
                    }
                    findElementToFocus(elem);
                    if (autofocus !== null) return;
                }
            };

            findElementToFocus(this);

            if (autofocus !== null) {
                autofocus.focus();
            } else if (first_form_ctrl !== null) {
                first_form_ctrl.focus();
            }
        }

        if (dialogPolyfill.needsCentering(this))
            dialogPolyfill.reposition(this);
        if (isModal) {
            this.dialogPolyfillInfo.modal = true;
            dialogPolyfill.dm.pushDialog(this);
        }

        // IE sometimes complains when calling .focus() that it
        // "Can't move focus to the control because it is invisible, not enabled, or of a type that does not accept the focus."
        try {
            if (autofocus !== null) {
                autofocus.focus();
            } else if (first_form_ctrl !== null) {
                first_form_ctrl.focus();
            }
        } catch(e) {}
        this.style.zoom = 1;
    };

    dialogPolyfill.close = function(retval) {
        if (!this.open && !window.HTMLDialogElement) {
            // Native implementations will set .open to false, so ignore this error.
            throw 'InvalidStateError: close called on closed dialog';
        }
        this.open = false;
        this.removeAttribute('open');

        // Leave returnValue untouched in case it was set directly on the element
        if (typeof retval != 'undefined') {
            this.returnValue = retval;
        }

        // This won't match the native <dialog> exactly because if the user sets top
        // on a centered polyfill dialog, that top gets thrown away when the dialog is
        // closed. Not sure it's possible to polyfill this perfectly.
        if (this.dialogPolyfillInfo.isTopOverridden) {
            this.style.top = 'auto';
        }

        if (this.dialogPolyfillInfo.modal) {
            dialogPolyfill.dm.removeDialog(this);
        }

        // Triggering "close" event for any attached listeners on the <dialog>
        var event;
        if (document.createEvent) {
            event = document.createEvent('HTMLEvents');
            event.initEvent('close', true, true);
        } else {
            event = new Event('close');
        }
        this.dispatchEvent(event);

        return this.returnValue;
    };

    dialogPolyfill.registerDialog = function(element) {
        if (element.show) {
            // console.warn("This browser already supports <dialog>, the polyfill " +
            //     "may not work correctly.");
        }
        element.show = dialogPolyfill.showDialog.bind(element, false);
        element.showModal = dialogPolyfill.showDialog.bind(element, true);
        element.close = dialogPolyfill.close.bind(element);
        element.dialogPolyfillInfo = {};
        element.open = false;
    };

    // The overlay is used to simulate how a modal dialog blocks the document. The
    // blocking dialog is positioned on top of the overlay, and the rest of the
    // dialogs on the pending dialog stack are positioned below it. In the actual
    // implementation, the modal dialog stacking is controlled by the top layer,
    // where z-index has no effect.
    var TOP_LAYER_ZINDEX = 100000;
    var MAX_PENDING_DIALOGS = 100000;

    dialogPolyfill.DialogManager = function() {
        this.pendingDialogStack = [];
        this.overlay = document.createElement('div');
        this.overlay.style.width = '100%';
        this.overlay.style.height = '100%';
        this.overlay.style.position = 'fixed';
        this.overlay.style.left = '0px';
        this.overlay.style.top = '0px';
        this.overlay.style.backgroundColor = 'rgba(0,0,0,0.0)';

        this.focusPageLast = this.createFocusable();
        this.overlay.appendChild(this.focusPageLast);

        this.overlay.addEventListener('click', function(e) {
            var redirectedEvent = document.createEvent('MouseEvents');
            redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window,
                e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey,
                e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
            document.body.dispatchEvent(redirectedEvent);
        });

        // TODO: Only install when any dialogs are open.
        document.addEventListener('submit', function(ev) {
            var method = ev.target.getAttribute('method');
            method = method ? method.toLowerCase() : '';
            if (method != 'dialog') { return; }
            ev.preventDefault();

            var dialog = findNearestDialog(ev.target);
            if (!dialog) { return; }

            // FIXME: The original event doesn't contain the INPUT element used to
            // submit the form (if any). Look in some possible places.
            var returnValue;
            var cands = [document.activeElement, ev.explicitOriginalTarget];
            cands.some(function(cand) {
                if (cand && cand.nodeName == 'INPUT' && cand.form == ev.target) {
                    returnValue = cand.value;
                    return true;
                }
            });
            dialog.close(returnValue);
        }, true);
    };

    dialogPolyfill.DialogManager.prototype.createFocusable = function(tabIndex) {
        var span = document.createElement('span');
        span.tabIndex = tabIndex || 0;
        span.style.opacity = 0;
        span.style.position = 'static';
        return span;
    };

    dialogPolyfill.DialogManager.prototype.blockDocument = function() {
        if (!document.body.contains(this.overlay)) {
            document.body.appendChild(this.overlay);

            // On Safari/Mac (and possibly other browsers), the documentElement is
            // not focusable. This is required for modal dialogs as it is the first
            // element to be hit by a tab event, and further tabs are redirected to
            // the most visible dialog.
            if (this.needsDocumentElementFocus === undefined) {
                document.documentElement.focus();
                this.needsDocumentElementFocus =
                    (document.activeElement != document.documentElement);
            }
            if (this.needsDocumentElementFocus) {
                document.documentElement.tabIndex = 1;
            }
        }
    };

    dialogPolyfill.DialogManager.prototype.unblockDocument = function() {
        document.body.removeChild(this.overlay);
        if (this.needsDocumentElementFocus) {
            // TODO: Restore the previous tabIndex, rather than clearing it.
            document.documentElement.tabIndex = '';
        }
    };

    dialogPolyfill.DialogManager.prototype.updateStacking = function() {
        if (this.pendingDialogStack.length == 0) {
            this.unblockDocument();
            return;
        }
        this.blockDocument();

        var zIndex = TOP_LAYER_ZINDEX;
        for (var i = 0; i < this.pendingDialogStack.length; i++) {
            if (i == this.pendingDialogStack.length - 1)
                this.overlay.style.zIndex = zIndex++;
            var dialog = this.pendingDialogStack[i];
            dialog.dialogPolyfillInfo.backdrop.style.zIndex = zIndex++;
            dialog.style.zIndex = zIndex++;
        }
    };

    dialogPolyfill.DialogManager.prototype.handleKey = function(event) {
        var dialogCount = this.pendingDialogStack.length;
        if (dialogCount == 0) {
            return;
        }
        var dialog = this.pendingDialogStack[dialogCount - 1];
        var pfi = dialog.dialogPolyfillInfo;

        switch (event.keyCode) {
            case 9: /* tab */
                var activeElement = document.activeElement;
                var forward = !event.shiftKey;
                if (forward) {
                    // Tab forward, so look for document or fake last focus element.
                    if (activeElement == document.documentElement ||
                        activeElement == document.body ||
                        activeElement == pfi.backdrop) {
                        pfi.focusFirst.focus();
                    } else if (activeElement == pfi.focusLast) {
                        // TODO: Instead of wrapping to focusFirst, escape to browser chrome.
                        pfi.focusFirst.focus();
                    }
                } else {
                    // Tab backwards, so look for fake first focus element.
                    if (activeElement == pfi.focusFirst) {
                        // TODO: Instead of wrapping to focusLast, escape to browser chrome.
                        pfi.focusLast.focus();
                    } else if (activeElement == this.focusPageLast) {
                        // The focus element is at the end of the page (e.g., shift-tab from
                        // the window chrome): move current focus to the last element in the
                        // dialog instead.
                        pfi.focusLast.focus();
                    }
                }
                break;

            case 27: /* esc */
                event.preventDefault();
                event.stopPropagation();
                var cancelEvent = new supportCustomEvent('cancel', {
                    bubbles: false,
                    cancelable: true
                });
                if (dialog.dispatchEvent(cancelEvent)) {
                    dialog.close();
                }
                break;

        }
    };

    dialogPolyfill.DialogManager.prototype.pushDialog = function(dialog) {
        if (this.pendingDialogStack.length >= MAX_PENDING_DIALOGS) {
            throw "Too many modal dialogs";
        }

        var backdrop = document.createElement('div');
        backdrop.className = 'backdrop';
        var clickEventListener = function(e) {
            var redirectedEvent = document.createEvent('MouseEvents');
            redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window,
                e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey,
                e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
            dialog.dispatchEvent(redirectedEvent);
        };
        backdrop.addEventListener('click', clickEventListener);
        dialog.parentNode.insertBefore(backdrop, dialog.nextSibling);
        dialog.dialogPolyfillInfo.backdrop = backdrop;
        dialog.dialogPolyfillInfo.clickEventListener = clickEventListener;
        this.pendingDialogStack.push(dialog);
        this.updateStacking();

        dialog.dialogPolyfillInfo.focusFirst = this.createFocusable();
        dialog.dialogPolyfillInfo.focusLast = this.createFocusable();
        dialog.appendChild(dialog.dialogPolyfillInfo.focusLast);
        dialog.insertBefore(
            dialog.dialogPolyfillInfo.focusFirst, dialog.firstChild);
    };

    dialogPolyfill.DialogManager.prototype.removeDialog = function(dialog) {
        var index = this.pendingDialogStack.indexOf(dialog);
        if (index == -1) {
            return;
        }
        this.pendingDialogStack.splice(index, 1);
        var backdrop = dialog.dialogPolyfillInfo.backdrop;
        var clickEventListener = dialog.dialogPolyfillInfo.clickEventListener;
        backdrop.removeEventListener('click', clickEventListener);
        backdrop.parentNode.removeChild(backdrop);
        dialog.dialogPolyfillInfo.backdrop = null;
        dialog.dialogPolyfillInfo.clickEventListener = null;
        this.updateStacking();

        dialog.removeChild(dialog.dialogPolyfillInfo.focusFirst);
        dialog.removeChild(dialog.dialogPolyfillInfo.focusLast);
        dialog.dialogPolyfillInfo.focusFirst = null;
        dialog.dialogPolyfillInfo.focusLast = null;
    };

    dialogPolyfill.dm = new dialogPolyfill.DialogManager();

    document.addEventListener('keydown',
        dialogPolyfill.dm.handleKey.bind(dialogPolyfill.dm));

    return dialogPolyfill;
})();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


require("/node_modules/meteor/ohif:viewerbase/client/components/basic/layout/template.layout.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/basic/loadingText/template.loadingText.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/basic/errorText/template.errorText.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/basic/removableBackdrop/template.removableBackdrop.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/basic/aboutModal/template.aboutModal.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/basic/aboutModal/aboutModal.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/studyBrowser/studyBrowser/template.studyBrowser.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/studyBrowser/studyBrowser/studyBrowser.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/studyBrowser/thumbnailEntry/template.thumbnailEntry.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/studyBrowser/thumbnailEntry/thumbnailEntry.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/studyBrowser/imageThumbnail/template.imageThumbnail.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/studyBrowser/imageThumbnail/imageThumbnail.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/imageViewerViewport/template.imageViewerViewport.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/imageViewerViewport/imageViewerViewport.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/gridLayout/template.gridLayout.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/gridLayout/gridLayout.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/loadingIndicator/template.loadingIndicator.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/loadingIndicator/loadingIndicator.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/annotationDialogs/template.annotationDialogs.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/annotationDialogs/annotationDialogs.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/viewportOrientationMarkers/template.viewportOrientationMarkers.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/viewportOverlay/template.viewportOverlay.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/viewportOverlay/viewportOverlay.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/viewerMain/template.viewerMain.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/viewerMain/viewerMain.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/toolContextMenu/toolContextMenu.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/imageControls/template.imageControls.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/imageControls/imageControls.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/layoutButton/template.layoutButton.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/layoutButton/layoutButton.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/layoutChooser/template.layoutChooser.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/layoutChooser/layoutChooser.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/cineDialog/template.cineDialog.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/cineDialog/cineDialog.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/downloadDialog/template.downloadDialog.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/downloadDialog/downloadDialog.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/toolbarSectionButton/template.toolbarSectionButton.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/toolbarSectionButton/toolbarSectionButton.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/toolbarSectionTools/template.toolbarSectionTools.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/toolbarSectionTools/toolbarSectionTools.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/confirmDeleteDialog/template.confirmDeleteDialog.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/confirmDeleteDialog/confirmDeleteDialog.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/textMarkerDialogs/template.textMarkerDialogs.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/textMarkerDialogs/textMarkerDialogs.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/seriesQuickSwitch/template.seriesQuickSwitch.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/seriesQuickSwitch/seriesQuickSwitch.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/studySeriesQuickSwitch/template.studySeriesQuickSwitch.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/studySeriesQuickSwitch/studySeriesQuickSwitch.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/studyTimepointBrowser/template.studyTimepoint.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/studyTimepointBrowser/studyTimepoint.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/studyTimepointBrowser/template.studyTimepointBrowser.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/studyTimepointBrowser/studyTimepointBrowser.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/studyTimepointBrowser/template.studyTimepointStudy.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/studyTimepointBrowser/studyTimepointStudy.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/windowLevelPresets/template.form.js");
require("/node_modules/meteor/ohif:viewerbase/client/components/viewer/windowLevelPresets/form.js");
var exports = require("/node_modules/meteor/ohif:viewerbase/main.js");

/* Exports */
Package._define("ohif:viewerbase", exports, {
  dialogPolyfill: dialogPolyfill
});

})();
