import { Provider } from 'react-redux';
import DevTools from '../../containers/DevToolsWindow';

export default function createDevToolsWindow(store) {
	const win = window.open(
		null,
		'redux-devtools', // give it a name so it reuses the same window
		`
			width=400,
			height=${window.outerHeight},
			menubar=no,
			location=no,
			resizable=yes,
			scrollbars=no,
			status=no
		`
	);
	win.location.reload();
	setTimeout(() => {
		win.document.write(
			'<div id="react-devtools-root"></div>'
		);
		win.document.body.style.margin = '0';

		ReactDOM.render(
			<Provider store={store}>
			<DevTools />
			</Provider>
			, win.document.getElementById('react-devtools-root')
		);
	}, 10);
}
