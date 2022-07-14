import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api'

export const GithubContext = createContext({
    loading: false,
    hasUser: false,
    user: {},
    repositories: [],
    starred: [],
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
    })

    const getUser = (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
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
                }));
            })
            .finally(() => {
                setGithubState((prevState) => ({
                    ...prevState,
                    loading: !prevState.loading,
                }))
            })
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
    }

    const getUserStarred = (username) => {
        api.get(`users/${username}/starred`).then(({ data }) => {
          console.log("data: " + JSON.stringify(data))
          setGithubState((prevState) => ({
            ...prevState,
            starred: data,
          }))
        })
      }


    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
    }

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )

}

export default GithubProvider
