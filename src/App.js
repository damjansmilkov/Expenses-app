import React, { useState } from "react";
import Expenses from "./components/Expenses/ExpenseItemDetails/Expenses";
import UserInput from "./components/UserInput/UserInput/UserInput";
import {ImageBackground, View} from 'react';

const image = {url : 'https://wallpapers.com/images/featured/google-calendar-background-tfpb8g86k386xz0l.webp'}

export const hardcoded = [
  {
    id: [''],
    title: [''],
    price: [''],
    date: new Date("" ),
  },
  
];

function App() {
  <View >
    <ImageBackground source={image} >
    </ImageBackground>
  </View>

  const [expenses, setExpenses] = useState(hardcoded);

  function addExpenseHandler(expenseData) {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  }

  return (
    <div >
      
      <UserInput onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
