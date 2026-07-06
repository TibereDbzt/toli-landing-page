/* Manager mockups A: Roster, Event overview (hero), Registrations board.
   Recreates the real Toli manager app with DS components. */

const { Avatar, Tag, StatusDot, RegistrationPill, StatCard, Metric, Button } = window.TM;

/* ---------- shared mock data ---------- */
const ROSTER = [
  { n: "Émile Auclair", i: "ÉA", tier: "Elite", st: "healthy", cat: "World Class", idx: 930, races: 5, c: "FRA" },
  { n: "Mathis Varennes", i: "MV", tier: "Elite", st: "healthy", cat: "World Class", idx: 921, races: 4, c: "FRA" },
  { n: "Anaïs Roussel", i: "AR", tier: "Elite", st: "healthy", cat: "World Class", idx: 912, races: 4, c: "FRA" },
  { n: "Iker Salazar", i: "IS", tier: null, st: "healthy", cat: "World Class", idx: 904, races: 3, c: "ESP" },
  { n: "Yuto Nakamura", i: "YN", tier: "Elite", st: "healthy", cat: "World Class", idx: 898, races: 4, c: "JPN" },
  { n: "Lukas Brandt", i: "LB", tier: null, st: "injured", cat: "Top", idx: 866, races: 2, c: "GER" },
  { n: "Nora Bianchi", i: "NB", tier: null, st: "healthy", cat: "Top", idx: 842, races: 3, c: "ITA" },
  { n: "Théo Mercier", i: "TM", tier: null, st: "resting", cat: "Elite", idx: 788, races: 1, c: "FRA" },
];

/* ============================== ROSTER ============================== */
function RosterMock() {
  const cols = "minmax(220px,1.4fr) 130px 130px 120px 70px 110px";
  return (
    <div style={{ display: "flex", background: "var(--surface-app)", minHeight: 540 }}>
      <window.Rail active="list" />
      <div style={{ flex: 1, padding: "26px 30px 10px" }}>
        <window.Eyebrow style={{ color: "var(--text-muted)" }}>Roster · 18 athletes</window.Eyebrow>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 6 }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 900, letterSpacing: "-0.03em", margin: 0, lineHeight: 1 }}>athletes</h3>
          <Button size="sm" icon={<window.Ic.plus size={16} />}>Add athlete</Button>
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 22, marginBottom: 18 }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 9, height: 42, padding: "0 14px", background: "var(--surface-card)", border: "1px solid var(--hairline)", borderRadius: 999, color: "var(--text-faint)" }}>
            <window.Ic.search size={17} />
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 13.5 }}>Search athletes, country, email…</span>
          </div>
          {[["All", 18, true], ["Healthy", 12], ["Injured", 3], ["Resting", 3]].map(([l, c, on]) => (
            <span key={l} style={{
              display: "inline-flex", alignItems: "center", gap: 8, height: 42, padding: "0 16px", borderRadius: 999,
              fontFamily: "var(--font-ui)", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase",
              background: on ? "var(--accent)" : "var(--surface-card)", color: on ? "var(--accent-on)" : "var(--text-muted)",
              border: on ? "1px solid transparent" : "1px solid var(--hairline)",
            }}>
              {l}<span style={{ fontSize: 11, opacity: 0.7 }}>{c}</span>
            </span>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: cols, gap: 16, padding: "0 4px 12px", borderBottom: "1px solid var(--hairline)" }}>
          {["Athlete", "Status", "Category", "UTMB index", "Races", "Country"].map((h) => <window.Eyebrow key={h}>{h}</window.Eyebrow>)}
        </div>

        {ROSTER.map((a) => (
          <div key={a.n} style={{ display: "grid", gridTemplateColumns: cols, gap: 16, alignItems: "center", padding: "13px 4px", borderBottom: "1px solid var(--hairline)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Avatar name={a.n} initials={a.i} size="sm" />
              <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15.5, letterSpacing: "-0.01em" }}>{a.n}</span>
                {a.tier ? <Tag>{a.tier}</Tag> : null}
              </span>
            </span>
            <StatusDot status={a.st} size="sm" />
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              {a.cat === "World Class" ? <span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--accent)" }} /> : <span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--hairline)" }} />}
              <span style={{ fontFamily: "var(--font-ui)", fontSize: 13.5, color: "var(--text-muted)" }}>{a.cat}</span>
            </span>
            <Metric value={a.idx} size="sm" />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, fontFeatureSettings: '"tnum" 1' }}>{a.races}</span>
            <window.Flag label={a.c} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================== EVENT OVERVIEW (hero) ============================== */
