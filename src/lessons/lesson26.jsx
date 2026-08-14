export const meta = {
  id: 26,
  title: 'flex 디펜스 (flexbox 게임 2)',
  subtitle: 'flex-direction / gap / flex-wrap로 배치를 더 세밀하게 제어',
  concepts: [
    'flex-direction — 주축 방향 전환: row(가로, 기본) / col(세로)',
    'gap — item 사이 간격 (gap-2, gap-4 …)',
    'flex-wrap — 넘칠 때 줄바꿈: nowrap(기본) / wrap',
    'flex-col은 주축이 세로가 되므로 justify/items의 축도 함께 뒤집힌다',
  ],
}

export default function Lesson() {
  return (
    <div className="space-y-6">
      {/* flex-row + gap: 가로 나열 + 간격 */}
      <div>
        <p className="mb-1 text-sm text-gray-500">flex-row + gap-4 — 가로 나열</p>
        <div className="flex flex-row gap-4 rounded bg-sky-50 p-3 text-3xl">
          <span>🐢</span>
          <span>🐢</span>
          <span>🐢</span>
        </div>
      </div>

      {/* flex-col: 세로 나열 (주축이 세로로 바뀜) */}
      <div>
        <p className="mb-1 text-sm text-gray-500">flex-col — 세로 나열</p>
        <div className="flex flex-col items-center gap-2 rounded bg-sky-50 p-3 text-3xl">
          <span>🐢</span>
          <span>🐢</span>
          <span>🐢</span>
        </div>
      </div>

      {/* flex-wrap: 좁은 폭에서 자동 줄바꿈 */}
      <div>
        <p className="mb-1 text-sm text-gray-500">
          flex-wrap — 공간이 부족하면 다음 줄로 넘김
        </p>
        <div className="flex max-w-xs flex-wrap gap-3 rounded bg-sky-50 p-3 text-3xl">
          {/* 여러 개를 넣어 한 줄을 넘치게 → 자동 줄바꿈 */}
          <span>🐢</span>
          <span>🐢</span>
          <span>🐢</span>
          <span>🐢</span>
          <span>🐢</span>
          <span>🐢</span>
          <span>🐢</span>
          <span>🐢</span>
        </div>
      </div>
    </div>
  )
}
