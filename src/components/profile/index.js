import React from "react"
import * as S from './styled'
import { FaGithub, FaUsers, FaStar } from 'react-icons/fa'
import useGithub from "../../hooks/github-hooks"

const Profile = () => {
    
    const { githubState } = useGithub
    
    return <S.Wrapper>
        <S.WrapperAvatar src='https://avatars.githubusercontent.com/u/7783578?v=4' alt="Avatar User" />
        <S.WrapperInfoUser>
            <div>
                <h1>{githubState.user.name}</h1>
                <S.WrapperUsername>
                    <a href="https://github.com/jeanleles" target="_blank" rel="noopener noreferrer">
                        <FaGithub style={{ marginRight: 6, verticalAlign: 'middle' }} />
                        jeanleles
                    </a>
                </S.WrapperUsername>
            </div>
            <S.WrapperStatusCount>
                <div>
                    <h4>
                        <FaUsers style={{ marginRight: 6, verticalAlign: 'middle' }} />
                        Followers
                    </h4>
                    <span>7</span>
                </div>

                <div>
                    <h4>
                        <FaStar style={{ marginRight: 6, verticalAlign: 'middle' }} />
                        Starred
                    </h4>
                    <span>5</span>
                </div>

                <div>
                    <h4>Following</h4>
                    <span>10</span>
                </div>
            </S.WrapperStatusCount>
        </S.WrapperInfoUser>
    </S.Wrapper>
}

export default Profile