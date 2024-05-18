import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import About from "..";


afterEach(cleanup);

describe('About component', () => {
    //first test
    it('renders', () => {
        render(<About/>);
    });

    it('Matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About/>)
        expect(asFragment()).toMatchSnapshot();
    })
    //second test

})