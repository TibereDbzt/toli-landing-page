import React from 'react'
import { Button as BtnB } from '../lib/ds.js'
import { Container as Cont, BrandMark } from './sections-a.jsx'
import { Eyebrow as Eb } from '../components/shell.jsx'
import Icons from '../lib/icons.jsx'
import { AthleteRegMock, AthleteInboxMock } from '../components/mocks-athlete.jsx'

const Ic = Icons

/* ============================== FOR YOUR ATHLETES ============================== */
export function Athletes() {
  return (
    <section id="athletes" style={{ background: 'var(--surface-raised)', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', padding: '100px 0' }}>
      <Cont w={1100} style={{ display: 'flex', gap: 60, alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="reveal" style={{ flex: '1 1 380px', maxWidth: 470 }}>
          <Eb>For your athletes too</Eb>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '14px 0 0' }}>
            The tool only works if athletes use it.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 17.5, lineHeight: 1.55, color: 'var(--text-muted)', margin: '20px 0 0' }}>
            So Toli removes friction for them too. One place to register or withdraw, one inbox where the manager's messages actually land, one profile to keep gear sizing and travel up to date — once. They stop getting asked; you stop chasing.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '26px 0 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              ['Register in two taps', 'Browse the races the team is targeting and set your status from your phone.'],
              ['One inbox, filtered by race', 'Messages arrive in context — no scrolling a 60-message group thread.'],
              ['Update sizing once', 'Gear sizing and travel details live on their profile. The team always has the latest.'],
            ].map(([t, d]) => (
              <li key={t} style={{ display: 'flex', gap: 13 }}>
                <span style={{ flex: 'none', marginTop: 2, color: 'var(--accent)' }}><Ic.checkCircle size={20} /></span>
                <span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em' }}>{t}. </span>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: 15, color: 'var(--text-muted)' }}>{d}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal" style={{ flex: '1 1 420px', display: 'flex', gap: 22, justifyContent: 'center' }}>
          <AthleteRegMock />
          <div style={{ marginTop: 44 }}><AthleteInboxMock /></div>
        </div>
      </Cont>
    </section>
  )
}

/* ============================== A DAY WITH / WITHOUT ============================== */
export function DayCompare() {
  const without = [
    'Arrivals spread across 14 emails and 3 WhatsApp DMs',
    'Two athletes\' transport numbers still missing the night before',
    'Rain-kit notice lost in a 60-message thread — no idea who saw it',
    'Sizing for the kit drop re-asked, half the replies missing',
    'Board asks for podium count — you scrape utmb.world, one by one',
    'Five tools open, none of them agreeing with each other',
  ]
  const wth = [
    'Every arrival, transport number, and stay on one attendance screen',
    'Missing-info flags surface the gaps before they bite',
    'Urgent notice sent to the 5 racing CCC — read receipts show 3 saw it',
    'Gear sizing already on file from each athlete\'s profile',
    'Podiums, victories, and average index live on the team dashboard',
    'One screen. One source of truth. One person no longer firefighting',
  ]
  const Col = ({ tone, eyebrow, title, items, glyph, gc }) => (
    <div style={{
      flex: '1 1 380px', background: tone === 'bad' ? 'var(--surface-card)' : 'var(--accent)',
      color: tone === 'bad' ? 'var(--text-primary)' : 'var(--accent-on)',
      border: '1px solid ' + (tone === 'bad' ? 'var(--hairline)' : 'transparent'),
      borderRadius: 20, padding: '34px 32px', boxShadow: tone === 'bad' ? 'none' : 'var(--shadow-card-lg)',
    }}>
      <div style={{ fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: tone === 'bad' ? 'var(--danger)' : 'var(--accent-on)', opacity: tone === 'bad' ? 1 : 0.7 }}>{eyebrow}</div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 25, fontWeight: 800, letterSpacing: '-0.02em', margin: '10px 0 22px' }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 15 }}>
        {items.map((it) => (
          <li key={it} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ flex: 'none', marginTop: 1, color: gc, opacity: tone === 'bad' ? 1 : 0.9 }}>{glyph}</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 15, lineHeight: 1.45, opacity: tone === 'bad' ? 0.85 : 0.95 }}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
  return (
    <section style={{ padding: '104px 0' }}>
      <Cont w={1100}>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 26px' }}>
          <Eb>A day with Toli vs. a day without</Eb>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.04, margin: '16px 0 0' }}>
            Race week at CCC. 12 athletes flying in.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 17, color: 'var(--text-muted)', marginTop: 14 }}>Same week. Same roster. Same six countries. Here's what changes.</p>
        </div>
        <div className="reveal" style={{ display: 'flex', gap: 22, flexWrap: 'wrap', marginTop: 40 }}>
          <Col tone="bad" eyebrow="Without Toli" title="Six tabs and a bad feeling" items={without} glyph={<Ic.x size={17} />} gc="var(--danger)" />
          <Col tone="good" eyebrow="With Toli" title="One screen, one truth" items={wth} glyph={<Ic.check size={17} />} gc="var(--accent-on)" />
        </div>
      </Cont>
    </section>
  )
}

