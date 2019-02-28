import titleize from 'titleize';

export const toUpperCase = sentence => titleize(sentence);

export const isShared = shared => shared ? 'Shared' : 'Entire';
