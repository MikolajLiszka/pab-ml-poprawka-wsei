import express from 'express'
import {Request, Response} from 'express'
import mongoose from "mongoose";
import { EmitFlags } from 'typescript';
import { Employee } from '../db/DTO/employee-model';

export class EmployeeActions {

    async saveEmployee(req: Request, res: Response) {
        const name = req.body.name;
        const surname = req.body.surname;
        const position = req.body.position;

        const newEmployee = new Employee({
            name: name,
            surname: surname,
            position: position
        });

        await newEmployee.save();

        res.status(201).json(newEmployee);
    }

    async getAllEmployees(req: Request, res: Response) {
        const doc = Employee.find({}, (err: any, doc: any) => {
            console.log(doc);
            res.status(200).json(doc);
        });
    }

    async getEmployee(req: Request, res: Response) {

        const id = req.params.id;
        const employee =  await Employee.findOne({ _id: id });

        res.status(200).json(employee);
    }

    async getAllWaiters(req: Request, res: Response) {
        const doc = Employee.find({}, (err: any,doc: any) => {

            let array: Object[] = [];

            doc.forEach((waiters: any) => {
                if(waiters.position == "Kelner") {
                    array.push(waiters);
                }
            });
            res.status(200).json(array);
        })
    }

    async updateEmployee(req: Request, res: Response) {

        const id = req.params.id;

        const name = req.body.name;
        const surname = req.body.surname;
        const position = req.body.position;

        const employee = await Employee.findOne({ _id: id });

        if(employee) {
            employee.name = name;
            employee.surname = surname;
            employee.position = position;
            await employee.save();
            res.status(201).json(employee);
        }
    }

    async deleteEmployee(req: Request, res: Response) {
        const id = req.params.id;
        await Employee.deleteOne({ _id: id });

        res.sendStatus(204);
    }

}

module.exports = new EmployeeActions();