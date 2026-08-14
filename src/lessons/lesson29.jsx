export const meta = {
  id: 29,
  title: 'position 속성 정리',
  subtitle: 'static / relative / absolute / fixed의 차이를 표로 비교',
  concepts: [
    'static(기본): 문서 흐름 그대로. top/left 안 먹음 — 비유: 줄 서 있는 사람',
    'relative: 원래 자리를 차지한 채 자기 기준으로 이동 — 비유: 유령의 집(자리는 남음)',
    'absolute: 흐름에서 빠져 가장 가까운 relative 조상 기준으로 배치 — 비유: 떠다니는 유령',
    'fixed: 뷰포트(화면) 기준 고정, 스크롤해도 안 움직임 — 비유: 화면에 붙은 스티커',
  ],
  hasDemo: false,
}

// 개념 비교표만 렌더 (라이브 데모 없음)
export default function Lesson() {
  const rows = [
    {
      name: 'static',
      width: '내용/부모 따름',
      flow: '흐름 유지',
      move: '이동 불가 (top/left 무시)',
      basis: '—',
      metaphor: '줄 선 사람',
    },
    {
      name: 'relative',
      width: '내용/부모 따름',
      flow: '흐름 유지 (원래 자리 남음)',
      move: '자기 원래 위치 기준 이동',
      basis: '자기 자신',
      metaphor: '유령의 집',
    },
    {
      name: 'absolute',
      width: '내용만큼 줄어듦',
      flow: '흐름에서 빠짐 (겹침 가능)',
      move: '조상(relative) 기준 이동',
      basis: '가까운 relative 조상',
      metaphor: '떠다니는 유령',
    },
    {
      name: 'fixed',
      width: '내용만큼 줄어듦',
      flow: '흐름에서 빠짐 (겹침 가능)',
      move: '화면 기준 고정',
      basis: '뷰포트(화면)',
      metaphor: '화면 스티커',
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">값</th>
            <th className="border border-gray-300 p-2">너비</th>
            <th className="border border-gray-300 p-2">흐름/겹침</th>
            <th className="border border-gray-300 p-2">이동</th>
            <th className="border border-gray-300 p-2">기준</th>
            <th className="border border-gray-300 p-2">비유</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td className="border border-gray-300 p-2 font-bold">{r.name}</td>
              <td className="border border-gray-300 p-2">{r.width}</td>
              <td className="border border-gray-300 p-2">{r.flow}</td>
              <td className="border border-gray-300 p-2">{r.move}</td>
              <td className="border border-gray-300 p-2">{r.basis}</td>
              <td className="border border-gray-300 p-2">{r.metaphor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
