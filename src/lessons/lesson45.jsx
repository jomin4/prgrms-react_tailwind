export const meta = {
  id: 45,
  title: 'nested group (group/name)',
  subtitle: '그룹이 여러 겹일 때 이름으로 구분해 각각 반응',
  concepts: [
    '이름 없는 group을 겹치면 안쪽/바깥쪽 구분이 안 된다',
    'group/name — 그룹에 이름을 붙여 구분 (예: group/outer)',
    'group-hover/name: — 지정한 이름의 그룹 hover에만 반응',
    '중첩 메뉴에서 "어느 단계에 올렸는지" 정확히 구분할 때 필수',
  ],
}

export default function Lesson() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        바깥 상자와 안쪽 상자에 각각 이름(outer/inner)을 붙였습니다. 어디에
        올리느냐에 따라 반응 대상이 달라집니다.
      </p>

      {/* 바깥: group/outer */}
      <div className="group/outer rounded-lg border-2 border-dashed p-6 hover:border-emerald-400">
        <div className="flex items-center justify-between">
          <span className="font-medium">바깥 상자 (outer)</span>
          {/* outer hover 시에만 켜짐 */}
          <span className="rounded bg-gray-200 px-2 py-0.5 text-xs opacity-40 group-hover/outer:bg-emerald-500 group-hover/outer:text-white group-hover/outer:opacity-100">
            outer hover!
          </span>
        </div>

        {/* 안쪽: group/inner */}
        <div className="group/inner mt-4 rounded-lg border-2 border-dashed p-6 hover:border-sky-400">
          <div className="flex items-center justify-between">
            <span className="font-medium">안쪽 상자 (inner)</span>
            {/* inner hover 시에만 켜짐 */}
            <span className="rounded bg-gray-200 px-2 py-0.5 text-xs opacity-40 group-hover/inner:bg-sky-500 group-hover/inner:text-white group-hover/inner:opacity-100">
              inner hover!
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            여기(안쪽)에 올리면 outer/inner 둘 다 켜지고, 바깥 여백에만
            올리면 outer만 켜집니다.
          </p>
        </div>
      </div>
    </div>
  )
}
