// src/App.tsx
import "./App.css";
import Form from "./components/ExpensesProject/ExpensesForm/ExpensesForm";
import Filter from "./components/ExpensesProject/ExpensesFilter/ExpensesFilter";
import ExpensesList from "./components/ExpensesProject/ExpensesList/ExpensesList";
import type { Expense, Category } from "./types";
import { useEffect, useRef, useState } from "react";

const CATEGORIES: Category[] = [
  "Groceries",
  "Utilities",
  "Entertainment",
  "Travel",
  "Other",
];

function App() {
  const ref = useRef<HTMLInputElement>(null);

  //afterRender
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
