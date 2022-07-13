import React from "react"
import * as S from './styled'
import { FaGithub, FaUsers, FaStar } from 'react-icons/fa'
import useGithub from "../../hooks/github-hooks"

const Profile = () => {
    
    const { githubState } = useGithub()
    
    return <S.Wrapper>
        <S.WrapperAvatar src={githubState.user.avatar} alt="Avatar User" />
        <S.WrapperInfoUser>
            <div>
                <h1>{githubState.user.name}</h1>
                <S.WrapperUsername>
                    <a href={githubState.user.html_url} target="_blank" rel="noopener noreferrer">
                        <FaGithub style={{ marginRight: 6, verticalAlign: 'middle' }} />
                        {githubState.user.login}
                    </a>
                    <p>{githubState.user.bio}</p>
                </S.WrapperUsername>
            </div>
            <S.WrapperStatusCount>
                <div>
                    <h4>
                        <FaUsers style={{ marginRight: 6, verticalAlign: 'middle' }} />
                        Followers
                    </h4>
                    <span>{githubState.user.followers}</span>
                </div>

                <div>
                    <h4>Following</h4>
                    <span>{githubState.user.following}</span>
                </div>

                <div>
                    <h4>Repos</h4>
                    <span>{githubState.user.public_repos}</span>
                </div>
                
            </S.WrapperStatusCount>
        </S.WrapperInfoUser>
    </S.Wrapper>
}

export default Profile