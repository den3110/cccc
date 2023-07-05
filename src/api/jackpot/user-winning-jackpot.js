import Cookies from "js-cookie";
import instance from "..";

const user_winning_jackpot = async (data) => {
  const res = await instance.get(
    "/api/wallet/binaryoption/events/community-jackpot/user-winning-history",
    {
      headers: {
        "Authorization": "Bearer " + Cookies.get("accessToken"),
      },
      params: {
        ...data
      }
    }
  );
  const result = await res.data;
  return result;
};

export default user_winning_jackpot;
