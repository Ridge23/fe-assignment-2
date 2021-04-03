import { combineReducers } from 'redux';

import FolderTree, { IFolderTree } from './FolderTree';

interface IState {
    folderTree: IFolderTree;
}

const rootReducer = combineReducers({
    folderTree: FolderTree
})

export {rootReducer as default, IState }