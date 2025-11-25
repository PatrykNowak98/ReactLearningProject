// src/App.tsx
import "./App.css";
import Form from "./components/ExpensesProject/ExpensesForm/ExpensesForm";
import Filter from "./components/ExpensesProject/ExpensesFilter/ExpensesFilter";
import ExpensesList from "./components/ExpensesProject/ExpensesList/ExpensesList";
import type { Expense, Category } from "./types";
import { useState } from "react";

const CATEGORIES: Category[] = [
  "Groceries",
  "Utilities",
  "Entertainment",
  "Travel",
  "Other",
];

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: "1", description: "Milk", amount: 5, category: "Groceries" },
    { id: "2", description: "Eggs", amount: 10, category: "Groceries" },
    { id: "3", description: "Electricity", amount: 100, category: "Utilities" },
    { id: "4", description: "Movies", amount: 15, category: "Entertainment" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const handleAddExpense = (data: {
    description: string;
    amount: number;
    category: string;
  }) => {
    const newExpense: Expense = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      ...data,
    };
    setExpenses((prev) => [...prev, newExpense]);
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="container my-4">
      <h1 className="mb-4">Expenses</h1>

      <Form categories={CATEGORIES} onAddExpense={handleAddExpense} />

      <Filter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onChangeCategory={setSelectedCategory}
      />

      <ExpensesList
        expenses={visibleExpenses}
        onDeleteExpense={handleDeleteExpense}
      />
    </div>
  );
}

export default App;
