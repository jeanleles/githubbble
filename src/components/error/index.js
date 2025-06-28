import React from 'react'
import * as S from './styled'
import { IoWarning } from "react-icons/io5"

const Error = ({ message }) => {
  return (
    <S.ErrorContainer>
      <S.ErrorIcon>
        <IoWarning size={40} color="#ff6b6b" />
      </S.ErrorIcon>
      <S.ErrorTitle>Ops! Algo deu errado</S.ErrorTitle>
      <S.ErrorMessage>{message}</S.ErrorMessage>
    </S.ErrorContainer>
  )
}

export default Error 