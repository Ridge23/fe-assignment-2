import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { IState } from 'reducers';
import { deleteFileAction, renameAction } from 'actions/folderTree';

import File from './File';

export default function FileContainer({ id }): JSX.Element {
    const dispatch = useDispatch();
    const file = useSelector((state: IState) => state.folderTree.files.find(({ id: fileId }) => fileId === id));
    
    return file 
    ? <File 
        id={id} 
        name={file.name} 
        onDelete={() => dispatch(deleteFileAction(id))} 
        onRename={() => {
            const fileName = prompt('New file name', file.name);
            dispatch(renameAction(id, 'file', fileName));
        }}
      /> 
    : null;
}