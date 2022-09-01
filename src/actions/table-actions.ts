import express from 'express'
import {Request, Response} from 'express'
import { Db } from 'mongodb';
import mongoose from 'mongoose'
import { Restaurant } from '../db/DTO/restaurant-model';
import { Table } from '../db/DTO/table-model'

export class TableActions {

    async saveTable(req: Request, res: Response) {

        const name = req.body.name;
        const pplCount = req.body.pplCount;
        const status = req.body.status

        const newTable = new Table({
            name: name,
            pplCount: pplCount,
            status: status
        })

        await newTable.save();

        res.status(201).json(newTable);
    }

    async getAllTables(req: Request, res: Response) {

        const doc = Table.find({}, (err: any, doc: any) => {
            console.log(doc);
            res.status(200).json(doc);
        })
    }

    async getTable(req: Request, res: Response){
        const id = req.params.id;
        const table = await Table.findOne({ _id: id});

        res.status(201).json(table);
    }

    async getAllFreeTables(req: Request, res: Response) {

        const freeTables = Table.find({}, (err: any, freeTables: any) => {
            const status = req.body.status;

        })
    }

    async updateTable(req: Request, res: Response) {
        const id = req.params.id;

        const name = req.body.name;
        const pplCount = req.body.pplCount;
        const status = req.body.status;

        const table = await Table.findOne({ _id: id })

        if(table) {
            table.name = name;
            table.pplCount = pplCount;
            table.status = status;
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