/* ============================== WHY TOLI ============================== */
export function Why() {
  return (
    <section id="why" style={{ background: 'var(--surface-raised)', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', padding: '100px 0' }}>
      <Cont w={860}>
        <div className="reveal">
          <Eb>Why Toli exists</Eb>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.6vw, 42px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.08, margin: '16px 0 0' }}>
            Trail running went professional. The tools to manage a team didn't.
          </h2>
          <div style={{ fontFamily: 'var(--font-ui)', fontSize: 18, lineHeight: 1.65, color: 'var(--text-muted)', marginTop: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <p style={{ margin: 0 }}>
              I raced for a sponsored team and I wrote code on the side. I watched managers — sharp, organized people — run world-class rosters out of a spreadsheet, a group chat, and a folder of emails. The job had gone elite. The setup behind it hadn't.
            </p>
            <p style={{ margin: 0 }}>
              Toli is built with the managers and athletes living this every race week — at brands like the ones lining up at UTMB, Golden Trail, and the Skyrunner series. The goal is simple: make the boring parts disappear, so managers can run their team like the high-level setup it is, and athletes get an environment that matches the races they line up for.
            </p>
          </div>
        </div>

        <figure className="reveal" style={{ margin: '44px 0 0', borderLeft: '4px solid var(--accent)', paddingLeft: 26 }}>
          <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.6vw, 27px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.32, color: 'var(--text-primary)' }}>
            "Placeholder for a pilot-manager quote — one or two sentences on what changed for their team."
          </blockquote>
          <figcaption style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--surface-well)', border: '1px solid var(--hairline)' }} />
            <span>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15 }}>Pilot manager</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--text-faint)' }}>Name · Brand · Role — to be confirmed</div>
            </span>
          </figcaption>
        </figure>
      </Cont>
    </section>
  )
}

/* ============================== TRUSTED BY ============================== */
export function Trusted() {
  const lockups = ['Northface Trail', 'Summit Racing', 'Altra Team', 'Vertier', 'Stride Co.', 'Méridien']
  return (
    <section style={{ padding: '72px 0' }}>
      <Cont w={1100}>
        <div className="reveal" style={{ textAlign: 'center' }}>
          <Eb style={{ color: 'var(--text-faint)' }}>Built with managers from</Eb>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 40px', marginTop: 28, alignItems: 'center' }}>
            {lockups.map((l) => (
              <span key={l} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, opacity: 0.45 }}>
                <span style={{ width: 26, height: 26, borderRadius: 7, background: 'var(--text-faint)', display: 'block' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 19, letterSpacing: '-0.02em', color: 'var(--text-muted)' }}>{l}</span>
              </span>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 12.5, color: 'var(--text-faint)', marginTop: 26 }}>Placeholder lockups — replace with pilot-team logos.</p>
        </div>
      </Cont>
    </section>
  )
}

