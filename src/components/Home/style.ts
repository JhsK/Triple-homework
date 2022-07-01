import styled from '@emotion/styled'
import { fadeIn } from '../../theme'

export const HomeContainer = styled.div`
  font-family: sans-serif;
  display: flex;
  justify-content: space-around;
`

export const LogoContainer = styled.div`
  position: relative;
  width: 400px;
  height: 338px;
  animation: ${fadeIn} 700ms linear;

  .subTitle {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    color: ${(props) => props.theme.gray700};
    font-size: 15px;
  }
`

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const TextContainer = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${fadeIn} 700ms linear 100ms;

  strong {
    font-weight: bold;
  }
`

export const AwardsContainer = styled.div`
  display: flex;
  gap: 54px;
  height: 54px;
  font-size: 14px;
  line-height: 22px;
  animation: ${fadeIn} 700ms linear 200ms;

  .container {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${(props) => props.theme.gray800};
    font-weight: bold;
  }
`
