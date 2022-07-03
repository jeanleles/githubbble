import React from 'react'
import RepositoryItem from '../repository-item'
import * as S from './styled'

const Repositories = () => {
  return <S.WrapperTabs
    selectedTabClassName='is-selected'
    selectedTabPanelClassName='is-selected'
  >
    <S.WrapperTabsList>
      <S.WrapperTab>Repositories</S.WrapperTab>
      <S.WrapperTab>Starred</S.WrapperTab>
    </S.WrapperTabsList>
    <S.WrapperTabPanel>
      <h3>Repositories List</h3>
      <RepositoryItem
        name="contador-js"
        fullName="jeanleles/contador-js"
        linkRepo="https://github.com/jeanleles/contador-js"
      />
    </S.WrapperTabPanel>
    <S.WrapperTabPanel>
      <h3>Starred Repositories</h3>
      <RepositoryItem
        name="foca-do"
        fullName="jeanleles/foca-do"
        linkRepo="https://github.com/jeanleles/foca-do"
      />
    </S.WrapperTabPanel>
  </S.WrapperTabs>

}

export default Repositories