/* ============================== FAQ ============================== */
function FAQItem({ q, a, open, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid var(--hairline)' }}>
      <button onClick={onToggle} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
        padding: '24px 4px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(17px, 2vw, 21px)', letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>{q}</span>
        <span style={{ flex: 'none', color: 'var(--text-muted)', transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .2s' }}><Ic.plus size={22} /></span>
      </button>
      <div style={{ maxHeight: open ? 220 : 0, overflow: 'hidden', transition: 'max-height .28s ease' }}>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-muted)', margin: '0 4px 24px', maxWidth: 760 }}>{a}</p>
      </div>
    </div>
  )
}

export function FAQ() {
  const [open, setOpen] = React.useState(0)
  const items = [
    ['Can I import my current roster?', 'Yes. Send us your spreadsheet and we\'ll map it during setup — athletes, gear sizing, contacts, status. You\'re not retyping a roster you\'ve already built.'],
    ['Does it sync with UTMB automatically?', 'Yes. Results pull from utmb.world per athlete — rank, distance, elevation, finish time, DNF, and UTMB index — and roll up to your team dashboard. No more scraping one athlete at a time.'],
    ['Can athletes use it without creating yet another account?', 'They get a single, low-friction login on mobile. One inbox, one profile, register or withdraw in two taps. It\'s built so they actually use it — not another tool they ignore.'],
    ['What about GDPR and athlete health data?', 'Role-based access: sensitive fields — phone, email, medical and dietary notes — are visible to managers only. Data is stored in the EU. When an athlete leaves the team, access is revoked instantly. No leftover shared drive links.'],
    ['How long until it\'s set up for my team?', 'A 30-minute call to import your roster and create your first event. Most teams are running their next race week on Toli the same week they start.'],
    ['Can I export everything if I leave?', 'Always. Roster, registrations, attendance, and results export to CSV at any time. Your data is yours — no lock-in.'],
  ]
  return (
    <section id="faq" style={{ background: 'var(--surface-raised)', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', padding: '100px 0' }}>
      <Cont w={900}>
        <div className="reveal" style={{ marginBottom: 30 }}>
          <Eb>FAQ</Eb>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '14px 0 0' }}>
            The questions managers actually ask.
          </h2>
        </div>
        <div className="reveal">
          {items.map(([q, a], i) => (
            <FAQItem key={q} q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </Cont>
    </section>
  )
}

/* ============================== FINAL CTA ============================== */
export function FinalCTA() {
  const inputStyle = {
    width: '100%', height: 48, padding: '0 14px', borderRadius: 10, border: '1px solid var(--hairline)',
    background: 'var(--surface-card)', fontFamily: 'var(--font-ui)', fontSize: 15, color: 'var(--text-primary)', outline: 'none',
  }
  const Lbl = ({ children }) => <div style={{ fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 7 }}>{children}</div>
  return (
    <section id="demo" style={{ padding: '104px 0' }}>
      <Cont w={1080}>
        <div className="reveal" style={{ display: 'flex', gap: 56, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1 1 360px', maxWidth: 460 }}>
            <Eb>Book a demo</Eb>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.4vw, 50px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.03, margin: '16px 0 0' }}>
              Your next race week is closer than you think.
            </h2>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: 18, lineHeight: 1.55, color: 'var(--text-muted)', margin: '20px 0 0' }}>
              A 30-minute call. We'll walk you through your own roster, set up your first event live, and you'll see your race week on one screen before we hang up.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} style={{ flex: '1 1 380px', background: 'var(--surface-well)', border: '1px solid var(--hairline)', borderRadius: 20, padding: 28 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div><Lbl>Name</Lbl><input style={inputStyle} placeholder="Your name" /></div>
              <div><Lbl>Brand</Lbl><input style={inputStyle} placeholder="Team / brand" /></div>
              <div><Lbl>Role</Lbl><input style={inputStyle} placeholder="Team manager" /></div>
              <div><Lbl>Roster size</Lbl>
                <select style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                  <option>Under 10 athletes</option><option>10–25 athletes</option><option>25–50 athletes</option><option>50+ athletes</option>
                </select>
              </div>
              <div style={{ gridColumn: '1 / -1' }}><Lbl>Work email</Lbl><input type="email" style={inputStyle} placeholder="you@brand.com" /></div>
            </div>
            <div style={{ marginTop: 20 }}>
              <BtnB size="lg" type="submit" style={{ width: '100%' }} iconRight={<Ic.arrowRight size={17} />}>Book a demo</BtnB>
            </div>
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: 12.5, color: 'var(--text-faint)', textAlign: 'center', margin: '14px 0 0' }}>
              30-minute call. We'll set up your roster live. No card, no trial clock.
            </p>
          </form>
        </div>
      </Cont>
    </section>
  )
}

/* ============================== FOOTER ============================== */
export function Footer() {
  const groups = [
    ['Product', ['Roster', 'Events & races', 'Registrations', 'Messaging', 'Performance']],
    ['Company', ['Why Toli', 'Pilot teams', 'Contact']],
    ['Legal', ['Privacy', 'GDPR', 'Terms']],
  ]
  return (
    <footer style={{ background: 'var(--surface-app)', borderTop: '1px solid var(--hairline)', padding: '56px 0 40px' }}>
      <Cont w={1180} style={{ display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: 280 }}>
          <BrandMark size={28} />
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.5, marginTop: 16 }}>
            Team management for professional trail running. Roster, races, logistics — one source of truth.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
          {groups.map(([h, links]) => (
            <div key={h}>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 14 }}>{h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {links.map((l) => <li key={l}><a href="#" style={{ fontFamily: 'var(--font-ui)', fontSize: 14, color: 'var(--text-muted)', textDecoration: 'none' }}>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </Cont>
      <Cont w={1180} style={{ marginTop: 44, paddingTop: 22, borderTop: '1px solid var(--hairline)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--text-faint)' }}>© 2026 Toli. Built with trail teams.</span>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--text-faint)' }}>hello@toli.run</span>
      </Cont>
    </footer>
  )
}
