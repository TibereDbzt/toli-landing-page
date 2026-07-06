# Toli Design System

> Visual contract + component library for **Toli** — a B2B SaaS platform for professional
> trail-running team management. Mobile (athlete) + desktop (manager). One system, two surfaces.

This project is the machine-readable companion to `uploads/DESIGN_SYSTEM.md` (visual contract) and
`uploads/SKILL.md` (voice & terminology). In a conflict, **those source files + this system win**;
visual decisions are made here, never reverse-engineered from the legacy app.

## What Toli is

A premium, vertical SaaS for managing a pro trail-running team's roster, race entries, and event
logistics. The **buyer is the team manager** (operations, often an ex-athlete or sport-marketing
lead — not technical, frequently on mobile). The athlete is a secondary, mobile-first reader.
Founder story: an elite ASICS-team athlete who was also a developer. The product reads like the
operational notes of someone who has actually run a team — not a generic SaaS landing page.

Core surfaces:
- **Manager app (desktop)** — left-sidebar nav. Roster, events, attendance, registrations. Dense,
  data-led. _Recreated in `ui_kits/app/`._
- **Athlete view (mobile)** — bottom tab bar, ~380px, low-friction. Their own info shown first.

### Sources given
- `uploads/DESIGN_SYSTEM.md` — the visual contract (color/type/spacing/components, settled rules).
- `uploads/SKILL.md` — brand voice & terminology (French-authored; all user-facing copy is English).
- `uploads/toli_desktop_{light,dark}_{roster,event}.png` — four product screenshots (the
  **Meridian Racing** tenant, which has white-labeled `--accent` to red).

No codebase or Figma link was provided — UI kit fidelity comes from the contract + screenshots.

---

## CONTENT FUNDAMENTALS

Voice = **a founder who did the job. Operational, dry, concrete.** Reads like the notes of someone
who managed a trail team, not a SaaS landing page.

- **Language:** all user-facing copy is **English** (the source skill is written in French).
- **Tone:** say what the product does, plainly. No hype. Anchor in the manager's operational pain —
  info lost in WhatsApp, chasing athletes, manual reporting, a spreadsheet that's unusable on mobile.
- **Casing:** sentence case for body and most labels; **UPPERCASE tracked** for eyebrows, column
  heads, status pills, and button labels (broadcast-graphic feel). Big page titles are **lowercase**
  display ("athletes", "utmb").
