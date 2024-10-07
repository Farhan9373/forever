import React, { useContext, useState } from "react";
import logo from "../assest/banner/logo.png";
import { FaSearch, FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Summayapi from "../common";
import Role from "../common/role";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userslice";
import context from "../context";


const Headers = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  
  
  const [menudisplay, setMenu] = useState(false);
  const Context=useContext(context)
  const searchinput=useLocation()
  const URLSearch=new URLSearchParams(searchinput?.search)
  const searchQuery=URLSearch.getAll("q")
  const [search,setsearch]=useState(searchinput?.search?.split("=")[1])

  const togglegrp = () => {
    setMenu(!menudisplay);
  };

  // Handling logout
  const navigate = useNavigate();
  const handlelogout = async () => {
    const fetchdata = await fetch(Summayapi.Logout.url, {
      method: Summayapi.Logout.method,
      credentials: "include",
    });
    const data = await fetchdata.json();

    if (data.success) {
      toast(data.message);
      dispatch(setUserDetails(null));
      navigate("/login");
    }
    if (data.error) {
      toast(data.message);
    }
  };
  const handlesearch=(e)=>{
    const{value}=e.target
    setsearch(value)
    if(value){
     navigate(`/search?q=${value}`)
    }
    else{
      navigate("/search")
    }
  }


  return (
    <header className="h-16 shadow-md bg-white fixed w-full z-40">
      <div className="h-full container mx-auto flex justify-between items-center px-4">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" width={100} height={50} />
          </Link>
        </div>
        <div className="hidden lg:flex w-full justify-between max-w-sm items-center border rounded-full focus-within:shadow pl-2">
          <input
            className="w-full outline-none"
            type="text"
            placeholder="search product here..." onChange={handlesearch} value={search}
          />
          <div className="flex text-lg min-w-[50px] h-8 bg-red-600 items-center justify-center rounded-r-full">
            <FaSearch />
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer relative">
            <Link to="/cart">
            <span>
              <FaShoppingCart />
            </span>
            </Link>
            {
              user?._id &&(
                <div className="absolute bg-red-600 text-white h-5 rounded-full flex items-center justify-center p-1 -top-2 -right-1">
                <p className="text-xs">{Context?.cartcount}</p>
              </div>
              )
            }
           
          </div>

          <div className="relative group flex justify-center">
            <div className="text-3xl cursor-pointer">
              {user?.profile ? (
                <img
                  src={user.profile}
                  className="w-10 h-10 rounded-full"
                  onClick={togglegrp}
                  alt={user.name}
                />
              ) : (
                <FaRegUserCircle />
              )}
            </div>

            {/* Popup logic */}
            {menudisplay && (
              <div className="shadow-lg rounded absolute bg-white bottom-0 top-11 h-fit p-4">
                <nav>
                  {
                    user?.role===Role.ADMIN &&(

                  <Link
                    to="/admin/all-products"
                    className="whitespace-nowrap md:block hidden  hover:bg-slate-100 p-1 font-medium "
                  onClick={togglegrp} >
                    Admin Panel
                  </Link>
                    )
                  }
                </nav>
              </div>
            )}
          </div>

          <div>
            {user?._id ? (
              <button
                onClick={handlelogout}
                className="bg-red-600 p-1 hover:bg-red-700 text-white rounded-md"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-red-600 p-1 hover:bg-red-700 text-white rounded-md">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
