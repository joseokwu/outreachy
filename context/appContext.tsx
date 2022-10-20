import React, { useReducer, useContext } from 'react';
import reducer from './reducer';
// import axios from 'axios';
import { ScriptProps } from 'next/script';
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SUBSCRIBE_SUCCESS,
  ERROR,
  TOGGLE_LOAD,
} from './actions';
// import toast from 'react-hot-toast';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};

const AppContext = React.createContext(null);
const AppProvider = ({ children }: ScriptProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const authFetch = axios.create({
  //   baseURL: 'https://staging-api.xerobugs.com/api/v1/xerobugs',
  // });

  //axios interceptors
  //request
  // authFetch.interceptors.request.use(
  //   (config) => {
  //     config.headers.common['Authorization'] = `Bearer ${state.token}`;
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  // //response
  // authFetch.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   (error) => {
  //     if (error.response.status === 401) {
  //       // logoutUser();
  //       return;
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  // const displayAlert = ({ showAlert, alertText, alertType }) => {
  //   dispatch({
  //     type: DISPLAY_ALERT,
  //     payload: { showAlert, alertText, alertType },
  //   });
  //   clearAlert();
  // };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  // const subscribe = async (details) => {
  //   try {
  //     const { data } = await authFetch.post('/subscriber/create', details);
  //     console.log(data);
  //     // toast.success('You have been subscribed successfully');
  //   } catch (error) {
  //     console.log(error.response);
  //     // toast.error(error?.response?.data?.message);
  //     // displayAlert({
  //     //   showAlert: true,
  //     //   alertType: 'danger',
  //     //   alertText: error?.response?.data?.message,
  //     // });
  //   }
  // };

  const toggleLoad = () => {
    dispatch({ type: TOGGLE_LOAD });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        // subscribe,
        toggleLoad,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, initialState };
