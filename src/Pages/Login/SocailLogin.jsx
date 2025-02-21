import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { useNavigate } from "react-router";

const SocialLogin = () => {
    const navigate = useNavigate()
  const { signInWithGoogle } = useAuth();

  const handleGoogleLoginN = () => {
    signInWithGoogle().then((result) => {
      navigate("/dashboard");
    });
  };

  return (
    <div>
      <div className="flex gap-5">
        <Button
          onClick={handleGoogleLoginN}
          variant="outlined"
          fullWidth
          className="focus:ring-0  font-normal border-gray-600 flex items-center justify-center gap-2 normal-case text-base"
        >
          <FcGoogle /> Google
        </Button>
        <Button
          variant="outlined"
          fullWidth
          className="focus:ring-0  font-normal border-gray-600 flex items-center justify-center gap-2 normal-case text-base"
        >
          <VscGithubInverted /> Github
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
