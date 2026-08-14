import { useParams, Link } from 'react-router-dom'
import { getLesson, lessons } from '../lessons/registry.js'
import CodeBlock from '../components/CodeBlock.jsx'

export default function LessonPage() {
  const { id } = useParams()
  const lesson = getLesson(id)

  if (!lesson) {
    return (
      <div>
        <p className="text-gray-600">해당 강의를 찾을 수 없습니다.</p>
        <Link to="/" className="text-blue-600 underline">
          홈으로
        </Link>
      </div>
    )
  }

  const idx = lessons.findIndex((l) => l.id === lesson.id)
  const prev = lessons[idx - 1]
  const next = lessons[idx + 1]
  const Demo = lesson.Demo

  return (
    <article>
      <div className="text-sm font-semibold text-blue-600">{lesson.id}강</div>
      <h1 className="mt-1 text-2xl font-bold text-gray-900">{lesson.title}</h1>
      {lesson.subtitle && (
        <p className="mt-2 text-gray-600">{lesson.subtitle}</p>
      )}

      {lesson.concepts.length > 0 && (
        <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 px-5 py-4">
          <h2 className="mb-2 text-sm font-semibold text-amber-800">
            핵심 개념
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-amber-900">
            {lesson.concepts.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}

      {lesson.hasDemo && Demo && (
        <div className="mt-6">
          <h2 className="mb-2 text-sm font-semibold text-gray-500">
            라이브 데모
          </h2>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <Demo />
          </div>
        </div>
      )}

      <CodeBlock code={lesson.source} />

      <nav className="mt-10 flex items-center justify-between border-t border-gray-200 pt-4 text-sm">
        {prev ? (
          <Link to={`/lesson/${prev.id}`} className="text-blue-600 hover:underline">
            ← {prev.id}강 {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/lesson/${next.id}`} className="text-blue-600 hover:underline">
            {next.id}강 {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  )
}
