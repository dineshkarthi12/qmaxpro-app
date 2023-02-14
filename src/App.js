import React, { useState } from 'react';
import AddUserForm from './forms/AddUserForm';
import UserTable from './tables/UserTable';

function App() {



   const usersData = [
         {id:1,name:"Logesh" ,username:"Loki"},
   ];
       
       const addUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users,user])
       }




      const [users,setUsers] = useState(usersData);

     

  return (
    <div className="container">
        <h1>CRUD app</h1>
        <div className="flex-row">
        <div className="flex-large">
          <div>
        
            <h2>Add user</h2>
              <AddUserForm addUser={addUser}/>
              </div>
          
        </div>
        <div className="flex-large">
              <h2>View user</h2>
              <UserTable  users={users}/>
        </div>
        </div>
    </div>
  );
}

export default App;
