import styled from "styled-components"

export const Header = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
    background: #17191c;
    color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    height: 42px;
`

export const WrapperHeader = styled.div`
    display: flex;
    align-items: center;
    width: 1010px;
    color: #FEFEFE;
    margin-top: 4px;

    h1 {
        font-size: 28px;
    }

    .react-icons {
        margin-right: 6px;
        font-size: 32px;
    }
`
