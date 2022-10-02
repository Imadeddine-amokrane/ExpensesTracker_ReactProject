import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
  const saveExpenseHandler = (newExpense) => {
    props.OnAddExpense(newExpense);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add newExpense</button>
      )}
      {isEditing && (
        <ExpenseForm
          expenses={props.expenses}
          AddExpenseHandler={saveExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
