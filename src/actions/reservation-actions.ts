import express from 'express'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { EmitFlags } from 'typescript'
import { Reservation } from '../db/DTO/reservation-model';
import { Table } from '../db/DTO/table-model';

export class ReservationActions {

    async saveReservation(req: Request, res: Response) {

        const table = req.body.table;
        const start = req.body.start;
        const end = req.body.end;
        const client = req.body.client;

        const newReservation = new Reservation ({
            table: [
                {name: table.name},
                {pplCount: table.pplCount},
                {status: table.status}
            ],
            start: start,
            end: end,
            client: client
        })

        await newReservation.save();
        res.status(201).json(newReservation);
    }

    async getAllReservations(req: Request, res: Response) {

        const doc = Reservation.find({}, (err: any, doc: any) => {
            console.log(doc);
            res.status(201).json(doc);
        });
    }
}

module.exports = new ReservationActions();