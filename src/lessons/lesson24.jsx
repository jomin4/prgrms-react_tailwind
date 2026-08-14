import { useState } from 'react'

export const meta = {
  id: 24,
  title: '할일 리스트 삭제기능',
  subtitle: 'TodoItem 분리 + addTodo/removeTodo 함수로 추가와 삭제를 완성한다',
  concepts: [
    '반복되는 항목을 TodoItem 컴포넌트로 분리한다',
    'addTodo / removeTodo 같은 비즈니스 함수로 로직을 정리한다',
    '삭제는 filter로 해당 id를 제외한 새 배열을 만든다',
    '고유 id를 부여하면 항목을 안정적으로 구분·삭제할 수 있다',
  ],
}

// 개별 할일 항목 컴포넌트 (삭제 버튼 포함)
function TodoItem({ todo, onRemove }) {
  return (
    <li className="flex items-center justify-between rounded border border-gray-200 px-3 py-2 text-gray-700">
      <span>{todo.text}</span>
      <button
        onClick={() => onRemove(todo.id)}
        className="rounded px-2 text-red-500 hover:bg-red-50"
      >
        ✕
      </button>
    </li>
  )
}

export default function Lesson() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 복습' },
    { id: 2, text: '테일윈드 연습' },
  ])
  const [input, setInput] = useState('')

  // 비즈니스 함수: 추가
  const addTodo = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (text === '') return
    const nextId = Date.now() // 간단한 고유 id
    setTodos([...todos, { id: nextId, text }])
    setInput('')
  }

  // 비즈니스 함수: 삭제 (해당 id 제외)
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div>
      <form onSubmit={addTodo} className="mb-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할일을 입력하세요"
          className="flex-1 rounded border border-gray-300 px-3 py-2"
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          추가
        </button>
      </form>

      {todos.length === 0 ? (
        <p className="text-sm text-gray-400">할일이 없습니다.</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onRemove={removeTodo} />
          ))}
        </ul>
      )}
    </div>
  )
}
