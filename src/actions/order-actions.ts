import { ObjectID } from 'bson';
import express from 'express'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { EmitFlags } from 'typescript'
import { Reservation } from '../db/DTO/reservation-model';
import { Table } from '../db/DTO/table-model';
import { ObjectId } from 'mongodb';
import { TableActions } from './table-actions';
import { Order } from '../db/DTO/order-model';
import { Dish } from '../db/DTO/dish-model';
import { Employee } from '../db/DTO/employee-model';

export class OrderActions {

    async saveOrder(req: Request, res: Response) {
        const id = req.params.id;

        const employee= req.body.employee;
        const dishes= req.body.dishes;
        const isReady= req.body.isReady;
        const reservation= req.body.reservation;
        const price= req.body.price;

        const newOrder = new Order({
            employee: employee,
            dishes: dishes,
            isReady: isReady,
            reservation: reservation,
            price: price,
        })

        

        await newOrder.save();

        const dishesById = Dish.updateOne({_id: newOrder?.dishes},{$set:{order: newOrder.id}});

        const reservationId = Reservation.updateOne({_id: newOrder?.reservation},{$set:{order: newOrder.id}})

        const employeeId = Employee.updateOne({_id: newOrder?.employee},{$set:{order: newOrder.id}})

        res.status(201).json(newOrder);
    }
    async getAllOrders(req: Request, res: Response) {
        const orders = await Order.find()
        .populate//("dishes")
        ([{
            path: 'dishes dishes',
            populate: { path: 'products'}},
            {
            path: 'employee'
            },
            {
            path: 'reservation',
            populate: { path: 'table'}
        }]);
        console.log("All orders", orders);

        res.status(201).json(orders);
    }

    async getReadyOrders(req: Request, res: Response) {
        const doc = Order.find({}, (err: any, doc: any) => {

            let array: Object[] = [];
    
            doc.forEach((isReady: any) => {
                if(isReady.isReady == true){
                    array.push(isReady);
                }
            })
            res.status(200).json(array);
    })
}

async getNotReadyOrders(req: Request, res: Response) {
    const doc = Order.find({}, (err: any, doc: any) => {

        let array: Object[] = [];

        doc.forEach((isReady: any) => {
            if(isReady.isReady == false){
                array.push(isReady);
            }
        })
        res.status(200).json(array);
})
}


    async getOrder(req: Request, res: Response){

        const id = req.params.id;
  
        const order = await Order.findOne({_id:id})
        .populate//("dishes")
        ([{
            path: 'dishes dishes',
            populate: { path: 'products'}},
            {
            path: 'employee'
            },
            {
            path: 'reservation',
            populate: { path: 'table'}
        }]);
  
        res.status(200).json(order);
      }
  
      async updateOrder(req: Request, res: Response) {
  
        const id = req.params.id;
        const employee= req.body.employee;
        const dishes= req.body.dishes;
        const isReady= req.body.isReady;
        const price= req.body.price;
  
        const order = await Order.findOne({_id: id});
  
        if(order) {
            order.employee = employee;
            order.dishes = dishes;
            order.isReady = isReady;
            order.price = price;
          await order.save();
          res.status(201).json(order);
        }
      }
  
      async deleteOrder(req: Request, res: Response) {
        const id = req.params.id;
        await Order.deleteOne({ _id:id });
  
        res.sendStatus(204);  
      }
}

module.exports = new OrderActions();