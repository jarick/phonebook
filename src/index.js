import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import ListContactView from './containers/ListContactView';
import AddContactView from './containers/AddContactView';
import UpdateContactView from './containers/UpdateContactView';
import ListPhoneView from './containers/ListPhoneView';
import AddPhoneView from './containers/AddPhoneView';
import UpdatePhoneView from './containers/UpdatePhoneView';
import * as reducers from './reducers'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

store.subscribe(() => {
  const {contacts, phones} = store.getState();
  localStorage.setItem('contacts', JSON.stringify(contacts));
  localStorage.setItem('phones', JSON.stringify(phones));
});

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ListContactView}/>

        <Route path="/contacts/add" component={AddContactView}/>
        <Route path="/contacts/update/:contact" component={UpdateContactView}/>

        <Route path="/phones/:contact" component={ListPhoneView}/>
        <Route path="/phones/:contact/add" component={AddPhoneView}/>
        <Route path="/phones/:contact/update/:phone" component={UpdatePhoneView}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
