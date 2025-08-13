import { useState, useEffect } from 'react'

export default function ArticleForm({ initial = {}, onSubmit, submitting }) {
  const [title, setTitle] = useState(initial.title || '')
  const [description, setDescription] = useState(initial.description || '')
  const [markdown, setMarkdown] = useState(initial.markdown || '')

  useEffect(() => {
    if (initial && Object.keys(initial).length > 0) {
      setTitle(initial.title || '')
      setDescription(initial.description || '')
      setMarkdown(initial.markdown || '')
    }
  }, [initial])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.({ title, description, markdown })
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-4">
      <div>
        <label className="block text-sm mb-1" style={{ color: 'var(--muted)' }}>Title</label>
        <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Awesome post title" />
      </div>
      <div>
        <label className="block text-sm mb-1" style={{ color: 'var(--muted)' }}>Description</label>
        <input className="input" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short summary" />
      </div>
      <div>
        <label className="block text-sm mb-1" style={{ color: 'var(--muted)' }}>Markdown</label>
        <textarea className="input h-48" value={markdown} onChange={(e) => setMarkdown(e.target.value)} placeholder="Write in Markdown..." />
      </div>
      <button disabled={submitting} className="btn disabled:opacity-60">
        {submitting ? 'Saving...' : 'Save'}
      </button>
    </form>
  )
}
