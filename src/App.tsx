import React, {useState} from 'react';
import './App.css';
import EmployeeItem from './employee-item'
import axios from 'axios'

 

function App() {
  const URI = process.env.REACT_APP_EMPLOYEES_API || 'https://reqres.in/api/users'

const [employees, setEmployees] = useState<EmployeeItem[]>([])
const [error, setError] = useState<string | undefined>()

axios.get(URI)
  .then(response => setEmployees(response.data.data))
  .catch(err => {
    setEmployees([]);
    setError('Somethin went wrong');
  })
  

  return (
    <div className="App">
      <header className="App-header">
      {employees.map(employee => 
   
        <p key={employee.id}>{employee.email}</p>
      
      )}
      
      </header>
    </div>
  );
}

export default App;
