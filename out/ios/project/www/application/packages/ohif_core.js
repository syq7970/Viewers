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
var _ = Package.underscore._;
var Template = Package['templating-runtime'].Template;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
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
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var FastClick = Package.fastclick.FastClick;
var LaunchScreen = Package['launch-screen'].LaunchScreen;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:core":{"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/main.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  OHIF: function () {
    return OHIF;
  }
});
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);

/*
 * Defines the base OHIF object
 */
var OHIF = {
  log: {},
  ui: {},
  utils: {},
  viewer: {},
  cornerstone: {}
}; // Expose the OHIF object to the client if it is on development mode
// @TODO: remove this after applying namespace to this package

if (Meteor.isClient) {
  window.OHIF = OHIF;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"client":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/index.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./lib"));
module.watch(require("./helpers"));
module.watch(require("./components"));
module.watch(require("./ui"));
module.watch(require("./routes.js"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/routes.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 1);
var Router;
module.watch(require("meteor/iron:router"), {
  Router: function (v) {
    Router = v;
  }
}, 2);
Router.onRun(function () {
  $(document.body).trigger('ohif.navigated');
  this.next();
});

if (Meteor.isDevelopment) {
  Router.route('/playground', function () {
    this.render('componentPlayground');
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"components":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/index.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./base"));
module.watch(require("./bootstrap"));
module.watch(require("./pages"));
module.watch(require("./paginationArea"));
module.watch(require("./playground/playground.html"));
module.watch(require("./playground/playground.styl"));
module.watch(require("./playground/playground.js"));
module.watch(require("./scrollArea"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"base":{"component.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/component.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

/*
 * Base component to template instances of all dynamic components
 */
var Component =
/*#__PURE__*/
function () {
  // Set up the component
  function Component(templateInstance) {
    // Store the component in the current view
    templateInstance.view._component = this; // Create an object to register section's content

    templateInstance.sections = {}; // Store the template instance in the component

    this.templateInstance = templateInstance; // Store the component's registered sub-components

    this.registeredItems = new Set();
  } // Self register the component in its first parent component


  var _proto = Component.prototype;

  _proto.registerSelf = function () {
    function registerSelf() {
      var parent = OHIF.blaze.getParentComponent(this.templateInstance.view);

      if (parent) {
        // Store this component's parent in a property
        this.parent = parent; // Add this component in its parent's registered items list

        parent.registeredItems.add(this);
      }
    }

    return registerSelf;
  }(); // Self unregister the component in its first parent component


  _proto.unregisterSelf = function () {
    function unregisterSelf() {
      var parent = OHIF.blaze.getParentComponent(this.templateInstance.view);

      if (parent) {
        // Remove the parent property from this component
        delete this.parent; // Remove this component from its parent's registered items list

        parent.registeredItems.delete(this);
      }
    }

    return unregisterSelf;
  }();

  return Component;
}();

OHIF.Component = Component;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/index.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./component.js"));
module.watch(require("./mixin.js"));
module.watch(require("./template.js"));
module.watch(require("./section/section.html"));
module.watch(require("./section/section.js"));
module.watch(require("./mixins/action.js"));
module.watch(require("./mixins/button.js"));
module.watch(require("./mixins/checkbox.js"));
module.watch(require("./mixins/component.js"));
module.watch(require("./mixins/dropdown.js"));
module.watch(require("./mixins/form.js"));
module.watch(require("./mixins/formItem.js"));
module.watch(require("./mixins/group.js"));
module.watch(require("./mixins/groupRadio.js"));
module.watch(require("./mixins/input.js"));
module.watch(require("./mixins/link.js"));
module.watch(require("./mixins/popover.js"));
module.watch(require("./mixins/schemaData.js"));
module.watch(require("./mixins/select.js"));
module.watch(require("./mixins/select2.js"));
module.watch(require("./templates/button.html"));
module.watch(require("./templates/custom.html"));
module.watch(require("./templates/div.html"));
module.watch(require("./templates/form.html"));
module.watch(require("./templates/input.html"));
module.watch(require("./templates/link.html"));
module.watch(require("./templates/select.html"));
module.watch(require("./templates/tr.html"));
module.watch(require("./wrappers/label.html"));
module.watch(require("./wrappers/labelContent.html"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mixin.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixin.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 1);
// Create an object to store all the application mixins
OHIF.mixins = {}; // Class to manage new mixins and its dependencies

var Mixin =
/*#__PURE__*/
function () {
  // Create the mixin instance
  function Mixin(_ref) {
    var dependencies = _ref.dependencies,
        composition = _ref.composition;
    // Store the mixin dependencies
    this.dependencies = dependencies || ''; // Store the mixin composition

    this.composition = composition;
  } // Initialize the mixin applying all its composition functions


  var _proto = Mixin.prototype;

  _proto.init = function () {
    function init(template, data, applied, behaviors) {
      var _this = this;

      var dependenciesArray = this.dependencies.split(' ');

      _.each(dependenciesArray, function (dependency) {
        // Go to next dependency if the current dependency string is blank
        if (!dependency) {
          return;
        } // Get the dependent mixin to be initizalized


        var mixin = Mixin.getMixin(dependency); // Throw an error if a cyclic dependency was found on this mixin

        if (mixin === _this) {
          throw new Error("Mixin " + dependency + " has a cyclic dependency.");
        } // Initizalize the mixin dependencies recursively


        mixin.init(template, data, applied, behaviors);
      }); // Apply the mixin's composition behaviors to the template


      this.apply(template, data, applied, behaviors);
    }

    return init;
  }(); // Add the mixin's composition behaviors to the template


  _proto.apply = function () {
    function apply(template, data, applied, behaviors) {
      // Ignore if the mixin was already applied to the template
      if (_.contains(applied, this)) {
        return;
      } // Store the mixin's composition


      var composition = this.composition; // Iterate over each behavior

      _.each(behaviors, function (behavior) {
        // Execute something only after all the mixins are done
        var functionName = behavior;

        if (functionName === 'onMixins') {
          functionName = 'onRendered';
        }

        if (behavior === 'onData' && composition[behavior]) {
          // If it's just data manipulation, call it immediately
          composition[behavior](data);
        } else if (composition[behavior]) {
          // Register the behavior in the template
          template[functionName](composition[behavior]);
        }
      }); // Set the current mixin's state as applied


      applied.push(this);
    }

    return apply;
  }(); // Initialize all data manipulation mixins


  Mixin.initData = function () {
    function initData(data) {
      // Split the mixins by space
      var mixinsArray = data.mixins.split(' '); // Control and ignore the mixins that have already been applied

      var appliedOnData = [];

      _.each(mixinsArray, function (mixinName) {
        // Ignore blank strings
        if (!mixinName) {
          return;
        } // Get the current mixin


        var mixin = Mixin.getMixin(mixinName); // Initialize the data manipulation composition

        mixin.init(null, data, appliedOnData, ['onData']);
      });
    }

    return initData;
  }(); // Initialize all the template's mixins


  Mixin.initAll = function () {
    function initAll(template, data) {
      // Split the mixins by space
      var mixinsArray = data.mixins.split(' '); // Control and ignore the mixins that have already been applied

      var appliedCommon = [];
      var appliedOnMixins = [];

      _.each(mixinsArray, function (mixinName) {
        // Ignore blank strings
        if (!mixinName) {
          return;
        } // Get the current mixin


        var mixin = Mixin.getMixin(mixinName); // Initialize blaze default compositions

        mixin.init(template, data, appliedCommon, ['onCreated', 'onRendered', 'onDestroyed', 'events', 'helpers']); // Execute some behaviors after all mixins are applied

        mixin.init(template, data, appliedOnMixins, ['onMixins']);
      });
    }

    return initAll;
  }(); // Get a mixin by name


  Mixin.getMixin = function () {
    function getMixin(mixinName) {
      // Get the mixin from mixins object
      var mixin = OHIF.mixins[mixinName]; // Throw an error if the mixin does not exists

      if (!mixin) {
        throw new Error("Mixin " + mixinName + " not found.");
      } // Return the found mixin


      return mixin;
    }

    return getMixin;
  }();

  return Mixin;
}(); // Store the Mixin class inside the shared OHIF object


OHIF.Mixin = Mixin;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/template.js                                                               //
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
// Create a new custom template for the base component
Template.baseComponent = new Template('baseComponent', function () {}); // Inject some custom behaviors in the  view's construction function

Template.baseComponent.constructView = function (contentFunc, elseFunc) {
  // Get the data passed to the template
  var data = Template.currentData();

  if (!data) {
    return;
  } // Check the base template. If it's not informed set as the custom base


  data.base || (data.base = 'baseCustom'); // Get the base template object

  var baseTemplate = Template[data.base]; // Throw an error if the base template does not exists

  if (!baseTemplate) {
    throw new Error("Template " + data.base + " not found.");
  } // Declare the template object and name it as base name + 'Component'


  var template = OHIF.blaze.cloneTemplate(baseTemplate, data.base + 'Component'); // Extract the render function from the base template

  template.renderFunction = baseTemplate.renderFunction; // Init the data manipulation mixins

  OHIF.Mixin.initData(data); // Create and fill a list of wrappers that will enclose the component

  var wrappers = [];

  if (data.wrappers) {
    var wrappersList = data.wrappers.split(' ');

    _.each(wrappersList, function (wrapper) {
      return wrapper && wrappers.push(wrapper);
    });
  } // Declare a variable to store the wrapper instances that will be rendered


  var wrapperInstances = []; // Declare the content function to render the component

  var contentFunction = function () {
    // Create the most inner content function
    var innerContentFunction = function () {
      // Return the view instance
      return template.constructView(contentFunc, elseFunc);
    }; // Assign properties to all wrappers after template's creation


    template.onCreated(function () {
      var instance = Template.instance(); // create the base structure to aplly specific component mixins

      instance.component = new OHIF.Component(instance); // Assign the template most outer wrapper

      instance.wrapper = wrapperInstances[0] || instance; // Iterate over all wrappers and assign the component to them

      wrapperInstances.forEach(function (wrapperInstance) {
        wrapperInstance.component = instance.component;
      });
    }); // Apply the mixins to the component

    OHIF.Mixin.initAll(template, data); // Return the recursive function for wrappers

    return Blaze.With(data, innerContentFunction);
  };

  var wrapper;

  var _loop = function () {
    // Get the wrapper template
    var wrapperTemplate = Template[wrapper]; // Throw an error if the wrapper template does not exists

    if (!wrapperTemplate) {
      throw new Error("Template " + wrapper + " not found.");
    } // Clone the wrapper template to avoid assigning duplicated handlers


    var currentTemplate = OHIF.blaze.cloneTemplate(wrapperTemplate); // Store the child content function to render it inside the wrapper

    var childContentFunction = contentFunction; // Create a function that will enable the recursion for wrappers

    var enclosingContentFunction = function () {
      // Add the current wrapper's instance to the wrapper instances list
      currentTemplate.onCreated(function () {
        return wrapperInstances.push(Template.instance());
      }); // Return the wrapper view instance with its child as content

      return currentTemplate.constructView(childContentFunction, elseFunc);
    }; // Replace the content function enclosing it recursively


    contentFunction = function () {
      return Blaze.With(data, enclosingContentFunction);
    };
  };

  while (wrapper = wrappers.shift()) {
    _loop();
  }

  return contentFunction(contentFunc, elseFunc);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mixins":{"action.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixins/action.js                                                          //
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
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 2);

/*
 * action: controls an element that will trigger some form API's method
 */
OHIF.mixins.action = new OHIF.Mixin({
  dependencies: 'formItem',
  composition: {
    onRendered: function () {
      var instance = Template.instance();
      var component = instance.component; // Add the form-action identification class

      component.$element.addClass('form-action');
    },
    events: {
      'click .form-action': function (event, instance) {
        event.preventDefault();
        var component = instance.component; // Extract action, disabled state and params

        var action = instance.data.action;
        var params = instance.data.params ? instance.data.params : event; // Set the focus back to the input that triggered the click with Enter key

        var $focused = $(':focus');

        var applyFocus = function () {
          if ($focused[0] && event.currentTarget !== $focused[0]) {
            setTimeout(function () {
              return $focused.focus();
            });
          }
        }; // Stop here if the component is disabled


        if (component.$element.hasClass('disabled')) return; // Get the current component's API

        var api = component.getApi();

        if (typeof action === 'function') {
          // Call the action if it's a function
          component.actionResult = action.call(event.currentTarget, params, event);
        } else if (!api || !action || typeof api[action] !== 'function') {
          // Stop here if no API or action was defined
          return true;
        } else {
          // Call the defined action function
          component.actionResult = api[action].call(event.currentTarget, params, event);
        } // Prepend a spinner into the action element content if it's a promise


        if (component.actionResult instanceof Promise) {
          var form = component.getForm();
          form.disable(true);
          var $spinner = $('<i class="fa fa-spin fa-circle-o-notch fa-fw m-r"></i>');
          component.$element.prepend($spinner);

          var finishAction = function () {
            $spinner.remove();
            form.disable(false);
            applyFocus();
          };

          component.actionResult.then(finishAction).catch(finishAction);
        } else {
          applyFocus();
        }
      }
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"button.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixins/button.js                                                          //
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

/*
 * button: controls a button
 */
OHIF.mixins.button = new OHIF.Mixin({
  dependencies: 'formItem',
  composition: {
    onRendered: function () {
      var instance = Template.instance();
      var component = instance.component; // Set the element to be controlled

      component.$element = instance.$('button').first();
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"checkbox.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixins/checkbox.js                                                        //
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

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 2);

/*
 * inputCheckbox: controls a checkbox input
 */
OHIF.mixins.checkbox = new OHIF.Mixin({
  dependencies: 'input',
  composition: {
    onCreated: function () {
      var instance = Template.instance();
      var component = instance.component; // Get or set the checked state using jQuery's prop method

      component.value = function (value) {
        var isGet = _.isUndefined(value);

        if (isGet) {
          return component.parseData(component.$element.is(':checked'));
        }

        component.$element.prop('checked', value).trigger('change');
      };
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"component.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixins/component.js                                                       //
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

/*
 * component: base component structure
 */
OHIF.mixins.component = new OHIF.Mixin({
  composition: {}
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dropdown.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixins/dropdown.js                                                        //
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
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 2);
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 3);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 4);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 5);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 6);

/*
 * dropdown: controls a dropdown
 */
OHIF.mixins.dropdown = new OHIF.Mixin({
  dependencies: 'form',
  composition: {
    onRendered: function () {
      var instance = Template.instance();
      var _instance$data$option = instance.data.options,
          event = _instance$data$option.event,
          centered = _instance$data$option.centered,
          marginTop = _instance$data$option.marginTop,
          $parentLi = _instance$data$option.$parentLi,
          reactiveClose = _instance$data$option.reactiveClose; // Get the dropdown element to enable position manipulation

      var $dropdown = instance.$('.dropdown');
      var dropdown = $dropdown[0];
      var $dropdownMenu = $dropdown.children('.dropdown-menu'); // Get the timeout to dismiss the dropdown form

      var dismissTimeout = instance.data.options.dismissTimeout;

      if (_.isUndefined(dismissTimeout)) {
        dismissTimeout = 500;
      } // Set a opening state to the component


      instance.opening = true; // Destroy the Blaze created view (either created with template calls or with renderWithData)

      instance.destroyView = function () {
        var destroyHandle = function () {
          if (typeof instance.data.destroyView === 'function') {
            instance.data.destroyView();
          } else {
            Blaze.remove(instance.view);
          }
        };

        var timeout = setTimeout(destroyHandle, dismissTimeout);
        $dropdownMenu.one('transitionend', function () {
          destroyHandle();
          clearTimeout(timeout);
        });
        $dropdown.removeClass('open');
      }; // Destroy the view when the promise is fullfilled


      instance.data.promise.then(instance.destroyView, instance.destroyView); // Close submenu if exists

      instance.closeSubmenu = function (focusSelf) {
        if (instance.reactiveClose) {
          if (focusSelf) {
            $(instance.lastSubmenu).focus();
          }

          instance.reactiveClose.set(true);
          delete instance.reactiveClose;
          delete instance.lastSubmenu;
        }
      }; // Close the dropdown resolving or rejecting the promise


      instance.close = function (isResolve, result) {
        var method = instance.data[isResolve ? 'promiseResolve' : 'promiseReject'];
        var param = result instanceof Promise ? null : result;
        method(param);
        instance.closeSubmenu(false);
        instance.closed = true;
      }; // Close the dropdown if the reactiveClose suffered changes


      if (reactiveClose) {
        instance.autorun(function () {
          var isClosed = reactiveClose.get();
          if (!isClosed) return;
          instance.close(false);
        });
      } // Stop here and destroy the view if no items was given


      if (!instance.data.items.length) {
        return instance.close(false);
      }

      dropdown.oncontextmenu = function () {
        return false;
      };

      var cssBefore = {};

      if (event) {
        cssBefore.position = 'fixed';
        $dropdownMenu.bounded();
      }

      if (marginTop) {
        cssBefore['margin-top'] = marginTop;
      }

      $dropdownMenu.css(cssBefore); // Postpone visibility change to allow CSS transitions

      Meteor.defer(function () {
        // Show the dropdown and focus the first option
        $dropdown.addClass('open').find('a:first').focus(); // Add a handler to change the opening state

        $dropdownMenu.one('transitionend', function (event) {
          instance.opening = false;
        }); // Change the dropdown position if mouse event was given

        if (event) {
          var originalEventTouches = event.originalEvent && event.originalEvent.touches;
          var position = {
            left: 0,
            top: 0
          };

          if (originalEventTouches && originalEventTouches.length > 0) {
            position.left = originalEventTouches[0].pageX;
            position.top = originalEventTouches[0].pageY;
          } else {
            position.left = event.clientX;
            position.top = event.clientY;
          }

          if (centered) {
            // Center the dropdown menu based on the event mouse position
            position.left -= $dropdownMenu.outerWidth() / 2;
            position.top -= $dropdownMenu.outerHeight() / 2;
          } else if ($parentLi) {
            // Change the dropdown menu position based on the parent menu item
            var $parentDm = $parentLi.closest('.dropdown-menu');
            var dmWidth = $dropdownMenu.outerWidth();
            var pdmWidth = $parentDm.outerWidth();
            var pdmOffset = $parentDm.offset();
            var pliOffset = OHIF.ui.getOffset($parentLi[0]);
            Object.assign(position, {
              left: pdmWidth + pdmOffset.left,
              top: pliOffset.top
            }); // Check if the element position is going beyond the window right boundary

            var rightToLeft = false;

            if (position.left < pdmOffset.left + pdmWidth || position.left > document.body.clientWidth - dmWidth) {
              position.left -= pdmWidth + $dropdownMenu.outerWidth();
              rightToLeft = true;
            }

            var menuClass = rightToLeft ? 'origin-top-right' : 'origin-top-left';
            $dropdownMenu.addClass(menuClass);
          } // Fix dropdown position if it is going outside the window boundaries


          $dropdownMenu.css(position).trigger('spatialChanged'); // Check if scrolling will be needed

          var isFixed = $dropdownMenu.css('position') === 'fixed';

          if (isFixed && $dropdownMenu.outerHeight() > window.innerHeight) {
            $dropdownMenu.css({
              'overflow-y': 'scroll',
              'max-height': window.innerHeight
            });
          }
        }
      });
    },
    events: {
      'click .form-action': function (event, instance) {
        var $target = $(event.currentTarget);
        var isDisabled = $target.hasClass('disabled');

        if (isDisabled) {
          instance.close(false);
        } else {
          var component = $target.data('component');
          instance.close(true, component.actionResult);
        }
      },
      'mouseenter .form-action, openSubmenu .form-action': function (event, instance) {
        // Postpone the submenu opening if it's still being animated
        if (instance.opening) {
          instance.$('.dropdown-menu').one('transitionend', function (event) {
            $(event.currentTarget).trigger('openSubmenu');
          });
          return;
        } // Stop here if dropdown is already closed or event was triggered in child elements


        if (instance.closed || event.target !== event.currentTarget) return; // Close the submenu if a sibling element was hovered

        if (instance.lastSubmenu && instance.lastSubmenu !== event.currentTarget) {
          instance.closeSubmenu(!this.items);
        } // Stop here if submenu is already opened for the current menu item


        if (!this.items || instance.lastSubmenu === event.currentTarget) return; // Close the current opened submenu (if exists) in order to open another one

        instance.closeSubmenu(!this.items); // Set the reactive closing elementcontroller and the last submenu element trigger

        var reactiveClose = new ReactiveVar(false);
        instance.reactiveClose = reactiveClose;
        instance.lastSubmenu = event.currentTarget; // Get the triggering li element and render the submenu

        var $parentLi = $(event.currentTarget).closest('li');
        OHIF.ui.showDropdown(this.items, {
          event: event,
          reactiveClose: instance.reactiveClose,
          $parentLi: $parentLi,
          parentInstance: instance,
          dismissTimeout: instance.data.options && instance.data.options.dismissTimeout
        }).then(instance.data.promiseResolve).catch(function () {});
      },
      'keydown .form-action': function (event, instance) {
        event.stopPropagation();
        var key = event.which;
        var $target = $(event.currentTarget); // Allow navigation using DOWN and UP arrow keys

        if (key === 38 || key === 40) {
          var $parentLi = $target.closest('li');
          var $liList = $parentLi.parent().children();
          var index = $parentLi.index();
          var $newLi;

          if (key === 38) {
            // Control the UP key
            if (index === 0) {
              $newLi = $liList.eq($liList.length - 1);
            } else {
              $newLi = $parentLi.prev();
            }
          } else {
            // Control the DOWN key
            if (index === $liList.length - 1) {
              $newLi = $liList.eq(0);
            } else {
              $newLi = $parentLi.next();
            }
          } // Focus the link inside the new li element


          event.preventDefault();
          $newLi.find('a:first').focus();
          return;
        } // Close the submenu if LEFT, BACKSPACE or ESC key was pressed


        var parentInstance = instance.data.options.parentInstance;

        if (parentInstance && (key === 37 || key === 8 || key === 27)) {
          event.preventDefault();
          return parentInstance.closeSubmenu(true);
        } // Close the dropdown if there's no submenu open and ESC key was pressed


        if (!parentInstance && key === 27) {
          return instance.close(false);
        } // Stop here if it's not a submenu trigger


        if (!this.items) return; // Open the submenu if RIGHT, ENTER or SPACE key was pressed

        if (key === 39 || key === 13 || key === 32) {
          $target.trigger('openSubmenu');
          event.preventDefault();
        }
      },
      'mousedown .dropdown': function (event) {
        // This is required to stop blur event which is fired before click event
        // when a dropdown item is clicked, otherwise click event is not fired
        event.stopPropagation();
      },
      'blur .dropdown': function (event, instance) {
        // Stop here if it's closed or if it's a submenu not being closed
        if (instance.closed) return;
        if (instance.reactiveClose && !instance.reactiveClose.get()) return; // Postpone the execution to enable getting the focused element

        Meteor.defer(function () {
          var $focus = $(':focus'); // Iterate over all parent dropdowns and check if one of them has the focus

          var hasFocus = false;
          var currentInstance = instance;

          do {
            if ($.contains(currentInstance.$('.dropdown')[0], $focus[0])) {
              hasFocus = true;
              break;
            }

            if (!currentInstance.data.options.parentInstance) {
              break;
            } else {
              currentInstance = currentInstance.data.options.parentInstance; // Close the current instance's submenu as it has no focus

              currentInstance.closeSubmenu(false);
            }
          } while (currentInstance); // Close all dropdown levels if it lost the focus


          if (!hasFocus) {
            currentInstance.close(false);
          }
        });
      }
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"form.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixins/form.js                                                            //
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
var Tracker;
module.watch(require("meteor/tracker"), {
  Tracker: function (v) {
    Tracker = v;
  }
}, 2);
var Spacebars;
module.watch(require("meteor/spacebars"), {
  Spacebars: function (v) {
    Spacebars = v;
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

/*
 * form: controls a form and its registered inputs
 */
OHIF.mixins.form = new OHIF.Mixin({
  dependencies: 'group',
  composition: {
    onCreated: function () {
      var instance = Template.instance();
      var component = instance.component; // Set the form identifier flag

      component.isForm = true; // Set the form validated flag

      component.isValidatedAlready = false;
      component.validationObserver = new Tracker.Dependency(); // Reset the pathKey

      instance.data.pathKey = ''; // Debound the observer call to prevent tons of re-rendering

      component.validationRan = _.throttle(function () {
        // Enable reactivity by changing a Tracker.Dependency observer
        component.validationObserver.changed();
      }, 200); // Change the validation function to focus the fields with error

      var validateSelf = component.validate;

      component.validate = function () {
        // Call the original validation function
        var validationResult = validateSelf(); // Change the form validated flag to true

        component.isValidatedAlready = true; // Focus the first error field if some validation failed

        if (component.schema && component.schema._invalidKeys.length) {
          Tracker.afterFlush(function () {
            return instance.$('.state-error :input:first').focus();
          });
        }

        return validationResult;
      };
    },
    onRendered: function () {
      var instance = Template.instance();
      var component = instance.component; // Set the component main and style elements

      component.$style = component.$element = instance.$('form').first(); // Block page redirecting on submit

      component.$element[0].onsubmit = function () {
        return false;
      };
    },
    events: {
      'click .validation-error-container a': function (event, instance) {
        // Get the target key
        var targetKey = $(event.currentTarget).attr('data-target'); // Focus the first input inside the element with error state

        instance.$(".state-error[data-key=\"" + targetKey + "\"]").find(':input:first').focus();
      }
    },
    helpers: {
      validationErrors: function () {
        var instance = Template.instance();
        var component = instance.component; // Create a dependency on child components validation

        component.validationObserver.depend(); // Stop here if no schema was defined for the form

        if (!component.schema) {
          return;
        } // Check if there were some validation errors


        if (component.schema._invalidKeys.length) {
          var result = []; // Iterate over each validation error and add to result

          component.schema._invalidKeys.forEach(function (item) {
            var label = component.schema._schema[item.name].label;
            var message = component.schema.keyErrorMessage(item.name);
            message = message.replace(label, "<strong>" + label + "</strong>");
            result.push({
              key: item.name,
              message: Spacebars.SafeString(message)
            });
          }); // Return the resulting validation errors


          return result;
        }
      }
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"formItem.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixins/formItem.js                                                        //
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
var Tracker;
module.watch(require("meteor/tracker"), {
  Tracker: function (v) {
    Tracker = v;
  }
}, 2);
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
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

/*
 * formItem: create a generic controller for form items
 * It may be used to manage all components that belong to forms
 */
OHIF.mixins.formItem = new OHIF.Mixin({
  dependencies: 'schemaData',
  composition: {
    onCreated: function () {
      var instance = Template.instance();
      var component = instance.component; // Create a observer to monitor changed values

      component.changeObserver = new Tracker.Dependency(); // Register the component in the parent component

      component.registerSelf(); // Declare the component elements that will be manipulated

      component.$element = $();
      component.$style = $();
      component.$wrapper = $(); // Get or set the component's value using jQuery's val method

      component.value = function (value) {
        var isGet = _.isUndefined(value);

        if (isGet) {
          return component.parseData(component.$element.val());
        } // Deferring the `change` event because it was being triggered before
        // formItem.onMixins execution when a defaultValue was specified. In
        // this case $elem.data('component') code from the event handler was
        // returning `undefined` and breaking the app


        Meteor.defer(function () {
          component.$element.val(value).trigger('change');
        });
      }; // Disable or enable the component


      component.disable = function (isDisable) {
        component.$element.prop('disabled', !!isDisable);
      }; // Set or unset component's readonly property


      component.readonly = function (isReadonly) {
        component.$element.prop('readonly', !!isReadonly);
      }; // Show or hide the component


      component.show = function (isShow) {
        var method = isShow ? 'show' : 'hide';
        component.$wrapper[method]();
      }; // Check if the focus is inside this element


      component.hasFocus = function () {
        // Get the focused element
        var focused = $(':focus')[0]; // Check if the focused element is inside the component

        var contains = $.contains(component.$wrapper[0], focused);
        var isEqual = component.$wrapper[0] === focused; // Return true if he component has the focus

        return contains || isEqual;
      }; // Add or remove a state from the component


      component.state = function (state, flag) {
        component.$wrapper.toggleClass("state-" + state, !!flag);
      }; // Set the component in error state and display the error message


      component.error = function (errorMessage) {
        // Set the component error state
        component.state('error', !!errorMessage); // Set or remove the error message

        if (errorMessage) {
          component.$wrapper.attr('data-error', errorMessage);
        } else {
          component.$wrapper.removeAttr('data-error', errorMessage);
        }
      }; // Toggle the tooltip over the component


      component.toggleTooltip = function (isShow, message) {
        if (isShow && message) {
          var tooltipId = component.$wrapper.attr('aria-describedby');
          var $tooltip = $(document.getElementById(tooltipId));

          if ($tooltip.length) {
            // Change the message if the tooltip is already created
            $tooltip.find('.tooltip-inner').text(message);
          } else {
            // Destroy the tooltip if already created, creating it again
            component.$wrapper.tooltip('destroy').tooltip({
              trigger: 'manual',
              title: message
            }).tooltip('show');
          }
        } else {
          // Destroy the tooltip
          component.$wrapper.tooltip('destroy');
        }
      }; // Toggle a state message as a tooltip over the component


      component.toggleMessage = function (isShow) {
        // Check if the action is to hide
        if (!isShow) {
          Meteor.setTimeout(function () {
            // Check if the component has the focus
            if (component.hasFocus()) {
              // Prevent the tooltip from being hidden
              return;
            } // Hide the tooltip


            component.toggleTooltip(false);
          }, 100);
          return;
        } // Check for error state and message


        var errorMessage = component.$wrapper.attr('data-error');

        if (errorMessage) {
          // Show the tooltip with the error message
          component.toggleTooltip(true, errorMessage);
        }
      }; // Search for the parent form component


      component.getForm = function () {
        var currentComponent = component;

        while (currentComponent) {
          currentComponent = currentComponent.parent;

          if (currentComponent && currentComponent.isForm) {
            return currentComponent;
          }
        }
      }; // Get the current component API


      component.getApi = function () {
        var api = instance.data.api; // Check if the API was not given

        if (!api) {
          // Stop here if the component is form and API was not given
          if (component.isForm) {
            return;
          } // Get the current component's form


          var form = component.getForm(); // Stop here if the component has no form

          if (!form) {
            return;
          }

          return form.getApi();
        } // Return the given API


        return api;
      }; // Check if the component value is valid in its form's schema


      component.validate = function () {
        var _OHIF$object$getNeste;

        // Get the component's form
        var form = component.getForm(); // Get the form's data schema

        var schema = form && form.schema; // Get the current component's key

        var key = instance.data.pathKey; // Return true if validation is not needed

        if (!key || !schema || !component.$wrapper.is(':visible')) {
          return true;
        } // Create the data document for validation


        var document = OHIF.object.getNestedObject((_OHIF$object$getNeste = {}, _OHIF$object$getNeste[key] = component.value(), _OHIF$object$getNeste)); // Get the validation result

        var validationResult = schema.validateOne(document, key); // Notify the form that the validation ran

        form.validationRan(); // Check if the document validation failed

        if (!validationResult) {
          // Set the component in error state and display the message
          component.error(schema.keyErrorMessage(key)); // Return false for validation

          return false;
        } // Remove the component error state and message


        component.error(false); // Return true for validation

        return true;
      };

      component.depend = function () {
        return component.changeObserver.depend();
      }; // Click the first submit (or first button if submit not found) button on closest form


      component.triggerFormMainButton = function () {
        var $form = component.$element.closest('form');
        var $formButton = $form.find('button[type=submit]:first');

        if (!$formButton.length) {
          $formButton = $form.find('button:first');
        }

        $formButton.click();
      };
    },
    onRendered: function () {
      var instance = Template.instance();
      var component = instance.component; // Set the element to be controlled

      component.$element = instance.$(':input').first(); // Set the most outer wrapper element

      component.$wrapper = instance.wrapper.$('*').first(); // Add the pathKey to the wrapper element

      component.$wrapper.attr('data-key', instance.data.pathKey); // Get the component's form

      var form = component.getForm(); // Observer for changes and revalidate the component

      instance.autorun(function (computation) {
        component.changeObserver.depend(); // Stop here if it is the first run

        if (computation.firstRun) return; // Revalidate the component if form is already validated

        if (form && form.isValidatedAlready) {
          component.validate();
        }
      });
    },
    onDestroyed: function () {
      var instance = Template.instance();
      var component = instance.component; // Get the component's form for further use

      var form = component.getForm(); // Unregister the component in the parent component

      component.unregisterSelf(); // Remove the component tooltip, error state and message

      component.error(false);
      component.toggleTooltip(false); // Revalidate the form to remove this component from validation results

      if (form && form.isValidatedAlready) {
        form.validate();
      }
    },
    onMixins: function () {
      var instance = Template.instance();
      var component = instance.component; // If no style element was defined, set it as the element itself

      if (!component.$style.length) {
        component.$style = component.$element;
      } // Set the component in element and wrapper jQuery data


      component.$element.data('component', component);
      component.$wrapper.data('component', component);
    },
    events: {
      // Handle the change event for the component
      change: function (event, instance) {
        var component = instance.component; // Prevent execution on upper components

        if (event.currentTarget === component.$element[0]) {
          // Enable reactivity by changing a Tracker.Dependency observer
          component.changeObserver.changed();
        }
      },
      focus: function (event, instance) {
        var component = instance.component;
        var isGroupOrCustomFocus = component.isGroup || component.isCustomFocus;
        var isSameTarget = event.target === event.currentTarget;

        if (!isGroupOrCustomFocus && isSameTarget) {
          // Check for state messages and show it
          component.toggleMessage(true);
        }
      },
      blur: function (event, instance) {
        var component = instance.component;
        var isGroupOrCustomFocus = component.isGroup || component.isCustomFocus;
        var isSameTarget = event.target === event.currentTarget;

        if (!isGroupOrCustomFocus && isSameTarget) {
          // Check for state messages and show it
          component.toggleMessage(false);
        }
      }
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"group.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixins/group.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

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

/*
 * group: controls a group and its registered items
 */
OHIF.mixins.group = new OHIF.Mixin({
  dependencies: 'formItem',
  composition: {
    onCreated: function () {
      var instance = Template.instance();
      var component = instance.component; // Set the group identifier flag

      component.isGroup = true; // Run this computation every time the schema property is changed

      instance.autorun(function () {
        var schema = instance.data.schema; // Check if the schema is reactive

        if (schema instanceof ReactiveVar) {
          // Register a dependency on schema property
          schema = schema.get();
        } // Set the form's data schema


        component.schema = schema && schema.newContext();
      }); // Get or set the child components values

      component.value = function (value) {
        var isGet = _.isUndefined(value);

        var isArray = instance.data.arrayValues; // Create the result data as array or object

        var result = isArray ? [] : {}; // Get the group current value and return it

        if (isGet) {
          // Iterate over each registered item and extract its value
          component.registeredItems.forEach(function (child) {
            // Check if it is an array or an object group
            if (isArray) {
              // Get the mixins array
              var mixins = child.templateInstance.data.mixins.split(' '); // Prevent reading action components

              if (mixins.indexOf('action') > -1) return; // Push the item value to the result array

              result.push(child.value());
            } else {
              // Get the item key
              var key = child.templateInstance.data.key; //Check if a key is set for the item

              if (key) {
                // Add the item value to the result object
                result[key] = child.value();
              }
            }
          }); // Return the resulting data as array or object

          return result;
        } // Get the group current value


        var groupValue = (0, _typeof2.default)(value) === 'object' ? value : result; // Stop here if there is no value defined for this group

        if (!groupValue) {
          return;
        } // Iterate over each registered item and set its value


        var i = 0;
        component.registeredItems.forEach(function (child) {
          var mixins = child.templateInstance.data.mixins.split(' '); // Prevent reading action components

          if (isArray && mixins.indexOf('action') > -1) return;
          var key = isArray ? i : child.templateInstance.data.key;
          var childValue = _.isUndefined(groupValue[key]) ? null : groupValue[key];
          child.value(childValue);
          i++;
        }); // Trigger the change event after setting the new value

        component.$element.trigger('change');
      }; // Get a registered item in form by its key


      component.item = function (itemKey) {
        var found; // Iterate over each registered form item

        component.registeredItems.forEach(function (child) {
          var key = child.templateInstance.data.key; // Change the found item if current key is the same as given

          if (key === itemKey) {
            found = child;
          }
        }); // Return the found item or undefined if it was not found

        return found;
      }; // Check if the form data is valid in its schema


      var validateSelf = component.validate;

      component.validate = function () {
        // Assume validation result as true
        var result = true; // Return true if there's no data schema defined

        if (component.isForm && !component.schema) {
          return result;
        } // Reset the validation


        var schema = component.isForm ? component.schema : component.getForm().schema;
        schema.resetValidation(); // Validate the component itself if it has a key

        if (instance.data.pathKey && !validateSelf()) {
          result = false;
        } // Iterate over each registered form item and validate it


        component.registeredItems.forEach(function (child) {
          var key = child.templateInstance.data.key; // Change result to false if any form item is invalid

          if ((key || instance.data.arrayValues) && !child.validate()) {
            result = false;
          }
        }); // Return the validation result

        return result;
      }; // Disable or enable the component


      component.disable = function (isDisable) {
        component.registeredItems.forEach(function (child) {
          return child.disable(isDisable);
        });
      }; // Set or unset component's readonly property


      component.readonly = function (isReadonly) {
        component.registeredItems.forEach(function (child) {
          return child.readonly(isReadonly);
        });
      };
    },
    onRendered: function () {
      var instance = Template.instance();
      var component = instance.component; // Set the element to be controlled

      component.$element = instance.$('.component-group').first();
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"groupRadio.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixins/groupRadio.js                                                      //
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

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 2);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 3);

/*
 * groupRadio: controls all the radio inputs inside the group
 */
OHIF.mixins.groupRadio = new OHIF.Mixin({
  dependencies: 'group',
  composition: {
    onCreated: function () {
      var instance = Template.instance();
      var component = instance.component; // Get the selected radio's value or select a radio based on value

      component.value = function (value) {
        var isGet = _.isUndefined(value);

        var elements = [];
        component.registeredItems.forEach(function (child) {
          return elements.push(child.$element[0]);
        });
        var $elements = $(elements);

        if (isGet) {
          return component.parseData($elements.filter(':checked').val());
        }

        $elements.filter("[value='" + value + "']").prop('checked', true).trigger('change');
      };
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"input.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixins/input.js                                                           //
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

/*
 * input: controls a basic input
 */
OHIF.mixins.input = new OHIF.Mixin({
  dependencies: 'formItem',
  composition: {
    onRendered: function () {
      var instance = Template.instance();
      var component = instance.component; // Set the element to be controlled

      component.$element = instance.$('input').first();
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"link.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixins/link.js                                                            //
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

/*
 * link: controls a link
 */
OHIF.mixins.link = new OHIF.Mixin({
  dependencies: 'formItem',
  composition: {
    onRendered: function () {
      var instance = Template.instance();
      var component = instance.component; // Set the element to be controlled

      component.$element = instance.$('a').first();
    },
    events: {
      'click a': function (event, instance) {
        if (instance.data.action) {
          event.preventDefault();
        }
      }
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"popover.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixins/popover.js                                                         //
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

/*
 * popover: controls a popover
 */
OHIF.mixins.popover = new OHIF.Mixin({
  dependencies: 'form',
  composition: {
    onRendered: function () {
      var instance = Template.instance();
      instance.$form = instance.$('form').first();
      instance.$form.find(':input:first').focus();
    },
    events: {
      'blur form': function (event, instance) {
        Meteor.defer(function () {
          var $focus = $(':focus');

          if (!$.contains(instance.$form[0], $focus[0])) {
            instance.data.promiseReject();
          }
        });
      },
      'click .btn-cancel': function (event, instance) {
        event.stopPropagation();
        instance.data.promiseReject();
      },
      'click .btn-confirm': function (event, instance) {
        event.stopPropagation();
        var form = instance.$('form').data('component');
        instance.data.promiseResolve(form.value());
      }
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schemaData.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixins/schemaData.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
  }
}, 1);
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 2);
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 3);
var Tracker;
module.watch(require("meteor/tracker"), {
  Tracker: function (v) {
    Tracker = v;
  }
}, 4);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 5);

// Helper function to get the component's current schema
var getCurrentSchemaDefs = function (parentComponent, key) {
  // Get the parent component schema
  var schema = parentComponent && parentComponent.schema;
  var schemaComponentHolder = parentComponent; // Try to get the form schema if it was not found

  if (parentComponent && !schema) {
    var form = parentComponent.getForm();
    schema = form && form.schema;
    schemaComponentHolder = form;
  } // Stop here if there's no key or schema defined


  if (!key || !schema) {
    return {
      schemaComponentHolder: schemaComponentHolder
    };
  } // Get the current schema data using component's key


  var currentSchema = _.clone(schema._schema[key]); // Stop here if no schema was found for the given key


  if (!currentSchema) {
    return {
      schemaComponentHolder: schemaComponentHolder
    };
  } // Merge the sub-schema properties if it's an array


  if (Array.isArray(currentSchema.type())) {
    _.extend(currentSchema, schema._schema[key + '.$']);
  } // Return the component's schema definitions


  return {
    currentSchema: currentSchema,
    schemaComponentHolder: schemaComponentHolder
  };
};
/*
 * schemaData: change the component data based on its form's schema data
 */


OHIF.mixins.schemaData = new OHIF.Mixin({
  dependencies: 'component',
  composition: {
    onData: function () {
      // Get the current template data
      var data = Template.currentData(); // Get the parent component

      var parent = OHIF.blaze.getParentComponent(Blaze.currentView); // Get he parent component key

      var parentKey = parent && parent.templateInstance.data.pathKey; // Check if the parent is an array group

      var isParentArray = parent && parent.templateInstance.data.arrayValues; // Set the path key for this component

      data.pathKey = data.key || (isParentArray ? '$' : '');

      if (data.pathKey && typeof parentKey === 'string') {
        var prefix = parentKey ? parentKey + "." : '';
        data.pathKey = "" + prefix + data.pathKey;
      } // Get the current schema data using component's key


      var _getCurrentSchemaDefs = getCurrentSchemaDefs(parent, data.pathKey),
          currentSchema = _getCurrentSchemaDefs.currentSchema; // Stop here if there's no schema data for current key


      if (!currentSchema) {
        return;
      } // Use schema's label if it was not defined


      if (!data.label) {
        data.label = new ReactiveVar(currentSchema.label);
      } // Set the min value


      if (_.isUndefined(data.min) && currentSchema.min) {
        data.min = currentSchema.min;
      } // Set the max value


      if (_.isUndefined(data.max) && currentSchema.max) {
        data.max = currentSchema.max;
      } // Set the emptyOption data attribute if given on schema


      if (currentSchema.emptyOption) {
        data.emptyOption = currentSchema.emptyOption;
      } // Fill the items if it's an array schema


      if (!data.items && Array.isArray(currentSchema.allowedValues)) {
        data.items = data.items instanceof ReactiveVar ? data.items : new ReactiveVar();
        Tracker.autorun(function () {
          var schemaDefs = getCurrentSchemaDefs(parent, data.pathKey); // Check if schema is reactive and add reactivity to this function if so

          var componentHolder = schemaDefs.schemaComponentHolder;

          if (componentHolder.templateInstance.data.schema instanceof ReactiveVar) {
            componentHolder.templateInstance.data.schema.dep.depend();
          } // Get the values and labels arrays from schema


          var values = schemaDefs.currentSchema.allowedValues;
          var labels = schemaDefs.currentSchema.valuesLabels || []; // Initialize the items array

          var items = []; // Iterate the allowed values array

          for (var i = 0; i < values.length; i++) {
            // Push the current item to the items array
            items.push({
              value: values[i],
              label: labels[i] || values[i]
            });
          } // Add the items to a reactive instance


          data.items.set(items);
        });
      }
    },
    onCreated: function () {
      var instance = Template.instance();
      var component = instance.component; // Create a data parser according to current schema key

      component.parseData = function (value) {
        // Get the current schema data using component's key
        var _getCurrentSchemaDefs2 = getCurrentSchemaDefs(component.parent, instance.data.pathKey),
            currentSchema = _getCurrentSchemaDefs2.currentSchema;

        var dataType = instance.data.dataType; // Stop here if there's no schema data for current key or no dataType defined

        if (!currentSchema && !dataType) {
          return value;
        } // Get the schema type


        var schemaType = currentSchema && currentSchema.type; // Check if the type is Number

        if (schemaType === Number || dataType === 'Number') {
          return parseFloat(value);
        } // Check if the type is Boolean


        if (schemaType === Boolean || dataType === 'Boolean') {
          return !!value;
        } // Return the original value if none of the checks matched


        return value;
      };
    },
    onMixins: function () {
      var instance = Template.instance();
      var component = instance.component; // Get the current schema data using component's key

      var _getCurrentSchemaDefs3 = getCurrentSchemaDefs(component.parent, instance.data.pathKey),
          currentSchema = _getCurrentSchemaDefs3.currentSchema; // Stop here if there's no schema data for current key


      if (!currentSchema) {
        return;
      } // Fill the component with its default value after rendering


      if (!_.isUndefined(currentSchema.defaultValue)) {
        component.defaultValue = currentSchema.defaultValue;
        component.value(currentSchema.defaultValue);
      }
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"select.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixins/select.js                                                          //
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

/*
 * input: controls a basic select
 */
OHIF.mixins.select = new OHIF.Mixin({
  dependencies: 'formItem',
  composition: {
    onRendered: function () {
      var instance = Template.instance();
      var component = instance.component; // Set the element to be controlled

      component.$element = instance.$('select').first();
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"select2.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/mixins/select2.js                                                         //
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

/*
 * input: controls a select2 component
 */
OHIF.mixins.select2 = new OHIF.Mixin({
  dependencies: 'select',
  composition: {
    onCreated: function () {
      var instance = Template.instance();
      var component = instance.component,
          data = instance.data; // Controls select2 initialization

      instance.isInitialized = false; // Set the custom focus flag

      component.isCustomFocus = true;
      var valueMethod = component.value;

      component.value = function (value) {
        if (_.isUndefined(value) && !instance.isInitialized) {
          if (!_.isUndefined(instance.data.value)) return instance.data.value;
          if (!_.isUndefined(component.defaultValue)) return component.defaultValue;
          return;
        }

        return valueMethod(value);
      }; // Utility function to get the dropdown jQuery element


      instance.getDropdownContainerElement = function () {
        var $select2 = component.$element.nextAll('.select2:first');
        var containerId = $select2.find('.select2-selection').attr('aria-owns');
        return $("#" + containerId).closest('.select2-container');
      }; // Check if this select will include a placeholder


      var placeholder = data.options && data.options.placeholder;

      if (placeholder) {
        instance.autorun(function () {
          // Get the option items
          var items = data.items; // Check if the items are reactive and get them if true

          var isReactive = items instanceof ReactiveVar;

          if (isReactive) {
            items = items.get();
          } // Check if there is already an empty option on items list


          if (!_.findWhere(items, {
            value: ''
          })) {
            // Clone the current items
            var newItems = _.clone(items) || [];
            newItems.unshift({
              label: placeholder,
              value: ''
            }); // Set the new items list including the empty option

            if (isReactive) {
              data.items.set(newItems);
            } else {
              data.items = newItems;
            }
          }
        });
      }
    },
    onRendered: function () {
      var instance = Template.instance();
      var component = instance.component,
          data = instance.data; // Destroy and re-create the select2 instance

      instance.rebuildSelect2 = function () {
        // Destroy the select2 instance if exists and re-create it
        if (component.select2Instance) {
          component.select2Instance.destroy();
        } // Clone the options and check if the select2 should be initialized inside a modal


        var options = _.clone(data.options);

        var $closestModal = component.$element.closest('.modal');

        if ($closestModal.length) {
          options.dropdownParent = $closestModal;
        } // Apply the select2 to the component


        component.$element.select2(options); // Store the select2 instance to allow its further destruction

        component.select2Instance = component.$element.data('select2'); // Get the focusable elements

        var elements = [];
        var $select2 = component.$element.nextAll('.select2:first');
        elements.push(component.$element[0]);
        elements.push($select2.find('.select2-selection')[0]); // Attach focus and blur handlers to focusable elements

        $(elements).on('focus', function (event) {
          instance.isFocused = true;

          if (event.target === event.currentTarget) {
            // Show the state message on elements focus
            component.toggleMessage(true);
          }
        }).on('blur', function (event) {
          instance.isFocused = false;

          if (event.target === event.currentTarget) {
            // Hide the state message on elements blur
            component.toggleMessage(false);
          }
        }); // Redirect keydown events from input to the select2 selection handler

        component.$element.on('keydown ', function (event) {
          event.preventDefault();
          $select2.find('.select2-selection').trigger(event);
        }); // Keep focus on element if ESC was pressed

        $select2.on('keydown ', function (event) {
          if (event.which === 27) {
            instance.component.$element.focus();
          }
        }); // Set select2 as initialized

        instance.isInitialized = true;
      };

      instance.autorun(function () {
        // Run this computation every time the reactive items suffer any changes
        var isReactive = data.items instanceof ReactiveVar;

        if (isReactive) {
          data.items.dep.depend();
        }

        if (isReactive) {
          // Keep the current value of the component
          var currentValue = component.value();
          var wasFocused = instance.isFocused;
          Tracker.afterFlush(function () {
            component.$element.val(currentValue);
            instance.rebuildSelect2();

            if (wasFocused) {
              component.$element.focus();
            }
          });
        } else {
          instance.rebuildSelect2();
        }
      });
    },
    events: {
      // Focus element when selecting a value
      'select2:select': function (event, instance) {
        instance.component.$element.focus();
      },
      // Focus the element when closing the dropdown container using ESC key
      'select2:open': function (event, instance) {
        var minimumResultsForSearch = instance.data.options.minimumResultsForSearch;
        if (minimumResultsForSearch === Infinity || minimumResultsForSearch === -1) return;
        var $container = instance.getDropdownContainerElement();

        if (!instance.data.wrapText) {
          $container.addClass('select2-container-nowrap');
        }

        var $searchInput = $container.find('.select2-search__field');
        $searchInput.on('keydown.focusOnEsc', function (event) {
          if (event.which === 27) {
            $searchInput.off('keydown.focusOnEsc');
            instance.component.$element.focus();
          }
        });
      }
    },
    onDestroyed: function () {
      var instance = Template.instance();
      var component = instance.component; // Destroy the select2 instance to remove unwanted DOM elements

      if (component.select2Instance) {
        component.select2Instance.destroy();
      }
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"section":{"section.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/base/section/section.html                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.section.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.section.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/section/template.section.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("section");
Template["section"] = new Template("Template.section", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("instance"), "sectionData", "get"));
  }, function() {
    return Spacebars.include(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("instance"), "renderFunction", "get"));
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"section.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/section/section.js                                                        //
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
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 3);
Template.section.onCreated(function () {
  var instance = Template.instance(); // Create the render function and section data as reactive objects

  instance.renderFunction = new ReactiveVar(null);
  instance.sectionData = new ReactiveVar(null); // Get the section name

  var sectionName = instance.data; // Stop here if no section name was defined

  if (!sectionName) {
    return;
  } // Get the content block


  var templateContentBlock = instance.view.templateContentBlock; // Get the parent template view of this section block

  var currentView = OHIF.blaze.getParentTemplateView(instance.view); // Check if it is defining or printing the section content

  if (templateContentBlock) {
    // Define a section map for template's view if none was yet set
    if (!currentView._sectionMap) {
      currentView._sectionMap = new Map();
    } // Define the content


    currentView._sectionMap.set(sectionName, {
      data: Object.assign({}, currentView._templateInstance.data),
      renderFunction: templateContentBlock.renderFunction
    });
  } else {
    // Wait for re-rendering and print the section content
    Tracker.afterFlush(function () {
      // Get the defined section's content
      var section = OHIF.blaze.getSectionContent(currentView, sectionName); // Stop here if the section content is not defined

      if (!section) {
        return;
      } // Set the section data on its respective reactive object


      instance.sectionData.set(section.data); // Set the render function on its respective reactive object

      instance.renderFunction.set(new Template(section.renderFunction));
    });
  }
});
Template.registerHelper('hasSection', function (sectionName) {
  return !!OHIF.blaze.getSectionContent(Template.instance().view, sectionName);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"templates":{"button.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/base/templates/button.html                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.button.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.button.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/templates/template.button.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("baseButton");
Template["baseButton"] = new Template("Template.baseButton", (function() {
  var view = this;
  return HTML.BUTTON(HTML.Attrs({
    id: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));
    },
    class: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "class"));
    },
    disabled: function() {
      return Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("."), "disabled"));
      }, function() {
        return "disabled";
      });
    },
    title: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "title"));
    },
    type: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "type"));
    }
  }, function() {
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "tagAttributes"));
  }), "\n        ", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"custom.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/base/templates/custom.html                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.custom.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.custom.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/templates/template.custom.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("baseCustom");
Template["baseCustom"] = new Template("Template.baseCustom", (function() {
  var view = this;
  return Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"div.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/base/templates/div.html                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.div.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.div.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/templates/template.div.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("baseDiv");
Template["baseDiv"] = new Template("Template.baseDiv", (function() {
  var view = this;
  return HTML.DIV(HTML.Attrs({
    id: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));
    },
    class: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "class"));
    }
  }, function() {
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "tagAttributes"));
  }), "\n        ", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"form.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/base/templates/form.html                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.form.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.form.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/templates/template.form.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("baseForm");
Template["baseForm"] = new Template("Template.baseForm", (function() {
  var view = this;
  return HTML.FORM(HTML.Attrs({
    id: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));
    },
    class: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "class"));
    },
    name: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));
    },
    action: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "action"));
    },
    method: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "method"));
    },
    autocomplete: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "autocomplete"));
    },
    enctype: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "enctype"));
    },
    novalidate: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "novalidate"));
    },
    target: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "target"));
    }
  }, function() {
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "tagAttributes"));
  }), "\n        ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("and"), view.lookup("validationErrors"), Spacebars.dataMustache(view.lookup("not"), Spacebars.dot(view.lookup("."), "hideValidationBox")));
  }, function() {
    return [ "\n            ", HTML.DIV({
      class: "validation-error-container alert alert-danger",
      role: "alert"
    }, "\n                ", Blaze.Each(function() {
      return {
        _sequence: Spacebars.call(view.lookup("validationErrors")),
        _variable: "error"
      };
    }, function() {
      return [ "\n                    ", HTML.P(HTML.A({
        href: "#",
        class: "text-danger",
        "data-target": function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("error"), "key"));
        }
      }, Blaze.View("lookup:error.message", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("error"), "message"));
      }))), "\n                " ];
    }), "\n            "), "\n        " ];
  }), "\n        ", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"input.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/base/templates/input.html                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.input.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.input.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/templates/template.input.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("baseInput");
Template["baseInput"] = new Template("Template.baseInput", (function() {
  var view = this;
  return [ HTML.INPUT(HTML.Attrs({
    type: function() {
      return Spacebars.mustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "type"), "text");
    },
    id: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));
    },
    class: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "class"));
    },
    name: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));
    },
    value: function() {
      return Spacebars.mustache(view.lookup("reactive"), Spacebars.dot(view.lookup("."), "value"));
    },
    placeholder: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "placeholder"));
    },
    checked: function() {
      return Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("."), "checked"));
      }, function() {
        return "checked";
      });
    },
    disabled: function() {
      return Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("."), "disabled"));
      }, function() {
        return "disabled";
      });
    },
    min: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "min"));
    },
    max: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "max"));
    },
    maxlength: function() {
      return Spacebars.mustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "maxlength"), Spacebars.dot(view.lookup("."), "max"));
    }
  }, function() {
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "tagAttributes"));
  })), "\n    ", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  }) ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"link.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/base/templates/link.html                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.link.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.link.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/templates/template.link.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("baseLink");
