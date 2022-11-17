import arrowLeft from 'bundle-text:./arrow-left.svg';
import arrowRight from 'bundle-text:./arrow-right.svg';
import aspectRatio from 'bundle-text:./aspect-ratio.svg';
import check from 'bundle-text:./check.svg';
import close from 'bundle-text:./close.svg';
import config from 'bundle-text:./config.svg';
import error from 'bundle-text:./error.svg';
import flip from 'bundle-text:./flip.svg';
import fullscreenOff from 'bundle-text:./fullscreen-off.svg';
import fullscreenOn from 'bundle-text:./fullscreen-on.svg';
import loading from 'bundle-text:./loading.svg';
import pause from 'bundle-text:./pause.svg';
import play from 'bundle-text:./play.svg';
import playbackRate from 'bundle-text:./playback-rate.svg';
import state from 'bundle-text:./state.svg';
import switchOff from 'bundle-text:./switch-off.svg';
import switchOn from 'bundle-text:./switch-on.svg';
import volumeClose from 'bundle-text:./volume-close.svg';
import volume from 'bundle-text:./volume.svg';
import { addClass, append, createElement, def } from '../utils';

export default class Icons {
    constructor(art) {
        const icons = {
            loading,
            state,
            play,
            pause,
            check,
            volume,
            volumeClose,
            arrowLeft,
            arrowRight,
            playbackRate,
            aspectRatio,
            config,
            flip,
            fullscreenOff,
            fullscreenOn,
            switchOn,
            switchOff,
            error,
            close,
            ...art.option.icons,
        };

        Object.keys(icons).forEach((key) => {
            def(this, key, {
                get: () => {
                    const icon = createElement('i');
                    addClass(icon, 'art-icon');
                    addClass(icon, `art-icon-${key}`);
                    append(icon, icons[key]);
                    return icon;
                },
            });
        });
    }
}
