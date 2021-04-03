import React from 'react';

import './sass/add-folder-icon.scss';

interface IAddFolderIcon {
    onClick: () => void;
}

export default function AddFolderIcon({ onClick }: IAddFolderIcon): JSX.Element {
    return <span className="add-folder-icon" onClick={onClick} />
}