import { request } from 'umi';

export const login = (data: any) => {
  return request(`/api/user`, {
    data,
    method: 'POST',
  });
};