Template["baseLink"] = new Template("Template.baseLink", (function() {
  var view = this;
  return HTML.A(HTML.Attrs({
    id: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));
    },
    class: function() {
      return [ Spacebars.mustache(Spacebars.dot(view.lookup("."), "class")), " ", Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("."), "disabled"));
      }, function() {
        return "disabled";
      }) ];
    },
    href: function() {
      return Spacebars.mustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "href"), "#");
    },
    title: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "title"));
    }
  }, function() {
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "tagAttributes"));
  }), "\n        ", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"select.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/base/templates/select.html                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.select.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.select.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/templates/template.select.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("baseSelect");
Template["baseSelect"] = new Template("Template.baseSelect", (function() {
  var view = this;
  return HTML.SELECT(HTML.Attrs({
    id: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));
    },
    class: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "class"));
    },
    name: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));
    },
    multiple: function() {
      return Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("."), "multiple"));
      }, function() {
        return "multiple";
      });
    },
    disabled: function() {
      return Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("."), "disabled"));
      }, function() {
        return "disabled";
      });
    }
  }, function() {
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "tagAttributes"));
  }), "\n        ", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  }), "\n        ", Blaze._TemplateWith(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));
  }, function() {
    return Spacebars.include(view.lookupTemplate("baseSelectOptions"));
  }), "\n    ");
}));

Template.__checkName("baseSelectOptions");
Template["baseSelectOptions"] = new Template("Template.baseSelectOptions", (function() {
  var view = this;
  return Blaze.Each(function() {
    return {
      _sequence: Spacebars.dataMustache(view.lookup("reactive"), view.lookup(".")),
      _variable: "item"
    };
  }, function() {
    return [ "\n        ", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("item"), "items"));
    }, function() {
      return [ "\n            ", HTML.OPTGROUP({
        label: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "label"));
        }
      }, "\n                ", Blaze._TemplateWith(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("item"), "items"));
      }, function() {
        return Spacebars.include(view.lookupTemplate("baseSelectOptions"));
      }), "\n            "), "\n        " ];
    }, function() {
      return [ "\n            ", HTML.OPTION({
        value: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "value"));
        },
        selected: function() {
          return Blaze.If(function() {
            return Spacebars.dataMustache(view.lookup("eq"), Spacebars.dot(view.lookup("item"), "value"), Spacebars.dataMustache(view.lookup("reactive"), Spacebars.dot(view.lookup("."), "value")));
          }, function() {
            return "selected";
          });
        }
      }, Blaze.View("lookup:item.label", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "label"));
      })), "\n        " ];
    }), "\n    " ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tr.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/base/templates/tr.html                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.tr.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.tr.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/templates/template.tr.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("baseTr");
