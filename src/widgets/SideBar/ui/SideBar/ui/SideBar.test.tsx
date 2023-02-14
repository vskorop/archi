import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar/ui/SideBar/ui/SideBar';
import { withTranslation } from 'react-i18next';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Button', () => {
    test('with one param', () => {
        const SideBarWithTranslation = withTranslation()(SideBar);
        renderWithTranslation(<SideBarWithTranslation />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('is open', () => {
        renderWithTranslation(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('sideBar');
    });
    test('is close', () => {
        renderWithTranslation(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
