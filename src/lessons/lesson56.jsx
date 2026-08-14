import { useState, useRef } from 'react'

export const meta = {
  id: 56,
  title: 'select value 속성 + filteredTodos',
  subtitle: 'select를 value로 제어하고, 훅이 filteredTodos를 노출한다',
  concepts: [
    '제어 컴포넌트: select에 value={filterDoneCode}를 줘 상태가 곧 화면 값',
    '비제어 컴포넌트: value 없이 DOM이 값을 스스로 관리(리액트가 모름)',
    'useTodos가 필터 상태와 filteredTodos(걸러진 목록)까지 책임진다',
  ],
}

// 필터 상태와 계산된 목록까지 훅이 모두 노출
function useTodos() {
  const [todos, setTodos] = useState([
    { id: 1, content: '리액트 복습하기', done: false },
    { id: 2, content: '운동하기', done: true },
    { id: 3, content: '장보기', done: false },
    { id: 4, content: '청소하기', done: true },
  ])
  const lastId = useRef(4)
  const [filterDoneCode, setFilterDoneCode] = useState('all')

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

  // 현재 필터에 맞게 걸러낸 목록. 컴포넌트는 이걸 그대로 그리기만 하면 된다.
  const filteredTodos = todos.filter((todo) => {
    if (filterDoneCode === 'done') return todo.done
    if (filterDoneCode === 'notDone') return !todo.done
    return true
  })

  return {
    filteredTodos,
    addTodo,
    toggleDone,
    filterDoneCode,
    setFilterDoneCode,
  }
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
  const { filteredTodos, toggleDone, filterDoneCode, setFilterDoneCode } =
    useTodos()

  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <label className="text-sm text-gray-600">필터:</label>
        {/* 제어 컴포넌트: value가 상태에 묶여 있어 상태 = 화면 값 */}
        <select
          value={filterDoneCode}
          onChange={(e) => setFilterDoneCode(e.target.value)}
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
