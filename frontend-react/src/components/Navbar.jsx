import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <header className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold" style={{ color: 'var(--primary)' }}>
          BLOG WEBSITE
        </Link>
        <div className="flex items-center gap-4">
          <NavLink to="/" className="hover:underline" style={{ color: 'var(--text)' }}>Home</NavLink>
          <NavLink to="/new" className="hover:underline" style={{ color: 'var(--text)' }}>Write</NavLink>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
