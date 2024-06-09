import { render, screen } from '@testing-library/react';
import TagList from '../../src/components/TagList';

describe('TagList', () => {
  it('should render tags', async () => {

        render(<TagList/>)

        // // waitFor keeps calling the callback until timeout
        // await waitFor(()=> { 
        //     // codes here should not cause side effects
        //     const listItems = screen.getAllByRole('listitem')
        //     expect(listItems.length).toBeGreaterThan(0)
        // })

        // findAllByRole = waitFor + getAllByRole
        const listItems = await screen.findAllByRole('listitem')
        expect(listItems.length).toBeGreaterThan(0)
  });
});