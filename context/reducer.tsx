import { DISPLAY_ALERT, CLEAR_ALERT, TOGGLE_LOAD } from './actions';
import { initialState } from './appContext';

const reducer = (state: {}, action: {}) => {
  // if (action.type === DISPLAY_ALERT) {
  //   const { showAlert, alertText, alertType } = action.payload;
  //   return {
  //     ...state,
  //     showAlert: showAlert,
  //     alertText: alertText,
  //     alertType: alertType,
  //   };
  // }
  // if (action.type === CLEAR_ALERT) {
  //   return { ...state, showAlert: false, alertText: '', alertType: '' };
  // }
  // if (action.type === TOGGLE_LOAD) {
  //   return { ...state, isLoading: !state.isLoading };
  // }
  // throw new Error(`no such action: ${action.type}`);
};

export default reducer;
