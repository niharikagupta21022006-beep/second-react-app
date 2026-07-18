import { useState ,useRef } from "react";
import { AiFillFileAdd } from "react-icons/ai";

function AddTodo({ onNewItem }) {
  
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  

  
  const handleAddButtonClicked = (event) => {
    
    event.preventDefault();
    
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
    
    
  };

  
  return (
    <div class="container text-center">
      <form  class="row kg-row"
       onSubmit={handleAddButtonClicked}>
       
        <div class="col-5">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            value = {todoName}
            
          />
        </div>
        <div class="col-4">
          <input type="date" 
          ref={dueDateElement}
         />
        </div>
        <div class="col-3">
          <button
           type="submit"
            class="btn btn-success kg-button"
          >
            <AiFillFileAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
