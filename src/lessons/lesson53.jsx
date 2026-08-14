import { useState, useRef } from 'react'

export const meta = {
  id: 53,
  title: '할일 수정 (prompt 사용)',
  subtitle: 'window.prompt로 새 내용을 입력받아 수정한다',
  concepts: [
    'window.prompt(메시지, 기본값)은 입력 문자열 또는 취소 시 null을 반환',
    'prompt가 null(취소)이면 수정하지 않고 그냥 반환',
    '수정 버튼 핸들러를 onModifyButtonClicked로 분리해 가독성 확보',
  ],
}

function useTodos() {
  const [todos, setTodos] = useState([
    { id: 1, content: '리액트 복습하기' },
    { id: 2, content: '운동하기' },
  ])
  const lastId = useRef(2)

  const addTodo = (content) => {
    const id = ++lastId.current
    setTodos([...todos, { id, content }])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const modifyTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, content: newContent } : todo,
      ),
    )
  }

  return { todos, addTodo, deleteTodo, modifyTodo }
}

function TodoListItem({ todo, onModify }) {
  // 핸들러 분리: prompt로 입력받고 취소면 중단
  const onModifyButtonClicked = () => {
    const newContent = window.prompt('수정할 내용을 입력하세요', todo.content)
    if (newContent === null) return // 취소
    const trimmed = newContent.trim()
    if (trimmed.length === 0) return // 빈 값도 무시
    onModify(todo.id, trimmed)
  }

  return (
    <li className="flex items-center justify-between rounded bg-gray-50 px-3 py-2 text-sm">
      <span>{todo.content}</span>
      <button
        onClick={onModifyButtonClicked}
        className="ml-2 rounded bg-yellow-400 px-2 py-1 text-xs text-white hover:bg-yellow-500"
      >
        수정
      </button>
    </li>
  )
}

export default function Lesson() {
  const { todos, modifyTodo } = useTodos()

  return (
    <div>
      <p className="mb-3 text-xs text-gray-500">
        '수정' 버튼을 누르면 prompt 창이 뜹니다. 취소하면 그대로 유지됩니다.
      </p>
      <ul className="space-y-1">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onModify={modifyTodo} />
        ))}
      </ul>
    </div>
  )
}
