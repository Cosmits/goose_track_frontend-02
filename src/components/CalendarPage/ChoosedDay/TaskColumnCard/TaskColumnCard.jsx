import PropTypes from 'prop-types';

import TaskToolbar from '../TaskToolbar/TaskToolbar';
import {
  TaskCard,
  TaskCardTitle,
  TaskCardWrapper,
  TaskCardInfoWrapper,
  TaskCardUserWrapper,
  TaskCardAvatar,
  TaskCardSuccess,
  TaskCardSuccessText,
} from './TaskColumnCard.styled';

export default function TaskColumnCard({ taskTitle, priority, avatar, id }) {
  const priorityColor = {
    low: '#72C2F8',
    medium: '#F3B249',
    high: '#EA3D65',
  };

  function priorityNameCapitalized(priorityName) {
    const letters = priorityName.split('');
    const capitalizedFirstLetter = [
      letters[0].toUpperCase(),
      ...letters.slice(1),
    ];
    return capitalizedFirstLetter.join('');
  }

  return (
    <TaskCard>
      <TaskCardWrapper>
        <TaskCardTitle>{taskTitle}</TaskCardTitle>
        <TaskCardInfoWrapper>
          <TaskCardUserWrapper>
            <TaskCardAvatar src={avatar} />
            <TaskCardSuccess color={priorityColor[priority]}>
              <TaskCardSuccessText>
                {priorityNameCapitalized(priority)}
              </TaskCardSuccessText>
            </TaskCardSuccess>
          </TaskCardUserWrapper>
          <TaskToolbar id={id} />
        </TaskCardInfoWrapper>
      </TaskCardWrapper>
    </TaskCard>
  );
}

TaskColumnCard.propTypes = {
  taskTitle: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
