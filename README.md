# Seung Ho Yu — Portfolio

AI/ML Engineer 유승호의 포트폴리오. Next.js 15 (static export) + TypeScript + Tailwind CSS.

## Pages

| Route | 내용 |
|---|---|
| `/` | History, Daton, SSAFY, Projects, Recognition, GitHub, Direction |
| `/daton` | Daton 상세 — 온프레미스 CCTV AI 관제, VLM 2차 판정, 증류 번역 모델, LLM Router, 학습 파이프라인, RT 필름, 문제 해결 기록 |
| `/ssafy` | SSAFY 프로젝트 4개 (O!dAb, YooHoo, AlBaro, TONG) |
| `/projects` | 인턴, 공모전, 교육, 연구 프로젝트 |

## Structure

```
app/                     # 페이지 (page.tsx, daton/, ssafy/, projects/)
components/              # ProjectDetail, ProjectCollectionPage
data/                    # 자동 생성된 콘텐츠 (*-content.ts) — 직접 수정하지 않는다
lib/contact.ts           # 연락처 (이메일/전화)
public/                  # profile.jpg, pdfs/ (발표 자료), slides/ (핵심 슬라이드)
scripts/                 # 콘텐츠·에셋 빌드 스크립트
```

## Develop

```bash
npm ci
npm run dev -- -p 3001        # http://localhost:3001
npm run build                 # static export → out/
```

GitHub Pages처럼 하위 경로에 배포할 때는 빌드 시 `NEXT_PUBLIC_BASE_PATH=/portfolio` 를 지정한다
(`.github/workflows/deploy.yml` 이 자동으로 설정).

## Content pipeline

프로젝트 상세 내용은 검수를 거친 JSON으로 관리하고, 스크립트로 `data/*-content.ts` 와 `public/` 에셋을 생성한다.

- `scripts/build-daton-content.py <json-dir>` — `/daton` 콘텐츠 생성
- `scripts/build-project-assets.py <work-dir>` — SSAFY/Projects 콘텐츠, 분할 PDF, 슬라이드 이미지 생성

두 스크립트 모두 내부 메모, 개인정보(이메일·IP·키 등), 고객사 실명 등이 본문에 남아 있으면 생성을 중단한다.

## Privacy

- 이력서 PDF, 내부 보고서(`*.docx`) 등 개인 문서는 저장소 루트에 두더라도 `.gitignore` 로 제외된다.
- 발표 자료 PDF는 팀원 얼굴·이름·개인정보가 있는 장을 제외하고 분할한 것만 공개한다.
