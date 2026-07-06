/* Athlete mobile mockups: My registrations + Inbox. ~360px, bottom tab bar. */

const { Avatar: AvatarP, RegistrationPill: RegPillP, Button: ButtonP, Tag: TagP } = window.TM;

function Phone({ children, label }) {
  return (
    <div style={{ width: 340, flex: "none" }}>
      <div style={{
        width: 340, borderRadius: 34, background: "var(--surface-app)", border: "10px solid #16120E",
        boxShadow: "var(--shadow-card-lg)", overflow: "hidden", position: "relative",
      }}>
        {/* status bar */}
        <div style={{ height: 40, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 22px", background: "var(--surface-app)" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700 }}>9:41</span>
          <span style={{ display: "flex", gap: 5, alignItems: "center", color: "var(--text-primary)" }}>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="4" y="5" width="3" height="6" rx="1"/><rect x="8" y="3" width="3" height="8" rx="1"/><rect x="12" y="0" width="3" height="11" rx="1"/></svg>
            <svg width="22" height="11" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="1" y="1" width="19" height="10" rx="2.5"/><rect x="2.5" y="2.5" width="13" height="7" rx="1.2" fill="currentColor" stroke="none"/><rect x="21.5" y="4" width="1.6" height="4" rx="0.8" fill="currentColor" stroke="none"/></svg>
          </span>
        </div>
        {children}
        {/* bottom tab bar */}
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: 64, borderTop: "1px solid var(--hairline)", background: "var(--surface-card)", paddingBottom: 6 }}>
          {[["calendar", "Races", label === "races"], ["inbox", "Inbox", label === "inbox"], ["chart", "Results", false], ["users", "Profile", false]].map(([ic, t, on]) => {
            const Icn = window.Ic[ic];
            return (
              <span key={t} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, color: on ? "var(--text-primary)" : "var(--text-faint)" }}>
                <Icn size={21} />
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 700, letterSpacing: "0.03em" }}>{t}</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function AthleteRegMock() {
  const events = [
    { ev: "UTMB", race: "CCC · 100K", date: "29 Aug", reg: "registered", note: "Bib confirmed" },
    { ev: "Golden Trail", race: "Sierre-Zinal", date: "10 Aug", reg: "considering", note: "Deciding by 20 Jul" },
    { ev: "Skyrunner", race: "Limone Extreme", date: "12 Oct", reg: "needs_bib", note: "Need a bib" },
  ];
  return (
    <Phone label="races">
      <div style={{ padding: "10px 18px 18px", height: 470, overflow: "hidden" }}>
        <window.Eyebrow style={{ color: "var(--text-muted)", fontSize: 10 }}>Anaïs Roussel</window.Eyebrow>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 27, fontWeight: 900, letterSpacing: "-0.02em", margin: "4px 0 16px", lineHeight: 1 }}>my races</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {events.map((e) => (
            <div key={e.ev} style={{ background: "var(--surface-card)", border: "1px solid var(--hairline)", borderRadius: 16, padding: 15, boxShadow: "var(--shadow-card)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, letterSpacing: "-0.01em" }}>{e.ev}</div>
                  <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--text-muted)", marginTop: 2 }}>{e.race}</div>
                </div>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "var(--text-muted)" }}>{e.date}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 13 }}>
                <RegPillP status={e.reg} />
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--text-faint)" }}>{e.note}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16 }}>
          <ButtonP size="sm" style={{ width: "100%" }} icon={<window.Ic.check size={15} />}>Update my status</ButtonP>
        </div>
      </div>
    </Phone>
  );
}

function AthleteInboxMock() {
  const msgs = [
    { from: "Team manager", ctx: "Racing CCC", urgent: true, txt: "UTMB activated the rain kit for CCC. Pack your rain jacket.", t: "2h", unread: true },
    { from: "Team manager", ctx: "UTMB", urgent: false, txt: "Team chalet check-in is 22 Aug from 16:00. Send your arrival time.", t: "1d", unread: true },
    { from: "Team manager", ctx: "Whole team", urgent: false, txt: "Kit drop ships next week — confirm your gear sizing is up to date.", t: "3d", unread: false },
  ];
  return (
    <Phone label="inbox">
      <div style={{ padding: "10px 18px 18px", height: 470, overflow: "hidden" }}>
        <window.Eyebrow style={{ color: "var(--text-muted)", fontSize: 10 }}>2 unread</window.Eyebrow>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 27, fontWeight: 900, letterSpacing: "-0.02em", margin: "4px 0 16px", lineHeight: 1 }}>inbox</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          {msgs.map((m, i) => (
            <div key={i} style={{ background: "var(--surface-card)", border: "1px solid var(--hairline)", borderRadius: 16, padding: 15, boxShadow: "var(--shadow-card)", position: "relative" }}>
              {m.unread ? <span style={{ position: "absolute", top: 16, right: 15, width: 8, height: 8, borderRadius: 999, background: "var(--accent)" }} /> : null}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5 }}>{m.from}</span>
                <TagP>{m.ctx}</TagP>
                {m.urgent ? <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 8px", borderRadius: 999, background: "var(--danger-soft)", color: "var(--danger)", fontFamily: "var(--font-ui)", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Urgent</span> : null}
              </div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-primary)", lineHeight: 1.45 }}>{m.txt}</div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 11, color: "var(--text-faint)", marginTop: 8 }}>{m.t} ago</div>
            </div>
          ))}
        </div>
      </div>
    </Phone>
  );
}

Object.assign(window, { Phone, AthleteRegMock, AthleteInboxMock });
