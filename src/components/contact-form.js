import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router';

export default class extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contact: PropTypes.string,
    contacts: PropTypes.array.isRequired,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  state = {
    id: this.props.contact,
    contact: (this.props.contact) ? this.props.contacts.filter(_ => _.id === this.props.contact)[0].contact : ''
  };

  _onChangeContact = () => (event) => {
    this.setState({contact: event.target.value});
    event.preventDefault();
  };

  _onSubmit = () => (event) => {
    this.props.onSubmit(this.state.id, this.state.contact);
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