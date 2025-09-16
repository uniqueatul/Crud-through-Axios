// import React, { useState } from 'react'
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';

// function Create() {
//      const [name ,setname] = useState('');
//      const [email , setemail] = useState('');
//      const history = useNavigate();

//      const header = {"Access-control-Allow-origin": "*"};

//      const handlecreate =(e) =>{
//         e.preventDefault();
//         console.log("clicked");
//         axios.post("https://68c489ab81ff90c8e61c80df.mockapi.io/fakeData" , {
          
//             name: name ,
//             email: email,
//             header,
//         })

//         .then(() =>{ 
            
//         history("/read");
//             alert("producr created");
//             setemail("");
//             setname("");
//             window.location.reload();
//         });
 

        
//      };


//   return (

//     <div> 
        
//         <h1 style={{color: "red"}}>CREATE</h1>

//         <div>
//             <h4>Name</h4>
            
//             <input type="text" 
//             placeholder='Enter name'
//             value={name}
//             onChange={(e) =>setname (e.target.value)}
            

//         />
//         </div>
//         <br />
//         <br />
//         <br />

//         <div>
//             <h4>Email</h4>
//             <div>
//                 <input type="email"
//                 placeholder='Enter email'
//                 value={email}
//                 onChange={(e) =>setemail (e.target.value)}
//                 />
//             </div>
           
           

          
          
           
           


//             <br />
//             <button onClick={handlecreate}>Add</button>
//         </div>







//     </div>
//   )
// }

// export default Create










import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const headers = { "Access-Control-Allow-Origin": "*" };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://68c489ab81ff90c8e61c80df.mockapi.io/fakeData",
        { name, email },
        { headers }
      );

      alert("Product created successfully ");
      setName("");
      setEmail("");
      navigate("/read"); // redirect to Read page
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Something went wrong ");
    }
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>CREATE</h1>

      <div>
        <h4>Name</h4>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <br />

      <div>
        <h4>Email</h4>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <br />

      <button onClick={handleCreate}>Add</button>
    </div>
  );
}

export default Create;
