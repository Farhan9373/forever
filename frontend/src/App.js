import { Outlet } from "react-router-dom";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Summayapi from "./common";
import context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userslice";
function App() {
  const dispatch = useDispatch();
  const [cartcount,setcartcount]=useState(0)


  const fetchuserdetail = async () => {
    const dataresponse = await fetch(Summayapi.current_user.url, {
      method: Summayapi.current_user.method,
      credentials: "include",
    });

    const dataapi = await dataresponse.json();

    if (dataapi.success) {
      dispatch(setUserDetails(dataapi.data));
    }
  };
  const fetchusercart=async()=>{
    const dataresponse = await fetch(Summayapi.cartitem.url, {
      method: Summayapi.cartitem.method,
      credentials: "include",
    });

    const dataapi = await dataresponse.json();
    console.log("dataApi:", dataapi);
    setcartcount(dataapi?.data?.count)

  }
  useEffect(() => {
    // user detail
    fetchuserdetail();
    // user cart detail
    fetchusercart();
   
  }, []);

  return (
    <>
      <context.Provider
        value={{
          fetchuserdetail,
          cartcount,
          fetchusercart
        }}
      >
        <ToastContainer
          position='top-center' />

        <Headers />
        <main className="min-h-[calc(100vh-100px)] pt-16">
          <Outlet />
        </main>
        <Footer />
      </context.Provider>
    </>
  );
}

export default App;
