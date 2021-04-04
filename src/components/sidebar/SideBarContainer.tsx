import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { IState } from 'reducers';
import { fetchFolderTree } from 'actions/folderTree';

import SideBar from './SideBar';

export default function SideBarContainer(): JSX.Element {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFolderTree());
    }, []);
    const rootFolder = useSelector((state: IState) => state.folderTree.folders[0]);
    return <SideBar rootFolder={rootFolder} />;
}