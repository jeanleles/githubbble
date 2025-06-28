import { useContext } from "react"
import { GithubContext } from '../providers/github-provider'

const useGithub = () => 
{
    const { githubState, getUser, getUserRepos, getUserStarred, clearError } = useContext(GithubContext)

    return { githubState, getUser, getUserRepos, getUserStarred, clearError }
}

export default useGithub