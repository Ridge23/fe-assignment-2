import React from 'react';

import './sass/delete-icon.scss';

interface IDeleteIcon {
    onClick: () => void;
}

export default function DeleteIcon({ onClick }: IDeleteIcon): JSX.Element {
    return <span className="delete-icon" onClick={onClick} />
}