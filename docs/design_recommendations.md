# ROBIN Lab 디자인 고안서 — 가져올 것과 설계 제안

## 설계 목표

ROBIN은 “보기 좋은 연구실 소개”가 아니라, **Physical AI 연구를 실제 시스템과 성과로 증명하고 좋은 연구자가 합류하도록 돕는 연구실 웹사이트**여야 한다. 디자인은 아래 세 가지 질문에 빠르게 답해야 한다.

1. ROBIN은 무엇을 연구하는가?
2. 실제로 무엇을 만들고 증명했는가?
3. 학생·연구자·협력자는 다음에 무엇을 하면 되는가?

## 브레인스토밍 결정 v0.1 (2026-07-24)

| 주제 | 결정 | 설계 해석 |
| --- | --- | --- |
| 첫인상 | 공학적 정밀함 + 미래성 + 대학 연구실의 신뢰를 모두 추구 | 다크 배경과 과장된 SF 연출에 치우치지 않고, 정돈된 여백·사실 기반 콘텐츠로 균형을 잡는다. |
| 테마 | 라이트·다크 모드 모두 지원 | 동일한 정보 구조를 유지하고, 색·표면·3D 조명만 각 모드에 맞춰 바꾼다. |
| 색 | 딥 블루 + 청록 | 블루는 신뢰/기관성, 청록은 상호작용/데이터 흐름의 강조색으로 쓴다. |
| 3D 재질 | 실재 공학 재질 + 반투명 데이터 레이어 | 금속/카본/고무의 물성을 기본으로, 센서·데이터에만 유리/빛 레이어를 겹친다. |
| 3D 범위 | Hero에서 모든 것을 설명하려 하지 않음 | Hero는 양팔·손·상체의 인상을 담당하고, 촉각/환경/지능은 Research의 각 모드·핫스폿에서 설명한다. |
| 인터랙션 | 3D에는 풍부하게, 나머지는 절제 | 3D에 드래그·핫스폿·3개 모드 전환을 넣되, 카드·스크롤은 작은 반응만 둔다. |
| 실제 장비 | Hero에는 사용하지 않음 | RB5 등 실물 장비는 실제 데모/프로젝트에서만 사실적으로 사용한다. |
| 3D 제작/배경 | Spline 기반 | Hero 모델과 점·선 데이터 공간 배경을 Spline으로 구성한다. |
| Hero 문구 | `ROBIN Lab — Building Physical AI` | 랩 이름과 핵심 약속을 한 줄에 결합한다. `Interface. Interaction. Intelligence.`는 3D 모드/Research의 보조 문구로 활용한다. |
| 3D 조작 | 탭 + 직접 핫스폿 | `Interface / Interaction / Intelligence` 탭과 모델 위 핫스폿을 모두 제공한다. 사용자가 어느 방식으로든 같은 모드에 도달하게 한다. |
| Research 구성 | 이중 구조 | Hero에서는 3D 설명 패널이 전환되고, 아래에서는 세 연구축을 명확한 카드/챕터로 다시 정리한다. |
| Publications 프리뷰 | 작은 썸네일 내부 GIF | 마우스 오버/키보드 포커스 시에만 해당 썸네일을 재생한다. |
| 영상 | 공식 ROBIN YouTube 영상 포함 | YouTube는 Hero 배경이 아니라 `Featured Demos`와 논문/프로젝트의 `Watch` 링크로 사용한다. |
| 언어 | 영어만 | UI·콘텐츠·3D 레이블을 영어로 통일한다. |
| 주요 방문자 | 지원자, 연구자, 산업 협력자 모두 | Home은 연구 비전, Publications는 연구자, Join은 지원자, Projects/Contact는 협력자를 각각 지원한다. |
| Team | `People` 대신 `Team` | 데스크톱 메뉴에서 호버/포커스 시 `PI`와 `Members` 하위 메뉴를 노출한다. 모바일에서는 같은 항목을 탭으로 펼친다. |
| Hero 레이아웃 | 좌측 텍스트 + 우측 3D | 좌측에는 기관 소속, Hero 문구, 짧은 미션, 핵심 CTA를 두고 우측에는 Spline `ROBIN Concept System`을 둔다. 모바일에서는 텍스트 다음에 3D가 온다. |
| 피할 것 | 딱딱하고 단조로운 대학 행정형 화면 | 실제 시각자료, 3D 상호작용, 명확한 서사를 사용하되 장식적 모션을 남발하지 않는다. |

