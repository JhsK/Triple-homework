import React from 'react'
import useCountAnimation from '../../hooks/useCountAnimation'
import { NumberCountContainer } from './style'

interface NumberCountProps {
  countValue: number
  strongText: string
  basicText: string
}

const NumberCount = ({
  countValue,
  strongText,
  basicText,
}: NumberCountProps) => {
  const value = useCountAnimation(0, countValue, 2000)
  return (
    <NumberCountContainer>
      <span>
        <strong>{`${value}${strongText}`}</strong>
        {basicText}
      </span>
    </NumberCountContainer>
  )
}

export default NumberCount
