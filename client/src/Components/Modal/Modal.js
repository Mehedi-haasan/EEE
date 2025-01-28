import React, { useState } from 'react';
import { Icon } from "@iconify/react";

const Modal = ({ isOpen, onClose, children }) => {


    return (
        <>
            {isOpen ?
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-100" onClick={onClose}>
                    <div className="relative z-50 w-96 max-w-full p-6 bg-white rounded-lg shadow-xl">
                        <Icon onClick={onClose} icon="fe:close" width="20px" className="absolute top-2 right-2 cursor-pointer text-red-500 hover:text-red-600" />
                        <div>
                            {children}
                        </div>
                    </div>
                </div> : <span />
            }
        </>
    );
};

export default Modal;
