import { useRef, useEffect } from 'react'

export const meta = {
  id: 62,
  title: 'autoFocus + useRef/useEffect 포커스 제어',
  subtitle: '마운트 시 포커스를 두 가지 방법으로 구현하고 비교',
  concepts: [
    'autoFocus: 마운트 시 자동 포커스. 가장 간단하지만 제어가 약하다',
    'useRef + useEffect: 마운트 이후 inputRef.current.focus()로 직접 제어',
    '조건/타이밍에 따라 포커스를 세밀히 넣고 싶다면 useRef+useEffect가 유리',
    'autoComplete="off"로 브라우저 자동완성 팝업도 끈다',
  ],
}

export default function Lesson() {
  const refInput = useRef(null)

  // 마운트 이후 실행 → 두 번째 input에 포커스를 준다.
  // (같은 화면에 autoFocus와 함께 두면 나중에 실행된 이쪽이 최종 포커스)
  useEffect(() => {
    refInput.current.focus()
  }, [])

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-1 block text-xs text-gray-500">
          방법 1: autoFocus 속성
        </label>
        <input
          type="text"
          autoFocus
          autoComplete="off"
          placeholder="autoFocus로 포커스"
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-xs text-gray-500">
          방법 2: useRef + useEffect (더 세밀한 제어)
        </label>
        <input
          ref={refInput}
          type="text"
          autoComplete="off"
          placeholder="useEffect로 포커스"
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
      </div>

      <p className="text-xs text-gray-400">
        둘 다 마운트 시 포커스를 준다. 나중에 실행되는 useEffect 쪽이 최종 포커스를 가짐.
        조건부/지연 포커스가 필요하면 useRef+useEffect를 쓴다.
      </p>
    </div>
  )
}
