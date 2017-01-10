import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import FileTree from '../src/FileTree';

describe('FiletTree test', () => {
	it('Just renders', () => {
		const wrapper = shallow(
			<FileTree 
				nodes={[{
					id: '1',
					name: 'file 1'
				}]}
			/>
		);
		expect(wrapper.find('ul.list').length).toBe(1);
	});
	
	it('Renders an open and a closed folder', () => {
		const wrapper = shallow(
			<FileTree 
				nodes={[{
					id: '1',
					name: 'folder 1',
					children: []
				}, {
					id: '2',
					name: 'folder 2',
					children: []
				}]}
				openedFolders={['2']}
			/>
		);
		expect(wrapper.find('ul.list li').at(0).hasClass('opened')).toBe(false);
		expect(wrapper.find('ul.list li').at(1).hasClass('opened')).toBe(true);
	});
});