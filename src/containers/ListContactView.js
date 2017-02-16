import React, {Component} from 'react'
import { connect } from 'react-redux';
import {remove} from '../actions/contacts';
import { Link } from 'react-router';

class ListContactView extends Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
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

export default connect((state) => ({
  contacts: state.contacts
}), (dispatch) => ({
  onRemove(id) {
    dispatch(remove(id));
  }
}))(ListContactView);