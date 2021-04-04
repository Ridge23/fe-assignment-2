export const SELECT_FOLDER = 'SELECT_FOLDER';
export const FILE_DELETE = 'FILE_DELETE';
export const FOLDER_DELETE = 'FOLDER_DELETE';
export const ADD_FILE = 'ADD_FILE';
export const ADD_FOLDER = 'ADD_FOLDER';

export function deleteFileAction(id) {
    return {
        type: FILE_DELETE,
        id
    };
}

export function deleteFolderAction(id) {
    return {
        type: FOLDER_DELETE,
        id
    };
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