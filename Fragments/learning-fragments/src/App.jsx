import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";
import './App.css'

function App() {
  let foodItems = ["Dal","Green Vegetables","Roti","Salad","Milk","Ghee"];
  //let foodItems = [];

  // if(foodItems.length == 0){
  //   return <h3>I am still hungry.</h3>;
  // }
  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items = {foodItems}></ErrorMessage>
      <FoodItems items = {foodItems}></FoodItems>
    </>
  );
}
export default App;
