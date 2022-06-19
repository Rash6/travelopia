import React from "react";
import { useState } from "react";
import "./display.css";
import axios from "axios";

export default function Form() {
  const [formdata, setFormdata] = useState({
    // username:"",
    // email:"",
  });
  const [aler,setAler]=useState(false)

  const handlechange = (e) => {
    //console.log(e.target.value)
    //const {id,value}=e.target;
    setFormdata({
      ...formdata,
      // [id]:value,
      [e.target.id]: e.target.value,
    });
  };

  //to submit the form

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  //  fetch("http://localhost:5000/users", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(formdata),
  //   });

  axios.post('/users', formdata)
  .then(function (response) {
    
    console.log(response);
   setAler(true)

    
  
  })
  .catch(function (error) {
    console.log(error);
    setAler(false)
   
  });
      if(aler===true){
        alert("Successfully user details are added")
      }
      else{

        alert("failed to add the user details, please fill the details")
      }
  };

  return (
    <>
    <form onSubmit={handlesubmit} style={{ width: "500px",marginLeft:"20%" }}>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name:
              </label>
            </th>
            <td>
              <input
                className="form-control"
                onChange={handlechange}
                type="text"
                placeholder="Enter your name"
                id="Name"
              />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email:
              </label>
            </th>
            <td>
              <input
                onChange={handlechange}
                className="form-control"
                type="text"
                placeholder="Enter your email"
                id="Email"
              />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Where do you want to Go?
              </label>
            </th>
            <td>
              <select onChange={handlechange} id="Country" className="form-select" aria-label="Default select example">
                <option defaultValue>Choose</option>
                <option value="India">India</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
              </select>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <label htmlFor="exampleFormControlInput1" className="form-label">
               Number of travellers:
              </label>
            </th>
            <td>
              <input
                onChange={handlechange}
                    type="number"
                    className="form-control"
                    placeholder="No of person"
                    id="No_of_passenger"
              />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <label htmlFor="exampleFormControlInput1" className="form-label">
               Budget Per Person: 
              </label>
            </th>
            <td>
              <input
                onChange={handlechange}
                  
                    className="form-control"
          type="number"
          placeholder="Budget per person in $"
          id="Currency"
              />
            </td>
          </tr>
          <tr>
            <td>
            <input className="form-control  submitForm" type="submit" value="submit"/>
            </td>
          </tr>
        </tbody>
      </table>
      
   </form>
   
 
   
   </>
   
  );
}
