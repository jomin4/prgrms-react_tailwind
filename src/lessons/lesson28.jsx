export const meta = {
  id: 28,
  title: 'flex로 간단한 메뉴',
  subtitle: 'nav > ul > li > a 구조를 flex로 가로 배치한 메뉴바',
  concepts: [
    'nav를 flex justify-center로 두어 메뉴 전체를 가운데 정렬',
    'ul을 flex로 두어 li들을 가로로 나열',
    'a에 block/px/py를 주어 클릭 영역을 넓힌다 (inline은 상하 padding이 안 먹음)',
    'hover:로 배경/글자색/밑줄을 바꿔 마우스 반응 효과를 준다',
  ],
}

export default function Lesson() {
  return (
    // nav: 메뉴 전체를 가운데로
    <nav className="flex justify-center">
      {/* ul: li들을 가로로 나열 */}
      <ul className="flex">
        <li>
          <a
            href="#"
            className="block px-10 py-2 font-bold hover:bg-black hover:text-white hover:underline"
          >
            홈
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-10 py-2 font-bold hover:bg-black hover:text-white hover:underline"
          >
            소개
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-10 py-2 font-bold hover:bg-black hover:text-white hover:underline"
          >
            문의
          </a>
        </li>
      </ul>
    </nav>
  )
}
