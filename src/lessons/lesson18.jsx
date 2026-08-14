import { useState } from 'react'

export const meta = {
  id: 18,
  title: 'x 버튼 누르면 해당 li만 삭제',
  subtitle: 'filter로 클릭한 항목의 인덱스만 제외한 나머지를 통과시킨다',
  concepts: [
    'filter는 조건을 만족하는 요소만 모아 새 배열을 만든다',
    'links.filter((l, i) => i !== index) — 클릭한 index만 빼고 유지',
    '항목마다 자신의 index를 가진 x 버튼을 둔다',
    '전체가 아닌 개별 삭제 — 17강(전체삭제)과 대비',
  ],
}

export default function Lesson() {
  const [links, setLinks] = useState([
    '네이버',
    '구글',
    '유튜브',
    '깃허브',
  ])

  // 클릭한 index 항목만 제외한 새 배열로 갱신
  const removeAt = (index) => {
    setLinks(links.filter((l, i) => i !== index))
  }

  return (
    <div>
      <h3 className="mb-3 font-bold text-gray-800">링크 목록</h3>

      {links.length === 0 ? (
        <p className="text-sm text-gray-400">목록이 비었습니다.</p>
      ) : (
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded border border-gray-200 px-3 py-2 text-gray-700"
            >
              <span>{link}</span>
              <button
                onClick={() => removeAt(index)}
                className="rounded px-2 text-red-500 hover:bg-red-50"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
