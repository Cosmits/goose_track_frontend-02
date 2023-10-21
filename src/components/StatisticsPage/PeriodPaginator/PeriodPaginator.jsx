 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledDatepicker from './StyledDatepicker'
// import { PaginatorContainer } from './PeriodPaginator.styled';

 export const PeriodPaginator = ({onDayChange}) =>{

    return (
        <>
        <StyledDatepicker  onDayChange={onDayChange}/>

        </>
    )
 }