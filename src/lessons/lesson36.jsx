export const meta = {
  id: 36,
  title: '수직수평 중앙 정렬 + 4등분',
  subtitle: 'top-1/2 left-1/2 + -translate 절반으로 정확한 중앙 배치',
  concepts: [
    'top-1/2 left-1/2 → 박스의 "왼쪽 위 모서리"가 컨테이너 정중앙에 온다',
    '그래서 박스가 오른쪽/아래로 치우친다 → 자기 크기의 절반만큼 되돌려야 함',
    '-translate-x-1/2 -translate-y-1/2 → 자기 너비·높이의 절반만큼 이동해 정확히 중앙',
    'translate는 "자기 자신 크기" 기준이라 박스 크기를 몰라도 항상 중앙 정렬된다',
  ],
}

export default function Lesson() {
  return (
    // relative 컨테이너: 뒤에 4등분 배경을 깔고 그 위 정중앙에 박스를 얹는다
    <div className="relative h-64 w-full overflow-hidden rounded border border-gray-300">
      {/* 배경 4등분 (참고용) */}
      <div className="absolute left-0 top-0 h-1/2 w-1/2 bg-red-100" />
      <div className="absolute left-1/2 top-0 h-1/2 w-1/2 bg-blue-100" />
      <div className="absolute left-0 top-1/2 h-1/2 w-1/2 bg-green-100" />
      <div className="absolute left-1/2 top-1/2 h-1/2 w-1/2 bg-yellow-100" />

      {/* 정중앙 박스: top/left 50% 지점에 두고 -translate로 자기 절반만큼 되돌림 */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-black px-6 py-4 text-center font-bold text-white">
        정중앙
      </div>
    </div>
  )
}
