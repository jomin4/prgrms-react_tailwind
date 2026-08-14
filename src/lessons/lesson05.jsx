export const meta = {
  id: 5,
  title: 'props와 구조분해할당',
  subtitle: '컴포넌트에 props를 넘겨 재사용 — 구조분해할당으로 깔끔하게 꺼내기',
  concepts: [
    'props: 부모가 자식 컴포넌트에 넘겨주는 값 (함수의 인자와 같다)',
    '<Link href=".." text="네이버" /> 처럼 속성으로 전달',
    '구조분해할당: function Link({ href, text }) 로 props에서 바로 꺼냄',
    '같은 컴포넌트를 props만 바꿔 여러 번 재사용',
  ],
}

// 구조분해할당 ({ href, text }) 로 props를 바로 받는다
function Link({ href, text }) {
  return (
    <a href={href} target="_blank" className="text-blue-600 underline">
      {text}
    </a>
  )
}

export default function Lesson() {
  // 같은 Link 컴포넌트를 props만 바꿔 3번 재사용
  return (
    <div className="text-center leading-8">
      <Link href="https://naver.com" text="네이버" />
      <br />
      <Link href="https://google.com" text="구글" />
      <br />
      <Link href="https://yahoo.com" text="야후" />
    </div>
  )
}
