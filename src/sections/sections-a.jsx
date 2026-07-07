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
      width: w, background: 'var(--surface-card)', border: '1px solid var(--hairline)', borderRadius: 12,
      boxShadow: 'var(--shadow-card)', transform: `rotate(${rotate}deg)`, overflow: 'hidden', flex: 'none',
    }}>
      <div style={{ height: 30, display: 'flex', alignItems: 'center', gap: 7, padding: '0 12px', borderBottom: '1px solid var(--hairline)', background: 'var(--surface-well)' }}>
        <Ic.list size={13} style={{ color: 'var(--text-faint)' }} />
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 600, color: 'var(--text-faint)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</span>
      </div>
      <div style={{ padding: 12, filter: 'saturate(0.4)' }}>{children}</div>
    </div>
  )
}

export function Problem() {
  const line = (w, strong) => <div style={{ height: 9, borderRadius: 3, background: strong ? 'var(--text-faint)' : 'var(--hairline)', width: w, marginBottom: 7 }} />
  return (
    <section style={{ background: 'var(--surface-raised)', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', padding: '92px 0' }}>
      <Container w={1100}>
        <div className="reveal" style={{ maxWidth: 720 }}>
          <E style={{ color: 'var(--danger)' }}>The current setup</E>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.2vw, 50px)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1.05, margin: '14px 0 0' }}>
            Five tools, none of them talking to each other.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 18, lineHeight: 1.55, color: 'var(--text-muted)', marginTop: 18 }}>
            A roster in a spreadsheet that's never up to date. Race-week travel scattered across email. Sizing re-asked twice a year. The real source of truth is a 60-message WhatsApp thread — and you're the only one keeping it together.
          </p>
        </div>

        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 22, justifyContent: 'center', alignItems: 'center', margin: '54px 0 40px' }}>
          <MessCard title="roster_2026_FINAL_v4.xlsx" rotate={-3} w={260}>
            {[['88%', 1], ['64%', 0], ['72%', 0], ['54%', 0], ['80%', 0]].map(([w, s], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 6, marginBottom: 7 }}>
                <div style={{ height: 9, borderRadius: 3, background: s ? 'var(--text-faint)' : 'var(--hairline)' }} />
                <div style={{ height: 9, borderRadius: 3, background: 'var(--hairline)' }} />
                <div style={{ height: 9, borderRadius: 3, background: 'var(--hairline)' }} />
              </div>
            ))}
          </MessCard>

          <MessCard title="Trail Team (47)" rotate={2.5} w={240}>
            {[['right', 70], ['left', 88], ['left', 60], ['right', 50]].map(([side, w], i) => (
              <div key={i} style={{ display: 'flex', justifyContent: side === 'right' ? 'flex-end' : 'flex-start', marginBottom: 8 }}>
                <div style={{ width: w + '%', height: 26, borderRadius: 10, background: side === 'right' ? 'var(--accent-soft)' : 'var(--surface-well)', border: '1px solid var(--hairline)' }} />
              </div>
            ))}
          </MessCard>

          <MessCard title="Re: Re: Fwd: CCC arrivals" rotate={-1.5} w={250}>
            {[1, 0, 0, 0].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'center', marginBottom: 11 }}>
                <div style={{ width: 22, height: 22, borderRadius: 6, background: 'var(--surface-well)', border: '1px solid var(--hairline)', flex: 'none' }} />
                <div style={{ flex: 1 }}>{line('90%', s)}{line('60%', 0)}</div>
              </div>
            ))}
          </MessCard>

          <MessCard title="utmb.world — Émile Auclair" rotate={3} w={250}>
            <div style={{ display: 'flex', gap: 5, marginBottom: 11 }}>
              {[1, 0, 0].map((s, i) => <div key={i} style={{ height: 16, flex: 1, borderRadius: '5px 5px 0 0', background: s ? 'var(--surface-well)' : 'var(--hairline)', border: '1px solid var(--hairline)', borderBottom: 'none' }} />)}
            </div>
            {line('70%', 1)}{line('100%', 0)}{line('85%', 0)}{line('45%', 0)}
          </MessCard>

          <MessCard title="gear_sizing.doc" rotate={-2.5} w={210}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 0.5fr 0.5fr', gap: 6, marginBottom: 8 }}>
                <div style={{ height: 9, borderRadius: 3, background: i === 0 ? 'var(--text-faint)' : 'var(--hairline)' }} />
                <div style={{ height: 9, borderRadius: 3, background: 'var(--hairline)' }} />
                <div style={{ height: 9, borderRadius: 3, background: 'var(--hairline)' }} />
              </div>
            ))}
          </MessCard>
        </div>

        <p className="reveal" style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.6vw, 27px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
          This isn't how a professional team should run in 2026.
        </p>
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
    { n: '01', eyebrow: 'Roster & profiles', title: 'Every athlete, in one place.', body: 'Contact, gear sizing, languages, dietary and medical notes, social links, current status, country. Filter by health or category. No more re-asking the same sizing questions twice a year.', proofs: ['Filter by status', 'Gear sizing on file', 'UTMB index per athlete'], mock: <RosterMock />, chrome: 'app.toli.run / athletes' },
    { n: '02', eyebrow: 'Events & races', title: 'Build a race week in minutes.', body: 'Create an event, define the races inside it — distance, elevation, start time — set the series, toggle team support. Share a public link with an organizer or a sponsor. No Excel cleanup before you send.', proofs: ['UTMB World Series · Golden Trail', 'Public share link', 'Clean race list, one link'], mock: <EventMock />, chrome: 'app.toli.run / utmb · overview', flip: true },
    { n: '03', eyebrow: 'Registrations', title: "See who's actually racing.", body: 'Invite athletes to an event and watch it fill in live: Considering, Registered, Needs bib, Withdrawn — each with a personal note. The spreadsheet that was never up to date is gone.', proofs: ['Considering / Registered / Needs bib', 'Personal note per athlete', 'Live, not a stale sheet'], mock: <RegMock />, chrome: 'app.toli.run / utmb · registrations' },
    { n: '04', eyebrow: 'Attendance & logistics', title: 'Race-week travel, at a glance.', body: 'Arrival and departure datetime, transport number, accommodation provider — for every athlete, per event. Editable inline. You see the gaps before they become a 3am airport problem.', proofs: ['Arrival · transport no. · stay', 'Inline editing', 'Spot missing info instantly'], mock: <AttendanceMock />, chrome: 'app.toli.run / utmb · attendance', flip: true },
    { n: '05', eyebrow: 'Targeted messaging', title: 'Reach only the people it concerns.', body: 'Send to the whole team, everyone going to an event, one race within it, or a single athlete. Mark it urgent. Then see exactly who read it — no more guessing in a 60-message thread.', proofs: ['Send to everyone racing CCC', 'Mark as urgent', 'Read receipts'], mock: <MessagingMock />, chrome: 'app.toli.run / messages' },
    { n: '06', eyebrow: 'Performance insights', title: 'Season numbers without the scraping.', body: 'Results sync from utmb.world per athlete — rank, distance, elevation, finish time, DNF, UTMB index. Roll it up to the team: victories, podiums, average index for women and men, elite-tier count. Export to CSV for the board.', proofs: ['Auto-synced from utmb.world', 'Team dashboard', 'CSV export'], mock: <PerfMock />, chrome: 'app.toli.run / performance', flip: true },
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
