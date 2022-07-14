import React from 'react'
import * as S from "../repository-item/styled"
import { format } from 'date-fns'
import { BiLinkExternal } from "react-icons/bi"

const StarredItem = ({ linkToRepo, fullName, updated_at, description }) => {
  return (
    <S.Wrapper>
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName} <BiLinkExternal style={{ marginLeft: 4, verticalAlign: 'middle', fontSize: 18 }}/>
      </S.WrapperLink>      
      <S.WrapperDate>Atualizado em: {format(new Date(updated_at), 'dd/mm/yyyy')}</S.WrapperDate>
      <S.WrapperDescription>{description}</S.WrapperDescription>
    </S.Wrapper>
  );
};

export default StarredItem