import { useState } from 'react'

export const meta = {
  id: 20,
  title: '숫자 카운터: 바닐라 vs 리액트',
  subtitle: '직접 DOM을 조작하는 바닐라 방식과 state로 선언하는 리액트 방식 비교',
  concepts: [
    '바닐라: document.querySelector로 DOM을 찾아 직접 innerText를 바꾼다',
    '리액트: state만 바꾸면 리액트가 알아서 화면을 다시 그린다',
    '리액트는 "어떻게 바꿀지"가 아니라 "무엇을 보여줄지"를 선언한다',
    'setNumber로 state를 갱신 → 컴포넌트 재실행 → UI 자동 반영',
  ],
}

export default function Lesson() {
  // 리액트 방식: DOM을 직접 건드리지 않고 state만 갱신한다.
  const [number, setNumber] = useState(0)

  return (
    <div className="text-center">
      <p className="mb-3 text-sm text-gray-500">
        리액트 방식 — state만 바꾸면 화면이 자동 갱신됩니다.
      </p>

      <div className="mb-3 text-4xl font-bold text-gray-800">{number}</div>

      <div className="flex justify-center gap-2">
        <button
          onClick={() => setNumber(number - 1)}
          className="rounded border-2 border-gray-300 px-4 py-2 hover:bg-gray-100"
        >
          −
        </button>
        <button
          onClick={() => setNumber(number + 1)}
          className="rounded border-2 border-gray-300 px-4 py-2 hover:bg-gray-100"
        >
          +
        </button>
      </div>

      <div className="mt-5 rounded bg-gray-50 p-3 text-left text-xs text-gray-600">
        {/* 바닐라 방식과 대비: 아래처럼 DOM을 직접 찾아 바꿔야 했다 */}
        <p className="mb-1 font-semibold">바닐라라면 이렇게 했어야:</p>
        <code className="block">
          document.querySelector('#num').innerText = number
        </code>
        <p className="mt-1">리액트는 이 과정을 대신 해줍니다.</p>
      </div>
    </div>
  )
}
