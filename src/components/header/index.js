import React, { useState, useRef, useEffect } from 'react'
import * as S from './styled'
import { IoTelescope, IoSearch, IoSunnySharp } from "react-icons/io5";
import useGithub from "../../hooks/github-hooks"

const Header = () =>  {
  const { getUser, githubState, clearError } = useGithub()
  const inputRef = useRef(null)

  const [usernameForSearch, setUsernameForSearch] = useState()

  // Focar no campo de busca quando houver erro
  useEffect(() => {
    if (githubState.error && inputRef.current) {
      inputRef.current.focus()
    }
  }, [githubState.error])

  const submitGetUser = () => {
    if(!usernameForSearch) return
    clearError() // Limpar erro anterior
    return getUser(usernameForSearch)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      submitGetUser()
    }
  }

  return (
    <S.Header>
        <S.WrapperHeader>
          
          <S.WrapperLogo>
            <IoTelescope style={{ marginRight: 6, fontSize: 28, color: '#4ECCA3' }} />
            <h1>GitHubbble</h1>
          </S.WrapperLogo>
          
          <S.WrapperSearch>
            <input 
              ref={inputRef}
              type="text" 
              className='search' 
              placeholder='Pesquisar um usuário...'
              value={usernameForSearch || ''}
              onChange={(event) => setUsernameForSearch(event.target.value)}
              onKeyPress={handleKeyPress}
              disabled={githubState.loading}
            />
            <button 
              type='submit' 
              onClick={submitGetUser}
              disabled={githubState.loading || !usernameForSearch}
            >
              <IoSearch style={{ marginRight: 6, fontSize: 20 }} />
            </button>
          </S.WrapperSearch>

          <S.WrapperCollorMode><IoSunnySharp/></S.WrapperCollorMode>

        </S.WrapperHeader>
    </S.Header>
  )
}

export default Header


