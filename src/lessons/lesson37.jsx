export const meta = {
  id: 37,
  title: '멀티메뉴 제작을 위한 선택자 튜토리얼',
  subtitle: 'CSS 선택자(자손/자식/hover)를 중첩 목록으로 시각화',
  concepts: [
    '자손 선택자 "A B" — A 아래 모든 깊이의 B (띄어쓰기)',
    '자식 선택자 "A > B" — A의 바로 아래 한 단계 B만',
    ':hover — 마우스를 올린 요소에 반응',
    'Tailwind에서는 hover:bg-... / [&>li]:... 같은 임의선택자로 표현',
  ],
}

export default function Lesson() {
  return (
    <div className="space-y-6">
      {/* 자손 선택자: 목록 전체(모든 깊이)에 hover 강조 */}
      <div>
        <p className="mb-1 text-sm text-gray-500">
          자손 선택자 "ul li" — 깊이 상관없이 모든 li가 대상
        </p>
        {/* [&_li]:... 는 후손(자손) li 전체에 적용 = 띄어쓰기 선택자 */}
        <ul className="rounded bg-gray-50 p-3 text-sm [&_li]:rounded [&_li]:px-2 [&_li]:py-1 [&_li]:hover:bg-yellow-200">
          <li>
            메뉴 A
            <ul className="ml-4 mt-1 border-l pl-3">
              <li>메뉴 A-1</li>
              <li>메뉴 A-2</li>
            </ul>
          </li>
          <li>메뉴 B</li>
        </ul>
      </div>

      {/* 자식 선택자: 바로 아래 한 단계 li만 강조 */}
      <div>
        <p className="mb-1 text-sm text-gray-500">
          자식 선택자 "ul {'>'} li" — 바로 아래 한 단계 li만 대상
        </p>
        {/* [&>li]:... 는 직계 자식 li에만 적용 = > 선택자 */}
        <ul className="rounded bg-gray-50 p-3 text-sm [&>li]:rounded [&>li]:px-2 [&>li]:py-1 [&>li]:hover:bg-emerald-200">
          <li>
            메뉴 A (직계) — hover 대상
            <ul className="ml-4 mt-1 border-l pl-3 text-gray-500">
              {/* 이 안쪽 li들은 손자라서 > 선택자에 걸리지 않음 */}
              <li>메뉴 A-1 (손자, hover 반응 없음)</li>
              <li>메뉴 A-2 (손자, hover 반응 없음)</li>
            </ul>
          </li>
          <li>메뉴 B (직계) — hover 대상</li>
        </ul>
      </div>
    </div>
  )
}
