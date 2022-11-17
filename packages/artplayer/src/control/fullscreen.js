import { append, setStyle, tooltip } from '../utils';

export default function fullscreen(option) {
    return (art) => ({
        ...option,
        tooltip: '全屏',
        mounted: ($control) => {
            const { proxy, icons } = art;

            const $fullscreenOn = append($control, icons.fullscreenOn);
            const $fullscreenOff = append($control, icons.fullscreenOff);
            setStyle($fullscreenOff, 'display', 'none');

            proxy($control, 'click', () => {
                art.fullscreen = !art.fullscreen;
            });

            art.on('fullscreen', (value) => {
                if (value) {
                    tooltip($control, '退出全屏');
                    setStyle($fullscreenOn, 'display', 'none');
                    setStyle($fullscreenOff, 'display', 'inline-flex');
                } else {
                    tooltip($control, '全屏');
                    setStyle($fullscreenOn, 'display', 'inline-flex');
                    setStyle($fullscreenOff, 'display', 'none');
                }
            });
        },
    });
}
