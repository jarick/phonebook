import React, {Component} from 'react'
import { connect } from 'react-redux';
import {remove} from '../actions/phones';
import { Link } from 'react-router';

class ListPhoneView extends Component {

  state = {
    contact: this.props.params.contact
  };


  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  _onRemove = (id) => (event) => {
    this.props.onRemove(id);
    this.context.router.push(`/phones/${this.state.contact}`);
    event.preventDefault();
  };

  _goToUpdatePage = (id) => (event) => {
    this.context.router.push(`/phones/${this.state.contact}/update/${id}`);
    event.preventDefault();
  };

  _getAddUrl = () => `/phones/${this.state.contact}/add`;

  render() {
    return (
      <div>
        <div>
          List of phones
        </div>
        <div>
          <Link to="/">
            List of contacts
          </Link>
        </div>
        <div>
          <Link to={this._getAddUrl()}>
            Add phone
          </Link>
        </div>
        <div>
          <table>
            <tbody>
            {this.props.phones.filter(_ => _.contact === this.state.contact).map(item => (
                <tr key={item.id}>
                  <td>{item.phone}</td>
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
  phones: state.phones
}), (dispatch) => ({
  onRemove(id) {
    dispatch(remove(id));
  }
}))(ListPhoneView);