import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { IState } from 'reducers';
import { deleteFile, renameFile } from 'actions/folderTree';

import File from './File';

interface IFileContainer {
    id: number;
}

export default function FileContainer({ id }: IFileContainer): JSX.Element {
    const dispatch = useDispatch();
    const file = useSelector((state: IState) => state.folderTree.files.find(({ id: fileId }) => fileId === id));
    
    return file 
    ? <File 
        id={id} 
        name={file.name} 
        onDelete={() => dispatch(deleteFile(id))} 
        onRename={() => {
            const fileName = prompt('New file name', file.name);
            if (!fileName) {
                return;
            }
            dispatch(renameFile(id, fileName));
        }}
      /> 
    : null;
}