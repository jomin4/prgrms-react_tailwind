import React from 'react'

export const meta = {
  id: 1,
  title: '리액트는 엘리먼트 생성기이다',
  subtitle: 'DOM · 엘리먼트 · 태그의 관계와 React.createElement',
  concepts: [
    '태그(Tag): 엘리먼트를 정의하는 마크업. 예) <div> ... </div>',
    '엘리먼트(Element): 시작태그+내용+종료태그로 이루어진 하나의 요소',
    'DOM: 엘리먼트들이 모여 만든 트리 구조. JS로 동적 조작 가능',
    '리액트의 본질은 React.createElement(태그, 속성, 자식)로 엘리먼트를 "생성"하는 것',
  ],
}

// JSX 없이 순수 createElement로만 엘리먼트를 생성해본다.
// (2강부터는 이걸 JSX로 편하게 작성한다)
export default function Lesson() {
  return React.createElement(
    'div',
    { className: 'text-center' },
    React.createElement(
      'h3',
      { className: 'text-xl font-bold text-red-500' },
      '리액트는 엘리먼트 생성기이다',
    ),
    React.createElement(
      'p',
      { className: 'mt-2 text-gray-600' },
      'React.createElement 로 직접 만든 엘리먼트입니다',
    ),
  )
}
