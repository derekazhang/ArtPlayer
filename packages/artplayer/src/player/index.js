import aspectRatioMix from './aspectRatioMix';
import attrMix from './attrMix';
import autoHeightMix from './autoHeightMix';
import autoSizeMix from './autoSizeMix';
import currentTimeMix from './currentTimeMix';
import durationMix from './durationMix';
import eventInit from './eventInit';
import fullscreenMix from './fullscreenMix';
import loadedMix from './loadedMix';
import loopMix from './loopMix';
import normalSizeMix from './normalSizeMix';
import optionInit from './optionInit';
import pauseMix from './pauseMix';
import playedMix from './playedMix';
import playingMix from './playingMix';
import playMix from './playMix';
import posterMix from './posterMix';
import rectMix from './rectMix';
import seekMix from './seekMix';
import themeMix from './themeMix';
import titleMix from './titleMix';
import toggleMix from './toggleMix';
import typeMix from './typeMix';
import urlMix from './urlMix';
import volumeMix from './volumeMix';

export default class Player {
    constructor(art) {
        urlMix(art);
        attrMix(art);
        playMix(art);
        pauseMix(art);
        toggleMix(art);
        seekMix(art);
        volumeMix(art);
        currentTimeMix(art);
        durationMix(art);
        aspectRatioMix(art);
        fullscreenMix(art);
        loadedMix(art);
        playedMix(art);
        playingMix(art);
        autoSizeMix(art);
        rectMix(art);
        loopMix(art);
        posterMix(art);
        autoHeightMix(art);
        themeMix(art);
        titleMix(art);
        typeMix(art);
        normalSizeMix(art);
        eventInit(art);
        optionInit(art);
    }
}
