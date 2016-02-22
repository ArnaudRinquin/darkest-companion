import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../app';
import DevTools from '../../components/devtools';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <App/>
          <DevTools />
        </div>
      </Provider>
    );
  }
}
