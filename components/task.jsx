function Task({ completed, id, title, Marktodo, deleteToDo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => Marktodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="del-btn" onClick={() => deleteToDo(id)}>
        Done
      </button>
    </li>
  );
}
export default Task;
