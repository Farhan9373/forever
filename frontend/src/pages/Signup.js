import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import loginicon from "../assest/signin.gif";
import imagetobase64 from "../helpers/baseto64";
import Summayapi from "../common/index";
import { toast } from "react-toastify";

const Signup = () => {
  const [showpass, setshowpass] = useState(false);
  const [cnfshowpass, setcnfshowpass] = useState(false);

  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    cnfpassword: "",
    profile: "",
  });
  const navigate = useNavigate();

  const handleonchange = (e) => {
    const { name, value } = e.target;
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handlepic = async (e) => {
    const file = e.target.files[0];
    const imagepic = await imagetobase64(file);
    setdata((preve) => {
      return {
        ...preve,
        profile: imagepic,
      };
    });
  };
  //fetching api
  const handlesumbit = async (e) => {
    e.preventDefault();
    if (data.password === data.cnfpassword) {
      const dataresponse = await fetch(Summayapi.signUp.url, {
        method: Summayapi.signUp.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responsedata = await dataresponse.json();
      if (responsedata.success) {
        toast.success(responsedata.message);
        navigate("/");
      }
      if (responsedata.error);
      {
        toast.error(responsedata.message);
      }
    } else {
      console.log("please check your password");
    }
  };
  //completed
  return (
    <section id="signup">
      <div className="container mx-auto p-4">
        <div className=" bg-white p-2 py-5 rounded-md w-full max-w-md mx-auto">
          <div className=" w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profile || loginicon} />
            </div>
            <form>
              <label>
                <input
                  type="file"
                  className="hidden"
                  onChange={handlepic}
                ></input>
                <div className="text-xs cursor-pointer tracking-tighter bg-opacity-80 bg-slate-200 py-3 text-center absolute  bottom-0 w-full  ">
                  Upload Photo
                </div>
              </label>
            </form>
          </div>

          <form className="pt-5" onSubmit={handlesumbit}>
            <div className=" grid ">
              <label className="pl-2 font-serif">Name:</label>
              <div className=" bg-slate-200 p-2 rounded-md m-1">
                <input
                  className="w-full h-full font-serif outline-none bg-transparent"
                  type="text"
                  placeholder="enter name"
                  onChange={handleonchange}
                  name="name"
                  value={data.name}
                ></input>
              </div>
              <label className="pl-2 font-serif">Email:</label>
              <div className=" bg-slate-200 p-2 rounded-md m-1">
                <input
                  className="w-full h-full font-serif outline-none bg-transparent"
                  type="email"
                  placeholder="enter email"
                  onChange={handleonchange}
                  name="email"
                  value={data.email}
                  required
                ></input>
              </div>

              <div className="">
                <label className="pl-2 font-serif">Password:</label>
                <div className=" bg-slate-200  flex p-2 rounded-md m-1">
                  <input
                    type={showpass ? "text" : "password"}
                    className="w-full h-full outline-none bg-transparent"
                    placeholder="enter password"
                    onChange={handleonchange}
                    name="password"
                    value={data.password}
                    required
                  ></input>

                  <span onClick={() => setshowpass(!showpass)}>
                    {showpass ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              <div className="">
                <label className="pl-2 font-serif">Confirm Password:</label>
                <div className=" bg-slate-200  flex p-2 rounded-md m-1">
                  <input
                    type={cnfshowpass ? "text" : "password"}
                    className="w-full h-full outline-none bg-transparent"
                    placeholder="enter password"
                    onChange={handleonchange}
                    name="cnfpassword"
                    value={data.cnfpassword}
                    required
                  ></input>

                  <span onClick={() => setcnfshowpass(!cnfshowpass)}>
                    {cnfshowpass ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
            </div>
            <button className=" bg-red-600 mt-4 p-2 w-full max-w-[150px] m-auto hover:scale-110 transition-all block text-white rounded-full">
              Signup
            </button>
          </form>
          <p className="mt-3 text-center">
            Already have account?
            <Link to="/login">
              <span className="text-red-600">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
