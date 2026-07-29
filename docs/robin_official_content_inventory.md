# ROBIN Lab 디자인 고안서 — 공식 사이트 콘텐츠 이관 인벤토리

> 기준 출처: 공개된 [ROBIN Lab 공식 Google Sites](https://sites.google.com/view/robin-dgist/). 워크스페이스에 있는 기존 초안·데모 데이터는 이 문서의 이관 근거에 포함하지 않는다.

## 이관 원칙

- 아래의 **그대로 이관** 항목은 사실관계가 있는 원본 콘텐츠다. 표현과 길이는 디자인에 맞게 편집할 수 있지만, 의미·이름·연락처·성과는 출처 확인 후에만 바꾼다.
- 링크·iframe·사진은 새 사이트에 넣기 전 작동 여부와 사용 권한을 다시 확인한다.
- “공식 사이트에 있음”은 곧 “홈에 모두 노출해야 함”을 뜻하지 않는다. Home에는 요약을, 상세는 해당 페이지에 둔다.

## 1. 연구실 정체성 — 그대로 이관

| 필드 | 공식 원본의 의미 | 새 사이트에서의 배치 |
| --- | --- | --- |
| 이름 | ROBIN Lab @ DGIST | 로고/헤더/브라우저 제목 |
| 풀네임 | ROBot INterface, INteraction, and INtelligence | Hero 보조 문구, About |
| 핵심 미션 | 고충실도 Interface와 복잡한 환경 Interaction을 결합해 고품질 데이터셋과 Robot Intelligence를 만들며 Physical AI를 지향 | Hero 한 문장 + Research 도입문 |
| 연구의 세 축 | Teleoperation & HRI / Perception & Digital Twin / AI & Robot Learning | Research의 고정 3축 |
| 모집 메시지 | 미래 공동창업자/연구자를 찾는다는 직접적 어조 | Join 페이지의 제목 또는 보조 카피 |

원문 근거: [Official Home](https://sites.google.com/view/robin-dgist/)

## 2. PI와 연락 정보 — 사실 확인 후 이관

| 항목 | 공식 사이트 표기 | 새 사이트 권장 위치 |
| --- | --- | --- |
| PI | Yong-Seok Lee, Assistant Professor | People 첫 카드, Contact |
| 소속 | Department of Robotics and Mechatronics Engineering, DGIST | 헤더 소속 라인, People |
| 이메일 | yslee@dgist.ac.kr | Contact와 Join CTA |
| 전화·연구실 위치 | Team 페이지에 게시된 전화번호와 E5 #211 주소 | Contact 페이지 (스팸 방지 정책 결정 후) |
| 학력·경력 | SNU 기계공학 박사, SNU BK Assistant Professor, Samsung Research 경력 등 | PI 상세 프로필 |
| 외부 링크 | Google Scholar, CV | PI 프로필의 아이콘 링크 |

원문 근거: [Official Team](https://sites.google.com/view/robin-dgist/team)

## 3. 모집 콘텐츠 — 그대로 이관, 구조만 재편집

공식 홈이 제공하는 모집 정보는 다음과 같다.

- 대상: 대학원생(석사/박사 과정), 학부 인턴, 그리고 관심 있는 post-doc 지원자
- 지향: 자기주도성·성장 의지, 로보틱스 분야 연구 역량
- 연구 환경/가치 제안: 탑티어 논문 지도, 산업·학계 네트워크, 휴머노이드·Robot Foundation Model·Digital Twin 중심의 연구 경험
- 제출물: 자기소개(동기/관심분야/강점), CV(기술 스택·연구/프로젝트 경험), 성적표
- 지원 방식: PI 이메일로 제출, 특정 입학/인턴 시기에는 사전 연락 필요

새 사이트에서는 긴 설명을 다음 네 블록으로 나눈다: `Who we seek` / `What you will work on` / `What to send` / `How to apply`. 원본의 지원 조건과 시기는 게시 직전에 PI에게 확인한다.

원문 근거: [Official Home](https://sites.google.com/view/robin-dgist/)

## 4. Publications — 데이터로 전량 이관

공식 Publications에는 다음의 세 범주가 있다.

| 범주 | 공식 페이지의 구성 | 새 사이트 데이터 필드 |
| --- | --- | --- |
| International Journal | 2026~2017의 저널 논문, 일부 링크/YouTube | 제목, 저자, venue, 연도, 상태, PDF/Project/Video |
| International Conference | RSS·ICRA·IROS 등 학회 논문/워크숍 | 제목, 저자, venue, 연도, 발표 유형, 링크 |
| Patents | 미국·한국 특허 번호와 날짜 | 제목, 발명자, 국가, 번호, 날짜, 링크(가능 시) |

이관 시 지켜야 할 편집 규칙:

1. 저자 표기, 공동교신 표시(†), venue, 연도는 원문 그대로 보존한다.
2. `[link]`, `[youtube]`는 버튼으로 바꾸되, 죽은 링크는 버튼을 숨긴다.
3. 홈에는 최신·대표 논문 3개만 보이고 전체 목록은 Publications에 둔다.
4. 논문이 실제 프로젝트와 연결되면 카드에서 Project 페이지로 상호 링크한다.

원문 근거: [Official Publications](https://sites.google.com/view/robin-dgist/publications)

## 5. 데모·이미지·임베드 — 선별 이관

공식 Home에는 여러 iframe 기반의 시각/영상 콘텐츠가 있다. 새 디자인에 이관할 후보는 다음 순서로 검토한다.

1. 연구실을 가장 잘 대표하는 실제 로봇 데모 1개 — Hero
2. 연구축마다 실제 장면 또는 시뮬레이션 1개 — Research
3. 논문에 연결되는 데모 영상 — Publication/Project

이관 전 체크:

- 원본 파일 또는 YouTube 소유권이 연구실에 있는가?
- 모바일에서 재생 가능한가?
- 영상이 없어도 이해되는 정지 썸네일·캡션이 있는가?
- iframe 대신 공식 영상 링크/자체 호스팅이 더 적절한가?

### Home Featured Demos — 확정 영상

Home의 `Featured Demos`에는 아래 세 YouTube 영상을 사용한다. 각 영상의 최종 제목·설명·대표 프레임은 구현 직전 YouTube에서 확인하고, 원본 URL은 유지한다.

1. [Video 01](https://youtu.be/oryNSCjRrUM?si=ZusBHPs0Boh2WqoP)
2. [Video 02](https://youtu.be/KTttnSafVyo?si=vw4rI6I7dY-S0G8N)
3. [Video 03](https://youtu.be/BwKLuLbfGvY?si=FlsRlmfIwGRxiOx5)

각 카드는 공식 제목, 한 문장 설명, 관련 연구축, `Watch on YouTube` 버튼을 가지며, 해당 논문 또는 프로젝트와 연결한다.

## 6. Projects — 공식 원사이트 기준 전량 이관

Projects는 논문 목록과 분리된 과제·연구 프로젝트 페이지로 운영한다. 다음의 공식 원사이트 프로젝트를 원본으로 이관한다.

| 프로젝트 | 기간 | 지원/소속 | 새 페이지에서 보일 핵심 |
| --- | --- | --- | --- |
| Motion Generation for General Robot-Object Interaction | 2025–Present | Sejong Science Fellowship, NRF | 동시 손·물체 추적, 디지털 트윈, 실·가상 데이터 공동 학습, 일상 환경 데이터셋 |
| Humanoid Bimanual Teleoperation System for Precision Manipulation | 2025–Present | Robot Center, Samsung Research | 햅틱·시각관성 추적 글러브, 양팔·양손 휴머노이드용 저지연 인터페이스 |
| Photo-Realistic/Physically-Precise Simulator and Large-Scale Multimodal Datasets for Robot Foundation Model | 2025–Present | MOTIE | 접촉 풍부 행동의 고정밀 시뮬레이션, 물리 신호/시각 출력, RFM 기반 Sim-to-Real |
| High-Payload Multi-Degree-of-Freedom Aerial Manipulation Robotic Platform | 2024–Present | MOTIE | 양손가락 텔레오퍼레이션, 센서 융합·SLAM, 3D 디지털 트윈 |
| AI Simulation Platform for Smart Robots | 2022–2024 | Global AI Center, Samsung Research | Vision/IMU/LIDAR·액추에이터 시뮬레이션, RL·Transformer·Motion Planning |
| Development of Large Multimodal Model `Samsung Gauss` | 2023–2024 | Global AI Center, Samsung Research | 비전-언어 아키텍처, embodied AI 통합 탐색, 실제 제품 생태계 최적화 |

각 프로젝트 상세에는 `Overview / Period / Support or Location / Key Contributions / Related Publications / Watch`를 표준 필드로 사용한다. 기존 원페이지의 기술 기여는 의미를 바꾸지 않고 영문으로 이관한다.

원문 근거: [Official Projects](https://sites.google.com/view/robin-dgist/projects)

## 이관 전 최종 확인 목록

- [ ] PI 이름·직함·이메일·주소가 최신인가?
- [ ] 모집 대상, 제출물, 지원 시기가 최신인가?
- [ ] 각 논문의 저자·연도·링크가 공식 목록과 일치하는가?
- [ ] 모든 사진·영상·로고에 사용 권한과 대체 텍스트가 있는가?
- [ ] 연구축의 영문·국문 용어가 PI 승인 문구와 일치하는가?
