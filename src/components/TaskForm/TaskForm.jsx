import {
  ButtonContainer,
  ContainerForm,
  StyledCancel,
  StyledEdit,
  StyledInput,
  StyledInputTime,
  StyledLabel,
  StyledTime,
} from './TaskForm.styled';

const TaskForm = () => {



  return (
    <ContainerForm>
      <form>
        <StyledLabel>
          Title
          <StyledInput type="text" placeholder="Enter text" />
        </StyledLabel>

        <StyledTime>
          <StyledLabel>
            Start
            <StyledInputTime type="time" />
          </StyledLabel>
          <StyledLabel>
            End
            <StyledInputTime type="time" />
          </StyledLabel>
        </StyledTime>

      <div>
        <label>
          <input type="radio" name="color" value="blue" checked />
          Low
        </label>
        <label>
          <input type="radio" name="color" value="orange" />
          Medium
        </label>
        <label>
          <input type="radio" name="color" value="green" />
          High
        </label>
      </div>

        <ButtonContainer>
          <StyledEdit type="submit">Edit</StyledEdit>
          <StyledCancel type="buttom">Cancel</StyledCancel>
        </ButtonContainer>


      </form>
    </ContainerForm>
  );
};

export default TaskForm;
