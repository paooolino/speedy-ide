// https://medium.com/javascript-inside/some-thoughts-on-testing-react-redux-applications-8571fbc1b78f#.isyks5vj5

import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Layout from '../src/components/Layout';

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
