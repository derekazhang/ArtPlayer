import { isInViewport, throttle } from '../utils';

export default function viewInit(art, events) {
    const {
        option,
        constructor,
        template: { $container },
    } = art;

    const scrollFn = throttle(() => {
        art.emit('view', isInViewport($container, constructor.SCROLL_GAP));
    }, constructor.SCROLL_TIME);

    events.proxy(window, 'scroll', () => {
        scrollFn();
    });
}
