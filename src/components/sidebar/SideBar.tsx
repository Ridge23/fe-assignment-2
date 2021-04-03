import React from 'react';

import FolderContainer from 'components/tree/FolderContainer';

import './sass/sidebar.scss';

export default function SideBar({ rootFolder }): JSX.Element {
    return <div className="sidebar">
        <ul className="sidebar__ul">
            {rootFolder && <FolderContainer id={rootFolder.id} />}
        </ul>
    </div>;
}