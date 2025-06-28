import React, { useEffect, useState } from "react"
import useGithub from "../../hooks/github-hooks"
import RepositoryItem from "../repository-item"
import StarredItem from "../starred-item"
import * as S from "./styled"

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub()
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false)

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login)
      getUserStarred(githubState.user.login)
    }
    setHasUserForSearchrepos(githubState.repositories)

  }, [githubState.user.login])

  // Ordenar repositórios e favoritos por updated_at (mais recentes primeiro)
  const sortedRepositories = [...githubState.repositories].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
  const sortedStarred = [...githubState.starred].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Stars</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {sortedRepositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  linkToRepo={item.html_url}
                  updated_at={item.updated_at}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {sortedStarred.map((item) => (
                <StarredItem
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                  updated_at={item.updated_at}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};


export default Repositories
