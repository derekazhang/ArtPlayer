import { append, setStyle, tooltip } from '../utils';

export default function playAndPause(option) {
    return (art) => ({
        ...option,
        mounted: ($control) => {
            const { proxy, icons } = art;

            const $play = append($control, icons.play);
            const $pause = append($control, icons.pause);
            tooltip($play, '播放');
            tooltip($pause, '暂停');

            proxy($play, 'click', () => {
                art.play();
            });

            proxy($pause, 'click', () => {
                art.pause();
            });

            function showPlay() {
                setStyle($play, 'display', 'flex');
                setStyle($pause, 'display', 'none');
            }

            function showPause() {
                setStyle($play, 'display', 'none');
                setStyle($pause, 'display', 'flex');
            }

            if (art.playing) {
                showPause();
            } else {
                showPlay();
            }

            art.on('video:playing', () => {
                showPause();
            });

            art.on('video:pause', () => {
                showPlay();
            });
        },
    });
}
