import express, { response } from 'express'
import {Request, Response} from 'express'
import mongoose from "mongoose";
import { stringify } from 'querystring';
import { Product } from '../db/DTO/product-model'

export class ProductActions {
    async saveProduct(req: Request, res: Response) {

        const name = req.body.name;
        const price = req.body.price;
        const count = req.body.count;
        const category = req.body.category;

        const newProduct = new Product({
            name: name,
            price: price,
            count: count,
            category: category
        });

        await newProduct.save();

        res.status(201).json(newProduct);
    }

    async getAllProducts(req: Request, res: Response) {

        // const productPromise= Product.paginate({
        //     limit: req.query.per_page || 2,
        //     previous: req.query.previous || null,
        //     next: req.query.next || null
        // })

        const doc = await Product.find()
            console.log(doc);
            return res.status(200).json(doc);

    }

    async getProduct(req: Request, res: Response) {

        const id = req.params.id;

        const product = await Product.findOne({ _id:id });

        res.status(200).json(product);
    }

    // async searchProduct(req: Request, res: Response) {
    //     const match = {}

    //     if(req.query.category) {
    //         match.category = req.body.category = 'Warzywa'
    //     }
    // }

    async updateProduct(req: Request, res: Response) {
        
        const id = req.params.id;
        const name = req.body.name;
        const price = req.body.price;
        const count = req.body.count;
        const category = req.body.category;

        const product = await Product.findOne({ _id: id});

        if(product) {
            product.name = name;
            product.price = price;
            product.count = count;
            product.category = category;
            await product.save();
            res.status(201).json(product)
        }
    }

    async deleteProduct(req: Request, res: Response) {

        const id = req.params.id;
        await Product.deleteOne({ _id : id });

        res.sendStatus(204);
    }

}

module.exports = new ProductActions();
