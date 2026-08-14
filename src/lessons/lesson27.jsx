export const meta = {
  id: 27,
  title: '테일윈드 + 프리텐다드 폰트 적용',
  subtitle: '웹폰트(Pretendard)를 프로젝트 전역 기본 글꼴로 지정하는 법',
  concepts: [
    'CSS에서 @import url(...)로 웹폰트(CDN)를 불러온다',
    "body { font-family: 'Pretendard', sans-serif } 로 전역 기본 글꼴 지정",
    'Tailwind v4: @theme의 --font-sans를 바꾸면 font-sans 유틸리티에 반영',
    '이 프로젝트에는 이미 Pretendard가 적용되어 있어 아래 샘플이 그 글꼴로 렌더된다',
  ],
}

export default function Lesson() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        아래 텍스트는 프로젝트 전역에 적용된 Pretendard 글꼴로 렌더됩니다.
      </p>

      {/* 굵기(weight) 별 샘플 — Pretendard는 여러 weight를 지원한다 */}
      <div className="space-y-2 rounded border border-gray-200 p-4">
        <p className="text-2xl font-thin">얇게 · The quick brown fox 0123</p>
        <p className="text-2xl font-normal">보통 · The quick brown fox 0123</p>
        <p className="text-2xl font-bold">굵게 · The quick brown fox 0123</p>
        <p className="text-2xl font-black">아주굵게 · The quick brown fox 0123</p>
      </div>

      {/* 실제 문단 렌더 샘플 */}
      <div className="rounded border border-gray-200 p-4 leading-relaxed">
        가나다라마바사아자차카타파하. 프리텐다드는 한글과 영문, 숫자의 균형이
        좋아 웹 UI 본문 글꼴로 널리 쓰입니다. 1234567890
      </div>
    </div>
  )
}
