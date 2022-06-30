import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    background-color: red;
`

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 12px;
    background-color: yellow;
`

export const WrapperUsername = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: gray;
    /* h3 {
        margin-right: 12px;
    } */
`

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    background-color: green;
`

export const WrapperAvatar = styled.img`
    border-radius: 50%;
    width: 180px;
    margin: 12px;
`