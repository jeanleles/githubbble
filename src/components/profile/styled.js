import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    color: #FEFEFE;
    margin-bottom: 40px;
`

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 12px;
    height: 150px;
    h1 {
        font-size: 32px;
        font-weight: 700;
    }

    h3 {
        font-size: 20px;
        font-weight: 500;
    }

    h4 {
        font-size: 18px;
        font-weight: 400;
    }
`

export const WrapperUsername = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    a {
        color: #4ECCA3;
        font-size: 20px;
        outline: none;
    }

    a:hover {
        color: #4dcbcb;
    }
`

export const WrapperBio = styled.div`
    margin-top: 8px;
    
    p {
        font-size: 14px;
    }
`

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 12px;
        text-align: center;
    }
`

export const WrapperAvatar = styled.img`
    border-radius: 50%;
    border: 6px solid #4ECCA3;
    width: 180px;
    margin-right: 12px;
`

export const FaGithub = styled.svg`
    //margin-right: 10px;
`