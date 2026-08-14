import { useRef } from 'react'

export const meta = {
  id: 60,
  title: 'ref로 real DOM 접근 (focus)',
  subtitle: 'useRef로 input 엘리먼트를 참조해 버튼 클릭 시 focus()',
  concepts: [
    '리렌더로 해결되는 문제(값 표시 등)는 state로 충분하다',
    '리렌더로 못 푸는 문제(포커스, 스크롤, 재생 등)는 real DOM 직접 접근이 필요',
    '이때 useRef로 엘리먼트를 참조한다: <input ref={inputRef} />',
    'inputRef.current가 실제 DOM 노드 → inputRef.current.focus()로 조작',
  ],
}

export default function Lesson() {
  // 실제 DOM 엘리먼트를 담을 그릇. 초기값 null
  const inputRef = useRef(null)

  const focusInput = () => {
    // current에 실제 <input> DOM이 들어있다. 직접 focus 호출.
    inputRef.current.focus()
  }

  const clearInput = () => {
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  return (
    <div>
      <input
        ref={inputRef} // 이 DOM을 inputRef.current로 참조
        type="text"
        autoComplete="off"
        placeholder="여기에 포커스가 갑니다"
        className="w-full rounded border border-gray-300 px-3 py-2"
      />

      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={focusInput}
          className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
        >
          입력창 포커스
        </button>
        <button
          type="button"
          onClick={clearInput}
          className="rounded bg-gray-500 px-4 py-2 text-sm text-white hover:bg-gray-600"
        >
          비우고 포커스
        </button>
      </div>

      <p className="mt-3 text-xs text-gray-400">
        포커스는 "상태 → UI"로 표현되지 않는다. DOM을 직접 만져야 하므로 useRef 사용.
      </p>
    </div>
  )
}
