import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button';

describe('Button', () => {
    test('with one param', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('button has classname', () => {
        render(<Button theme={ButtonTheme.OUTLINE}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('button outline size_m');
    });
});
