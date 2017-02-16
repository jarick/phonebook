import React, {Component} from 'react'
import { connect } from 'react-redux';
import { update } from '../actions/phones';
import { Link } from 'react-router';

class AddPhoneView extends Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = {
    contact: this.props.params.contact,
    id: this.props.params.phone,
    phone: this.props.phones.filter(_ => _.id === this.props.params.phone)[0].phone
  };

  _onChangePhone = () => (event) => {
    this.setState({phone: event.target.value});
    event.preventDefault();
  };

  _onSubmit = () => (event) => {
    this.props.onUpdate(this.state.id, this.state.phone);
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
  onUpdate(id, phone) {
    dispatch(update(id, phone));
  }
}))(AddPhoneView);