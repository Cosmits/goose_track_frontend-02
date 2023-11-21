import { useState, useEffect } from 'react';
import {
  AddTask,
  ButtonContainer,
  CloseIcon,
  ContainerForm,
  ContainerRadio,
  Label,
  PencilIcon,
  StyledAdd,
  StyledCancel,
  StyledEdit,
  StyledInput,
  StyledInputTime,
  StyledLabel,
  StyledRadioHigh,
  StyledRadioLow,
  StyledRadioMedium,
  StyledTime,
} from './TaskForm.styled';

import { useParams } from 'react-router';
import {
  useCreateTasksMutation,
  useEditTasksMutation,
  useGetMonthlyTasksQuery,
} from '../../../../redux/tasks/tasksApi';
import { showErrorToast } from '../../../../services/showToast';
import { selectTheme } from '../../../../redux/theme/themeSlice';
import { useSelector } from 'react-redux';

const TaskForm = ({ initialData, closeModal, category = '' }) => {
  const { currentDay } = useParams();

  const theme = useSelector(selectTheme);

  const [isEdit, setIsEdit] = useState(false);

  const [isEditing, setIsEditing] = useState(!!initialData);
  const [errorMessage, setErrorMessage] = useState('');

  const [createTask, { isError: createTaskIsError, error: createTaskError }] =
    useCreateTasksMutation();
  const [editTask, { isError: editTaskIsError, error: editTaskError }] =
    useEditTasksMutation();
  const { currentData } = useGetMonthlyTasksQuery(currentDay);

  const [formData, setFormData] = useState(
    initialData || {
      title: '',
      start: '09:00',
      end: '09:30',
      priority: 'low',
      date: currentDay,
      category: '',
    },
  );

  const categoryToDefault = (category) => {
    switch (category) {
      case 'To do':
        setFormData({ ...formData, category: 'to-do' });
        setIsEdit(false);
        break;
      case 'In progress':
        setFormData({ ...formData, category: 'in-progress' });
        setIsEdit(false);
        break;
      case 'Done':
        setFormData({ ...formData, category: 'done' });
        setIsEdit(false);
        break;

      default: {
        const task = currentData.data.filter(({ _id }) => _id === category);
        setIsEdit(true);
        setFormData(...task);
        break;
      }
    }
  };

  useEffect(() => {
    categoryToDefault(category);
    if (initialData) {
      setFormData(initialData);
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [category, initialData]);

  //========= Error handling =================================
  useEffect(() => {
    if (createTaskIsError) {
      showErrorToast('Error creating task', theme);
    }

    if (editTaskIsError) {
      showErrorToast('Error creating task', theme);
    }
  }, [createTaskError, createTaskIsError, editTaskError, editTaskIsError, theme]);

  const handleEdit = () => {
    const taskId = formData._id;

    delete formData._id;
    delete formData.date;

    editTask({ id: taskId, data: formData });
    closeModal();
  };

  const handleAdd = () => {
    createTask(formData);
    closeModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Перевірка відповідності категорії в списку допустимих
    const validCategories = ['to-do', 'in-progress', 'done'];
    if (!validCategories.includes(formData.category)) {
      setErrorMessage(
        'Invalid category. Choose from: to-do, in-progress, done.',
      );
      return;
    }

    if (isEditing) {
      handleEdit(formData);
    } else {
      handleAdd(formData);
    }
    setFormData(initialData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    closeModal();
    setIsEditing(false);
  };

  return (
    <ContainerForm>
      <CloseIcon
        onClick={() => {
          closeModal();
        }}
      />
      <form onSubmit={handleSubmit}>
        <StyledLabel htmlFor="title">Title</StyledLabel>
        <StyledInput
          type="text"
          name="title"
          value={formData?.title || ''}
          onChange={handleInputChange}
          placeholder="Enter text"
          required
          maxLength="250"
        />
        <StyledTime>
          <div>
            <StyledLabel htmlFor="start"> Start</StyledLabel>

            <StyledInputTime
              type="time"
              name="start"
              value={formData?.start || ''}
              onChange={handleInputChange}
              required
              pattern="[0-1][0-9]:[0-5][0-9]"
            />
          </div>
          <div>
            <StyledLabel htmlFor="end">End</StyledLabel>
            <StyledInputTime
              type="time"
              name="end"
              value={formData?.end || ''}
              onChange={handleInputChange}
              required
              pattern="[0-1][0-9]:[0-5][0-9]"
              min={formData?.start}
            />
          </div>
        </StyledTime>
        <ContainerRadio>
          <Label>
            <StyledRadioLow
              type="radio"
              name="priority"
              value="low"
              checked={formData?.priority === 'low'}
              onChange={handleInputChange}
              required
            />
            Low
          </Label>
          <Label>
            <StyledRadioMedium
              type="radio"
              name="priority"
              value="medium"
              checked={formData?.priority === 'medium'}
              onChange={handleInputChange}
              required
            />
            Medium
          </Label>
          <Label>
            <StyledRadioHigh
              type="radio"
              name="priority"
              value="high"
              checked={formData?.priority === 'high'}
              onChange={handleInputChange}
              required
            />
            High
          </Label>
        </ContainerRadio>
        {errorMessage && <div>{errorMessage}</div>}
        <ButtonContainer>
          {isEdit ? (
            <StyledEdit onClick={handleEdit} type="submit">
              <PencilIcon />
              Edit
            </StyledEdit>
          ) : (
            <StyledAdd onClick={handleAdd} type="submit">
              <AddTask />
              Add
            </StyledAdd>
          )}
          <StyledCancel type="button" onClick={handleCancel}>
            Cancel
          </StyledCancel>
        </ButtonContainer>
      </form>
    </ContainerForm>
  );
};

export default TaskForm;
