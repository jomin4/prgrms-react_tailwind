export const meta = {
  id: 6,
  title: 'div/span, inline vs block',
  subtitle: 'inline은 한 줄에 여러 개, block은 한 줄에 하나',
  concepts: [
    'inline (span): 한 줄에 여러 개 배치, width/height/상하 margin 적용 안 됨',
    'block (div): 한 줄에 하나씩(줄바꿈), width/height/margin/padding 모두 적용',
    'inline-block: 한 줄에 여러 개 + 크기/여백도 적용 (둘의 장점)',
    'Tailwind: inline / block / inline-block 클래스로 지정',
  ],
}

export default function Lesson() {
  return (
    <div className="space-y-4">
      {/* inline: 나란히 붙지만 w/h가 무시됨 */}
      <div>
        <p className="mb-1 text-sm font-bold text-gray-600">inline (span)</p>
        <span className="inline bg-sky-200 p-1">A</span>
        <span className="inline bg-sky-300 p-1">B</span>
        <span className="inline bg-sky-400 p-1">C</span>
      </div>

      {/* block: 각 요소가 한 줄씩 차지 */}
      <div>
        <p className="mb-1 text-sm font-bold text-gray-600">block (div)</p>
        <div className="block w-24 bg-emerald-200 p-1">A</div>
        <div className="block w-24 bg-emerald-300 p-1">B</div>
        <div className="block w-24 bg-emerald-400 p-1">C</div>
      </div>

      {/* inline-block: 나란히 + 크기 적용됨 */}
      <div>
        <p className="mb-1 text-sm font-bold text-gray-600">inline-block</p>
        <div className="inline-block h-16 w-16 bg-rose-200 p-1">A</div>
        <div className="inline-block h-16 w-16 bg-rose-300 p-1">B</div>
        <div className="inline-block h-16 w-16 bg-rose-400 p-1">C</div>
      </div>
    </div>
  )
}
