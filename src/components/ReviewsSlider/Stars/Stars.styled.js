import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

export const Star = styled(AiFillStar)`
  width: 14px;
  height: 14px;
  fill: ${(prop) => prop};
`;

export const StarWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
