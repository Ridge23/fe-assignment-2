import { IFile, IFolder } from 'reducers/FolderTree';

export const SELECT_FOLDER = 'SELECT_FOLDER';
export const FILE_DELETE = 'FILE_DELETE';
export const FOLDER_DELETE = 'FOLDER_DELETE';
export const ADD_FILE = 'ADD_FILE';
export const ADD_FOLDER = 'ADD_FOLDER';
export const RENAME = 'RENAME';

export const FETCH_FOLDER_TREE_START = 'FETCH_FOLDER_TREE_START';
export const FETCH_FOLDER_TREE_SUCCESS = 'FETCH_FOLDER_TREE_SUCCESS';
export const FETCH_FOLDER_TREE_ERROR = 'FETCH_FOLDER_TREE_ERROR';

function fetchFolderTreeStart() {
    return {
        type: FETCH_FOLDER_TREE_START
    }
}

function fetchFolderTreeError() {
    return {
        type: FETCH_FOLDER_TREE_ERROR
    }
}

function fetchFolderTreeSuccess(folders, files) {
    return {
        type: FETCH_FOLDER_TREE_SUCCESS,
        folders,
        files
    }
}

interface IFolderTreeResponseData {
    files: IFile[];
    folders: IFolder[];
}

export function fetchFolderTree() {
    return (dispatch: any): Promise<void> => {
        dispatch(fetchFolderTreeStart());

        return fetch('http://mock.local/tree')
            .then((response) => response.json())
            .then((data: IFolderTreeResponseData) => {
                dispatch(fetchFolderTreeSuccess(data.folders, data.files));
            })
            .catch((error) => {
                dispatch(fetchFolderTreeError());
            });
    }
}

function deleteFileAction(id) {
    return {
        type: FILE_DELETE,
        id
    };
}

export function deleteFile(id) {
    return (dispatch: any): Promise<void> => {
        dispatch(fetchFolderTreeStart());

        return fetch(`http://mock.local/tree/files/${id}`, { method: 'DELETE' })
            .then((response) => response.json())
            .then(() => {
                dispatch(deleteFileAction(id));
            })
            .catch((error) => {
                dispatch(fetchFolderTreeError());
            });
    }
}

function deleteFolderAction(id) {
    return {
        type: FOLDER_DELETE,
        id
    };
}

export function deleteFolder(id) {
    return (dispatch: any): Promise<void> => {
        dispatch(fetchFolderTreeStart());

        return fetch(`http://mock.local/tree/folders/${id}`, { method: 'DELETE' })
            .then((response) => response.json())
            .then(() => {
                dispatch(deleteFolderAction(id));
            })
            .catch((error) => {
                dispatch(fetchFolderTreeError());
            });
    }
}

export function addFileAction(id, fileName, folderId) {
    return {
        type: ADD_FILE,
        fileName,
        folderId,
        id
    }
}

export function addFolderAction(id, folderName, folderId) {
    return {
        type: ADD_FOLDER,
        folderName,
        folderId,
        id
    }
}

export function renameAction(id, type, name) {
    return {
        type: RENAME,
        entityType: type,
        id,
        name
    }
}
