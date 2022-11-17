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
})({"eFv8l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexLess = require("bundle-text:./style/index.less");
var _indexLessDefault = parcelHelpers.interopDefault(_indexLess);
var _optionValidator = require("option-validator");
var _optionValidatorDefault = parcelHelpers.interopDefault(_optionValidator);
var _config = require("./config");
var _configDefault = parcelHelpers.interopDefault(_config);
var _control = require("./control");
var _controlDefault = parcelHelpers.interopDefault(_control);
var _events = require("./events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
var _icons = require("./icons");
var _iconsDefault = parcelHelpers.interopDefault(_icons);
var _layer = require("./layer");
var _layerDefault = parcelHelpers.interopDefault(_layer);
var _loading = require("./loading");
var _loadingDefault = parcelHelpers.interopDefault(_loading);
var _mask = require("./mask");
var _maskDefault = parcelHelpers.interopDefault(_mask);
var _player = require("./player");
var _playerDefault = parcelHelpers.interopDefault(_player);
var _plugins = require("./plugins");
var _pluginsDefault = parcelHelpers.interopDefault(_plugins);
var _scheme = require("./scheme");
var _schemeDefault = parcelHelpers.interopDefault(_scheme);
var _storage = require("./storage");
var _storageDefault = parcelHelpers.interopDefault(_storage);
var _template = require("./template");
var _templateDefault = parcelHelpers.interopDefault(_template);
var _utils = require("./utils");
var _emitter = require("./utils/emitter");
var _emitterDefault = parcelHelpers.interopDefault(_emitter);
let id = 0;
const instances = [];
class Artplayer extends (0, _emitterDefault.default) {
    constructor(option, readyCallback){
        super();
        this.id = ++id;
        const mergeOption = _utils.mergeDeep(Artplayer.option, option);
        this.option = (0, _optionValidatorDefault.default)(mergeOption, (0, _schemeDefault.default));
        this.isLock = false;
        this.isReady = false;
        this.isFocus = false;
        this.isInput = false;
        this.isRotate = false;
        this.isDestroy = false;
        this.template = new (0, _templateDefault.default)(this);
        this.events = new (0, _eventsDefault.default)(this);
        this.storage = new (0, _storageDefault.default)(this);
        this.icons = new (0, _iconsDefault.default)(this);
        this.player = new (0, _playerDefault.default)(this);
        this.layers = new (0, _layerDefault.default)(this);
        this.controls = new (0, _controlDefault.default)(this);
        this.loading = new (0, _loadingDefault.default)(this);
        this.mask = new (0, _maskDefault.default)(this);
        this.plugins = new (0, _pluginsDefault.default)(this);
        if (typeof readyCallback === "function") this.on("ready", ()=>readyCallback.call(this, this));
        if (Artplayer.DEGUG) {
            const log = (msg)=>console.log(`[ART.${this.id}] -> ${msg}`);
            log("Version@" + Artplayer.version);
            log("Env@" + Artplayer.env);
            log("Build@" + Artplayer.build);
            for(let index = 0; index < (0, _configDefault.default).events.length; index++)this.on("video:" + (0, _configDefault.default).events[index], (event)=>log("Event@" + event.type));
        }
        instances.push(this);
    }
    static get instances() {
        return instances;
    }
    static get version() {
        return "4.5.11";
    }
    static get env() {
        return "development";
    }
    static get build() {
        return "2022-11-17 18:17:58";
    }
    static get config() {
        return 0, _configDefault.default;
    }
    static get utils() {
        return _utils;
    }
    static get scheme() {
        return 0, _schemeDefault.default;
    }
    static get Emitter() {
        return 0, _emitterDefault.default;
    }
    static get validator() {
        return 0, _optionValidatorDefault.default;
    }
    static get kindOf() {
        return (0, _optionValidatorDefault.default).kindOf;
    }
    static get html() {
        return (0, _templateDefault.default).html;
    }
    static get option() {
        return {
            id: "",
            container: "#artplayer",
            url: "",
            poster: "",
            title: "",
            type: "",
            theme: "#f00",
            volume: 0.7,
            isLive: false,
            muted: false,
            autoplay: false,
            autoSize: false,
            loop: false,
            aspectRatio: false,
            mutex: true,
            backdrop: true,
            fullscreen: false,
            miniProgressBar: false,
            useSSR: false,
            playsInline: true,
            lock: false,
            fastForward: false,
            autoOrientation: false,
            layers: [],
            controls: [],
            quality: [],
            plugins: [],
            icons: {},
            customType: {}
        };
    }
    get proxy() {
        return this.events.proxy;
    }
    get query() {
        return this.template.query;
    }
    get video() {
        return this.template.$video;
    }
    destroy(removeHtml = true) {
        this.events.destroy();
        this.template.destroy(removeHtml);
        instances.splice(instances.indexOf(this), 1);
        this.isDestroy = true;
        this.emit("destroy");
    }
}
exports.default = Artplayer;
Artplayer.DEGUG = false;
Artplayer.SETTING_WIDTH = 250;
Artplayer.SETTING_ITEM_WIDTH = 200;
Artplayer.SETTING_ITEM_HEIGHT = 35;
Artplayer.INDICATOR_SIZE = 14;
Artplayer.INDICATOR_SIZE_ICON = 16;
Artplayer.INDICATOR_SIZE_MOBILE = 18;
Artplayer.INDICATOR_SIZE_MOBILE_ICON = 20;
Artplayer.VOLUME_PANEL_WIDTH = 60;
Artplayer.VOLUME_HANDLE_WIDTH = 12;
Artplayer.RESIZE_TIME = 500;
Artplayer.SCROLL_TIME = 200;
Artplayer.SCROLL_GAP = 50;
Artplayer.AUTO_PLAYBACK_MAX = 10;
Artplayer.AUTO_PLAYBACK_MIN = 5;
Artplayer.AUTO_PLAYBACK_TIMEOUT = 3000;
Artplayer.RECONNECT_TIME_MAX = 5;
Artplayer.RECONNECT_SLEEP_TIME = 1000;
Artplayer.CONTROL_HIDE_TIME = 3000;
Artplayer.DB_CLICE_TIME = 300;
Artplayer.MOBILE_AUTO_PLAYBACKRATE = 3;
Artplayer.MOBILE_AUTO_PLAYBACKRATE_TIME = 1000;
Artplayer.MOBILE_AUTO_ORIENTATION_TIME = 200;
Artplayer.INFO_LOOP_TIME = 1000;
Artplayer.FAST_FORWARD_VALUE = 3;
Artplayer.FAST_FORWARD_TIME = 1000;
Artplayer.TOUCH_MOVE_RATIO = 0.5;
Artplayer.VOLUME_STEP = 0.1;
Artplayer.SEEK_STEP = 5;
Artplayer.PROGRESS_HEIGHT = 4;
Artplayer.PLAYBACK_RATE = [
    0.5,
    0.75,
    1,
    1.25,
    1.5,
    2
];
Artplayer.ASPECT_RATIO = [
    "default",
    "4:3",
    "16:9"
];
Artplayer.FLIP = [
    "normal",
    "horizontal",
    "vertical"
];
if (typeof document !== "undefined") {
    if (!document.getElementById("artplayer-style")) {
        const $style = _utils.createElement("style");
        $style.id = "artplayer-style";
        $style.textContent = (0, _indexLessDefault.default);
        document.head.appendChild($style);
    }
}
if (typeof window !== "undefined") window["Artplayer"] = Artplayer;
console.log(`%c ArtPlayer %c ${Artplayer.version} %c https://artplayer.org`, "color: #fff; background: #5f5f5f", "color: #fff; background: #4bc729", "");

},{"bundle-text:./style/index.less":"SvnDa","option-validator":"2tbdu","./config":"2ZnKD","./control":"faO0X","./events":"dz5ul","./icons":"gP6M7","./layer":"fvy8V","./loading":"h8KPY","./mask":"llnR4","./player":"35XKf","./plugins":"h1hfO","./scheme":"gL38d","./storage":"feFxw","./template":"bDTDS","./utils":"jmgNb","./utils/emitter":"elSLF","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"SvnDa":[function(require,module,exports) {
module.exports = ".art-video-player .art-video {\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  background-color: #000;\n  position: absolute;\n  inset: 0;\n}\n\n.art-video-player .art-poster {\n  z-index: 11;\n  width: 100%;\n  height: 100%;\n  user-select: none;\n  pointer-events: none;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  inset: 0;\n}\n\n.art-video-player .art-danmuku {\n  z-index: 30;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n}\n\n.art-video-player .art-layers {\n  z-index: 40;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  display: none;\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n}\n\n.art-video-player .art-layers .art-layer {\n  pointer-events: auto;\n}\n\n.art-video-player.art-layer-show .art-layers {\n  display: block;\n}\n\n.art-video-player .art-mask {\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  justify-content: center;\n  align-items: center;\n  display: none;\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n}\n\n.art-video-player .art-mask .art-state {\n  width: 60px;\n  height: 60px;\n  opacity: .85;\n  cursor: pointer;\n  pointer-events: auto;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  position: absolute;\n  bottom: 65px;\n  right: 30px;\n}\n\n.art-video-player.art-mask-show .art-mask {\n  display: flex;\n}\n\n.art-video-player.art-mobile .art-state {\n  position: static;\n}\n\n.art-video-player .art-loading {\n  z-index: 70;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  justify-content: center;\n  align-items: center;\n  display: none;\n  position: absolute;\n  inset: 0;\n}\n\n.art-video-player.art-loading-show .art-loading {\n  display: flex;\n}\n\n.art-video-player .art-bottom {\n  z-index: 60;\n  height: 100px;\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  background-image: linear-gradient(to top, #000, #0006, #0000);\n  background-position: bottom;\n  background-repeat: repeat-x;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 50px 10px 0;\n  transition: all .2s ease-in-out;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.art-video-player .art-bottom .art-controls {\n  z-index: 1;\n  pointer-events: auto;\n  height: 45px;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  position: relative;\n}\n\n.art-video-player .art-bottom .art-controls .art-controls-left, .art-video-player .art-bottom .art-controls .art-controls-right {\n  display: flex;\n}\n\n.art-video-player .art-bottom .art-controls .art-controls-center {\n  height: 100%;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  display: flex;\n}\n\n.art-video-player .art-bottom .art-controls .art-controls-center .art-progress {\n  z-index: 0;\n  pointer-events: auto;\n  flex: 1;\n  position: relative;\n}\n\n.art-video-player .art-bottom .art-controls .art-controls-center .art-progress .art-control-progress {\n  height: 4px;\n  cursor: pointer;\n  flex-direction: row;\n  align-items: center;\n  display: flex;\n  position: relative;\n}\n\n.art-video-player .art-bottom .art-controls .art-controls-center .art-progress .art-control-progress .art-control-progress-inner {\n  height: 50%;\n  width: 100%;\n  background: #fff3;\n  align-items: center;\n  transition: all .2s;\n  display: flex;\n  position: relative;\n}\n\n.art-video-player .art-bottom .art-controls .art-controls-center .art-progress .art-control-progress .art-control-progress-inner .art-progress-loaded {\n  z-index: 10;\n  height: 100%;\n  width: 0;\n  background: #fff6;\n  position: absolute;\n  inset: 0;\n}\n\n.art-video-player .art-bottom .art-controls .art-controls-center .art-progress .art-control-progress .art-control-progress-inner .art-progress-played {\n  z-index: 20;\n  height: 100%;\n  width: 0;\n  position: absolute;\n  inset: 0;\n}\n\n.art-video-player .art-bottom .art-controls .art-controls-center .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator {\n  visibility: hidden;\n  z-index: 40;\n  border-radius: 50%;\n  justify-content: center;\n  align-items: center;\n  transition: transform .1s ease-in-out;\n  position: absolute;\n  transform: scale(.1);\n}\n\n.art-video-player .art-bottom .art-controls .art-controls-center .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator .art-icon {\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  user-select: none;\n}\n\n.art-video-player .art-bottom .art-controls .art-controls-center .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:hover {\n  transform: scale(1.2) !important;\n}\n\n.art-video-player .art-bottom .art-controls .art-controls-center .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip {\n  z-index: 50;\n  height: 20px;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background: #000000b3;\n  border-radius: 3px;\n  padding: 0 5px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 20px;\n  display: none;\n  position: absolute;\n  top: -25px;\n  left: 0;\n}\n\n.art-video-player .art-bottom .art-controls .art-controls-center .art-progress .art-control-loop {\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  display: none;\n  position: absolute;\n  inset: 0;\n}\n\n.art-video-player .art-bottom .art-controls .art-controls-center .art-progress .art-control-loop .art-loop-point {\n  width: 2px;\n  height: 8px;\n  background: #ffffffbf;\n  position: absolute;\n  top: -2px;\n  left: 0;\n}\n\n.art-video-player .art-bottom .art-controls .art-controls-right {\n  justify-content: flex-end;\n}\n\n.art-video-player .art-bottom .art-controls .art-control {\n  opacity: .9;\n  min-height: 36px;\n  min-width: 36px;\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  line-height: 1;\n  display: flex;\n}\n\n.art-video-player .art-bottom .art-controls .art-control .art-icon {\n  float: left;\n  height: 36px;\n  width: 36px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.art-video-player .art-bottom .art-controls .art-control:hover {\n  opacity: 1;\n}\n\n.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel {\n  float: left;\n  width: 0;\n  height: 100%;\n  transition: margin .2s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1);\n  position: relative;\n  overflow: hidden;\n}\n\n.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle {\n  width: 12px;\n  height: 12px;\n  background: #fff;\n  border-radius: 12px;\n  margin-top: -6px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n}\n\n.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:before {\n  background: #fff;\n  left: -54px;\n}\n\n.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:after {\n  background: #fff3;\n  left: 6px;\n}\n\n.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:before, .art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:after {\n  content: \"\";\n  height: 3px;\n  width: 60px;\n  margin-top: -2px;\n  display: block;\n  position: absolute;\n  top: 50%;\n}\n\n.art-video-player .art-bottom .art-controls .art-control-volume:hover .art-volume-panel {\n  width: 60px;\n}\n\n.art-video-player .art-bottom .art-controls .art-control-quality {\n  z-index: 30;\n  position: relative;\n}\n\n.art-video-player .art-bottom .art-controls .art-control-quality .art-qualitys {\n  width: 100px;\n  text-align: center;\n  color: #fff;\n  background: #000c;\n  border-radius: 3px;\n  padding: 5px 0;\n  display: none;\n  position: absolute;\n  bottom: 35px;\n}\n\n.art-video-player .art-bottom .art-controls .art-control-quality .art-qualitys .art-quality-item {\n  height: 30px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-shadow: 0 0 2px #00000080;\n  line-height: 30px;\n  overflow: hidden;\n}\n\n.art-video-player .art-bottom .art-controls .art-control-quality .art-qualitys .art-quality-item:hover {\n  background-color: #ffffff1a;\n}\n\n.art-video-player .art-bottom .art-controls .art-control-quality:hover .art-qualitys {\n  display: block;\n}\n\n.art-video-player .art-bottom:hover .art-progress .art-control-progress .art-control-progress-inner {\n  height: 100%;\n}\n\n.art-video-player .art-bottom:hover .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator {\n  visibility: visible;\n  transform: scale(1);\n}\n\n.art-video-player.art-control-show .art-bottom, .art-video-player.art-hover .art-bottom {\n  opacity: 1;\n  visibility: visible;\n}\n\n.art-video-player.art-error .art-progress-indicator, .art-video-player.art-destroy .art-progress-indicator, .art-video-player.art-error .art-progress-tip, .art-video-player.art-destroy .art-progress-tip {\n  display: none !important;\n}\n\n.art-video-player.art-mobile .art-bottom {\n  height: 105px;\n  padding: 50px 7px 0;\n}\n\n.art-video-player.art-mobile .art-bottom .art-controls {\n  height: 40px;\n}\n\n.art-video-player.art-mobile .art-bottom .art-progress-indicator {\n  visibility: visible !important;\n  transform: scale(1) !important;\n}\n\n.art-video-player .art-info {\n  z-index: 100;\n  width: 350px;\n  color: #fff;\n  -webkit-font-smoothing: antialiased;\n  background-color: #000000e6;\n  flex-direction: column;\n  padding: 10px;\n  font-family: Noto Sans CJK SC DemiLight, Roboto, Segoe UI, Tahoma, Arial, Helvetica, sans-serif;\n  font-size: 12px;\n  display: none;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n\n.art-video-player .art-info .art-info-item {\n  margin-bottom: 5px;\n  display: flex;\n}\n\n.art-video-player .art-info .art-info-item .art-info-title {\n  width: 100px;\n  text-align: right;\n}\n\n.art-video-player .art-info .art-info-item .art-info-content {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  user-select: all;\n  flex: 1;\n  padding-left: 5px;\n  overflow: hidden;\n}\n\n.art-video-player .art-info .art-info-item:last-child {\n  margin-bottom: 0;\n}\n\n.art-video-player .art-info .art-info-close {\n  cursor: pointer;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n.art-video-player.art-info-show .art-info {\n  display: flex;\n}\n\n.art-video-player.art-hide-cursor * {\n  cursor: none !important;\n}\n\n.art-video-player[data-aspect-ratio] video {\n  box-sizing: content-box;\n  object-fit: fill;\n}\n\n.art-auto-size {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.art-auto-size .art-video-player {\n  transition: all .2s;\n}\n\n.art-video-player[data-flip=\"horizontal\"] .art-video {\n  transform: scaleX(-1);\n}\n\n.art-video-player[data-flip=\"vertical\"] .art-video {\n  transform: scaleY(-1);\n}\n\n.art-video-player .art-layer-miniProgressBar {\n  height: 2px;\n  background-color: var(--theme);\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.art-video-player .art-layer-lock {\n  height: 34px;\n  width: 34px;\n  color: #fff;\n  background-color: #00000080;\n  border-radius: 50%;\n  justify-content: center;\n  align-items: center;\n  display: none;\n  position: absolute;\n  top: calc(50% - 17px);\n  left: 15px;\n}\n\n.art-video-player.art-lock .art-bottom {\n  display: none !important;\n}\n\n.art-video-player.art-lock .art-layer-miniProgressBar {\n  display: block !important;\n}\n\n.art-video-player.art-control-show .art-layer-miniProgressBar {\n  display: none;\n}\n\n.art-video-player.art-control-show .art-layer-lock {\n  display: flex;\n}\n\n.art-video-player .art-control-selector {\n  position: relative;\n}\n\n.art-video-player .art-control-selector .art-selector-list {\n  min-width: 100px;\n  max-width: 200px;\n  max-height: 200px;\n  text-align: center;\n  color: #fff;\n  background-color: #000c;\n  border-radius: 3px;\n  padding: 5px 0;\n  display: none;\n  position: absolute;\n  bottom: 35px;\n  overflow: auto;\n}\n\n.art-video-player .art-control-selector .art-selector-list .art-selector-item {\n  height: 30px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-shadow: 0 0 2px #00000080;\n  padding: 0 5px;\n  line-height: 30px;\n  overflow: hidden;\n}\n\n.art-video-player .art-control-selector .art-selector-list .art-selector-item:hover {\n  background-color: #ffffff1a;\n}\n\n.art-video-player .art-control-selector .art-selector-list .art-selector-item:hover, .art-video-player .art-control-selector .art-selector-list .art-selector-item.art-current {\n  color: var(--theme);\n}\n\n.art-video-player .art-control-selector:hover .art-selector-list {\n  display: block;\n}\n\n[class*=\"hint--\"] {\n  font-style: normal;\n  display: inline-block;\n  position: relative;\n}\n\n[class*=\"hint--\"]:before, [class*=\"hint--\"]:after {\n  visibility: hidden;\n  opacity: 0;\n  z-index: 1000000;\n  pointer-events: none;\n  transition: all .3s;\n  transition-delay: 0s;\n  position: absolute;\n  transform: translate3d(0, 0, 0);\n}\n\n[class*=\"hint--\"]:hover:before, [class*=\"hint--\"]:hover:after {\n  visibility: visible;\n  opacity: 1;\n  transition-delay: .1s;\n}\n\n[class*=\"hint--\"]:before {\n  content: \"\";\n  z-index: 1000001;\n  background: none;\n  border: 6px solid #0000;\n  position: absolute;\n}\n\n[class*=\"hint--\"]:after {\n  color: #fff;\n  white-space: nowrap;\n  background: #000;\n  padding: 8px 10px;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  line-height: 12px;\n}\n\n[class*=\"hint--\"][aria-label]:after {\n  content: attr(aria-label);\n}\n\n[class*=\"hint--\"][data-hint]:after {\n  content: attr(data-hint);\n}\n\n[aria-label=\"\"]:before, [aria-label=\"\"]:after, [data-hint=\"\"]:before, [data-hint=\"\"]:after {\n  display: none !important;\n}\n\n.hint--top-left:before, .hint--top-right:before, .hint--top:before {\n  border-top-color: #000;\n}\n\n.hint--bottom-left:before, .hint--bottom-right:before, .hint--bottom:before {\n  border-bottom-color: #000;\n}\n\n.hint--left:before {\n  border-left-color: #000;\n}\n\n.hint--right:before {\n  border-right-color: #000;\n}\n\n.hint--top:before {\n  margin-bottom: -11px;\n}\n\n.hint--top:before, .hint--top:after {\n  bottom: 100%;\n  left: 50%;\n}\n\n.hint--top:before {\n  left: calc(50% - 6px);\n}\n\n.hint--top:after {\n  transform: translateX(-50%);\n}\n\n.hint--top:hover:before {\n  transform: translateY(-8px);\n}\n\n.hint--top:hover:after {\n  transform: translateX(-50%)translateY(-8px);\n}\n\n.hint--bottom:before {\n  margin-top: -11px;\n}\n\n.hint--bottom:before, .hint--bottom:after {\n  top: 100%;\n  left: 50%;\n}\n\n.hint--bottom:before {\n  left: calc(50% - 6px);\n}\n\n.hint--bottom:after {\n  transform: translateX(-50%);\n}\n\n.hint--bottom:hover:before {\n  transform: translateY(8px);\n}\n\n.hint--bottom:hover:after {\n  transform: translateX(-50%)translateY(8px);\n}\n\n.hint--right:before {\n  margin-bottom: -6px;\n  margin-left: -11px;\n}\n\n.hint--right:after {\n  margin-bottom: -14px;\n}\n\n.hint--right:before, .hint--right:after {\n  bottom: 50%;\n  left: 100%;\n}\n\n.hint--right:hover:before, .hint--right:hover:after {\n  transform: translateX(8px);\n}\n\n.hint--left:before {\n  margin-bottom: -6px;\n  margin-right: -11px;\n}\n\n.hint--left:after {\n  margin-bottom: -14px;\n}\n\n.hint--left:before, .hint--left:after {\n  bottom: 50%;\n  right: 100%;\n}\n\n.hint--left:hover:before, .hint--left:hover:after {\n  transform: translateX(-8px);\n}\n\n.hint--top-left:before {\n  margin-bottom: -11px;\n}\n\n.hint--top-left:before, .hint--top-left:after {\n  bottom: 100%;\n  left: 50%;\n}\n\n.hint--top-left:before {\n  left: calc(50% - 6px);\n}\n\n.hint--top-left:after {\n  margin-left: 12px;\n  transform: translateX(-100%);\n}\n\n.hint--top-left:hover:before {\n  transform: translateY(-8px);\n}\n\n.hint--top-left:hover:after {\n  transform: translateX(-100%)translateY(-8px);\n}\n\n.hint--top-right:before {\n  margin-bottom: -11px;\n}\n\n.hint--top-right:before, .hint--top-right:after {\n  bottom: 100%;\n  left: 50%;\n}\n\n.hint--top-right:before {\n  left: calc(50% - 6px);\n}\n\n.hint--top-right:after {\n  margin-left: -12px;\n  transform: translateX(0);\n}\n\n.hint--top-right:hover:before, .hint--top-right:hover:after {\n  transform: translateY(-8px);\n}\n\n.hint--bottom-left:before {\n  margin-top: -11px;\n}\n\n.hint--bottom-left:before, .hint--bottom-left:after {\n  top: 100%;\n  left: 50%;\n}\n\n.hint--bottom-left:before {\n  left: calc(50% - 6px);\n}\n\n.hint--bottom-left:after {\n  margin-left: 12px;\n  transform: translateX(-100%);\n}\n\n.hint--bottom-left:hover:before {\n  transform: translateY(8px);\n}\n\n.hint--bottom-left:hover:after {\n  transform: translateX(-100%)translateY(8px);\n}\n\n.hint--bottom-right:before {\n  margin-top: -11px;\n}\n\n.hint--bottom-right:before, .hint--bottom-right:after {\n  top: 100%;\n  left: 50%;\n}\n\n.hint--bottom-right:before {\n  left: calc(50% - 6px);\n}\n\n.hint--bottom-right:after {\n  margin-left: -12px;\n  transform: translateX(0);\n}\n\n.hint--bottom-right:hover:before, .hint--bottom-right:hover:after {\n  transform: translateY(8px);\n}\n\n.hint--small:after, .hint--medium:after, .hint--large:after {\n  white-space: normal;\n  word-wrap: break-word;\n  line-height: 1.4em;\n}\n\n.hint--small:after {\n  width: 80px;\n}\n\n.hint--medium:after {\n  width: 150px;\n}\n\n.hint--large:after {\n  width: 300px;\n}\n\n[class*=\"hint--\"]:after {\n  text-shadow: 0 -1px #000;\n  box-shadow: 4px 4px 8px #0000004d;\n}\n\n.hint--error:after {\n  text-shadow: 0 -1px #592726;\n  background-color: #b34e4d;\n}\n\n.hint--error.hint--top-left:before, .hint--error.hint--top-right:before, .hint--error.hint--top:before {\n  border-top-color: #b34e4d;\n}\n\n.hint--error.hint--bottom-left:before, .hint--error.hint--bottom-right:before, .hint--error.hint--bottom:before {\n  border-bottom-color: #b34e4d;\n}\n\n.hint--error.hint--left:before {\n  border-left-color: #b34e4d;\n}\n\n.hint--error.hint--right:before {\n  border-right-color: #b34e4d;\n}\n\n.hint--warning:after {\n  text-shadow: 0 -1px #6c5328;\n  background-color: #c09854;\n}\n\n.hint--warning.hint--top-left:before, .hint--warning.hint--top-right:before, .hint--warning.hint--top:before {\n  border-top-color: #c09854;\n}\n\n.hint--warning.hint--bottom-left:before, .hint--warning.hint--bottom-right:before, .hint--warning.hint--bottom:before {\n  border-bottom-color: #c09854;\n}\n\n.hint--warning.hint--left:before {\n  border-left-color: #c09854;\n}\n\n.hint--warning.hint--right:before {\n  border-right-color: #c09854;\n}\n\n.hint--info:after {\n  text-shadow: 0 -1px #1a3c4d;\n  background-color: #3986ac;\n}\n\n.hint--info.hint--top-left:before, .hint--info.hint--top-right:before, .hint--info.hint--top:before {\n  border-top-color: #3986ac;\n}\n\n.hint--info.hint--bottom-left:before, .hint--info.hint--bottom-right:before, .hint--info.hint--bottom:before {\n  border-bottom-color: #3986ac;\n}\n\n.hint--info.hint--left:before {\n  border-left-color: #3986ac;\n}\n\n.hint--info.hint--right:before {\n  border-right-color: #3986ac;\n}\n\n.hint--success:after {\n  text-shadow: 0 -1px #1a321a;\n  background-color: #458746;\n}\n\n.hint--success.hint--top-left:before, .hint--success.hint--top-right:before, .hint--success.hint--top:before {\n  border-top-color: #458746;\n}\n\n.hint--success.hint--bottom-left:before, .hint--success.hint--bottom-right:before, .hint--success.hint--bottom:before {\n  border-bottom-color: #458746;\n}\n\n.hint--success.hint--left:before {\n  border-left-color: #458746;\n}\n\n.hint--success.hint--right:before {\n  border-right-color: #458746;\n}\n\n.hint--always:after, .hint--always:before {\n  opacity: 1;\n  visibility: visible;\n}\n\n.hint--always.hint--top:before {\n  transform: translateY(-8px);\n}\n\n.hint--always.hint--top:after {\n  transform: translateX(-50%)translateY(-8px);\n}\n\n.hint--always.hint--top-left:before {\n  transform: translateY(-8px);\n}\n\n.hint--always.hint--top-left:after {\n  transform: translateX(-100%)translateY(-8px);\n}\n\n.hint--always.hint--top-right:before, .hint--always.hint--top-right:after {\n  transform: translateY(-8px);\n}\n\n.hint--always.hint--bottom:before {\n  transform: translateY(8px);\n}\n\n.hint--always.hint--bottom:after {\n  transform: translateX(-50%)translateY(8px);\n}\n\n.hint--always.hint--bottom-left:before {\n  transform: translateY(8px);\n}\n\n.hint--always.hint--bottom-left:after {\n  transform: translateX(-100%)translateY(8px);\n}\n\n.hint--always.hint--bottom-right:before, .hint--always.hint--bottom-right:after {\n  transform: translateY(8px);\n}\n\n.hint--always.hint--left:before, .hint--always.hint--left:after {\n  transform: translateX(-8px);\n}\n\n.hint--always.hint--right:before, .hint--always.hint--right:after {\n  transform: translateX(8px);\n}\n\n.hint--rounded:after {\n  border-radius: 4px;\n}\n\n.hint--no-animate:before, .hint--no-animate:after {\n  transition-duration: 0s;\n}\n\n.hint--bounce:before, .hint--bounce:after {\n  -webkit-transition: opacity .3s, visibility .3s, -webkit-transform .3s cubic-bezier(.71, 1.7, .77, 1.24);\n  -moz-transition: opacity .3s, visibility .3s, -moz-transform .3s cubic-bezier(.71, 1.7, .77, 1.24);\n  transition: opacity .3s, visibility .3s, transform .3s cubic-bezier(.71, 1.7, .77, 1.24);\n}\n\n.hint--no-shadow:before, .hint--no-shadow:after {\n  text-shadow: initial;\n  box-shadow: initial;\n}\n\n.hint--no-arrow:before {\n  display: none;\n}\n\n";

},{}],"2tbdu":[function(require,module,exports) {
!function(r, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    function e(r) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
            return typeof r;
        } : function(r) {
            return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        })(r);
    }
    var n = Object.prototype.toString, c = function(r) {
        if (void 0 === r) return "undefined";
        if (null === r) return "null";
        var t = e(r);
        if ("boolean" === t) return "boolean";
        if ("string" === t) return "string";
        if ("number" === t) return "number";
        if ("symbol" === t) return "symbol";
        if ("function" === t) return function(r) {
            return "GeneratorFunction" === o(r);
        }(r) ? "generatorfunction" : "function";
        if (function(r) {
            return Array.isArray ? Array.isArray(r) : r instanceof Array;
        }(r)) return "array";
        if (function(r) {
            if (r.constructor && "function" == typeof r.constructor.isBuffer) return r.constructor.isBuffer(r);
            return !1;
        }(r)) return "buffer";
        if (function(r) {
            try {
                if ("number" == typeof r.length && "function" == typeof r.callee) return !0;
            } catch (r1) {
                if (-1 !== r1.message.indexOf("callee")) return !0;
            }
            return !1;
        }(r)) return "arguments";
        if (function(r) {
            return r instanceof Date || "function" == typeof r.toDateString && "function" == typeof r.getDate && "function" == typeof r.setDate;
        }(r)) return "date";
        if (function(r) {
            return r instanceof Error || "string" == typeof r.message && r.constructor && "number" == typeof r.constructor.stackTraceLimit;
        }(r)) return "error";
        if (function(r) {
            return r instanceof RegExp || "string" == typeof r.flags && "boolean" == typeof r.ignoreCase && "boolean" == typeof r.multiline && "boolean" == typeof r.global;
        }(r)) return "regexp";
        switch(o(r)){
            case "Symbol":
                return "symbol";
            case "Promise":
                return "promise";
            case "WeakMap":
                return "weakmap";
            case "WeakSet":
                return "weakset";
            case "Map":
                return "map";
            case "Set":
                return "set";
            case "Int8Array":
                return "int8array";
            case "Uint8Array":
                return "uint8array";
            case "Uint8ClampedArray":
                return "uint8clampedarray";
            case "Int16Array":
                return "int16array";
            case "Uint16Array":
                return "uint16array";
            case "Int32Array":
                return "int32array";
            case "Uint32Array":
                return "uint32array";
            case "Float32Array":
                return "float32array";
            case "Float64Array":
                return "float64array";
        }
        if (function(r) {
            return "function" == typeof r.throw && "function" == typeof r.return && "function" == typeof r.next;
        }(r)) return "generator";
        switch(t = n.call(r)){
            case "[object Object]":
                return "object";
            case "[object Map Iterator]":
                return "mapiterator";
            case "[object Set Iterator]":
                return "setiterator";
            case "[object String Iterator]":
                return "stringiterator";
            case "[object Array Iterator]":
                return "arrayiterator";
        }
        return t.slice(8, -1).toLowerCase().replace(/\s/g, "");
    };
    function o(r) {
        return r.constructor ? r.constructor.name : null;
    }
    function f(r, t) {
        var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [
            "option"
        ];
        return s(r, t, e), y(r, t, e), function(a, i, u) {
            var r = c(i), t = c(a);
            if ("object" === r) {
                if ("object" !== t) throw new Error("[Type Error]: '".concat(u.join("."), "' require 'object' type, but got '").concat(t, "'"));
                Object.keys(i).forEach(function(r) {
                    var t = a[r], e = i[r], n = u.slice();
                    n.push(r), s(t, e, n), y(t, e, n), f(t, e, n);
                });
            }
            if ("array" === r) {
                if ("array" !== t) throw new Error("[Type Error]: '".concat(u.join("."), "' require 'array' type, but got '").concat(t, "'"));
                a.forEach(function(r, t) {
                    var e = a[t], n = i[t] || i[0], o = u.slice();
                    o.push(t), s(e, n, o), y(e, n, o), f(e, n, o);
                });
            }
        }(r, t, e), r;
    }
    function s(r, t, e) {
        if ("string" === c(t)) {
            var n = c(r);
            if ("?" === t[0] && (t = t.slice(1) + "|undefined"), !(-1 < t.indexOf("|") ? t.split("|").map(function(r) {
                return r.toLowerCase().trim();
            }).filter(Boolean).some(function(r) {
                return n === r;
            }) : t.toLowerCase().trim() === n)) throw new Error("[Type Error]: '".concat(e.join("."), "' require '").concat(t, "' type, but got '").concat(n, "'"));
        }
    }
    function y(r, t, e) {
        if ("function" === c(t)) {
            var n = t(r, c(r), e);
            if (!0 !== n) {
                var o = c(n);
                throw "string" === o ? new Error(n) : "error" === o ? n : new Error("[Validator Error]: The scheme for '".concat(e.join("."), "' validator require return true, but got '").concat(n, "'"));
            }
        }
    }
    return f.kindOf = c, f;
});

},{}],"2ZnKD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    propertys: [
        "audioTracks",
        "autoplay",
        "buffered",
        "controller",
        "controls",
        "crossOrigin",
        "currentSrc",
        "currentTime",
        "defaultMuted",
        "defaultPlaybackRate",
        "duration",
        "ended",
        "error",
        "loop",
        "mediaGroup",
        "muted",
        "networkState",
        "paused",
        "playbackRate",
        "played",
        "preload",
        "readyState",
        "seekable",
        "seeking",
        "src",
        "startDate",
        "textTracks",
        "videoTracks",
        "volume"
    ],
    methods: [
        "addTextTrack",
        "canPlayType",
        "load",
        "play",
        "pause"
    ],
    events: [
        "abort",
        "canplay",
        "canplaythrough",
        "durationchange",
        "emptied",
        "ended",
        "error",
        "loadeddata",
        "loadedmetadata",
        "loadstart",
        "pause",
        "play",
        "playing",
        "progress",
        "ratechange",
        "seeked",
        "seeking",
        "stalled",
        "suspend",
        "timeupdate",
        "volumechange",
        "waiting"
    ],
    prototypes: [
        "width",
        "height",
        "videoWidth",
        "videoHeight",
        "poster",
        "webkitDecodedFrameCount",
        "webkitDroppedFrameCount",
        "playsInline",
        "webkitSupportsFullscreen",
        "webkitDisplayingFullscreen",
        "onenterpictureinpicture",
        "onleavepictureinpicture",
        "disablePictureInPicture",
        "cancelVideoFrameCallback",
        "requestVideoFrameCallback",
        "getVideoPlaybackQuality",
        "requestPictureInPicture",
        "webkitEnterFullScreen",
        "webkitEnterFullscreen",
        "webkitExitFullScreen",
        "webkitExitFullscreen"
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"5dUr6":[function(require,module,exports) {
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

},{}],"faO0X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
var _component = require("../utils/component");
var _componentDefault = parcelHelpers.interopDefault(_component);
var _fullscreen = require("./fullscreen");
var _fullscreenDefault = parcelHelpers.interopDefault(_fullscreen);
var _playAndPause = require("./playAndPause");
var _playAndPauseDefault = parcelHelpers.interopDefault(_playAndPause);
var _progress = require("./progress");
var _progressDefault = parcelHelpers.interopDefault(_progress);
var _time = require("./time");
var _timeDefault = parcelHelpers.interopDefault(_time);
var _volume = require("./volume");
var _volumeDefault = parcelHelpers.interopDefault(_volume);
class Control extends (0, _componentDefault.default) {
    constructor(art){
        super(art);
        this.name = "control";
        const { proxy , constructor , template: { $player  }  } = art;
        let activeTime = Date.now();
        proxy($player, [
            "click",
            "mousemove",
            "touchstart",
            "touchmove"
        ], ()=>{
            this.show = true;
            (0, _utils.removeClass)($player, "art-hide-cursor");
            (0, _utils.addClass)($player, "art-hover");
            activeTime = Date.now();
        });
        art.on("video:timeupdate", ()=>{
            if (!art.isInput && art.playing && this.show && Date.now() - activeTime >= constructor.CONTROL_HIDE_TIME) {
                this.show = false;
                (0, _utils.addClass)($player, "art-hide-cursor");
                (0, _utils.removeClass)($player, "art-hover");
            }
        });
        this.init();
    }
    init() {
        const { option  } = this.art;
        if (!option.isLive) this.add((0, _progressDefault.default)({
            name: "progress",
            position: "progress",
            index: 10
        }));
        this.add((0, _playAndPauseDefault.default)({
            name: "playAndPause",
            position: "left",
            index: 10
        }));
        this.add((0, _volumeDefault.default)({
            name: "volume",
            position: "left",
            index: 20
        }));
        if (!option.isLive) this.add((0, _timeDefault.default)({
            name: "time",
            position: "left",
            index: 30
        }));
        if (option.fullscreen) this.add((0, _fullscreenDefault.default)({
            name: "fullscreen",
            position: "right",
            index: 70
        }));
        for(let index = 0; index < option.controls.length; index++)this.add(option.controls[index]);
    }
    add(getOption) {
        const option = typeof getOption === "function" ? getOption(this.art) : getOption;
        const { $progress , $controlsLeft , $controlsRight  } = this.art.template;
        switch(option.position){
            case "progress":
                this.$parent = $progress;
                break;
            case "left":
                this.$parent = $controlsLeft;
                break;
            case "right":
                this.$parent = $controlsRight;
                break;
            default:
                (0, _utils.errorHandle)(false, `Control option.position must one of 'top', 'left', 'right'`);
                break;
        }
        super.add(option);
    }
}
exports.default = Control;

},{"../utils":"jmgNb","../utils/component":"bgug2","./fullscreen":"bHDMy","./playAndPause":"gt2F0","./progress":"aHyb0","./time":"hL9ry","./volume":"3G9Wa","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"jmgNb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _compatibility = require("./compatibility");
parcelHelpers.exportAll(_compatibility, exports);
var _dom = require("./dom");
parcelHelpers.exportAll(_dom, exports);
var _error = require("./error");
parcelHelpers.exportAll(_error, exports);
var _file = require("./file");
parcelHelpers.exportAll(_file, exports);
var _format = require("./format");
parcelHelpers.exportAll(_format, exports);
var _property = require("./property");
parcelHelpers.exportAll(_property, exports);
var _time = require("./time");
parcelHelpers.exportAll(_time, exports);

},{"./compatibility":"gotDS","./dom":"dNynC","./error":"622b3","./file":"luB4T","./format":"eWip5","./property":"91nLd","./time":"f9kBR","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"gotDS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userAgent", ()=>userAgent);
parcelHelpers.export(exports, "isMobile", ()=>isMobile);
parcelHelpers.export(exports, "isSafari", ()=>isSafari);
parcelHelpers.export(exports, "isWechat", ()=>isWechat);
parcelHelpers.export(exports, "isIE", ()=>isIE);
parcelHelpers.export(exports, "isAndroid", ()=>isAndroid);
parcelHelpers.export(exports, "isIOS", ()=>isIOS);
const userAgent = typeof window !== "undefined" ? window.navigator.userAgent : "";
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
const isWechat = /MicroMessenger/i.test(userAgent);
const isIE = /MSIE|Trident/i.test(userAgent);
const isAndroid = /android/i.test(userAgent);
const isIOS = /iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"dNynC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "query", ()=>query);
parcelHelpers.export(exports, "queryAll", ()=>queryAll);
parcelHelpers.export(exports, "addClass", ()=>addClass);
parcelHelpers.export(exports, "removeClass", ()=>removeClass);
parcelHelpers.export(exports, "hasClass", ()=>hasClass);
parcelHelpers.export(exports, "append", ()=>append);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "setStyle", ()=>setStyle);
parcelHelpers.export(exports, "setStyles", ()=>setStyles);
parcelHelpers.export(exports, "getStyle", ()=>getStyle);
parcelHelpers.export(exports, "sublings", ()=>sublings);
parcelHelpers.export(exports, "inverseClass", ()=>inverseClass);
parcelHelpers.export(exports, "tooltip", ()=>tooltip);
parcelHelpers.export(exports, "isInViewport", ()=>isInViewport);
parcelHelpers.export(exports, "includeFromEvent", ()=>includeFromEvent);
parcelHelpers.export(exports, "replaceElement", ()=>replaceElement);
parcelHelpers.export(exports, "createElement", ()=>createElement);
var _compatibility = require("./compatibility");
function query(selector, parent = document) {
    return parent.querySelector(selector);
}
function queryAll(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
}
function addClass(target, className) {
    return target.classList.add(className);
}
function removeClass(target, className) {
    return target.classList.remove(className);
}
function hasClass(target, className) {
    return target.classList.contains(className);
}
function append(parent, child) {
    if (child instanceof Element) parent.appendChild(child);
    else parent.insertAdjacentHTML("beforeend", String(child));
    return parent.lastElementChild || parent.lastChild;
}
function remove(child) {
    return child.parentNode.removeChild(child);
}
function setStyle(element, key, value) {
    element.style[key] = value;
    return element;
}
function setStyles(element, styles) {
    Object.keys(styles).forEach((key)=>{
        setStyle(element, key, styles[key]);
    });
    return element;
}
function getStyle(element, key, numberType = true) {
    const value = window.getComputedStyle(element, null).getPropertyValue(key);
    return numberType ? parseFloat(value) : value;
}
function sublings(target) {
    return Array.from(target.parentElement.children).filter((item)=>item !== target);
}
function inverseClass(target, className) {
    sublings(target).forEach((item)=>removeClass(item, className));
    addClass(target, className);
}
function tooltip(target, msg, pos = "top") {
    if (0, _compatibility.isMobile) return;
    target.setAttribute("aria-label", msg);
    addClass(target, "hint--rounded");
    addClass(target, `hint--${pos}`);
}
function isInViewport(el, offset = 0) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const vertInView = rect.top - offset <= windowHeight && rect.top + rect.height + offset >= 0;
    const horInView = rect.left - offset <= windowWidth + offset && rect.left + rect.width + offset >= 0;
    return vertInView && horInView;
}
function includeFromEvent(event, target) {
    return event.composedPath && event.composedPath().indexOf(target) > -1;
}
function replaceElement(newChild, oldChild) {
    oldChild.parentNode.replaceChild(newChild, oldChild);
    return newChild;
}
function createElement(tag) {
    return document.createElement(tag);
}

},{"./compatibility":"gotDS","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"622b3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ArtPlayerError", ()=>ArtPlayerError);
parcelHelpers.export(exports, "errorHandle", ()=>errorHandle);
class ArtPlayerError extends Error {
    constructor(message, context){
        super(message);
        if (typeof Error.captureStackTrace === "function") Error.captureStackTrace(this, context || this.constructor);
        this.name = "ArtPlayerError";
    }
}
function errorHandle(condition, msg) {
    if (!condition) throw new ArtPlayerError(msg);
    return condition;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"luB4T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getExt", ()=>getExt);
parcelHelpers.export(exports, "download", ()=>download);
function getExt(url) {
    if (url.includes("?")) return getExt(url.split("?")[0]);
    if (url.includes("#")) return getExt(url.split("#")[0]);
    return url.trim().toLowerCase().split(".").pop();
}
function download(url, name) {
    const elink = document.createElement("a");
    elink.style.display = "none";
    elink.href = url;
    elink.download = name;
    document.body.appendChild(elink);
    elink.click();
    document.body.removeChild(elink);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"eWip5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "capitalize", ()=>capitalize);
parcelHelpers.export(exports, "isStringOrNumber", ()=>isStringOrNumber);
parcelHelpers.export(exports, "secondToTime", ()=>secondToTime);
parcelHelpers.export(exports, "escape", ()=>escape);
function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function isStringOrNumber(val) {
    return [
        "string",
        "number"
    ].includes(typeof val);
}
function secondToTime(second) {
    const add0 = (num)=>num < 10 ? `0${num}` : String(num);
    const hour = Math.floor(second / 3600);
    const min = Math.floor((second - hour * 3600) / 60);
    const sec = Math.floor(second - hour * 3600 - min * 60);
    return (hour > 0 ? [
        hour,
        min,
        sec
    ] : [
        min,
        sec
    ]).map(add0).join(":");
}
function escape(str) {
    return str.replace(/[&<>'"]/g, (tag)=>({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
        })[tag] || tag);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"91nLd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "def", ()=>def);
parcelHelpers.export(exports, "has", ()=>has);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "mergeDeep", ()=>mergeDeep);
const def = Object.defineProperty;
const { hasOwnProperty  } = Object.prototype;
function has(obj, name) {
    return hasOwnProperty.call(obj, name);
}
function get(obj, name) {
    return Object.getOwnPropertyDescriptor(obj, name);
}
function mergeDeep(...objects) {
    const isObject = (item)=>item && typeof item === "object" && !Array.isArray(item);
    return objects.reduce((prev, obj)=>{
        Object.keys(obj).forEach((key)=>{
            const pVal = prev[key];
            const oVal = obj[key];
            if (Array.isArray(pVal) && Array.isArray(oVal)) prev[key] = pVal.concat(...oVal);
            else if (isObject(pVal) && isObject(oVal) && !(oVal instanceof Element)) prev[key] = mergeDeep(pVal, oVal);
            else prev[key] = oVal;
        });
        return prev;
    }, {});
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"f9kBR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sleep", ()=>sleep);
parcelHelpers.export(exports, "debounce", ()=>debounce);
parcelHelpers.export(exports, "throttle", ()=>throttle);
function sleep(ms = 0) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
function debounce(func, wait, context) {
    let timeout;
    function fn(...args) {
        const later = function later() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }
    fn.clearTimeout = function ct() {
        clearTimeout(timeout);
    };
    return fn;
}
function throttle(callback, delay) {
    let isThrottled = false;
    let args;
    let context;
    function fn(...args2) {
        if (isThrottled) {
            args = args2;
            context = this;
            return;
        }
        isThrottled = true;
        callback.apply(this, args2);
        setTimeout(()=>{
            isThrottled = false;
            if (args) {
                fn.apply(context, args);
                args = null;
                context = null;
            }
        }, delay);
    }
    return fn;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"bgug2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom = require("./dom");
var _optionValidator = require("option-validator");
var _optionValidatorDefault = parcelHelpers.interopDefault(_optionValidator);
var _scheme = require("../scheme");
var _property = require("./property");
var _error = require("./error");
class Component {
    constructor(art){
        this.id = 0;
        this.art = art;
        this.add = this.add.bind(this);
    }
    get show() {
        return (0, _dom.hasClass)(this.art.template.$player, `art-${this.name}-show`);
    }
    set show(value) {
        const { $player  } = this.art.template;
        const className = `art-${this.name}-show`;
        if (value) (0, _dom.addClass)($player, className);
        else (0, _dom.removeClass)($player, className);
        this.art.emit(this.name, value);
    }
    set toggle(value) {
        if (value) this.show = !this.show;
    }
    add(getOption) {
        const option = typeof getOption === "function" ? getOption(this.art) : getOption;
        option.html = option.html || "";
        (0, _optionValidatorDefault.default)(option, (0, _scheme.ComponentOption));
        if (!this.$parent || !this.name || option.disable) return;
        const name = option.name || `${this.name}${this.id}`;
        (0, _error.errorHandle)(!(0, _property.has)(this, name), `Cannot add an existing name [${name}] to the [${this.name}]`);
        this.id += 1;
        const $ref = (0, _dom.createElement)("div");
        (0, _dom.addClass)($ref, `art-${this.name}`);
        (0, _dom.addClass)($ref, `art-${this.name}-${name}`);
        const childs = Array.from(this.$parent.children);
        $ref.dataset.index = option.index || this.id;
        const nextChild = childs.find((item)=>Number(item.dataset.index) >= Number($ref.dataset.index));
        if (nextChild) nextChild.insertAdjacentElement("beforebegin", $ref);
        else (0, _dom.append)(this.$parent, $ref);
        if (option.html) (0, _dom.append)($ref, option.html);
        if (option.style) (0, _dom.setStyles)($ref, option.style);
        if (option.tooltip) (0, _dom.tooltip)($ref, option.tooltip);
        if (option.click) this.art.events.proxy($ref, "click", (event)=>{
            event.preventDefault();
            option.click.call(this.art, this, event);
        });
        if (option.selector && [
            "left",
            "right"
        ].includes(option.position)) this.selector(option, $ref);
        if (option.mounted) option.mounted.call(this.art, $ref);
        (0, _property.def)(this, name, {
            value: $ref
        });
        return $ref;
    }
    selector(option, $ref) {
        const { hover , proxy  } = this.art.events;
        (0, _dom.addClass)($ref, "art-control-selector");
        const $value = (0, _dom.createElement)("div");
        (0, _dom.addClass)($value, "art-selector-value");
        (0, _dom.append)($value, option.html);
        $ref.innerText = "";
        (0, _dom.append)($ref, $value);
        const list = option.selector.map((item, index)=>`<div class="art-selector-item ${item.default ? "art-current" : ""}" data-index="${index}">${item.html}</div>`).join("");
        const $list = (0, _dom.createElement)("div");
        (0, _dom.addClass)($list, "art-selector-list");
        (0, _dom.append)($list, list);
        (0, _dom.append)($ref, $list);
        const setLeft = ()=>{
            const left = (0, _dom.getStyle)($ref, "width") / 2 - (0, _dom.getStyle)($list, "width") / 2;
            $list.style.left = `${left}px`;
        };
        hover($ref, setLeft);
        proxy($list, "click", async (event)=>{
            const path = event.composedPath() || [];
            const $item = path.find((item)=>(0, _dom.hasClass)(item, "art-selector-item"));
            if (!$item) return;
            (0, _dom.inverseClass)($item, "art-current");
            const index = Number($item.dataset.index);
            const find = option.selector[index] || {};
            $value.innerText = $item.innerText;
            if (option.onSelect) {
                const result = await option.onSelect.call(this.art, find, $item, event);
                if (typeof result === "string" || typeof result === "number") $value.innerHTML = result;
            }
            setLeft();
            this.art.emit("selector", find, $item);
        });
    }
}
exports.default = Component;

},{"./dom":"dNynC","option-validator":"2tbdu","../scheme":"gL38d","./property":"91nLd","./error":"622b3","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"gL38d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ComponentOption", ()=>ComponentOption);
var _utils = require("../utils");
const a = "array";
const b = "boolean";
const s = "string";
const n = "number";
const o = "object";
const f = "function";
const r = "regexp";
function validElement(value, type, paths) {
    return (0, _utils.errorHandle)(type === s || type === n || value instanceof Element, `${paths.join(".")} require '${s}' or 'Element' type`);
}
const ComponentOption = {
    html: validElement,
    disable: `?${b}`,
    name: `?${s}`,
    index: `?${n}`,
    style: `?${o}`,
    click: `?${f}`,
    mounted: `?${f}`,
    tooltip: `?${s}|${n}`,
    width: `?${n}`,
    selector: `?${a}`,
    onSelect: `?${f}`,
    switch: `?${b}`,
    onSwitch: `?${f}`,
    range: `?${a}`,
    onRange: `?${f}`,
    onChange: `?${f}`
};
exports.default = {
    id: s,
    container: validElement,
    url: s,
    poster: s,
    title: s,
    type: s,
    theme: s,
    lang: s,
    volume: n,
    isLive: b,
    muted: b,
    autoplay: b,
    autoSize: b,
    loop: b,
    flip: b,
    playbackRate: b,
    aspectRatio: b,
    screenshot: b,
    mutex: b,
    backdrop: b,
    fullscreen: b,
    miniProgressBar: b,
    useSSR: b,
    playsInline: b,
    lock: b,
    fastForward: b,
    autoOrientation: b,
    plugins: [
        f
    ],
    layers: [
        ComponentOption
    ],
    controls: [
        {
            ...ComponentOption,
            position: (value, _, paths)=>{
                const position = [
                    "top",
                    "left",
                    "right"
                ];
                return (0, _utils.errorHandle)(position.includes(value), `${paths.join(".")} only accept ${position.toString()} as parameters`);
            }
        }
    ],
    quality: [
        {
            default: `?${b}`,
            html: s,
            url: s
        }
    ],
    moreVideoAttr: o,
    icons: o,
    customType: o
};

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"bHDMy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function fullscreen(option) {
    return (art)=>({
            ...option,
            tooltip: "全屏",
            mounted: ($control)=>{
                const { proxy , icons  } = art;
                const $fullscreenOn = (0, _utils.append)($control, icons.fullscreenOn);
                const $fullscreenOff = (0, _utils.append)($control, icons.fullscreenOff);
                (0, _utils.setStyle)($fullscreenOff, "display", "none");
                proxy($control, "click", ()=>{
                    art.fullscreen = !art.fullscreen;
                });
                art.on("fullscreen", (value)=>{
                    if (value) {
                        (0, _utils.tooltip)($control, "退出全屏");
                        (0, _utils.setStyle)($fullscreenOn, "display", "none");
                        (0, _utils.setStyle)($fullscreenOff, "display", "inline-flex");
                    } else {
                        (0, _utils.tooltip)($control, "全屏");
                        (0, _utils.setStyle)($fullscreenOn, "display", "inline-flex");
                        (0, _utils.setStyle)($fullscreenOff, "display", "none");
                    }
                });
            }
        });
}
exports.default = fullscreen;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"gt2F0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function playAndPause(option) {
    return (art)=>({
            ...option,
            mounted: ($control)=>{
                const { proxy , icons  } = art;
                const $play = (0, _utils.append)($control, icons.play);
                const $pause = (0, _utils.append)($control, icons.pause);
                (0, _utils.tooltip)($play, "播放");
                (0, _utils.tooltip)($pause, "暂停");
                proxy($play, "click", ()=>{
                    art.play();
                });
                proxy($pause, "click", ()=>{
                    art.pause();
                });
                function showPlay() {
                    (0, _utils.setStyle)($play, "display", "flex");
                    (0, _utils.setStyle)($pause, "display", "none");
                }
                function showPause() {
                    (0, _utils.setStyle)($play, "display", "none");
                    (0, _utils.setStyle)($pause, "display", "flex");
                }
                if (art.playing) showPause();
                else showPlay();
                art.on("video:playing", ()=>{
                    showPause();
                });
                art.on("video:pause", ()=>{
                    showPlay();
                });
            }
        });
}
exports.default = playAndPause;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"aHyb0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPosFromEvent", ()=>getPosFromEvent);
parcelHelpers.export(exports, "setCurrentTime", ()=>setCurrentTime);
var _utils = require("../utils");
function getPosFromEvent(art, event) {
    const { $progress  } = art.template;
    const { left  } = $progress.getBoundingClientRect();
    const eventLeft = (0, _utils.isMobile) ? event.touches[0].clientX : event.pageX;
    const width = (0, _utils.clamp)(eventLeft - left, 0, $progress.clientWidth);
    const second = width / $progress.clientWidth * art.duration;
    const time = (0, _utils.secondToTime)(second);
    const percentage = (0, _utils.clamp)(width / $progress.clientWidth, 0, 1);
    return {
        second,
        time,
        width,
        percentage
    };
}
function setCurrentTime(art, event) {
    if (art.isRotate) {
        const percentage = event.touches[0].clientY / art.height;
        const second = percentage * art.duration;
        art.emit("setBar", "played", percentage);
        art.seek = second;
    } else {
        const { second: second1 , percentage: percentage1  } = getPosFromEvent(art, event);
        art.emit("setBar", "played", percentage1);
        art.seek = second1;
    }
}
function progress(options) {
    return (art)=>{
        const { icons , proxy  } = art;
        return {
            ...options,
            html: `
                <div class="art-control-progress-inner">
                    <div class="art-progress-loaded"></div>
                    <div class="art-progress-played"></div>
                    <div class="art-progress-indicator"></div>
                    <div class="art-progress-tip"></div>
                </div>
            `,
            mounted: ($control)=>{
                let isDroging = false;
                const $loaded = (0, _utils.query)(".art-progress-loaded", $control);
                const $played = (0, _utils.query)(".art-progress-played", $control);
                const $indicator = (0, _utils.query)(".art-progress-indicator", $control);
                const $tip = (0, _utils.query)(".art-progress-tip", $control);
                const { PROGRESS_HEIGHT , INDICATOR_SIZE , INDICATOR_SIZE_ICON , INDICATOR_SIZE_MOBILE , INDICATOR_SIZE_MOBILE_ICON  } = art.constructor;
                (0, _utils.setStyle)($control, "height", `${PROGRESS_HEIGHT}px`);
                (0, _utils.setStyle)($played, "backgroundColor", "var(--theme)");
                let indicatorSize = INDICATOR_SIZE;
                if (icons.indicator) {
                    indicatorSize = INDICATOR_SIZE_ICON;
                    (0, _utils.append)($indicator, icons.indicator);
                } else (0, _utils.setStyles)($indicator, {
                    backgroundColor: "var(--theme)"
                });
                if (0, _utils.isMobile) {
                    indicatorSize = INDICATOR_SIZE_MOBILE;
                    if (icons.indicator) indicatorSize = INDICATOR_SIZE_MOBILE_ICON;
                }
                (0, _utils.setStyles)($indicator, {
                    left: `-${indicatorSize / 2}px`,
                    width: `${indicatorSize}px`,
                    height: `${indicatorSize}px`
                });
                function showTime(event) {
                    const { width , time  } = getPosFromEvent(art, event);
                    $tip.innerHTML = time;
                    const tipWidth = $tip.clientWidth;
                    if (width <= tipWidth / 2) (0, _utils.setStyle)($tip, "left", 0);
                    else if (width > $control.clientWidth - tipWidth / 2) (0, _utils.setStyle)($tip, "left", `${$control.clientWidth - tipWidth}px`);
                    else (0, _utils.setStyle)($tip, "left", `${width - tipWidth / 2}px`);
                }
                function setBar(type, percentage) {
                    if (type === "loaded") (0, _utils.setStyle)($loaded, "width", `${percentage * 100}%`);
                    if (type === "played") {
                        (0, _utils.setStyle)($played, "width", `${percentage * 100}%`);
                        (0, _utils.setStyle)($indicator, "left", `calc(${percentage * 100}% - ${indicatorSize / 2}px)`);
                    }
                }
                setBar("loaded", art.loaded);
                art.on("setBar", (type, percentage)=>{
                    setBar(type, percentage);
                });
                art.on("video:progress", ()=>{
                    setBar("loaded", art.loaded);
                });
                art.on("video:timeupdate", ()=>{
                    setBar("played", art.played);
                });
                art.on("video:ended", ()=>{
                    setBar("played", 1);
                });
                if (!(0, _utils.isMobile)) {
                    proxy($control, "click", (event)=>{
                        if (event.target !== $indicator) setCurrentTime(art, event);
                    });
                    proxy($control, "mousemove", (event)=>{
                        (0, _utils.setStyle)($tip, "display", "block");
                        showTime(event);
                    });
                    proxy($control, "mouseout", ()=>{
                        (0, _utils.setStyle)($tip, "display", "none");
                    });
                    proxy($control, "mousedown", ()=>{
                        isDroging = true;
                    });
                    proxy(document, "mousemove", (event)=>{
                        if (isDroging) {
                            const { second , percentage  } = getPosFromEvent(art, event);
                            setBar("played", percentage);
                            art.seek = second;
                        }
                    });
                    proxy(document, "mouseup", ()=>{
                        if (isDroging) isDroging = false;
                    });
                }
            }
        };
    };
}
exports.default = progress;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"hL9ry":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function time(option) {
    return (art)=>({
            ...option,
            style: {
                cursor: "auto",
                marginLeft: "10px"
            },
            mounted: ($control)=>{
                function getTime() {
                    const newTime = `${(0, _utils.secondToTime)(art.currentTime)} / ${(0, _utils.secondToTime)(art.duration)}`;
                    if (newTime !== $control.innerText) $control.innerText = newTime;
                }
                getTime();
                const events = [
                    "video:loadedmetadata",
                    "video:timeupdate",
                    "video:progress"
                ];
                for(let index = 0; index < events.length; index++)art.on(events[index], getTime);
            }
        });
}
exports.default = time;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"3G9Wa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function volume(option) {
    return (art)=>({
            ...option,
            mounted: ($control)=>{
                const { proxy , icons  } = art;
                let isDroging = false;
                const panelWidth = art.constructor.VOLUME_PANEL_WIDTH;
                const handleWidth = art.constructor.VOLUME_HANDLE_WIDTH;
                const $volume = (0, _utils.append)($control, icons.volume);
                const $volumeClose = (0, _utils.append)($control, icons.volumeClose);
                const $volumePanel = (0, _utils.append)($control, '<div class="art-volume-panel"></div>');
                const $volumeHandle = (0, _utils.append)($volumePanel, '<div class="art-volume-slider-handle"></div>');
                (0, _utils.tooltip)($volume, "静音");
                (0, _utils.setStyle)($volumeClose, "display", "none");
                if (0, _utils.isMobile) (0, _utils.setStyle)($volumePanel, "display", "none");
                function volumeChangeFromEvent(event) {
                    const { left: panelLeft  } = $volumePanel.getBoundingClientRect();
                    const percentage = (0, _utils.clamp)(event.pageX - panelLeft - handleWidth / 2, 0, panelWidth - handleWidth / 2) / (panelWidth - handleWidth);
                    return percentage;
                }
                function setVolumeHandle(percentage = 0.7) {
                    if (art.muted || percentage === 0) {
                        (0, _utils.setStyle)($volume, "display", "none");
                        (0, _utils.setStyle)($volumeClose, "display", "flex");
                        (0, _utils.setStyle)($volumeHandle, "left", "0");
                    } else {
                        const width = (panelWidth - handleWidth) * percentage;
                        (0, _utils.setStyle)($volume, "display", "flex");
                        (0, _utils.setStyle)($volumeClose, "display", "none");
                        (0, _utils.setStyle)($volumeHandle, "left", `${width}px`);
                    }
                }
                setVolumeHandle(art.volume);
                art.on("video:volumechange", ()=>{
                    setVolumeHandle(art.volume);
                });
                proxy($volume, "click", ()=>{
                    art.muted = true;
                });
                proxy($volumeClose, "click", ()=>{
                    art.muted = false;
                });
                proxy($volumePanel, "click", (event)=>{
                    art.muted = false;
                    art.volume = volumeChangeFromEvent(event);
                });
                proxy($volumeHandle, "mousedown", ()=>{
                    isDroging = true;
                });
                proxy($control, "mousemove", (event)=>{
                    if (isDroging) {
                        art.muted = false;
                        art.volume = volumeChangeFromEvent(event);
                    }
                });
                proxy(document, "mouseup", ()=>{
                    if (isDroging) isDroging = false;
                });
            }
        });
}
exports.default = volume;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"dz5ul":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _error = require("../utils/error");
var _clickInit = require("./clickInit");
var _clickInitDefault = parcelHelpers.interopDefault(_clickInit);
var _gestureInit = require("./gestureInit");
var _gestureInitDefault = parcelHelpers.interopDefault(_gestureInit);
var _hoverInit = require("./hoverInit");
var _hoverInitDefault = parcelHelpers.interopDefault(_hoverInit);
var _resizeInit = require("./resizeInit");
var _resizeInitDefault = parcelHelpers.interopDefault(_resizeInit);
var _viewInit = require("./viewInit");
var _viewInitDefault = parcelHelpers.interopDefault(_viewInit);
class Events {
    constructor(art){
        this.destroyEvents = [];
        this.proxy = this.proxy.bind(this);
        this.hover = this.hover.bind(this);
        this.loadImg = this.loadImg.bind(this);
        (0, _clickInitDefault.default)(art, this);
        (0, _hoverInitDefault.default)(art, this);
        (0, _resizeInitDefault.default)(art, this);
        (0, _gestureInitDefault.default)(art, this);
        (0, _viewInitDefault.default)(art, this);
    }
    proxy(target, name, callback, option = {}) {
        if (Array.isArray(name)) return name.map((item)=>this.proxy(target, item, callback, option));
        target.addEventListener(name, callback, option);
        const destroy = ()=>target.removeEventListener(name, callback, option);
        this.destroyEvents.push(destroy);
        return destroy;
    }
    hover(target, mouseenter, mouseleave) {
        if (mouseenter) this.proxy(target, "mouseenter", mouseenter);
        if (mouseleave) this.proxy(target, "mouseleave", mouseleave);
    }
    loadImg(img) {
        return new Promise((resolve, reject)=>{
            let image;
            if (img instanceof HTMLImageElement) image = img;
            else if (typeof img === "string") {
                image = new Image();
                image.src = img;
            } else return reject(new (0, _error.ArtPlayerError)("Unable to get Image"));
            if (image.complete) return resolve(image);
            this.proxy(image, "load", ()=>resolve(image));
            this.proxy(image, "error", ()=>reject(new (0, _error.ArtPlayerError)(`Failed to load Image: ${image.src}`)));
        });
    }
    destroy() {
        for(let index = 0; index < this.destroyEvents.length; index++)this.destroyEvents[index]();
    }
}
exports.default = Events;

},{"../utils/error":"622b3","./clickInit":"3fsfH","./gestureInit":"2IPOb","./hoverInit":"jr1ic","./resizeInit":"2r19L","./viewInit":"fmrIX","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"3fsfH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function clickInit(art, events) {
    const { constructor , template: { $player , $video  }  } = art;
    events.proxy(document, [
        "click",
        "contextmenu"
    ], (event)=>{
        if ((0, _utils.includeFromEvent)(event, $player)) {
            art.isInput = event.target.tagName === "INPUT";
            art.isFocus = true;
            art.emit("focus");
        } else {
            art.isInput = false;
            art.isFocus = false;
            art.emit("blur");
        }
    });
    let clickTime = 0;
    events.proxy($video, "click", ()=>{
        const now = Date.now();
        if (now - clickTime <= constructor.DB_CLICE_TIME) {
            art.emit("dblclick");
            if (0, _utils.isMobile) {
                if (!art.isLock) art.toggle();
            } else art.fullscreen = !art.fullscreen;
        } else {
            art.emit("click");
            if (!(0, _utils.isMobile)) art.toggle();
        }
        clickTime = now;
    });
}
exports.default = clickInit;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"2IPOb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _progress = require("../control/progress");
var _utils = require("../utils");
function gestureInit(art, events) {
    if ((0, _utils.isMobile) && !art.option.isLive) {
        const { $video , $progress  } = art.template;
        let touchTarget = null;
        let isDroging = false;
        let startX = 0;
        let startY = 0;
        let startTime = 0;
        const onTouchStart = (event)=>{
            if (event.touches.length === 1 && !art.isLock) {
                if (touchTarget === $progress) (0, _progress.setCurrentTime)(art, event);
                isDroging = true;
                const { clientX , clientY  } = event.touches[0];
                startX = clientX;
                startY = clientY;
                startTime = art.currentTime;
            }
        };
        const onTouchMove = (event)=>{
            if (event.touches.length === 1 && isDroging && art.duration) {
                const { clientX , clientY  } = event.touches[0];
                const ratioX = (0, _utils.clamp)((clientX - startX) / art.width, -1, 1);
                const ratioY = (0, _utils.clamp)((clientY - startY) / art.height, -1, 1);
                const ratio = art.isRotate ? ratioY : ratioX;
                const TOUCH_MOVE_RATIO = touchTarget === $video ? art.constructor.TOUCH_MOVE_RATIO : 1;
                const currentTime = (0, _utils.clamp)(startTime + art.duration * ratio * TOUCH_MOVE_RATIO, 0, art.duration);
                art.seek = currentTime;
                art.emit("setBar", "played", (0, _utils.clamp)(currentTime / art.duration, 0, 1));
            }
        };
        const onTouchEnd = ()=>{
            if (isDroging) {
                startX = 0;
                startY = 0;
                startTime = 0;
                isDroging = false;
                touchTarget = null;
            }
        };
        events.proxy($progress, "touchstart", (event)=>{
            touchTarget = $progress;
            onTouchStart(event);
        });
        events.proxy($video, "touchstart", (event)=>{
            touchTarget = $video;
            onTouchStart(event);
        });
        events.proxy($video, "touchmove", onTouchMove);
        events.proxy($progress, "touchmove", onTouchMove);
        events.proxy(document, "touchend", onTouchEnd);
    }
}
exports.default = gestureInit;

},{"../control/progress":"aHyb0","../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"jr1ic":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function hoverInit(art, events) {
    const { $player  } = art.template;
    events.hover($player, ()=>{
        (0, _utils.addClass)($player, "art-hover");
        art.emit("hover", true);
    }, ()=>{
        (0, _utils.removeClass)($player, "art-hover");
        art.emit("hover", false);
    });
}
exports.default = hoverInit;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"2r19L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function resizeInit(art, events) {
    const { option  } = art;
    const resizeFn = (0, _utils.throttle)(()=>{
        if (art.normalSize) art.autoSize = option.autoSize;
        art.aspectRatioReset = true;
        art.emit("resize");
    }, art.constructor.RESIZE_TIME);
    events.proxy(window, [
        "orientationchange",
        "resize"
    ], ()=>{
        resizeFn();
    });
    if (screen && screen.orientation && screen.orientation.onchange) events.proxy(screen.orientation, "change", ()=>{
        resizeFn();
    });
}
exports.default = resizeInit;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"fmrIX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function viewInit(art, events) {
    const { option , constructor , template: { $container  }  } = art;
    const scrollFn = (0, _utils.throttle)(()=>{
        art.emit("view", (0, _utils.isInViewport)($container, constructor.SCROLL_GAP));
    }, constructor.SCROLL_TIME);
    events.proxy(window, "scroll", ()=>{
        scrollFn();
    });
}
exports.default = viewInit;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"gP6M7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrowLeftSvg = require("bundle-text:./arrow-left.svg");
var _arrowLeftSvgDefault = parcelHelpers.interopDefault(_arrowLeftSvg);
var _arrowRightSvg = require("bundle-text:./arrow-right.svg");
var _arrowRightSvgDefault = parcelHelpers.interopDefault(_arrowRightSvg);
var _aspectRatioSvg = require("bundle-text:./aspect-ratio.svg");
var _aspectRatioSvgDefault = parcelHelpers.interopDefault(_aspectRatioSvg);
var _checkSvg = require("bundle-text:./check.svg");
var _checkSvgDefault = parcelHelpers.interopDefault(_checkSvg);
var _closeSvg = require("bundle-text:./close.svg");
var _closeSvgDefault = parcelHelpers.interopDefault(_closeSvg);
var _configSvg = require("bundle-text:./config.svg");
var _configSvgDefault = parcelHelpers.interopDefault(_configSvg);
var _errorSvg = require("bundle-text:./error.svg");
var _errorSvgDefault = parcelHelpers.interopDefault(_errorSvg);
var _flipSvg = require("bundle-text:./flip.svg");
var _flipSvgDefault = parcelHelpers.interopDefault(_flipSvg);
var _fullscreenOffSvg = require("bundle-text:./fullscreen-off.svg");
var _fullscreenOffSvgDefault = parcelHelpers.interopDefault(_fullscreenOffSvg);
var _fullscreenOnSvg = require("bundle-text:./fullscreen-on.svg");
var _fullscreenOnSvgDefault = parcelHelpers.interopDefault(_fullscreenOnSvg);
var _loadingSvg = require("bundle-text:./loading.svg");
var _loadingSvgDefault = parcelHelpers.interopDefault(_loadingSvg);
var _pauseSvg = require("bundle-text:./pause.svg");
var _pauseSvgDefault = parcelHelpers.interopDefault(_pauseSvg);
var _playSvg = require("bundle-text:./play.svg");
var _playSvgDefault = parcelHelpers.interopDefault(_playSvg);
var _playbackRateSvg = require("bundle-text:./playback-rate.svg");
var _playbackRateSvgDefault = parcelHelpers.interopDefault(_playbackRateSvg);
var _stateSvg = require("bundle-text:./state.svg");
var _stateSvgDefault = parcelHelpers.interopDefault(_stateSvg);
var _switchOffSvg = require("bundle-text:./switch-off.svg");
var _switchOffSvgDefault = parcelHelpers.interopDefault(_switchOffSvg);
var _switchOnSvg = require("bundle-text:./switch-on.svg");
var _switchOnSvgDefault = parcelHelpers.interopDefault(_switchOnSvg);
var _volumeCloseSvg = require("bundle-text:./volume-close.svg");
var _volumeCloseSvgDefault = parcelHelpers.interopDefault(_volumeCloseSvg);
var _volumeSvg = require("bundle-text:./volume.svg");
var _volumeSvgDefault = parcelHelpers.interopDefault(_volumeSvg);
var _utils = require("../utils");
class Icons {
    constructor(art){
        const icons = {
            loading: (0, _loadingSvgDefault.default),
            state: (0, _stateSvgDefault.default),
            play: (0, _playSvgDefault.default),
            pause: (0, _pauseSvgDefault.default),
            check: (0, _checkSvgDefault.default),
            volume: (0, _volumeSvgDefault.default),
            volumeClose: (0, _volumeCloseSvgDefault.default),
            arrowLeft: (0, _arrowLeftSvgDefault.default),
            arrowRight: (0, _arrowRightSvgDefault.default),
            playbackRate: (0, _playbackRateSvgDefault.default),
            aspectRatio: (0, _aspectRatioSvgDefault.default),
            config: (0, _configSvgDefault.default),
            flip: (0, _flipSvgDefault.default),
            fullscreenOff: (0, _fullscreenOffSvgDefault.default),
            fullscreenOn: (0, _fullscreenOnSvgDefault.default),
            switchOn: (0, _switchOnSvgDefault.default),
            switchOff: (0, _switchOffSvgDefault.default),
            error: (0, _errorSvgDefault.default),
            close: (0, _closeSvgDefault.default),
            ...art.option.icons
        };
        Object.keys(icons).forEach((key)=>{
            (0, _utils.def)(this, key, {
                get: ()=>{
                    const icon = (0, _utils.createElement)("i");
                    (0, _utils.addClass)(icon, "art-icon");
                    (0, _utils.addClass)(icon, `art-icon-${key}`);
                    (0, _utils.append)(icon, icons[key]);
                    return icon;
                }
            });
        });
    }
}
exports.default = Icons;

},{"bundle-text:./arrow-left.svg":"2m0J3","bundle-text:./arrow-right.svg":"d9iPY","bundle-text:./aspect-ratio.svg":"4qJAN","bundle-text:./check.svg":"hpwmG","bundle-text:./close.svg":"dSIbz","bundle-text:./config.svg":"6iK2N","bundle-text:./error.svg":"gHC6Z","bundle-text:./flip.svg":"kQBsA","bundle-text:./fullscreen-off.svg":"a6qSz","bundle-text:./fullscreen-on.svg":"2cUeR","bundle-text:./loading.svg":"kQAWs","bundle-text:./pause.svg":"cXb2s","bundle-text:./play.svg":"ez3XI","bundle-text:./playback-rate.svg":"iFVXO","bundle-text:./state.svg":"fv62Y","bundle-text:./switch-off.svg":"47VYR","bundle-text:./switch-on.svg":"iaKl1","bundle-text:./volume-close.svg":"gHdy5","bundle-text:./volume.svg":"9ziFm","../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"2m0J3":[function(require,module,exports) {
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"32\" width=\"32\" version=\"1.1\" viewBox=\"0 0 32 32\">\n    <path d=\"M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z\" fill=\"#fff\"></path>\n</svg>";

},{}],"d9iPY":[function(require,module,exports) {
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"32\" width=\"32\" version=\"1.1\" viewBox=\"0 0 32 32\">\n    <path d=\"m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z\" fill=\"#fff\"></path>\n</svg>";

},{}],"4qJAN":[function(require,module,exports) {
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 88 88\" preserveAspectRatio=\"xMidYMid meet\" style=\"width: 100%; height: 100%; transform: translate3d(0, 0, 0)\"><defs><clipPath id=\"__lottie_element_216\"><rect width=\"88\" height=\"88\" x=\"0\" y=\"0\"></rect></clipPath></defs><g clip-path=\"url('#__lottie_element_216')\"><g transform=\"matrix(1,0,0,1,44,44)\" opacity=\"1\" style=\"display: block\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,0,0)\"><path fill=\"rgb(255,255,255)\" fill-opacity=\"1\" d=\" M12.437999725341797,-12.70199966430664 C12.437999725341797,-12.70199966430664 9.618000030517578,-9.881999969482422 9.618000030517578,-9.881999969482422 C8.82800006866455,-9.092000007629395 8.82800006866455,-7.831999778747559 9.618000030517578,-7.052000045776367 C9.618000030517578,-7.052000045776367 16.687999725341797,0.017999999225139618 16.687999725341797,0.017999999225139618 C16.687999725341797,0.017999999225139618 9.618000030517578,7.0879998207092285 9.618000030517578,7.0879998207092285 C8.82800006866455,7.877999782562256 8.82800006866455,9.137999534606934 9.618000030517578,9.918000221252441 C9.618000030517578,9.918000221252441 12.437999725341797,12.748000144958496 12.437999725341797,12.748000144958496 C13.227999687194824,13.527999877929688 14.48799991607666,13.527999877929688 15.267999649047852,12.748000144958496 C15.267999649047852,12.748000144958496 26.58799934387207,1.437999963760376 26.58799934387207,1.437999963760376 C27.368000030517578,0.6579999923706055 27.368000030517578,-0.6119999885559082 26.58799934387207,-1.3919999599456787 C26.58799934387207,-1.3919999599456787 15.267999649047852,-12.70199966430664 15.267999649047852,-12.70199966430664 C14.48799991607666,-13.491999626159668 13.227999687194824,-13.491999626159668 12.437999725341797,-12.70199966430664z M-12.442000389099121,-12.70199966430664 C-13.182000160217285,-13.442000389099121 -14.362000465393066,-13.482000350952148 -15.142000198364258,-12.821999549865723 C-15.142000198364258,-12.821999549865723 -15.272000312805176,-12.70199966430664 -15.272000312805176,-12.70199966430664 C-15.272000312805176,-12.70199966430664 -26.582000732421875,-1.3919999599456787 -26.582000732421875,-1.3919999599456787 C-27.32200050354004,-0.6520000100135803 -27.36199951171875,0.5180000066757202 -26.70199966430664,1.3079999685287476 C-26.70199966430664,1.3079999685287476 -26.582000732421875,1.437999963760376 -26.582000732421875,1.437999963760376 C-26.582000732421875,1.437999963760376 -15.272000312805176,12.748000144958496 -15.272000312805176,12.748000144958496 C-14.531999588012695,13.48799991607666 -13.362000465393066,13.527999877929688 -12.571999549865723,12.868000030517578 C-12.571999549865723,12.868000030517578 -12.442000389099121,12.748000144958496 -12.442000389099121,12.748000144958496 C-12.442000389099121,12.748000144958496 -9.612000465393066,9.918000221252441 -9.612000465393066,9.918000221252441 C-8.871999740600586,9.178000450134277 -8.831999778747559,8.008000373840332 -9.501999855041504,7.2179999351501465 C-9.501999855041504,7.2179999351501465 -9.612000465393066,7.0879998207092285 -9.612000465393066,7.0879998207092285 C-9.612000465393066,7.0879998207092285 -16.68199920654297,0.017999999225139618 -16.68199920654297,0.017999999225139618 C-16.68199920654297,0.017999999225139618 -9.612000465393066,-7.052000045776367 -9.612000465393066,-7.052000045776367 C-8.871999740600586,-7.791999816894531 -8.831999778747559,-8.961999893188477 -9.501999855041504,-9.751999855041504 C-9.501999855041504,-9.751999855041504 -9.612000465393066,-9.881999969482422 -9.612000465393066,-9.881999969482422 C-9.612000465393066,-9.881999969482422 -12.442000389099121,-12.70199966430664 -12.442000389099121,-12.70199966430664z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z\" data-darkreader-inline-fill=\"\" style=\"--darkreader-inline-fill: #a8a6a4\"></path></g></g></g></svg>";

},{}],"hpwmG":[function(require,module,exports) {
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 24 24\" style=\"width: 100%; height: 100%\">\n<path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\" fill=\"#fff\"></path>\n</svg>";

},{}],"dSIbz":[function(require,module,exports) {
module.exports = "<?xml version=\"1.0\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg t=\"1655876154826\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"22\" height=\"22\">\n<path d=\"M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z\" p-id=\"2131\">\n</path>\n</svg>";

},{}],"6iK2N":[function(require,module,exports) {
module.exports = "<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M15,17h6v1h-6V17z M11,17H3v1h8v2h1v-2v-1v-2h-1V17z M14,8h1V6V5V3h-1v2H3v1h11V8z            M18,5v1h3V5H18z M6,14h1v-2v-1V9H6v2H3v1 h3V14z M10,12h11v-1H10V12z\" fill=\"white\" data-darkreader-inline-fill=\"\" style=\"--darkreader-inline-fill: #a8a6a4\"></path></svg>";

},{}],"gHC6Z":[function(require,module,exports) {
module.exports = "<?xml version=\"1.0\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg t=\"1652850026663\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2749\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"50\" height=\"50\">\n<path d=\"M593.8176 168.5504l356.00384 595.21024c26.15296 43.74528 10.73152 99.7376-34.44736 125.05088-14.39744 8.06912-30.72 12.30848-47.37024 12.30848H155.97568C103.75168 901.12 61.44 860.16 61.44 809.61536c0-16.09728 4.38272-31.92832 12.71808-45.8752L430.16192 168.5504c26.17344-43.7248 84.00896-58.65472 129.20832-33.34144a93.0816 93.0816 0 0 1 34.44736 33.34144zM512 819.2a61.44 61.44 0 1 0 0-122.88 61.44 61.44 0 0 0 0 122.88z m0-512a72.31488 72.31488 0 0 0-71.76192 81.3056l25.72288 205.7216a46.40768 46.40768 0 0 0 92.07808 0l25.72288-205.74208A72.31488 72.31488 0 0 0 512 307.2z\" p-id=\"2750\">\n</path>\n</svg>";

},{}],"kQBsA":[function(require,module,exports) {
module.exports = "<?xml version=\"1.0\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg t=\"1652445277062\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"6034\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\">\n<path d=\"M554.666667 810.666667v85.333333h-85.333334v-85.333333h85.333334zM170.666667 178.005333a42.666667 42.666667 0 0 1 34.986666 18.218667l203.904 291.328a42.666667 42.666667 0 0 1 0 48.896l-203.946666 291.328A42.666667 42.666667 0 0 1 128 803.328V220.672a42.666667 42.666667 0 0 1 42.666667-42.666667z m682.666666 0a42.666667 42.666667 0 0 1 42.368 37.717334l0.298667 4.949333v582.656a42.666667 42.666667 0 0 1-74.24 28.629333l-3.413333-4.181333-203.904-291.328a42.666667 42.666667 0 0 1-3.029334-43.861333l3.029334-5.034667 203.946666-291.328A42.666667 42.666667 0 0 1 853.333333 178.005333zM554.666667 640v85.333333h-85.333334v-85.333333h85.333334zM196.266667 319.104V716.8L335.957333 512 196.309333 319.104zM554.666667 469.333333v85.333334h-85.333334v-85.333334h85.333334z m0-170.666666v85.333333h-85.333334V298.666667h85.333334z m0-170.666667v85.333333h-85.333334V128h85.333334z\" fill=\"#ffffff\" p-id=\"6035\">\n</path>\n</svg>";

},{}],"a6qSz":[function(require,module,exports) {
module.exports = "<?xml version=\"1.0\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg class=\"icon\" width=\"22\" height=\"22\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill=\"#ffffff\" d=\"M768 298.666667h170.666667v85.333333h-256V128h85.333333v170.666667zM341.333333 384H85.333333V298.666667h170.666667V128h85.333333v256z m426.666667 341.333333v170.666667h-85.333333v-256h256v85.333333h-170.666667zM341.333333 640v256H256v-170.666667H85.333333v-85.333333h256z\"></path>\n</svg>";

},{}],"2cUeR":[function(require,module,exports) {
module.exports = "<?xml version=\"1.0\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"none\">\n    <path full=\"#ffffff\" d=\"M9.88 0L5.17565e-16 0L5.17565e-16 9.88L3.71 6.16L13.42 15.95L15.91 13.46L6.16 3.71L9.88 0Z M3.71 35.7979L0 32.0779L0 41.9579L9.88 41.9579L6.16 38.2379L15.91 28.4979L13.46 26.0479L3.71 35.7979Z M35.7979 3.71L26.0479 13.46L28.5379 15.95L38.2879 6.21L41.9979 9.92L41.9979 0L32.0779 0L35.7979 3.71Z M26.0042 28.5379L35.7542 38.2879L32.0342 41.9979L41.9542 41.9979L41.9542 32.0779L38.2442 35.7979L28.4942 26.0479L26.0042 28.5379Z \"></path>\n</svg>";

},{}],"kQAWs":[function(require,module,exports) {
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50px\" height=\"50px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-default\">\n  <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(0 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-1s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(30 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.9166666666666666s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(60 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.8333333333333334s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(90 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.75s\" repeatCount=\"indefinite\"></animate></rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(120 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.6666666666666666s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(150 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.5833333333333334s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(180 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.5s\" repeatCount=\"indefinite\"></animate></rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(210 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.4166666666666667s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(240 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.3333333333333333s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(270 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.25s\" repeatCount=\"indefinite\"></animate></rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(300 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.16666666666666666s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(330 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.08333333333333333s\" repeatCount=\"indefinite\"></animate>\n  </rect>\n</svg>";

},{}],"cXb2s":[function(require,module,exports) {
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\" viewBox=\"0 0 22 22\">\n    <path d=\"M7 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zM15 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2z\"></path>\n</svg>";

},{}],"ez3XI":[function(require,module,exports) {
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\" viewBox=\"0 0 22 22\">\n  <path d=\"M17.982 9.275L8.06 3.27A2.013 2.013 0 0 0 5 4.994v12.011a2.017 2.017 0 0 0 3.06 1.725l9.922-6.005a2.017 2.017 0 0 0 0-3.45z\"></path>\n</svg>";

},{}],"iFVXO":[function(require,module,exports) {
module.exports = "<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M10,8v8l6-4L10,8L10,8z M6.3,5L5.7,4.2C7.2,3,9,2.2,11,2l0.1,1C9.3,3.2,7.7,3.9,6.3,5z            M5,6.3L4.2,5.7C3,7.2,2.2,9,2,11 l1,.1C3.2,9.3,3.9,7.7,5,6.3z            M5,17.7c-1.1-1.4-1.8-3.1-2-4.8L2,13c0.2,2,1,3.8,2.2,5.4L5,17.7z            M11.1,21c-1.8-0.2-3.4-0.9-4.8-2 l-0.6,.8C7.2,21,9,21.8,11,22L11.1,21z            M22,12c0-5.2-3.9-9.4-9-10l-0.1,1c4.6,.5,8.1,4.3,8.1,9s-3.5,8.5-8.1,9l0.1,1 C18.2,21.5,22,17.2,22,12z\" fill=\"white\" data-darkreader-inline-fill=\"\" style=\"--darkreader-inline-fill: #a8a6a4\"></path></svg>";

},{}],"fv62Y":[function(require,module,exports) {
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"60\" width=\"60\" style=\"filter: drop-shadow(0 1px 1px #000)\" viewBox=\"0 0 24 24\">\n    <path d=\"M20,2H4C1.8,2,0,3.8,0,6v12c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V6C24,3.8,22.2,2,20,2z M15.6,12.8L10.5,16 C9.9,16.5,9,16,9,15.2V8.8C9,8,9.9,7.5,10.5,8l5.1,3.2C16.3,11.5,16.3,12.5,15.6,12.8z\"></path>\n</svg>";

},{}],"47VYR":[function(require,module,exports) {
module.exports = "<?xml version=\"1.0\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg class=\"icon\" width=\"26\" height=\"26\" viewBox=\"0 0 1740 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path fill=\"#ffffff\" d=\"M511.8976 1024h670.5152c282.4192-0.4096 511.1808-229.4784 511.1808-511.8976 0-282.4192-228.7616-511.488-511.1808-511.8976H511.8976C229.4784 0.6144 0.7168 229.6832 0.7168 512.1024c0 282.4192 228.7616 511.488 511.1808 511.8976zM511.3344 48.64A464.5888 464.5888 0 1 1 48.0256 513.024 463.872 463.872 0 0 1 511.3344 48.4352V48.64z\"></path>\n</svg>";

},{}],"iaKl1":[function(require,module,exports) {
module.exports = "<?xml version=\"1.0\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg class=\"icon\" width=\"26\" height=\"26\" viewBox=\"0 0 1664 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path fill=\"#648FFC\" d=\"M1152 0H512a512 512 0 0 0 0 1024h640a512 512 0 0 0 0-1024z m0 960a448 448 0 1 1 448-448 448 448 0 0 1-448 448z\"></path>\n</svg>";

},{}],"gHdy5":[function(require,module,exports) {
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\" viewBox=\"0 0 22 22\">\n    <path d=\"M15 11a3.998 3.998 0 0 0-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0 0 15 11z\"></path>\n    <path d=\"M13.583 5.583A5.998 5.998 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8.001 8.001 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805zM18.778 18.778l-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416zM11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172V5.04z\"></path>\n</svg>";

},{}],"9ziFm":[function(require,module,exports) {
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"22\" width=\"22\" viewBox=\"0 0 22 22\">\n    <path d=\"M10.188 4.65L6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39zM14.446 3.778a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8.001 8.001 0 0 0 19 11a8.001 8.001 0 0 0-4.554-7.222z\"></path>\n    <path d=\"M15 11a3.998 3.998 0 0 0-2-3.465v6.93A3.998 3.998 0 0 0 15 11z\"></path>\n</svg>";

},{}],"fvy8V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _component = require("./utils/component");
var _componentDefault = parcelHelpers.interopDefault(_component);
class Layer extends (0, _componentDefault.default) {
    constructor(art){
        super(art);
        const { option , template: { $layer  }  } = art;
        this.name = "layer";
        this.$parent = $layer;
        for(let index = 0; index < option.layers.length; index++)this.add(option.layers[index]);
    }
}
exports.default = Layer;

},{"./utils/component":"bgug2","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"h8KPY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
var _component = require("./utils/component");
var _componentDefault = parcelHelpers.interopDefault(_component);
class Loading extends (0, _componentDefault.default) {
    constructor(art){
        super(art);
        this.name = "loading";
        (0, _utils.append)(art.template.$loading, art.icons.loading);
    }
}
exports.default = Loading;

},{"./utils":"jmgNb","./utils/component":"bgug2","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"llnR4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
var _component = require("./utils/component");
var _componentDefault = parcelHelpers.interopDefault(_component);
class Mask extends (0, _componentDefault.default) {
    constructor(art){
        super(art);
        this.name = "mask";
        const { template , icons , events  } = art;
        // 播放按钮
        // const $state = append(template.$state, icons.state);
        const $error = (0, _utils.append)(template.$state, icons.error);
        (0, _utils.setStyle)($error, "display", "none");
        art.on("destroy", ()=>{
            // setStyle($state, 'display', 'none');
            (0, _utils.setStyle)($error, "display", null);
        });
        events.proxy(template.$state, "click", ()=>art.play());
    }
}
exports.default = Mask;

},{"./utils":"jmgNb","./utils/component":"bgug2","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"35XKf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _aspectRatioMix = require("./aspectRatioMix");
var _aspectRatioMixDefault = parcelHelpers.interopDefault(_aspectRatioMix);
var _attrMix = require("./attrMix");
var _attrMixDefault = parcelHelpers.interopDefault(_attrMix);
var _autoHeightMix = require("./autoHeightMix");
var _autoHeightMixDefault = parcelHelpers.interopDefault(_autoHeightMix);
var _autoSizeMix = require("./autoSizeMix");
var _autoSizeMixDefault = parcelHelpers.interopDefault(_autoSizeMix);
var _currentTimeMix = require("./currentTimeMix");
var _currentTimeMixDefault = parcelHelpers.interopDefault(_currentTimeMix);
var _durationMix = require("./durationMix");
var _durationMixDefault = parcelHelpers.interopDefault(_durationMix);
var _eventInit = require("./eventInit");
var _eventInitDefault = parcelHelpers.interopDefault(_eventInit);
var _fullscreenMix = require("./fullscreenMix");
var _fullscreenMixDefault = parcelHelpers.interopDefault(_fullscreenMix);
var _loadedMix = require("./loadedMix");
var _loadedMixDefault = parcelHelpers.interopDefault(_loadedMix);
var _loopMix = require("./loopMix");
var _loopMixDefault = parcelHelpers.interopDefault(_loopMix);
var _normalSizeMix = require("./normalSizeMix");
var _normalSizeMixDefault = parcelHelpers.interopDefault(_normalSizeMix);
var _optionInit = require("./optionInit");
var _optionInitDefault = parcelHelpers.interopDefault(_optionInit);
var _pauseMix = require("./pauseMix");
var _pauseMixDefault = parcelHelpers.interopDefault(_pauseMix);
var _playedMix = require("./playedMix");
var _playedMixDefault = parcelHelpers.interopDefault(_playedMix);
var _playingMix = require("./playingMix");
var _playingMixDefault = parcelHelpers.interopDefault(_playingMix);
var _playMix = require("./playMix");
var _playMixDefault = parcelHelpers.interopDefault(_playMix);
var _posterMix = require("./posterMix");
var _posterMixDefault = parcelHelpers.interopDefault(_posterMix);
var _rectMix = require("./rectMix");
var _rectMixDefault = parcelHelpers.interopDefault(_rectMix);
var _seekMix = require("./seekMix");
var _seekMixDefault = parcelHelpers.interopDefault(_seekMix);
var _themeMix = require("./themeMix");
var _themeMixDefault = parcelHelpers.interopDefault(_themeMix);
var _titleMix = require("./titleMix");
var _titleMixDefault = parcelHelpers.interopDefault(_titleMix);
var _toggleMix = require("./toggleMix");
var _toggleMixDefault = parcelHelpers.interopDefault(_toggleMix);
var _typeMix = require("./typeMix");
var _typeMixDefault = parcelHelpers.interopDefault(_typeMix);
var _urlMix = require("./urlMix");
var _urlMixDefault = parcelHelpers.interopDefault(_urlMix);
var _volumeMix = require("./volumeMix");
var _volumeMixDefault = parcelHelpers.interopDefault(_volumeMix);
class Player {
    constructor(art){
        (0, _urlMixDefault.default)(art);
        (0, _attrMixDefault.default)(art);
        (0, _playMixDefault.default)(art);
        (0, _pauseMixDefault.default)(art);
        (0, _toggleMixDefault.default)(art);
        (0, _seekMixDefault.default)(art);
        (0, _volumeMixDefault.default)(art);
        (0, _currentTimeMixDefault.default)(art);
        (0, _durationMixDefault.default)(art);
        (0, _aspectRatioMixDefault.default)(art);
        (0, _fullscreenMixDefault.default)(art);
        (0, _loadedMixDefault.default)(art);
        (0, _playedMixDefault.default)(art);
        (0, _playingMixDefault.default)(art);
        (0, _autoSizeMixDefault.default)(art);
        (0, _rectMixDefault.default)(art);
        (0, _loopMixDefault.default)(art);
        (0, _posterMixDefault.default)(art);
        (0, _autoHeightMixDefault.default)(art);
        (0, _themeMixDefault.default)(art);
        (0, _titleMixDefault.default)(art);
        (0, _typeMixDefault.default)(art);
        (0, _normalSizeMixDefault.default)(art);
        (0, _eventInitDefault.default)(art);
        (0, _optionInitDefault.default)(art);
    }
}
exports.default = Player;

},{"./aspectRatioMix":"8ucW5","./attrMix":"jDj6f","./autoHeightMix":"8Mzuu","./autoSizeMix":"b1yGg","./currentTimeMix":"bjUCm","./durationMix":"l8grT","./eventInit":"4hZCW","./fullscreenMix":"gNUzM","./loadedMix":"8X9EY","./loopMix":"gXFcr","./normalSizeMix":"9U4Nw","./optionInit":"9Us4p","./pauseMix":"zMuGC","./playedMix":"1ziBX","./playingMix":"9898W","./playMix":"agXpy","./posterMix":"6j7ij","./rectMix":"eKKgI","./seekMix":"3CiN1","./themeMix":"dv3lF","./titleMix":"5I0kK","./toggleMix":"fvNrm","./typeMix":"2FCQH","./urlMix":"aIS34","./volumeMix":"1LKRL","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"8ucW5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function aspectRatioMix(art) {
    const { template: { $video , $player  }  } = art;
    (0, _utils.def)(art, "aspectRatio", {
        get () {
            return $player.dataset.aspectRatio || "default";
        },
        set (ratio) {
            if (!ratio) ratio = "default";
            if (ratio === "default") {
                (0, _utils.setStyle)($video, "width", null);
                (0, _utils.setStyle)($video, "height", null);
                (0, _utils.setStyle)($video, "padding", null);
                delete $player.dataset.aspectRatio;
            } else {
                const ratioArray = ratio.split(":").map(Number);
                const { videoWidth , videoHeight  } = $video;
                const { clientWidth , clientHeight  } = $player;
                const videoRatio = videoWidth / videoHeight;
                const setupRatio = ratioArray[0] / ratioArray[1];
                if (videoRatio > setupRatio) {
                    const percentage = setupRatio * videoHeight / videoWidth;
                    (0, _utils.setStyle)($video, "width", `${percentage * 100}%`);
                    (0, _utils.setStyle)($video, "height", "100%");
                    (0, _utils.setStyle)($video, "padding", `0 ${(clientWidth - clientWidth * percentage) / 2}px`);
                } else {
                    const percentage1 = videoWidth / setupRatio / videoHeight;
                    (0, _utils.setStyle)($video, "width", "100%");
                    (0, _utils.setStyle)($video, "height", `${percentage1 * 100}%`);
                    (0, _utils.setStyle)($video, "padding", `${(clientHeight - clientHeight * percentage1) / 2}px 0`);
                }
                $player.dataset.aspectRatio = ratio;
            }
            art.emit("aspectRatio", ratio);
        }
    });
    (0, _utils.def)(art, "aspectRatioReset", {
        set (value) {
            if (value) {
                const { aspectRatio  } = art;
                art.aspectRatio = aspectRatio;
            }
        }
    });
}
exports.default = aspectRatioMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"jDj6f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function attrMix(art) {
    const { template: { $video  }  } = art;
    (0, _utils.def)(art, "attr", {
        value (key, value) {
            if (value === undefined) return $video[key];
            $video[key] = value;
        }
    });
}
exports.default = attrMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"8Mzuu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function autoHeightMix(art) {
    const { option , template: { $container , $video  }  } = art;
    const heightCache = $container.style.height;
    (0, _utils.def)(art, "autoHeight", {
        get () {
            return (0, _utils.hasClass)($container, "art-auto-height");
        },
        set (value) {
            if (value) {
                const { clientWidth  } = $container;
                const { videoHeight , videoWidth  } = $video;
                const height = videoHeight * (clientWidth / videoWidth);
                (0, _utils.setStyle)($container, "height", height + "px");
                (0, _utils.addClass)($container, "art-auto-height");
                art.autoSize = option.autoSize;
                art.emit("autoHeight", height);
            } else {
                (0, _utils.setStyle)($container, "height", heightCache);
                (0, _utils.removeClass)($container, "art-auto-height");
                art.autoSize = option.autoSize;
                art.emit("autoHeight");
            }
        }
    });
}
exports.default = autoHeightMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"b1yGg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function resizeMix(art) {
    const { $container , $player , $video  } = art.template;
    (0, _utils.def)(art, "autoSize", {
        get () {
            return (0, _utils.hasClass)($container, "art-auto-size");
        },
        set (value) {
            if (value) {
                const { videoWidth , videoHeight  } = $video;
                const { width , height  } = $container.getBoundingClientRect();
                const videoRatio = videoWidth / videoHeight;
                const containerRatio = width / height;
                (0, _utils.addClass)($container, "art-auto-size");
                if (containerRatio > videoRatio) {
                    const percentage = height * videoRatio / width * 100;
                    (0, _utils.setStyle)($player, "width", `${percentage}%`);
                    (0, _utils.setStyle)($player, "height", "100%");
                } else {
                    const percentage1 = width / videoRatio / height * 100;
                    (0, _utils.setStyle)($player, "width", "100%");
                    (0, _utils.setStyle)($player, "height", `${percentage1}%`);
                }
                art.emit("autoSize", {
                    width: art.width,
                    height: art.height
                });
            } else {
                (0, _utils.removeClass)($container, "art-auto-size");
                (0, _utils.setStyle)($player, "width", null);
                (0, _utils.setStyle)($player, "height", null);
                art.emit("autoSize");
            }
        }
    });
}
exports.default = resizeMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"bjUCm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function currentTimeMix(art) {
    const { $video  } = art.template;
    (0, _utils.def)(art, "currentTime", {
        get: ()=>$video.currentTime || 0,
        set: (time)=>{
            time = parseFloat(time);
            if (Number.isNaN(time)) return;
            $video.currentTime = (0, _utils.clamp)(time, 0, art.duration);
        }
    });
}
exports.default = currentTimeMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"l8grT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function durationMix(art) {
    (0, _utils.def)(art, "duration", {
        get: ()=>{
            const { duration  } = art.template.$video;
            if (duration === Infinity) return 0;
            return duration || 0;
        }
    });
}
exports.default = durationMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"4hZCW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../config");
var _configDefault = parcelHelpers.interopDefault(_config);
var _utils = require("../utils");
function eventInit(art) {
    const { option , constructor , proxy , template: { $player , $video , $poster  }  } = art;
    let reconnectTime = 0;
    for(let index = 0; index < (0, _configDefault.default).events.length; index++)proxy($video, (0, _configDefault.default).events[index], (event)=>{
        art.emit(`video:${event.type}`, event);
    });
    // art.on('video:abort', () => {
    // });
    art.on("video:canplay", ()=>{
        reconnectTime = 0;
        art.loading.show = false;
    });
    art.once("video:canplay", ()=>{
        art.loading.show = false;
        art.controls.show = true;
        art.mask.show = true;
        art.isReady = true;
        art.emit("ready");
    });
    // art.on('video:canplaythrough', () => {
    // });
    // art.on('video:durationchange', () => {
    // });
    // art.on('video:emptied', () => {
    // });
    art.on("video:ended", ()=>{
        if (option.loop) {
            art.seek = 0;
            art.play();
            art.controls.show = false;
            art.mask.show = false;
        } else {
            art.controls.show = true;
            art.mask.show = true;
        }
    });
    art.on("video:error", async (error)=>{
        if (reconnectTime < constructor.RECONNECT_TIME_MAX) {
            await (0, _utils.sleep)(constructor.RECONNECT_SLEEP_TIME);
            reconnectTime += 1;
            art.url = option.url;
            art.emit("error", error, reconnectTime);
        } else {
            art.mask.show = true;
            art.loading.show = false;
            art.controls.show = true;
            (0, _utils.addClass)($player, "art-error");
            await (0, _utils.sleep)(constructor.RECONNECT_SLEEP_TIME);
            art.destroy(false);
        }
    });
    // art.on('video:loadeddata', () => {
    // });
    art.on("video:loadedmetadata", ()=>{
        art.autoSize = option.autoSize;
        if (0, _utils.isMobile) {
            art.loading.show = false;
            art.controls.show = true;
            art.mask.show = true;
        }
    });
    art.on("video:loadstart", ()=>{
        art.loading.show = true;
        art.mask.show = false;
        art.controls.show = true;
    });
    art.on("video:pause", ()=>{
        art.controls.show = true;
        art.mask.show = true;
    });
    art.on("video:play", ()=>{
        art.mask.show = false;
        (0, _utils.setStyle)($poster, "display", "none");
    });
    art.on("video:playing", ()=>{
        art.mask.show = false;
    });
    // art.on('video:progress', () => {
    // });
    // art.on('video:ratechange', () => {
    // });
    art.on("video:seeked", ()=>{
        art.loading.show = false;
    });
    art.on("video:seeking", ()=>{
        art.loading.show = true;
        art.mask.show = false;
    });
    // art.on('video:stalled', () => {
    // });
    // art.on('video:suspend', () => {
    // });
    art.on("video:timeupdate", ()=>{
        art.mask.show = false;
    });
    // art.on('video:volumechange', () => {
    // });
    art.on("video:waiting", ()=>{
        art.loading.show = true;
        art.mask.show = false;
    });
}
exports.default = eventInit;

},{"../config":"2ZnKD","../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"gNUzM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _screenfull = require("../libs/screenfull");
var _screenfullDefault = parcelHelpers.interopDefault(_screenfull);
var _utils = require("../utils");
function fullscreenMix(art) {
    const { template: { $video , $player  }  } = art;
    const nativeScreenfull = (art)=>{
        (0, _utils.def)(art, "fullscreen", {
            get () {
                return (0, _screenfullDefault.default).isFullscreen;
            },
            async set (value) {
                if (value) {
                    art.normalSize = "fullscreen";
                    art.aspectRatioReset = true;
                    art.autoSize = false;
                    await (0, _screenfullDefault.default).request($player);
                    (0, _utils.addClass)($player, "art-fullscreen");
                    art.emit("resize");
                    art.emit("fullscreen", true);
                } else {
                    art.aspectRatioReset = true;
                    art.autoSize = art.option.autoSize;
                    await (0, _screenfullDefault.default).exit();
                    (0, _utils.removeClass)($player, "art-fullscreen");
                    art.emit("resize");
                    art.emit("fullscreen", false);
                }
            }
        });
    };
    const webkitScreenfull = (art)=>{
        (0, _utils.def)(art, "fullscreen", {
            get () {
                return $video.webkitDisplayingFullscreen;
            },
            set (value) {
                if (value) {
                    art.normalSize = "fullscreen";
                    $video.webkitEnterFullscreen();
                    art.emit("fullscreen", true);
                } else {
                    $video.webkitExitFullscreen();
                    art.emit("fullscreen", false);
                }
            }
        });
    };
    art.once("video:loadedmetadata", ()=>{
        if ((0, _screenfullDefault.default).isEnabled) nativeScreenfull(art);
        else if (document.fullscreenEnabled || $video.webkitSupportsFullscreen) webkitScreenfull(art);
        else (0, _utils.def)(art, "fullscreen", {
            get () {
                return false;
            }
        });
        // Asynchronous setting
        (0, _utils.def)(art, "fullscreen", (0, _utils.get)(art, "fullscreen"));
    });
}
exports.default = fullscreenMix;

},{"../libs/screenfull":"eQous","../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"eQous":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const methodMap = [
    [
        "requestFullscreen",
        "exitFullscreen",
        "fullscreenElement",
        "fullscreenEnabled",
        "fullscreenchange",
        "fullscreenerror"
    ],
    // New WebKit
    [
        "webkitRequestFullscreen",
        "webkitExitFullscreen",
        "webkitFullscreenElement",
        "webkitFullscreenEnabled",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
    ],
    // Old WebKit
    [
        "webkitRequestFullScreen",
        "webkitCancelFullScreen",
        "webkitCurrentFullScreenElement",
        "webkitCancelFullScreen",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
    ],
    [
        "mozRequestFullScreen",
        "mozCancelFullScreen",
        "mozFullScreenElement",
        "mozFullScreenEnabled",
        "mozfullscreenchange",
        "mozfullscreenerror"
    ],
    [
        "msRequestFullscreen",
        "msExitFullscreen",
        "msFullscreenElement",
        "msFullscreenEnabled",
        "MSFullscreenChange",
        "MSFullscreenError"
    ]
];
const nativeAPI = (()=>{
    if (typeof document === "undefined") return false;
    const unprefixedMethods = methodMap[0];
    const returnValue = {};
    for (const methodList of methodMap){
        const exitFullscreenMethod = methodList[1];
        if (exitFullscreenMethod in document) {
            for (const [index, method] of methodList.entries())returnValue[unprefixedMethods[index]] = method;
            return returnValue;
        }
    }
    return false;
})();
const eventNameMap = {
    change: nativeAPI.fullscreenchange,
    error: nativeAPI.fullscreenerror
};
let screenfull = {
    request (element = document.documentElement, options) {
        return new Promise((resolve, reject)=>{
            const onFullScreenEntered = ()=>{
                screenfull.off("change", onFullScreenEntered);
                resolve();
            };
            screenfull.on("change", onFullScreenEntered);
            const returnPromise = element[nativeAPI.requestFullscreen](options);
            if (returnPromise instanceof Promise) returnPromise.then(onFullScreenEntered).catch(reject);
        });
    },
    exit () {
        return new Promise((resolve, reject)=>{
            if (!screenfull.isFullscreen) {
                resolve();
                return;
            }
            const onFullScreenExit = ()=>{
                screenfull.off("change", onFullScreenExit);
                resolve();
            };
            screenfull.on("change", onFullScreenExit);
            const returnPromise = document[nativeAPI.exitFullscreen]();
            if (returnPromise instanceof Promise) returnPromise.then(onFullScreenExit).catch(reject);
        });
    },
    toggle (element, options) {
        return screenfull.isFullscreen ? screenfull.exit() : screenfull.request(element, options);
    },
    onchange (callback) {
        screenfull.on("change", callback);
    },
    onerror (callback) {
        screenfull.on("error", callback);
    },
    on (event, callback) {
        const eventName = eventNameMap[event];
        if (eventName) document.addEventListener(eventName, callback, false);
    },
    off (event, callback) {
        const eventName = eventNameMap[event];
        if (eventName) document.removeEventListener(eventName, callback, false);
    },
    raw: nativeAPI
};
Object.defineProperties(screenfull, {
    isFullscreen: {
        get: ()=>Boolean(document[nativeAPI.fullscreenElement])
    },
    element: {
        enumerable: true,
        get: ()=>document[nativeAPI.fullscreenElement]
    },
    isEnabled: {
        enumerable: true,
        get: ()=>Boolean(document[nativeAPI.fullscreenEnabled])
    }
});
if (!nativeAPI) screenfull = {
    isEnabled: false
};
exports.default = screenfull;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"8X9EY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function seekMix(art) {
    const { $video  } = art.template;
    (0, _utils.def)(art, "loaded", {
        get: ()=>art.loadedTime / $video.duration
    });
    (0, _utils.def)(art, "loadedTime", {
        get: ()=>$video.buffered.length ? $video.buffered.end($video.buffered.length - 1) : 0
    });
}
exports.default = seekMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"gXFcr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function loopMix(art) {
    let interval = [];
    (0, _utils.def)(art, "loop", {
        get: ()=>interval,
        set: (value)=>{
            if (Array.isArray(value) && typeof value[0] === "number" && typeof value[1] === "number") {
                const start = (0, _utils.clamp)(value[0], 0, Math.min(value[1], art.duration));
                const end = (0, _utils.clamp)(value[1], start, art.duration);
                if (end - start >= 1) {
                    interval = [
                        start,
                        end
                    ];
                    art.emit("loop", interval);
                } else {
                    interval = [];
                    art.emit("loop", []);
                }
            } else {
                interval = [];
                art.emit("loop", []);
            }
        }
    });
    art.on("video:timeupdate", ()=>{
        if (interval.length) {
            if (art.currentTime < interval[0] || art.currentTime > interval[1]) art.seek = interval[0];
        }
    });
}
exports.default = loopMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"9U4Nw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function normalSizeMix(art) {
    const sizeProps = [
        "fullscreen"
    ];
    (0, _utils.def)(art, "normalSize", {
        get () {
            return sizeProps.every((name)=>!art[name]);
        },
        set (name) {
            sizeProps.filter((item)=>item !== name).forEach((item)=>{
                if (art[item]) art[item] = false;
            });
        }
    });
}
exports.default = normalSizeMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"9Us4p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function attrInit(art) {
    const { option , storage , template: { $video , $poster  }  } = art;
    Object.keys(option.moreVideoAttr).forEach((key)=>{
        art.attr(key, option.moreVideoAttr[key]);
    });
    if (option.muted) art.muted = option.muted;
    if (option.volume) $video.volume = (0, _utils.clamp)(option.volume, 0, 1);
    const volumeStorage = storage.get("volume");
    if (typeof volumeStorage === "number") $video.volume = (0, _utils.clamp)(volumeStorage, 0, 1);
    if (option.poster) (0, _utils.setStyle)($poster, "backgroundImage", `url(${option.poster})`);
    if (option.autoplay) $video.autoplay = option.autoplay;
    if (option.playsInline) {
        $video.playsInline = true;
        $video["webkit-playsinline"] = true;
    }
    if (option.theme) art.theme = option.theme;
    art.url = option.url;
}
exports.default = attrInit;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"zMuGC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function pauseMix(art) {
    const { template: { $video  }  } = art;
    (0, _utils.def)(art, "pause", {
        value () {
            const result = $video.pause();
            art.emit("pause");
            return result;
        }
    });
}
exports.default = pauseMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"1ziBX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function playedMix(art) {
    (0, _utils.def)(art, "played", {
        get: ()=>art.currentTime / art.duration
    });
}
exports.default = playedMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"9898W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function playingMix(art) {
    const { $video  } = art.template;
    (0, _utils.def)(art, "playing", {
        get: ()=>!!($video.currentTime > 0 && !$video.paused && !$video.ended && $video.readyState > 2)
    });
}
exports.default = playingMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"agXpy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function playMix(art) {
    const { option , constructor: { instances  } , template: { $video  }  } = art;
    (0, _utils.def)(art, "play", {
        value: async function() {
            const result = await $video.play();
            art.emit("play");
            if (option.mutex) for(let index = 0; index < instances.length; index++){
                const instance = instances[index];
                if (instance !== art) instance.pause();
            }
            return result;
        }
    });
}
exports.default = playMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"6j7ij":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function posterMix(art) {
    const { option , template: { $poster  }  } = art;
    (0, _utils.def)(art, "poster", {
        get: ()=>option.poster,
        set (url) {
            option.poster = url;
            (0, _utils.setStyle)($poster, "backgroundImage", `url(${url})`);
        }
    });
}
exports.default = posterMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"eKKgI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function rectMix(art) {
    (0, _utils.def)(art, "rect", {
        get: ()=>{
            return art.template.$player.getBoundingClientRect();
        }
    });
    const keys = [
        "bottom",
        "height",
        "left",
        "right",
        "top",
        "width"
    ];
    for(let index = 0; index < keys.length; index++){
        const key = keys[index];
        (0, _utils.def)(art, key, {
            get: ()=>{
                return art.rect[key];
            }
        });
    }
    (0, _utils.def)(art, "x", {
        get: ()=>{
            return art.left + window.pageXOffset;
        }
    });
    (0, _utils.def)(art, "y", {
        get: ()=>{
            return art.top + window.pageYOffset;
        }
    });
}
exports.default = rectMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"3CiN1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function seekMix(art) {
    (0, _utils.def)(art, "seek", {
        set (time) {
            art.currentTime = time;
            art.emit("seek", art.currentTime);
        }
    });
    (0, _utils.def)(art, "forward", {
        set (time) {
            art.seek = art.currentTime + time;
        }
    });
    (0, _utils.def)(art, "backward", {
        set (time) {
            art.seek = art.currentTime - time;
        }
    });
}
exports.default = seekMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"dv3lF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function themeMix(art) {
    const { option , template: { $player  }  } = art;
    (0, _utils.def)(art, "theme", {
        get () {
            return getComputedStyle($player).getPropertyValue("--theme");
        },
        set (theme) {
            option.theme = theme;
            $player.style.setProperty("--theme", theme);
        }
    });
}
exports.default = themeMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"5I0kK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function titleMix(art) {
    (0, _utils.def)(art, "title", {
        get () {
            return art.option.title;
        },
        set (title) {
            art.option.title = title;
        }
    });
}
exports.default = titleMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"fvNrm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function toggleMix(art) {
    (0, _utils.def)(art, "toggle", {
        value () {
            if (art.playing) return art.pause();
            else return art.play();
        }
    });
}
exports.default = toggleMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"2FCQH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function typeMix(art) {
    (0, _utils.def)(art, "type", {
        get () {
            return art.option.type;
        },
        set (type) {
            art.option.type = type;
        }
    });
}
exports.default = typeMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"aIS34":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function urlMix(art) {
    const { option , template: { $video  }  } = art;
    (0, _utils.def)(art, "url", {
        get () {
            return $video.currentSrc;
        },
        async set (url) {
            if (url) {
                const typeName = option.type || (0, _utils.getExt)(url);
                const typeCallback = option.customType[typeName];
                if (typeName && typeCallback) {
                    await (0, _utils.sleep)();
                    art.loading.show = true;
                    typeCallback.call(art, $video, url, art);
                } else {
                    if (art.url && art.url !== url) art.once("video:canplay", ()=>{
                        if (art.isReady) art.emit("restart");
                    });
                    $video.src = url;
                    art.option.url = url;
                    art.emit("url", url);
                }
            } else {
                await (0, _utils.sleep)();
                art.loading.show = true;
            }
        }
    });
}
exports.default = urlMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"1LKRL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function volumeMix(art) {
    const { template: { $video  } , storage  } = art;
    (0, _utils.def)(art, "volume", {
        get: ()=>$video.volume || 0,
        set: (percentage)=>{
            $video.volume = (0, _utils.clamp)(percentage, 0, 1);
            if ($video.volume !== 0) storage.set("volume", $video.volume);
            art.emit("volume", $video.volume);
        }
    });
    (0, _utils.def)(art, "muted", {
        get: ()=>$video.muted,
        set: (muted)=>{
            $video.muted = muted;
            art.emit("volume", $video.volume);
        }
    });
}
exports.default = volumeMix;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"h1hfO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
var _autoOrientation = require("./autoOrientation");
var _autoOrientationDefault = parcelHelpers.interopDefault(_autoOrientation);
var _fastForward = require("./fastForward");
var _fastForwardDefault = parcelHelpers.interopDefault(_fastForward);
var _lock = require("./lock");
var _lockDefault = parcelHelpers.interopDefault(_lock);
var _miniProgressBar = require("./miniProgressBar");
var _miniProgressBarDefault = parcelHelpers.interopDefault(_miniProgressBar);
class Plugins {
    constructor(art){
        this.art = art;
        this.id = 0;
        const { option  } = art;
        if (option.miniProgressBar && !option.isLive) this.add((0, _miniProgressBarDefault.default));
        if (option.lock && (0, _utils.isMobile)) this.add((0, _lockDefault.default));
        if (option.autoOrientation && (0, _utils.isMobile)) this.add((0, _autoOrientationDefault.default));
        if (option.fastForward && (0, _utils.isMobile) && !option.isLive) this.add((0, _fastForwardDefault.default));
        for(let index = 0; index < option.plugins.length; index++)this.add(option.plugins[index]);
    }
    add(plugin) {
        this.id += 1;
        const result = plugin.call(this.art, this.art);
        const pluginName = result && result.name || plugin.name || `plugin${this.id}`;
        (0, _utils.errorHandle)(!(0, _utils.has)(this, pluginName), `Cannot add a plugin that already has the same name: ${pluginName}`);
        (0, _utils.def)(this, pluginName, {
            value: result
        });
        return this;
    }
}
exports.default = Plugins;

},{"../utils":"jmgNb","./autoOrientation":"aROGj","./fastForward":"fgbhT","./lock":"j2mDF","./miniProgressBar":"dMA6v","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"aROGj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function autoOrientation(art) {
    const { template: { $player , $video  }  } = art;
    art.on("fullscreen", async (state)=>{
        const lastOrientation = screen.orientation.type;
        if (state) {
            const { videoWidth , videoHeight  } = $video;
            const { clientWidth: viewWidth , clientHeight: viewHeight  } = document.documentElement;
            if (videoWidth > videoHeight && viewWidth < viewHeight || videoWidth < videoHeight && viewWidth > viewHeight) {
                const oppositeOrientation = lastOrientation.startsWith("portrait") ? "landscape" : "portrait";
                await screen.orientation.lock(oppositeOrientation);
                (0, _utils.addClass)($player, "art-auto-orientation-fullscreen");
            }
        } else if ((0, _utils.hasClass)($player, "art-auto-orientation-fullscreen")) {
            await screen.orientation.lock(lastOrientation);
            (0, _utils.removeClass)($player, "art-auto-orientation-fullscreen");
        }
    });
    return {
        name: "autoOrientation",
        get state () {
            return (0, _utils.hasClass)($player, "art-auto-orientation");
        }
    };
}
exports.default = autoOrientation;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"fgbhT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function fastForward(art) {
    const { constructor , proxy , template: { $player , $video  }  } = art;
    let timer = null;
    let isPress = false;
    let lastPlaybackRate = 1;
    const onStart = (event)=>{
        if (event.touches.length === 1 && art.playing && !art.isLock) timer = setTimeout(()=>{
            isPress = true;
            lastPlaybackRate = art.playbackRate;
            art.playbackRate = constructor.FAST_FORWARD_VALUE;
            (0, _utils.addClass)($player, "art-fast-forward");
        }, constructor.FAST_FORWARD_TIME);
    };
    const onStop = ()=>{
        clearTimeout(timer);
        if (isPress) {
            isPress = false;
            art.playbackRate = lastPlaybackRate;
            (0, _utils.removeClass)($player, "art-fast-forward");
        }
    };
    proxy($video, "touchstart", onStart);
    proxy(document, "touchmove", onStop);
    proxy(document, "touchend", onStop);
    return {
        name: "fastForward",
        get state () {
            return (0, _utils.hasClass)($player, "art-fast-forward");
        }
    };
}
exports.default = fastForward;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"j2mDF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function lock(art) {
    const { layers , icons , template: { $player  }  } = art;
    layers.add({
        name: "lock",
        mounted ($el) {
            const $lock = (0, _utils.append)($el, icons.lock);
            const $unlock = (0, _utils.append)($el, icons.unlock);
            (0, _utils.setStyle)($lock, "display", "none");
            art.on("lock", (state)=>{
                if (state) {
                    (0, _utils.setStyle)($lock, "display", "inline-flex");
                    (0, _utils.setStyle)($unlock, "display", "none");
                } else {
                    (0, _utils.setStyle)($lock, "display", "none");
                    (0, _utils.setStyle)($unlock, "display", "inline-flex");
                }
            });
        },
        click () {
            if ((0, _utils.hasClass)($player, "art-lock")) {
                (0, _utils.removeClass)($player, "art-lock");
                this.isLock = false;
                art.emit("lock", false);
            } else {
                (0, _utils.addClass)($player, "art-lock");
                this.isLock = true;
                art.emit("lock", true);
            }
        }
    });
    return {
        name: "lock",
        get state () {
            return (0, _utils.hasClass)($player, "art-lock");
        }
    };
}
exports.default = lock;

},{"../utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"dMA6v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function miniProgressBar(art) {
    art.on("ready", ()=>{
        art.layers.add({
            name: "miniProgressBar",
            mounted ($progressBar) {
                art.on("destroy", ()=>{
                    $progressBar.style.display = "none";
                });
                art.on("video:timeupdate", ()=>{
                    $progressBar.style.width = `${art.played * 100}%`;
                });
                art.on("setBar", (type, percentage)=>{
                    if (type === "played") $progressBar.style.width = `${percentage * 100}%`;
                });
            }
        });
    });
    return {
        name: "miniProgressBar"
    };
}
exports.default = miniProgressBar;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"feFxw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Storage {
    constructor(){
        this.name = "artplayer_settings";
        this.settings = {};
    }
    get(key) {
        try {
            const storage = JSON.parse(window.localStorage.getItem(this.name)) || {};
            return key ? storage[key] : storage;
        } catch (error) {
            return key ? this.settings[key] : this.settings;
        }
    }
    set(key, value) {
        try {
            const storage = Object.assign({}, this.get(), {
                [key]: value
            });
            window.localStorage.setItem(this.name, JSON.stringify(storage));
        } catch (error) {
            this.settings[key] = value;
        }
    }
    del(key) {
        try {
            const storage = this.get();
            delete storage[key];
            window.localStorage.setItem(this.name, JSON.stringify(storage));
        } catch (error) {
            delete this.settings[key];
        }
    }
    clear() {
        try {
            window.localStorage.removeItem(this.name);
        } catch (error) {
            this.settings = {};
        }
    }
}
exports.default = Storage;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"bDTDS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
class Template {
    constructor(art){
        this.art = art;
        const { option , constructor  } = art;
        if (option.container instanceof Element) this.$container = option.container;
        else {
            this.$container = (0, _utils.query)(option.container);
            (0, _utils.errorHandle)(this.$container, `No container element found by ${option.container}`);
        }
        const type = this.$container.tagName.toLowerCase();
        (0, _utils.errorHandle)(type === "div", `Unsupported container element type, only support 'div' but got '${type}'`);
        (0, _utils.errorHandle)(constructor.instances.every((ins)=>ins.template.$container !== this.$container), "Cannot mount multiple instances on the same dom element");
        this.query = this.query.bind(this);
        this.$container.dataset.artId = art.id;
        this.$original = this.$container.cloneNode(true);
        this.desktop();
    }
    static get html() {
        return `
          <div class="art-video-player art-layer-show art-control-show art-mask-show">
            <video class="art-video">
              <track default kind="metadata" src=""></track>
            </video>
            <div class="art-poster"></div>
            <div class="art-danmuku"></div>
            <div class="art-layers"></div>
            <div class="art-mask">
              <div class="art-state"></div>
            </div>
            <div class="art-bottom">
              <div class="art-controls">
                <div class="art-controls-left"></div>
                <div class="art-controls-center">
                    <div class="art-progress"></div>
                </div>
                <div class="art-controls-right"></div>
              </div>
            </div>
            <div class="art-loading"></div>
          </div>
        `;
    }
    query(className) {
        return (0, _utils.query)(className, this.$container);
    }
    desktop() {
        const { option  } = this.art;
        if (!option.useSSR) this.$container.innerHTML = Template.html;
        this.$player = this.query(".art-video-player");
        this.$video = this.query(".art-video");
        this.$track = this.query("track");
        this.$poster = this.query(".art-poster");
        this.$danmuku = this.query(".art-danmuku");
        this.$bottom = this.query(".art-bottom");
        this.$progress = this.query(".art-progress");
        this.$controls = this.query(".art-controls");
        this.$controlsLeft = this.query(".art-controls-left");
        this.$controlsCenter = this.query(".art-controls-center");
        this.$controlsRight = this.query(".art-controls-right");
        this.$layer = this.query(".art-layers");
        this.$loading = this.query(".art-loading");
        this.$mask = this.query(".art-mask");
        this.$state = this.query(".art-state");
        if (0, _utils.isMobile) (0, _utils.addClass)(this.$player, "art-mobile");
    }
    destroy(removeHtml) {
        if (removeHtml) (0, _utils.replaceElement)(this.$original, this.$container);
        else (0, _utils.addClass)(this.$player, "art-destroy");
    }
}
exports.default = Template;

},{"./utils":"jmgNb","@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}],"elSLF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Emitter {
    on(name, fn, ctx) {
        const e = this.e || (this.e = {});
        (e[name] || (e[name] = [])).push({
            fn,
            ctx
        });
        return this;
    }
    once(name, fn, ctx) {
        const self = this;
        function listener(...args) {
            self.off(name, listener);
            fn.apply(ctx, args);
        }
        listener._ = fn;
        return this.on(name, listener, ctx);
    }
    emit(name, ...data) {
        const evtArr = ((this.e || (this.e = {}))[name] || []).slice();
        for(let i = 0; i < evtArr.length; i += 1)evtArr[i].fn.apply(evtArr[i].ctx, data);
        return this;
    }
    off(name, callback) {
        const e = this.e || (this.e = {});
        const evts = e[name];
        const liveEvents = [];
        if (evts && callback) {
            for(let i = 0, len = evts.length; i < len; i += 1)if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
        }
        if (liveEvents.length) e[name] = liveEvents;
        else delete e[name];
        return this;
    }
}
exports.default = Emitter;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5dUr6"}]},["eFv8l"], "eFv8l", "parcelRequire4dc0")

//# sourceMappingURL=index.js.map