## 권장 정보 구조

| 위치 | 목적 | 반드시 포함할 요소 |
| --- | --- | --- |
| Home | 정체성·신뢰·첫 전환 | 미션, 3 연구축, 대표 데모, 대표 성과, 최신 소식, Join CTA |
| Research | 연구의 이해 | 공식 원본의 Robot Interface / Robot Interaction / Robot Intelligence, 각 축의 문제·방법·시스템 |
| Projects | 과제·연구 프로젝트 탐색 | 과제 목적, 기간, 참여기관, 실제 시스템·성과. 논문과 구분한다. |
| Publications | 학술 성과 탐색 | 최신순 기본 정렬, Topic 필터, 저자, venue, PDF·Project·Video 링크 |
| Team | 사람과 전문성 | `PI`와 `Members` 하위 경로. PI 이력, 구성원 역할, 연구 키워드, 사진, 연락 수단 |
| News | 활동의 최신성 | 날짜, 사건, 한 줄 요약, 관련 외부 링크 |
| Join | 지원 전환 | 대상, 연구 환경, 준비물, 절차, 이메일 |
| Contact | 외부 협력 | 주소, PI 연락처, 협력 문의 CTA |

## 그대로 가져오면 좋은 레퍼런스 패턴

### 1. APRL의 전환 설계

- DGIST·학과 소속을 상단에 작게, 그러나 항상 보이게 둔다.
- `Research / Publications / Join`을 첫 화면의 핵심 경로로 만든다.
- 최신 뉴스와 연구 비디오는 홈에서 미리 보이되, 모두를 보여주려 하지 않는다.

### 2. SNU DS&AI의 데이터 구조

- 연구축·구성원·논문 모두 반복 가능한 필드로 관리한다.
- 논문에는 최소 `연도 / 제목 / 저자 / venue / 링크`를 강제한다.
- 구성원에는 최소 `사진 / 역할 / 연구 키워드 / 선택적 링크`를 강제한다.

### 3. KSpark의 연구 언어

- 연구축 제목은 전문용어와 결과 언어를 함께 쓴다.
- 설명은 “무엇을 쓴다”보다 “로봇이 무엇을 할 수 있게 된다”를 앞에 둔다.

### 3-1. 공식 ROBIN Research 표현 — 그대로 채택

공식 사이트의 세 표기를 메뉴·섹션의 뼈대로 유지한다. 새 디자인은 표현을 바꾸기보다, 각 축에 실제 3D 모드와 프로젝트·논문 연결을 추가한다.

| 공식 연구축 | 공식 세부 주제 | 새 사이트의 3D/콘텐츠 연결 |
| --- | --- | --- |
| Robot Interface | Wearable Sensor Glove with Haptic Feedback; Sensor-fusion based Human Motion Tracking; Dexterous Interface for Humanoid and Teleoperation | 손·조작기·햅틱 신호를 강조한 `Interface` 모드 |
| Robot Interaction | Digital-Twin Generation with Gaussian Splatting; Robotic Simulation for Physical AI; Safe and Efficient Human-Robot Interaction | 환경 메시·접촉점·시뮬레이션 레이어를 강조한 `Interaction` 모드 |
| Robot Intelligence | Imitation Learning Dataset from Dexterous Interface; Reinforcement Learning with Digital-twin Simulation; Long-horizon Generalizable Task with Robot Foundation Models | 센서 데이터에서 정책·행동으로 이어지는 `Intelligence` 모드 |

