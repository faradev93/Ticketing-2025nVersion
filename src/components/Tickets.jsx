import { useEffect, useState } from "react";
import TicketDetails from "./TicketItem";
import Display_Flex from "./Display_Flex";
import Loading from "../MsgComponents/Loading/Loading";

export default function Tickets({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const response = await fetch("http://test.joo.nz/tickets", {
        method: "GET",
      });
      if (response.status === 200) {
        const json = await response.json();
        setData(json);
        setLoading(false);
      }
    } catch (err) {
      console.log("Nashod", err);
      setLoading(true);
    }
  };
  useEffect(() => {
    console.log(`Reserved`);
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Display_Flex>
          {data.map((item) => {
            return <TicketDetails ticket={item} key={item.id} />;
          })}
        </Display_Flex>
      )}
    </div>
  );
}
