import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import './App.css';
import TodoItems from "./Components/TodoItems";

function App(){

  const todoItems = [
    {
      name : "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name:"Go to college",
      dueDate:"4/10/2023",
    },

    {
      name:"Like the button",
      dueDate:"Immediately",
    },
  ];
  return <center class="todo-container
  ">
    <AppName></AppName>
    <AddTodo></AddTodo>
    <TodoItems todoItems = {todoItems}></TodoItems>
    
   
  </center>

}

export default App;