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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Retry = Package.retry.Retry;
var DDP = Package['ddp-client'].DDP;
var Mongo = Package.mongo.Mongo;
var HTTP = Package.http.HTTP;
var Random = Package.random.Random;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var ClientVersions, Autoupdate;

var require = meteorInstall({"node_modules":{"meteor":{"autoupdate":{"autoupdate_cordova.js":function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/autoupdate/autoupdate_cordova.js                               //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
var autoupdateVersionCordova = __meteor_runtime_config__.autoupdateVersionCordova || "unknown"; // The collection of acceptable client versions.

ClientVersions = new Mongo.Collection("meteor_autoupdate_clientVersions");
Autoupdate = {};

Autoupdate.newClientAvailable = function () {
  return !!ClientVersions.findOne({
    _id: 'version-cordova',
    version: {
      $ne: autoupdateVersionCordova
    }
  });
};

var retry = new Retry({
  // Unlike the stream reconnect use of Retry, which we want to be instant
  // in normal operation, this is a wacky failure. We don't want to retry
  // right away, we can start slowly.
  //
  // A better way than timeconstants here might be to use the knowledge
  // of when we reconnect to help trigger these retries. Typically, the
  // server fixing code will result in a restart and reconnect, but
  // potentially the subscription could have a transient error.
  minCount: 0,
  // don't do any immediate retries
  baseTimeout: 30 * 1000 // start with 30s

});
var failures = 0;

Autoupdate._retrySubscription = function () {
  var appId = __meteor_runtime_config__.appId;
  Meteor.subscribe("meteor_autoupdate_clientVersions", appId, {
    onError: function (error) {
      console.log("autoupdate subscription failed:", error);
      failures++;
      retry.retryLater(failures, function () {
        // Just retry making the subscription, don't reload the whole
        // page. While reloading would catch more cases (for example,
        // the server went back a version and is now doing old-style hot
        // code push), it would also be more prone to reload loops,
        // which look really bad to the user. Just retrying the
        // subscription over DDP means it is at least possible to fix by
        // updating the server.
        Autoupdate._retrySubscription();
      });
    },
    onReady: function () {
      if (Package.reload) {
        var checkNewVersionDocument = function (doc) {
          var self = this;

          if (doc.version !== autoupdateVersionCordova) {
            newVersionAvailable();
          }
        };

        var handle = ClientVersions.find({
          _id: 'version-cordova'
        }).observe({
          added: checkNewVersionDocument,
          changed: checkNewVersionDocument
        });
      }
    }
  });
};

Meteor.startup(function () {
  WebAppLocalServer.onNewVersionReady(function () {
    if (Package.reload) {
      Package.reload.Reload._reload();
    }
  });

  Autoupdate._retrySubscription();
});

var newVersionAvailable = function () {
  WebAppLocalServer.checkForUpdates();
};
/////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("/node_modules/meteor/autoupdate/autoupdate_cordova.js");

/* Exports */
Package._define("autoupdate", {
  Autoupdate: Autoupdate
});

})();
