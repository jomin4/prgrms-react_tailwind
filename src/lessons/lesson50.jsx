// Virtual DOM은 개념 강의라 라이브 데모 대신 흐름/비교표를 렌더한다.
export const meta = {
  id: 50,
  title: 'Virtual DOM',
  subtitle: '매번 UI를 새로 만들어도 빠른 이유',
  concepts: [
    '리액트는 실제 DOM이 아니라 가벼운 JS 객체(Virtual DOM)를 먼저 만든다',
    '상태 변경 → 가상 DOM 재생성 → 이전 가상 DOM과 비교(diffing)',
    '바뀐 부분만 계산해서 실제 DOM에는 그 부분만 반영한다',
    '실제 DOM 조작은 비싸므로, 최소한만 건드려 성능을 확보한다',
  ],
  hasDemo: false,
}

// hasDemo:false 지만 개념을 시각적으로 보여주기 위해 그림/표를 렌더한다.
export default function Lesson() {
  const steps = [
    { n: 1, title: '상태 변경', desc: 'setState 등으로 상태가 바뀐다' },
    { n: 2, title: '가상 DOM 재생성', desc: '새 상태 기준으로 가상 DOM을 새로 만든다' },
    { n: 3, title: 'Diffing(비교)', desc: '이전 가상 DOM과 비교해 달라진 부분을 찾는다' },
    { n: 4, title: '실제 DOM 반영', desc: '바뀐 부분만 실제 DOM에 최소한으로 적용' },
  ]

  return (
    <div className="space-y-6">
      {/* 동작 흐름 */}
      <div>
        <h3 className="mb-3 text-sm font-bold text-gray-700">동작 흐름</h3>
        <div className="flex flex-col gap-2">
          {steps.map((s) => (
            <div key={s.n} className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                {s.n}
              </div>
              <div className="flex-1 rounded bg-blue-50 px-3 py-2">
                <p className="text-sm font-semibold text-blue-800">{s.title}</p>
                <p className="text-xs text-blue-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 비교표 */}
      <div>
        <h3 className="mb-3 text-sm font-bold text-gray-700">
          Virtual DOM vs 실제 DOM
        </h3>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-200 px-3 py-2">구분</th>
              <th className="border border-gray-200 px-3 py-2">Virtual DOM</th>
              <th className="border border-gray-200 px-3 py-2">실제 DOM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-3 py-2 font-medium">정체</td>
              <td className="border border-gray-200 px-3 py-2">가벼운 JS 객체</td>
              <td className="border border-gray-200 px-3 py-2">브라우저가 그리는 실제 화면 트리</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2 font-medium">생성 비용</td>
              <td className="border border-gray-200 px-3 py-2">저렴함(메모리상 객체)</td>
              <td className="border border-gray-200 px-3 py-2">비쌈(레이아웃/리페인트 유발)</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-3 py-2 font-medium">역할</td>
              <td className="border border-gray-200 px-3 py-2">무엇이 바뀌었는지 계산(diffing)</td>
              <td className="border border-gray-200 px-3 py-2">최종 결과를 사용자에게 표시</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-400">
        핵심: 매 렌더마다 UI를 새로 만들어도, 실제 DOM은 "바뀐 부분만" 갱신되므로 빠르다.
      </p>
    </div>
  )
}
