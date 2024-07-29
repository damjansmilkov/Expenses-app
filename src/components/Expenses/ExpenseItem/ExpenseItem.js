import "./ExpenseItem.css";
import React, { useState } from "react";
import Card from "../../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

function ExpenseItem(properties) {
  const [title, setTitle] = useState(properties.title);

  function clickHandler() {
    <open textbox/>
    setTitle("Updated!");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={properties.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${properties.amount}</div>
      </div>
      <div >
      <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
