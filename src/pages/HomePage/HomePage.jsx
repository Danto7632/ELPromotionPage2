import {
  Header,
  PageLayout,
  DevtiCard,
  StackCard,
  Footer,
  ProjectsSection,
} from '../../components';
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
    window.location.href = 'https://6yoon.github.io/';
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
              Embedded Linux
              <br />
              <strong>EL</strong>에 오신것을
              <br />
              환영합니다.
            </S.MainSectionTitle>
            <S.MainSectionSubTitle>컴퓨터소프트웨어학과 전공동아리</S.MainSectionSubTitle>
          </S.MainSectionInner>
        </S.MainSection>

        <S.MessageSection>
          <S.MessageSectionInner>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <S.SectionTitle>
                {'EL은 컴소과 유일의 PD Lab Pre-Star 선정 동아리입니다.'}
              </S.SectionTitle>
              <S.SectionDescription>
                2023년기준 한이음ICT, 교내/교외 대회수상, 논문게재를 포함하여 7가지의 실적을 이뤄냈습니다.
              </S.SectionDescription>
            </AnimationOnScroll>
          </S.MessageSectionInner>
        </S.MessageSection>

        <S.AboutELSection id="aboutEL">
          <S.AboutELSectionInner>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <S.SectionTitle>EL 소개</S.SectionTitle>
              <S.SectionDescription>
              동아리 EL에서는 게임, 웹, 앱 등
<br />본인이 관심 있는 다양한 분야의 프로젝트를 진행하며 개발 능력과 협업 능력을 함께 키워나갑니다.
<br /><br />활발한 소통과 피드백을 통해
<br />개인의 성장과 공동체 발전을 지원합니다.
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
