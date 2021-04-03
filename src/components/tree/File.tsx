import React from 'react';

import './sass/file.scss';

interface IFile {
    name: string;
    onDelete: () => void;
}

export default function File({ name, onDelete }: IFile): JSX.Element {
    return <li key={`file-${name}`} className="file" >
        <div className="file__title">{name}
            <span className="file__delete" onClick={onDelete} />
        </div>
    </li>;
}