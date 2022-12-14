import React, { useState, useEffect } from "react";
import "./App.scss";
import EmployeeItem from "./employee-item";
import axios from "axios";
import Pagination from "./components/Pagination";
import EmployeeCard from "./components/EmployeeCard";
import Footer from "./components/Footer";

function App() {
  const [employees, setEmployees] = useState<EmployeeItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number | undefined>(1);
  const [totalPages, setTotalPages] = useState<number | null>();
  const [error, setError] = useState<string | undefined>();

  const URL =
    process.env.REACT_APP_EMPLOYEES_API || "https://reqres.in/api/users";

  useEffect(() => {
    axios
      .get(URL, { params: { page: currentPage } })
      .then((response) => {
        setEmployees(response.data.data);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        setEmployees([]);
        setError("Something went wrong");
      });
  }, [currentPage]);

  return (
    <div>
      <div className="container">
        <button className="header-link" onClick={(e) => setCurrentPage(1)}>
          <h1>Our People</h1>
        </button>
        <div className="employee-section">
          {employees &&
            employees.map((employee) => (
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

      <Pagination pages={totalPages} changePage={setCurrentPage} />
      <Footer />
    </div>
  );
}

export default App;
