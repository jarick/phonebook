
import guid from '../helpers/guid';
const INITIAL_STATE =  localStorage.phones ? JSON.parse(localStorage.phones) : [];

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_PHONE':
      return state.concat({
        id: guid(),
        contact: action.contact,
        phone: action.phone
      });
    case 'REMOVE_PHONE':
      return state.filter(_ => _.id !== action.id);
    case 'UPDATE_PHONE':
      return state.map(_ => (_.id !== action.id) ? _ : { ..._, phone: action.phone});
    default:
      return state;
  }
}