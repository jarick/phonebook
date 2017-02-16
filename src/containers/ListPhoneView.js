import React from 'react'
import { connect } from 'react-redux';
import {remove} from '../actions/phones';
import View from '../components/phone-list';

export default connect((state) => ({
  phones: state.phones
}), (dispatch) => ({
  onRemove(id) {
    dispatch(remove(id));
  }
}))((props) => (
  <View
    onRemove={(id) => props.onRemove(id)}
    phones={props.phones}
    contact={props.params.contact}
  />
));