Template["baseTr"] = new Template("Template.baseTr", (function() {
  var view = this;
  return HTML.TR(HTML.Attrs({
    id: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));
    },
    class: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "class"));
    }
  }, function() {
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "tagAttributes"));
  }), "\n        ", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"wrappers":{"label.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/base/wrappers/label.html                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.label.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.label.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/wrappers/template.label.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("wrapperLabel");
Template["wrapperLabel"] = new Template("Template.wrapperLabel", (function() {
  var view = this;
  return Blaze.Unless(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("."), "labelAsDiv"));
  }, function() {
    return [ "\n        ", HTML.LABEL(HTML.Attrs({
      class: function() {
        return [ "wrapperLabel ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "labelClass")) ];
      }
    }, function() {
      return Spacebars.attrMustache(view.lookup("clone"), Spacebars.dot(view.lookup("."), "labelTagAttributes"));
    }), "\n            ", Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
        labelAfter: true
      }));
    }, function() {
      return Spacebars.include(view.lookupTemplate("wrapperLabelContent"), function() {
        return [ "\n                ", Blaze._InOuterTemplateScope(view, function() {
          return Spacebars.include(function() {
            return Spacebars.call(view.templateContentBlock);
          });
        }), "\n            " ];
      });
    }), "\n        "), "\n    " ];
  }, function() {
    return [ "\n        ", HTML.DIV(HTML.Attrs({
      class: function() {
        return [ "wrapperLabel ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "labelClass")) ];
      }
    }, function() {
      return Spacebars.attrMustache(view.lookup("clone"), Spacebars.dot(view.lookup("."), "labelTagAttributes"));
    }), "\n            ", Spacebars.include(view.lookupTemplate("wrapperLabelContent"), function() {
      return [ "\n                ", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n            " ];
    }), "\n        "), "\n    " ];
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"labelContent.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/base/wrappers/labelContent.html                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.labelContent.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.labelContent.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/base/wrappers/template.labelContent.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("wrapperLabelContent");
Template["wrapperLabelContent"] = new Template("Template.wrapperLabelContent", (function() {
  var view = this;
  return [ Blaze.If(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("."), "labelAfter"));
  }, function() {
    return [ "\n        ", Blaze._InOuterTemplateScope(view, function() {
      return Spacebars.include(function() {
        return Spacebars.call(view.templateContentBlock);
      });
    }), "\n    " ];
  }), "\n    ", HTML.SPAN({
    class: "wrapperText"
  }, Blaze._TemplateWith(function() {
    return "labelBeforeText";
  }, function() {
    return Spacebars.include(view.lookupTemplate("section"));
  }), Blaze.View("lookup:reactive", function() {
    return Spacebars.mustache(view.lookup("reactive"), Spacebars.dot(view.lookup("."), "label"));
  }), Blaze._TemplateWith(function() {
    return "labelAfterText";
  }, function() {
    return Spacebars.include(view.lookupTemplate("section"));
  })), "\n    ", Blaze.Unless(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("."), "labelAfter"));
  }, function() {
    return [ "\n        ", Blaze._InOuterTemplateScope(view, function() {
      return Spacebars.include(function() {
        return Spacebars.call(view.templateContentBlock);
      });
    }), "\n    " ];
  }) ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"bootstrap":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/index.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./dialog/confirm.html"));
module.watch(require("./dialog/form.html"));
module.watch(require("./dialog/form.js"));
module.watch(require("./dialog/header.html"));
module.watch(require("./dialog/info.html"));
module.watch(require("./dialog/info.js"));
module.watch(require("./dialog/loading.html"));
module.watch(require("./dialog/loading.js"));
module.watch(require("./dialog/login.html"));
module.watch(require("./dialog/login.js"));
module.watch(require("./dialog/progress.html"));
module.watch(require("./dialog/progress.js"));
module.watch(require("./dialog/simple.html"));
module.watch(require("./dialog/simple.js"));
module.watch(require("./dialog/unsavedChangesDialog.html"));
module.watch(require("./dialog/unsavedChangesDialog.js"));
module.watch(require("./dropdown/form.html"));
module.watch(require("./dropdown/form.js"));
module.watch(require("./form/button.html"));
module.watch(require("./form/form.html"));
module.watch(require("./form/group.html"));
module.watch(require("./form/link.html"));
module.watch(require("./input/checkbox.html"));
module.watch(require("./input/hidden.html"));
module.watch(require("./input/groupRadio.html"));
module.watch(require("./input/number.html"));
module.watch(require("./input/password.html"));
module.watch(require("./input/radio.html"));
module.watch(require("./input/range.html"));
module.watch(require("./input/select.html"));
module.watch(require("./input/text.html"));
module.watch(require("./notification"));
module.watch(require("./popover/form.html"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dialog":{"confirm.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/dialog/confirm.html                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.confirm.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.confirm.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/template.confirm.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("dialogConfirm");
Template["dialogConfirm"] = new Template("Template.dialogConfirm", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      dialogClass: "modal-sm",
      title: Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "title"), "Confirmation"),
      message: Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "message"), "Are you sure you want to perform this action?")
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("dialogForm"));
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"form.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/dialog/form.html                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.form.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.form.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/template.form.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("dialogForm");
Template["dialogForm"] = new Template("Template.dialogForm", (function() {
  var view = this;
  return HTML.DIV({
    id: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));
    },
    class: function() {
      return [ "modal fade ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "class")) ];
    },
    tabindex: "-1",
    role: "dialog"
  }, "\n        ", HTML.DIV({
    class: function() {
      return [ "modal-dialog ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "dialogClass")) ];
    },
    role: "document"
  }, "\n            ", Blaze._TemplateWith(function() {
    return {
      class: Spacebars.call(Spacebars.dataMustache(view.lookup("concat"), "modal-content ", Spacebars.dot(view.lookup("."), "formClass"))),
      hideValidationBox: Spacebars.call(true),
      api: Spacebars.call(Spacebars.dataMustache(view.lookup("extend"), Spacebars.dot(view.lookup("instance"), "api"), Spacebars.dot(view.lookup("instance"), "data", "api"))),
      schema: Spacebars.call(Spacebars.dot(view.lookup("."), "schema"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("form"), function() {
      return [ "\n                ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("or"), Spacebars.dot(view.lookup("."), "title"), Spacebars.dataMustache(view.lookup("hasSection"), "dialogHeader"));
      }, function() {
        return [ "\n                    ", Blaze._TemplateWith(function() {
          return Spacebars.call(view.lookup("."));
        }, function() {
          return Spacebars.include(view.lookupTemplate("dialogHeader"));
        }), "\n                " ];
      }), "\n                ", HTML.DIV({
        class: "modal-body"
      }, "\n                    ", HTML.DIV({
        class: "messages"
      }, "\n                        ", Blaze.Each(function() {
        return {
          _sequence: Spacebars.call(Spacebars.dot(view.lookup("."), "messages")),
          _variable: "message"
        };
      }, function() {
        return [ "\n                            ", HTML.DIV({
          class: "message"
        }, Blaze.View("lookup:message", function() {
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("message")));
        })), "\n                        " ];
      }, function() {
        return [ "\n                            ", Blaze.If(function() {
          return Spacebars.call(view.lookup("isError"));
        }, function() {
          return [ "\n                                ", Blaze._TemplateWith(function() {
            return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
              error: Spacebars.dot(view.lookup("."), "details")
            }));
          }, function() {
            return Spacebars.include(view.lookupTemplate("pageError"));
          }), "\n                            " ];
        }, function() {
          return [ "\n                                ", Blaze.Let({
            message: function() {
              return Spacebars.call(Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "bodyText"), Spacebars.dot(view.lookup("."), "reason"), Spacebars.dot(view.lookup("."), "message"), Spacebars.dataMustache(view.lookup("valueIf"), view.templateContentBlock, "", "An error has ocurred.")));
            }
          }, function() {
            return [ "\n                                    ", HTML.DIV({
              class: "message"
            }, Blaze.View("lookup:message", function() {
              return Spacebars.mustache(view.lookup("message"));
            })), "\n                                " ];
          }), "\n                            " ];
        }), "\n                        " ];
      }), "\n                    "), "\n                    ", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n                "), "\n                ", HTML.DIV({
        class: "modal-footer"
      }, "\n                    ", Blaze._TemplateWith(function() {
        return "dialogFooter";
      }, function() {
        return Spacebars.include(view.lookupTemplate("section"));
      }), "\n                    ", Blaze.Unless(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("."), "hideCancel"));
      }, function() {
        return [ "\n                        ", Blaze._TemplateWith(function() {
          return {
            action: Spacebars.call("cancel"),
            disabled: Spacebars.call(Spacebars.dot(view.lookup("."), "cancelDisabled")),
            class: Spacebars.call(Spacebars.dataMustache(view.lookup("concat"), "btn btn-cancel ", Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "cancelClass"), "btn-secondary"))),
            tagAttributes: Spacebars.call(Spacebars.dataMustache(view.lookup("extend"), Spacebars.dot(view.lookup("."), "tagAttributes"), Spacebars.kw({
              "data-dismiss": "modal"
            })))
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("button"), function() {
            return Blaze.View("lookup:choose", function() {
              return Spacebars.mustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "cancelLabel"), "Cancel");
            });
          });
        }), "\n                    " ];
      }), "\n                    ", Blaze.Unless(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("."), "hideConfirm"));
      }, function() {
        return [ "\n                        ", Blaze._TemplateWith(function() {
          return {
            action: Spacebars.call("confirm"),
            disabled: Spacebars.call(Spacebars.dot(view.lookup("."), "confirmDisabled")),
            class: Spacebars.call(Spacebars.dataMustache(view.lookup("concat"), "btn btn-confirm ", Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "confirmClass"), "btn-primary")))
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("button"), function() {
            return Blaze.View("lookup:choose", function() {
              return Spacebars.mustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "confirmLabel"), "Confirm");
            });
          });
        }), "\n                    " ];
      }), "\n                "), "\n            " ];
    });
  }), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"form.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/form.js                                                       //
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
Template.dialogForm.onCreated(function () {
  var instance = Template.instance();

  var dismissModal = function (promiseFunction, param) {
    // Hide the modal, removing the backdrop
    instance.$('.modal').one('hidden.bs.modal', function (event) {
      // Resolve or reject the promise with the given parameter
      promiseFunction(param);
    }).modal('hide');
  };

  instance.api = {
    confirm: function () {
      // Check if the form has valid data
      var form = instance.$('form').data('component');

      if (!form.validate()) {
        return;
      }

      var formData = form.value();

      var dismiss = function (param) {
        return dismissModal(instance.data.promiseResolve, param);
      };

      if (_.isFunction(instance.data.confirmCallback)) {
        var result = instance.data.confirmCallback(formData);

        if (result instanceof Promise) {
          return result.then(dismiss);
        } else {
          return dismiss(result);
        }
      }

      dismiss(formData);
    },
    cancel: function () {
      var dismiss = function (param) {
        return dismissModal(instance.data.promiseReject, param);
      };

      if (_.isFunction(instance.data.cancelCallback)) {
        var result = instance.data.cancelCallback();

        if (result instanceof Promise) {
          return result.then(dismiss);
        } else {
          return dismiss(result);
        }
      }

      dismiss();
    }
  };
});
Template.dialogForm.onRendered(function () {
  var instance = Template.instance(); // Allow options ovewrite

  var modalOptions = _.extend({
    backdrop: 'static',
    keyboard: false
  }, instance.data.modalOptions);

  var $modal = instance.$('.modal'); // Create the bootstrap modal

  $modal.modal(modalOptions); // Check if dialog will be repositioned

  var position = instance.data.position;
  var event = instance.data.event;

  if (!position && event && event.clientX) {
    position = {
      x: event.clientX,
      y: event.clientY
    };
  } // Reposition dialog if position object was filled


  if (position) {
    OHIF.ui.repositionDialog($modal, position.x, position.y);
  }
});
Template.dialogForm.events({
  keydown: function (event) {
    var instance = Template.instance(),
        keyCode = event.keyCode || event.which;
    var handled = false;

    if (keyCode === 27) {
      instance.$('.btn.btn-cancel').click();
      handled = true;
    } else if (keyCode === 13) {
      instance.$('.btn.btn-confirm').click();
      handled = true;
    }

    if (handled) {
      event.stopPropagation();
    }
  }
});
Template.dialogForm.helpers({
  isError: function () {
    var data = Template.instance().data;
    return data instanceof Error || data && data.error instanceof Error;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/dialog/header.html                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.header.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.header.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/template.header.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("dialogHeader");
Template["dialogHeader"] = new Template("Template.dialogHeader", (function() {
  var view = this;
  return HTML.DIV({
    class: "modal-header"
  }, "\n        ", Blaze._TemplateWith(function() {
    return "dialogHeader";
  }, function() {
    return Spacebars.include(view.lookupTemplate("section"));
  }), "\n        ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("or"), Spacebars.dot(view.lookup("."), "title"), Spacebars.dataMustache(view.lookup("hasSection"), "dialogHeader"));
  }, function() {
    return [ "\n            ", Blaze._TemplateWith(function() {
      return {
        class: Spacebars.call("close"),
        action: Spacebars.call("cancel"),
        tagAttributes: Spacebars.call(Spacebars.dataMustache(view.lookup("extend"), Spacebars.dot(view.lookup("."), "tagAttributes"), Spacebars.kw({
          "data-dismiss": "modal",
          "aria-label": "Close"
        })))
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("button"), function() {
        return HTML.SPAN({
          "aria-hidden": "true"
        }, HTML.CharRef({
          html: "&times;",
          str: "×"
        }));
      });
    }), "\n            ", HTML.H4({
      class: "modal-title"
    }, "\n                ", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("."), "titleIcon"));
    }, function() {
      return HTML.I({
        class: function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "titleIcon"));
        }
      });
    }), "\n                ", HTML.SPAN(Blaze.View("lookup:..title", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "title"));
    })), "\n            "), "\n        " ];
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"info.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/dialog/info.html                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.info.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.info.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/template.info.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("dialogInfo");
Template["dialogInfo"] = new Template("Template.dialogInfo", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      title: Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "title"), "Error")
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("dialogSimple"), function() {
      return [ "\n    ", HTML.DIV({
        class: "messages"
      }, "\n      ", Blaze.Each(function() {
        return {
          _sequence: Spacebars.call(Spacebars.dot(view.lookup("."), "messages")),
          _variable: "message"
        };
      }, function() {
        return [ "\n        ", HTML.DIV({
          class: "message"
        }, Blaze.View("lookup:message", function() {
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("message")));
        })), "\n      " ];
      }, function() {
        return [ "\n        ", Blaze.If(function() {
          return Spacebars.call(view.lookup("isError"));
        }, function() {
          return [ "\n            ", Blaze._TemplateWith(function() {
            return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
              error: Spacebars.dot(view.lookup("."), "details")
            }));
          }, function() {
            return Spacebars.include(view.lookupTemplate("pageError"));
          }), "\n        " ];
        }, function() {
          return [ "\n          ", Blaze.Let({
            message: function() {
              return Spacebars.call(Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "reason"), Spacebars.dot(view.lookup("."), "message"), "An error has ocurred."));
            }
          }, function() {
            return [ "\n            ", HTML.DIV({
              class: "message"
            }, Blaze.View("lookup:message", function() {
              return Spacebars.mustache(view.lookup("message"));
            })), "\n          " ];
          }), "\n        " ];
        }), "\n      " ];
      }), "\n    "), "\n  " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"info.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/info.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
