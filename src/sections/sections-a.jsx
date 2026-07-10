import React from 'react'
import { Button as BtnL, Tag as TagL } from '../lib/ds.js'
import { Eyebrow as E, Win, Fit } from '../components/shell.jsx'
import Icons from '../lib/icons.jsx'
import { RosterMock, EventMock, RegMock } from '../components/mocks-manager-a.jsx'
import { AttendanceMock, MessagingMock, PerfMock } from '../components/mocks-manager-b.jsx'

const Ic = Icons

export function Container({ children, w = 1180, style = {} }) {
  return <div style={{ maxWidth: w, margin: '0 auto', padding: '0 32px', ...style }}>{children}</div>
}

/* micro-proof chip */
function Proof({ children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 13px 7px 11px', borderRadius: 999,
      background: 'var(--surface-card)', border: '1px solid var(--hairline)',
      fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap',
    }}>
      <span style={{ display: 'inline-flex', color: 'var(--accent)' }}><Ic.check size={15} /></span>
      {children}
    </span>
  )
}

export function BrandMark({ size = 30 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <span style={{ width: size, height: size, borderRadius: size * 0.28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_235_141" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
            <rect width="30" height="30" rx="10" fill="#F57657"/>
            </mask>
            <g mask="url(#mask0_235_141)">
            <rect width="30" height="30" rx="10" fill="url(#paint0_linear_235_141)"/>
            <path d="M4.09816 30.615C6.11368 21.0268 9.46939 7.47426 17.5734 21.0438C23.8039 31.4764 23.4417 6.69919 30.7589 4.74304" stroke="#FFFBF3" strokeWidth="3.42466"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_235_141" x1="17" y1="7.98702e-07" x2="5" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF7300"/>
            <stop offset="1" stopColor="#C75D06"/>
            </linearGradient>
            </defs>
        </svg>
      </span>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: size * 0.7, letterSpacing: '-0.03em', color: '#E16803' }}>Toli</span>
    </span>
  )
}

/* ============================== NAV ============================== */
export function NavBar() {
  const [scrolled, setScrolled] = React.useState(false)
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', f, { passive: true }); f()
    return () => window.removeEventListener('scroll', f)
  }, [])
  const links = [['Product', '#product'], ['For athletes', '#athletes'], ['Why Toli', '#why'], ['FAQ', '#faq']]
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'color-mix(in srgb, var(--surface-app) 86%, transparent)' : 'var(--surface-app)',
      backdropFilter: scrolled ? 'saturate(140%) blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--hairline)' : '1px solid transparent', transition: 'border-color .2s, background .2s',
    }}>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
        <a href="#top" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}><BrandMark /></a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 34 }} className="nav-links">
          {links.map(([l, h]) => (
            <a key={l} href={h} style={{ fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>{l}</a>
          ))}
        </nav>
        <a href="#demo" style={{ textDecoration: 'none' }}><BtnL size="sm">Book a demo</BtnL></a>
      </Container>
    </header>
  )
}

/* ============================== HERO ============================== */
export function Hero() {
  return (
    <section id="top" style={{ paddingTop: 76, paddingBottom: 40, position: 'relative', overflow: 'hidden' }}>
      <Container w={980} style={{ textAlign: 'center' }}>
        <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '7px 15px', borderRadius: 999, border: '1px solid var(--hairline)', background: 'var(--surface-card)', marginBottom: 26 }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--green)' }} />
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Team management for pro trail running</span>
        </div>
        <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6.4vw, 78px)', fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1.02, margin: 0 }}>
          Your roster, races, and<br />logistics in one place.
        </h1>
        <p className="reveal" style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(17px, 2vw, 21px)', lineHeight: 1.5, color: 'var(--text-muted)', maxWidth: 660, margin: '24px auto 0', fontWeight: 400 }}>
          Run your team on something better than spreadsheets, WhatsApp threads, and last-minute emails. Built for the manager who's done chasing athletes — and a setup that matches the level they compete at.
        </p>
        <div className="reveal" style={{ display: 'flex', gap: 13, justifyContent: 'center', marginTop: 34, flexWrap: 'wrap' }}>
          <a href="#demo" style={{ textDecoration: 'none' }}><BtnL size="lg" iconRight={<Ic.arrowRight size={17} />}>Book a demo</BtnL></a>
          <a href="#product" style={{ textDecoration: 'none' }}><BtnL variant="secondary" size="lg" uppercase={false} style={{ letterSpacing: 0 }}>See the product tour</BtnL></a>
        </div>
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 9, justifyContent: 'center', marginTop: 28 }}>
          <Proof>Manage athlete's needs</Proof>
          <Proof>Role-based access: manager view, athlete view</Proof>
          <Proof>UTMB results auto-sync</Proof>
          <Proof>Target messages by race participants</Proof>
          <Proof>Send push notifications</Proof>
          <Proof>Mobile app</Proof>
          <Proof>Desktop version</Proof>
        </div>
      </Container>

      <Container w={1180} style={{ marginTop: 54 }}>
        <div className="reveal hero-frame">
          <Win chrome="app.toli.run / utmb · overview">
            <EventMock />
          </Win>
        </div>
      </Container>
    </section>
  )
}

