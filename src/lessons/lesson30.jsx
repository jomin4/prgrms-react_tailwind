export const meta = {
  id: 30,
  title: 'position 실험',
  subtitle: 'static / relative / absolute 박스가 같은 컨테이너에서 어떻게 달라지는가',
  concepts: [
    'static 박스: 흐름대로 자리 차지, top/left 무시',
    'relative 박스: 원래 자리를 남긴 채 top/left만큼 이동',
    'absolute 박스: 흐름에서 빠져 relative 컨테이너의 top/left 기준으로 배치',
    '노란 점선은 각 박스가 "원래" 있어야 할 흐름상 자리를 표시',
  ],
}

export default function Lesson() {
  return (
    // relative 컨테이너: absolute 자식의 기준점이 된다
    <div className="relative h-64 rounded border-2 border-dashed border-gray-300 bg-gray-50 p-3">
      {/* static: 흐름 그대로 — top/left를 줘도 움직이지 않음 */}
      <div className="static w-40 rounded bg-gray-400 p-2 text-center text-white">
        static (안 움직임)
      </div>

      {/* relative: 자기 원래 자리에서 오른쪽/아래로 이동, 원래 자리는 그대로 비워둠 */}
      <div className="relative left-8 top-2 mt-2 w-40 rounded bg-blue-500 p-2 text-center text-white">
        relative (left-8 top-2)
      </div>

      {/* absolute: 흐름에서 빠져 컨테이너의 오른쪽 위 모서리 기준으로 배치 */}
      <div className="absolute right-3 top-3 w-40 rounded bg-red-500 p-2 text-center text-white">
        absolute (right-3 top-3)
      </div>
    </div>
  )
}
