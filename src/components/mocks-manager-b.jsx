import React from 'react'
import { Avatar, Tag, StatCard, Metric, Button } from '../lib/ds.js'
import { Rail, Eyebrow, Flag } from './shell.jsx'
import Icons from '../lib/icons.jsx'

const Ic = Icons

/* ============================== ATTENDANCE & LOGISTICS ============================== */
function field(label, value, glyph) {
  const empty = value === 'Not set'
  return (
    <div>
      <Eyebrow style={{ fontSize: 10, marginBottom: 6 }}>{label}</Eyebrow>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, minHeight: 42,
        padding: '0 12px', background: 'var(--surface-well)', border: '1px solid var(--hairline)', borderRadius: 8,
        fontFamily: 'var(--font-ui)', fontSize: 13.5, fontWeight: empty ? 500 : 600,
        color: empty ? 'var(--text-faint)' : 'var(--text-primary)',
      }}>
        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</span>
        <span style={{ color: 'var(--text-faint)', flex: 'none', display: 'inline-flex' }}>{glyph}</span>
      </div>
    </div>
  )
}

export function AttendanceMock() {
  const cal = <Ic.chevronDown size={14} />
  const rows = [
    { n: 'Émile Auclair', i: 'ÉA', c: 'FRA', arr: '22 Aug · 14:20', tr: 'AF 1242', acc: 'Team chalet', dep: '30 Aug' },
    { n: 'Iker Salazar', i: 'IS', c: 'ESP', arr: '23 Aug · 09:05', tr: 'IB 472', acc: 'Hôtel Le Morgane', dep: '29 Aug' },
    { n: 'Anaïs Roussel', i: 'AR', c: 'FRA', arr: '22 Aug · 18:40', tr: 'TGV 9772', acc: 'Team chalet', dep: '30 Aug' },
    { n: 'Yuto Nakamura', i: 'YN', c: 'JPN', arr: 'Not set', tr: 'Not set', acc: 'Not set', dep: 'Not set' },
  ]
  return (
    <div style={{ background: 'var(--surface-app)', padding: '26px 30px', minHeight: 520 }}>
      <Eyebrow style={{ color: 'var(--text-muted)' }}>UTMB · Attendance</Eyebrow>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 900, letterSpacing: '-0.02em', margin: '6px 0 0', lineHeight: 1 }}>race week logistics</h3>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12.5, color: 'var(--text-faint)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Ic.alert size={15} /> 1 athlete missing arrival
        </span>
      </div>
      <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {rows.map((r) => (
          <div key={r.n} style={{ background: 'var(--surface-card)', border: '1px solid var(--hairline)', borderRadius: 14, padding: 16, boxShadow: 'var(--shadow-card)', display: 'grid', gridTemplateColumns: 'minmax(180px,1fr) repeat(4, minmax(120px,1fr))', gap: 14, alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              <Avatar name={r.n} initials={r.i} size="sm" />
              <span>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em' }}>{r.n}</div>
                <div style={{ marginTop: 3 }}><Flag label={r.c} /></div>
              </span>
            </span>
            {field('Arrival', r.arr, cal)}
            {field('Transport no.', r.tr, cal)}
            {field('Accommodation', r.acc, cal)}
            {field('Departure', r.dep, cal)}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ============================== TARGETED MESSAGING ============================== */
export function MessagingMock() {
  const readers = [
    { n: 'Émile Auclair', i: 'ÉA', read: 'Read · 14:32' },
    { n: 'Anaïs Roussel', i: 'AR', read: 'Read · 14:41' },
    { n: 'Iker Salazar', i: 'IS', read: 'Read · 15:10' },
    { n: 'Hannah Keller', i: 'HK', read: null },
    { n: 'Marco Ferri', i: 'MF', read: null },
  ]
  return (
    <div style={{ background: 'var(--surface-app)', padding: '26px 30px', minHeight: 520, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 22 }}>
      <div>
        <Eyebrow style={{ color: 'var(--text-muted)' }}>New message</Eyebrow>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 900, letterSpacing: '-0.02em', margin: '6px 0 18px', lineHeight: 1 }}>send to the right people</h3>

        <Eyebrow style={{ fontSize: 10, marginBottom: 7 }}>Recipients</Eyebrow>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 16 }}>
          {[['Whole team', false], ['Everyone at UTMB', false], ['Racing CCC', true], ['One athlete', false]].map(([l, on]) => (
            <span key={l} style={{
              display: 'inline-flex', alignItems: 'center', gap: 7, height: 34, padding: '0 13px', borderRadius: 999,
              fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase',
              background: on ? 'var(--accent)' : 'var(--surface-card)', color: on ? 'var(--accent-on)' : 'var(--text-muted)',
              border: on ? '1px solid transparent' : '1px solid var(--hairline)',
            }}>{on ? <Ic.check size={14} /> : null}{l}</span>
          ))}
        </div>

        <div style={{ background: 'var(--surface-card)', border: '1px solid var(--hairline)', borderRadius: 14, padding: 16, boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 600, color: 'var(--text-muted)' }}>To: <strong style={{ color: 'var(--text-primary)' }}>5 athletes racing CCC</strong></span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 10px', borderRadius: 999, background: 'var(--danger-soft)', color: 'var(--danger)', fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              <Ic.alert size={13} /> Urgent
            </span>
          </div>
          <div style={{ fontFamily: 'var(--font-ui)', fontSize: 14.5, color: 'var(--text-primary)', lineHeight: 1.5 }}>
            UTMB just activated the rain kit for OCC and CCC. Pack your rain jacket — start-line gear check is on. Reply if you're missing anything.
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 14 }}>
            <Button size="sm" icon={<Ic.send size={15} />}>Send</Button>
          </div>
        </div>
      </div>

      <div>
        <Eyebrow style={{ fontSize: 10, marginBottom: 10 }}>Read receipts · 3 of 5</Eyebrow>
        <div style={{ background: 'var(--surface-card)', border: '1px solid var(--hairline)', borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
          {readers.map((r, i) => (
            <div key={r.n} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '12px 14px', borderTop: i ? '1px solid var(--hairline)' : 'none' }}>
              <Avatar name={r.n} initials={r.i} size="sm" />
              <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, letterSpacing: '-0.01em' }}>{r.n}</span>
              {r.read ? (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: 'var(--green)' }}>
                  <Ic.eye size={15} /> {r.read}
                </span>
              ) : (
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, color: 'var(--text-faint)' }}>Not yet</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ============================== PERFORMANCE INSIGHTS ============================== */
export function PerfMock() {
  const results = [
    { race: 'UTMB', km: 174, dp: '9 900', rank: '4', time: '21:42:08', idx: 930 },
    { race: 'Hardrock 100', km: 161, dp: '10 100', rank: '2', time: '23:55:41', idx: 922 },
    { race: 'Western States', km: 161, dp: '5 500', rank: 'DNF', time: '—', idx: null },
    { race: 'Madeira Ultra', km: 115, dp: '7 100', rank: '1', time: '12:18:33', idx: 918 },
  ]
  const cols = 'minmax(160px,1.4fr) 90px 90px 80px 120px 110px'
  return (
    <div style={{ display: 'flex', background: 'var(--surface-app)', minHeight: 540 }}>
      <Rail active="chart" />
      <div style={{ flex: 1, padding: '26px 30px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <Eyebrow style={{ color: 'var(--text-muted)' }}>Performance · 2025 season</Eyebrow>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 900, letterSpacing: '-0.03em', margin: '6px 0 0', lineHeight: 1 }}>the numbers</h3>
          </div>
          <Button variant="secondary" size="sm" icon={<Ic.download size={15} />}>Export CSV</Button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginTop: 22 }}>
          <StatCard label="Victories" value="14" sub="across the roster" />
          <StatCard label="Podiums" value="38" sub="top-3 finishes" />
          <StatCard label="Avg UTMB index" value="901" unit="W" sub="women · 884 men" />
          <StatCard label="Elite tier" value="6" sub="of 18 · World Class" />
        </div>

        <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
          <Avatar name="Émile Auclair" initials="ÉA" size="sm" />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em' }}>Émile Auclair</span>
          <Tag>Elite</Tag>
        </div>

        <div style={{ marginTop: 14, background: 'var(--surface-card)', border: '1px solid var(--hairline)', borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 14, padding: '13px 20px', borderBottom: '1px solid var(--hairline)' }}>
            {['Race', 'Distance', 'D+', 'Rank', 'Finish', 'UTMB index'].map((h) => <Eyebrow key={h} style={{ fontSize: 10 }}>{h}</Eyebrow>)}
          </div>
          {results.map((r, i) => {
            const dnf = r.rank === 'DNF'
            return (
              <div key={r.race} style={{ display: 'grid', gridTemplateColumns: cols, gap: 14, alignItems: 'center', padding: '14px 20px', borderTop: i ? '1px solid var(--hairline)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em' }}>{r.race}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14.5, fontFeatureSettings: '"tnum" 1' }}>{r.km} <span style={{ fontSize: 11, color: 'var(--text-faint)' }}>KM</span></span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14.5, fontFeatureSettings: '"tnum" 1' }}>{r.dp}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, color: dnf ? 'var(--danger)' : 'var(--text-primary)' }}>{r.rank}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, fontFeatureSettings: '"tnum" 1', color: 'var(--text-muted)' }}>{r.time}</span>
                {r.idx ? <Metric value={r.idx} size="sm" /> : <span style={{ color: 'var(--text-faint)' }}>—</span>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
