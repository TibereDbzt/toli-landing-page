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
        <div className="reveal" style={{ flex: '1 1 380px', maxWidth: 600 }}>
          <Eb>For your athletes too</Eb>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '14px 0 0' }}>
            Keep your athletes focused on their goals.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 17.5, lineHeight: 1.55, color: 'var(--text-muted)', margin: '20px 0 0' }}>
            Most teams still run on a shared spreadsheet: athletes lose the link, don't have edit rights, and the views don't fit a phone screen — so the data becomes outdated and the manager ends up chasing it by DM. Toli replaces this mess with a mobile-first solution. One less source of stress for the athlete before a race: keep your athletes focused on their goals.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '26px 0 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              ['Update personal information in a few taps', 'Edit gear sizing and travel details straight from your phone — no forms, no waiting on someone else. Built to feel as professional as the races you\'re lining up for.'],
              ['One inbox, filtered by race', 'Messages arrive in context — no scrolling a 60-message group thread.'],
              ['No more shared spreadsheet', 'Gear sizing and travel details live on their own profile — one place, always current, easy to edit from a phone.'],
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

/* ============================== ROLES & PRIVACY ============================== */
export function Privacy() {
  const points = [
    {
      icon: Ic.eye,
      title: 'A view for every role',
      body: "Managers, athletes and assistants each get their own space. Managers run the roster and edit everything. Athletes see their own races, logistics and messages. Assistants get read access to the races they're assigned to, nothing more.",
    },
    {
      icon: Ic.lock,
      title: 'Private data stay private',
      body: 'Contact details, dietary restrictions and medical treatments are visible to managers only. They never land in a column the whole team can scroll through.',
    },
    {
      icon: Ic.shield,
      title: 'Access ends when the team ends',
      body: 'Remove an athlete and their access is gone immediately. No shared link still floating around, no old file they can still open.',
    },
    {
      icon: Ic.checkCircle,
      title: 'Built for GDPR',
      body: 'Data hosted in the EU, explicit consent on sensitive data, and access to health data logged. The compliance a professional team is expected to have — handled.',
    },
  ]
  return (
    <section id="privacy" style={{ padding: '100px 0' }}>
      <Cont w={1100}>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 52px' }}>
          <Eb>Roles & privacy</Eb>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '14px 0 0' }}>
            Everyone on the team sees exactly what they should — nothing else.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 17.5, lineHeight: 1.55, color: 'var(--text-muted)', margin: '20px 0 0' }}>
            A shared spreadsheet gives the whole team the same link and the same access. Contact details, dietary needs, medical notes — all one click away for anyone who has the file. And when someone leaves the team, they keep it. Toli replaces that with real access control, built around how a trail team actually works.
          </p>
        </div>
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 22 }}>
          {points.map(({ icon: Icon, title, body }) => (
            <div key={title} style={{ flex: '1 1 230px', background: 'var(--surface-card)', border: '1px solid var(--hairline)', borderRadius: 20, padding: '30px 28px' }}>
              <span style={{
                width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--surface-well)', color: 'var(--accent)',
              }}>
                <Icon size={19} />
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18.5, letterSpacing: '-0.01em', margin: '18px 0 0' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: 15, lineHeight: 1.5, color: 'var(--text-muted)', margin: '10px 0 0' }}>{body}</p>
            </div>
          ))}
        </div>
      </Cont>
    </section>
  )
}

