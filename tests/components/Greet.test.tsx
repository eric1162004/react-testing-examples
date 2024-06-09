import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'

describe('Greet', () => {
    it('should render Hello with the name when name is provided', () => {
        render(<Greet name='eric'/> )   /* render the component is a virtual dom */

        const heading = screen.getByRole('heading')

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/eric/i);
    })

    it('should render login button when name is not provided', () => {
        render(<Greet /> )   /* render the component is a virtual dom */

        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
    })
})