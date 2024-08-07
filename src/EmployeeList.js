import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const EmployeeList = ({ employees, onSelectEmployee, selectedEmployee }) => {
  return (
    <List>
      {employees.map((employee) => (
        <ListItem
          button
          key={employee.id}
          onClick={() => onSelectEmployee(employee)}
          selected={selectedEmployee && selectedEmployee.id === employee.id}
        >
          <ListItemText primary={employee.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default EmployeeList;
