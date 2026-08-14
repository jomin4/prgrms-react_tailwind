import { NavLink } from 'react-router-dom'
import { groupedLessons, lessons } from '../lessons/registry.js'

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 overflow-y-auto border-r border-gray-200 bg-white">
      <div className="border-b border-gray-100 px-5 py-4">
        <NavLink to="/" className="block">
          <h1 className="text-lg font-bold text-gray-900">
            프론트 기초 복습
          </h1>
          <p className="mt-0.5 text-xs text-gray-500">
            리액트 · 테일윈드 · 전체 {lessons.length}강
          </p>
        </NavLink>
      </div>

      <nav className="px-3 py-4">
        {groupedLessons.map((group) => (
          <section key={group.key} className="mb-5">
            <h2 className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
              {group.title}
            </h2>
            <ul>
              {group.items.map((lesson) => (
                <li key={lesson.id}>
                  <NavLink
                    to={`/lesson/${lesson.id}`}
                    className={({ isActive }) =>
                      [
                        'flex items-start gap-2 rounded-md px-2 py-1.5 text-sm transition-colors',
                        isActive
                          ? 'bg-blue-50 font-medium text-blue-700'
                          : 'text-gray-600 hover:bg-gray-50',
                      ].join(' ')
                    }
                  >
                    <span className="shrink-0 tabular-nums text-gray-400">
                      {lesson.id}강
                    </span>
                    <span className="leading-snug">{lesson.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
    </aside>
  )
}
