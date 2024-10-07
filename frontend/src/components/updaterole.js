import React, { useState } from "react";
import  Role  from "../common/role";
import { IoClose } from "react-icons/io5";
import Summayapi from "../common";
import { toast } from "react-toastify";
const Updaterole = ({name,email,userId,role,closepop,callFunc}) => {
  const [userrole,setuserrole]=useState(role)
  
  const handleclick=(e)=>{
    setuserrole(e.target.value);
    console.log(e.target.value)
  }
  const Updateuser=async()=>{
    const fetchresponse = await fetch(Summayapi.updateuser.url,{
     method:Summayapi.updateuser.method,
     credentials:"include",
     headers:{
      "content-type":"application/json"
     },
     body:JSON.stringify({
      userId : userId,
      role:userrole
     })
    })

    const responsedata=await fetchresponse.json()
    
    if(responsedata.success){
      toast(responsedata.message);
      closepop()
    }
    console.log("role updated",responsedata)
  }
  
  return (
    <div className="z-10 w-full h-full flex justify-center items-center  bg-slate-200 bg-opacity-30">
      <div className="  bg-white mt-5 mx-auto shadow-md p-4 w-full max-w-sm">
        <div className="">
          <button onClick={closepop} className=" p-1 bg-red-500 rounded-full mb-2" >
            <IoClose />
          </button>
        </div>
        <h1 className="text-lg font-serif ">Change User Role</h1>
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <div className=" flex justify-between">
          <p className=" font-serif">Role:</p>
          <select className=" border px-4 py-1" value={userrole} onChange={handleclick}>
            {Object.values(Role).map((el) => {
              return (
                <option values={el} key={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>
        <button onClick={Updateuser} className=" rounded-md  hover:bg-green-500 bg-green-300 border-black border p-1 ml-32 mt-2 font-bold">
          Change Role
        </button>
      </div>
    </div>
  );
};

export default Updaterole;
