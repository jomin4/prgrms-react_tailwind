import { useState, createContext, useContext } from 'react'

export const meta = {
  id: 64,
  title: '전역상태관리 Context API',
  subtitle: 'createContext + useContext로 Props Drilling 없이 값 공유',
  concepts: [
    'Props Drilling: 안 쓰는 중간 컴포넌트까지 props를 계속 넘겨야 하는 문제',
    'createContext로 공유 통로를 만들고 Provider로 하위 트리를 감싼다',
    '후손 컴포넌트는 useContext로 통로에서 값을 직접 꺼낸다(중간 전달 불필요)',
    '테마, 로그인 유저처럼 여러 곳에서 쓰는 전역값에 적합',
  ],
}

// 1) 공유할 통로(Context) 생성
const ThemeColorContext = createContext(null)

// 2) Provider: 값을 담아 하위 트리에 공급한다
function ThemeColorProvider({ children }) {
  const [color, setColor] = useState('pink') // 'pink' | 'gray'

  const toggle = () => setColor((c) => (c === 'pink' ? 'gray' : 'pink'))

  return (
    <ThemeColorContext.Provider value={{ color, toggle }}>
      {children}
    </ThemeColorContext.Provider>
  )
}

// 색 이름 → tailwind 클래스 매핑(리터럴로 적어야 스캔됨)
const bgClass = { pink: 'bg-pink-500', gray: 'bg-gray-500' }
const textClass = { pink: 'text-pink-600', gray: 'text-gray-600' }

// 3) 후손 A: props 없이 useContext로 테마색을 직접 사용
function ThemedBadge() {
  const { color } = useContext(ThemeColorContext)
  return (
    <span className={`rounded px-3 py-1 text-sm text-white ${bgClass[color]}`}>
      뱃지 ({color})
    </span>
  )
}

// 중간 컴포넌트: props를 하나도 넘겨받지 않는다(드릴링 없음)
function Middle() {
  return (
    <div className="rounded border border-dashed border-gray-300 p-3">
      <p className="mb-2 text-xs text-gray-400">
        나는 중간 컴포넌트. props를 넘기지 않아도 자식이 테마색을 안다.
      </p>
      <ThemedBadge />
    </div>
  )
}

// 3) 후손 B: 토글 버튼도 useContext로 함수를 꺼내 쓴다
function ThemeToggleButton() {
  const { color, toggle } = useContext(ThemeColorContext)
  return (
    <button
      type="button"
      onClick={toggle}
      className={`rounded px-4 py-2 text-sm text-white ${bgClass[color]}`}
    >
      테마색 바꾸기
    </button>
  )
}

function ThemedTitle() {
  const { color } = useContext(ThemeColorContext)
  return (
    <h3 className={`text-lg font-bold ${textClass[color]}`}>
      현재 테마: {color}
    </h3>
  )
}

export default function Lesson() {
  return (
    // Provider로 감싼 하위 트리는 어디서든 테마색에 접근 가능
    <ThemeColorProvider>
      <div className="space-y-3">
        <ThemedTitle />
        <ThemeToggleButton />
        <Middle />
        <p className="text-xs text-gray-400">
          버튼을 누르면 Provider의 color가 바뀌고, useContext를 쓰는 모든 자식이 함께 갱신된다.
        </p>
      </div>
    </ThemeColorProvider>
  )
}
