import React from 'react';
import { MenuItem } from "react-contextmenu";

import DeleteIcon from 'components/icons/DeleteIcon';
import AddFolderIcon from 'components/icons/AddFolderIcon';
import AddFileIcon from 'components/icons/AddFileIcon';

import ContextMenu from './ContextMenu';

interface IFolderContextMenu {
    id: number;
    onAddFolderClick: () => void;
    onAddFileClick: () => void;
    onDeleteClick: () => void;
    showDelete?: boolean;
}

export default function FolderContextMenu(props: IFolderContextMenu): JSX.Element {
    const { id, onAddFolderClick, onAddFileClick, onDeleteClick, showDelete = true } = props;
    return (
        <ContextMenu id={`folder_menu_${id}`} >
            <MenuItem onClick={onAddFolderClick}>
                <AddFolderIcon /> Create folder
            </MenuItem>
            <MenuItem onClick={onAddFileClick}>
                <AddFileIcon /> Create file
            </MenuItem>
            {showDelete &&
                <MenuItem onClick={onDeleteClick}>
                    <DeleteIcon /> Delete
                </MenuItem>
            }
        </ContextMenu>);
}