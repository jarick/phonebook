
export const add = (contact: string) => ({
  type: 'ADD_CONTACT',
  contact: contact
});

export const update = (id: string, contact: string) => ({
  type: 'UPDATE_CONTACT',
  id: id,
  contact: contact
});

export const remove = (id: string) => ({
  type: 'REMOVE_CONTACT',
  id: id
});