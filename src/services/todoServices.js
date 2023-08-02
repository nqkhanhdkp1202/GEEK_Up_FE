import axiosClient from '../config/axiosClient';

export const todoServices = {
  getUserList: (params) => {
    const url = 'users/';
    return axiosClient.get(url, { params });
  },

  getToDoListByUserId: (userId, params) => {
    const url = `users/${userId}/todos`;
    return axiosClient.get(url, { params });
  },

  markDoneToDo: (taskId, data, params) => {
    const url = `todos/${taskId}`;
    return axiosClient.patch(url, data, { params });
  },
};
