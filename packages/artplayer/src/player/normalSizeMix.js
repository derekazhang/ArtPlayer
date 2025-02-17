import { def } from '../utils';

export default function normalSizeMix(art) {
    const sizeProps = ['fullscreen'];

    def(art, 'normalSize', {
        get() {
            return sizeProps.every((name) => !art[name]);
        },
        set(name) {
            sizeProps
                .filter((item) => item !== name)
                .forEach((item) => {
                    if (art[item]) {
                        art[item] = false;
                    }
                });
        },
    });
}
