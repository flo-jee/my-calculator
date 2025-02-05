계산기 PBL 프로젝트
포트폴리오 프로젝트
이 프로젝트는 HTML, CSS, JavaScript를 활용하여 기본적인 계산 기능을 구현한 웹 계산기입니다.
프로젝트 진행 과정에서는 기능별 브랜치 전략, Gitmoji CLI를 통한 커밋 메시지 작성, 그리고 Git reset 명령어 실습 등을 경험하였습니다.

목차
프로젝트 소개
주요 기능
실행 화면
기술 스택
개발 및 Git 전략
설치 및 실행 방법
향후 개선 사항
라이선스
작성자
프로젝트 소개
이 계산기 프로젝트는 HTML, CSS, JavaScript를 이용하여 사칙연산(+, -, , /) 기능을 제공하는 간단한 웹 계산기를 구현한 프로젝트입니다.
프로젝트 진행 과정에서는 기능별 브랜치(feature/)를 생성하여 작업하고, 통합용 develop 브랜치에서 여러 번의 커밋 이력을 남긴 후 최종적으로 main 브랜치에 병합하는 전략을 사용했습니다.
또한, Gitmoji CLI(gitmoji -c)를 통해 일관된 커밋 메시지를 작성하고, 의도적으로 발생시킨 잘못된 커밋에 대해 git reset 명령어로 복구하는 경험도 포함되어 있습니다.

주요 기능
계산 기능:

사칙연산(+, -, *, /) 지원
입력한 수식에 대해 실시간 계산 및 결과 출력
잘못된 수식 입력 시 에러 처리
사용자 인터페이스:

직관적인 계산기 UI
CSS를 활용한 깔끔한 스타일링 및 반응형 레이아웃
버전 관리 및 Git 전략:

기능별 브랜치(HTML, CSS, JS)를 활용한 체계적인 개발 프로세스
develop 브랜치에서 최소 3개 이상의 커밋 이력 유지
Gitmoji CLI를 통한 인터랙티브 커밋 메시지 작성
Git reset 실습을 통한 잘못된 커밋 복구 경험
실행 화면
아래는 계산기 프로젝트의 실행 화면 예시입니다.
프로젝트를 실행하면 다음과 같은 인터페이스를 확인할 수 있습니다.

Image


참고:
screenshot.png 파일은 프로젝트 루트 디렉토리에 위치하며, 계산기의 주요 UI를 보여줍니다.
만약 이미지가 보이지 않는다면, 해당 파일을 추가하거나 이미지 경로를 수정해 주세요.

기술 스택
HTML5: 문서 구조 작성
CSS3: 스타일링 및 레이아웃 구성
JavaScript: 동적 기능 구현 (버튼 클릭 이벤트, 수식 계산)
Git: 버전 관리
Gitmoji CLI: gitmoji -c를 통한 일관된 커밋 메시지 작성
브랜치 전략: feature 브랜치 → develop 브랜치 → main 브랜치
Reset 연습: 의도적으로 발생시킨 잘못된 커밋을 git reset 명령어로 복구
개발 및 Git 전략
브랜치 구조:

main 브랜치: 최종 배포 가능한 코드가 위치
develop 브랜치: 기능 통합 및 테스트 브랜치
feature/* 브랜치: HTML, CSS, JavaScript 각각의 기능 개발을 위한 개별 브랜치
커밋 메시지:

Gitmoji CLI를 사용하여 커밋 메시지를 작성 (gitmoji -c 명령어 활용)
예시 메시지:
:sparkles: 기능 추가 - HTML 기본 스켈레톤 작성
:sparkles: 기능 추가 - 계산기 컨테이너 및 디스플레이 영역 추가
:bug: 실수 - 잘못된 버튼 태그 오타 커밋
:lipstick: 스타일 수정 - 버튼 hover 효과 추가
:hammer: 리팩토링 - '=' 버튼 수식 계산 및 에러 처리 기능 추가
:rocket: 배포 - develop 브랜치 → main 브랜치 최종 병합
Reset 실습:

고의로 발생시킨 잘못된 커밋(예: HTML 코드 내 태그 오타)을 git reset --hard HEAD^ 명령어로 복구하는 과정을 통해 Git 명령어 사용법을 숙지함
설치 및 실행 방법
레포지토리 클론

git clone https://github.com/yourusername/calculator-pbl.git
cd calculator-pbl
프로젝트 실행

index.html 파일을 브라우저에서 열면 계산기를 실행할 수 있습니다.
또는 VSCode의 Live Server 확장 등 로컬 개발 서버를 사용하여 실행할 수 있습니다.
향후 개선 사항
추가 기능:
복잡한 수식 처리(우선순위 연산 등) 기능 추가
다크 모드, 반응형 디자인 강화
코드 개선:
JavaScript 모듈화 및 코드 최적화
테스트 코드(Jest 등) 도입
협업 도구:
CI/CD 파이프라인 구축을 통한 자동화 배포 적용
라이선스
이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 LICENSE 파일을 참고하세요.

작성자 이름: [김은지]
연락처: [tuberose1621@gmail.com]
GitHub: https://github.com/flo-jee
