import React from 'react'
import { connect } from 'react-redux';
import {remove} from '../actions/contacts';
import View from '../components/phone-list';

export default connect((state) => ({
  contacts: state.contacts
}), (dispatch) => ({
  onRemove(id) {
    dispatch(remove(id));
  }
}))((props) => (<View contacts={props.contacts} onRemove={props.onRemove}/>));