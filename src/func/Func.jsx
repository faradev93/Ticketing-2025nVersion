import { useRegister } from "../ContextProvider/RegisterProvider";

const { form, setForm } = useRegister();


export const handleAtSign = (e, form, errorComp) => {
  const value = e.target.value;
  if (!value.includes("@")) {
    alert("Entered mail Not correct!");
    console.log(`kkkk`);
  } else return console.log("Email Look Fine!");
};
const Func = () => {
  return <div></div>;
};
export default Func;
