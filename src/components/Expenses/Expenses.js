import React ,{useState}from 'react';
// import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses=props.items.filter((expense)=>{
      return expense.date.getFullYear().toString()===filteredYear;
    })

    return(<Card className='expenses'>
         <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
         {/* //***************** METHOD 2 (better and dhyamic method dor rendering the list) ************/ }

{/* //**************** METHOD 2 (to print for no result found) ************/ }
{/* {filteredExpenses.length===0&&<p>No Result found</p>}
{filteredExpenses.length>0&&filteredExpenses.map((expense) =>(
<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
))} */}


{/* // ************METHOD 1 (to print for no result ) ******************/}

{/* {filteredExpenses.length===0 ?(<p>No Result found</p>):(filteredExpenses.map((expense) =>(
<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
)
))} */}
<ExpensesChart expenses={filteredExpenses}></ExpensesChart>
<ExpensesList items={filteredExpenses}></ExpensesList>

         {/* ********** METHOD 1 *****************  */}
    {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
    <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
    <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
    <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem> */}
    </Card>
    )
}
export default Expenses;