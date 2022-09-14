import { ObjectID } from 'bson';
import express from 'express'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { EmitFlags } from 'typescript'
import { Reservation } from '../db/DTO/reservation-model';
import { Table } from '../db/DTO/table-model';
import { ObjectId } from 'mongodb';
import { TableActions } from './table-actions';

export class ReservationActions {

    async saveReservation(req: Request, res: Response) {
        const id = req.params.id;
    
        const table = req.body.table;
        const start = req.body.start;
        const end = req.body.end;
        const client = req.body.client;
    
        const newReservation = new Reservation({
          table: table,
          start: start,
          end: end,
          client: client,
        });
    
        await newReservation.save();
    
        const tableById = Table.updateOne({_id: newReservation.table?.id},{$set:{reservation: newReservation.id}})
        res.status(201).json(newReservation);
      }

    async getAllReservations(req: Request, res: Response) {
        const reservations = await Reservation.find().populate("table")
        console.log("All resrvations", reservations);

        res.status(201).json(reservations);
    }

    async getReservation(req: Request, res: Response){

      const id = req.params.id;

      const reservation = await Reservation.findOne({_id:id}).populate("table")

      res.status(200).json(reservation);
    }

    async updateReservation(req: Request, res: Response) {

      const id = req.params.id;
      const table = req.body.table;
      const start = req.body.start;
      const end = req.body.end;
      const client = req.body.client;

      const reservation = await Reservation.findOne({_id: id}).populate("table");

      if(reservation) {
        reservation.table = table;
        reservation.start = start;
        reservation.end = end;
        reservation.client = client;
        await reservation.save();
        res.status(201).json(reservation);
      }
    }

    async deleteReservation(req: Request, res: Response) {
      const id = req.params.id;
      await Reservation.deleteOne({ _id:id });

      res.sendStatus(204);  
    }
}

module.exports = new ReservationActions();