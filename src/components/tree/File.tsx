import React from 'react';
import { ContextMenuTrigger } from "react-contextmenu";

import FileContextMenu from 'components/context-menu/FileContextMenu';

import './sass/file.scss';

interface IFile {
    id: number;
    name: string;
    onDelete: () => void;
    onRename: () => void;
}

export default function File({ id, name, onDelete, onRename }: IFile): JSX.Element {
    return <li key={`file-${name}`} className="file" >
        <ContextMenuTrigger id={`file_menu_${id}`}>
            <div className="file__title">{name}</div>
        </ContextMenuTrigger>
        <FileContextMenu id={id} onDeleteClick={onDelete} onRenameClick={onRename} />
    </li>;
}