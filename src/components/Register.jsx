import { Link, useNavigate } from "react-router";
import { useRegister } from "../ContextProvider/RegisterProvider";
import ErrorMsg from "../MsgComponents/ErrorMsg/ErrorMsg";
import { useState } from "react";
import toast from "react-hot-toast";
import { register } from "../api/register";

const Register = () => {
  const { form, setForm, showMsg, setShowMsg } = useRegister();

  const [borderClass, setBorderClass] = useState("login--input");

  const navigate = useNavigate();

  const handleRegisterEmail = (event) => {
    const value = event.target.value;
    const copyForm = { ...form };
    copyForm.username = value;
    setForm(copyForm);
  };

  const handleRegisterButton = async (event) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      setShowMsg({ ...showMsg, passwordmissMatch: false });
      return;
    }

    try {
      const response = await register(
        form.username,
        form.fullName,
        form.password
      );
      if (response.status === 200) {
        const data = await response.json();
        if (data.message === "Registered successfully") {
          toast.success("Registration Successfully");
          toast("Welcome", { icon: "❤" });
        }

        console.log(data.message);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_email", form.username);
        navigate("/tickets");
      } else if (response.status === 400) {
        toast.error("User already exists", { duration: 3000 });
      }
    } catch (err) {
      console.log(`Nashod: ${err}`);
    }
  };

  return (
    <form onSubmit={handleRegisterButton} autoComplete="yes">
      <div className="--bg-2">
        <div className="login--main">
          <h1 className="text-5xl text-white my-special-font animate-fade-in select-none">
            Ticketing WebSite
          </h1>

          <div className="login--borders my-special-font animate-fade-in w-[480px] h-fit p-10">
            <h2 className="my-special-font-2 animate-fade-in">
              Sign Up with Email
            </h2>
            <p className="">Sign Up Kon Halesho Bebar</p>

            <label htmlFor="email" className="--text-style">
              email address
            </label>
            <input
              id="email"
              className="login--input "
              placeholder="Enter your email Address"
              type="email"
              onChange={handleRegisterEmail}
              name="email"
            ></input>

            <label htmlFor="fullname" className="--text-style">
              full name
            </label>
            <input
              id="fullname"
              className="login--input"
              placeholder="Enter a name"
              type="text"
              onChange={(e) => {
                setForm({ ...form, fullName: e.target.value });
              }}
            ></input>

            <label htmlFor="password" className="--text-style">
              password
            </label>
            <input
              id="password"
              className={borderClass}
              placeholder="Create Password"
              type="password"
              onChange={(ev) => {
                setForm({ ...form, password: ev.target.value });
              }}
              onBlur={() => {
                if (form.password !== form.confirmPassword) {
                  setShowMsg({ ...showMsg, passwordmissMatch: true });
                  setBorderClass("input--error");
                } else {
                  setShowMsg({ ...showMsg, passwordmissMatch: false });
                  setBorderClass("login--input");
                }
              }}
            ></input>

            <label htmlFor="confirmpassword" className="--text-style">
              confirm password
            </label>
            <input
              id="confirmpassword"
              className={borderClass}
              placeholder=""
              type="password"
              onChange={(e) => {
                setForm({ ...form, confirmPassword: e.target.value });
              }}
              onBlur={() => {
                if (form.password !== form.confirmPassword) {
                  setShowMsg({ ...showMsg, passwordmissMatch: true });
                  setBorderClass("input--error");
                } else {
                  setShowMsg({ ...showMsg, passwordmissMatch: false });
                  setBorderClass("login--input");
                }
              }}
            ></input>

            {showMsg.passwordmissMatch && (
              <ErrorMsg x={"Entered password not correct"} />
            )}

            <button type="submit" className="register--button">
              Sign Up{" "}
            </button>
          </div>
          <div className="flex gap-4 text-xl items-center justify-center italic">
            Or Click{" "}
            <Link className="link--style" to={"/login"}>
              {" "}
              here{" "}
            </Link>
            to login
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
