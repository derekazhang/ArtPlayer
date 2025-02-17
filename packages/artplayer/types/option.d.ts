import { ComponentOption } from './component';
import { Icons } from './icons';
import Artplayer = require('./artplayer');

type CustomType = 'flv' | 'm3u8' | 'hls' | 'ts' | 'mpd' | 'torrent' | (string & Record<never, never>);

export type Option = {
    /**
     * The player id
     */
    id?: string;

    /**
     * The container mounted by the player
     */
    container: string | HTMLDivElement;

    /**
     * Video url
     */
    url: string;

    /**
     * Video poster image url
     */
    poster?: string;

    /**
     * Video title
     */
    title?: string;

    /**
     * Video url type
     */
    type?: CustomType;

    /**
     * Player color theme
     */
    theme?: string;

    /**
     * Player default volume
     */
    volume?: number;

    /**
     * Whether live broadcast mode
     */
    isLive?: boolean;

    /**
     * Whether video muted
     */
    muted?: boolean;

    /**
     * Whether video auto play
     */
    autoplay?: boolean;

    /**
     * Whether player auto resize
     */
    autoSize?: boolean;

    /**
     * Whether player auto run mini mode
     */
    autoMini?: boolean;

    /**
     * Whether video auto loop
     */
    loop?: boolean;

    /**
     * Whether show video flip button
     */
    flip?: boolean;

    /**
     * Whether show video playback rate button
     */
    playbackRate?: boolean;

    /**
     * Whether show video aspect ratio button
     */
    aspectRatio?: boolean;

    /**
     * Whether show video screenshot button
     */
    screenshot?: boolean;

    /**
     * Whether show video setting button
     */
    setting?: boolean;

    /**
     * Whether to enable player hotkey
     */
    hotkey?: boolean;

    /**
     * Whether show video pip button
     */
    pip?: boolean;

    /**
     * Do you want to run only one player at a time
     */
    mutex?: boolean;

    /**
     * Whether use backdrop in UI
     */
    backdrop?: boolean;

    /**
     * Whether show video window fullscreen button
     */
    fullscreen?: boolean;

    /**
     * Whether to enable player mini progress bar
     */
    miniProgressBar?: boolean;

    /**
     * Whether use SSR function
     */
    useSSR?: boolean;

    /**
     * Whether use playsInline in mobile
     */
    playsInline?: boolean;

    /**
     * Whether use lock in mobile
     */
    lock?: boolean;

    /**
     * Whether use fast forward in mobile
     */
    fastForward?: boolean;

    /**
     * Whether use auto playback
     */
    autoPlayback?: boolean;

    /**
     * Whether use auto orientation in mobile
     */
    autoOrientation?: boolean;

    /**
     * Custom plugin list
     */
    plugins?: ((this: Artplayer, art: Artplayer) => unknown)[];

    /**
     * Custom layer list
     */
    layers?: ComponentOption[];

    /**
     * Custom control list
     */
    controls?: ComponentOption[];
    /**
     * Other video attribute
     */
    moreVideoAttr?: Partial<{
        [key in keyof HTMLVideoElement as HTMLVideoElement[key] extends Function ? never : key]: HTMLVideoElement[key];
    }>;

    /**
     * Custom default icons
     */
    icons?: {
        [key in keyof Icons]?: HTMLElement | string;
    };

    /**
     * Custom video type function
     */
    customType?: Partial<
        Record<CustomType, (this: Artplayer, video: HTMLVideoElement, url: string, art: Artplayer) => any>
    >;
};

export default Option;
