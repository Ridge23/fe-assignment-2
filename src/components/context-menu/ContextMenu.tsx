import React from 'react';

import { ContextMenu as ContextMenuBase, MenuItem } from "react-contextmenu";

import './sass/context-menu.scss';

export default function ContextMenu({ id, children }): JSX.Element {
    return (
        <ContextMenuBase id={id}>
            {children}
        </ContextMenuBase>
    );
}