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
        border-radius: 8px 0 0 8px;
        padding: 8px;
        color: #FEFEFE;        
        width: 300px;
        user-select: none;
        
        &:focus {
            outline: none;
        }
    }

    button {
        background-color: #4ECCA3;
        padding: 9px;
        border-radius: 0 8px 8px 0;
    

        &:hover {
            color: #FFF;
            transition: all .2s;
        }

        .search {
            font-size: 20px;
            color: #4ECCA3;
        }
    }

`

export const WrapperCollorMode = styled.div`
    
`