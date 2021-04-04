import { 
    FILE_DELETE, 
    FOLDER_DELETE, 
    SELECT_FOLDER, 
    ADD_FILE, 
    ADD_FOLDER, 
    RENAME 
} from 'actions/folderTree';

interface IFolder {
    id: number;
    name: string;
    childrenNodes: { id: number; type: string }[];
}

interface IFile {
    id: number;
    name: string;
}

interface IFolderTree {
    selectedItem: { id: number; type: string };
    folders: IFolder[];
    files: IFile[];
}

const initState: IFolderTree = {
    selectedItem: { id: 0, type: 'folder' },
    folders: [
        {
            id: 0,
            name: 'root',
            childrenNodes: [{ id: 1, type: 'folder' }, { id: 1, type: 'file' }]
        },
        {
            id: 1,
            name: 'folder1',
            childrenNodes: [{ id: 2, type: 'folder' }, { id: 3, type: 'folder' }]
        },
        {
            id: 2,
            name: 'folder2',
            childrenNodes: []
        },
        {
            id: 3,
            name: 'folder3',
            childrenNodes: [{ id: 2, type: 'file' }, { id: 3, type: 'file' }, { id: 4, type: 'file' }]
        },
    ],
    files: [
        {
            id: 1,
            name: 'file1'
        },
        {
            id: 2,
            name: 'file2'
        },
        {
            id: 3,
            name: 'file3'
        },
        {
            id: 4,
            name: 'file4'
        },
    ],
}

function FolderTree(state = initState, action) {
    switch (action.type) {
        case SELECT_FOLDER: {
            return {
                ...state,
                selectedItem: { id: action.id, type: action.type }
            };
        }
        case FILE_DELETE: {
            return {
                ...state,
                folders: state.folders.map((folder) => {
                    return {
                        ...folder,
                        childrenNodes: folder.childrenNodes.filter(
                            ({ id, type }) => !(id === action.id && type === 'file')
                        )
                    }
                }),
                files: state.files.filter(({ id }) => id !== action.id)
            };
        }
        case FOLDER_DELETE: {
            const currentFolder = state.folders.find(({ id }) => id === action.id);
            return {
                ...state,
                folders: state.folders.filter((folder) => folder.id !== action.id),
                files: state.files.filter(({ id }) => !currentFolder.childrenNodes.find(
                    (folderFile) => folderFile.id === id)
                )
            }
        }
        case ADD_FILE: {
            return {
                ...state,
                folders: state.folders.map((folder) => {
                    if (folder.id === action.folderId) {
                        let { childrenNodes } = folder;
                        childrenNodes.push({ id: action.id, type: 'file' });
                        return { ...folder, childrenNodes };
                    }

                    return folder;
                }),
                files: [...state.files, { id: action.id, name: action.fileName }]
            }
        }
        case ADD_FOLDER: {
            const folders = state.folders.map((folder) => {
                if (folder.id === action.folderId) {
                    let { childrenNodes } = folder;
                    childrenNodes.push({ id: action.id, type: 'folder' });
                    return { ...folder, childrenNodes };
                }
                return folder;
            });
            

            return {
                ...state,
                folders: [...folders, { id: action.id, name: action.folderName, childrenNodes: [] }]
            }
        }
        case RENAME: {
            if (action.entityType === 'file') {
                return {
                    ...state,
                    files: state.files.map((file: IFile): IFile => {
                        if (file.id === action.id) {
                            return {
                                ...file,
                                name: action.name
                            }
                        }
                        return file;
                    })
                }
            }

            return {
                ...state,
                folders: state.folders.map((folder: IFolder): IFolder => {
                    if (folder.id === action.id) {
                        return {
                            ...folder,
                            name: action.name
                        }
                    }
                    return folder;
                })
            }
        }
        default: {
            return state;
        }
    }
}

export { IFolderTree, FolderTree as default };