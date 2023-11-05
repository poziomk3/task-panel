import { createContext, useContext, useState } from "react";
import { LoadingContext } from "../../../App";
import { IoMdExit } from "react-icons/io";

interface AuthProviderProps {
  children: JSX.Element | JSX.Element[];
  onLogin(): void;
}

interface AuthContextType {
  token: string | null;
  onLogin(): void;
  onLogout(): void;
}

const fakeAuth = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve("templateSessionToken"), 250);
  });

export const AuthContext = createContext<AuthContextType>({
  token: null,
  onLogin: () => {},
  onLogout: () => {},
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children, onLogin }) => {
  const [token, setToken] = useState<string | null>(null);
  const setSpinner = useContext(LoadingContext);
  const handleLogin = async () => {
    setSpinner(true);
    const token = await fakeAuth().then((arg) => {
      setSpinner(false);
      setToken(arg);
    });
    onLogin();
  };
  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };
  return (
    <AuthContext.Provider value={value}>
      {token ? (
        <div
          className=" border absolute text-white text-[3rem] left-[100%]  translate-x-[-150%] top-[2%] rounded-xl p-[0.3rem] hover:scale-95 duration-300"
          onClick={handleLogout}
        >
          <IoMdExit className="" />
        </div>
      ) : (
        <></>
      )}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
