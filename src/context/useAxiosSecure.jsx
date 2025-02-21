import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://tasklyy-api.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;