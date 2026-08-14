export const meta = {
  id: 43,
  title: '2차 메뉴 활성 시 부모 아이템 활성 유지',
  subtitle: '서브메뉴를 보고 있을 때 1차(부모) 아이템도 강조 유지',
  concepts: [
    '서브메뉴로 마우스가 넘어가도 부모 그룹(group) 안이면 hover 유지',
    'group-hover: 를 부모 버튼에도 적용하면 열려있는 동안 강조 유지',
    '이렇게 하면 "지금 어느 메뉴를 보고 있는지" 시각적으로 표시된다',
    '부모 li 전체가 group이므로 자식 위에서도 hover가 끊기지 않는다',
  ],
}

export default function Lesson() {
  const menus = [
    { name: '메뉴 A', subs: ['A-1', 'A-2', 'A-3'] },
    { name: '메뉴 B', subs: ['B-1', 'B-2'] },
    { name: '메뉴 C', subs: ['C-1', 'C-2', 'C-3'] },
  ]

  return (
    <div className="pb-48">
      <p className="mb-2 text-sm text-gray-500">
        서브메뉴 위로 마우스를 옮겨도 부모(1차) 아이템이 파랗게 유지됩니다.
      </p>
      <ul className="flex rounded bg-gray-100">
        {menus.map((menu) => (
          // li 전체가 group → 자식 위에 있어도 group-hover 유지
          <li key={menu.name} className="group relative">
            {/* 부모 버튼: group-hover 시(=서브메뉴 열림 동안) 계속 강조 */}
            <button className="px-4 py-3 font-semibold text-slate-700 group-hover:bg-blue-500 group-hover:text-white">
              {menu.name}
            </button>
            <ul className="absolute left-0 top-full z-10 hidden w-36 bg-white shadow-lg group-hover:block">
              {menu.subs.map((sub) => (
                <li
                  key={sub}
                  className="cursor-pointer px-4 py-2 text-sm hover:bg-blue-50"
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
