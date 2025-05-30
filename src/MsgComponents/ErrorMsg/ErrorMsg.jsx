import { PiWarningOctagonFill } from "react-icons/pi";

const ErrorMsg = ({ x }) => {
  return (
    <div className="transition-all duration-700 animate-fade-in">
      <div className="flex gap-2 items-center select-none my-special-font-3 text-[0.75rem] transition-all duration-500 ">
        <PiWarningOctagonFill size={25} color="red" />
        <p className="text-red-800">
          {x}
        </p>
      </div>
    </div>
  );
};
export default ErrorMsg;
