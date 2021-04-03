export const SELECT_FOLDER = 'SELECT_FOLDER';
export const FILE_DELETE = 'FILE_DELETE';
export const FOLDER_DELETE = 'FOLDER_DELETE';

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