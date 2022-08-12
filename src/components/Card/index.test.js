import Card from './';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';

describe('Card', () => {
    test('Should render without crash', async () => {
        render(
            <ThemeProvider>
                <Card />
            </ThemeProvider>
        );
    });

    test('should use the good picture', async () => {
        render(
            <ThemeProvider>
                <Card label="le label" title="le titre" picture="la photo" />
            </ThemeProvider>
        );
        expect(screen.getByRole('img').getAttribute('src')).toBe('la photo');
    });

    test('should use the good title', async () => {
        render(
            <ThemeProvider>
                <Card label="le label" title="le titre" picture="la photo" />
            </ThemeProvider>
        );
        expect(
            screen.getByRole('heading', {
                level: 1,
                text: 'le titre',
            })
        ).toBeTruthy();
    });

    test('should use the good title with favorite', async () => {
        render(
            <ThemeProvider>
                <Card label="le label" title="le titre" picture="la photo" />
            </ThemeProvider>
        );
        const titleH1 = screen.getByRole('heading', {
            level: 1,
        });
        fireEvent.click(titleH1);
        expect(
            screen.getByRole('heading', {
                level: 1,
                text: '⭐️ le titre ⭐️',
            })
        ).toBeTruthy();
    });
});
