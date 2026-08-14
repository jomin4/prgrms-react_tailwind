import { useState } from 'react'

export const meta = {
  id: 14,
  title: '일반 변수는 UI에 자동 반영되지 않는다',
  subtitle: 'let 변수를 바꿔도 화면은 그대로. 콘솔에만 값이 찍힌다',
  concepts: [
    'let number 는 일반 지역 변수 — 리액트가 추적하지 않는다',
    '값을 바꿔도 컴포넌트가 리렌더되지 않아 화면은 그대로 0',
    'state가 아니라서 리렌더 안됨 → 16강의 useState와 대비',
    '값은 바뀌지만(console.log로 확인) 화면 반영은 안 된다',
  ],
}

export default function Lesson() {
  // 일반 변수: 리액트가 추적하지 않으므로 값이 바뀌어도 리렌더가 일어나지 않는다.
  // (컴포넌트가 재실행되지 않으면 화면의 number는 항상 0으로 보인다)
  let number = 0

  const handleClick = () => {
    number++ // 변수 값 자체는 바뀐다
    console.log('현재 number 값:', number) // 콘솔에는 1, 2, 3... 찍힘
    // 하지만 setState 같은 갱신이 없어 리렌더가 없다 → 화면은 그대로
  }

  return (
    <div className="text-center">
      <button
        onClick={handleClick}
        className="rounded border-2 border-gray-300 p-2 hover:bg-gray-100"
      >
        number++ (콘솔 확인)
      </button>
      <br />
      <span className="mt-3 inline-block text-lg">숫자 : {number}</span>
      <p className="mt-4 text-sm text-gray-500">
        버튼을 눌러도 숫자는 0 그대로입니다. 개발자도구 콘솔을 열어 값이
        올라가는지 확인해 보세요.
      </p>
    </div>
  )
}
