const ErrorMessage = ({items}) => {
    //let foodItems = ["Dal","Green Vegetables","Roti","Salad","Milk","Ghee"];
    return<>
        {items.length == 0 ?<h3>I am still hungry.</h3> : null}
    </>;

}
export default ErrorMessage;