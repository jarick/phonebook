
export const add = (contact: string, phone: string) => ({
  type: 'ADD_PHONE',
  contact: contact,
  phone: phone
});

export const update = (id: string, phone: string) => ({
  type: 'UPDATE_PHONE',
  id: id,
  phone: phone
});

export function remove(id: string) {
  return {
    type: 'REMOVE_PHONE',
    id: id,
  }
}