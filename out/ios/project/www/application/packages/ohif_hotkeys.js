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
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Session = Package.session.Session;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var PersistentSession = Package['u2622:persistent-session'].PersistentSession;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Iron = Package['iron:core'].Iron;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:hotkeys":{"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hotkeys/main.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  hotkeys: function () {
    return hotkeys;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);
var HotkeysManager;
module.watch(require("meteor/ohif:hotkeys/client/classes/HotkeysManager"), {
  HotkeysManager: function (v) {
    HotkeysManager = v;
  }
}, 1);
module.watch(require("jquery.hotkeys"));
// Create hotkeys namespace using a HotkeysManager class instance
var hotkeys = new HotkeysManager(); // Append hotkeys namespace to OHIF namespace

OHIF.hotkeys = hotkeys; // Export relevant objects
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"client":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hotkeys/client/index.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./components"));
module.watch(require("./lib"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"classes":{"HotkeysContext.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hotkeys/client/classes/HotkeysContext.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

module.export({
  HotkeysContext: function () {
    return HotkeysContext;
  }
});
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 0);

var HotkeysContext =
/*#__PURE__*/
function () {
  function HotkeysContext(name, definitions, enabled) {
    this.name = name;
    this.definitions = Object.assign({}, definitions);
    this.enabled = enabled;
  }

  var _proto = HotkeysContext.prototype;

  _proto.extend = function () {
    function extend() {
      var _this = this;

      var definitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if ((0, _typeof2.default)(definitions) !== 'object') return;
      this.definitions = Object.assign({}, definitions);
      Object.keys(definitions).forEach(function (command) {
        var hotkey = definitions[command];

        _this.unregister(command);

        if (hotkey) {
          _this.register(command, hotkey);
        }

        _this.definitions[command] = hotkey;
      });
    }

    return extend;
  }();

  _proto.register = function () {
    function register(command, hotkey) {
      var _this2 = this;

      if (!hotkey) {
        return;
      }

      if (!command) {
        return OHIF.log.warn("No command was defined for hotkey \"" + hotkey + "\"");
      }

      var bindingKey = "keydown.hotkey." + this.name + "." + command;

      var bind = function (hotkey) {
        return $(document).bind(bindingKey, hotkey, function (event) {
          if (!_this2.enabled.get()) return;
          OHIF.commands.run(command);
          event.preventDefault();
        });
      };

      if (hotkey instanceof Array) {
        hotkey.forEach(function (hotkey) {
          return bind(hotkey);
        });
      } else {
        bind(hotkey);
      }
    }

    return register;
  }();

  _proto.unregister = function () {
    function unregister(command) {
      var bindingKey = "keydown.hotkey." + this.name + "." + command;

      if (this.definitions[command]) {
        $(document).unbind(bindingKey);
        delete this.definitions[command];
      }
    }

    return unregister;
  }();

  _proto.initialize = function () {
    function initialize() {
      var _this3 = this;

      Object.keys(this.definitions).forEach(function (command) {
        var hotkey = _this3.definitions[command];

        _this3.register(command, hotkey);
      });
    }

    return initialize;
  }();

  _proto.destroy = function () {
    function destroy() {
      $(document).unbind("keydown.hotkey." + this.name);
    }

    return destroy;
  }();

  return HotkeysContext;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"HotkeysManager.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hotkeys/client/classes/HotkeysManager.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  HotkeysManager: function () {
    return HotkeysManager;
  }
});
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
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
var HotkeysContext;
module.watch(require("meteor/ohif:hotkeys/client/classes/HotkeysContext"), {
  HotkeysContext: function (v) {
    HotkeysContext = v;
  }
}, 5);

