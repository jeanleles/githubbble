import { useContext } from "react"
import { GithubContext } from '../providers/github-provider'

const useGithub = () => {
    const { githubbbleState } = useContext(GithubContext)

    return { githubbbleState }
}

export default useGithub