Template.dialogInfo.onRendered(function () {
  var instance = Template.instance();
  var $modal = instance.$('.modal');
  $modal.one('hidden.bs.modal', function () {
    return instance.data.promiseResolve();
  });
});
Template.dialogInfo.helpers({
  isError: function () {
    var data = Template.instance().data;
    return data instanceof Error || data && data.error instanceof Error;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"loading.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/dialog/loading.html                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.loading.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.loading.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/template.loading.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("dialogLoading");
Template["dialogLoading"] = new Template("Template.dialogLoading", (function() {
  var view = this;
  return HTML.DIV({
    id: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));
    },
    class: function() {
      return [ "modal fade ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "class")) ];
    },
    tabindex: "-1",
    role: "dialog"
  }, "\n        ", HTML.DIV({
    class: "loading-text noselect"
  }, "\n            ", Blaze.View("lookup:choose", function() {
    return Spacebars.mustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "text"), "Loading...");
  }), " ", HTML.Raw('<i class="fa fa-spin fa-circle-o-notch fa-fw"></i>'), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"loading.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/loading.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
Template.dialogLoading.onRendered(function () {
  var instance = Template.instance();
  var $modal = instance.$('.modal'); // Create the bootstrap modal

  $modal.modal({
    backdrop: 'static',
    keyboard: false,
    show: true
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"login.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/dialog/login.html                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.login.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.login.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/template.login.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("dialogLogin");
Template["dialogLogin"] = new Template("Template.dialogLogin", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      dialogClass: "modal-sm",
      schema: Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "schema"), Spacebars.dot(view.lookup("instance"), "schema"))
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("dialogForm"), function() {
      return [ "\n        ", Blaze._TemplateWith(function() {
        return {
          labelClass: Spacebars.call("form-group"),
          key: Spacebars.call("username")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputText"));
      }), "\n        ", Blaze._TemplateWith(function() {
        return {
          labelClass: Spacebars.call("form-group"),
          key: Spacebars.call("password")
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputPassword"));
      }), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"login.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/login.js                                                      //
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
Template.dialogLogin.onCreated(function () {
  var instance = Template.instance();
  instance.schema = new SimpleSchema({
    username: {
      type: String,
      label: 'Username'
    },
    password: {
      type: String,
      label: 'Password'
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"progress.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/dialog/progress.html                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.progress.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.progress.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/template.progress.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("dialogProgress");
Template["dialogProgress"] = new Template("Template.dialogProgress", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      dialogClass: "modal-sm modal-progress",
      title: Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "title"), "Processing...")
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("dialogForm"), function() {
      return [ "\n    ", HTML.DIV({
        class: "status"
      }, "\n      ", HTML.DIV({
        class: "progress-bar-container"
      }, "\n        ", HTML.DIV({
        class: "progress-bar progress-bar-striped active",
        role: "progressbar",
        style: function() {
          return [ "width: ", Spacebars.mustache(view.lookup("progress")), "%" ];
        }
      }, "\n          ", HTML.DIV({
        class: "percentage"
      }, Blaze.View("lookup:formatNumberPrecision", function() {
        return Spacebars.mustache(view.lookup("formatNumberPrecision"), view.lookup("progress"), 0);
      }), "%"), "\n        "), "\n      "), "\n    "), "\n    ", HTML.DIV({
        class: "message"
      }, "\n      ", Blaze.View("lookup:message", function() {
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("message")));
      }), "\n    "), "\n  " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"progress.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/progress.js                                                   //
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

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 2);
Template.dialogProgress.onCreated(function () {
  var instance = Template.instance();
  instance.state = new ReactiveVar({
    processed: 0,
    total: instance.data.total,
    message: instance.data.message
  });
});
Template.dialogProgress.onRendered(function () {
  var instance = Template.instance();
  var task = instance.data.task;
  var progressDialog = {
    promise: instance.data.promise,
    done: function (value) {
      // Hide the modal, removing the backdrop
      instance.$('.modal').on('hidden.bs.modal', function (event) {
        instance.data.promiseResolve(value);
      }).modal('hide');
    },
    cancel: function () {
      // Hide the modal, removing the backdrop
      instance.$('.modal').on('hidden.bs.modal', function (event) {
        instance.data.promiseReject();
      }).modal('hide');
    },
    update: _.throttle(function (processed) {
      var state = instance.state.get();
      state.processed = Math.max(0, processed);
      instance.state.set(state);
    }, 100),
    setTotal: _.throttle(function (total) {
      var state = instance.state.get();
      state.total = total;
      instance.state.set(state);
    }, 100),
    setMessage: _.throttle(function (message) {
      var state = instance.state.get();
      state.message = message;
      instance.state.set(state);
    }, 100)
  };
  task.run(progressDialog);
});
Template.dialogProgress.helpers({
  progress: function () {
    var instance = Template.instance();
    var state = instance.state.get();

    if (!state || !state.total) {
      return 0;
    }

    return Math.min(1, state.processed / state.total) * 100;
  },
  message: function () {
    var instance = Template.instance();
    var state = instance.state.get();

    if (!state) {
      return;
    }

    if (typeof state.message === 'function') {
      return state.message(state);
    }

    return state.message;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"simple.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/dialog/simple.html                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.simple.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.simple.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/template.simple.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("dialogSimple");
Template["dialogSimple"] = new Template("Template.dialogSimple", (function() {
  var view = this;
  return HTML.DIV({
    id: function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));
    },
    class: function() {
      return [ "modal fade ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "class")) ];
    },
    tabindex: "-1",
    role: "dialog"
  }, "\n        ", HTML.DIV({
    class: function() {
      return [ "modal-dialog ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "dialogClass")) ];
    },
    role: "document"
  }, "\n            ", HTML.DIV({
    class: "modal-content"
  }, "\n                ", Blaze._TemplateWith(function() {
    return Spacebars.call(view.lookup("."));
  }, function() {
    return Spacebars.include(view.lookupTemplate("dialogHeader"));
  }), "\n                ", HTML.DIV({
    class: "modal-body"
  }, "\n                    ", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  }), "\n                "), "\n                ", HTML.DIV({
    class: "modal-footer"
  }, Blaze._TemplateWith(function() {
    return "dialogFooter";
  }, function() {
    return Spacebars.include(view.lookupTemplate("section"));
  })), "\n            "), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"simple.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/simple.js                                                     //
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
Template.dialogSimple.onCreated(function () {
  var instance = Template.instance();

  instance.close = function () {
    var $modal = instance.$('.modal');
    $modal.one('hidden.bs.modal', function () {
      return instance.data.promiseResolve();
    }).modal('hide');
  }; // Automatically close the modal if a timeout value was given


  if (instance.data.timeout) {
    Meteor.setTimeout(instance.close, instance.data.timeout);
  }
});
Template.dialogSimple.onRendered(function () {
  var instance = Template.instance(); // Allow options ovewrite

  var modalOptions = _.extend({
    backdrop: 'static',
    keyboard: false
  }, instance.data.modalOptions);

  var $modal = instance.$('.modal'); // Create the bootstrap modal

  $modal.modal(modalOptions);
  var position = instance.data.position;
  var event = instance.data.event;

  if (!position && event && !_.isUndefined(event.clientX)) {
    position = {
      x: event.clientX,
      y: event.clientY
    };
  }

  if (position) {
    OHIF.ui.repositionDialog($modal, position.x, position.y);
  }
});
Template.dialogSimple.events({
  keydown: function (event) {
    var instance = Template.instance();
    var keyCode = event.keyCode || event.which;

    if (keyCode === 27) {
      instance.close();
      event.stopPropagation();
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"unsavedChangesDialog.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/dialog/unsavedChangesDialog.html                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.unsavedChangesDialog.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.unsavedChangesDialog.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/template.unsavedChangesDialog.js                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("unsavedChangesDialog");
Template["unsavedChangesDialog"] = new Template("Template.unsavedChangesDialog", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "modal unsavedChangesDialog fade ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "class")) ];
    },
    tabindex: "-1",
    role: "dialog"
  }, "\n        ", HTML.DIV({
    class: "modal-dialog",
    role: "document"
  }, "\n            ", HTML.DIV({
    class: "modal-content"
  }, "\n                ", HTML.DIV({
    class: "modal-header"
  }, "\n                    ", HTML.Raw('<button class="close" aria-label="Close" data-choice="abort-action" data-dismiss="modal">\n                        <span aria-hidden="true">&times;</span>\n                    </button>'), "\n                    ", HTML.H4({
    class: "modal-title"
  }, Blaze.View("lookup:choose", function() {
    return Spacebars.mustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "message"), "You have unsaved changes!");
  })), "\n                "), "\n                ", HTML.DIV({
    class: "modal-footer"
  }, "\n\n                    ", Blaze.Let({
    label: function() {
      return Spacebars.call("Stay");
    }
  }, function() {
    return [ "\n                    ", HTML.BUTTON({
      class: "btn btn-secondary",
      "aria-label": function() {
        return Spacebars.mustache(view.lookup("label"));
      },
      "data-choice": "abort-action",
      "data-dismiss": "modal"
    }, "\n                        ", Blaze.View("lookup:label", function() {
      return Spacebars.mustache(view.lookup("label"));
    }), "\n                    "), "\n                    " ];
  }), "\n\n                    ", Blaze.Let({
    label: function() {
      return Spacebars.call("Don't Save");
    }
  }, function() {
    return [ "\n                    ", HTML.BUTTON({
      class: "btn btn-danger",
      "aria-label": function() {
        return Spacebars.mustache(view.lookup("label"));
      },
      "data-choice": "abandon-changes",
      "data-dismiss": "modal"
    }, "\n                        ", Blaze.View("lookup:label", function() {
      return Spacebars.mustache(view.lookup("label"));
    }), "\n                    "), "\n                    " ];
  }), "\n\n                    ", Blaze.Let({
    label: function() {
      return Spacebars.call("Save and Exit!");
    }
  }, function() {
    return [ "\n                    ", HTML.BUTTON({
      class: "btn btn-primary",
      "aria-label": function() {
        return Spacebars.mustache(view.lookup("label"));
      },
      "data-choice": "save-changes",
      "data-dismiss": "modal"
    }, "\n                        ", Blaze.View("lookup:label", function() {
      return Spacebars.mustache(view.lookup("label"));
    }), "\n                    "), "\n                    " ];
  }), "\n\n                "), "\n            "), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"unsavedChangesDialog.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dialog/unsavedChangesDialog.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 2);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 3);
var MARGIN_RIGHT = 15;
var MARGIN_BOTTOM = 15;
Template.unsavedChangesDialog.onRendered(function () {
  var instance = Template.instance();
  var $modal = instance.$('.modal.unsavedChangesDialog'); // Routine which effectively displays the BS modal...

  instance.displayModal = function () {
    // Make modal options extensible...
    var modalOptions = _.extend({
      backdrop: 'static',
      keyboard: false
    }, instance.data.modalOptions); // Set handler for "hidden" event... Simply remove the view!


    $modal.one('hidden.bs.modal', function () {
      Blaze.remove(instance.view);
    }); // Create the bootstrap modal

    $modal.modal(modalOptions);
  }; // Routine which repositions the modal before display...


  instance.displayModalWithPosition = function (position) {
    // Preserve original CSS rules...
    var origCSS = {
      display: $modal.css('display'),
      visibility: $modal.css('visibility')
    }; // Make sure modal is propperly rendered before proceeding with math...

    if (origCSS.display === 'none') {
      $modal.css({
        visibility: 'hidden',
        display: 'block'
      });
    } // Run presentation code on next tick...


    setTimeout(function () {
      var dimension;
      var $dialog = $modal.find('.modal-dialog');
      var dialogRect = {
        position: {
          x: parseInt(position.x) || 0,
          y: parseInt(position.y) || 0
        },
        size: {
          width: $dialog.outerWidth(),
          height: $dialog.outerHeight()
        }
      };
      var modalSize = {
        width: $modal.width(),
        height: $modal.height()
      };
      dimension = dialogRect.position.x + dialogRect.size.width + MARGIN_RIGHT;

      if (dimension > modalSize.width) {
        dialogRect.position.x -= dimension - modalSize.width;
      }

      if (dialogRect.position.x < 0) {
        dialogRect.position.x = 0;
      }

      dimension = dialogRect.position.y + dialogRect.size.height + MARGIN_BOTTOM;

      if (dimension > modalSize.height) {
        dialogRect.position.y -= dimension - modalSize.height;
      }

      if (dialogRect.position.y < 0) {
        dialogRect.position.y = 0;
      } // Restore original CSS...


      $modal.css(origCSS); // Set new position...

      $dialog.css({
        position: 'fixed',
        margin: 0,
        left: dialogRect.position.x,
        top: dialogRect.position.y
      });
      instance.displayModal();
    }, 0);
  }; // Check if modal will be presented with custom positioning...


  var position = instance.data.position;

  if (position && 'x' in position && 'y' in position) {
    instance.displayModalWithPosition(position);
  } else {
    instance.displayModal();
  }
});
Template.unsavedChangesDialog.events({
  'click button[data-choice]': function (event) {
    var instance = Template.instance();
    var callback = instance.data.callback;
    var choice = $(event.currentTarget).attr('data-choice') || ''; // if callback is a function, call it passing user choice...

    if (typeof callback === 'function') {
      callback.call(instance, choice);
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"dropdown":{"form.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/dropdown/form.html                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.form.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.form.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dropdown/template.form.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("dropdownForm");
Template["dropdownForm"] = new Template("Template.dropdownForm", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      mixins: "dropdown",
      class: "dropdown",
      hideValidationBox: true
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("form"), function() {
      return [ "\n        ", Blaze._TemplateWith(function() {
        return {
          items: Spacebars.call(Spacebars.dot(view.lookup("."), "items")),
          classes: Spacebars.call(Spacebars.dot(view.lookup("."), "options", "menuClasses"))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("dropdownFormMenu"));
      }), "\n    " ];
    });
  });
}));

Template.__checkName("dropdownFormMenu");
Template["dropdownFormMenu"] = new Template("Template.dropdownFormMenu", (function() {
  var view = this;
  return HTML.UL({
    class: function() {
      return [ "dropdown-menu ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "classes")) ];
    }
  }, "\n        ", Blaze.If(function() {
    return Spacebars.call(view.templateContentBlock);
  }, function() {
    return [ "\n            ", Blaze._InOuterTemplateScope(view, function() {
      return Spacebars.include(function() {
        return Spacebars.call(view.templateContentBlock);
      });
    }), "\n        " ];
  }, function() {
    return [ "\n            ", Blaze.Each(function() {
      return {
        _sequence: Spacebars.call(Spacebars.dot(view.lookup("."), "items")),
        _variable: "item"
      };
    }, function() {
      return [ "\n                ", Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("isVisible"), view.lookup("item"));
      }, function() {
        return [ "\n                    ", Blaze.If(function() {
          return Spacebars.call(Spacebars.dot(view.lookup("item"), "separatorBefore"));
        }, function() {
          return [ "\n                        ", HTML.LI({
            role: "separator",
            class: "divider"
          }), "\n                    " ];
        }), "\n                    ", HTML.LI({
          class: function() {
            return [ Blaze.If(function() {
              return Spacebars.call(Spacebars.dot(view.lookup("item"), "disabled"));
            }, function() {
              return "disabled";
            }), " ", Blaze.If(function() {
              return Spacebars.call(Spacebars.dot(view.lookup("item"), "items"));
            }, function() {
              return "dropdown-submenu";
            }) ];
          }
        }, "\n                        ", Blaze._TemplateWith(function() {
          return Spacebars.call(view.lookup("item"));
        }, function() {
          return Spacebars.include(view.lookupTemplate("link"), function() {
            return [ "\n                            ", Blaze.If(function() {
              return Spacebars.call(Spacebars.dot(view.lookup("item"), "icon"));
            }, function() {
              return [ "\n                                ", HTML.I({
                class: function() {
                  return [ Spacebars.mustache(Spacebars.dot(view.lookup("item"), "icon")), " ", Spacebars.mustache(Spacebars.dot(view.lookup("item"), "iconClasses")) ];
                }
              }), "\n                            " ];
            }), "\n                            ", Blaze.If(function() {
              return Spacebars.call(Spacebars.dot(view.lookup("item"), "iconSvgUse"));
            }, function() {
              return [ "\n                                ", HTML.SVG({
                class: function() {
                  return Spacebars.mustache(Spacebars.dot(view.lookup("item"), "iconClasses"));
                }
              }, "\n                                    ", HTML.USE({
                "xlink:href": function() {
                  return Spacebars.mustache(view.lookup("absoluteUrl"), Spacebars.dot(view.lookup("item"), "iconSvgUse"));
                }
              }), "\n                                "), "\n                            " ];
            }), "\n                            ", Blaze.Let({
              text: function() {
                return Spacebars.call(Spacebars.dataMustache(view.lookup("getText"), view.lookup("item")));
              }
            }, function() {
              return [ "\n                                ", Blaze.If(function() {
                return Spacebars.call(view.lookup("text"));
              }, function() {
                return [ "\n                                    ", HTML.SPAN(Blaze.View("lookup:text", function() {
                  return Spacebars.mustache(view.lookup("text"));
                })), "\n                                " ];
              }), "\n                            " ];
            }), "\n                        " ];
          });
        }), "\n                    "), "\n                    ", Blaze.If(function() {
          return Spacebars.call(Spacebars.dot(view.lookup("item"), "separatorAfter"));
        }, function() {
          return [ "\n                        ", HTML.LI({
            role: "separator",
            class: "divider"
          }), "\n                    " ];
        }), "\n                " ];
      }), "\n            " ];
    }), "\n        " ];
  }), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"form.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/dropdown/form.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
Template.dropdownFormMenu.helpers({
  isVisible: function (item) {
    var isVisible = true;

    if (typeof item.visible === 'function') {
      isVisible = item.visible();
    } else if (typeof item.visible !== 'undefined') {
      isVisible = !!item.visible;
    }

    return isVisible;
  },
  getText: function (item) {
    if (typeof item.text === 'function') {
      return item.text(item.params || {});
    }

    return item.text || '';
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"form":{"button.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/form/button.html                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.button.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.button.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/form/template.button.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("button");
Template["button"] = new Template("Template.button", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      base: "baseButton",
      mixins: Spacebars.dataMustache(view.lookup("concat"), "button action ", Spacebars.dot(view.lookup("."), "mixins"))
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("baseComponent"), function() {
      return [ "\n        ", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"form.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/form/form.html                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.form.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.form.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/form/template.form.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("form");
Template["form"] = new Template("Template.form", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      base: "baseForm",
      mixins: Spacebars.dataMustache(view.lookup("concat"), "form ", Spacebars.dot(view.lookup("."), "mixins"))
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("baseComponent"), function() {
      return [ "\n      ", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"group.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/form/group.html                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.group.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.group.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/form/template.group.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("group");
Template["group"] = new Template("Template.group", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      class: Spacebars.dataMustache(view.lookup("concat"), "component-group ", Spacebars.dot(view.lookup("."), "class")),
      base: Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "base"), "baseDiv"),
      mixins: Spacebars.dataMustache(view.lookup("concat"), "group ", Spacebars.dot(view.lookup("."), "mixins"))
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("baseComponent"), function() {
      return [ "\n      ", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"link.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/form/link.html                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.link.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.link.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/form/template.link.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("link");
Template["link"] = new Template("Template.link", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      base: "baseLink",
      mixins: Spacebars.dataMustache(view.lookup("concat"), "link action ", Spacebars.dot(view.lookup("."), "mixins"))
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("baseComponent"), function() {
      return [ "\n        ", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"input":{"checkbox.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/input/checkbox.html                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.checkbox.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.checkbox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/input/template.checkbox.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("inputCheckbox");
Template["inputCheckbox"] = new Template("Template.inputCheckbox", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      base: "baseInput",
      type: "checkbox",
      mixins: Spacebars.dataMustache(view.lookup("concat"), "checkbox ", Spacebars.dot(view.lookup("."), "mixins")),
      labelAfter: Spacebars.dataMustache(view.lookup("valueIf"), Spacebars.dataMustache(view.lookup("isUndefined"), Spacebars.dot(view.lookup("."), "labelAfter")), true, Spacebars.dot(view.lookup("."), "labelAfter")),
      labelClass: Spacebars.dataMustache(view.lookup("concat"), "checkboxLabel ", Spacebars.dot(view.lookup("."), "labelClass")),
      wrappers: Spacebars.dataMustache(view.lookup("concat"), "", Spacebars.dataMustache(view.lookup("valueIf"), view.lookup("reactive"), Spacebars.dot(view.lookup("."), "label"), "wrapperLabel ", ""), Spacebars.dot(view.lookup("."), "wrappers"))
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("baseComponent"), function() {
      return [ "\n        ", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"groupRadio.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/input/groupRadio.html                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.groupRadio.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.groupRadio.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/input/template.groupRadio.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("groupRadio");
Template["groupRadio"] = new Template("Template.groupRadio", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      class: Spacebars.dataMustache(view.lookup("concat"), "group-radio ", Spacebars.dot(view.lookup("."), "class")),
      mixins: Spacebars.dataMustache(view.lookup("concat"), "groupRadio ", Spacebars.dot(view.lookup("."), "mixins")),
      wrappers: Spacebars.dataMustache(view.lookup("concat"), "", Spacebars.dataMustache(view.lookup("valueIf"), view.lookup("reactive"), Spacebars.dot(view.lookup("."), "label"), "wrapperLabel ", ""), Spacebars.dot(view.lookup("."), "wrappers")),
      labelAsDiv: true
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("group"), function() {
      return [ "\n        ", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n        ", Blaze.Each(function() {
        return {
          _sequence: Spacebars.dataMustache(view.lookup("reactive"), Spacebars.dot(view.lookup("."), "items")),
          _variable: "item"
        };
      }, function() {
        return [ "\n            ", Blaze._TemplateWith(function() {
          return {
            class: Spacebars.call(Spacebars.dot(view.lookup("."), "radioClass")),
            name: Spacebars.call(Spacebars.dot(view.lookup("."), "key")),
            value: Spacebars.call(Spacebars.dot(view.lookup("item"), "value")),
            label: Spacebars.call(Spacebars.dot(view.lookup("item"), "label")),
            checked: Spacebars.call(Spacebars.dataMustache(view.lookup("eq"), Spacebars.dot(view.lookup("item"), "value"), Spacebars.dataMustache(view.lookup("reactive"), Spacebars.dot(view.lookup("."), "value"))))
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("inputRadio"));
        }), "\n        " ];
      }), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hidden.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/input/hidden.html                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.hidden.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.hidden.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/input/template.hidden.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("inputHidden");
Template["inputHidden"] = new Template("Template.inputHidden", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      base: "baseInput",
      type: "hidden",
      mixins: Spacebars.dataMustache(view.lookup("concat"), "input ", Spacebars.dot(view.lookup("."), "mixins"))
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("baseComponent"));
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"number.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/input/number.html                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.number.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.number.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/input/template.number.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("inputNumber");
Template["inputNumber"] = new Template("Template.inputNumber", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      base: "baseInput",
      type: "number",
      class: Spacebars.dataMustache(view.lookup("concat"), "form-control ", Spacebars.dot(view.lookup("."), "class")),
      mixins: Spacebars.dataMustache(view.lookup("concat"), "input ", Spacebars.dot(view.lookup("."), "mixins")),
      wrappers: Spacebars.dataMustache(view.lookup("concat"), "", Spacebars.dataMustache(view.lookup("valueIf"), view.lookup("reactive"), Spacebars.dot(view.lookup("."), "label"), "wrapperLabel ", ""), Spacebars.dot(view.lookup("."), "wrappers"))
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("baseComponent"), function() {
      return [ "\n        ", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"password.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/input/password.html                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.password.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.password.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/input/template.password.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("inputPassword");
Template["inputPassword"] = new Template("Template.inputPassword", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      type: "password"
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("inputText"), function() {
      return [ "\n        ", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"radio.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/input/radio.html                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.radio.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.radio.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/input/template.radio.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("inputRadio");
Template["inputRadio"] = new Template("Template.inputRadio", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      base: "baseInput",
      type: "radio",
      mixins: Spacebars.dataMustache(view.lookup("concat"), "input ", Spacebars.dot(view.lookup("."), "mixins")),
      labelAfter: Spacebars.dataMustache(view.lookup("valueIf"), Spacebars.dataMustache(view.lookup("isUndefined"), Spacebars.dot(view.lookup("."), "labelAfter")), true, Spacebars.dot(view.lookup("."), "labelAfter")),
      labelClass: Spacebars.dataMustache(view.lookup("concat"), "radioLabel ", Spacebars.dot(view.lookup("."), "labelClass")),
      wrappers: Spacebars.dataMustache(view.lookup("concat"), "", Spacebars.dataMustache(view.lookup("valueIf"), view.lookup("reactive"), Spacebars.dot(view.lookup("."), "label"), "wrapperLabel ", ""), Spacebars.dot(view.lookup("."), "wrappers"))
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("baseComponent"), function() {
      return [ "\n        ", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"range.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/input/range.html                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.range.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.range.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/input/template.range.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("inputRange");
Template["inputRange"] = new Template("Template.inputRange", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      base: "baseInput",
      type: "range",
      class: Spacebars.dataMustache(view.lookup("concat"), "form-control ", Spacebars.dot(view.lookup("."), "class")),
      mixins: Spacebars.dataMustache(view.lookup("concat"), "input ", Spacebars.dot(view.lookup("."), "mixins")),
      wrappers: Spacebars.dataMustache(view.lookup("concat"), "", Spacebars.dataMustache(view.lookup("valueIf"), view.lookup("reactive"), Spacebars.dot(view.lookup("."), "label"), "wrapperLabel ", ""), Spacebars.dot(view.lookup("."), "wrappers"))
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("baseComponent"), function() {
      return [ "\n        ", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"select.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/input/select.html                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.select.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.select.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/input/template.select.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("inputSelect");
Template["inputSelect"] = new Template("Template.inputSelect", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      base: "baseSelect",
      mixins: Spacebars.dataMustache(view.lookup("concat"), "select2 ", Spacebars.dot(view.lookup("."), "mixins")),
      wrappers: Spacebars.dataMustache(view.lookup("concat"), "", Spacebars.dataMustache(view.lookup("valueIf"), view.lookup("reactive"), Spacebars.dot(view.lookup("."), "label"), "wrapperLabel ", ""), Spacebars.dot(view.lookup("."), "wrappers")),
      options: Spacebars.dataMustache(view.lookup("clone"), Spacebars.dot(view.lookup("."), "options"), Spacebars.kw({
        multiple: Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "options", "multiple"), Spacebars.dot(view.lookup("."), "multiple"), false),
        placeholder: Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "options", "placeholder"), Spacebars.dot(view.lookup("."), "placeholder")),
        minimumResultsForSearch: Spacebars.dataMustache(view.lookup("valueIf"), Spacebars.dot(view.lookup("."), "hideSearch"), -1, Spacebars.dot(view.lookup("."), "options", "minimumResultsForSearch"))
      }))
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("baseComponent"), function() {
      return [ "\n        ", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"text.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/input/text.html                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.text.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.text.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/input/template.text.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("inputText");
Template["inputText"] = new Template("Template.inputText", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      base: "baseInput",
      class: Spacebars.dataMustache(view.lookup("concat"), "form-control ", Spacebars.dot(view.lookup("."), "class")),
      mixins: Spacebars.dataMustache(view.lookup("concat"), "input ", Spacebars.dot(view.lookup("."), "mixins")),
      wrappers: Spacebars.dataMustache(view.lookup("concat"), "", Spacebars.dataMustache(view.lookup("valueIf"), view.lookup("reactive"), Spacebars.dot(view.lookup("."), "label"), "wrapperLabel ", ""), Spacebars.dot(view.lookup("."), "wrappers"))
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("baseComponent"), function() {
      return [ "\n        ", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"notification":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/notification/index.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./notification.styl"));
module.watch(require("./notificationNote.html"));
module.watch(require("./notificationNote.js"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notification.styl":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/notification/notification.styl                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./notification.styl.css"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notification.styl.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/notification/notification.styl.css                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".theme-icon-crickets,\n.theme-icon-tide,\n.theme-icon-tigerlily,\n.theme-icon-quartz,\n.theme-icon-overcast,\n.theme-icon-mint,\n.theme-icon-honeycomb {\n  display: inline-block;\n  background: url(\"/packages/ohif_design/assets/theme-icons.png\") no-repeat;\n  overflow: hidden;\n  text-indent: -9999px;\n  text-align: left;\n}\n.theme-icon-crickets {\n  background-position: 0px 0px;\n  width: 64px;\n  height: 56px;\n}\n.theme-icon-tide {\n  background-position: 0px -56px;\n  width: 64px;\n  height: 54px;\n}\n.theme-icon-tigerlily {\n  background-position: 0px -110px;\n  width: 62px;\n  height: 61px;\n}\n.theme-icon-quartz {\n  background-position: 0px -171px;\n  width: 59px;\n  height: 64px;\n}\n.theme-icon-overcast {\n  background-position: 0px -235px;\n  width: 58px;\n  height: 37px;\n}\n.theme-icon-mint {\n  background-position: 0px -272px;\n  width: 57px;\n  height: 61px;\n}\n.theme-icon-honeycomb {\n  background-position: 0px -333px;\n  width: 50px;\n  height: 58px;\n}\n.notification-area {\n  position: fixed;\n  right: 0;\n  top: 50px;\n  max-width: 320px;\n  z-index: 10000;\n}\n.notification-note {\n  opacity: 0;\n  position: relative;\n  -webkit-transition: opacity 0.5s linear , max-height 0.5s linear;\n  -moz-transition: opacity 0.5s linear , max-height 0.5s linear;\n  -ms-transition: opacity 0.5s linear , max-height 0.5s linear;\n  -o-transition: opacity 0.5s linear , max-height 0.5s linear;\n  transition: opacity 0.5s linear , max-height 0.5s linear;\n  width: 300px;\n  z-index: 2;\n}\n.notification-note .note-container {\n  padding: 10px;\n  -webkit-transform: translateY(0);\n  -moz-transform: translateY(0);\n  -ms-transform: translateY(0);\n  -o-transform: translateY(0);\n  transform: translateY(0);\n  -webkit-transition: transform 0.5s linear;\n  -moz-transition: transform 0.5s linear;\n  -ms-transition: transform 0.5s linear;\n  -o-transition: transform 0.5s linear;\n  transition: transform 0.5s linear;\n}\n.notification-note .note-container .note-body {\n  margin: 0;\n  padding: 10px;\n  position: relative;\n}\n.notification-note .note-container .note-body:not(.hide-dismiss) {\n  padding-right: 50px;\n}\n.notification-note .note-container .note-body:not(.hide-dismiss) .note-dismiss {\n  display: block;\n}\n.notification-note .note-container .note-dismiss {\n  bottom: 0;\n  cursor: pointer;\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transition: background-color 0.3s ease;\n  -moz-transition: background-color 0.3s ease;\n  -ms-transition: background-color 0.3s ease;\n  -o-transition: background-color 0.3s ease;\n  transition: background-color 0.3s ease;\n  width: 40px;\n}\n.notification-note .note-container .note-dismiss i {\n  display: block;\n  font-size: 20px;\n  left: 0;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  transform: translateY(-50%);\n  width: 100%;\n}\n.notification-note .note-container .note-dismiss:hover {\n  background-color: rgba(0,0,0,0.1);\n}\n.notification-note.in {\n  max-height: auto;\n  opacity: 1;\n}\n.notification-note.out {\n  max-height: 0 !important;\n  opacity: 0;\n  z-index: 1;\n}\n.notification-note.out .note-container {\n  -webkit-transform: translateY(-100%);\n  -moz-transform: translateY(-100%);\n  -ms-transform: translateY(-100%);\n  -o-transform: translateY(-100%);\n  transform: translateY(-100%);\n}\n"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notificationNote.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/notification/notificationNote.html                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.notificationNote.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.notificationNote.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/notification/template.notificationNote.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("notificationNote");
Template["notificationNote"] = new Template("Template.notificationNote", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "notification-note ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "class")) ];
    }
  }, "\n        ", HTML.DIV({
    class: "note-container"
  }, "\n            ", HTML.DIV({
    class: function() {
      return [ "note-body alert alert-", Spacebars.mustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "style"), "info"), " ", Blaze.If(function() {
        return Spacebars.call(view.lookup("hideDismiss"));
      }, function() {
        return "hide-dismiss";
      }) ];
    }
  }, "\n                ", HTML.DIV({
    class: "note-content"
  }, "\n                    ", Blaze.If(function() {
    return Spacebars.call(Spacebars.dot(view.lookup("."), "template"));
  }, function() {
    return [ "\n                        ", Blaze._TemplateWith(function() {
      return {
        template: Spacebars.call(Spacebars.dot(view.lookup("."), "template")),
        data: Spacebars.call(Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "templateData"), view.lookup(".")))
      };
    }, function() {
      return Spacebars.include(function() {
        return Spacebars.call(Template.__dynamic);
      });
    }), "\n                    " ];
  }, function() {
    return [ "\n                        ", Blaze.View("lookup:..text", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "text"));
    }), "\n                    " ];
  }), "\n                "), "\n                ", HTML.Raw('<div class="note-dismiss">\n                    <i class="fa fa-times"></i>\n                </div>'), "\n            "), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notificationNote.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/notification/notificationNote.js                                     //
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
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 2);
Template.notificationNote.onRendered(function () {
  var instance = Template.instance();
  Meteor.setTimeout(function () {
    var $note = instance.$('.notification-note');
    $note.css('max-height', $note.outerHeight()).addClass('in');
  }, 100);
});
Template.notificationNote.events({
  'click .note-dismiss': function (event, instance) {
    if (instance.data.promiseResolve) {
      instance.data.promiseResolve();
    } else {
      OHIF.ui.notifications.dismiss(instance.data.id);
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"popover":{"form.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/bootstrap/popover/form.html                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.form.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.form.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/bootstrap/popover/template.form.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("popoverForm");
Template["popoverForm"] = new Template("Template.popoverForm", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      mixins: "popover",
      hideValidationBox: true
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("form"), function() {
      return [ "\n        ", Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("."), "message"));
      }, function() {
        return [ "\n            ", HTML.P(Blaze.View("lookup:..message", function() {
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "message"));
        })), "\n        " ];
      }), "\n        ", Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      }), "\n        ", HTML.DIV({
        class: function() {
          return [ "popover-form-buttons ", Blaze.If(function() {
            return Spacebars.dataMustache(view.lookup("eq"), Spacebars.dot(view.lookup("."), "placement"), "left");
          }, function() {
            return "text-right";
          }) ];
        }
      }, "\n            ", Blaze._TemplateWith(function() {
        return {
          action: Spacebars.call("cancel"),
          class: Spacebars.call(Spacebars.dataMustache(view.lookup("concat"), "btn btn-cancel ", Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "cancelClass"), "btn-secondary"))),
          tagAttributes: Spacebars.call(Spacebars.dataMustache(view.lookup("extend"), Spacebars.dot(view.lookup("."), "tagAttributes"), Spacebars.kw({
            "data-dismiss": "modal"
          })))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("button"), function() {
          return Blaze.View("lookup:choose", function() {
            return Spacebars.mustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "cancelLabel"), "Cancel");
          });
        });
      }), "\n            ", Blaze._TemplateWith(function() {
        return {
          action: Spacebars.call("confirm"),
          class: Spacebars.call(Spacebars.dataMustache(view.lookup("concat"), "btn btn-confirm ", Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "confirmClass"), "btn-primary")))
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("button"), function() {
          return Blaze.View("lookup:choose", function() {
            return Spacebars.mustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "confirmLabel"), "Confirm");
          });
        });
      }), "\n        "), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"pages":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/pages/index.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./error"));
module.watch(require("./message"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"error":{"error.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/pages/error/error.html                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.error.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.error.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/pages/error/template.error.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("pageError");
Template["pageError"] = new Template("Template.pageError", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return "pageMessageAfterContent";
  }, function() {
    return Spacebars.include(view.lookupTemplate("section"), function() {
      return [ "\n        ", Blaze.Let({
        stack: function() {
          return Spacebars.call(Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "stack"), Spacebars.dot(view.lookup("."), "error", "stack")));
        }
      }, function() {
        return [ "\n            ", Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("and"), view.lookup("shallDisplayErrorStack"), view.lookup("stack"));
        }, function() {
          return [ "\n                ", HTML.DIV({
            class: "error-stack"
          }, "\n                    ", HTML.P(Blaze.View("lookup:stack", function() {
            return Spacebars.mustache(view.lookup("stack"));
          })), "\n                "), "\n            " ];
        }), "\n        " ];
      }), "\n    " ];
    });
  }), "\n    ", Blaze._TemplateWith(function() {
    return {
      class: Spacebars.call("page-error"),
      title: Spacebars.call(Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "title"), Spacebars.dot(view.lookup("."), "error", "message"), "Error")),
      message: Spacebars.call(Spacebars.dataMustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "message"), Spacebars.dot(view.lookup("."), "error", "reason"), view.lookup("getDefaultErrorMessage")))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageMessage"), function() {
      return Blaze._InOuterTemplateScope(view, function() {
        return Spacebars.include(function() {
          return Spacebars.call(view.templateContentBlock);
        });
      });
    });
  }) ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"error.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/pages/error/error.js                                                           //
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
Template.pageError.helpers({
  shallDisplayErrorStack: function () {
    return Meteor.isDevelopment;
  },
  getDefaultErrorMessage: function () {
    var instance = Template.instance();
    return instance.view.templateContentBlock ? '' : 'An error has ocurred.';
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"error.styl":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/pages/error/error.styl                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./error.styl.css"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"error.styl.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/pages/error/error.styl.css                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".theme-icon-crickets,\n.theme-icon-tide,\n.theme-icon-tigerlily,\n.theme-icon-quartz,\n.theme-icon-overcast,\n.theme-icon-mint,\n.theme-icon-honeycomb {\n  display: inline-block;\n  background: url(\"/packages/ohif_design/assets/theme-icons.png\") no-repeat;\n  overflow: hidden;\n  text-indent: -9999px;\n  text-align: left;\n}\n.theme-icon-crickets {\n  background-position: 0px 0px;\n  width: 64px;\n  height: 56px;\n}\n.theme-icon-tide {\n  background-position: 0px -56px;\n  width: 64px;\n  height: 54px;\n}\n.theme-icon-tigerlily {\n  background-position: 0px -110px;\n  width: 62px;\n  height: 61px;\n}\n.theme-icon-quartz {\n  background-position: 0px -171px;\n  width: 59px;\n  height: 64px;\n}\n.theme-icon-overcast {\n  background-position: 0px -235px;\n  width: 58px;\n  height: 37px;\n}\n.theme-icon-mint {\n  background-position: 0px -272px;\n  width: 57px;\n  height: 61px;\n}\n.theme-icon-honeycomb {\n  background-position: 0px -333px;\n  width: 50px;\n  height: 58px;\n}\n.page-error .error-stack {\n  display: table;\n  margin-top: 10px;\n  table-layout: fixed;\n  width: 100%;\n}\n.page-error .error-stack p {\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  -ms-border-radius: 4px;\n  -o-border-radius: 4px;\n  border-radius: 4px;\n  display: inline-block;\n  font-family: monospace;\n  margin: 0;\n  padding: 10px 20px;\n  overflow-x: auto;\n  white-space: pre;\n  width: 100%;\n}\n.page-error .error-stack p {\n  background-color: #14191e;\n}\nbody.theme-tide .page-error .error-stack p {\n  background-color: #14191e;\n}\nbody.theme-tigerlily .page-error .error-stack p {\n  background-color: #14191e;\n}\nbody.theme-crickets .page-error .error-stack p {\n  background-color: #14191e;\n}\nbody.theme-honeycomb .page-error .error-stack p {\n  background-color: #14191e;\n}\nbody.theme-mint .page-error .error-stack p {\n  background-color: #14191e;\n}\nbody.theme-overcast .page-error .error-stack p {\n  background-color: #14191e;\n}\nbody.theme-quartz .page-error .error-stack p {\n  background-color: #14191e;\n}\n.page-error .error-stack p {\n  border: 1px solid #263340;\n}\nbody.theme-tide .page-error .error-stack p {\n  border: 1px solid #263340;\n}\nbody.theme-tigerlily .page-error .error-stack p {\n  border: 1px solid #263340;\n}\nbody.theme-crickets .page-error .error-stack p {\n  border: 1px solid #263340;\n}\nbody.theme-honeycomb .page-error .error-stack p {\n  border: 1px solid #263340;\n}\nbody.theme-mint .page-error .error-stack p {\n  border: 1px solid #263340;\n}\nbody.theme-overcast .page-error .error-stack p {\n  border: 1px solid #263340;\n}\nbody.theme-quartz .page-error .error-stack p {\n  border: 1px solid #263340;\n}\n"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/pages/error/index.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./error.html"));
module.watch(require("./error.js"));
module.watch(require("./error.styl"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"message":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/pages/message/index.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./message.html"));
module.watch(require("./message.styl"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"message.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/pages/message/message.html                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.message.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.message.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/pages/message/template.message.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("pageMessage");
Template["pageMessage"] = new Template("Template.pageMessage", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "page-message ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "class")) ];
    }
  }, "\n        ", HTML.DIV({
    class: "message-container"
  }, "\n            ", HTML.H1({
    class: "message-title"
  }, Blaze.View("lookup:choose", function() {
    return Spacebars.mustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "title"));
  })), "\n            ", HTML.P({
    class: "message-content"
  }, Blaze.View("lookup:choose", function() {
    return Spacebars.mustache(view.lookup("choose"), Spacebars.dot(view.lookup("."), "message"));
  }), Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  })), "\n            ", Blaze._TemplateWith(function() {
    return "pageMessageAfterContent";
  }, function() {
    return Spacebars.include(view.lookupTemplate("section"));
  }), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"message.styl":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/pages/message/message.styl                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./message.styl.css"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"message.styl.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/pages/message/message.styl.css                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".theme-icon-crickets,\n.theme-icon-tide,\n.theme-icon-tigerlily,\n.theme-icon-quartz,\n.theme-icon-overcast,\n.theme-icon-mint,\n.theme-icon-honeycomb {\n  display: inline-block;\n  background: url(\"/packages/ohif_design/assets/theme-icons.png\") no-repeat;\n  overflow: hidden;\n  text-indent: -9999px;\n  text-align: left;\n}\n.theme-icon-crickets {\n  background-position: 0px 0px;\n  width: 64px;\n  height: 56px;\n}\n.theme-icon-tide {\n  background-position: 0px -56px;\n  width: 64px;\n  height: 54px;\n}\n.theme-icon-tigerlily {\n  background-position: 0px -110px;\n  width: 62px;\n  height: 61px;\n}\n.theme-icon-quartz {\n  background-position: 0px -171px;\n  width: 59px;\n  height: 64px;\n}\n.theme-icon-overcast {\n  background-position: 0px -235px;\n  width: 58px;\n  height: 37px;\n}\n.theme-icon-mint {\n  background-position: 0px -272px;\n  width: 57px;\n  height: 61px;\n}\n.theme-icon-honeycomb {\n  background-position: 0px -333px;\n  width: 50px;\n  height: 58px;\n}\n.page-message {\n  font-weight: 300;\n  padding: 10px 0 20px;\n}\n.page-message {\n  color: #fff;\n}\nbody.theme-tide .page-message {\n  color: #fff;\n}\nbody.theme-tigerlily .page-message {\n  color: #fff;\n}\nbody.theme-crickets .page-message {\n  color: #fff;\n}\nbody.theme-honeycomb .page-message {\n  color: #fff;\n}\nbody.theme-mint .page-message {\n  color: #fff;\n}\nbody.theme-overcast .page-message {\n  color: #fff;\n}\nbody.theme-quartz .page-message {\n  color: #fff;\n}\n.page-message .message-container {\n  display: table;\n  margin: 0 auto;\n  padding: 0 32px;\n}\n.page-message .message-title {\n  font-size: 30px;\n  font-weight: 300;\n}\n.page-message .message-title {\n  color: #91b9cd;\n}\nbody.theme-tide .page-message .message-title {\n  color: #91b9cd;\n}\nbody.theme-tigerlily .page-message .message-title {\n  color: #9ccdf8;\n}\nbody.theme-crickets .page-message .message-title {\n  color: #8be7b5;\n}\nbody.theme-honeycomb .page-message .message-title {\n  color: #fab797;\n}\nbody.theme-mint .page-message .message-title {\n  color: #a7e9b3;\n}\nbody.theme-overcast .page-message .message-title {\n  color: #73f2fc;\n}\nbody.theme-quartz .page-message .message-title {\n  color: #d7e8fe;\n}\n.page-message .message-content {\n  font-size: 18px;\n}\n.page-message a,\n.page-message a:hover,\n.page-message a:active,\n.page-message a:focus {\n  color: #20a5d6;\n}\nbody.theme-tide .page-message a {\n  color: #20a5d6;\n}\nbody.theme-tide .page-message a:hover {\n  color: #20a5d6;\n}\nbody.theme-tide .page-message a:active {\n  color: #20a5d6;\n}\nbody.theme-tide .page-message a:focus {\n  color: #20a5d6;\n}\nbody.theme-tigerlily .page-message a {\n  color: #fa8947;\n}\nbody.theme-tigerlily .page-message a:hover {\n  color: #fa8947;\n}\nbody.theme-tigerlily .page-message a:active {\n  color: #fa8947;\n}\nbody.theme-tigerlily .page-message a:focus {\n  color: #fa8947;\n}\nbody.theme-crickets .page-message a {\n  color: #d4c3c1;\n}\nbody.theme-crickets .page-message a:hover {\n  color: #d4c3c1;\n}\nbody.theme-crickets .page-message a:active {\n  color: #d4c3c1;\n}\nbody.theme-crickets .page-message a:focus {\n  color: #d4c3c1;\n}\nbody.theme-honeycomb .page-message a {\n  color: #cda56b;\n}\nbody.theme-honeycomb .page-message a:hover {\n  color: #cda56b;\n}\nbody.theme-honeycomb .page-message a:active {\n  color: #cda56b;\n}\nbody.theme-honeycomb .page-message a:focus {\n  color: #cda56b;\n}\nbody.theme-mint .page-message a {\n  color: #31b166;\n}\nbody.theme-mint .page-message a:hover {\n  color: #31b166;\n}\nbody.theme-mint .page-message a:active {\n  color: #31b166;\n}\nbody.theme-mint .page-message a:focus {\n  color: #31b166;\n}\nbody.theme-overcast .page-message a {\n  color: #507d80;\n}\nbody.theme-overcast .page-message a:hover {\n  color: #507d80;\n}\nbody.theme-overcast .page-message a:active {\n  color: #507d80;\n}\nbody.theme-overcast .page-message a:focus {\n  color: #507d80;\n}\nbody.theme-quartz .page-message a {\n  color: #7858ce;\n}\nbody.theme-quartz .page-message a:hover {\n  color: #7858ce;\n}\nbody.theme-quartz .page-message a:active {\n  color: #7858ce;\n}\nbody.theme-quartz .page-message a:focus {\n  color: #7858ce;\n}\n.modal .page-message .page-message,\n.modal .page-message .message-container {\n  padding: 0;\n}\n.modal .page-message .message-title {\n  display: none;\n}\n"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"paginationArea":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/paginationArea/index.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./paginationArea.html"));
module.watch(require("./paginationArea.js"));
module.watch(require("./paginationArea.styl"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"paginationArea.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/paginationArea/paginationArea.html                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.paginationArea.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.paginationArea.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/paginationArea/template.paginationArea.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("paginationArea");
Template["paginationArea"] = new Template("Template.paginationArea", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return {
      class: Spacebars.call(Spacebars.dataMustache(view.lookup("concat"), "pagination-area ", Spacebars.dot(view.lookup("."), "class"))),
      schema: Spacebars.call(Spacebars.dot(view.lookup("instance"), "schema"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("form"), function() {
      return [ "\n        ", HTML.DIV({
        class: "row"
      }, "\n            ", HTML.DIV({
        class: "col-xs-4 col-sm-3 col-md-3"
      }, "\n                 ", HTML.DIV({
        class: "form-inline form-group rows-per-page"
      }, "\n                    ", HTML.SPAN("Show"), "\n                    ", Blaze._TemplateWith(function() {
        return {
          class: Spacebars.call("select-small"),
          key: Spacebars.call("rowsPerPage"),
          hideSearch: Spacebars.call(true)
        };
      }, function() {
        return Spacebars.include(view.lookupTemplate("inputSelect"));
      }), "\n                    ", HTML.SPAN("rows per page"), "\n                "), "\n            "), "\n            ", HTML.DIV({
        class: "col-xs-8 col-sm-9 col-md-9"
      }, "\n                ", HTML.DIV({
        class: "form-inline form-group page-number"
      }, "\n                    ", HTML.LABEL("\n                        ", HTML.UL({
        class: "pagination-control no-margins"
      }), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"paginationArea.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/paginationArea/paginationArea.js                                               //
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
module.watch(require("twbs-pagination"));
var visiblePages = 10;
Template.paginationArea.onCreated(function () {
  var instance = Template.instance(); // Create the rowsPerPage schema

  instance.schema = new SimpleSchema({
    rowsPerPage: {
      type: Number,
      allowedValues: [25, 50, 100],
      defaultValue: 25
    }
  });
});
Template.paginationArea.onRendered(function () {
  var instance = Template.instance();
  instance.$paginationControl = instance.$('.pagination-control'); // Track changes on recordCount and rowsPerPage

  instance.autorun(function () {
    var recordCount = instance.data.recordCount.get();
    var rowsPerPage = instance.data.rowsPerPage.get(); // Destroy plugin if exists

    if (instance.$paginationControl.data().twbsPagination) {
      instance.$paginationControl.twbsPagination('destroy');
    }

    if (recordCount && rowsPerPage) {
      var totalPages = Math.ceil(recordCount / rowsPerPage); // Initialize plugin

      instance.$paginationControl.twbsPagination({
        totalPages: totalPages,
        visiblePages: visiblePages,
        onPageClick: function (event, page) {
          // Update currentPage
          // Decrease page by 1 to set currentPage
          // Since reactive table current page index starts by 0
          instance.data.currentPage.set(page - 1);
        }
      });
    }
  });
});
Template.paginationArea.onDestroyed(function () {
  var instance = Template.instance();

  if (instance.$paginationControl.data().twbsPagination) {
    instance.$paginationControl.twbsPagination('destroy');
  }
});
Template.paginationArea.helpers({
  recordCount: function () {
    var instance = Template.instance();
    return instance.data.recordCount.get();
  },
  isRowsPerPageSelected: function (rowsPerPage) {
    var instance = Template.instance();
    return rowsPerPage === instance.data.rowsPerPage.get();
  }
});
Template.paginationArea.events({
  'change [data-key=rowsPerPage]': function (event, instance) {
    var rowsPerPage = $(event.currentTarget).data('component').value(); // Update rowsPerPage

    instance.data.rowsPerPage.set(parseInt(rowsPerPage, 10));
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"paginationArea.styl":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/paginationArea/paginationArea.styl                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./paginationArea.styl.css"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"paginationArea.styl.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/paginationArea/paginationArea.styl.css                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".theme-icon-crickets,\n.theme-icon-tide,\n.theme-icon-tigerlily,\n.theme-icon-quartz,\n.theme-icon-overcast,\n.theme-icon-mint,\n.theme-icon-honeycomb {\n  display: inline-block;\n  background: url(\"/packages/ohif_design/assets/theme-icons.png\") no-repeat;\n  overflow: hidden;\n  text-indent: -9999px;\n  text-align: left;\n}\n.theme-icon-crickets {\n  background-position: 0px 0px;\n  width: 64px;\n  height: 56px;\n}\n.theme-icon-tide {\n  background-position: 0px -56px;\n  width: 64px;\n  height: 54px;\n}\n.theme-icon-tigerlily {\n  background-position: 0px -110px;\n  width: 62px;\n  height: 61px;\n}\n.theme-icon-quartz {\n  background-position: 0px -171px;\n  width: 59px;\n  height: 64px;\n}\n.theme-icon-overcast {\n  background-position: 0px -235px;\n  width: 58px;\n  height: 37px;\n}\n.theme-icon-mint {\n  background-position: 0px -272px;\n  width: 57px;\n  height: 61px;\n}\n.theme-icon-honeycomb {\n  background-position: 0px -333px;\n  width: 50px;\n  height: 58px;\n}\n.pagination-area {\n  font-size: 13px;\n  font-weight: normal !important;\n}\n.pagination-area label {\n  font-weight: normal;\n}\n.pagination-area select {\n  color: #fff;\n}\n.pagination-area select {\n  background-color: #000;\n}\nbody.theme-tide .pagination-area select {\n  background-color: #000;\n}\nbody.theme-tigerlily .pagination-area select {\n  background-color: #000;\n}\nbody.theme-crickets .pagination-area select {\n  background-color: #000;\n}\nbody.theme-honeycomb .pagination-area select {\n  background-color: #000;\n}\nbody.theme-mint .pagination-area select {\n  background-color: #000;\n}\nbody.theme-overcast .pagination-area select {\n  background-color: #000;\n}\nbody.theme-quartz .pagination-area select {\n  background-color: #000;\n}\n.rows-per-page label.wrapperLabel {\n  display: inline-table !important;\n  margin: 0 4px;\n}\n.rows-per-page label.wrapperLabel select {\n  width: 42px;\n}\n.page-number {\n  margin: 0;\n  text-align: right;\n}\n.page-number label {\n  font-weight: normal;\n}\n.page-number label ul.pagination-control {\n  margin: 0;\n}\n.page-number label ul.pagination-control li a {\n  padding: 4px 8px;\n  color: #fff;\n  padding: 4px 8px;\n}\n.page-number label ul.pagination-control li a {\n  background-color: #000;\n}\nbody.theme-tide .page-number label ul.pagination-control li a {\n  background-color: #000;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control li a {\n  background-color: #000;\n}\nbody.theme-crickets .page-number label ul.pagination-control li a {\n  background-color: #000;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control li a {\n  background-color: #000;\n}\nbody.theme-mint .page-number label ul.pagination-control li a {\n  background-color: #000;\n}\nbody.theme-overcast .page-number label ul.pagination-control li a {\n  background-color: #000;\n}\nbody.theme-quartz .page-number label ul.pagination-control li a {\n  background-color: #000;\n}\n.page-number label ul.pagination-control li a {\n  border-color: #263340;\n}\nbody.theme-tide .page-number label ul.pagination-control li a {\n  border-color: #263340;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control li a {\n  border-color: #263340;\n}\nbody.theme-crickets .page-number label ul.pagination-control li a {\n  border-color: #263340;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control li a {\n  border-color: #263340;\n}\nbody.theme-mint .page-number label ul.pagination-control li a {\n  border-color: #263340;\n}\nbody.theme-overcast .page-number label ul.pagination-control li a {\n  border-color: #263340;\n}\nbody.theme-quartz .page-number label ul.pagination-control li a {\n  border-color: #263340;\n}\n.page-number label ul.pagination-control li a {\n  background-color: #14191e;\n}\nbody.theme-tide .page-number label ul.pagination-control li a {\n  background-color: #14191e;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control li a {\n  background-color: #14191e;\n}\nbody.theme-crickets .page-number label ul.pagination-control li a {\n  background-color: #14191e;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control li a {\n  background-color: #14191e;\n}\nbody.theme-mint .page-number label ul.pagination-control li a {\n  background-color: #14191e;\n}\nbody.theme-overcast .page-number label ul.pagination-control li a {\n  background-color: #14191e;\n}\nbody.theme-quartz .page-number label ul.pagination-control li a {\n  background-color: #14191e;\n}\n.page-number label ul.pagination-control li a:hover {\n  color: #20a5d6;\n}\nbody.theme-tide .page-number label ul.pagination-control li a:hover {\n  color: #20a5d6;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control li a:hover {\n  color: #fa8947;\n}\nbody.theme-crickets .page-number label ul.pagination-control li a:hover {\n  color: #d4c3c1;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control li a:hover {\n  color: #cda56b;\n}\nbody.theme-mint .page-number label ul.pagination-control li a:hover {\n  color: #31b166;\n}\nbody.theme-overcast .page-number label ul.pagination-control li a:hover {\n  color: #507d80;\n}\nbody.theme-quartz .page-number label ul.pagination-control li a:hover {\n  color: #7858ce;\n}\n.page-number label ul.pagination-control .active a {\n  border-color: #ddd;\n  color: #fff;\n}\n.page-number label ul.pagination-control .active a {\n  background-color: #263340;\n}\nbody.theme-tide .page-number label ul.pagination-control .active a {\n  background-color: #263340;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .active a {\n  background-color: #263340;\n}\nbody.theme-crickets .page-number label ul.pagination-control .active a {\n  background-color: #263340;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .active a {\n  background-color: #263340;\n}\nbody.theme-mint .page-number label ul.pagination-control .active a {\n  background-color: #263340;\n}\nbody.theme-overcast .page-number label ul.pagination-control .active a {\n  background-color: #263340;\n}\nbody.theme-quartz .page-number label ul.pagination-control .active a {\n  background-color: #263340;\n}\n.page-number label ul.pagination-control .disabled a,\n.page-number label ul.pagination-control .disabled a:hover,\n.page-number label ul.pagination-control .disabled a:focus,\n.page-number label ul.pagination-control .disabled a:active {\n  background-color: #14191e;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled a {\n  background-color: #14191e;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled a:hover {\n  background-color: #14191e;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled a:focus {\n  background-color: #14191e;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled a:active {\n  background-color: #14191e;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled a {\n  background-color: #14191e;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled a:hover {\n  background-color: #14191e;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled a:focus {\n  background-color: #14191e;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled a:active {\n  background-color: #14191e;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled a {\n  background-color: #14191e;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled a:hover {\n  background-color: #14191e;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled a:focus {\n  background-color: #14191e;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled a:active {\n  background-color: #14191e;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled a {\n  background-color: #14191e;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled a:hover {\n  background-color: #14191e;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled a:focus {\n  background-color: #14191e;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled a:active {\n  background-color: #14191e;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled a {\n  background-color: #14191e;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled a:hover {\n  background-color: #14191e;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled a:focus {\n  background-color: #14191e;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled a:active {\n  background-color: #14191e;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled a {\n  background-color: #14191e;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled a:hover {\n  background-color: #14191e;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled a:focus {\n  background-color: #14191e;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled a:active {\n  background-color: #14191e;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled a {\n  background-color: #14191e;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled a:hover {\n  background-color: #14191e;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled a:focus {\n  background-color: #14191e;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled a:active {\n  background-color: #14191e;\n}\n.page-number label ul.pagination-control .disabled a,\n.page-number label ul.pagination-control .disabled a:hover,\n.page-number label ul.pagination-control .disabled a:focus,\n.page-number label ul.pagination-control .disabled a:active {\n  border-color: #263340;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled a {\n  border-color: #263340;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled a:hover {\n  border-color: #263340;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled a:focus {\n  border-color: #263340;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled a:active {\n  border-color: #263340;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled a {\n  border-color: #263340;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled a:hover {\n  border-color: #263340;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled a:focus {\n  border-color: #263340;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled a:active {\n  border-color: #263340;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled a {\n  border-color: #263340;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled a:hover {\n  border-color: #263340;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled a:focus {\n  border-color: #263340;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled a:active {\n  border-color: #263340;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled a {\n  border-color: #263340;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled a:hover {\n  border-color: #263340;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled a:focus {\n  border-color: #263340;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled a:active {\n  border-color: #263340;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled a {\n  border-color: #263340;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled a:hover {\n  border-color: #263340;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled a:focus {\n  border-color: #263340;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled a:active {\n  border-color: #263340;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled a {\n  border-color: #263340;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled a:hover {\n  border-color: #263340;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled a:focus {\n  border-color: #263340;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled a:active {\n  border-color: #263340;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled a {\n  border-color: #263340;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled a:hover {\n  border-color: #263340;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled a:focus {\n  border-color: #263340;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled a:active {\n  border-color: #263340;\n}\n.page-number label ul.pagination-control .disabled a,\n.page-number label ul.pagination-control .disabled a:hover,\n.page-number label ul.pagination-control .disabled a:focus,\n.page-number label ul.pagination-control .disabled a:active {\n  color: #516873;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled a {\n  color: #516873;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled a:hover {\n  color: #516873;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled a:focus {\n  color: #516873;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled a:active {\n  color: #516873;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled a {\n  color: #516873;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled a:hover {\n  color: #516873;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled a:focus {\n  color: #516873;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled a:active {\n  color: #516873;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled a {\n  color: #516873;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled a:hover {\n  color: #516873;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled a:focus {\n  color: #516873;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled a:active {\n  color: #516873;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled a {\n  color: #516873;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled a:hover {\n  color: #516873;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled a:focus {\n  color: #516873;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled a:active {\n  color: #516873;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled a {\n  color: #516873;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled a:hover {\n  color: #516873;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled a:focus {\n  color: #516873;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled a:active {\n  color: #516873;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled a {\n  color: #516873;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled a:hover {\n  color: #516873;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled a:focus {\n  color: #516873;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled a:active {\n  color: #516873;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled a {\n  color: #516873;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled a:hover {\n  color: #516873;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled a:focus {\n  color: #516873;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled a:active {\n  color: #516873;\n}\n.page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  background-color: #16202b;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  background-color: #16202b;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  background-color: #26333f;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  background-color: #2b141b;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  background-color: #252228;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  background-color: #1d232a;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  background-color: #252228;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  background-color: #2b2e3f;\n}\n.page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  color: #20a5d6;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  color: #20a5d6;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  color: #fa8947;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  color: #d4c3c1;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  color: #cda56b;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  color: #31b166;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  color: #507d80;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled:not(.disabled):hover a {\n  color: #7858ce;\n}\n.page-number label ul.pagination-control .disabled.active a {\n  background-color: #16202b;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled.active a {\n  background-color: #16202b;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled.active a {\n  background-color: #26333f;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled.active a {\n  background-color: #2b141b;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled.active a {\n  background-color: #252228;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled.active a {\n  background-color: #1d232a;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled.active a {\n  background-color: #252228;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled.active a {\n  background-color: #2b2e3f;\n}\n.page-number label ul.pagination-control .disabled.active a {\n  color: #20a5d6;\n}\nbody.theme-tide .page-number label ul.pagination-control .disabled.active a {\n  color: #20a5d6;\n}\nbody.theme-tigerlily .page-number label ul.pagination-control .disabled.active a {\n  color: #fa8947;\n}\nbody.theme-crickets .page-number label ul.pagination-control .disabled.active a {\n  color: #d4c3c1;\n}\nbody.theme-honeycomb .page-number label ul.pagination-control .disabled.active a {\n  color: #cda56b;\n}\nbody.theme-mint .page-number label ul.pagination-control .disabled.active a {\n  color: #31b166;\n}\nbody.theme-overcast .page-number label ul.pagination-control .disabled.active a {\n  color: #507d80;\n}\nbody.theme-quartz .page-number label ul.pagination-control .disabled.active a {\n  color: #7858ce;\n}\n"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"playground":{"playground.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/playground/playground.html                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.playground.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.playground.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/playground/template.playground.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("componentPlayground");
Template["componentPlayground"] = new Template("Template.componentPlayground", (function() {
  var view = this;
  return HTML.Raw('<div class="layout-container">\n        <div class="layout-header">\n            <div class="logo">LOGO</div>\n            <div class="toolbar">\n                <div class="toolbar-main">\n                    <button class="js-toggle-left">Toggle left</button>\n                    <button>Tool 1</button>\n                    <button>Tool 2</button>\n                    <button>Tool 3</button>\n                    <button class="js-tool-more">More...</button>\n                    <button class="js-toggle-right pull-right">Toggle right</button>\n                </div>\n                <div class="toolbar-drawer">\n                    <button>Tool 4</button>\n                    <button>Tool 5</button>\n                    <button>Tool 6</button>\n                    <button>Tool 7</button>\n                </div>\n            </div>\n        </div>\n        <div class="layout-body">\n            <div class="layout-sidebar layout-sidebar-left">LEFT|LEFT|LEFT</div>\n            <div class="layout-main">MAIN CONTENT</div>\n            <div class="layout-sidebar layout-sidebar-right">RIGHT|RIGHT|RIGHT|RIGHT</div>\n        </div>\n    </div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"playground.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/playground/playground.js                                                       //
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
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 2);
OHIF.ui.layoutState = {
  leftSidebar: new ReactiveVar(false),
  rightSidebar: new ReactiveVar(false),
  toolsDrawer: new ReactiveVar(false)
};
Template.componentPlayground.onRendered(function () {
  var instance = Template.instance();
  instance.$('.toolbar-drawer').adjustMax('height');
  instance.autorun(function () {
    var state = OHIF.ui.layoutState.toolsDrawer.get();
    instance.$('.toolbar-drawer').toggleClass('open', state);
  });
  instance.$('.layout-sidebar-left').adjustMax('width');
  instance.autorun(function () {
    var state = OHIF.ui.layoutState.leftSidebar.get();
    instance.$('.layout-sidebar-left').toggleClass('open', state);
  });
  instance.$('.layout-sidebar-right').adjustMax('width');
  instance.autorun(function () {
    var state = OHIF.ui.layoutState.rightSidebar.get();
    instance.$('.layout-sidebar-right').toggleClass('open', state);
  });
});
Template.componentPlayground.events({
  'click .js-tool-more': function (event, instance) {
    var currentState = OHIF.ui.layoutState.toolsDrawer.get();
    OHIF.ui.layoutState.toolsDrawer.set(!currentState);
  },
  'click .js-toggle-left': function (event, instance) {
    var currentState = OHIF.ui.layoutState.leftSidebar.get();
    OHIF.ui.layoutState.leftSidebar.set(!currentState);
  },
  'click .js-toggle-right': function (event, instance) {
    var currentState = OHIF.ui.layoutState.rightSidebar.get();
    OHIF.ui.layoutState.rightSidebar.set(!currentState);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"playground.styl":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/playground/playground.styl                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./playground.styl.css"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"playground.styl.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/playground/playground.styl.css                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".layout-container {\n  align-items: stretch;\n  display: flex;\n  flex-flow: column nowrap;\n  height: 100vh;\n}\n.layout-container .layout-header {\n  background-color: #0ff;\n  flex-grow: 0;\n}\n.layout-container .layout-body {\n  align-items: stretch;\n  display: flex;\n  flex-grow: 1;\n}\n.layout-sidebar {\n  background-color: #0f0;\n  flex-grow: 0;\n}\n.layout-main {\n  background-color: #fff;\n  flex-grow: 1;\n}\n.toolbar-drawer {\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n}\n.toolbar-drawer:not(.open) {\n  max-height: 0 !important;\n}\n.layout-sidebar-left,\n.layout-sidebar-right {\n  overflow: hidden;\n  transition: max-width 0.3s ease;\n}\n.layout-sidebar-left:not(.open),\n.layout-sidebar-right:not(.open) {\n  max-width: 0 !important;\n}\n"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"scrollArea":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/scrollArea/index.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./scrollArea.html"));
module.watch(require("./scrollArea.js"));
module.watch(require("./scrollArea.styl"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"scrollArea.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/scrollArea/scrollArea.html                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.scrollArea.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.scrollArea.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/scrollArea/template.scrollArea.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("scrollArea");
Template["scrollArea"] = new Template("Template.scrollArea", (function() {
  var view = this;
  return HTML.DIV({
    class: function() {
      return [ "scroll-area ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "class")) ];
    }
  }, "\n        ", HTML.DIV({
    class: function() {
      return [ "scrollable ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "scrollableClass")), " ", Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("instance"), "config", "scrollX"));
      }, function() {
        return "scroll-x";
      }), " ", Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("instance"), "config", "scrollY"));
      }, function() {
        return "scroll-y";
      }) ];
    }
  }, "\n            ", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {
      return Spacebars.call(view.templateContentBlock);
    });
  }), "\n        "), HTML.Raw('\n        <div class="scroll-nav scroll-nav-up"></div>\n        <div class="scroll-nav scroll-nav-down"></div>\n    '));
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"scrollArea.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/scrollArea/scrollArea.js                                                       //
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
Template.scrollArea.onCreated(function () {
  var instance = Template.instance();
  var data = instance.data;
  var defaultConfig = {
    hideScrollbar: true,
    scrollY: true,
    scrollX: false,
    scrollStep: 100
  };
  instance.config = _.defaults(data || {}, defaultConfig);
});
Template.scrollArea.onRendered(function () {
  var instance = Template.instance();
  instance.adjustMargins = _.throttle(function () {
    var config = instance.config;

    if (config.hideScrollbar) {
      var $scrollable = instance.$('.scrollable').first();
      var x = config.scrollX ? 1 : 0;
      var y = config.scrollY ? 1 : 0;
      var scrollbarSize = OHIF.ui.getScrollbarSize();
      $scrollable.css({
        'margin-right': 0 - scrollbarSize[0] * y,
        'margin-bottom': 0 - scrollbarSize[1] * x
      });
    }
  }, 150);
  instance.$scrollable = instance.$('.scrollable').first();
  instance.scrollHandler = _.throttle(function (event) {
    var $scrollable = event ? $(event.currentTarget) : instance.$scrollable;
    var $scrollArea = $scrollable.closest('.scroll-area');
    if ($scrollable[0] !== instance.$('.scrollable')[0]) return;
    $scrollArea.removeClass('can-scroll-up can-scroll-down');
    var height = $scrollable.outerHeight();
    var scrollTop = $scrollable.scrollTop();
    var scrollHeight = $scrollable[0].scrollHeight; // Stop here if unable to scroll

    if (scrollHeight <= height) return; // Check if can scroll up

    if (scrollTop) {
      $scrollArea.addClass('can-scroll-up');
    } // Check if can scroll down


    if (scrollTop + height < scrollHeight) {
      $scrollArea.addClass('can-scroll-down');
    }
  }, 150);
  instance.scrollHandler();
  instance.adjustMargins();
  $(window).on('resize', instance.adjustMargins);
});
Template.scrollArea.onDestroyed(function () {
  var instance = Template.instance();
  $(window).off('resize', instance.adjustMargins);
});
Template.scrollArea.events({
  'scroll .scrollable, mouseenter .scrollable, transitionend .scrollable': function (event, instance) {
    instance.scrollHandler(event);
  },
  'click .scroll-nav-down': function (event, instance) {
    var $scrollable = $(event.currentTarget).siblings('.scrollable');
    var height = $scrollable.outerHeight();
    var currentTop = $scrollable.scrollTop();
    var scrollHeight = $scrollable[0].scrollHeight;
    var limit = scrollHeight - height;
    var scrollTop = currentTop + instance.data.scrollStep;
    scrollTop = scrollTop > limit ? limit : scrollTop;
    $scrollable.stop().animate({
      scrollTop: scrollTop
    }, 150, 'swing');
  },
  'click .scroll-nav-up': function (event, instance) {
    var $scrollable = $(event.currentTarget).siblings('.scrollable');
    var currentTop = $scrollable.scrollTop();
    var scrollTop = currentTop - instance.data.scrollStep;
    scrollTop = scrollTop < 0 ? 0 : scrollTop;
    $scrollable.stop().animate({
      scrollTop: scrollTop
    }, 150, 'swing');
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"scrollArea.styl":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/client/components/scrollArea/scrollArea.styl                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./scrollArea.styl.css"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"scrollArea.styl.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/components/scrollArea/scrollArea.styl.css                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(
  ".theme-icon-crickets,\n.theme-icon-tide,\n.theme-icon-tigerlily,\n.theme-icon-quartz,\n.theme-icon-overcast,\n.theme-icon-mint,\n.theme-icon-honeycomb {\n  display: inline-block;\n  background: url(\"/packages/ohif_design/assets/theme-icons.png\") no-repeat;\n  overflow: hidden;\n  text-indent: -9999px;\n  text-align: left;\n}\n.theme-icon-crickets {\n  background-position: 0px 0px;\n  width: 64px;\n  height: 56px;\n}\n.theme-icon-tide {\n  background-position: 0px -56px;\n  width: 64px;\n  height: 54px;\n}\n.theme-icon-tigerlily {\n  background-position: 0px -110px;\n  width: 62px;\n  height: 61px;\n}\n.theme-icon-quartz {\n  background-position: 0px -171px;\n  width: 59px;\n  height: 64px;\n}\n.theme-icon-overcast {\n  background-position: 0px -235px;\n  width: 58px;\n  height: 37px;\n}\n.theme-icon-mint {\n  background-position: 0px -272px;\n  width: 57px;\n  height: 61px;\n}\n.theme-icon-honeycomb {\n  background-position: 0px -333px;\n  width: 50px;\n  height: 58px;\n}\n.scroll-area {\n  overflow: hidden;\n  position: relative;\n}\n.scroll-area .scrollable {\n  max-height: inherit;\n  overflow: hidden;\n  zoom: 1;\n}\n.scroll-area .scrollable.scroll-x {\n  overflow-x: scroll;\n}\n.scroll-area .scrollable.scroll-y {\n  overflow-y: scroll;\n}\n.scroll-area.fit {\n  height: 100%;\n  width: 100%;\n}\n.scroll-area.fit .scrollable {\n  bottom: 0;\n  left: 0;\n  max-height: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.scroll-area .scroll-nav {\n  background-color: rgba(0,0,0,0.75);\n  -webkit-box-shadow: 0 0 10px 10px rgba(0,0,0,0.75);\n  -moz-box-shadow: 0 0 10px 10px rgba(0,0,0,0.75);\n  -ms-box-shadow: 0 0 10px 10px rgba(0,0,0,0.75);\n  -o-box-shadow: 0 0 10px 10px rgba(0,0,0,0.75);\n  box-shadow: 0 0 10px 10px rgba(0,0,0,0.75);\n  cursor: pointer;\n  height: 24px;\n  left: 10px;\n  opacity: 0;\n  position: absolute;\n  right: 10px;\n  -webkit-transition: transform 0.3s ease , opacity 0.3s ease , background-color 0.3s ease , box-shadow 0.3s ease;\n  -moz-transition: transform 0.3s ease , opacity 0.3s ease , background-color 0.3s ease , box-shadow 0.3s ease;\n  -ms-transition: transform 0.3s ease , opacity 0.3s ease , background-color 0.3s ease , box-shadow 0.3s ease;\n  -o-transition: transform 0.3s ease , opacity 0.3s ease , background-color 0.3s ease , box-shadow 0.3s ease;\n  transition: transform 0.3s ease , opacity 0.3s ease , background-color 0.3s ease , box-shadow 0.3s ease;\n}\n.scroll-area .scroll-nav:after {\n  display: block;\n  font-family: FontAwesome;\n  font-size: 20px;\n  text-align: center;\n  -webkit-transition: color 0.3s ease;\n  -moz-transition: color 0.3s ease;\n  -ms-transition: color 0.3s ease;\n  -o-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n}\n.scroll-area .scroll-nav:after {\n  color: #20a5d6;\n}\nbody.theme-tide .scroll-area .scroll-nav:after {\n  color: #20a5d6;\n}\nbody.theme-tigerlily .scroll-area .scroll-nav:after {\n  color: #fa8947;\n}\nbody.theme-crickets .scroll-area .scroll-nav:after {\n  color: #d4c3c1;\n}\nbody.theme-honeycomb .scroll-area .scroll-nav:after {\n  color: #cda56b;\n}\nbody.theme-mint .scroll-area .scroll-nav:after {\n  color: #31b166;\n}\nbody.theme-overcast .scroll-area .scroll-nav:after {\n  color: #507d80;\n}\nbody.theme-quartz .scroll-area .scroll-nav:after {\n  color: #7858ce;\n}\n.scroll-area .scroll-nav:hover {\n  background-color: rgba(0,0,0,0.9);\n  -webkit-box-shadow: 0 0 10px 10px rgba(0,0,0,0.9);\n  -moz-box-shadow: 0 0 10px 10px rgba(0,0,0,0.9);\n  -ms-box-shadow: 0 0 10px 10px rgba(0,0,0,0.9);\n  -o-box-shadow: 0 0 10px 10px rgba(0,0,0,0.9);\n  box-shadow: 0 0 10px 10px rgba(0,0,0,0.9);\n}\n.scroll-area .scroll-nav:hover:after {\n  color: #fff;\n}\nbody.theme-tide .scroll-area .scroll-nav:hover:after {\n  color: #fff;\n}\nbody.theme-tigerlily .scroll-area .scroll-nav:hover:after {\n  color: #fff;\n}\nbody.theme-crickets .scroll-area .scroll-nav:hover:after {\n  color: #fff;\n}\nbody.theme-honeycomb .scroll-area .scroll-nav:hover:after {\n  color: #fff;\n}\nbody.theme-mint .scroll-area .scroll-nav:hover:after {\n  color: #fff;\n}\nbody.theme-overcast .scroll-area .scroll-nav:hover:after {\n  color: #fff;\n}\nbody.theme-quartz .scroll-area .scroll-nav:hover:after {\n  color: #fff;\n}\n.scroll-area .scroll-nav-up {\n  -webkit-border-bottom-left-radius: 12px;\n  -moz-border-bottom-left-radius: 12px;\n  -ms-border-bottom-left-radius: 12px;\n  -o-border-bottom-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n  -webkit-border-bottom-right-radius: 12px;\n  -moz-border-bottom-right-radius: 12px;\n  -ms-border-bottom-right-radius: 12px;\n  -o-border-bottom-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n  top: 0;\n  -webkit-transform: translateY(-24px);\n  -moz-transform: translateY(-24px);\n  -ms-transform: translateY(-24px);\n  -o-transform: translateY(-24px);\n  transform: translateY(-24px);\n}\n.scroll-area .scroll-nav-up:after {\n  content: '\\f102';\n}\n.scroll-area .scroll-nav-down {\n  -webkit-border-top-left-radius: 12px;\n  -moz-border-top-left-radius: 12px;\n  -ms-border-top-left-radius: 12px;\n  -o-border-top-left-radius: 12px;\n  border-top-left-radius: 12px;\n  -webkit-border-top-right-radius: 12px;\n  -moz-border-top-right-radius: 12px;\n  -ms-border-top-right-radius: 12px;\n  -o-border-top-right-radius: 12px;\n  border-top-right-radius: 12px;\n  bottom: 0;\n  -webkit-transform: translateY(24px);\n  -moz-transform: translateY(24px);\n  -ms-transform: translateY(24px);\n  -o-transform: translateY(24px);\n  transform: translateY(24px);\n}\n.scroll-area .scroll-nav-down:after {\n  content: '\\f103';\n}\n.scroll-area.can-scroll-up .scroll-nav-up,\n.scroll-area.can-scroll-down .scroll-nav-down {\n  opacity: 1;\n  -webkit-transform: translateY(0);\n  -moz-transform: translateY(0);\n  -ms-transform: translateY(0);\n  -o-transform: translateY(0);\n  transform: translateY(0);\n}\n"
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"helpers":{"blaze.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/helpers/blaze.js                                                                          //
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
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 3);

/**
 * Global Blaze UI helpers to work with Blaze
 */
// Return the absolute url
Template.registerHelper('absoluteUrl', function (path) {
  return OHIF.utils.absoluteUrl(path);
}); // Return the current template instance

Template.registerHelper('instance', function () {
  return Template.instance();
}); // Return the session value for the given key

Template.registerHelper('session', function (key) {
  return Session.get(key);
}); // Return the value for given parameter regardless if it's reactive or not

Template.registerHelper('reactive', function (parameter) {
  if (parameter instanceof ReactiveVar) {
    return parameter.get();
  }

  return parameter;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"data.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/helpers/data.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 0);
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 1);

/**
 * Global Blaze UI helpers to manipulate data
 */
// Base extend function to be used by extend and clone helpers
var extend = function () {
  for (var _len = arguments.length, argsArray = new Array(_len), _key = 0; _key < _len; _key++) {
    argsArray[_key] = arguments[_key];
  }

  // Create the resulting object
  var result = argsArray[0] || {}; // Extract the Spacebars kw hash

  var lastArg = _.last(argsArray);

  var kwHash = lastArg ? lastArg.hash : null; // Extract the given objects

  var objects = _.initial(argsArray); // Iterate over the given objects


  _.each(objects, function (current) {
    // Stop here if the current argument is not an object
    if ((0, _typeof2.default)(current) !== 'object') {
      return;
    } // Extend the resulting object with the current argument object


    _.extend(result, current);
  }); // Extend the resulting object with the Spacebars kw hash


  _.extend(result, kwHash); // Return the resulting object


  return result;
}; // Extend the first argument object it with the other argument objects


Template.registerHelper('extend', function () {
  return extend.apply(void 0, arguments);
}); // Create a new object and extends it with the argument objects

Template.registerHelper('clone', function () {
  for (var _len2 = arguments.length, argsArray = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    argsArray[_key2] = arguments[_key2];
  }

  var newArgs = argsArray.slice();
  newArgs.unshift({});
  return extend.apply(void 0, (0, _toConsumableArray2.default)(newArgs));
}); // Choose the first truthy value in the given values

Template.registerHelper('choose', function () {
  var result;

  for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    values[_key3] = arguments[_key3];
  }

  _.each(_.initial(values, 1), function (value) {
    if (result) {
      return;
    }

    result = value;
  });

  return result;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"debug.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/helpers/debug.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 0);
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 2);

/**
 * Global Blaze UI helpers to development debugging
 */
// Stop here if it's not development environment
if (!Meteor.isDevelopment) {
  return;
} // Debug some value on console


Template.registerHelper('debug', function () {
  var _console;

  (_console = console).debug.apply(_console, arguments);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/helpers/index.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./blaze.js"));
module.watch(require("./data.js"));
module.watch(require("./debug.js"));
module.watch(require("./logical.js"));
module.watch(require("./number.js"));
module.watch(require("./string.js"));
module.watch(require("./typing.js"));
module.watch(require("./ui.js"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"logical.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/helpers/logical.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 0);
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 1);

/**
 * Global Blaze UI helpers to work with logical operations
 */
// Convert any value into a boolean value
Template.registerHelper('bool', function (value) {
  return !!value;
}); // Check if two values are identical

Template.registerHelper('eq', function (a, b) {
  return a === b;
}); // Check if two values are different

Template.registerHelper('ne', function (a, b) {
  return a !== b;
}); // Check if the first value is greater than the second one

Template.registerHelper('gt', function (a, b) {
  return a > b;
}); // Check if the first value is lesser than the second one

Template.registerHelper('lt', function (a, b) {
  return a < b;
}); // Check if the first value is greater than or equals the second one

Template.registerHelper('gte', function (a, b) {
  return a >= b;
}); // Check if the first value is lesser than or equals the second one

Template.registerHelper('lte', function (a, b) {
  return a <= b;
}); // Get the boolean negation for the given value

Template.registerHelper('not', function (value) {
  return !value;
}); // Check if all the given values are true

Template.registerHelper('and', function () {
  var result = true;

  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  _.each(_.initial(values, 1), function (value) {
    return !value && (result = false);
  });

  return result;
}); // Check if one of the given values is true

Template.registerHelper('or', function () {
  var result = false;

  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  _.each(_.initial(values, 1), function (value) {
    return value && (result = true);
  });

  return result;
}); // Return the second parameter if the first is true or the third if it's false

Template.registerHelper('valueIf', function (condition, valueIfTrue, valueIfFalse) {
  if (condition) {
    return valueIfTrue;
  }

  return valueIfFalse;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"number.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/helpers/number.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 0);
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 1);

/**
 * Global Blaze UI helpers to work with numeric operations
 */
// Sum all the given numbers
Template.registerHelper('sum', function () {
  var result = 0;

  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  _.each(_.initial(values, 1), function (value) {
    return result += value | 0;
  });

  return result;
});
Template.registerHelper('isValidNumber', function (value) {
  return typeof value === 'number' && !isNaN(value);
});
Template.registerHelper('filterNaN', function (value) {
  return isNaN(value) ? '' : value;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"string.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/helpers/string.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 1);
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 2);

/**
 * Global Blaze UI helpers to work with Strings
 */
// Concatenate the give strings
Template.registerHelper('concat', function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var values = _.initial(args, 1);

  var result = '';

  _.each(values, function (value) {
    result += typeof value !== 'undefined' ? value : '';
  });

  return result;
}); // Encode any string into a safe format for HTML id attribute

Template.registerHelper('encodeId', OHIF.string.encodeId);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"typing.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/helpers/typing.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 0);
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 1);

/**
 * Global Blaze UI helpers to work with Strings
 */
// Check if the value's type is undefined
Template.registerHelper('isUndefined', function (value) {
  return _.isUndefined(value);
}); // Check if the value's type is object

Template.registerHelper('isObject', function (value) {
  return _.isObject(value);
}); // Check if the value is an array instance

Template.registerHelper('isArray', function (value) {
  return _.isArray(value);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ui.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/helpers/ui.js                                                                             //
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

/**
 * Global Blaze UI helpers
 */
// Access OHIF.uiSettings object
Template.registerHelper('uiSettings', function () {
  return OHIF.uiSettings;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"blaze.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/lib/blaze.js                                                                              //
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
OHIF.blaze = {}; // Clone a template and return the clone

OHIF.blaze.cloneTemplate = function (template, newName) {
  if (!template) {
    return;
  }

  var name = newName || template.viewName;
  var clone = new Template(name, template.renderFunction);
  clone.inheritsEventsFrom(template);
  clone.inheritsHelpersFrom(template);
  clone.inheritsHooksFrom(template);
  return clone;
}; // Navigate upwards the component and get the parent with the given view name


OHIF.blaze.getParentView = function (view, parentViewName) {
  var currentView = view;

  while (currentView) {
    if (currentView.name === parentViewName) {
      break;
    }

    currentView = currentView.originalParentView || currentView.parentView;
  }

  return currentView;
}; // Search for the parent component of the given view


OHIF.blaze.getParentComponent = function (view) {
  var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_component';
  var currentView = view;

  while (currentView) {
    currentView = currentView.originalParentView || currentView.parentView;

    if (currentView && currentView[property]) {
      return currentView[property];
    }
  }
}; // Search for the parent template of the given view


OHIF.blaze.getParentTemplateView = function (view) {
  var currentView = view;

  while (currentView) {
    currentView = currentView.originalParentView || currentView.parentView;
    if (!currentView || !currentView.name) return;

    if (currentView.name.indexOf('Template.') > -1 && currentView.name.indexOf('Template.__dynamic') === -1) {
      return currentView;
    }
  }
}; // Get the view that contains the desired section's content and return it


OHIF.blaze.getSectionContent = function (view, sectionName) {
  var currentView = view;

  while (!currentView._sectionMap || !currentView._sectionMap.get(sectionName)) {
    currentView = OHIF.blaze.getParentTemplateView(currentView);
    if (!currentView) return;
  }

  return currentView._sectionMap.get(sectionName);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cornerstone.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/lib/cornerstone.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 1);
OHIF.cornerstone = {};

OHIF.cornerstone.getBoundingBox = function (context, textLines, x, y, options) {
  if (Object.prototype.toString.call(textLines) !== '[object Array]') {
    textLines = [textLines];
  }

  var padding = 5;
  var font = cornerstoneTools.textStyle.getFont();
  var fontSize = cornerstoneTools.textStyle.getFontSize();
  context.save();
  context.font = font;
  context.textBaseline = 'top'; // Find the longest text width in the array of text data

  var maxWidth = 0;
  textLines.forEach(function (text) {
    // Get the text width in the current font
    var width = context.measureText(text).width; // Find the maximum with for all the text rows;

    maxWidth = Math.max(maxWidth, width);
  }); // Calculate the bounding box for this text box

  var boundingBox = {
    width: maxWidth + padding * 2,
    height: padding + textLines.length * (fontSize + padding)
  };

  if (options && options.centering && options.centering.x === true) {
    x -= boundingBox.width / 2;
  }

  if (options && options.centering && options.centering.y === true) {
    y -= boundingBox.height / 2;
  }

  boundingBox.left = x;
  boundingBox.top = y;
  context.restore(); // Return the bounding box so it can be used for pointNearHandle

  return boundingBox;
};

OHIF.cornerstone.pixelToPage = function (element, position) {
  var enabledElement = cornerstone.getEnabledElement(element);
  var result = {
    x: 0,
    y: 0
  }; // Stop here if the cornerstone element is not enabled or position is not an object

  if (!enabledElement || (0, _typeof2.default)(position) !== 'object') {
    return result;
  }

  var canvas = enabledElement.canvas;
  var canvasOffset = $(canvas).offset();
  result.x += canvasOffset.left;
  result.y += canvasOffset.top;
  var canvasPosition = cornerstone.pixelToCanvas(element, position);
  result.x += canvasPosition.x;
  result.y += canvasPosition.y;
  return result;
};

OHIF.cornerstone.repositionTextBox = function (eventData, measurementData, config) {
  // Stop here if it's not a measurement creating
  if (!measurementData.isCreating) {
    return;
  }

  var element = eventData.element;
  var enabledElement = cornerstone.getEnabledElement(element);
  var image = enabledElement.image;
  var allowedBorders = OHIF.uiSettings.autoPositionMeasurementsTextCallOuts;
  var allow = {
    T: !allowedBorders || _.contains(allowedBorders, 'T'),
    R: !allowedBorders || _.contains(allowedBorders, 'R'),
    B: !allowedBorders || _.contains(allowedBorders, 'B'),
    L: !allowedBorders || _.contains(allowedBorders, 'L')
  };

  var getAvailableBlankAreas = function (enabledElement, labelWidth, labelHeight) {
    var element = enabledElement.element,
        canvas = enabledElement.canvas,
        image = enabledElement.image;
    var topLeft = cornerstone.pixelToCanvas(element, {
      x: 0,
      y: 0
    });
    var bottomRight = cornerstone.pixelToCanvas(element, {
      x: image.width,
      y: image.height
    });
    var $canvas = $(canvas);
    var canvasWidth = $canvas.outerWidth();
    var canvasHeight = $canvas.outerHeight();
    var result = {};
    result['x-1'] = allow.L && topLeft.x > labelWidth;
    result['y-1'] = allow.T && topLeft.y > labelHeight;
    result.x1 = allow.R && canvasWidth - bottomRight.x > labelWidth;
    result.y1 = allow.B && canvasHeight - bottomRight.y > labelHeight;
    return result;
  };

  var getRenderingInformation = function (limits, tool) {
    var mid = {};
    mid.x = limits.x / 2;
    mid.y = limits.y / 2;
    var directions = {};
    directions.x = tool.x < mid.x ? -1 : 1;
    directions.y = tool.y < mid.y ? -1 : 1;
    var diffX = directions.x < 0 ? tool.x : limits.x - tool.x;
    var diffY = directions.y < 0 ? tool.y : limits.y - tool.y;
    var cornerAxis = diffY < diffX ? 'y' : 'x';
    var map = {
      'x-1': 'L',
      'y-1': 'T',
      x1: 'R',
      y1: 'B'
    };
    var current = 0;

    while (current < 4 && !allow[map[cornerAxis + directions[cornerAxis]]]) {
      // Invert the direction for the next iteration
      directions[cornerAxis] *= -1; // Invert the tempCornerAxis

      cornerAxis = cornerAxis === 'x' ? 'y' : 'x';
      current++;
    }

    return {
      directions: directions,
      cornerAxis: cornerAxis
    };
  };

  var calculateAxisCenter = function (axis, start, end) {
    var a = start[axis];
    var b = end[axis];
    var lowest = Math.min(a, b);
    var highest = Math.max(a, b);
    return lowest + (highest - lowest) / 2;
  };

  var getTextBoxSizeInPixels = function (element, bounds) {
    var topLeft = cornerstone.pageToPixel(element, 0, 0);
    var bottomRight = cornerstone.pageToPixel(element, bounds.x, bounds.y);
    return {
      x: bottomRight.x - topLeft.x,
      y: bottomRight.y - topLeft.y
    };
  };

  function getTextBoxOffset(config, cornerAxis, toolAxis, boxSize) {
    config = config || {};
    var centering = config.centering || {};
    var centerX = !!centering.x;
    var centerY = !!centering.y;
    var halfBoxSizeX = boxSize.x / 2;
    var halfBoxSizeY = boxSize.y / 2;
    var offset = {
      x: [],
      y: []
    };

    if (cornerAxis === 'x') {
      var offsetY = centerY ? 0 : halfBoxSizeY;
      offset.x[-1] = centerX ? halfBoxSizeX : 0;
      offset.x[1] = centerX ? -halfBoxSizeX : -boxSize.x;
      offset.y[-1] = offsetY;
      offset.y[1] = offsetY;
    } else {
      var offsetX = centerX ? 0 : halfBoxSizeX;
      offset.x[-1] = offsetX;
      offset.x[1] = offsetX;
      offset.y[-1] = centerY ? halfBoxSizeY : 0;
      offset.y[1] = centerY ? -halfBoxSizeY : -boxSize.y;
    }

    return offset;
  }

  var handles = measurementData.handles;
  var textBox = handles.textBox;
  var $canvas = $(enabledElement.canvas);
  var canvasWidth = $canvas.outerWidth();
  var canvasHeight = $canvas.outerHeight();
  var offset = $canvas.offset();
  var canvasDimensions = {
    x: canvasWidth,
    y: canvasHeight
  };
  var bounds = {};
  bounds.x = textBox.boundingBox.width;
  bounds.y = textBox.boundingBox.height;

  var getHandlePosition = function (key) {
    return _.pick(handles[key], ['x', 'y']);
  };

  var start = getHandlePosition('start');
  var end = getHandlePosition('end');
  var tool = {};
  tool.x = calculateAxisCenter('x', start, end);
  tool.y = calculateAxisCenter('y', start, end);
  var limits = {};
  limits.x = image.width;
  limits.y = image.height;

  var _getRenderingInformat = getRenderingInformation(limits, tool),
      directions = _getRenderingInformat.directions,
      cornerAxis = _getRenderingInformat.cornerAxis;

  var availableAreas = getAvailableBlankAreas(enabledElement, bounds.x, bounds.y);

  var tempDirections = _.clone(directions);

  var tempCornerAxis = cornerAxis;
  var foundPlace = false;
  var current = 0;

  while (current < 4) {
    if (availableAreas[tempCornerAxis + tempDirections[tempCornerAxis]]) {
      foundPlace = true;
      break;
    } // Invert the direction for the next iteration


    tempDirections[tempCornerAxis] *= -1; // Invert the tempCornerAxis

    tempCornerAxis = tempCornerAxis === 'x' ? 'y' : 'x';
    current++;
  }

  var cornerAxisPosition;

  if (foundPlace) {
    _.extend(directions, tempDirections);

    cornerAxis = tempCornerAxis;
    cornerAxisPosition = directions[cornerAxis] < 0 ? 0 : limits[cornerAxis];
  } else {
    _.extend(limits, canvasDimensions);

    var toolPositionOnCanvas = cornerstone.pixelToCanvas(element, tool);
    var renderingInformation = getRenderingInformation(limits, toolPositionOnCanvas);
    directions = renderingInformation.directions;
    cornerAxis = renderingInformation.cornerAxis;
    var position = {
      x: directions.x < 0 ? offset.left : offset.left + canvasWidth,
      y: directions.y < 0 ? offset.top : offset.top + canvasHeight
    };
    var pixelPosition = cornerstone.pageToPixel(element, position.x, position.y);
    cornerAxisPosition = pixelPosition[cornerAxis];
  }

  var toolAxis = cornerAxis === 'x' ? 'y' : 'x';
  var boxSize = getTextBoxSizeInPixels(element, bounds);
  textBox[cornerAxis] = cornerAxisPosition;
  textBox[toolAxis] = tool[toolAxis]; // Adjust the text box position reducing its size from the corner axis

  var textBoxOffset = getTextBoxOffset(config, cornerAxis, toolAxis, boxSize);
  textBox[cornerAxis] += textBoxOffset[cornerAxis][directions[cornerAxis]]; // Preventing the text box from partially going outside the canvas area

  var topLeft = cornerstone.pixelToCanvas(element, textBox);
  var bottomRight = {
    x: topLeft.x + bounds.x,
    y: topLeft.y + bounds.y
  };
  var canvasBorders = {
    x0: offset.left,
    y0: offset.top,
    x1: offset.left + canvasWidth,
    y1: offset.top + canvasHeight
  };

  if (topLeft[toolAxis] < 0) {
    var x = canvasBorders.x0;
    var y = canvasBorders.y0;

    var _pixelPosition = cornerstone.pageToPixel(element, x, y);

    textBox[toolAxis] = _pixelPosition[toolAxis];
  } else if (bottomRight[toolAxis] > canvasDimensions[toolAxis]) {
    var _x = canvasBorders.x1 - bounds.x;

    var _y = canvasBorders.y1 - bounds.y;

    var _pixelPosition2 = cornerstone.pageToPixel(element, _x, _y);

    textBox[toolAxis] = _pixelPosition2[toolAxis];
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/lib/index.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./blaze.js"));
module.watch(require("./cornerstone.js"));
module.watch(require("./string.js"));
module.watch(require("./ui.js"));
module.watch(require("./utils.js"));
module.watch(require("./viewer.js"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"string.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/lib/string.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 1);
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 2);
OHIF.string = {}; // Search for some string inside any object or array

OHIF.string.search = function (object, query) {
  var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  // Create the search pattern
  var pattern = new RegExp($.trim(query), 'i');

  _.each(object, function (item) {
    // Stop here if item is empty
    if (!item) {
      return;
    } // Get the value to be compared


    var value = _.isString(property) ? item[property] : item; // Check if the value match the pattern

    if (_.isString(value) && pattern.test(value)) {
      // Add the current item to the result
      result.push(item);
    }

    if (_.isObject(item)) {
      // Search recursively the item if the current item is an object
      OHIF.string.search(item, query, property, result);
    }
  }); // Return the found items


  return result;
}; // Encode any string into a safe format for HTML id attribute


OHIF.string.encodeId = function (input) {
  var string = input && input.toString ? input.toString() : input; // Return an underscore if the given string is empty or if it's not a string

  if (string === '' || typeof string !== 'string') {
    return '_';
  } // Create a converter to replace non accepted chars


  var converter = function (match) {
    return '_' + match[0].charCodeAt(0).toString(16) + '_';
  }; // Encode the given string and return it


  return string.replace(/[^a-zA-Z0-9-]/g, converter);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ui.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/lib/ui.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
// Get the UI settings
var ui = Meteor.settings && Meteor.settings.public && Meteor.settings.public.ui;
OHIF.uiSettings = ui || {};
/**
 * Get the offset for the given element
 *
 * @param {Object} element DOM element which will have the offser calculated
 * @returns {Object} Object containing the top and left offset
 */

OHIF.ui.getOffset = function (element) {
  var top = 0;
  var left = 0;

  if (element.offsetParent) {
    do {
      left += element.offsetLeft;
      top += element.offsetTop;
    } while (element = element.offsetParent);
  }

  return {
    left: left,
    top: top
  };
};
/**
 * Get the vertical and horizontal scrollbar sizes
 * Got from https://stackoverflow.com/questions/986937/how-can-i-get-the-browsers-scrollbar-sizes
 *
 * @returns {Array} Array containing the scrollbar horizontal and vertical sizes
 */


OHIF.ui.getScrollbarSize = function () {
  var inner = document.createElement('p');
  inner.style.width = '100%';
  inner.style.height = '100%';
  var outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '0px';
  outer.style.left = '0px';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.height = '100px';
  outer.style.overflow = 'hidden';
  outer.appendChild(inner);
  document.body.appendChild(outer);
  var w1 = inner.offsetWidth;
  var h1 = inner.offsetHeight;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  var h2 = inner.offsetHeight;

  if (w1 === w2) {
    w2 = outer.clientWidth;
  }

  if (h1 === h2) {
    h2 = outer.clientHeight;
  }

  document.body.removeChild(outer);
  return [w1 - w2, h1 - h2];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"utils.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/lib/utils.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

// Return the array sorting function for its object's properties
OHIF.utils.sortBy = function () {
  var fields = [].slice.call(arguments),
      n_fields = fields.length;
  return function (A, B) {
    var a, b, field, key, primer, reverse, result, i;

    for (i = 0; i < n_fields; i++) {
      result = 0;
      field = fields[i];
      key = typeof field === 'string' ? field : field.name;
      a = A[key];
      b = B[key];

      if (typeof field.primer !== 'undefined') {
        a = field.primer(a);
        b = field.primer(b);
      }

      reverse = field.reverse ? -1 : 1;

      if (a < b) {
        result = reverse * -1;
      }

      if (a > b) {
        result = reverse * 1;
      }

      if (result !== 0) {
        break;
      }
    }

    return result;
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"viewer.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/lib/viewer.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
OHIF.viewer = {};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ui":{"handleError.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/ui/handleError.js                                                                         //
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

OHIF.ui.handleError = function (error) {
  var title = error.title,
      message = error.message;

  if (!title) {
    if (error instanceof Meteor.Error) {
      title = error.error;
    } else if (error instanceof Error) {
      title = error.name;
    }
  }

  if (!message) {
    if (error instanceof Meteor.Error) {
      message = error.reason;
    } else if (error instanceof Error) {
      message = error.message;
    }
  }

  var data = Object.assign({
    title: title,
    message: message,
    "class": 'themed',
    hideConfirm: true,
    cancelLabel: 'Dismiss',
    cancelClass: 'btn-secondary'
  }, error || {}); // TODO: Find a better way to handle errors instead of displaying a dialog for all of them.
  // OHIF.ui.showDialog('dialogForm', data);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/ui/index.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./bounded/bounded.js"));
module.watch(require("./dimensional/dimensional.js"));
module.watch(require("./dialog/display.js"));
module.watch(require("./dialog/spatial.js"));
module.watch(require("./dialog/unsavedChangesDialog.js"));
module.watch(require("./draggable/draggable.js"));
module.watch(require("./dropdown/class.js"));
module.watch(require("./dropdown/display.js"));
module.watch(require("./notifications/notifications.js"));
module.watch(require("./popover/display.js"));
module.watch(require("./resizable/resizable.js"));
module.watch(require("./unsavedChanges/unsavedChanges.js"));
module.watch(require("./handleError.js"));
module.watch(require("./styleProperty.js"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"styleProperty.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/ui/styleProperty.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  styleProperty: function () {
    return styleProperty;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

/*
 * https://github.com/swederik/dragula/blob/ccc15d75186f5168e7abadbe3077cf12dab09f8b/styleProperty.js
 */
(function () {
  'use strict';

  var browserProps = {};

  function eachVendor(prop, fn) {
    var prefixes = ['Webkit', 'Moz', 'ms', 'O'];
    fn(prop);

    for (var i = 0; i < prefixes.length; i++) {
      fn(prefixes[i] + prop.charAt(0).toUpperCase() + prop.slice(1));
    }
  }

  function check(property, testValue) {
    var sandbox = document.createElement('iframe');
    var element = document.createElement('p');
    document.body.appendChild(sandbox);
    sandbox.contentDocument.body.appendChild(element);
    var support = set(element, property, testValue); // We have to do this because remove() is not supported by IE11 and below

    sandbox.parentElement.removeChild(sandbox);
    return support;
  }

  function checkComputed(el, prop) {
    var computed = window.getComputedStyle(el).getPropertyValue(prop);
    return computed !== void 0 && computed.length > 0 && computed !== 'none';
  }

  function set(el, prop, value) {
    var match = false;

    if (browserProps[prop] === void 0) {
      eachVendor(prop, function (vendorProp) {
        if (el.style[vendorProp] !== void 0 && match === false) {
          el.style[vendorProp] = value;

          if (checkComputed(el, vendorProp)) {
            match = true;
            browserProps[prop] = vendorProp;
          }
        }
      });
    } else {
      el.style[browserProps[prop]] = value;
      return true;
    }

    return match;
  }

  var styleProperty = {
    check: check,
    set: set
  };
  OHIF.ui.styleProperty = styleProperty;
})();

var styleProperty = OHIF.ui.styleProperty;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bounded":{"bounded.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/ui/bounded/bounded.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
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

// Allow attaching to jQuery selectors
$.fn.bounded = function (options) {
  _.each(this, function (element) {
    var boundedInstance = $(element).data('boundedInstance');

    if (options === 'destroy' && boundedInstance) {
      $(element).removeData('boundedInstance');
      boundedInstance.destroy();
    } else {
      if (boundedInstance) {
        boundedInstance.options(options);
      } else {
        $(element).data('boundedInstance', new Bounded(element, options));
      }
    }
  });

  return this;
};
/**
 * This class makes an element bounded to other element's borders.
 */


var Bounded =
/*#__PURE__*/
function () {
  // Initialize the instance with the given element and options
  function Bounded(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.element = element;
    this.$element = $(element);
    this.options(options);
    this.setBoundedFlag(false); // Force to hardware acceleration to move element if browser supports translate property

    this.useTransform = OHIF.ui.styleProperty.check('transform', 'translate(1px, 1px)');
  } // Set or change the instance options


  var _proto = Bounded.prototype;

  _proto.options = function () {
    function options() {
      var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // Process the given options and store it in the instance
      var boundingElement = _options.boundingElement,
          positionElement = _options.positionElement,
          dimensionElement = _options.dimensionElement,
          allowResizing = _options.allowResizing;
      this.positionElement = positionElement || this.element;
      this.$positionElement = $(this.positionElement);
      this.dimensionElement = dimensionElement || this.element;
      this.$dimensionElement = $(this.dimensionElement);
      this.boundingElement = boundingElement;
      this.$boundingElement = $(this.boundingElement);
      this.allowResizing = allowResizing; // Check for fixed positioning

      if (this.$positionElement.css('position') === 'fixed') {
        this.boundingElement = window;
      } // Destroy and initialize again the instance


      this.destroy();
      this.init();
    }

    return options;
  }(); // Initialize the bounding behaviour


  _proto.init = function () {
    function init() {
      var _this = this;

      // Create the event handlers
      this.defineEventHandlers(); // Attach the created event handlers to the component

      this.attachEventHandlers(); // Add the bounded class to the element

      this.$element.addClass('bounded'); // Handle the positioning on window resize

      var $window = $(window);

      var windowResizeHandler = function () {
        // Check if the element is still in DOM and remove the handler if it is not
        if (!_this.$element.closest(document.documentElement).length) {
          $window.off('resize', windowResizeHandler);
        }

        _this.$element.trigger('spatialChanged');
      };

      $window.on('resize', windowResizeHandler); // Trigger the bounding check for the first timepoint

      setTimeout(function () {
        return _this.$element.trigger('spatialChanged');
      });
    }

    return init;
  }(); // Destroy this instance, returning the element to its previous state


  _proto.destroy = function () {
    function destroy() {
      // Detach the event handlers
      this.detachEventHandlers(); // Remove the bounded class from the element

      this.$element.removeClass('bounded');
    }

    return destroy;
  }();

  Bounded.spatialInfo = function () {
    function spatialInfo(positionElement, dimensionElement) {
      // Create the result object
      var result = {}; // Check if the element is the window

      if (!dimensionElement || dimensionElement === window) {
        var $window = $(window);
        var width = $window.outerWidth();
        var height = $window.outerHeight();
        return {
          width: width,
          height: height,
          x0: 0,
          y0: 0,
          x1: width,
          y1: height
        };
      } // Get the jQuery object for the elements


      var $dimensionElement = $(dimensionElement);
      var $positionElement = $(positionElement); // Get the integer numbers for element's width

      result.width = $dimensionElement.outerWidth(); // Get the integer numbers for element's height

      result.height = $dimensionElement.outerHeight(); // Get the position property based on the element position CSS attribute

      var elementPosition = $positionElement.css('position');
      var positionProperty = elementPosition === 'fixed' ? 'position' : 'offset'; // Get the element's start position

      var position = $positionElement[positionProperty]();
      result.x0 = position.left;
      result.y0 = position.top; // Get the element's end position

      result.x1 = result.x0 + result.width;
      result.y1 = result.y0 + result.height; // Return the result object

      return result;
    }

    return spatialInfo;
  }(); // Define the event handlers for this class


  _proto.defineEventHandlers = function () {
    function defineEventHandlers() {
      var _this2 = this;

      this.cssPositionHandler = function (elementInfo, boundingInfo) {
        // Fix element's x positioning and width
        if (_this2.allowResizing && elementInfo.width > boundingInfo.width) {
          _this2.$dimensionElement.width(boundingInfo.width);

          _this2.$positionElement.css('left', boundingInfo.x0);

          _this2.setBoundedFlag(true);
        } else if (elementInfo.x0 < boundingInfo.x0) {
          _this2.$positionElement.css('left', boundingInfo.x0);

          _this2.setBoundedFlag(true);
        } else if (elementInfo.x1 > boundingInfo.x1) {
          _this2.$positionElement.css('left', boundingInfo.x1 - elementInfo.width);

          _this2.setBoundedFlag(true);
        } // Fix element's y positioning and height


        if (_this2.allowResizing && elementInfo.height > boundingInfo.height) {
          _this2.$dimensionElement.height(boundingInfo.height);

          _this2.$positionElement.css('top', boundingInfo.y0);

          _this2.setBoundedFlag(true);
        } else if (elementInfo.y0 < boundingInfo.y0) {
          _this2.$positionElement.css('top', boundingInfo.y0);

          _this2.setBoundedFlag(true);
        } else if (elementInfo.y1 > boundingInfo.y1) {
          _this2.$positionElement.css('top', boundingInfo.y1 - elementInfo.height);

          _this2.setBoundedFlag(true);
        }
      };

      this.getCSSTranslate = function () {
        var matrixToArray = function (str) {
          return str.match(/(-?[0-9\.]+)/g);
        };

        var transformMatrix = matrixToArray(_this2.$positionElement.css('transform')) || [];
        return {
          x: parseFloat(transformMatrix[4]) || 0,
          y: parseFloat(transformMatrix[5]) || 0
        };
      };

      this.cssTransformHandler = function (elementInfo, boundingInfo, translate) {
        if (elementInfo.x1 > boundingInfo.x1) {
          translate.x -= elementInfo.x1 - boundingInfo.x1;
        }

        if (elementInfo.y1 > boundingInfo.y1) {
          translate.y -= elementInfo.y1 - boundingInfo.y1;
        }

        if (elementInfo.x0 < boundingInfo.x0) {
          translate.x += boundingInfo.x0 - elementInfo.x0;
        }

        if (elementInfo.y0 < boundingInfo.y0) {
          translate.y += boundingInfo.y0 - elementInfo.y0;
        }

        var translation = "translate(" + translate.x + "px, " + translate.y + "px)";
        OHIF.ui.styleProperty.set(_this2.positionElement, 'transform', translation);
      };

      this.spatialChangedHandler = function (event) {
        // Get the spatial information for element and its bounding element
        var positionElement = _this2.positionElement,
            dimensionElement = _this2.dimensionElement,
            boundingElement = _this2.boundingElement,
            useTransform = _this2.useTransform;
        var elementInfo = Bounded.spatialInfo(positionElement, dimensionElement);
        var boundingInfo = Bounded.spatialInfo(boundingElement, boundingElement); // Check if CSS positioning or transform will be used

        var translate = _this2.getCSSTranslate();

        if (useTransform && (translate.x || translate.y)) {
          _this2.cssTransformHandler(elementInfo, boundingInfo, translate);
        } else {
          _this2.cssPositionHandler(elementInfo, boundingInfo);
        }
      };
    }

    return defineEventHandlers;
  }(); // Attach the event handlers to the element in order to bound it


  _proto.attachEventHandlers = function () {
    function attachEventHandlers() {
      this.$element.on('spatialChanged', this.spatialChangedHandler);
      this.$boundingElement.on('resize', this.spatialChangedHandler);
    }

    return attachEventHandlers;
  }(); // Detach the event handlers from the element


  _proto.detachEventHandlers = function () {
    function detachEventHandlers() {
      this.$element.off('spatialChanged', this.spatialChangedHandler);
      this.$boundingElement.off('resize', this.spatialChangedHandler);
    }

    return detachEventHandlers;
  }(); // This is a means to let outside world know that the element in question has been moved


  _proto.setBoundedFlag = function () {
    function setBoundedFlag(value) {
      this.$element.data('wasBounded', value);
    }

    return setBoundedFlag;
  }();

  return Bounded;
}();

OHIF.ui.Bounded = Bounded;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"dialog":{"display.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/ui/dialog/display.js                                                                      //
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

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
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

OHIF.ui.showDialog = function (templateName) {
  var dialogData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // Check if the given template exists
  var template = Template[templateName];

  if (!template) {
    throw {
      name: 'TEMPLATE_NOT_FOUND',
      message: "Template " + templateName + " not found."
    };
  }

  var promise;
  var templateData;

  if (dialogData && dialogData.promise instanceof Promise) {
    // Use the given promise to control the modal
    promise = dialogData.promise;
    templateData = dialogData;
  } else {
    // Create a new promise to control the modal and store its resolve and reject callbacks
    var promiseResolve;
    var promiseReject;
    promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    }); // Render the dialog with the given template passing the promise object and callbacks

    templateData = _.extend({}, dialogData, {
      promise: promise,
      promiseResolve: promiseResolve,
      promiseReject: promiseReject
    });
  }

  var view = Blaze.renderWithData(template, templateData, document.body);
  var node = view.firstNode();
  var $node = node && $(node);
  var $modal;

  if ($node && $node.hasClass('modal')) {
    $modal = $node;
  } else if ($node && $node.has('.modal')) {
    $modal = $node.find('.modal:first');
  } // Destroy the created dialog view when the promise is either resolved or rejected


  var dismissModal = function () {
    var hideFirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (hideFirst || dialogData && dialogData.promise && $modal) {
      $modal.one('hidden.bs.modal', function () {
        return Blaze.remove(view);
      }).modal('hide');
    } else {
      Blaze.remove(view);
    }
  }; // Create a handler to dismiss the modal on navigation


  var $body = $(document.body);

  var navigationHandler = function () {
    dismissModal(true);
    $body.off('ohif.navigated', navigationHandler);
  };

  promise.then(function () {
    return dismissModal(false);
  }).catch(function () {
    return dismissModal(false);
  }); // Dismiss the modal if navigation occurs and it should not be kept opened

  if (!dialogData.keepOpenOnNavigation) {
    $body.on('ohif.navigated', navigationHandler);
  } // Return the promise to allow callbacks stacking from outside


  return promise;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"spatial.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/ui/dialog/spatial.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

OHIF.ui.repositionDialog = function ($modal, x, y) {
  var $dialog = $modal.find('.modal-dialog'); // Remove the margins and set its position as fixed

  $dialog.css({
    margin: 0,
    position: 'fixed'
  }).bounded(); // Temporarily show the modal

  var isVisible = $modal.is(':visible');
  $modal.show(); // Calculate the center position on screen

  var height = $dialog.outerHeight();
  var width = $dialog.outerWidth();
  var left = parseInt(x - width / 2);
  var top = parseInt(y - height / 2); // Reposition the modal and readjust it to the window boundaries if needed

  $dialog.css({
    left: left,
    top: top
  }).trigger('spatialChanged').one('transitionend', function () {
    return $dialog.trigger('spatialChanged');
  }); // Switch the modal to its previous visibility state

  $modal.toggle(isVisible);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"unsavedChangesDialog.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/ui/dialog/unsavedChangesDialog.js                                                         //
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

OHIF.ui.unsavedChangesDialog = function (callback, options) {
  // Render the dialog with the given template passing the promise object and callbacks
  var templateData = _.extend({}, options, {
    callback: callback
  });

  Blaze.renderWithData(Template.unsavedChangesDialog, templateData, document.body);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"dimensional":{"dimensional.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/ui/dimensional/dimensional.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $;
module.watch(require("meteor/jquery"), {
  $: function (v) {
    $ = v;
  }
}, 0);

// Temporarily show and hide the element to enable dimension calculations
$.fn.tempShow = function (callback) {
  var elementsToHide = [];
  var current = this; // Temporarily show all parent invisible elements until body

  while (this.is(':hidden')) {
    var $element = $(current);

    if (!$element.length || $element.is(':visible')) {
      break;
    }

    $element.addClass('visible');
    elementsToHide.push(current);
    current = $element[0].parentElement;
  }

  if (typeof callback === 'function') {
    callback(this);
  }

  $(elementsToHide).removeClass('visible');
  return this;
}; // Adjust the max width/height to enable CSS3 transitions


$.fn.adjustMax = function (dimension, modifierFn) {
  var $element = $(this); // Temporarily make the element visible to allow getting its dimensions

  $element.tempShow(function () {
    var maxProperty = "max-" + dimension; // Remove the current max restriction

    $element.each(function (i, e) {
      return e.style.setProperty(maxProperty, 'none', 'important');
    }); // Get the dimension function to obtain the outer dimension

    var dimensionFn = 'outer' + dimension.charAt(0).toUpperCase() + dimension.slice(1);
    var value = $element[dimensionFn](); // Remove the property (needed for IE)

    $element.each(function (i, e) {
      return e.style.removeProperty(maxProperty);
    }); // Set the new max restriction

    $element.css(maxProperty, value);
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"draggable":{"draggable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/ui/draggable/draggable.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

// Allow attaching to jQuery selectors
$.fn.draggable = function (options) {
  makeDraggable(this, options);
  return this;
};
/**
 * This function makes an element movable around the page.
 * It supports mouse and touch input and allows whichever element
 * is specified to be moved to any arbitrary position.
 *
 * @param element
 */


function makeDraggable(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $element = element; // Force to hardware acceleration to move element if browser supports translate property

  var styleProperty = OHIF.ui.styleProperty;
  var useTransform = styleProperty.check('transform', 'translate(1px, 1px)');
  var $container = $(options.container || window);
  var diffX;
  var diffY;
  var wasNotDragged = true;
  var dragging = false;
  var lastCursor, lastOffset;
  var lastTranslateX = 0;
  var lastTranslateY = 0;
  options.defaultElementCursor = options.defaultElementCursor || 'default'; // initialize dragged flag

  $element.data('wasDragged', false);

  function matrixToArray(str) {
    return str.match(/(-?[0-9\.]+)/g);
  }

  function getCursorCoords(e) {
    var cursor = {
      x: e.clientX,
      y: e.clientY
    }; // Handle touchMove cases

    if (cursor.x === undefined) {
      cursor.x = e.originalEvent.touches[0].pageX;
    }

    if (cursor.y === undefined) {
      cursor.y = e.originalEvent.touches[0].pageY;
    }

    return cursor;
  }

  function reposition(elementLeft, elementTop) {
    if (useTransform) {
      var translation = "translate(" + elementLeft + "px, " + elementTop + "px)";
      styleProperty.set($element[0], 'transform', translation);
    } else {
      $element.css({
        left: elementLeft + 'px',
        top: elementTop + 'px',
        bottom: 'auto',
        // Setting these to empty doesn't seem to work in Firefox or Safari
        right: 'auto'
      });
    }
  }

  function startMoving(e) {
    // Prevent dragging dialog by clicking on slider
    // (could be extended for buttons, not sure it's necessary
    if (e.target.type && e.target.type === 'range') {
      return;
    } // Stop the dragging if it's not the primary button


    if (e.button !== 0) return; // Stop the dragging if the element is being resized

    if ($element.hasClass('resizing')) {
      return;
    }

    var elementLeft = parseFloat($element.offset().left);
    var elementTop = parseFloat($element.offset().top);
    var cursor = getCursorCoords(e);

    if (useTransform) {
      lastCursor = cursor;
      lastOffset = $element.offset();
      var transformMatrix = matrixToArray($element.css('transform')) || [];
      lastTranslateX = parseFloat(transformMatrix[4]) || 0;
      lastTranslateY = parseFloat(transformMatrix[5]) || 0;
      elementLeft = lastTranslateX;
      elementTop = lastTranslateY;
    } else {
      diffX = cursor.x - elementLeft;
      diffY = cursor.y - elementTop;
    }

    reposition(elementLeft, elementTop);
    $(document).on('mousemove', moveHandler);
    $(document).on('mouseup', stopMoving);
    $(document).on('touchmove', moveHandler);
    $(document).on('touchend', stopMoving);
  }

  function stopMoving() {
    $container.css('cursor', 'default');
    $element.css('cursor', options.defaultElementCursor);

    if (dragging) {
      setTimeout(function () {
        return $element.removeClass('dragging');
      });
      dragging = false;
    }

    $(document).off('mousemove', moveHandler);
    $(document).off('touchmove', moveHandler);
  }

  function moveHandler(e) {
    if (!dragging) {
      $container.css('cursor', 'move');
      $element.css('cursor', 'move');
      $element.addClass('dragging');
      dragging = true;
    } // let outside world know that the element in question has been dragged


    if (wasNotDragged) {
      $element.data('wasDragged', true);
      wasNotDragged = false;
    } // Prevent dialog box dragging whole page in iOS


    e.preventDefault();
    var elementWidth = parseFloat($element.outerWidth());
    var elementHeight = parseFloat($element.outerHeight());
    var containerWidth = parseFloat($container.width());
    var containerHeight = parseFloat($container.height());
    var cursor = getCursorCoords(e);
    var elementLeft, elementTop;

    if (useTransform) {
      elementLeft = lastTranslateX - (lastCursor.x - cursor.x);
      elementTop = lastTranslateY - (lastCursor.y - cursor.y);
      var limitX = containerWidth - elementWidth;
      var limitY = containerHeight - elementHeight;
      var sumX = lastOffset.left + (elementLeft - lastTranslateX);
      var sumY = lastOffset.top + (elementTop - lastTranslateY);

      if (sumX > limitX) {
        elementLeft -= sumX - limitX;
      }

      if (sumY > limitY) {
        elementTop -= sumY - limitY;
      }

      if (sumX < 0) {
        elementLeft += 0 - sumX;
      }

      if (sumY < 0) {
        elementTop += 0 - sumY;
      }
    } else {
      elementLeft = cursor.x - diffX;
      elementTop = cursor.y - diffY;
      elementLeft = Math.max(elementLeft, 0);
      elementTop = Math.max(elementTop, 0);

      if (elementLeft + elementWidth > containerWidth) {
        elementLeft = containerWidth - elementWidth;
      }

      if (elementTop + elementHeight > containerHeight) {
        elementTop = containerHeight - elementHeight;
      }
    }

    reposition(elementLeft, elementTop);
  }

  $element.on('mousedown', startMoving);
  $element.on('touchstart', startMoving);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"dropdown":{"class.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/ui/dropdown/class.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Tracker;
module.watch(require("meteor/tracker"), {
  Tracker: function (v) {
    Tracker = v;
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

var Dropdown =
/*#__PURE__*/
function () {
  function Dropdown() {
    this.observer = new Tracker.Dependency();
    this._items = [];
    this.observer.changed();
  }

  var _proto = Dropdown.prototype;

  _proto.clearItems = function () {
    function clearItems() {
      this._items = [];
      this.observer.changed();
    }

    return clearItems;
  }();

  _proto.setItems = function () {
    function setItems(items) {
      this._items = items;
      this.observer.changed();
    }

    return setItems;
  }();

  _proto.addItem = function () {
    function addItem(item) {
      this._items.push(item);

      this.observer.changed();
    }

    return addItem;
  }();

  _proto.removeItem = function () {
    function removeItem(item) {
      this._items = _.without(this._items, item);
      this.observer.changed();
    }

    return removeItem;
  }();

  _proto.getItems = function () {
    function getItems() {
      this.observer.depend();
      return this._items;
    }

    return getItems;
  }();

  return Dropdown;
}();

OHIF.ui.Dropdown = Dropdown;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"display.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/ui/dropdown/display.js                                                                    //
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
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 2);

OHIF.ui.showDropdown = function () {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var promiseResolve;
  var promiseReject;
  var promise = new Promise(function (resolve, reject) {
    promiseResolve = resolve;
    promiseReject = reject;
  }); // Prepare the method to destroy the view

  var view;

  var destroyView = function () {
    return Blaze.remove(view);
  }; // Create the data object that the dropdown will receive


  var templateData = {
    items: items,
    options: options,
    destroyView: destroyView,
    promise: promise,
    promiseResolve: promiseResolve,
    promiseReject: promiseReject
  }; // Render the dialog with the given template and data

  var parentElement = options.parentElement || document.body;
  view = Blaze.renderWithData(Template.dropdownForm, templateData, parentElement); // Create a handler to dismiss the dropdown on navigation

  var $body = $(document.body);

  var navigationHandler = function () {
    promiseReject();
    $body.off('ohif.navigated', navigationHandler);
  }; // Dismiss the dropdown if navigation occurs


  $body.on('ohif.navigated', navigationHandler); // Return the promise to allow callbacks stacking from outside

  return promise;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"notifications":{"notifications.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/ui/notifications/notifications.js                                                         //
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
var Blaze;
module.watch(require("meteor/blaze"), {
  Blaze: function (v) {
    Blaze = v;
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
var Notifications = {
  currentId: 0,
  views: new Map()
}; // Remove the view object from DOM and from views Map

var removeView = function (id, view) {
  Notifications.views.delete(id);
  Blaze.remove(view);
}; // Dismiss a single notification note by its id


Notifications.dismiss = function (id) {
  var view = Notifications.views.get(id);

  if (!view || view.isDestroyed) {
    return Notifications.views.delete(id);
  }

  var node = view.firstNode();
  var $note = node && $(node);

  if ($note.length) {
    $note.addClass('out').one('transitionend', function () {
      return removeView(id, view);
    });
  } else {
    removeView(id, view);
  }
}; // Dismiss all notification notes


Notifications.clear = function () {
  return Array.from(Notifications.views.keys()).forEach(Notifications.dismiss);
}; // Display a notification note


Notifications.show = function (_ref) {
  var template = _ref.template,
      data = _ref.data,
      text = _ref.text,
      style = _ref.style,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 5000 : _ref$timeout,
      promise = _ref.promise;
  // Check if the given template exists
  var templateObject = Template[template];

  if (template && !templateObject) {
    throw new Meteor.Error('TEMPLATE_NOT_FOUND', "Template " + template + " not found.");
  } // Check if there is a notification area container


  var $area = $('#notificationArea');

  if (!$area.length) {
    throw new Meteor.Error('NOTIFICATION_AREA_NOT_FOUND', "Notification area not found.");
  }

  var notificationPromise;
  var templateData = {
    template: template,
    data: data,
    text: text,
    style: style,
    timeout: timeout,
    id: Notifications.currentId++
  };

  if (promise instanceof Promise) {
    // Use the given promise to control the notification
    notificationPromise = templateData.promise = promise;
  } else {
    // Create a new promise to control the modal and store its resolve and reject callbacks
    var promiseResolve;
    var promiseReject;
    notificationPromise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    }); // Render the notification passing the promise object and callbacks

    _.extend({}, templateData, {
      promise: notificationPromise,
      promiseResolve: promiseResolve,
      promiseReject: promiseReject
    });
  }

  var view = Blaze.renderWithData(Template.notificationNote, templateData, $area[0]);

  var dismissNotification = function () {
    return Notifications.dismiss(templateData.id);
  }; // Add the current view to the list of views to allow clearing all notifications


  Notifications.views.set(templateData.id, view); // Destroy the created notification view when the promise is either resolved or rejected

  notificationPromise.then(dismissNotification).catch(dismissNotification); // Destroy the created notification view if the given timeout time has passed

  if (timeout > 0) {
    Meteor.setTimeout(function () {
      if (templateData.promiseResolve) {
        templateData.promiseResolve();
      } else {
        dismissNotification();
      }
    }, timeout);
  } // Return the promise to allow callbacks stacking from outside


  return notificationPromise;
};

Notifications.info = function (o) {
  return Notifications.show(Object.assign({}, o, {
    style: 'info'
  }));
};

Notifications.success = function (o) {
  return Notifications.show(Object.assign({}, o, {
    style: 'success'
  }));
};

Notifications.warning = function (o) {
  return Notifications.show(Object.assign({}, o, {
    style: 'warning'
  }));
};

Notifications.danger = function (o) {
  return Notifications.show(Object.assign({}, o, {
    style: 'danger'
  }));
};

OHIF.ui.notifications = Notifications;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"popover":{"display.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/ui/popover/display.js                                                                     //
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
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 2);

OHIF.ui.showPopover = function (templateName, popoverData) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // Check if the given template exists
  var template = Template[templateName];

  if (!template) {
    throw {
      name: 'TEMPLATE_NOT_FOUND',
      message: "Template " + templateName + " not found."
    };
  }

  var promise;
  var templateData;

  if (popoverData && popoverData.promise instanceof Promise) {
    // Use the given promise to control the modal
    promise = popoverData.promise;
    templateData = popoverData;
  } else {
    // Create a new promise to control the modal and store its resolve and reject callbacks
    var promiseResolve;
    var promiseReject;
    promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    }); // Render the dialog with the given template passing the promise object and callbacks

    templateData = Object.assign({}, popoverData, {
      promise: promise,
      promiseResolve: promiseResolve,
      promiseReject: promiseReject
    });
  }

  var element = options.element,
      event = options.event;
  var $element = $(element || event.currentTarget);
  var defaults = {
    content: '',
    html: true,
    trigger: 'manual',
    placement: 'auto',
    delay: {
      show: 300,
      hide: 300
    }
  };
  var popoverOptions = Object.assign({}, defaults, options);
  popoverOptions.content = Blaze.toHTMLWithData(template, popoverData);
  $element.popover(popoverOptions);
  $element.one('shown.bs.popover', function (event) {
    var popoverId = $element.attr('aria-describedby');
    var popover = document.getElementById(popoverId);
    var $popover = $(popover);
    var $popoverContent = $popover.find('.popover-content');

    var dismissPopover = function () {
      return $element.popover('hide');
    };

    $popoverContent.html('');
    var view = Blaze.renderWithData(template, templateData, $popoverContent[0]);
    $element.one('hidden.bs.popover', function () {
      Blaze.remove(view);
      $element.popover('destroy');
    });
    promise.then(dismissPopover).catch(dismissPopover);
  });

  if (popoverOptions.trigger === 'manual') {
    $element.popover('show');
  }

  return promise;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resizable":{"resizable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/ui/resizable/resizable.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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

// Allow attaching to jQuery selectors
$.fn.resizable = function (options) {
  _.each(this, function (element) {
    var resizableInstance = $(element).data('resizableInstance');

    if (options === 'destroy' && resizableInstance) {
      $(element).removeData('resizableInstance');
      resizableInstance.destroy();
    } else {
      if (resizableInstance) {
        resizableInstance.options(options);
      } else {
        $(element).data('resizableInstance', new Resizable(element, options));
      }
    }
  });

  return this;
};
/**
 * This class makes an element resizable.
 */


var Resizable =
/*#__PURE__*/
function () {
  function Resizable(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.element = element;
    this.$element = $(element);
    this.options(options);
  }

  var _proto = Resizable.prototype;

  _proto.options = function () {
    function options() {
      var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var boundSize = _options.boundSize,
          minWidth = _options.minWidth,
          minHeight = _options.minHeight;
      this.minWidth = minWidth || this.$element.width() || 16;
      this.minHeight = minHeight || this.$element.height() || 16;
      this.boundSize = boundSize || 8;
      this.destroy();
      this.init();
    }

    return options;
  }();

  _proto.init = function () {
    function init() {
      this.defineEventHandlers();

      for (var x = -1; x <= 1; x++) {
        for (var y = -1; y <= 1; y++) {
          this.createBound(x, y);
        }
      }

      this.$element.addClass('resizable');
    }

    return init;
  }();

  _proto.destroy = function () {
    function destroy() {
      // Remove the instance added classes
      this.$element.removeClass('resizable resizing'); // Get the bound borders

      var $bound = this.$element.find('resize-bound'); // Remove the bound borders

      $bound.remove(); // Detach the event handlers

      this.detachEventHandlers($bound);
    }

    return destroy;
  }();

  _proto.defineEventHandlers = function () {
    function defineEventHandlers() {
      var _this = this;

      this.initResizeHandler = function (event) {
        var $window = $(window);
        _this.width = _this.initialWidth = _this.$element.width();
        _this.height = _this.initialHeight = _this.$element.height();
        _this.startWidth = _this.width;
        _this.startHeight = _this.height;
        _this.posX = parseInt(_this.$element.css('left'));
        _this.posY = parseInt(_this.$element.css('top'));
        _this.startPosX = _this.posX;
        _this.startPosY = _this.posY;
        _this.startX = event.clientX;
        _this.startY = event.clientY;

        _this.$element.addClass('resizing');

        $window.on('mousemove', event.data, _this.resizeHandler);
        $window.on('mouseup', event.data, _this.endResizeHandler);
      };

      this.resizeHandler = function (event) {
        var _event$data = event.data,
            xDirection = _event$data.xDirection,
            yDirection = _event$data.yDirection;
        var x, y;
        x = event.clientX < 0 ? 0 : event.clientX;
        x = x > window.innerWidth ? window.innerWidth : x;
        y = event.clientY < 0 ? 0 : event.clientY;
        y = y > window.innerHeight ? window.innerHeight : y;
        var xDistance = (x - _this.startX) * xDirection;
        var yDistance = (y - _this.startY) * yDirection;
        var width = xDistance + _this.startWidth;
        var height = yDistance + _this.startHeight;
        _this.width = width < _this.minWidth ? _this.minWidth : width;
        _this.height = height < _this.minHeight ? _this.minHeight : height;

        _this.$element.width(_this.width);

        _this.$element.height(_this.height);

        if (xDirection < 0) {
          _this.posX = _this.startPosX - xDistance;

          if (width < _this.minWidth) {
            _this.posX = _this.startPosX + (_this.startWidth - _this.minWidth);
          }

          _this.$element.css('left', _this.posX + "px");
        }

        if (yDirection < 0) {
          _this.posY = _this.startPosY - yDistance;

          if (height < _this.minHeight) {
            _this.posY = _this.startPosY + (_this.startHeight - _this.minHeight);
          }

          _this.$element.css('top', _this.posY + "px");
        }
      };

      this.endResizeHandler = function (event) {
        var $window = $(window);
        $window.off('mousemove', _this.resizeHandler);
        $window.off('mouseup', _this.endResizeHandler);

        _this.$element.removeClass('resizing'); // Let the listeners know that this element was resized


        _this.$element.trigger('resize');
      };
    }

    return defineEventHandlers;
  }();

  _proto.attachEventHandlers = function () {
    function attachEventHandlers($bound, xDirection, yDirection) {
      var eventData = {
        xDirection: xDirection,
        yDirection: yDirection
      };
      $bound.on('mousedown', eventData, this.initResizeHandler);
    }

    return attachEventHandlers;
  }();

  _proto.detachEventHandlers = function () {
    function detachEventHandlers($bound) {
      var $window = $(window);
      $bound.off('mousedown', this.initResizeHandler);
      $window.off('mousemove', this.resizeHandler);
      $window.off('mouseup', this.endResizeHandler);
    }

    return detachEventHandlers;
  }();

  _proto.createBound = function () {
    function createBound(xDirection, yDirection) {
      if (xDirection === 0 && xDirection === yDirection) {
        return;
      }

      var $bound = $('<div class="resize-bound"></div>');

      $bound[0].onselectstart = function () {
        return false;
      };

      $bound.css('font-size', this.boundSize + "px");
      var mapX = ['left', 'center', 'right'];
      var mapY = ['top', 'middle', 'bottom'];
      $bound.addClass('bound-' + mapX[xDirection + 1]);
      $bound.addClass('bound-' + mapY[yDirection + 1]);
      $bound.appendTo(this.$element);
      this.attachEventHandlers($bound, xDirection, yDirection);
    }

    return createBound;
  }();

  return Resizable;
}();

OHIF.ui.Resizable = Resizable;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"unsavedChanges":{"unsavedChanges.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/client/ui/unsavedChanges/unsavedChanges.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

module.export({
  unsavedChanges: function () {
    return unsavedChanges;
  }
});
var Tracker;
module.watch(require("meteor/tracker"), {
  Tracker: function (v) {
    Tracker = v;
  }
}, 0);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 1);

var _;

module.watch(require("meteor/underscore"), {
  _: function (v) {
    _ = v;
  }
}, 2);
var FUNCTION = 'function';
var STRING = 'string';
var UNDEFINED = 'undefined';
var WILDCARD = '*'; // "*" is a special name which means "all children".

var SEPARATOR = '.';
/**
 * Main Namespace Component Class
 */

var Node =
/*#__PURE__*/
function () {
  function Node() {
    this.value = 0;
    this.children = {};
    this.handlers = {};
  }

  var _proto = Node.prototype;

  _proto.getPathComponents = function () {
    function getPathComponents(path) {
      return (0, _typeof2.default)(path) === STRING ? path.split(SEPARATOR) : null;
    }

    return getPathComponents;
  }();

  _proto.getNodeUpToIndex = function () {
    function getNodeUpToIndex(path, index) {
      var node = this;

      for (var i = 0; i < index; ++i) {
        var item = path[i];

        if (node.children.hasOwnProperty(item)) {
          node = node.children[item];
        } else {
          node = null;
          break;
        }
      }

      return node;
    }

    return getNodeUpToIndex;
  }();

  _proto.append = function () {
    function append(name, value) {
      var children = this.children;
      var node = null;

      if (children.hasOwnProperty(name)) {
        node = children[name];
      } else if ((0, _typeof2.default)(name) === STRING && name !== WILDCARD) {
        node = new Node();
        children[name] = node;
      }

      if (node !== null) {
        node.value += value > 0 ? parseInt(value) : 0;
      }

      return node;
    }

    return append;
  }();

  _proto.probe = function () {
    function probe(recursively) {
      var value = this.value; // Calculate entire tree value recursively?

      if (recursively === true) {
        var children = this.children;

        for (var item in meteorBabelHelpers.sanitizeForInObject(children)) {
          if (children.hasOwnProperty(item)) {
            value += children[item].probe(recursively);
          }
        }
      }

      return value;
    }

    return probe;
  }();

  _proto.clear = function () {
    function clear(recursively) {
      this.value = 0; // Clear entire tree recursively?

      if (recursively === true) {
        var children = this.children;

        for (var item in meteorBabelHelpers.sanitizeForInObject(children)) {
          if (children.hasOwnProperty(item)) {
            children[item].clear(recursively);
          }
        }
      }
    }

    return clear;
  }();

  _proto.appendPath = function () {
    function appendPath(path, value) {
      path = this.getPathComponents(path);

      if (path !== null) {
        var last = path.length - 1;

        var _node = this;

        for (var i = 0; i < last; ++i) {
          _node = _node.append(path[i], 0);

          if (_node === null) {
            return false;
          }
        }

        return _node.append(path[last], value) !== null;
      }

      return false;
    }

    return appendPath;
  }();

  _proto.clearPath = function () {
    function clearPath(path, recursively) {
      path = this.getPathComponents(path);

      if (path !== null) {
        var last = path.length - 1;

        var _node2 = this.getNodeUpToIndex(path, last);

        if (_node2 !== null) {
          var item = path[last];

          if (item !== WILDCARD) {
            if (_node2.children.hasOwnProperty(item)) {
              _node2.children[item].clear(recursively);

              return true;
            }
          } else {
            var children = _node2.children;

            for (item in meteorBabelHelpers.sanitizeForInObject(children)) {
              if (children.hasOwnProperty(item)) {
                children[item].clear(recursively);
              }
            }

            return true;
          }
        }
      }

      return false;
    }

    return clearPath;
  }();

  _proto.probePath = function () {
    function probePath(path, recursively) {
      path = this.getPathComponents(path);

      if (path !== null) {
        var last = path.length - 1;

        var _node3 = this.getNodeUpToIndex(path, last);

        if (_node3 !== null) {
          var item = path[last];

          if (item !== WILDCARD) {
            if (_node3.children.hasOwnProperty(item)) {
              return _node3.children[item].probe(recursively);
            }
          } else {
            var children = _node3.children;
            var value = 0;

            for (item in meteorBabelHelpers.sanitizeForInObject(children)) {
              if (children.hasOwnProperty(item)) {
                value += children[item].probe(recursively);
              }
            }

            return value;
          }
        }
      }

      return 0;
    }

    return probePath;
  }();

  _proto.attachHandler = function () {
    function attachHandler(type, handler) {
      var result = false;

      if ((0, _typeof2.default)(type) === STRING && (0, _typeof2.default)(handler) === FUNCTION) {
        var handlers = this.handlers;
        var list = handlers.hasOwnProperty(type) ? handlers[type] : handlers[type] = [];
        var length = list.length;
        var notFound = true;

        for (var i = 0; i < length; ++i) {
          if (handler === list[i]) {
            notFound = false;
            break;
          }
        }

        if (notFound) {
          list[length] = handler;
          result = true;
        }
      }

      return result;
    }

    return attachHandler;
  }();

  _proto.removeHandler = function () {
    function removeHandler(type, handler) {
      var result = false;

      if ((0, _typeof2.default)(type) === STRING && (0, _typeof2.default)(handler) === FUNCTION) {
        var handlers = this.handlers;

        if (handlers.hasOwnProperty(type)) {
          var list = handlers[type];
          var length = list.length;

          for (var i = 0; i < length; ++i) {
            if (handler === list[i]) {
              list.splice(i, 1);
              result = true;
              break;
            }
          }
        }
      }

      return result;
    }

    return removeHandler;
  }();

  _proto.trigger = function () {
    function trigger(type, nonRecursively) {
      if ((0, _typeof2.default)(type) === STRING) {
        var handlers = this.handlers;

        if (handlers.hasOwnProperty(type)) {
          var list = handlers[type];
          var length = list.length;

          for (var i = 0; i < length; ++i) {
            list[i].call(null);
          }
        }

        if (nonRecursively !== true) {
          var children = this.children;

          for (var item in meteorBabelHelpers.sanitizeForInObject(children)) {
            if (children.hasOwnProperty(item)) {
              children[item].trigger(type);
            }
          }
        }
      }
    }

    return trigger;
  }();

  _proto.attachHandlerForPath = function () {
    function attachHandlerForPath(path, type, handler) {
      path = this.getPathComponents(path);

      if (path !== null) {
        var _node4 = this.getNodeUpToIndex(path, path.length);

        if (_node4 !== null) {
          return _node4.attachHandler(type, handler);
        }
      }

      return false;
    }

    return attachHandlerForPath;
  }();

  _proto.removeHandlerForPath = function () {
    function removeHandlerForPath(path, type, handler) {
      path = this.getPathComponents(path);

      if (path !== null) {
        var _node5 = this.getNodeUpToIndex(path, path.length);

        if (_node5 !== null) {
          return _node5.removeHandler(type, handler);
        }
      }

      return false;
    }

    return removeHandlerForPath;
  }();

  _proto.triggerHandlersForPath = function () {
    function triggerHandlersForPath(path, type, nonRecursively) {
      path = this.getPathComponents(path);

      if (path !== null) {
        var _node6 = this.getNodeUpToIndex(path, path.length);

        if (_node6 !== null) {
          _node6.trigger(type, nonRecursively);
        }
      }
    }

    return triggerHandlersForPath;
  }();

  return Node;
}();
/**
 * Root Namespace Node and API
 */


var rootNode = new Node();
var unsavedChanges = {
  rootNode: rootNode,
  observer: new Tracker.Dependency(),
  hooks: new Map(),

  /**
   * Register a reactive dependency on every change any path suffers
   */
  depend: function () {
    return this.observer.depend();
  },

  /**
   * Signal an unsaved change for a given namespace.
   * @param {String} path A string (e.g., "viewer.studyViewer.measurements.targets") that identifies the namespace of the signaled changes.
   * @return {Boolean} Returns false if the signal could not be saved or the supplied namespace is invalid. Otherwise, true is returned.
   */
  set: function (path) {
    var result = rootNode.appendPath(path, 1);
    this.observer.changed();
    return result;
  },

  /**
   * Clear all signaled unsaved changes for a given namespace. If the supplied namespace is a wildcard, all signals below that namespace
   * are cleared.
   * @param {String} path A string that identifies the namespace of the signaled changes (e.g., "viewer.studyViewer.measurements.targets"
   *  for clearing the "targets" item of the "viewer.studyViewer.measurements" namespace or "viewer.studyViewer.*" to specify all signaled
   *  changes for the "viewer.studyViewer" namespace).
   * @param {Boolean} recursively Clear node and all its children recursively. If not specified defaults to true.
   * @return {Boolean} Returns false if the signal could not be removed or the supplied namespace is invalid. Otherwise, true is returned.
   */
  clear: function (path, recursively) {
    var result = rootNode.clearPath(path, (0, _typeof2.default)(recursively) === UNDEFINED ? true : recursively);
    this.observer.changed();
    return result;
  },

  /**
   * Count the amount of signaled unsaved changes for a given namespace. If the supplied namespace is a wildcard, all signals below that
   * namespace will also be accounted.
   * @param {String} path A string that identifies the namespace of the signaled changes (e.g., "viewer.studyViewer.measurements.targets"
   *  for counting the amount of signals for the "targets" item of the "viewer.studyViewer.measurements" namespace or "viewer.studyViewer.*"
   *  to count all signaled changes for the "viewer.studyViewer" namespace).
   * @param {Boolean} recursively Probe node and all its children recursively. If not specified defaults to true.
   * @return {Number} Returns the amount of signaled changes for a given namespace. If the supplied namespace is a wildcard, the sum of all
   *  changes for that namespace are returned.
   */
  probe: function (path, recursively) {
    return rootNode.probePath(path, (0, _typeof2.default)(recursively) === UNDEFINED ? true : recursively);
  },

  /**
   * Attach an event handler to the specified namespace.
   * @param {String} name A string that identifies the namespace to which the event handler will be attached (e.g.,
   *  "viewer.studyViewer.measurements" to attach an event handler for that namespace).
   * @param {String} type A string that identifies the event type to which the event handler will be attached.
   * @param {Function} handler The handler that will be executed when the specifed event is triggered.
   * @return {Boolean} Returns true on success and false on failure.
   */
  attachHandler: function (path, type, handler) {
    return rootNode.appendPath(path, 0) && rootNode.attachHandlerForPath(path, type, handler);
  },

  /**
   * Detach an event handler from the specified namespace.
   * @param {String} name A string that identifies the namespace from which the event handler will be detached (e.g.,
   *  "viewer.studyViewer.measurements" to remove an event handler from that namespace).
   * @param {String} type A string that identifies the event type to which the event handler was attached.
   * @param {Function} handler The handler that will be removed from execution list.
   * @return {Boolean} Returns true on success and false on failure.
   */
  removeHandler: function (path, type, handler) {
    return rootNode.removeHandlerForPath(path, type, handler);
  },

  /**
   * Trigger all event handlers for the specified namespace and type.
   * @param {String} name A string that identifies the namespace from which the event handler will be detached (e.g.,
   *  "viewer.studyViewer.measurements" to remove an event handler from that namespace).
   * @param {String} type A string that identifies the event type which will be triggered.
   * @param {Boolean} nonRecursively If set to true, prevents triggering event handlers from descending tree.
   * @return {Void} No value is returned.
   */
  trigger: function (path, type, nonRecursively) {
    rootNode.triggerHandlersForPath(path, type, nonRecursively);
  },

  /**
   * UI utility that presents a confirmation dialog to the user if any unsaved changes where signaled for the given namespace.
   * @param {String} path A string that identifies the namespace of the signaled changes (e.g., "viewer.studyViewer.measurements.targets"
   *  for considering only the signals for the "targets" item of the "viewer.studyViewer.measurements" namespace or "viewer.studyViewer.*"
   *  to consider all signaled changes for the "viewer.studyViewer" namespace).
   * @param {Function} callback A callback function (e.g, function(shouldProceed, hasChanges) { ... }) that will be executed after assessment.
   *  Upon execution, the callback will receive two boolean arguments (shouldProceed and hasChanges) indicating if the action can be performed
   *  or not and if changes that need to be cleared exist.
   * @param {Object} options (Optional) An object with UI presentation options.
   * @param {String} options.title The string that will be used as a title for confirmation dialog.
   * @param {String} options.message The string that will be used as a message for confirmation dialog.
   * @return {void} No value is returned.
   */
  checkBeforeAction: function (path, callback, options) {
    var probe, hasChanges, shouldProceed;

    if (typeof callback !== 'function') {
      // nothing to do if no callback function is supplied...
      return;
    }

    probe = this.probe(path);

    if (probe > 0) {
      // Unsaved changes exist...
      hasChanges = true;

      var dialogOptions = _.extend({
        title: 'You have unsaved changes!',
        message: "Your changes will be lost if you don't save them before leaving the current page... Are you sure you want to proceed?"
      }, options);

      OHIF.ui.showDialog('dialogConfirm', dialogOptions).then(function () {
        // Unsaved changes exist but user confirms action...
        shouldProceed = true;
        callback.call(null, shouldProceed, hasChanges);
      }, function () {
        // Unsaved changes exist and user does NOT confirm action...
        shouldProceed = false;
        callback.call(null, shouldProceed, hasChanges);
      });
    } else {
      // No unsaved changes, action can be performed...
      hasChanges = false;
      shouldProceed = true;
      callback.call(null, shouldProceed, hasChanges);
    }
  },

  /**
   * UI utility that presents a "proactive" dialog (with three options: stay, abandon-changes, save-changes) to the user if any unsaved changes where signaled for the given namespace.
   * @param {String} path A string that identifies the namespace of the signaled changes (e.g., "viewer.studyViewer.measurements.targets"
   *  for considering only the signals for the "targets" item of the "viewer.studyViewer.measurements" namespace or "viewer.studyViewer.*"
   *  to consider all signaled changes for the "viewer.studyViewer" namespace).
   * @param {Function} callback A callback function (e.g, function(hasChanges, userChoice) { ... }) that will be executed after assessment.
   *  Upon execution, the callback will receive two arguments: one boolean (hasChanges) indicating that unsaved changes exist and one string with the ID of the
   *  option picked by the user on the dialog ('abort-action', 'abandon-changes' and 'save-changes'). If no unsaved changes exist, the second argument is null.
   * @param {Object} options (Optional) An object with UI presentation options.
   * @param {Object} options.position An object with optimal position (e.g., { x: ..., y: ... }) for the dialog.
   * @return {void} No value is returned.
   */
  presentProactiveDialog: function (path, callback, options) {
    var probe, hasChanges;

    if (typeof callback !== 'function') {
      // nothing to do if no callback function is supplied...
      return;
    }

    probe = this.probe(path, true);

    if (probe > 0) {
      // Unsaved changes exist...
      hasChanges = true;
      OHIF.ui.unsavedChangesDialog(function (choice) {
        callback.call(null, hasChanges, choice);
      }, options);
    } else {
      // No unsaved changes, action can be performed...
      hasChanges = false;
      callback.call(null, hasChanges, null);
    }
  },
  addHook: function (saveCallback) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _.defaults(options, {
      path: '*',
      message: 'There are unsaved changes'
    });

    this.hooks.set(saveCallback, options);
  },
  removeHook: function (saveCallback) {
    this.hooks.delete(saveCallback);
  },
  confirmNavigation: function (navigateCallback, event) {
    var _this = this;

    var dialogPresented = false;
    Array.from(this.hooks.keys()).every(function (saveCallback) {
      var options = _this.hooks.get(saveCallback);

      var probe = _this.probe(options.path, true);

      if (!probe) return true;
      var dialogOptions = Object.assign({
        "class": 'themed'
      }, options);

      if (event) {
        dialogOptions.position = {
          x: event.clientX + 15,
          y: event.clientY + 15
        };
      }

      OHIF.ui.unsavedChanges.presentProactiveDialog(options.path, function (hasChanges, userChoice) {
        if (!hasChanges) return;

        var clear = function () {
          return _this.clear(options.path, true);
        };

        switch (userChoice) {
          case 'abort-action':
            return;

          case 'save-changes':
            var result = saveCallback();

            if (result instanceof Promise) {
              return result.then(function () {
                clear();

                _this.confirmNavigation(navigateCallback, event);
              });
            }

            clear();
            return _this.confirmNavigation(navigateCallback, event);

          case 'abandon-changes':
            clear();
            break;
        }

        navigateCallback();
      }, dialogOptions);
      dialogPresented = true;
      return false;
    });

    if (!dialogPresented) {
      navigateCallback();
    }
  }
};
OHIF.ui.unsavedChanges = unsavedChanges;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"both":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/both/index.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./lib"));
module.watch(require("./utils"));
module.watch(require("./schema.js"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"schema.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/both/schema.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SimpleSchema;
module.watch(require("meteor/aldeed:simple-schema"), {
  SimpleSchema: function (v) {
    SimpleSchema = v;
  }
}, 0);

/*
 Extend the available options on schema definitions:

  * valuesLabels: Used in conjunction with allowedValues to define the text
    label for each value (used on forms)

  * textOptional: Used to allow empty strings

 */
SimpleSchema.extendOptions({
  valuesLabels: Match.Optional([String]),
  textOptional: Match.Optional(Boolean)
}); // Add default required validation for empty strings which can be bypassed
// using textOptional=true definition

SimpleSchema.addValidator(function () {
  if (this.definition.optional !== true && this.definition.textOptional !== true && this.value === '') {
    return 'required';
  }
}); // Including [label] for some messages

SimpleSchema.messages({
  maxCount: '[label] can not have more than [maxCount] values',
  minCount: '[label] must have at least [minCount] values',
  notAllowed: '[label] has an invalid value: "[value]"'
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/both/lib/index.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./object.js"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"object.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/both/lib/object.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
OHIF.object = {}; // Transforms a shallow object with keys separated by "." into a nested object

OHIF.object.getNestedObject = function (shallowObject) {
  var nestedObject = {};

  for (var key in meteorBabelHelpers.sanitizeForInObject(shallowObject)) {
    if (!shallowObject.hasOwnProperty(key)) continue;
    var value = shallowObject[key];
    var propertyArray = key.split('.');
    var currentObject = nestedObject;

    while (propertyArray.length) {
      var currentProperty = propertyArray.shift();

      if (!propertyArray.length) {
        currentObject[currentProperty] = value;
      } else {
        if (!currentObject[currentProperty]) {
          currentObject[currentProperty] = {};
        }

        currentObject = currentObject[currentProperty];
      }
    }
  }

  return nestedObject;
}; // Transforms a nested object into a shallowObject merging its keys with "." character


OHIF.object.getShallowObject = function (nestedObject) {
  var shallowObject = {};

  var putValues = function (baseKey, nestedObject, resultObject) {
    for (var key in meteorBabelHelpers.sanitizeForInObject(nestedObject)) {
      if (!nestedObject.hasOwnProperty(key)) continue;
      var currentKey = baseKey ? baseKey + "." + key : key;
      var currentValue = nestedObject[key];

      if ((0, _typeof2.default)(currentValue) === 'object') {
        if (currentValue instanceof Array) {
          currentKey += '[]';
        }

        putValues(currentKey, currentValue, resultObject);
      } else {
        resultObject[currentKey] = currentValue;
      }
    }
  };

  putValues('', nestedObject, shallowObject);
  return shallowObject;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"utils":{"absoluteUrl.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/both/utils/absoluteUrl.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

// Return an absolute URL with the page domain using sub path of ROOT_URL
// to let multiple domains directed to the same server work
OHIF.utils.absoluteUrl = function (path) {
  var absolutePath = '/';
  var absoluteUrl = Meteor.absoluteUrl();
  var absoluteUrlParts = absoluteUrl.split('/');

  if (absoluteUrlParts.length > 4) {
    var rootUrlPrefixIndex = absoluteUrl.indexOf(absoluteUrlParts[3]);
    absolutePath += absoluteUrl.substring(rootUrlPrefixIndex) + path;
  } else {
    absolutePath += path;
  }

  return absolutePath.replace(/\/\/+/g, '/');
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/both/utils/index.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./absoluteUrl"));
module.watch(require("./objectPath"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"objectPath.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_core/both/utils/objectPath.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

var ObjectPath =
/*#__PURE__*/
function () {
  function ObjectPath() {}

  /**
   * Set an object property based on "path" (namespace) supplied creating
   * ... intermediary objects if they do not exist.
   * @param object {Object} An object where the properties specified on path should be set.
   * @param path {String} A string representing the property to be set, e.g. "user.study.series.timepoint".
   * @param value {Any} The value of the property that will be set.
   * @return {Boolean} Returns "true" on success, "false" if any intermediate component of the supplied path
   * ... is not a valid Object, in which case the property cannot be set. No excpetions are thrown.
   */
  ObjectPath.set = function () {
    function set(object, path, value) {
      var components = ObjectPath.getPathComponents(path),
          length = components !== null ? components.length : 0,
          result = false;

      if (length > 0 && ObjectPath.isValidObject(object)) {
        var i = 0,
            last = length - 1,
            currentObject = object;

        while (i < last) {
          var field = components[i];

          if (field in currentObject) {
            if (!ObjectPath.isValidObject(currentObject[field])) {
              break;
            }
          } else {
            currentObject[field] = {};
          }

          currentObject = currentObject[field];
          i++;
        }

        if (i === last) {
          currentObject[components[last]] = value;
          result = true;
        }
      }

      return result;
    }

    return set;
  }();
  /**
   * Get an object property based on "path" (namespace) supplied traversing the object
   * ... tree as necessary.
   * @param object {Object} An object where the properties specified might exist.
   * @param path {String} A string representing the property to be searched for, e.g. "user.study.series.timepoint".
   * @return {Any} The value of the property if found. By default, returns the special type "undefined".
   */


  ObjectPath.get = function () {
    function get(object, path) {
      var found,
          // undefined by default
      components = ObjectPath.getPathComponents(path),
          length = components !== null ? components.length : 0;

      if (length > 0 && ObjectPath.isValidObject(object)) {
        var i = 0,
            last = length - 1,
            currentObject = object;

        while (i < last) {
          var field = components[i];
          var isValid = ObjectPath.isValidObject(currentObject[field]);

          if (field in currentObject && isValid) {
            currentObject = currentObject[field];
            i++;
          } else {
            break;
          }
        }

        if (i === last && components[last] in currentObject) {
          found = currentObject[components[last]];
        }
      }

      return found;
    }

    return get;
  }();
  /**
   * Check if the supplied argument is a real JavaScript Object instance.
   * @param object {Any} The subject to be tested.
   * @return {Boolean} Returns "true" if the object is a real Object instance and "false" otherwise.
   */


  ObjectPath.isValidObject = function () {
    function isValidObject(object) {
      return (0, _typeof2.default)(object) === 'object' && object !== null && object instanceof Object;
    }

    return isValidObject;
  }();

  ObjectPath.getPathComponents = function () {
    function getPathComponents(path) {
      return typeof path === 'string' ? path.split('.') : null;
    }

    return getPathComponents;
  }();

  return ObjectPath;
}();

OHIF.utils.ObjectPath = ObjectPath;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"node_modules":{"twbs-pagination":{"package.json":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/node_modules/twbs-pagination/package.json                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.name = "twbs-pagination";
exports.version = "1.4.1";
exports.main = "jquery.twbsPagination";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"jquery.twbsPagination.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_core/node_modules/twbs-pagination/jquery.twbsPagination.js                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!
 * jQuery pagination plugin v1.4.1
 * http://esimakin.github.io/twbs-pagination/
 *
 * Copyright 2014-2016, Eugene Simakin
 * Released under Apache 2.0 license
 * http://apache.org/licenses/LICENSE-2.0.html
 */
(function ($, window, document, undefined) {

    'use strict';

    var old = $.fn.twbsPagination;

    // PROTOTYPE AND CONSTRUCTOR

    var TwbsPagination = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.twbsPagination.defaults, options);

        if (this.options.startPage < 1 || this.options.startPage > this.options.totalPages) {
            throw new Error('Start page option is incorrect');
        }

        this.options.totalPages = parseInt(this.options.totalPages);
        if (isNaN(this.options.totalPages)) {
            throw new Error('Total pages option is not correct!');
        }

        this.options.visiblePages = parseInt(this.options.visiblePages);
        if (isNaN(this.options.visiblePages)) {
            throw new Error('Visible pages option is not correct!');
        }

        if (this.options.onPageClick instanceof Function) {
            this.$element.first().on('page', this.options.onPageClick);
        }

        // hide if only one page exists
        if (this.options.hideOnlyOnePage && this.options.totalPages == 1) {
            this.$element.trigger('page', 1);
            return this;
        }

        if (this.options.totalPages < this.options.visiblePages) {
            this.options.visiblePages = this.options.totalPages;
        }

        if (this.options.href) {
            this.options.startPage = this.getPageFromQueryString();
            if (!this.options.startPage) {
                this.options.startPage = 1;
            }
        }

        var tagName = (typeof this.$element.prop === 'function') ?
            this.$element.prop('tagName') : this.$element.attr('tagName');

        if (tagName === 'UL') {
            this.$listContainer = this.$element;
        } else {
            this.$listContainer = $('<ul></ul>');
        }

        this.$listContainer.addClass(this.options.paginationClass);

        if (tagName !== 'UL') {
            this.$element.append(this.$listContainer);
        }

        if (this.options.initiateStartPageClick) {
            this.show(this.options.startPage);
        } else {
            this.currentPage = this.options.startPage;
            this.render(this.getPages(this.options.startPage));
            this.setupEvents();
        }

        return this;
    };

    TwbsPagination.prototype = {

        constructor: TwbsPagination,

        destroy: function () {
            this.$element.empty();
            this.$element.removeData('twbs-pagination');
            this.$element.off('page');

            return this;
        },

        show: function (page) {
            if (page < 1 || page > this.options.totalPages) {
                throw new Error('Page is incorrect.');
            }
            this.currentPage = page;

            this.render(this.getPages(page));
            this.setupEvents();

            this.$element.trigger('page', page);

            return this;
        },

        enable: function () {
            this.show(this.currentPage);
        },

        disable: function () {
            var _this = this;
            this.$listContainer.off('click').on('click', 'li', function (evt) {
                evt.preventDefault();
            });
            this.$listContainer.children().each(function () {
                var $this = $(this);
                if (!$this.hasClass(_this.options.activeClass)) {
                    $(this).addClass(_this.options.disabledClass);
                }
            });
        },

        buildListItems: function (pages) {
            var listItems = [];

            if (this.options.first) {
                listItems.push(this.buildItem('first', 1));
            }

            if (this.options.prev) {
                var prev = pages.currentPage > 1 ? pages.currentPage - 1 : this.options.loop ? this.options.totalPages  : 1;
                listItems.push(this.buildItem('prev', prev));
            }

            for (var i = 0; i < pages.numeric.length; i++) {
                listItems.push(this.buildItem('page', pages.numeric[i]));
            }

            if (this.options.next) {
                var next = pages.currentPage < this.options.totalPages ? pages.currentPage + 1 : this.options.loop ? 1 : this.options.totalPages;
                listItems.push(this.buildItem('next', next));
            }

            if (this.options.last) {
                listItems.push(this.buildItem('last', this.options.totalPages));
            }

            return listItems;
        },

        buildItem: function (type, page) {
            var $itemContainer = $('<li></li>'),
                $itemContent = $('<a></a>'),
                itemText = this.options[type] ? this.makeText(this.options[type], page) : page;

            $itemContainer.addClass(this.options[type + 'Class']);
            $itemContainer.data('page', page);
            $itemContainer.data('page-type', type);
            $itemContainer.append($itemContent.attr('href', this.makeHref(page)).addClass(this.options.anchorClass).html(itemText));

            return $itemContainer;
        },

        getPages: function (currentPage) {
            var pages = [];

            var half = Math.floor(this.options.visiblePages / 2);
            var start = currentPage - half + 1 - this.options.visiblePages % 2;
            var end = currentPage + half;

            // handle boundary case
            if (start <= 0) {
                start = 1;
                end = this.options.visiblePages;
            }
            if (end > this.options.totalPages) {
                start = this.options.totalPages - this.options.visiblePages + 1;
                end = this.options.totalPages;
            }

            var itPage = start;
            while (itPage <= end) {
                pages.push(itPage);
                itPage++;
            }

            return {"currentPage": currentPage, "numeric": pages};
        },

        render: function (pages) {
            var _this = this;
            this.$listContainer.children().remove();
            var items = this.buildListItems(pages);
            $.each(items, function(key, item){
                _this.$listContainer.append(item);
            });

            this.$listContainer.children().each(function () {
                var $this = $(this),
                    pageType = $this.data('page-type');

                switch (pageType) {
                    case 'page':
                        if ($this.data('page') === pages.currentPage) {
                            $this.addClass(_this.options.activeClass);
                        }
                        break;
                    case 'first':
                            $this.toggleClass(_this.options.disabledClass, pages.currentPage === 1);
                        break;
                    case 'last':
                            $this.toggleClass(_this.options.disabledClass, pages.currentPage === _this.options.totalPages);
                        break;
                    case 'prev':
                            $this.toggleClass(_this.options.disabledClass, !_this.options.loop && pages.currentPage === 1);
                        break;
                    case 'next':
                            $this.toggleClass(_this.options.disabledClass,
                                !_this.options.loop && pages.currentPage === _this.options.totalPages);
                        break;
                    default:
                        break;
                }

            });
        },

        setupEvents: function () {
            var _this = this;
            this.$listContainer.off('click').on('click', 'li', function (evt) {
                var $this = $(this);
                if ($this.hasClass(_this.options.disabledClass) || $this.hasClass(_this.options.activeClass)) {
                    return false;
                }
                // Prevent click event if href is not set.
                !_this.options.href && evt.preventDefault();
                _this.show(parseInt($this.data('page')));
            });
        },

        makeHref: function (page) {
            return this.options.href ? this.generateQueryString(page) : "#";
        },

        makeText: function (text, page) {
            return text.replace(this.options.pageVariable, page)
                .replace(this.options.totalPagesVariable, this.options.totalPages)
        },
        getPageFromQueryString: function (searchStr) {
            var search = this.getSearchString(searchStr),
                regex = new RegExp(this.options.pageVariable + '(=([^&#]*)|&|#|$)'),
                page = regex.exec(search);
            if (!page || !page[2]) {
                return null;
            }
            page = decodeURIComponent(page[2]);
            page = parseInt(page);
            if (isNaN(page)) {
                return null;
            }
            return page;
        },
        generateQueryString: function (pageNumber, searchStr) {
            var search = this.getSearchString(searchStr),
                regex = new RegExp(this.options.pageVariable + '=*[^&#]*');
            if (!search) return '';
            return '?' + search.replace(regex, this.options.pageVariable + '=' + pageNumber);

        },
        getSearchString: function (searchStr) {
            var search = searchStr || window.location.search;
            if (search === '') {
                return null;
            }
            if (search.indexOf('?') === 0) search = search.substr(1);
            return search;
        },
        getCurrentPage: function () {
            return this.currentPage;
        }
    };

    // PLUGIN DEFINITION

    $.fn.twbsPagination = function (option) {
        var args = Array.prototype.slice.call(arguments, 1);
        var methodReturn;

        var $this = $(this);
        var data = $this.data('twbs-pagination');
        var options = typeof option === 'object' ? option : {};

        if (!data) $this.data('twbs-pagination', (data = new TwbsPagination(this, options) ));
        if (typeof option === 'string') methodReturn = data[ option ].apply(data, args);

        return ( methodReturn === undefined ) ? $this : methodReturn;
    };

    $.fn.twbsPagination.defaults = {
        totalPages: 1,
        startPage: 1,
        visiblePages: 5,
        initiateStartPageClick: true,
        hideOnlyOnePage: false,
        href: false,
        pageVariable: '{{page}}',
        totalPagesVariable: '{{total_pages}}',
        page: null,
        first: 'First',
        prev: 'Previous',
        next: 'Next',
        last: 'Last',
        loop: false,
        onPageClick: null,
        paginationClass: 'pagination',
        nextClass: 'page-item next',
        prevClass: 'page-item prev',
        lastClass: 'page-item last',
        firstClass: 'page-item first',
        pageClass: 'page-item',
        activeClass: 'active',
        disabledClass: 'disabled',
        anchorClass: 'page-link'
    };

    $.fn.twbsPagination.Constructor = TwbsPagination;

    $.fn.twbsPagination.noConflict = function () {
        $.fn.twbsPagination = old;
        return this;
    };

    $.fn.twbsPagination.version = "1.4.1";

})(window.jQuery, window, document);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".styl",
    ".html"
  ]
});
var exports = require("/node_modules/meteor/ohif:core/main.js");
require("/node_modules/meteor/ohif:core/client/index.js");
require("/node_modules/meteor/ohif:core/both/index.js");

/* Exports */
Package._define("ohif:core", exports);

})();
