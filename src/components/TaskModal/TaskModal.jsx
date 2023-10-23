import Modal from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';

const TaskModal = ({ initialData, closeModal, category }) => {
  return (
    <Modal onClose={closeModal}>
      <TaskForm
        initialData={initialData}
        closeModal={closeModal}
        category={category}
      />
    </Modal>
  );
};

export default TaskModal;
