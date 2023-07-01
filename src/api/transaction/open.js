import Cookies from "js-cookie";
import instance from "..";

const open_result_transaction = async (data) => {
  const res = await instance.get("/api/wallet/binaryoption/transaction/open", {
    params: {...data},
    headers: {
      Authorization: "Bearer " + Cookies.get("accessToken"),
    },
  });
  const result = await res.data;
  return result;
};

export default open_result_transaction;
