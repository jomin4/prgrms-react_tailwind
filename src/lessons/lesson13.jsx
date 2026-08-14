export const meta = {
  id: 13,
  title: '배열의 내용을 JSX로, map엔 key 필수',
  subtitle: '객체 배열을 map으로 렌더할 때 key를 반드시 지정한다',
  concepts: [
    '객체 배열 [{ id, name }, ...] 을 map으로 <li> 목록 생성',
    'key: 리액트가 각 항목을 구분/추적하는 유니크한 식별자',
    'key가 없으면 리렌더 시 어떤 항목이 바뀌었는지 못 찾아 비효율/버그 발생',
    'key는 index보다 데이터의 고유 id(item.id)를 쓰는 것이 안전',
  ],
}

export default function Lesson() {
  // 각 항목이 고유 id를 가진 객체 배열
  const users = [
    { id: 1, name: '김민서' },
    { id: 2, name: '이지훈' },
    { id: 3, name: '박서연' },
  ]

  return (
    <ul className="mx-auto w-48 space-y-2">
      {/* key에는 고유값 item.id 사용 */}
      {users.map((user) => (
        <li key={user.id} className="rounded bg-gray-50 px-3 py-2">
          <span className="mr-2 text-gray-400">#{user.id}</span>
          <span className="font-medium text-gray-800">{user.name}</span>
        </li>
      ))}
    </ul>
  )
}
