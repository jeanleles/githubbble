import { useContext } from "react"
import { GithubContext } from '../providers/github-provider'

const useGithub = () => 
{
    const { githubState } = useContext(GithubContext)

    return { githubState }
}

export default useGithub