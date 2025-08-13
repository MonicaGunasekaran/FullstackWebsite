export default function Footer() {
  return (
    <footer className="border-t py-4 mt-8" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
      <div className="container text-center" style={{ color: 'var(--muted)' }}>
        &copy; {new Date().getFullYear()} MERN Articles — All rights reserved.
      </div>
    </footer>
  )
}
