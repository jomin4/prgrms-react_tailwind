export const meta = {
  id: 35,
  title: 'absolute + top/left/right/bottom로 2×2 등분 (w/h 금지)',
  subtitle: 'width/height 없이 네 방향 값만으로 각 칸의 크기를 만든다',
  concepts: [
    'top·bottom을 동시에 지정하면 그 사이만큼 높이가 결정된다 (h 불필요)',
    'left·right를 동시에 지정하면 그 사이만큼 너비가 결정된다 (w 불필요)',
    '좌상단: top-0 left-0 right-1/2 bottom-1/2 → 왼쪽·위 절반 영역',
    '4칸 모두 네 방향 값의 조합만으로 정확히 4등분된다',
  ],
}

export default function Lesson() {
  return (
    // relative 컨테이너: w/h 없이 네 방향 값만으로 칸을 채운다
    <div className="relative h-64 w-full overflow-hidden rounded border border-gray-300">
      {/* 좌상단: 위·왼쪽에 붙고 오른쪽/아래는 절반 지점까지 */}
      <div className="absolute bottom-1/2 left-0 right-1/2 top-0 flex items-center justify-center bg-red-400 text-white">
        1
      </div>
      {/* 우상단: 위·오른쪽에 붙고 왼쪽/아래는 절반 지점까지 */}
      <div className="absolute bottom-1/2 left-1/2 right-0 top-0 flex items-center justify-center bg-blue-400 text-white">
        2
      </div>
      {/* 좌하단: 아래·왼쪽에 붙고 오른쪽/위는 절반 지점까지 */}
      <div className="absolute bottom-0 left-0 right-1/2 top-1/2 flex items-center justify-center bg-green-400 text-white">
        3
      </div>
      {/* 우하단: 아래·오른쪽에 붙고 왼쪽/위는 절반 지점까지 */}
      <div className="absolute bottom-0 left-1/2 right-0 top-1/2 flex items-center justify-center bg-yellow-400 text-white">
        4
      </div>
    </div>
  )
}
