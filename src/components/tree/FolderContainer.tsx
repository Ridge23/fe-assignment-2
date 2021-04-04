import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { IState } from 'reducers';
import { addFileAction, addFolderAction, deleteFolderAction, renameAction } from 'actions/folderTree';
import generateRandomId from 'helpers/generateId';

import Folder from './Folder';
import FileContainer from './FileContainer';

interface IFolderContainer {
    id: number;
}

export default function FolderContainer({ id }: IFolderContainer) {
    const dispatch = useDispatch();
    const folder = useSelector((state: IState) => state.folderTree.folders.find(({ id: folderId }) => folderId === id));
    let childrenNodes = [];

    if (!folder) {
        return null;
    }

    if (folder.childrenNodes && folder.childrenNodes.length > 0) {
        childrenNodes = folder.childrenNodes.map(({ id, type }) => {
            if (type === 'folder') {
                return <FolderContainer id={id} key={`folder-${id}`} />;
            }

            return <FileContainer id={id} key={`file-${id}`} />;
        })
    }

    return <Folder
        id={folder.id}
        name={folder.name}
        childrenNodes={childrenNodes}
        showDelete={id !== 0}
        onDelete={() => dispatch(deleteFolderAction(id))}
        onFileCreate={() => {
            const fileName = prompt('Provide name of the file');
            const fileId = generateRandomId();
            dispatch(addFileAction(fileId, fileName, id));
        }}
        onFolderCreate={() => {
            const folderName = prompt('Provide name of the folder');
            if (!folderName) {
                return;
            }
            const folderId = generateRandomId();
            dispatch(addFolderAction(folderId, folderName, id));
        }}
        onRename={() => {
            const folderName = prompt('New folder name', folder.name);
            if (!folderName) {
                return;
            }
            dispatch(renameAction(id, 'folder', folderName));
        }}
    />;
}