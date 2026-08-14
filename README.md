# 프론트 기초 (리액트 · 테일윈드) 복습 노트

slog.gg 강의 **[프론트 기초(리액트, 테일윈드)](https://www.slog.gg/p/14149)** (장희성 강사, 전체 64강)를
로컬 **Vite + React + Tailwind v4** 환경에서 실습 코드로 재구성한 복습용 프로젝트입니다.

> 이미 학습을 마친 강의를, 각 강의별 **핵심 개념 + 라이브 데모 + 소스코드**로 언제든 다시 꺼내볼 수 있게 정리했습니다.

- **학습 원본**: https://www.slog.gg/p/14149
- **원격 저장소**: https://github.com/jomin4/prgrms-react_tailwind

---

## 🚀 실행 방법

```bash
npm install
npm run dev
```

→ http://localhost:5173 접속. 왼쪽 사이드바에서 강의를 선택하면 **핵심 개념 → 라이브 데모 → 소스코드 보기** 순으로 복습할 수 있습니다.

---

## 🤖 에이전트와 함께 복습하는 법

이 README 하나만 있으면 나중에 에이전트(Claude Code)와 바로 복습을 이어갈 수 있습니다. 예시로 이렇게 말하면 됩니다:

- **"README의 매핑표에서 52강 복습하자"** → 해당 강의 개념 설명 + 데모/코드 함께 리뷰
- **"41강 드롭다운 데모를 원본이랑 더 똑같이 다듬어줘"** → 특정 강의 개선
- **"할일앱 심화(47~64강) 흐름을 처음부터 다시 짚어줘"** → 섹션 단위 복습
- **"38강 코드를 내가 타이핑할 수 있게 단계별로 알려줘"** → 타이핑 학습 모드

> 학습 방식: **에이전트가 개념·코드를 제공하고, 학습자가 직접 타이핑하며 익힌다.** 각 강의(챕터) 마무리 시 `scripts/save-chapter.sh`로 원격에 자동 커밋·푸시됩니다.

---

## 🗂 프로젝트 구조

```
src/
├─ lessons/
│  ├─ lessonNN.jsx     # 강의별 파일 (meta + 라이브 데모 컴포넌트)
│  └─ registry.js      # 강의 파일 자동 수집(Vite glob) + 섹션 그룹핑
├─ pages/
│  ├─ Home.jsx         # 전체 강의 목록
│  └─ LessonPage.jsx   # 강의 상세(개념/데모/코드/이전·다음)
├─ components/
│  ├─ Sidebar.jsx      # 섹션별 강의 네비게이션
│  └─ CodeBlock.jsx    # 소스코드 접이식 표시
└─ index.css           # Tailwind + Pretendard 폰트
```

- **새 강의 추가** = `src/lessons/lessonNN.jsx` 파일만 만들면 목록/사이드바에 자동 반영됩니다.
- 강의 파일 규격: `export const meta = { id, title, subtitle, concepts?, hasDemo? }` + `export default function Lesson() { ... }`

---

## 📚 강의 매핑표 (전체 64강)

각 행의 **원본**은 slog 강의로, **파일**은 로컬 실습 코드로 이동합니다.

### 1) 리액트 기초 (1–13강)

| 강 | 제목 | 핵심 내용 | 링크 |
|---:|------|-----------|------|
| 1 | 리액트는 엘리먼트 생성기이다 | DOM · 엘리먼트 · 태그의 관계와 React.createElement | [원본](https://www.slog.gg/p/14149#1강) · [파일](src/lessons/lesson01.jsx) |
| 2 | JSX로 직관적으로 엘리먼트 생성 | JSX는 React.createElement의 문법설탕 | [원본](https://www.slog.gg/p/14149#2강) · [파일](src/lessons/lesson02.jsx) |
| 3 | App, NaverLink 생성, 프래그먼트 | 컴포넌트의 루트 엘리먼트는 1개 — 프래그먼트로 묶기 | [원본](https://www.slog.gg/p/14149#3강) · [파일](src/lessons/lesson03.jsx) |
| 4 | 테일윈드 가져오기, className | JSX에서는 class가 아니라 className | [원본](https://www.slog.gg/p/14149#4강) · [파일](src/lessons/lesson04.jsx) |
| 5 | props와 구조분해할당 | props로 컴포넌트 재사용 + 구조분해할당 | [원본](https://www.slog.gg/p/14149#5강) · [파일](src/lessons/lesson05.jsx) |
| 6 | div/span, inline vs block | inline은 한 줄에 여러 개, block은 하나 | [원본](https://www.slog.gg/p/14149#6강) · [파일](src/lessons/lesson06.jsx) |
| 7 | id/class 선택자, 테일윈드 원리 | CSS 선택자와 테일윈드 유틸 클래스의 관계 | [원본](https://www.slog.gg/p/14149#7강) · [파일](src/lessons/lesson07.jsx) |
| 8 | 데이터로부터 UI 만들기 (map) | 배열을 map으로 순회해 엘리먼트 목록 생성 | [원본](https://www.slog.gg/p/14149#8강) · [파일](src/lessons/lesson08.jsx) |
| 9 | 리액트 학습용 시작 페이지 | 리액트를 처음 시작할 때의 기본 골격 | [원본](https://www.slog.gg/p/14149#9강) · [파일](src/lessons/lesson09.jsx) |
| 10 | 함수를 정의하는 4가지 방법 | 선언식 · 표현식 · 화살표 · 화살표(축약) | [원본](https://www.slog.gg/p/14149#10강) · [파일](src/lessons/lesson10.jsx) |
| 11 | filter/map + 템플릿 리터럴 | 걸러내고, 변환하고, 백틱으로 문자열 조합 | [원본](https://www.slog.gg/p/14149#11강) · [파일](src/lessons/lesson11.jsx) |
| 12 | 최상위 여러 개는 프래그먼트로 | 여러 루트 엘리먼트를 `<>...</>`로 감싸기 | [원본](https://www.slog.gg/p/14149#12강) · [파일](src/lessons/lesson12.jsx) |
| 13 | 배열을 JSX로, map엔 key 필수 | 객체 배열 렌더 시 key 반드시 지정 | [원본](https://www.slog.gg/p/14149#13강) · [파일](src/lessons/lesson13.jsx) |

### 2) 상태와 이벤트 (14–24강)

| 강 | 제목 | 핵심 내용 | 링크 |
|---:|------|-----------|------|
| 14 | 일반 변수는 UI에 반영 안 됨 | let 변수를 바꿔도 화면은 그대로 | [원본](https://www.slog.gg/p/14149#14강) · [파일](src/lessons/lesson14.jsx) |
| 15 | state 변수 개념 | state는 리액트가 추적하는 특별한 변수 | [원본](https://www.slog.gg/p/14149#15강) · [파일](src/lessons/lesson15.jsx) |
| 16 | useState로 상태 정의 | 상태 갱신 → 컴포넌트 함수 재실행 | [원본](https://www.slog.gg/p/14149#16강) · [파일](src/lessons/lesson16.jsx) |
| 17 | x 버튼 → 모든 li 삭제 | setLinks([]) 로 전체 비우기 | [원본](https://www.slog.gg/p/14149#17강) · [파일](src/lessons/lesson17.jsx) |
| 18 | x 버튼 → 해당 li만 삭제 | filter로 클릭한 항목만 제외 | [원본](https://www.slog.gg/p/14149#18강) · [파일](src/lessons/lesson18.jsx) |
| 19 | TodoItem + 수정모드 토글 | 아이템 컴포넌트 분리, 각자 수정모드 상태 | [원본](https://www.slog.gg/p/14149#19강) · [파일](src/lessons/lesson19.jsx) |
| 20 | 숫자 카운터: 바닐라 vs 리액트 | 직접 DOM 조작 vs state 선언 방식 | [원본](https://www.slog.gg/p/14149#20강) · [파일](src/lessons/lesson20.jsx) |
| 21 | 고치기보다 새로 만들기 | state 변경 → 바뀐 값으로 통째 재실행 | [원본](https://www.slog.gg/p/14149#21강) · [파일](src/lessons/lesson21.jsx) |
| 22 | 홀짝 카운터 | 파생값(홀짝)은 상태로 만들지 않는다 | [원본](https://www.slog.gg/p/14149#22강) · [파일](src/lessons/lesson22.jsx) |
| 23 | 할일 리스트 추가기능 | form submit으로 todos에 추가 | [원본](https://www.slog.gg/p/14149#23강) · [파일](src/lessons/lesson23.jsx) |
| 24 | 할일 리스트 삭제기능 | TodoItem 분리 + add/removeTodo | [원본](https://www.slog.gg/p/14149#24강) · [파일](src/lessons/lesson24.jsx) |

### 3) CSS · Tailwind · 레이아웃 (25–46강)

| 강 | 제목 | 핵심 내용 | 링크 |
|---:|------|-----------|------|
| 25 | flex 개구리 (게임) | flex 정렬(justify/items) 기본 | [원본](https://www.slog.gg/p/14149#25강) · [파일](src/lessons/lesson25.jsx) |
| 26 | flex 디펜스 (게임 2) | flex-direction / gap / wrap | [원본](https://www.slog.gg/p/14149#26강) · [파일](src/lessons/lesson26.jsx) |
| 27 | 프리텐다드 폰트 적용 | 웹폰트를 전역 기본 글꼴로 지정 | [원본](https://www.slog.gg/p/14149#27강) · [파일](src/lessons/lesson27.jsx) |
| 28 | flex로 간단한 메뉴 | nav>ul>li>a를 flex 가로 배치 | [원본](https://www.slog.gg/p/14149#28강) · [파일](src/lessons/lesson28.jsx) |
| 29 | position 속성 정리 | static/relative/absolute/fixed 비교표 | [원본](https://www.slog.gg/p/14149#29강) · [파일](src/lessons/lesson29.jsx) |
| 30 | position 실험 | 같은 컨테이너에서 position별 차이 | [원본](https://www.slog.gg/p/14149#30강) · [파일](src/lessons/lesson30.jsx) |
| 31 | absolute w/h/top/left로 2×2 | 박스 4개로 화면 4등분 | [원본](https://www.slog.gg/p/14149#31강) · [파일](src/lessons/lesson31.jsx) |
| 32 | 1×3 등분 | absolute + h-1/3 세로 3등분 | [원본](https://www.slog.gg/p/14149#32강) · [파일](src/lessons/lesson32.jsx) |
| 33 | 3×3 등분 | 박스 9개로 9칸 그리드 | [원본](https://www.slog.gg/p/14149#33강) · [파일](src/lessons/lesson33.jsx) |
| 34 | top/left/right/bottom 기본값 | 네 모서리에 붙여 방향 기준 이해 | [원본](https://www.slog.gg/p/14149#34강) · [파일](src/lessons/lesson34.jsx) |
| 35 | 네 방향 값만으로 2×2 (w/h 금지) | width/height 없이 칸 크기 만들기 | [원본](https://www.slog.gg/p/14149#35강) · [파일](src/lessons/lesson35.jsx) |
| 36 | 수직수평 중앙 정렬 | top/left 1/2 + -translate 절반 | [원본](https://www.slog.gg/p/14149#36강) · [파일](src/lessons/lesson36.jsx) |
| 37 | 선택자 튜토리얼 | 자손/자식/hover 선택자 시각화 | [원본](https://www.slog.gg/p/14149#37강) · [파일](src/lessons/lesson37.jsx) |
| 38 | 중국집 다층구조 메뉴 | 다층 중첩을 hover 드롭다운으로 | [원본](https://www.slog.gg/p/14149#38강) · [파일](src/lessons/lesson38.jsx) |
| 39 | 선택자 검색대상의 개수 | 선택자가 몇 개 요소를 고르는지 | [원본](https://www.slog.gg/p/14149#39강) · [파일](src/lessons/lesson39.jsx) |
| 40 | CSS 다이너 (게임) | 태그/id/class/속성 선택자 연습 | [원본](https://www.slog.gg/p/14149#40강) · [파일](src/lessons/lesson40.jsx) |
| 41 | flex 2차 메뉴 (드롭다운) | hover 시 바로 아래로 2차 메뉴 | [원본](https://www.slog.gg/p/14149#41강) · [파일](src/lessons/lesson41.jsx) |
| 42 | 3차 메뉴 (중첩 드롭다운) | 2차 hover 시 3차가 우측으로 | [원본](https://www.slog.gg/p/14149#42강) · [파일](src/lessons/lesson42.jsx) |
| 43 | 서브메뉴 활성 시 부모 유지 | 서브메뉴 볼 때 1차도 강조 유지 | [원본](https://www.slog.gg/p/14149#43강) · [파일](src/lessons/lesson43.jsx) |
| 44 | group으로 후손 반응 | 부모 group + 자식 group-hover | [원본](https://www.slog.gg/p/14149#44강) · [파일](src/lessons/lesson44.jsx) |
| 45 | nested group (group/name) | 여러 겹 그룹을 이름으로 구분 | [원본](https://www.slog.gg/p/14149#45강) · [파일](src/lessons/lesson45.jsx) |
| 46 | flex 3차 메뉴, nested groups | 완성형 멀티메뉴 | [원본](https://www.slog.gg/p/14149#46강) · [파일](src/lessons/lesson46.jsx) |

### 4) 할일앱 심화 (47–64강)

| 강 | 제목 | 핵심 내용 | 링크 |
|---:|------|-----------|------|
| 47 | 다시 리액트: 할일 추가, useRef | {id, content} 객체 관리 + useRef id 발급 | [원본](https://www.slog.gg/p/14149#47강) · [파일](src/lessons/lesson47.jsx) |
| 48 | 컴포넌트화 + useTodos 커스텀 훅 | 로직은 훅으로, UI는 서브컴포넌트로 | [원본](https://www.slog.gg/p/14149#48강) · [파일](src/lessons/lesson48.jsx) |
| 49 | 리액트는 UI를 재생성한다 | 고치지 않고 새로 그린다 (타이어 비유) | [원본](https://www.slog.gg/p/14149#49강) · [파일](src/lessons/lesson49.jsx) |
| 50 | Virtual DOM | 매번 새로 만들어도 빠른 이유 | [원본](https://www.slog.gg/p/14149#50강) · [파일](src/lessons/lesson50.jsx) |
| 51 | 할일 삭제 기능 | filter로 특정 id만 걸러내기 | [원본](https://www.slog.gg/p/14149#51강) · [파일](src/lessons/lesson51.jsx) |
| 52 | 할일 수정 (폼 없이) | map으로 해당 id의 content만 교체 (불변성) | [원본](https://www.slog.gg/p/14149#52강) · [파일](src/lessons/lesson52.jsx) |
| 53 | 할일 수정 (prompt) | window.prompt로 새 내용 입력 | [원본](https://www.slog.gg/p/14149#53강) · [파일](src/lessons/lesson53.jsx) |
| 54 | done + 체크박스 토글 | 완료 여부를 done으로 관리·토글 | [원본](https://www.slog.gg/p/14149#54강) · [파일](src/lessons/lesson54.jsx) |
| 55 | 완료/미완료 필터링 (select) | all/done/notDone 필터 적용 | [원본](https://www.slog.gg/p/14149#55강) · [파일](src/lessons/lesson55.jsx) |
| 56 | select value + filteredTodos | select 제어 컴포넌트화 | [원본](https://www.slog.gg/p/14149#56강) · [파일](src/lessons/lesson56.jsx) |
| 57 | 배열보다 객체로 옵션 구성 | 옵션을 객체로 + Object.entries 순회 | [원본](https://www.slog.gg/p/14149#57강) · [파일](src/lessons/lesson57.jsx) |
| 58 | 수정 폼, 모드 스위칭 | 텍스트 ↔ 수정폼 전환 | [원본](https://www.slog.gg/p/14149#58강) · [파일](src/lessons/lesson58.jsx) |
| 59 | 수정 폼 구현 마무리 | TodoModifyForm으로 저장·모드해제 | [원본](https://www.slog.gg/p/14149#59강) · [파일](src/lessons/lesson59.jsx) |
| 60 | ref로 real DOM 접근 (focus) | useRef로 input 참조 후 focus() | [원본](https://www.slog.gg/p/14149#60강) · [파일](src/lessons/lesson60.jsx) |
| 61 | useEffect (1회 / 의존성 배열) | 빈 배열=최초 1회, 값=변할 때만 | [원본](https://www.slog.gg/p/14149#61강) · [파일](src/lessons/lesson61.jsx) |
| 62 | autoFocus vs useRef+useEffect | 마운트 포커스 두 방법 비교 | [원본](https://www.slog.gg/p/14149#62강) · [파일](src/lessons/lesson62.jsx) |
| 63 | flex playground | flex 속성 실시간 조합 미리보기 | [원본](https://www.slog.gg/p/14149#63강) · [파일](src/lessons/lesson63.jsx) |
| 64 | 전역상태관리 Context API | createContext+useContext, Props Drilling 해결 | [원본](https://www.slog.gg/p/14149#64강) · [파일](src/lessons/lesson64.jsx) |

---

## 📌 참고

- 강의 원본 코드 상당수는 CodePen에만 있어, **자료의 개념·단계별 설명을 기반으로 충실히 복원한 실습 코드**입니다. 원본과 100% 동일하지는 않을 수 있습니다.
- 진행 상황은 [PROGRESS.md](PROGRESS.md) 참고.
