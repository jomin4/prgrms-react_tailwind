export const meta = {
  id: 12,
  title: 'JSX 최상위 엘리먼트 여러 개는 프래그먼트로',
  subtitle: '여러 개의 루트 엘리먼트를 반환하려면 <>...</> 로 감싼다',
  concepts: [
    'JSX는 하나의 루트만 반환할 수 있다 (2개 이상 나열하면 에러)',
    '프래그먼트 <>...</> 로 감싸면 여러 엘리먼트를 함께 반환 가능',
    '프래그먼트는 실제 DOM에 아무 태그도 남기지 않는다',
    'div로 감싸는 것과 달리 불필요한 래퍼가 생기지 않는다',
  ],
}

// 프래그먼트로 여러 최상위 엘리먼트를 함께 반환한다
export default function Lesson() {
  return (
    <>
      {/* 아래 세 엘리먼트는 감싸는 div 없이 프래그먼트로 묶여 반환된다 */}
      <h3 className="text-lg font-bold text-gray-800">첫 번째 엘리먼트</h3>
      <p className="mt-1 text-gray-600">두 번째 엘리먼트</p>
      <p className="mt-1 text-sm text-gray-400">
        세 개의 루트를 프래그먼트로 묶었어요 (DOM에 래퍼 태그는 없음)
      </p>
    </>
  )
}
