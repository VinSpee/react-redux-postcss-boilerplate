import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { bindActionCreators } from 'redux';
import { HomeView } from 'views/HomeView/HomeView';

function shallowRender(component) {
	const renderer = TestUtils.createRenderer();

	renderer.render(component);
	return renderer.getRenderOutput();
}

function renderWithProps(props = {}) {
	return TestUtils.renderIntoDocument(<HomeView {...props} />);
}

function shallowRenderWithProps(props = {}) {
	return shallowRender(<HomeView {...props} />);
}

describe('(View) Home', () => {
	let _component;
	let _rendered;
	let _props,
	let _spies;

	beforeEach(() => {
		_spies = {};
		_props = {
			counter: 0,
			...bindActionCreators({
				doubleAsync: (_spies.doubleAsync = sinon.spy()),
				increment: (_spies.increment = sinon.spy()),
			}, _spies.dispatch = sinon.spy()),
		};

		_component = shallowRenderWithProps(_props);
		_rendered = renderWithProps(_props);
	});

	it('Should render as a <div>.', () => {
		expect(_component.type).to.equal('div');
	});

	it('Should include an <h1> with welcome text.', () => {
		const h1 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h1');

		expect(h1).to.exist;
		expect(h1.textContent).to.match(/Welcome to the React Redux Starter Kit/);
	});

	it('Should render with an <h2> that includes Sample Counter text.', () => {
		const h2 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h2');

		expect(h2).to.exist;
		expect(h2.textContent).to.match(/Sample Counter/);
	});

	it('Should render props.counter at the end of the sample counter <h2>.', () => {
		const h2 = TestUtils.findRenderedDOMComponentWithTag(
			renderWithProps({ ..._props, counter: 5 }), 'h2'
		);

		expect(h2).to.exist;
		expect(h2.textContent).to.match(/5$/);
	});

	describe('An increment button...', () => {
		let _btn;

		beforeEach(() => {
			_btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
			.filter(a => /Increment/.test(a.textContent))[0];
		});

		it('should be rendered.', () => {
			expect(_btn).to.exist;
		});

		it('should dispatch an action when clicked.', () => {
			_spies.dispatch.should.have.not.been.called;
			TestUtils.Simulate.click(_btn);
			_spies.dispatch.should.have.been.called;
		});
	});

	describe('A Double (Async) button...', () => {
		let _btn;

		beforeEach(() => {
			_btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
			.filter(a => /Double/.test(a.textContent))[0];
		});

		it('should be rendered.', () => {
			expect(_btn).to.exist;
		});

		it('should dispatch an action when clicked.', () => {
			_spies.dispatch.should.have.not.been.called;
			TestUtils.Simulate.click(_btn);
			_spies.dispatch.should.have.been.called;
		});
	});
});