- **Person:** addresses the manager directly ("your roster", "the manager who's done chasing
  athletes"). Athlete-facing microcopy is short and respectful.
- **Emoji:** **none** in product copy. No decorative exclamation marks.
- **Numbers:** first-class. Big tabular numerals for data (UTMB index, km, D+, counts).

**Banned (hype/jargon):** supercharge, unlock, seamless(ly), empower, game-changing, revolutionize,
effortless, 10x, "all-in-one", "powerful", "next-level", "take your team to the next level".

**Terminology (use exactly):** roster · bib · podium · UTMB index · race week · kit drop · target
race · A-race. Always **"gear sizing"** (never "equipment sizing"); **"transport number"** (never
"flight number"). Registration enum + exact labels: **Considering / Registered / Needs bib /
Withdrawn** — never paraphrase. Primary CTA is always **"Book a demo"** (never "Sign up" / "Start
free trial" — sold to the team via the manager, never self-serve to an athlete).

**Positioning guardrails:** a vertical trail platform — never described as "project management",
"team collaboration", or compared to Notion/Airtable.

Examples:
- ✓ Hero: "Your roster, races, and logistics in one place. Built for the team manager who's done
  chasing athletes across WhatsApp."
- ✗ "Supercharge your team's workflow with the all-in-one platform built to empower elite athletes!"
- ✓ Status: "Registered." ✗ "You're all signed up!"

---

## VISUAL FOUNDATIONS

**Direction:** editorial, **sport-professional**. References: race start lists, results boards, bib
numbers, broadcast sports graphics — precise, structured, credible. Deliberately avoids generic SaaS
blandness, terminal/mono clichés, wellness softness, and outdoor/granola styling.

**Color.** Ink/neutral-led. The base is paper (warm off-white `#F4F1EA`) on light and deep charcoal
(`#0F0F11`, **not** pure black, **no neon glow**) on dark.
- **Red = danger only.** `--danger #D8392B` is reserved strictly for destructive actions, errors,
  and negative status (injured / withdrawn). It is **never** the brand or primary-action color.
- **`--accent` is ink by default** (ink pill on light, paper pill on dark) and is the **single
  white-label swap point** — a tenant overrides only `--accent` (+ `--accent-on`). The screenshots
  show the Meridian Racing tenant with a red accent; the dock in the UI kit demos the swap.
- **Semantic status is fixed** across tenants: green (healthy/registered), amber (resting/needs_bib),
  neutral (considering), red (injured/withdrawn). Color is **never the only signal** — always paired
  with a dot + text label.

**Type.** Inter Tight throughout — display, UI, and numerals. Bold editorial grotesque. Page titles
are heavy (900) and lowercase with tight tracking. **Tabular lining numerals** everywhere data
appears. Eyebrows/labels are uppercase, ~0.08em tracked, muted. No monospace as a primary device.

**Spacing & radius.** 4px base (4·8·12·16·20·24·32·40·48·64). Radii: sm 8 (tags/inputs), md 12
(cards/fields), lg 16 (panels/stat cards), pill 999 (chips/status/buttons). 1px hairlines for
dividers and borders.

**Backgrounds.** Flat surface colors — **no gradients, no imagery, no textures or patterns** behind
content. Depth comes from surface layering (app → raised → sunken) + hairlines, not decoration.

**Cards.** Raised surface (white on light, `#1A1A1D` on dark), 1px hairline, lg radius. On light they
float on a soft low neutral shadow (`--shadow-card`); on dark elevation reads through surface color +
hairline (near-flat, no glow). The danger-soft surface flags an at-risk stat card.

**Borders & dividers.** 1px `--hairline` everywhere — table rows, card edges, tab bar underline,
section headers. Race section headers add a short 4px `--accent` bar.

**Animation.** Restrained. Short functional transitions (~.15s) on hover/press of interactive
controls. Buttons brighten slightly on hover (`brightness(.94)`) and scale to `.98` on press. No
decorative or infinite animation.

**Hover / press states.** Hover = subtle brightness shift; press = slight scale-down. **Editable
data must read as editable with persistent cues and NO hover dependency** (§8) — inline fields have a
permanent field-like boundary + an affordance glyph (chevron/calendar), identical on tap and pointer.

**Transparency & blur.** Minimal. `--accent-soft` is a low-alpha tint for active/selected states and
focus halos. No glassmorphism/backdrop-blur.

**Imagery.** None generated by the system — country flags (functional data) load from `flagcdn.com`.
No photographic or illustrative imagery in the core product views.

**Layout.** Desktop manager = fixed left **sidebar** (~96px rail). Mobile athlete = bottom tab bar.
Generous but purposeful spacing; dense where it must be (rosters, attendance grids). Tap targets ≥44px.

---

## ICONOGRAPHY

- **Style:** clean **line icons**, ~2px stroke, round caps/joins — the Lucide / Feather idiom. No
  filled or duotone icons in product chrome.
- **In this system:** `ui_kits/app/icons.js` ships a small hand-matched set (`window.Icons`): list,
  calendar, chart, message, search, share, external, more (·· ·), plus, sun, moon. They mirror
  **Lucide**. ⚠️ Substitution flag: no icon source was provided, so production should adopt
  **`lucide` / `lucide-react`** (these match its metrics) rather than the local copies.
- **Emoji:** never used as iconography or in copy.
- **Unicode:** the em dash `—` is used as the "empty value" marker in inline fields; `·` separates
  eyebrow segments ("ROSTER · 18 ATHLETES").
- **Brand mark:** `assets/toli-mark.svg` — a stopwatch glyph in a rounded square (trail-race timing
  motif). ⚠️ **Recreated** from the screenshots; replace with the official vector. Tenant team logos
  occupy this sidebar slot per §9.
- **Flags:** rectangular country flags from `flagcdn.com` (ISO-2 codes), rounded 3px, with a faint
  1px ring. Functional data, paired with the country code text.

---

## INDEX

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s the token files only.
- `readme.md` — this guide. `SKILL.md` — downloadable Agent-Skills wrapper.
- `uploads/` — original source contract, voice skill, and screenshots.

**Tokens** (`tokens/`, all reachable from `styles.css`)
- `fonts.css` (Inter Tight, Google Fonts CDN) · `colors.css` (primitives + semantic aliases, light +
  `[data-theme="dark"]`) · `typography.css` (families, weights, type scale) · `spacing.css` (spacing,
  radius, hairline, tap target, shadows).

**Foundation cards** (`guidelines/`, Design System tab) — Colors (text, surfaces light/dark, accent,
danger, status), Type (display, body, label, numerals), Spacing (scale, radius, elevation), Brand
(logo, voice).

**Components** (`components/`, namespace `window.ToliDesignSystem_948a83`)
- `buttons/` — **Button**, **IconButton**
- `status/` — **StatusDot**, **RegistrationPill**, **Tag**
- `data-display/` — **Avatar**, **Metric**, **StatCard**
- `forms/` — **Input**, **FilterChip**, **Tabs**, **InlineField**

**UI kits** (`ui_kits/`)
- `app/` — Toli manager app: Roster + Event screens, interactive (`index.html`), dark/light + tenant
  accent demo.

**Assets** (`assets/`) — `toli-mark.svg` (recreated brand mark).
