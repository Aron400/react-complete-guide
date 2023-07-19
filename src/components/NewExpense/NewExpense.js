import React, { useState } from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const [formShowing, setFormShowing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setFormShowing(false);
    };

    const startFormShowing = () => {
        setFormShowing(true)
    }

    const stopFormShowing = () => {
        setFormShowing(false)
    }

    return <div className='new-expense'>
        {!formShowing && <button onClick={startFormShowing}>Add New Expense</button>}
        {formShowing && <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopFormShowing}
        />}
    </div>
}

export default NewExpense;