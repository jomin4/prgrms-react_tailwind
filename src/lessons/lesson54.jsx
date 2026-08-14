import { useState, useRef } from 'react'

export const meta = {
  id: 54,
  title: 'todo.done + 체크박스 토글',
  subtitle: '완료 여부를 done으로 관리하고 체크박스로 토글',
  concepts: [
    '각 할일에 done(기본 false) 속성을 추가한다',
    'toggleDone(id): map으로 해당 id의 done만 뒤집는다(!todo.done)',
    'done이 true면 본문을 <s>로 감싸 취소선 표시',
    '제어 컴포넌트: checkbox는 checked와 onChange를 함께 준다',
  ],
}

function useTodos() {
  const [todos, setTodos] = useState([
    { id: 1, content: '리액트 복습하기', done: false },
    { id: 2, content: '운동하기', done: true },
    { id: 3, content: '장보기', done: false },
  ])
  const lastId = useRef(3)

  const addTodo = (content) => {
    const id = ++lastId.current
    setTodos([...todos, { id, content, done: false }])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // 해당 id의 done만 반전시킨 새 객체로 교체
  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    )
  }

  return { todos, addTodo, deleteTodo, toggleDone }
}

function TodoListItem({ todo, onToggle }) {
  return (
    <li className="flex items-center gap-2 rounded bg-gray-50 px-3 py-2 text-sm">
      {/* 제어 컴포넌트: checked(상태) + onChange(변경) 함께 */}
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

  return (
    <div>
      <p className="mb-3 text-xs text-gray-500">
        체크박스를 누르면 done이 토글되고, 완료된 할일은 취소선으로 표시됩니다.
      </p>
      <ul className="space-y-1">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onToggle={toggleDone} />
        ))}
      </ul>
    </div>
  )
}
