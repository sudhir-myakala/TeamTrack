import React, { useState } from 'react'
import empService from '../service/emp.service';

const AddEmp = () => {

    const [emp,setEmp]=useState({
        firstName:"",
        lastName:"",
        email:"",
        address:"",
        salary:""
    });

    const[msg,setMsg]=useState("");

    const handleChange=(e)=>{
        const value=e.target.value;
        setEmp({
            ...emp,[e.target.name]:value
        });
    };

const SubmitEmp=(e)=>{
    e.preventDefault();
    empService.saveEmp(emp).then((res)=>{
        setMsg("Employee Data Added Successfully");
        setEmp({
            firstname:"",
            lastname:"",
            email:"",
            address:"",
            salary:""
        })
    }).catch((error)=>{
        console.log(error);
    })
}


  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header text-center fs-2">Employee Data Insertion</div>

                    {
                        msg && <center><p className="text-success fs-5 mt-1">
                        {msg}
                    </p></center>
                    }

                    <div className="card-body">

                        <form onSubmit={(e)=>SubmitEmp(e)} >
                            <div className="mb-3">
                                <label>Enter First Name</label>
                                <input type="text" className="form-control" name="firstname" value={emp.firstname} onChange={(e)=>handleChange(e)} />
                            </div>

                            <div className="mb-3">
                                <label>Enter Last Name</label>
                                <input type="text" className="form-control" name="lastname" value={emp.lastname} onChange={(e)=>handleChange(e)}/>
                            </div>

                            <div className="mb-3">
                                <label>Enter Email</label>
                                <input type="email" className="form-control" name="email" value={emp.email} onChange={(e)=>handleChange(e)}/>
                            </div>

                            <div className="mb-3">
                                <label>Enter address</label>
                                <input type="text" className="form-control" name="address" value={emp.address} onChange={(e)=>handleChange(e)}/>
                            </div>

                            <div className="mb-3">
                                <label>Enter salary</label>
                                <input type="number" className="form-control" name="salary" value={emp.salary} onChange={(e)=>handleChange(e)} />
                            </div>

                                    <div className="text-center ">
                                        <button type="submit" className="btn btn-success mx-3 ">Submit</button>
                                        <input type="reset" className="btn btn-danger" value="Reset"/>
                                    </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AddEmp
