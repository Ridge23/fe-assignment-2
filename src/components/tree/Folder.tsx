import React from 'react'
import classNames from 'classnames';
import { ContextMenuTrigger } from "react-contextmenu";

import FolderContextMenu from 'components/context-menu/FolderContextMenu';

import './sass/folder.scss'
interface IFolder {
    id: number;
    name: string;
    childrenNodes?: JSX.Element[];
    showDelete?: boolean;
    onDelete: () => void;
    onFileCreate: () => void;
    onFolderCreate: () => void;
    onRename: () => void;
    showFolder?: boolean;
    toggleShowFolder: () => void;
}

export default function Folder(props: IFolder): JSX.Element {
    const { 
        id, 
        name, 
        childrenNodes, 
        showDelete = true, 
        onDelete, 
        onFileCreate, 
        onFolderCreate, 
        onRename ,
        showFolder,
        toggleShowFolder
    } = props;
    
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
                    <a className={aClass} onClick={() => !noChildrenNodes && toggleShowFolder()}>{name}</a>
                </ContextMenuTrigger>
                <FolderContextMenu 
                    id={id} 
                    showDelete={showDelete}
                    onAddFileClick={onFileCreate}
                    onAddFolderClick={onFolderCreate}
                    onDeleteClick={onDelete}
                    onRenameClick={onRename}
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