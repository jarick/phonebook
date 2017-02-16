import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

export default class PhoneList extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  static propTypes = {
    onRemove: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired
  };

  _onRemove = (id) => (event) => {
    this.props.onRemove(id);
    this.context.router.push('/');
    event.preventDefault();
  };

  _goToUpdatePage = (id) => (event) => {
    this.context.router.push(`/contacts/update/${id}`);
    event.preventDefault();
  };

  _goToPhonesPage = (id) => (event) => {
    this.context.router.push(`/phones/${id}`);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div>
          List of contacts
        </div>
        <div>
          <Link to="/contacts/add">
            Add contact
          </Link>
        </div>
        <div>
          <table>
            <tbody>
            {this.props.contacts.map(item => (
                <tr key={item.id}>
                  <td>{item.contact}</td>
                  <td><a href="#" onClick={this._goToPhonesPage(item.id)}>phones</a></td>
                  <td><a href="#" onClick={this._goToUpdatePage(item.id)}>update</a></td>
                  <td><a href="#" onClick={this._onRemove(item.id)}>delete</a></td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}