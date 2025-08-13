import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container py-16 text-center space-y-4">
      <h1 className="text-3xl font-semibold">404</h1>
      <p>Page not found.</p>
      <Link to="/" className="underline">Go home</Link>
    </section>
  )
}
