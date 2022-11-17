import { addClass, hasClass, removeClass } from '../utils';

export default function autoOrientation(art) {
    const {
        template: { $player, $video },
    } = art;

    art.on('fullscreen', async (state) => {
        const lastOrientation = screen.orientation.type;
        if (state) {
            const { videoWidth, videoHeight } = $video;
            const { clientWidth: viewWidth, clientHeight: viewHeight } = document.documentElement;
            if (
                (videoWidth > videoHeight && viewWidth < viewHeight) ||
                (videoWidth < videoHeight && viewWidth > viewHeight)
            ) {
                const oppositeOrientation = lastOrientation.startsWith('portrait') ? 'landscape' : 'portrait';
                await screen.orientation.lock(oppositeOrientation);
                addClass($player, 'art-auto-orientation-fullscreen');
            }
        } else {
            if (hasClass($player, 'art-auto-orientation-fullscreen')) {
                await screen.orientation.lock(lastOrientation);
                removeClass($player, 'art-auto-orientation-fullscreen');
            }
        }
    });

    return {
        name: 'autoOrientation',
        get state() {
            return hasClass($player, 'art-auto-orientation');
        },
    };
}
