import api from "./api"; // axios instance

const updateProfile = async (formData) => {
  return await api.put("/users/profile", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export default { updateProfile };
