import React, { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { UserProviderContext } from "../../components/UserProvider/UserProvider";
import Cookies from "js-cookie";

export const SocketContainerContext = createContext();

const SocketContainer = ({ chidren }) => {
  const { userData } = useContext(UserProviderContext);
  const [socketWeb, setSocketWeb] = useState();
  useEffect(() => {
    console.log("socket");
    if (userData?.d?.uid) {
      //   const url = `wss://ws.central.vip/socket.io/?uid=${userId}&ssid=${access_token}&EIO=3&transport=websocket`
      const socket = new WebSocket(
        `wss://ws.starisa.net/socket.io/?uid=${
          userData?.d?.uid
        }&ssid=${Cookies.get("accessToken")}&EIO=3&transport=websocket`
      );
      const connection = socket;
      setSocketWeb(connection)
      connection.onopen = () => {
        connection.send('42["new-login"]');
        connection.send('42["BO_PRICE_SUBSCRIBE"]');
        connection.send('42["TRADER_SENTIMENT_SUBSCRIBE"]');
        connection.send('42["BO_CHART_INDICATORS"]');
        connection.send('42["BO_RESULT_SUBSCRIBE"]');
        connection.send('42["WET_BLOCK_DISTRIBUTION"]');
        connection.send('42["SOCKET_BO_LAST_RESULT_SUBSCRIBE"]');
        // connection.send('42["SOCKET_BO_LAST_RESULT"]');

        setInterval(() => {
          connection.send("2");
        }, 5000);
      };

      connection.onerror = (error) => {
        console.log(`WebSocket error: ${error}`);
      };
      // a oi cai nay goi o component con duoc k a
      
    }
  }, [userData]);
  

  return (
    <SocketContainerContext.Provider value={{ socketWeb }}>
      {chidren}
    </SocketContainerContext.Provider>
  );
};

export default SocketContainer;
