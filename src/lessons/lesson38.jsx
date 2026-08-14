export const meta = {
  id: 38,
  title: '중국집 메뉴로 알아보는 다층구조 메뉴',
  subtitle: '요리(면류/밥류) > 세부메뉴의 다층 중첩을 hover 드롭다운으로',
  concepts: [
    '메뉴는 대분류 > 소분류 > 항목 처럼 계층(tree) 구조를 가진다',
    'group + group-hover 로 부모에 마우스 올리면 자식 메뉴를 표시',
    'relative(부모) + absolute(자식)으로 펼쳐질 위치를 잡는다',
    '평소 hidden, hover 시 block 으로 서브메뉴 노출',
  ],
}

export default function Lesson() {
  // 중국집 대분류 > 세부 메뉴 데이터
  const categories = [
    { name: '면류 🍜', items: ['짜장면', '짬뽕', '울면', '기스면'] },
    { name: '밥류 🍚', items: ['볶음밥', '잡채밥', '오므라이스'] },
    { name: '요리 🥟', items: ['탕수육', '깐풍기', '유산슬'] },
  ]

  return (
    // 서브메뉴가 카드 밖으로 넘치지 않도록 아래 여백 확보
    <div className="pb-56">
      <p className="mb-2 text-sm text-gray-500">
        대분류에 마우스를 올리면 세부 메뉴가 펼쳐집니다.
      </p>
      <ul className="flex gap-3">
        {categories.map((cat) => (
          // relative + group: 이 li가 서브메뉴의 기준점이자 hover 감지 그룹
          <li key={cat.name} className="group relative">
            <button className="rounded bg-red-500 px-4 py-2 font-semibold text-white group-hover:bg-red-600">
              {cat.name}
            </button>
            {/* 평소 hidden, 부모 hover 시 block → 바로 아래(top-full)에 표시 */}
            <ul className="absolute left-0 top-full z-10 mt-1 hidden w-40 rounded border bg-white py-1 shadow-lg group-hover:block">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer px-3 py-2 text-sm hover:bg-red-50"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
