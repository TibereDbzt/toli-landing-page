/* @ds-bundle: {"format":3,"namespace":"ToliDesignSystem_948a83","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Metric","sourcePath":"components/data-display/Metric.jsx"},{"name":"StatCard","sourcePath":"components/data-display/StatCard.jsx"},{"name":"FilterChip","sourcePath":"components/forms/FilterChip.jsx"},{"name":"InlineField","sourcePath":"components/forms/InlineField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Tabs","sourcePath":"components/forms/Tabs.jsx"},{"name":"RegistrationPill","sourcePath":"components/status/RegistrationPill.jsx"},{"name":"StatusDot","sourcePath":"components/status/StatusDot.jsx"},{"name":"Tag","sourcePath":"components/status/Tag.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"c0c7a83a1645","components/buttons/IconButton.jsx":"c13899669001","components/data-display/Avatar.jsx":"918e3ad6614f","components/data-display/Metric.jsx":"a9fd9c80ee48","components/data-display/StatCard.jsx":"899694370647","components/forms/FilterChip.jsx":"1abcfb04ba4a","components/forms/InlineField.jsx":"b3103e43886d","components/forms/Input.jsx":"61947c92a63f","components/forms/Tabs.jsx":"6fe4b735bb59","components/status/RegistrationPill.jsx":"6cd85679fafd","components/status/StatusDot.jsx":"a7a528f0e08b","components/status/Tag.jsx":"44ffbdb6455a","ui_kits/app/EventScreen.jsx":"f9cd06eeccd8","ui_kits/app/RosterScreen.jsx":"1bd37d4b9c02","ui_kits/app/Sidebar.jsx":"e0b2aa332305","ui_kits/app/data.js":"06ca4a0bf908","ui_kits/app/icons.js":"c7766e98a039"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ToliDesignSystem_948a83 = window.ToliDesignSystem_948a83 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toli primary action button. Ink-led: --accent fill for primary (NEVER red —
 * red is danger only). Labels render uppercase + tracked, broadcast-graphic style.
 */
function Button({
  variant = "primary",
  size = "md",
  icon = null,
  iconRight = null,
  uppercase = true,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 36,
      padding: "0 14px",
      font: 12,
      gap: 7
    },
    md: {
      height: 44,
      padding: "0 20px",
      font: 13,
      gap: 8
    },
    lg: {
      height: 52,
      padding: "0 26px",
      font: 14,
      gap: 9
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--accent-on)",
      border: "1px solid transparent"
    },
    secondary: {
      background: "var(--surface-raised)",
      color: "var(--text-primary)",
      border: "1px solid var(--hairline)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid transparent"
    },
    destructive: {
      background: "var(--danger-soft)",
      color: "var(--danger)",
      border: "1px solid transparent"
    },
    "destructive-solid": {
      background: "var(--danger)",
      color: "#fff",
      border: "1px solid transparent"
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      minWidth: s.height,
      padding: s.padding,
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-ui)",
      fontSize: s.font,
      fontWeight: 700,
      letterSpacing: uppercase ? "0.04em" : "0",
      textTransform: uppercase ? "uppercase" : "none",
      lineHeight: 1,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "filter .15s ease, transform .05s ease",
      whiteSpace: "nowrap",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.98)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.filter = "none";
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = "brightness(1.07)";
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flex: "none"
    }
  }, icon) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flex: "none"
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Square icon-only button (the "..." more menu, theme toggle, etc.).
 * Default is the secondary look: raised surface + hairline. 44px tap target.
 */
function IconButton({
  variant = "secondary",
  size = "md",
  label,
  disabled = false,
  onClick,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    secondary: {
      background: "var(--surface-raised)",
      color: "var(--text-primary)",
      border: "1px solid var(--hairline)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      border: "1px solid transparent"
    },
    primary: {
      background: "var(--accent)",
      color: "var(--accent-on)",
      border: "1px solid transparent"
    }
  };
  const v = variants[variant] || variants.secondary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "filter .15s ease, background .15s ease",
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = "brightness(0.95)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = "none";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Initials avatar — square with md radius (Toli house style), sunken surface.
 * Derives initials from `name` when `initials` isn't given.
 */
function Avatar({
  name = "",
  initials,
  size = "md",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 44,
    lg: 56
  };
  const dim = sizes[size] || sizes.md;
  const text = initials || name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: "var(--radius-md)",
      background: "var(--surface-sunken)",
      color: "var(--text-muted)",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: dim * 0.34,
      letterSpacing: "-0.01em",
      flex: "none",
      userSelect: "none",
      ...style
    }
  }, rest), text);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Metric.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * First-class numeral with optional muted unit and caption — the Toli signature
 * for UTMB index, distance, elevation, counts. Tabular lining figures.
 */
