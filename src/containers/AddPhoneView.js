import React from 'react'
import { connect } from 'react-redux';
import { add } from '../actions/phones';
import View from '../components/phone-form';

export default connect((state) => ({
  phones: state.phones
}), (dispatch) => ({
  onAdd(contact, phone) {
    dispatch(add(contact, phone));
  }
}))((props) => (
    <View
        onSubmit={(contact, id, phone) => props.onAdd(contact, phone) }
        contact={props.params.contact}
        phone={props.params.phone}
        phones={props.phones}
    />
));