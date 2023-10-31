import { Checkmark } from 'react-checkmark'
import Modal from '../../Modal/Modal'


export const CheckmarkModal = ({onClose})=>{
    return (
        <Modal onClose={onClose}>
            {/* <p>Do you want to save changes?</p> */}
          <Checkmark   size='128px' color='blue'/>
        </Modal>
    )
}
