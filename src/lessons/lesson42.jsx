export const meta = {
  id: 42,
  title: '3차 메뉴 (중첩 드롭다운)',
  subtitle: '2차 메뉴 아이템 hover 시 3차 메뉴가 우측으로 펼쳐짐',
  concepts: [
    '2차 아이템도 relative + group 으로 만들어 3차의 기준점이 된다',
    '3차 메뉴: absolute left-full top-0 → 부모 아이템의 오른쪽에 붙는다',
    '평소 hidden, 부모 hover 시 group-hover:block 으로 노출',
    '메뉴는 이렇게 group을 겹쳐 계층적으로 확장한다',
  ],
}

export default function Lesson() {
  const data = {
    name: '제품',
    subs: [
      { name: '노트북', third: ['13인치', '15인치', '17인치'] },
      { name: '키보드', third: ['기계식', '무접점', '멤브레인'] },
      { name: '마우스', third: ['유선', '무선'] },
    ],
  }

  return (
    // 2·3차 메뉴가 아래/옆으로 넓게 펼쳐지므로 여백 확보
    <div className="pb-56">
      <p className="mb-2 text-sm text-gray-500">
        1차 → (아래) 2차 → (오른쪽) 3차 로 펼쳐집니다.
      </p>
      <ul className="flex rounded bg-indigo-700 text-white">
        {/* 1차 아이템 */}
        <li className="group relative">
          <button className="px-4 py-3 font-medium group-hover:bg-indigo-600">
            {data.name}
          </button>
          {/* 2차 메뉴: 1차 바로 아래 */}
          <ul className="absolute left-0 top-full z-10 hidden w-40 bg-white text-slate-800 shadow-lg group-hover:block">
            {data.subs.map((sub) => (
              // 2차 아이템도 relative + group → 3차의 기준점
              <li key={sub.name} className="group/sub relative">
                <div className="flex cursor-pointer items-center justify-between px-4 py-2 text-sm hover:bg-slate-100">
                  <span>{sub.name}</span>
                  <span className="text-gray-400">›</span>
                </div>
                {/* 3차 메뉴: 부모의 오른쪽(left-full, top-0)에 붙음 */}
                <ul className="absolute left-full top-0 z-20 hidden w-32 bg-white text-slate-800 shadow-lg group-hover/sub:block">
                  {sub.third.map((t) => (
                    <li
                      key={t}
                      className="cursor-pointer px-4 py-2 text-sm hover:bg-indigo-50"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}
