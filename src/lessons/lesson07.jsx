export const meta = {
  id: 7,
  title: 'id 선택자, class 선택자, 테일윈드의 원리',
  subtitle: 'CSS 선택자(#id, .class)와 테일윈드 유틸 클래스의 관계',
  concepts: [
    'id 선택자 #box: HTML의 id="box"에 스타일 적용 (한 문서에 하나여야 함)',
    'class 선택자 .box: class="box"에 스타일 적용 (여러 개 재사용 가능)',
    '테일윈드의 원리: 미리 만들어진 유틸 클래스(.p-4, .bg-blue-500 ...)의 모음',
    '결국 셋 다 같은 CSS 속성을 적용 — 방식만 다르다',
  ],
}

// 개념상 id/class/tailwind 3가지 방식 — 실제로는 모두 Tailwind로 같은 결과를 만든다
export default function Lesson() {
  return (
    <div className="flex items-end justify-center gap-6">
      <div className="text-center">
        <div className="h-20 w-20 rounded bg-indigo-500" />
        <p className="mt-2 text-sm text-gray-600">id 선택자 (#box)</p>
      </div>
      <div className="text-center">
        <div className="h-20 w-20 rounded bg-indigo-500" />
        <p className="mt-2 text-sm text-gray-600">class 선택자 (.box)</p>
      </div>
      <div className="text-center">
        <div className="h-20 w-20 rounded bg-indigo-500" />
        <p className="mt-2 text-sm text-gray-600">tailwind 유틸</p>
      </div>
    </div>
  )
}
