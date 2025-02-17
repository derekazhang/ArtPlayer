import screenfull from '../libs/screenfull';
import { addClass, def, get, removeClass } from '../utils';

export default function fullscreenMix(art) {
    const {
        template: { $video, $player },
    } = art;

    const nativeScreenfull = (art) => {
        def(art, 'fullscreen', {
            get() {
                return screenfull.isFullscreen;
            },
            async set(value) {
                if (value) {
                    art.normalSize = 'fullscreen';
                    art.aspectRatioReset = true;
                    art.autoSize = false;
                    await screenfull.request($player);
                    addClass($player, 'art-fullscreen');
                    art.emit('resize');
                    art.emit('fullscreen', true);
                } else {
                    art.aspectRatioReset = true;
                    art.autoSize = art.option.autoSize;
                    await screenfull.exit();
                    removeClass($player, 'art-fullscreen');
                    art.emit('resize');
                    art.emit('fullscreen', false);
                }
            },
        });
    };

    const webkitScreenfull = (art) => {
        def(art, 'fullscreen', {
            get() {
                return $video.webkitDisplayingFullscreen;
            },
            set(value) {
                if (value) {
                    art.normalSize = 'fullscreen';
                    $video.webkitEnterFullscreen();
                    art.emit('fullscreen', true);
                } else {
                    $video.webkitExitFullscreen();
                    art.emit('fullscreen', false);
                }
            },
        });
    };

    art.once('video:loadedmetadata', () => {
        if (screenfull.isEnabled) {
            nativeScreenfull(art);
        } else if (document.fullscreenEnabled || $video.webkitSupportsFullscreen) {
            webkitScreenfull(art);
        } else {
            def(art, 'fullscreen', {
                get() {
                    return false;
                },
            });
        }

        // Asynchronous setting
        def(art, 'fullscreen', get(art, 'fullscreen'));
    });
}
