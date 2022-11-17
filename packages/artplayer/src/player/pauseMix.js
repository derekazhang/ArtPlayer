import { def } from '../utils';

export default function pauseMix(art) {
    const {
        template: { $video },
    } = art;

    def(art, 'pause', {
        value() {
            const result = $video.pause();
            art.emit('pause');
            return result;
        },
    });
}
