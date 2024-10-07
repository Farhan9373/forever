import Summayapi from "../common";
import { toast } from "react-toastify";
export const addtocart = async (e, id) => {
  e?.stopPropagation();
  e?.preventDefault();
  const response = await fetch(Summayapi.addtocart.url, {
    method: Summayapi.addtocart.method,
    credentials: "include",
    headers: {
      "content-type": "application/json"
      
    },
    body: JSON.stringify({ productId: id }),
  });
  const responseData = await response.json();
  if (responseData.success) {
    toast.success(responseData.message);
  }
  if (responseData.error) {
    toast.error(responseData.message);
  }
  return responseData

};
