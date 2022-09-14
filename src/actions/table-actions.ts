import { table } from 'console';
import express from 'express'
import {Request, Response} from 'express'
import { Db } from 'mongodb';
import mongoose, { Collection } from 'mongoose'
import { Restaurant } from '../db/DTO/restaurant-model';
import { Table } from '../db/DTO/table-model'
import { readlink } from 'fs';
import { Reservation } from '../db/DTO/reservation-model';

export class TableActions {

    async saveTable(req: Request, res: Response) {

        const id = req.params._id

        const name = req.body.name;
        const pplCount = req.body.pplCount;
        const reservation = req.body.reservation

        const newTable = new Table({
            name: name,
            pplCount: pplCount,
            reservation: reservation
        })

        await newTable.save();

        // const reservationById = Reservation.updateOne({_id: newTable.reservation?.prototype?.id},{$set: {table: newTable.id}})

        res.status(201).json(newTable);
    }

    async getAllTables(req: Request, res: Response) {

        const doc = await Table.find().populate("reservation")
            console.log(doc);
            res.status(200).json(doc);
        
    }

    async getTable(req: Request, res: Response){
        const id = req.params.id;
        const table = await Table.findOne({ _id: id});

        res.status(201).json(table);
    }

//     async getAllFreeTables(req: Request, res: Response) {

//         const doc = Table.find({}, (err: any, doc: any) => {

//         let array: Object[] = [];

//         doc.forEach((free: any) => {
//             if(free.taken == false){
//                 array.push(free);
//             }
//             // console.log(free.taken, free.name)
//         })
//         res.status(200).json(array);
//     })
// }

        // const collection = await Table.find({ pplCount: false})

        // let array: Object[] = [];

        // collection
        //     .forEach((element) => {
        //     if(element.pplCount >= req.body.pplCount) {
        //         array.push(element)
        //     }
        // })
        //     res.status(201).json(array);
        // }


    // async getAllTakenTables(req: Request, res: Response) {

    //     const doc = Table.find({}, (err: any, doc: any) => {

    //         let array: Object[] = [];
    
    //         doc.forEach((taken: any) => {
    //             if(taken.taken == true){
    //                 array.push(taken);
    //             }
    //             // console.log(free.taken, free.name)
    //         })
    //         res.status(200).json(array);
    //     })
    // }

    async updateTable(req: Request, res: Response) {
        const id = req.params.id;

        const name = req.body.name;
        const pplCount = req.body.pplCount;
        // const taken = req.body.taken;

        const table = await Table.findOne({ _id: id })

        if(table) {
            table.name = name;
            table.pplCount = pplCount;
            // table.taken = taken;
            await table.save();
            res.status(201).json(table);
        }
    }

    async deleteTable(req: Request, res: Response) {
        
        const id = req.params.id;
        await Table.deleteOne({ _id: id});

        res.sendStatus(204);
    }
}

module.exports = new TableActions();