export const meta = {
  id: 39,
  title: '선택자 검색대상의 개수',
  subtitle: '하나의 선택자가 몇 개의 요소를 선택하는지 시각화',
  concepts: [
    '선택자는 조건에 맞는 "모든" 요소를 대상으로 한다 (개수 제한 없음)',
    'ul > li — 직계 자식 li 전부가 대상 (여러 개)',
    'li:hover — 각 li마다 개별적으로 hover 판정 (올린 것만 반응)',
    ':first-child / :last-child — 여러 개 중 특정 위치 1개만 선택',
  ],
}

export default function Lesson() {
  const items = ['사과', '바나나', '체리', '두리안', '엘더베리']

  return (
    <div className="space-y-6">
      {/* ul > li : 직계 자식 전부가 대상 → 모두 같은 스타일 */}
      <div>
        <p className="mb-1 text-sm text-gray-500">
          "ul {'>'} li" — 직계 자식 li <b>전부</b>가 대상 ({items.length}개)
        </p>
        <ul className="flex gap-2 rounded bg-gray-50 p-3 text-sm [&>li]:rounded [&>li]:bg-sky-200 [&>li]:px-2 [&>li]:py-1">
          {items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </div>

      {/* li:hover : 각각 개별 판정 → 올린 것만 반응 */}
      <div>
        <p className="mb-1 text-sm text-gray-500">
          "li:hover" — 각 li마다 <b>개별</b> 판정 (마우스 올린 1개만 반응)
        </p>
        <ul className="flex gap-2 rounded bg-gray-50 p-3 text-sm [&>li]:cursor-pointer [&>li]:rounded [&>li]:bg-gray-200 [&>li]:px-2 [&>li]:py-1 [&>li]:hover:bg-orange-300">
          {items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </div>

      {/* :first-child / :last-child : 여러 개 중 1개 위치 지정 */}
      <div>
        <p className="mb-1 text-sm text-gray-500">
          ":first-child(초록) / :last-child(빨강)" — 여러 개 중 <b>1개</b>씩만
        </p>
        <ul className="flex gap-2 rounded bg-gray-50 p-3 text-sm [&>li]:rounded [&>li]:bg-gray-200 [&>li]:px-2 [&>li]:py-1 [&>li:first-child]:bg-green-300 [&>li:last-child]:bg-rose-300">
          {items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
