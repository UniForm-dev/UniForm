import { z } from 'zod'
import { introspectObjectSchema } from '@uniform/core'

const userSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  age: z.number().optional(),
  role: z.enum(['admin', 'editor', 'viewer']),
  address: z.object({
    street: z.string(),
    city: z.string(),
    zip: z.string(),
  }),
})

const fields = introspectObjectSchema(userSchema)

export default function App() {
  return (
    <main style={{ fontFamily: 'monospace', padding: '2rem', maxWidth: 800 }}>
      <h1>UniForm Playground — Phase 1</h1>
      <p>Introspected schema fields:</p>
      <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: 4, overflow: 'auto' }}>
        {JSON.stringify(fields, null, 2)}
      </pre>
    </main>
  )
}
