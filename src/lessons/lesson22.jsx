import { useState } from 'react'

export const meta = {
  id: 22,
  title: '홀짝 카운터',
  subtitle: '홀짝은 number에서 계산해 쓴다 — 별도 상태로 만들지 않는다',
  concepts: [
    '파생 가능한 값(홀짝)은 상태로 만들지 말 것',
    '홀짝은 number % 2 로 매 렌더마다 계산하면 된다',
    '상태가 여러 개면 서로 어긋날 수 있다 — 단일 출처(number)만 유지',
    'number가 바뀌면 홀짝 표시도 자동으로 맞춰진다',
  ],
}

export default function Lesson() {
  const [number, setNumber] = useState(0)

  // 홀짝은 상태로 두지 않고 number에서 파생시킨다.
  const isEven = number % 2 === 0

  return (
    <div className="text-center">
      <div className="mb-3 text-4xl font-bold text-gray-800">{number}</div>

      {/* 파생값: number가 바뀌면 자동으로 맞춰진다 */}
      <div
        className={`mb-4 inline-block rounded-full px-4 py-1 text-sm font-semibold ${
          isEven ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
        }`}
      >
        {isEven ? '짝수' : '홀수'}
      </div>

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
    </div>
  )
}
