import express, { Router } from 'express'
import { Request, Response } from 'express'
const route = express.Router();
const employeesActions = require('../actions/employee-actions')

route.get('/employees', employeesActions.getAllEmployees);

route.get('/employees/:id', employeesActions.getEmployee);

route.post('/employees', employeesActions.saveEmployee);

route.put('/employees/:id', employeesActions.updateEmployee);

route.delete('/employees/:id', employeesActions.deleteEmployee);

module.exports = route;