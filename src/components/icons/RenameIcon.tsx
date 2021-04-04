import React from 'react';

import './sass/rename-icon.scss';

interface IRenameIcon {
    onClick?: () => void;
}

export default function RenameIcon({ onClick }: IRenameIcon): JSX.Element {
    return <span className="rename-icon" onClick={onClick} />
}