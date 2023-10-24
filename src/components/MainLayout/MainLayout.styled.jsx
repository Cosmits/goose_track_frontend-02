import styled from "styled-components";

export const MainLayoutWrapper = styled.div`
  display:flex;
  
  
`
export const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.mainBGColor};
  max-width: 1151px;
  width: 100%;
  padding: 24px 20px;

  @media screen and (min-width: 768px) {
  padding: 25px 32px 25px 40px; 
  }
`