import { useCallback, useEffect, useState } from "react";
import Crud from "./Crud";
import { CRUD_API } from "./constant";
const AddUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: '',
    mobile: null,
    DOB: null,
    gender: "",
    country: "",
  });

// console.log(userData);
  const apiUrl =
    `https://crudcrud.com/api/${CRUD_API}/UserDetails`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleCreateUser = () => {
    fetch(apiUrl, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'POST',
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    // .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  };
  
  const [toogle, setToggle] = useState(false)
  const handleToggle=()=>{
    setToggle(true)
      }
      useEffect(()=>{
        handleCreateUser()
          },[])
  return (
  <>
    { toogle ? <Crud/>: <div className=" w-[622px]  flex flex-col border-2 p-6 rounded-2xl  ">
      <div className=" flex justify-between w-full font-bold text-2xl">
        <h1>Add New Employee</h1>
        <h1 onClick={handleToggle} className=" cursor-pointer mt-2">❌</h1>
      </div>
      <div>
        <div>
          <h1 className="text-sm mb-3">Full Name</h1>
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Enter full name"
            name="name"
            value={userData.name}
            className=" p-2 pl-5 border w-full rounded-xl mb-2"
          />
        </div>
        <div>
          <h1 className="text-sm mb-2">Email Address</h1>
          <input
            onChange={handleInputChange}
            type="text"
            name="email"
            value={userData.email}
            placeholder="Enter Email Address"
            className=" p-2 pl-5 border w-full rounded-xl mb-2"
          />
        </div>
        <div>
          <h1 className="text-sm mb-2">Mobile Number</h1>
          <input
            onChange={handleInputChange}
            type="text"
            name="mobile"
            value={userData.mobile}
            placeholder="Enter Mobile Number"
            className=" p-2 pl-5 border w-full rounded-xl mb-2"
          />
        </div>

        <div>
          <h1 className="text-sm mb-2">Date Of Birth</h1>
          <input
            onChange={handleInputChange}
            value={userData.DOB}
            name="DOB"
            type="date" // Change type to "date"
            placeholder="Enter Date Of Birth"
            className="p-2 pl-5 border w-full rounded-xl mb-2"
          />
        </div>
        <div>
          <h1 className="text-sm mb-2">Gender</h1>
          <select // Change to select element
            onChange={handleInputChange}
            name="gender"
            className="p-2 pl-5 border w-full rounded-xl mb-2"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <h1 className="text-sm mb-2">Country</h1>
          <select // Change to select element
            onChange={handleInputChange}
            name="country"
            className="p-2 pl-5 border w-full rounded-xl mb-2"
          >
            <option value="india">INDIA</option>
            <option value="usa">USA</option>
            <option value="russia">RUSSIA</option>
            {/* Add options for countries */}
          </select>
        </div>
      </div>
      <div className=" flex justify-end mt-2">
        <button
          onClick={()=>handleCreateUser()}
          className="flex text-white bg-purple-800 px-6 py-3 rounded-xl"
        >
          Add Employee
        </button>
      </div>
    </div>}
  </>
  );
};

export default AddUser;
