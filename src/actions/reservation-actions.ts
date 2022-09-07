import { ObjectID } from 'bson';
import express from 'express'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { EmitFlags } from 'typescript'
import { Reservation } from '../db/DTO/reservation-model';
import { Table } from '../db/DTO/table-model';
import { ObjectId } from 'mongodb';

export class ReservationActions {

    async saveReservation(req: Request, res: Response) {

        const id = req.params.id

        const table = req.body.table;
        const start = req.body.start;
        const end = req.body.end;
        const client = req.body.client;

        const newReservation = new Reservation ({
            table: table,
            start: start,
            end: end,
            client: client
        })

        await newReservation.save();
        res.status(201).json(newReservation);
        
    }

    async getAllReservations(req: Request, res: Response) {
        const reservations = await  Reservation.find().populate("Table");
        console.log("All resrvations", reservations);
    }
}

module.exports = new ReservationActions();