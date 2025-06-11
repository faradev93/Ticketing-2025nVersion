import { NavLink, useLocation } from "react-router";
import { useState } from "react";
import { useAuth } from "../ContextProvider/AuthProvider";
import FormatDate from "./FormatDate";
import LoadingDetail from "../MsgComponents/LoadingDetails";

const TicketDetails = ({ ticket }) => {
  const availableSeat = ticket.seats - ticket.reservedBy;

  const aChange = availableSeat
    ? "text-green-500 --border-bottom-intexted"
    : "text-red-400 --border-bottom-intexted";

  const [loading, setLoading] = useState(false);
  const location = useLocation();
  return (
    <div>
      {loading ? (
        <LoadingDetail />
      ) : (
        <div className="--card--main--detail">
          <div className="--flexy flex-col">
            <p className="--border-bottom-intexted --description--font flex justify-center items-center gap-4">
              {ticket.description}{" "}
              <span className="text-4xl text-shadow-lg text-gray-800">
                {ticket.id}
              </span>
            </p>
          </div>

          <p>
            Price:{" "}
            <span className="--border-bottom-intexted">{ticket.price}</span>$
          </p>

          <p className="flex gap-2">
            Added Date:
            <span className="--border-bottom-intexted">
              <FormatDate date={ticket.addedDate} />
            </span>
          </p>

          <p>
            Availbale Seats:{" "}
            <span className={aChange}>{ticket.seats - ticket.reservedBy}</span>
          </p>
          {location.pathname !== "/tickets/reserved" && (
            <div className="--flexy">
              <NavLink
                to={`/tickets/${ticket.id}`}
                // disabled={availableSeat === 0}
                // onClick={"ss"}
                className="--reserve--button"
              >
                {availableSeat === 0 ? "Full" : "Reserve !"}
              </NavLink>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default TicketDetails;
