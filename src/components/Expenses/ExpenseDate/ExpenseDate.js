import "./ExpenseDate.css";
function ExpenseDate(properties) {
  const month = properties.date.toLocaleString("en-US", { month: "long" });
  const day = properties.date.toLocaleString("en-US", { day: "2-digit" });
  const year = properties.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-d
      ate__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
