export const meta = {
  id: 3,
  title: 'App, NaverLink 생성, 프래그먼트 사용',
  subtitle: '컴포넌트의 루트 엘리먼트는 1개여야 한다 — 프래그먼트로 묶기',
  concepts: [
    '컴포넌트가 return 하는 최상위(루트) 엘리먼트는 반드시 1개',
    '여러 엘리먼트를 감싸려면 프래그먼트 <>...</> 사용',
    '프래그먼트는 실제 렌더 시 사라진다 (불필요한 div를 안 만든다)',
    'target="_blank" 로 링크를 새 창에서 연다',
  ],
}

// 각 링크를 별도 컴포넌트로 분리 — 재사용/가독성 향상
function NaverLink() {
  return (
    <a href="https://naver.com" target="_blank" className="text-green-600 underline">
      네이버
    </a>
  )
}

function GoogleLink() {
  return (
    <a href="https://google.com" target="_blank" className="text-blue-600 underline">
      구글
    </a>
  )
}

function YahooLink() {
  return (
    <a href="https://yahoo.com" target="_blank" className="text-purple-600 underline">
      야후
    </a>
  )
}

export default function Lesson() {
  // 루트가 1개여야 하므로 프래그먼트 <>로 묶는다 (렌더 시 사라짐)
  return (
    <div className="text-center leading-8">
      <NaverLink />
      <br />
      <GoogleLink />
      <br />
      <YahooLink />
    </div>
  )
}
