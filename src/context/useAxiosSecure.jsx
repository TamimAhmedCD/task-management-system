import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://task-management-system-backend-lopu.onrender.com",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;