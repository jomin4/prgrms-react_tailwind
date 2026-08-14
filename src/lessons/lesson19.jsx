import { useState } from 'react'

export const meta = {
  id: 19,
  title: 'TodoItem 컴포넌트 + 수정모드 토글',
  subtitle: '아이템을 컴포넌트로 분리하고, 각자 수정모드 상태를 갖게 한다',
  concepts: [
    '반복되는 li를 TodoItem 컴포넌트로 분리한다',
    '각 TodoItem이 자신만의 isModifyingMode 상태를 가진다',
    '수정 버튼으로 모드를 토글 — 수정모드일 때만 input 노출',
    '저장 버튼을 누르면 수정모드가 종료된다',
  ],
}

// 각 할일 항목: 자기만의 수정모드 상태를 가진다
function TodoItem({ text }) {
  const [isModifyingMode, setIsModifyingMode] = useState(false)
  const [value, setValue] = useState(text)

  return (
    <li className="flex items-center justify-between gap-2 rounded border border-gray-200 px-3 py-2">
      {isModifyingMode ? (
        // 수정모드: input 노출 + 저장 버튼
        <>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 rounded border border-gray-300 px-2 py-1"
          />
          <button
            onClick={() => setIsModifyingMode(false)}
            className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
          >
            저장
          </button>
        </>
      ) : (
        // 일반모드: 텍스트 + 수정 버튼
        <>
          <span className="flex-1 text-gray-700">{value}</span>
          <button
            onClick={() => setIsModifyingMode(true)}
            className="rounded border border-gray-300 px-3 py-1 text-sm hover:bg-gray-100"
          >
            수정
          </button>
        </>
      )}
    </li>
  )
}

export default function Lesson() {
  const todos = ['리액트 복습', '테일윈드 연습', '커밋하기']

  return (
    <div>
      <h3 className="mb-3 font-bold text-gray-800">할일 목록</h3>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo} />
        ))}
      </ul>
    </div>
  )
}
