import type { Category } from "../../../types";

interface ExpensesFilterProps {
  categories: Category[];
  selectedCategory: string;
  onChangeCategory: (category: string) => void;
}

export default function ExpensesFilter({
  categories,
  selectedCategory,
  onChangeCategory,
}: ExpensesFilterProps) {
  return (
    <div className="mb-3">
      <label className="form-label">Filter by category</label>
      <select
        className="form-select"
        value={selectedCategory}
        onChange={(e) => onChangeCategory(e.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
