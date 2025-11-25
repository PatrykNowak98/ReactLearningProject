import { useMemo } from "react";
import type { Expense } from "../../../types";

interface ExpensesListProps {
  expenses: Expense[];
  onDeleteExpense: (id: string) => void;
}

export default function ExpensesList({
  expenses,
  onDeleteExpense,
}: ExpensesListProps) {
  const total = useMemo(
    () => expenses.reduce((sum, e) => sum + e.amount, 0),
    [expenses]
  );

  if (expenses.length === 0) {
    return <p className="text-muted">No expenses to show.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped align-middle">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th style={{ width: "1%" }}></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td className="text-end">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onDeleteExpense(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="fw-bold">Total</td>
            <td className="fw-bold">${total.toFixed(2)}</td>
            <td colSpan={2}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
