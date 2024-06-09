import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event'

describe('TermsAndConditions', () => {
    it('should render with correct text and initial state', () => {
        render(<TermsAndConditions/>)

        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/terms & conditions/i)
        
        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeInTheDocument()
        expect(checkbox).not.toBeChecked()

        const button = screen.getByRole('button', {name: /submit/i}) // filter by name label 
        expect(button).toBeInTheDocument()
        // expect(button).toHaveTextContent(/submit/i) // omit this to focus on testing behavior
        expect(button).toBeDisabled()
    })

    it('should enable the button when the checkbox is checked', async () => {
        render(<TermsAndConditions/>)

        const checkbox = screen.getByRole('checkbox')
        const user = userEvent.setup()
        await user.click(checkbox)

        expect(screen.getByRole('button', {name: /submit/i})).toBeEnabled()
    })
})