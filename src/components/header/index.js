import React from 'react'
import * as S from './styled'
import { IoTelescope } from "react-icons/io5";

const Header = () =>  {
  return (
    <S.Header>
        <S.WrapperHeader>
            <IoTelescope style={{ marginRight: 6, fontSize: 28, color: '#4ECCA3' }} />
            <h1>GitHubbble</h1>
        </S.WrapperHeader>
    </S.Header>
  )
}

export default Header