function Metric({
  value,
  unit,
  caption,
  size = "lg",
  align = "left",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: "1.25rem",
    md: "1.75rem",
    lg: "2.5rem",
    xl: "3.25rem"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: sizes[size] || sizes.lg,
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      fontFeatureSettings: '"tnum" 1, "lnum" 1',
      color: "var(--text-primary)"
    }
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "0.42em",
      color: "var(--text-muted)",
      letterSpacing: "0.02em"
    }
  }, unit) : null), caption ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginTop: 6
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Metric.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat card: uppercase label eyebrow → first-class numeral → muted sub-detail.
 * `tone="danger"` paints the danger-soft background used for at-risk metrics
 * (e.g. ENTERED ATHLETES) — red here means "needs attention", per §3.3.
 */
function StatCard({
  label,
  value,
  unit,
  sub,
  tone = "default",
  style = {},
  ...rest
}) {
  const danger = tone === "danger";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: danger ? "var(--danger-soft)" : "var(--surface-raised)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-lg)",
      padding: "18px 20px 16px",
      boxShadow: danger ? "none" : "var(--shadow-card)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "2.75rem",
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      fontFeatureSettings: '"tnum" 1, "lnum" 1',
      color: danger ? "var(--danger)" : "var(--text-primary)"
    }
  }, value), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.1rem",
      fontWeight: 600,
      color: "var(--text-faint)"
    }
  }, unit) : null), sub ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 8
    }
  }, sub) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Filter chip with optional count badge. Active = --accent fill (ink pill);
 * inactive = hairline outline on raised surface. Used for roster + event filters.
 */
function FilterChip({
  label,
  count,
  active = false,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      height: 40,
      padding: "0 16px",
      borderRadius: "var(--radius-pill)",
      border: active ? "1px solid transparent" : "1px solid var(--hairline)",
      background: active ? "var(--accent)" : "var(--surface-raised)",
      color: active ? "var(--accent-on)" : "var(--text-primary)",
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "background .15s ease, color .15s ease",
      ...style
    }
  }, rest), label, count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 20,
      height: 20,
      padding: "0 6px",
      borderRadius: "var(--radius-pill)",
      background: active ? "var(--accent-soft)" : "var(--surface-sunken)",
      color: active ? "var(--accent-on)" : "var(--text-muted)",
      fontSize: 11,
      fontWeight: 700,
      fontFeatureSettings: '"tnum" 1, "lnum" 1'
    }
  }, count) : null);
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/InlineField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inline-editable field (DESIGN_SYSTEM §8). Editable data must read as editable
 * with PERSISTENT cues — field-like boundary + an affordance icon — identical on
 * tap and pointer (NO hover dependency). 44px min tap target.
 *
 * Renders an uppercase label over a tappable value box. `affordance` picks the
 * trailing glyph: "chevron" (select), "calendar" (date), or pass your own node.
 * `empty` styles the "Not set" placeholder state.
 */
