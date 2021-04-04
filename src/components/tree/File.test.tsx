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

        expect(component.find('li')).toHaveLength(1);
        expect(component.find(ContextMenuTrigger)).toHaveLength(1);
        expect(component.find(FileContextMenu)).toHaveLength(1);
        expect(component.find('li')).toHaveProperty('key');
        expect(title.text()).toEqual('test.js');
        expect(component).toMatchSnapshot();
    });
})