function AthCard({ a }) {
  return (
    <div style={{ background: "var(--surface-card)", border: "1px solid var(--hairline)", borderRadius: 16, padding: 18, boxShadow: "var(--shadow-card)" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", gap: 12 }}>
          <Avatar name={a.n} initials={a.i} size="md" />
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16.5, letterSpacing: "-0.01em" }}>{a.n}</span>
              {a.tier ? <Tag>{a.tier}</Tag> : null}
            </div>
            <div style={{ marginTop: 6 }}><window.Flag label={a.c} /></div>
          </div>
        </div>
        <RegistrationPill status={a.reg} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--hairline)" }}>
        {[["Arrival", a.arr], ["Stay", a.stay], ["Coach", a.coach], ["Departure", a.dep]].map(([l, v]) => (
          <div key={l}>
            <window.Eyebrow style={{ fontSize: 10 }}>{l}</window.Eyebrow>
            <div style={{ marginTop: 5, fontFamily: "var(--font-display)", fontWeight: v === "Not set" || v === "—" ? 500 : 700, fontSize: 14.5, color: v === "Not set" || v === "—" ? "var(--text-faint)" : "var(--text-primary)" }}>{v}</div>
          </div>
        ))}
      </div>
      {a.note ? (
        <div style={{ marginTop: 14, background: "var(--surface-well)", borderRadius: 12, padding: "11px 13px" }}>
          <window.Eyebrow style={{ fontSize: 10, color: "var(--danger)" }}>Note</window.Eyebrow>
          <div style={{ marginTop: 5, fontFamily: "var(--font-ui)", fontSize: 13.5, color: "var(--text-primary)", lineHeight: 1.4 }}>{a.note}</div>
        </div>
      ) : null}
    </div>
  );
}

