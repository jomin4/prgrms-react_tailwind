export const meta = {
  id: 4,
  title: '테일윈드 가져오기, class 대신 className',
  subtitle: '리액트 JSX에서는 class가 아니라 className으로 클래스를 지정한다',
  concepts: [
    'JSX에서 class는 예약어라 className을 사용한다',
    'Tailwind는 유틸 클래스를 className에 나열해 스타일링한다',
    '임의값(arbitrary value): border-[10px], h-[100px] 처럼 [ ]로 원하는 값 지정',
    'hover: 접두어로 마우스 올렸을 때 스타일 변경',
  ],
}

// 테두리 박스 안에 박스 — hover 시 안쪽 박스의 높이/색이 변한다
export default function Lesson() {
  return (
    <div className="text-center">
      <p className="mb-3 text-sm text-gray-500">박스에 마우스를 올려보세요</p>
      {/* 바깥 박스: 임의값 border-[10px] 사용 */}
      <div className="mx-auto w-[200px] border-[10px] border-gray-300 p-2">
        {/* 안쪽 박스: hover 시 높이와 배경색이 변함 (transition으로 부드럽게) */}
        <div className="h-[100px] bg-sky-300 transition-all duration-300 hover:h-[200px] hover:bg-rose-400" />
      </div>
    </div>
  )
}
