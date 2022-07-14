import React, { useState } from 'react'
import * as S from './styled'
import { IoTelescope, IoSearch, IoSunnySharp } from "react-icons/io5";
import useGithub from "../../hooks/github-hooks"

const Header = () =>  {
  const { getUser } = useGithub()

  const [usernameForSearch, setUsernameForSearch] = useState()

  const submitGetUser = () => {
    if(!usernameForSearch) return
    return getUser(usernameForSearch)
  }

  return (
    <S.Header>
        <S.WrapperHeader>
          
          <S.WrapperLogo>
            <IoTelescope style={{ marginRight: 6, fontSize: 28, color: '#4ECCA3' }} />
            <h1>GitHubbble</h1>
          </S.WrapperLogo>
          
          <S.WrapperSearch>
            <input type="text" className='search' placeholder='Pesquisar um usuário...'
              onChange={(event) => setUsernameForSearch(event.target.value)} />
            <button type='submit' onClick={submitGetUser}>
              <IoSearch style={{ marginRight: 6, fontSize: 20 }} />
            </button>
          </S.WrapperSearch>

          <S.WrapperCollorMode><IoSunnySharp/></S.WrapperCollorMode>

        </S.WrapperHeader>
    </S.Header>
  )
}

export default Header


