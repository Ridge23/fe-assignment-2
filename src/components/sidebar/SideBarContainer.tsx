import React from 'react';
import { useSelector } from 'react-redux'
import { IState } from 'reducers';

import SideBar from './SideBar';

export default function SideBarContainer() {
    const rootFolder = useSelector((state: IState) => state.folderTree.folders[0]);

    return <SideBar rootFolder={rootFolder} />
}