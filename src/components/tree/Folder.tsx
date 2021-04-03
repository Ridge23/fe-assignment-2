import React, { useState } from 'react'
import classNames from 'classnames';

import DeleteIcon from 'components/icons/DeleteIcon';

import './sass/folder.scss'

interface IFolder {
    name: string;
    childrenNodes?: JSX.Element[];
    showDelete?: boolean;
    onDelete: () => void;
}

export default function Folder({ name, childrenNodes, showDelete = true, onDelete }: IFolder): JSX.Element {
    const [showFolder, setShowFolder] = useState(false);
    const noChildrenNodes = !childrenNodes || childrenNodes.length === 0
    const aClass = classNames([
        { 'folder__link--active': !noChildrenNodes },
        { 'folder__link--empty': noChildrenNodes },
    ])
    const liClass = classNames('folder__li', {'folder__li--active': showFolder});
    
    return (
        <>
            <li key={`folder-${name}`} className={liClass}>
                <a className={aClass} onClick={() => !noChildrenNodes && setShowFolder(!showFolder)}>{name}</a>
                <div className="folder__actions">
                    {showDelete && <DeleteIcon onClick={onDelete} />}
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