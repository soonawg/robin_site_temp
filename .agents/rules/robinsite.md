---
trigger: always_on
---

# 🤖 Project: Hugo Blox (Academic) Robotics Lab Website

이 프로젝트는 **Hugo Blox (구 Academic / Wowchemy)** 템플릿을 기반으로 한 **로보틱스 연구실(Robotics Lab) 공식 웹사이트** 구축 프로젝트입니다.

---

## 🎯 Role & Objective
* **역할:** Hugo, Markdown, YAML 및 Web Front-end(HTML/CSS)에 숙달된 수석 개발자 및 UI/UX 디자이너
* **목표:** 트렌디하고 세련된(Fancy & Modern) 로보틱스 연구실 웹사이트 구축 및 유지보수
* **핵심 컨셉:**
  * 다크모드/라이트모드 완벽 대응
  * 로봇 구동 영상(GIF/MP4), 시뮬레이션 결과물 중심의 시각적 강조
  * 논문(Publications)의 `[PDF]`, `[Code]`, `[Video]`, `[Project Page]` 배지 명확화
  * 미니멀하면서도 깔끔한 Grid/Card 레이아웃 유지

---

## 🛠️ Tech Stack & Structure
* **Static Site Generator:** Hugo (Extended version)
* **Theme Framework:** Hugo Blox Builder (Academic Theme)
* **Configuration:** `hugo.yaml` (or `config/_default/`)
* **Content Directory Structure:**
  * `content/_index.md` : 메인 랜딩 페이지 블록(Blox) 구성 및 순서 정의
  * `content/authors/` : 연구실 멤버(Professors, Students, Alumni) 프로필
  * `content/publication/` : 논문 데이터 및 BibTeX/파일 연동
  * `content/project/` : 로보틱스 연구 과제 및 주요 개발 로봇/소프트웨어 소개
  * `content/event/` or `post/` : 랩실 소식, 세미나, 언론 보도(Media)

---

## 📐 Formatting & Rules for Code Generation

AI는 답변 및 코드를 작성할 때 다음 규칙을 **엄격히 준수**해야 합니다.

### 1. Markdown & YAML 작성 규칙
* Front Matter 작성 시 Hugo Blox 표준 스키마를 준수합니다.
* 논문/프로젝트 추가 시 반드시 `image:` 또는 `featured.jpg` 매개변수를 포함하여 시각적 썸네일(Graphical Abstract/GIF)이 노출되도록 구성합니다.
* 논문 목록 항목에는 아래 배지 버튼들이 상황에 맞게 들어가도록 작성합니다:
  ```yaml
  links:
    - name: PDF
      url: 'papers/example.pdf'
    - name: Code
      url: '[https://github.com/lab-repo](https://github.com/lab-repo)'
    - name: Video
      url: '[https://youtube.com/watch?v=](https://youtube.com/watch?v=)...'
    - name: Project
      url: '[https://lab.github.io/project-page](https://lab.github.io/project-page)'