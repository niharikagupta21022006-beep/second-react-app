import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";
import './App.css'
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {
  let foodItems = ["Dal","Green Vegetables","Roti","Salad","Milk","Ghee"];
  //let foodItems = [];

  // if(foodItems.length == 0){
  //   return <h3>I am still hungry.</h3>;
  // }
  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items = {foodItems}></ErrorMessage>
      <FoodInput></FoodInput>
      <FoodItems items = {foodItems}></FoodItems>
    </Container>

    <Container>
      <p>
        Above is the list of healthy foods that are good for your health and well being.
      </p>
    </Container>
    </>
  );
}
export default App;
