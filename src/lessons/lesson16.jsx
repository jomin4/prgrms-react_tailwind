import { useState } from 'react'

export const meta = {
  id: 16,
  title: 'useState로 상태 정의하기',
  subtitle: '상태변수가 갱신되면 리액트는 컴포넌트 함수를 통째로 재실행한다',
  concepts: [
    'const [number, setNumber] = useState(0) — [상태값, setter] 형태로 정의',
    '상태는 반드시 setter(setNumber)로만 갱신해야 UI가 자동 반영된다',
    'setNumber(number + 1) 호출 → App 함수 재실행 → 화면 갱신',
    '일반 변수(let number)는 값을 바꿔도 UI가 갱신되지 않는다 (14강 대비)',
  ],
}

export default function Lesson() {
  const [number, setNumber] = useState(0)

  return (
    <div className="text-center">
      <button
        onClick={() => setNumber(number + 1)}
        className="rounded border-2 border-gray-300 p-2 hover:bg-gray-100"
      >
        버튼
      </button>
      <br />
      <span className="mt-3 inline-block">숫자 : {number}</span>
    </div>
  )
}
