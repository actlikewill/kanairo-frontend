import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../../redux/reducers';
import LoginPage from '../index';
import { render, fireEvent, cleanup} from '@testing-library/react';



const renderWithRedux = (
    component,
    { initialState, store = createStore(reducer, initialState) } = {}
  ) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
      store,
    }
  }



describe('Login Page', () => {

    afterEach(cleanup);
    
    it('checks if the login button renders', () => {
        const {getByTestId} = renderWithRedux(<LoginPage />);       
        expect(getByTestId('loginButton')).toBeInTheDocument();
    });
    it('checks if the form switcher changes the form', () => {
        const {getByTestId} = renderWithRedux(<LoginPage />);       
        fireEvent.click(getByTestId('switch-to-registerForm'));
        expect(getByTestId('registerButton')).toBeInTheDocument();
    });
});