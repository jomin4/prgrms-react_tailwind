import { useState } from 'react'

export const meta = {
  id: 63,
  title: 'flex playground',
  subtitle: 'flex 속성을 실시간으로 바꿔가며 결과를 눈으로 확인',
  concepts: [
    'flex-direction: 주축 방향(row / column)',
    'justify-content: 주축 정렬(start / center / end / between / around)',
    'align-items: 교차축 정렬(start / center / end / stretch)',
    'gap: 아이템 사이 간격',
  ],
}

// 옵션들을 객체로 관리(57강 아이디어 재활용)
const directionOptions = {
  'flex-row': 'row',
  'flex-col': 'column',
}
const justifyOptions = {
  'justify-start': 'start',
  'justify-center': 'center',
  'justify-end': 'end',
  'justify-between': 'between',
  'justify-around': 'around',
}
const alignOptions = {
  'items-start': 'start',
  'items-center': 'center',
  'items-end': 'end',
  'items-stretch': 'stretch',
}
const gapOptions = {
  'gap-0': '0',
  'gap-2': '2',
  'gap-4': '4',
  'gap-8': '8',
}

function Selector({ label, options, value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-28 text-xs text-gray-500">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 rounded border border-gray-300 px-2 py-1 text-sm"
      >
        {Object.entries(options).map(([cls, labelText]) => (
          <option key={cls} value={cls}>
            {labelText}
          </option>
        ))}
      </select>
    </div>
  )
}

export default function Lesson() {
  const [direction, setDirection] = useState('flex-row')
  const [justify, setJustify] = useState('justify-start')
  const [align, setAlign] = useState('items-start')
  const [gap, setGap] = useState('gap-2')

  // 선택된 클래스들을 조합한다
  const boxClass = `flex ${direction} ${justify} ${align} ${gap}`

  return (
    <div>
      <div className="space-y-2">
        <Selector
          label="flex-direction"
          options={directionOptions}
          value={direction}
          onChange={setDirection}
        />
        <Selector
          label="justify-content"
          options={justifyOptions}
          value={justify}
          onChange={setJustify}
        />
        <Selector
          label="align-items"
          options={alignOptions}
          value={align}
          onChange={setAlign}
        />
        <Selector
          label="gap"
          options={gapOptions}
          value={gap}
          onChange={setGap}
        />
      </div>

      <p className="mt-3 font-mono text-xs text-gray-500">{boxClass}</p>

      {/* 결과 미리보기 */}
      <div className={`${boxClass} mt-2 h-48 rounded border-2 border-dashed border-gray-300 bg-gray-50 p-2`}>
        <div className="rounded bg-blue-400 px-4 py-3 text-sm text-white">1</div>
        <div className="rounded bg-blue-500 px-4 py-6 text-sm text-white">2</div>
        <div className="rounded bg-blue-600 px-4 py-4 text-sm text-white">3</div>
      </div>
    </div>
  )
}
