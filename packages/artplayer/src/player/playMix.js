import { def } from '../utils';

export default function playMix(art) {
    const {
        option,
        constructor: { instances },
        template: { $video },
    } = art;

    def(art, 'play', {
        value: async function () {
            const result = await $video.play();
            art.emit('play');

            if (option.mutex) {
                for (let index = 0; index < instances.length; index++) {
                    const instance = instances[index];
                    if (instance !== art) {
                        instance.pause();
                    }
                }
            }

            return result;
        },
    });
}
