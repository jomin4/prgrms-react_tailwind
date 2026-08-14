import { useState, useRef } from 'react'

export const meta = {
  id: 51,
  title: '할일 삭제 기능',
  subtitle: 'filter로 특정 id만 걸러내 새 배열을 만든다',
  concepts: [
    'deleteTodo(id): todos.filter로 해당 id를 제외한 새 배열을 만든다',
    'filter는 원본을 바꾸지 않고 새 배열을 반환한다(불변성 유지)',
    '삭제 버튼(x)은 각 할일 항목(TodoListItem)에 둔다',
  ],
}

function useTodos() {
  const [todos, setTodos] = useState([])
  const lastId = useRef(0)

  const addTodo = (content) => {
    const id = ++lastId.current
    setTodos([...todos, { id, content }])
  }

  // id가 일치하지 않는 것만 남겨 새 배열 생성 → 해당 할일 삭제
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return { todos, addTodo, deleteTodo }
}

function TodoWriteForm({ onAdd }) {
  const onSubmit = (e) => {
    e.preventDefault()
    const input = e.target.content
    const content = input.value.trim()
    if (content.length === 0) return
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

// 개별 항목: 삭제 버튼 포함
function TodoListItem({ todo, onDelete }) {
  return (
    <li className="flex items-center justify-between rounded bg-gray-50 px-3 py-2 text-sm">
      <span>{todo.content}</span>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-2 rounded px-2 text-gray-400 hover:bg-red-100 hover:text-red-500"
        aria-label="삭제"
      >
        x
      </button>
    </li>
  )
}

function TodoList({ todos, onDelete }) {
  return (
    <ul className="mt-4 space-y-1">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default function Lesson() {
  const { todos, addTodo, deleteTodo } = useTodos()

  return (
    <div>
      <TodoWriteForm onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  )
}
