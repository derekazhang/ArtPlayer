import {
  addClass,
  errorHandle,
  isMobile,
  query,
  replaceElement,
} from './utils';

export default class Template {
  constructor(art) {
    this.art = art;
    const { option, constructor } = art;

    if (option.container instanceof Element) {
      this.$container = option.container;
    } else {
      this.$container = query(option.container);
      errorHandle(
        this.$container,
        `No container element found by ${option.container}`
      );
    }

    const type = this.$container.tagName.toLowerCase();
    errorHandle(
      type === 'div',
      `Unsupported container element type, only support 'div' but got '${type}'`
    );

    errorHandle(
      constructor.instances.every(
        (ins) => ins.template.$container !== this.$container
      ),
      'Cannot mount multiple instances on the same dom element'
    );

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
    return query(className, this.$container);
  }

  desktop() {
    const { option } = this.art;

    if (!option.useSSR) {
      this.$container.innerHTML = Template.html;
    }

    this.$player = this.query('.art-video-player');
    this.$video = this.query('.art-video');
    this.$track = this.query('track');
    this.$poster = this.query('.art-poster');
    this.$danmuku = this.query('.art-danmuku');
    this.$bottom = this.query('.art-bottom');
    this.$progress = this.query('.art-progress');
    this.$controls = this.query('.art-controls');
    this.$controlsLeft = this.query('.art-controls-left');
    this.$controlsCenter = this.query('.art-controls-center');
    this.$controlsRight = this.query('.art-controls-right');
    this.$layer = this.query('.art-layers');
    this.$loading = this.query('.art-loading');
    this.$mask = this.query('.art-mask');
    this.$state = this.query('.art-state');

    if (isMobile) {
      addClass(this.$player, 'art-mobile');
    }
  }

  destroy(removeHtml) {
    if (removeHtml) {
      replaceElement(this.$original, this.$container);
    } else {
      addClass(this.$player, 'art-destroy');
    }
  }
}
