import styled from '@emotion/styled';



export const StatisticsContainer = styled.div`

 height: 100vh; 
 padding: 28px 14px 135px;
 border-radius: 16px;
  background-color: ${({ theme }) => theme.secondaryBgColor}; 

@media screen and (min-width: 768px){ 
    padding: 132px 64px;
    }

`
export const CalendarContainer = styled.div`



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

export const StyledParagraph = styled.p`
 font-weight: 400;
 font-size: 14px;
 line-height: calc(18/14);
color :${({ theme }) => theme.mainTextColor};
 margin-right: 14px;
`

export const ChartBarIcon = styled.div`
display: block;
width: 8px;
height: 8px;
border-radius: 50%;
`;

export const MonthIcon = styled(ChartBarIcon)`
background-color: var(--gradient-pink);
`
export const DayIcon = styled(ChartBarIcon)`
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

export const StyledContainer = styled.div`
 max-width: 307px;  
border: 0.8px solid ;
border-color: ${({ theme }) => theme.statisticStrokeColor};
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