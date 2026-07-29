# 📋 ROBIN Lab Website Feedback & Issue Status

---

## 1. 폰트 가독성이 안좋음 -> 후보 변경 및 확정
- [x] **상태: 완료 (Resolved)**
- **적용 내역**: 실시간 폰트 전환 테스트 후, 연구실 고유의 하이테크 감성을 살리는 **`Orbitron`**(타이틀/헤더) + **`Plus Jakarta Sans` / `Pretendard`**(본문) 폰트 시스템으로 최종 확정 및 가독성 최적화 완료.

---

## 2. 전체적으로 좌우폭이 좁음 꽉채우는건 아니여도 넓히기
- [x] **상태: 완료 (Resolved)**
- **적용 내역**: 기존 좁았던 `980px` 중앙 집중식 레이아웃을 **`1320px` 와이드 컨테이너** 규격으로 넓혀서 화면이 시원하고 탁 트이게 개선. (상단 헤더 100% full-width 복구 및 잘림 현상 방지)

---

## 3. 홈 히어로 화면이 전체적으로 비어보임
- [x] **상태: 완료 (Resolved)**
- **적용 내역**: 
  - **연구 분야 태그 칩** (`Teleoperation`, `Digital Twins`, `Physical AI`) 추가
  - **실시간 연구실 지표 칩** (`3 Core Pillars`, `4K Hardware Demo`, `DGIST Robotics Lab`) 추가
  - **4K HARDWARE DEMO 라이브 오버레이 태그** 및 글래스모피즘 액션 버튼 배치로 밀도 높고 풍성한 비주얼 구현

---

## 4. 헤더 중 Team에 마우스를 갖다대면 PI와 Members가 구분되어있는 페이지가 두개 뜨고 각각 들어갈수잇게하기
- [x] **상태: 완료 (Resolved)**
- **적용 내역**:
  - `config/_default/menus.yaml` 상단 네비게이션 드롭다운 세팅 완료
  - **PI 전용 독립 페이지** (`/team/pi/`): 기존 원본 PI 교수님 프로필 사진, 영문 학력/경력, 외부활동 인터랙티브 갤러리 100% 디자인 유지하며 전용 페이지로 분리
  - **Members 전용 독립 페이지** (`/team/members/`): 석사/학부연구생/Alumni 프로필 카드를 모아둔 독립 전용 페이지로 분리
  - **Team Hub 개요 랜딩** (`/team/`): PI 및 Members 카드를 한눈에 보고 각 페이지로 연결해주는 종합 안내 페이지 제공