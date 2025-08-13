import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../services/api.js'
import ArticleForm from '../components/ArticleForm.jsx'

export default function EditArticle() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(`/articles/id/${id}`)
        setArticle(res.data)
      } catch (err) {
        console.error('Failed to load article:', err)
      }
    })()
  }, [id])

  const update = async (data) => {
    setSubmitting(true)
    try {
      const res = await api.put(`/articles/${id}`, data)
      navigate(`/a/${res.data.slug}`)
    } finally {
      setSubmitting(false)
    }
  }

  if (!article) return <section className="container py-6">Loading...</section>

  return (
    <section className="container py-6 space-y-6">
      <h1 className="text-2xl font-semibold">Edit article</h1>
      <ArticleForm initial={article} onSubmit={update} submitting={submitting} />
    </section>
  )
}
