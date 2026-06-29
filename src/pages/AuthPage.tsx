import { Link } from "react-router-dom";
import image from "../assets/run2.svg"
import welcome from "../assets/welcome2.svg"
import AuthComponent from "@/components/features/auth/AuthComponent";

type Props = {
  login: boolean
}
const AuthPage = ({ login } : Props) => {
  return (
    <div>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <div className="w-[60%] max-sm:w-[92%] h-[35rem] max-sm:h-[28rem] border-4 rounded-xl flex">
          <div className=" flex-1 max-lg:hidden flex justify-center">
            {/* TODO caroussel illustration login  */} 
            <img src={login ? image : welcome} alt="image" className="h-full" />
          </div>
          <div className={`bg-card flex-1 flex flex-col items-center justify-center max-sm:gap-10 max-sm:px-5 max-xl:px-2 
            ${login ? "gap-20" : "gap-10"}`}>
            {/* <h1 className="text-4xl max-sm:text-2xl font-semibold">{login ? "Log in to Strivelog 💪" : "Welcome in Strivelog 💪"}</h1> */}
             <h1 className="text-4xl max-sm:text-xl font-semibold">{login ? "Connectez-vous à Strivelog 💪" : "Bienvenue sur Strivelog 💪"}</h1>
            <AuthComponent log={login} />
             {login ? 
             <p className="text-sm text-center mt-5">Vous n'avez pas de compte ? <Link to={"/register"} className="italic hover:underline">Inscrivez-vous</Link></p>
            :
            <p className="text-sm text-center mt-5">Vous avez un compte ? <Link to={"/"} className="italic hover:underline">Connectez-vous</Link></p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
