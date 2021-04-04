import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { IState } from 'reducers';
import { addFile, addFolder, deleteFolder, renameFolder } from 'actions/folderTree';

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
        onDelete={() => dispatch(deleteFolder(id))}
        onFileCreate={() => {
            const fileName = prompt('Provide name of the file');
            if (!fileName) {
                return;
            }
            dispatch(addFile(fileName, id));
        }}
        onFolderCreate={() => {
            const folderName = prompt('Provide name of the folder');
            if (!folderName) {
                return;
            }
            dispatch(addFolder(folderName, id));
        }}
        onRename={() => {
            const folderName = prompt('New folder name', folder.name);
            if (!folderName) {
                return;
            }
            dispatch(renameFolder(id, folderName));
        }}
    />;
}