import styled from '@emotion/styled';

export const StyledContainer = styled.div`
/* display: inline-block; */
max-width: 307px; 
border: 2px solid var(--light-blue);
padding: 40px 14px; 
border-radius: 20px;
/* margin: 0 auto; */
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
/* background-color: var(--light-pink); */
border-radius: 50%;
`;

export const MonthIcon = styled( ChartBarIcon)`
background-color: var(--gradient-pink);
`
export const DayIcon = styled( ChartBarIcon)`
background-color: var(--gradient-blue);
`

export const BarContainer = styled.div`
display: flex;
gap: 5px;
align-items: center;
margin-bottom: 40px;
`