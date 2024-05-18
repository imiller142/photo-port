/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '..';


afterEach(cleanup);

describe('Nav component', () => {
    //baseline test
    it('renders', () => {
        render(<Nav/>);
    })

    //snapshot test 
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav/>);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Emoji is visible', () => {
    it('Inserts emoji into h2', () => {
        const { getByLabelText } = render(<Nav />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

describe('links are visible', () => {
    it('Checks to make sure links are visible', () => {
        const { getByTestId } = render(<Nav/>);
        expect(getByTestId('link')).toHaveTextContent("Oh Snap!");
        expect(getByTestId('about')).toHaveTextContent("About me");
    })
})