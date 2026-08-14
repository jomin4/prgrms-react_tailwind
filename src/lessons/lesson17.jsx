import { useState } from 'react'

export const meta = {
  id: 17,
  title: 'x 버튼 누르면 모든 li 삭제',
  subtitle: 'setLinks([]) 로 배열을 통째로 비워 전체 목록을 지운다',
  concepts: [
    '목록 데이터를 state 배열(links)로 관리한다',
    'setLinks([]) — 빈 배열로 갱신하면 모든 항목이 사라진다',
    '배열 state가 바뀌면 map으로 그린 목록이 자동 리렌더된다',
  ],
}

export default function Lesson() {
  const [links, setLinks] = useState([
    '네이버',
    '구글',
    '유튜브',
    '깃허브',
  ])

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-bold text-gray-800">링크 목록</h3>
        {/* 전체삭제: 빈 배열로 갱신 */}
        <button
          onClick={() => setLinks([])}
          className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
        >
          전체삭제 ✕
        </button>
      </div>

      {links.length === 0 ? (
        <p className="text-sm text-gray-400">목록이 비었습니다.</p>
      ) : (
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li
              key={index}
              className="rounded border border-gray-200 px-3 py-2 text-gray-700"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
