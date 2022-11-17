import { addClass, errorHandle, removeClass } from '../utils';
import Component from '../utils/component';
import fullscreen from './fullscreen';
import playAndPause from './playAndPause';
import progress from './progress';
import time from './time';
import volume from './volume';

export default class Control extends Component {
    constructor(art) {
        super(art);

        this.name = 'control';

        const {
            proxy,
            constructor,
            template: { $player },
        } = art;

        let activeTime = Date.now();

        proxy($player, ['click', 'mousemove', 'touchstart', 'touchmove'], () => {
            this.show = true;
            removeClass($player, 'art-hide-cursor');
            addClass($player, 'art-hover');
            activeTime = Date.now();
        });

        art.on('video:timeupdate', () => {
            if (!art.isInput && art.playing && this.show && Date.now() - activeTime >= constructor.CONTROL_HIDE_TIME) {
                this.show = false;
                addClass($player, 'art-hide-cursor');
                removeClass($player, 'art-hover');
            }
        });

        this.init();
    }

    init() {
        const { option } = this.art;

        if (!option.isLive) {
            this.add(
                progress({
                    name: 'progress',
                    position: 'progress',
                    index: 10,
                }),
            );
        }

        this.add(
            playAndPause({
                name: 'playAndPause',
                position: 'left',
                index: 10,
            }),
        );

        this.add(
            volume({
                name: 'volume',
                position: 'left',
                index: 20,
            }),
        );

        if (!option.isLive) {
            this.add(
                time({
                    name: 'time',
                    position: 'left',
                    index: 30,
                }),
            );
            // this.add(
            //     time({
            //         name: 'time',
            //         position: 'right',
            //         index: 30,
            //     }),
            // );
        }

        if (option.fullscreen) {
            this.add(
                fullscreen({
                    name: 'fullscreen',
                    position: 'right',
                    index: 70,
                }),
            );
        }

        for (let index = 0; index < option.controls.length; index++) {
            this.add(option.controls[index]);
        }
    }

    add(getOption) {
        const option = typeof getOption === 'function' ? getOption(this.art) : getOption;
        const { $progress, $controlsLeft, $controlsRight } = this.art.template;

        switch (option.position) {
            case 'progress':
                this.$parent = $progress;
                break;
            case 'left':
                this.$parent = $controlsLeft;
                break;
            case 'right':
                this.$parent = $controlsRight;
                break;
            default:
                errorHandle(false, `Control option.position must one of 'top', 'left', 'right'`);
                break;
        }

        super.add(option);
    }
}
