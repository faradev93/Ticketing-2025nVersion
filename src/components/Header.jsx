import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { usePrivateRoute } from "../ContextProvider/PrivateRouteProvider";
import toast from "react-hot-toast";
import { useUserBalance } from "../ContextProvider/UserBalanceProvider";

const Header = ({ children }) => {
  const { email } = usePrivateRoute();
  const { balance } = useUserBalance();

  const navigate = useNavigate();

  const SignoutBTN = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("User_Email");
    navigate("/login");
    toast.success("Successfully logged out.");
  };

  const firstLetterUpCase = email.charAt(0).toUpperCase() + email.slice(1);

  return (
    <div>
      <div className="--header--style p-2">
        <div className="--header-part--1 font-[DgOcean-2]">
          <ul className="--header-part--1">
            <li>
              <Link to={"/tickets"}>Tickets</Link>
            </li>
            <li className="hover:text-red-600">
              <Link to={"/tickets/reserved"}>My Tickets</Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-8 items-center font-[DgOcean-2] select-none">
          <ul className="flex gap-8 items-center font-[DgOcean-2] select-none">
            <li className="flex flex-col gap-4">
              <div>
                ✔ {firstLetterUpCase}
                <span className="font-light p-2 rounded-xs m-2"></span>
              </div>

              <span>Balance:{balance}$</span>
            </li>
            <li>
              <button onClick={SignoutBTN} className="--signout-btn">
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
