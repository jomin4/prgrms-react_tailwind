import { useState, useRef } from 'react'

export const meta = {
  id: 47,
  title: '다시 리액트: 할일 추가, useRef',
  subtitle: '할일을 {id, content} 객체로 관리하고, id 발급기는 useRef로',
  concepts: [
    '할일은 { id, content } 객체 배열로 관리한다',
    'id가 중복되지 않도록 마지막 id를 계속 기억해야 한다',
    '기억유지 + UI노출O → useState / 기억유지 + UI노출X → useRef',
    'lastId는 화면에 안 나오는 값이므로 useRef(ref.current로 접근)가 적합',
    'ref.current 값 변경은 리렌더링을 유발하지 않는다',
  ],
}

export default function Lesson() {
  const [todos, setTodos] = useState([])
  const lastId = useRef(0)

  const addTodo = (content) => {
    const id = ++lastId.current
    setTodos([...todos, { id, content }])
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const input = e.target.content
    const content = input.value.trim()
    if (content.length === 0) {
      input.focus()
      return
    }
    addTodo(content)
    input.value = ''
    input.focus()
  }

  return (
    <div>
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

      <ul className="mt-4 space-y-1">
        {todos.map((todo) => (
          <li key={todo.id} className="rounded bg-gray-50 px-3 py-2 text-sm">
            {todo.id} : {todo.content}
          </li>
        ))}
      </ul>

      <p className="mt-3 text-xs text-gray-400">
        현재 상태: {JSON.stringify(todos)}
      </p>
    </div>
  )
}
