import React, { useState, useEffect } from "react";
import "./App.scss";
import EmployeeItem from "./employee-item";
import axios from "axios";
import Pagination from "./components/Pagination";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const [employees, setEmployees] = useState<EmployeeItem[]>([]);
  const [error, setError] = useState<string | undefined>();
  const [page, setPage] = useState<number | null>(1);

  const URI =
    process.env.REACT_APP_EMPLOYEES_API || "https://reqres.in/api/users";

  function fetchEmployees() {
    axios
      .get(`${URI}?page=${page}`)
      .then((response) => setEmployees(response.data.data))
      .catch((err) => {
        setEmployees([]);
        setError("Something went wrong");
      });
  }
  
  async function fetchPageOne (){
    setPage(1)
  await fetchEmployees()
  }

  function fetchPageTwo (){
    setPage(2)
   return fetchEmployees()
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
            <EmployeeCard
              id={employee.id}
              avatar={employee.avatar}
              first_name={employee.first_name}
              last_name={employee.last_name}
              email={employee.email}
            />
          ))}
        </div>
      </div>
      <Pagination fetchPageOne={fetchPageOne} fetchPageTwo={fetchPageTwo} /> 
    </div>
  );
}

export default App;
