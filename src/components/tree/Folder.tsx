import React, { useState } from 'react'
import classNames from 'classnames';
import { ContextMenuTrigger } from "react-contextmenu";

import './sass/folder.scss'
import FolderContextMenu from 'components/context-menu/FolderContextMenu';

interface IFolder {
    id: number;
    name: string;
    childrenNodes?: JSX.Element[];
    showDelete?: boolean;
    onDelete: () => void;
    onFileCreate: () => void;
    onFolderCreate: () => void;
}

export default function Folder(props: IFolder): JSX.Element {
    const { id, name, childrenNodes, showDelete = true, onDelete, onFileCreate, onFolderCreate } = props;
    const [showFolder, setShowFolder] = useState(false);
    const noChildrenNodes = !childrenNodes || childrenNodes.length === 0
    const aClass = classNames([
        { 'folder__link--active': !noChildrenNodes },
        { 'folder__link--empty': noChildrenNodes },
    ])
    const liClass = classNames('folder__li', { 'folder__li--active': showFolder });

    return (
        <>
            <li key={`folder-${name}`} className={liClass}>
                <ContextMenuTrigger id={`folder_menu_${id}`}>
                    <a className={aClass} onClick={() => !noChildrenNodes && setShowFolder(!showFolder)}>{name}</a>
                </ContextMenuTrigger>
                <FolderContextMenu 
                    id={id} 
                    showDelete={showDelete}
                    onAddFileClick={onFileCreate}
                    onAddFolderClick={onFolderCreate}
                    onDeleteClick={onDelete}
                    onRenameClick={() => {}}
                />
            </li>
            {childrenNodes && showFolder &&
                <ul className="folder" key={`folder-children-${name}`}>
                    {childrenNodes.map((element) => element)}
                </ul>
            }
        </>
    );
}