/* ============================== PROBLEM ============================== */
function MessCard({ title, rotate, children, w }) {
  return (
    <div style={{
      width: w, background: 'var(--surface-card)', border: '1px solid var(--hairline)', borderRadius: 8,
      boxShadow: 'var(--shadow-card)', transform: `rotate(${rotate}deg)`, overflow: 'hidden', flex: 'none',
    }}>
      <div style={{ overflow: 'hidden' }}>{children}</div>
    </div>
  )
}

/* ---- realistic tool replicas used inside the MessCards below ---- */

function ExcelMock() {
  const cols = ['A', 'B', 'C', 'D']
  const rows = [
    ['Athlete', 'Ctry', 'Age', 'Tier'],
    ['Émile Auclair', 'FRA', '29', 'Elite'],
    ['Mathis Varennes', 'FRA', '27', 'Elite'],
    ['Anaïs Roussel', 'FRA', '31', ''],
    ['Iker Salazar', 'ESP', '33', 'Top'],
  ]
  return (
    <div style={{ background: '#FFFFFF', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ height: 20, background: '#107C41', display: 'flex', alignItems: 'center', gap: 6, padding: '0 8px' }}>
        <span style={{ width: 12, height: 12, borderRadius: 2, background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 900, color: '#107C41' }}>X</span>
        <span style={{ fontSize: 8.5, fontWeight: 700, color: '#FFFFFF' }}>roster_2026_FINAL_v4.xlsx</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, height: 16, padding: '0 8px', borderBottom: '1px solid #D0D0D0', background: '#F3F2F1' }}>
        <span style={{ fontSize: 8, fontStyle: 'italic', color: '#616161' }}>fx</span>
        <span style={{ fontSize: 8, color: '#616161' }}>A2</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '20px repeat(4, 1fr)' }}>
        <div style={{ background: '#F3F2F1', borderRight: '1px solid #D0D0D0', borderBottom: '1px solid #D0D0D0' }} />
        {cols.map((c) => (
          <div key={c} style={{ background: '#F3F2F1', borderRight: '1px solid #D0D0D0', borderBottom: '1px solid #D0D0D0', textAlign: 'center', fontSize: 8, fontWeight: 700, color: '#616161', padding: '3px 0' }}>{c}</div>
        ))}
        {rows.map((r, ri) => (
          <React.Fragment key={ri}>
            <div style={{ background: '#F3F2F1', borderRight: '1px solid #D0D0D0', borderBottom: '1px solid #D0D0D0', textAlign: 'center', fontSize: 8, color: '#616161', padding: '4px 0' }}>{ri + 1}</div>
            {r.map((cell, ci) => {
              const sel = ri === 1 && ci === 0
              const head = ri === 0
              return (
                <div key={ci} style={{
                  border: sel ? '1.5px solid #107C41' : '1px solid #E1E1E1',
                  background: sel ? '#E9F6EE' : head ? '#F8F8F8' : '#FFFFFF',
                  fontSize: 8.5, fontWeight: head ? 700 : 400, color: '#282828',
                  padding: '4px 5px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
                }}>{cell}</div>
              )
            })}
          </React.Fragment>
        ))}
      </div>
      <div style={{ display: 'flex', borderTop: '1px solid #D0D0D0', background: '#F3F2F1' }}>
        <span style={{ fontSize: 8, fontWeight: 700, color: '#107C41', padding: '4px 10px', background: '#FFFFFF', borderTop: '2px solid #107C41' }}>Sheet1</span>
        <span style={{ fontSize: 8, color: '#909090', padding: '4px 10px' }}>Sheet2</span>
      </div>
    </div>
  )
}

