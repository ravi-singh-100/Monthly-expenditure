import React ,{ useState } from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    // ********** METHOD 1 **************
    const[enteredTitle,setEnteredTitle]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');

// ************** METHOD 2 , METHOD 3***********
// const [userInput,setUserInput]=useState({
//     enteredTitle:'',
//     enteredDate:'',
//     enteredAmount:''
// })


    // titleChangeHandler
        const titleChangeHandler = (event) =>{
            // ********METHOD 1 ********* not a good option to use bcz of improper scheduling
            setEnteredTitle(event.target.value);

            //***********METHOD 2 ***************
            // setUserInput({
            //     ...userInput,
            //     enteredTitle:event.target.value
            // })

            // ***************** METHOD 3 ********************
//             setUserInput((prevState)=>{
// return{...prevState,enteredTitle:event.target.value};
//             })
    }
    //amountChangeHandler
    const amountChangerHandler=(event)=>{
setEnteredAmount(event.target.value);
    }
    //dateChangeHandler
     const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
     }

    //submitHandler
    const submitHandler=(event)=>{
event.preventDefault();
const expenseData={
    title:enteredTitle,
    amount:+enteredAmount,
    date:new Date(enteredDate)
}
props.onSaveExpenseData(expenseData);
setEnteredAmount('');
setEnteredDate('');
setEnteredTitle('');
    }



    return <div>
  <form onSubmit={submitHandler}>
<div className="new-expense__controls">
    <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
    </div>
    <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" value={enteredAmount} onChange={amountChangerHandler} min="0.01" step="0.01"></input>
    </div>
    <div className="new-expense__control">
        <label>Date</label>
        <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31"></input>
    </div>
</div>
<div className="new-expense__actions">
    <button type="button" onClick={props.onCancel}>Cancel</button>
    <button type="submit">Add Expense</button>

</div>
</form>
    </div>
}

export default ExpenseForm;