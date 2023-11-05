interface FormLabelProps {
  label: string;
}

const FormLabel: React.FC<FormLabelProps> = ({ label }) => {
  return <div className="mr-auto text-white font-[500]">{label}</div>;
};

export default FormLabel;
