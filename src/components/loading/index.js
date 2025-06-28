import React from 'react'
import * as S from './styled'
import { IoReload } from "react-icons/io5"

const Loading = () => {
  return (
    <S.LoadingContainer>
      <S.Spinner>
        <IoReload size={40} color="#4ECCA3" />
      </S.Spinner>
      <S.LoadingText>Carregando...</S.LoadingText>
    </S.LoadingContainer>
  )
}

export default Loading 