import style from 'bundle-text:./style/index.less';
import validator from 'option-validator';
import config from './config';
import Control from './control';
import Events from './events';
import Icons from './icons';
import Layer from './layer';
import Loading from './loading';
import Mask from './mask';
import Player from './player';
import Plugins from './plugins';
import scheme from './scheme';
import Storage from './storage';
import Template from './template';
import * as utils from './utils';
import Emitter from './utils/emitter';

let id = 0;
const instances = [];
export default class Artplayer extends Emitter {
  constructor(option, readyCallback) {
    super();

    this.id = ++id;

    const mergeOption = utils.mergeDeep(Artplayer.option, option);
    this.option = validator(mergeOption, scheme);

    this.isLock = false;
    this.isReady = false;
    this.isFocus = false;
    this.isInput = false;
    this.isRotate = false;
    this.isDestroy = false;

    this.template = new Template(this);
    this.events = new Events(this);
    this.storage = new Storage(this);
    this.icons = new Icons(this);

    this.player = new Player(this);
    this.layers = new Layer(this);
    this.controls = new Control(this);
    this.loading = new Loading(this);
    this.mask = new Mask(this);
    this.plugins = new Plugins(this);

    if (typeof readyCallback === 'function') {
      this.on('ready', () => readyCallback.call(this, this));
    }

    if (Artplayer.DEGUG) {
      const log = (msg) => console.log(`[ART.${this.id}] -> ${msg}`);
      log('Version@' + Artplayer.version);
      log('Env@' + Artplayer.env);
      log('Build@' + Artplayer.build);
      for (let index = 0; index < config.events.length; index++) {
        this.on('video:' + config.events[index], (event) =>
          log('Event@' + event.type)
        );
      }
    }

    instances.push(this);
  }

  static get instances() {
    return instances;
  }

  static get config() {
    return config;
  }

  static get utils() {
    return utils;
  }

  static get scheme() {
    return scheme;
  }

  static get Emitter() {
    return Emitter;
  }

  static get validator() {
    return validator;
  }

  static get kindOf() {
    return validator.kindOf;
  }

  static get html() {
    return Template.html;
  }

  static get option() {
    return {
      id: '',
      container: '#artplayer',
      url: '',
      poster: '',
      title: '',
      type: '',
      theme: '#f00',
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
      customType: {},
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
    this.emit('destroy');
  }
}

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
Artplayer.PLAYBACK_RATE = [0.5, 0.75, 1, 1.25, 1.5, 2];
Artplayer.ASPECT_RATIO = ['default', '4:3', '16:9'];
Artplayer.FLIP = ['normal', 'horizontal', 'vertical'];

if (typeof document !== 'undefined') {
  if (!document.getElementById('artplayer-style')) {
    const $style = utils.createElement('style');
    $style.id = 'artplayer-style';
    $style.textContent = style;
    document.head.appendChild($style);
  }
}

if (typeof window !== 'undefined') {
  window['Artplayer'] = Artplayer;
}

console.log(
  `%c ArtPlayer %c ${Artplayer.version} %c https://artplayer.org`,
  'color: #fff; background: #5f5f5f',
  'color: #fff; background: #4bc729',
  ''
);
