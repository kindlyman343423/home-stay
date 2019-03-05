import titleize from 'titleize';

export const toUpperCase = sentence => titleize(sentence);

export const isShared = shared => shared ? 'Shared' : 'Entire';

export const baseUrlRemote = 'https://stormy-journey-64712.herokuapp.com';
export const baseUrlLocal= 'http://localhost:3001';
