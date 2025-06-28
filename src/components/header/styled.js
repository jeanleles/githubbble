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
        background: #17191c;
        
        &:focus {
            outline: none;
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }

    button {
        background-color: #4ECCA3;
        padding: 9px;
        border-radius: 0 8px 8px 0;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease;
    
        &:hover:not(:disabled) {
            background-color: #3db892;
            color: #FFF;
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            background-color: #666;
        }

        .search {
            font-size: 20px;
            color: #4ECCA3;
        }
    }

`

export const WrapperCollorMode = styled.div`
    
`