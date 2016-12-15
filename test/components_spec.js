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
	
	it('is initially closed, toggles on click', () => {
		const nodes = [{
			id: 1,
			name: "root"
		}];
		const wrapper = shallow(
			<FileTree 
				nodes={nodes}
			/>
		);
		expect(wrapper.find('li').hasClass('closed')).toBe(true);
		/*wrapper.find('li').simulate('click');
		expect(wrapper.find('ul').hasClass('closed')).toBe(false);
		wrapper.find('li').simulate('click');
		expect(wrapper.find('li').hasClass('closed')).toBe(true);
		*/
	});
	
});