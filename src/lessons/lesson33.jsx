export const meta = {
  id: 33,
  title: '3×3 등분',
  subtitle: 'absolute + w-1/3 h-1/3 박스 9개를 top/left 조합으로 9칸 그리드',
  concepts: [
    '각 칸: w-1/3 h-1/3 → 컨테이너의 1/3 × 1/3 크기',
    'top은 행(0, 1/3, 2/3), left는 열(0, 1/3, 2/3)로 조합',
    '9칸 = 행 3개 × 열 3개의 모든 (top,left) 짝',
    'Tailwind는 완성된 클래스 문자열만 인식하므로 각 칸을 리터럴로 적는다',
  ],
}

export default function Lesson() {
  // 각 칸의 top/left/색을 리터럴 문자열로 배열화 (동적 조합 X → JIT가 클래스를 인식)
  const cells = [
    { pos: 'top-0 left-0', color: 'bg-red-400' },
    { pos: 'top-0 left-1/3', color: 'bg-orange-400' },
    { pos: 'top-0 left-2/3', color: 'bg-yellow-400' },
    { pos: 'top-1/3 left-0', color: 'bg-green-400' },
    { pos: 'top-1/3 left-1/3', color: 'bg-teal-400' },
    { pos: 'top-1/3 left-2/3', color: 'bg-sky-400' },
    { pos: 'top-2/3 left-0', color: 'bg-blue-400' },
    { pos: 'top-2/3 left-1/3', color: 'bg-indigo-400' },
    { pos: 'top-2/3 left-2/3', color: 'bg-purple-400' },
  ]

  return (
    <div className="relative h-64 w-full overflow-hidden rounded border border-gray-300">
      {cells.map((cell, i) => (
        <div
          key={i}
          className={`absolute ${cell.pos} flex h-1/3 w-1/3 items-center justify-center ${cell.color} text-white`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  )
}
