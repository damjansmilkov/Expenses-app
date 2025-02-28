import "./ExpenseItem.css";
import Card from "../../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

function ExpenseItem(properties) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={properties.date} />
      <div className="expense-item__description">
        <h2>{properties.title}</h2>
        <div className="expense-item__price">${properties.amount}</div>
      </div>
      {/* Копче за бришење на трошокот */}
      <button className="delete-btn" onClick={properties.onDelete}>
        Delete
      </button>
    </Card>
  );
}

export default ExpenseItem;
