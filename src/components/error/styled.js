import styled from "styled-components"

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  width: 100%;
  background: #17191c;
  color: #FEFEFE;
  text-align: center;
  padding: 40px 20px;
`

export const ErrorIcon = styled.div`
  margin-bottom: 20px;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`

export const ErrorTitle = styled.h2`
  font-size: 24px;
  color: #ff6b6b;
  margin: 0 0 15px 0;
  font-weight: 600;
`

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: #FEFEFE;
  margin: 0;
  max-width: 400px;
  line-height: 1.5;
`

export const RetryButton = styled.button`
  background: #4ECCA3;
  color: #17191c;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: #3db892;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
` 