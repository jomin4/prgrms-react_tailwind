export const meta = {
  id: 41,
  title: 'flex로 2차 메뉴 (드롭다운)',
  subtitle: '1차 메뉴 가로 배치 + hover 시 바로 아래로 2차 메뉴',
  concepts: [
    '1차 메뉴는 flex로 가로 배치',
    '각 1차 아이템: relative + group (서브메뉴 기준점 + hover 그룹)',
    '2차 메뉴: 평소 hidden, group-hover:block 으로 노출',
    'absolute top-full 로 1차 아이템 바로 아래에 펼침',
  ],
}

export default function Lesson() {
  const menus = [
    { name: '회사소개', subs: ['인사말', '연혁', '오시는 길'] },
    { name: '제품', subs: ['노트북', '키보드', '마우스'] },
    { name: '고객지원', subs: ['공지사항', 'FAQ', '문의하기'] },
  ]

  return (
    // 2차 메뉴가 아래로 펼쳐지므로 여백 확보
    <div className="pb-48">
      <p className="mb-2 text-sm text-gray-500">
        1차 메뉴에 마우스를 올리면 2차 메뉴가 바로 아래에 나옵니다.
      </p>
      {/* 1차 메뉴: flex 가로 배치 */}
      <ul className="flex rounded bg-slate-800 text-white">
        {menus.map((menu) => (
          // relative + group: 2차 메뉴의 기준 + hover 감지
          <li key={menu.name} className="group relative">
            <button className="px-4 py-3 font-medium group-hover:bg-slate-700">
              {menu.name}
            </button>
            {/* 2차 메뉴: 평소 hidden → group-hover:block, top-full 로 바로 아래 */}
            <ul className="absolute left-0 top-full z-10 hidden w-40 bg-white text-slate-800 shadow-lg group-hover:block">
              {menu.subs.map((sub) => (
                <li
                  key={sub}
                  className="cursor-pointer px-4 py-2 text-sm hover:bg-slate-100"
                >
                  {sub}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