function InlineField({
  label,
  value,
  placeholder = "Not set",
  affordance = "chevron",
  onClick,
  style = {},
  ...rest
}) {
  const empty = value == null || value === "";
  const glyphs = {
    chevron: /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "6 9 12 15 18 9"
    })),
    calendar: /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "9",
      x2: "21",
      y2: "9"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6"
    })),
    none: null
  };
  const glyph = typeof affordance === "string" ? glyphs[affordance] : affordance;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      width: "100%",
      minHeight: 44,
      padding: "0 12px",
      background: "var(--surface-sunken)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-sm)",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      fontWeight: empty ? 500 : 600,
      color: empty ? "var(--text-faint)" : "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, empty ? placeholder : value), glyph ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-faint)",
      flex: "none"
    }
  }, glyph) : null));
}
Object.assign(__ds_scope, { InlineField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InlineField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input / search field. Rounded, hairline border, sunken-to-raised surface.
 * Optional leading icon (e.g. a search glyph).
 */
function Input({
  icon = null,
  size = "md",
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const sizes = {
    sm: 40,
    md: 52
  };
  const h = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: h,
      padding: "0 16px",
      background: "var(--surface-raised)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-card)",
      ...wrapStyle
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-faint)",
      flex: "none"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("input", _extends({
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-ui)",
      fontSize: 14.5,
      color: "var(--text-primary)",
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Underline tab bar (event sub-nav: Overview / Attendance / …). Active tab is
 * ink with an --accent underline; rest are muted. Click to switch.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 28,
      borderBottom: "1px solid var(--hairline)",
      ...style
    }
  }, rest), tabs.map(t => {
    const id = typeof t === "string" ? t : t.id;
    const label = typeof t === "string" ? t : t.label;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      onClick: () => onChange && onChange(id),
      style: {
        appearance: "none",
        background: "none",
        border: "none",
        padding: "0 0 14px",
        marginBottom: -1,
        borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
        color: active ? "var(--text-primary)" : "var(--text-muted)",
        fontFamily: "var(--font-ui)",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        cursor: "pointer",
        whiteSpace: "nowrap"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/status/RegistrationPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const REG = {
  considering: {
    color: "var(--reg-considering)",
    soft: "var(--reg-considering-soft)",
    label: "Considering"
  },
  needs_bib: {
    color: "var(--reg-needs-bib)",
    soft: "var(--reg-needs-bib-soft)",
    label: "Needs bib"
  },
  registered: {
    color: "var(--reg-registered)",
    soft: "var(--reg-registered-soft)",
    label: "Registered"
  },
  withdrawn: {
    color: "var(--reg-withdrawn)",
    soft: "var(--reg-withdrawn-soft)",
    label: "Withdrawn"
  }
};

/**
 * Registration-status pill: dot + UPPERCASE label on a soft tinted pill.
 * Exact enum labels (DESIGN_SYSTEM §11 / SKILL): Considering / Registered /
 * Needs bib / Withdrawn — never paraphrase.
 */
function RegistrationPill({
  status = "considering",
  style = {},
  ...rest
}) {
  const r = REG[status] || REG.considering;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "5px 11px",
      borderRadius: "var(--radius-pill)",
      background: r.soft,
      color: r.color,
      fontFamily: "var(--font-ui)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: r.color,
      flex: "none"
    }
  }), r.label);
}
Object.assign(__ds_scope, { RegistrationPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/RegistrationPill.jsx", error: String((e && e.message) || e) }); }

// components/status/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HEALTH = {
  healthy: {
    color: "var(--status-healthy)",
    label: "Healthy"
  },
  injured: {
    color: "var(--status-injured)",
    label: "Injured"
  },
  resting: {
    color: "var(--status-resting)",
    label: "Resting"
  }
};

/**
 * Dot + text status. NEVER color-only (accessibility, DESIGN_SYSTEM §6/§10).
 * Pass a known health `status`, or a custom `color` + `label`.
 */
function StatusDot({
  status,
  color,
  label,
  size = "md",
  style = {},
  ...rest
}) {
  const known = status ? HEALTH[status] : null;
  const dotColor = color || known && known.color || "var(--neutral)";
  const text = label || known && known.label || status || "";
  const fonts = {
    sm: 12,
    md: 13,
    lg: 14
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontFamily: "var(--font-ui)",
      fontSize: fonts[size] || fonts.md,
      fontWeight: 600,
      color: dotColor,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: dotColor,
      flex: "none"
    }
  }), text);
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/status/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Outline pill for tiers / categories (ELITE, WORLD CLASS, TOP) and meta tags.
 * Tier emphasis must NOT use --danger (red = negative only). Use a colored dot
 * for category emphasis instead.
 */
