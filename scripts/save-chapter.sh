#!/usr/bin/env bash
#
# 챕터(강의) 완료 시 변경사항을 원격(origin/main)에 자동 반영한다.
# 사용법: bash scripts/save-chapter.sh "1강. 리액트는 엘리먼트 생성기"
#
# 학습자는 이 스크립트를 직접 실행할 필요가 없습니다.
# 강사(Claude)가 각 강의 마무리 시점에 대신 실행합니다.

set -euo pipefail

# 프로젝트 루트로 이동 (스크립트 위치 기준)
cd "$(dirname "$0")/.."

MSG="${1:-학습 진행}"

# 변경사항이 없으면 조용히 종료
if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  echo "ℹ️  변경사항이 없어 반영을 건너뜁니다."
  exit 0
fi

git add -A
git -c commit.gpgsign=false commit -m "study: ${MSG}

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
git push origin main

echo "✅ 원격 반영 완료 → ${MSG}"
