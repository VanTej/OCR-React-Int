import { formatJobList } from '.';
import { formatQueryParams } from '.';

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
