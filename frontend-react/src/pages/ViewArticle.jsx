import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { api } from '../services/api.js'
import { marked } from 'marked'

export default function ViewArticle() {
  const { slug } = useParams()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    (async () => {
      const res = await api.get(`/articles/slug/${slug}`)
      setArticle(res.data)
    })()
  }, [slug])

  if (!article) return <section className="container py-6">Loading...</section>

  return (
    <article className="container py-6 space-y-4">
      <Link to="/" className="underline text-sm">&larr; Back</Link>
      <h1 className="text-3xl font-semibold">{article.title}</h1>
      <p className="text-gray-600">{new Date(article.createdAt).toLocaleString()}</p>
      <p className="text-lg">{article.description}</p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.sanitizedHTML || marked(article.markdown || '') }} />
    </article>
  )
}
