var require = meteorInstall({"client":{"components":{"flexboxLayout":{"template.flexboxLayout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/components/flexboxLayout/template.flexboxLayout.js                                                  //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //

Template.__checkName("flexboxLayout");
Template["flexboxLayout"] = new Template("Template.flexboxLayout", (function() {
  var view = this;
  return HTML.DIV({
    class: "viewerSection"
  }, "\n        ", HTML.DIV({
    class: function() {
      return [ "sidebarMenu sidebar-left ", Blaze.If(function() {
        return Spacebars.call(view.lookup("leftSidebarOpen"));
      }, function() {
        return "sidebar-open";
      }) ];
    }
  }, "\n            ", Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."));
  }, function() {
    return Spacebars.include(view.lookupTemplate("studyBrowser"));
  }), "\n        "), "\n        ", HTML.DIV({
    class: function() {
      return [ "mainContent ", Blaze.If(function() {
        return Spacebars.call(view.lookup("leftSidebarOpen"));
      }, function() {
        return "sidebar-left-open";
      }) ];
    }
  }, "\n            ", Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."));
  }, function() {
    return Spacebars.include(view.lookupTemplate("standaloneViewerMain"));
  }), "\n        "), "\n    ");
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"flexboxLayout.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/components/flexboxLayout/flexboxLayout.js                                                           //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
Template.flexboxLayout.events({
  'transitionend .sidebarMenu': function (event, instance) {
    if (!event.target.classList.contains('sidebarMenu')) {
      return;
    }

    window.ResizeViewportManager.handleResize();
  }
});
Template.flexboxLayout.helpers({
  leftSidebarOpen: function () {
    return Template.instance().data.state.get('leftSidebar');
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"standaloneViewer":{"template.standaloneViewer.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/components/standaloneViewer/template.standaloneViewer.js                                            //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //

Template.__checkName("standaloneViewer");
Template["standaloneViewer"] = new Template("Template.standaloneViewer", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("header"), function() {
    return [ "\n        ", Blaze._TemplateWith(function() {
      return "brand";
    }, function() {
      return Spacebars.include(view.lookupTemplate("section"), function() {
        return [ "\n            ", HTML.SVG({
          class: "logo-image"
        }, "\n                ", HTML.USE({
          "xlink:href": function() {
            return Spacebars.mustache(view.lookup("absoluteUrl"), "packages/ohif_viewerbase/assets/icons.svg#icon-ohif-logo");
          }
        }), "\n            "), "\n            ", HTML.DIV({
          class: "logo-text"
        }, "Open Health Imaging Foundation"), "\n        " ];
      });
    }), "\n    " ];
  }), "\n    ", Spacebars.include(view.lookupTemplate("viewer")) ];
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"standaloneViewerMain":{"template.standaloneViewerMain.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/components/standaloneViewerMain/template.standaloneViewerMain.js                                    //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //

Template.__checkName("standaloneViewerMain");
Template["standaloneViewerMain"] = new Template("Template.standaloneViewerMain", (function() {
  var view = this;
  return HTML.Raw('<div class="viewerMain">\n        <div id="layoutManagerTarget"></div>\n    </div>');
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"standaloneViewerMain.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/components/standaloneViewerMain/standaloneViewerMain.js                                             //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 2);
module.watch(require("meteor/ohif:viewerbase"));
Meteor.startup(function () {
  window.ResizeViewportManager = window.ResizeViewportManager || new OHIF.viewerbase.ResizeViewportManager();
});
Template.standaloneViewerMain.onCreated(function () {
  // Attach the Window resize listener
  window.addEventListener('resize', window.ResizeViewportManager.getResizeHandler()); // Create the synchronizer used to update reference lines

  OHIF.viewer.updateImageSynchronizer = new cornerstoneTools.Synchronizer('cornerstonenewimage', cornerstoneTools.updateImageSynchronizer);
  OHIF.viewer.metadataProvider = new OHIF.cornerstone.MetadataProvider(); // Metadata configuration

  var metadataProvider = OHIF.viewer.metadataProvider;
  cornerstone.metaData.addProvider(metadataProvider.provider.bind(metadataProvider));
});
Template.standaloneViewerMain.onRendered(function () {
  var instance = Template.instance();
  var studies = instance.data.studies;
  var parentElement = instance.$('#layoutManagerTarget').get(0);
  var studyPrefetcher = OHIF.viewerbase.StudyPrefetcher.getInstance();
  instance.studyPrefetcher = studyPrefetcher;
  instance.studyLoadingListener = OHIF.viewerbase.StudyLoadingListener.getInstance();
  instance.studyLoadingListener.clear();
  instance.studyLoadingListener.addStudies(studies);
  OHIF.viewerbase.layoutManager = new OHIF.viewerbase.LayoutManager(parentElement, studies);
  OHIF.viewerbase.layoutManager.updateViewports();
  studyPrefetcher.setStudies(studies); // Enable hotkeys

  OHIF.viewerbase.hotkeyUtils.enableHotkeys();
});
Template.standaloneViewerMain.onDestroyed(function () {
  // Remove the Window resize listener
  window.removeEventListener('resize', window.ResizeViewportManager.getResizeHandler()); // Destroy the synchronizer used to update reference lines

  OHIF.viewer.updateImageSynchronizer.destroy();
  delete OHIF.viewerbase.layoutManager; // Stop prefetching when we close the viewer

  instance.studyPrefetcher.destroy(); // Destroy stack loading listeners when we close the viewer

  instance.studyLoadingListener.clear(); // Clear references to all stacks in the StackManager

  OHIF.viewerbase.stackManager.clearStacks();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"toolbarSection":{"template.toolbarSection.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/components/toolbarSection/template.toolbarSection.js                                                //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //

Template.__checkName("toolbarSection");
Template["toolbarSection"] = new Template("Template.toolbarSection", (function() {
  var view = this;
  return HTML.DIV({
    class: "toolbarSection noselect p-x-2"
  }, "\n        ", HTML.DIV({
    class: "clearfix"
  }, "\n            ", HTML.DIV({
    class: "pull-left m-t-1"
  }, "\n                ", Blaze._TemplateWith(function() {
    return Spacebars.call(view.lookup("leftSidebarToggleButtonData"));
  }, function() {
    return Spacebars.include(view.lookupTemplate("roundedButtonGroup"));
  }), "\n            "), "\n            ", Blaze._TemplateWith(function() {
    return {
      toolbarButtons: Spacebars.call(view.lookup("toolbarButtons"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("toolbarSectionTools"));
  }), "\n        "), "\n    ");
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"toolbarSection.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/components/toolbarSection/toolbarSection.js                                                         //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
module.watch(require("meteor/ohif:viewerbase"));
Template.toolbarSection.onCreated(function () {
  var instance = Template.instance();

  if (OHIF.uiSettings.leftSidebarOpen) {
    instance.data.state.set('leftSidebar', 'studies');
  }
});
Template.toolbarSection.helpers({
  leftSidebarToggleButtonData: function () {
    var instance = Template.instance();
    return {
      toggleable: true,
      key: 'leftSidebar',
      value: instance.data.state,
      options: [{
        value: 'studies',
        svgLink: 'packages/ohif_viewerbase/assets/icons.svg#icon-studies',
        svgWidth: 15,
        svgHeight: 13,
        bottomLabel: 'Series'
      }]
    };
  },
  toolbarButtons: function () {
    var extraTools = [];
    extraTools.push({
      id: 'crosshairs',
      title: 'Crosshairs',
      classes: 'imageViewerTool',
      iconClasses: 'fa fa-crosshairs'
    });
    extraTools.push({
      id: 'stackScroll',
      title: 'Stack Scroll',
      classes: 'imageViewerTool',
      iconClasses: 'fa fa-bars'
    });
    extraTools.push({
      id: 'magnify',
      title: 'Magnify',
      classes: 'imageViewerTool toolbarSectionButton',
      iconClasses: 'fa fa-circle'
    });
    extraTools.push({
      id: 'wwwcRegion',
      title: 'ROI Window',
      classes: 'imageViewerTool',
      iconClasses: 'fa fa-square'
    });
    extraTools.push({
      id: 'dragProbe',
      title: 'Probe',
      classes: 'imageViewerTool',
      iconClasses: 'fa fa-dot-circle-o'
    });
    extraTools.push({
      id: 'ellipticalRoi',
      title: 'Ellipse',
      classes: 'imageViewerTool',
      iconClasses: 'fa fa-circle-o'
    });
    extraTools.push({
      id: 'rectangleRoi',
      title: 'Rectangle',
      classes: 'imageViewerTool',
      iconClasses: 'fa fa-square-o'
    });
    extraTools.push({
      id: 'invert',
      title: 'Invert',
      classes: 'imageViewerCommand',
      iconClasses: 'fa fa-adjust'
    });
    extraTools.push({
      id: 'rotateR',
      title: 'Rotate Right',
      classes: 'imageViewerCommand',
      svgLink: '/packages/ohif_viewerbase/assets/icons.svg#icon-tools-rotate-right'
    });
    extraTools.push({
      id: 'flipH',
      title: 'Flip H',
      classes: 'imageViewerCommand',
      svgLink: '/packages/ohif_viewerbase/assets/icons.svg#icon-tools-flip-horizontal'
    });
    extraTools.push({
      id: 'flipV',
      title: 'Flip V',
      classes: 'imageViewerCommand',
      svgLink: '/packages/ohif_viewerbase/assets/icons.svg#icon-tools-flip-vertical'
    });
    extraTools.push({
      id: 'clearTools',
      title: 'Clear',
      classes: 'imageViewerCommand',
      iconClasses: 'fa fa-trash'
    });
    var buttonData = [];
    buttonData.push({
      id: 'zoom',
      title: 'Zoom',
      classes: 'imageViewerTool',
      svgLink: 'packages/ohif_viewerbase/assets/icons.svg#icon-tools-zoom'
    });
    buttonData.push({
      id: 'wwwc',
      title: 'Levels',
      classes: 'imageViewerTool',
      svgLink: 'packages/ohif_viewerbase/assets/icons.svg#icon-tools-levels'
    });
    buttonData.push({
      id: 'pan',
      title: 'Pan',
      classes: 'imageViewerTool',
      svgLink: 'packages/ohif_viewerbase/assets/icons.svg#icon-tools-pan'
    });
    buttonData.push({
      id: 'length',
      title: 'Length',
      classes: 'imageViewerTool toolbarSectionButton',
      svgLink: 'packages/ohif_viewerbase/assets/icons.svg#icon-tools-measure-temp'
    });
    buttonData.push({
      id: 'annotate',
      title: 'Annotate',
      classes: 'imageViewerTool',
      svgLink: 'packages/ohif_viewerbase/assets/icons.svg#icon-tools-measure-non-target'
    });
    buttonData.push({
      id: 'angle',
      title: 'Angle',
      classes: 'imageViewerTool',
      iconClasses: 'fa fa-angle-left'
    });
    buttonData.push({
      id: 'resetViewport',
      title: 'Reset',
      classes: 'imageViewerCommand',
      iconClasses: 'fa fa-undo'
    });

    if (!OHIF.uiSettings.displayEchoUltrasoundWorkflow) {
      buttonData.push({
        id: 'previousDisplaySet',
        title: 'Previous',
        classes: 'imageViewerCommand',
        iconClasses: 'fa fa-toggle-up fa-fw'
      });
      buttonData.push({
        id: 'nextDisplaySet',
        title: 'Next',
        classes: 'imageViewerCommand',
        iconClasses: 'fa fa-toggle-down fa-fw'
      });
      var isPlaying = OHIF.viewerbase.viewportUtils.isPlaying;
      buttonData.push({
        id: 'toggleCinePlay',
        title: function () {
          return isPlaying() ? 'Stop' : 'Play';
        },
        classes: 'imageViewerCommand',
        iconClasses: function () {
          return 'fa fa-fw ' + (isPlaying() ? 'fa-stop' : 'fa-play');
        },
        active: isPlaying
      });
      buttonData.push({
        id: 'toggleCineDialog',
        title: 'CINE',
        classes: 'imageViewerCommand',
        iconClasses: 'fa fa-youtube-play',
        active: function () {
          return $('#cineDialog').is(':visible');
        }
      });
    }

    buttonData.push({
      id: 'layout',
      title: 'Layout',
      iconClasses: 'fa fa-th-large',
      buttonTemplateName: 'layoutButton'
    });
    buttonData.push({
      id: 'toggleMore',
      title: 'More',
      classes: 'rp-x-1 rm-l-3',
      svgLink: 'packages/ohif_viewerbase/assets/icons.svg#icon-tools-more',
      subTools: extraTools
    });
    return buttonData;
  },
  hangingProtocolButtons: function () {
    var buttonData = [];
    buttonData.push({
      id: 'previousPresentationGroup',
      title: 'Prev. Stage',
      iconClasses: 'fa fa-step-backward',
      buttonTemplateName: 'previousPresentationGroupButton'
    });
    buttonData.push({
      id: 'nextPresentationGroup',
      title: 'Next Stage',
      iconClasses: 'fa fa-step-forward',
      buttonTemplateName: 'nextPresentationGroupButton'
    });
    return buttonData;
  }
});
Template.toolbarSection.onRendered(function () {
  var instance = Template.instance();
  instance.$('#layout').dropdown(); // Set disabled/enabled tool buttons that are set in toolManager

  var states = OHIF.viewerbase.toolManager.getToolDefaultStates();
  var disabledToolButtons = states.disabledToolButtons;
  var allToolbarButtons = $('#toolbar').find('button');

  if (disabledToolButtons && disabledToolButtons.length > 0) {
    for (var i = 0; i < allToolbarButtons.length; i++) {
      var toolbarButton = allToolbarButtons[i];
      $(toolbarButton).prop('disabled', false);
      var index = disabledToolButtons.indexOf($(toolbarButton).attr('id'));

      if (index !== -1) {
        $(toolbarButton).prop('disabled', true);
      }
    }
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"viewer":{"template.viewer.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/components/viewer/template.viewer.js                                                                //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //

Template.__checkName("viewer");
Template["viewer"] = new Template("Template.viewer", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.templateInstance().subscriptionsReady());
  }, function() {
    return [ "\n        ", HTML.DIV({
      class: "viewerDialogs"
    }, "\n            ", Spacebars.include(view.lookupTemplate("cineDialog")), "\n            ", Spacebars.include(view.lookupTemplate("layoutChooser")), "\n            ", Spacebars.include(view.lookupTemplate("annotationDialogs")), "\n        "), "\n        ", HTML.DIV({
      id: "viewer"
    }, "\n            ", Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."), Spacebars.kw({
        state: view.lookup("state")
      }));
    }, function() {
      return Spacebars.include(view.lookupTemplate("toolbarSection"));
    }), "\n            ", Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("clone"), view.lookup("."), Spacebars.kw({
        state: view.lookup("state")
      }));
    }, function() {
      return Spacebars.include(view.lookupTemplate("flexboxLayout"));
    }), "\n        "), "\n    " ];
  }, function() {
    return [ "\n        ", Spacebars.include(view.lookupTemplate("loadingText")), "\n    " ];
  });
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"viewer.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/components/viewer/viewer.js                                                                         //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
var Tracker;
module.watch(require("meteor/tracker"), {
  Tracker: function (v) {
    Tracker = v;
  }
}, 2);
var ReactiveDict;
module.watch(require("meteor/reactive-dict"), {
  ReactiveDict: function (v) {
    ReactiveDict = v;
  }
}, 3);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 4);
module.watch(require("meteor/ohif:viewerbase"));
module.watch(require("meteor/ohif:metadata"));
var viewportUtils = OHIF.viewerbase.viewportUtils;
OHIF.viewer.functionList = {
  toggleCineDialog: viewportUtils.toggleCineDialog,
  toggleCinePlay: viewportUtils.toggleCinePlay,
  clearTools: viewportUtils.clearTools,
  resetViewport: viewportUtils.resetViewport,
  invert: viewportUtils.invert
};
Session.setDefault('activeViewport', false);
Session.setDefault('leftSidebar', false);
Session.setDefault('rightSidebar', false);
/**
 * Inits OHIF Hanging Protocol's onReady.
 * It waits for OHIF Hanging Protocol to be ready to instantiate the ProtocolEngine
 * Hanging Protocol will use OHIF LayoutManager to render viewports properly
 */

var initHangingProtocol = function () {
  // When Hanging Protocol is ready
  HP.ProtocolStore.onReady(function () {
    // Gets all StudyMetadata objects: necessary for Hanging Protocol to access study metadata
    var studyMetadataList = OHIF.viewer.StudyMetadataList.all(); // Caches Layout Manager: Hanging Protocol uses it for layout management according to current protocol

    var layoutManager = OHIF.viewerbase.layoutManager; // Instantiate StudyMetadataSource: necessary for Hanging Protocol to get study metadata

    var studyMetadataSource = new OHIF.studies.classes.OHIFStudyMetadataSource(); // Creates Protocol Engine object with required arguments

    var ProtocolEngine = new HP.ProtocolEngine(layoutManager, studyMetadataList, [], studyMetadataSource); // Sets up Hanging Protocol engine

    HP.setEngine(ProtocolEngine);
  });
};

Template.viewer.onCreated(function () {
  var instance = Template.instance();
  instance.state = new ReactiveDict();
  instance.state.set('leftSidebar', Session.get('leftSidebar'));
  instance.state.set('rightSidebar', Session.get('rightSidebar'));

  if (OHIF.viewer.data && OHIF.viewer.data.loadedSeriesData) {
    OHIF.log.info('Reloading previous loadedSeriesData');
    OHIF.viewer.loadedSeriesData = OHIF.viewer.data.loadedSeriesData;
  } else {
    OHIF.log.info('Setting default viewer data');
    OHIF.viewer.loadedSeriesData = {};
    OHIF.viewer.data = {};
    OHIF.viewer.data.loadedSeriesData = OHIF.viewer.loadedSeriesData; // Update the viewer data object

    OHIF.viewer.data.viewportColumns = 1;
    OHIF.viewer.data.viewportRows = 1;
    OHIF.viewer.data.activeViewport = 0;
  } // Store the viewer data in session for further user


  Session.setPersistent('ViewerData', OHIF.viewer.data);
  Session.set('activeViewport', OHIF.viewer.data.activeViewport || 0); // @TypeSafeStudies
  // Update the OHIF.viewer.Studies collection with the loaded studies

  OHIF.viewer.Studies.removeAll(); // @TypeSafeStudies
  // Clears OHIF.viewer.StudyMetadataList collection

  OHIF.viewer.StudyMetadataList.removeAll();
  OHIF.viewer.data.studyInstanceUids = [];
  instance.data.studies.forEach(function (study) {
    var studyMetadata = new OHIF.metadata.StudyMetadata(study, study.studyInstanceUid);
    var displaySets = study.displaySets;

    if (!study.displaySets) {
      displaySets = OHIF.viewerbase.sortingManager.getDisplaySets(studyMetadata);
      study.displaySets = displaySets;
    }

    study.selected = true;
    OHIF.viewer.Studies.insert(study);
    OHIF.viewer.StudyMetadataList.insert(studyMetadata);
    OHIF.viewer.data.studyInstanceUids.push(study.studyInstanceUid);
  });
});
Template.viewer.onRendered(function () {
  this.autorun(function () {
    // To make sure ohif viewerMain is rendered before initializing Hanging Protocols
    var isOHIFViewerMainRendered = Session.get('OHIFViewerMainRendered'); // To avoid first run

    if (isOHIFViewerMainRendered) {
      // To run only when ViewerMainRendered dependency has changed.
      // because initHangingProtocol can have other reactive components
      Tracker.nonreactive(initHangingProtocol);
    }
  });
});
Template.viewer.events({
  'click .js-toggle-studies': function () {
    var instance = Template.instance();
    var current = instance.state.get('leftSidebar');
    instance.state.set('leftSidebar', !current);
  }
});
Template.viewer.helpers({
  state: function () {
    return Template.instance().state;
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"config.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/config.js                                                                                           //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
var cornerstoneWADOImageLoader;
module.watch(require("meteor/ohif:cornerstone"), {
  cornerstoneWADOImageLoader: function (v) {
    cornerstoneWADOImageLoader = v;
  }
}, 2);
Meteor.startup(function () {
  var maxWebWorkers = Math.max(navigator.hardwareConcurrency - 1, 1);
  var config = {
    maxWebWorkers: maxWebWorkers,
    startWebWorkersOnDemand: true,
    webWorkerPath: OHIF.utils.absoluteUrl('packages/ohif_cornerstone/public/js/cornerstoneWADOImageLoaderWebWorker.es5.js'),
    taskConfiguration: {
      decodeTask: {
        loadCodecsOnStartup: true,
        initializeCodecsOnStartup: false,
        codecsPath: OHIF.utils.absoluteUrl('packages/ohif_cornerstone/public/js/cornerstoneWADOImageLoaderCodecs.es5.js'),
        usePDFJS: false
      }
    }
  };
  cornerstoneWADOImageLoader.webWorkerManager.initialize(config);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"routes.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// routes.js                                                                                                  //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Router;
module.watch(require("meteor/iron:router"), {
  Router: function (v) {
    Router = v;
  }
}, 1);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 2);

if (Meteor.isClient) {
  // Disconnect from the Meteor Server since we don't need it
  OHIF.log.info('Disconnecting from the Meteor server');
  Meteor.disconnect();
  Router.configure({
    loadingTemplate: 'loading'
  });
  Router.onBeforeAction('loading');
  Router.route('/:id?', {
    onRun: function () {
      var _this = this;

      console.warn('onRun'); // Retrieve the query from the URL the user has entered

      var query = this.params.query;
      var id = this.params.id;

      if (!id && !query.url) {
        console.log('No URL was specified. Use ?url=${yourURL}');
        return;
      }

      var next = this.next;
      var idUrl = "/api/" + id;
      var url = query.url || idUrl; // Define a request to the server to retrieve the study data
      // as JSON, given a URL that was in the Route

      var oReq = new XMLHttpRequest(); // Add event listeners for request failure

      oReq.addEventListener('error', function () {
        OHIF.log.warn('An error occurred while retrieving the JSON data');
        next();
      }); // When the JSON has been returned, parse it into a JavaScript Object
      // and render the OHIF Viewer with this data

      oReq.addEventListener('load', function () {
        // Parse the response content
        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText
        if (!oReq.responseText) {
          OHIF.log.warn('Response was undefined');
          return;
        }

        OHIF.log.info(JSON.stringify(oReq.responseText, null, 2));
        _this.data = JSON.parse(oReq.responseText);
        next();
      }); // Open the Request to the server for the JSON data
      // In this case we have a server-side route called /api/
      // which responds to GET requests with the study data

      OHIF.log.info("Sending Request to: " + url);
      oReq.open('GET', url);
      oReq.setRequestHeader('Accept', 'application/json'); // Fire the request to the server

      oReq.send();
    },
    action: function () {
      var _this2 = this;

      // Render the Viewer with this data
      this.render('standaloneViewer', {
        data: function () {
          return _this2.data;
        }
      });
    }
  });
} // This is ONLY for demo purposes.


if (Meteor.isServer) {
  // You can test this with:
  // curl -v -H "Content-Type: application/json" -X GET 'http://localhost:3000/getData/testId'
  //
  // Or by going to:
  // http://localhost:3000/api/testId
  Router.route('/api/:id', {
    where: 'server'
  }).get(function () {
    // "this" is the RouteController instance.
    // "this.response" is the Connect response object
    // "this.request" is the Connect request object
    var id = this.params.id; // Find the relevant study data from the Collection given the ID

    var data = RequestStudies.findOne({
      transactionId: id
    }); // Set the response headers to return JSON to any server

    this.response.setHeader('Content-Type', 'application/json');
    this.response.setHeader('Access-Control-Allow-Origin', '*');
    this.response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Change the response text depending on the available study data

    if (!data) {
      this.response.write('No Data Found');
    } else {
      // Stringify the JavaScript object to JSON for the response
      this.response.write(JSON.stringify(data));
    } // Finalize the response


    this.response.end();
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".styl"
  ]
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/compatibility/cornerstoneWebImageLoader.js                                                          //
// This file is in bare mode and is not in its own closure.                                                   //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
/*! cornerstone-web-image-loader - 0.8.1 - 2017-06-13 | (c) 2016 Chris Hafey | https://github.com/chafey/cornerstoneWebImageLoader */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cornerstone-core"));
	else if(typeof define === 'function' && define.amd)
		define("cornerstoneWebImageLoader", ["cornerstone-core"], factory);
	else if(typeof exports === 'object')
		exports["cornerstoneWebImageLoader"] = factory(require("cornerstone-core"));
	else
		root["cornerstoneWebImageLoader"] = factory(root["cornerstone"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arrayBuffer) {
  var deferred = $.Deferred();

  var image = new Image();

  var arrayBufferView = new Uint8Array(arrayBuffer);
  var blob = new Blob([arrayBufferView]);
  var urlCreator = window.URL || window.webkitURL;
  var imageUrl = urlCreator.createObjectURL(blob);

  image.src = imageUrl;
  image.onload = function () {
    deferred.resolve(image);
    urlCreator.revokeObjectURL(imageUrl);
  };
  image.onerror = function (err) {
    urlCreator.revokeObjectURL(imageUrl);
    deferred.reject(err);
  };

  return deferred.promise();
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (image, imageId) {
  // extract the attributes we need
  var rows = image.naturalHeight;
  var columns = image.naturalWidth;

  function getPixelData() {
    var imageData = getImageData();
    var imageDataData = imageData.data;
    var numPixels = image.naturalHeight * image.naturalWidth;
    var storedPixelData = new Uint8Array(numPixels * 4);
    var imageDataIndex = 0;
    var storedPixelDataIndex = 0;

    for (var i = 0; i < numPixels; i++) {
      storedPixelData[storedPixelDataIndex++] = imageDataData[imageDataIndex++];
      storedPixelData[storedPixelDataIndex++] = imageDataData[imageDataIndex++];
      storedPixelData[storedPixelDataIndex++] = imageDataData[imageDataIndex++];
      storedPixelData[storedPixelDataIndex++] = 255; // alpha
      imageDataIndex++;
    }

    return storedPixelData;
  }

  function getImageData() {
    var context = void 0;

    if (lastImageIdDrawn === imageId) {
      context = canvas.getContext('2d');
    } else {
      canvas.height = image.naturalHeight;
      canvas.width = image.naturalWidth;
      context = canvas.getContext('2d');
      context.drawImage(image, 0, 0);
      lastImageIdDrawn = imageId;
    }

    return context.getImageData(0, 0, image.naturalWidth, image.naturalHeight);
  }

  function getCanvas() {
    if (lastImageIdDrawn === imageId) {
      return canvas;
    }

    canvas.height = image.naturalHeight;
    canvas.width = image.naturalWidth;
    var context = canvas.getContext('2d');

    context.drawImage(image, 0, 0);
    lastImageIdDrawn = imageId;

    return canvas;
  }

  function getImage() {
    return image;
  }

  // Extract the various attributes we need
  return {
    imageId: imageId,
    minPixelValue: 0, // calculated below
    maxPixelValue: 255, // calculated below
    slope: 1.0,
    intercept: 0,
    windowCenter: 128,
    windowWidth: 255,
    render: cornerstone.renderWebImage,
    getPixelData: getPixelData,
    getImageData: getImageData,
    getCanvas: getCanvas,
    getImage: getImage,
    // storedPixelData: extractStoredPixels(image),
    rows: rows,
    columns: columns,
    height: rows,
    width: columns,
    color: true,
    columnPixelSpacing: undefined,
    rowPixelSpacing: undefined,
    invert: false,
    sizeInBytes: rows * columns * 4 // we don't know for sure so we over estimate to be safe
  };
};

var _cornerstoneCore = __webpack_require__(0);

var cornerstone = _interopRequireWildcard(_cornerstoneCore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var canvas = document.createElement('canvas');
var lastImageIdDrawn = '';

/**
 * creates a cornerstone Image object for the specified Image and imageId
 *
 * @param image - An Image
 * @param imageId - the imageId for this image
 * @returns Cornerstone Image Object
 */

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadImage = loadImage;
exports.configure = configure;

var _cornerstoneCore = __webpack_require__(0);

var cornerstone = _interopRequireWildcard(_cornerstoneCore);

var _arrayBufferToImage = __webpack_require__(1);

var _arrayBufferToImage2 = _interopRequireDefault(_arrayBufferToImage);

var _createImage = __webpack_require__(2);

var _createImage2 = _interopRequireDefault(_createImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//
// This is a cornerstone image loader for web images such as PNG and JPEG
//
var options = {
  // callback allowing customization of the xhr (e.g. adding custom auth headers, cors, etc)
  beforeSend: function beforeSend() /* xhr */{}
};

// Loads an image given a url to an image
function loadImage(imageId) {
  var deferred = $.Deferred();

  var xhr = new XMLHttpRequest();

  xhr.open('GET', imageId, true);
  xhr.responseType = 'arraybuffer';
  options.beforeSend(xhr);

  xhr.onload = function () {
    var imagePromise = (0, _arrayBufferToImage2.default)(this.response);

    imagePromise.then(function (image) {
      var imageObject = (0, _createImage2.default)(image, imageId);

      deferred.resolve(imageObject);
    }, function (error) {
      deferred.reject(error);
    });
  };
  xhr.onprogress = function (oProgress) {

    if (oProgress.lengthComputable) {
      // evt.loaded the bytes browser receive
      // evt.total the total bytes seted by the header
      //
      var loaded = oProgress.loaded;
      var total = oProgress.total;
      var percentComplete = Math.round(loaded / total * 100);

      $(cornerstone.events).trigger('CornerstoneImageLoadProgress', {
        imageId: imageId,
        loaded: loaded,
        total: total,
        percentComplete: percentComplete
      });
    }
  };
  xhr.send();

  return deferred.promise();
}

function configure(opts) {
  options = opts;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = exports.loadImage = exports.createImage = exports.arrayBufferToImage = undefined;

var _arrayBufferToImage = __webpack_require__(1);

var _arrayBufferToImage2 = _interopRequireDefault(_arrayBufferToImage);

var _createImage = __webpack_require__(2);

var _createImage2 = _interopRequireDefault(_createImage);

var _loadImage = __webpack_require__(3);

var _cornerstoneCore = __webpack_require__(0);

var cornerstone = _interopRequireWildcard(_cornerstoneCore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.arrayBufferToImage = _arrayBufferToImage2.default;
exports.createImage = _createImage2.default;
exports.loadImage = _loadImage.loadImage;
exports.configure = _loadImage.configure;

// Register the http and https prefixes so we can use standard web urls directly

cornerstone.registerImageLoader('http', _loadImage.loadImage);
cornerstone.registerImageLoader('https', _loadImage.loadImage);

/***/ })
/******/ ]);
});
//# sourceMappingURL=cornerstoneWebImageLoader.js.map
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


require("/client/components/flexboxLayout/template.flexboxLayout.js");
require("/client/components/standaloneViewer/template.standaloneViewer.js");
require("/client/components/standaloneViewerMain/template.standaloneViewerMain.js");
require("/client/components/toolbarSection/template.toolbarSection.js");
require("/client/components/viewer/template.viewer.js");
require("/client/components/flexboxLayout/flexboxLayout.js");
require("/client/components/standaloneViewerMain/standaloneViewerMain.js");
require("/client/components/toolbarSection/toolbarSection.js");
require("/client/components/viewer/viewer.js");
require("/client/config.js");
require("/routes.js");