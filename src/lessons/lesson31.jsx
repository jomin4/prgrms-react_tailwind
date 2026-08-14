export const meta = {
  id: 31,
  title: 'absolute + w/h/top/left로 2×2 등분',
  subtitle: 'w-1/2 h-1/2 박스 4개를 top/left 0·50%로 배치해 화면을 4등분',
  concepts: [
    'relative 컨테이너를 기준으로 absolute 박스 4개를 배치',
    '각 칸은 w-1/2 h-1/2 → 컨테이너의 가로·세로 절반 크기',
    'top/left 조합: (0,0) (0,50%) (50%,0) (50%,50%) 으로 네 구역 지정',
    'left-1/2 = 왼쪽에서 50% 지점, top-1/2 = 위에서 50% 지점',
  ],
}

export default function Lesson() {
  return (
    // relative h-64 컨테이너: 4개 absolute 칸의 기준
    <div className="relative h-64 w-full overflow-hidden rounded border border-gray-300">
      {/* 좌상단 (top:0, left:0) */}
      <div className="absolute left-0 top-0 flex h-1/2 w-1/2 items-center justify-center bg-red-400 text-white">
        1
      </div>
      {/* 우상단 (top:0, left:50%) */}
      <div className="absolute left-1/2 top-0 flex h-1/2 w-1/2 items-center justify-center bg-blue-400 text-white">
        2
      </div>
      {/* 좌하단 (top:50%, left:0) */}
      <div className="absolute left-0 top-1/2 flex h-1/2 w-1/2 items-center justify-center bg-green-400 text-white">
        3
      </div>
      {/* 우하단 (top:50%, left:50%) */}
      <div className="absolute left-1/2 top-1/2 flex h-1/2 w-1/2 items-center justify-center bg-yellow-400 text-white">
        4
      </div>
    </div>
  )
}
