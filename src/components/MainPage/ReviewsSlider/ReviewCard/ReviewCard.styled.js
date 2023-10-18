import styled from 'styled-components';

export const Card = styled.div`
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);

  @media screen and (min-width: 375px) {
    width: 335px;
    padding: 24px 20px 24px 24px;

    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 580px;
    padding: 32px 32px 50px 32px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  gap: 18px;
`;

export const CardText = styled.div`
  text-align: left;
`;

export const AvatarName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
  flex-shrink: 0;
`;

export const AvatarPicture = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({ src }) => src});
  flex-shrink: 0;
`;

export const Name = styled.p`
  color: #343434;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: ${() => 18 / 18};

  margin-bottom: 13px;
`;

export const Comment = styled.p`
  color: rgba(17, 17, 17, 0.7);

  text-align: left;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: ${() => 18 / 14};

  @media screen and (min-width: 768px) {
    margin-left: 68px;
  }
`;
