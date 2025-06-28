import styled, { keyframes } from "styled-components"

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #17191c;
  color: #FEFEFE;
`

export const Spinner = styled.div`
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;
`

export const LoadingText = styled.p`
  font-size: 18px;
  color: #4ECCA3;
  margin: 0;
  font-weight: 500;
` 