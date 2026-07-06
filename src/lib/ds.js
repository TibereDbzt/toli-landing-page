/**
 * Thin wrapper around the Claude Design DS bundle.
 *
 * The bundle (_ds_bundle.js) is an IIFE that:
 *   - Uses bare `React.createElement` — handled by the ds-compat Vite plugin,
 *     which injects `import React from 'react'` at the top of the bundle so
 *     the IIFE closes over the correct React binding.
 *   - Sets window.ToliDesignSystem_948a83 — in browser, window exists; in Node
 *     (SSR prerender), window is polyfilled to globalThis before this import.
 *
 * The side-effect import below runs the IIFE, which populates
 * globalThis.ToliDesignSystem_948a83 in both environments.
 */
import '../../_ds/toli-design-system-948a837a-9620-4579-bf2e-8c86baf8943c/_ds_bundle.js'

const _ns = (typeof window !== 'undefined' ? window : globalThis).ToliDesignSystem_948a83 || {}

export const {
  Button,
  IconButton,
  Avatar,
  Metric,
  StatCard,
  FilterChip,
  InlineField,
  Input,
  Tabs,
  RegistrationPill,
  StatusDot,
  Tag,
} = _ns
