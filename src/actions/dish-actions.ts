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
            products: products,
            price: price,
            category: category
        })

        await newDish.save();

        const productsById = Product.updateOne({_id: newDish.products?.id}, {$set:{dish: newDish.id}})

        res.status(201).json(newDish);
    }

    async getAllDishes(req: Request, res: Response) {

        // const productPromise= Product.paginate({
        //     limit: req.query.per_page || 2,
        //     previous: req.query.previous || null,
        //     next: req.query.next || null
        // })

        const doc = await Dish.find().populate("products")
            console.log(doc);
            return res.status(200).json(doc);

    }

    async getDish(req: Request, res: Response) {

        const id = req.params.id;
        const dish = await Dish.findOne({ _id:id })

        res.status(200).json(dish);
    }

    async updateDish(req: Request, res: Response) {

        const id = req.params.id;

        const name = req.body.name;
        const products = req.body.products;
        const price = req.body.price;
        const category = req.body.category;

        const dish = await Dish.findOne({ _id: id });

        if(dish) {
            dish.name = name;
            dish.products = products;
            dish.price = price;
            dish.category = category;
            await dish.save();
            res.status(201).json(dish);
        }
    }

    async deleteDish(req: Request, res: Response) {

        const id = req.params.id;
        await Dish.deleteOne({ _id: id });

        res.sendStatus(204);
    }
}

module.exports = new DishActions();