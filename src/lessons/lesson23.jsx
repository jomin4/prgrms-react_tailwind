import { useState } from 'react'

export const meta = {
  id: 23,
  title: '할일 리스트 추가기능',
  subtitle: 'form submit으로 입력값을 받아 todos 배열에 추가한다',
  concepts: [
    'form의 onSubmit에서 e.preventDefault()로 새로고침을 막는다',
    '입력값이 비어있으면 추가하지 않도록 검사한다',
    'setTodos([...todos, 입력값]) — 기존 배열을 펼치고 새 항목을 더한다',
    '추가 후 input 값을 비워 다음 입력을 준비한다',
  ],
}

export default function Lesson() {
  const [todos, setTodos] = useState(['리액트 복습'])
  const [input, setInput] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault() // 폼 기본 동작(새로고침) 방지
    const value = input.trim()
    if (value === '') return // 빈 값은 추가하지 않음
    setTodos([...todos, value]) // 기존 + 새 항목
    setInput('') // 입력창 비우기
  }

  return (
    <div>
      <form onSubmit={onFormSubmit} className="mb-4 flex gap-2">
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

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="rounded border border-gray-200 px-3 py-2 text-gray-700"
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  )
}
