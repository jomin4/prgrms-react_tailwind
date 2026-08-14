# 학습 진행 상황 — 프론트 기초 (리액트, 테일윈드)

- 교재: slog.gg/p/14149 (장희성 강사, 전체 64강)
- 환경: 로컬 Vite + React + Tailwind v4 (dev: `npm run dev` → http://localhost:5173)
- 원격: https://github.com/jomin4/prgrms-react_tailwind (public)
- 자동화: 강의 마무리마다 `scripts/save-chapter.sh` 로 자동 커밋·푸시

## 📚 복습 앱 사용법
이미 학습한 전체 64강을 **강의 브라우저 앱**으로 재구성했습니다.

- `npm run dev` 실행 → 왼쪽 사이드바에서 강의 클릭
- 각 강의 페이지: **핵심 개념 + 라이브 데모 + 소스코드 보기**
- 언제든 원하는 강의로 복습·복귀 가능

## 🗂 구조
- `src/lessons/lessonNN.jsx` — 강의별 파일 (meta + 라이브 데모 컴포넌트)
- `src/lessons/registry.js` — 강의 파일 자동 수집(Vite glob) + 섹션 그룹핑
- `src/pages/` — Home(전체 목록), LessonPage(강의 상세)
- `src/components/` — Sidebar, CodeBlock
- 새 강의 추가 = `src/lessons/lessonNN.jsx` 파일만 추가하면 자동 반영

## ✅ 섹션별 재구성 완료 (전체 64강)
- [x] 리액트 기초 (1–13강): 엘리먼트/JSX/컴포넌트/props/map/key
- [x] 상태와 이벤트 (14–24강): state/useState/이벤트/할일 워밍업
- [x] CSS · Tailwind · 레이아웃 (25–46강): flex/position/선택자/멀티메뉴
- [x] 할일앱 심화 (47–64강): useRef/커스텀훅/VirtualDOM/수정·삭제·토글·필터/useEffect/Context API

> 상태: **전체 64강 복습 환경 구축 완료.** 원하는 강의부터 복습하거나, 특정 강의를 더 깊게 다뤄볼 수 있습니다.
