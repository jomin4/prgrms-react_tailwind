export const meta = {
  id: 32,
  title: '1×3 등분',
  subtitle: 'absolute + h-1/3 + top 0·1/3·2/3 으로 세로 3등분',
  concepts: [
    '세로 3등분: 각 칸 높이 h-1/3, 가로 폭은 w-full',
    'top 위치를 0 / 1/3 / 2/3 로 나누어 위→아래 순서로 배치',
    'top-1/3 = 위에서 33.33%, top-2/3 = 위에서 66.66% 지점',
    'left-0 고정 + w-full → 가로는 꽉 채움',
  ],
}

export default function Lesson() {
  return (
    // relative 컨테이너 기준으로 세로 3칸을 쌓는다
    <div className="relative h-64 w-full overflow-hidden rounded border border-gray-300">
      {/* 1행: 맨 위 (top:0) */}
      <div className="absolute left-0 top-0 flex h-1/3 w-full items-center justify-center bg-rose-400 text-white">
        1행 (top-0)
      </div>
      {/* 2행: 가운데 (top:1/3) */}
      <div className="absolute left-0 top-1/3 flex h-1/3 w-full items-center justify-center bg-teal-400 text-white">
        2행 (top-1/3)
      </div>
      {/* 3행: 맨 아래 (top:2/3) */}
      <div className="absolute left-0 top-2/3 flex h-1/3 w-full items-center justify-center bg-indigo-400 text-white">
        3행 (top-2/3)
      </div>
    </div>
  )
}
