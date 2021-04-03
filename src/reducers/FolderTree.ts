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
    folders: IFolder[];
    files: IFile[];
}

const initState = {
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
    return state
}

export { IFolderTree, FolderTree as default };