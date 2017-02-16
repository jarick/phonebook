import React, {Component} from 'react'
import { connect } from 'react-redux';
import { add } from '../actions/contacts';
import { Link } from 'react-router';

class AddContactView extends Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = {
    contact: ''
  };

  _onChangeContact = () => (event) => {
    this.setState({contact: event.target.value});
    event.preventDefault();
  };

  _onSubmit = () => (event) => {
    this.props.onAdd(this.state.contact);
    this.context.router.push('/');
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div>
          <Link to="/">
            List of contacts
          </Link>
        </div>
        <form onSubmit={this._onSubmit()}>
          <div>
            <label htmlFor="contact">Name</label>
            <input id="contact" name="contact" value={this.state.contact} onChange={this._onChangeContact()}/>
          </div>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default connect((state) => ({
  contacts: state.contacts
}), (dispatch) => ({
  onAdd(id) {
    dispatch(add(id));
  }
}))(AddContactView);