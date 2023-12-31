import styled from "styled-components"

export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  font-family: 'InterTightBold', sans-serif;
  font-weight: 700; 
`


export const StyledContainer = styled.div`

  @media screen and (min-width: 768px){
    margin-left: auto;
  }`


export const DescriptionItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 64px;

  @media screen and (min-width: 768px){
    gap: 48px; 
  }

  @media screen and (min-width: 1440px){
    display: flex;
    flex-direction: row;
    gap: 228px ;
  }`

export const MiddleItem = styled(DescriptionItem)`

  @media screen and (min-width: 1440px){
    flex-direction: row-reverse;
  }`


export const StyledNumber = styled.p`
  font-size: 80px;
  /* font-weight: 700; */
  color: var(--main-blue); 
  margin-bottom: 14px;

  @media screen and (min-width: 768px){
   font-size: 104px;
  }`

export const DescriptionPreTitle = styled.p`
display: inline-block;
font-size: 32px;
/* font-weight: 700; */
line-height: 1.25;
padding: 8px 18px;
text-transform: uppercase;
color: var(--main-blue); 
background-color: var( --backdrop-blue);
border-radius: 44px;
margin-bottom: 8px;

@media screen and (min-width: 768px){
font-size: 40px;
line-height: calc(44/40);
    }
`

export const DescriptionTitle = styled.h2`
font-size: 32px;
/* font-weight: 700; */
line-height: 1.25;
text-transform: uppercase;
color: var(--letter-black); 
margin-bottom: 14px;

@media screen and (min-width: 768px){
    font-size: 40px;
    line-height: calc(44/40);
    margin-bottom: 24px;
   
}
`

export const StyledDescription = styled.p`
font-family: 'PoppinsMedium';
font-size: 14px;
font-weight: 500;
line-height: calc(18/14);
color: var(--black); 
max-width: 335px;

@media screen and (min-width: 768px){
max-width: 275px;
    }
`

export const DescriptionImg = styled.img`
max-width: 335px;
max-height: 457px;
object-fit: contain;

@media screen and (min-width: 768px){
max-width: 704px;
max-height: 700px;
    }

@media screen and (min-width: 1440px){
max-width: 604px;
max-height: 700px;
    }`

    
