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
var meteorInstall = Package['modules-runtime'].meteorInstall;

var require = meteorInstall({"node_modules":{"meteor":{"modules":{"client.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/modules/client.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require("./install-packages.js");
require("./stubs.js");
require("./process.js");
require("./reify.js");

exports.addStyles = require("./css").addStyles;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"css.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/modules/css.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var doc = document;
var head = doc.getElementsByTagName("head").item(0);

exports.addStyles = function (css) {
  var style = doc.createElement("style");

  style.setAttribute("type", "text/css");

  // https://msdn.microsoft.com/en-us/library/ms535871(v=vs.85).aspx
  var internetExplorerSheetObject =
    style.sheet || // Edge/IE11.
    style.styleSheet; // Older IEs.

  if (internetExplorerSheetObject) {
    internetExplorerSheetObject.cssText = css;
  } else {
    style.appendChild(doc.createTextNode(css));
  }

  return head.appendChild(style);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"install-packages.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/modules/install-packages.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function install(name, mainModule) {
  var meteorDir = {};

  // Given a package name <name>, install a stub module in the
  // /node_modules/meteor directory called <name>.js, so that
  // require.resolve("meteor/<name>") will always return
  // /node_modules/meteor/<name>.js instead of something like
  // /node_modules/meteor/<name>/index.js, in the rare but possible event
  // that the package contains a file called index.js (#6590).

  if (typeof mainModule === "string") {
    // Set up an alias from /node_modules/meteor/<package>.js to the main
    // module, e.g. meteor/<package>/index.js.
    meteorDir[name + ".js"] = mainModule;
  } else {
    // back compat with old Meteor packages
    meteorDir[name + ".js"] = function (r, e, module) {
      module.exports = Package[name];
    };
  }

  meteorInstall({
    node_modules: {
      meteor: meteorDir
    }
  });
}

// This file will be modified during computeJsOutputFilesMap to include
// install(<name>) calls for every Meteor package.

install("meteor");
install("meteor-base");
install("mobile-experience");
install("babel-compiler");
install("ecmascript");
install("modules-runtime");
install("modules", "meteor/modules/client.js");
install("ecmascript-runtime");
install("babel-runtime", "meteor/babel-runtime/babel-runtime.js");
install("promise", "meteor/promise/client.js");
install("url", "meteor/url/url_client.js");
install("http", "meteor/http/httpcall_client.js");
install("dynamic-import", "meteor/dynamic-import/client.js");
install("ecmascript-runtime-client", "meteor/ecmascript-runtime-client/runtime.js");
install("base64", "meteor/base64/base64.js");
install("ejson", "meteor/ejson/ejson.js");
install("diff-sequence", "meteor/diff-sequence/diff.js");
install("geojson-utils", "meteor/geojson-utils/main.js");
install("id-map", "meteor/id-map/id-map.js");
install("random");
install("mongo-id", "meteor/mongo-id/id.js");
install("ordered-dict", "meteor/ordered-dict/ordered_dict.js");
install("tracker");
install("minimongo", "meteor/minimongo/minimongo_client.js");
install("check", "meteor/check/match.js");
install("retry", "meteor/retry/retry.js");
install("callback-hook", "meteor/callback-hook/hook.js");
install("ddp-common");
install("reload", "meteor/reload/reload.js");
install("socket-stream-client", "meteor/socket-stream-client/browser.js");
install("ddp-client", "meteor/ddp-client/client/client.js");
install("ddp");
install("ddp-server");
install("allow-deny");
install("mongo");
install("blaze-html-templates");
install("reactive-var");
install("jquery", "meteor/jquery/main.js");
install("shell-server");
install("ohif:polyfill");
install("standard-app-packages");
install("stylus");
install("underscore");
install("observe-sequence");
install("deps");
install("htmljs");
install("blaze");
install("spacebars");
install("templating-compiler");
install("templating-runtime");
install("templating");
install("ui");
install("iron:core");
install("iron:dynamic-template");
install("iron:layout");
install("iron:url");
install("iron:middleware-stack");
install("iron:location");
install("reactive-dict", "meteor/reactive-dict/migration.js");
install("iron:controller");
install("iron:router");
install("natestrauser:select2");
install("aldeed:simple-schema");
install("autoupdate");
install("meteor-platform");
install("webapp", "meteor/webapp/webapp_cordova.js");
install("logging", "meteor/logging/logging_cordova.js");
install("session");
install("livedata");
install("fastclick");
install("mobile-status-bar");
install("launch-screen");
install("ohif:core", "meteor/ohif:core/main.js");
install("ohif:header", "meteor/ohif:header/main.js");
install("ohif:themes-common");
install("ohif:themes");
install("ohif:design");
install("ohif:cornerstone", "meteor/ohif:cornerstone/main.js");
install("ohif:cornerstone-settings", "meteor/ohif:cornerstone-settings/client/main.js");
install("momentjs:moment");
install("validatejs");
install("amplify");
install("ddp-rate-limiter");
install("localstorage");
install("accounts-base", "meteor/accounts-base/client_main.js");
install("u2622:persistent-session");
install("ohif:log");
install("ohif:commands", "meteor/ohif:commands/main.js");
install("ohif:hotkeys", "meteor/ohif:hotkeys/main.js");
install("ohif:viewerbase", "meteor/ohif:viewerbase/main.js");
install("ohif:metadata", "meteor/ohif:metadata/main.js");
install("silentcicero:jszip");
install("raix:eventemitter");
install("tmeasday:check-npm-versions", "meteor/tmeasday:check-npm-versions/check-npm-versions.js");
install("aldeed:collection2", "meteor/aldeed:collection2/collection2.js");
install("twbs:bootstrap");
install("dangrossman:bootstrap-daterangepicker");
install("ohif:servers");
install("ohif:dicom-services");
install("ohif:wadoproxy");
install("ohif:studies");
install("ohif:study-list");
install("ohif:hanging-protocols");
install("aldeed:template-extension");
install("fortawesome:fontawesome");
install("mrt:moment");
install("server-render", "meteor/server-render/client.js");
install("shim-common");
install("es5-shim", "meteor/es5-shim/cordova.js");
install("hot-code-push");
install("mdg:validation-error");
install("service-configuration");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"process.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/modules/process.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (! global.process) {
  try {
    // The application can run `npm install process` to provide its own
    // process stub; otherwise this module will provide a partial stub.
    global.process = require("process");
  } catch (missing) {
    global.process = {};
  }
}

var proc = global.process;

if (Meteor.isServer) {
  // Make require("process") work on the server in all versions of Node.
  meteorInstall({
    node_modules: {
      "process.js": function (r, e, module) {
        module.exports = proc;
      }
    }
  });
} else {
  proc.platform = "browser";
  proc.nextTick = proc.nextTick || Meteor._setImmediate;
}

if (typeof proc.env !== "object") {
  proc.env = {};
}

var hasOwn = Object.prototype.hasOwnProperty;
for (var key in meteorEnv) {
  if (hasOwn.call(meteorEnv, key)) {
    proc.env[key] = meteorEnv[key];
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"reify.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/modules/reify.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Module = module.constructor;
var Mp = Module.prototype;
require("reify/lib/runtime").enable(Mp);
Mp.importSync = Mp.importSync || Mp.import;
Mp.import = Mp.import || Mp.importSync;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"stubs.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/modules/stubs.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var haveStubs = false;
try {
  require.resolve("meteor-node-stubs");
  haveStubs = true;
} catch (noStubs) {}

if (haveStubs) {
  // When meteor-node-stubs is installed in the application's root
  // node_modules directory, requiring it here installs aliases for stubs
  // for all Node built-in modules, such as fs, util, and http.
  require("meteor-node-stubs");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"reify":{"lib":{"runtime":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/modules/node_modules/reify/lib/runtime/index.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
"use strict";

// This module should be compatible with PhantomJS v1, just like the other files
// in reify/lib/runtime. Node 4+ features like const/let and arrow functions are
// not acceptable here, and importing any npm packages should be contemplated
// with extreme skepticism.

var utils = require("./utils.js");
var Entry = require("./entry.js");

// The exports.enable method can be used to enable the Reify runtime for
// specific module objects, or for Module.prototype (where implemented),
// to make the runtime available throughout the entire module system.
exports.enable = function (mod) {
  if (typeof mod["export"] !== "function" ||
      typeof mod.importSync !== "function") {
    mod["export"] = moduleExport;
    mod.exportDefault = moduleExportDefault;
    mod.runSetters = runSetters;
    mod.watch = moduleWatch;

    // Used for copying the properties of a namespace object to
    // mod.exports to implement `export * from "module"` syntax.
    mod.makeNsSetter = moduleMakeNsSetter;

    // To be deprecated:
    mod.runModuleSetters = runSetters;
    mod.importSync = importSync;

    return true;
  }

  return false;
};

function moduleWatch(exported, setters, key) {
  utils.setESModule(this.exports);
  Entry.getOrCreate(this.exports, this);

  if (utils.isObject(setters)) {
    Entry.getOrCreate(exported).addSetters(this, setters, key);
  }
}

// If key is provided, it will be used to identify the given setters so
// that they can be replaced if module.importSync is called again with the
// same key. This avoids potential memory leaks from import declarations
// inside loops. The compiler generates these keys automatically (and
// deterministically) when compiling nested import declarations.
function importSync(id, setters, key) {
  return this.watch(this.require(id), setters, key);
}

// Register getter functions for local variables in the scope of an export
// statement. Pass true as the second argument to indicate that the getter
// functions always return the same values.
function moduleExport(getters, constant) {
  utils.setESModule(this.exports);
  var entry = Entry.getOrCreate(this.exports, this);
  entry.addGetters(getters, constant);
  if (this.loaded) {
    // If the module has already been evaluated, then we need to trigger
    // another round of entry.runSetters calls, which begins by calling
    // entry.runModuleGetters(module).
    entry.runSetters();
  }
}

// Register a getter function that always returns the given value.
function moduleExportDefault(value) {
  return this["export"]({
    default: function () {
      return value;
    }
  }, true);
}

// Platform-specific code should find a way to call this method whenever
// the module system is about to return module.exports from require. This
// might happen more than once per module, in case of dependency cycles,
// so we want Module.prototype.runSetters to run each time.
function runSetters(valueToPassThrough) {
  var entry = Entry.get(this.exports);
  if (entry !== null) {
    entry.runSetters();
  }

  if (this.loaded) {
    // If this module has finished loading, then we must create an Entry
    // object here, so that we can add this module to entry.ownerModules
    // by passing it as the second argument to Entry.getOrCreate.
    Entry.getOrCreate(this.exports, this);
  }

  // Assignments to exported local variables get wrapped with calls to
  // module.runSetters, so module.runSetters returns the
  // valueToPassThrough parameter to allow the value of the original
  // expression to pass through. For example,
  //
  //   export var a = 1;
  //   console.log(a += 3);
  //
  // becomes
  //
  //   module.export("a", () => a);
  //   var a = 1;
  //   console.log(module.runSetters(a += 3));
  //
  // This ensures module.runSetters runs immediately after the assignment,
  // and does not interfere with the larger computation.
  return valueToPassThrough;
}

// Returns a function that takes a namespace object and copies the
// properties of the namespace to module.exports, excluding any "default"
// property (by default, unless includeDefault is truthy), which is useful
// for implementing `export * from "module"`.
function moduleMakeNsSetter(includeDefault) {
  var module = this;
  // Discussion of why the "default" property is skipped:
  // https://github.com/tc39/ecma262/issues/948
  return function (namespace) {
    Object.keys(namespace).forEach(function (key) {
      if (includeDefault || key !== "default") {
        utils.copyKey(key, module.exports, namespace);
      }
    });
  };
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"utils.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/modules/node_modules/reify/lib/runtime/utils.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
"use strict";

// This module should be compatible with PhantomJS v1, just like the other files
// in reify/lib/runtime. Node 4+ features like const/let and arrow functions are
// not acceptable here, and importing any npm packages should be contemplated
// with extreme skepticism.

var useSetPrototypeOf = typeof Object.setPrototypeOf === "function";
var useSymbol = typeof Symbol === "function";

var esStrKey = "__esModule";
var esSymKey = useSymbol ? Symbol.for(esStrKey) : null;
var useToStringTag = useSymbol && typeof Symbol.toStringTag === "symbol";
var useGetOwnPropDesc =
  typeof Object.getOwnPropertyDescriptor === "function";
var hasOwn = Object.prototype.hasOwnProperty;

function copyKey(key, target, source) {
  if (useGetOwnPropDesc) {
    var desc = Object.getOwnPropertyDescriptor(source, key);
    desc.configurable = true; // Allow redefinition.
    Object.defineProperty(target, key, desc);
  } else {
    target[key] = source[key];
  }
}

exports.copyKey = copyKey;

// Returns obj[key] unless that property is defined by a getter function,
// in which case the getter function is returned.
exports.valueOrGetter = function (obj, key) {
  if (useGetOwnPropDesc && hasOwn.call(obj, key)) {
    var desc = Object.getOwnPropertyDescriptor(obj, key);
    if (typeof desc.get === "function") {
      return desc.get;
    }
  }

  return obj[key];
};

function getESModule(exported) {
  if (isObjectLike(exported)) {
    if (useSymbol && hasOwn.call(exported, esSymKey)) {
      return !! exported[esSymKey];
    }

    if (hasOwn.call(exported, esStrKey)) {
      return !! exported[esStrKey];
    }
  }

  return false;
}

exports.getESModule = getESModule;

function setESModule(exported) {
  if (isObjectLike(exported)) {
    if (useSymbol) {
      exported[esSymKey] = true;
    } else if (! exported[esStrKey]) {
      // Other module runtime systems may set exported.__esModule such
      // that it can't be redefined, so we call Object.defineProperty only
      // when exported.__esModule is not already true.
      Object.defineProperty(exported, esStrKey, {
        configurable: true,
        enumerable: false,
        value: true,
        writable: false
      });
    }
  }
}

exports.setESModule = setESModule;

function isObject(value) {
  return typeof value === "object" && value !== null;
}

exports.isObject = isObject;

function isObjectLike(value) {
  var type = typeof value;
  return type === "function" || (type === "object" && value !== null);
}

exports.isObjectLike = isObjectLike;

function createNamespace() {
  var namespace = Object.create(null);

  if (useToStringTag) {
    Object.defineProperty(namespace, Symbol.toStringTag, {
      value: "Module",
      configurable: false,
      enumerable: false,
      writable: false
    });
  }

  setESModule(namespace);

  return namespace;
}

exports.createNamespace = createNamespace;

function setPrototypeOf(object, proto) {
  if (useSetPrototypeOf) {
    Object.setPrototypeOf(object, proto);
  } else {
    object.__proto__ = proto;
  }
  return object;
}

exports.setPrototypeOf = setPrototypeOf;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"entry.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/modules/node_modules/reify/lib/runtime/entry.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
"use strict";

// This module should be compatible with PhantomJS v1, just like the other files
// in reify/lib/runtime. Node 4+ features like const/let and arrow functions are
// not acceptable here, and importing any npm packages should be contemplated
// with extreme skepticism.

var utils = require("./utils.js");

var GETTER_ERROR = {};
var NAN = {};
var UNDEFINED = {};
var hasOwn = Object.prototype.hasOwnProperty;
var keySalt = 0;

function Entry(exported) {
  // The module.exports of the module this Entry is managing.
  this.exports = exported;
  // Getters for local variables exported from the managed module.
  this.getters = Object.create(null);
  // Setters for assigning to local variables in parent modules.
  this.setters = Object.create(null);
  // The normalized namespace object that importers receive when they use
  // `import * as namespace from "..."` syntax.
  this.namespace = utils.createNamespace();
  // Map from module.id string to module object for each module this Entry
  // is managing.
  this.ownerModules = Object.create(null);
  // Boolean indicating whether all the modules this Entry is managing
  // have finished loading yet. Call entry.hasLoaded() to compute.
  this._loaded = false;
}

var Ep = utils.setPrototypeOf(Entry.prototype, null);

var weakEntryMap = typeof WeakMap === "function"
  ? new WeakMap
  : new (function FakeWeakMap() {
    // A barely functional WeakMap polyfill, just in case. This
    // implementation needs to be logically correct only in the specific
    // ways that the Entry class uses it. It isn't even "weak" in the
    // garbage-collection sense of the word, but that's fine.
    var keys = [];
    var values = [];

    this.get = function (obj) {
      var index = keys.indexOf(obj);
      if (index >= 0) {
        return values[index];
      }
    };

    this.set = function (obj, value) {
      var index = keys.indexOf(obj);
      if (index >= 0) {
        values[index] = value;
      } else {
        keys.push(obj);
        values.push(value);
      }
    };
  });

Entry.get = function (exported) {
  if (utils.isObjectLike(exported)) {
    var entry = weakEntryMap.get(exported);
    if (entry !== void 0) {
      return entry;
    }
  }
  return null;
};

Entry.getOrCreate = function (exported, mod) {
  var entry = getOrCreate(exported);

  if (utils.isObject(mod)) {
    entry.ownerModules[mod.id] = mod;
  }

  return entry;
};

function getOrCreate(exported) {
  if (! utils.isObjectLike(exported)) {
    // In case the child module modified module.exports, create a temporary
    // Entry object so that we can call the entry.addSetters method once,
    // which will trigger entry.runSetters(names), so that module.importSync
    // behaves as expected.
    return new Entry(exported);
  }

  var entry = weakEntryMap.get(exported);
  if (entry !== void 0) {
    return entry;
  }

  var entry = new Entry(exported);
  weakEntryMap.set(exported, entry);
  return entry;
};

function safeKeys(obj) {
  var keys = Object.keys(obj);
  var esModuleIndex = keys.indexOf("__esModule");
  if (esModuleIndex >= 0) {
    keys.splice(esModuleIndex, 1);
  }
  return keys;
}

Ep.addGetters = function (getters, constant) {
  var names = safeKeys(getters);
  var nameCount = names.length;
  constant = !! constant;

  for (var i = 0; i < nameCount; ++i) {
    var name = names[i];
    var getter = getters[name];

    if (typeof getter === "function" &&
        // Should this throw if this.getters[name] exists?
        ! (name in this.getters)) {
      this.getters[name] = getter;
      getter.constant = constant;
      getter.runCount = 0;
    }
  }
};

Ep.addSetters = function (parent, setters, key) {
  var names = safeKeys(setters);
  var nameCount = names.length;

  if (! nameCount) {
    return;
  }

  // If no key is provided, make a unique key. Otherwise, make sure the key is
  // distinct from keys provided by other parent modules.
  key = key === void 0
    ? makeUniqueKey()
    : parent.id + ":" + key;

  for (var i = 0; i < nameCount; ++i) {
    var name = names[i];
    var setter = setters[name];

    if (typeof setter === "function") {
      setter.parent = parent;
      if (! (name in this.setters)) {
        this.setters[name] = Object.create(null);
      }
      this.setters[name][key] = setter;
    }
  }

  this.runSetters(names);
};

Ep.runGetters = function (names) {
  // Before running getters, copy anything added to the exports object
  // over to the namespace. Values returned by getters take precedence
  // over these values, but we don't want to miss anything.
  syncExportsToNamespace(this, names);

  if (names === void 0 ||
      names.indexOf("*") >= 0) {
    names = Object.keys(this.getters);
  }

  var nameCount = names.length;

  for (var i = 0; i < nameCount; ++i) {
    var name = names[i];
    var value = runGetter(this, name);

    // If the getter is run without error, update both entry.namespace and
    // module.exports with the current value so that CommonJS require
    // calls remain consistent with module.watch.
    if (value !== GETTER_ERROR) {
      this.namespace[name] = value;
      this.exports[name] = value;
    }
  }
};

function syncExportsToNamespace(entry, names) {
  var setDefault = false;

  if (! utils.getESModule(entry.exports)) {
    // If the module entry is managing overrides module.exports, that
    // value should be exposed as the .default property of the namespace,
    // unless module.exports is marked as an ECMASCript module.
    entry.namespace.default = entry.exports;
    setDefault = true;
  }

  if (! utils.isObjectLike(entry.exports)) {
    return;
  }

  if (names === void 0 ||
      names.indexOf("*") >= 0) {
    names = Object.keys(entry.exports);
  }

  names.forEach(function (key) {
    // Don't set any properties for which a getter function exists in
    // entry.getters, don't accidentally override entry.namespace.default,
    // and only copy own properties from entry.exports.
    if (! hasOwn.call(entry.getters, key) &&
        ! (setDefault && key === "default") &&
        hasOwn.call(entry.exports, key)) {
      utils.copyKey(key, entry.namespace, entry.exports);
    }
  });
}

// Called by module.runSetters once the module this Entry is managing has
// finished loading.
Ep.hasLoaded = function () {
  if (this._loaded) {
    return true;
  }

  var ids = Object.keys(this.ownerModules);
  var idCount = ids.length;

  for (var i = 0; i < idCount; ++i) {
    var owner = this.ownerModules[ids[i]];
    if (! owner.loaded && owner.exports === this.exports) {
      // At least one owner module whose exports are still ===
      // this.exports has not finished loading, so this this Entry cannot
      // be marked as loaded yet.
      return false;
    }
  }

  // Set entry._loaded = true only if all the modules in
  // entry.ownerModules that are still associated with entry.exports have
  // finished loading.
  return this._loaded = true;
};

// Called whenever module.exports might have changed, to trigger any
// setters associated with the newly exported values. The names parameter
// is optional; without it, all getters and setters will run.
Ep.runSetters = function (names) {
  // Make sure entry.namespace and module.exports are up to date before we
  // call getExportByName(entry, name).
  this.runGetters(names);

  // Lazily-initialized object mapping parent module identifiers to parent
  // module objects whose setters we might need to run.
  var parents;

  forEachSetter(this, names, function (setter, name, value) {
    if (parents === void 0) {
      parents = Object.create(null);
    }
    parents[setter.parent.id] = setter.parent;

    // The param order for setters is `value` then `name` because the `name`
    // param is only used by namespace exports.
    setter(value, name);
  });

  if (! parents) {
    return;
  }

  // If any of the setters updated the module.exports of a parent module,
  // or updated local variables that are exported by that parent module,
  // then we must re-run any setters registered by that parent module.
  var parentIDs = Object.keys(parents);
  var parentIDCount = parentIDs.length;

  for (var i = 0; i < parentIDCount; ++i) {
    // What happens if parents[parentIDs[id]] === module, or if
    // longer cycles exist in the parent chain? Thanks to our setter.last
    // bookkeeping above, the runSetters broadcast will only proceed
    // as far as there are any actual changes to report.
    var parent = parents[parentIDs[i]];
    var parentEntry = Entry.get(parent.exports);
    if (parentEntry) {
      parentEntry.runSetters();
    }
  }
};

function callSetterIfNecessary(setter, name, value, callback) {
  if (name === "__esModule") {
    // Ignore setters asking for module.exports.__esModule.
    return;
  }

  var shouldCall = false;

  if (setter.last === void 0) {
    setter.last = Object.create(null);
    // Always call the setter if it has never been called before.
    shouldCall = true;
  }

  function changed(name, value) {
    var valueToCompare = value;
    if (valueToCompare !== valueToCompare) {
      valueToCompare = NAN;
    } else if (valueToCompare === void 0) {
      valueToCompare = UNDEFINED;
    }

    if (setter.last[name] === valueToCompare) {
      return false;
    }

    setter.last[name] = valueToCompare;
    return true;
  }

  if (name === "*") {
    var keys = safeKeys(value);
    var keyCount = keys.length;
    for (var i = 0; i < keyCount; ++i) {
      var key = keys[i];
      // Evaluating value[key] is risky because the property might be
      // defined by a getter function that logs a deprecation warning (or
      // worse) when evaluated. For example, Node uses this trick to
      // display a deprecation warning whenever crypto.createCredentials
      // is accessed. Fortunately, when value[key] is defined by a getter
      // function, it's enough to check whether the getter function itself
      // has changed, since we are careful elsewhere to preserve getters
      // rather than prematurely evaluating them.
      if (changed(key, utils.valueOrGetter(value, key))) {
        shouldCall = true;
      }
    }
  } else if (changed(name, value)) {
    shouldCall = true;
  }

  if (shouldCall) {
    // Only invoke the callback if we have not called this setter
    // (with a value of this name) before, or the current value is
    // different from the last value we passed to this setter.
    return callback(setter, name, value);
  }
}

// Invoke the given callback once for every (setter, name, value) that needs to
// be called. Note that forEachSetter does not call any setters itself, only the
// given callback.
function forEachSetter(entry, names, callback) {
  var needToCheckNames = true;

  if (names === void 0) {
    names = Object.keys(entry.setters);
    needToCheckNames = false;
  }

  var nameCount = names.length;

  for (var i = 0; i < nameCount; ++i) {
    var name = names[i];

    if (needToCheckNames &&
        ! hasOwn.call(entry.setters, name)) {
      continue;
    }

    var setters = entry.setters[name];
    var keys = Object.keys(setters);
    var keyCount = keys.length;

    for (var j = 0; j < keyCount; ++j) {
      var key = keys[j];
      var value = getExportByName(entry, name);

      callSetterIfNecessary(setters[key], name, value, callback);

      var getter = entry.getters[name];
      if (typeof getter === "function" &&
          // Sometimes a getter function will throw because it's called
          // before the variable it's supposed to return has been
          // initialized, so we need to know that the getter function has
          // run to completion at least once.
          getter.runCount > 0 &&
          getter.constant) {
        // If we happen to know that this getter function has run
        // successfully, and will never return a different value, then we
        // can forget the corresponding setter, because we've already
        // reported that constant value. Note that we can't forget the
        // getter, because we need to remember the original value in case
        // anyone tampers with entry.exports[name].
        delete setters[key];
      }
    }
  }
}

function getExportByName(entry, name) {
  if (name === "*") {
    return entry.namespace;
  }

  if (hasOwn.call(entry.namespace, name)) {
    return entry.namespace[name];
  }

  var exported = entry.exports;

  if (name === "default" &&
      ! (utils.getESModule(exported) &&
         "default" in exported)) {
    return exported;
  }

  if (exported == null) {
    return;
  }

  return exported[name];
}

function makeUniqueKey() {
  return Math.random()
    .toString(36)
    // Add an incrementing salt to help track key ordering and also
    // absolutely guarantee we never return the same key twice.
    .replace("0.", ++keySalt + "$");
}

function runGetter(entry, name) {
  var getter = entry.getters[name];
  try {
    var result = getter();
    ++getter.runCount;
    return result;
  } catch (e) {}
  return GETTER_ERROR;
}

module.exports = Entry;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},"cornerstone-core":{"package.json":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/cornerstone-core/package.json                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.name = "cornerstone-core";
exports.version = "2.2.0";
exports.main = "./dist/cornerstone.min.js";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dist":{"cornerstone.min.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/cornerstone-core/dist/cornerstone.min.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*! cornerstone-core - 2.2.0 - 2018-04-11 | (c) 2016 Chris Hafey | https://github.com/cornerstonejs/cornerstone */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("cornerstone-core",[],t):"object"==typeof exports?exports["cornerstone-core"]=t():e.cornerstone=t()}(window,function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=80)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getEnabledElement=function(e){if(void 0===e)throw new Error("getEnabledElement: parameter element must not be undefined");for(var t=0;t<a.length;t++)if(a[t].element===e)return a[t];throw new Error("element not enabled")},t.addEnabledElement=function(e){if(void 0===e)throw new Error("getEnabledElement: enabledElement element must not be undefined");a.push(e)},t.getEnabledElementsByImageId=function(e){var t=[];return a.forEach(function(r){r.image&&r.image.imageId===e&&t.push(r)}),t},t.getEnabledElements=function(){return a};var a=[]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return window.performance?performance.now():Date.now()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=void 0;"function"==typeof window.CustomEvent?a=new CustomEvent(t,{detail:r,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,r);return e.dispatchEvent(a)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();t.default={NEW_IMAGE:"cornerstonenewimage",INVALIDATED:"cornerstoneinvalidated",PRE_RENDER:"cornerstoneprerender",IMAGE_CACHE_MAXIMUM_SIZE_CHANGED:"cornerstoneimagecachemaximumsizechanged",IMAGE_CACHE_PROMISE_REMOVED:"cornerstoneimagecachepromiseremoved",IMAGE_CACHE_FULL:"cornerstoneimagecachefull",IMAGE_CACHE_CHANGED:"cornerstoneimagecachechanged",WEBGL_TEXTURE_REMOVED:"cornerstonewebgltextureremoved",WEBGL_TEXTURE_CACHE_FULL:"cornerstonewebgltexturecachefull",IMAGE_LOADED:"cornerstoneimageloaded",IMAGE_LOAD_FAILED:"cornerstoneimageloadfailed",ELEMENT_RESIZED:"cornerstoneelementresized",IMAGE_RENDERED:"cornerstoneimagerendered",LAYER_ADDED:"cornerstonelayeradded",LAYER_REMOVED:"cornerstonelayerremoved",ACTIVE_LAYER_CHANGED:"cornerstoneactivelayerchanged",ELEMENT_DISABLED:"cornerstoneelementdisabled"};var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listeners={},this.namespaces={}}return a(e,[{key:"addEventNamespaceListener",value:function(e,t){e.indexOf(".")<=0||(this.namespaces[e]=t,this.addEventListener(e.split(".")[0],t))}},{key:"removeEventNamespaceListener",value:function(e){e.indexOf(".")<=0||!this.namespaces[e]||(this.removeEventListener(e.split(".")[0],this.namespaces[e]),delete this.namespaces[e])}},{key:"addEventListener",value:function(e,t){e.indexOf(".")>0?this.addEventNamespaceListener(e,t):(e in this.listeners||(this.listeners[e]=[]),this.listeners[e].push(t))}},{key:"removeEventListener",value:function(e,t){if(e.indexOf(".")>0)this.removeEventNamespaceListener(e);else if(e in this.listeners)for(var r=this.listeners[e],a=0,n=r.length;a<n;a++)if(r[a]===t)return void r.splice(a,1)}},{key:"dispatchEvent",value:function(e){if(!(e.type in this.listeners))return!0;for(var t=this.listeners[e.type],r=0,a=t.length;r<a;r++)t[r].call(this,e);return!e.defaultPrevented}}]),e}();t.events=new n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=(0,n.getEnabledElement)(e);if(void 0===r.image&&!r.layers.length)throw new Error("updateImage: image has not been loaded yet");(0,o.default)(r,t)};var a,n=r(0),i=r(8),o=(a=i)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){if(void 0===e)throw new Error("setToPixelCoordinateSystem: parameter enabledElement must not be undefined");if(void 0===t)throw new Error("setToPixelCoordinateSystem: parameter context must not be undefined");var a=(0,i.default)(e,r);t.setTransform(a.m[0],a.m[1],a.m[2],a.m[3],a.m[4],a.m[5])};var a,n=r(19),i=(a=n)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(void 0===e)throw new Error("getDefaultViewport: parameter canvas must not be undefined");if(void 0===t)return{scale:1,translation:{x:0,y:0},voi:{windowWidth:void 0,windowCenter:void 0},invert:!1,pixelReplication:!1,rotation:0,hflip:!1,vflip:!1,modalityLUT:void 0,voiLUT:void 0,colormap:void 0,labelmap:!1,displayedArea:{tlhc:{x:1,y:1},brhc:{x:1,y:1},rowPixelSpacing:1,columnPixelSpacing:1,presentationSizeMode:"NONE"}};var r=1,a=1;t.rowPixelSpacing<t.columnPixelSpacing?a=t.columnPixelSpacing/t.rowPixelSpacing:r=t.rowPixelSpacing/t.columnPixelSpacing;var n=e.height/t.rows/r,i=e.width/t.columns/a;return{scale:Math.min(i,n),translation:{x:0,y:0},voi:{windowWidth:t.windowWidth,windowCenter:t.windowCenter},invert:t.invert,pixelReplication:!1,rotation:0,hflip:!1,vflip:!1,modalityLUT:t.modalityLUT,voiLUT:t.voiLUT,colormap:t.colormap,labelmap:Boolean(t.labelmap),displayedArea:{tlhc:{x:1,y:1},brhc:{x:t.columns,y:t.rows},rowPixelSpacing:void 0===t.rowPixelSpacing?1:t.rowPixelSpacing,columnPixelSpacing:void 0===t.columnPixelSpacing?1:t.columnPixelSpacing,presentationSizeMode:"NONE"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=r(39),i=r(38),o=(a=i)&&a.__esModule?a:{default:a};t.default={getColormap:n.getColormap,getColormapsList:n.getColormapsList,LookupTable:o.default}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.needsRedraw=!0,t&&(e.invalid=!0)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderColorImage=function(e,t){if(void 0===e)throw new Error("renderColorImage: enabledElement parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("renderColorImage: image must be loaded before it can be drawn");var a=e.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.fillStyle="black",a.fillRect(0,0,e.canvas.width,e.canvas.height),a.imageSmoothingEnabled=!e.viewport.pixelReplication,a.mozImageSmoothingEnabled=a.imageSmoothingEnabled,(0,l.default)(e,a);var n=void 0;n=e.options&&e.options.renderer&&"webgl"===e.options.renderer.toLowerCase()?u.default.renderer.render(e):m(e,r,t);var i=e.viewport.displayedArea.tlhc.x-1,o=e.viewport.displayedArea.tlhc.y-1,d=e.viewport.displayedArea.brhc.x-i,s=e.viewport.displayedArea.brhc.y-o;a.drawImage(n,i,o,d,s,0,0,d,s),e.renderingTools=(0,f.default)(e)},t.addColorLayer=function(e,t){if(void 0===e)throw new Error("addColorLayer: layer parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("addColorLayer: image must be loaded before it can be drawn");r.rgba=!0,e.canvas=m(e,r,t);var a=e.canvas.getContext("2d");a.imageSmoothingEnabled=!e.viewport.pixelReplication,a.mozImageSmoothingEnabled=a.imageSmoothingEnabled,e.renderingTools=(0,f.default)(e)};var a=c(r(1)),n=c(r(76)),i=c(r(22)),o=c(r(75)),l=c(r(5)),u=c(r(11)),d=c(r(13)),s=c(r(15)),f=c(r(14));function c(e){return e&&e.__esModule?e:{default:e}}function m(e,t,r){e.renderingTools.renderCanvas||(e.renderingTools.renderCanvas=document.createElement("canvas"));var l=e.renderingTools.renderCanvas;if(255===e.viewport.voi.windowWidth&&128===e.viewport.voi.windowCenter&&!1===e.viewport.invert&&t.getCanvas&&t.getCanvas())return t.getCanvas();if(!1===(0,d.default)(e,t)&&!0!==r)return l;l.width===t.width&&l.height===t.height||(0,s.default)(e,t);var u=(0,a.default)(),f=function(e,t){return void 0!==e.cachedLut&&e.cachedLut.windowCenter===t.voi.windowCenter&&e.cachedLut.windowWidth===t.voi.windowWidth&&e.cachedLut.invert===t.invert?e.cachedLut.lutArray:((0,n.default)(e,t.voi.windowWidth,t.voi.windowCenter,t.invert),e.cachedLut.windowWidth=t.voi.windowWidth,e.cachedLut.windowCenter=t.voi.windowCenter,e.cachedLut.invert=t.invert,e.cachedLut.lutArray)}(t,e.viewport);t.stats=t.stats||{},t.stats.lastLutGenerateTime=(0,a.default)()-u;var c=e.renderingTools.renderCanvasData,m=e.renderingTools.renderCanvasContext;return t.rgba?(0,o.default)(t,f,c.data):(0,i.default)(t,f,c.data),u=(0,a.default)(),m.putImageData(c,0,0),t.stats.lastPutImageDataTime=(0,a.default)()-u,l}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderGrayscaleImage=function(e,t){if(void 0===e)throw new Error("drawImage: enabledElement parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("drawImage: image must be loaded before it can be drawn");var a=e.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.fillStyle="black",a.fillRect(0,0,e.canvas.width,e.canvas.height),a.imageSmoothingEnabled=!e.viewport.pixelReplication,a.mozImageSmoothingEnabled=a.imageSmoothingEnabled,(0,i.default)(e,a);var n=void 0;n=e.options&&e.options.renderer&&"webgl"===e.options.renderer.toLowerCase()?l.default.renderer.render(e):m(e,r,t);var o=e.viewport.displayedArea.tlhc.x-1,u=e.viewport.displayedArea.tlhc.y-1,d=e.viewport.displayedArea.brhc.x-o,s=e.viewport.displayedArea.brhc.y-u;a.drawImage(n,o,u,d,s,0,0,d,s),e.renderingTools=(0,f.default)(e)},t.addGrayscaleLayer=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(void 0===e)throw new Error("addGrayscaleLayer: layer parameter must not be undefined");var a=e.image;if(void 0===a)throw new Error("addGrayscaleLayer: image must be loaded before it can be drawn");e.canvas=m(e,a,t,r);var n=e.canvas.getContext("2d");n.imageSmoothingEnabled=!e.viewport.pixelReplication,n.mozImageSmoothingEnabled=n.imageSmoothingEnabled,e.renderingTools=(0,f.default)(e)};var a=c(r(23)),n=c(r(37)),i=c(r(5)),o=c(r(1)),l=c(r(11)),u=c(r(35)),d=c(r(13)),s=c(r(15)),f=c(r(14));function c(e){return e&&e.__esModule?e:{default:e}}function m(e,t,r){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];e.renderingTools.renderCanvas||(e.renderingTools.renderCanvas=document.createElement("canvas"));var l=e.renderingTools.renderCanvas;if(!1===(0,d.default)(e,t)&&!0!==r)return l;l.width===t.width&&l.height===t.height||(0,s.default)(e,t);var f=(0,o.default)(),c=(0,u.default)(t,e.viewport,r);t.stats=t.stats||{},t.stats.lastLutGenerateTime=(0,o.default)()-f;var m=e.renderingTools.renderCanvasData,v=e.renderingTools.renderCanvasContext;return i?(0,a.default)(t,c,m.data):(0,n.default)(t,c,m.data),f=(0,o.default)(),v.putImageData(m,0,0),t.stats.lastPutImageDataTime=(0,o.default)()-f,l}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(74),n=o(r(33)),i=o(r(34));function o(e){return e&&e.__esModule?e:{default:e}}var l={createProgramFromString:n.default,renderer:{render:a.render,initRenderer:a.initRenderer,getRenderCanvas:a.getRenderCanvas,isWebGLAvailable:a.isWebGLAvailable},textureCache:i.default};Object.defineProperty(l,"isWebGLInitialized",{enumerable:!0,configurable:!1,get:function(){return a.isWebGLInitialized}}),t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderPseudoColorImage=function(e,t){if(void 0===e)throw new Error("drawImage: enabledElement parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("drawImage: image must be loaded before it can be drawn");var n=e.canvas.getContext("2d");n.setTransform(1,0,0,1,0,0),n.fillStyle="black",n.fillRect(0,0,e.canvas.width,e.canvas.height),n.imageSmoothingEnabled=!e.viewport.pixelReplication,n.mozImageSmoothingEnabled=n.imageSmoothingEnabled,(0,a.default)(e,n);var i=c(e,r,t),o=e.viewport.displayedArea.tlhc.x-1,u=e.viewport.displayedArea.tlhc.y-1,d=e.viewport.displayedArea.brhc.x-o,s=e.viewport.displayedArea.brhc.y-u;n.drawImage(i,o,u,d,s,0,0,d,s),e.renderingTools=(0,l.default)(e)},t.addPseudoColorLayer=function(e,t){if(void 0===e)throw new Error("addPseudoColorLayer: layer parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("addPseudoColorLayer: image must be loaded before it can be drawn");e.canvas=c(e,r,t);var a=e.canvas.getContext("2d");a.imageSmoothingEnabled=!e.viewport.pixelReplication,a.mozImageSmoothingEnabled=a.imageSmoothingEnabled,e.renderingTools=(0,l.default)(e)};var a=f(r(5)),n=f(r(1)),i=f(r(15)),o=f(r(35)),l=f(r(14)),u=f(r(13)),d=f(r(20)),s=f(r(7));function f(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r){e.renderingTools.renderCanvas||(e.renderingTools.renderCanvas=document.createElement("canvas"));var a=e.renderingTools.renderCanvas,l=e.viewport.colormap||e.options.colormap;if(l&&"string"==typeof l&&(l=s.default.getColormap(l)),!l)throw new Error("renderPseudoColorImage: colormap not found.");var f=l.getId();if(!1===(0,u.default)(e,t)&&!0!==r&&e.renderingTools.colormapId===f)return a;a.width===t.width&&a.height===t.height||(0,i.default)(e,t);var c=(0,n.default)();e.renderingTools.colorLut&&!r&&e.renderingTools.colormapId===f||(l.setNumberOfColors(256),e.renderingTools.colorLut=l.createLookupTable(),e.renderingTools.colormapId=f);var m=(0,o.default)(t,e.viewport,r);t.stats=t.stats||{},t.stats.lastLutGenerateTime=(0,n.default)()-c;var v=e.renderingTools.colorLut,g=e.renderingTools.renderCanvasData,p=e.renderingTools.renderCanvasContext;return(0,d.default)(t,m,v,g.data),c=(0,n.default)(),p.putImageData(g,0,0),t.stats.lastPutImageDataTime=(0,n.default)()-c,a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=e.renderingTools.lastRenderedImageId,a=e.renderingTools.lastRenderedViewport;return t.imageId!==r||!a||a.windowCenter!==e.viewport.voi.windowCenter||a.windowWidth!==e.viewport.voi.windowWidth||a.invert!==e.viewport.invert||a.rotation!==e.viewport.rotation||a.hflip!==e.viewport.hflip||a.vflip!==e.viewport.vflip||a.modalityLUT!==e.viewport.modalityLUT||a.voiLUT!==e.viewport.voiLUT||a.colormap!==e.viewport.colormap}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.image.imageId,r=e.viewport;return e.renderingTools.lastRenderedImageId=t,e.renderingTools.lastRenderedViewport={windowCenter:r.voi.windowCenter,windowWidth:r.voi.windowWidth,invert:r.invert,rotation:r.rotation,hflip:r.hflip,vflip:r.vflip,modalityLUT:r.modalityLUT,voiLUT:r.voiLUT,colormap:r.colormap},e.renderingTools}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=e.renderingTools.renderCanvas;r.width=t.width,r.height=t.height;var a=r.getContext("2d");a.fillStyle="white",a.fillRect(0,0,r.width,r.height);var n=a.getImageData(0,0,t.width,t.height);e.renderingTools.renderCanvasContext=a,e.renderingTools.renderCanvasData=n}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderLabelMapImage=function(e,t){if(void 0===e)throw new Error("renderLabelMapImage: enabledElement parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("renderLabelMapImage: image must be loaded before it can be drawn");var n=e.canvas.getContext("2d");n.setTransform(1,0,0,1,0,0),n.fillStyle="black",n.fillRect(0,0,e.canvas.width,e.canvas.height),n.imageSmoothingEnabled=!e.viewport.pixelReplication,n.mozImageSmoothingEnabled=n.imageSmoothingEnabled,(0,a.default)(e,n);var i=f(e,r,t),l=e.viewport.displayedArea.tlhc.x-1,u=e.viewport.displayedArea.tlhc.y-1,d=e.viewport.displayedArea.brhc.x-l,s=e.viewport.displayedArea.brhc.y-u;n.drawImage(i,l,u,d,s,0,0,d,s),e.renderingTools=(0,o.default)(e)},t.addLabelMapLayer=function(e,t){if(void 0===e)throw new Error("addLabelMapLayer: layer parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("addLabelMapLayer: image must be loaded before it can be drawn");e.canvas=f(e,r,t);var a=e.canvas.getContext("2d");a.imageSmoothingEnabled=!e.viewport.pixelReplication,a.mozImageSmoothingEnabled=a.imageSmoothingEnabled,e.renderingTools=(0,o.default)(e)};var a=s(r(5)),n=s(r(1)),i=s(r(15)),o=s(r(14)),l=s(r(13)),u=s(r(21)),d=s(r(7));function s(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){e.renderingTools.renderCanvas||(e.renderingTools.renderCanvas=document.createElement("canvas"));var a=e.renderingTools.renderCanvas,o=e.viewport.colormap||e.options.colormap;if(o&&"string"==typeof o&&(o=d.default.getColormap(o)),!o)throw new Error("renderLabelMapImage: colormap not found.");var s=o.getId();if(!1===(0,l.default)(e,t)&&!0!==r&&e.renderingTools.colormapId===s)return a;a.width===t.width&&a.height===t.height||(0,i.default)(e,t);var f=(0,n.default)();e.renderingTools.colorLut&&!r&&e.renderingTools.colormapId===s||(e.renderingTools.colorLut=o.createLookupTable(),e.renderingTools.colormapId=s),t.stats=t.stats||{},t.stats.lastLutGenerateTime=(0,n.default)()-f;var c=e.renderingTools.colorLut,m=e.renderingTools.renderCanvasData,v=e.renderingTools.renderCanvasContext;return(0,u.default)(t,c,m.data),f=(0,n.default)(),v.putImageData(m,0,0),t.stats.lastPutImageDataTime=(0,n.default)()-f,a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,i.default)(e)};var a,n=r(19),i=(a=n)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rescaleImage=f,t.addLayer=function(e,t,r){var o=(0,a.default)(),l=(0,n.getEnabledElement)(e),d=l.layers,c=void 0;t&&(c=(0,i.default)(l.canvas,t),r&&r.viewport&&(c=Object.assign(c,r.viewport)));!1!==l.syncViewports&&(l.syncViewports=!0);var v={image:t,layerId:o,viewport:c,options:r||{},renderingTools:{}};d.length&&t&&f(d[0],v);d.push(v),s(u.default.LAYER_ADDED,l,o),1===d.length&&t&&m(e,o);return o},t.removeLayer=function(e,t){var r=(0,n.getEnabledElement)(e),a=r.layers,i=r.layers.findIndex(function(e){return e.layerId===t});-1!==i&&(a.splice(i,1),t===r.activeLayerId&&a.length&&m(e,a[0].layerId),s(u.default.LAYER_REMOVED,r,t))},t.getLayer=c,t.getLayers=function(e){return(0,n.getEnabledElement)(e).layers},t.getVisibleLayers=function(e){return(0,n.getEnabledElement)(e).layers.filter(function(e){return e.options&&!1!==e.options.visible&&0!==e.options.opacity})},t.setActiveLayer=m,t.setLayerImage=function(e,t,r){var a=(0,n.getEnabledElement)(e),o=a.layers[0],l=void 0;l=r?c(e,r):v(e);if(!l)throw new Error("setLayerImage: Layer not found");if(l.image=t,!t)return void(l.viewport=void 0);if(!l.viewport){var u=(0,i.default)(a.canvas,t);l.options&&l.options.viewport&&(l.viewport=Object.assign(u,l.options.viewport)),o.layerId!==r&&f(o,l)}},t.getActiveLayer=v;var a=d(r(63)),n=r(0),i=d(r(6)),o=d(r(4)),l=d(r(2)),u=d(r(3));function d(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r){var a=t.element,n={viewport:t.viewport,element:t.element,image:t.image,enabledElement:t,layerId:r};(0,l.default)(a,e,n)}function f(e,t){if(e.layerId===t.layerId)throw new Error("rescaleImage: both arguments represent the same layer");var r=e.image,a=t.image;if(r.imageId&&a.imageId){var n=t.viewport.displayedArea.columnPixelSpacing*a.width/(e.viewport.displayedArea.columnPixelSpacing*r.width),i=t.viewport.scale/e.viewport.scale*n;t.viewport.scale=e.viewport.scale*i}}function c(e,t){return(0,n.getEnabledElement)(e).layers.find(function(e){return e.layerId===t})}function m(e,t){var r=(0,n.getEnabledElement)(e);if(r.activeLayerId!==t){var a=r.layers.findIndex(function(e){return e.layerId===t});if(-1===a)throw new Error("setActiveLayer: layer not found in layers array");var i=r.layers[a];if(!i.image)throw new Error("setActiveLayer: layer with undefined image cannot be set as active.");r.activeLayerId=t,r.image=i.image,r.viewport=i.viewport,(0,o.default)(e),s(u.default.ACTIVE_LAYER_CHANGED,r,t)}}function v(e){var t=(0,n.getEnabledElement)(e);return t.layers.find(function(e){return e.layerId===t.activeLayerId})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=new a.Transform;r.translate(e.canvas.width/2,e.canvas.height/2);var n=e.viewport.rotation;0!==n&&r.rotate(n*Math.PI/180);var i=e.viewport.scale,o=e.viewport.scale,l=e.viewport.displayedArea.brhc.x-(e.viewport.displayedArea.tlhc.x-1),u=e.viewport.displayedArea.brhc.y-(e.viewport.displayedArea.tlhc.y-1);if("NONE"===e.viewport.displayedArea.presentationSizeMode)e.image.rowPixelSpacing<e.image.columnPixelSpacing?i*=e.image.columnPixelSpacing/e.image.rowPixelSpacing:e.image.columnPixelSpacing<e.image.rowPixelSpacing&&(o*=e.image.rowPixelSpacing/e.image.columnPixelSpacing);else if(i=e.viewport.displayedArea.columnPixelSpacing,o=e.viewport.displayedArea.rowPixelSpacing,"SCALE TO FIT"===e.viewport.displayedArea.presentationSizeMode){var d=e.canvas.height/(u*o),s=e.canvas.width/(l*i);i=o=Math.min(s,d),e.viewport.displayedArea.rowPixelSpacing<e.viewport.displayedArea.columnPixelSpacing?i*=e.viewport.displayedArea.columnPixelSpacing/e.viewport.displayedArea.rowPixelSpacing:e.viewport.displayedArea.columnPixelSpacing<e.viewport.displayedArea.rowPixelSpacing&&(o*=e.viewport.displayedArea.rowPixelSpacing/e.viewport.displayedArea.columnPixelSpacing)}return r.scale(i,o),0!==n&&r.rotate(-n*Math.PI/180),r.translate(e.viewport.translation.x,e.viewport.translation.y),0!==n&&r.rotate(n*Math.PI/180),void 0!==t&&r.scale(t,t),e.viewport.hflip&&r.scale(-1,1),e.viewport.vflip&&r.scale(1,-1),r.translate(-l/2,-u/2),r};var a=r(36)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(7)),n=i(r(1));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,r,i){var o=(0,n.default)(),l=e.getPixelData();e.stats.lastGetPixelDataTime=(0,n.default)()-o;var u=l.length,d=e.minPixelValue,s=0,f=0,c=void 0,m=void 0;if(o=(0,n.default)(),m=r instanceof a.default.LookupTable?r.Table:r,d<0)for(;f<u;)c=m[t[l[f++]+-d]],i[s++]=c[0],i[s++]=c[1],i[s++]=c[2],i[s++]=c[3];else for(;f<u;)c=m[t[l[f++]]],i[s++]=c[0],i[s++]=c[1],i[s++]=c[2],i[s++]=c[3];e.stats.lastStoredPixelDataToCanvasImageDataTime=(0,n.default)()-o}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(7)),n=i(r(1));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,r){var i=(0,n.default)(),o=e.getPixelData();e.stats.lastGetPixelDataTime=(0,n.default)()-i;var l=o.length,u=e.minPixelValue,d=0,s=0,f=void 0,c=void 0;if(i=(0,n.default)(),c=t instanceof a.default.LookupTable?t.Table:t,u<0)for(;s<l;)f=c[o[s++]+-u],r[d++]=f[0],r[d++]=f[1],r[d++]=f[2],r[d++]=f[3];else for(;s<l;)f=c[o[s++]],r[d++]=f[0],r[d++]=f[1],r[d++]=f[2],r[d++]=f[3];e.stats.lastStoredPixelDataToCanvasImageDataTime=(0,n.default)()-i}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var a=(0,i.default)(),n=e.getPixelData();e.stats.lastGetPixelDataTime=(0,i.default)()-a;var o=e.minPixelValue,l=0,u=0,d=n.length;if(a=(0,i.default)(),o<0)for(;u<d;)r[l++]=t[n[u++]+-o],r[l++]=t[n[u++]+-o],r[l]=t[n[u]+-o],u+=2,l+=2;else for(;u<d;)r[l++]=t[n[u++]],r[l++]=t[n[u++]],r[l]=t[n[u]],u+=2,l+=2;e.stats.lastStoredPixelDataToCanvasImageDataTime=(0,i.default)()-a};var a,n=r(1),i=(a=n)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var a=(0,i.default)(),n=e.getPixelData();e.stats.lastGetPixelDataTime=(0,i.default)()-a;var o=n.length,l=e.minPixelValue,u=3,d=0;if(a=(0,i.default)(),n instanceof Int16Array)if(l<0)for(;d<o;)r[u]=t[n[d++]+-l],u+=4;else for(;d<o;)r[u]=t[n[d++]],u+=4;else if(n instanceof Uint16Array)for(;d<o;)r[u]=t[n[d++]],u+=4;else if(l<0)for(;d<o;)r[u]=t[n[d++]+-l],u+=4;else for(;d<o;)r[u]=t[n[d++]],u+=4;e.stats.lastStoredPixelDataToCanvasImageDataTime=(0,i.default)()-a};var a,n=r(1),i=(a=n)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return window.requestAnimationFrame(e)||window.webkitRequestAnimationFrame(e)||window.mozRequestAnimationFrame(e)||window.oRequestAnimationFrame(e)||window.msRequestAnimationFrame(e)||function(e){window.setTimeout(e,1e3/60)}(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,i,o,l){var u=e.maxPixelValue,d=e.minPixelValue,s=Math.min(d,0);if(void 0===e.cachedLut){var f=u-s+1;e.cachedLut={},e.cachedLut.lutArray=new Uint8ClampedArray(f)}var c=e.cachedLut.lutArray,m=(0,a.default)(e.slope,e.intercept,o),v=(0,n.default)(t,r,l);if(!0===i)for(var g=d;g<=u;g++)c[g+-s]=255-v(m(g));else for(var p=d;p<=u;p++)c[p+-s]=v(m(p));return c};var a=i(r(41)),n=i(r(40));function i(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.color&&!e.falseColor)throw new Error("Color transforms are not implemented yet");var r=e.minPixelValue,a=0,n=0,o=e.width*e.height,l=e.origPixelData||e.getPixelData(),u=new Uint8Array(4*o),d=void 0,s=void 0;if(e.color=!0,e.falseColor=!0,e.origPixelData=l,t instanceof i.default.LookupTable)for(t.build();n<o;)d=l[n++],s=t.mapValue(d),u[a++]=s[0],u[a++]=s[1],u[a++]=s[2],u[a++]=s[3];else if(r<0)for(;n<o;)d=l[n++],u[a++]=t[d+-r][0],u[a++]=t[d+-r][1],u[a++]=t[d+-r][2],u[a++]=t[d+-r][3];else for(;n<o;)d=l[n++],u[a++]=t[d][0],u[a++]=t[d][1],u[a++]=t[d][2],u[a++]=t[d][3];e.rgba=!0,e.cachedLut=void 0,e.render=void 0,e.slope=1,e.intercept=0,e.minPixelValue=0,e.maxPixelValue=255,e.windowWidth=255,e.windowCenter=128,e.getPixelData=function(){return u}};var a,n=r(7),i=(a=n)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cachedImages=void 0,t.setMaximumSizeBytes=f,t.putImageLoadObject=m,t.getImageLoadObject=v,t.removeImageLoadObject=g,t.getCacheInfo=p,t.purgeCache=h,t.changeImageIdCacheSize=b;var a=r(3),n=o(a),i=o(r(2));function o(e){return e&&e.__esModule?e:{default:e}}var l=1073741824,u=0,d={},s=t.cachedImages=[];function f(e){if(void 0===e)throw new Error("setMaximumSizeBytes: parameter numBytes must not be undefined");if(void 0===e.toFixed)throw new Error("setMaximumSizeBytes: parameter numBytes must be a number");l=e,(0,i.default)(a.events,n.default.IMAGE_CACHE_MAXIMUM_SIZE_CHANGED),c()}function c(){if(!(u<=l)){for(s.sort(function(e,t){return e.timeStamp>t.timeStamp?-1:e.timeStamp<t.timeStamp?1:0});u>l;){var e=s[s.length-1].imageId;g(e),(0,i.default)(a.events,n.default.IMAGE_CACHE_PROMISE_REMOVED,{imageId:e})}var t=p();(0,i.default)(a.events,n.default.IMAGE_CACHE_FULL,t)}}function m(e,t){if(void 0===e)throw new Error("putImageLoadObject: imageId must not be undefined");if(void 0===t.promise)throw new Error("putImageLoadObject: imageLoadObject.promise must not be undefined");if(!0===d.hasOwnProperty(e))throw new Error("putImageLoadObject: imageId already in cache");if(t.cancelFn&&"function"!=typeof t.cancelFn)throw new Error("putImageLoadObject: imageLoadObject.cancelFn must be a function");var r={loaded:!1,imageId:e,sharedCacheKey:void 0,imageLoadObject:t,timeStamp:Date.now(),sizeInBytes:0};d[e]=r,s.push(r),t.promise.then(function(e){if(-1!==s.indexOf(r)){if(r.loaded=!0,r.image=e,void 0===e.sizeInBytes)throw new Error("putImageLoadObject: image.sizeInBytes must not be undefined");if(void 0===e.sizeInBytes.toFixed)throw new Error("putImageLoadObject: image.sizeInBytes is not a number");r.sizeInBytes=e.sizeInBytes,u+=r.sizeInBytes;var t={action:"addImage",image:r};(0,i.default)(a.events,n.default.IMAGE_CACHE_CHANGED,t),r.sharedCacheKey=e.sharedCacheKey,c()}},function(){var t=d[e];s.splice(s.indexOf(t),1),delete d[e]})}function v(e){if(void 0===e)throw new Error("getImageLoadObject: imageId must not be undefined");var t=d[e];if(void 0!==t)return t.timeStamp=Date.now(),t.imageLoadObject}function g(e){if(void 0===e)throw new Error("removeImageLoadObject: imageId must not be undefined");var t=d[e];if(void 0===t)throw new Error("removeImageLoadObject: imageId was not present in imageCache");s.splice(s.indexOf(t),1),u-=t.sizeInBytes;var r,o={action:"deleteImage",image:t};(0,i.default)(a.events,n.default.IMAGE_CACHE_CHANGED,o),(r=t.imageLoadObject).promise.then(function(){r.decache&&r.decache()},function(){r.decache&&r.decache()}),delete d[e]}function p(){return{maximumSizeInBytes:l,cacheSizeInBytes:u,numberOfImagesCached:s.length}}function h(){for(;s.length>0;){g(s[0].imageId)}}function b(e,t){var r=d[e];r&&r.imageLoadObject.promise.then(function(e){var o=t-e.sizeInBytes;e.sizeInBytes=t,r.sizeInBytes=t,u+=o;var l={action:"changeImageSize",image:e};(0,i.default)(a.events,n.default.IMAGE_CACHE_CHANGED,l)})}t.default={imageCache:d,cachedImages:s,setMaximumSizeBytes:f,putImageLoadObject:m,getImageLoadObject:v,removeImageLoadObject:g,getCacheInfo:p,purgeCache:h,changeImageIdCacheSize:b}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n,i){if(void 0===e)throw new Error("getStoredPixels: parameter element must not be undefined");t=Math.round(t),r=Math.round(r);for(var o=(0,a.getEnabledElement)(e),l=[],u=0,d=o.image.getPixelData(),s=0;s<i;s++)for(var f=0;f<n;f++){var c=(s+r)*o.image.columns+(f+t);l[u++]=d[c]}return l};var a=r(0)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return 0===e.viewport.rotation||180===e.viewport.rotation?{width:e.image.width,height:e.image.height}:{width:e.image.height,height:e.image.width}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,a.getEnabledElement)(e),r=(0,i.default)(t),o=t.image,l=1,u=1;o.rowPixelSpacing<o.columnPixelSpacing?u=o.columnPixelSpacing/o.rowPixelSpacing:l=o.rowPixelSpacing/o.columnPixelSpacing;var d=t.canvas.height/r.height/l,s=t.canvas.width/r.width/u;t.viewport.scale=Math.min(s,d),t.viewport.translation.x=0,t.viewport.translation.y=0,(0,n.default)(e)};var a=r(0),n=o(r(4)),i=o(r(29));function o(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,a.getEnabledElement)(e),d=r.canvas.width,s=r.canvas.height;!function(e,t){t.width!==e.clientWidth&&(t.width=e.clientWidth,t.style.width=e.clientWidth+"px");t.height!==e.clientHeight&&(t.height=e.clientHeight,t.style.height=e.clientHeight+"px")}(e,r.canvas);var f={element:e};(0,o.default)(e,u.default.ELEMENT_RESIZED,f),void 0!==r.image&&(!0!==t&&!function(e,t,r){var a=e.viewport.scale,n=(0,l.default)(e),i=Math.round(n.width*a),o=Math.round(n.height*a),u=e.viewport.translation.x,d=e.viewport.translation.y;return i===t&&o<=r||i<=t&&o===r&&0===u&&0===d}(r,d,s)?(!function(e,t,r){var a=e.viewport.scale,n=e.canvas.width,i=e.canvas.height,o=n/t,l=i/r,u=Math.sqrt(o*l);e.viewport.scale=u*a}(r,d,s),(0,i.default)(e)):(0,n.default)(e))};var a=r(0),n=d(r(30)),i=d(r(4)),o=d(r(2)),l=d(r(29)),u=d(r(3));function d(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderWebImage=function(e,t){if(void 0===e)throw new Error("renderWebImage: enabledElement parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("renderWebImage: image must be loaded before it can be drawn");if(e.viewport.voi.windowWidth===e.image.windowWidth&&e.viewport.voi.windowCenter===e.image.windowCenter&&!1===e.viewport.invert){var a=e.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.fillStyle="black",a.fillRect(0,0,e.canvas.width,e.canvas.height),a.imageSmoothingEnabled=!e.viewport.pixelReplication,a.mozImageSmoothingEnabled=a.imageSmoothingEnabled,(0,i.default)(e,a);var n=e.viewport.displayedArea.tlhc.x-1,l=e.viewport.displayedArea.tlhc.y-1,u=e.viewport.displayedArea.brhc.x-n,d=e.viewport.displayedArea.brhc.y-l;a.drawImage(r.getImage(),n,l,u,d,0,0,u,d)}else(0,o.renderColorImage)(e,t)};var a,n=r(5),i=(a=n)&&a.__esModule?a:{default:a},o=r(9)},function(e,t,r){"use strict";function a(e,t,r){var a=e.createShader(r);if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)&&!e.isContextLost()){var n=e.getShaderInfoLog(a);console.error("Could not compile shader:\n"+n)}return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){return function(e,t,r){var a=e.createProgram();if(e.attachShader(a,t),e.attachShader(a,r),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)&&!e.isContextLost()){var n=e.getProgramInfoLog(a);console.error("WebGL program filed to link:\n"+n)}return a}(e,a(e,t,e.VERTEX_SHADER),a(e,r,e.FRAGMENT_SHADER))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),n=o(a),i=o(r(2));function o(e){return e&&e.__esModule?e:{default:e}}var l={},u=[],d=268435456,s=0;function f(){if(!(s<=d)){for(u.sort(function(e,t){return e.timeStamp>t.timeStamp?-1:e.timeStamp<t.timeStamp?1:0});s>d;){var e=u[u.length-1];s-=e.sizeInBytes,delete l[e.imageId],u.pop(),(0,i.default)(a.events,n.default.WEBGL_TEXTURE_REMOVED,{imageId:e.imageId})}var t={maximumSizeInBytes:d,cacheSizeInBytes:s,numberOfImagesCached:u.length};(0,i.default)(a.events,n.default.WEBGL_TEXTURE_CACHE_FULL,t)}}t.default={purgeCache:function(){for(;u.length>0;){var e=u.pop();delete l[e.imageId]}s=0},getImageTexture:function(e){if(void 0===e)throw new Error("getImageTexture: imageId must not be undefined");var t=l[e];if(void 0!==t)return t.timeStamp=new Date,t.imageTexture},putImageTexture:function(e,t){var r=e.imageId;if(void 0===e)throw new Error("putImageTexture: image must not be undefined");if(void 0===r)throw new Error("putImageTexture: imageId must not be undefined");if(void 0===t)throw new Error("putImageTexture: imageTexture must not be undefined");if(!0===Object.prototype.hasOwnProperty.call(l,r))throw new Error("putImageTexture: imageId already in cache");var a={imageId:r,imageTexture:t,timeStamp:new Date,sizeInBytes:t.sizeInBytes};if(l[r]=a,u.push(a),void 0===t.sizeInBytes)throw new Error("putImageTexture: imageTexture.sizeInBytes must not be undefined");if(void 0===t.sizeInBytes.toFixed)throw new Error("putImageTexture: imageTexture.sizeInBytes is not a number");s+=a.sizeInBytes,f()},removeImageTexture:function(e){if(void 0===e)throw new Error("removeImageTexture: imageId must not be undefined");var t=l[e];if(void 0===t)throw new Error("removeImageTexture: imageId must not be undefined");return u.splice(u.indexOf(t),1),s-=t.sizeInBytes,delete l[e],t.imageTexture},setMaximumSizeBytes:function(e){if(void 0===e)throw new Error("setMaximumSizeBytes: parameter numBytes must not be undefined");if(void 0===e.toFixed)throw new Error("setMaximumSizeBytes: parameter numBytes must be a number");d=e,f()}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){return void 0!==e.cachedLut&&e.cachedLut.windowCenter===t.voi.windowCenter&&e.cachedLut.windowWidth===t.voi.windowWidth&&(0,n.default)(e.cachedLut.modalityLUT,t.modalityLUT)&&(0,n.default)(e.cachedLut.voiLUT,t.voiLUT)&&e.cachedLut.invert===t.invert&&!0!==r?e.cachedLut.lutArray:((0,a.default)(t,e),(0,i.default)(e,t.voi.windowWidth,t.voi.windowCenter,t.invert,t.modalityLUT,t.voiLUT),e.cachedLut.windowWidth=t.voi.windowWidth,e.cachedLut.windowCenter=t.voi.windowCenter,e.cachedLut.invert=t.invert,e.cachedLut.voiLUT=t.voiLUT,e.cachedLut.modalityLUT=t.modalityLUT,e.cachedLut.lutArray)};var a=o(r(78)),n=o(r(77)),i=o(r(25));function o(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();t.Transform=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.reset()}return a(e,[{key:"reset",value:function(){this.m=[1,0,0,1,0,0]}},{key:"clone",value:function(){var t=new e;return t.m[0]=this.m[0],t.m[1]=this.m[1],t.m[2]=this.m[2],t.m[3]=this.m[3],t.m[4]=this.m[4],t.m[5]=this.m[5],t}},{key:"multiply",value:function(e){var t=this.m[0]*e.m[0]+this.m[2]*e.m[1],r=this.m[1]*e.m[0]+this.m[3]*e.m[1],a=this.m[0]*e.m[2]+this.m[2]*e.m[3],n=this.m[1]*e.m[2]+this.m[3]*e.m[3],i=this.m[0]*e.m[4]+this.m[2]*e.m[5]+this.m[4],o=this.m[1]*e.m[4]+this.m[3]*e.m[5]+this.m[5];this.m[0]=t,this.m[1]=r,this.m[2]=a,this.m[3]=n,this.m[4]=i,this.m[5]=o}},{key:"invert",value:function(){var e=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),t=this.m[3]*e,r=-this.m[1]*e,a=-this.m[2]*e,n=this.m[0]*e,i=e*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),o=e*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);this.m[0]=t,this.m[1]=r,this.m[2]=a,this.m[3]=n,this.m[4]=i,this.m[5]=o}},{key:"rotate",value:function(e){var t=Math.cos(e),r=Math.sin(e),a=this.m[0]*t+this.m[2]*r,n=this.m[1]*t+this.m[3]*r,i=this.m[0]*-r+this.m[2]*t,o=this.m[1]*-r+this.m[3]*t;this.m[0]=a,this.m[1]=n,this.m[2]=i,this.m[3]=o}},{key:"translate",value:function(e,t){this.m[4]+=this.m[0]*e+this.m[2]*t,this.m[5]+=this.m[1]*e+this.m[3]*t}},{key:"scale",value:function(e,t){this.m[0]*=e,this.m[1]*=e,this.m[2]*=t,this.m[3]*=t}},{key:"transformPoint",value:function(e,t){var r=e,a=t;return{x:e=r*this.m[0]+a*this.m[2]+this.m[4],y:t=r*this.m[1]+a*this.m[3]+this.m[5]}}}]),e}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var a=(0,i.default)(),n=e.getPixelData();e.stats.lastGetPixelDataTime=(0,i.default)()-a;var o=n.length,l=e.minPixelValue,u=0,d=0,s=void 0;if(a=(0,i.default)(),n instanceof Int16Array)if(l<0)for(;d<o;)s=t[n[d++]+-l],r[u++]=s,r[u++]=s,r[u++]=s,r[u++]=255;else for(;d<o;)s=t[n[d++]],r[u++]=s,r[u++]=s,r[u++]=s,r[u++]=255;else if(n instanceof Uint16Array)for(;d<o;)s=t[n[d++]],r[u++]=s,r[u++]=s,r[u++]=s,r[u++]=255;else if(l<0)for(;d<o;)s=t[n[d++]+-l],r[u++]=s,r[u++]=s,r[u++]=s,r[u++]=255;else for(;d<o;)s=t[n[d++]],r[u++]=s,r[u++]=s,r[u++]=s,r[u++]=255;e.stats.lastStoredPixelDataToCanvasImageDataTime=(0,i.default)()-a};var a,n=r(1),i=(a=n)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();var n=0,i=1;function o(e,t,r){if(e>1)throw new Error("HSVToRGB expects hue < 1");var a=[];if(0===t)return a[0]=r,a[1]=r,a[2]=r,a;var n=Math.floor(6*e),i=6*e-n,o=r*(1-t),l=r*(1-t*i),u=r*(1-t*(1-i));switch(n){case 0:case 6:a[0]=r,a[1]=u,a[2]=o;break;case 1:a[0]=l,a[1]=r,a[2]=o;break;case 2:a[0]=o,a[1]=r,a[2]=u;break;case 3:a[0]=o,a[1]=l,a[2]=r;break;case 4:a[0]=u,a[1]=o,a[2]=r;break;case 5:a[0]=r,a[1]=o,a[2]=l}return a}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.NumberOfColors=256,this.Ramp="linear",this.TableRange=[0,255],this.HueRange=[0,.66667],this.SaturationRange=[1,1],this.ValueRange=[1,1],this.AlphaRange=[1,1],this.NaNColor=[128,0,0,255],this.BelowRangeColor=[0,0,0,255],this.UseBelowRangeColor=!0,this.AboveRangeColor=[255,255,255,255],this.UseAboveRangeColor=!0,this.InputRange=[0,255],this.Table=[]}return a(e,[{key:"setNumberOfTableValues",value:function(e){this.NumberOfColors=e}},{key:"setRamp",value:function(e){this.Ramp=e}},{key:"setTableRange",value:function(e,t){this.TableRange[0]=e,this.TableRange[1]=t}},{key:"setHueRange",value:function(e,t){this.HueRange[0]=e,this.HueRange[1]=t}},{key:"setSaturationRange",value:function(e,t){this.SaturationRange[0]=e,this.SaturationRange[1]=t}},{key:"setValueRange",value:function(e,t){this.ValueRange[0]=e,this.ValueRange[1]=t}},{key:"setRange",value:function(e,t){this.InputRange[0]=e,this.InputRange[1]=t}},{key:"setAlphaRange",value:function(e,t){this.AlphaRange[0]=e,this.AlphaRange[1]=t}},{key:"getColor",value:function(e){return this.mapValue(e)}},{key:"build",value:function(e){if(!(this.Table.length>1)||e){this.Table=[];var t=this.NumberOfColors-1,r=void 0,a=void 0,n=void 0,i=void 0;t?(r=(this.HueRange[1]-this.HueRange[0])/t,a=(this.SaturationRange[1]-this.SaturationRange[0])/t,n=(this.ValueRange[1]-this.ValueRange[0])/t,i=(this.AlphaRange[1]-this.AlphaRange[0])/t):r=a=n=i=0;for(var l=0;l<=t;l++){var u=this.HueRange[0]+l*r,d=this.SaturationRange[0]+l*a,s=this.ValueRange[0]+l*n,f=this.AlphaRange[0]+l*i,c=o(u,d,s),m=[];switch(this.Ramp){case"scurve":m[0]=Math.floor(127.5*(1+Math.cos((1-c[0])*Math.PI))),m[1]=Math.floor(127.5*(1+Math.cos((1-c[1])*Math.PI))),m[2]=Math.floor(127.5*(1+Math.cos((1-c[2])*Math.PI))),m[3]=Math.floor(255*f);break;case"linear":m[0]=Math.floor(255*c[0]+.5),m[1]=Math.floor(255*c[1]+.5),m[2]=Math.floor(255*c[2]+.5),m[3]=Math.floor(255*f+.5);break;case"sqrt":m[0]=Math.floor(255*Math.sqrt(c[0])+.5),m[1]=Math.floor(255*Math.sqrt(c[1])+.5),m[2]=Math.floor(255*Math.sqrt(c[2])+.5),m[3]=Math.floor(255*Math.sqrt(f)+.5);break;default:throw new Error("Invalid Ramp value ("+this.Ramp+")")}this.Table.push(m)}this.buildSpecialColors()}}},{key:"buildSpecialColors",value:function(){var e=this.NumberOfColors,t=e+n,r=e+i,a=e+2;this.UseBelowRangeColor||0===e?this.Table[t]=this.BelowRangeColor:this.Table[t]=this.Table[0],this.UseAboveRangeColor||0===e?this.Table[r]=this.AboveRangeColor:this.Table[r]=this.Table[e-1],this.Table[a]=this.NaNColor}},{key:"mapValue",value:function(e){var t=this.getIndex(e);if(t<0)return this.NaNColor;if(0===t){if(this.UseBelowRangeColor&&e<this.TableRange[0])return this.BelowRangeColor}else if(t===this.NumberOfColors-1&&this.UseAboveRangeColor&&e>this.TableRange[1])return this.AboveRangeColor;return this.Table[t]}},{key:"getIndex",value:function(e){var t={Range:[]};if(t.MaxIndex=this.NumberOfColors-1,t.Shift=-this.TableRange[0],this.TableRange[1]<=this.TableRange[0]?t.Scale=Number.MAX_VALUE:t.Scale=t.MaxIndex/(this.TableRange[1]-this.TableRange[0]),t.Range[0]=this.TableRange[0],t.Range[1]=this.TableRange[1],isNaN(e))return-1;var r=function(e,t){var r=void 0;return r=e<t.Range[0]?t.MaxIndex+n+1.5:e>t.Range[1]?t.MaxIndex+i+1.5:(e+t.Shift)*t.Scale,Math.floor(r)}(e,t);return r===this.NumberOfColors+n?r=0:r===this.NumberOfColors+i&&(r=this.NumberOfColors-1),r}},{key:"setTableValue",value:function(e,t){if(5===arguments.length&&(t=Array.prototype.slice.call(arguments,1)),e<0)throw new Error("Can't set the table value for negative index ("+e+")");e>=this.NumberOfColors&&new Error("Index "+e+" is greater than the number of colors "+this.NumberOfColors),this.Table[e]=t,0!==e&&e!==this.NumberOfColors-1||this.buildSpecialColors()}}]),e}();t.default=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getColormapsList=function(){var e=[];return Object.keys(l).forEach(function(t){if(l.hasOwnProperty(t)){var r=l[t];e.push({id:t,name:r.name})}}),e.sort(function(e,t){var r=e.name.toLowerCase(),a=t.name.toLowerCase();return r===a?0:r<a?-1:1}),e},t.getColormap=function(e,t){var r=l[e];r||(r=l[e]=t||{name:"",colors:[]});!r.colors&&r.segmentedData&&(r.colors=function(e,t,r){var a=void 0,n=[];t=null===t?256:t,r=null===r?1:r;var i=d(t,e.red,r),o=d(t,e.green,r),l=d(t,e.blue,r);for(a=0;a<t;a++){var u=Math.round(255*i[a]),s=Math.round(255*o[a]),f=Math.round(255*l[a]),c=[u,s,f,255];n.push(c)}return n}(r.segmentedData,r.numColors,r.gamma));return{getId:function(){return e},getColorSchemeName:function(){return r.name},setColorSchemeName:function(e){r.name=e},getNumberOfColors:function(){return r.colors.length},setNumberOfColors:function(e){for(;r.colors.length<e;)r.colors.push(o);r.colors.length=e},getColor:function(e){return this.isValidIndex(e)?r.colors[e]:o},getColorRepeating:function(e){var t=r.colors.length;return e=t?e%t:0,this.getColor(e)},setColor:function(e,t){this.isValidIndex(e)&&(r.colors[e]=t)},addColor:function(e){r.colors.push(e)},insertColor:function(e,t){this.isValidIndex(e)&&r.colors.splice(e,1,t)},removeColor:function(e){this.isValidIndex(e)&&r.colors.splice(e,1)},clearColors:function(){r.colors=[]},buildLookupTable:function(e){if(e){var t=r.colors.length;e.setNumberOfTableValues(t);for(var a=0;a<t;a++)e.setTableValue(a,r.colors[a])}},createLookupTable:function(){var e=new i.default;return this.buildLookupTable(e),e},isValidIndex:function(e){return e>=0&&e<r.colors.length}}};var a,n=r(38),i=(a=n)&&a.__esModule?a:{default:a};var o=[0,0,0,0],l={hotIron:{name:"Hot Iron",numOfColors:256,colors:[[0,0,0,255],[2,0,0,255],[4,0,0,255],[6,0,0,255],[8,0,0,255],[10,0,0,255],[12,0,0,255],[14,0,0,255],[16,0,0,255],[18,0,0,255],[20,0,0,255],[22,0,0,255],[24,0,0,255],[26,0,0,255],[28,0,0,255],[30,0,0,255],[32,0,0,255],[34,0,0,255],[36,0,0,255],[38,0,0,255],[40,0,0,255],[42,0,0,255],[44,0,0,255],[46,0,0,255],[48,0,0,255],[50,0,0,255],[52,0,0,255],[54,0,0,255],[56,0,0,255],[58,0,0,255],[60,0,0,255],[62,0,0,255],[64,0,0,255],[66,0,0,255],[68,0,0,255],[70,0,0,255],[72,0,0,255],[74,0,0,255],[76,0,0,255],[78,0,0,255],[80,0,0,255],[82,0,0,255],[84,0,0,255],[86,0,0,255],[88,0,0,255],[90,0,0,255],[92,0,0,255],[94,0,0,255],[96,0,0,255],[98,0,0,255],[100,0,0,255],[102,0,0,255],[104,0,0,255],[106,0,0,255],[108,0,0,255],[110,0,0,255],[112,0,0,255],[114,0,0,255],[116,0,0,255],[118,0,0,255],[120,0,0,255],[122,0,0,255],[124,0,0,255],[126,0,0,255],[128,0,0,255],[130,0,0,255],[132,0,0,255],[134,0,0,255],[136,0,0,255],[138,0,0,255],[140,0,0,255],[142,0,0,255],[144,0,0,255],[146,0,0,255],[148,0,0,255],[150,0,0,255],[152,0,0,255],[154,0,0,255],[156,0,0,255],[158,0,0,255],[160,0,0,255],[162,0,0,255],[164,0,0,255],[166,0,0,255],[168,0,0,255],[170,0,0,255],[172,0,0,255],[174,0,0,255],[176,0,0,255],[178,0,0,255],[180,0,0,255],[182,0,0,255],[184,0,0,255],[186,0,0,255],[188,0,0,255],[190,0,0,255],[192,0,0,255],[194,0,0,255],[196,0,0,255],[198,0,0,255],[200,0,0,255],[202,0,0,255],[204,0,0,255],[206,0,0,255],[208,0,0,255],[210,0,0,255],[212,0,0,255],[214,0,0,255],[216,0,0,255],[218,0,0,255],[220,0,0,255],[222,0,0,255],[224,0,0,255],[226,0,0,255],[228,0,0,255],[230,0,0,255],[232,0,0,255],[234,0,0,255],[236,0,0,255],[238,0,0,255],[240,0,0,255],[242,0,0,255],[244,0,0,255],[246,0,0,255],[248,0,0,255],[250,0,0,255],[252,0,0,255],[254,0,0,255],[255,0,0,255],[255,2,0,255],[255,4,0,255],[255,6,0,255],[255,8,0,255],[255,10,0,255],[255,12,0,255],[255,14,0,255],[255,16,0,255],[255,18,0,255],[255,20,0,255],[255,22,0,255],[255,24,0,255],[255,26,0,255],[255,28,0,255],[255,30,0,255],[255,32,0,255],[255,34,0,255],[255,36,0,255],[255,38,0,255],[255,40,0,255],[255,42,0,255],[255,44,0,255],[255,46,0,255],[255,48,0,255],[255,50,0,255],[255,52,0,255],[255,54,0,255],[255,56,0,255],[255,58,0,255],[255,60,0,255],[255,62,0,255],[255,64,0,255],[255,66,0,255],[255,68,0,255],[255,70,0,255],[255,72,0,255],[255,74,0,255],[255,76,0,255],[255,78,0,255],[255,80,0,255],[255,82,0,255],[255,84,0,255],[255,86,0,255],[255,88,0,255],[255,90,0,255],[255,92,0,255],[255,94,0,255],[255,96,0,255],[255,98,0,255],[255,100,0,255],[255,102,0,255],[255,104,0,255],[255,106,0,255],[255,108,0,255],[255,110,0,255],[255,112,0,255],[255,114,0,255],[255,116,0,255],[255,118,0,255],[255,120,0,255],[255,122,0,255],[255,124,0,255],[255,126,0,255],[255,128,4,255],[255,130,8,255],[255,132,12,255],[255,134,16,255],[255,136,20,255],[255,138,24,255],[255,140,28,255],[255,142,32,255],[255,144,36,255],[255,146,40,255],[255,148,44,255],[255,150,48,255],[255,152,52,255],[255,154,56,255],[255,156,60,255],[255,158,64,255],[255,160,68,255],[255,162,72,255],[255,164,76,255],[255,166,80,255],[255,168,84,255],[255,170,88,255],[255,172,92,255],[255,174,96,255],[255,176,100,255],[255,178,104,255],[255,180,108,255],[255,182,112,255],[255,184,116,255],[255,186,120,255],[255,188,124,255],[255,190,128,255],[255,192,132,255],[255,194,136,255],[255,196,140,255],[255,198,144,255],[255,200,148,255],[255,202,152,255],[255,204,156,255],[255,206,160,255],[255,208,164,255],[255,210,168,255],[255,212,172,255],[255,214,176,255],[255,216,180,255],[255,218,184,255],[255,220,188,255],[255,222,192,255],[255,224,196,255],[255,226,200,255],[255,228,204,255],[255,230,208,255],[255,232,212,255],[255,234,216,255],[255,236,220,255],[255,238,224,255],[255,240,228,255],[255,242,232,255],[255,244,236,255],[255,246,240,255],[255,248,244,255],[255,250,248,255],[255,252,252,255],[255,255,255,255]]},pet:{name:"PET",numColors:256,colors:[[0,0,0,255],[0,2,1,255],[0,4,3,255],[0,6,5,255],[0,8,7,255],[0,10,9,255],[0,12,11,255],[0,14,13,255],[0,16,15,255],[0,18,17,255],[0,20,19,255],[0,22,21,255],[0,24,23,255],[0,26,25,255],[0,28,27,255],[0,30,29,255],[0,32,31,255],[0,34,33,255],[0,36,35,255],[0,38,37,255],[0,40,39,255],[0,42,41,255],[0,44,43,255],[0,46,45,255],[0,48,47,255],[0,50,49,255],[0,52,51,255],[0,54,53,255],[0,56,55,255],[0,58,57,255],[0,60,59,255],[0,62,61,255],[0,65,63,255],[0,67,65,255],[0,69,67,255],[0,71,69,255],[0,73,71,255],[0,75,73,255],[0,77,75,255],[0,79,77,255],[0,81,79,255],[0,83,81,255],[0,85,83,255],[0,87,85,255],[0,89,87,255],[0,91,89,255],[0,93,91,255],[0,95,93,255],[0,97,95,255],[0,99,97,255],[0,101,99,255],[0,103,101,255],[0,105,103,255],[0,107,105,255],[0,109,107,255],[0,111,109,255],[0,113,111,255],[0,115,113,255],[0,117,115,255],[0,119,117,255],[0,121,119,255],[0,123,121,255],[0,125,123,255],[0,128,125,255],[1,126,127,255],[3,124,129,255],[5,122,131,255],[7,120,133,255],[9,118,135,255],[11,116,137,255],[13,114,139,255],[15,112,141,255],[17,110,143,255],[19,108,145,255],[21,106,147,255],[23,104,149,255],[25,102,151,255],[27,100,153,255],[29,98,155,255],[31,96,157,255],[33,94,159,255],[35,92,161,255],[37,90,163,255],[39,88,165,255],[41,86,167,255],[43,84,169,255],[45,82,171,255],[47,80,173,255],[49,78,175,255],[51,76,177,255],[53,74,179,255],[55,72,181,255],[57,70,183,255],[59,68,185,255],[61,66,187,255],[63,64,189,255],[65,63,191,255],[67,61,193,255],[69,59,195,255],[71,57,197,255],[73,55,199,255],[75,53,201,255],[77,51,203,255],[79,49,205,255],[81,47,207,255],[83,45,209,255],[85,43,211,255],[86,41,213,255],[88,39,215,255],[90,37,217,255],[92,35,219,255],[94,33,221,255],[96,31,223,255],[98,29,225,255],[100,27,227,255],[102,25,229,255],[104,23,231,255],[106,21,233,255],[108,19,235,255],[110,17,237,255],[112,15,239,255],[114,13,241,255],[116,11,243,255],[118,9,245,255],[120,7,247,255],[122,5,249,255],[124,3,251,255],[126,1,253,255],[128,0,255,255],[130,2,252,255],[132,4,248,255],[134,6,244,255],[136,8,240,255],[138,10,236,255],[140,12,232,255],[142,14,228,255],[144,16,224,255],[146,18,220,255],[148,20,216,255],[150,22,212,255],[152,24,208,255],[154,26,204,255],[156,28,200,255],[158,30,196,255],[160,32,192,255],[162,34,188,255],[164,36,184,255],[166,38,180,255],[168,40,176,255],[170,42,172,255],[171,44,168,255],[173,46,164,255],[175,48,160,255],[177,50,156,255],[179,52,152,255],[181,54,148,255],[183,56,144,255],[185,58,140,255],[187,60,136,255],[189,62,132,255],[191,64,128,255],[193,66,124,255],[195,68,120,255],[197,70,116,255],[199,72,112,255],[201,74,108,255],[203,76,104,255],[205,78,100,255],[207,80,96,255],[209,82,92,255],[211,84,88,255],[213,86,84,255],[215,88,80,255],[217,90,76,255],[219,92,72,255],[221,94,68,255],[223,96,64,255],[225,98,60,255],[227,100,56,255],[229,102,52,255],[231,104,48,255],[233,106,44,255],[235,108,40,255],[237,110,36,255],[239,112,32,255],[241,114,28,255],[243,116,24,255],[245,118,20,255],[247,120,16,255],[249,122,12,255],[251,124,8,255],[253,126,4,255],[255,128,0,255],[255,130,4,255],[255,132,8,255],[255,134,12,255],[255,136,16,255],[255,138,20,255],[255,140,24,255],[255,142,28,255],[255,144,32,255],[255,146,36,255],[255,148,40,255],[255,150,44,255],[255,152,48,255],[255,154,52,255],[255,156,56,255],[255,158,60,255],[255,160,64,255],[255,162,68,255],[255,164,72,255],[255,166,76,255],[255,168,80,255],[255,170,85,255],[255,172,89,255],[255,174,93,255],[255,176,97,255],[255,178,101,255],[255,180,105,255],[255,182,109,255],[255,184,113,255],[255,186,117,255],[255,188,121,255],[255,190,125,255],[255,192,129,255],[255,194,133,255],[255,196,137,255],[255,198,141,255],[255,200,145,255],[255,202,149,255],[255,204,153,255],[255,206,157,255],[255,208,161,255],[255,210,165,255],[255,212,170,255],[255,214,174,255],[255,216,178,255],[255,218,182,255],[255,220,186,255],[255,222,190,255],[255,224,194,255],[255,226,198,255],[255,228,202,255],[255,230,206,255],[255,232,210,255],[255,234,214,255],[255,236,218,255],[255,238,222,255],[255,240,226,255],[255,242,230,255],[255,244,234,255],[255,246,238,255],[255,248,242,255],[255,250,246,255],[255,252,250,255],[255,255,255,255]]},hotMetalBlue:{name:"Hot Metal Blue",numColors:256,colors:[[0,0,0,255],[0,0,2,255],[0,0,4,255],[0,0,6,255],[0,0,8,255],[0,0,10,255],[0,0,12,255],[0,0,14,255],[0,0,16,255],[0,0,17,255],[0,0,19,255],[0,0,21,255],[0,0,23,255],[0,0,25,255],[0,0,27,255],[0,0,29,255],[0,0,31,255],[0,0,33,255],[0,0,35,255],[0,0,37,255],[0,0,39,255],[0,0,41,255],[0,0,43,255],[0,0,45,255],[0,0,47,255],[0,0,49,255],[0,0,51,255],[0,0,53,255],[0,0,55,255],[0,0,57,255],[0,0,59,255],[0,0,61,255],[0,0,63,255],[0,0,65,255],[0,0,67,255],[0,0,69,255],[0,0,71,255],[0,0,73,255],[0,0,75,255],[0,0,77,255],[0,0,79,255],[0,0,81,255],[0,0,83,255],[0,0,84,255],[0,0,86,255],[0,0,88,255],[0,0,90,255],[0,0,92,255],[0,0,94,255],[0,0,96,255],[0,0,98,255],[0,0,100,255],[0,0,102,255],[0,0,104,255],[0,0,106,255],[0,0,108,255],[0,0,110,255],[0,0,112,255],[0,0,114,255],[0,0,116,255],[0,0,117,255],[0,0,119,255],[0,0,121,255],[0,0,123,255],[0,0,125,255],[0,0,127,255],[0,0,129,255],[0,0,131,255],[0,0,133,255],[0,0,135,255],[0,0,137,255],[0,0,139,255],[0,0,141,255],[0,0,143,255],[0,0,145,255],[0,0,147,255],[0,0,149,255],[0,0,151,255],[0,0,153,255],[0,0,155,255],[0,0,157,255],[0,0,159,255],[0,0,161,255],[0,0,163,255],[0,0,165,255],[0,0,167,255],[3,0,169,255],[6,0,171,255],[9,0,173,255],[12,0,175,255],[15,0,177,255],[18,0,179,255],[21,0,181,255],[24,0,183,255],[26,0,184,255],[29,0,186,255],[32,0,188,255],[35,0,190,255],[38,0,192,255],[41,0,194,255],[44,0,196,255],[47,0,198,255],[50,0,200,255],[52,0,197,255],[55,0,194,255],[57,0,191,255],[59,0,188,255],[62,0,185,255],[64,0,182,255],[66,0,179,255],[69,0,176,255],[71,0,174,255],[74,0,171,255],[76,0,168,255],[78,0,165,255],[81,0,162,255],[83,0,159,255],[85,0,156,255],[88,0,153,255],[90,0,150,255],[93,2,144,255],[96,4,138,255],[99,6,132,255],[102,8,126,255],[105,9,121,255],[108,11,115,255],[111,13,109,255],[114,15,103,255],[116,17,97,255],[119,19,91,255],[122,21,85,255],[125,23,79,255],[128,24,74,255],[131,26,68,255],[134,28,62,255],[137,30,56,255],[140,32,50,255],[143,34,47,255],[146,36,44,255],[149,38,41,255],[152,40,38,255],[155,41,35,255],[158,43,32,255],[161,45,29,255],[164,47,26,255],[166,49,24,255],[169,51,21,255],[172,53,18,255],[175,55,15,255],[178,56,12,255],[181,58,9,255],[184,60,6,255],[187,62,3,255],[190,64,0,255],[194,66,0,255],[198,68,0,255],[201,70,0,255],[205,72,0,255],[209,73,0,255],[213,75,0,255],[217,77,0,255],[221,79,0,255],[224,81,0,255],[228,83,0,255],[232,85,0,255],[236,87,0,255],[240,88,0,255],[244,90,0,255],[247,92,0,255],[251,94,0,255],[255,96,0,255],[255,98,3,255],[255,100,6,255],[255,102,9,255],[255,104,12,255],[255,105,15,255],[255,107,18,255],[255,109,21,255],[255,111,24,255],[255,113,26,255],[255,115,29,255],[255,117,32,255],[255,119,35,255],[255,120,38,255],[255,122,41,255],[255,124,44,255],[255,126,47,255],[255,128,50,255],[255,130,53,255],[255,132,56,255],[255,134,59,255],[255,136,62,255],[255,137,65,255],[255,139,68,255],[255,141,71,255],[255,143,74,255],[255,145,76,255],[255,147,79,255],[255,149,82,255],[255,151,85,255],[255,152,88,255],[255,154,91,255],[255,156,94,255],[255,158,97,255],[255,160,100,255],[255,162,103,255],[255,164,106,255],[255,166,109,255],[255,168,112,255],[255,169,115,255],[255,171,118,255],[255,173,121,255],[255,175,124,255],[255,177,126,255],[255,179,129,255],[255,181,132,255],[255,183,135,255],[255,184,138,255],[255,186,141,255],[255,188,144,255],[255,190,147,255],[255,192,150,255],[255,194,153,255],[255,196,156,255],[255,198,159,255],[255,200,162,255],[255,201,165,255],[255,203,168,255],[255,205,171,255],[255,207,174,255],[255,209,176,255],[255,211,179,255],[255,213,182,255],[255,215,185,255],[255,216,188,255],[255,218,191,255],[255,220,194,255],[255,222,197,255],[255,224,200,255],[255,226,203,255],[255,228,206,255],[255,229,210,255],[255,231,213,255],[255,233,216,255],[255,235,219,255],[255,237,223,255],[255,239,226,255],[255,240,229,255],[255,242,232,255],[255,244,236,255],[255,246,239,255],[255,248,242,255],[255,250,245,255],[255,251,249,255],[255,253,252,255],[255,255,255,255]]},pet20Step:{name:"PET 20 Step",numColors:256,colors:[[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255]]},gray:{name:"Gray",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[1,1,1]],green:[[0,0,0],[1,1,1]],blue:[[0,0,0],[1,1,1]]}},jet:{name:"Jet",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[.35,0,0],[.66,1,1],[.89,1,1],[1,.5,.5]],green:[[0,0,0],[.125,0,0],[.375,1,1],[.64,1,1],[.91,0,0],[1,0,0]],blue:[[0,.5,.5],[.11,1,1],[.34,1,1],[.65,0,0],[1,0,0]]}},hsv:{name:"HSV",numColors:256,gamma:1,segmentedData:{red:[[0,1,1],[.15873,1,1],[.174603,.96875,.96875],[.333333,.03125,.03125],[.349206,0,0],[.666667,0,0],[.68254,.03125,.03125],[.84127,.96875,.96875],[.857143,1,1],[1,1,1]],green:[[0,0,0],[.15873,.9375,.9375],[.174603,1,1],[.507937,1,1],[.666667,.0625,.0625],[.68254,0,0],[1,0,0]],blue:[[0,0,0],[.333333,0,0],[.349206,.0625,.0625],[.507937,1,1],[.84127,1,1],[.857143,.9375,.9375],[1,.09375,.09375]]}},hot:{name:"Hot",numColors:256,gamma:1,segmentedData:{red:[[0,.0416,.0416],[.365079,1,1],[1,1,1]],green:[[0,0,0],[.365079,0,0],[.746032,1,1],[1,1,1]],blue:[[0,0,0],[.746032,0,0],[1,1,1]]}},cool:{name:"Cool",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[1,1,1]],green:[[0,1,1],[1,0,0]],blue:[[0,1,1],[1,1,1]]}},spring:{name:"Spring",numColors:256,gamma:1,segmentedData:{red:[[0,1,1],[1,1,1]],green:[[0,0,0],[1,1,1]],blue:[[0,1,1],[1,0,0]]}},summer:{name:"Summer",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[1,1,1]],green:[[0,.5,.5],[1,1,1]],blue:[[0,.4,.4],[1,.4,.4]]}},autumn:{name:"Autumn",numColors:256,gamma:1,segmentedData:{red:[[0,1,1],[1,1,1]],green:[[0,0,0],[1,1,1]],blue:[[0,0,0],[1,0,0]]}},winter:{name:"Winter",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[1,0,0]],green:[[0,0,0],[1,1,1]],blue:[[0,1,1],[1,.5,.5]]}},bone:{name:"Bone",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[.746032,.652778,.652778],[1,1,1]],green:[[0,0,0],[.365079,.319444,.319444],[.746032,.777778,.777778],[1,1,1]],blue:[[0,0,0],[.365079,.444444,.444444],[1,1,1]]}},copper:{name:"Copper",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[.809524,1,1],[1,1,1]],green:[[0,0,0],[1,.7812,.7812]],blue:[[0,0,0],[1,.4975,.4975]]}},spectral:{name:"Spectral",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[.05,.4667,.4667],[.1,.5333,.5333],[.15,0,0],[.2,0,0],[.25,0,0],[.3,0,0],[.35,0,0],[.4,0,0],[.45,0,0],[.5,0,0],[.55,0,0],[.6,0,0],[.65,.7333,.7333],[.7,.9333,.9333],[.75,1,1],[.8,1,1],[.85,1,1],[.9,.8667,.8667],[.95,.8,.8],[1,.8,.8]],green:[[0,0,0],[.05,0,0],[.1,0,0],[.15,0,0],[.2,0,0],[.25,.4667,.4667],[.3,.6,.6],[.35,.6667,.6667],[.4,.6667,.6667],[.45,.6,.6],[.5,.7333,.7333],[.55,.8667,.8667],[.6,1,1],[.65,1,1],[.7,.9333,.9333],[.75,.8,.8],[.8,.6,.6],[.85,0,0],[.9,0,0],[.95,0,0],[1,.8,.8]],blue:[[0,0,0],[.05,.5333,.5333],[.1,.6,.6],[.15,.6667,.6667],[.2,.8667,.8667],[.25,.8667,.8667],[.3,.8667,.8667],[.35,.6667,.6667],[.4,.5333,.5333],[.45,0,0],[.5,0,0],[.55,0,0],[.6,0,0],[.65,0,0],[.7,0,0],[.75,0,0],[.8,0,0],[.85,0,0],[.9,0,0],[.95,0,0],[1,.8,.8]]}},coolwarm:{name:"CoolWarm",numColors:256,gamma:1,segmentedData:{red:[[0,.2298057,.2298057],[.03125,.26623388,.26623388],[.0625,.30386891,.30386891],[.09375,.342804478,.342804478],[.125,.38301334,.38301334],[.15625,.424369608,.424369608],[.1875,.46666708,.46666708],[.21875,.509635204,.509635204],[.25,.552953156,.552953156],[.28125,.596262162,.596262162],[.3125,.639176211,.639176211],[.34375,.681291281,.681291281],[.375,.722193294,.722193294],[.40625,.761464949,.761464949],[.4375,.798691636,.798691636],[.46875,.833466556,.833466556],[.5,.865395197,.865395197],[.53125,.897787179,.897787179],[.5625,.924127593,.924127593],[.59375,.944468518,.944468518],[.625,.958852946,.958852946],[.65625,.96732803,.96732803],[.6875,.969954137,.969954137],[.71875,.966811177,.966811177],[.75,.958003065,.958003065],[.78125,.943660866,.943660866],[.8125,.923944917,.923944917],[.84375,.89904617,.89904617],[.875,.869186849,.869186849],[.90625,.834620542,.834620542],[.9375,.795631745,.795631745],[.96875,.752534934,.752534934],[1,.705673158,.705673158]],green:[[0,.298717966,.298717966],[.03125,.353094838,.353094838],[.0625,.406535296,.406535296],[.09375,.458757618,.458757618],[.125,.50941904,.50941904],[.15625,.558148092,.558148092],[.1875,.604562568,.604562568],[.21875,.648280772,.648280772],[.25,.688929332,.688929332],[.28125,.726149107,.726149107],[.3125,.759599947,.759599947],[.34375,.788964712,.788964712],[.375,.813952739,.813952739],[.40625,.834302879,.834302879],[.4375,.849786142,.849786142],[.46875,.860207984,.860207984],[.5,.86541021,.86541021],[.53125,.848937047,.848937047],[.5625,.827384882,.827384882],[.59375,.800927443,.800927443],[.625,.769767752,.769767752],[.65625,.734132809,.734132809],[.6875,.694266682,.694266682],[.71875,.650421156,.650421156],[.75,.602842431,.602842431],[.78125,.551750968,.551750968],[.8125,.49730856,.49730856],[.84375,.439559467,.439559467],[.875,.378313092,.378313092],[.90625,.312874446,.312874446],[.9375,.24128379,.24128379],[.96875,.157246067,.157246067],[1,.01555616,.01555616]],blue:[[0,.753683153,.753683153],[.03125,.801466763,.801466763],[.0625,.84495867,.84495867],[.09375,.883725899,.883725899],[.125,.917387822,.917387822],[.15625,.945619588,.945619588],[.1875,.968154911,.968154911],[.21875,.98478814,.98478814],[.25,.995375608,.995375608],[.28125,.999836203,.999836203],[.3125,.998151185,.998151185],[.34375,.990363227,.990363227],[.375,.976574709,.976574709],[.40625,.956945269,.956945269],[.4375,.931688648,.931688648],[.46875,.901068838,.901068838],[.5,.865395561,.865395561],[.53125,.820880546,.820880546],[.5625,.774508472,.774508472],[.59375,.726736146,.726736146],[.625,.678007945,.678007945],[.65625,.628751763,.628751763],[.6875,.579375448,.579375448],[.71875,.530263762,.530263762],[.75,.481775914,.481775914],[.78125,.434243684,.434243684],[.8125,.387970225,.387970225],[.84375,.343229596,.343229596],[.875,.300267182,.300267182],[.90625,.259301199,.259301199],[.9375,.220525627,.220525627],[.96875,.184115123,.184115123],[1,.150232812,.150232812]]}},blues:{name:"Blues",numColors:256,gamma:1,segmentedData:{red:[[0,.9686274528503418,.9686274528503418],[.125,.8705882430076599,.8705882430076599],[.25,.7764706015586853,.7764706015586853],[.375,.6196078658103943,.6196078658103943],[.5,.41960784792900085,.41960784792900085],[.625,.25882354378700256,.25882354378700256],[.75,.12941177189350128,.12941177189350128],[.875,.0313725508749485,.0313725508749485],[1,.0313725508749485,.0313725508749485]],green:[[0,.9843137264251709,.9843137264251709],[.125,.9215686321258545,.9215686321258545],[.25,.8588235378265381,.8588235378265381],[.375,.7921568751335144,.7921568751335144],[.5,.6823529601097107,.6823529601097107],[.625,.572549045085907,.572549045085907],[.75,.4431372582912445,.4431372582912445],[.875,.3176470696926117,.3176470696926117],[1,.1882352977991104,.1882352977991104]],blue:[[0,1,1],[.125,.9686274528503418,.9686274528503418],[.25,.9372549057006836,.9372549057006836],[.375,.8823529481887817,.8823529481887817],[.5,.8392156958580017,.8392156958580017],[.625,.7764706015586853,.7764706015586853],[.75,.7098039388656616,.7098039388656616],[.875,.6117647290229797,.6117647290229797],[1,.41960784792900085,.41960784792900085]]}}};function u(e,t){for(var r=0,a=e.length-1;r<=a;){var n=r+Math.floor((a-r)/2),i=e[n];if(i===t)return n;t<i?a=n-1:r=n+1}return r}function d(e,t,r){var a=void 0,n=[],i=[],o=[],l=[];for(r=null===r?1:r,a=0;a<t.length;a++){var d=t[a];n.push((e-1)*d[0]),i.push(d[1]),o.push(d[1])}var s=function(e,t,r){for(var a=(t-e)/((r=null===r?100:r)-1),n=[];r-- >0;)n.push(e),e+=a;return n[n.length-1]=t,n}(0,1,e);for(a=0;a<e;a++)s[a]=(e-1)*Math.pow(s[a],r);var f=function(e,t){var r=void 0,a=[],n=t.length;for(e.sort(function(e,t){return e-t}),r=0;r<n;r++)a[r]=u(e,t[r]);return a}(n,s);for(a=1;a<e-1;a++){var c=f[a],m=(s[a]-n[c-1])/(n[c]-n[c-1]),v=i[c]-o[c-1];l[a]=m*v+o[c-1]}return l[0]=o[0],l[e-1]=i[t.length-1],l}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){return r?function(e){var t=Math.max.apply(Math,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e.lut)).toString(2).length-8,r=e.lut[0]>>t,a=e.lut[e.lut.length-1]>>t,n=e.firstValueMapped+e.lut.length-1;return function(i){return i<e.firstValueMapped?r:i>=n?a:e.lut[i-e.firstValueMapped]>>t}}(r):function(e,t){return function(r){return 255*((r-t)/e+.5)}}(e,t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){return r?function(e){var t=e.lut[0],r=e.lut[e.lut.length-1],a=e.firstValueMapped+e.lut.length;return function(n){return n<e.firstValueMapped?t:n>=a?r:e.lut[n]}}(r):function(e,t){return function(r){return r*e+t}}(e,t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.restoreImage=t.convertToFalseColorImage=t.convertImageToFalseColorImage=void 0;var a,n=r(0),i=r(26),o=(a=i)&&a.__esModule?a:{default:a},l=r(39);function u(e){return!(!e.restore||"function"!=typeof e.restore)&&(e.restore(),!0)}function d(e,t){if(e.color&&!e.falseColor)throw new Error("Color transforms are not implemented yet");var r=(t=function(e){return e&&"string"==typeof e&&(e=(0,l.getColormap)(e)),e}(t)).getId();if(e.colormapId===r)return!1;if(u(e),r){var a=e.minPixelValue||0,n=e.maxPixelValue||255;e.restore=function(e){if(e.restore)return e.restore;var t=e.color,r=e.rgba,a=e.cachedLut,n=e.slope,i=e.windowWidth,o=e.windowCenter,l=e.minPixelValue,u=e.maxPixelValue;return function(){if(e.color=t,e.rgba=r,e.cachedLut=a,e.slope=n,e.windowWidth=i,e.windowCenter=o,e.minPixelValue=l,e.maxPixelValue=u,e.origPixelData){var d=e.origPixelData;e.getPixelData=function(){return d}}e.origPixelData=void 0,e.colormapId=void 0,e.falseColor=void 0}}(e);var i=t.createLookupTable();i.setTableRange(a,n),(0,o.default)(e,i);var d=function(e){for(var t=Number.MAX_VALUE,r=Number.MIN_VALUE,a=e.length,n=void 0,i=0;i<a;i++)t=t<(n=e[i])?t:n,r=r>n?r:n;return{minPixelValue:t,maxPixelValue:r}}(e.getPixelData());e.minPixelValue=d.minPixelValue,e.maxPixelValue=d.maxPixelValue,e.windowWidth=255,e.windowCenter=128,e.colormapId=r}return!0}t.convertImageToFalseColorImage=d,t.convertToFalseColorImage=function(e,t){return d((0,n.getEnabledElement)(e).image,t)},t.restoreImage=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addProvider=n,t.removeProvider=i;var a=[];function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=void 0;for(r=0;r<a.length&&!(a[r].priority<=t);r++);a.splice(r,0,{priority:t,provider:e})}function i(e){for(var t=0;t<a.length;t++)if(a[t].provider===e){a.splice(t,1);break}}t.default={addProvider:n,removeProvider:i,get:function(e,t){for(var r=0;r<a.length;r++){var n=a[r].provider(e,t);if(void 0!==n)return n}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(9),n=r(10),i=r(32),o=r(12),l=r(16);t.default={colorImage:a.renderColorImage,grayscaleImage:n.renderGrayscaleImage,webImage:i.renderWebImage,pseudoColorImage:o.renderPseudoColorImage,labelMapImage:l.renderLabelMapImage}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,n.getEnabledElement)(e);if(void 0===r.viewport&&(r.viewport=(0,a.default)(r.canvas)),t)for(var o in t)null!==t[o]&&(r.viewport[o]=t[o]);r.viewport.voi.windowWidth&&(r.viewport.voi.windowWidth=Math.max(t.voi.windowWidth,l)),r.viewport.scale&&(r.viewport.scale=Math.max(t.scale,u)),r.viewport.rotation%=360,r.viewport.rotation<0&&(r.viewport.rotation+=360),r.image&&(0,i.default)(e)};var a=o(r(6)),n=r(0),i=o(r(4));function o(e){return e&&e.__esModule?e:{default:e}}var l=1e-6,u=1e-4},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,a.getEnabledElement)(e);t.viewport=(0,n.default)(t.canvas,t.image),(0,i.default)(e)};var a=r(0),n=o(r(6)),i=o(r(4));function o(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,n.getEnabledElement)(e);return(0,o.default)(r).transformPoint(t.x,t.y)};var a,n=r(0),i=r(17),o=(a=i)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var a=(0,n.getEnabledElement)(e);if(void 0===a.image)throw new Error("image has not been loaded yet");var i=e.getBoundingClientRect(),l={x:t-i.left-window.pageXOffset,y:r-i.top-window.pageYOffset},u=(0,o.default)(a);return u.invert(),u.transformPoint(l.x,l.y)};var a,n=r(0),i=r(17),o=(a=i)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,n.getEnabledElementsByImageId)(e).forEach(function(e){(0,o.default)(e,!0)})};var a,n=r(0),i=r(8),o=(a=i)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,a.getEnabledElement)(e);t.invalid=!0,t.needsRedraw=!0;var r={element:e};(0,n.default)(e,i.default.INVALIDATED,r)};var a=r(0),n=o(r(2)),i=o(r(3));function o(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadImage=function(e,t){if(void 0===e)throw new Error("loadImage: parameter imageId must not be undefined");var r=(0,a.getImageLoadObject)(e);if(void 0!==r)return r.promise;return s(e,t).promise},t.loadAndCacheImage=function(e,t){if(void 0===e)throw new Error("loadAndCacheImage: parameter imageId must not be undefined");var r=(0,a.getImageLoadObject)(e);if(void 0!==r)return r.promise;return r=s(e,t),(0,a.putImageLoadObject)(e,r),r.promise},t.registerImageLoader=function(e,t){u[e]=t},t.registerUnknownImageLoader=function(e){var t=d;return d=e,t};var a=r(27),n=r(3),i=l(n),o=l(r(2));function l(e){return e&&e.__esModule?e:{default:e}}var u={},d=void 0;function s(e,t){var r=e.indexOf(":"),a=e.substring(0,r),l=u[a];if(void 0===l||null===l){if(void 0!==d)return d(e);throw new Error("loadImageFromImageLoader: no image loader for imageId")}var s=l(e,t);return s.promise.then(function(e){(0,o.default)(n.events,i.default.IMAGE_LOADED,{image:e})},function(t){var r={imageId:e,error:t};(0,o.default)(n.events,i.default.IMAGE_LOAD_FAILED,r)}),s}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,a.getEnabledElement)(e).viewport;if(void 0!==t)return Object.assign({},t)};var a=r(0)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,o,l){var u=(0,n.default)(e,t,r,o,l),d=(0,a.getEnabledElement)(e),s=(0,i.default)(d.image.slope,d.image.intercept,d.viewport.modalityLUT);return u.map(s)};var a=r(0),n=o(r(28)),i=o(r(41));function o(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,a.getEnabledElement)(e).image};var a=r(0)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,n.getEnabledElement)(e);return(0,o.default)(r.canvas,t)};var a,n=r(0),i=r(6),o=(a=i)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getElementData=function(e,t){var r=(0,a.getEnabledElement)(e);!1===r.data.hasOwnProperty(t)&&(r.data[t]={});return r.data[t]},t.removeElementData=function(e,t){delete(0,a.getEnabledElement)(e).data[t]};var a=r(0)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t="canvas."+a;return e.querySelector(t)||function(e){var t=document.createElement("canvas");return t.style.display="block",t.classList.add(a),e.appendChild(t),t}(e)};var a="cornerstone-canvas"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=e.element,a=(0,n.getLayers)(r),d=(0,n.getActiveLayer)(r),c=(0,n.getVisibleLayers)(r),m=!e.lastSyncViewportsState&&e.syncViewports;e.lastSyncViewportsState=e.syncViewports,m&&a.forEach(function(e){e.viewport&&(f[e.layerId]=e.viewport.scale)}),!0===e.syncViewports&&function(e,t){e.forEach(function(e){if(e!==t&&e.viewport&&t.viewport){f[e.layerId]||(f[e.layerId]=e.viewport.scale);var r,a,n=(r=t.layerId,a=e.layerId,f[a]/f[r]);e.viewport.scale=t.viewport.scale*n,e.viewport.rotation=t.viewport.rotation,e.viewport.translation={x:t.viewport.translation.x/n,y:t.viewport.translation.y/n},e.viewport.hflip=t.viewport.hflip,e.viewport.vflip=t.viewport.vflip}})}(c,d);var v=e.canvas.getContext("2d");v.setTransform(1,0,0,1,0,0),v.fillStyle="black",v.fillRect(0,0,e.canvas.width,e.canvas.height),function(e,t,r){t.forEach(function(t,a){if(t.image){e.save(),t.canvas=e.canvas,(0,s.default)(t,e);var n=t.viewport.colormap||t.options.colormap,d=t.viewport.labelmap,f=t.invalid||r;if(n&&""!==n&&!0===d)(0,u.addLabelMapLayer)(t,f);else if(n&&""!==n)(0,l.addPseudoColorLayer)(t,f);else if(!0===t.image.color)(0,o.addColorLayer)(t,f);else{var c=0===a;(0,i.addGrayscaleLayer)(t,f,c)}t.options&&t.options.opacity?e.globalAlpha=t.options.opacity:e.globalAlpha=1,t.options&&t.options.fillStyle&&(e.fillStyle=t.options.fillStyle),e.imageSmoothingEnabled=!t.viewport.pixelReplication,e.mozImageSmoothingEnabled=e.imageSmoothingEnabled;var m=t.viewport.displayedArea.tlhc.x-1,v=t.viewport.displayedArea.tlhc.y-1,g=t.viewport.displayedArea.brhc.x-t.viewport.displayedArea.tlhc.x,p=t.viewport.displayedArea.brhc.y-t.viewport.displayedArea.tlhc.y;e.drawImage(t.canvas,m,v,g,p,0,0,g,p),e.restore(),t.invalid=!1}})}(v,c,t)};var a,n=r(18),i=r(10),o=r(9),l=r(12),u=r(16),d=r(5),s=(a=d)&&a.__esModule?a:{default:a};var f={}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=e.image,f=e.element,c=e.layers||[];if(e.canvas&&(e.image||c.length)){var m=(0,a.default)();if(r.stats={lastGetPixelDataTime:-1,lastStoredPixelDataToCanvasImageDataTime:-1,lastPutImageDataTime:-1,lastRenderTime:-1,lastLutGenerateTime:-1},c&&c.length)(0,n.default)(e,t);else if(r){var v=r.render;v||(v=e.viewport.colormap&&""!==e.viewport.colormap&&!0===e.image.labelmap?u.renderLabelMapImage:e.viewport.colormap&&""!==e.viewport.colormap?l.renderPseudoColorImage:r.color?i.renderColorImage:o.renderGrayscaleImage),v(e,t)}var g=(0,a.default)()-m,p={viewport:e.viewport,element:f,image:r,enabledElement:e,canvasContext:e.canvas.getContext("2d"),renderTimeInMs:g};r.stats.lastRenderTime=g,e.invalid=!1,e.needsRedraw=!1,(0,d.default)(f,s.default.IMAGE_RENDERED,p)}};var a=f(r(1)),n=f(r(58)),i=r(9),o=r(10),l=r(12),u=r(16),d=f(r(2)),s=f(r(3));function f(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(void 0===e)throw new Error("enable: parameter element cannot be undefined");t&&t.renderer&&"webgl"===t.renderer.toLowerCase()&&(l.default.renderer.isWebGLAvailable()?(l.default.renderer.initRenderer(),t.renderer="webgl"):(console.error("WebGL not available, falling back to Canvas renderer"),delete t.renderer));var r={element:e,canvas:(0,s.default)(e),image:void 0,invalid:!1,needsRedraw:!0,options:t,layers:[],data:{},renderingTools:{}};(0,a.addEnabledElement)(r),(0,n.default)(e,!0),function e(t){if(void 0!==r.canvas){var a={enabledElement:r,timestamp:t};(0,u.default)(r.element,d.default.PRE_RENDER,a),r.needsRedraw&&function(e){return void 0!==e.image||e.layers.length>0}(r)&&(0,i.default)(r,r.invalid),(0,o.default)(e)}}()};var a=r(0),n=f(r(31)),i=f(r(59)),o=f(r(24)),l=f(r(11)),u=f(r(2)),d=f(r(3)),s=f(r(57));function f(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=(0,n.getEnabledElements)(),t=0;t<e.length;t++){var r=e[t];!0===r.invalid&&(0,o.default)(r,!0)}};var a,n=r(0),i=r(8),o=(a=i)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,n.getEnabledElement)(e);if(void 0===t.image)throw new Error("draw: image has not been loaded yet");(0,o.default)(t)};var a,n=r(0),i=r(8),o=(a=i)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){if(void 0===e)throw new Error("displayImage: parameter element must not be undefined");if(void 0===t)throw new Error("displayImage: parameter image must not be undefined");var s=(0,a.getEnabledElement)(e),f=s.image;if(s.image=t,s.layers&&s.layers.length&&(0,l.setLayerImage)(e,t),void 0===s.viewport&&(s.viewport=(0,n.default)(s.canvas,t)),r)for(var c in r)null!==r[c]&&(s.viewport[c]=r[c]);var m=void 0;void 0!==s.lastImageTimeStamp&&(m=(1e3/((0,o.default)()-s.lastImageTimeStamp)).toFixed());s.lastImageTimeStamp=(0,o.default)();var v={viewport:s.viewport,element:s.element,image:s.image,oldImage:f,enabledElement:s,frameRate:m};(0,u.default)(s.element,d.default.NEW_IMAGE,v),(0,i.default)(e)};var a=r(0),n=s(r(6)),i=s(r(4)),o=s(r(1)),l=r(18),u=s(r(2)),d=s(r(3));function s(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(void 0===e)throw new Error("disable: element must not be undefined");for(var t=(0,a.getEnabledElements)(),r=0;r<t.length;r++)if(t[r].element===e){var o={element:e};(0,n.default)(e,i.default.ELEMENT_DISABLED,o),t[r].element.removeChild(t[r].canvas),t[r].canvas=void 0,t.splice(r,1);break}};var a=r(0),n=o(r(2)),i=o(r(3));function o(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,n.getEnabledElement)(e),a=(0,o.default)(r);return a.invert(),a.transformPoint(t.x,t.y)};var a,n=r(0),i=r(17),o=(a=i)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.vertexShader="attribute vec2 a_position;attribute vec2 a_texCoord;uniform vec2 u_resolution;varying vec2 v_texCoord;void main() {vec2 zeroToOne = a_position / u_resolution;vec2 zeroToTwo = zeroToOne * 2.0;vec2 clipSpace = zeroToTwo - 1.0;gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);v_texCoord = a_texCoord;}"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={};t.uint8DataUtilities={storedPixelDataToImageData:function(e){return e.getPixelData()}};a.frag="precision mediump float;uniform sampler2D u_image;uniform float ww;uniform float wc;uniform float slope;uniform float intercept;uniform int invert;varying vec2 v_texCoord;void main() {vec4 color = texture2D(u_image, v_texCoord);float intensity = color.r*256.0;intensity = intensity * slope + intercept;float center0 = wc - 0.5;float width0 = max(ww, 1.0);intensity = (intensity - center0) / width0 + 0.5;intensity = clamp(intensity, 0.0, 1.0);gl_FragColor = vec4(intensity, intensity, intensity, 1.0);if (invert == 1)gl_FragColor.rgb = 1.0 - gl_FragColor.rgb;}",t.uint8Shader=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={};t.uint16DataUtilities={storedPixelDataToImageData:function(e){for(var t=e.getPixelData(),r=new Uint8Array(e.width*e.height*2),a=0,n=0;n<t.length;n++){var i=t[n];r[a++]=255&i,r[a++]=i>>8}return r}};a.frag="precision mediump float;uniform sampler2D u_image;uniform float ww;uniform float wc;uniform float slope;uniform float intercept;uniform int invert;varying vec2 v_texCoord;void main() {vec4 color = texture2D(u_image, v_texCoord);float intensity = color.r*256.0 + color.a*65536.0;intensity = intensity * slope + intercept;float center0 = wc - 0.5;float width0 = max(ww, 1.0);intensity = (intensity - center0) / width0 + 0.5;intensity = clamp(intensity, 0.0, 1.0);gl_FragColor = vec4(intensity, intensity, intensity, 1.0);if (invert == 1)gl_FragColor.rgb = 1.0 - gl_FragColor.rgb;}",t.uint16Shader=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={};t.rgbDataUtilities={storedPixelDataToImageData:function(e){var t=e.minPixelValue,r=0,a=0,n=e.width*e.height*4,i=e.width*e.height*3,o=e.getPixelData(),l=new Uint8Array(i);if(t<0)for(;a<n;)l[r++]=o[a++]+-t,l[r++]=o[a++]+-t,l[r++]=o[a++]+-t,a+=1;else for(;a<n;)l[r++]=o[a++],l[r++]=o[a++],l[r++]=o[a++],a+=1;return l}};a.frag="precision mediump float;uniform sampler2D u_image;uniform float ww;uniform float wc;uniform float slope;uniform float intercept;uniform float minPixelValue;uniform int invert;varying vec2 v_texCoord;void main() {vec3 color = texture2D(u_image, v_texCoord).xyz;color = color * 256.0 * slope + intercept;float center0 = wc - 0.5 - minPixelValue;float width0 = max(ww, 1.0);color = (color - center0) / width0 + 0.5;gl_FragColor = vec4(color, 1);if (invert == 1)gl_FragColor.rgb = 1. - gl_FragColor.rgb;}",t.rgbShader=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={};t.int8DataUtilities={storedPixelDataToImageData:function(e){for(var t=e.getPixelData(),r=new Uint8Array(e.width*e.height*2),a=0,n=0;n<t.length;n++)r[a++]=t[n],r[a++]=t[n]<0?0:1;return r}};a.frag="precision mediump float;uniform sampler2D u_image;uniform float ww;uniform float wc;uniform float slope;uniform float intercept;uniform int invert;varying vec2 v_texCoord;void main() {vec4 color = texture2D(u_image, v_texCoord);float intensity = color.r*256.;if (color.a == 0.0)intensity = -intensity;intensity = intensity * slope + intercept;float center0 = wc - 0.5;float width0 = max(ww, 1.0);intensity = (intensity - center0) / width0 + 0.5;intensity = clamp(intensity, 0.0, 1.0);gl_FragColor = vec4(intensity, intensity, intensity, 1.0);if (invert == 1)gl_FragColor.rgb = 1.0 - gl_FragColor.rgb;}",t.int8Shader=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={};t.int16DataUtilities={storedPixelDataToImageData:function(e){for(var t=e.getPixelData(),r=new Uint8Array(e.width*e.height*3),a=0,n=0;n<t.length;n++){var i=Math.abs(t[n]);r[a++]=255&i,r[a++]=i>>8,r[a++]=t[n]<0?0:1}return r}};a.frag="precision mediump float;uniform sampler2D u_image;uniform float ww;uniform float wc;uniform float slope;uniform float intercept;uniform int invert;varying vec2 v_texCoord;void main() {vec4 color = texture2D(u_image, v_texCoord);float intensity = color.r*256.0 + color.g*65536.0;if (color.b == 0.0)intensity = -intensity;intensity = intensity * slope + intercept;float center0 = wc - 0.5;float width0 = max(ww, 1.0);intensity = (intensity - center0) / width0 + 0.5;intensity = clamp(intensity, 0.0, 1.0);gl_FragColor = vec4(intensity, intensity, intensity, 1.0);if (invert == 1)gl_FragColor.rgb = 1.0 - gl_FragColor.rgb;}",t.int16Shader=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dataUtilities=t.shaders=void 0;var a=r(72),n=r(71),i=r(70),o=r(69),l=r(68),u={int16:a.int16Shader,int8:n.int8Shader,rgb:i.rgbShader,uint16:o.uint16Shader,uint8:l.uint8Shader},d={int16:a.int16DataUtilities,int8:n.int8DataUtilities,rgb:i.rgbDataUtilities,uint16:o.uint16DataUtilities,uint8:l.uint8DataUtilities};t.shaders=u,t.dataUtilities=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isWebGLInitialized=void 0,t.getRenderCanvas=function(){return u},t.initRenderer=m,t.render=function(e){var t=e.image;u.width=t.width,u.height=t.height;var r=e.viewport,n=function(e){var t=p(e);if(a.shaders.hasOwnProperty(t))return a.shaders[t];return a.shaders.rgb}(t),o=function(e){var t=i.default.getImageTexture(e.imageId);t||(t=function(e){var t={uint8:d.LUMINANCE,int8:d.LUMINANCE_ALPHA,uint16:d.LUMINANCE_ALPHA,int16:d.RGB,rgb:d.RGB},r=p(e),n=t[r],i=d.createTexture();d.bindTexture(d.TEXTURE_2D,i),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.NEAREST),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,d.NEAREST),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.CLAMP_TO_EDGE),d.pixelStorei(d.UNPACK_ALIGNMENT,1);var o=a.dataUtilities[r].storedPixelDataToImageData(e,e.width,e.height);d.texImage2D(d.TEXTURE_2D,0,n,e.width,e.height,0,n,d.UNSIGNED_BYTE,o);var l=e.width*e.height*{int8:1,uint16:2,int16:3,rgb:3}[r];return{texture:i,sizeInBytes:l}}(e),i.default.putImageTexture(e,t));return t.texture}(t),l={u_resolution:{type:"2f",value:[t.width,t.height]},wc:{type:"f",value:r.voi.windowCenter},ww:{type:"f",value:r.voi.windowWidth},slope:{type:"f",value:t.slope},intercept:{type:"f",value:t.intercept},minPixelValue:{type:"f",value:t.minPixelValue},invert:{type:"i",value:r.invert?1:0}};return function(e,t,r,a,n){for(var i in d.clearColor(1,0,0,1),d.viewport(0,0,a,n),d.clear(d.COLOR_BUFFER_BIT|d.DEPTH_BUFFER_BIT),d.useProgram(e.program),d.bindBuffer(d.ARRAY_BUFFER,s),d.vertexAttribPointer(e.attributes.texCoordLocation,2,d.FLOAT,!1,0,0),d.bindBuffer(d.ARRAY_BUFFER,f),d.vertexAttribPointer(e.attributes.positionLocation,2,d.FLOAT,!1,0,0),t){var o=d.getUniformLocation(e.program,i);if(o){var l=t[i],u=l.type,c=l.value;"i"===u?d.uniform1i(o,c):"f"===u?d.uniform1f(o,c):"2f"===u&&d.uniform2f(o,c[0],c[1])}}(function(e,t,r){e.bufferData(e.ARRAY_BUFFER,new Float32Array([t,r,0,r,t,0,0,0]),e.STATIC_DRAW)})(d,a,n),d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,r),d.drawArrays(d.TRIANGLE_STRIP,0,4)}(n,l,o,t.width,t.height),u},t.isWebGLAvailable=function(){var e={failIfMajorPerformanceCaveat:!0};try{var t=document.createElement("canvas");return Boolean(window.WebGLRenderingContext)&&(t.getContext("webgl",e)||t.getContext("experimental-webgl",e))}catch(e){return!1}};var a=r(73),n=r(67),i=l(r(34)),o=l(r(33));function l(e){return e&&e.__esModule?e:{default:e}}var u=document.createElement("canvas"),d=void 0,s=void 0,f=void 0,c=!1;function m(){!0!==c&&function(e){d=null;try{var t={preserveDrawingBuffer:!0};d=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),e.removeEventListener("webglcontextlost",v,!1),e.addEventListener("webglcontextlost",v,!1),e.removeEventListener("webglcontextrestored",g,!1),e.addEventListener("webglcontextrestored",g,!1)}catch(e){throw new Error("Error creating WebGL context")}d||(console.error("Unable to initialize WebGL. Your browser may not support it."),d=null);return d}(u)&&(f=d.createBuffer(),d.bindBuffer(d.ARRAY_BUFFER,f),d.bufferData(d.ARRAY_BUFFER,new Float32Array([1,1,0,1,1,0,0,0]),d.STATIC_DRAW),s=d.createBuffer(),d.bindBuffer(d.ARRAY_BUFFER,s),d.bufferData(d.ARRAY_BUFFER,new Float32Array([1,1,0,1,1,0,0,0]),d.STATIC_DRAW),function(){for(var e in a.shaders){var t=a.shaders[e];t.attributes={},t.uniforms={},t.vert=n.vertexShader,t.program=(0,o.default)(d,t.vert,t.frag),t.attributes.texCoordLocation=d.getAttribLocation(t.program,"a_texCoord"),d.enableVertexAttribArray(t.attributes.texCoordLocation),t.attributes.positionLocation=d.getAttribLocation(t.program,"a_position"),d.enableVertexAttribArray(t.attributes.positionLocation),t.uniforms.resolutionLocation=d.getUniformLocation(t.program,"u_resolution")}}(),t.isWebGLInitialized=c=!0)}function v(e){e.preventDefault(),console.warn("WebGL Context Lost!")}function g(e){e.preventDefault(),t.isWebGLInitialized=c=!1,i.default.purgeCache(),m()}function p(e){if(e.color)return"rgb";var t=e.getPixelData();return t instanceof Int16Array?"int16":t instanceof Uint16Array?"uint16":t instanceof Int8Array?"int8":"uint8"}t.isWebGLInitialized=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var a=(0,i.default)(),n=e.getPixelData();e.stats.lastGetPixelDataTime=(0,i.default)()-a;var o=e.minPixelValue,l=0,u=0,d=n.length;if(a=(0,i.default)(),o<0)for(;u<d;)r[l++]=t[n[u++]+-o],r[l++]=t[n[u++]+-o],r[l++]=t[n[u++]+-o],r[l++]=n[u++];else for(;u<d;)r[l++]=t[n[u++]],r[l++]=t[n[u++]],r[l++]=t[n[u++]],r[l++]=n[u++];e.stats.lastStoredPixelDataToCanvasImageDataTime=(0,i.default)()-a};var a,n=r(1),i=(a=n)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,a,n){var o=e.maxPixelValue,l=e.minPixelValue,u=Math.min(l,0);if(void 0===e.cachedLut){var d=o-u+1;e.cachedLut={},e.cachedLut.lutArray=new Uint8ClampedArray(d)}var s=e.cachedLut.lutArray,f=(0,i.default)(t,r,n);if(!0===a)for(var c=l;c<=o;c++)s[c+-u]=255-f(c);else for(var m=l;m<=o;m++)s[m+-u]=f(m);return s};var a,n=r(40),i=(a=n)&&a.__esModule?a:{default:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return!e&&!t||!(!e||!t)&&e.id===t.id}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(function(e){return e.voiLUT&&e.voiLUT.lut&&e.voiLUT.lut.length>0||void 0!==e.voi.windowWidth&&void 0!==e.voi.windowCenter}(e))return;var r=t.maxPixelValue*t.slope+t.intercept,a=t.minPixelValue*t.slope+t.intercept,n=r-a,i=(r+a)/2;void 0===e.voi?e.voi={windowWidth:n,windowCenter:i}:(e.voi.windowWidth=n,e.voi.windowCenter=i)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=g(r(8)),n=g(r(25)),i=g(r(6)),o=g(r(24)),l=g(r(23)),u=g(r(37)),d=g(r(22)),s=g(r(21)),f=g(r(20)),c=g(r(17)),m=g(r(19)),v=r(36);function g(e){return e&&e.__esModule?e:{default:e}}t.default={drawImage:a.default,generateLut:n.default,getDefaultViewport:i.default,requestAnimationFrame:o.default,storedPixelDataToCanvasImageData:l.default,storedPixelDataToCanvasImageDataRGBA:u.default,storedPixelDataToCanvasImageDataColorLUT:s.default,storedPixelDataToCanvasImageDataPseudocolorLUT:f.default,storedColorPixelDataToCanvasImageData:d.default,getTransform:c.default,calculateTransform:m.default,Transform:v.Transform}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(8);Object.defineProperty(t,"drawImage",{enumerable:!0,get:function(){return J(a).default}});var n=r(25);Object.defineProperty(t,"generateLut",{enumerable:!0,get:function(){return J(n).default}});var i=r(6);Object.defineProperty(t,"getDefaultViewport",{enumerable:!0,get:function(){return J(i).default}});var o=r(24);Object.defineProperty(t,"requestAnimationFrame",{enumerable:!0,get:function(){return J(o).default}});var l=r(23);Object.defineProperty(t,"storedPixelDataToCanvasImageData",{enumerable:!0,get:function(){return J(l).default}});var u=r(22);Object.defineProperty(t,"storedColorPixelDataToCanvasImageData",{enumerable:!0,get:function(){return J(u).default}});var d=r(21);Object.defineProperty(t,"storedPixelDataToCanvasImageDataColorLUT",{enumerable:!0,get:function(){return J(d).default}});var s=r(20);Object.defineProperty(t,"storedPixelDataToCanvasImageDataPseudocolorLUT",{enumerable:!0,get:function(){return J(s).default}});var f=r(79);Object.defineProperty(t,"internal",{enumerable:!0,get:function(){return J(f).default}});var c=r(16);Object.defineProperty(t,"renderLabelMapImage",{enumerable:!0,get:function(){return c.renderLabelMapImage}});var m=r(12);Object.defineProperty(t,"renderPseudoColorImage",{enumerable:!0,get:function(){return m.renderPseudoColorImage}});var v=r(9);Object.defineProperty(t,"renderColorImage",{enumerable:!0,get:function(){return v.renderColorImage}});var g=r(10);Object.defineProperty(t,"renderGrayscaleImage",{enumerable:!0,get:function(){return g.renderGrayscaleImage}});var p=r(32);Object.defineProperty(t,"renderWebImage",{enumerable:!0,get:function(){return p.renderWebImage}});var h=r(66);Object.defineProperty(t,"canvasToPixel",{enumerable:!0,get:function(){return J(h).default}});var b=r(65);Object.defineProperty(t,"disable",{enumerable:!0,get:function(){return J(b).default}});var w=r(64);Object.defineProperty(t,"displayImage",{enumerable:!0,get:function(){return J(w).default}});var y=r(62);Object.defineProperty(t,"draw",{enumerable:!0,get:function(){return J(y).default}});var E=r(61);Object.defineProperty(t,"drawInvalidated",{enumerable:!0,get:function(){return J(E).default}});var _=r(60);Object.defineProperty(t,"enable",{enumerable:!0,get:function(){return J(_).default}});var I=r(56);Object.defineProperty(t,"getElementData",{enumerable:!0,get:function(){return I.getElementData}}),Object.defineProperty(t,"removeElementData",{enumerable:!0,get:function(){return I.removeElementData}});var P=r(0);Object.defineProperty(t,"getEnabledElement",{enumerable:!0,get:function(){return P.getEnabledElement}}),Object.defineProperty(t,"addEnabledElement",{enumerable:!0,get:function(){return P.addEnabledElement}}),Object.defineProperty(t,"getEnabledElementsByImageId",{enumerable:!0,get:function(){return P.getEnabledElementsByImageId}}),Object.defineProperty(t,"getEnabledElements",{enumerable:!0,get:function(){return P.getEnabledElements}});var x=r(18);Object.defineProperty(t,"addLayer",{enumerable:!0,get:function(){return x.addLayer}}),Object.defineProperty(t,"removeLayer",{enumerable:!0,get:function(){return x.removeLayer}}),Object.defineProperty(t,"getLayer",{enumerable:!0,get:function(){return x.getLayer}}),Object.defineProperty(t,"getLayers",{enumerable:!0,get:function(){return x.getLayers}}),Object.defineProperty(t,"getVisibleLayers",{enumerable:!0,get:function(){return x.getVisibleLayers}}),Object.defineProperty(t,"setActiveLayer",{enumerable:!0,get:function(){return x.setActiveLayer}}),Object.defineProperty(t,"getActiveLayer",{enumerable:!0,get:function(){return x.getActiveLayer}}),Object.defineProperty(t,"setLayerImage",{enumerable:!0,get:function(){return x.setLayerImage}});var C=r(30);Object.defineProperty(t,"fitToWindow",{enumerable:!0,get:function(){return J(C).default}});var T=r(55);Object.defineProperty(t,"getDefaultViewportForImage",{enumerable:!0,get:function(){return J(T).default}});var L=r(54);Object.defineProperty(t,"getImage",{enumerable:!0,get:function(){return J(L).default}});var M=r(53);Object.defineProperty(t,"getPixels",{enumerable:!0,get:function(){return J(M).default}});var O=r(28);Object.defineProperty(t,"getStoredPixels",{enumerable:!0,get:function(){return J(O).default}});var A=r(52);Object.defineProperty(t,"getViewport",{enumerable:!0,get:function(){return J(A).default}});var D=r(51);Object.defineProperty(t,"loadImage",{enumerable:!0,get:function(){return D.loadImage}}),Object.defineProperty(t,"loadAndCacheImage",{enumerable:!0,get:function(){return D.loadAndCacheImage}}),Object.defineProperty(t,"registerImageLoader",{enumerable:!0,get:function(){return D.registerImageLoader}}),Object.defineProperty(t,"registerUnknownImageLoader",{enumerable:!0,get:function(){return D.registerUnknownImageLoader}});var S=r(50);Object.defineProperty(t,"invalidate",{enumerable:!0,get:function(){return J(S).default}});var R=r(49);Object.defineProperty(t,"invalidateImageId",{enumerable:!0,get:function(){return J(R).default}});var j=r(48);Object.defineProperty(t,"pageToPixel",{enumerable:!0,get:function(){return J(j).default}});var U=r(47);Object.defineProperty(t,"pixelToCanvas",{enumerable:!0,get:function(){return J(U).default}});var V=r(46);Object.defineProperty(t,"reset",{enumerable:!0,get:function(){return J(V).default}});var B=r(31);Object.defineProperty(t,"resize",{enumerable:!0,get:function(){return J(B).default}});var G=r(5);Object.defineProperty(t,"setToPixelCoordinateSystem",{enumerable:!0,get:function(){return J(G).default}});var N=r(45);Object.defineProperty(t,"setViewport",{enumerable:!0,get:function(){return J(N).default}});var F=r(4);Object.defineProperty(t,"updateImage",{enumerable:!0,get:function(){return J(F).default}});var W=r(26);Object.defineProperty(t,"pixelDataToFalseColorData",{enumerable:!0,get:function(){return J(W).default}});var z=r(44);Object.defineProperty(t,"rendering",{enumerable:!0,get:function(){return J(z).default}});var k=r(27);Object.defineProperty(t,"imageCache",{enumerable:!0,get:function(){return J(k).default}});var H=r(43);Object.defineProperty(t,"metaData",{enumerable:!0,get:function(){return J(H).default}});var X=r(11);Object.defineProperty(t,"webGL",{enumerable:!0,get:function(){return J(X).default}});var Y=r(7);Object.defineProperty(t,"colors",{enumerable:!0,get:function(){return J(Y).default}});var q=r(42);Object.defineProperty(t,"convertImageToFalseColorImage",{enumerable:!0,get:function(){return q.convertImageToFalseColorImage}}),Object.defineProperty(t,"convertToFalseColorImage",{enumerable:!0,get:function(){return q.convertToFalseColorImage}}),Object.defineProperty(t,"restoreImage",{enumerable:!0,get:function(){return q.restoreImage}});var K=r(3);Object.defineProperty(t,"EVENTS",{enumerable:!0,get:function(){return J(K).default}}),Object.defineProperty(t,"events",{enumerable:!0,get:function(){return K.events}});var Z=r(2);function J(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"triggerEvent",{enumerable:!0,get:function(){return J(Z).default}})}])});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"meteor-node-stubs":{"package.json":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor-node-stubs/package.json                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.name = "meteor-node-stubs";
exports.version = "0.2.11";
exports.main = "index.js";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor-node-stubs/index.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var map = require("./map.json");
var meteorAliases = {};

Object.keys(map).forEach(function (id) {
  if (typeof map[id] === "string") {
    var aliasParts = module.id.split("/");
    aliasParts.pop();
    aliasParts.push("node_modules", map[id]);
    exports[id] = meteorAliases[id + ".js"] =
      aliasParts.join("/");
  } else {
    exports[id] = map[id];
    meteorAliases[id + ".js"] = function(){};
  }
});

if (typeof meteorInstall === "function") {
  meteorInstall({
    // Install the aliases into a node_modules directory one level up from
    // the root directory, so that they do not clutter the namespace
    // available to apps and packages.
    "..": {
      node_modules: meteorAliases
    }
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"map.json":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor-node-stubs/map.json                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = {
  "assert": "assert/",
  "buffer": "buffer/",
  "child_process": null,
  "cluster": null,
  "console": "console-browserify",
  "constants": "constants-browserify",
  "crypto": "../wrappers/crypto.js",
  "dgram": null,
  "dns": null,
  "domain": "domain-browser",
  "events": "events/",
  "fs": null,
  "http": "http-browserify",
  "https": "https-browserify",
  "module": "../wrappers/module.js",
  "net": null,
  "os": "os-browserify/browser.js",
  "path": "path-browserify",
  "process": "process/browser.js",
  "punycode": "punycode/",
  "querystring": "querystring-es3/",
  "readline": null,
  "repl": null,
  "stream": "stream-browserify",
  "_stream_duplex": "readable-stream/duplex.js",
  "_stream_passthrough": "readable-stream/passthrough.js",
  "_stream_readable": "readable-stream/readable.js",
  "_stream_transform": "readable-stream/transform.js",
  "_stream_writable": "readable-stream/writable.js",
  "string_decoder": "string_decoder/",
  "sys": "util/util.js",
  "timers": "timers-browserify",
  "tls": null,
  "tty": "tty-browserify",
  "url": "url/",
  "util": "util/util.js",
  "vm": "vm-browserify",
  "zlib": "browserify-zlib"
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"deps":{"process.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor-node-stubs/deps/process.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require("process/browser.js");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tty.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor-node-stubs/deps/tty.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require("tty-browserify");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"node_modules":{"process":{"browser.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor-node-stubs/node_modules/process/browser.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"tty-browserify":{"package.json":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor-node-stubs/node_modules/tty-browserify/package.json                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.name = "tty-browserify";
exports.version = "0.0.0";
exports.main = "index.js";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor-node-stubs/node_modules/tty-browserify/index.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.isatty = function () { return false; };

function ReadStream() {
  throw new Error('tty.ReadStream is not implemented');
}
exports.ReadStream = ReadStream;

function WriteStream() {
  throw new Error('tty.ReadStream is not implemented');
}
exports.WriteStream = WriteStream;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"core-js":{"modules":{"es6.symbol.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.symbol.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_global.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_global.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_has.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_has.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_descriptors.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_descriptors.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_fails.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_fails.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_export.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_export.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_core.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_core.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_hide.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_hide.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-dp.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_object-dp.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_an-object.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_an-object.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_is-object.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_is-object.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_ie8-dom-define.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_ie8-dom-define.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_dom-create.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_dom-create.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_to-primitive.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_to-primitive.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_property-desc.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_property-desc.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_redefine.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_redefine.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_uid.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_uid.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_ctx.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_ctx.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_a-function.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_a-function.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_meta.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_meta.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_shared.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_shared.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_set-to-string-tag.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_set-to-string-tag.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_wks.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_wks.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_wks-ext.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_wks-ext.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.f = require('./_wks');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_wks-define.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_wks-define.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_library.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_library.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = false;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_enum-keys.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_enum-keys.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-keys.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_object-keys.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-keys-internal.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_object-keys-internal.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_to-iobject.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_to-iobject.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_iobject.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_iobject.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_cof.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_cof.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_defined.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_defined.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_array-includes.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_array-includes.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_to-length.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_to-length.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_to-integer.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_to-integer.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_to-absolute-index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_to-absolute-index.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_shared-key.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_shared-key.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_enum-bug-keys.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_enum-bug-keys.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-gops.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_object-gops.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.f = Object.getOwnPropertySymbols;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-pie.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_object-pie.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.f = {}.propertyIsEnumerable;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_is-array.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_is-array.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-create.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_object-create.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-dps.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_object-dps.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_html.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_html.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var document = require('./_global').document;
module.exports = document && document.documentElement;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-gopn-ext.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_object-gopn-ext.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-gopn.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_object-gopn.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-gopd.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_object-gopd.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.map.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.map.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_collection-strong.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_collection-strong.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_redefine-all.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_redefine-all.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var redefine = require('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_an-instance.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_an-instance.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_for-of.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_for-of.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_iter-call.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_iter-call.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_is-array-iter.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_is-array-iter.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_iterators.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_iterators.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = {};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"core.get-iterator-method.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/core.get-iterator-method.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_classof.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_classof.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_iter-define.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_iter-define.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_iter-create.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_iter-create.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-gpo.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_object-gpo.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_to-object.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_to-object.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_iter-step.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_iter-step.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_set-species.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_set-species.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var global = require('./_global');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_validate-collection.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_validate-collection.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_collection.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_collection.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var global = require('./_global');
var $export = require('./_export');
var redefine = require('./_redefine');
var redefineAll = require('./_redefine-all');
var meta = require('./_meta');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var fails = require('./_fails');
var $iterDetect = require('./_iter-detect');
var setToStringTag = require('./_set-to-string-tag');
var inheritIfRequired = require('./_inherit-if-required');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_iter-detect.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_iter-detect.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_inherit-if-required.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_inherit-if-required.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var isObject = require('./_is-object');
var setPrototypeOf = require('./_set-proto').set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_set-proto.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_set-proto.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.set.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.set.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var SET = 'Set';

// 23.2 Set Objects
module.exports = require('./_collection')(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.iterator.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.iterator.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_string-at.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_string-at.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.is-array.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.is-array.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = require('./_export');

$export($export.S, 'Array', { isArray: require('./_is-array') });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.from.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.from.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var ctx = require('./_ctx');
var $export = require('./_export');
var toObject = require('./_to-object');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var toLength = require('./_to-length');
var createProperty = require('./_create-property');
var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_create-property.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_create-property.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.of.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.of.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var createProperty = require('./_create-property');

// WebKit Array.of isn't generic
$export($export.S + $export.F * require('./_fails')(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.join.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.join.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// 22.1.3.13 Array.prototype.join(separator)
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (require('./_iobject') != Object || !require('./_strict-method')(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_strict-method.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_strict-method.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var fails = require('./_fails');

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.slice.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.slice.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var html = require('./_html');
var cof = require('./_cof');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * require('./_fails')(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.sort.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.sort.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var fails = require('./_fails');
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !require('./_strict-method')($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.for-each.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.for-each.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var $forEach = require('./_array-methods')(0);
var STRICT = require('./_strict-method')([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_array-methods.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_array-methods.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_array-species-create.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_array-species-create.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_array-species-constructor.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_array-species-constructor.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.map.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.map.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var $map = require('./_array-methods')(1);

$export($export.P + $export.F * !require('./_strict-method')([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.filter.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.filter.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var $filter = require('./_array-methods')(2);

$export($export.P + $export.F * !require('./_strict-method')([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.some.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.some.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var $some = require('./_array-methods')(3);

$export($export.P + $export.F * !require('./_strict-method')([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.every.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.every.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var $every = require('./_array-methods')(4);

$export($export.P + $export.F * !require('./_strict-method')([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.reduce.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.reduce.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_array-reduce.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_array-reduce.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var toLength = require('./_to-length');

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.reduce-right.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.reduce-right.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.index-of.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.index-of.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var $indexOf = require('./_array-includes')(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.last-index-of.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.last-index-of.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.copy-within.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.copy-within.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { copyWithin: require('./_array-copy-within') });

require('./_add-to-unscopables')('copyWithin');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_array-copy-within.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_array-copy-within.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_add-to-unscopables.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_add-to-unscopables.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.fill.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.fill.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { fill: require('./_array-fill') });

require('./_add-to-unscopables')('fill');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_array-fill.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_array-fill.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.find.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.find.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.find-index.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.find-index.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.species.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.species.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('./_set-species')('Array');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.array.iterator.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.array.iterator.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.function.bind.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.function.bind.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = require('./_export');

$export($export.P, 'Function', { bind: require('./_bind') });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_bind.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_bind.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var aFunction = require('./_a-function');
var isObject = require('./_is-object');
var invoke = require('./_invoke');
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_invoke.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_invoke.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.function.name.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.function.name.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var dP = require('./_object-dp').f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || require('./_descriptors') && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.function.has-instance.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.function.has-instance.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var isObject = require('./_is-object');
var getPrototypeOf = require('./_object-gpo');
var HAS_INSTANCE = require('./_wks')('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) require('./_object-dp').f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.acosh.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.acosh.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.3 Math.acosh(x)
var $export = require('./_export');
var log1p = require('./_math-log1p');
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_math-log1p.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_math-log1p.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.asinh.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.asinh.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.5 Math.asinh(x)
var $export = require('./_export');
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.atanh.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.atanh.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.7 Math.atanh(x)
var $export = require('./_export');
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.cbrt.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.cbrt.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.9 Math.cbrt(x)
var $export = require('./_export');
var sign = require('./_math-sign');

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_math-sign.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_math-sign.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.clz32.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.clz32.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.11 Math.clz32(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.cosh.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.cosh.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.12 Math.cosh(x)
var $export = require('./_export');
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.expm1.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.expm1.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.14 Math.expm1(x)
var $export = require('./_export');
var $expm1 = require('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_math-expm1.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_math-expm1.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.fround.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.fround.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.16 Math.fround(x)
var $export = require('./_export');

$export($export.S, 'Math', { fround: require('./_math-fround') });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_math-fround.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_math-fround.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.16 Math.fround(x)
var sign = require('./_math-sign');
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.hypot.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.hypot.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = require('./_export');
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.imul.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.imul.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.18 Math.imul(x, y)
var $export = require('./_export');
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * require('./_fails')(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.log10.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.log10.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.21 Math.log10(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.log1p.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.log1p.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.20 Math.log1p(x)
var $export = require('./_export');

$export($export.S, 'Math', { log1p: require('./_math-log1p') });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.log2.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.log2.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.22 Math.log2(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.sign.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.sign.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', { sign: require('./_math-sign') });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.sinh.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.sinh.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.30 Math.sinh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * require('./_fails')(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.tanh.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.tanh.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.33 Math.tanh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.math.trunc.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.math.trunc.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.2.2.34 Math.trunc(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.create.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.create.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.define-property.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.define-property.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.define-properties.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.define-properties.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $export = require('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperties: require('./_object-dps') });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.get-own-property-descriptor.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.get-own-property-descriptor.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-sap.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_object-sap.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.get-prototype-of.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.get-prototype-of.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.keys.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.keys.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.get-own-property-names.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.get-own-property-names.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function () {
  return require('./_object-gopn-ext').f;
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.freeze.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.freeze.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.seal.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.seal.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.prevent-extensions.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.prevent-extensions.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.is-frozen.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.is-frozen.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./_is-object');

require('./_object-sap')('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.is-sealed.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.is-sealed.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.13 Object.isSealed(O)
var isObject = require('./_is-object');

require('./_object-sap')('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.is-extensible.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.is-extensible.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./_is-object');

require('./_object-sap')('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.assign.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.assign.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-assign.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_object-assign.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.is.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.is.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.3.10 Object.is(value1, value2)
var $export = require('./_export');
$export($export.S, 'Object', { is: require('./_same-value') });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_same-value.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_same-value.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.set-prototype-of.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.set-prototype-of.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.object.to-string.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.object.to-string.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = require('./_classof');
var test = {};
test[require('./_wks')('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  require('./_redefine')(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.regexp.constructor.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.regexp.constructor.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var global = require('./_global');
var inheritIfRequired = require('./_inherit-if-required');
var dP = require('./_object-dp').f;
var gOPN = require('./_object-gopn').f;
var isRegExp = require('./_is-regexp');
var $flags = require('./_flags');
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (require('./_descriptors') && (!CORRECT_NEW || require('./_fails')(function () {
  re2[require('./_wks')('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  require('./_redefine')(global, 'RegExp', $RegExp);
}

require('./_set-species')('RegExp');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_is-regexp.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_is-regexp.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object');
var cof = require('./_cof');
var MATCH = require('./_wks')('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_flags.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_flags.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = require('./_an-object');
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.regexp.to-string.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.regexp.to-string.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
require('./es6.regexp.flags');
var anObject = require('./_an-object');
var $flags = require('./_flags');
var DESCRIPTORS = require('./_descriptors');
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  require('./_redefine')(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (require('./_fails')(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.regexp.flags.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.regexp.flags.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 21.2.5.3 get RegExp.prototype.flags()
if (require('./_descriptors') && /./g.flags != 'g') require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.regexp.match.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.regexp.match.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// @@match logic
require('./_fix-re-wks')('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_fix-re-wks.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_fix-re-wks.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var hide = require('./_hide');
var redefine = require('./_redefine');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.regexp.replace.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.regexp.replace.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.regexp.search.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.regexp.search.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// @@search logic
require('./_fix-re-wks')('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.regexp.split.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.regexp.split.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// @@split logic
require('./_fix-re-wks')('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = require('./_is-regexp');
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.from-code-point.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.from-code-point.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $export = require('./_export');
var toAbsoluteIndex = require('./_to-absolute-index');
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.raw.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.raw.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.trim.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.trim.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// 21.1.3.25 String.prototype.trim()
require('./_string-trim')('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_string-trim.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_string-trim.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $export = require('./_export');
var defined = require('./_defined');
var fails = require('./_fails');
var spaces = require('./_string-ws');
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_string-ws.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_string-ws.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.code-point-at.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.code-point-at.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var $at = require('./_string-at')(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.ends-with.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.ends-with.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_string-context.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_string-context.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require('./_is-regexp');
var defined = require('./_defined');

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_fails-is-regexp.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_fails-is-regexp.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var MATCH = require('./_wks')('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.includes.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.includes.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export = require('./_export');
var context = require('./_string-context');
var INCLUDES = 'includes';

$export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.repeat.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.repeat.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $export = require('./_export');

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./_string-repeat')
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_string-repeat.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_string-repeat.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var toInteger = require('./_to-integer');
var defined = require('./_defined');

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.starts-with.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.starts-with.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.anchor.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.anchor.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// B.2.3.2 String.prototype.anchor(name)
require('./_string-html')('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_string-html.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_string-html.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $export = require('./_export');
var fails = require('./_fails');
var defined = require('./_defined');
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.big.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.big.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// B.2.3.3 String.prototype.big()
require('./_string-html')('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.blink.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.blink.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// B.2.3.4 String.prototype.blink()
require('./_string-html')('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.bold.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.bold.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// B.2.3.5 String.prototype.bold()
require('./_string-html')('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.fixed.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.fixed.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// B.2.3.6 String.prototype.fixed()
require('./_string-html')('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.fontcolor.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.fontcolor.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
require('./_string-html')('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.fontsize.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.fontsize.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// B.2.3.8 String.prototype.fontsize(size)
require('./_string-html')('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.italics.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.italics.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// B.2.3.9 String.prototype.italics()
require('./_string-html')('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.link.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.link.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// B.2.3.10 String.prototype.link(url)
require('./_string-html')('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.small.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.small.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// B.2.3.11 String.prototype.small()
require('./_string-html')('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.strike.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.strike.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// B.2.3.12 String.prototype.strike()
require('./_string-html')('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.sub.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.sub.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// B.2.3.13 String.prototype.sub()
require('./_string-html')('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.string.sup.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.string.sup.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// B.2.3.14 String.prototype.sup()
require('./_string-html')('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.weak-map.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.weak-map.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var each = require('./_array-methods')(0);
var redefine = require('./_redefine');
var meta = require('./_meta');
var assign = require('./_object-assign');
var weak = require('./_collection-weak');
var isObject = require('./_is-object');
var fails = require('./_fails');
var validate = require('./_validate-collection');
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_collection-weak.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_collection-weak.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var redefineAll = require('./_redefine-all');
var getWeak = require('./_meta').getWeak;
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var createArrayMethod = require('./_array-methods');
var $has = require('./_has');
var validate = require('./_validate-collection');
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"web.dom.iterable.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/web.dom.iterable.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $iterators = require('./es6.array.iterator');
var getKeys = require('./_object-keys');
var redefine = require('./_redefine');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var wks = require('./_wks');
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.weak-set.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.weak-set.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var weak = require('./_collection-weak');
var validate = require('./_validate-collection');
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
require('./_collection')(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es7.array.includes.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es7.array.includes.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export = require('./_export');
var $includes = require('./_array-includes')(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')('includes');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es7.array.flat-map.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es7.array.flat-map.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = require('./_export');
var flattenIntoArray = require('./_flatten-into-array');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var aFunction = require('./_a-function');
var arraySpeciesCreate = require('./_array-species-create');

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

require('./_add-to-unscopables')('flatMap');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_flatten-into-array.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_flatten-into-array.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = require('./_is-array');
var isObject = require('./_is-object');
var toLength = require('./_to-length');
var ctx = require('./_ctx');
var IS_CONCAT_SPREADABLE = require('./_wks')('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es7.array.flatten.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es7.array.flatten.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = require('./_export');
var flattenIntoArray = require('./_flatten-into-array');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var toInteger = require('./_to-integer');
var arraySpeciesCreate = require('./_array-species-create');

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

require('./_add-to-unscopables')('flatten');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es7.object.get-own-property-descriptors.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es7.object.get-own-property-descriptors.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = require('./_export');
var ownKeys = require('./_own-keys');
var toIObject = require('./_to-iobject');
var gOPD = require('./_object-gopd');
var createProperty = require('./_create-property');

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_own-keys.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_own-keys.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// all object keys, includes non-enumerable and symbols
var gOPN = require('./_object-gopn');
var gOPS = require('./_object-gops');
var anObject = require('./_an-object');
var Reflect = require('./_global').Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es7.object.values.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es7.object.values.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-to-array.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_object-to-array.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var getKeys = require('./_object-keys');
var toIObject = require('./_to-iobject');
var isEnum = require('./_object-pie').f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es7.object.entries.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es7.object.entries.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es7.object.define-getter.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es7.object.define-getter.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var aFunction = require('./_a-function');
var $defineProperty = require('./_object-dp');

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-forced-pam.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_object-forced-pam.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// Forced replacement prototype accessors methods
module.exports = require('./_library') || !require('./_fails')(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete require('./_global')[K];
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es7.object.define-setter.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es7.object.define-setter.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var aFunction = require('./_a-function');
var $defineProperty = require('./_object-dp');

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es7.object.lookup-getter.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es7.object.lookup-getter.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');
var getPrototypeOf = require('./_object-gpo');
var getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es7.object.lookup-setter.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es7.object.lookup-setter.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');
var getPrototypeOf = require('./_object-gpo');
var getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es7.string.pad-start.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es7.string.pad-start.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_string-pad.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_string-pad.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require('./_to-length');
var repeat = require('./_string-repeat');
var defined = require('./_defined');

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_user-agent.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_user-agent.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es7.string.pad-end.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es7.string.pad-end.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.number.epsilon.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.number.epsilon.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.1.2.1 Number.EPSILON
var $export = require('./_export');

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.number.is-finite.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.number.is-finite.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.1.2.2 Number.isFinite(number)
var $export = require('./_export');
var _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.number.is-integer.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.number.is-integer.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.1.2.3 Number.isInteger(number)
var $export = require('./_export');

$export($export.S, 'Number', { isInteger: require('./_is-integer') });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_is-integer.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_is-integer.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object');
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.number.is-nan.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.number.is-nan.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.number.is-safe-integer.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.number.is-safe-integer.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.1.2.5 Number.isSafeInteger(number)
var $export = require('./_export');
var isInteger = require('./_is-integer');
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.number.max-safe-integer.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.number.max-safe-integer.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.number.min-safe-integer.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.number.min-safe-integer.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.number.parse-float.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.number.parse-float.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_parse-float.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_parse-float.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $parseFloat = require('./_global').parseFloat;
var $trim = require('./_string-trim').trim;

module.exports = 1 / $parseFloat(require('./_string-ws') + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.number.parse-int.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.number.parse-int.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_parse-int.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_parse-int.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var $parseInt = require('./_global').parseInt;
var $trim = require('./_string-trim').trim;
var ws = require('./_string-ws');
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.typed.uint8-array.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.typed.uint8-array.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_typed-array.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_typed-array.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
if (require('./_descriptors')) {
  var LIBRARY = require('./_library');
  var global = require('./_global');
  var fails = require('./_fails');
  var $export = require('./_export');
  var $typed = require('./_typed');
  var $buffer = require('./_typed-buffer');
  var ctx = require('./_ctx');
  var anInstance = require('./_an-instance');
  var propertyDesc = require('./_property-desc');
  var hide = require('./_hide');
  var redefineAll = require('./_redefine-all');
  var toInteger = require('./_to-integer');
  var toLength = require('./_to-length');
  var toIndex = require('./_to-index');
  var toAbsoluteIndex = require('./_to-absolute-index');
  var toPrimitive = require('./_to-primitive');
  var has = require('./_has');
  var classof = require('./_classof');
  var isObject = require('./_is-object');
  var toObject = require('./_to-object');
  var isArrayIter = require('./_is-array-iter');
  var create = require('./_object-create');
  var getPrototypeOf = require('./_object-gpo');
  var gOPN = require('./_object-gopn').f;
  var getIterFn = require('./core.get-iterator-method');
  var uid = require('./_uid');
  var wks = require('./_wks');
  var createArrayMethod = require('./_array-methods');
  var createArrayIncludes = require('./_array-includes');
  var speciesConstructor = require('./_species-constructor');
  var ArrayIterators = require('./es6.array.iterator');
  var Iterators = require('./_iterators');
  var $iterDetect = require('./_iter-detect');
  var setSpecies = require('./_set-species');
  var arrayFill = require('./_array-fill');
  var arrayCopyWithin = require('./_array-copy-within');
  var $DP = require('./_object-dp');
  var $GOPD = require('./_object-gopd');
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_typed.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_typed.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var global = require('./_global');
var hide = require('./_hide');
var uid = require('./_uid');
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_typed-buffer.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_typed-buffer.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';
var global = require('./_global');
var DESCRIPTORS = require('./_descriptors');
var LIBRARY = require('./_library');
var $typed = require('./_typed');
var hide = require('./_hide');
var redefineAll = require('./_redefine-all');
var fails = require('./_fails');
var anInstance = require('./_an-instance');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var toIndex = require('./_to-index');
var gOPN = require('./_object-gopn').f;
var dP = require('./_object-dp').f;
var arrayFill = require('./_array-fill');
var setToStringTag = require('./_set-to-string-tag');
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_to-index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_to-index.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_species-constructor.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/_species-constructor.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es6.typed.uint32-array.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/modules/es6.typed.uint32-array.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('./_typed-array')('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"es6":{"array.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/es6/array.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('../modules/es6.string.iterator');
require('../modules/es6.array.is-array');
require('../modules/es6.array.from');
require('../modules/es6.array.of');
require('../modules/es6.array.join');
require('../modules/es6.array.slice');
require('../modules/es6.array.sort');
require('../modules/es6.array.for-each');
require('../modules/es6.array.map');
require('../modules/es6.array.filter');
require('../modules/es6.array.some');
require('../modules/es6.array.every');
require('../modules/es6.array.reduce');
require('../modules/es6.array.reduce-right');
require('../modules/es6.array.index-of');
require('../modules/es6.array.last-index-of');
require('../modules/es6.array.copy-within');
require('../modules/es6.array.fill');
require('../modules/es6.array.find');
require('../modules/es6.array.find-index');
require('../modules/es6.array.species');
require('../modules/es6.array.iterator');
module.exports = require('../modules/_core').Array;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"function.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/es6/function.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('../modules/es6.function.bind');
require('../modules/es6.function.name');
require('../modules/es6.function.has-instance');
module.exports = require('../modules/_core').Function;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"math.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/es6/math.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('../modules/es6.math.acosh');
require('../modules/es6.math.asinh');
require('../modules/es6.math.atanh');
require('../modules/es6.math.cbrt');
require('../modules/es6.math.clz32');
require('../modules/es6.math.cosh');
require('../modules/es6.math.expm1');
require('../modules/es6.math.fround');
require('../modules/es6.math.hypot');
require('../modules/es6.math.imul');
require('../modules/es6.math.log10');
require('../modules/es6.math.log1p');
require('../modules/es6.math.log2');
require('../modules/es6.math.sign');
require('../modules/es6.math.sinh');
require('../modules/es6.math.tanh');
require('../modules/es6.math.trunc');
module.exports = require('../modules/_core').Math;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"object.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/es6/object.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('../modules/es6.symbol');
require('../modules/es6.object.create');
require('../modules/es6.object.define-property');
require('../modules/es6.object.define-properties');
require('../modules/es6.object.get-own-property-descriptor');
require('../modules/es6.object.get-prototype-of');
require('../modules/es6.object.keys');
require('../modules/es6.object.get-own-property-names');
require('../modules/es6.object.freeze');
require('../modules/es6.object.seal');
require('../modules/es6.object.prevent-extensions');
require('../modules/es6.object.is-frozen');
require('../modules/es6.object.is-sealed');
require('../modules/es6.object.is-extensible');
require('../modules/es6.object.assign');
require('../modules/es6.object.is');
require('../modules/es6.object.set-prototype-of');
require('../modules/es6.object.to-string');

module.exports = require('../modules/_core').Object;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"regexp.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/es6/regexp.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('../modules/es6.regexp.constructor');
require('../modules/es6.regexp.to-string');
require('../modules/es6.regexp.flags');
require('../modules/es6.regexp.match');
require('../modules/es6.regexp.replace');
require('../modules/es6.regexp.search');
require('../modules/es6.regexp.split');
module.exports = require('../modules/_core').RegExp;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"string.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/es6/string.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('../modules/es6.string.from-code-point');
require('../modules/es6.string.raw');
require('../modules/es6.string.trim');
require('../modules/es6.string.iterator');
require('../modules/es6.string.code-point-at');
require('../modules/es6.string.ends-with');
require('../modules/es6.string.includes');
require('../modules/es6.string.repeat');
require('../modules/es6.string.starts-with');
require('../modules/es6.string.anchor');
require('../modules/es6.string.big');
require('../modules/es6.string.blink');
require('../modules/es6.string.bold');
require('../modules/es6.string.fixed');
require('../modules/es6.string.fontcolor');
require('../modules/es6.string.fontsize');
require('../modules/es6.string.italics');
require('../modules/es6.string.link');
require('../modules/es6.string.small');
require('../modules/es6.string.strike');
require('../modules/es6.string.sub');
require('../modules/es6.string.sup');
require('../modules/es6.regexp.match');
require('../modules/es6.regexp.replace');
require('../modules/es6.regexp.search');
require('../modules/es6.regexp.split');
module.exports = require('../modules/_core').String;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"weak-map.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/es6/weak-map.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('../modules/es6.object.to-string');
require('../modules/es6.array.iterator');
require('../modules/es6.weak-map');
module.exports = require('../modules/_core').WeakMap;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"weak-set.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/es6/weak-set.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('../modules/es6.object.to-string');
require('../modules/web.dom.iterable');
require('../modules/es6.weak-set');
module.exports = require('../modules/_core').WeakSet;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"es7":{"array.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/es7/array.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('../modules/es7.array.includes');
require('../modules/es7.array.flat-map');
require('../modules/es7.array.flatten');
module.exports = require('../modules/_core').Array;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"object.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/es7/object.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('../modules/es7.object.get-own-property-descriptors');
require('../modules/es7.object.values');
require('../modules/es7.object.entries');
require('../modules/es7.object.define-getter');
require('../modules/es7.object.define-setter');
require('../modules/es7.object.lookup-getter');
require('../modules/es7.object.lookup-setter');
module.exports = require('../modules/_core').Object;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("/node_modules/meteor/modules/client.js");

/* Exports */
Package._define("modules", exports, {
  meteorInstall: meteorInstall
});

})();
