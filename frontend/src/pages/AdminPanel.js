import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Role from "../common/role";
import { FaRegUserCircle } from "react-icons/fa";
const AdminPanel = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();
  useEffect(() => {
    if(user?.role !== Role.ADMIN){
        navigate("/")
    }
    // else{
    //   navigate("all-products")
    // }
  }, [user]);

  return (
    <div className="min-h-[calc(100vh-100px)] md:flex mt-1 hidden">
      <aside className="bg-white min-h-full w-full max-w-80 shadow-md border border-black">
        <div className="h-32 flex   justify-center items-center ">
          <div className="relative group flex justify-center">
            <div className="text-6xl cursor-pointer mt-1">
              {user?.profile ? (
                <img
                  src={user.profile}
                  className="w-20 h-20 rounded-full"
                  alt={user.name}
                />
              ) : (
                <FaRegUserCircle />
              )}
            <p className="text-center text-lg capitalize font-semibold font-serif">{user?.name}</p>
            <p className="text-center text-sm  text-gray-500">{user?.role}</p>
            </div>


          </div>
        </div>
            <div>
            <nav className='grid p-4'>
                        <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-100'>All Users</Link>
                        <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-100'>All product</Link>
                    </nav>
            </div>
      </aside>
      <main className=" w-full h-full p-2">
        <Outlet/>
      </main>
    </div>
  );
};

export default AdminPanel;
