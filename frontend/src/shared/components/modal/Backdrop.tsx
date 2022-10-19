import React, { FC, ReactNode } from 'react';
import './modal.scss';

const Backdrop: FC<{ children?: ReactNode }> = ({ children }) => {
    return (
        <div className="backdrop">
            {children}
        </div>
    );
};

export default Backdrop;