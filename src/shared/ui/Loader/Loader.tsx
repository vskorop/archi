import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
    black?: boolean
}

export const Loader = ({ className, black }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', { black }, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
