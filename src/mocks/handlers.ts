import { rest } from 'msw';

export const handlers = [
    rest.get('http://mock.local/tree', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
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
            }),
        )
    }),
    rest.delete('http://mock.local/tree/files/:fileId', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ success: true })
        );
    }),
    rest.delete('http://mock.local/tree/folders/:folderId', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ success: true })
        );
    }),
    rest.post('http://mock.local/tree/files', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ id: generateRandomId(), name: req.body.fileName })
        )
    }),
    rest.post('http://mock.local/tree/folders', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ id: generateRandomId(), name: req.body.folderName })
        )
    }),
];

function generateRandomId() {
    let min = 99999;
    let max = 999999;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }