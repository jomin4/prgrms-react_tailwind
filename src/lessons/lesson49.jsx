import { useState, useRef } from 'react'

export const meta = {
  id: 49,
  title: '리액트는 UI를 재생성한다',
  subtitle: '상태가 바뀌면 화면을 고치는 게 아니라 새로 그린다',
  concepts: [
    '자동차 타이어 비유: 펑크난 타이어를 때우는 게 아니라 새 타이어로 교체',
    '리액트는 상태가 바뀔 때마다 컴포넌트 함수를 다시 실행해 UI를 새로 만든다',
    '우리는 "어떻게 고칠지"가 아니라 "이 상태면 어떤 UI인지"만 작성하면 된다',
    '즉 UI 생성 로직(상태 → 화면)만 선언하면 된다',
  ],
}

function useTodos() {
  const [todos, setTodos] = useState([])
  const lastId = useRef(0)

  const addTodo = (content) => {
    const id = ++lastId.current
    setTodos([...todos, { id, content }])
  }

  return { todos, addTodo }
}

export default function Lesson() {
  const { todos, addTodo } = useTodos()
  // 렌더 횟수를 세어 "목록 전체가 새로 그려짐"을 눈으로 확인
  const renderCount = useRef(0)
  renderCount.current += 1

  const onSubmit = (e) => {
    e.preventDefault()
    const input = e.target.content
    const content = input.value.trim()
    if (content.length === 0) return
    addTodo(content)
    input.value = ''
    input.focus()
  }

  return (
    <div>
      <p className="mb-3 text-xs text-gray-500">
        컴포넌트 렌더 횟수:{' '}
        <span className="font-bold text-blue-600">{renderCount.current}</span>{' '}
        (할일을 추가할 때마다 함수가 다시 실행되어 목록 전체를 새로 그린다)
      </p>

      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          name="content"
          type="text"
          autoComplete="off"
          placeholder="할일 추가"
          className="flex-1 rounded border border-gray-300 px-3 py-2"
        />
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          추가
        </button>
      </form>

      <ul className="mt-4 space-y-1">
        {todos.map((todo) => (
          <li key={todo.id} className="rounded bg-gray-50 px-3 py-2 text-sm">
            {todo.content}
          </li>
        ))}
      </ul>
    </div>
  )
}
