import React, { ReactNode, FC } from 'react';
import './modal.scss';
import Backdrop from './Backdrop';

const Modal: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Backdrop>
            <div className="modal">
                {children}
            </div>
        </Backdrop>
    );
};

export default Modal;