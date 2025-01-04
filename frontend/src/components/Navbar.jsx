import React from 'react';
import {Link} from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="bg-warning  ">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none ms-4">
              <h3 className="text-light fs-1 ">Team Tracker</h3>
            </Link>
          </div>

          <ul className="nav col-9 col-md-auto mb-2 justify-content-center mb-md-0 me-5">
            <li><Link to="/" className="nav-link px-2 text-light fs-4"><FaHome /> Home</Link></li>
            <li><Link to="/addEmp" className="nav-link px-2 text-light fs-4"><IoPersonAdd /> Add Employee</Link></li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Navbar;
