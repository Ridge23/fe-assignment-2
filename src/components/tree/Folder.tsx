import React, { useState } from 'react'

import './sass/folder.scss'

interface IFolder {
    name: string;
    childrenNodes?: JSX.Element[];
}

export default function Folder({ name, childrenNodes }: IFolder): JSX.Element {
    const [showFolder, setShowFolder] = useState(false);
    const liStyle = childrenNodes ? { cursor: 'pointer' } : {}

    return (
        <li key={`folder-${name}`} className="folder__li">
            <a style={liStyle} onClick={() => setShowFolder(!showFolder)}>{name}</a>
            {childrenNodes && showFolder && 
                <ul className="folder" key={`folder-children-${name}`}>
                    {childrenNodes.map((element) => element)}
                </ul>
            }
        </li>
    );
}