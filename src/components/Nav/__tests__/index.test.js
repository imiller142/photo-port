/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    //baseline test
    it('renders', () => {
        render(<Nav
            categories = {categories}
            setCurrentCategory = {mockSetCurrentCategory}
            currentCategory = {mockCurrentCategory} />);
    })

    //snapshot test 
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            categories = {categories}
            currentCategory={mockCurrentCategory}
            setCurrentCategory={mockSetCurrentCategory}/>);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Emoji is visible', () => {
    it('Inserts emoji into h2', () => {
        const { getByLabelText } = render(<Nav
            categories = {categories}
            currentCategory={mockCurrentCategory}
            setCurrentCategory={mockSetCurrentCategory} />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

describe('links are visible', () => {
    it('Checks to make sure links are visible', () => {
        const { getByTestId } = render(<Nav
            categories = {categories}
            currentCategory={mockCurrentCategory}
            setCurrentCategory={mockSetCurrentCategory}/>);
        expect(getByTestId('link')).toHaveTextContent("Oh Snap!");
        expect(getByTestId('about')).toHaveTextContent("About me");
    })
})