import React, { useState } from 'react'
import classNames from 'classnames';

import DeleteIcon from 'components/icons/DeleteIcon';

import './sass/folder.scss'

interface IFolder {
    name: string;
    childrenNodes?: JSX.Element[];
    showDelete?: boolean;
}

export default function Folder({ name, childrenNodes, showDelete = true }: IFolder): JSX.Element {
    const [showFolder, setShowFolder] = useState(false);
    const aClass = classNames([
        { 'folder__link--active': childrenNodes && childrenNodes.length > 0 },
        { 'folder__link--empty': !childrenNodes || childrenNodes.length === 0 },
    ])
    return (
        <>
            <li key={`folder-${name}`} className="folder__li">
                <a className={aClass} onClick={() => setShowFolder(!showFolder)}>{name}</a>
                <div className="folder__actions">
                    {showDelete && <DeleteIcon onClick={() => { }} />}
                </div>
            </li>
            {childrenNodes && showFolder &&
                <ul className="folder" key={`folder-children-${name}`}>
                    {childrenNodes.map((element) => element)}
                </ul>
            }
        </>
    );
}