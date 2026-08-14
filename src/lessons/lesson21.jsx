import { useState } from 'react'

export const meta = {
  id: 21,
  title: '고치는 것보다 새로 만들기',
  subtitle: 'state를 바꾸면 컴포넌트가 바뀐 값으로 통째로 재실행된다',
  concepts: [
    '리액트는 기존 화면을 "고치는" 게 아니라 새로 그린다',
    'setColor 실행 → color가 바뀐 상태로 컴포넌트 재실행',
    '재실행된 결과(새 JSX)로 화면이 다시 만들어진다',
    '개발자는 "지금 상태면 무엇을 그릴지"만 선언하면 된다',
  ],
}

export default function Lesson() {
  const [color, setColor] = useState('blue')

  // 색상 후보. 클릭 시 다음 색으로 순환한다.
  const colors = ['blue', 'red', 'green', 'purple']

  const toggleColor = () => {
    const nextIndex = (colors.indexOf(color) + 1) % colors.length
    setColor(colors[nextIndex]) // state 변경 → 재실행 → 버튼 새로 생성
  }

  // color 상태에 따라 클래스가 결정된다(선언적)
  const colorClass = {
    blue: 'bg-blue-500 hover:bg-blue-600',
    red: 'bg-red-500 hover:bg-red-600',
    green: 'bg-green-500 hover:bg-green-600',
    purple: 'bg-purple-500 hover:bg-purple-600',
  }[color]

  return (
    <div className="text-center">
      <p className="mb-4 text-sm text-gray-500">
        버튼을 누르면 color 상태가 바뀌고, 그 상태로 버튼이 새로 만들어집니다.
      </p>

      <button
        onClick={toggleColor}
        className={`rounded px-6 py-3 font-semibold text-white ${colorClass}`}
      >
        색 바꾸기 (현재: {color})
      </button>
    </div>
  )
}
