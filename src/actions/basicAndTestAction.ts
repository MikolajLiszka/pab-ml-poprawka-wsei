import express from 'express'
import {Request, Response} from 'express'
import mongoose from "mongoose";
import { Restaurant } from '../db/DTO/restaurant-model'

module.exports = {
    // testTH(req: Request, res: Response) {
    //     res.send("siema")
    // }

    testTH(req: Request, res: Response) {
        const newRestaurant = new Restaurant({
            name: 'bimbap',
            adress: 'kowalska 7',
            phoneNum: 909090902,
            nipNum: 5647474,
            email: 'fhebfe@unfe.pl',
            website: 'bimbap.pl'
        })
        newRestaurant.save().then(() => {
            console.log("restaurant saved")
        });

        res.send("siema")
    }
}
