import React from 'react';
import { MenuItem } from "react-contextmenu";

import DeleteIcon from 'components/icons/DeleteIcon';
import RenameIcon from 'components/icons/RenameIcon';
import ContextMenu from './ContextMenu';
interface IFileContextMenu {
    id: number;
    onRenameClick: () => void;
    onDeleteClick: () => void;
}

export default function FileContextMenu(props: IFileContextMenu): JSX.Element {
    const { id, onRenameClick, onDeleteClick } = props;
    return (
        <ContextMenu id={`file_menu_${id}`} >
            <MenuItem onClick={onRenameClick}>
                <RenameIcon /> Rename
            </MenuItem>
            <MenuItem onClick={onDeleteClick}>
                <DeleteIcon /> Delete
            </MenuItem>
        </ContextMenu>);
}