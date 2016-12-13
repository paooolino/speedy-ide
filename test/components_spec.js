// https://medium.com/javascript-inside/some-thoughts-on-testing-react-redux-applications-8571fbc1b78f#.isyks5vj5

import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import { Layout } from '../src/components/Layout';

describe('[Component] Layout', () => {
	it('renders a loading message when appConfig is null', () => {
		const appConfig = null;
		const loadConfig = () => {};
		const wrapper = shallow(
			<Layout 
				loadConfig={loadConfig}
				appConfig={appConfig}
			/>
		);
		expect(wrapper.find('.loading_message').length).toBe(1);
	});
	
	it('renders the layout component when appConfig is defined', () => {
		const appConfig = {};
		const loadConfig = () => {};
		const selectedEntry = {};
		const wrapper = shallow(
			<Layout 
				loadConfig={loadConfig}
				appConfig={appConfig}
				selectedEntry={selectedEntry}
			/>
		);
		expect(wrapper.find('#Layout').length).toBe(1);
	});
	
	it('calls the loadConfig callback', () => {
		const appConfig = null;
		const loadConfig = expect.createSpy();
		const wrapper = shallow(
			<Layout 
				loadConfig={loadConfig}
				appConfig={appConfig}
			/>
		);
		expect(loadConfig).toHaveBeenCalled();
	});
});
