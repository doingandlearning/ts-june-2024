import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CategorySelector from './index';
import { Category } from '../../types';

describe('CategorySelector', () => {
	it('renders with the correct category value and changes category on select', () => {
		// Initial category
		let initialCategory = Category.People;

		// Function to change the category
		const setCategory = (newCategory: Category) => {
			initialCategory = newCategory;
		};

		// Render the component with initial category and setCategory function
		render(<CategorySelector category={initialCategory} setCategory={setCategory} />);

		// Get the select input element
		const selectInput = screen.getByRole('combobox') as HTMLInputElement;
		// Check if the select input displays the correct initial category
		expect(selectInput.value).toBe(initialCategory);

		// Change the category by selecting a different option
		fireEvent.change(selectInput, { target: { value: Category.Planets } });

		// Check if the category has been updated
		expect(initialCategory).toBe(Category.Planets);
	});
});
