// https://medium.com/javascript-inside/some-thoughts-on-testing-react-redux-applications-8571fbc1b78f#.isyks5vj5

import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Layout from '../src/components/Layout';

describe('[Component] Layout', () => {
	it('just renders', () => {
		const wrapper = shallow(<Layout />);
		expect(wrapper.find('#Layout').length).toBe(1);
	});
});
