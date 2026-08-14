import { useState } from 'react'

// 강의 소스코드를 보여주는 접이식 코드 블록
export default function CodeBlock({ code, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  if (!code) return null

  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
      >
        <span>{open ? '▼' : '▶'} 이 강의 소스코드 보기</span>
        <span className="text-xs text-gray-400">lesson source</span>
      </button>
      {open && (
        <pre className="overflow-x-auto bg-gray-900 p-4 text-xs leading-relaxed text-gray-100">
          <code>{code}</code>
        </pre>
      )}
    </div>
  )
}
