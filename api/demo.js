import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Where demo requests land, and the verified sender on your domain.
const TO = 'hello@toli.run'
const FROM = 'Toli Demo Request <demo@toli.run>'

function esc(v = '') {
  return String(v).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]))
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Email service not configured' })
  }

  // Vercel parses JSON bodies automatically; fall back for safety.
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
  const { name = '', brand = '', role = '', roster = '', email = '' } = body

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid work email is required' })
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Demo request — ${name || 'Unknown'}${brand ? ` (${brand})` : ''}`,
      html: `
        <h2>New demo request</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
          <tr><td><strong>Name</strong></td><td>${esc(name)}</td></tr>
          <tr><td><strong>Brand / team</strong></td><td>${esc(brand)}</td></tr>
          <tr><td><strong>Role</strong></td><td>${esc(role)}</td></tr>
          <tr><td><strong>Roster size</strong></td><td>${esc(roster)}</td></tr>
          <tr><td><strong>Work email</strong></td><td>${esc(email)}</td></tr>
        </table>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(502).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Demo handler error:', err)
    return res.status(500).json({ error: 'Unexpected error' })
  }
}
