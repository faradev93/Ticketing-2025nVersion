import { usePrivateRoute } from "../ContextProvider/PrivateRouteProvider";

export default function Tickets({ childern }) {
  const { username, setUserName } = usePrivateRoute();
  return <div className="--ticket--main-page">ss</div>;
}
