import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api.js'
import ArticleForm from '../components/ArticleForm.jsx'

export default function NewArticle() {
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  const create = async (data) => {
    setSubmitting(true)
    try {
      const res = await api.post('/articles', data)
      navigate(`/a/${res.data.slug}`)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="container py-6 space-y-6">
      <h1 className="text-2xl font-semibold">Write a new article</h1>
      <ArticleForm onSubmit={create} submitting={submitting} />
    </section>
  )
}
