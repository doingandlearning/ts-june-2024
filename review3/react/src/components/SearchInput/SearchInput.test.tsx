import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import SearchInput from './index';

afterEach(() => {
	cleanup();
});


describe('SearchInput', () => {
	it('renders with the correct value', () => {
		render(<SearchInput searchQuery="test query" setSearchQuery={() => { }} />);
		const inputElement = screen.getByPlaceholderText('Search...') as HTMLInputElement;
		expect(inputElement.value).toBe('test query');
	});

	it('calls setSearchQuery on change', () => {
		const setSearchQueryMock = vi.fn().mockReturnValue("Banana"); // MOCKED
		render(<SearchInput searchQuery="" setSearchQuery={setSearchQueryMock} />);
		const inputElement = screen.getByPlaceholderText('Search...');
		fireEvent.change(inputElement, { target: { value: 'new query' } });

		expect(setSearchQueryMock).toHaveBeenCalledWith('new query'); // test is has been caleld
	});
});
