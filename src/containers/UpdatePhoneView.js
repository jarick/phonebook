import React from 'react'
import { connect } from 'react-redux';
import { update } from '../actions/phones';
import View from '../components/phone-form';


export default connect((state) => ({
  phones: state.phones
}), (dispatch) => ({
  onUpdate(id, phone) {
    dispatch(update(id, phone));
  }
}))((props) => (
    <View
        onSubmit={(contact, id, phone) => props.onUpdate(id, phone) }
        contact={props.params.contact}
        phone={props.params.phone}
        phones={props.phones}
    />
));