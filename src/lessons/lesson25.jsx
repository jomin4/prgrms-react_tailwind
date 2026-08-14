export const meta = {
  id: 25,
  title: 'flex 개구리 (flexbox 게임)',
  subtitle: 'flexboxfroggy 유형 게임으로 익히는 flex 정렬의 기본',
  concepts: [
    'display:flex — 자식(item)들을 가로(주축) 방향으로 나열한다',
    'justify-content — 주축(가로) 정렬: start / center / end / between / around',
    'align-items — 교차축(세로) 정렬: start / center / end / stretch',
    'Tailwind: justify-center, justify-end, items-center 등으로 지정',
  ],
}

export default function Lesson() {
  return (
    <div className="space-y-6">
      {/* justify-start (기본): 개구리들이 왼쪽에 모인다 */}
      <div>
        <p className="mb-1 text-sm text-gray-500">justify-start (기본값)</p>
        <div className="flex items-center gap-2 rounded bg-green-50 p-3 text-3xl">
          <span>🐸</span>
          <span>🐸</span>
          <span>🐸</span>
        </div>
      </div>

      {/* justify-center: 가운데로 모인다 */}
      <div>
        <p className="mb-1 text-sm text-gray-500">justify-center — 주축 가운데</p>
        <div className="flex items-center justify-center gap-2 rounded bg-green-50 p-3 text-3xl">
          <span>🐸</span>
          <span>🐸</span>
          <span>🐸</span>
        </div>
      </div>

      {/* justify-end: 오른쪽으로 모인다 */}
      <div>
        <p className="mb-1 text-sm text-gray-500">justify-end — 주축 오른쪽</p>
        <div className="flex items-center justify-end gap-2 rounded bg-green-50 p-3 text-3xl">
          <span>🐸</span>
          <span>🐸</span>
          <span>🐸</span>
        </div>
      </div>

      {/* justify-between + items-center: 양끝 분산 + 세로 가운데 */}
      <div>
        <p className="mb-1 text-sm text-gray-500">
          justify-between + items-center — 양끝 분산 + 세로 가운데
        </p>
        <div className="flex h-24 items-center justify-between rounded bg-green-50 p-3 text-3xl">
          <span>🐸</span>
          <span>🐸</span>
          <span>🐸</span>
        </div>
      </div>
    </div>
  )
}
