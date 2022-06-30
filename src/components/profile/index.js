import React from "react"
import * as S from './styled'

const Profile = () => {
    return <S.Wrapper>
        <S.WrapperAvatar src='https://avatars.githubusercontent.com/u/7783578?v=4' alt="Avatar User" />
        <S.WrapperInfoUser>
            <div>
                <h1>Jean Leles</h1>
                <S.WrapperUsername>
                    <h3>Username: <span>jeanleles</span></h3>
                </S.WrapperUsername>
            </div>
            <S.WrapperStatusCount>
                <div>
                    <h4>Followers</h4>
                    <span>7</span>
                </div>

                <div>
                    <h4>Starreds</h4>
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