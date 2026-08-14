// 강의 파일 자동 수집 레지스트리
//
// src/lessons/lessonNN.jsx 형식의 파일을 모두 모아서 정렬된 목록으로 제공한다.
// 새 강의 파일을 추가하면 자동으로 목록에 반영된다. (Vite import.meta.glob)
//
// 각 강의 파일 규격:
//   export const meta = { id, title, subtitle, concepts?: string[], hasDemo?: boolean }
//   export default function Lesson() { ...라이브 데모... }

const modules = import.meta.glob('./lesson*.jsx', { eager: true })
const sources = import.meta.glob('./lesson*.jsx', {
  eager: true,
  query: '?raw',
  import: 'default',
})

// 섹션 정의 (id 범위로 그룹핑)
export const SECTIONS = [
  { key: 'basic', title: '리액트 기초', range: [1, 13] },
  { key: 'state', title: '상태와 이벤트', range: [14, 24] },
  { key: 'css', title: 'CSS · Tailwind · 레이아웃', range: [25, 46] },
  { key: 'todo', title: '할일앱 심화', range: [47, 64] },
]

function sectionOf(id) {
  const found = SECTIONS.find((s) => id >= s.range[0] && id <= s.range[1])
  return found ? found.key : 'etc'
}

export const lessons = Object.entries(modules)
  .map(([path, mod]) => {
    const meta = mod.meta ?? {}
    return {
      id: meta.id,
      title: meta.title ?? '(제목 없음)',
      subtitle: meta.subtitle ?? '',
      concepts: meta.concepts ?? [],
      hasDemo: meta.hasDemo !== false,
      Demo: mod.default,
      source: sources[path] ?? '',
      section: sectionOf(meta.id),
    }
  })
  .filter((l) => typeof l.id === 'number')
  .sort((a, b) => a.id - b.id)

export function getLesson(id) {
  return lessons.find((l) => l.id === Number(id))
}

// 섹션별로 그룹핑된 목록 (사이드바용)
export const groupedLessons = SECTIONS.map((section) => ({
  ...section,
  items: lessons.filter((l) => l.section === section.key),
})).filter((g) => g.items.length > 0)
