import { useState, useEffect } from 'react'

export const meta = {
  id: 61,
  title: 'useEffect (마운트시 1회 / 의존성 배열)',
  subtitle: '빈 배열이면 최초 1회, 값을 넣으면 그 값이 바뀔 때만 실행',
  concepts: [
    'useEffect(함수, 의존성배열): 렌더 이후 "부수효과"를 실행한다',
    '의존성배열 [] → 마운트 시 최초 1회만 실행',
    '의존성배열 [a] → a가 바뀔 때마다 실행(최초 포함)',
    '의존성배열 생략 → 매 렌더마다 실행(보통 원하지 않음)',
  ],
}

export default function Lesson() {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)
  const [logs, setLogs] = useState([])

  const addLog = (msg) => setLogs((prev) => [...prev, msg])

  // [] : 마운트 시 딱 1회. "환영합니다"는 한 번만 찍힌다.
  useEffect(() => {
    addLog('환영합니다 (마운트 1회)')
  }, [])

  // [countA] : countA가 바뀔 때만 실행. countB 변경엔 반응하지 않는다.
  useEffect(() => {
    addLog(`countA 변경 감지 → ${countA}`)
  }, [countA])

  return (
    <div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setCountA(countA + 1)}
          className="rounded bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
        >
          A 증가 ({countA})
        </button>
        <button
          type="button"
          onClick={() => setCountB(countB + 1)}
          className="rounded bg-gray-500 px-4 py-2 text-sm text-white hover:bg-gray-600"
        >
          B 증가 ({countB})
        </button>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        effect 실행 로그 (총 {logs.length}회) — B를 눌러도 countA effect는 실행 안 됨
      </p>
      <ul className="mt-2 max-h-40 space-y-1 overflow-auto rounded bg-gray-50 p-2 text-xs">
        {logs.map((log, i) => (
          <li key={i} className="text-gray-700">
            {i + 1}. {log}
          </li>
        ))}
      </ul>
    </div>
  )
}
