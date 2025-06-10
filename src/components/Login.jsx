import { useLoginForm } from "../ContextProvider/LoginProvider";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../ContextProvider/AuthProvider";
import { useState } from "react";
import ErrorMsg from "../MsgComponents/ErrorMsg/ErrorMsg";
import toast from "react-hot-toast";

export default function Login() {
  const { logForm, setLogForm } = useLoginForm();
  const [error, ShowError] = useState(false);

  const navigate = useNavigate();

  const SignIn = async (e) => {
    e.preventDefault();

    if (!logForm.username) {
      console.log("شرط خطا برقراره");
      ShowError(true);
      return;
    } else {
      console.log("شرط خطا برقرا نیس");
      ShowError(false);
    }

    try {
      const response = await fetch("http://test.joo.nz/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: logForm.username,
          password: logForm.password,
        }),
      });
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_email", logForm.username);
        toast.success(`Welcome ${localStorage.getItem("user_email")}`);
        navigate("/tickets");
      }
      if (response.status === 401) {
        const data = await response.json();
        toast.error(`SoRRy Beacuse ${data.message}`, { duration: 4000 });
      }
    } catch (err) {
      console.log("Data Can't Load Beacuse::::" + err);
    }
  };

  return (
    <div className="--bg-2">
      <div className="login--main">
        <h1 className="text-5xl text-white my-special-font animate-fade-in select-none">
          Ticketing WebSite
        </h1>
        <form onSubmit={SignIn}>
          <div className="login--borders my-special-font animate-fade-in w-[480px] h-fit p-10">
            <h2 className="my-special-font-loginCustom animate-fade-in">
              Log in to your account
            </h2>

            <label className="--text-style" htmlFor="email">
              email <span className="text-red-500">*</span>
            </label>

            <input
              onChange={(e) => {
                setLogForm((ghabli) => ({
                  ...ghabli,
                  username: e.target.value,
                }));
              }}
              className="login--input"
              placeholder="Enter your email address"
              type="email"
              id="email"
            ></input>

            {error && <p>salam</p>}

            <label className="--text-style" htmlFor="password">
              password<span className="text-red-500">*</span>
            </label>

            <input
              onChange={(e) => {
                setLogForm((gh) => ({ ...gh, password: e.target.value }));
              }}
              className="login--input"
              placeholder="Enter your password"
              type="password"
              id="password"
            ></input>

            <button type="submit" className="login--button">
              Login{" "}
            </button>
          </div>
        </form>
        <div className="flex gap-4 text-xl">
          Or Click{" "}
          <Link className="link--style" to={"/register"}>
            {" "}
            here{" "}
          </Link>
          to register
        </div>
      </div>
    </div>
  );
}
