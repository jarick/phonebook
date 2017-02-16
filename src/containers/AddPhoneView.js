import React, {Component} from 'react'
import { connect } from 'react-redux';
import { add } from '../actions/phones';
import { Link } from 'react-router';

class AddPhoneView extends Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = {
    contact: this.props.params.contact,
    phone: ''
  };

  _onChangePhone = () => (event) => {
    this.setState({phone: event.target.value});
    event.preventDefault();
  };

  _onSubmit = () => (event) => {
    this.props.onAdd(this.state.contact, this.state.phone);
    this.context.router.push(`/phones/${this.state.contact}`);
    event.preventDefault();
  };

  _getListUrl = () => `/phones/${this.state.contact}`;

  render() {
    return (
      <div>
        <div>
          <Link to={this._getListUrl()}>
            List of phones
          </Link>
        </div>
        <form onSubmit={this._onSubmit()}>
          <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" value={this.state.phone} onChange={this._onChangePhone()}/>
          </div>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default connect((state) => ({
  phones: state.phones
}), (dispatch) => ({
  onAdd(contact, phone) {
    dispatch(add(contact, phone));
  }
}))(AddPhoneView);