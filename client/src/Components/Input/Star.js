import React from 'react';

const Star = ({ className = '', id, onClick }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className} width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03z" /></svg>
    );
};

export default Star;