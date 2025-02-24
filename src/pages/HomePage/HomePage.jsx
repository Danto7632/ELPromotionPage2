import {
  Header,
  PageLayout,
  DevtiCard,
  StackCard,
  Footer,
  ProjectsSection
} from '../../components';
import './Prize.css';
import * as S from './HomePage.style';


import { sendViewPageEvent } from '../../services';
import { useEffect } from 'react';

import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesomeIcon 가져오기
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // faGithub 아이콘 가져오기



const HomePage = () => {
  useEffect(() => {
    sendViewPageEvent('HOME_PAGE');
  }, []);

  const handleDevtiClick = () => {
    window.location.href = 'https://6yoon.github.io/DevTI/';
  };

  const handleGithubClick = () => {
    window.location.href = 'https://github.com/6yoon/DevTI';
  };

  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <S.Container>
        <S.MainSection>
          <S.MainSectionInner>
            <S.MainSectionTitle>
            Engineering Leader
              <br />
              <strong>EL</strong>에 오신것을
              <br />
              환영합니다.
            </S.MainSectionTitle>
            <S.MainSectionSubTitle>컴퓨터소프트웨어학과 전공동아리</S.MainSectionSubTitle>
          </S.MainSectionInner>
        </S.MainSection>

        <S.MessageSection id='prize'>
          <S.MessageSectionInner>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <S.SectionTitle>
                {'EL은 컴퓨터공학부 유일의\nPD Lab Star 동아리입니다.'}
              </S.SectionTitle>
              <S.SectionDescription>
                22기(2024)기준 동양미래EXPO, 산학연협력EXPO를 포함하여 15가지의 실적을 이뤄냈습니다.
              </S.SectionDescription>
            </AnimationOnScroll>
          </S.MessageSectionInner>
        </S.MessageSection>

        <section id="history" data-section="history">
          <div className="timeline">

            {/* 2025년 */}
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="year">2025</div>
                <div className="content">
                  <div className="achievement">
                    <h3>1월</h3>
                    <p>🏆 Digi-STAR Program in JEJU 경진대회 - 대상</p>
                    <p className="detail">ㄴ 생성형 AI 기반 제주관광코스</p>
                    <p>🥉 전국 창의코딩 경진대회 - 장려상</p>
                    <br />
                    <p>🖥 지산학 한마당 Gvalley 작품전시</p>
                    </div>
                </div>
              </div>
            </div>

            {/* 2024년 */}
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="year">2024</div>
                <div className="content">
                  <div className="achievement">
                    <h3>12월</h3>
                    <p>🏆🥉 스마트 SW 개발 경진대회 - 최우수상 &amp; 장려상</p>
                    <p className="detail">ㄴ AI 기반 집필 및 협업 지원 E-book 에디터 LunaVel</p>
                    <p>🥈🥉 컴퓨터공학부 프로젝트 경진대회 - 우수상 &amp; 장려상</p>
                    <p className="detail">ㄴ ???</p>
                  </div>
                  <div className="achievement">
                    <h3>11월</h3>
                    <p>🏆 동양미래EXPO(제 42회 졸업작품 전시회) - 대상</p>
                    <p className="detail">ㄴ 컴퓨터 비전 AI를 활용한 손발달 및 재활 운동 플랫폼</p>
                    <p><a href="https://www.dongyang.ac.kr/bbs/dongyang/22/129655/artclView.do?layout=unknown">관련 기사 →</a></p>
                    <p><a href="https://github.com/2024-dmu-expo-el/leaf_tale">자세히 보기 →</a></p>
                    <p>🥈 NextGen Startup 창업캠프 미니경진대회 - 우수상</p>
                    <p className="detail">ㄴ 노코드 머신러닝 NoCodeML</p>
                    <p>🥉🥉🥉🏅 교육장비 개발 및 아이디어 경진대회 - 동상x3 &amp; 특별상</p>
                    <p>🥈 LINC 3.0 캡스톤디자인 경진대회 - 우수상</p>
                    <p className="detail">ㄴ AI를 활용한 손발달 및 재활 운동 플랫폼</p>
                    <br />
                    <p>🖥 산학연협력EXPO 부산 BEXCO 작품전시</p>
                  </div>
                  <div className="achievement">
                    <h3>10월</h3>
                    <p>🖥 KES2024(한국전자전) 서울 KOEX 작품전시</p>
                  </div>
                  <div className="achievement">
                    <h3>1월</h3>
                    <p>🏵 전문대학 동반성장을 위한 신산업분야 성과포럼 수상</p>
                    <p className="detail">ㄴ AI 스마트팜을 이용한 융합 서비스</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 다른 연도들 ... */}

          </div>
        </section>

        <section id="press" data-section="press">
          <div className="press-container">
            <div className="press-card">
              <div className="press-date">2024.10</div>
              <div className="press-content">
                <h3>[KES 2024] 동양미래大, 우리나라 전자·IT 산업의 ‘미래를 그리다’</h3>
                <p className="press-source">산업인 NEWS</p>
                <p className="press-summary">전자ㆍIT산업분야에서 기라성같은 국내외 기업들이 대거 참가하는 국내 최대 전시회 ‘KES 2024(한국전자전)’에 세 번째 큰 규모의 전시부스를 꾸려 놓고 작품들을 보란 듯이 내놓은 청년들이 있다. 바로 동양미래대학교 학생들...</p>
                <a href="https://www.dongyang.ac.kr/bbs/dongyang/22/129655/artclView.do?layout=unknown" className="press-link">자세히 보기 →</a>
              </div>
            </div>
            <div className="press-card">
              <div className="press-date">2023.11</div>
              <div className="press-content">
                <h3>컴퓨터소프트웨어공학과 동아리 EL, 창의적 교육·훈련 장비 및 매체개발 경연대회 대상 수상</h3>
                <p className="press-source">한국실천공학교육학회</p>
                <p className="press-summary">EL 동아리가 고용노동부장관상(대상)을 수상. '리듬감 향상 및 스트레스 해소를 위한 모바일 리듬 게임 콘텐츠 개발' 등 혁신적인 프로젝트로 높은 평가...</p>
                <a href="https://www.dongyang.ac.kr/bbs/dongyang/388/123390/artclView.do?layout=unknown" className="press-link">자세히 보기 →</a>
              </div>
            </div>
            <div className="press-card">
              <div className="press-date">2018.12</div>
              <div className="press-content">
                <h3>컴퓨터소프트웨어공학과 동아리 EL, 임베디드 소프트웨어 경진대회 최우수상 수상</h3>
                <p className="press-source">임베디드소프트웨어·시스템산업협회</p>
                <p className="press-summary">504팀이 참가한 제16회 임베디드 소프트웨어 경진대회에서 '사물인터넷과 가상현실을 이용한 스마트 자전거' 프로젝트로 자유공모부문 최우수상 수상...</p>
                <a href="https://www.dongyang.ac.kr/bbs/dongyang/388/4086/artclView.do?layout=unknown" className="press-link">자세히 보기 →</a>
              </div>
            </div>
          </div>
        </section>

        <S.AboutELSection id="aboutEL">
          <S.AboutELSectionInner>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <S.SectionTitle>EL 소개</S.SectionTitle>
              <S.SectionDescription>
                동아리 EL에서는 앱, 웹, 게임, 보안, AI 등
                <br />다양한 분야의 개발도구와 프레임워크를 활용한
                <br />프로젝트를 진행하며 개발 역량과 협업 능력을 강화하는 활동을 하고 있습니다.
                <br />
                <br />또한, 활발한 소통과 피드백을 통해 개인의 성장과 공동체 발전을 지원합니다.
              </S.SectionDescription>
            </AnimationOnScroll>
          </S.AboutELSectionInner>
        </S.AboutELSection>

        <S.DevtiSection>
          <S.SectionTitle>
            <FontAwesomeIcon icon={faGithub} onClick={handleGithubClick} style={{ cursor: 'pointer' }} />
            &nbsp;개발성격 유형검사 DevTI
          </S.SectionTitle>
          <S.SectionDescription>
            아래의 카드를 클릭하여 당신의 <strong onClick={handleDevtiClick}>DevTI</strong>를 확인해보세요.
          </S.SectionDescription>
          <S.DevtiCardSection>
            <DevtiCard />
            <StackCard />
          </S.DevtiCardSection>
        </S.DevtiSection>

        <ProjectsSection />
      </S.Container>
    </PageLayout>
  );
};

export default HomePage;
