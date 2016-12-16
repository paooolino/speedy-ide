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
	
	it('renders contents', () => {
		const contentHeader = <div id="contentHeader"></div>
		const contentLeft = <div id="contentLeft"></div>
		const contentRight = <div id="contentRight"></div>
		const wrapper = shallow(
			<Layout
				handlerPos={20}
				contentHeader={contentHeader}
				contentLeft={contentLeft}
				contentRight={contentRight}
			/>
		);
		expect(wrapper.find('#contentHeader').length).toBe(1);		
		expect(wrapper.find('#contentLeft').length).toBe(1);		
		expect(wrapper.find('#contentRight').length).toBe(1);		
	});
	
});

describe('[Component] FileTree', () => {
	
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
	
	const wrapper_i = shallow(
		<FileTree
			isOpened={false}
			nodes={nodes}
		/>
	);
		
	it('just renders', () => {
		expect(wrapper.find('ul').length).toBe(1);
	});
	
	it('render childrens', () => {
		expect(wrapper.find(FileTree).length).toBe(1);
	});
	
	it('is visible by default', () => {
		expect(wrapper.find('ul').hasClass('dn')).toBe(false);
	});
	
	it('renders an invisible tree', () => {
		expect(wrapper_i.find('ul').hasClass('dn')).toBe(true);
	});
	
	it('children visibility is false by default', ()=>{
		expect(wrapper.find(FileTree).prop('isOpened')).toBe(false);
	}); 
	
	it('children visibility toggles with a click', ()=>{
		wrapper.find('a').simulate('click');
		expect(wrapper.find(FileTree).prop('isOpened')).toBe(true);
		wrapper.find('a').simulate('click');
		expect(wrapper.find(FileTree).prop('isOpened')).toBe(false);
	}); 
	
});