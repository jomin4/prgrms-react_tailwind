export const meta = {
  id: 34,
  title: 'top/left/right/bottom 개념과 기본값',
  subtitle: '같은 absolute 박스를 네 모서리에 붙여 방향 기준을 이해',
  concepts: [
    'top/left/right/bottom은 "그 변으로부터의 거리"를 뜻한다',
    'top-0 left-0 → 왼쪽 위, top-0 right-0 → 오른쪽 위 …',
    '기본값은 auto — 지정하지 않은 방향은 원래 흐름/내용 위치를 따른다',
    'top과 bottom을 동시에 주면 높이가 그 사이로 늘어난다(35강 예고)',
  ],
}

export default function Lesson() {
  return (
    // relative 컨테이너: 네 모서리 배치의 기준
    <div className="relative h-64 w-full rounded border border-gray-300 bg-gray-50">
      {/* 왼쪽 위 */}
      <div className="absolute left-0 top-0 rounded bg-red-500 px-3 py-1 text-sm text-white">
        top-0 left-0
      </div>
      {/* 오른쪽 위 */}
      <div className="absolute right-0 top-0 rounded bg-blue-500 px-3 py-1 text-sm text-white">
        top-0 right-0
      </div>
      {/* 왼쪽 아래 */}
      <div className="absolute bottom-0 left-0 rounded bg-green-500 px-3 py-1 text-sm text-white">
        bottom-0 left-0
      </div>
      {/* 오른쪽 아래 */}
      <div className="absolute bottom-0 right-0 rounded bg-purple-500 px-3 py-1 text-sm text-white">
        bottom-0 right-0
      </div>
    </div>
  )
}
