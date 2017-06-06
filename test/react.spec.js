import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import ReactTestComponent from '../src/js/components/ReactTestComponent/index.jsx';

describe('Can test react components', () => {
	it('should render a hello world text', () => {
		const renderedComponent = mount(<ReactTestComponent/>);
		const actualText = renderedComponent.text();
		expect(actualText).to.equal('Hello World');
	});
});
