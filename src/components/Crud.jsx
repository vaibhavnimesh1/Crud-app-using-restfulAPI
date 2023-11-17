import { useEffect, useState } from "react";
import AddUser from "./AddUser";
import { CRUD_API } from "./constant";

const Crud = () => {
  useEffect(() => {
    getUserFetch();
  }, []);

  const [dataa, setdataa] = useState([]);
  const [toogle, setToggle] = useState(false);

  const getUserFetch = async () => {
    const data = await fetch(
      `https://crudcrud.com/api/${CRUD_API}/UserDetails`
    );
    const json = await data.json();
    setdataa(json);
    // console.log(json);
  };
  // console.log(dataa);
  const handleToggle = () => {
    setToggle(true);
  };
  const handleEdit = (item) => {
    fetch(`https://crudcrud.com/api/${CRUD_API}/UserDetails/${item?._id}`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "PUT",
      body: JSON.stringify({
        name: "Write Tests",
      }),
    }).then((response) => console.log(response));
    window.location.reload(false);

  };
  const handleDelete = (item) => {
    fetch(`https://crudcrud.com/api/${CRUD_API}/UserDetails/${item?._id}`, {
      method: "DELETE",
    }).then((response) => console.log(response));
    window.location.reload(false);
  };

  if (!dataa) return;
  return (
    <>
      {!toogle ? (
        <div className=" w-[1500px] h-screen p-10">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">Employee Management </h1>
            <button
              onClick={handleToggle}
              className="flex text-white bg-purple-800 px-6 py-3 rounded-xl"
            >
              Add Employee
            </button>
          </div>
          <div>
            <table className="mt-5 rounded-full w-full">
              <thead className="mt-5 rounded-full bg-gray-100 w-full ">
                <tr className="p-4 rounded-full px-2 ">
                  <th className="p-2 rounded-l-full overflow-hidden">ID</th>
                  <th>Employee Name</th>
                  <th>Email Address</th>
                  <th>Mobile Number</th>
                  <th>Date Of Birth</th>
                  <th>Gender</th>
                  <th>Country</th>
                  <th className="w-0"></th>
                  <th className="w-0"></th>
                </tr>
              </thead>
              <tbody className="mt-5 rounded-full  w-full  p-1 items-center">
                {dataa.map((item) => {
                  return (
                    <tr className=" h-1" key={item._id}>
                      <td className="text-center w-2 py-3 ">{item._id}</td>
                      <td className="text-center w-2 py-3">{item.name}</td>
                      <td className="text-center w-2 py-3">{item.email}</td>
                      <td className="text-center w-2 py-3">{item.mobile}</td>
                      <td className="text-center w-2 py-3">{item.DOB}</td>
                      <td className="text-center w-2 py-3">{item.gender}</td>
                      <td className="text-center w-2 py-3">{item.country}</td>
                      <td
                        className="text-center w-2 py-3 cursor-pointer"
                        onClick={() => handleEdit(item)}
                      >
                        ✎
                      </td>
                      <td
                        className="text-center w-2 py-3 cursor-pointer"
                        onClick={() => handleDelete(item)}
                      >
                        ❌
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <AddUser />
      )}
    </>
  );
};

export default Crud;
