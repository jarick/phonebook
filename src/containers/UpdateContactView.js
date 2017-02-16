import React from 'react';
import { connect } from 'react-redux';
import { update } from '../actions/contacts';
import View from '../components/contact-form';

export default connect((state) => ({
  contacts: state.contacts
}), (dispatch) => ({
  onUpdate(id, contact) {
    dispatch(update(id, contact));
  }
}))((props) => (
    <View
      onSubmit={(id, contact) => props.onUpdate(id, contact)}
      contacts={props.contacts}
      contact={props.params.contact}
    />
));
