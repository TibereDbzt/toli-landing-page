/**
 * Pre-render script: generates a fully-rendered dist/index.html for SEO.
 *
 * Key: polyfills for window/React must be set synchronously BEFORE the
 * dynamic import of the SSR bundle, because dynamic imports resolve after
 * the current synchronous code runs. Static imports are hoisted and would
 * bypass this setup — hence the pattern below.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

// ── 1. Polyfill browser globals for the DS bundle's IIFE ──────────────────
globalThis.window = globalThis
const noop = () => {}
const makeEl = () => ({
  setAttribute: noop, getAttribute: () => null, removeAttribute: noop,
  addEventListener: noop, removeEventListener: noop,
  appendChild: noop, childNodes: [], style: {}, tagName: 'DIV',
})
globalThis.document = {
  createElement: makeEl,
  createTextNode: () => ({}),
  head: { appendChild: noop, childNodes: [] },
  body: makeEl(),
  querySelector: () => null,
  querySelectorAll: () => [],
}
// navigator and location are read-only getters on globalThis in Node 22
// — must use Object.defineProperty to override them
Object.defineProperty(globalThis, 'navigator', {
  value: { userAgent: 'node' },
  writable: true,
  configurable: true,
})
Object.defineProperty(globalThis, 'location', {
  value: { href: 'https://toli.run/' },
  writable: true,
  configurable: true,
})
globalThis.ResizeObserver = class ResizeObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

// ── 2. Set React as a global (DS bundle uses window.React in one place) ───
const { default: React } = await import('react')
globalThis.React = React
globalThis.ReactDOM = (await import('react-dom')).default

// ── 3. Import the SSR render function (window + React are now available) ──
const ssrBundle = path.resolve(root, 'dist-ssr', 'entry-server.js')
const { render } = await import(ssrBundle)

// ── 4. Render the app to an HTML string ───────────────────────────────────
const appHtml = render()

// ── 5. Read the Vite client build template ────────────────────────────────
const templatePath = path.resolve(root, 'dist', 'index.html')
const template = fs.readFileSync(templatePath, 'utf-8')

// ── 6. Inject the pre-rendered HTML into the template ─────────────────────
const html = template.replace('<!--app-html-->', appHtml)

// ── 7. Write the final pre-rendered HTML ──────────────────────────────────
fs.writeFileSync(templatePath, html)
console.log('✓ Pre-rendering complete → dist/index.html')
