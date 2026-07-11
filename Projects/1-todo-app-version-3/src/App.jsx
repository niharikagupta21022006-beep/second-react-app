import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import './App.css';
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App(){

  const initialTodoItems = [
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

  const [todoItems,setTodoItems] = useState(initialTodoItems);
  const handleNewItem = (itemName,itemDueDate) => {
     console.log(`New Item Added : ${itemName} Date:${itemDueDate}`)
     const newTodoItems = [
      ...todoItems,
      {name : itemName ,dueDate :itemDueDate},
     ];
     setTodoItems(newTodoItems);
  }

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems  = todoItems.filter(item => item.name != todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item deleted :${todoItemName}`);


  }


  return <center class="todo-container
  ">
    <AppName></AppName>
    <AddTodo onNewItem = {handleNewItem}></AddTodo>
    {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
    <TodoItems todoItems = {todoItems} onDeleteClick ={handleDeleteItem}></TodoItems>
    
   
  </center>

}

export default App;