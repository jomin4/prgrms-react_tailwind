export const meta = {
  id: 44,
  title: 'group으로 조상에 반응하는 후손 만들기',
  subtitle: '부모에 group, 자식에 group-hover: 로 부모 hover에 반응',
  concepts: [
    '자식은 자기 자신의 hover만 안다 → 부모 hover는 직접 못 챙긴다',
    'Tailwind group: 부모에 "group" 클래스를 붙여 hover 상태를 공유',
    '자식은 "group-hover:..." 로 부모가 hover되면 스타일 변경',
    '드롭다운의 핵심 원리 — 부모에 올렸을 때 자식(메뉴)을 보여준다',
  ],
}

export default function Lesson() {
  return (
    <div className="space-y-6">
      {/* 부모 카드에 group, 자식들이 group-hover로 반응 */}
      <div>
        <p className="mb-1 text-sm text-gray-500">
          카드(부모)에 마우스를 올리면 자식 텍스트/뱃지가 함께 바뀝니다.
        </p>
        {/* group: 이 div가 hover 상태를 자식에게 공유 */}
        <div className="group cursor-pointer rounded-lg border p-5 transition hover:border-purple-400 hover:bg-purple-50">
          {/* 자식: 부모 hover(group-hover) 시 색/굵기 변경 */}
          <h3 className="text-lg font-medium text-slate-700 group-hover:text-purple-700 group-hover:font-bold">
            프리미엄 요금제
          </h3>
          <p className="mt-1 text-sm text-gray-500 group-hover:text-purple-600">
            부모에 hover하면 이 설명도 함께 반응합니다.
          </p>
          {/* 평소 숨김, 부모 hover 시 등장 */}
          <span className="mt-3 hidden rounded bg-purple-600 px-3 py-1 text-xs text-white group-hover:inline-block">
            지금 가입하기 →
          </span>
        </div>
      </div>

      {/* 간단한 드롭다운도 결국 이 원리 */}
      <div>
        <p className="mb-1 text-sm text-gray-500">
          같은 원리 — 부모 버튼 hover 시 숨겨둔 메뉴 노출
        </p>
        <div className="group relative inline-block">
          <button className="rounded bg-slate-800 px-4 py-2 text-white">
            더보기 ▾
          </button>
          <div className="absolute left-0 top-full z-10 mt-1 hidden w-32 rounded border bg-white py-1 shadow group-hover:block">
            <div className="px-3 py-1.5 text-sm hover:bg-slate-100">복사</div>
            <div className="px-3 py-1.5 text-sm hover:bg-slate-100">공유</div>
            <div className="px-3 py-1.5 text-sm hover:bg-slate-100">삭제</div>
          </div>
        </div>
      </div>
    </div>
  )
}
