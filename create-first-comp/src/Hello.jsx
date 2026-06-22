function Hello(){
    let myName = 'Niharika';
    let number = 456;

    let fullName = () => {
       return 'Niharika Gupta'
    }
    return<h3>
        MessageNo: {number} I am your master{fullName()};
    </h3>
}

export default Hello;