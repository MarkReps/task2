import React from 'react';
import './modal.css';

interface ModalProps {
    active: boolean;
    setActive: (arg1: boolean) => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
    return (
        <div className={active ? 'modal show' : 'modal'}>
            <div className={active ? 'modal-content show' : 'modal-content'}>
                <div className="modal-header">
                    <div className="modal-title">Title</div>
                    <button onClick={() => setActive(false)} className='modal-close-btn'>Close</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div >
        </div >
    );
};

export default Modal;