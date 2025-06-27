import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../MsgComponents/Loading/Loading";
import Display_Flex from "./Display_Flex";
import FormatDate from "./FormatDate";
import TextLorem from "./TextLorem";
import toast from "react-hot-toast";
import { useAuth } from "../ContextProvider/AuthProvider";
import { useOfflineMode } from "../ContextProvider/OffilneModeProvider";

const TicketItemDescription = ({ onTicketReserved }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState(null);
  const { username } = useAuth();
  const { OffilneMode, setOffilneMode } = useOfflineMode();

  const fetchTicket = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://test.joo.nz/ticket/${id}`, {
        method: "GET",
      });
      const data = await response.json();
      setTicket(data);
      setLoading(false);
      console.log("ID Fetched", data);
    } catch (err) {
      console.log(`Error When Handle This ID :${id} ${err}`);
      setLoading(false);
    }
  };

  const handleReserve = async () => {
    if (OffilneMode) {
      
    } else {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://test.joo.nz/ticket/${id}/reserve`, {
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.status === 200) {
        console.log(data.message);
        toast.success("Reserved");
      } else {
        console.log(data.message);
        toast.error(`Error / ${data.message} `, { duration: 5000 });
      }

      onTicketReserved();
      fetchTicket();
    }
  };

  const alreadyReserve = ticket?.reservedBy?.includes(username);

  useEffect(() => {
    fetchTicket();
  }, [id]);

  return (
    <div className="animate-fade-in--Desc">
      {loading ? (
        <Loading />
      ) : ticket ? (
        <div className="--base--description-font ">
          <div className="--card--description--detail--Main">
            <div className="--card--description--detail">
              <h1 className="text-4xl text-shadow-lg text-gray-800 flex gap-8">
                | {ticket.description}
                <span className="border-y-2">{ticket.id}</span>{" "}
              </h1>
              <div className="--lorem-text-styles">
                <TextLorem />
              </div>
              <p>
                Added Date:
                <span>
                  <FormatDate date={ticket.addedDate} />
                </span>
              </p>
              <p>
                Price: <span className="border-b-2">{ticket.price}</span>$
              </p>
              <p>
                Availabe Seat: <span>{ticket.seats} Person</span>
              </p>
              {!alreadyReserve && (
                <button
                  className="--reserve--button--description"
                  onClick={handleReserve}
                >
                  Reserve !
                </button>
              )}
            </div>
            <div className="flex justify-center items-center text-6xl">||</div>
            <div className="--card-description-reserved flex flex-col items-baseline">
              Already Reserved By:
              {ticket?.reservedBy.map((peoples, index) => {
                return (
                  <ul
                    key={index}
                    className="list-decimal text-sky-800/80 select-text"
                  >
                    <li>
                      {peoples.charAt(0).toUpperCase() + peoples.slice(1)}
                    </li>
                  </ul>
                );
              })}
            </div>
            {/* <div>salam test2</div> */}
          </div>
        </div>
      ) : (
        <p>Internet OR Server Lost</p>
      )}
    </div>
  );
};
export default TicketItemDescription;
