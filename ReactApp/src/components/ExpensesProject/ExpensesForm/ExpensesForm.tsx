import { useState } from "react";
import type { Category } from "../../../types";

interface ExpenseFormProps {
  categories: Category[];
  onAddExpense: (expense: {
    description: string;
    amount: number;
    category: string;
  }) => void;
}

export default function ExpensesForm({
  categories,
  onAddExpense,
}: ExpenseFormProps) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!description.trim()) {
      newErrors.description = "Description is required.";
    } else if (description.trim().length < 3) {
      newErrors.description = "Description should be at least 3 characters.";
    }

    if (amount === "") {
      newErrors.amount = "Amount is required.";
    } else if (Number(amount) <= 0) {
      newErrors.amount = "Amount should be greater than 0.";
    }

    if (!category) {
      newErrors.category = "Category is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onAddExpense({
      description: description.trim(),
      amount: Number(amount),
      category,
    });

    setDescription("");
    setAmount("");
    setCategory("");
    setErrors({});
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          className={"form-control" + (errors.description ? " is-invalid" : "")}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && (
          <div className="invalid-feedback">{errors.description}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          type="number"
          step="0.01"
          className={"form-control" + (errors.amount ? " is-invalid" : "")}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {errors.amount && (
          <div className="invalid-feedback">{errors.amount}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          className={"form-select" + (errors.category ? " is-invalid" : "")}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category...</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.category && (
          <div className="invalid-feedback">{errors.category}</div>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