function EventMock() {
  const tabs = ["Overview", "Attendance", "Registrations", "Support", "Schedule", "Messages"];
  const cards = [
    { n: "Émile Auclair", i: "ÉA", tier: "Elite", c: "FRA", reg: "registered", arr: "22 Aug", stay: "Team chalet", coach: "Assigned", dep: "30 Aug", note: "Targeting a podium — wants an altitude room and a quiet block before the start." },
    { n: "Mathis Varennes", i: "MV", tier: "Elite", c: "FRA", reg: "needs_bib", arr: "22 Aug", stay: "Team chalet", coach: "Assigned", dep: "30 Aug" },
    { n: "Iker Salazar", i: "IS", tier: null, c: "ESP", reg: "registered", arr: "23 Aug", stay: "Hôtel Le Morgane", coach: "—", dep: "29 Aug" },
    { n: "Yuto Nakamura", i: "YN", tier: "Elite", c: "JPN", reg: "considering", arr: "Not set", stay: "Not set", coach: "Assigned", dep: "Not set", note: "Awaiting sponsor confirmation on travel — decision expected by 20 Jul." },
  ];
  return (
    <div style={{ display: "flex", background: "var(--surface-app)", minHeight: 560 }}>
      <window.Rail active="calendar" />
      <div style={{ flex: 1, padding: "24px 30px 30px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 16 }}>
            <span style={{ width: 60, height: 60, borderRadius: 14, background: "var(--surface-well)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, color: "var(--text-muted)" }}>U</span>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 900, letterSpacing: "-0.03em", margin: 0, lineHeight: 1 }}>utmb</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 9, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 600, color: "var(--text-muted)" }}>23–29 Aug 2026</span>
                <span style={{ color: "var(--text-faint)" }}>·</span>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 600, color: "var(--text-muted)" }}>Chamonix-Mont-Blanc</span>
                <Tag>Accommodation</Tag><Tag>Coaching</Tag>
              </div>
            </div>
          </div>
          <Button variant="secondary" size="sm" icon={<window.Ic.share size={15} />}>Share</Button>
        </div>

        <div style={{ display: "flex", gap: 26, marginTop: 22, borderBottom: "1px solid var(--hairline)" }}>
          {tabs.map((t, i) => (
            <span key={t} style={{
              paddingBottom: 12, fontFamily: "var(--font-ui)", fontSize: 13.5, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase",
              color: i === 0 ? "var(--text-primary)" : "var(--text-faint)",
              borderBottom: i === 0 ? "2px solid var(--accent)" : "2px solid transparent", marginBottom: -1,
            }}>{t}</span>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginTop: 22 }}>
          <StatCard label="Entered athletes" value="8" unit="/ 18" sub="across UTMB & CCC" tone="danger" />
          <StatCard label="Pending registrations" value="3" sub="2 need a bib number" />
          <StatCard label="Arrival not set" value="1" sub="of 8 entered" />
          <StatCard label="Accommodation requests" value="6" sub="4 chalet · 2 hotel" />
        </div>

        <div style={{ marginTop: 26 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <span style={{ width: 4, height: 22, background: "var(--accent)", borderRadius: 2 }} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 19, letterSpacing: "-0.01em" }}>utmb</span>
            <Metric value="174" unit="KM" size="sm" style={{ display: "inline-flex" }} />
            <Metric value="9 900" unit="M D+" size="sm" />
            <span style={{ marginLeft: "auto" }}><window.Eyebrow>4 entered</window.Eyebrow></span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {cards.map((c) => <AthCard key={c.n} a={c} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================== REGISTRATIONS BOARD ============================== */
function RegMock() {
  const rows = [
    { n: "Émile Auclair", i: "ÉA", c: "FRA", reg: "registered", note: "Bib confirmed. Targeting a podium." },
    { n: "Mathis Varennes", i: "MV", c: "FRA", reg: "needs_bib", note: "Entered — waiting on organizer bib allocation." },
    { n: "Anaïs Roussel", i: "AR", c: "FRA", reg: "registered", note: "CCC. Bib confirmed." },
    { n: "Yuto Nakamura", i: "YN", c: "JPN", reg: "considering", note: "Awaiting sponsor confirmation on travel." },
    { n: "Hannah Keller", i: "HK", c: "SUI", reg: "needs_bib", note: "CCC. Needs bib." },
    { n: "Théo Mercier", i: "TM", c: "FRA", reg: "withdrawn", note: "Pulled out — calf strain, recovery block." },
  ];
  return (
    <div style={{ background: "var(--surface-app)", padding: "26px 30px", minHeight: 520 }}>
      <window.Eyebrow style={{ color: "var(--text-muted)" }}>UTMB · Registrations</window.Eyebrow>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 900, letterSpacing: "-0.02em", margin: "6px 0 0", lineHeight: 1 }}>who's racing</h3>
      <div style={{ display: "flex", gap: 8, margin: "20px 0 18px", flexWrap: "wrap" }}>
        {[["All", 8, true], ["Considering", 1], ["Needs bib", 2], ["Registered", 4], ["Withdrawn", 1]].map(([l, c, on]) => (
          <span key={l} style={{
            display: "inline-flex", alignItems: "center", gap: 8, height: 38, padding: "0 15px", borderRadius: 999,
            fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase",
            background: on ? "var(--accent)" : "var(--surface-card)", color: on ? "var(--accent-on)" : "var(--text-muted)",
            border: on ? "1px solid transparent" : "1px solid var(--hairline)",
          }}>{l}<span style={{ fontSize: 11, opacity: 0.7 }}>{c}</span></span>
        ))}
      </div>
      <div style={{ background: "var(--surface-card)", border: "1px solid var(--hairline)", borderRadius: 16, overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
        {rows.map((r, i) => (
          <div key={r.n} style={{ display: "grid", gridTemplateColumns: "minmax(200px,1fr) 150px minmax(240px,1.4fr)", gap: 16, alignItems: "center", padding: "15px 20px", borderTop: i ? "1px solid var(--hairline)" : "none" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 11 }}>
              <Avatar name={r.n} initials={r.i} size="sm" />
              <span>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em" }}>{r.n}</div>
                <div style={{ marginTop: 3 }}><window.Flag label={r.c} /></div>
              </span>
            </span>
            <RegistrationPill status={r.reg} />
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.4 }}>{r.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { RosterMock, EventMock, RegMock });
