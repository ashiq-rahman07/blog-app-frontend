import axios from "axios";

export const getAllPosts = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/posts");
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};