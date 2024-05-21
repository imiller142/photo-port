import { render, cleanup, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '..';

afterEach(cleanup);

const categories = [
    { name: 'portraits', description: 'Potraits of people in my life' }
]

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

it('renders', () => {
    render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockContactSelected}
        />);
})