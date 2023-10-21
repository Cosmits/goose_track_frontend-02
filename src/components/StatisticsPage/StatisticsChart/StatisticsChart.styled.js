import styled from '@emotion/styled';
// import { createGlobalStyle } from 'styled-components';


export const StatisticsContainer =styled.div`
/* max-width: 335px; */
 height: 100vh; 
/* height: 100%; */
 padding: 28px 14px 135px;
 /* border: 1px solid red; */
 border-radius: 16px;
 background-color: ${({ theme }) => theme.statisticBG};

@media screen and (min-width: 768px){ 
    padding: 132px 64px;
    }

@media screen and (min-width: 1440px){
    /* max-width: 1087px;  */
    /* padding: 134px 114px; */
    }

`
export const CalendarContainer = styled.div`
/* display: flex;
flex-direction: column;
gap: 20px;
align-items: center; */


@media screen and (min-width: 768px){
    display: flex;
    max-width: 579px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 48px;
    }

    @media screen and (min-width: 1440px){
        max-width: 780px;
        align-items: center;
      
       

    }

`
export const StyledContainer = styled.div`
/* display: inline-block; */
 max-width: 307px;  
border: 0.8px solid var(--light-blue);
padding: 40px 14px; 
border-radius: 20px;
 margin: 0 auto; 
@media screen and (min-width: 768px){
     max-width: 640px;  
    padding: 32px;
    }

@media screen and (min-width: 1440px){
    max-width: 860px; 
    padding: 40px;
    }
`
export const StyledParagraph = styled.p`
 font-weight: 400;
 font-size: 14px;
 line-height: calc(18/14);
  /* color: var(--letter-gray);  */
  color :${({ theme }) => theme.mainTextColor};
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
position: relative;
font-family: 'PoppinsRegular';
font-size: 14px;
font-weight: 400;
line-height: calc(18/14);
display: flex;
gap: 5px;
align-items: center;
 margin-bottom: 40px; 

@media screen and (min-width: 768px){
    /* position: absolute; */
    font-size: 14px;
    font-size: 16px;
    line-height: calc(18/16);
    margin-bottom: 0px; 
   
    justify-content: flex-end;
}

@media screen and (min-width: 1440px){
    /* margin-bottom: 48px; */
   
    }
`