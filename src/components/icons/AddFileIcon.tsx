import React from 'react';

import './sass/add-file-icon.scss';

interface IAddFileIcon {
    onClick?: () => void;
}

export default function AddFileIcon({ onClick }: IAddFileIcon): JSX.Element {
    return <span className="add-file-icon" onClick={onClick} />
}