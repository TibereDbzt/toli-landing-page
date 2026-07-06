import React from 'react'
import Icons from '../lib/icons.jsx'

export const Ic = Icons

/* Country flag — functional data per DS (flagcdn), rounded 3px + faint ring. */
export function Flag({ code, label }) {
  const cc = { FRA: 'fr', ESP: 'es', GER: 'de', ITA: 'it', SUI: 'ch', JPN: 'jp', AUT: 'at', GBR: 'gb', USA: 'us', NOR: 'no', SWE: 'se' }[label] || code
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>
      <img src={`https://flagcdn.com/h20/${cc}.png`} alt={label} width="20" height="14"
        style={{ borderRadius: 3, boxShadow: '0 0 0 1px var(--hairline) inset', display: 'block', objectFit: 'cover' }} />
      {label}
    </span>
  )
}

/* macOS-ish window chrome wrapper. `chrome` is the small label in the title strip. */
export function Win({ chrome, children, style = {} }) {
  return (
    <div style={{
      borderRadius: 14, overflow: 'hidden', background: 'var(--surface-card)',
      border: '1px solid var(--hairline)', boxShadow: 'var(--shadow-card-lg)', ...style,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, height: 38, padding: '0 14px',
        background: 'var(--surface-well)', borderBottom: '1px solid var(--hairline)',
      }}>
        <span style={{ display: 'flex', gap: 6 }}>
          {['#E3DDD2', '#E3DDD2', '#E3DDD2'].map((c, i) => (
            <span key={i} style={{ width: 10, height: 10, borderRadius: 999, background: c }} />
          ))}
        </span>
        <span style={{
          marginLeft: 8, fontFamily: 'var(--font-ui)', fontSize: 11.5, fontWeight: 600,
          letterSpacing: '0.02em', color: 'var(--text-faint)',
        }}>{chrome}</span>
      </div>
      {children}
    </div>
  )
}

/* Slim manager-app sidebar rail (matches the real app's ~72px rail). */
export function Rail({ active = 'list' }) {
  const items = [
    { id: 'list', icon: Icons.list },
    { id: 'calendar', icon: Icons.calendar },
    { id: 'chart', icon: Icons.chart },
    { id: 'message', icon: Icons.message },
  ]
  return (
    <div style={{
      width: 64, flex: 'none', background: 'var(--surface-app)', borderRight: '1px solid var(--hairline)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '14px 0',
    }}>
      <span style={{
        width: 36, height: 36, borderRadius: 10, background: 'var(--accent)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', marginBottom: 10,
      }}>
        <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
          <g stroke="var(--accent-on)" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32 13.5 V18" /><path d="M44.5 21.5 l2.4 -2.4" />
            <circle cx="32" cy="36" r="15" /><path d="M32 36 L40 28.5" />
          </g>
        </svg>
      </span>
      {items.map((it) => {
        const on = it.id === active
        const IconCmp = it.icon
        return (
          <span key={it.id} style={{
            width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: on ? 'var(--accent-soft)' : 'transparent',
            color: on ? 'var(--text-primary)' : 'var(--text-faint)',
          }}>
            <IconCmp size={20} />
          </span>
        )
      })}
    </div>
  )
}

/* Uppercase tracked eyebrow used inside mockups (column heads etc). */
export function Eyebrow({ children, style = {} }) {
  return <div style={{
    fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
    textTransform: 'uppercase', color: 'var(--text-muted)', ...style,
  }}>{children}</div>
}

/**
 * Fit: render fixed-width design content and scale it down to fit the column.
 * Keeps mockups crisp at authoring width while staying responsive.
 * useLayoutEffect is replaced with useEffect in SSR to avoid the React warning.
 */
// useLayoutEffect causes SSR warnings when window is polyfilled in Node.
// useEffect is safe here because the ResizeObserver logic is browser-only.
const useIsoLayoutEffect = React.useEffect

export function Fit({ width, children, align = 'left', style = {} }) {
  const outer = React.useRef(null)
  const inner = React.useRef(null)
  const [scale, setScale] = React.useState(1)
  const [h, setH] = React.useState(0)
  useIsoLayoutEffect(() => {
    const measure = () => {
      if (!outer.current || !inner.current) return
      const w = outer.current.clientWidth
      const s = Math.min(1, w / width)
      setScale(s)
      setH(inner.current.offsetHeight * s)
    }
    measure()
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null
    if (ro && outer.current) ro.observe(outer.current)
    const t = setTimeout(measure, 300)
    return () => {
      if (ro) ro.disconnect()
      clearTimeout(t)
    }
  }, [width])
  return (
    <div ref={outer} style={{ width: '100%', height: h || undefined, ...style }}>
      <div ref={inner} style={{
        width,
        transform: `scale(${scale})`,
        transformOrigin: align === 'center' ? 'top center' : 'top left',
        marginLeft: align === 'center' ? `calc((100% - ${width}px) / 2)` : 0,
      }}>
        {children}
      </div>
    </div>
  )
}
