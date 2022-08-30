import express from 'express'
import {Request, Response} from 'express'
import mongoose from "mongoose";
import { EmitFlags } from 'typescript';
import { Dish } from '../db/DTO/dish-model'

export class DishActions {

    async saveDish(req: Request, res: Response) {

        const name = req.body.name;
        const product = req.body.product;
        const price = req.body.price;
        const category = req.body.category;

        const newDish = new Dish ({
            name: name,
            product: product,
            price: price,
            category: category
        })

        await newDish.save();

        res.status(201).json(newDish);
    }

    async getAllDishes(req:Request, res: Response) {

        const doc = Dish.find({}, (err: any, doc: any) => {
            console.log(doc);
            res.status(200).json(doc);
        })
    }
}

module.exports = new DishActions();