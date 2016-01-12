import { createAction, handleActions } from 'redux-actions';

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

// ------------------------------------
// Actions
// ------------------------------------
export const increment = createAction(COUNTER_INCREMENT, (value = 1) => value);

export const doubleAsync = () => {
	return (dispatch, getState) => {
		setTimeout(() => {
			dispatch(increment(getState().counter));
		}, 1000);
	};
};

export const actions = {
	increment,
	doubleAsync,
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
	[COUNTER_INCREMENT]: (state, { payload }) => state + payload,
}, 1);
