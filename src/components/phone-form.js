import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router';

export default class extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contact: PropTypes.string.isRequired,
    phone: PropTypes.string,
    phones: PropTypes.array.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  state = {
    contact: this.props.contact,
    id: this.props.phone,
    phone: (this.props.phone) ? this.props.phones.filter(_ => _.id === this.props.phone)[0].phone : ''
  };

  _onChangePhone = () => (event) => {
    this.setState({phone: event.target.value});
    event.preventDefault();
  };

  _onSubmit = () => (event) => {
    this.props.onSubmit(this.state.contact, this.state.id, this.state.phone);
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