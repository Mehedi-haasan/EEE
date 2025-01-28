import React from 'react';

const CrossIcon = ({onClick,className=''}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className} width="1em" height="1em" viewBox="0 0 64 64"><path fill="#ec1c24" d="M50.592 2.291L32 20.884C25.803 14.689 19.604 8.488 13.406 2.291c-7.17-7.17-18.284 3.948-11.12 11.12c6.199 6.193 12.4 12.395 18.592 18.592A32589 32589 0 0 1 2.286 50.595c-7.164 7.168 3.951 18.283 11.12 11.12q9.297-9.3 18.593-18.594l18.592 18.594c7.17 7.168 18.287-3.951 11.12-11.12q-9.297-9.298-18.597-18.594q9.298-9.299 18.597-18.596c7.168-7.166-3.949-18.284-11.12-11.11" /></svg>
    );
};

export default CrossIcon;