
export const add = (contact) => ({
  type: 'ADD_CONTACT',
  contact: contact
});

export const update = (id, contact) => ({
  type: 'UPDATE_CONTACT',
  id: id,
  contact: contact
});

export const remove = (id) => ({
  type: 'REMOVE_CONTACT',
  id: id
});