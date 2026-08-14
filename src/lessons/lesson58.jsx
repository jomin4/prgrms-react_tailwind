import { useState, useRef } from 'react'

export const meta = {
  id: 58,
  title: '수정 폼 (prompt 대신), 모드 스위칭',
  subtitle: '각 항목이 수정모드 상태를 가지고 텍스트 ↔ 수정폼을 전환',
  concepts: [
    'prompt()는 못생기고 스타일링도 불가 → 인라인 수정 폼으로 대체',
    '각 TodoListItem이 자신의 modifyMode(true/false) 상태를 가진다',
    '수정모드면 input을, 아니면 텍스트를 보여준다(조건부 렌더링)',
    '버튼 라벨도 모드에 따라 "수정" ↔ "수정취소"로 바뀐다',
  ],
}

function useTodos() {
  const [todos, setTodos] = useState([
    { id: 1, content: '리액트 복습' },
    { id: 2, content: '테일윈드 정리' },
  ])
  const lastId = useRef(2)

  const addTodo = (content) => {
    const id = ++lastId.current
    setTodos([...todos, { id, content }])
  }

  return { todos, addTodo }
}

// 각 항목이 스스로 modifyMode 상태를 관리한다.
function TodoListItem({ todo }) {
  const [modifyMode, setModifyMode] = useState(false)

  return (
    <li className="flex items-center gap-2 rounded bg-gray-50 px-3 py-2 text-sm">
      {/* 수정모드일 때만 input, 아니면 텍스트 */}
      {modifyMode ? (
        <input
          type="text"
          defaultValue={todo.content}
          autoComplete="off"
          className="flex-1 rounded border border-gray-300 px-2 py-1"
        />
      ) : (
        <span className="flex-1">{todo.content}</span>
      )}

      <button
        type="button"
        onClick={() => setModifyMode(!modifyMode)}
        className="rounded bg-amber-500 px-2 py-1 text-xs text-white hover:bg-amber-600"
      >
        {/* 모드에 따라 라벨 변경 */}
        {modifyMode ? '수정취소' : '수정'}
      </button>
    </li>
  )
}

export default function Lesson() {
  const { todos, addTodo } = useTodos()

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
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>

      <p className="mt-3 text-xs text-gray-400">
        "수정"을 누르면 그 항목만 수정폼으로 바뀐다(각자 상태를 가짐)
      </p>
    </div>
  )
}
