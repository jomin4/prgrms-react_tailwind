export const meta = {
  id: 46,
  title: 'flex 3차 메뉴, nested groups 활용',
  subtitle: 'named group으로 1·2·3차가 각 부모 hover에 반응하는 완성형 멀티메뉴',
  concepts: [
    '각 단계 li에 group/lv1, group/lv2 처럼 이름을 붙인다',
    '하위 메뉴는 group-hover/lv1, group-hover/lv2 로 해당 부모에만 반응',
    '이름을 구분해야 3차가 "자기 부모(2차)"에만 정확히 열린다',
    '44·45강(group + nested group)을 합친 실전 멀티메뉴 완성형',
  ],
}

export default function Lesson() {
  const menu = {
    name: '전체 카테고리',
    lv2: [
      { name: '디지털', lv3: ['노트북', '스마트폰', '태블릿'] },
      { name: '패션', lv3: ['상의', '하의', '신발'] },
      { name: '식품', lv3: ['과일', '음료', '간식'] },
    ],
  }

  return (
    // 2·3차가 아래/옆으로 펼쳐지므로 넉넉한 여백
    <div className="pb-64">
      <p className="mb-2 text-sm text-gray-500">
        1차(아래로) → 2차(오른쪽으로) → 3차. 각 단계는 named group으로 자기
        부모에만 반응합니다.
      </p>

      {/* 1차: group/lv1 */}
      <div className="group/lv1 relative inline-block">
        <button className="rounded bg-rose-600 px-5 py-3 font-semibold text-white group-hover/lv1:bg-rose-700">
          {menu.name} ▾
        </button>

        {/* 2차 메뉴: lv1 hover 시 아래로 */}
        <ul className="absolute left-0 top-full z-10 hidden w-40 rounded bg-white shadow-lg group-hover/lv1:block">
          {menu.lv2.map((cat) => (
            // 2차 아이템: group/lv2
            <li key={cat.name} className="group/lv2 relative">
              <div className="flex cursor-pointer items-center justify-between px-4 py-2 text-sm group-hover/lv2:bg-rose-50">
                <span>{cat.name}</span>
                <span className="text-gray-400">›</span>
              </div>

              {/* 3차 메뉴: lv2 hover 시 오른쪽으로 */}
              <ul className="absolute left-full top-0 z-20 hidden w-32 rounded bg-white shadow-lg group-hover/lv2:block">
                {cat.lv3.map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer px-4 py-2 text-sm hover:bg-rose-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
