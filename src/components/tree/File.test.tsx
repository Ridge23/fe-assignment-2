import React from 'react';
import { shallow } from 'enzyme';
import { ContextMenuTrigger } from "react-contextmenu";

import FileContextMenu from 'components/context-menu/FileContextMenu';
import File from './File';

const noop = () => {};

describe('File', () => {
    it('should render correctly', () => {
        const component = shallow(<File id={10} name='test.js' onDelete={noop} onRename={noop} />);
        const title = component.find('.file__title');

        const contextMenuTrigger = component.find(ContextMenuTrigger);
        expect(contextMenuTrigger).toHaveLength(1);
        expect(contextMenuTrigger.props()).toHaveProperty('id', 'file_menu_10');

        const contextMenu = component.find(FileContextMenu);
        expect(contextMenu).toHaveLength(1);
        expect(contextMenu.props()).toHaveProperty('id', 10);
        
        expect(component.find('li')).toHaveLength(1);
        expect(component.find('li')).toHaveProperty('key');
        
        expect(title.text()).toEqual('test.js');
        expect(component).toMatchSnapshot();
    });
})