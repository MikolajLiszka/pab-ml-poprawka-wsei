import express from 'express'
import {Request, Response} from 'express'
import mongoose from "mongoose";
import { EmitFlags } from 'typescript';
import { Restaurant } from '../db/DTO/restaurant-model'

export class RestaurantActions {

    async saveRestaurant(req: Request, res: Response) {

        const name  = req.body.name;
        const adress  = req.body.adress;
        const phoneNum  = req.body.phoneNum;
        const nipNum  = req.body.nipNum;
        const email  = req.body.email;
        const website  = req.body.website;
        
        const newRestaurant = new Restaurant({
            name: name,
            adress: adress,
            phoneNum: phoneNum,
            nipNum: nipNum,
            email: email,
            website: website
        });

        await newRestaurant.save();

        res.status(201).json(newRestaurant);
    }

    async getAllRestaurants(req: Request, res: Response) {
        
        const doc = Restaurant.find({}, (err: any, doc: any) => {
            console.log(doc);
            res.status(200).json(doc);
        });


        // res.send("getAllRestaurants");
    }

    async getRestaurant(req: Request, res: Response) {

        const id = req.params.id;
        const restaurant =  await Restaurant.findOne({ _id: id });

        res.status(200).json(restaurant);
    }

    async updateRestaurant(req: Request, res: Response) {
        const {adress, name} = req.body
        const id = req.params.id;
      
        const phoneNum  = req.body.phoneNum;
        const nipNum  = req.body.nipNum;
        const email  = req.body.email;
        const website  = req.body.website;
        
        const restaurant = await Restaurant.findOne({ _id: id });

        if(restaurant) {
            restaurant.name = name;
            restaurant.adress = adress;
            restaurant.phoneNum = phoneNum;
            restaurant.nipNum = nipNum;
            restaurant.email = email;
            restaurant.website = website;
            await restaurant.save();
            res.status(201).json(restaurant);
        }

    }

    async deleteRestaurant(req: Request, res: Response) {

        const id = req.params.id;
        await Restaurant.deleteOne({ _id:id });


        res.sendStatus(204);
    }
}

module.exports = new RestaurantActions();
