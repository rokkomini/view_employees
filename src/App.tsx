import React, { useState, useEffect } from "react";
import "./App.scss";
import EmployeeItem from "./employee-item";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState<EmployeeItem[]>([]);
  const [error, setError] = useState<string | undefined>();

  const URI =
    process.env.REACT_APP_EMPLOYEES_API || "https://reqres.in/api/users";

  function fetchEmployees() {
    axios
      .get(URI)
      .then((response) => setEmployees(response.data.data))
      .catch((err) => {
        setEmployees([]);
        setError("Somethin went wrong");
      });
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Our People</h1>
        <div className="employee-section">
          {employees.map((employee) => (
            <div key={employee.id} className="card">
              <img src={employee.avatar} alt={`${employee.first_name} ${employee.last_name}`} />
              <p>{employee.first_name} {employee.last_name}</p>
              <p >{employee.email}</p>
            </div>
          ))}
        </div>
        
      </div>
      <div className="pagination">pages</div>
    </div>
  );
}

export default App;
