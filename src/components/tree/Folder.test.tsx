import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';

import Folder from './Folder';
import File from './File';

const noop = () => { };

jest.mock('./File', () => () => 'File');

describe('Folder', () => {
    it('should render correctly without children', () => {
        const component = shallow(<Folder
            id={10}
            name='test'
            onDelete={noop}
            onRename={noop}
            onFileCreate={noop}
            onFolderCreate={noop}
            toggleShowFolder={noop}
        />);
        const li = component.find('li');

        expect(li).toHaveLength(1);
        expect(li.props()).toHaveProperty('className', 'folder__li');

        const a = component.find('a');
        expect(a).toHaveLength(1);
        expect(a.props()).toHaveProperty('className', 'folder__link--empty');
        expect(component).toMatchSnapshot();
    });

    it('should render correctly with children', () => {
        const component = mount(<Folder
            id={10}
            name='test'
            onDelete={noop}
            onRename={noop}
            onFileCreate={noop}
            onFolderCreate={noop}
            toggleShowFolder={noop}
            showFolder
            childrenNodes={[<File
                key={'file-test1'}
                id={1}
                name="test1"
                onDelete={noop}
                onRename={noop}
            />
            ]}
        />);
        const li = component.find('li');

        expect(li).toHaveLength(1);

        const a = component.find('a');
        expect(a).toHaveLength(1);
        expect(component).toMatchSnapshot();
    });
})