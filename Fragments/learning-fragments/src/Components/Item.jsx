import styles from "./Item.module.css"

const Item = ({foodItem}) => {
  const handleBuyButtonClicked = (event) =>{
    console.log(`${foodItem} being bought`)
  }
    return (
        <li className={`${styles["kg-item"]} list-group-item`}>
        <span className={`${styles["kg-span"]}`}>{foodItem}</span>
        <button className={`${styles.button} btn btn-info`}
        onClick ={(event) => handleBuyButtonClicked(foodItem)}>Buy</button>
      </li>
    )

}

export default Item;