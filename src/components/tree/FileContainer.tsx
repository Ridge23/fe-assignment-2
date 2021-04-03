import React from 'react';
import { useSelector } from 'react-redux'

import { IState } from 'reducers';

import File from './File';

export default function FileContainer({ id }): JSX.Element {
    const file = useSelector((state: IState) => state.folderTree.files.find(({ id: fileId }) => fileId === id));
    
    return <File name={file.name} />;
}