import Cookies from "js-cookie";
import instance from "..";

const b_price = async () => {
  const res = await instance.get(
    "/api/wallet/binaryoption/prices",
    {
      headers: {
        "Authorization": "Bearer " + Cookies.get("accessToken"),
      },
    }
  );
  const result = await res.data;
  return result;
};

export default b_price;