/* ============================== A DAY WITH / WITHOUT ============================== */
export function DayCompare() {
  const without = [
    'Arrivals spread across 4 emails and 10 WhatsApp DMs.',
    'Two athletes\' transport numbers still missing the night before.',
    'A message about the mandatory rain kit got lost in a 60-message thread — no idea who saw it.',
    'Sizing for the kit drop re-asked, half the replies missing.',
    'The higher-ups are asking for a breakdown of the results. You go through utmb.world, one by one.',
    'Five tools open, none of them agreeing with each other.',
  ]
  const wth = [
    'Every arrival, transport number, and stay on one attendance screen.',
    'Missing-info alerts help identify gaps before they become a problem.',
    'Urgent notice sent to the 5 racing CCC — read receipts show that Paul didn\'t see it.',
    'Gear sizing already on file from each athlete\'s profile.',
    'Podiums, victories, and all the UTMB indexes live on the team dashboard. A ready-to-share CSV file is available.',
    'One screen. One source of truth. One person no longer firefighting.',
  ]
  const tools = [
    { icon: Ic.sheet, label: 'Excel', color: '#1D6F42' },
    { icon: Ic.message, label: 'WhatsApp', color: '#25D366' },
    { icon: Ic.mail, label: 'Mail', color: '#6B7280' },
    { icon: Ic.external, label: 'UTMB World', color: '#F2701C' },
  ]
  const ToolChip = ({ icon: Icon, label, color }) => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px 6px 7px', borderRadius: 999, background: 'var(--surface-app)', border: '1px solid var(--hairline)' }}>
      <span style={{ width: 22, height: 22, borderRadius: '50%', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', background: color + '1A', color }}>
        <Icon size={12} />
      </span>
      <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12.5, fontWeight: 600, color: 'var(--text-muted)' }}>{label}</span>
    </span>
  )
  const Col = ({ tone, label, sub, items, Icon, gc }) => (
    <div style={{
      flex: '1 1 380px', background: tone === 'bad' ? 'var(--surface-card)' : 'var(--accent)',
      color: tone === 'bad' ? 'var(--text-primary)' : 'var(--accent-on)',
      border: '1px solid ' + (tone === 'bad' ? 'var(--hairline)' : 'transparent'),
      borderRadius: 20, padding: '34px 32px', boxShadow: tone === 'bad' ? 'none' : 'var(--shadow-card-lg)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
        <span style={{
          width: 36, height: 36, borderRadius: '50%', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: tone === 'bad' ? 'var(--danger-soft)' : 'rgba(255,255,255,0.18)', color: gc,
        }}>
          <Icon size={18} />
        </span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 21, letterSpacing: '-0.01em' }}>{label}</span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em', margin: '14px 0 0', opacity: tone === 'bad' ? 0.72 : 0.85 }}>{sub}</h3>
      {/* {tone === 'bad' && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '20px 0 4px' }}>
          {tools.map((t) => <ToolChip key={t.label} {...t} />)}
        </div>
      )} */}
      <ul style={{ listStyle: 'none', padding: 0, margin: '22px 0 0', display: 'flex', flexDirection: 'column', gap: 15 }}>
        {items.map((it) => (
          <li key={it} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ flex: 'none', marginTop: 1, color: gc, opacity: tone === 'bad' ? 1 : 0.9 }}><Icon size={15} /></span>
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 999, background: 'var(--surface-well)', border: '1px solid var(--hairline)' }}>
            <span style={{ color: 'var(--text-muted)', display: 'flex' }}><Ic.calendar size={14} /></span>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>A day with Toli vs. a day without</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.04, margin: '18px 0 0' }}>
            Race week at UTMB. 12 athletes flying in.
          </h2>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 17, color: 'var(--text-muted)', marginTop: 14 }}>Same week. Same roster. Here's what changes.</p>
        </div>
        <div className="reveal" style={{ display: 'flex', gap: 22, flexWrap: 'wrap', marginTop: 40, justifyContent: 'center' }}>
          <Col tone="bad" label="Without Toli" sub="Info scattered across six tools" items={without} Icon={Ic.x} gc="var(--danger)" />
          <div style={{
            flex: 'none', alignSelf: 'center', width: 44, height: 44, borderRadius: '50%',
            background: 'var(--surface-app)', border: '1px solid var(--hairline)', boxShadow: 'var(--shadow-card-lg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, letterSpacing: '0.02em', color: 'var(--text-faint)',
          }}>VS</div>
          <Col tone="good" label="With Toli" sub="Every answer, one screen" items={wth} Icon={Ic.check} gc="var(--accent-on)" />
        </div>
      </Cont>
    </section>
  )
}

