import { Category } from "../../types";

interface Props {
	category: Category,
	setCategory: (value: Category) => void
}

const CategorySelector = ({ category, setCategory }: Props) => (
	<select className="select-input" value={category} onChange={(e) => setCategory(e.target.value as Category)}>
		{Object.values(Category).map((cat) => (
			<option key={cat} value={cat}>{cat}</option>
		))}
	</select>
);

export default CategorySelector;