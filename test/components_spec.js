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
	
	const onClickFolderfSpy = expect.createSpy();
	const onClickLeafSpy = expect.createSpy();
	
	const nodes = [
		{
			id: 1,
			name: "an initially opened folder",
			children: [{
				id: 2,
				name: "first level leaf"
			}]
		}, {
			id: 3,
			name: "an initially closed folder",
			children: [{
				id: 4,
				name: "first level leaf"
			}]
		}, {
			id: 5,
			name: "selected top level leaf"
		}, {
			id: 6,
			name: "selected top level leaf"
		}, {
			id: 7,
			name: "unselected top level leaf"
		}
	];

	const wrapper = shallow(
		<FileTree 
			nodes={nodes}
			openedFolders={[1]}
			selectedLeaves={[5, 6]}
			onClickLeaf={onClickLeafSpy}
			onClickFolder={onClickFolderfSpy}
		/>
	);
		
	it('just renders', () => {
		expect(wrapper.find('ul').length).toBe(1);
	});
	
	it('render childrens', () => {
		expect(wrapper.find(FileTree).length).toBe(2);
	});
	
	it('distinguishes between folders and leaves', () => {
		expect(wrapper.find('li').at(0).hasClass('is_folder')).toBe(true);
		expect(wrapper.find('li').at(2).hasClass('is_folder')).toBe(false);
	});
	
	it('renders opened folders', () => {
		expect(wrapper.find('li').at(0).hasClass('opened')).toBe(true);
		expect(wrapper.find('li').at(1).hasClass('opened')).toBe(false);
	});
	
	it('renders selected leaves', () => {
		expect(wrapper.find('li').at(2).hasClass('selected')).toBe(true);
		expect(wrapper.find('li').at(3).hasClass('selected')).toBe(true);
		expect(wrapper.find('li').at(4).hasClass('selected')).toBe(false);
	});
	
	it('calls an handler when clicking a folder', () => {
		wrapper.find('a').at(1).simulate('click');
		expect(onClickFolderfSpy).toHaveBeenCalled();
		expect(onClickFolderfSpy.calls[0].arguments.length).toBe(2);
	});
	
	it('calls an handler when clicking a leaf', () => {
		wrapper.find('a').at(3).simulate('click');
		expect(onClickLeafSpy).toHaveBeenCalled();
		expect(onClickLeafSpy.calls[0].arguments.length).toBe(2);
	});

});