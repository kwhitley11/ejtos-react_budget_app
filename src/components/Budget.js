import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        })
        let payload = event.target.value;

        if (payload > 20000) {
            alert('The budget cannot exceed 20,000')
        } else if (payload < totalExpenses) {
            alert('The budget value cannot be lower than spending amount')
        } else {
        setBudget(event.target.value);
        }
    };

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} width='2rem'></input>
</div>
    );
};

export default Budget;