var HotkeysManager =
/*#__PURE__*/
function () {
  function HotkeysManager() {
    var _this = this;

    this.contexts = {};
    this.defaults = {};
    this.currentContextName = null;
    this.enabled = new ReactiveVar(true);
    this.retrieveFunction = null;
    this.storeFunction = null;
    this.changeObserver = new Tracker.Dependency();
    Tracker.autorun(function () {
      var contextName = OHIF.context.get(); // Avoind falling in MongoDB collections reactivity

      Tracker.nonreactive(function () {
        return _this.switchToContext(contextName);
      });
    });
  }

  var _proto = HotkeysManager.prototype;

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

  _proto.store = function () {
    function store(contextName, definitions) {
      var _this2 = this;

      var storageKey = "hotkeysDefinitions." + contextName;
      return new Promise(function (resolve, reject) {
        if (_this2.storeFunction) {
          _this2.storeFunction.call(_this2, storageKey, definitions).then(resolve).catch(reject);
        } else if (Meteor.userId()) {
          OHIF.user.setData(storageKey, definitions).then(resolve).catch(reject);
        } else {
          Session.setPersistent(storageKey, definitions);
          resolve();
        }
      });
    }

    return store;
  }();

  _proto.retrieve = function () {
    function retrieve(contextName) {
      var _this3 = this;

      var storageKey = "hotkeysDefinitions." + contextName;
      return new Promise(function (resolve, reject) {
        if (_this3.retrieveFunction) {
          _this3.retrieveFunction(contextName).then(resolve).catch(reject);
        } else if (OHIF.user) {
          try {
            resolve(OHIF.user.getData(storageKey));
          } catch (error) {
            reject(error);
          }
        } else {
          resolve(Session.get(storageKey));
        }
      });
    }

    return retrieve;
  }();

  _proto.disable = function () {
    function disable() {
      this.enabled.set(false);
    }

    return disable;
  }();

  _proto.enable = function () {
    function enable() {
      this.enabled.set(true);
    }

    return enable;
  }();

  _proto.getContext = function () {
    function getContext(contextName) {
      return this.contexts[contextName];
    }

    return getContext;
  }();

  _proto.getCurrentContext = function () {
    function getCurrentContext() {
      return this.getContext(this.currentContextName);
    }

    return getCurrentContext;
  }();

  _proto.load = function () {
    function load(contextName) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        var context = _this4.getContext(contextName);

        if (!context) return reject();

        _this4.retrieve(contextName).then(function (defs) {
          var definitions = defs || _this4.defaults[contextName];

          if (!definitions) {
            _this4.changeObserver.changed();

            return reject();
          }

          context.destroy();
          context.definitions = definitions;
          context.initialize();

          _this4.changeObserver.changed();

          resolve(definitions);
        }).catch(reject);
      });
    }

    return load;
  }();

  _proto.set = function () {
    function set(contextName, contextDefinitions) {
      var isDefaultDefinitions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var enabled = this.enabled;
      var context = new HotkeysContext(contextName, contextDefinitions, enabled);
      var currentContext = this.getCurrentContext();

      if (currentContext && currentContext.name === contextName) {
        currentContext.destroy();
        context.initialize();
      }

      this.contexts[contextName] = context;

      if (isDefaultDefinitions) {
        this.defaults[contextName] = contextDefinitions;
      }
    }

    return set;
  }();

  _proto.register = function () {
    function register(contextName, command, hotkey) {
      if (!command || !hotkey) return;
      var context = this.getContext(contextName);

      if (!context) {
        this.set(contextName, {});
      }

      context.register(command, hotkey);
    }

    return register;
  }();

  _proto.unsetContext = function () {
    function unsetContext(contextName) {
      if (contextName === this.currentContextName) {
        this.getCurrentContext().destroy();
      }

      delete this.contexts[contextName];
      delete this.defaults[contextName];
    }

    return unsetContext;
  }();

  _proto.resetDefauls = function () {
    function resetDefauls(contextName) {
      var context = this.getContext(contextName);
      var definitions = this.defaults[contextName];
      if (!context || !definitions) return;
      context.extend(definitions);
      return this.store(contextName, definitions).then(this.changeObserver.changed);
    }

    return resetDefauls;
  }();

  _proto.switchToContext = function () {
    function switchToContext(contextName) {
      var currentContext = this.getCurrentContext();

      if (currentContext) {
        currentContext.destroy();
      }

      var newContext = this.contexts[contextName];
      if (!newContext) return;
      this.currentContextName = contextName;
      newContext.initialize();
      this.load(contextName).catch(function () {});
    }

    return switchToContext;
  }();

  return HotkeysManager;
}();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"components":{"confirmReplacementPopover.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_hotkeys/client/components/confirmReplacementPopover.html                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.confirmReplacementPopover.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.confirmReplacementPopover.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hotkeys/client/components/template.confirmReplacementPopover.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("hotkeysConfirmReplacementPopover");
Template["hotkeysConfirmReplacementPopover"] = new Template("Template.hotkeysConfirmReplacementPopover", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      confirmLabel: "Yes",
      cancelLabel: "No",
      confirmClass: "btn-danger"
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("popoverForm"), function() {
      return [ "\n        ", HTML.P(HTML.B(Blaze.View("lookup:..conflictedFunctionName", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "conflictedFunctionName"));
      })), " is already using the ", HTML.B(Blaze.View("lookup:..hotkeyCombination", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "hotkeyCombination"));
      })), " shortcut."), "\n        ", HTML.P("Do you want to use the shortcut to the ", HTML.B(Blaze.View("lookup:..newFunctionName", function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "newFunctionName"));
      })), " function instead?"), "\n    " ];
    });
  });
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"form.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_hotkeys/client/components/form.html                                                        //
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
// packages/ohif_hotkeys/client/components/template.form.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("hotkeysForm");
Template["hotkeysForm"] = new Template("Template.hotkeysForm", (function() {
  var view = this;
  return Blaze._TemplateWith(function() {
    return Spacebars.dataMustache(view.lookup("extend"), view.lookup("."), Spacebars.kw({
      api: Spacebars.dot(view.lookup("instance"), "api"),
      class: "form-themed"
    }));
  }, function() {
    return Spacebars.include(view.lookupTemplate("form"), function() {
      return [ "\n        ", HTML.DIV({
        class: "form-content"
      }, "\n            ", Blaze.Let({
        lists: function() {
          return Spacebars.call(view.lookup("getHotkeyInputInformationLists"));
        }
      }, function() {
        return [ "\n                ", HTML.DIV({
          class: "row"
        }, "\n                    ", HTML.DIV({
          class: "col-lg-6 hotkeys-left"
        }, "\n                        ", Blaze._TemplateWith(function() {
          return {
            inputs: Spacebars.call(Spacebars.dot(view.lookup("lists"), "left"))
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("hotkeysFormTable"));
        }), "\n                    "), "\n                    ", HTML.DIV({
          class: "col-lg-6 hotkeys-right"
        }, "\n                        ", Blaze._TemplateWith(function() {
          return {
            inputs: Spacebars.call(Spacebars.dot(view.lookup("lists"), "right"))
          };
        }, function() {
          return Spacebars.include(view.lookupTemplate("hotkeysFormTable"));
        }), "\n                    "), "\n                "), "\n            " ];
      }), "\n        "), "\n        ", HTML.DIV({
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
// packages/ohif_hotkeys/client/components/form.js                                                                     //
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
Template.hotkeysForm.onCreated(function () {
  var instance = Template.instance();
  var contextName = instance.data.contextName;
  instance.api = {
    save: function () {
      var form = instance.$('form').first().data('component');
      var definitions = form.value();
      var promise = OHIF.hotkeys.store(contextName, definitions);
      promise.then(function () {
        var successMessage = 'The keyboard shortcut preferences were successfully saved.';
        OHIF.ui.notifications.success({
          text: successMessage
        });
        OHIF.hotkeys.load(contextName).then(function (defs) {
          return instance.hotkeysDefinitions.set(defs);
        });
      });
      return promise;
    },
    resetDefaults: function () {
      var dialogOptions = {
        "class": 'themed',
        title: 'Reset Keyboard Shortcuts',
        message: 'Are you sure you want to reset all the shortcuts to their defaults?'
      };
      return OHIF.ui.showDialog('dialogConfirm', dialogOptions).then(function () {
        return OHIF.hotkeys.resetDefauls(contextName);
      });
    }
  };

  var rg = function (start, end) {
    return _.range(start, end + 1);
  };

  instance.allowedKeys = _.union([8, 13, 27, 32, 46], // BACKSPACE, ENTER, ESCAPE, SPACE, DELETE
  [12, 106, 107, 109, 110, 111], // Numpad keys
  rg(219, 221), // [\]
  rg(186, 191), // ;=,-./
  rg(112, 130), // F1-F19
  rg(33, 40), // arrow keys, home/end, pg dn/up
  rg(48, 57), // 0-9
  rg(65, 90) // A-Z
  );

  instance.updateInputText = function (event) {
    var displayPressedKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var $target = $(event.currentTarget);
    var keysPressedArray = instance.getKeysPressedArray(event);

    if (displayPressedKey) {
      var specialKeyName = jQuery.hotkeys.specialKeys[event.which];
      var keyName = specialKeyName || String.fromCharCode(event.keyCode) || event.key;
      keysPressedArray.push(keyName.toUpperCase());
    }

    $target.val(keysPressedArray.join('+'));
  };

  instance.getKeysPressedArray = function (event) {
    var keysPressedArray = [];

    if (event.ctrlKey && !event.altKey) {
      keysPressedArray.push('CTRL');
    }

    if (event.shiftKey && !event.altKey) {
      keysPressedArray.push('SHIFT');
    }

    if (event.altKey && !event.ctrlKey) {
      keysPressedArray.push('ALT');
    }

    return keysPressedArray;
  };

  instance.getConflictingCommand = function (currentCommand, currentCombination) {
    var form = instance.$('form').first().data('component');
    var hotkeys = form.value();
    var conflict = '';

    _.each(hotkeys, function (combination, command) {
      if (combination && combination === currentCombination && command !== currentCommand) {
        conflict = command;
      }
    });

    return conflict;
  };

  instance.disallowedCombinations = {
    '': [],
    ALT: ['SPACE'],
    SHIFT: [],
    CTRL: ['F4', 'F5', 'F11', 'W', 'R', 'T', 'O', 'P', 'A', 'D', 'F', 'G', 'H', 'J', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'PAGEDOWN', 'PAGEUP'],
    'CTRL+SHIFT': ['Q', 'W', 'R', 'T', 'P', 'A', 'H', 'V', 'B', 'N']
  };
  var hotkeysContext = OHIF.hotkeys.getContext(contextName) || {};
  instance.hotkeysDefinitions = new ReactiveVar(hotkeysContext.definitions);
  OHIF.hotkeys.load(contextName).then(function (defs) {
    return instance.hotkeysDefinitions.set(defs);
  });
});
Template.hotkeysForm.events({
  'keydown .hotkey': function (event, instance) {
    // Prevent ESC key from propagating and closing the modal
    if (event.keyCode === 27) {
      event.stopPropagation();
    }

    if (instance.allowedKeys.indexOf(event.keyCode) > -1) {
      instance.updateInputText(event, true);
      $(event.currentTarget).trigger('hotkeyChange');
    } else {
      instance.updateInputText(event);
    }

    event.preventDefault();
  },
  'hotkeyChange .hotkey': function (event, instance) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var $target = $(event.currentTarget);
    var combination = $target.val();
    var keys = combination.split('+');
    var lastKey = keys.pop();
    var modifierCombination = keys.join('+');
    var isModifier = ['CTRL', 'ALT', 'SHIFT'].indexOf(lastKey) > -1;
    var formItem = $target.data('component');
    var conflictedCommand = instance.getConflictingCommand(this.key, combination);

    if (isModifier) {
      // Clean the input if left with only a modifier key or browser specific command
      formItem.error("It's not possible to define only modifier keys (CTRL, ALT and SHIFT) as a shortcut");
      $target.val('').focus();
    } else if (instance.disallowedCombinations[modifierCombination].indexOf(lastKey) > -1) {
      // Clean the input and show error if combination is not allowed
      formItem.error("The \"" + combination + "\" shortcut combination is not allowed");
      $target.val('').focus();
    } else if (conflictedCommand) {
      if (data.blurTrigger) return; // Remove the error message

      formItem.error(false);
      formItem.toggleTooltip(false);
      var placement = $target.closest('.hotkeys-left').length ? 'right' : 'left';
      var commandsContext = OHIF.commands.getContext(instance.data.contextName);
      var popoverData = {
        conflictedFunctionName: commandsContext[conflictedCommand].name,
        newFunctionName: commandsContext[this.key].name,
        hotkeyCombination: combination
      };
      var popoverOptions = {
        event: event,
        placement: placement
      };
      var conflictedFormItem = instance.$('form').first().data('component').item(conflictedCommand);
      formItem.state('error', true);
      conflictedFormItem.state('error', true);

      var cleanup = function () {
        instance.popoverVisible = false;
        formItem.state('error', false);
        conflictedFormItem.state('error', false);
      };

      var popoverTemplate = 'hotkeysConfirmReplacementPopover';
      instance.popoverVisible = true;
      OHIF.ui.showPopover(popoverTemplate, popoverData, popoverOptions).then(function () {
        cleanup();
        formItem.value(combination);
        conflictedFormItem.value('');
        $target.blur();
      }).catch(function () {
        cleanup();
        $target.val('').focus();
      });
    } else {
      // Remove the error message and blur the component if everything is fine
      formItem.error(false);

      if (!data.blurTrigger) {
        $target.blur();
      }
    }
  },
  'blur .hotkey': function (event, instance) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    $(event.currentTarget).trigger('hotkeyChange', {
      blurTrigger: true
    });
  },
  'keyup .hotkey': function (event, instance) {
    if (!instance.popoverVisible) {
      instance.updateInputText(event);
    }
  }
});
Template.hotkeysForm.helpers({
  getHotkeyInputInformationLists: function () {
    OHIF.hotkeys.changeObserver.depend();
    var instance = Template.instance();
    var contextName = instance.data.contextName;
    var hotkeyDefinitions = instance.hotkeysDefinitions.get();
    var commandsContext = OHIF.commands.getContext(contextName);
    if (!hotkeyDefinitions || !commandsContext) return {};
    var commands = Object.keys(OHIF.hotkeys.defaults[contextName] || {});
    var list = [];
    commands.forEach(function (commandName) {
      var commandDefinitions = commandsContext[commandName];
      if (!commandDefinitions) return;
      list.push({
        key: commandName,
        label: commandDefinitions.name,
        value: hotkeyDefinitions[commandName] || ''
      });
    });
    var left = list.splice(0, Math.ceil(list.length / 2));
    var right = list;
    return {
      left: left,
      right: right
    };
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"formTable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_hotkeys/client/components/formTable.html                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./template.formTable.js"), {
  "*": module.makeNsSetter(true)
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.formTable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hotkeys/client/components/template.formTable.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //

Template.__checkName("hotkeysFormTable");
Template["hotkeysFormTable"] = new Template("Template.hotkeysFormTable", (function() {
  var view = this;
  return HTML.TABLE({
    class: "full-width"
  }, "\n        ", HTML.THEAD("\n            ", HTML.TR("\n                ", HTML.TH({
    class: "text-right p-r-1"
  }, "Function"), "\n                ", HTML.TH({
    class: "text-center"
  }, "Shortcut"), "\n            "), "\n        "), "\n        ", HTML.TBODY("\n            ", Blaze.Each(function() {
    return {
      _sequence: Spacebars.call(Spacebars.dot(view.lookup("."), "inputs")),
      _variable: "input"
    };
  }, function() {
    return [ "\n                ", HTML.TR("\n                    ", HTML.TD({
      class: "text-right p-r-1"
    }, Blaze.View("lookup:getLabel", function() {
      return Spacebars.mustache(view.lookup("getLabel"), view.lookup("input"));
    })), "\n                    ", HTML.TD({
      width: "200"
    }, Blaze._TemplateWith(function() {
      return Spacebars.dataMustache(view.lookup("extend"), Spacebars.kw({
        class: "hotkey text-center",
        key: Spacebars.dot(view.lookup("input"), "key"),
        value: Spacebars.dot(view.lookup("input"), "value")
      }));
    }, function() {
      return Spacebars.include(view.lookupTemplate("inputText"));
    })), "\n                "), "\n            " ];
  }), "\n        "), "\n    ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"formTable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hotkeys/client/components/formTable.js                                                                //
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
Template.hotkeysFormTable.helpers({
  getLabel: function (input) {
    var result = input.label;

    if (input.key.indexOf('WLPreset') === 0) {
      var presetIndex = parseInt(input.key.replace('WLPreset', ''));
      var preset = OHIF.viewer.wlPresets[presetIndex];

      if (preset.id) {
        result += " (" + preset.id + ")";
      }
    }

    return result;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hotkeys/client/components/index.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./confirmReplacementPopover.html"));
module.watch(require("./form.html"));
module.watch(require("./form.js"));
module.watch(require("./formTable.html"));
module.watch(require("./formTable.js"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hotkeys/client/lib/index.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./routes"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ohif_hotkeys/client/lib/routes.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Router;
module.watch(require("meteor/iron:router"), {
  Router: function (v) {
    Router = v;
  }
}, 0);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 1);
var hotkeys;
module.watch(require("meteor/ohif:hotkeys"), {
  hotkeys: function (v) {
    hotkeys = v;
  }
}, 2);
Router.onBeforeAction(function () {
  var lastRoute = Session.get('lastRoute');
  var currentRoute = this.router.current().route.getName();

  if (currentRoute !== lastRoute) {
    hotkeys.switchToContext(null);
    Session.set('lastRoute', currentRoute);
  }

  this.next();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"node_modules":{"jquery.hotkeys":{"package.json":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_hotkeys/node_modules/jquery.hotkeys/package.json                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.name = "jquery.hotkeys";
exports.version = "0.1.0";
exports.main = "jquery.hotkeys.js";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"jquery.hotkeys.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/ohif_hotkeys/node_modules/jquery.hotkeys/jquery.hotkeys.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*jslint browser: true*/
/*jslint jquery: true*/

/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * https://github.com/tzuryby/jquery.hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
 */

/*
 * One small change is: now keys are passed by object { keys: '...' }
 * Might be useful, when you want to pass some other data to your handler
 */

(function(jQuery) {

  jQuery.hotkeys = {
    version: "0.2.0",

    specialKeys: {
      8: "backspace",
      9: "tab",
      10: "return",
      13: "return",
      16: "shift",
      17: "ctrl",
      18: "alt",
      19: "pause",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "insert",
      46: "del",
      59: ";",
      61: "=",
      96: "0",
      97: "1",
      98: "2",
      99: "3",
      100: "4",
      101: "5",
      102: "6",
      103: "7",
      104: "8",
      105: "9",
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
      112: "f1",
      113: "f2",
      114: "f3",
      115: "f4",
      116: "f5",
      117: "f6",
      118: "f7",
      119: "f8",
      120: "f9",
      121: "f10",
      122: "f11",
      123: "f12",
      144: "numlock",
      145: "scroll",
      173: "-",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'"
    },

    shiftNums: {
      "`": "~",
      "1": "!",
      "2": "@",
      "3": "#",
      "4": "$",
      "5": "%",
      "6": "^",
      "7": "&",
      "8": "*",
      "9": "(",
      "0": ")",
      "-": "_",
      "=": "+",
      ";": ": ",
      "'": "\"",
      ",": "<",
      ".": ">",
      "/": "?",
      "\\": "|"
    },

    // excludes: button, checkbox, file, hidden, image, password, radio, reset, search, submit, url
    textAcceptingInputTypes: [
      "text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime",
      "datetime-local", "search", "color", "tel"],

    // default input types not to bind to unless bound directly
    textInputTypes: /textarea|input|select/i,

    options: {
      filterInputAcceptingElements: true,
      filterTextInputs: true,
      filterContentEditable: true
    }
  };

  function keyHandler(handleObj) {
    if (typeof handleObj.data === "string") {
      handleObj.data = {
        keys: handleObj.data
      };
    }

    // Only care when a possible input has been specified
    if (!handleObj.data || !handleObj.data.keys || typeof handleObj.data.keys !== "string") {
      return;
    }

    var origHandler = handleObj.handler,
      keys = handleObj.data.keys.toLowerCase().split(" ");

    handleObj.handler = function(event) {
      //      Don't fire in text-accepting inputs that we didn't directly bind to
      if (this !== event.target &&
        (jQuery.hotkeys.options.filterInputAcceptingElements &&
          jQuery.hotkeys.textInputTypes.test(event.target.nodeName) ||
          (jQuery.hotkeys.options.filterContentEditable && jQuery(event.target).attr('contenteditable')) ||
          (jQuery.hotkeys.options.filterTextInputs &&
            jQuery.inArray(event.target.type, jQuery.hotkeys.textAcceptingInputTypes) > -1))) {
        return;
      }

      var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[event.which],
        character = String.fromCharCode(event.which).toLowerCase(),
        modif = "",
        possible = {};

      jQuery.each(["alt", "ctrl", "shift"], function(index, specialKey) {

        if (event[specialKey + 'Key'] && special !== specialKey) {
          modif += specialKey + '+';
        }
      });

      // metaKey is triggered off ctrlKey erronously
      if (event.metaKey && !event.ctrlKey && special !== "meta") {
        modif += "meta+";
      }

      if (event.metaKey && special !== "meta" && modif.indexOf("alt+ctrl+shift+") > -1) {
        modif = modif.replace("alt+ctrl+shift+", "hyper+");
      }

      if (special) {
        possible[modif + special] = true;
      }
      else {
        possible[modif + character] = true;
        possible[modif + jQuery.hotkeys.shiftNums[character]] = true;

        // "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
        if (modif === "shift+") {
          possible[jQuery.hotkeys.shiftNums[character]] = true;
        }
      }

      for (var i = 0, l = keys.length; i < l; i++) {
        if (possible[keys[i]]) {
          return origHandler.apply(this, arguments);
        }
      }
    };
  }

  jQuery.each(["keydown", "keyup", "keypress"], function() {
    jQuery.event.special[this] = {
      add: keyHandler
    };
  });

})(jQuery || this.jQuery || window.jQuery);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
var exports = require("/node_modules/meteor/ohif:hotkeys/main.js");
require("/node_modules/meteor/ohif:hotkeys/client/index.js");

/* Exports */
Package._define("ohif:hotkeys", exports);

})();
