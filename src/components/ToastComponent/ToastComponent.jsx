import React, { useEffect } from 'react';
import { ToastWrapper } from './style';

const ToastComponent = ({ type = 'success', message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <ToastWrapper type={type}>
            {message}
        </ToastWrapper>
    );
};

export default ToastComponent;