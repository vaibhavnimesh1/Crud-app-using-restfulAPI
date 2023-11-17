import  { useState } from 'react';

const CreateUser = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    
  });
  const apiUrl = 'https://crudcrud.com/api/c7278e1f5bd34ef393e06ae6df48caec/user';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateUser = async () => {
    fetch(apiUrl, {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify(
  //   {
  //   name: 'Write Tests',
  //   done: false
  // }
  userData
  )
})
.then(response => response.json())
.then(data => console.log(data))
  };

  return (
    <div>
      <h2>Create User</h2>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
        </label>
      </div>
      {/* Add other input fields for additional user properties */}
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
};

export default CreateUser;
