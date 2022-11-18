import { errorHandle } from '../utils';

const a = 'array';
const b = 'boolean';
const s = 'string';
const n = 'number';
const o = 'object';
const f = 'function';
const r = 'regexp';

function validElement(value, type, paths) {
  return errorHandle(
    type === s || type === n || value instanceof Element,
    `${paths.join('.')} require '${s}' or 'Element' type`
  );
}

export const ComponentOption = {
  html: validElement,
  disable: `?${b}`,
  name: `?${s}`,
  index: `?${n}`,
  style: `?${o}`,
  click: `?${f}`,
  mounted: `?${f}`,
  tooltip: `?${s}|${n}`,
  width: `?${n}`,
  selector: `?${a}`,
  onSelect: `?${f}`,
  switch: `?${b}`,
  onSwitch: `?${f}`,
  range: `?${a}`,
  onRange: `?${f}`,
  onChange: `?${f}`,
};

export default {
  id: s,
  container: validElement,
  url: s,
  poster: s,
  title: s,
  type: s,
  theme: s,
  lang: s,
  volume: n,
  isLive: b,
  muted: b,
  autoplay: b,
  autoSize: b,
  loop: b,
  flip: b,
  playbackRate: b,
  aspectRatio: b,
  screenshot: b,
  mutex: b,
  backdrop: b,
  fullscreen: b,
  miniProgressBar: b,
  useSSR: b,
  playsInline: b,
  lock: b,
  fastForward: b,
  autoOrientation: b,
  plugins: [f],
  layers: [ComponentOption],
  controls: [
    {
      ...ComponentOption,
      position: (value, _, paths) => {
        const position = ['top', 'left', 'right'];
        return errorHandle(
          position.includes(value),
          `${paths.join('.')} only accept ${position.toString()} as parameters`
        );
      },
    },
  ],
  moreVideoAttr: o,
  icons: o,
  customType: o,
};
