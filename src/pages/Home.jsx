import { Link } from 'react-router-dom'
import { groupedLessons, lessons } from '../lessons/registry.js'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">
        프론트 기초 (리액트 · 테일윈드) 복습 노트
      </h1>
      <p className="mt-3 text-gray-600">
        slog.gg 강의(장희성)를 기반으로 전체 {lessons.length}강을 실습 코드로
        재구성했습니다. 왼쪽 목록 또는 아래 섹션에서 강의를 선택해 라이브 데모와
        핵심 코드를 복습하세요.
      </p>

      <div className="mt-8 space-y-8">
        {groupedLessons.map((group) => (
          <section key={group.key}>
            <h2 className="mb-3 border-b border-gray-200 pb-1 text-lg font-semibold text-gray-800">
              {group.title}
              <span className="ml-2 text-sm font-normal text-gray-400">
                {group.range[0]}–{group.range[1]}강
              </span>
            </h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {group.items.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/lesson/${lesson.id}`}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-3 transition-colors hover:border-blue-300 hover:bg-blue-50"
                >
                  <div className="text-xs font-semibold text-blue-600">
                    {lesson.id}강
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-gray-800">
                    {lesson.title}
                  </div>
                  {lesson.subtitle && (
                    <div className="mt-0.5 line-clamp-2 text-xs text-gray-500">
                      {lesson.subtitle}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
