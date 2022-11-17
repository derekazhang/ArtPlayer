import { def } from '../utils';

export default function seekMix(art) {
    def(art, 'seek', {
        set(time) {
            art.currentTime = time;
            art.emit('seek', art.currentTime);
        },
    });

    def(art, 'forward', {
        set(time) {
            art.seek = art.currentTime + time;
        },
    });

    def(art, 'backward', {
        set(time) {
            art.seek = art.currentTime - time;
        },
    });
}
