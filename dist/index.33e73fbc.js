// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bVE9D":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0800fe4833e73fbc";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"a4oBN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mainJs = require("../../.build/main.js");
parcelHelpers.exportAll(_mainJs, exports);

},{"../../.build/main.js":"ksBEn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ksBEn":[function(require,module,exports) {
// Transcrypt'ed from Python, 2023-04-23 01:19:31
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "modal", ()=>modal);
parcelHelpers.export(exports, "toast", ()=>toast);
var _orgTranscryptRuntimeJs = require("./org.transcrypt.__runtime__.js");
var _componentsToastJs = require("./components.toast.js");
var _componentsModalJs = require("./components.modal.js");
var __name__ = "__main__";
var modal = _componentsModalJs;
var toast = _componentsToastJs;

},{"./org.transcrypt.__runtime__.js":"aJoBq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./components.modal.js":"heBT1","./components.toast.js":"6IyFK"}],"aJoBq":[function(require,module,exports) {
// Transcrypt'ed from Python, 2023-04-23 01:00:50
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__envir__", ()=>__envir__);
parcelHelpers.export(exports, "__nest__", ()=>__nest__);
parcelHelpers.export(exports, "__init__", ()=>__init__);
parcelHelpers.export(exports, "__get__", ()=>__get__);
parcelHelpers.export(exports, "__getcm__", ()=>__getcm__);
parcelHelpers.export(exports, "__getsm__", ()=>__getsm__);
parcelHelpers.export(exports, "py_metatype", ()=>py_metatype);
parcelHelpers.export(exports, "object", ()=>object);
parcelHelpers.export(exports, "__class__", ()=>__class__);
parcelHelpers.export(exports, "__pragma__", ()=>__pragma__);
parcelHelpers.export(exports, "__call__", ()=>__call__);
parcelHelpers.export(exports, "__kwargtrans__", ()=>__kwargtrans__);
parcelHelpers.export(exports, "__super__", ()=>__super__);
parcelHelpers.export(exports, "property", ()=>property);
parcelHelpers.export(exports, "__setproperty__", ()=>__setproperty__);
parcelHelpers.export(exports, "assert", ()=>assert);
parcelHelpers.export(exports, "__mergekwargtrans__", ()=>__mergekwargtrans__);
parcelHelpers.export(exports, "__mergefields__", ()=>__mergefields__);
parcelHelpers.export(exports, "__withblock__", ()=>__withblock__);
parcelHelpers.export(exports, "dir", ()=>dir);
parcelHelpers.export(exports, "setattr", ()=>setattr);
parcelHelpers.export(exports, "getattr", ()=>getattr);
parcelHelpers.export(exports, "hasattr", ()=>hasattr);
parcelHelpers.export(exports, "delattr", ()=>delattr);
parcelHelpers.export(exports, "__in__", ()=>__in__);
parcelHelpers.export(exports, "__specialattrib__", ()=>__specialattrib__);
parcelHelpers.export(exports, "len", ()=>len);
parcelHelpers.export(exports, "__i__", ()=>__i__);
parcelHelpers.export(exports, "__k__", ()=>__k__);
parcelHelpers.export(exports, "__t__", ()=>__t__);
parcelHelpers.export(exports, "float", ()=>float);
parcelHelpers.export(exports, "int", ()=>int);
parcelHelpers.export(exports, "bool", ()=>bool);
parcelHelpers.export(exports, "py_typeof", ()=>py_typeof);
parcelHelpers.export(exports, "issubclass", ()=>issubclass);
parcelHelpers.export(exports, "isinstance", ()=>isinstance);
parcelHelpers.export(exports, "callable", ()=>callable);
parcelHelpers.export(exports, "repr", ()=>repr);
parcelHelpers.export(exports, "chr", ()=>chr);
parcelHelpers.export(exports, "ord", ()=>ord);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "abs", ()=>abs);
parcelHelpers.export(exports, "round", ()=>round);
parcelHelpers.export(exports, "__jsUsePyNext__", ()=>__jsUsePyNext__);
parcelHelpers.export(exports, "__pyUseJsNext__", ()=>__pyUseJsNext__);
parcelHelpers.export(exports, "py_iter", ()=>py_iter);
parcelHelpers.export(exports, "py_next", ()=>py_next);
parcelHelpers.export(exports, "__PyIterator__", ()=>__PyIterator__);
parcelHelpers.export(exports, "__JsIterator__", ()=>__JsIterator__);
parcelHelpers.export(exports, "py_reversed", ()=>py_reversed);
parcelHelpers.export(exports, "zip", ()=>zip);
parcelHelpers.export(exports, "range", ()=>range);
parcelHelpers.export(exports, "any", ()=>any);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "sum", ()=>sum);
parcelHelpers.export(exports, "enumerate", ()=>enumerate);
parcelHelpers.export(exports, "copy", ()=>copy);
parcelHelpers.export(exports, "deepcopy", ()=>deepcopy);
parcelHelpers.export(exports, "list", ()=>list);
parcelHelpers.export(exports, "tuple", ()=>tuple);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "bytearray", ()=>bytearray);
parcelHelpers.export(exports, "bytes", ()=>bytes);
parcelHelpers.export(exports, "str", ()=>str);
parcelHelpers.export(exports, "dict", ()=>dict);
parcelHelpers.export(exports, "__jsmod__", ()=>__jsmod__);
parcelHelpers.export(exports, "__mod__", ()=>__mod__);
parcelHelpers.export(exports, "__pow__", ()=>__pow__);
parcelHelpers.export(exports, "pow", ()=>pow);
parcelHelpers.export(exports, "__neg__", ()=>__neg__);
parcelHelpers.export(exports, "__matmul__", ()=>__matmul__);
parcelHelpers.export(exports, "__mul__", ()=>__mul__);
parcelHelpers.export(exports, "__truediv__", ()=>__truediv__);
parcelHelpers.export(exports, "__floordiv__", ()=>__floordiv__);
parcelHelpers.export(exports, "__add__", ()=>__add__);
parcelHelpers.export(exports, "__sub__", ()=>__sub__);
parcelHelpers.export(exports, "__lshift__", ()=>__lshift__);
parcelHelpers.export(exports, "__rshift__", ()=>__rshift__);
parcelHelpers.export(exports, "__or__", ()=>__or__);
parcelHelpers.export(exports, "__xor__", ()=>__xor__);
parcelHelpers.export(exports, "__and__", ()=>__and__);
parcelHelpers.export(exports, "__eq__", ()=>__eq__);
parcelHelpers.export(exports, "__ne__", ()=>__ne__);
parcelHelpers.export(exports, "__lt__", ()=>__lt__);
parcelHelpers.export(exports, "__le__", ()=>__le__);
parcelHelpers.export(exports, "__gt__", ()=>__gt__);
parcelHelpers.export(exports, "__ge__", ()=>__ge__);
parcelHelpers.export(exports, "__imatmul__", ()=>__imatmul__);
parcelHelpers.export(exports, "__ipow__", ()=>__ipow__);
parcelHelpers.export(exports, "__ijsmod__", ()=>__ijsmod__);
parcelHelpers.export(exports, "__imod__", ()=>__imod__);
parcelHelpers.export(exports, "__imul__", ()=>__imul__);
parcelHelpers.export(exports, "__idiv__", ()=>__idiv__);
parcelHelpers.export(exports, "__iadd__", ()=>__iadd__);
parcelHelpers.export(exports, "__isub__", ()=>__isub__);
parcelHelpers.export(exports, "__ilshift__", ()=>__ilshift__);
parcelHelpers.export(exports, "__irshift__", ()=>__irshift__);
parcelHelpers.export(exports, "__ior__", ()=>__ior__);
parcelHelpers.export(exports, "__ixor__", ()=>__ixor__);
parcelHelpers.export(exports, "__iand__", ()=>__iand__);
parcelHelpers.export(exports, "__getitem__", ()=>__getitem__);
parcelHelpers.export(exports, "__setitem__", ()=>__setitem__);
parcelHelpers.export(exports, "__getslice__", ()=>__getslice__);
parcelHelpers.export(exports, "__setslice__", ()=>__setslice__);
parcelHelpers.export(exports, "BaseException", ()=>BaseException);
parcelHelpers.export(exports, "Exception", ()=>Exception);
parcelHelpers.export(exports, "IterableError", ()=>IterableError);
parcelHelpers.export(exports, "StopIteration", ()=>StopIteration);
parcelHelpers.export(exports, "ValueError", ()=>ValueError);
parcelHelpers.export(exports, "KeyError", ()=>KeyError);
parcelHelpers.export(exports, "AssertionError", ()=>AssertionError);
parcelHelpers.export(exports, "NotImplementedError", ()=>NotImplementedError);
parcelHelpers.export(exports, "IndexError", ()=>IndexError);
parcelHelpers.export(exports, "AttributeError", ()=>AttributeError);
parcelHelpers.export(exports, "py_TypeError", ()=>py_TypeError);
parcelHelpers.export(exports, "Warning", ()=>Warning);
parcelHelpers.export(exports, "UserWarning", ()=>UserWarning);
parcelHelpers.export(exports, "DeprecationWarning", ()=>DeprecationWarning);
parcelHelpers.export(exports, "RuntimeWarning", ()=>RuntimeWarning);
parcelHelpers.export(exports, "__sort__", ()=>__sort__);
parcelHelpers.export(exports, "sorted", ()=>sorted);
parcelHelpers.export(exports, "map", ()=>map);
parcelHelpers.export(exports, "filter", ()=>filter);
parcelHelpers.export(exports, "divmod", ()=>divmod);
parcelHelpers.export(exports, "__Terminal__", ()=>__Terminal__);
parcelHelpers.export(exports, "__terminal__", ()=>__terminal__);
parcelHelpers.export(exports, "print", ()=>print);
parcelHelpers.export(exports, "input", ()=>input);
var __name__ = "org.transcrypt.__runtime__";
var __envir__ = {};
__envir__.interpreter_name = "python";
__envir__.transpiler_name = "transcrypt";
__envir__.executor_name = __envir__.transpiler_name;
__envir__.transpiler_version = "3.9.0";
function __nest__(headObject, tailNames, value) {
    var current = headObject;
    if (tailNames != "") {
        var tailChain = tailNames.split(".");
        var firstNewIndex = tailChain.length;
        for(var index = 0; index < tailChain.length; index++){
            if (!current.hasOwnProperty(tailChain[index])) {
                firstNewIndex = index;
                break;
            }
            current = current[tailChain[index]];
        }
        for(var index = firstNewIndex; index < tailChain.length; index++){
            current[tailChain[index]] = {};
            current = current[tailChain[index]];
        }
    }
    for (let attrib of Object.getOwnPropertyNames(value))Object.defineProperty(current, attrib, {
        get () {
            return value[attrib];
        },
        enumerable: true,
        configurable: true
    });
}
function __init__(module) {
    if (!module.__inited__) {
        module.__all__.__init__(module.__all__);
        module.__inited__ = true;
    }
    return module.__all__;
}
function __get__(aThis, func, quotedFuncName) {
    if (aThis) {
        if (aThis.hasOwnProperty("__class__") || typeof aThis == "string" || aThis instanceof String) {
            if (quotedFuncName) Object.defineProperty(aThis, quotedFuncName, {
                value: function() {
                    var args = [].slice.apply(arguments);
                    return func.apply(null, [
                        aThis
                    ].concat(args));
                },
                writable: true,
                enumerable: true,
                configurable: true
            });
            return function() {
                var args = [].slice.apply(arguments);
                return func.apply(null, [
                    aThis.__proxy__ ? aThis.__proxy__ : aThis
                ].concat(args));
            };
        } else return func;
    } else return func;
}
function __getcm__(aThis, func, quotedFuncName) {
    if (aThis.hasOwnProperty("__class__")) return function() {
        var args = [].slice.apply(arguments);
        return func.apply(null, [
            aThis.__class__
        ].concat(args));
    };
    else return function() {
        var args = [].slice.apply(arguments);
        return func.apply(null, [
            aThis
        ].concat(args));
    };
}
function __getsm__(aThis, func, quotedFuncName) {
    return func;
}
var py_metatype = {
    __name__: "type",
    __bases__: [],
    __new__: function(meta, name, bases, attribs) {
        var cls = function() {
            var args = [].slice.apply(arguments);
            return cls.__new__(args);
        };
        for(var index = bases.length - 1; index >= 0; index--){
            var base = bases[index];
            for(var attrib in base){
                var descrip = Object.getOwnPropertyDescriptor(base, attrib);
                if (descrip == null) continue;
                Object.defineProperty(cls, attrib, descrip);
            }
            for (let symbol of Object.getOwnPropertySymbols(base)){
                let descrip = Object.getOwnPropertyDescriptor(base, symbol);
                Object.defineProperty(cls, symbol, descrip);
            }
        }
        cls.__metaclass__ = meta;
        cls.__name__ = name.startsWith("py_") ? name.slice(3) : name;
        cls.__bases__ = bases;
        for(var attrib in attribs){
            var descrip = Object.getOwnPropertyDescriptor(attribs, attrib);
            Object.defineProperty(cls, attrib, descrip);
        }
        for (let symbol of Object.getOwnPropertySymbols(attribs)){
            let descrip = Object.getOwnPropertyDescriptor(attribs, symbol);
            Object.defineProperty(cls, symbol, descrip);
        }
        return cls;
    }
};
py_metatype.__metaclass__ = py_metatype;
var object = {
    __init__: function(self) {},
    __metaclass__: py_metatype,
    __name__: "object",
    __bases__: [],
    __new__: function(args) {
        var instance = Object.create(this, {
            __class__: {
                value: this,
                enumerable: true
            }
        });
        if ("__getattr__" in this || "__setattr__" in this) {
            instance.__proxy__ = new Proxy(instance, {
                get: function(target, name) {
                    let result = target[name];
                    if (result == undefined) return target.__getattr__(name);
                    else return result;
                },
                set: function(target, name, value) {
                    try {
                        target.__setattr__(name, value);
                    } catch (exception) {
                        target[name] = value;
                    }
                    return true;
                }
            });
            instance = instance.__proxy__;
        }
        this.__init__.apply(null, [
            instance
        ].concat(args));
        return instance;
    }
};
function __class__(name, bases, attribs, meta) {
    if (meta === undefined) meta = bases[0].__metaclass__;
    return meta.__new__(meta, name, bases, attribs);
}
function __pragma__() {}
function __call__() {
    var args = [].slice.apply(arguments);
    if (typeof args[0] == "object" && "__call__" in args[0]) return args[0].__call__.apply(args[1], args.slice(2));
    else return args[0].apply(args[1], args.slice(2));
}
__envir__.executor_name = __envir__.transpiler_name;
var __main__ = {
    __file__: ""
};
var __except__ = null;
function __kwargtrans__(anObject) {
    anObject.__kwargtrans__ = null;
    anObject.constructor = Object;
    return anObject;
}
function __super__(aClass, methodName) {
    for (let base of aClass.__bases__){
        if (methodName in base) return base[methodName];
    }
    throw new Exception("Superclass method not found");
}
function property(getter, setter) {
    if (!setter) setter = function() {};
    return {
        get: function() {
            return getter(this);
        },
        set: function(value) {
            setter(this, value);
        },
        enumerable: true
    };
}
function __setproperty__(anObject, name, descriptor) {
    if (!anObject.hasOwnProperty(name)) Object.defineProperty(anObject, name, descriptor);
}
function assert(condition, message) {
    if (!condition) throw AssertionError(message, new Error());
}
function __mergekwargtrans__(object0, object1) {
    var result = {};
    for(var attrib in object0)result[attrib] = object0[attrib];
    for(var attrib in object1)result[attrib] = object1[attrib];
    return result;
}
function __mergefields__(targetClass, sourceClass) {
    let fieldNames = [
        "__reprfields__",
        "__comparefields__",
        "__initfields__"
    ];
    if (sourceClass[fieldNames[0]]) {
        if (targetClass[fieldNames[0]]) for (let fieldName of fieldNames)targetClass[fieldName] = new Set([
            ...targetClass[fieldName],
            ...sourceClass[fieldName]
        ]);
        else for (let fieldName of fieldNames)targetClass[fieldName] = new Set(sourceClass[fieldName]);
    }
}
function __withblock__(manager, statements) {
    if (hasattr(manager, "__enter__")) try {
        manager.__enter__();
        statements();
        manager.__exit__();
    } catch (exception) {
        if (!manager.__exit__(exception.name, exception, exception.stack)) throw exception;
    }
    else {
        statements();
        manager.close();
    }
}
function dir(obj1) {
    var aList = [];
    for(var aKey in obj1)aList.push(aKey.startsWith("py_") ? aKey.slice(3) : aKey);
    aList.sort();
    return aList;
}
function setattr(obj1, name, value) {
    obj1[name] = value;
}
function getattr(obj1, name) {
    return name in obj1 ? obj1[name] : obj1["py_" + name];
}
function hasattr(obj1, name) {
    try {
        return name in obj1 || "py_" + name in obj1;
    } catch (exception) {
        return false;
    }
}
function delattr(obj1, name) {
    if (name in obj1) delete obj1[name];
    else delete obj1["py_" + name];
}
function __in__(element, container) {
    if (container === undefined || container === null) return false;
    if (container.__contains__ instanceof Function) return container.__contains__(element);
    else return container.indexOf ? container.indexOf(element) > -1 : container.hasOwnProperty(element);
}
function __specialattrib__(attrib) {
    return attrib.startswith("__") && attrib.endswith("__") || attrib == "constructor" || attrib.startswith("py_");
}
function len(anObject) {
    if (anObject === undefined || anObject === null) return 0;
    if (anObject.__len__ instanceof Function) return anObject.__len__();
    if (anObject.length !== undefined) return anObject.length;
    var length = 0;
    for(var attr in anObject)if (!__specialattrib__(attr)) length++;
    return length;
}
function __i__(any) {
    return py_typeof(any) == dict ? any.py_keys() : any;
}
function __k__(keyed, key) {
    var result = keyed[key];
    if (typeof result == "undefined") {
        if (keyed instanceof Array) {
            if (key == +key && key >= 0 && keyed.length > key) return result;
            else throw IndexError(key, new Error());
        } else throw KeyError(key, new Error());
    }
    return result;
}
function __t__(target) {
    return target === undefined || target === null ? false : [
        "boolean",
        "number"
    ].indexOf(typeof target) >= 0 ? target : target.__bool__ instanceof Function ? target.__bool__() ? target : false : target.__len__ instanceof Function ? target.__len__() !== 0 ? target : false : target instanceof Function ? target : len(target) !== 0 ? target : false;
}
function float(any) {
    if (any == "inf") return Infinity;
    else if (any == "-inf") return -Infinity;
    else if (any == "nan") return NaN;
    else if (isNaN(parseFloat(any))) {
        if (any === false) return 0;
        else if (any === true) return 1;
        else throw ValueError("could not convert string to float: '" + str(any) + "'", new Error());
    } else return +any;
}
float.__name__ = "float";
float.__bases__ = [
    object
];
function int(any) {
    return float(any) | 0;
}
int.__name__ = "int";
int.__bases__ = [
    object
];
function bool(any) {
    return !!__t__(any);
}
bool.__name__ = "bool";
bool.__bases__ = [
    int
];
function py_typeof(anObject) {
    var aType = typeof anObject;
    if (aType == "object") try {
        return "__class__" in anObject ? anObject.__class__ : object;
    } catch (exception) {
        return aType;
    }
    else return aType == "boolean" ? bool : aType == "string" ? str : aType == "number" ? anObject % 1 == 0 ? int : float : null;
}
function issubclass(aClass, classinfo) {
    if (classinfo instanceof Array) {
        for (let aClass2 of classinfo){
            if (issubclass(aClass, aClass2)) return true;
        }
        return false;
    }
    try {
        var aClass2 = aClass;
        if (aClass2 == classinfo) return true;
        else {
            var bases = [].slice.call(aClass2.__bases__);
            while(bases.length){
                aClass2 = bases.shift();
                if (aClass2 == classinfo) return true;
                if (aClass2.__bases__.length) bases = [].slice.call(aClass2.__bases__).concat(bases);
            }
            return false;
        }
    } catch (exception) {
        return aClass == classinfo || classinfo == object;
    }
}
function isinstance(anObject, classinfo) {
    try {
        return "__class__" in anObject ? issubclass(anObject.__class__, classinfo) : issubclass(py_typeof(anObject), classinfo);
    } catch (exception) {
        return issubclass(py_typeof(anObject), classinfo);
    }
}
function callable(anObject) {
    return anObject && typeof anObject == "object" && "__call__" in anObject ? true : typeof anObject === "function";
}
function repr(anObject) {
    try {
        return anObject.__repr__();
    } catch (exception) {
        try {
            return anObject.__str__();
        } catch (exception) {
            try {
                if (anObject == null) return "None";
                else if (anObject.constructor == Object) {
                    var result = "{";
                    var comma = false;
                    for(var attrib in anObject)if (!__specialattrib__(attrib)) {
                        if (attrib.isnumeric()) var attribRepr = attrib;
                        else var attribRepr = "'" + attrib + "'";
                        if (comma) result += ", ";
                        else comma = true;
                        result += attribRepr + ": " + repr(anObject[attrib]);
                    }
                    result += "}";
                    return result;
                } else return typeof anObject == "boolean" ? anObject.toString().capitalize() : anObject.toString();
            } catch (exception) {
                return "<object of type: " + typeof anObject + ">";
            }
        }
    }
}
function chr(charCode) {
    return String.fromCharCode(charCode);
}
function ord(aChar) {
    return aChar.charCodeAt(0);
}
function max(nrOrSeq) {
    return arguments.length == 1 ? Math.max(...nrOrSeq) : Math.max(...arguments);
}
function min(nrOrSeq) {
    return arguments.length == 1 ? Math.min(...nrOrSeq) : Math.min(...arguments);
}
var abs = Math.abs;
function round(number, ndigits) {
    if (ndigits) {
        var scale = Math.pow(10, ndigits);
        number *= scale;
    }
    var rounded = Math.round(number);
    if (rounded - number == 0.5 && rounded % 2) rounded -= 1;
    if (ndigits) rounded /= scale;
    return rounded;
}
function __jsUsePyNext__() {
    try {
        var result = this.__next__();
        return {
            value: result,
            done: false
        };
    } catch (exception) {
        return {
            value: undefined,
            done: true
        };
    }
}
function __pyUseJsNext__() {
    var result = this.next();
    if (result.done) throw StopIteration(new Error());
    else return result.value;
}
function py_iter(iterable) {
    if (typeof iterable == "string" || "__iter__" in iterable) {
        var result = iterable.__iter__();
        result.next = __jsUsePyNext__;
    } else if ("selector" in iterable) {
        var result = list(iterable).__iter__();
        result.next = __jsUsePyNext__;
    } else if ("next" in iterable) {
        var result = iterable;
        if (!("__next__" in result)) result.__next__ = __pyUseJsNext__;
    } else if (Symbol.iterator in iterable) {
        var result = iterable[Symbol.iterator]();
        result.__next__ = __pyUseJsNext__;
    } else throw IterableError(new Error());
    result[Symbol.iterator] = function() {
        return result;
    };
    return result;
}
function py_next(iterator) {
    try {
        var result = iterator.__next__();
    } catch (exception) {
        var result = iterator.next();
        if (result.done) throw StopIteration(new Error());
        else return result.value;
    }
    if (result == undefined) throw StopIteration(new Error());
    else return result;
}
function __PyIterator__(iterable) {
    this.iterable = iterable;
    this.index = 0;
}
__PyIterator__.prototype.__next__ = function() {
    if (this.index < this.iterable.length) return this.iterable[this.index++];
    else throw StopIteration(new Error());
};
function __JsIterator__(iterable) {
    this.iterable = iterable;
    this.index = 0;
}
__JsIterator__.prototype.next = function() {
    if (this.index < this.iterable.py_keys.length) return {
        value: this.index++,
        done: false
    };
    else return {
        value: undefined,
        done: true
    };
};
function py_reversed(iterable) {
    iterable = iterable.slice();
    iterable.reverse();
    return iterable;
}
function zip() {
    var args = [].slice.call(arguments);
    for(var i = 0; i < args.length; i++){
        if (typeof args[i] == "string") args[i] = args[i].split("");
        else if (!Array.isArray(args[i])) args[i] = Array.from(args[i]);
    }
    var shortest = args.length == 0 ? [] : args.reduce(function(array0, array1) {
        return array0.length < array1.length ? array0 : array1;
    });
    return shortest.map(function(current, index) {
        return args.map(function(current) {
            return current[index];
        });
    });
}
function range(start, stop, step) {
    if (stop == undefined) {
        stop = start;
        start = 0;
    }
    if (step == undefined) step = 1;
    if (step > 0 && start >= stop || step < 0 && start <= stop) return [];
    var result = [];
    for(var i = start; step > 0 ? i < stop : i > stop; i += step)result.push(i);
    return result;
}
function any(iterable) {
    for (let item of iterable){
        if (bool(item)) return true;
    }
    return false;
}
function all(iterable) {
    for (let item of iterable){
        if (!bool(item)) return false;
    }
    return true;
}
function sum(iterable) {
    let result = 0;
    for (let item of iterable)result += item;
    return result;
}
function enumerate(iterable) {
    return zip(range(len(iterable)), iterable);
}
function copy(anObject) {
    if (anObject == null || typeof anObject == "object") return anObject;
    else {
        var result = {};
        for(var attrib in obj)if (anObject.hasOwnProperty(attrib)) result[attrib] = anObject[attrib];
        return result;
    }
}
function deepcopy(anObject) {
    if (anObject == null || typeof anObject == "object") return anObject;
    else {
        var result = {};
        for(var attrib in obj)if (anObject.hasOwnProperty(attrib)) result[attrib] = deepcopy(anObject[attrib]);
        return result;
    }
}
function list(iterable) {
    let instance = iterable ? Array.from(iterable) : [];
    return instance;
}
Array.prototype.__class__ = list;
list.__name__ = "list";
list.__bases__ = [
    object
];
Array.prototype.__iter__ = function() {
    return new __PyIterator__(this);
};
Array.prototype.__getslice__ = function(start, stop, step) {
    if (start < 0) start = this.length + start;
    if (stop == null) stop = this.length;
    else if (stop < 0) stop = this.length + stop;
    else if (stop > this.length) stop = this.length;
    if (step == 1) return Array.prototype.slice.call(this, start, stop);
    let result = list([]);
    for(let index = start; index < stop; index += step)result.push(this[index]);
    return result;
};
Array.prototype.__setslice__ = function(start, stop, step, source) {
    if (start < 0) start = this.length + start;
    if (stop == null) stop = this.length;
    else if (stop < 0) stop = this.length + stop;
    if (step == null) Array.prototype.splice.apply(this, [
        start,
        stop - start
    ].concat(source));
    else {
        let sourceIndex = 0;
        for(let targetIndex = start; targetIndex < stop; targetIndex += step)this[targetIndex] = source[sourceIndex++];
    }
};
Array.prototype.__repr__ = function() {
    if (this.__class__ == set && !this.length) return "set()";
    let result = !this.__class__ || this.__class__ == list ? "[" : this.__class__ == tuple ? "(" : "{";
    for(let index = 0; index < this.length; index++){
        if (index) result += ", ";
        result += repr(this[index]);
    }
    if (this.__class__ == tuple && this.length == 1) result += ",";
    result += !this.__class__ || this.__class__ == list ? "]" : this.__class__ == tuple ? ")" : "}";
    return result;
};
Array.prototype.__str__ = Array.prototype.__repr__;
Array.prototype.append = function(element) {
    this.push(element);
};
Array.prototype.py_clear = function() {
    this.length = 0;
};
Array.prototype.extend = function(aList) {
    this.push.apply(this, aList);
};
Array.prototype.insert = function(index, element) {
    this.splice(index, 0, element);
};
Array.prototype.remove = function(element) {
    let index = this.indexOf(element);
    if (index == -1) throw ValueError("list.remove(x): x not in list", new Error());
    this.splice(index, 1);
};
Array.prototype.index = function(element) {
    return this.indexOf(element);
};
Array.prototype.py_pop = function(index) {
    if (index == undefined) return this.pop();
    else return this.splice(index, 1)[0];
};
Array.prototype.py_sort = function() {
    __sort__.apply(null, [
        this
    ].concat([].slice.apply(arguments)));
};
Array.prototype.__add__ = function(aList) {
    return list(this.concat(aList));
};
Array.prototype.__mul__ = function(scalar) {
    let result = this;
    for(let i = 1; i < scalar; i++)result = result.concat(this);
    return result;
};
Array.prototype.__rmul__ = Array.prototype.__mul__;
function tuple(iterable) {
    let instance = iterable ? [].slice.apply(iterable) : [];
    instance.__class__ = tuple;
    return instance;
}
tuple.__name__ = "tuple";
tuple.__bases__ = [
    object
];
function set(iterable) {
    let instance = [];
    if (iterable) for(let index = 0; index < iterable.length; index++)instance.add(iterable[index]);
    instance.__class__ = set;
    return instance;
}
set.__name__ = "set";
set.__bases__ = [
    object
];
Array.prototype.__bindexOf__ = function(element) {
    element += "";
    let mindex = 0;
    let maxdex = this.length - 1;
    while(mindex <= maxdex){
        let index = (mindex + maxdex) / 2 | 0;
        let middle = this[index] + "";
        if (middle < element) mindex = index + 1;
        else if (middle > element) maxdex = index - 1;
        else return index;
    }
    return -1;
};
Array.prototype.add = function(element) {
    if (this.indexOf(element) == -1) this.push(element);
};
Array.prototype.discard = function(element) {
    var index = this.indexOf(element);
    if (index != -1) this.splice(index, 1);
};
Array.prototype.isdisjoint = function(other) {
    this.sort();
    for(let i = 0; i < other.length; i++){
        if (this.__bindexOf__(other[i]) != -1) return false;
    }
    return true;
};
Array.prototype.issuperset = function(other) {
    this.sort();
    for(let i = 0; i < other.length; i++){
        if (this.__bindexOf__(other[i]) == -1) return false;
    }
    return true;
};
Array.prototype.issubset = function(other) {
    return set(other.slice()).issuperset(this);
};
Array.prototype.union = function(other) {
    let result = set(this.slice().sort());
    for(let i = 0; i < other.length; i++)if (result.__bindexOf__(other[i]) == -1) result.push(other[i]);
    return result;
};
Array.prototype.intersection = function(other) {
    this.sort();
    let result = set();
    for(let i = 0; i < other.length; i++)if (this.__bindexOf__(other[i]) != -1) result.push(other[i]);
    return result;
};
Array.prototype.difference = function(other) {
    let sother = set(other.slice().sort());
    let result = set();
    for(let i = 0; i < this.length; i++)if (sother.__bindexOf__(this[i]) == -1) result.push(this[i]);
    return result;
};
Array.prototype.symmetric_difference = function(other) {
    return this.union(other).difference(this.intersection(other));
};
Array.prototype.py_update = function() {
    let updated = [].concat.apply(this.slice(), arguments).sort();
    this.py_clear();
    for(let i = 0; i < updated.length; i++)if (updated[i] != updated[i - 1]) this.push(updated[i]);
};
Array.prototype.__eq__ = function(other) {
    if (this.length != other.length) return false;
    if (this.__class__ == set) {
        this.sort();
        other.sort();
    }
    for(let i = 0; i < this.length; i++){
        if (this[i] != other[i]) return false;
    }
    return true;
};
Array.prototype.__ne__ = function(other) {
    return !this.__eq__(other);
};
Array.prototype.__le__ = function(other) {
    if (this.__class__ == set) return this.issubset(other);
    else {
        for(let i = 0; i < this.length; i++){
            if (this[i] > other[i]) return false;
            else if (this[i] < other[i]) return true;
        }
        return true;
    }
};
Array.prototype.__ge__ = function(other) {
    if (this.__class__ == set) return this.issuperset(other);
    else {
        for(let i = 0; i < this.length; i++){
            if (this[i] < other[i]) return false;
            else if (this[i] > other[i]) return true;
        }
        return true;
    }
};
Array.prototype.__lt__ = function(other) {
    return this.__class__ == set ? this.issubset(other) && !this.issuperset(other) : !this.__ge__(other);
};
Array.prototype.__gt__ = function(other) {
    return this.__class__ == set ? this.issuperset(other) && !this.issubset(other) : !this.__le__(other);
};
function bytearray(bytable, encoding) {
    if (bytable == undefined) return new Uint8Array(0);
    else {
        let aType = py_typeof(bytable);
        if (aType == int) return new Uint8Array(bytable);
        else if (aType == str) {
            let aBytes = new Uint8Array(len(bytable));
            for(let i = 0; i < len(bytable); i++)aBytes[i] = bytable.charCodeAt(i);
            return aBytes;
        } else if (aType == list || aType == tuple) return new Uint8Array(bytable);
        else throw py_TypeError;
    }
}
var bytes = bytearray;
Uint8Array.prototype.__add__ = function(aBytes) {
    let result = new Uint8Array(this.length + aBytes.length);
    result.set(this);
    result.set(aBytes, this.length);
    return result;
};
Uint8Array.prototype.__mul__ = function(scalar) {
    let result = new Uint8Array(scalar * this.length);
    for(let i = 0; i < scalar; i++)result.set(this, i * this.length);
    return result;
};
Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
function str(stringable) {
    if (typeof stringable === "number") return stringable.toString();
    else try {
        return stringable.__str__();
    } catch (exception) {
        try {
            return repr(stringable);
        } catch (exception) {
            return String(stringable);
        }
    }
}
String.prototype.__class__ = str;
str.__name__ = "str";
str.__bases__ = [
    object
];
String.prototype.__iter__ = function() {
    new __PyIterator__(this);
};
String.prototype.__repr__ = function() {
    return (this.indexOf("'") == -1 ? "'" + this + "'" : '"' + this + '"').py_replace("	", "\\t").py_replace("\n", "\\n");
};
String.prototype.__str__ = function() {
    return this;
};
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.endswith = function(suffix) {
    if (suffix instanceof Array) for(var i = 0; i < suffix.length; i++){
        if (this.slice(-suffix[i].length) == suffix[i]) return true;
    }
    else return suffix == "" || this.slice(-suffix.length) == suffix;
    return false;
};
String.prototype.find = function(sub, start) {
    return this.indexOf(sub, start);
};
String.prototype.__getslice__ = function(start, stop, step) {
    if (start < 0) start = this.length + start;
    if (stop == null) stop = this.length;
    else if (stop < 0) stop = this.length + stop;
    var result = "";
    if (step == 1) result = this.substring(start, stop);
    else for(var index = start; index < stop; index += step)result = result.concat(this.charAt(index));
    return result;
};
__setproperty__(String.prototype, "format", {
    get: function() {
        return __get__(this, function(self) {
            var args = tuple([].slice.apply(arguments).slice(1));
            var autoIndex = 0;
            return self.replace(/\{(\w*)\}/g, function(match, key) {
                if (key == "") key = autoIndex++;
                if (key == +key) return args[key] === undefined ? match : str(args[key]);
                else {
                    for(var index = 0; index < args.length; index++){
                        if (typeof args[index] == "object" && args[index][key] !== undefined) return str(args[index][key]);
                    }
                    return match;
                }
            });
        });
    },
    enumerable: true
});
String.prototype.isalnum = function() {
    return /^[0-9a-zA-Z]{1,}$/.test(this);
};
String.prototype.isalpha = function() {
    return /^[a-zA-Z]{1,}$/.test(this);
};
String.prototype.isdecimal = function() {
    return /^[0-9]{1,}$/.test(this);
};
String.prototype.isdigit = function() {
    return this.isdecimal();
};
String.prototype.islower = function() {
    return /^[a-z]{1,}$/.test(this);
};
String.prototype.isupper = function() {
    return /^[A-Z]{1,}$/.test(this);
};
String.prototype.isspace = function() {
    return /^[\s]{1,}$/.test(this);
};
String.prototype.isnumeric = function() {
    return !isNaN(parseFloat(this)) && isFinite(this);
};
String.prototype.join = function(strings) {
    strings = Array.from(strings);
    return strings.join(this);
};
String.prototype.lower = function() {
    return this.toLowerCase();
};
String.prototype.py_replace = function(old, aNew, maxreplace) {
    return this.split(old, maxreplace).join(aNew);
};
String.prototype.lstrip = function() {
    return this.replace(/^\s*/g, "");
};
String.prototype.rfind = function(sub, start) {
    return this.lastIndexOf(sub, start);
};
String.prototype.rsplit = function(sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip();
    } else var stripped = this;
    if (maxsplit == undefined || maxsplit == -1) return stripped.split(sep);
    else {
        var result = stripped.split(sep);
        if (maxsplit < result.length) {
            var maxrsplit = result.length - maxsplit;
            return [
                result.slice(0, maxrsplit).join(sep)
            ].concat(result.slice(maxrsplit));
        } else return result;
    }
};
String.prototype.rstrip = function() {
    return this.replace(/\s*$/g, "");
};
String.prototype.py_split = function(sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip();
    } else var stripped = this;
    if (maxsplit == undefined || maxsplit == -1) return stripped.split(sep);
    else {
        var result = stripped.split(sep);
        if (maxsplit < result.length) return result.slice(0, maxsplit).concat([
            result.slice(maxsplit).join(sep)
        ]);
        else return result;
    }
};
String.prototype.startswith = function(prefix) {
    if (prefix instanceof Array) for(var i = 0; i < prefix.length; i++){
        if (this.indexOf(prefix[i]) == 0) return true;
    }
    else return this.indexOf(prefix) == 0;
    return false;
};
String.prototype.strip = function() {
    return this.trim();
};
String.prototype.upper = function() {
    return this.toUpperCase();
};
String.prototype.__mul__ = function(scalar) {
    var result = "";
    for(var i = 0; i < scalar; i++)result = result + this;
    return result;
};
String.prototype.__rmul__ = String.prototype.__mul__;
function __contains__(element) {
    return this.hasOwnProperty(element);
}
function __keys__() {
    var keys = [];
    for(var attrib in this)if (!__specialattrib__(attrib)) keys.push(attrib);
    return keys;
}
function __items__() {
    var items = [];
    for(var attrib in this)if (!__specialattrib__(attrib)) items.push([
        attrib,
        this[attrib]
    ]);
    return items;
}
function __del__(key) {
    delete this[key];
}
function __clear__() {
    for(var attrib in this)delete this[attrib];
}
function __getdefault__(aKey, aDefault) {
    var result = this[aKey];
    if (result == undefined) result = this["py_" + aKey];
    return result == undefined ? aDefault == undefined ? null : aDefault : result;
}
function __setdefault__(aKey, aDefault) {
    var result = this[aKey];
    if (result != undefined) return result;
    var val = aDefault == undefined ? null : aDefault;
    this[aKey] = val;
    return val;
}
function __pop__(aKey, aDefault) {
    var result = this[aKey];
    if (result != undefined) {
        delete this[aKey];
        return result;
    } else {
        if (aDefault === undefined) throw KeyError(aKey, new Error());
    }
    return aDefault;
}
function __popitem__() {
    var aKey = Object.keys(this)[0];
    if (aKey == null) throw KeyError("popitem(): dictionary is empty", new Error());
    var result = tuple([
        aKey,
        this[aKey]
    ]);
    delete this[aKey];
    return result;
}
function __update__(aDict) {
    for(var aKey in aDict)this[aKey] = aDict[aKey];
}
function __values__() {
    var values = [];
    for(var attrib in this)if (!__specialattrib__(attrib)) values.push(this[attrib]);
    return values;
}
function __dgetitem__(aKey) {
    return this[aKey];
}
function __dsetitem__(aKey, aValue) {
    this[aKey] = aValue;
}
function dict(objectOrPairs) {
    var instance = {};
    if (!objectOrPairs || objectOrPairs instanceof Array) {
        if (objectOrPairs) for(var index = 0; index < objectOrPairs.length; index++){
            var pair = objectOrPairs[index];
            if (!(pair instanceof Array) || pair.length != 2) throw ValueError("dict update sequence element #" + index + " has length " + pair.length + "; 2 is required", new Error());
            var key = pair[0];
            var val = pair[1];
            if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                if (!isinstance(objectOrPairs, dict)) val = dict(val);
            }
            instance[key] = val;
        }
    } else {
        if (isinstance(objectOrPairs, dict)) {
            var aKeys = objectOrPairs.py_keys();
            for(var index = 0; index < aKeys.length; index++){
                var key = aKeys[index];
                instance[key] = objectOrPairs[key];
            }
        } else if (objectOrPairs instanceof Object) instance = objectOrPairs;
        else throw ValueError("Invalid type of object for dict creation", new Error());
    }
    __setproperty__(instance, "__class__", {
        value: dict,
        enumerable: false,
        writable: true
    });
    __setproperty__(instance, "__contains__", {
        value: __contains__,
        enumerable: false
    });
    __setproperty__(instance, "py_keys", {
        value: __keys__,
        enumerable: false
    });
    __setproperty__(instance, "__iter__", {
        value: function() {
            new __PyIterator__(this.py_keys());
        },
        enumerable: false
    });
    __setproperty__(instance, Symbol.iterator, {
        value: function() {
            new __JsIterator__(this.py_keys());
        },
        enumerable: false
    });
    __setproperty__(instance, "py_items", {
        value: __items__,
        enumerable: false
    });
    __setproperty__(instance, "py_del", {
        value: __del__,
        enumerable: false
    });
    __setproperty__(instance, "py_clear", {
        value: __clear__,
        enumerable: false
    });
    __setproperty__(instance, "py_get", {
        value: __getdefault__,
        enumerable: false
    });
    __setproperty__(instance, "py_setdefault", {
        value: __setdefault__,
        enumerable: false
    });
    __setproperty__(instance, "py_pop", {
        value: __pop__,
        enumerable: false
    });
    __setproperty__(instance, "py_popitem", {
        value: __popitem__,
        enumerable: false
    });
    __setproperty__(instance, "py_update", {
        value: __update__,
        enumerable: false
    });
    __setproperty__(instance, "py_values", {
        value: __values__,
        enumerable: false
    });
    __setproperty__(instance, "__getitem__", {
        value: __dgetitem__,
        enumerable: false
    });
    __setproperty__(instance, "__setitem__", {
        value: __dsetitem__,
        enumerable: false
    });
    return instance;
}
dict.__name__ = "dict";
dict.__bases__ = [
    object
];
function __setdoc__(docString) {
    this.__doc__ = docString;
    return this;
}
__setproperty__(Function.prototype, "__setdoc__", {
    value: __setdoc__,
    enumerable: false
});
function __jsmod__(a, b) {
    if (typeof a == "object" && "__mod__" in a) return a.__mod__(b);
    else if (typeof b == "object" && "__rmod__" in b) return b.__rmod__(a);
    else return a % b;
}
function __mod__(a, b) {
    if (typeof a == "object" && "__mod__" in a) return a.__mod__(b);
    else if (typeof b == "object" && "__rmod__" in b) return b.__rmod__(a);
    else return (a % b + b) % b;
}
function __pow__(a, b) {
    if (typeof a == "object" && "__pow__" in a) return a.__pow__(b);
    else if (typeof b == "object" && "__rpow__" in b) return b.__rpow__(a);
    else return Math.pow(a, b);
}
var pow = __pow__;
function __neg__(a) {
    if (typeof a == "object" && "__neg__" in a) return a.__neg__();
    else return -a;
}
function __matmul__(a, b) {
    return a.__matmul__(b);
}
function __mul__(a, b) {
    if (typeof a == "object" && "__mul__" in a) return a.__mul__(b);
    else if (typeof b == "object" && "__rmul__" in b) return b.__rmul__(a);
    else if (typeof a == "string") return a.__mul__(b);
    else if (typeof b == "string") return b.__rmul__(a);
    else return a * b;
}
function __truediv__(a, b) {
    if (typeof a == "object" && "__truediv__" in a) return a.__truediv__(b);
    else if (typeof b == "object" && "__rtruediv__" in b) return b.__rtruediv__(a);
    else if (typeof a == "object" && "__div__" in a) return a.__div__(b);
    else if (typeof b == "object" && "__rdiv__" in b) return b.__rdiv__(a);
    else return a / b;
}
function __floordiv__(a, b) {
    if (typeof a == "object" && "__floordiv__" in a) return a.__floordiv__(b);
    else if (typeof b == "object" && "__rfloordiv__" in b) return b.__rfloordiv__(a);
    else if (typeof a == "object" && "__div__" in a) return a.__div__(b);
    else if (typeof b == "object" && "__rdiv__" in b) return b.__rdiv__(a);
    else return Math.floor(a / b);
}
function __add__(a, b) {
    if (typeof a == "object" && "__add__" in a) return a.__add__(b);
    else if (typeof b == "object" && "__radd__" in b) return b.__radd__(a);
    else return a + b;
}
function __sub__(a, b) {
    if (typeof a == "object" && "__sub__" in a) return a.__sub__(b);
    else if (typeof b == "object" && "__rsub__" in b) return b.__rsub__(a);
    else return a - b;
}
function __lshift__(a, b) {
    if (typeof a == "object" && "__lshift__" in a) return a.__lshift__(b);
    else if (typeof b == "object" && "__rlshift__" in b) return b.__rlshift__(a);
    else return a << b;
}
function __rshift__(a, b) {
    if (typeof a == "object" && "__rshift__" in a) return a.__rshift__(b);
    else if (typeof b == "object" && "__rrshift__" in b) return b.__rrshift__(a);
    else return a >> b;
}
function __or__(a, b) {
    if (typeof a == "object" && "__or__" in a) return a.__or__(b);
    else if (typeof b == "object" && "__ror__" in b) return b.__ror__(a);
    else return a | b;
}
function __xor__(a, b) {
    if (typeof a == "object" && "__xor__" in a) return a.__xor__(b);
    else if (typeof b == "object" && "__rxor__" in b) return b.__rxor__(a);
    else return a ^ b;
}
function __and__(a, b) {
    if (typeof a == "object" && "__and__" in a) return a.__and__(b);
    else if (typeof b == "object" && "__rand__" in b) return b.__rand__(a);
    else return a & b;
}
function __eq__(a, b) {
    if (typeof a == "object" && "__eq__" in a) return a.__eq__(b);
    else return a == b;
}
function __ne__(a, b) {
    if (typeof a == "object" && "__ne__" in a) return a.__ne__(b);
    else return a != b;
}
function __lt__(a, b) {
    if (typeof a == "object" && "__lt__" in a) return a.__lt__(b);
    else return a < b;
}
function __le__(a, b) {
    if (typeof a == "object" && "__le__" in a) return a.__le__(b);
    else return a <= b;
}
function __gt__(a, b) {
    if (typeof a == "object" && "__gt__" in a) return a.__gt__(b);
    else return a > b;
}
function __ge__(a, b) {
    if (typeof a == "object" && "__ge__" in a) return a.__ge__(b);
    else return a >= b;
}
function __imatmul__(a, b) {
    if ("__imatmul__" in a) return a.__imatmul__(b);
    else return a.__matmul__(b);
}
function __ipow__(a, b) {
    if (typeof a == "object" && "__pow__" in a) return a.__ipow__(b);
    else if (typeof a == "object" && "__ipow__" in a) return a.__pow__(b);
    else if (typeof b == "object" && "__rpow__" in b) return b.__rpow__(a);
    else return Math.pow(a, b);
}
function __ijsmod__(a, b) {
    if (typeof a == "object" && "__imod__" in a) return a.__ismod__(b);
    else if (typeof a == "object" && "__mod__" in a) return a.__mod__(b);
    else if (typeof b == "object" && "__rpow__" in b) return b.__rmod__(a);
    else return a % b;
}
function __imod__(a, b) {
    if (typeof a == "object" && "__imod__" in a) return a.__imod__(b);
    else if (typeof a == "object" && "__mod__" in a) return a.__mod__(b);
    else if (typeof b == "object" && "__rmod__" in b) return b.__rmod__(a);
    else return (a % b + b) % b;
}
function __imul__(a, b) {
    if (typeof a == "object" && "__imul__" in a) return a.__imul__(b);
    else if (typeof a == "object" && "__mul__" in a) return a = a.__mul__(b);
    else if (typeof b == "object" && "__rmul__" in b) return a = b.__rmul__(a);
    else if (typeof a == "string") return a = a.__mul__(b);
    else if (typeof b == "string") return a = b.__rmul__(a);
    else return a *= b;
}
function __idiv__(a, b) {
    if (typeof a == "object" && "__idiv__" in a) return a.__idiv__(b);
    else if (typeof a == "object" && "__div__" in a) return a = a.__div__(b);
    else if (typeof b == "object" && "__rdiv__" in b) return a = b.__rdiv__(a);
    else return a /= b;
}
function __iadd__(a, b) {
    if (typeof a == "object" && "__iadd__" in a) return a.__iadd__(b);
    else if (typeof a == "object" && "__add__" in a) return a = a.__add__(b);
    else if (typeof b == "object" && "__radd__" in b) return a = b.__radd__(a);
    else return a += b;
}
function __isub__(a, b) {
    if (typeof a == "object" && "__isub__" in a) return a.__isub__(b);
    else if (typeof a == "object" && "__sub__" in a) return a = a.__sub__(b);
    else if (typeof b == "object" && "__rsub__" in b) return a = b.__rsub__(a);
    else return a -= b;
}
function __ilshift__(a, b) {
    if (typeof a == "object" && "__ilshift__" in a) return a.__ilshift__(b);
    else if (typeof a == "object" && "__lshift__" in a) return a = a.__lshift__(b);
    else if (typeof b == "object" && "__rlshift__" in b) return a = b.__rlshift__(a);
    else return a <<= b;
}
function __irshift__(a, b) {
    if (typeof a == "object" && "__irshift__" in a) return a.__irshift__(b);
    else if (typeof a == "object" && "__rshift__" in a) return a = a.__rshift__(b);
    else if (typeof b == "object" && "__rrshift__" in b) return a = b.__rrshift__(a);
    else return a >>= b;
}
function __ior__(a, b) {
    if (typeof a == "object" && "__ior__" in a) return a.__ior__(b);
    else if (typeof a == "object" && "__or__" in a) return a = a.__or__(b);
    else if (typeof b == "object" && "__ror__" in b) return a = b.__ror__(a);
    else return a |= b;
}
function __ixor__(a, b) {
    if (typeof a == "object" && "__ixor__" in a) return a.__ixor__(b);
    else if (typeof a == "object" && "__xor__" in a) return a = a.__xor__(b);
    else if (typeof b == "object" && "__rxor__" in b) return a = b.__rxor__(a);
    else return a ^= b;
}
function __iand__(a, b) {
    if (typeof a == "object" && "__iand__" in a) return a.__iand__(b);
    else if (typeof a == "object" && "__and__" in a) return a = a.__and__(b);
    else if (typeof b == "object" && "__rand__" in b) return a = b.__rand__(a);
    else return a &= b;
}
function __getitem__(container, key) {
    if (typeof container == "object" && "__getitem__" in container) return container.__getitem__(key);
    else if ((typeof container == "string" || container instanceof Array) && key < 0) return container[container.length + key];
    else return container[key];
}
function __setitem__(container, key, value) {
    if (typeof container == "object" && "__setitem__" in container) container.__setitem__(key, value);
    else if ((typeof container == "string" || container instanceof Array) && key < 0) container[container.length + key] = value;
    else container[key] = value;
}
function __getslice__(container, lower, upper, step) {
    if (typeof container == "object" && "__getitem__" in container) return container.__getitem__([
        lower,
        upper,
        step
    ]);
    else return container.__getslice__(lower, upper, step);
}
function __setslice__(container, lower, upper, step, value) {
    if (typeof container == "object" && "__setitem__" in container) container.__setitem__([
        lower,
        upper,
        step
    ], value);
    else container.__setslice__(lower, upper, step, value);
}
var BaseException = __class__("BaseException", [
    object
], {
    __module__: __name__
});
var Exception = __class__("Exception", [
    BaseException
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self) {
            var kwargs = dict();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case "self":
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = tuple();
            self.__args__ = args;
            if (kwargs.error != null) self.stack = kwargs.error.stack;
            else if (Error) self.stack = new Error().stack;
            else self.stack = "No stack trace available";
        });
    },
    get __repr__ () {
        return __get__(this, function(self) {
            if (len(self.__args__) > 1) return "{}{}".format(self.__class__.__name__, repr(tuple(self.__args__)));
            else if (len(self.__args__)) return "{}({})".format(self.__class__.__name__, repr(self.__args__[0]));
            else return "{}()".format(self.__class__.__name__);
        });
    },
    get __str__ () {
        return __get__(this, function(self) {
            if (len(self.__args__) > 1) return str(tuple(self.__args__));
            else if (len(self.__args__)) return str(self.__args__[0]);
            else return "";
        });
    }
});
var IterableError = __class__("IterableError", [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, error) {
            Exception.__init__(self, "Can't iterate over non-iterable", __kwargtrans__({
                error: error
            }));
        });
    }
});
var StopIteration = __class__("StopIteration", [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, error) {
            Exception.__init__(self, "Iterator exhausted", __kwargtrans__({
                error: error
            }));
        });
    }
});
var ValueError = __class__("ValueError", [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var KeyError = __class__("KeyError", [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var AssertionError = __class__("AssertionError", [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            if (message) Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
            else Exception.__init__(self, __kwargtrans__({
                error: error
            }));
        });
    }
});
var NotImplementedError = __class__("NotImplementedError", [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var IndexError = __class__("IndexError", [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var AttributeError = __class__("AttributeError", [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var py_TypeError = __class__("py_TypeError", [
    Exception
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self, message, error) {
            Exception.__init__(self, message, __kwargtrans__({
                error: error
            }));
        });
    }
});
var Warning = __class__("Warning", [
    Exception
], {
    __module__: __name__
});
var UserWarning = __class__("UserWarning", [
    Warning
], {
    __module__: __name__
});
var DeprecationWarning = __class__("DeprecationWarning", [
    Warning
], {
    __module__: __name__
});
var RuntimeWarning = __class__("RuntimeWarning", [
    Warning
], {
    __module__: __name__
});
var __sort__ = function(iterable, key, reverse) {
    if (typeof key == "undefined" || key != null && key.hasOwnProperty("__kwargtrans__")) var key = null;
    if (typeof reverse == "undefined" || reverse != null && reverse.hasOwnProperty("__kwargtrans__")) var reverse = false;
    if (arguments.length) {
        var __ilastarg0__ = arguments.length - 1;
        if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
            var __allkwargs0__ = arguments[__ilastarg0__--];
            for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                case "iterable":
                    var iterable = __allkwargs0__[__attrib0__];
                    break;
                case "key":
                    var key = __allkwargs0__[__attrib0__];
                    break;
                case "reverse":
                    var reverse = __allkwargs0__[__attrib0__];
                    break;
            }
        }
    }
    if (key) iterable.sort(function __lambda__(a, b) {
        if (arguments.length) {
            var __ilastarg0__ = arguments.length - 1;
            if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                var __allkwargs0__ = arguments[__ilastarg0__--];
                for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                    case "a":
                        var a = __allkwargs0__[__attrib0__];
                        break;
                    case "b":
                        var b = __allkwargs0__[__attrib0__];
                        break;
                }
            }
        }
        return key(a) > key(b) ? 1 : -1;
    });
    else iterable.sort();
    if (reverse) iterable.reverse();
};
var sorted = function(iterable, key, reverse) {
    if (typeof key == "undefined" || key != null && key.hasOwnProperty("__kwargtrans__")) var key = null;
    if (typeof reverse == "undefined" || reverse != null && reverse.hasOwnProperty("__kwargtrans__")) var reverse = false;
    if (arguments.length) {
        var __ilastarg0__ = arguments.length - 1;
        if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
            var __allkwargs0__ = arguments[__ilastarg0__--];
            for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                case "iterable":
                    var iterable = __allkwargs0__[__attrib0__];
                    break;
                case "key":
                    var key = __allkwargs0__[__attrib0__];
                    break;
                case "reverse":
                    var reverse = __allkwargs0__[__attrib0__];
                    break;
            }
        }
    }
    if (py_typeof(iterable) == dict) var result = copy(iterable.py_keys());
    else var result = copy(iterable);
    __sort__(result, key, reverse);
    return result;
};
var map = function(func, iterable) {
    return function() {
        var __accu0__ = [];
        for (var item of iterable)__accu0__.append(func(item));
        return __accu0__;
    }();
};
var filter = function(func, iterable) {
    if (func == null) var func = bool;
    return function() {
        var __accu0__ = [];
        for (var item of iterable)if (func(item)) __accu0__.append(item);
        return __accu0__;
    }();
};
var divmod = function(n, d) {
    return tuple([
        Math.floor(n / d),
        __mod__(n, d)
    ]);
};
var __Terminal__ = __class__("__Terminal__", [
    object
], {
    __module__: __name__,
    get __init__ () {
        return __get__(this, function(self) {
            self.buffer = "";
            try {
                self.element = document.getElementById("__terminal__");
            } catch (__except0__) {
                self.element = null;
            }
            if (self.element) {
                self.element.style.overflowX = "auto";
                self.element.style.boxSizing = "border-box";
                self.element.style.padding = "5px";
                self.element.innerHTML = "_";
            }
        });
    },
    get print () {
        return __get__(this, function(self) {
            var sep = " ";
            var end = "\n";
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case "self":
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        case "sep":
                            var sep = __allkwargs0__[__attrib0__];
                            break;
                        case "end":
                            var end = __allkwargs0__[__attrib0__];
                            break;
                    }
                }
                var args = tuple([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = tuple();
            self.buffer = "{}{}{}".format(self.buffer, sep.join(function() {
                var __accu0__ = [];
                for (var arg of args)__accu0__.append(str(arg));
                return __accu0__;
            }()), end).__getslice__(-4096, null, 1);
            if (self.element) {
                self.element.innerHTML = self.buffer.py_replace("\n", "<br>").py_replace(" ", "&nbsp");
                self.element.scrollTop = self.element.scrollHeight;
            } else console.log(sep.join(function() {
                var __accu0__ = [];
                for (var arg of args)__accu0__.append(str(arg));
                return __accu0__;
            }()));
        });
    },
    get input () {
        return __get__(this, function(self, question) {
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case "self":
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        case "question":
                            var question = __allkwargs0__[__attrib0__];
                            break;
                    }
                }
            }
            self.print("{}".format(question), __kwargtrans__({
                end: ""
            }));
            var answer = window.prompt("\n".join(self.buffer.py_split("\n").__getslice__(-8, null, 1)));
            self.print(answer);
            return answer;
        });
    }
});
var __terminal__ = __Terminal__();
var print = __terminal__.print;
var input = __terminal__.input;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"heBT1":[function(require,module,exports) {
// Transcrypt'ed from Python, 2023-04-23 01:48:21
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "root", ()=>root);
parcelHelpers.export(exports, "button", ()=>button);
parcelHelpers.export(exports, "modal", ()=>modal);
var _orgTranscryptRuntimeJs = require("./org.transcrypt.__runtime__.js");
var __name__ = "components.modal";
var root = document.getElementById("appGoesHere");
var button = document.createElement("button");
button.textContent = "Resolve";
root.append(button);
var modal = function() {
    (0, _orgTranscryptRuntimeJs.print)("MODAL!");
    var executor = function(resolve, reject) {
        var onclick = function(event) {
            resolve(true);
            (0, _orgTranscryptRuntimeJs.print)("RESOLVED");
        };
        button.onclick = onclick;
    };
    return window.create_and_await_promise(executor);
};

},{"./org.transcrypt.__runtime__.js":"aJoBq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6IyFK":[function(require,module,exports) {
// Transcrypt'ed from Python, 2023-04-23 02:08:05
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toast", ()=>toast);
var _orgTranscryptRuntimeJs = require("./org.transcrypt.__runtime__.js");
var __name__ = "components.toast";
var toast = function(text, yell) {
    if (text === null) (0, _orgTranscryptRuntimeJs.print)("TOAST!");
    else {
        if (yell === true) var text = text.upper();
        (0, _orgTranscryptRuntimeJs.print)(text);
    }
};

},{"./org.transcrypt.__runtime__.js":"aJoBq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bVE9D","a4oBN"], "a4oBN", "parcelRequireca93")

//# sourceMappingURL=index.33e73fbc.js.map
