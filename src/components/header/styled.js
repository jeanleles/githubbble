import styled from "styled-components"

export const Header = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    /* flex-direction: column; */
    background: #17191c;
    color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
`

export const WrapperHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1010px;
    margin: 0 auto;
    color: #FEFEFE;
    margin-top: 4px;

`

export const WrapperLogo = styled.div`
    display: flex;

    h1 {
        font-size: 28px;
    }

    .react-icons {
        margin-right: 6px;
        font-size: 32px;
    }
`

export const WrapperSearch = styled.div`
    input {
        border: 2px solid #4ECCA3;
        padding: 8px;
        color: #FEFEFE;
        border-radius: 8px;
        width: 300px;
        user-select: none;
        
        &:focus {
            outline: none;
        }
    }

    button {
        background-color: #4ECCA3;
        padding: 8px;
        border-radius: 8px;
        margin-left: 8px;

        &:hover {
            background-color: #4dcbcb;
        }
    }

`

export const WrapperCollorMode = styled.div`
    
`