function Tag({
  children,
  tone = "neutral",
  dot = false,
  uppercase = true,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      color: "var(--text-muted)",
      dotColor: "var(--neutral)"
    },
    accent: {
      color: "var(--text-primary)",
      dotColor: "var(--accent)"
    },
    elite: {
      color: "var(--text-primary)",
      dotColor: "var(--accent)"
    },
    "world-class": {
      color: "var(--text-primary)",
      dotColor: "var(--accent)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: dot ? "3px 9px 3px 8px" : "3px 9px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--hairline)",
      color: t.color,
      fontFamily: "var(--font-ui)",
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: uppercase ? "0.07em" : "0",
      textTransform: uppercase ? "uppercase" : "none",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: t.dotColor,
      flex: "none"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/EventScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Event screen — event overview with athletes-by-race (recreation of toli_desktop_*_event). */
function EventScreen() {
  const DS = window.ToliDesignSystem_948a83;
  const {
    Button,
    IconButton,
    Avatar,
    Metric,
    StatCard,
    FilterChip,
    Tabs,
    InlineField,
    RegistrationPill,
    Tag
  } = DS;
  const I = window.Icons;
  const ev = window.TOLI_DATA.event;
  const [tab, setTab] = React.useState("Overview");
  const [filter, setFilter] = React.useState("all");
  const all = ev.races.flatMap(r => r.athletes);
  const counts = {
    all: all.length,
    considering: all.filter(a => a.reg === "considering").length,
    needs_bib: all.filter(a => a.reg === "needs_bib").length,
    registered: all.filter(a => a.reg === "registered").length,
    withdrawn: all.filter(a => a.reg === "withdrawn").length
  };
  const AthleteCard = ({
    a
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-raised)",
      border: "1px solid var(--hairline)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: a.name,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 16,
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, a.name), a.tier ? /*#__PURE__*/React.createElement(Tag, null, a.tier) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 7
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://flagcdn.com/h20/${a.cc}.png`,
    srcSet: `https://flagcdn.com/h40/${a.cc}.png 2x`,
    alt: a.country,
    width: "22",
    height: "16",
    style: {
      borderRadius: 3,
      objectFit: "cover",
      display: "block",
      boxShadow: "0 0 0 1px rgba(0,0,0,.06)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-muted)"
    }
  }, a.country)))), /*#__PURE__*/React.createElement(RegistrationPill, {
    status: a.reg
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--hairline)",
      margin: "20px 0 18px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(InlineField, {
    label: "Arrival",
    value: a.arrival,
    affordance: "calendar"
  }), /*#__PURE__*/React.createElement(InlineField, {
    label: "Stay",
    value: a.stay
  }), /*#__PURE__*/React.createElement(InlineField, {
    label: "Coach",
    value: a.coach,
    placeholder: "\u2014"
  }), /*#__PURE__*/React.createElement(InlineField, {
    label: "Departure",
    value: a.departure,
    affordance: "calendar"
  })), a.note ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-md)",
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--accent)",
      marginBottom: 7
    }
  }, "Note"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13.5,
      lineHeight: 1.5,
      color: "var(--text-primary)"
    }
  }, a.note)) : null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 48px 64px",
      maxWidth: 1500
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: "var(--radius-lg)",
      background: "var(--surface-sunken)",
      border: "1px solid var(--hairline)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      fontFamily: "var(--font-display)",
      fontSize: 30,
      fontWeight: 700,
      color: "var(--text-muted)"
    }
  }, ev.initial), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "3rem",
      fontWeight: 900,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      margin: 0,
      color: "var(--text-primary)"
    }
  }, ev.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 12,
      flexWrap: "wrap",
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, ev.dates), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-faint)"
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("span", null, ev.place), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-faint)"
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      color: "var(--accent)",
      fontWeight: 600,
      textDecoration: "none"
    }
  }, ev.link, /*#__PURE__*/React.createElement(I.external, {
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 8,
      marginLeft: 4
    }
  }, ev.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(I.share, {
      size: 16
    })
  }, "Share"), /*#__PURE__*/React.createElement(IconButton, {
    label: "More options"
  }, /*#__PURE__*/React.createElement(I.more, {
    size: 18
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: ["Overview", "Attendance", "Registrations", "Support", "Schedule", "Messages"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginTop: 28
    }
  }, ev.stats.map((s, i) => /*#__PURE__*/React.createElement(StatCard, _extends({
    key: i
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      margin: "40px 0 16px"
    }
  }, "Athletes by race"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(FilterChip, {
    label: "All",
    count: counts.all,
    active: filter === "all",
    onClick: () => setFilter("all")
  }), /*#__PURE__*/React.createElement(FilterChip, {
    label: "Considering",
    count: counts.considering,
    active: filter === "considering",
    onClick: () => setFilter("considering")
  }), /*#__PURE__*/React.createElement(FilterChip, {
    label: "Needs bib",
    count: counts.needs_bib,
    active: filter === "needs_bib",
    onClick: () => setFilter("needs_bib")
  }), /*#__PURE__*/React.createElement(FilterChip, {
    label: "Registered",
    count: counts.registered,
    active: filter === "registered",
    onClick: () => setFilter("registered")
  }), /*#__PURE__*/React.createElement(FilterChip, {
    label: "Withdrawn",
    count: counts.withdrawn,
    active: filter === "withdrawn",
    onClick: () => setFilter("withdrawn")
  })), ev.races.map(race => {
    const athletes = race.athletes.filter(a => filter === "all" || a.reg === filter);
    if (!athletes.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: race.code,
      style: {
        marginTop: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        paddingBottom: 16,
        borderBottom: "1px solid var(--hairline)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 24,
        borderRadius: 2,
        background: "var(--accent)",
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 900,
        letterSpacing: "-0.02em",
        color: "var(--text-primary)"
      }
    }, race.code), /*#__PURE__*/React.createElement(Metric, {
      value: race.km,
      unit: "KM",
      size: "sm"
    }), /*#__PURE__*/React.createElement(Metric, {
      value: race.dplus,
      unit: "M D+",
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, race.entered, " entered")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 18,
        marginTop: 20
      }
    }, athletes.map((a, i) => /*#__PURE__*/React.createElement(AthleteCard, {
      key: i,
      a: a
    }))));
  }));
}
window.EventScreen = EventScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/EventScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/RosterScreen.jsx
try { (() => {
/* Roster screen — the manager's athlete list (recreation of toli_desktop_*_roster). */
function RosterScreen() {
  const DS = window.ToliDesignSystem_948a83;
  const {
    Button,
    IconButton,
    Avatar,
    Metric,
    FilterChip,
    Input,
    StatusDot,
    Tag
  } = DS;
  const I = window.Icons;
  const data = window.TOLI_DATA;
  const [filter, setFilter] = React.useState("all");
  const counts = {
    all: data.roster.length,
    healthy: data.roster.filter(a => a.health === "healthy").length,
    injured: data.roster.filter(a => a.health === "injured").length,
    resting: data.roster.filter(a => a.health === "resting").length
  };
  const rows = data.roster.filter(a => filter === "all" || a.health === filter);
  const COLS = "minmax(230px,1.3fr) 130px 165px 120px 70px 120px minmax(170px,1.1fr)";
  const headStyle = {
    fontFamily: "var(--font-ui)",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--text-muted)"
  };
  const catDot = c => c === "World Class" ? "var(--accent)" : "var(--neutral)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 48px 64px",
      maxWidth: 1500
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--accent)"
    }
  }, "Roster \xB7 ", data.roster.length, " athletes"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "3.25rem",
      fontWeight: 900,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      margin: "10px 0 0",
      color: "var(--text-primary)"
    }
  }, "athletes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "More options"
  }, /*#__PURE__*/React.createElement(I.more, {
    size: 18
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(I.plus, {
      size: 16
    })
  }, "Add athlete"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 20,
      margin: "28px 0 8px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 380px",
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: /*#__PURE__*/React.createElement(I.search, {
      size: 18
    }),
    placeholder: "Search athletes, country, email\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(FilterChip, {
    label: "All",
    count: counts.all,
    active: filter === "all",
    onClick: () => setFilter("all")
  }), /*#__PURE__*/React.createElement(FilterChip, {
    label: "Healthy",
    count: counts.healthy,
    active: filter === "healthy",
    onClick: () => setFilter("healthy")
  }), /*#__PURE__*/React.createElement(FilterChip, {
    label: "Injured",
    count: counts.injured,
    active: filter === "injured",
    onClick: () => setFilter("injured")
  }), /*#__PURE__*/React.createElement(FilterChip, {
    label: "Resting",
    count: counts.resting,
    active: filter === "resting",
    onClick: () => setFilter("resting")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: COLS,
      alignItems: "center",
      gap: 16,
      padding: "18px 8px 14px",
      borderBottom: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: headStyle
  }, "Athlete"), /*#__PURE__*/React.createElement("span", {
    style: headStyle
  }, "Status"), /*#__PURE__*/React.createElement("span", {
    style: headStyle
  }, "Category"), /*#__PURE__*/React.createElement("span", {
    style: headStyle
  }, "UTMB index"), /*#__PURE__*/React.createElement("span", {
    style: headStyle
  }, "Races"), /*#__PURE__*/React.createElement("span", {
    style: headStyle
  }, "Country"), /*#__PURE__*/React.createElement("span", {
    style: headStyle
  }, "Email")), rows.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: COLS,
      alignItems: "center",
      gap: 16,
      padding: "16px 8px",
      borderBottom: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: a.name
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, a.name), a.tier ? /*#__PURE__*/React.createElement(Tag, null, a.tier) : null)), /*#__PURE__*/React.createElement(StatusDot, {
    status: a.health
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-ui)",
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 2,
      background: catDot(a.category),
      flex: "none"
    }
  }), a.category), /*#__PURE__*/React.createElement(Metric, {
    value: a.index,
    size: "md"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 17,
      fontWeight: 600,
      color: "var(--text-primary)",
      fontFeatureSettings: '"tnum" 1'
    }
  }, a.races), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://flagcdn.com/h20/${a.cc}.png`,
    srcSet: `https://flagcdn.com/h40/${a.cc}.png 2x`,
    alt: a.country,
    width: "22",
    height: "16",
    style: {
      borderRadius: 3,
      objectFit: "cover",
      display: "block",
      boxShadow: "0 0 0 1px rgba(0,0,0,.06)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13.5,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, a.country)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 13.5,
      color: "var(--text-faint)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, a.email))));
}
window.RosterScreen = RosterScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/RosterScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Sidebar.jsx
try { (() => {
/* Toli app sidebar — desktop manager nav (DESIGN_SYSTEM §5). Fixed left rail,
   team logo on top, nav icons, account avatar + "Powered by Toli" at the foot. */
function Sidebar({
  active = "roster",
  onNavigate,
  accent
}) {
  const I = window.Icons;
  const items = [{
    id: "roster",
    icon: I.list,
    label: "Roster"
  }, {
    id: "events",
    icon: I.calendar,
    label: "Events"
  }, {
    id: "stats",
    icon: I.chart,
    label: "Stats"
  }, {
    id: "messages",
    icon: I.message,
    label: "Messages"
  }];
  const NavBtn = ({
    it
  }) => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      title: it.label,
      onClick: () => onNavigate && onNavigate(it.id),
      style: {
        width: 48,
        height: 48,
        borderRadius: "var(--radius-md)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        cursor: "pointer",
        background: on ? "var(--accent-soft)" : "transparent",
        color: on ? "var(--text-primary)" : "var(--text-faint)",
        transition: "background .15s, color .15s"
      }
    }, it.icon({
      size: 22,
      sw: on ? 2.3 : 2
    }));
  };
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 96,
      flex: "none",
      height: "100%",
      borderRight: "1px solid var(--hairline)",
      background: "var(--surface)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "16px 0 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 15,
      marginBottom: 22,
      background: "var(--accent)",
      color: "var(--accent-on)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-card)"
    },
    title: "Meridian Racing"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 64 64",
    fill: "none"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "3.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M32 13.5 V18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44.5 21.5 l2.4 -2.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "36",
    r: "15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 36 L40 28.5"
  })))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, items.map(it => /*#__PURE__*/React.createElement(NavBtn, {
    key: it.id,
    it: it
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 8.5,
      fontWeight: 600,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      writingMode: "horizontal-tb",
      textAlign: "center",
      lineHeight: 1.3,
      width: 60
    }
  }, "Powered by", /*#__PURE__*/React.createElement("br", null), "Toli"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-sunken)",
      border: "1px solid var(--hairline)",
      color: "var(--text-muted)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 13
    },
    title: "L\xE9a Marchand"
  }, "LM")));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
