import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
    waitFor,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import Freelances from './';
import { render } from '../../utils/test';

const freelancersMockedData = [
    {
        name: 'Monsieur Patate',
        job: 'Multi-tâches',
        picture: '',
    },
    {
        name: 'Madame Patate',
        job: 'Experte destructuration',
        picture: '',
    },
];

const server = setupServer(
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        return res(ctx.json({ freelancersList: freelancersMockedData }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should display freelancers name', async () => {
    render(<Freelances />);
    expect(screen.getByTestId('loader')).toBeTruthy();
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));
    await waitFor(() => {
        expect(screen.getByText('Monsieur Patate')).toBeTruthy();
        expect(screen.getByText('Madame Patate')).toBeTruthy();
    });
});
