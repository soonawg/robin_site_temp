# DGIST ROBIN 원본 사이트 콘텐츠 이관 정리

기준: [DGIST ROBIN 공식 사이트](https://sites.google.com/view/robin-dgist/)의 Home, Team, Research, Projects, Publications 페이지를 2026-07-24에 재확인했다. 이 문서는 **원본에서 사실로 확인된 내용**만 정리한다. 새 사이트 문장은 더 간결하게 편집할 수 있으나, 사람·기관·기간·성과 정보는 이 문서를 기준으로 확인한다.

## 1. Home — 반드시 가져갈 핵심 문장

### 정체성

- **ROBIN Lab @ DGIST**
- 풀네임: **ROBot INterface, INteraction, and INtelligence**
- 원본 미션의 요지: 고충실도 인터페이스(teleoperation & HRI)와 복잡한 환경 상호작용(perception & digital twin)을 결합해 고품질 데이터를 만들고, AI·robot learning 기반의 robot intelligence와 Physical AI를 지향한다.

새 Home에서는 긴 원문을 그대로 붙이지 않고 다음 세 층으로 나눈다.

| 새 사이트 위치 | 가져갈 내용 |
| --- | --- |
| Hero | `From human intent to physical intelligence.` + 풀네임 |
| Hero/Research 보조문 | Interface, Interaction, Intelligence를 연결해 Physical AI를 만든다는 미션 |
| Research 진입부 | Interface → data → Interaction / Digital Twin → Intelligence의 흐름 |

### 모집 문구

원본 Home의 제목은 **“Join the ROBIN Lab: Seeking Future Co-founders”**다. 새 Join 페이지에는 아래 사실을 구조화해 넣는다.

- 대상: 석사·박사 과정 지원자, 학부 인턴, post-doc에 관심 있는 지원자
- 연구 환경: 휴머노이드, Robot Foundation Model, Digital Twin을 다루는 연구 경험
- 지원 가치: 탑티어 논문 지도, 산업·학계 네트워크, 연구·실무 경험
- 제출물: 자기소개, CV(기술 스택 및 연구/프로젝트 경험), 성적표
- 지원처: `yslee@dgist.ac.kr`
- 일정 주의: 원본은 **2027년 1학기 및 방학 인턴 지원 예정자는 사전 연락**을 요청한다. 매년 시점이 바뀔 수 있으므로 게시 전 PI 확인이 필요하다.

## 2. Research — 원본의 고정 3축과 세부 항목

새 Research 페이지의 분류명은 원본 표기를 유지한다.

| 축 | 원본 세부 연구 항목 | 새 페이지 구성 권장 |
| --- | --- | --- |
| **Robot Interface** | Wearable Sensor Glove with Haptic Feedback; Sensor-fusion based Human Motion Tracking; Dexterous Interface for Humanoid and Teleoperation | 한 문장 개요 + 관련 데모 + 관련 논문 |
| **Robot Interaction** | Digital-Twin Generation with Gaussian Splatting; Robotic Simulation for Physical AI; Safe and Efficient Human-Robot Interaction | 한 문장 개요 + digital twin/시뮬레이션 데모 + 관련 프로젝트 |
| **Robot Intelligence** | Imitation Learning Dataset from Dexterous Interface; Reinforcement Learning with Digital-twin Simulation; Long-horizon Generalizable Task with Robot Foundation Models (RFM) | 한 문장 개요 + 학습/모바일 매니퓰레이터 데모 + 관련 논문 |

현재 Home의 영상은 아래 분류를 기준으로 캡션을 관리한다.

- Robot Interface: VIST, mVIST
- Robot Interaction: Winch simulation, RAL results
- Robot Intelligence: Samsung Research mobile manipulator teleoperation, SR teleoperation

## 3. Projects — 원본 프로젝트 6개

프로젝트 페이지에는 제목, 기간, Funding/Location, 핵심 기여를 모두 보존한다.

### 1) Motion Generation for General Robot-Object Interaction

- 기간: 2025–Present
- 지원: Sejong Science Fellowship, National Research Foundation of Korea (NRF)
- 원본 핵심: 손 움직임과 물체 추적을 동시에 수행하는 기술, digital-twin simulation 환경과 데이터셋 확장, real-virtual co-training 기반 motion generation, 일상 환경 데이터의 실제 로봇 작업 적용

### 2) Humanoid Bimanual Teleoperation System for Precision Manipulation

- 기간: 2025–Present
- 지원: Robot Center, Samsung Research
- 원본 핵심: 햅틱 피드백과 visual-inertial hand tracking을 결합한 glove, dual-arm/dual-hand humanoid용 저지연·고정밀 인터페이스, 정밀 작업의 실시간 실행과 검증

### 3) Photo-Realistic/Physically-Precise Simulator and Large-Scale Multimodal Datasets for Robot Foundation Model

- 기간: 2025–Present
- 지원: Ministry of Trade, Industry and Energy (MOTIE)
- 원본 핵심: 접촉이 풍부한 로봇 행동을 위한 photo-realistic physics simulation, 정확한 물리 신호와 현실 수준 시각 출력, RFM 기반 humanoid Sim-to-Real 검증

### 4) High-Payload Multi-Degree-of-Freedom Aerial Manipulation Robotic Platform

- 기간: 2024–Present
- 지원: Ministry of Trade, Industry and Energy (MOTIE)
- 원본 핵심: aerial manipulator용 bimanual finger interface, sensor fusion·SLAM 기반 상태 추정과 3D digital twin, 물리적으로 정확한 robot AI learning simulation

### 5) AI Simulation Platform for Smart Robots

- 기간: 2022–2024
- 위치: Global AI Center, Samsung Research
- 원본 핵심: smart-home 환경에서 Vision/IMU/LIDAR와 BLDC/Servo 데이터 시뮬레이션, RL·Transformer·motion planning 기반 제어, robot vacuum cleaner와 Bot Handy를 포함한 Samsung robot 출시 기여

### 6) Development of Large Multimodal Model `Samsung Gauss`

- 기간: 2023–2024
- 위치: Global AI Center, Samsung Research
- 원본 핵심: Samsung Gauss 개발 참여, vision-language architecture 설계·학습, LMM과 embodied AI 결합 탐색, Samsung product ecosystem에서 실사용 성능 최적화

## 4. Team / PI — 원본에서 가져올 사실

| 필드 | 원본 표기 |
| --- | --- |
| 이름 | Yong-Seok Lee, P.I. |
| 직함 | Assistant Professor |
| 소속 | Department of Robotics and Mechatronics Engineering, DGIST |
| 이메일 | yslee@dgist.ac.kr |
| 연구실 | Bldg E5 #211, 333 Techno jungang-daero, Hyeonpung-eup, Dalseong-gun, Daegu 42988 |
| 학력 | Ph.D. in Mechanical Engineering, Seoul National University (2021); B.S. in Mechanical and Aerospace Engineering, Seoul National University (2013, Cum Laude, Top 12%) |
| 경력 | Assistant Professor, DGIST (2026–Present); BK Assistant Professor, SNU (2024–2026); Staff Engineer, Global AI Center, Samsung Research (2021–2024) |
| 외부 링크 | Google Scholar, CV |

원본에는 전화번호도 있으나, 새 사이트에 공개할지는 스팸·개인정보 관점에서 PI 확인 후 결정한다.

### Members

- M.S. Students: Kyu-Tae Lee, Yu-Seong Cheon, Hwan-Chul La
- Undergraduate Students: Hye-Sung Lee, Jun-Hyeok Lee, Kang-Jae Seong, Yu-Bin Jeon, Sang-Woo Han, Young-Chan Shim, Sun-hong Min, Ui-Seong Shin, Tae-Yoon Kang, Min-Jae Kim, Tae-ho Kim, Min-Hyung Lee

## 5. Publications — 데이터 이관 원칙

원본 Publications는 아래 세 섹션으로 운영된다.

1. **International Journal** — 2017–2026 논문 9건
2. **International Conference** — 2015–2026 논문·워크숍 11건
3. **Patents** — 미국 1건, 한국 3건

새 Publications에는 원본의 제목, 저자 순서, 공동교신(†), venue, 연도, 링크/YouTube를 보존한다. 특히 다음은 대표·최신 항목으로 우선 이관한다.

- *Human-in-the-Loop Object Segmentation for 3D Gaussian-Splatting* — Advanced Intelligent Systems, 2026
- *Finger-based 3D Human-Swarm Interaction Interface: Design and Human-Subject Evaluation* — Expert Systems with Applications, 2026
- *TE-SDF: Tetra-Encoded Signed Distance Field for Memory-Efficient and Accurate Collision Detection* — RSS, 2026
- *Markerless Tracking of Human Hand Motion using Vision and Inertial Measurements* — ICRA, 2026
- *Human-in-the-Loop Gaussian Splatting for Robotic Teleoperation* — IEEE RA-L, 2025
- *Visual-inertial hand motion tracking with robustness against occlusion, interference* — Science Robotics, 2021

논문 전체를 입력할 때에는 원본 Publications의 링크가 살아 있는지 재확인하고, Project/Video가 있는 논문만 버튼을 표시한다.

## 6. 이관 우선순위

| 우선순위 | 콘텐츠 | 이유 |
| --- | --- | --- |
| P0 | Research 3축의 실제 설명, Projects 6개, PI·Members 최신성 | 사이트의 핵심 신뢰도 |
| P1 | 최신 논문과 각 논문 링크/영상 | 연구 성과 탐색성 |
| P1 | Join의 모집 조건·지원 일정 | 시점 민감 정보 |
| P2 | 원본 사진·YouTube·데모를 Project/Publication에 연결 | 시각적 증거와 탐색성 |
| P2 | PI 전화번호 공개 여부 | 개인정보·스팸 정책 확인 필요 |

## 게시 전 확인 체크리스트

- [ ] PI 직함·이메일·주소·전화번호 공개 여부 확인
- [ ] 2027년 지원 시기 문구가 여전히 유효한지 확인
- [ ] Publications의 저자·venue·링크·공동교신 표기 검증
- [ ] 각 Project의 funding/기간이 최신인지 확인
- [ ] 사진·영상·로고의 사용 권한 및 대체 텍스트 확인
