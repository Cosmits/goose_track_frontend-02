import styled from 'styled-components';

//Illia Shatokhin
// media 375,768,1440
export const ReviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  color: var(--main-blue, #3e85f3);
  /* font-family: Inter; */
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: ${() => 32 / 28}; /* 110% */
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    font-size: 40px;
    line-height: ${() => 44 / 40}; /* 110% */
  }
`;
