import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * ds-compat: makes the Claude Design _ds_bundle.js work with Vite/Rollup.
 *
 * The bundle is a plain IIFE that:
 *  1. Uses bare `React.createElement` — expects React in scope.
 *  2. Has an inner icons IIFE that does `const React = window.React` — we
 *     comment that out so it falls back to the module-level React import.
 *  3. Sets window.ToliDesignSystem_948a83 — works in browser (window exists)
 *     and in Node SSR (where we polyfill window = globalThis before the import).
 */
function dsCompat() {
  return {
    name: 'ds-compat',
    transform(code, id) {
      if (!id.includes('_ds_bundle.js')) return null
      // Inject React import so bare `React.createElement` calls in the IIFE
      // resolve to the module-scoped React binding.
      const patched = code.replace(
        'const React = window.React;',
        '/* React is available from the module-level import below */'
      )
      return `import React from 'react';\n${patched}`
    },
  }
}

export default defineConfig({
  plugins: [react(), dsCompat()],
  build: {
    // Ensure the client build outputs to dist/
    outDir: 'dist',
  },
})
