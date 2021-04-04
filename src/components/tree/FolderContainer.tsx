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
    const folders = useSelector((state: IState) => state.folderTree.folders);
    const files = useSelector((state: IState) => state.folderTree.files);

    if (!folder) {
        return null;
    }

    let childrenNodes = [];
    let childrenFoldersIds = []
    let childrenFilesIds = []

    if (folder.childrenNodes && folder.childrenNodes.length > 0) {
        childrenNodes = folder.childrenNodes.map(({ id, type }) => {
            if (type === 'folder') {
                childrenFoldersIds.push(id);
                return <FolderContainer id={id} key={`folder-${id}`} />;
            }
            childrenFilesIds.push(id);
            return <FileContainer id={id} key={`file-${id}`} />;
        })
    }

    let childrenFolders = folders.filter(({id}) => childrenFoldersIds.includes(id));
    let childrenFiles = files.filter(({id}) => childrenFilesIds.includes(id));

    const onFileCreate = () => {
        const fileName = prompt('Provide name of the file');
        if (!fileName) {
            return;
        }
        if (childrenFiles.find((file) => file.name === fileName)) {
            alert('File already exists');
            return;
        }
        dispatch(addFile(fileName, id));
    };

    const onFolderCreate = () => {
        const folderName = prompt('Provide name of the folder');
        if (!folderName) {
            return;
        }
        if (childrenFolders.find((folder) => folder.name === folderName)) {
            alert('Folder already exists');
            return;
        }
        dispatch(addFolder(folderName, id));
    };

    const onRename = () => {
        const folderName = prompt('New folder name', folder.name);
        if (!folderName) {
            return;
        }
        if (childrenFolders.find((folder) => folder.name === folderName)) {
            alert('Folder already exists');
            return;
        }
        dispatch(renameFolder(id, folderName));
    };

    return <Folder
        id={folder.id}
        name={folder.name}
        childrenNodes={childrenNodes}
        showDelete={id !== 0}
        onDelete={() => dispatch(deleteFolder(id))}
        onFileCreate={onFileCreate}
        onFolderCreate={onFolderCreate}
        onRename={onRename}
    />;
}