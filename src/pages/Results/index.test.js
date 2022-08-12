import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';
import {
    waitFor,
    screen,
} from '@testing-library/react';
import Results, { formatJobList } from '.';
import { formatQueryParams } from '.';
import { render } from '../../utils/test';

const resultsMockedData = [
    {
        title: 'titre 1',
        description: 'description 1',
    },
    {
        title: 'titre 2',
        description: 'description 2',
    },
];

const server = setupServer(
    rest.get('http://localhost:8000/results/?a1=true', (req, res, ctx) => {
        return res(ctx.json({ resultsData: resultsMockedData }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should display data results', async () => {
    render(<Results />);
    await waitFor(() => { 
        expect(screen.getByText('description 2')).toBeTruthy()
        expect(screen.getByText('titre 1,')).toBeTruthy()
        expect(screen.getByText('titre 2')).toBeTruthy()
    })
});

describe('formatJobList function', () => {
    test('format with coma', () => {
        const result = formatJobList('coucou', 2, 0);
        expect(result).toBe('coucou, ');
    });
    
    test('format without coma', () => {
        const result = formatJobList('coucou', 2, 1);
        expect(result).toBe('coucou');
    });
    
    test('format with coma', () => {
        const expectedState = 'coucou, ';
        expect(formatJobList('coucou', 3, 1)).toEqual(expectedState);
    });
});

describe('formatQueryParams', () => {
    it('should return one query', () => {
        const expectedQuery = 'a1=1';
        expect(formatQueryParams({1:1})).toEqual(expectedQuery)
    })
    it('should return two queries with & between', () => {
        const expectedQuery = 'a1=1&a2=2';
        expect(formatQueryParams({1:1, 2:2})).toEqual(expectedQuery)
    })
});

