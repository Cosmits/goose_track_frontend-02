import Modal from "../Modal/Modal"
import TaskForm from "../TaskForm/TaskForm";

const TaskModal = ({ initialData, closeModal }) => {
  return (
    <Modal onClose={closeModal}>
      <TaskForm initialData={initialData} closeModal={closeModal} />
    </Modal>
  );
};

export default TaskModal;
