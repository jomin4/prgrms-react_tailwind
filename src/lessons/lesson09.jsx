export const meta = {
  id: 9,
  title: '리액트 학습용 시작 페이지',
  subtitle: 'CodePen 등에서 리액트를 처음 시작할 때의 기본 골격',
  concepts: [
    'CDN으로 react, react-dom을 불러오면 설치 없이 바로 실습 가능',
    'ReactDOM이 루트 DOM(#root)에 App 컴포넌트를 렌더한다',
    'App 컴포넌트가 화면 전체의 시작점(entry) 역할',
    '가장 단순한 시작: "Hello React"를 그려보기',
  ],
}

// 리액트를 처음 시작할 때 그려보는 가장 단순한 화면
export default function Lesson() {
  return (
    <div className="text-center">
      <div className="text-4xl">⚛️</div>
      <h3 className="mt-2 text-2xl font-bold text-cyan-600">Hello React</h3>
      <p className="mt-1 text-gray-500">리액트 학습을 시작합니다</p>
    </div>
  )
}
