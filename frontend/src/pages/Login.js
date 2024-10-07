import React, { useContext, useState } from "react";
import loginicon from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Summayapi from "../common";
import { toast } from "react-toastify";
import context from "../context";
const Login = () => {
  const [showpass, setshowpass] = useState(false);
  const [data,setdata]=useState({
    email:"",
    password:""

})
const navigate=useNavigate();
const {fetchuserdetail,fetchusercart}= useContext(context)

const handleonchange=(e)=>{
  const{name,value}=e.target
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
const handlesumbit=async(e)=>{
  e.preventDefault();
  const dataresponse = await fetch(Summayapi.login.url, {
    method: Summayapi.login.method,
    credentials:'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responsedata = await dataresponse.json();
  if(responsedata.success){
    toast.success(responsedata.message)

      navigate("/")
      fetchuserdetail()
      fetchusercart()
  }
  if(responsedata.error){
    toast.error(responsedata.error);
}
}
console.log("data login",data);
  return (
    <section id="login">
      <div className="container mx-auto p-4 overflow-hidden">
        <div className=" bg-white p-2 py-5  w-full max-w-md mx-auto rounded-md over overflow-hidden">
          <div className=" w-20 h-20 mx-auto rounded-full overflow-hidden">
            <img src={loginicon} />
          </div>

          <form className="pt-5" onSubmit={handlesumbit}>
            <div className=" grid ">
              <label className="pl-2 font-serif">Email:</label>
              <div className=" bg-slate-200 p-2 rounded-md m-1">
                <input
                  className="w-full h-full font-serif outline-none bg-transparent"
                  type="email"
                  placeholder="enter email" onChange={handleonchange} name="email" value={data.email}
                ></input>
              </div>
              <div className="">
                <label className="pl-2 font-serif">Password:</label>
                <div className=" bg-slate-200  flex p-2 rounded-md m-1">
                  <input
                    type={showpass ? "text" : "password"}
                    className="w-full h-full outline-none bg-transparent"
                    placeholder="enter password" onChange={handleonchange} name="password" value={data.password}
                  ></input>

                  <span onClick={() => setshowpass(!showpass)}>
                    {showpass ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
               <Link to='/forgot' className="font-serif mt-1 pl-2 tracking-tighter ml-auto block underline hover: text-red-500">
               
               Forgot Password?
               </Link>
              </div>
            </div>
                <button className=" bg-red-600 mt-4 p-2 w-full max-w-[150px] m-auto hover:scale-110 transition-all block text-white rounded-full">Login</button>
          </form>
          <p className="mt-3 text-center">dont have account?<Link to="/signup"><span className="text-red-600">Signup</span></Link></p>
        </div>
      </div>
    </section>
  );
};

export default Login;
