import axios from "axios";

const URL = "https://api.escuelajs.co/api/v1/users";

export const getUsers = async () => {
  const response = await axios.get(URL);
  return response.data;
};

export const createUserService = async (user: any) => {
  const response = await axios.post(URL, user);
  return response.data;
};

export const deleteUserService = async (id: number) => {
  const response = await axios.delete(`${URL}/${id}`);
  return response.data;
};

export const updateUserService = async (id: number, user: any) => {
  const response = await axios.put(`${URL}/${id}`, user);
  return response.data;
};

export const getUserService = async (id: number) => {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
};

export const authorizeUserService = async (user: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(
    `https://api.escuelajs.co/api/v1/auth/login`,
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
