import { ObjectID } from 'bson';
import express from 'express'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { EmitFlags } from 'typescript'
import { Reservation } from '../db/DTO/reservation-model';
import { Table } from '../db/DTO/table-model';

export class ReservationActions {

    async saveReservation(req: Request, res: Response) {
        const { tableId } = req.params;
        const newReservation = new Reservation (req.body);
        console.log('new res', newReservation);
        await newReservation.save();
        
    }

    async getAllReservations(req: Request, res: Response) {
        const { tableId } = req.params;
        const reservation = await Reservation.findById(tableId);
        console.log('Reservation', reservation);
    }
}

module.exports = new ReservationActions();