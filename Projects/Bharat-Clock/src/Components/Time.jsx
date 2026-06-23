function Time(){
    let currentDate = new Date();
    return(
        <p className="lead">This is the current time: {currentDate.toLocaleDateString()} - {""}
        {currentDate.toLocaleTimeString()}</p>
    );
}

export default Time;