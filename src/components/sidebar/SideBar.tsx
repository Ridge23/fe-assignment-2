import React from 'react';

import Folder from 'components/tree/Folder';
import File from 'components/tree/File';

import './sass/sidebar.scss';

export default function SideBar(): JSX.Element {
    const childrenNodes3 = [
        <File name='child311' key="child311" />,
    ];

    const childrendNodes2 = [
        <Folder name='child31' key="child31" childrenNodes={childrenNodes3} />,
        <Folder name='child32' key="child32" />,
    ];
    const childrendNodes = [
        <Folder name='child1' key="child1" />,
        <Folder name='child2' key="child2" />,
        <Folder name='child3' key="child3" childrenNodes={childrendNodes2} />
    ];

    return <div className="sidebar">
        <ul className="sidebar__ul">
            <Folder name="root" childrenNodes={childrendNodes} />
        </ul>
    </div>;
}