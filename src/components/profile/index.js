import React from "react"
import * as S from './styled'
import { FaGithub, FaUsers, FaStar } from 'react-icons/fa'
import { RiGitRepositoryFill } from "react-icons/ri";
import useGithub from "../../hooks/github-hooks"

const Profile = () => {
    
    const { githubState } = useGithub()
    
    return <S.Wrapper>
        <S.WrapperAvatar src={githubState.user.avatar} alt="Avatar User" />
        <S.WrapperInfoUser>
            <div>
                <h1>{githubState.user.name}</h1>
                <a href={githubState.user.html_url} target="_blank" rel="noopener noreferrer">
                    <FaGithub style={{ marginRight: 6, verticalAlign: 'middle' }} />
                    {githubState.user.login}
                </a>
                <S.WrapperBio>
                    <p>{githubState.user.bio}</p>
                </S.WrapperBio>
            </div>
        </S.WrapperInfoUser>
        <S.WrapperStatusCount>
            <div>
                <h4>
                    <FaUsers style={{ marginRight: 6, marginTop: -4, verticalAlign: 'middle' }} />
                    {githubState.user.followers} Followers · Following {githubState.user.following}
                </h4>
            </div>

            <div>
                <h4><RiGitRepositoryFill style={{ marginRight: 6, marginTop: -4, verticalAlign: 'middle' }}/>Repositories {githubState.user.public_repos}</h4>
            </div>
            
        </S.WrapperStatusCount>
    </S.Wrapper>
}

export default Profile