import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard.jsx'
import { api } from '../services/api.js'

export default function Home() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const load = async () => {
    setLoading(true)
    const res = await api.get('/articles', { params: { search } })
    setItems(res.data.items || [])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const handleDelete = async (id) => {
    if (!confirm('Delete this article?')) return
    await api.delete(`/articles/${id}`)
    load()
  }

  return (
    <section className="container py-6 space-y-6">
      <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
        <h1 className="text-2xl font-semibold">Latest Articles</h1>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <input value={search} onChange={e=>setSearch(e.target.value)} className="border rounded-lg px-3 py-2 w-full sm:w-72" placeholder="Search..." />
          <button onClick={load} className="border rounded-xl px-4 py-2">Go</button>
          <Link to="/new" className="rounded-xl px-4 py-2 border bg-black text-white">Write</Link>
        </div>
      </div>

      {loading ? <p>Loading...</p> : (
        items.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((a) => <ArticleCard key={a._id} article={a} onDelete={handleDelete} />)}
          </div>
        ) : <p className="text-gray-600">No articles yet.</p>
      )}
    </section>
  )
}
