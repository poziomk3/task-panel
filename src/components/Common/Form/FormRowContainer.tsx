interface FormRowContainerProps {
  children: string | JSX.Element | JSX.Element[];
}

const FormRowContainer: React.FC<FormRowContainerProps> = ({ children }) => {
  return (
    <div className="flex items-center flex-col md:flex-row pt-[0.3rem] ">
      {children}
    </div>
  );
};

export default FormRowContainer;
