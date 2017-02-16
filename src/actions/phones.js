
export const add = (contact, phone) => ({
  type: 'ADD_PHONE',
  contact: contact,
  phone: phone
});

export const update = (id, phone) => ({
  type: 'UPDATE_PHONE',
  id: id,
  phone: phone
});

export function remove(id) {
  return {
    type: 'REMOVE_PHONE',
    id: id,
  }
}