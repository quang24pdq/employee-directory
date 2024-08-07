import React, { useState, useEffect } from 'react';
import { getEmployees } from './EmployeeService';
import Button from '@mui/material/Button';
import EmployeeList from './EmployeeList';
import EmployeeDetailDialog from './EmployeeDetailDialog';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={fetchEmployees}>
        Refresh
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setDialogOpen(true)}
        disabled={!selectedEmployee}
      >
        View employee
      </Button>
      <EmployeeList
        employees={employees}
        onSelectEmployee={handleSelectEmployee}
        selectedEmployee={selectedEmployee}
      />
      <EmployeeDetailDialog
        employee={selectedEmployee}
        open={dialogOpen}
        onClose={handleDialogClose}
      />
    </div>
  );
};

export default App;
