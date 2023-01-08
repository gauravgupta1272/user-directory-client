import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data); //API calls are asynchronous so we need 'await' or 'then'
  } catch (error) {
    console.log("Error while calling Add User API", error);
  }
};

export const getUsers = async (data) => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("Error while calling Get Users API", error);
  }
};

export const getUser  = async (id) =>{
  try{
    return await axios.get(`${URL}/${id}`);
  } catch(error){
    console.log("Error while calling Get User API", error);
  }
};

export const editUser = async (user, id) =>{
  try{
    return await axios.put(`${URL}/${id}`, user)
  } catch(error){
    console.log("Error while calling Edit User API", error);
  }
}

export const deleteUser = async (id) =>{
  try{
    return await axios.delete(`${URL}/${id}`);
  } catch(error){
    console.log("Error while calling Delete User API", error);
  }
}
