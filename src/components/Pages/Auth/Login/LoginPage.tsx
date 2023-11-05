import { useForm } from "react-hook-form";
import FormLabel from "../../../Common/Form/FormLabel";
import FormRowContainer from "../../../Common/Form/FormRowContainer";
import TitleAndSection from "../../../Common/TitleAndSection";
import CustomButton from "../../../Common/CustomButton";
import { AiOutlineEnter } from "react-icons/ai";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const { token, onLogin } = useContext(AuthContext);
  const onSubmit = (arg: any) => {
    onLogin();
  };
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return token ? (
    <Navigate to="/main-panel" />
  ) : (
    <TitleAndSection>
      <h1 className="text-center text-[2rem] mb-[3rem] font-[900] bg-slate-600/70 p-[1rem] rounded-lg">
        Sign in!
        <br />
      </h1>

      <div className="   text-black text-[1rem] flex justify-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" bg-slate-600/70 p-[1rem] rounded-lg flex flex-col md:w-[40em] gap-[0.2rem]  "
        >
          <FormRowContainer>
            <FormLabel label="Login:" />
            <input
              className="p-[0.45rem] w-[20em]"
              type="text"
              placeholder=" login"
              {...register("login", { required: true })}
            />
          </FormRowContainer>

          <FormRowContainer>
            <FormLabel label="Password:" />
            <input
              className="p-[0.45rem] w-[20em]"
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
            />
          </FormRowContainer>
          <div className="flex gap-[0.2rem] justify-center pt-[0.8rem] text-white">
            <CustomButton
              label={"Login!"}
              onClick={() => {}}
              type="submit"
              icon={<AiOutlineEnter />}
            />
          </div>
        </form>
      </div>
    </TitleAndSection>
  );
};

export default LoginPage;
