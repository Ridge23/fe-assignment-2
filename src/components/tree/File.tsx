import DeleteIcon from 'components/icons/DeleteIcon';
import React from 'react';

import './sass/file.scss';

interface IFile {
    name: string;
    onDelete: () => void;
}

export default function File({ name, onDelete }: IFile): JSX.Element {
    return <li key={`file-${name}`} className="file" >
        <div className="file__title">{name}
            <div className="file__actions">
                <DeleteIcon onClick={onDelete} />
            </div>
        </div>
    </li>;
}