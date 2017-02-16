import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

export default class extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  static propTypes = {
    onRemove: PropTypes.func.isRequired,
    phones: PropTypes.array.isRequired,
    contact: PropTypes.string.isRequired
  };

  _onRemove = (id) => (event) => {
    this.props.onRemove(id);
    this.context.router.push(`/phones/${this.props.contact}`);
    event.preventDefault();
  };

  _goToUpdatePage = (id) => (event) => {
    this.context.router.push(`/phones/${this.props.contact}/update/${id}`);
    event.preventDefault();
  };

  _getAddUrl = () => `/phones/${this.props.contact}/add`;

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
            {this.props.phones.filter(_ => _.contact === this.props.contact).map(item => (
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