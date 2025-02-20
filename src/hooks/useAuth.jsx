import { authProvider } from "@/context/AuthContext";
import { useContext } from "react";

const useAuth = () => {
    const auth = useContext(authProvider)
    return auth
};

export default useAuth;