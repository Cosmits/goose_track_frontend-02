import styled from 'styled-components';

//Illia Shatokhin
// media 375,768,1440
export const ReviewsWrapper = styled.section`
  padding: 64px 0;

  @media screen and (min-width: 768px) {
    padding: 64px 0 100px;
  }

  @media screen and (min-width: 1440px) {
    padding: 100px 0 118px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  color: var(--main-blue, #3e85f3);
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: ${() => 32 / 28};
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    font-size: 40px;
    line-height: ${() => 44 / 40};
  }
`;
