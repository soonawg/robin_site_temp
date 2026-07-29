# ROBIN Lab 디자인 고안서 — 레퍼런스 랩실 상세 조사

> 조사 기준일: 2026-07-24. 이 문서는 공개 웹페이지와 검색 색인을 바탕으로 한 **구조·콘텐츠·상호작용 조사**다. 각 사이트의 표현을 복제하지 않고, ROBIN의 연구 정체성을 설계하는 재료로만 사용한다.

## 읽는 법

- **확인됨**: 현재 공개 페이지에서 직접 확인한 요소
- **제안**: 확인된 패턴에서 도출한 ROBIN 적용 가능성
- **보류**: 사이트 응답 제한 등으로 현재 화면을 충분히 검증하지 못한 주장

## 0. ROBIN Lab 공식 사이트 — 콘텐츠 원본

- URL: <https://sites.google.com/view/robin-dgist/>
- 확인됨: 첫 화면에서 약어의 풀네임, Physical AI를 향한 미션, 연구실 합류 모집을 한 페이지에 제시한다. 텔레오퍼레이션·HRI(Interface), perception·digital twin(Interaction), AI·robot learning(Intelligence)의 3단 논리가 핵심 메시지다.
- 확인됨: 연구실 소개 뒤에 임베드 데모가 이어지고, 모집 섹션은 동기·성장 기회·제출 서류를 충분한 한국어 문장으로 설명한다.
- 확인됨: Team 페이지는 PI의 이력, 연락처, Scholar/CV 링크를 독립적으로 제공한다. Publications 페이지는 국제저널·학회·특허를 분류하고 논문별 외부 링크/YouTube 링크를 붙인다.
- 제안: 이 정보 구조는 유지하되, 첫 화면의 긴 설명은 한 문장 가치제안과 세 개의 연구축으로 압축하고 상세 내용은 하위 페이지로 보낸다.

