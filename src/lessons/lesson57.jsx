import { useState } from 'react'

export const meta = {
  id: 57,
  title: '배열보다 객체로 옵션 구성',
  subtitle: '필터 옵션을 하드코딩 대신 객체로 관리하고 Object.entries로 순회',
  concepts: [
    '반복되는 select option을 JSX에 하드코딩하면 유지보수가 어렵다',
    '옵션을 데이터(객체)로 분리하면 추가/수정이 한 곳에서 끝난다',
    '{ 값: 라벨 } 형태 객체 → Object.entries로 [key, value] 배열로 순회',
    '배열 옵션 vs 객체 옵션: 객체는 값↔라벨 매핑을 명확히 표현한다',
  ],
}

// 필터 옵션을 "데이터"로 분리한다.
// key = select의 value(내부 값), value = 사용자에게 보일 라벨
const filterDoneOptions = {
  all: '전체',
  todo: '해야할 일',
  done: '완료한 일',
}

const initialTodos = [
  { id: 1, content: '리액트 복습', done: false },
  { id: 2, content: '테일윈드 정리', done: true },
  { id: 3, content: '할일앱 마무리', done: false },
]

export default function Lesson() {
  const [filter, setFilter] = useState('all')

  // 필터 값에 따라 목록을 걸러낸다(불변성: filter는 새 배열 반환)
  const filteredTodos = initialTodos.filter((todo) => {
    if (filter === 'todo') return !todo.done
    if (filter === 'done') return todo.done
    return true // all
  })

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <label className="text-sm text-gray-600">필터</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded border border-gray-300 px-3 py-2 text-sm"
        >
          {/* 하드코딩 대신 객체를 Object.entries로 순회해 option 생성 */}
          {Object.entries(filterDoneOptions).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <ul className="space-y-1">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-2 rounded bg-gray-50 px-3 py-2 text-sm"
          >
            <span
              className={
                todo.done ? 'text-gray-400 line-through' : 'text-gray-800'
              }
            >
              {todo.content}
            </span>
            {todo.done && (
              <span className="text-xs text-green-600">완료</span>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-3 text-xs text-gray-400">
        옵션 객체: {JSON.stringify(filterDoneOptions)}
      </p>
    </div>
  )
}
