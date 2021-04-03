import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { IState } from 'reducers';
import { deleteFileAction } from 'actions/folderTree';

import File from './File';

export default function FileContainer({ id }): JSX.Element {
    const dispatch = useDispatch();
    const file = useSelector((state: IState) => state.folderTree.files.find(({ id: fileId }) => fileId === id));
    
    return file ? <File name={file.name} onDelete={() => dispatch(deleteFileAction(id))} /> : null;
}