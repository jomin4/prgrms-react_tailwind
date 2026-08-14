export const meta = {
  id: 10,
  title: '함수를 정의하는 4가지 방법',
  subtitle: '함수 선언식 · 함수 표현식 · 화살표 함수 · 화살표(축약)',
  concepts: [
    '함수 선언식: function add(a, b) { return a + b }',
    '함수 표현식: const add = function (a, b) { return a + b }',
    '화살표 함수: const add = (a, b) => { return a + b }',
    '화살표 축약형: const add = (a, b) => a + b  (return 생략)',
  ],
}

// 4가지 방식으로 정의한 add — 모두 같은 결과를 낸다
function addDeclaration(a, b) {
  return a + b
}
const addExpression = function (a, b) {
  return a + b
}
const addArrow = (a, b) => {
  return a + b
}
const addArrowShort = (a, b) => a + b

export default function Lesson() {
  const rows = [
    { name: '함수 선언식', fn: addDeclaration },
    { name: '함수 표현식', fn: addExpression },
    { name: '화살표 함수', fn: addArrow },
    { name: '화살표 축약형', fn: addArrowShort },
  ]

  return (
    <table className="mx-auto text-left text-sm">
      <thead>
        <tr className="border-b border-gray-300 text-gray-500">
          <th className="py-2 pr-6">정의 방식</th>
          <th className="py-2">add(3, 4)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name} className="border-b border-gray-100">
            <td className="py-2 pr-6">{row.name}</td>
            <td className="py-2 font-bold text-emerald-600">{row.fn(3, 4)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
