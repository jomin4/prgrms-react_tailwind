export const meta = {
  id: 8,
  title: '데이터로부터 UI 만들기 (map)',
  subtitle: '배열 데이터를 map으로 순회해 엘리먼트 목록을 생성한다',
  concepts: [
    'links 배열 → map으로 각 항목을 <li>로 변환',
    'map의 콜백: (항목, index) => JSX',
    'key 속성 필수: 각 항목을 구분할 유니크한 값 (여기선 href)',
    'index로 번호를 매겨 출력할 수 있다',
  ],
}

// 재사용 가능한 링크 아이템 컴포넌트로 분리
function LinkItem({ index, href, text }) {
  return (
    <li className="rounded bg-gray-50 px-3 py-2 hover:bg-gray-100">
      <span className="mr-2 font-bold text-gray-400">{index + 1}.</span>
      <a href={href} target="_blank" className="text-blue-600 underline">
        {text}
      </a>
    </li>
  )
}

export default function Lesson() {
  // 데이터(배열)를 정의하고
  const links = [
    { href: 'https://naver.com', text: '네이버' },
    { href: 'https://google.com', text: '구글' },
    { href: 'https://yahoo.com', text: '야후' },
  ]

  // map으로 UI를 생성한다 — key는 유니크한 href 사용
  return (
    <ul className="mx-auto w-56 space-y-2">
      {links.map((link, index) => (
        <LinkItem key={link.href} index={index} href={link.href} text={link.text} />
      ))}
    </ul>
  )
}
