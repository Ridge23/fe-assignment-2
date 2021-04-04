import reducer, { IFolderTree } from './FolderTree';

const initState: IFolderTree = {
    isLoading: false,
    folders: [
        {
            id: 0,
            name: 'root',
            childrenNodes: []
        }
    ],
    files: [],
}

const responseMock = {
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
            name: 'file1.js'
        },
        {
            id: 2,
            name: 'file2.js'
        },
        {
            id: 3,
            name: 'file3.js'
        },
        {
            id: 4,
            name: 'file4.js'
        },
    ],
};

describe('folder tree reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initState
        )
    });

    it('should handle FETCH_FOLDER_TREE_START', () => {
        expect(
            reducer(initState, { type: 'FETCH_FOLDER_TREE_START' })
        ).toEqual(
            {
                ...initState,
                isLoading: true
            }
        )
    });

    it('should handle FETCH_FOLDER_TREE_SUCCESS', () => {
        expect(
            reducer(initState, { type: 'FETCH_FOLDER_TREE_SUCCESS', folders: responseMock.folders, files: responseMock.files })
        ).toEqual(
            {
                ...initState,
                folders: responseMock.folders,
                files: responseMock.files,
                isLoading: false
            }
        )
    });
});