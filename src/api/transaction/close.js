import Cookies from "js-cookie";
import instance from "..";

const close_result_transaction = async (data) => {
  const res = await instance.get("/api/wallet/binaryoption/transaction/close", {
    params: {...data},
    headers: {
      Authorization: "Bearer " + Cookies.get("accessToken"),
    },
  });
  const result = await res.data;
  return result;
};

export default close_result_transaction;
