import React, {useEffect, useState} from 'react'


interface MainMenu {
    money: number
    button: string
}


const Menu =() => {

 const [money, setMoney] = useState(1000);


/*
 useEffect(() => {
    setMoney(JSON.parse(window.localStorage.getItem('money')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('money', money);
  }, [money]);
*/

 function withdrawTwenty() {
    window.confirm('Are you sure you wish to withdraw 20 $?') 
    setMoney(prevTotal =>  prevTotal- 20)};


 function withdrawFifty() {
    window.confirm('Are you sure you wish to withdraw 50 $?') 
    setMoney(prevTotal =>  prevTotal- 50)};
   

 function withdrawHundred() {
    window.confirm('Are you sure you wish to withdraw 100 $?') 
    setMoney(prevTotal =>  prevTotal- 100)};
   



  return (
    <div className='container'>
        <div className='menu'>
        <div className='buttons'>
            <button onClick= {withdrawTwenty} > 20$ </button>
            <button onClick={withdrawFifty}> 50$ </button>
            <button onClick={withdrawHundred}> 100$</button>
            <button>Deposit</button>
            <button>Donate</button>
        </div>
        <div className='balance'>
        <h2>Current balance:</h2>
        <h1> {money} $ </h1>
        </div>
        </div>
    </div>
  )
}

export default Menu