/* Sample data for the Toli app UI kit. Names/teams are fictional. */
window.TOLI_DATA = {
  team: {
    name: "Meridian Racing",
    domain: "meridianracing.com"
  },
  manager: {
    name: "Léa Marchand",
    initials: "LM"
  },
  roster: [{
    name: "Mathis Varennes",
    tier: "Elite",
    health: "healthy",
    category: "World Class",
    index: 921,
    races: 4,
    cc: "fr",
    country: "FRA",
    email: "m.varennes@meridianracing.com"
  }, {
    name: "Iker Salazar",
    tier: null,
    health: "healthy",
    category: "World Class",
    index: 904,
    races: 3,
    cc: "es",
    country: "ESP",
    email: "i.salazar@meridianracing.com"
  }, {
    name: "Lukas Brandt",
    tier: null,
    health: "injured",
    category: "Top",
    index: 866,
    races: 2,
    cc: "de",
    country: "GER",
    email: "l.brandt@meridianracing.com"
  }, {
    name: "Émile Auclair",
    tier: "Elite",
    health: "healthy",
    category: "World Class",
    index: 930,
    races: 5,
    cc: "fr",
    country: "FRA",
    email: "e.auclair@meridianracing.com"
  }, {
    name: "Nora Bianchi",
    tier: null,
    health: "healthy",
    category: "Top",
    index: 842,
    races: 3,
    cc: "it",
    country: "ITA",
    email: "n.bianchi@meridianracing.com"
  }, {
    name: "Théo Mercier",
    tier: null,
    health: "resting",
    category: "Elite",
    index: 788,
    races: 1,
    cc: "fr",
    country: "FRA",
    email: "t.mercier@meridianracing.com"
  }, {
    name: "Anaïs Roussel",
    tier: "Elite",
    health: "healthy",
    category: "World Class",
    index: 912,
    races: 4,
    cc: "fr",
    country: "FRA",
    email: "a.roussel@meridianracing.com"
  }, {
    name: "Marco Ferri",
    tier: null,
    health: "injured",
    category: "Top",
    index: 851,
    races: 2,
    cc: "it",
    country: "ITA",
    email: "m.ferri@meridianracing.com"
  }, {
    name: "Hannah Keller",
    tier: null,
    health: "healthy",
    category: "Top",
    index: 829,
    races: 3,
    cc: "ch",
    country: "SUI",
    email: "h.keller@meridianracing.com"
  }, {
    name: "Diego Navarro",
    tier: null,
    health: "healthy",
    category: "Elite",
    index: 776,
    races: 2,
    cc: "es",
    country: "ESP",
    email: "d.navarro@meridianracing.com"
  }, {
    name: "Yuto Nakamura",
    tier: "Elite",
    health: "healthy",
    category: "World Class",
    index: 898,
    races: 4,
    cc: "jp",
    country: "JPN",
    email: "y.nakamura@meridianracing.com"
  }, {
    name: "Lena Hoffmann",
    tier: null,
    health: "resting",
    category: "Top",
    index: 834,
    races: 1,
    cc: "de",
    country: "GER",
    email: "l.hoffmann@meridianracing.com"
  }, {
    name: "Florian Weber",
    tier: null,
    health: "healthy",
    category: "Elite",
    index: 769,
    races: 2,
    cc: "at",
    country: "AUT",
    email: "f.weber@meridianracing.com"
  }],
  event: {
    name: "utmb",
    initial: "U",
    dates: "23–29 Aug 2026",
    place: "Chamonix-Mont-Blanc",
    link: "utmb.world",
    tags: ["Accommodation", "Coaching"],
    stats: [{
      label: "Entered athletes",
      value: "8",
      unit: "/ 18",
      sub: "across UTMB & CCC",
      tone: "danger"
    }, {
      label: "Pending registrations",
      value: "3",
      sub: "2 need a bib number"
    }, {
      label: "Arrival not set",
      value: "1",
      sub: "of 8 entered"
    }, {
      label: "Accommodation requests",
      value: "6",
      sub: "4 chalet · 2 hotel"
    }],
    races: [{
      code: "utmb",
      km: "174",
      dplus: "9 900",
      entered: 4,
      athletes: [{
        name: "Émile Auclair",
        tier: "Elite",
        cc: "fr",
        country: "FRA",
        reg: "registered",
        arrival: "22 Aug",
        stay: "Team chalet",
        coach: "Assigned",
        departure: "30 Aug",
        note: "Targeting a podium — wants an altitude room and a quiet block before start."
      }, {
        name: "Mathis Varennes",
        tier: "Elite",
        cc: "fr",
        country: "FRA",
        reg: "needs_bib",
        arrival: "22 Aug",
        stay: "Team chalet",
        coach: "Assigned",
        departure: "30 Aug",
        note: null
      }, {
        name: "Iker Salazar",
        tier: null,
        cc: "es",
        country: "ESP",
        reg: "registered",
        arrival: "23 Aug",
        stay: "Hôtel Le Morgane",
        coach: null,
        departure: "29 Aug",
        note: null
      }, {
        name: "Yuto Nakamura",
        tier: "Elite",
        cc: "jp",
        country: "JPN",
        reg: "considering",
        arrival: null,
        stay: null,
        coach: "Assigned",
        departure: null,
        note: "Awaiting sponsor confirmation on travel — decision expected by 20 Jul."
      }]
    }, {
      code: "ccc",
      km: "100",
      dplus: "6 100",
      entered: 4,
      athletes: [{
        name: "Anaïs Roussel",
        tier: "Elite",
        cc: "fr",
        country: "FRA",
        reg: "registered",
        arrival: "24 Aug",
        stay: "Team chalet",
        coach: "Assigned",
        departure: "28 Aug",
        note: null
      }, {
        name: "Hannah Keller",
        tier: null,
        cc: "ch",
        country: "SUI",
        reg: "needs_bib",
        arrival: "24 Aug",
        stay: "Team chalet",
        coach: null,
        departure: "28 Aug",
        note: null
      }]
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/app/icons.js
try { (() => {
/* Toli icon set — Lucide-style line icons (2px stroke, round caps/joins).
   Exposed as window.Icons for the UI kit's Babel scripts.
   Production: use the `lucide` / `lucide-react` package; these mirror it. */
(function () {
  const React = window.React;
  const h = React.createElement;
  function Svg(props, children) {
    return h("svg", Object.assign({
      width: props.size || 22,
      height: props.size || 22,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: props.sw || 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: props.style
    }, props.rest || {}), children);
  }
  const I = {
    list: (p = {}) => Svg(p, [h("line", {
      key: 1,
      x1: 8,
      y1: 6,
      x2: 21,
      y2: 6
    }), h("line", {
      key: 2,
      x1: 8,
      y1: 12,
      x2: 21,
      y2: 12
    }), h("line", {
      key: 3,
      x1: 8,
      y1: 18,
      x2: 21,
      y2: 18
    }), h("circle", {
      key: 4,
      cx: 3.5,
      cy: 6,
      r: 1
    }), h("circle", {
      key: 5,
      cx: 3.5,
      cy: 12,
      r: 1
    }), h("circle", {
      key: 6,
      cx: 3.5,
      cy: 18,
      r: 1
    })]),
    calendar: (p = {}) => Svg(p, [h("rect", {
      key: 1,
      x: 3,
      y: 4,
      width: 18,
      height: 18,
      rx: 2
    }), h("line", {
      key: 2,
      x1: 3,
      y1: 9,
      x2: 21,
      y2: 9
    }), h("line", {
      key: 3,
      x1: 8,
      y1: 2,
      x2: 8,
      y2: 6
    }), h("line", {
      key: 4,
      x1: 16,
      y1: 2,
      x2: 16,
      y2: 6
    })]),
    chart: (p = {}) => Svg(p, [h("line", {
      key: 1,
      x1: 4,
      y1: 20,
      x2: 4,
      y2: 12
    }), h("line", {
      key: 2,
      x1: 10,
      y1: 20,
      x2: 10,
      y2: 4
    }), h("line", {
      key: 3,
      x1: 16,
      y1: 20,
      x2: 16,
      y2: 9
    }), h("line", {
      key: 4,
      x1: 22,
      y1: 20,
      x2: 22,
      y2: 14
    })]),
    message: (p = {}) => Svg(p, [h("path", {
      key: 1,
      d: "M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.7-.85L3 21l1.85-5.55A8.5 8.5 0 1 1 21 11.5z"
    })]),
    search: (p = {}) => Svg(p, [h("circle", {
      key: 1,
      cx: 11,
      cy: 11,
      r: 7
    }), h("line", {
      key: 2,
      x1: 21,
      y1: 21,
      x2: 16.65,
      y2: 16.65
    })]),
    share: (p = {}) => Svg(p, [h("circle", {
      key: 1,
      cx: 18,
      cy: 5,
      r: 3
    }), h("circle", {
      key: 2,
      cx: 6,
      cy: 12,
      r: 3
    }), h("circle", {
      key: 3,
      cx: 18,
      cy: 19,
      r: 3
    }), h("line", {
      key: 4,
      x1: 8.6,
      y1: 13.5,
      x2: 15.4,
      y2: 17.5
    }), h("line", {
      key: 5,
      x1: 15.4,
      y1: 6.5,
      x2: 8.6,
      y2: 10.5
    })]),
    external: (p = {}) => Svg(p, [h("path", {
      key: 1,
      d: "M15 3h6v6"
    }), h("path", {
      key: 2,
      d: "M10 14 21 3"
    }), h("path", {
      key: 3,
      d: "M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"
    })]),
    more: (p = {}) => Svg(p, [h("circle", {
      key: 1,
      cx: 5,
      cy: 12,
      r: 1.6,
      fill: "currentColor",
      stroke: "none"
    }), h("circle", {
      key: 2,
      cx: 12,
      cy: 12,
      r: 1.6,
      fill: "currentColor",
      stroke: "none"
    }), h("circle", {
      key: 3,
      cx: 19,
      cy: 12,
      r: 1.6,
      fill: "currentColor",
      stroke: "none"
    })]),
    plus: (p = {}) => Svg(p, [h("line", {
      key: 1,
      x1: 12,
      y1: 5,
      x2: 12,
      y2: 19
    }), h("line", {
      key: 2,
      x1: 5,
      y1: 12,
      x2: 19,
      y2: 12
    })]),
    sun: (p = {}) => Svg(p, [h("circle", {
      key: 1,
      cx: 12,
      cy: 12,
      r: 4
    }), h("path", {
      key: 2,
      d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
    })]),
    moon: (p = {}) => Svg(p, [h("path", {
      key: 1,
      d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
    })])
  };
  window.Icons = I;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/icons.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.InlineField = __ds_scope.InlineField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.RegistrationPill = __ds_scope.RegistrationPill;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Tag = __ds_scope.Tag;

})();
