import { ReactNode } from 'react';

import styles from './alert.module.scss';
import cn from 'classnames';


interface IProps {
    children: ReactNode;
    type: 'success' | 'error';
}

const Alert = ({ children, type }: IProps) => (
    <div
        className={cn(
            styles.container, {
                [styles.success]: type === 'success',
                [styles.error]: type === 'error'
            }
        )}
    >
        {children}
    </div>
);

export default Alert;