근거: [Official ROBIN Research](https://sites.google.com/view/robin-dgist/research)

### 4. CRL의 프로젝트 편집 방식

- 프로젝트는 논문 제목의 재표기가 아니라, 사람에게 이해되는 문제와 실제 장면으로 시작한다.
- 연구 협력 CTA와 학생 모집 CTA를 혼용하지 않는다.

### 5. RLLAB의 절제

- 핵심 시각자료는 실제 로봇 사진·영상이어야 한다. 이모지, 추상 그래디언트, 자리표시자는 초기 목업에서만 쓴다.
- 뉴스는 카드 수를 늘리기보다 최신성·사실성·연결성을 유지한다.

### 6. RLLAB형 Publications — 이번 디자인의 채택 방향

- RLLAB Publications는 상단에서 `show all / show selected / show all by topic`처럼 **목록의 관점**을 먼저 제어한다. ROBIN도 논문을 카드 장식으로 과도하게 꾸미기보다, 탐색 가능한 학술 목록으로 만든다.
- 권장 단위는 `연도` 아래의 논문 행이다: 작은 썸네일(선택) / 제목 / 저자 / venue·연도 / 한 줄 기여 / 링크 버튼(PDF, Project, Code, Video).
- 랩 멤버 저자는 본문색과 다른 강조색 또는 굵기로 표시하고 프로필에 연결한다. 이 강조는 모든 논문에서 같은 규칙으로 적용한다.
- 기본 정렬은 **최신순**으로 한다. `Topic`은 두 번째 탐색 축으로 제공하고, `Selected`는 대표 성과를 빠르게 보는 보조 보기로 둔다.
- 썸네일은 평상시에는 정적 대표 프레임을 쓰고, 포인터를 올리거나 키보드로 포커스할 때만 짧은 GIF/영상 프리뷰로 바꾼다. 모바일·저전력 환경에는 정적 프레임을 유지한다.

### 6-1. 공식 YouTube 영상의 배치

- 공식 Google Sites와 Publications에서 연결된 YouTube 영상은 빠짐없이 수집한 뒤, 논문/프로젝트에 연결한다.
- Home의 `Featured Demos`에는 대표 영상 최대 3개만 둔다. 각 카드에는 제목, 1문장 설명, 관련 연구축, 논문/프로젝트 링크, `Watch on YouTube`를 제공한다.
- 영상이 없는 논문은 GIF를 억지로 만들지 않고 정적 이미지 또는 텍스트 목록으로 남긴다.
- YouTube 영상 URL·제목·공개 상태·썸네일 사용 권한은 구현 직전에 공식 사이트와 다시 대조한다. 현재 검색만으로는 공식 채널/개별 URL을 안정적으로 식별할 수 없었다.

## 시각 시스템 초안

아직 함께 확정할 선택지이며, 여기서는 결정을 고정하지 않는다.

| 항목 | 권장 방향 | 피할 것 |
| --- | --- | --- |
| 톤 | 정밀한 공학 실험실 + 사람의 조작감 | 게임 UI처럼 과도하게 발광하는 화면 |
| 색 | DGIST 계열 딥 블루를 기본, 청록을 `Interaction`, 앰버를 `Intelligence` 강조색으로 제한 | 섹션마다 다른 무지개 색, 큰 면적의 고채도 그라디언트 |
| 타이포 | 영문은 명료한 산세리프, 한글은 안정적 본문 서체; 계층을 크기·굵기로 구분 | 제목마다 다른 글꼴·대문자 과사용 |
| 이미지 | 실제 실험 장면, 로봇 클로즈업, 시뮬레이터 캡처를 16:9 기준으로 준비 | 저작권이 불명확한 로봇 스톡 이미지 |
| 카드 | 동일한 반경·여백·테두리, 호버는 작은 상승/테두리 변화만 | 모든 요소의 그림자·블러·호버 애니메이션 |
| 다크 모드 | 명도 대비를 유지하고 영상 썸네일은 별도 검토 | 라이트 모드를 단순 반전한 저대비 화면 |

## 3D 인터랙션 — 이번 디자인의 채택 방향

3D는 배경 장식이 아니라 연구실의 연구 구조를 설명하는 **하나의 조작 가능한 모델**로 사용한다. 첫 버전의 권장 범위는 다음과 같다.

### 결정: RB5 사진이 아닌 `ROBIN Concept System`

현재 보유 장비인 RB5를 브랜드의 얼굴로 고정하지 않는다. 대신, ROBIN의 연구 비전을 하나의 독자적 시스템으로 번역한 3D 콘셉트 자산을 만든다. 이 자산은 특정 휴머노이드 제품의 복제가 아니라 다음 연구 언어를 보여주는 조형물이다.

- **Interface**: 사람 손/조작 장치와 연결되는 양손형 말단부 또는 햅틱 신호
- **Interaction**: 손·팔·작업물 표면의 접촉 센서와 환경 메시
- **Intelligence**: 센서 데이터가 정책/행동으로 연결되는 추상화된 데이터 흐름

이름은 `ROBIN Concept System` 또는 `ROBIN Physical AI Stack`처럼 표기한다. 캡션에 `Concept visualization — not a depiction of current lab hardware.`를 함께 두어, 콘셉트가 실재 장비로 오인되지 않게 한다. RB5는 실제 프로젝트·데모·People/Facilities 콘텐츠에서 사실 그대로 사용한다.

### Spline 자산 탐색·조합안

가장 적합한 방향은 **Dual-Arm Interface Core**다. 중앙의 얇은 토르소/코어에서 두 개의 산업용 팔이 비대칭으로 뻗고, 양 끝의 다관절 손이 작은 작업물을 향한다. 실제 휴머노이드 제품을 재현하지 않으면서도 텔레오퍼레이션·촉각·디지털 트윈·학습을 모두 담을 수 있다.

1. **기본 형상**: Spline Community의 산업용 로봇 팔 또는 양팔 자산을 시작점으로 사용하고, 관절·손·중앙 코어의 비율을 ROBIN 전용으로 재구성한다. 참고 가능한 [interactive robot arm community file](https://app.spline.design/community/file/919785ac-dd6c-46a5-bd43-8873073cba4d)는 조작 방식 참고용이며, 최종 사용 전 remix/상업적 사용 조건을 확인한다.
2. **촉각 레이어**: 손가락 끝과 손바닥에 작은 청록 센서 노드를 두고, `Interaction` 모드에서만 켠다.
3. **디지털 트윈 레이어**: 배경의 점·선 공간과 작업물 주변의 반투명 메시를 `Interaction` 모드에서 보인다.
4. **지능 레이어**: 센서 노드 → 중앙 코어 → 손/팔 동작으로 이어지는 가는 데이터 궤적을 `Intelligence` 모드에서 보인다.
5. **조작 레이어**: 화면 외곽의 사람 손/컨트롤러 실루엣 또는 입력 파형을 `Interface` 모드에서 보인다.

Spline Community에서의 검색어: `robot arm`, `industrial robot`, `robot hand`, `particles`, `data visualization`, `abstract network`. 모델을 한 개의 커뮤니티 씬으로 통째로 쓰지 않고, 권한을 확인한 뒤 필요한 요소만 리믹스·재조합한다.

| 위치 | 사용자 경험 | 3D 자산 |
| --- | --- | --- |
| Hero | 드래그/자동 완만 회전으로 ROBIN 연구 시스템을 관찰 | `ROBIN Concept System` 1종 |
| Research | 핫스폿을 누르면 Interface / Interaction / Intelligence 설명으로 전환 | 같은 모델의 손·센서·환경·정책 경로 강조 |
| Project | 필요할 때만 실제 시스템을 3D로 탐색 | 논문 프로젝트별 모델 또는 시뮬레이터 캡처 |

필수 가드레일:

- 모바일·저사양 기기에는 첫 프레임 이미지 또는 짧은 MP4를 제공한다.
- `prefers-reduced-motion`에서는 자동 회전을 끈다.
- 3D가 로드되기 전에도 제목, 미션, CTA가 바로 읽혀야 한다.
- 한 페이지에는 주력 3D 씬 하나만 둔다. 나머지는 영상·이미지로 대체한다.
- 실제 연구 자산(URDF/CAD/시뮬레이션 결과)을 시각용으로 쓸 때 공개 가능 범위와 라이선스를 확인한다.
- Spline 씬은 초기 로딩 상태와 오류 시 정적 포스터를 제공하며, 3D 기능이 페이지의 핵심 문구·CTA를 막지 않게 한다.

## Home 권장 순서

```text
기관/학과 소속
Hero: 좌측 미션 한 문장·CTA / 우측 인터랙티브 `ROBIN Concept System`
Research: Interface / Interaction / Intelligence
Featured Projects: 대표 프로젝트 2~3개
Latest Publications: 대표 논문 3개
Lab Updates: 최신 소식 3개
Join ROBIN: 지원 CTA
Contact / DGIST / Social links
```

## 디자인 결정을 위한 브레인스토밍 안건

다음 대화에서 아래 순서로 함께 결정하면, 이후 화면 설계가 흔들리지 않는다.

1. 첫 화면에서 관람자가 가장 먼저 봐야 할 실제 장면은 무엇인가? (텔레오퍼레이션, 촉각 센싱, 디지털 트윈, 휴머노이드 중 하나)
2. ROBIN을 한 문장으로 말할 때, `Physical AI`를 전면에 둘지 `Human–Robot Interface`를 전면에 둘지?
3. 사이트의 주 방문자는 누구인가? (지원 학생, 공동연구자/산업체, 논문 독자 중 우선순위)
4. 연구실이 실제로 꾸준히 생산할 수 있는 콘텐츠는? (데모 영상, 프로젝트 사진, 뉴스, 논문)
5. 언어는 영어 우선/한영 병기/한국어 우선 중 무엇인가?
