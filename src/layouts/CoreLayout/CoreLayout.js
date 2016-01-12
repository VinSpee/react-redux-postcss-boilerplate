import React from 'react';
import createButton from 'button';

const CoreLayout = ({ children }) => {
	const Button = createButton(React);
	return (
		<div className="page-container">
				<Button label="Fuck Off" />
			<div className="view-container">
				{children}
			</div>
		</div>
	);
};

CoreLayout.propTypes = {
	children: React.PropTypes.element,
};

export default CoreLayout;
