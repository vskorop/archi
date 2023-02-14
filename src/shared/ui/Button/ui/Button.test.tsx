import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button';

describe('Button', () => {
    test('with one param', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('button has classname', () => {
        render(<Button theme={ThemeButton.sideBarButton}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('sideBarButton');
        screen.debug();
    });
});
