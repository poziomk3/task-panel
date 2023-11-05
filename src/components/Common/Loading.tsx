import { RotatingLines } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="w-full  flex-1 h-full flex flex-col justify-center relative  ">
      <div className="absolute top-[50%] right-[50%] translate-x-[50%] ">
        <RotatingLines
          strokeColor="red"
          strokeWidth="3"
          animationDuration="0.4"
          width="96"
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loading;
