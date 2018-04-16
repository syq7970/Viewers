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
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"ohif:commands":{"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/ohif_commands/main.js                                                             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
module.export({
  context: function () {
    return context;
  },
  commands: function () {
    return commands;
  }
});
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 0);
var OHIF;
module.watch(require("meteor/ohif:core"), {
  OHIF: function (v) {
    OHIF = v;
  }
}, 1);
var CommandsManager;
module.watch(require("meteor/ohif:commands/client/classes/CommandsManager"), {
  CommandsManager: function (v) {
    CommandsManager = v;
  }
}, 2);
// Create context namespace using a ReactiveVar
var context = new ReactiveVar(null); // Append context namespace to OHIF namespace

OHIF.context = context; // Create commands namespace using a CommandsManager class instance

var commands = new CommandsManager(context); // Append commands namespace to OHIF namespace

OHIF.commands = commands; // Export relevant objects
////////////////////////////////////////////////////////////////////////////////////////////////

},"client":{"classes":{"CommandsManager.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/ohif_commands/client/classes/CommandsManager.js                                   //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

module.export({
  CommandsManager: function () {
    return CommandsManager;
  }
});
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
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

var CommandsManager =
/*#__PURE__*/
function () {
  function CommandsManager() {
    this.contexts = {}; // Enable reactivity by storing the last executed command

    this.last = new ReactiveVar('');
  }

  var _proto = CommandsManager.prototype;

  _proto.getContext = function () {
    function getContext(contextName) {
      var context = this.contexts[contextName];

      if (!context) {
        return OHIF.log.warn("No context found with name \"" + contextName + "\"");
      }

      return context;
    }

    return getContext;
  }();

  _proto.getCurrentContext = function () {
    function getCurrentContext() {
      var contextName = OHIF.context.get();

      if (!contextName) {
        return OHIF.log.warn('There is no selected context');
      }

      return this.getContext(contextName);
    }

    return getCurrentContext;
  }();

  _proto.createContext = function () {
    function createContext(contextName) {
      if (!contextName) return;

      if (this.contexts[contextName]) {
        return this.clear(contextName);
      }

      this.contexts[contextName] = {};
    }

    return createContext;
  }();

  _proto.set = function () {
    function set(contextName, definitions) {
      var extend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if ((0, _typeof2.default)(definitions) !== 'object') return;
      var context = this.getContext(contextName);
      if (!context) return;

      if (!extend) {
        this.clear(contextName);
      }

      Object.keys(definitions).forEach(function (command) {
        return context[command] = definitions[command];
      });
    }

    return set;
  }();

  _proto.register = function () {
    function register(contextName, command, definition) {
      if ((0, _typeof2.default)(definition) !== 'object') return;
      var context = this.getContext(contextName);
      if (!context) return;
      context[command] = definition;
    }

    return register;
  }();

  _proto.setDisabledFunction = function () {
    function setDisabledFunction(contextName, command, func) {
      if (!command || typeof func !== 'function') return;
      var context = this.getContext(contextName);
      if (!context) return;
      var definition = context[command];

      if (!definition) {
        return OHIF.log.warn("Trying to set a disabled function to a command \"" + command + "\" that was not yet defined");
      }

      definition.disabled = func;
    }

    return setDisabledFunction;
  }();

  _proto.clear = function () {
    function clear(contextName) {
      if (!contextName) return;
      this.contexts[contextName] = {};
    }

    return clear;
  }();

  _proto.getDefinition = function () {
    function getDefinition(command) {
      var context = this.getCurrentContext();
      if (!context) return;
      return context[command];
    }

    return getDefinition;
  }();

  _proto.isDisabled = function () {
    function isDisabled(command) {
      var definition = this.getDefinition(command);
      if (!definition) return false;
      var disabled = definition.disabled;
      if (_.isFunction(disabled) && disabled()) return true;
      if (!_.isFunction(disabled) && disabled) return true;
      return false;
    }

    return isDisabled;
  }();

  _proto.run = function () {
    function run(command) {
      var definition = this.getDefinition(command);

      if (!definition) {
        return OHIF.log.warn("Command \"" + command + "\" not found in current context");
      }

      var action = definition.action,
          params = definition.params;
      if (this.isDisabled(command)) return;

      if (typeof action !== 'function') {
        return OHIF.log.warn("No action was defined for command \"" + command + "\"");
      } else {
        var result = action(params);

        if (this.last.get() === command) {
          this.last.dep.changed();
        } else {
          this.last.set(command);
        }

        return result;
      }
    }

    return run;
  }();

  return CommandsManager;
}();
////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("/node_modules/meteor/ohif:commands/main.js");

/* Exports */
Package._define("ohif:commands", exports);

})();
