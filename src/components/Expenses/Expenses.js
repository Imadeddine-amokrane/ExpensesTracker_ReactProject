import './Expenses.css';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterExpensesHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expensesFiltered = props.expenses.filter(
    (expense) => expense.date.getFullYear() === +filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterExpenses={filterExpensesHandler}
        />
        <ExpensesChart expenses={expensesFiltered} />
        <ExpensesList expenses={expensesFiltered} />
      </Card>
    </div>
  );
};

export default Expenses;

// Assignment 3: Time to Practice: Working with Lists
// let expenses = props.expenses;

// const expensesFilteredInit = props.expenses.filter(
//   (expense) => expense.date.getFullYear() === +filteredYear
// );

// const [expensesFiltered, setExpensesFilteres] =
//   useState(expensesFilteredInit);
// setExpensesFilteres(
//   props.expenses.filter(
//     (expense) => expense.date.getFullYear() === +selectedYear
//   )
// );

// expenses = expensesFiltered;
