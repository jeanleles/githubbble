import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api'

export const GithubContext = createContext({
    loading: false,
    hasUser: false,
    user: {},
    repositories: [],
    starred: [],
    error: false,
    errorMessage: '',
})

const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
            bio: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
        error: false,
        errorMessage: '',
    })

    const getUser = (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            loading: true,
            error: false,
            errorMessage: '',
            hasUser: false,
        }));

        api
            .get(`users/${username}`)
            .then(({ data }) => {
                setGithubState((prevState) => ({
                    ...prevState,
                    hasUser: true,
                    user: {
                        id: data.id,
                        avatar: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        bio: data.bio,
                        html_url: data.html_url,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        followers: data.followers,
                        following: data.following,
                        public_repos: data.public_repos,
                    },
                    loading: false,
                }));
            })
            .catch((error) => {
                let errorMessage = 'Erro ao buscar usuário';
                
                if (error.response?.status === 404) {
                    errorMessage = 'Usuário não encontrado';
                } else if (error.response?.status === 403) {
                    errorMessage = 'Limite de requisições excedido. Tente novamente em alguns minutos.';
                } else if (error.response?.status >= 500) {
                    errorMessage = 'Erro no servidor. Tente novamente mais tarde.';
                }

                setGithubState((prevState) => ({
                    ...prevState,
                    hasUser: false,
                    error: true,
                    errorMessage,
                    loading: false,
                }));
            })
    };

    const clearError = () => {
        setGithubState((prevState) => ({
            ...prevState,
            error: false,
            errorMessage: '',
        }));
    };

    const getUserRepos = (username) => {
        api
            .get(`users/${username}/repos`)
            .then(({ data }) => {
                setGithubState((prevState) => ({
                    ...prevState,
                    repositories: data,
                }))
            })
            .catch((error) => {
                console.error('Erro ao buscar repositórios:', error);
            })
    }

    const getUserStarred = (username) => {
        api.get(`users/${username}/starred`).then(({ data }) => {
          console.log("data: " + JSON.stringify(data))
          setGithubState((prevState) => ({
            ...prevState,
            starred: data,
          }))
        })
        .catch((error) => {
            console.error('Erro ao buscar starred:', error);
        })
      }

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
        clearError: useCallback(() => clearError(), []),
    }

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )

}

export default GithubProvider
