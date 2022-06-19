import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../components/display.css";
export default function Display() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios({
      url: "/users",
    })
      .then((res) => {
        
        console.log(res.data.user);
        setList(res.data.user);
        
      })
      .catch((err) => {
        
        console.log(err);
      });
  }, []);

  return (
    <div className="main">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">COUNTRY</th>
            <th scope="col">NUMBER OF TRAVELLERS</th>
            <th scope="col">BUDGET PER PERSON</th>
          </tr>
        </thead>
        <tbody>
          {list.map((ele,index) => (
            <tr key={ele._id}>
              
              <th scope="row">{index+1}</th>
              <td>{ele.Name}</td>
              <td>{ele.Email}</td>
              <td>{ele.Country}</td>
              <td>{ele.No_of_passenger}</td>
              <td> $ {ele.Currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
