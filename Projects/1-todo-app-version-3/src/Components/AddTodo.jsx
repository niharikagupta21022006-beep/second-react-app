import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");

  };

  
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-5">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
          />
        </div>
        <div class="col-4">
          <input type="date" onChange={handleDateChange} />
        </div>
        <div class="col-3">
          <button
            type="button"
            class="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
