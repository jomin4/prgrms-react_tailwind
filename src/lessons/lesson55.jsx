import { useState, useRef } from 'react'

export const meta = {
  id: 55,
  title: '완료/미완료 필터링 (select)',
  subtitle: 'select box로 all/done/notDone을 골라 목록에 필터 적용',
  concepts: [
    'filterDoneCode 상태로 현재 필터(all/done/notDone)를 기억한다',
    'select의 onChange로 e.target.value를 상태에 저장한다',
    '렌더 시 filterDoneCode에 맞춰 todos를 걸러 보여준다',
  ],
}

function useTodos() {
  const [todos, setTodos] = useState([
    { id: 1, content: '리액트 복습하기', done: false },
    { id: 2, content: '운동하기', done: true },
    { id: 3, content: '장보기', done: false },
    { id: 4, content: '청소하기', done: true },
  ])
  const lastId = useRef(4)

  const addTodo = (content) => {
    const id = ++lastId.current
    setTodos([...todos, { id, content, done: false }])
  }

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    )
  }

  return { todos, addTodo, toggleDone }
}

function TodoListItem({ todo, onToggle }) {
  return (
    <li className="flex items-center gap-2 rounded bg-gray-50 px-3 py-2 text-sm">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        className="h-4 w-4"
      />
      {todo.done ? (
        <s className="text-gray-400">{todo.content}</s>
      ) : (
        <span>{todo.content}</span>
      )}
    </li>
  )
}

export default function Lesson() {
  const { todos, toggleDone } = useTodos()
  const [filterDoneCode, setFilterDoneCode] = useState('all')

  const onFilterChange = (e) => {
    setFilterDoneCode(e.target.value)
  }

  // 현재 필터 코드에 맞게 목록을 걸러낸다
  const filteredTodos = todos.filter((todo) => {
    if (filterDoneCode === 'done') return todo.done
    if (filterDoneCode === 'notDone') return !todo.done
    return true // all
  })

  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <label className="text-sm text-gray-600">필터:</label>
        <select
          onChange={onFilterChange}
          className="rounded border border-gray-300 px-2 py-1 text-sm"
        >
          <option value="all">전체</option>
          <option value="done">완료</option>
          <option value="notDone">미완료</option>
        </select>
      </div>

      <ul className="space-y-1">
        {filteredTodos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onToggle={toggleDone} />
        ))}
      </ul>
    </div>
  )
}
