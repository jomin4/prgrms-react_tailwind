import { useState, useRef } from 'react'

export const meta = {
  id: 48,
  title: '컴포넌트화 + useTodos 커스텀 훅',
  subtitle: '할일 로직을 커스텀 훅으로, UI를 서브컴포넌트로 분리',
  concepts: [
    '커스텀 훅: 이름이 use로 시작하는 함수(use 접두사 규칙)',
    '커스텀 훅 안에서 useState 같은 다른 훅을 자유롭게 사용할 수 있다',
    '로직(상태/함수)을 훅으로 빼면 컴포넌트는 UI에만 집중한다',
    'UI는 TodoWriteForm / TodoList 같은 서브컴포넌트로 쪼갠다',
  ],
}

// 커스텀 훅: 할일 관련 상태와 로직을 한 곳에 모은다.
// use로 시작해야 리액트가 훅으로 인식한다(내부에서 useState/useRef 사용 가능).
function useTodos() {
  const [todos, setTodos] = useState([])
  const lastId = useRef(0)

  const addTodo = (content) => {
    const id = ++lastId.current
    setTodos([...todos, { id, content }]) // 불변성: 새 배열 생성
  }

  return { todos, addTodo }
}

// UI 서브컴포넌트: 입력 폼
function TodoWriteForm({ onAdd }) {
  const onSubmit = (e) => {
    e.preventDefault()
    const input = e.target.content
    const content = input.value.trim()
    if (content.length === 0) {
      input.focus()
      return
    }
    onAdd(content)
    input.value = ''
    input.focus()
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input
        name="content"
        type="text"
        autoComplete="off"
        placeholder="할일을 입력하세요"
        className="flex-1 rounded border border-gray-300 px-3 py-2"
      />
      <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        추가
      </button>
    </form>
  )
}

// UI 서브컴포넌트: 목록
function TodoList({ todos }) {
  return (
    <ul className="mt-4 space-y-1">
      {todos.map((todo) => (
        <li key={todo.id} className="rounded bg-gray-50 px-3 py-2 text-sm">
          {todo.id} : {todo.content}
        </li>
      ))}
    </ul>
  )
}

export default function Lesson() {
  // 컴포넌트는 훅에서 필요한 것만 꺼내 UI 조립에 집중
  const { todos, addTodo } = useTodos()

  return (
    <div>
      <TodoWriteForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  )
}
