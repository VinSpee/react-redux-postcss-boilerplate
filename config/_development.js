/* eslint key-spacing:0 */
import { argv } from 'yargs';

export default (config) => {
	const HMR_ENABLED = !!argv.hot;
	const overrides = {
		compiler_enable_hmr : HMR_ENABLED,
	};

	if (HMR_ENABLED) {
		overrides.compiler_public_path = (
			`http://${config.server_host}:${config.server_port}/`
		);
	}

	return overrides;
};
