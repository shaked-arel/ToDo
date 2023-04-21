import { useState } from "react";
function Form(props) {
  const [newTask, setNewTask] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    if (newTask === "") return;
    props.AddToDo(newTask);
    setNewTask("");
  }
  return (
    <form onSubmit={submitHandler} className="new-task-form">
      <div className="form-row">
        <label htmlFor="task">New Task</label>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          id="task"
        ></input>
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
export default Form;
