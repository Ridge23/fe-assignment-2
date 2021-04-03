import React from 'react'

import './sass/folder.scss'

interface IFolder {
    name: string;
    childrenNodes?: JSX.Element[];
}

export default function Folder({ name, childrenNodes }: IFolder): JSX.Element {
    return (
        <li key={`folder-${name}`} className="folder__li">
            {name}
            {childrenNodes &&
                <ul className="folder" key={`folder-children-${name}`}>
                    {childrenNodes.map((element) => element)}
                </ul>
            }
        </li>
    );
}