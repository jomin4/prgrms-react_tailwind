export const meta = {
  id: 2,
  title: 'JSX로 직관적으로 엘리먼트 생성',
  subtitle: 'JSX는 React.createElement의 문법설탕(syntactic sugar)이다',
  concepts: [
    'JSX: <div>처럼 HTML 비슷하게 쓰지만 실제로는 React.createElement로 변환됨',
    '1강의 createElement(태그, 속성, 자식) 를 JSX가 알아서 만들어준다',
    'JSX 안에서 { } 로 자바스크립트 값(변수/식)을 넣을 수 있다',
    'className, style 같은 속성은 두 번째 인자(props)로 들어간다',
  ],
}

// 1강에서 createElement로 만들던 걸 JSX로 훨씬 간단히 작성한다.
export default function Lesson() {
  const name = '리액트'
  const year = 2013

  return (
    <div className="text-center">
      {/* JSX로 만든 엘리먼트들 — 실제로는 createElement로 변환된다 */}
      <h3 className="text-xl font-bold text-blue-500">JSX로 만든 엘리먼트</h3>
      <p className="mt-2 text-gray-600">
        {/* { } 안에 자바스크립트 값을 넣을 수 있다 */}
        {name}는 {year}년에 공개되었어요
      </p>
      <p className="mt-1 text-gray-500">1 + 2 = {1 + 2}</p>
    </div>
  )
}
