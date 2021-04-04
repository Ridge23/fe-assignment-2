import React from 'react';
import { shallow } from 'enzyme';

import Folder from './Folder';

const noop = () => {};

describe('Folder', () => {
    it('should render correctly without children', () => {
        const component = shallow(<Folder 
            id={10} 
            name='test' 
            onDelete={noop} 
            onRename={noop} 
            onFileCreate={noop}
            onFolderCreate={noop}
        />);
        const li = component.find('li');

        expect(li).toHaveLength(1);
        expect(li.props()).toHaveProperty('className', 'folder__li');

        const a = component.find('a');
        expect(a).toHaveLength(1);
        expect(a.props()).toHaveProperty('className', 'folder__link--empty');
        expect(component).toMatchSnapshot();
    });
})