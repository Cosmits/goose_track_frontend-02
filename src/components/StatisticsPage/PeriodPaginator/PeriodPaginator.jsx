import PropTypes from 'prop-types';
import StyledDatepicker from './StyledDatepicker/StyledDatepicker'


export const PeriodPaginator = ({ onDayChange }) => {

   return (<StyledDatepicker onDayChange={onDayChange} />)
}

PeriodPaginator.propTypes = {
   onDayChange: PropTypes.func.isRequired,
};