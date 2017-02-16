import React from 'react'
import { connect } from 'react-redux';
import { add } from '../actions/contacts';
import View from '../components/contact-form';


export default connect((state) => ({
  contacts: state.contacts
}), (dispatch) => ({
  onAdd(id) {
    dispatch(add(id));
  }
}))((props) => (
  <View
    onSubmit={(id, contact) => props.onAdd(id)}
    contacts={props.contacts}
  />
));