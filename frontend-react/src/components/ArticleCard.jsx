import { Link } from 'react-router-dom'

export default function ArticleCard({ article, onDelete }) {
  return (
    <article className="card hover:shadow-md">
      <div className="p-5">
        <h3 className="text-lg font-semibold line-clamp-1">{article.title}</h3>
        <p className="text-sm mt-2 line-clamp-2" style={{ color: 'var(--muted)' }}>
          {article.description}
        </p>
      </div>
      <div className="flex justify-between items-center border-t px-5 py-3 text-sm" style={{ borderColor: 'var(--border)' }}>
        <Link to={`/a/${article.slug}`} style={{ color: 'var(--primary)' }}>Read</Link>
        <div className="flex gap-3">
          <Link to={`/edit/${article._id}`} style={{ color: 'var(--primary)' }}>Edit</Link>
          <button onClick={() => onDelete?.(article._id)} style={{ color: 'var(--primary)' }}>Delete</button>
        </div>
      </div>
    </article>
  )
}