function WhatsAppMock() {
  const msgs = [
    { me: false, t: 'Are we still on the 6am shuttle to Chamonix?', time: '08:14' },
    { me: true, t: 'Yes — meeting point is the hotel lobby', time: '08:16' },
    { me: false, t: 'Can someone resend the bib pickup address?', time: '08:20' },
    { me: true, t: "It's in the roster sheet, tab 3", time: '08:22' },
  ]
  return (
    <div style={{ background: '#E5DDD5' }}>
      <div style={{ height: 32, background: '#075E54', display: 'flex', alignItems: 'center', gap: 8, padding: '0 10px' }}>
        <span style={{ width: 20, height: 20, borderRadius: 999, background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700, color: '#075E54', flex: 'none' }}>TT</span>
        <span>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2 }}>Trail Team (47)</div>
          <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.75)', lineHeight: 1.2 }}>Émile, Anaïs, Iker + 44</div>
        </span>
      </div>
      <div style={{ padding: '9px 8px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {msgs.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.me ? 'flex-end' : 'flex-start' }}>
            <div style={{ maxWidth: '80%', background: m.me ? '#DCF8C6' : '#FFFFFF', borderRadius: 7, padding: '5px 7px 5px', boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)' }}>
              <div style={{ fontSize: 9, color: '#111B21', lineHeight: 1.35 }}>{m.t}</div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 3, marginTop: 2 }}>
                <span style={{ fontSize: 7, color: '#667781' }}>{m.time}</span>
                {m.me ? <span style={{ fontSize: 8, color: '#53BDEB', fontWeight: 700 }}>✓✓</span> : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EmailMock() {
  const thread = [
    { n: 'Marco Ferri', i: 'MF', t: 'Attaching the updated arrival times, can everyone confirm?', time: 'Mon 9:14 AM' },
    { n: 'Anaïs Roussel', i: 'AR', t: 'My flight moved to Thursday evening now.', time: 'Mon 11:02 AM' },
    { n: 'You', i: 'Y', t: "Noted — I'll update the sheet and resend to the hotel.", time: 'Mon 11:20 AM' },
  ]
  return (
    <div style={{ background: '#FFFFFF' }}>
      <div style={{ padding: '9px 11px 7px', borderBottom: '1px solid #E5E5E5' }}>
        <div style={{ fontSize: 10.5, fontWeight: 700, color: '#1A1A1A' }}>Re: Re: Fwd: CCC arrivals</div>
        <div style={{ fontSize: 8, color: '#8A8A8A', marginTop: 2 }}>Inbox · 14 messages</div>
      </div>
      <div style={{ padding: '8px 11px', display: 'flex', flexDirection: 'column', gap: 9 }}>
        {thread.map((m, i) => (
          <div key={i} style={{ display: 'flex', gap: 8 }}>
            <span style={{ width: 18, height: 18, borderRadius: 999, background: '#EDEDED', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7.5, fontWeight: 700, color: '#7A7A7A' }}>{m.i}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 6 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: '#1A1A1A' }}>{m.n}</span>
                <span style={{ fontSize: 7.5, color: '#A0A0A0', whiteSpace: 'nowrap' }}>{m.time}</span>
              </div>
              <div style={{ fontSize: 8.5, color: '#444', marginTop: 3, lineHeight: 1.4 }}>{m.t}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* UTMB race-format tag: colored pill + tiny "mountain M" mark, as used across utmb.world */
function UtmbFormatTag({ label, bg, fg = '#0B1B33' }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>
      <span style={{ fontSize: 5.5, fontWeight: 900, color: fg, background: bg, borderRadius: 2, padding: '1px 4px', letterSpacing: '0.01em' }}>{label}</span>
      <span style={{ fontSize: 6, fontWeight: 900, fontStyle: 'italic', color: '#0B1B33' }}>M</span>
    </span>
  )
}

function UtmbMock() {
  const results = [
    { year: '2026', date: 'JUNE 14', race: 'MONISTRAIL - 50K', series: 'Trail du Saint-Jacques by UTMB®', flag: '🇫🇷', tag: '50K', tagBg: '#F2701C', tagFg: '#FFFFFF', score: 859, dist: '55 KM', elev: '2100 M+', time: '04:06:33', rank: '2', rankTot: '1643', gender: '2', genderTot: '1300' },
    { year: '2026', date: 'MAY 17', race: 'MENDI MARATOIA', series: 'Zegama-Aizkorri', flag: '🇪🇸', tag: '50K', tagBg: '#F2701C', tagFg: '#FFFFFF', score: 888, dist: '43.1 KM', elev: '2730 M+', time: '04:00:28', rank: '13', rankTot: '505', gender: '13', genderTot: '434' },
    { year: '2025', date: 'OCT 18', race: 'MARATHON DES CAUSSES', series: 'Festival Des Templiers', flag: '🇫🇷', tag: '50K', tagBg: '#F2701C', tagFg: '#FFFFFF', score: 920, dist: '36.1 KM', elev: '1641 M+', time: '02:39:12', rank: '2', rankTot: '1221', gender: '2', genderTot: '823' },
    { year: '2025', date: 'AUG 26', race: 'ETC', series: 'HOKA UTMB Mont-Blanc', flag: '🇫🇷', tag: '20K', tagBg: '#F5E400', tagFg: '#0B1B33', score: 890, dist: '15 KM', elev: '1200 M+', time: '01:25:45', rank: '7', rankTot: '1283', gender: '7', genderTot: '754' },
  ]
  const formats = [
    { label: '20K', bg: '#F5E400', fg: '#0B1B33', v: '864', card: '#FDFBE3' },
    { label: '50K', bg: '#F2701C', fg: '#FFFFFF', v: '892', card: '#FDEEE7' },
    { label: '100K', bg: '#8DC63F', fg: '#0B1B33', v: null, card: '#EFEFEF' },
    { label: '100M', bg: '#E63946', fg: '#FFFFFF', v: null, card: '#EFEFEF' },
  ]
  return (
    <div style={{ background: '#FFFFFF' }}>
      <div style={{ padding: '13px 12px 9px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ width: 34, height: 34, borderRadius: 999, background: '#EDEFF3', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#8892A6', marginBottom: 6 }}>ÉA</span>
        <div style={{ fontSize: 10, fontWeight: 800, color: '#0B1B33' }}>Émile AUCLAIR</div>
        <div style={{ fontSize: 7, color: '#5A6472', marginTop: 3, display: 'flex', alignItems: 'center', gap: 4 }}>
          <span>🇫🇷</span><span>France · 20-34 Man</span>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
          <span style={{ fontSize: 6.5, color: '#8892A6', textAlign: 'center' }}>Club<div style={{ fontSize: 7.5, fontWeight: 700, color: '#0B1B33' }}>ALE</div></span>
          <span style={{ fontSize: 6.5, color: '#8892A6', textAlign: 'center' }}>Team<div style={{ fontSize: 7.5, fontWeight: 700, color: '#0B1B33' }}>ASICS</div></span>
        </div>
      </div>

      <div style={{ padding: '0 10px 10px', display: 'flex', gap: 4 }}>
        <div style={{
          flex: '1.3 1 0', borderRadius: 6, padding: '6px 7px 5px',
          background: 'radial-gradient(120% 160% at 15% 0%, #1C3A66 0%, #0B1B33 55%, #060F1F 100%)',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: 6, fontWeight: 900, letterSpacing: '0.01em' }}>
            <span style={{ color: '#FFFFFF' }}>UTMB</span>
            <span style={{ color: '#0B1B33', background: '#5FC8F2', borderRadius: 2, padding: '1px 3px', marginLeft: 2 }}>INDEX</span>
          </span>
          <div style={{ fontSize: 15, fontWeight: 900, color: '#FFFFFF', marginTop: 3, textShadow: '0 0 8px rgba(120,190,255,0.8)', fontFeatureSettings: '"tnum" 1' }}>893</div>
          <div style={{ fontSize: 5, color: '#8FA3C4', marginTop: 2 }}>Details ⌄</div>
        </div>
        {formats.map((c) => (
          <div key={c.label} style={{ flex: '1 1 0', background: c.card, borderRadius: 6, padding: '6px 6px 5px' }}>
            <UtmbFormatTag label={c.label} bg={c.bg} fg={c.fg} />
            {c.v ? (
              <>
                <div style={{ fontSize: 12, fontWeight: 900, color: '#0B1B33', marginTop: 3, fontFeatureSettings: '"tnum" 1' }}>{c.v}</div>
                <div style={{ fontSize: 5, color: '#9AA0AC', marginTop: 2 }}>Details ⌄</div>
              </>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
                <span style={{ width: 13, height: 13, borderRadius: 999, background: '#DADADA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6.5 }}>🔒</span>
                <div style={{ fontSize: 4.3, color: '#9AA0AC', marginTop: 3, textAlign: 'center', lineHeight: 1.3 }}>Unavailable<br />UTMB Index</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ padding: '9px 10px 3px', fontSize: 11, fontWeight: 900, color: '#0B1B33', letterSpacing: '0.01em' }}>RESULTS</div>
      <div style={{ padding: '0 10px 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '2px 5px 5px' }}>
          <span style={{ fontSize: 5.2, fontWeight: 700, color: '#0B1B33', width: 26, flex: 'none' }}>Date ⌄</span>
          <span style={{ fontSize: 5.2, fontWeight: 700, color: '#0B1B33', flex: 1 }}>Race</span>
          <span style={{ fontSize: 5.2, fontWeight: 700, color: '#0B1B33', width: 16, textAlign: 'right', flex: 'none' }}>Score</span>
          <span style={{ fontSize: 5.2, fontWeight: 700, color: '#0B1B33', width: 22, textAlign: 'right', flex: 'none' }}>Dist.</span>
          <span style={{ fontSize: 5.2, fontWeight: 700, color: '#0B1B33', width: 24, textAlign: 'right', flex: 'none' }}>Time</span>
          <span style={{ fontSize: 5.2, fontWeight: 700, color: '#0B1B33', width: 26, textAlign: 'right', flex: 'none' }}>Rank</span>
        </div>
        {results.map((r, i) => (
          <div key={i}>
            {(i === 0 || r.year !== results[i - 1].year) && (
              <div style={{ fontSize: 6.5, fontWeight: 700, color: '#B7BCC6', background: '#F5F6F8', padding: '3px 5px', marginTop: i === 0 ? 0 : 4 }}>{r.year}</div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '5px 5px', borderBottom: '1px solid #F0F0F0' }}>
              <span style={{ fontSize: 5.6, fontWeight: 700, color: '#0B1B33', width: 26, flex: 'none' }}>{r.date}</span>
              <span style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <UtmbFormatTag label={r.tag} bg={r.tagBg} fg={r.tagFg} />
                  <span style={{ fontSize: 6, fontWeight: 700, color: '#0B1B33', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.race}</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}>
                  <span style={{ fontSize: 5.5, flex: 'none' }}>{r.flag}</span>
                  <span style={{ fontSize: 5, color: '#8892A6', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.series}</span>
                </span>
              </span>
              <span style={{ fontSize: 9.5, fontWeight: 900, color: '#0B1B33', width: 16, textAlign: 'right', flex: 'none', fontFeatureSettings: '"tnum" 1' }}>{r.score}</span>
              <span style={{ width: 22, textAlign: 'right', flex: 'none' }}>
                <div style={{ fontSize: 5.4, fontWeight: 700, color: '#0B1B33', whiteSpace: 'nowrap' }}>{r.dist}</div>
                <div style={{ fontSize: 4.4, color: '#B7BCC6', whiteSpace: 'nowrap' }}>{r.elev}</div>
              </span>
              <span style={{ fontSize: 5.4, fontWeight: 700, color: '#0B1B33', width: 24, textAlign: 'right', flex: 'none', fontFeatureSettings: '"tnum" 1' }}>{r.time}</span>
              <span style={{ width: 26, textAlign: 'right', flex: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: '#E7E9ED', flex: 'none' }} />
                  <span style={{ fontSize: 5.6, fontWeight: 800, color: '#0B1B33' }}>{r.rank}</span>
                  <span style={{ fontSize: 5, color: '#B7BCC6' }}>|{r.rankTot}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2, marginTop: 2 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: '#E7E9ED', flex: 'none' }} />
                  <span style={{ fontSize: 5.6, fontWeight: 800, color: '#0B1B33' }}>{r.gender}</span>
                  <span style={{ fontSize: 5, color: '#B7BCC6' }}>|{r.genderTot}</span>
                </div>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MsFormsMock() {
  const issues = ['Grip / traction', 'Cushioning', 'Breathability', 'Durability']
  return (
    <div style={{ background: '#F5F5F5' }}>
      <div style={{ height: 18, background: '#6264A7', display: 'flex', alignItems: 'center', gap: 6, padding: '0 8px' }}>
        <span style={{ width: 10, height: 10, borderRadius: 2, background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 900, color: '#6264A7' }}>F</span>
        <span style={{ fontSize: 8, fontWeight: 700, color: '#FFFFFF' }}>Forms</span>
      </div>
      <div style={{ height: 3, background: '#E1DFDD' }}>
        <div style={{ width: '55%', height: '100%', background: '#6264A7' }} />
      </div>
      <div style={{ padding: '11px 12px 6px', borderBottom: '1px solid #E1DFDD', background: '#FFFFFF' }}>
        <div style={{ fontSize: 10, fontWeight: 800, color: '#242424' }}>Trail Shoe Feedback</div>
        <div style={{ fontSize: 7.5, color: '#616161', marginTop: 4, lineHeight: 1.4 }}>Tell us about your experience testing this season's trail shoe.</div>
      </div>
      <div style={{ padding: '9px 12px 12px', display: 'flex', flexDirection: 'column', gap: 7 }}>
        <div style={{ background: '#FFFFFF', border: '1px solid #E1DFDD', borderLeft: '3px solid #6264A7', borderRadius: 3, padding: '8px 9px' }}>
          <div style={{ fontSize: 8, fontWeight: 700, color: '#242424', marginBottom: 6 }}>1. Overall comfort rating *</div>
          <div style={{ display: 'flex', gap: 4 }}>
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n} style={{
                width: 15, height: 15, borderRadius: 999, flex: 'none',
                border: '1.5px solid ' + (n === 4 ? '#6264A7' : '#C7C6C4'),
                background: n === 4 ? '#6264A7' : '#FFFFFF', color: n === 4 ? '#FFFFFF' : '#616161',
                fontSize: 7, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{n}</span>
            ))}
          </div>
        </div>
        <div style={{ background: '#FFFFFF', border: '1px solid #E1DFDD', borderRadius: 3, padding: '8px 9px' }}>
          <div style={{ fontSize: 8, fontWeight: 700, color: '#242424', marginBottom: 6 }}>2. Which area needs improvement? *</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {issues.map((o, i) => (
              <div key={o} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{
                  width: 10, height: 10, borderRadius: 999, flex: 'none',
                  border: '1.5px solid ' + (i === 0 ? '#6264A7' : '#8A8886'),
                  background: i === 0 ? '#6264A7' : 'transparent',
                }} />
                <span style={{ fontSize: 7.5, color: '#323130' }}>{o}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: '#FFFFFF', border: '1px solid #E1DFDD', borderRadius: 3, padding: '8px 9px' }}>
          <div style={{ fontSize: 8, fontWeight: 700, color: '#242424', marginBottom: 7 }}>3. Any other comments?</div>
          <div style={{ height: 16, borderBottom: '1.5px solid #6264A7' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 1 }}>
          <span style={{ fontSize: 7.5, fontWeight: 700, color: '#FFFFFF', background: '#6264A7', borderRadius: 3, padding: '5px 13px' }}>Submit</span>
        </div>
      </div>
    </div>
  )
}

/* big, unmissable "Before / With Toli" kicker badge */
function StageBadge({ tone, icon, children }) {
  const danger = tone === 'danger'
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 18px 8px 14px', borderRadius: 999,
      background: danger ? 'color-mix(in srgb, var(--danger) 12%, transparent)' : 'var(--accent)',
      border: danger ? '1px solid color-mix(in srgb, var(--danger) 30%, transparent)' : '1px solid transparent',
    }}>
      <span style={{ display: 'inline-flex', color: danger ? 'var(--danger)' : 'var(--accent-on)' }}>{icon}</span>
      <span style={{
        fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 800, letterSpacing: '0.02em',
        color: danger ? 'var(--danger)' : 'var(--accent-on)',
      }}>{children}</span>
    </span>
  )
}

export function Problem() {
  return (
    <section style={{ background: 'var(--surface-raised)', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', padding: '92px 0' }}>
      <Container w={1100}>
        <div className="reveal" style={{ maxWidth: 720 }}>
          <StageBadge tone="danger" icon={<Ic.x size={14} strokeWidth={3} />}>Before Toli</StageBadge>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.2vw, 50px)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.05, margin: '16px 0 0' }}>
            Without Toli: a bunch of tools that don't talk to each other.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 18, lineHeight: 1.55, color: 'var(--text-muted)', marginTop: 18 }}>
            A roster of athletes in a spreadsheet that's never up to date. Race-week planning scattered across emails. Gear sizing re-asked twice a year. The real source of truth is a 60-message WhatsApp thread — and you're the only one keeping it together.
          </p>
        </div>

        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 22, justifyContent: 'center', alignItems: 'center', margin: '54px 0 48px' }}>
          <MessCard title="roster_2026_FINAL_v4.xlsx" rotate={-3} w={260}>
            <ExcelMock />
          </MessCard>

          <MessCard title="Trail Team (47)" rotate={2.5} w={240}>
            <WhatsAppMock />
          </MessCard>

          <MessCard title="Re: Re: Fwd: CCC arrivals" rotate={-1.5} w={250}>
            <EmailMock />
          </MessCard>

          <MessCard title="utmb.world — Émile Auclair" rotate={3} w={350}>
            <UtmbMock />
          </MessCard>

          <MessCard title="Trail Shoe Feedback - Forms" rotate={-2.5} w={230}>
            <MsFormsMock />
          </MessCard>
        </div>

        <div className="reveal" style={{
          maxWidth: 780, margin: '0 auto', padding: '36px 40px', borderRadius: 18,
          background: 'var(--surface-card)', border: '1px solid var(--hairline)', boxShadow: 'var(--shadow-card-lg)', textAlign: 'center',
        }}>
          <StageBadge tone="accent" icon={<Ic.check size={14} strokeWidth={3} />}>With Toli</StageBadge>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.2vw, 34px)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.15, color: 'var(--text-primary)', margin: '18px 0 0' }}>
            One dashboard for everything.
          </h3>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 16, lineHeight: 1.55, color: 'var(--text-muted)', margin: '12px 0 0' }}>
            Toli replaces all tools above with one place your whole team already checks.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, justifyContent: 'center', marginTop: 22 }}>
            <Proof>Roster, races & logistics together</Proof>
            <Proof>Athlete full profile</Proof>
            <Proof>Separate roles, separate views</Proof>
            <Proof>UTMB results auto-synced</Proof>
            <Proof>Race registration status management</Proof>
            <Proof>Event attendance management</Proof>
            <Proof>Athlete needs management</Proof>
            <Proof>Athlete dietary and health status</Proof>
            <Proof>Public link to share with anyone</Proof>
            <Proof>Push notifications</Proof>
            <Proof>Target messages by event or race</Proof>
            <Proof>Read receipts on every message</Proof>
            <Proof>Team-wide performance stats</Proof>
            <Proof>CSV export anytime</Proof>
            <Proof>Guaranteed data privacy</Proof>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ============================== PRODUCT FEATURES ============================== */
function FeatureRow({ n, eyebrow, title, body, proofs, mock, chrome, flip }) {
  const text = (
    <div style={{ flex: '1 1 380px', maxWidth: 460 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800, color: 'var(--text-faint)', fontFeatureSettings: '"tnum" 1' }}>{n}</span>
        <span style={{ width: 26, height: 1, background: 'var(--hairline)' }} />
        <E>{eyebrow}</E>
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.4vw, 40px)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.06, margin: 0 }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-ui)', fontSize: 17, lineHeight: 1.55, color: 'var(--text-muted)', margin: '18px 0 22px' }}>{body}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>{proofs.map((p) => <Proof key={p}>{p}</Proof>)}</div>
    </div>
  )
  const visual = (
    <div style={{ flex: '1 1 540px', minWidth: 0 }}>
      <Win chrome={chrome}><Fit width={920}>{mock}</Fit></Win>
    </div>
  )
  return (
    <div className="reveal feature-row" style={{ display: 'flex', gap: 56, alignItems: 'center', flexWrap: 'wrap', flexDirection: flip ? 'row-reverse' : 'row' }}>
      {text}{visual}
    </div>
  )
}

export function Product() {
  const feats = [
    { n: '01', eyebrow: 'Roster & athlete profiles', title: 'Every athlete, in one place.', body: 'Contact, gear sizing, languages, social links and dietary. Filter by health status, UTMB index or favorite race format. No more re-asking the same sizing questions twice a year.', proofs: ['Auto-sync UTMB index', 'Add an athlete, they get their own space', "View each athlete's race calendar", 'Call or email an athlete in one click'], mock: <RosterMock />, chrome: 'app.toli.run / athletes' },
    { n: '02', eyebrow: 'Events & races', title: 'Build a race week in minutes.', body: 'Create an event, define the races inside it — distance, elevation, start time and characteristics. Share a public link with an organizer, a sponsor, or the photographer covering the event, so they know which athletes to follow.', proofs: ['Ready-made templates for major races', 'Assign coaches to specific races'], mock: <EventMock />, chrome: 'app.toli.run / utmb · overview', flip: true },
    { n: '03', eyebrow: 'Registrations', title: 'Track registration status for all athletes.', body: 'Add athletes to an event, or let them register themselves. One view shows where everyone stands: considering, registered, needs bib, or withdrawn. Each with a personal note. The spreadsheet that was never up to date is gone.', proofs: ['Filter by registration status', 'Personal note per athlete', 'Share team start list with one link'], mock: <RegMock />, chrome: 'app.toli.run / utmb · registrations' },
    { n: '04', eyebrow: 'Attendance & logistics', title: 'Race-week travel, at a glance.', body: 'Each athlete logs their mode of transport, transport number for flights or trains, arrival and departure datetime, accommodation needs, and whether they need crew support on course. One view per event — you see who\'s arriving when, and who still needs a plan, before it\'s race week.', proofs: ['Crew support need flagged per athlete', 'Spot missing info instantly'], mock: <AttendanceMock />, chrome: 'app.toli.run / utmb · attendance', flip: true },
    { n: '05', eyebrow: 'Targeted messaging', title: 'Reach only the people it concerns.', body: 'Send to the whole team, everyone going to an event, one race within it, or a single athlete. Mark it urgent. Athletes get it as a push notification on their phone — then you see exactly who read it. No more guessing in a 60-message thread.', proofs: ['Target a specific event or race', 'Mobile push notifications', 'Mark as urgent', 'Read receipts'], mock: <MessagingMock />, chrome: 'app.toli.run / messages' },
    { n: '06', eyebrow: 'Performance insights', title: 'Season numbers without the scraping.', body: 'Results synchronized from utmb.world for each athlete: ranking, distance, elevation gain, finish time and UTMB Index. Calculate overall statistics for the team: wins, podium finishes, and average UTMB Index for women and men. Export this data at any time in CSV format to share it to whoever you want.', proofs: ['Auto-synced from utmb.world', 'Team-wide aggregate statistics', 'CSV export'], mock: <PerfMock />, chrome: 'app.toli.run / performance', flip: true },
  ]
  return (
    <section id="product" style={{ padding: '104px 0 40px' }}>
      <Container w={1180}>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 76px' }}>
          <E>The product, one screen at a time</E>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.4vw, 52px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.04, margin: '16px 0 0' }}>
            One source of truth for the whole team.
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 110 }}>
          {feats.map((f) => <FeatureRow key={f.n} {...f} />)}
        </div>
      </Container>
    </section>
  )
}
