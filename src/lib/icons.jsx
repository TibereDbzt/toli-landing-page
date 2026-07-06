import React from 'react'

const h = React.createElement

function Svg(p, children) {
  return h('svg', {
    width: p.size || 22,
    height: p.size || 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: p.sw || 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: p.style,
    'aria-hidden': 'true',
  }, children)
}

const L = (...d) => d.map((dd, i) => h('path', { key: i, d: dd }))

const Icons = {
  arrowRight: (p = {}) => Svg(p, [h('line', { key: 1, x1: 5, y1: 12, x2: 19, y2: 12 }), h('polyline', { key: 2, points: '12 5 19 12 12 19' })]),
  arrowDown: (p = {}) => Svg(p, [h('line', { key: 1, x1: 12, y1: 5, x2: 12, y2: 19 }), h('polyline', { key: 2, points: '19 12 12 19 5 12' })]),
  arrowUpRight: (p = {}) => Svg(p, L('M7 17 17 7', 'M7 7h10v10')),
  check: (p = {}) => Svg(p, [h('polyline', { key: 1, points: '20 6 9 17 4 12' })]),
  checkCircle: (p = {}) => Svg(p, [h('path', { key: 1, d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' }), h('polyline', { key: 2, points: '22 4 12 14.01 9 11.01' })]),
  x: (p = {}) => Svg(p, [h('line', { key: 1, x1: 18, y1: 6, x2: 6, y2: 18 }), h('line', { key: 2, x1: 6, y1: 6, x2: 18, y2: 18 })]),
  plus: (p = {}) => Svg(p, [h('line', { key: 1, x1: 12, y1: 5, x2: 12, y2: 19 }), h('line', { key: 2, x1: 5, y1: 12, x2: 19, y2: 12 })]),
  chevronDown: (p = {}) => Svg(p, [h('polyline', { key: 1, points: '6 9 12 15 18 9' })]),
  chevronRight: (p = {}) => Svg(p, [h('polyline', { key: 1, points: '9 6 15 12 9 18' })]),
  search: (p = {}) => Svg(p, [h('circle', { key: 1, cx: 11, cy: 11, r: 7 }), h('line', { key: 2, x1: 21, y1: 21, x2: 16.65, y2: 16.65 })]),
  calendar: (p = {}) => Svg(p, [h('rect', { key: 1, x: 3, y: 4, width: 18, height: 18, rx: 2 }), h('line', { key: 2, x1: 3, y1: 9, x2: 21, y2: 9 }), h('line', { key: 3, x1: 8, y1: 2, x2: 8, y2: 6 }), h('line', { key: 4, x1: 16, y1: 2, x2: 16, y2: 6 })]),
  list: (p = {}) => Svg(p, [h('line', { key: 1, x1: 8, y1: 6, x2: 21, y2: 6 }), h('line', { key: 2, x1: 8, y1: 12, x2: 21, y2: 12 }), h('line', { key: 3, x1: 8, y1: 18, x2: 21, y2: 18 }), h('circle', { key: 4, cx: 3.5, cy: 6, r: 1 }), h('circle', { key: 5, cx: 3.5, cy: 12, r: 1 }), h('circle', { key: 6, cx: 3.5, cy: 18, r: 1 })]),
  chart: (p = {}) => Svg(p, [h('line', { key: 1, x1: 4, y1: 20, x2: 4, y2: 12 }), h('line', { key: 2, x1: 10, y1: 20, x2: 10, y2: 4 }), h('line', { key: 3, x1: 16, y1: 20, x2: 16, y2: 9 }), h('line', { key: 4, x1: 22, y1: 20, x2: 22, y2: 14 })]),
  message: (p = {}) => Svg(p, L('M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.7-.85L3 21l1.85-5.55A8.5 8.5 0 1 1 21 11.5z')),
  inbox: (p = {}) => Svg(p, [h('polyline', { key: 1, points: '22 12 16 12 14 15 10 15 8 12 2 12' }), h('path', { key: 2, d: 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' })]),
  share: (p = {}) => Svg(p, [h('circle', { key: 1, cx: 18, cy: 5, r: 3 }), h('circle', { key: 2, cx: 6, cy: 12, r: 3 }), h('circle', { key: 3, cx: 18, cy: 19, r: 3 }), h('line', { key: 4, x1: 8.6, y1: 13.5, x2: 15.4, y2: 17.5 }), h('line', { key: 5, x1: 15.4, y1: 6.5, x2: 8.6, y2: 10.5 })]),
  external: (p = {}) => Svg(p, L('M15 3h6v6', 'M10 14 21 3', 'M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5')),
  users: (p = {}) => Svg(p, [h('path', { key: 1, d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }), h('circle', { key: 2, cx: 9, cy: 7, r: 4 }), h('path', { key: 3, d: 'M23 21v-2a4 4 0 0 0-3-3.87' }), h('path', { key: 4, d: 'M16 3.13a4 4 0 0 1 0 7.75' })]),
  send: (p = {}) => Svg(p, [h('line', { key: 1, x1: 22, y1: 2, x2: 11, y2: 13 }), h('polygon', { key: 2, points: '22 2 15 22 11 13 2 9 22 2' })]),
  lock: (p = {}) => Svg(p, [h('rect', { key: 1, x: 3, y: 11, width: 18, height: 11, rx: 2 }), h('path', { key: 2, d: 'M7 11V7a5 5 0 0 1 10 0v4' })]),
  shield: (p = {}) => Svg(p, L('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z')),
  refresh: (p = {}) => Svg(p, [h('polyline', { key: 1, points: '23 4 23 10 17 10' }), h('polyline', { key: 2, points: '1 20 1 14 7 14' }), h('path', { key: 3, d: 'M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15' })]),
  eye: (p = {}) => Svg(p, [h('path', { key: 1, d: 'M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z' }), h('circle', { key: 2, cx: 12, cy: 12, r: 3 })]),
  clock: (p = {}) => Svg(p, [h('circle', { key: 1, cx: 12, cy: 12, r: 9 }), h('polyline', { key: 2, points: '12 7 12 12 15 14' })]),
  mapPin: (p = {}) => Svg(p, [h('path', { key: 1, d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' }), h('circle', { key: 2, cx: 12, cy: 10, r: 3 })]),
  plane: (p = {}) => Svg(p, L('M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z')),
  alert: (p = {}) => Svg(p, [h('path', { key: 1, d: 'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' }), h('line', { key: 2, x1: 12, y1: 9, x2: 12, y2: 13 }), h('line', { key: 3, x1: 12, y1: 17, x2: 12.01, y2: 17 })]),
  sheet: (p = {}) => Svg(p, [h('rect', { key: 1, x: 3, y: 3, width: 18, height: 18, rx: 2 }), h('line', { key: 2, x1: 3, y1: 9, x2: 21, y2: 9 }), h('line', { key: 3, x1: 3, y1: 15, x2: 21, y2: 15 }), h('line', { key: 4, x1: 9, y1: 3, x2: 9, y2: 21 }), h('line', { key: 5, x1: 15, y1: 3, x2: 15, y2: 21 })]),
  mail: (p = {}) => Svg(p, [h('rect', { key: 1, x: 2, y: 4, width: 20, height: 16, rx: 2 }), h('path', { key: 2, d: 'm22 6-10 7L2 6' })]),
  upload: (p = {}) => Svg(p, [h('path', { key: 1, d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }), h('polyline', { key: 2, points: '17 8 12 3 7 8' }), h('line', { key: 3, x1: 12, y1: 3, x2: 12, y2: 15 })]),
  download: (p = {}) => Svg(p, [h('path', { key: 1, d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }), h('polyline', { key: 2, points: '7 10 12 15 17 10' }), h('line', { key: 3, x1: 12, y1: 15, x2: 12, y2: 3 })]),
  menu: (p = {}) => Svg(p, [h('line', { key: 1, x1: 3, y1: 6, x2: 21, y2: 6 }), h('line', { key: 2, x1: 3, y1: 12, x2: 21, y2: 12 }), h('line', { key: 3, x1: 3, y1: 18, x2: 21, y2: 18 })]),
  trophy: (p = {}) => Svg(p, [h('path', { key: 1, d: 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6' }), h('path', { key: 2, d: 'M18 9h1.5a2.5 2.5 0 0 0 0-5H18' }), h('path', { key: 3, d: 'M4 22h16' }), h('path', { key: 4, d: 'M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22' }), h('path', { key: 5, d: 'M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22' }), h('path', { key: 6, d: 'M18 2H6v7a6 6 0 0 0 12 0V2z' })]),
  more: (p = {}) => Svg(p, [h('circle', { key: 1, cx: 5, cy: 12, r: 1.6, fill: 'currentColor', stroke: 'none' }), h('circle', { key: 2, cx: 12, cy: 12, r: 1.6, fill: 'currentColor', stroke: 'none' }), h('circle', { key: 3, cx: 19, cy: 12, r: 1.6, fill: 'currentColor', stroke: 'none' })]),
}

export { Icons }
export default Icons
