import React from 'react';
import { ContextMenuTrigger } from "react-contextmenu";

import FileContextMenu from 'components/context-menu/FileContextMenu';
import DeleteIcon from 'components/icons/DeleteIcon';

import './sass/file.scss';

interface IFile {
    id: number;
    name: string;
    onDelete: () => void;
}

export default function File({ id, name, onDelete }: IFile): JSX.Element {
    return <li key={`file-${name}`} className="file" >
        <ContextMenuTrigger id={`file_menu_${id}`}>
            <div className="file__title">{name}</div>
        </ContextMenuTrigger>
        <FileContextMenu id={id} onDeleteClick={onDelete} onRenameClick={() => {}} />
    </li>;
}