import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";
function App(){
  return (
    <center>
  
   <div className={styles.calculator}>
    <Display></Display>
    <ButtonsContainer></ButtonsContainer>
  </div>
  </center>
  );
  
}

export default App;


