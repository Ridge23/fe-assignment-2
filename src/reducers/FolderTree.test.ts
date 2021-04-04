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
        }
    ],
    files: [
        {
            id: 1,
            name: 'file1.js'
        },
        {
            id: 2,
            name: 'file2.js'
        }
    ],
};

const responseAfterRenameMock = {
    folders: [
        {
            id: 0,
            name: 'root',
            childrenNodes: [{ id: 1, type: 'folder' }, { id: 1, type: 'file' }]
        },
        {
            id: 1,
            name: 'folder-test',
            childrenNodes: [{ id: 2, type: 'folder' }, { id: 3, type: 'folder' }]
        }
    ],
    files: [
        {
            id: 1,
            name: 'filetest.js'
        },
        {
            id: 2,
            name: 'file2.js'
        }
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

    it('should handle RENAME', () => {
        expect(
            reducer(
                { ...initState, folders: responseMock.folders, files: responseMock.files },
                { type: 'RENAME', entityType: 'file', id: 1, name: 'filetest.js' }
            )
        ).toEqual(
            {
                ...initState,
                folders: responseMock.folders,
                files: responseAfterRenameMock.files,
                isLoading: false
            }
        )

        expect(
            reducer(
                { ...initState, folders: responseMock.folders, files: responseMock.files },
                { type: 'RENAME', entityType: 'folder', id: 1, name: 'folder-test' }
            )
        ).toEqual(
            {
                ...initState,
                folders: responseAfterRenameMock.folders,
                files: responseMock.files,
                isLoading: false
            }
        )
    });
});