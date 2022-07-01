import Image from 'next/image'
import React from 'react'
import useCountAnimation from '../hooks/useCountAnimation'
import {
  AwardsContainer,
  HomeContainer,
  IntroductionContainer,
  LogoContainer,
  TextContainer,
} from './style'
import { COUNT_NUMBER_TEXT } from '../../constant/index'
import NumberCount from './numberCount'

const Home = () => {
  const value = useCountAnimation(0, 700, 2000)

  return (
    <HomeContainer>
      <LogoContainer>
        <Image
          loading="eager"
          src={'/triple2x.png'}
          width={400}
          height={338}
          alt="triple awards"
        />
        <span className="subTitle">2021년 12월 기준</span>
      </LogoContainer>
      <IntroductionContainer>
        <TextContainer>
          {COUNT_NUMBER_TEXT.map((item) => (
            <NumberCount
              key={item.basicText}
              countValue={item.countValue}
              strongText={item.strongText}
              basicText={item.basicText}
            />
          ))}
        </TextContainer>
        <AwardsContainer>
          <div className="container">
            <Image
              loading="eager"
              src={'/play-store2x.png'}
              width={54}
              height={54}
              alt="playstore awards"
            />
            <p>
              2018 구글 플레이스토어
              <br />
              올해의 앱 최우수상 수상
            </p>
          </div>
          <div className="container">
            <Image
              loading="eager"
              src={'/badge-apple4x.png'}
              width={54}
              height={54}
              alt="app store awards"
            />
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
