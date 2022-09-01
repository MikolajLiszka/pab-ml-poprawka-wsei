import express from 'express'
import {Request, Response} from 'express'
import mongoose from "mongoose";
import { EmitFlags } from 'typescript';
import { Dish } from '../db/DTO/dish-model'
import { Product } from '../db/DTO/product-model';

export class DishActions {

    async saveDish(req: Request, res: Response) {

        const name = req.body.name;
        const products = req.body.products;
        const price = req.body.price;
        const category = req.body.category;

    //     Product.find({}).populate('Dish')
    // .exec(function (error, result) {
    //     return callback(null, null);
    // });

        const newDish = new Dish ({
            name: name,
            products : [
                {name: products.name},
                {price: products.price}
            ],
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