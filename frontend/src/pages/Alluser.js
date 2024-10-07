import React, { useState, useEffect } from 'react';
import Summayapi from '../common';
import { toast } from 'react-toastify';
import moment from "moment";
import { FaUserEdit } from "react-icons/fa";
import Updaterole from '../components/updaterole';

const Alluser = () => {
  const [AllUser, setAllUsers] = useState([]);
  const [openUpdaterole, setopenupdaterole] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    email:"",
    name:"",
    role:"",
    _id:""

  }); // to store selected user data

  const fetchAllUsers = async () => {
    const fetchData = await fetch(Summayapi.alluser.url, {
      method: Summayapi.alluser.method,
      credentials: 'include',
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      setAllUsers(dataResponse.data);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div >
        <div className={`${openUpdaterole ? 'blur-md' : ''}`}>
      <table className='w-full usertable'>
        <thead className=' border border-white bg-black text-white'>
          <tr>
            <th>Sr</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {AllUser.map((el, index) => (
            <tr key={el.email}>
              <td>{index + 1}</td>
              <td>{el?.name}</td>
              <td>{el?.email}</td>
              <td>{el?.role}</td>
              <td>{moment(el?.updatedAt).format("ll")}</td>
              <td>
                <button
                  className='hover:bg-green-200 p-2 bg-green-100 rounded-full cursor-pointer'
                  onClick={() => {
                    setSelectedUser(el)
                    setopenupdaterole(true);
                    // set the selected user data
                  }}>
                  <FaUserEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {openUpdaterole && selectedUser && (
        <Updaterole
          name={selectedUser.name}
          email={selectedUser.email}
          role={selectedUser.role}
          userId={selectedUser._id}
          callFunc={fetchAllUsers}
          closepop={() => setopenupdaterole(false)}// pass the close function
        />
      )}
      </div>
  );
};

export default Alluser;