/* ============================== WHY TOLI ============================== */
export function Why() {
  return (
    <section id="why" style={{ background: 'var(--surface-raised)', borderTop: '1px solid var(--hairline)', padding: '100px 0' }}>
      <Cont w={860}>
        <div className="reveal">
          <Eb>Why Toli exists</Eb>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.6vw, 42px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.08, margin: '16px 0 0' }}>
            Trail running went professional. It's time for tools to do the same.
          </h2>
          <div style={{ fontFamily: 'var(--font-ui)', fontSize: 18, lineHeight: 1.65, color: 'var(--text-muted)', marginTop: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <p style={{ margin: 0 }}>
              I'm an athlete racing for a sponsored team and I'm also a software developer. I watched trail team managers run world-class runners out of inefficient tools. The sport had gone elite. The setup behind it hadn't. So I developed Toli based on the real-world needs of trail running teams on the ground.
            </p>
            <p style={{ margin: 0 }}>
              The goal is to make the boring parts disappear, so managers can run their team like the high-level setup it is, and athletes get an environment that matches the races they line up for.
            </p>
          </div>
        </div>

        {/* <figure className="reveal" style={{ margin: '44px 0 0', borderLeft: '4px solid var(--accent)', paddingLeft: 26 }}>
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
        </figure> */}
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
    ['Does it sync with UTMB automatically?', 'Yes. Results are automatically updated from utmb.world per athlete — race score, index, rank, distance, elevation, finish time and DNF — and pulled together on your team dashboard. No more scraping one athlete at a time.'],
['Will athletes actually use it?', 'That\'s the brief we built to, not an afterthought. The app provides separate spaces for each team role: manager, athlete, and assistant — so that each person sees only what they need ensuring a smooth experience for everyone. No app store, no install: it opens as a website and adds to the home screen in one tap. From there it behaves like any other app on their phone, notifications included.'],
    ['What about GDPR and athlete health data?', 'The role-based access system ensures that sensitive data — such as phone, email, medical and dietary notes — are visible to managers only. Data is stored in the EU. When an athlete leaves the team, access is revoked instantly. No leftover shared drive links.'],
    ['Can we export everything if we leave?', 'Always. Roster, registrations, attendance, and results export to CSV at any time. Your data is yours — no lock-in.'],
    ['How do we get started?', 'A call. We set up your account together, build your roster, and create your first event side by side. You\'re not left to figure it out on your own.'],
  ]
  return (
    <section id="faq" style={{ background: 'var(--surface-raised)', borderBottom: '1px solid var(--hairline)', padding: '100px 0' }}>
      <Cont w={900}>
        <div className="reveal" style={{ marginBottom: 30 }}>
          <Eb>FAQ</Eb>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '14px 0 0' }}>
            The questions managers ask.
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

  const [status, setStatus] = React.useState('idle') // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'loading') return
    const fd = new FormData(e.target)
    const payload = {
      name: fd.get('name'),
      brand: fd.get('brand'),
      role: fd.get('role'),
      roster: fd.get('roster'),
      email: fd.get('email'),
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      e.target.reset()
    } catch (err) {
      setStatus('error')
    }
  }

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

          {status === 'success' ? (
            <div style={{ flex: '1 1 380px', background: 'var(--surface-well)', border: '1px solid var(--hairline)', borderRadius: 20, padding: 28, textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, letterSpacing: '-0.02em' }}>Thanks — request received.</div>
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: 15, lineHeight: 1.55, color: 'var(--text-muted)', margin: '12px 0 0' }}>
                We'll be in touch shortly to set up your demo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ flex: '1 1 380px', background: 'var(--surface-well)', border: '1px solid var(--hairline)', borderRadius: 20, padding: 28 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div><Lbl>Name</Lbl><input name="name" style={inputStyle} placeholder="Your name" /></div>
                <div><Lbl>Brand</Lbl><input name="brand" style={inputStyle} placeholder="Team / brand" /></div>
                <div><Lbl>Role</Lbl><input name="role" style={inputStyle} placeholder="Team manager" /></div>
                <div><Lbl>Roster size</Lbl>
                  <select name="roster" style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                    <option>Under 10 athletes</option><option>10–25 athletes</option><option>25–50 athletes</option><option>50+ athletes</option>
                  </select>
                </div>
                <div style={{ gridColumn: '1 / -1' }}><Lbl>Work email</Lbl><input name="email" type="email" required style={inputStyle} placeholder="you@brand.com" /></div>
              </div>
              <div style={{ marginTop: 20 }}>
                <BtnB size="lg" type="submit" style={{ width: '100%', opacity: status === 'loading' ? 0.6 : 1 }} iconRight={<Ic.arrowRight size={17} />}>
                  {status === 'loading' ? 'Sending…' : 'Book a demo'}
                </BtnB>
              </div>
              {status === 'error' && (
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: 12.5, color: 'var(--danger)', textAlign: 'center', margin: '12px 0 0' }}>
                  Something went wrong. Please try again or email hello@toli.run.
                </p>
              )}
              <p style={{ fontFamily: 'var(--font-ui)', fontSize: 12.5, color: 'var(--text-faint)', textAlign: 'center', margin: '14px 0 0' }}>
                30-minute call. We'll set up your roster live. No card, no trial clock.
              </p>
            </form>
          )}
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
        <div style={{ maxWidth: 320 }}>
          <BrandMark size={28} />
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.5, marginTop: 16 }}>
            Team management for professional trail running. Roster, races, logistics, results — one source of truth.
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
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--text-faint)' }}>© 2026 Toli. Built for trail teams.</span>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--text-faint)' }}>hello@toli.run</span>
      </Cont>
    </footer>
  )
}
