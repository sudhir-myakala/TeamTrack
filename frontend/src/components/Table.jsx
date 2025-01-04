import React, { useState, useEffect } from 'react';
import empService from '../service/emp.service';
import {Link} from "react-router-dom"
import { FaSortNumericDown } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Table = () => {
  const [empList, setEmpList] = useState([]);
  const [msg,setMsg]=useState([]);

  useEffect(() => {
    init();
  }, []);

  const init=()=>{
    empService
    .getAllEmp()
    .then((res) => {
      console.log(res.data);
      setEmpList(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

const deleteEmp = (id)=>{
  empService.deleteEmp(id).then((res)=>{
    setMsg("deleted Successfully");
    init();

  }).catch((error)=>{
    console.log(error);
  })
}


  return (
    <>
    {
      msg && <center><p className="text-danger fs-3" >{msg}</p></center>
    }
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"><FaSortNumericDown /> SL No.</th>
              <th scope="col"><IoPersonCircleSharp /> First Name</th>
              <th scope="col"><IoPersonCircleSharp /> Last Name</th>
              <th scope="col"><MdEmail /> Email</th>
              <th scope="col"><FaMapLocationDot /> Location</th>
              <th scope="col"><BsCashCoin /> Salary</th>
              <th scope="col"><FaScrewdriverWrench /> Action</th>
            </tr>
          </thead>
          <tbody>
            {empList.map((e, num) => (
              <tr key={num}>
                <th scope="row">{num + 1}</th>
                <td>{e.firstname}</td>
                <td>{e.lastname}</td>
                <td>{e.email}</td>
                <td>{e.address}</td>
                <td>{e.salary}</td>
                <td>
                  <div>
                    <Link to={"editEmp/"+e.id} type="button" className="btn btn-primary">
                    <FaUserEdit /> Edit
                    </Link>
                    <a onClick={()=>deleteEmp(e.id)

                    }
                      type="button"
                      className="btn btn-danger ms-2"
                    >
                     <MdDelete /> Delete
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
