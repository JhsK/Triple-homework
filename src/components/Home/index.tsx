import React from 'react'
import {
  AwardsContainer,
  HomeContainer,
  IntroductionContainer,
  LogoContainer,
  TextContainer,
} from './style'

const Home = () => {
  return (
    <HomeContainer>
      <LogoContainer>
        <img src="triple2x.png" alt="triple awards" />
        <span>2021년 12월 기준</span>
      </LogoContainer>
      <IntroductionContainer>
        <TextContainer>
          <span>
            <strong>700만 명</strong>의 여행자
          </span>
          <span>
            <strong>100만 명</strong>의 여행 리뷰
          </span>
          <span>
            <strong>470만 개</strong>의 여행 일정
          </span>
        </TextContainer>
        <AwardsContainer>
          <div className="container">
            <img src="play-store2x.png" alt="playstore awards" />
            <p>
              2018 구글 플레이스토어
              <br />
              올해의 앱 최우수상 수상
            </p>
          </div>
          <div className="container">
            <img src="badge-apple4x.png" alt="app store awards" />
            <p>
              2018 애플 앱스토어
              <br />
              오늘의 여행햅 선정
            </p>
          </div>
        </AwardsContainer>
      </IntroductionContainer>
    </HomeContainer>
  )
}

export default Home
