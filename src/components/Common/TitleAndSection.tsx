import { motion } from "framer-motion";

interface TitleAndSectionProps {
  children: JSX.Element | JSX.Element[];
}

const TitleAndSection: React.FC<TitleAndSectionProps> = ({ children }) => {
  return (
    <div
    className="flex flex-col justify-center relative  h-full items-center">
      {children}
    </div>
  );
};

export default TitleAndSection;
