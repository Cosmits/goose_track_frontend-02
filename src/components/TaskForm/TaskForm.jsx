const TaskForm = () => {
  return (
    <div>
      <form>
        <label>
          Title
          <input type="text" placeholder="Enter text" />
        </label>
        <label>
          Start
          <input type="time" />
        </label>
        <label>
          End
          <input type="time" />
        </label>
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
        <button type="submit">Edit</button>
        <button type="buttom">Cancel</button>
      </form>
    </div>
  );
};

export default TaskForm;
