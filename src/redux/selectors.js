export const getContacts = (state) => state.contacts.items;

export const getLoading = (state) => state.contacts.loading;

export const getError = (state) => state.contacts.error;

export const getSearchFilter = (state) => state.filters.name;
