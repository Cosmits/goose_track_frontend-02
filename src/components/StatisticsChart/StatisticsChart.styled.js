import styled from '@emotion/styled';

export const StyledContainer = styled.div`
display: inline-block;
/* max-width: 780px; */
border: 2px solid var(--light-blue);
padding: 40px 14px; 
border-radius: 20px;
`
export const StyledParagraph = styled.p`
 font-weight: 400;
 font-size: 14px;
 line-height: calc(18/14);
 color: var(--letter-gray);
 margin-right: 14px;
`

export const ChartBarIcon = styled.div`
display: block;
width: 8px;
height: 8px;
background-color: gray;
/* background-color: ${props => {
  switch (props.type) {
    case 'day':
      return 'var(--pink-gradient)';
    case 'month':
      return 'var(--black)';
    default: 
      return 'gray';
  }
}}; */
border-radius: 50%;
`;

export const BarContainer = styled.div`
display: flex;
gap: 5px;
align-items: center;
margin-bottom: 40px;
`