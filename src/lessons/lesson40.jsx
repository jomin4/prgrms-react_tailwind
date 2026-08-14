export const meta = {
  id: 40,
  title: '선택자 연습: CSS 다이너(DINER)',
  subtitle: 'flukeout CSS Diner 게임으로 익히는 선택자 종류',
  concepts: [
    '태그 선택자 — plate, apple 처럼 요소 이름으로 선택',
    'id 선택자 "#fancy" — 고유 id로 1개 선택',
    'class 선택자 ".small" — 같은 class를 가진 요소 전부',
    '속성 선택자 "[for=plate]" — 특정 속성/값을 가진 요소 선택',
  ],
}

export default function Lesson() {
  // 접시 위 음식들: CSS Diner 처럼 태그/속성으로 골라내는 개념 표현
  const plates = [
    { food: '🍎', tag: 'apple', cls: '' },
    { food: '🍎', tag: 'apple', cls: 'small' },
    { food: '🍊', tag: 'orange', cls: 'fancy' },
    { food: '🍎', tag: 'apple', cls: '' },
  ]

  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-500">
        선택자로 접시(🍽️) 위의 음식을 "골라내는" 게임입니다.
      </p>

      {/* 태그 선택자: apple 전부 강조 */}
      <div>
        <p className="mb-1 text-sm text-gray-500">
          태그 선택자 "apple" — 사과 <b>전부</b> 선택 (노란 테두리)
        </p>
        <div className="flex gap-4 text-4xl">
          {plates.map((p, i) => (
            <span
              key={i}
              className={`relative rounded-full p-1 ${
                p.tag === 'apple' ? 'ring-4 ring-yellow-400' : ''
              }`}
            >
              <span className="block">🍽️</span>
              <span className="absolute inset-0 grid place-items-center text-2xl">
                {p.food}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* 속성/class 선택자: .fancy 만 선택 */}
      <div>
        <p className="mb-1 text-sm text-gray-500">
          class 선택자 ".fancy" — fancy 클래스 <b>1개</b>만 선택 (분홍 테두리)
        </p>
        <div className="flex gap-4 text-4xl">
          {plates.map((p, i) => (
            <span
              key={i}
              className={`relative rounded-full p-1 ${
                p.cls === 'fancy' ? 'ring-4 ring-pink-400' : ''
              }`}
            >
              <span className="block">🍽️</span>
              <span className="absolute inset-0 grid place-items-center text-2xl">
                {p.food}
              </span>
            </span>
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-400">
        실제 게임: flukeout.github.io (CSS Diner)
      </p>
    </div>
  )
}
