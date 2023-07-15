import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
    
    // const[title,setTitle] = useState(props.title);
    // clickHandler
  //   const clickHandler=()=>{
  // setTitle('updated !!!');
  //   }
    return(
      <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
            </div>
    </Card>
    </li>
   )
}
export default ExpenseItem;