import { NavLink, useNavigate } from "react-router";
import { usePrivateRoute } from "../ContextProvider/PrivateRouteProvider";
import toast from "react-hot-toast";
import {
  UserInfoProvider,
  useUserInfoProvider,
} from "../ContextProvider/UserInfoProvider";

const Header = ({ children }) => {
  const { email } = usePrivateRoute();
  const { balance, setBalance, reservedTickets, setReservedTickets } =
    useUserInfoProvider();
  const navigate = useNavigate();

  const SignoutBTN = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("User_Email");
    navigate("/login");
    toast.success("Successfully logged out.");
  };

  return (
    <div>
      <div className="--header--style p-2">
        <div className="--header-part--1 font-[DgOcean-2]">
          <ul className="--header-part--1">
            <li>
              <NavLink to={"/tickets"} end>
                Tickets
              </NavLink>
            </li>
            <li className="hover:text-red-600">
              <NavLink to={"/tickets/reserved"} end>
                My Tickets
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex gap-8 items-center font-[DgOcean-2] select-none">
          <ul className="flex gap-8 items-center font-[DgOcean-2] select-none">
            <li className="flex flex-col gap-4">
              <div>
                ✔ {email}
                <span className="font-light p-2 rounded-xs m-2"></span>
              </div>

              <span>Balance:$</span>
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
