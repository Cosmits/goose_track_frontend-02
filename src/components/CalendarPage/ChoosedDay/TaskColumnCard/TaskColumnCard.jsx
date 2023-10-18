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

export default function TaskColumnCard({
  task = 'Brainstorm ideas for new content or new content',
  priority = 'Medium',
}) {
  const priorityColor = {
    Low: '#72C2F8',
    Medium: '#F3B249',
    High: '#EA3D65',
  };

  return (
    <TaskCard>
      <TaskCardWrapper>
        <TaskCardTitle>{task}</TaskCardTitle>
        <TaskCardInfoWrapper>
          <TaskCardUserWrapper>
            <TaskCardAvatar src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" />
            <TaskCardSuccess color={priorityColor[priority]}>
              <TaskCardSuccessText>{priority}</TaskCardSuccessText>
            </TaskCardSuccess>
          </TaskCardUserWrapper>
          <TaskToolbar />
        </TaskCardInfoWrapper>
      </TaskCardWrapper>
    </TaskCard>
  );
}
