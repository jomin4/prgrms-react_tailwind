export const meta = {
  id: 15,
  title: 'state 변수 개념',
  subtitle: 'state는 리액트가 추적하는 특별한 변수 — 바뀌면 UI가 자동 갱신된다',
  concepts: [
    'state = 리액트가 값의 변화를 추적하는 변수',
    'state 값이 바뀌면 관련된 UI가 자동으로 다시 그려진다(리렌더)',
    '일반 변수는 바뀌어도 리렌더가 없어 화면에 반영되지 않는다(14강)',
    'state는 반드시 setter 함수로만 갱신해야 한다(16강 useState)',
  ],
  hasDemo: false,
}

export default function Lesson() {
  // 개념 강의: 동작 데모 대신 "일반 변수 vs state" 비교를 카드로 렌더한다.
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-800">
        일반 변수 vs state 변수
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* 일반 변수 카드 */}
        <div className="rounded-lg border-2 border-gray-200 p-4">
          <div className="mb-2 inline-block rounded bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-700">
            일반 변수 (let)
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>· 리액트가 추적하지 않음</li>
            <li>· 값이 바뀌어도 리렌더 없음</li>
            <li>· 화면에 반영되지 않음</li>
            <li>· 리렌더되면 값이 초기화됨</li>
          </ul>
        </div>

        {/* state 변수 카드 */}
        <div className="rounded-lg border-2 border-blue-300 bg-blue-50 p-4">
          <div className="mb-2 inline-block rounded bg-blue-500 px-2 py-1 text-xs font-semibold text-white">
            state 변수 (useState)
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>· 리액트가 값을 추적함</li>
            <li>· 값이 바뀌면 자동 리렌더</li>
            <li>· 화면이 즉시 갱신됨</li>
            <li>· 리렌더돼도 값이 유지됨</li>
          </ul>
        </div>
      </div>

      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border border-gray-200 p-2">구분</th>
            <th className="border border-gray-200 p-2">일반 변수</th>
            <th className="border border-gray-200 p-2">state</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 p-2 font-medium">값 변경 시</td>
            <td className="border border-gray-200 p-2">리렌더 X</td>
            <td className="border border-gray-200 p-2 text-blue-600">리렌더 O</td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-2 font-medium">UI 반영</td>
            <td className="border border-gray-200 p-2">안 됨</td>
            <td className="border border-gray-200 p-2 text-blue-600">자동 반영</td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-2 font-medium">갱신 방법</td>
            <td className="border border-gray-200 p-2">직접 대입</td>
            <td className="border border-gray-200 p-2 text-blue-600">setter 함수</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
