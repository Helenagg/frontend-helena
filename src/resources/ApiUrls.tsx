const _DOMAIN = 'https://jsonplaceholder.typicode.com';

export const BASE_PATH = `${_DOMAIN}`;

const _EXPORT_PATH = '/posts';

export const _EXPORT_POST = () => `${_EXPORT_PATH}`;
export const _UPDATE_POST = (id: number) => `${_EXPORT_PATH}/${id}`;
export const _DELETE_POST = (id: number) => `${_EXPORT_PATH}/${id}`;
