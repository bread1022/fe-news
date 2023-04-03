# NANII - FE2. NEWS STAND

## 학습계획서

## 📌 학습 키워드
- [ ] gird
- [ ] auto rolling
- [ ] crawling

## 🔎 기능 요구 사항
- [ ] 그리드 UI (HTML, CSS)
- [ ] 상단 자동 롤링 UX
- [ ] 콘텐츠 좌우 이동

## 💥 TEST CASE
1. **기본 화면 구성**
     - [ ] 기본상단역역 : 로고, 시스템시간
     - [ ] 자동롤링영역 : 최신뉴스 왼쪽바, 오른쪽바
     - [ ] 기사영역 : 전체언론사, 그리드보기 (기본값)
2. **최신 뉴스 자동 롤링 영역**
     - [ ] 왼쪽, 오른쪽 헤드라인 바에 각각 다른 5개의 뉴스 헤드라인을 띄워야한다
     - [ ] 5초마다 자동으로 헤드라인이 위로 올라가는 애니메이션을 구현해야한다
     - [ ] 좌우 영역이 동시에 롤링되지않고 1초의 시간차로 롤링되어야한다
     - [ ] 헤드라인 바 영역에 마우스 호버시, 자동 롤링을 멈추고 해당 헤드라인에 밑줄을 표시해야한다
3. **전체 언론사**
     - [ ] 기본값은 **그리드** 상태여야한다
     - [ ] 페이지 새로 고침시, 랜덤으로 언론사별 브랜드마크를 중앙으로 배치해야한다
     - [ ] 그리드 좌우 화살표로 페이지 넘김이 가능해야한다
       - [ ] 가장 첫 페이지, 마지막 페이지는 화살표 이전, 이후 화살표를 표시하지 않아야한다
     - [ ] 브랜드마크 셀에 마우스 호버시, [구독하기] 버튼이 보여야한다
       - [ ] 구독하기 버튼 클릭시, 스낵바 5초간 유지해야한다 ("내가 구독한 언론사에 추가되었습니다")
       - [ ] 5초 후, 내가 구독한 언론사 탭 리스트 보기 화면으로 즉시 이동해야한다
4. 전체 언론사 **리스트 보기**
     - [ ] 기본 화면 구성
       - [ ] 각 분야 7 카테고리 (종합/경제, 방송/통신, IT, 영자지, 스포츠/연애, 매거진/전문지, 지역)
       - [ ] 언론사 마크, 최종 편집일시, 구독하기 버튼, 리스트/그리드 버튼
       - [ ] 메인 뉴스 썸네일, 타이틀
       - [ ] 서브 뉴스 타이틀
       - [ ] 편집권 안내 문구
     - [ ] 선택된 카테고리의 경우 해당 카테고리의 배경이 progress bar가 되어 1초마다 색이 차오르게 애니메이션을 적용해야하며(총 20초) 해당 카테고리 전체 길이 중 현재 순서를 표시해야한다 (순서는 새로고침때마다 랜덤으로 바뀐다)
     - [ ] 한 언론사당 20초간 화면을 보여주고 해당 카테고리에 해당하는 언론사를 다 돌면 다음 카테고리로 이동해야한다
     - [ ] 모든 카테고리를 다 돌면 다시 처음 카테고리, 첫 언론사로 이동해야한다
     - [ ] 좌우화살표 클릭시, 언론사 이동이 가능해야한다
     - [ ] 선택된 카테고리 외 다른 카테고리 마우스 호버시, 밑줄 표시해야한다
     - [ ] 선택된 카테고리 외 다른 카테고리 마우스 클릭시, 해당 페이지로 이동해야한다
     - [ ] 메인 뉴스 썸네일 마우스 호버시, 썸네일을 5% 확대해야하고, 타이틀은 밑줄 표시해야한다
     - [ ] 서브메뉴 마우스 호버시, 타이틀은 밑줄 표시해야한다
5. **내가 구독한 언론사**
     - [ ] 
     - [ ] 
6. 내가 구독한 언론사 **그리드 보기**
     - [ ] 

## 📝 주요 개발 구현 내용

## 🤔 고민한 점, 느낀점