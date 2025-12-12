


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

function Read() {

  const [data , setData] = useState([]);

  useEffect(() =>{

    axios.get('https://68c489ab81ff90c8e61c80df.mockapi.io/fakeData')
    .then((res) =>{
      setData(res.data);
    
    })
    .catch((err) => console.error('something went wrong' , err))
    
    
  } , [])


  return (

    <div><h3>Read</h3>
    
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>email</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        
        {data.map((user) => 
        <tr key={user.id}>
          <td>{user.id}</td>

          <td>{user.name}</td>
           <td>{user.email}</td>
            
            <td>
              {/* <button onSubmit={() => Navigate(`/update/${user.id}`)}>update</button> */}
              <Link to={`/delete/${user.id}`}> <button>delete</button></Link>
               <Link to={`/update/${user.id}`}> <button>update</button></Link>

            </td>
            
          

        </tr>
        
        
        )}
      </tbody>


    </table>

    <Link to={'/'}>add data</Link>
    
    </div>
  )
}

export default Read
