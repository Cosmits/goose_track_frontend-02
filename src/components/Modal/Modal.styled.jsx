import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
`;

export const ModalContent = styled.div`
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  margin: 0 20px;
  padding: 28px 20px;
  overflow: hidden;

  @media screen and (max-width: 374px) {
    width: 90vw;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 90vw;
    max-width: 404px;
    padding: 32px;
  }

  @media screen and (min-width: 768px) {
    width: 404px;
    margin: 0 auto;
    padding: 32px;
  }
`;
