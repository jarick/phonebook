
import guid from '../helpers/guid';

const INITIAL_STATE =  localStorage.contacts ? JSON.parse(localStorage.contacts) : [];

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_CONTACT':
      return state.concat({
        id: guid(),
        contact: action.contact
      });
    case 'REMOVE_CONTACT':
      return state.filter(_ => _.id !== action.id);
    case 'UPDATE_CONTACT':
      return state.map(_ => (_.id !== action.id) ? _ : { ..._, contact: action.contact});
    default:
      return state;
  }
}