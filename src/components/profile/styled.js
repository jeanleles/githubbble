import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FEFEFE;
    margin: 4px 30px 40px 0;
    padding: 20px 12px;
    border: 2px solid #4ECCA3;
    border-radius: 8px;
    min-width: 320px;
`

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

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

    a {
        color: #4ECCA3;
        font-size: 20px;
        outline: none;
    }

    a:hover {
        color: #4dcbcb;
    }
`

export const WrapperAvatar = styled.img`
    border-radius: 50%;
    border: 4px solid #4ECCA3;
    width: 180px;
    margin-bottom: 20px;
`

export const WrapperBio = styled.div`
    margin-top: 8px;
    
    p {
        font-size: 14px;
    }
`

export const WrapperStatusCount = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 20px;
    padding-top: 12px;
    border-top: 1px solid #30363d;
    align-items: center;
    div {
        margin: 12px;
        text-align: center;
    }
`