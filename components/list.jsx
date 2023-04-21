import Task from "./task";
function ToDoList({ todos, Marktodo, deleteToDo }) {
  return (
    <ul className="list">
      {todos.length == 0 && "No Tasks"}
      {todos.map((todo) => {
        return (
          <Task
            {...todo}
            key={todo.id}
            Marktodo={Marktodo}
            deleteToDo={deleteToDo}
          ></Task>
        );
      })}
    </ul>
  );
}
export default ToDoList;
