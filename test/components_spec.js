// https://medium.com/javascript-inside/some-thoughts-on-testing-react-redux-applications-8571fbc1b78f#.isyks5vj5

import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Layout from '../src/components/Layout';
import FileTree from '../src/components/FileTree';

describe('[Component] Layout', () => {
	
	it('just renders', () => {
		const wrapper = shallow(
			<Layout
				handlerPos={20}
			/>
		);
		expect(wrapper.find('#Layout').length).toBe(1);
	});
	
	xit('renders content in header', () => {});
	
	xit('renders content in left column', () => {});
	
	xit('renders content in right column', () => {});
	
});

describe('[Component] FileTree', () => {
	
	it('just renders', () => {
		const nodes = [{
			id: 1,
			name: "root"
		}];
		const wrapper = shallow(
			<FileTree 
				nodes={nodes}
			/>
		);
		expect(wrapper.find('ul').length).toBe(1);
	});
	
	it('render childrens', () => {
		const nodes = [{
			id: 1,
			name: "root",
			children: [{
				id: 2,
				name: "children"
			}]
		}];
		const wrapper = shallow(
			<FileTree 
				nodes={nodes}
			/>
		);
		expect(wrapper.find(FileTree).length).toBe(1);
	});
	
});