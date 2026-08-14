import { useState, useRef } from 'react'

export const meta = {
  id: 59,
  title: '수정 폼 구현 마무리',
  subtitle: 'TodoModifyForm으로 저장 시 modifyTodo 호출 후 수정모드 해제',
  concepts: [
    '수정 폼을 TodoModifyForm 컴포넌트로 분리해 책임을 나눈다',
    'modifyTodo(id, content): map으로 해당 항목만 교체(불변성 유지)',
    '저장하면 내용 수정 → setModifyMode(false)로 다시 텍스트 표시',
    '완성형 흐름: 수정 클릭 → 폼 편집 → 저장 → 목록 반영',
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

  // 해당 id만 새 content로 교체한 새 배열을 만든다(불변성)
  const modifyTodo = (id, content) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, content } : todo)))
  }

  return { todos, addTodo, modifyTodo }
}

// 수정 전용 폼: 저장 시 상위로 새 내용을 전달하고 모드를 닫는다.
function TodoModifyForm({ todo, onModify, onCancel }) {
  const onSubmit = (e) => {
    e.preventDefault()
    const content = e.target.content.value.trim()
    if (content.length === 0) return
    onModify(todo.id, content) // 실제 수정
    onCancel() // 수정모드 해제
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-1 gap-2">
      <input
        name="content"
        type="text"
        defaultValue={todo.content}
        autoComplete="off"
        className="flex-1 rounded border border-gray-300 px-2 py-1"
      />
      <button className="rounded bg-green-500 px-2 py-1 text-xs text-white hover:bg-green-600">
        저장
      </button>
    </form>
  )
}

function TodoListItem({ todo, onModify }) {
  const [modifyMode, setModifyMode] = useState(false)

  return (
    <li className="flex items-center gap-2 rounded bg-gray-50 px-3 py-2 text-sm">
      {modifyMode ? (
        <TodoModifyForm
          todo={todo}
          onModify={onModify}
          onCancel={() => setModifyMode(false)}
        />
      ) : (
        <span className="flex-1">{todo.content}</span>
      )}

      <button
        type="button"
        onClick={() => setModifyMode(!modifyMode)}
        className="rounded bg-amber-500 px-2 py-1 text-xs text-white hover:bg-amber-600"
      >
        {modifyMode ? '수정취소' : '수정'}
      </button>
    </li>
  )
}

export default function Lesson() {
  const { todos, addTodo, modifyTodo } = useTodos()

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
          <TodoListItem key={todo.id} todo={todo} onModify={modifyTodo} />
        ))}
      </ul>

      <p className="mt-3 text-xs text-gray-400">
        수정 → 내용 변경 → 저장하면 목록에 반영되고 텍스트로 돌아온다
      </p>
    </div>
  )
}
