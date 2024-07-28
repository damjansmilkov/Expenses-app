import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
function ExpenseItem(properties) {
  return (
    <div className="expense-item">
      <ExpenseDate date={properties.date} />
      <div className="expense-item__description">
        <h2>{properties.title}</h2>
        <div className="expense-item__price">${properties.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