근거: [Home](https://sites.google.com/view/robin-dgist/), [Team](https://sites.google.com/view/robin-dgist/team), [Publications](https://sites.google.com/view/robin-dgist/publications)

## 1. APRL — 소속 신뢰도와 연구실 전환 흐름

- URL: <https://team-aprl.github.io/>
- 확인됨: 상단에 DGIST 링크, YouTube, 테마 토글이 있으며, 랩 이름·학과 소속·로고가 분명하게 연결된다.
- 확인됨: Home, Team, Research, Publications, Projects, News, Gallery, Datasets, Teaching, Contact, Joining APRL로 정보 구조가 명확하다.
- 확인됨: 홈은 `Welcome` → 연구실 비전 → `Recruiting` → `Latest News` → `Latest Research Videos`의 순서다. 즉, 방문자가 “누구인가–무엇을 하나–지금 합류 가능한가–무슨 성과가 있나”를 자연스럽게 읽는다.
- 제안: ROBIN도 헤더에 DGIST/학과 소속을 작고 단단하게 고정하고, 홈에는 최대 3개의 최신 성과와 최대 2개의 데모만 노출한다. 나머지는 목록 페이지로 위임한다.

근거: [APRL Home](https://team-aprl.github.io/)

## 2. SNU Data Science & AI Lab — 대규모 연구실의 정보 체계

- URL: <https://data.snu.ac.kr/>
- 확인됨: 홈의 메시지는 짧은 연구실 캐치프레이즈(`Data-driven Intelligence and Innovation`)와 기관명으로 시작한다.
- 확인됨: Research는 Deep Learning, AI, Industrial AI, Intelligent Healthcare의 주제를 이미지·짧은 설명 단위로 나눠, 비전과 개별 연구를 연결한다.
- 확인됨: People은 PI·연구교수·행정·박사후연구원·학생 등 역할별 그룹을 분리하고, 구성원마다 사진/직함/연구영역/연락처를 제공한다.
- 확인됨: Publications는 연도 아카이브, 출판 유형, 날짜, 논문 링크라는 반복 가능한 메타데이터 체계를 갖춘다.
- 제안: ROBIN의 연구축도 “이름–한 줄 설명–대표 시각자료–키워드”라는 동일 형식을 사용한다. People과 Publications는 카드 외관보다 **분류와 메타데이터의 일관성**을 먼저 확정한다.

근거: [Research](https://data.snu.ac.kr/index.php/research/), [People](https://data.snu.ac.kr/index.php/people/), [2026 publications](https://data.snu.ac.kr/index.php/2026/)

## 3. Interactive Robot Lab (KSpark) — 연구 주제의 명료한 언어

- URL: <https://www.kspark.me/>
- 확인됨: Home, How to Join, Team, Publication, Research, Video, Photos, Contact처럼 방문 목적에 맞춰 메뉴를 분리한다.
- 확인됨: 홈의 Research Interest는 네 개 주제로 구성된다: Safe and Dependable Physical AI, Intelligent Robot Skin, Multimodal Physical Perception, Contact-Rich Whole-Body Control.
- 확인됨: 각 주제는 아이콘, 짧은 제목, 비전문가도 이해할 수 있는 2~3문장 설명으로 표현된다. 전문 용어는 설명 안에서만 필요한 만큼 등장한다.
- 제안: ROBIN도 약어 중심 제목 대신 결과 중심 제목을 병기한다. 예: `Interface — 사람이 의도를 정확히 전달하는 조작`, `Interaction — 접촉을 이해하는 감각과 시뮬레이션`, `Intelligence — 데이터로 배우는 물리 지능`.

근거: [Interactive Robot Lab Home](https://www.kspark.me/)

## 4. Collaborative Robotics Lab — 관계와 프로젝트를 보여주는 편집 방식

- URL: <https://collaborativeroboticslab.github.io/>
- 확인됨: News, Team, Projects, Publications, Wiki, Contact의 기본 내비게이션과 함께, 대학·LinkedIn 링크를 헤더/푸터에 연결한다.
- 확인됨: 첫 메시지는 기술 목록이 아니라 다학제 협업의 이유를 이야기하고, 즉시 `Start a collaboration` CTA를 둔다.
- 확인됨: 프로젝트는 대표 이미지, 날짜, 책임자, 제목, 짧은 요약을 반복해 보여준다. 홈은 프로젝트 목록과 팀 소개로 이어진다.
- 제안: ROBIN의 Project/Research 페이지에는 논문 목록과 별개로, `문제 → 시스템/데모 → 연구 결과 → 관련 논문` 흐름의 프로젝트 카드가 필요하다. 산업·학술 협력 문의 CTA도 모집 CTA와 분리한다.

근거: [CRL Home](https://collaborativeroboticslab.github.io/), [Projects](https://collaborativeroboticslab.github.io/projects/)

## 5. ArcoLab — 보류 항목

- URL: <https://danielemolino.github.io/ArcoLab_Website/>
- 보류: 현재 조사 환경에서 해당 GitHub Pages를 안정적으로 불러오지 못했다. 기존 메모의 “타임라인형 소식·프로젝트 비주얼 카드”는 출처 화면을 다시 열어 검증하기 전까지 확정 요구사항으로 사용하지 않는다.
- 제안: 타임라인 자체는 유용하지만, ROBIN에 도입하려면 먼저 뉴스가 월 1건 이상 갱신되는지 확인한다. 갱신 빈도가 낮으면 최신 3건 카드와 전체 아카이브가 더 정직하다.

## 6. RLLAB @ Yonsei (Youngwoon Lee) — 단순함과 최신성

- URL: <https://youngwoon.github.io/>
- 확인됨: Home, Group, Publications, Projects, Apply라는 최소 메뉴만 사용한다.
- 확인됨: 첫 화면은 랩 사진 한 장과 간결한 소개문, `Join us` 링크로 끝난다. 그 아래에 월·연도 표기 뉴스가 시간 역순으로 이어진다.
- 확인됨: Publications 페이지는 `show all / show selected / show all by topic`이라는 가벼운 보기 전환을 첫 요소로 둔다. 출판물을 이미지 카드 집합보다 탐색 가능한 연구 기록으로 다루는 방식이다.
- 확인됨: 뉴스는 논문 수락, 수상, 워크숍, 공동연구, 구성원 이동처럼 연구실의 신뢰를 만드는 사건을 짧은 문장으로 기록한다.
- 제안: ROBIN은 과도한 장식보다 실제 로봇 사진/데모를 우선한다. 뉴스는 카드의 장식용 문구가 아니라 날짜·사건·관련 링크를 갖춘 기록으로 운영한다.

근거: [RLLAB Home](https://youngwoon.github.io/)

## 레퍼런스에서 얻는 공통 원칙

| 원칙 | 관찰된 사례 | ROBIN에서의 의미 |
| --- | --- | --- |
| 첫 화면은 하나의 약속만 말한다 | SNU, RLLAB | Physical AI를 한 문장으로 설명한다 |
| 연구 주제는 3~4개로 제한한다 | KSpark, SNU | Interface / Interaction / Intelligence를 고정 축으로 사용한다 |
| 실제 산출물을 먼저 보여준다 | APRL, CRL, RLLAB | 로봇 사진·영상·논문·프로젝트를 우선 배치한다 |
| 모집은 독립된 전환 경로다 | APRL, KSpark, RLLAB | `Join`을 보조 링크가 아닌 명확한 페이지/CTA로 둔다 |
| 성과 정보는 계속 갱신 가능해야 한다 | SNU, RLLAB | News·Publication 데이터 형식을 표준화한다 |
